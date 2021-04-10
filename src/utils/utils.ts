type MinMaxType = {
  min?: number;
  max?: number;
};

export const generateRandomInteger = (props?: MinMaxType): number => {
  const min = props?.min || 0;
  const max = props?.max || Number.MAX_SAFE_INTEGER;

  if (min > max) {
    throw new TypeError("max must be greater than min");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
