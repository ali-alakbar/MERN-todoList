### Application

This is a todo list MERN full stack web application.

### Files
Every file is orginized in the components(except App.js), within the file there is another folder contains the scss stylling files

    - App.js
        1- Contain three hooks:
            // Below hook is to get the data from the backend and save within an array
            // Below hook responisble for taking the input value and send it to server.js
            // Below hook responsible for making the adding element interface appear
        2- Contain functions:
            // "onGetting()" function is to display the data of the backend
            // "SendData()" function is to Get the "GettingFormatText", and send it server.js as variable "text"
            // "onUpdate()" and "onRemove()" functions are to Detect the item we want to remove by getting the box's ID (backend ID) and send it to the server.js

    - AddingElements.js
    This file responsible for the interface that pop up whenever the user try to enter a new task. It contains the input field, the button to send the data, and the closing btn.

    - TodoList.js
    This file contains the boxes of info that the user enters. The data is from the backend, it fetches and maps through.

### The link
https://tourmaline-crumble-bf13db.netlify.app/