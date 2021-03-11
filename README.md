# clockWith4modes

In this project I have implemented an analog clock as well as a digital clock. It also has a dark mode in it. We can switch between the mode with the toggle button. This project is made using HTML CSS and JavaScript. It uses a JavaScript date object for showing the present time to the user. In the analogue clock the needles are rotating on the axis at the end of the needle and is getting updated every second.

The degree with which each needle is rotating is as :-
    var secDegree = (seconds/60)*360 +90;
    var minDegree = (minutes/60)*360 +90;
    var hourDegree = ((hours%12)/12)*360+90;
    
 You Can visit it [here](https://adityabanotra.github.io/clockWith4modes/)   
 
 
    
 ![light analog](https://user-images.githubusercontent.com/71438721/110781595-1c7e3e80-828c-11eb-9096-473ac21edc15.png)
 
    
 ![dark analog](https://user-images.githubusercontent.com/71438721/110781641-2acc5a80-828c-11eb-80fc-4c43fc30c5ca.png)
 
    
![light digital](https://user-images.githubusercontent.com/71438721/110781646-2c961e00-828c-11eb-8333-8a0c014326ae.png)


![dark digital](https://user-images.githubusercontent.com/71438721/110781651-2dc74b00-828c-11eb-81d4-511fd627e9fe.png)

