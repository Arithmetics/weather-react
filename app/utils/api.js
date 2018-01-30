async function fetchCurrentWeather(location){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=cd5636cbefe61df414ec932089509492`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchFiveDayForecast(location){
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=cd5636cbefe61df414ec932089509492`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function test(){
  console.log("success");
}


export default fetchFiveDayForecast;
