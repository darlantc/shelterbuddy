class AnimalPhotoEntity {
  thumbnail: string;
  full: string;

  constructor(thumbnail: string, full: string) {
    this.thumbnail = thumbnail;
    this.full = full;
  }

  static fromJson = (data: any): AnimalPhotoEntity | null => {
    if (data.hasOwnProperty("Photo")) {
      const photo = data.Photo;
      const thumbnail = photo.replace("/1024---n", "");
      return new AnimalPhotoEntity(thumbnail, photo);
    }

    return null;
  };
}

export default AnimalPhotoEntity;
