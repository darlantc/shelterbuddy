import AnimalPhotoEntity from "../../entities/AnimalPhotoEntity";
import useIsFetchingPromise from "../../hooks/useIsFetchingPromise";
import { useUseCasesContext } from "../../useCases/UseCasesContext";

import PlaceholderImage from "../../assets/images/placeholder.png";
import useDidMount from "../../hooks/useDidMount";

const AnimalPhoto = ({ id, alt }: { id: number; alt: string }) => {
  const { requestAnimalPhotoUseCase } = useUseCasesContext()!;
  const [isFetching, photo, refresh] = useIsFetchingPromise<AnimalPhotoEntity>(
    async () => requestAnimalPhotoUseCase.requestAnimalPhoto(id)
  );

  useDidMount(refresh);

  let image = PlaceholderImage;
  if (!isFetching && photo) {
    const baseUrl = "https://shelterbuddy-us-uat.shelterbuddy.io/";
    image = `${baseUrl}${photo.thumbnail}`;
  }

  return <img src={image} alt={alt} className="thumbnail-photo" />;
};

export default AnimalPhoto;
