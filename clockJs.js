body{
    
    /* background-image: url(assets/How-can-I-fix-the-overly-bright-background-in-my-landscape-.jpg); */
    background-color: rgb(236, 236, 236);
    background-size: 3000px 2000px;
    margin: 0px;
    background-image: url(assets/
    margin-top: -50px;
 }
p{
    display: inline;
}
 section{
     height: 100vh;
    /* background-image: linear-gradient(-120deg , rgb(16, 91, 190),rgb(36, 155, 235) 30%, rgb(9, 60, 201) 170%); */

 }
:root{
    --content-color: rgb(0, 66, 189);
    /* --content-color: rgb(0, 0, 37); */
   
}

 #heading{
     text-align: center;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-weight: 800;
     margin: 30px;
       margin-bottom: 10px; 
        color: var(--content-color);
     font-size: 50px;
     cursor: default;
 }

.tog1
{
   
    display: flex;
    justify-content: center;
    height: 60px;
    text-align: center;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-weight: 700;
     color: var(--content-color);
    font-size: 15px; 
    cursor: default;
   
}

.outline{
   display: inline; 
    width: 50px;
    height: 15px;
    top: 2px;
    text-align: center;
    border: 2px solid var(--content-color);
    border-radius: 20px;
    margin: 20px;
    cursor: pointer ;

}
.circle
{
    position: relative;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background-color: var(--content-color);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transform:scale(.7);
}
.outline2{
    display: inline; 
     width: 50px;
     height: 15px;
     top: 2px;
     text-align: center;
     border: 2px solid var(--content-color);
     border-radius: 20px;
     margin: 20px;
     cursor: pointer ;
 
 }
 .circle2
 {
     position: relative;
     height: 15px;
     width: 15px;
     border-radius: 50px;
     background-color: var(--content-color);
     transition-duration: 0.5s;
     transition-timing-function: ease-in-out;
     transform:scale(.7);
 }

#analog
{
    margin: auto;
    display: block;
    border-radius: 50%;
    height: 350px;
    width: 350px;
    border: 20px solid var(--content-color);
    position: relative;
    padding: 50px;
    margin-top: 30px;
    transform: scale(0.9);
}
 #face{
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
 }

 .hand{
     position: absolute;
     top: 48%;
     left: 0%;
     background-color: var(--content-color);
      width:49%;
     transform-origin: 100%;
     transform: rotate(90deg);
     /* transition: 0.5s;

     transition-timing-function: cubic-bezier(1, 0, 0.22, 1.7); */
 }

.sec{
    height: 5px;
}

.min{
    height: 7px;   
}

.hour{
    height: 10px;   
}
.dot
{
    z-index: 2;
    position: absolute;
     top: 50%;
     left: 44.5%;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    z-index: 10;
}

.digclock {
    display: none;
    margin-top: 120px;
    z-index: 3;
    border:10px solid var(--content-color);
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    /* color: #ffffff; */
    font-size: 120px; 
    height: auto;
    width: 50%;
    color: var(--content-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 7px;
}
@media screen and (max-width:1470px)
{
    .digclock{
        width:80%
    }
}
@media screen and (max-width:950px)
{
    .digclock{
        width:100%
    }
}
@media screen and (max-width:750px)
{
    .digclock{
        font-size: 70px; 
    }
}
