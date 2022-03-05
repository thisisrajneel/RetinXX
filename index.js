let time = 1200
let text = document.getElementById('text')
const timer = setInterval(() => {
    if(time<0) {
        time = 1200
    }
    
    let min = Math.floor(time/60)
    let sec = time%60
    sec = sec<10 ? '0'+sec : sec
    min = min<10 ? '0'+min : min

    text.innerHTML = `${min} : ${sec}`
    time--
}, 1000);