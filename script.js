// Pseudo code for out To Do App

// 1) Save the values/DOM elements we will need to interact with

// let's query the DOM for the form element and save it within the variable (so we can HOLD ONTO VALUES that we can reference, without variables we cannot hold the info. Right half is returning us data and we store in left side as a variable)
    const formElement = document.querySelector('form');
        // double check whether anything was saved aka returned within your variable
        // console.log(formElement);

    // Let's query the DOM for the input element and save it within a variable
    const inputElement = document.getElementById('toDoItem');

    // query the DOM for the ul element and save it within a variable
    const ulElement = document.querySelector('ul');

// *EVENT is when ANYTHING HAPPENS on the page, everytime it occurs and callback function is called, the event generates an event object which is passed into the function

// 2) Attach an event listener to the form element
    // pass in 2 arguments to the event listener method
        // a) event you are listening for (always in 'string' format)
        // b) the callbackfunction which will hold the logic we wish to run ONCE the even "is heard" (AKA occurs on the page)
            // everytime an event occurs an event object is generated (we're going to pass that obj into the scope of the callback func)
    formElement.addEventListener('submit', function(event) {

        // The default behaviour of a form is to refresh the page SO we need to tell it NOT to carry out its default behaviour
        event.preventDefault();
        console.log(event);


    // save the entered text value from the input within a variable
        // NOTE: any info entered into an input element will always be available at the value property
        // console.log(inputElement);

        const userToDo = inputElement.value;

        // NOTE: form inputs ALWAYS return values as strings!
            // If the user submits the form without entering anything, that retuns an empty string


    // IF (condition statement alway start with IF) the user submits a todo (check whether the value of the input is NOT empty) then:
        // STRETCH ERROR-HANDLING GOAL - how do we avoid adding empty strings with multiple space characters (probably RegEx)

        if (userToDo !== "") {
            console.log('User has entered a to do:', userToDo);
            
            // create an li element
            const liElement = document.createElement('li');
                // add a font awesome icon to the element (INNER HTML is good for this because this is NOT userINPUT - we are injecting a font icon)
            liElement.innerHTML = '<i class="fa-regular fa-square"></i>';
            
                // add the text from the todo that the user entered to the li
                // This will not work because it will overwrite the innerHTML code
            // liElement.textContent = userToDo;

            // Append the to do as a child to the li element
                // because it is text content, we need to specifically create a text NODE and THEN append it

            const toDoTExt = document.createTextNode(userToDo);
            console.log(liElement)

            liElement.appendChild(toDoTExt);
            // append the li element to the ul element
            ulElement.appendChild(liElement);

            // clear the input value once the form is submitted
            inputElement.value = "";
        } else {
            // ELSE alert the user to please submit a valid to do
            alert('Please enter a valid task! Do not leave the input empty.')
        }

    })

    // 3) how do we track when the task is done?