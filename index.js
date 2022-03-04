const timer = setInterval(() => {
  let now = new Date();

  let hr = String(now.getHours());
  let min = String(now.getMinutes());
  let sec = String(now.getSeconds());
  let ms = String(now.getMilliseconds());

  let time = hr + " h " + min + " min " + sec + " s " + ms + " ms";
  // console.log(time);
  const text = document.getElementById("text");
  text.innerHTML = time;
}, 1);
