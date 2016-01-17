#Feed Reader Testing

##Running This Project
To run this project, download the files to your computer and open `index.html` in your browser. The app and the results of the Jasmine tests will load on the page. Jasmine will report successful and failed tests at the bottom of the page.

##The Tests
The following tests test existing features:
* RSS Feeds: are defined
* RSS Feeds: have valid URL defined
* RSS Feeds: have valid name defined
* The menu: is hidden by default
* The menu: changes visibility when icon is clicked
* Initial Entries: have at least one entry
* New Feed Selection: has changed the content

The following tests test future features that have not yet been developed (test-driven development):
* Load more button: has loaded more entries
  * Feature description: A "Load More" button should be added below the existing entries. When clicked, more entries will load above the button and the button will move down to the bottom of the extended entry list.
* Header title: links to feed home page
  * Feature description: The header title should have a link inside the `h1` tags that, when clicked, takes the user to the feed's home page.

##About
This project is part of Udacity's Front-End Web Developer Nanodegree. It focuses on testing using the Jasmine testing framework.