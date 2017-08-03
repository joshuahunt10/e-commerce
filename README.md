# React App with Dynamic Routes #
----
This project is a React App that uses Bootstrap v4 for styling.  The purpose of this project was to:
1. Create an app that uses dynamic Routes
2. Use the dynamic route to fetch data from a json data set

### Technical Successes ###
1. The three category lists are all rendered using the same component, just a different dynamic route.
2. The details pages are all made from one component just using different dynamic route to fetch new data from the json.

### Improvements to be Made ###
1. On the ItemsDetails component, I was not able to figure out how to use higher order array functions to fetch the correct data.  I used a .find and then a for loop with an if statement.  I think the for loop and if statement can be replaced by a .filter.
2. The cart is not up and running.
3. Pictures for each product need to be updated.
