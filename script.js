// Pseudo code for out To Do App

// 1) Save the values/DOM elements we will need to interact with

// let's query the DOM for the form element and save it within the variable

    // Let's query the DOM for the input element and save it within a variable
// *EVENT is when ANYTHING HAPPENS on the page

// 2) Attach an event listener to the form element
    // pass in 2 arguments to the event listener method
        // a) event you are listening for
        // b) the callbackfunction which will hold the logic we wish to run ONCE the even "is heard" (AKA occurs on the page)

    // save the text value from the input within a variable

    // IF the user submits a todo (check whether the value of the input is NOT empty) then:
        // create an li element
            // add a font awesome icon to the element
            // add the text from the todo that the user entered to the li
        // append the li element to the ul element

    // ELSE alert the user to please submit a valid to do

    // 3) how do we track when the task is done?