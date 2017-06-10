/*```Instructions:

Implement the logic for the UserSearch component. As with the CLI component, you should start with pseudocode.

This component requires you to use the weather-js NPM package. Take a moment to research and experiment with the API, documented here: https://www.npmjs.com/package/weather-js

Create a UserSearch constructor. It should accept a user's name and location as arguments, and store the value of Date.now() in a date property.

Objects returned by the UserSearch constructor should also have a getWeather function, which should log or return the weather in the user's location.

When you finish, return to the code for your CLI and incorporate your completed UserSearch component.
```

[11:39] 
 ```./UserSearch.js
----------------
- it exports a constructor function that takes in arguments/parameters of username and location
- it uses the fs module to write to ./log.txt an entry for this request
- it uses the weather-js module to make an external API request to get weather information about
  that location```*/

// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

// Creates a UserSearch Constructor
var UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function() {

    weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
      if (err) console.log(err);

      console.log(JSON.stringify(result, null, 2));
    });

  };

};

module.exports = UserSearch;
