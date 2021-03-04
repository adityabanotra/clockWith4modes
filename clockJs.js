
const toggle = false;

const circle = document.querySelector('.circle');

document.getElementsByClassName("outline")[0].onclick = function () {
        
    if(!toggled) {
        
        // hTag.classList.add("color-white");
        //bodyTag.classList.add("bck-color-black");
        circle.style.marginLeft = "100px";
        
        toggled = true;
        
    } else {
        
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.style.marginLeft = "1px";
        
        toggled = false;
        
    }

// const secHand= document.querySelector('.sec');
// const minHand= document.querySelector('.min');
// const hourHand= document.querySelector('.hour');

// const digtext= document.querySelector('.digclock');

// function setdate()
// {
//     const now= new Date();

//     var seconds = now.getSeconds();
//     var minutes = now.getMinutes();
//     var hours = now.getHours();


//     var secDegree = (seconds/60)*360 +90;
//     var minDegree = (minutes/60)*360 +90;
//     var hourDegree = ((hours%12)/12)*360+90;
    
    
//      secHand.style.transform = `rotate(${secDegree}deg)`;
//      minHand.style.transform =  `rotate(${minDegree}deg)`;
//      hourHand.style.transform =  `rotate(${hourDegree}deg)`;
     
//      var ses;
//      ses= (hours<12) ? "AM" : "PM"
//      hours=hours%12;
//      if(hours==0)
//      hours=12;
     
//      hours=(hours<10) ?"0"+hours : hours;
//      minutes=(minutes<10) ?"0"+minutes : hours;
//      seconds=(seconds<10) ?"0"+seconds : seconds;
//      var time= hours+":"+minutes+":"+seconds+ " "+ses;

//      //digtext.innerText = "time";
//      digtext.textContent=time;
     
//       //document.getElementsById("boxx").textContent=time;

//       console.log(seconds);
//     //   console.log(hours);


// }
// setInterval(setdate,1000);

