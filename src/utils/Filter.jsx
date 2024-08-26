function shuffleArray(array, filters) {
  let filteredArray = [...array];

  filters && filters?.forEach((filter) => {
    const { filterType, option } = filter;

    if (filterType === "price" && option === "Low to High") {
      filteredArray = filteredArray.sort(
        (a, b) => a.hotelPrice.basePrice - b.hotelPrice.basePrice
      );
    } else if (filterType === "price" && option === "High to Low") {
      filteredArray = filteredArray.sort(
        (a, b) => b.hotelPrice.basePrice - a.hotelPrice.basePrice
      );
    } else if (filterType === "star_category") {
      const data = option?.split(" ")[0];
      console.log("+++++", Number(data));
      filteredArray = filteredArray.filter((hotel) =>
        hotel.starRating === 0
          ? Number(hotel.starRating) + 1 === Number(data)
          : Number(hotel.starRating) === Number(data)
      );
    }
  });
  if (filters.length === 0) {
    for (let i = filteredArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredArray[i], filteredArray[j]] = [
        filteredArray[j],
        filteredArray[i],
      ];
    }
  }
  return filteredArray;
}

export default shuffleArray;
