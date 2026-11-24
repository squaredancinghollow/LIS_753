const button1 = document.getElementById("details1");
const button2 = document.getElementById("details2");
const button3 = document.getElementById("details3");
const button4 = document.getElementById("details4");
const button5 = document.getElementById("details5");

const details = document.getElementById("details");

button1.addEventListener("click", (event) => {
  details.textContent = "This month's discussion book is Dungeon Crawler Carl by Matt Dinniman";
});
button2.addEventListener("click", (event) => {
  details.textContent = "Join us for an hour of songs and reading.";
});
button3.addEventListener("click", (event) => {
  details.textContent = "Learn the basics of using Ancestry for Libraries to uncover your family history.";
});
button4.addEventListener("click", (event) => {
  details.textContent = "Learn the fundamentals of 3D printing! We'll cover finding models, selecting filament, and configuring printer settings.";
});
button5.addEventListener("click", (event) => {
  details.textContent = "Join our resident historian for a lively discussion of local history.";
});

let form = document.getElementById("reg");

form.addEventListener("submit", (e) => {
  event.preventDefault(); 
  let programvalue = document.getElementById("programs").value;
  let namevalue = document.getElementById("namevalue").value;
  details.textContent =("Thanks for registering for " + programvalue + ", " + namevalue + "!")});


const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");

const infobox = document.getElementById("info");

    info1.addEventListener("click", (event) => {
  infobox.textContent = "The main library is open from 9:00 a.m. to 9:00 p.m. The branch is open from 9:00 a.m. to 5:00 p.m.";
});
    info2.addEventListener("click", (event) => {
    infobox.textContent = "Here's a link to our social media: https://youtu.be/dQw4w9WgXcQ? ";
});
    info3.addEventListener("click", (event) => {
  infobox.textContent = "This is where I should tell you some history about the library, but I didn't really think you'd look this hard.";
});
   info4.addEventListener("click", (event) => {
  infobox.textContent = "Copies of board minutes are available in person at the library."});