## Thermostat
See a displayed temperature and press buttons to change the temperature. Also find out the current outdoor temperature in a city of your choosing.

### Description
This was a mini project created for week 6 of the 12 week [Makers Academy](https://makers.tech) coding bootcamp. It was written using pair programming by me and [Katy Day](https://github.com/day-katy). There were several goals:
* practise vanilla JavaScript
* practise the Jasmine testing library
* practise HTML and CSS
* learn how JavaScript combines with HTML to make webpages
* learn jQuery
* use APIs with jQuery
  
We were given these specifications for the logic:  
```
Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default but it can also be turned off
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
```
We created a page to link HTML elements to the Thermostat functionality using jQuery.  
To find the current temperature in London or another chosen city, we used the free [OpenWeather API](https://openweathermap.org/api).  

### Installation and Usage
* Clone this repo
* Navigate into `thermostat/jasmine-standalone-3.6.0`

#### Set up API key
* Go to [OpenWeather API](https://openweathermap.org/api) and sign up for a free key
* Wait for the key to arrive (might not be instant)
* Create a file called `config.js`
* In `config.js`, write `API_KEY = 'your API key goes here'` and save the file
* This saves API_KEY as a global variable so it can be accessed in the other files
* Not ideal but this is a simple playground app

#### Running the app
* Open `index.html` in a browser

#### Running the tests
* Open `SpecRunner.html` in a browser
  
### Known Issues
The weather display doesn't give the country with the city, so it can be confusing. For example, entering "Birmingham" returns the weather for Birmingham, Alabama, USA rather than Birmingham, UK.
