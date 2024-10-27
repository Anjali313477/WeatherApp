const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd590697bbdmsh3405d4c3fb5ebbbp1dec5fjsn3f9174e2555d',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};
async function weather(city) {
  const url = 'https://open-weather13.p.rapidapi.com/city/${city}/EN';
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    document.querySelector('.city').textContent=result.name;
    document.querySelector('.temp').textContent=`${result.main.temp}°C`;
    document.querySelector('.humidity').textContent=`${result.main.humidity}%`;
    document.querySelector('.wind').textContent=`${result.wind.speed}m/s`;
    console.log(result)
  } catch (error) {
    console.error(error);
  }
}
let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
  const city=document.querySelector('input').value;
  weather(city)
})

