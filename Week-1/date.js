function datemethods(){
    const currentDate = new Date();
    // console.log("current Date: ", currentDate);

    // console.log("Date:" , currentDate.getDate());
    // console.log("month:" , currentDate.getMonth());
    // console.log("YEAR:" , currentDate.getFullYear());   
    // console.log("MINUTES:" , currentDate.getMinutes());  
    // console.log("SECONDS:" , currentDate.getSeconds());
    
}
datemethods();

function currentTimePrint(){
    const currentDate = new Date();

    const hrs = currentDate.getHours().toString().padStart(2, '0');
    const min = currentDate.getMinutes().toString().padStart(2, '0');
    const sec = currentDate.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${hrs}:${min}:${sec}`;
    console.log(formattedTime);
}

const intervalID = setInterval(currentTimePrint, 1000)

setTimeout(() => {
    clearInterval(intervalID);
    console.log("10 seconds");
}, 10000)
