
export function filterData(searchText, restaurents) {
    return restaurents.filter((restaurent) => {
      return restaurent?.info?.name
        ?.toLowerCase()
        ?.includes(searchText?.toLowerCase());
    });
  }