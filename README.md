## Thermostat

See a displayed temperature and press buttons to change the temperature. Also find out the current outdoor temperature in a city of your choosing.

### Description

This was a mini project created for week 6 of the 12 week [Makers Academy](https://makers.tech) coding bootcamp. It was written using pair programming by me and [Katy Day](https://github.com/day-katy). There were several goals:

-   practise vanilla JavaScript
-   practise the Jasmine testing library
-   practise HTML and CSS
-   learn how JavaScript combines with HTML to make webpages
-   learn jQuery
-   use APIs with jQuery

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

We wrote [these user stories](userStories.md) based on the specifications.

For the interface, we were asked to create a page to link HTML elements to the Thermostat functionality using jQuery. To practise API calls, we then had to display the current temperature in London or another chosen city, using the free [OpenWeather API](https://openweathermap.org/api).

The project is hosted with GitHub Pages and can be found [here](http://mscwilson.github.io/thermostat/). It looks like this:  
![default temperature and London result](/images/london.png)
![low temperature and Berlin result](/images/berlin.png)

### Installation and Usage

-   Clone this repo
-   Navigate into the cloned folder
-   Open `index.html` in a browser
-   Play with the Thermostat controls and find out the temperature in different cities
-   To run the tests, open `SpecRunner.html` in a browser

### Known Issues

An API key is required to use the [OpenWeather API](https://openweathermap.org/api). It's best practise to keep API keys secret. However, here I decided to expose the API key directly in my code. My reasoning:

-   I previously hid the API key by setting it as a variable in a file that was listed in my .gitignore. This sort of works locally; the key is exposed during the network requests, but it isn't uploaded to GitHub and so stays private.
-   I wanted to publish through GitHub Pages, so it was a problem that GitHub didn't have the key.
-   It's a free API key which anyone can sign up for with just an email address.
-   My page will not have high traffic.
-   It seemed like overkill for this project to write server-side code to save the key as environment variable so that it could stay hidden.

The weather display doesn't give the country with the city, so the results can be confusing. For example, entering "Birmingham" returns the weather for Birmingham, Alabama, USA rather than Birmingham, UK.
