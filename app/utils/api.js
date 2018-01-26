async function fetchCityForecast(location){
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=cd5636cbefe61df414ec932089509492`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


export default fetchCityForecast;
