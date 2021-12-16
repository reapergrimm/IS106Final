# Exam 1


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Instructions

### Computer Solution Problem (250 points)

1. Written component 25pts (~ 25 minutes)
2. GITFlow component 25pts (~ 10 minutes)
3. Code component 50pts (~ 115 minutes)

You can use any resources including  your books, notes, and memos for completing this part of
the test; however, you cannot ask, share, or consult with anyone in the world. You cannot use
the Internet for any searches or file sharing. It must be your own work. Any violation will
automatically issue a zero on the Exam.

GUI for the application is fully provided for you and you should not have to write any CSS or new HTML elements. Pull the application source code as specified according to the GITFlow section of this document. Change html of the components items and write all necessary codes and complete the application.

Push all the files onto your GITHub repo and change name of the top folder to
“IS51Test1” (corresponding to your GITHub repo) upon completion of test.

Make sure the computer, VS Code, and the files / application is all working properly with no errors or warnings.

### Code Component - Best Part Sales Project

You are hired to create a Web application to computerize Best Part sales process. The application should have a structure that stores the following part data: PID (a string), Description (a string), Price (a number) and Inventory (an number). The company currently carries only three parts as shown in the table below and the application should use an array of three custom objects (interface). If you don’t know how to use an array of three object variables, you can use  array of objects instead with 5 points penalty.

#### PID Description Price Inventory
2. 1 Hot Dog 5.00 2
3. 2 Hamberger 6.00 1
4. 3 Pizza 12.00 2

The data above is located in ```assets/orders.json``` for reference. 

<!-- Your application should allow the user to enter data for each item (quantity).  -->
<!-- When “Load Saved Items” button is clicked, use Angular’s HTTP module to fetch the json data from the orders.json file and display the content on the table. -->
<!-- PID, Description, Price and quantity should be displayed inside text input. -->
<!-- The user will enter any quantity to order for each item. -->
When “Submit” button is clicked, calculate the total order amount plus tax (10 % or .10) and display the result to the user in a flex-modal or alert message.

<!-- Help button displays a message, ```“This application is designed by <your name>. (C) 2018”``` in a “app-flex-modal” component (provided) or use an alert box less points. -->

<!-- When “Display Saved Items” button is clicked, the item is read from “orders.json” file using Angular’s HTTP module. -->
<!-- Then the order information should be displayed as shown in the figure
below. -->
<!-- Then, the user enters his/her name and any quantity to order for each item (Note: the format of name input ->; Lastname, Firstname; ex: Phan, Lucas). (comma with space between last name and first name)  -->

<!-- When “Clear” button is clicked, the Order form should be cleared (value set to null).  -->

When “Submit” button is clicked, calculate the subtotal, tax amount and total for the invoice (by calling a compute function).
Display a success message to the user to indicate that the order was completed successfully.
Perform string splicing to transform “LastName, FirstName” to “First Name Last Name” and the success message should read: “Thank you <First Name> <Last Name>. Here is your order details!”. (See screenshots)

### Validation (see screenshots below)

1. Name input field not specified.
2. Name not containing a “, ”.
3. Input values within table null values.
4. Subtotal, tax amount and invoice total calculation

Show the corresponding error message using the “app-flex-modal”. Alert message could be use for reduce points.

### Add Additional Items

The three buttons -> “Add Hot Dog, Add Hamberger and Add Pizza", when click adds the corresponding item to the orders list with all fields (pid, description, price and quantity) matching to the corresponding item. Quantity however will be 1.



### Delete Item

When the delete button is pressed, delete the corresponding item from the list.


### Orders Page (before loading saved items from orders.json)
![alt text](./img/1.png)

<!-- ### Orders Page (after loading saved items from orders.json)
![alt text](./img/2.png) -->

<!-- ### Orders Page (after clear button pressed)
![alt text](./img/3.png) -->



<!-- ### Help Modal (show on Help button pressed)
![alt text](./img/4.png) -->

### Validation Errors

![alt text](./img/5.png)

![alt text](./img/6.png)

![alt text](./img/7.png)

![alt text](./img/8.png)


## Points Breakdown

<!-- 1. Launch flex modal or alert (.5pts reduced) showing about text 2.5pts -->
<!-- 2. convert name from <Last Name>, <First Name> to <First Name> <Last Name>  -->
and display text 2.5 pts
<!-- 3. Calculate sub total, tax amount and total 7.5pts -->
4. perform input validation (use alert - 1pts reduced)
  ```
  (use alert - 1pts reduced for each of the four validation)
<!-- 1. Name input field not specified. 2.5pts -->
<!-- 2. Name not containing a “, ”. 2.5pts -->
3. Input values within table null values. 2.5pts
4. Subtotal, tax amount and invoice total calculation error 2.5pts
  ```
<!-- 5. Clear the orders form 2.5pts -->
<!-- 6. Add items 'Hot Dog', 'Hamberger' and 'Pizza' to list when corresponding button is clicked 7.5pts -->
<!-- 7. delete line item (order) when delete button is click 7.5 pts -->
<!-- 8. read in the orders.json file and populate the list table with the initial orders (3) 7.5pts -->
9. Display calculated results on a flex-modal (see screenshot) 2.5 pts
