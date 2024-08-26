function FlightshuffleArray(array, filters) {
  let filteredArray = [...array];

  if (filters === "price") {
    return (filteredArray = filteredArray.sort((a, b) => a.price - b.price));
  } else {
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

export default FlightshuffleArray;
