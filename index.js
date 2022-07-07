
//
// document.querySelector("button").addEventListener("click", fuction (){
//
//
//
//
// })
h = 1;
var rat = document.querySelector(".held")
var hell = document.querySelector(".image");
document.querySelector("button").addEventListener("click" , function(){
  var ranno = Math.floor(Math.random() *2) +1;
  if (ranno === 1){var art = "heads"}
  else if (ranno === 2){var art = "tails"}
  hell.setAttribute("src" , "images/toss("+ranno+").png")
  rat.innerText = "You have tossed "+h+" times and It's a "+art+".";
  h += 1;
})
