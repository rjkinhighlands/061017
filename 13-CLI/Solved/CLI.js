/*Instructions:

1. Create a command line interface application using Node.js (either with inquirer or process.argv).

2. The application should lead the user to one of two pathways: an Admin View or a User View.

3. The User View should prompt the user to provide their Name and the Location they'd like weather information for. Upon completion, the User should get the weather in Fahrenheits at that location.  

4. The Admin View should simply provide an array of every user's search while also including the "date" of each search. See sample below:
  
  [{"Ahmed", "Atlanta", "10-15-16"}, {"Adri", "Newark", "10-12-16"}, {"Joe", "Omaha", "10-10-16"}]

--------------

Notes:

1. In order to complete this activity you will need to make use of:

 - The weather-js npm package.

  - Two constructors: One for "UserSearch" and one for "WeatherAdmin".

 - A third file called CLI.js, which will direct where users are directed to.

2. This activity borrows from all of the concepts we've covered this week. Pay attention to the following activities:

  - Classroom Example (11.2)

  - Weather-js Example (10.2) */

var WeatherAdmin = require("./WeatherAdmin");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var MyAdmin = new WeatherAdmin();

if (loginType === "admin") {

  MyAdmin.getData();

}

else {

  MyAdmin.newUserSearch(userName, userLocation);

}

/* TEACHER SOLUTION:

./index.js or cli.js (command line interface)
----------
- reading command line arguments
- require the necessary constructor functions for instantiation
- determining if user or admin
  - if admin, instantiate the Admin() constructor
  - if user, instantiate the UserSearch() constructor

    
    var UserSearch = require('./UserSearch.js');
    var Admin = require('./Admin.js');
    var args = process.argv;

    var targetUser = args[2]; // user or admin

switch (targetUser) {
    case "user":
        var username = args[3];
        var location = args[4];
        if (username && location) {
            new UserSearch(username, location);
        } else {
            console.log('Invalid values passed.');
        }
        break;
    case "admin":
        new Admin();
        break;
    default:
        console.log('That type of target is not supported.');
        break;
}