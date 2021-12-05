# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

A reflection/feedback form that allows for data from each view to be saved to a database after hitting Submit at the end.


###  How I Assembled My App

1.  As always, the first step is initialization.  Had to install dependencies.  Threw in redux logger to make my life easier.  Added my database and used the data.sql provided to get test data.

2.  I decided the first bit of functionality I'd like to tackle was routes and swapping between views.
    - Made components with functons to export to correspond to each view page: Feeling, Understanding, Support, Comment, Review, Success
    - Added their routes to the app.jsx.
    - Added the h1s from the example product to test my routes.
    - Routes working successfully.

3.  I thought to test any other functionality from here on out I should quickly add the inputs and buttons to each component.
    - Added a form with 5 radio buttons each for the first 3 views, and wired up their submit buttons to transfer to the next page.
    - To see my data in the review section, I added a table to display it.

4.  The last step was to make my POST route work.
    - Added a reducer to contain properties for each page's value that was set via state on each component.
    - Wired up a POST route on the server and on Review.jsx to work with my submission.