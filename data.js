const zipCode = document.querySelector("#zip-code")
const countryCode = document.querySelector("#country-code")
const apiKey = "a6bcce15ec8fbd3ecadcc34e2b5f90f9"
const search = document.querySelector("#container-form")
const weatherForecastF = document.querySelector("#weatherForecastF")
const cloudForecast = document.querySelector("#cloudForecast")
const icon = document.querySelector(".weatherForecast")
const backgroundImageSize = document.getElementById("#container")


search.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode.value},${countryCode.value}&appid=${apiKey}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const zip = data.zip
            const country = data.country
            const lat = data.lat
            const lon = data.lon

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
                .then((response) => {
                    return response.json();

                })
                .then(function (data) {
                    const cloud = data.weather[0].description
                    const tempFahrenheit = Math.round(data.main.temp)
                    console.log(data.weather)
                    console.log(data)
                    cloudForecast.innerText = cloud
                    weatherForecastF.innerText = tempFahrenheit

                    if (cloud == "clear sky") {
                        document.body.style.backgroundImage = 'url("Clear.jpg")'
                    }
                    else if (cloud == "broken clouds") {
                        document.body.style.backgroundImage = 'url("BrokenClouds.jpg")'
                    }
                    else if (cloud == "mist") {
                        document.body.style.backgroundImage = 'url("Mist.jpg")'
                    }
                    else if (cloud == "overcast clouds") {
                        document.body.style.backgroundImage = 'url("Overcast.jpg")'
                    }
                    else if (cloud == "scattered clouds") {
                        document.body.style.backgroundImage = 'url("ScatteredClouds.jpg")'
                    }
                    // } else if (categoryValue == 'Rain') {
                    //     document.body.style.backgroundImage = 'url("../pictures/rain.jpg")';
                    // }
                })

        })



})


