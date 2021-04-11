const AnimalPhoto = ({ id, alt }: { id: number; alt: string }) => {
  return (
    <img
      src="https://fakeimg.pl/250x250/"
      alt={alt}
      className="thumbnail-photo"
    />
  );
};

export default AnimalPhoto;
