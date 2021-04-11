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

export const textIncludesSearchString = (
  textToSearch: string,
  searchString: string
) => {
  return textToSearch
    ? textToSearch.toLowerCase().includes(searchString.toLowerCase())
    : false;
};

export const didSearchList = (
  searchString: string,
  itemsToSearchList: any[],
  compare: (
    item: any,
    textIncludesSearchString: (key: string) => boolean,
    searchStringItem: string
  ) => boolean
) => {
  const splitSearchString = searchString
    .toLowerCase()
    .split(",")
    .filter((item) => item.trim().length > 0);

  return itemsToSearchList.filter(
    (item) =>
      splitSearchString.filter((searchStringItem) =>
        compare(
          item,
          (textString) =>
            textIncludesSearchString(textString, searchStringItem.trim()),
          searchStringItem.trim()
        )
      ).length > 0
  );
};
