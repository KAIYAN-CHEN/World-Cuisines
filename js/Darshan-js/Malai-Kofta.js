// List of images store in array
let myImagesArray = ["Darshan-Images/FinalKofta.jpg","Darshan-Images/Kofta1.jpg","Darshan-Images/Kofta2.jpg","Darshan-Images/Kofta3.jpg",
                    "Darshan-Images/Kofta4.jpg","Darshan-Images/Paste1.jpg","Darshan-Images/Paste2.jpg","Darshan-Images/Paste3.jpg"];

// Responsive Navigation Hamburgur Menu with show and hide function
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");  //Show Menu on click
}
function Hide() {
  navList.classList.remove("_Menus-show");  //Hide Menu on click
}

var i = myImagesArray.length; //calculate array length
// function for next slide 
function nextImage(){
  if (i<myImagesArray.length) {
      i= i+1;
  }else{
      i = 1;
  }
  document.getElementById('ControlImage').src=myImagesArray[i-1]; //move to next image on clicking arrow(>)
}
// function for prew slide
function prewImage(){
  if (i<myImagesArray.length+1 && i>1) {
      i= i-1;
  }else{
      i = myImagesArray.length;
  }
  document.getElementById('ControlImage').src=myImagesArray[i-1];  //move to next image on clicking arrow(<)
}
// script for auto image slider
//setInterval(nextImage , 4000);





