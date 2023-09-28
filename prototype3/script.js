function randomImg () {
  var randomNumber = Math.floor(Math.random() * 346 ) + 1; //creating a random number
  var imgName = "img_" + randomNumber + ".jpg"; // assigning random number to first part name of img
  let imageid = document.getElementById("imageid").src= "images/" + imgName;
  imageid.classList.toggle('fade');

  
}

setInterval(randomImg, 1000); //interval that recalls function
//https://www.geeksforgeeks.org/random-image-generator-using-javascript/
//https://stackoverflow.com/questions/20899167/how-to-make-a-random-image-generator-for-website

//scaling, randomized position, pass on to event handler


window.onload = randomImg;


