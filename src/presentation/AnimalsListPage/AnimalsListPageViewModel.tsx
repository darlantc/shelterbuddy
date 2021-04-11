import { useState } from "react";
import AnimalEntity from "../../entities/AnimalEntity";
import useDidMount from "../../hooks/useDidMount";
import useIsFetchingPromise from "../../hooks/useIsFetchingPromise";
import { useUseCasesContext } from "../../useCases/UseCasesContext";
import { didSearchList } from "../../utils/utils";
import AnimalsListPageView from "./AnimalsListPageView";

const AnimalsListPageViewModel = () => {
  const { requestAnimalsUseCase } = useUseCasesContext()!;
  const [isFetching, animalsList, refresh] = useIsFetchingPromise<
    AnimalEntity[]
  >(requestAnimalsUseCase.request);
  const [searchString, setSearchString] = useState("");

  useDidMount(refresh);

  if (!animalsList) {
    return null;
  }

  const filteredAnimalsList =
    searchString.length < 1
      ? animalsList
      : didSearchList(
          searchString,
          animalsList,
          (
            animal: AnimalEntity,
            textIncludesSearchString: (key: string) => boolean
          ) => {
            const matchName =
              animal.name && textIncludesSearchString(animal.name);
            const matchType = textIncludesSearchString(animal.type);
            const matchGender = textIncludesSearchString(animal.gender);
            const matchBreed = textIncludesSearchString(animal.breed);
            const matchColor = textIncludesSearchString(animal.color);

            return (
              matchName || matchType || matchGender || matchBreed || matchColor
            );
          }
        );

  return (
    <AnimalsListPageView
      isFetching={isFetching}
      animalsList={animalsList}
      filteredAnimalsList={filteredAnimalsList}
      searchString={searchString}
      setSearchString={setSearchString}
    />
  );
};

export default AnimalsListPageViewModel;
