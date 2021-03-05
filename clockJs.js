
var t = false;

const out = document.querySelector('.outline');
const circle = document.querySelector('.circle');


//const bodd = document.querySelector('body');
out.addEventListener('click',function(){

   if(t==false) {
        
        circle.style.marginLeft = "35px";
        document.body.style.backgroundColor= 'rgb(0, 0, 20)';
        document.documentElement.style.setProperty('--content-color', 'white');
   
        t = true;
}
else {
        
        document.body.style.backgroundColor = 'rgb(236, 236, 236)';
        circle.style.marginLeft = "1px";
        document.documentElement.style.setProperty('--content-color', 'rgb(0, 66, 189)');
     
         t = false;
        
     }
});



var t2 = false;

const out2 = document.querySelector('.outline2');
const circle2 = document.querySelector('.circle2');
const anaclock = document.querySelector('#analog');

//const bodd = document.querySelector('body');
out2.addEventListener('click',function(){

   if(t2==false) {
        
        circle2.style.marginLeft = "35px";
        document.querySelector('.digclock').style.display='block';
        anaclock.style.display='none';
        t2 = true;
}
else {
        
        circle2.style.marginLeft = "1px";
        document.querySelector('.digclock').style.display='none';
        anaclock.style.display='block';
         t2 = false;
        
     }
});

const secHand= document.querySelector('.sec');
const minHand= document.querySelector('.min');
const hourHand= document.querySelector('.hour');

const digtext= document.querySelector('.digclock');

function setanalog()
{
    const now= new Date();

    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();


    var secDegree = (seconds/60)*360 +90;
    var minDegree = (minutes/60)*360 +90;
    var hourDegree = ((hours%12)/12)*360+90;
    
    
    secHand.style.transform = `rotate(${secDegree}deg)`;
    minHand.style.transform =  `rotate(${minDegree}deg)`;
    hourHand.style.transform =  `rotate(${hourDegree}deg)`;
     // console.log(seconds);
    //   console.log(hours);


}

function setdigital()
{
    const now= new Date();

    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();
    // console.log(minutes);

    var ses;
     ses= (hours<12) ? "AM" : "PM"
     hours=hours%12;
     if(hours==0)
     hours=12;
     
     hours=(hours<10) ?"0"+hours : hours;
     minutes=(minutes<10) ?"0"+minutes : minutes;
     seconds=(seconds<10) ?"0"+seconds : seconds;
     var time= hours+":"+minutes+":"+seconds+ " "+ses;

     //digtext.innerText = "time";
     digtext.textContent=time;
     
      //document.getElementsById("boxx").textContent=time;

      
    //   console.log(hours);


}
setInterval(setanalog,1000);
setInterval(setdigital,1000);

