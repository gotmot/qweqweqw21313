function getUniqueCities(requests) {
  if (!Array.isArray(requests)) {
    return [];
  }

  return [...new Set(requests)];
}

function countCities(requests) {
  if (!Array.isArray(requests)) {
    return {};
  }

  const counts = {};

  for (const city of requests) {

    if (typeof city !== 'string' || city.trim() === '') {
      continue;
    }
    counts[city] = (counts[city] || 0) + 1;
  }

  return counts;
}

function sortCitiesByPopularity(cityCounts) {

  if (typeof cityCounts !== 'object' || cityCounts === null || Array.isArray(cityCounts)) {
    return [];
  }

  return Object.keys(cityCounts).sort((a, b) => {
    const countA = cityCounts[a];
    const countB = cityCounts[b];

    if (countB !== countA) {
      return countB - countA;
    }

    return a.localeCompare(b);
  });
}

const requests = [
  "Paris",
  "Rome",
  "Paris",
  "Berlin",
  "Berlin",
  "Rome",
  "Paris"
];

const uniqueCities = getUniqueCities(requests);
console.log("Уникальные города:", uniqueCities); 

const cityCounts = countCities(requests);
console.log("Количество упоминаний городов:", cityCounts); 

const sortedCities = sortCitiesByPopularity(cityCounts);
console.log("Города по популярности:", sortedCities); 

const emptyRequests = [];
console.log("Уникальные города (пустой массив):", getUniqueCities(emptyRequests)); 

console.log("Количество упоминаний (пустой массив):", countCities(emptyRequests)); 

console.log("Сортировка (пустой объект):", sortCitiesByPopularity({})); 

