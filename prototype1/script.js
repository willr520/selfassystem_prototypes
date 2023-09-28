
const ul = document.querySelector('ul');

fetch('json/data.json')
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
//https://www.youtube.com/watch?v=Oage6H4GX2o&ab_channel=ByteGrad