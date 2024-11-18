function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '58f10b6a5f7170db0d38ea10793f1f69'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Inspect the response
    const weatherInfo = document.getElementById('weatherInfo');

    if (data.main && data.weather) {
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
    } else {
      weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
    }
  })
     
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
      
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
