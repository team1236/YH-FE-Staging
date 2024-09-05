function shuffleArray(array, filters) {
  let filteredArray = [...array];
  let star_categoty = [];
  let is_star = false;
  let is_any = false;

  filters &&
    filters?.forEach((filter) => {
      const { filterType, option } = filter;

      if (filterType === "price" && option === "Low to High") {
        is_any = true;
        filteredArray = filteredArray.sort(
          (a, b) => a.hotelPrice.basePrice - b.hotelPrice.basePrice
        );
      } else if (filterType === "price" && option === "High to Low") {
        is_any = true;
        filteredArray = filteredArray.sort(
          (a, b) => b.hotelPrice.basePrice - a.hotelPrice.basePrice
        );
      } else if (filterType === "star_category") {
        is_star = true;
        is_any = true;
        const data = option?.split(" ")[0];
        const Arr = filteredArray.filter((hotel) =>
          hotel.starRating === 0
            ? Number(hotel.starRating) + 1 === Number(data)
            : Number(hotel.starRating) === Number(data)
        );
        star_categoty.push(...Arr);
      } else if (filterType === "location") {
        is_any = true;
        filteredArray = filteredArray.filter(
          (hotel) => option === hotel.hotelName || option === hotel?.address[0]
        );
      }
    });
  if (!is_any) {
    if (filters.length === 0) {
      for (let i = filteredArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredArray[i], filteredArray[j]] = [
          filteredArray[j],
          filteredArray[i],
        ];
      }
    }
  }
  return is_star ? star_categoty : filteredArray;
}

export default shuffleArray;
