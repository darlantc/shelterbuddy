export const dynamicSortByProperty = (property: string, asc = true) => {
  const sortOrder = asc ? 1 : -1;
  return (a: any, b: any) => {
    if (!a.hasOwnProperty(property) || !b.hasOwnProperty(property)) {
      // property doesn't exist on either object
      return 0;
    }
    if (a[property] === null) {
      return 1;
    }
    if (b[property] === null) {
      return -1;
    }

    const varA =
      typeof a[property] === "string" ? a[property].toUpperCase() : a[property];
    const varB =
      typeof b[property] === "string" ? b[property].toUpperCase() : b[property];

    const result = varA < varB ? -1 : varA > varB ? 1 : 0;
    return result * sortOrder;
  };
};
