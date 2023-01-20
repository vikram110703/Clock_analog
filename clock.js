const hourEvent = document.querySelector(".hour");
const minuteEvent = document.querySelector(".minute");
const secondEvent = document.querySelector(".second");

const updateClock=()=> {
    const currentDate = new Date();
    setTimeout(() => {
        //reccursice call after every second
        updateClock();
    }, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
   
    // console.log(hour,minute,second);
    const hourTOdeg = (360 / 12) * hour;
    const secondTOdeg=(second / 60) * 360;
    const minuteTOdeg=(minute / 60) * 360;
    hourEvent.style.transform = `rotate(${hourTOdeg}deg`;
    secondEvent.style.transform = `rotate(${secondTOdeg}deg`;
    minuteEvent.style.transform = `rotate(${minuteTOdeg}deg`;
}
// function call
updateClock();
