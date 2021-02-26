export const sortData = data => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1; //False or -1
    } else {
      return 1; //True or 1
    }
  });
  return sortedData;
};

export const substr = str => {
  return str.substring(0, 14);
};
