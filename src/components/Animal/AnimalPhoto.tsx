import AnimalPhotoEntity from "../../entities/AnimalPhotoEntity";
import useIsFetchingPromise from "../../hooks/useIsFetchingPromise";
import { useUseCasesContext } from "../../useCases/UseCasesContext";

import PlaceholderImage from "../../assets/images/placeholder.png";
import { useState, useEffect } from "react";

const AnimalPhoto = ({ id, alt }: { id: number; alt: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { requestAnimalPhotoUseCase } = useUseCasesContext()!;
  const [isFetching, photo, refresh] = useIsFetchingPromise<AnimalPhotoEntity>(
    async () => requestAnimalPhotoUseCase.requestAnimalPhoto(id)
  );

  useEffect(() => {
    setIsMounted(true);

    refresh();

    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) {
    return <div className="thumbnail-photo" />;
  }

  let image = PlaceholderImage;
  if (!isFetching && photo) {
    const baseUrl = "https://shelterbuddy-us-uat.shelterbuddy.io/";
    image = `${baseUrl}${photo.thumbnail}`;
  }

  return <img src={image} alt={alt} className="thumbnail-photo" />;
};

export default AnimalPhoto;
