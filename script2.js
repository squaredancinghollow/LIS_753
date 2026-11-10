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







