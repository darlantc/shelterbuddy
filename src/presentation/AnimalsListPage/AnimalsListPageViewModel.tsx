import { useState } from "react";
import AnimalEntity from "../../entities/AnimalEntity";
import useDidMount from "../../hooks/useDidMount";
import useIsFetchingPromise from "../../hooks/useIsFetchingPromise";
import { useUseCasesContext } from "../../useCases/UseCasesContext";
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

  return (
    <AnimalsListPageView
      isFetching={isFetching}
      animalsList={animalsList}
      searchString={searchString}
      setSearchString={setSearchString}
    />
  );
};

export default AnimalsListPageViewModel;
