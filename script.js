const next = document.getElementById("next")
const img = document.getElementsByClassName("imgDiv")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const play1 = document.getElementById("play")
const pause1 = document.getElementById("pause")
const pages = document.getElementsByClassName("pages")

let num = 1;
slideShow(num);

function button(n) {
  slideShow(num += n)
}

let interval = setInterval(() =>{button(1)}, 1000)
function slideShow (n) {
  if (n > img.length) {
    num = 1;
}
if (n < 1) {
    num = img.length;
}
for (let i = 0; i < img.length; i++) {
    //img[i].style.visibility = "hidden";
    //img[i].style.opacity = "0";
    img[i].style.display = "none";
}
for (let i = 0; i < pages.length; i++) {
  pages[i].className = pages[i].className.replace(" pageStyle", "");
}
  img[num - 1].style.display = "block";
  //img[i].style.visibility = "visible";
  // img[num - 1].style.opacity = "1";
  pages[num - 1].className += " pageStyle";
}
let playing = true
function pause(){
  pause1.innerHTML = "Play"
  playing = false
  clearInterval(interval)
}
function play(){
  pause1.innerHTML = "Pause"
  playing = true
  interval = setInterval(() =>{button(1)}, 1000)
}
pause1.onclick = function(){
  if(playing){pause()
  }else {
    play()
  }
}
function navigation(n){
  slideShow(num = n)
}