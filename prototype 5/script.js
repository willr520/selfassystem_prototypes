const ul = document.querySelector('ul');

function randomJson() {
    var randomNumber = Math.floor(Math.random() * 97) + 1; 
    var jsonName = "message_" + randomNumber + ".json"; 


    fetch('json/' + jsonName)
    .then(res => res.json())
    .then(data => {
        const messages = data.messages;

        messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = `${message.sender_name}: ${message.content}`;

            ul.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
}

randomJson();





/*const ul = document.querySelector('ul');

function randomJson () {
    var randomNumber = Math.floor(Math.random() * 97 ) + 1; //creating a random number
    var jsonName = "message_" + randomNumber + ".json"; // assigning random number to first part name of img
    //let jsonid = document.getElementById("jsonid").src= "json/" + jsonName;
  }

fetch('json/' jsonName)
.then(res => res.json())
.then(data => {
  
const messages = data.messages;

messages.forEach(message => {
    const li = document.createElement('li');
    li.textContent = `${message.sender_name}: ${message.content}`;

    ul.appendChild(li);
});
})

//pass in files name
   

//https://www.tutorialspoint.com/how-to-import-local-json-file-data-to-my-javascript-variable
//https://www.youtube.com/watch?v=Oage6H4GX2o&ab_channel=ByteGrad */