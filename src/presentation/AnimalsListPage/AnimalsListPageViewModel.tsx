import AnimalEntity from "../../entities/AnimalEntity";
import useDidMount from "../../hooks/useDidMount";
import useIsFetchingPromise from "../../hooks/useIsFetchingPromise";
import { useUseCasesContext } from "../../useCases/UseCasesContext";

const AnimalsListPageViewModel = () => {
  const { requestAnimalsUseCase } = useUseCasesContext()!;
  const [isFetching, animalsList, refresh] = useIsFetchingPromise<
    AnimalEntity[]
  >(requestAnimalsUseCase.request);

  useDidMount(refresh);

  if (!animalsList) {
    return null;
  }

  return <h1>Here goes AnimalsListPageView</h1>;
};

export default AnimalsListPageViewModel;
