Instructions:

As a best practice, sketch the architecture of your application before you start writing code.

For this exercise, start by describing what your application does. Do this in a bullet list.

Next, decide how you might divvy up these responsibilities. Would you write a single module that handles all of them? Would you write one module for each bullet list? Something else? Be sure to justify your decision.

Finally, draw a diagram describing the relationships between your modules. Each arrow should describe a dependency—that is, an arrow from module A to module B indicates that module A uses module B.

# Weather Admin Architecture

### Components

* CLI (Command Line Interface)

  * The CLI determines whether the user is an **admin** or a **user**, and configures the application accordingly.

* WeatherAdmin

  * The WeatherAdmin component encapsulates two functions.

    * `getData`, which retrieves the list of all searches users have made thusfar; and

    * `newUserSearch`, which runs a search on behalf of a user.

* UserSearch

  * The UserSearch component allows users to search for the weather in a given location.

* log.txt

  * This is simply a file we'll use to keep track of all searches users have run. We'll use this in place of a database.


### Teacher Example

What will my directory structure and file names look like?

What will those individual files be responsible for doing?

Which files will require which other files?

Which files will export (module.exports) functions to be required in other files?

What external packages do we need?

What internal node modules will we use?

./index.js or cli.js (command line interface)
----------
- reading command line arguments
- require the necessary constructor functions for instantiation
- determining if user or admin
  - if admin, instantiate the Admin() constructor
  - if user, instantiate the UserSearch() constructor

./UserSearch.js
----------------
- it exports a constructor function that takes in arguments/parameters of username and location
- it uses the fs module to write to ./log.txt an entry for this request
- it uses the weather-js module to make an external API request to get weather information about
  that location

  ./Admin.js
-------------
- it exports a constructor function that takes in no arguments/parameters
- it uses the filesystem (fs) module to read ./log.txt
- it console.logs the values in the ./log.txt file