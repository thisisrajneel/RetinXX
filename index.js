let today = new Date();
const text = document.getElementById("text");

let timer = new Date(
    today.getFullYear(),today.getMonth(),today.getDay(),today.getHours(),today.getMinutes() + 0,today.getSeconds()+10,today.getMilliseconds()
)

const msDiff = timer - today

const setTimer = setInterval(twentyTimer = () => {

    let now = new Date()
    let diff = timer - now
    if(diff <= 0) {
        location.reload();
    }

    let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((diff % (1000 * 60)) / 1000);
    let ms = Math.floor((diff % (1000 * 60)));

  let time = min + " min " + sec + " s";
  
  text.innerHTML = time;
}, 1);
