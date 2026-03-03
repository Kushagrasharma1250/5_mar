/* Time Spent Together */
const startDate = new Date("2003-03-05 16:00:00").getTime();

setInterval(()=>{
 let el=document.getElementById("countdown");
 if(!el) return;

 let now=new Date().getTime();
 let d=now-startDate;

 let days=Math.floor(d/(1000*60*60*24));
 let hrs=Math.floor((d%(1000*60*60*24))/(1000*60*60));
 let min=Math.floor((d%(1000*60*60))/(1000*60));
 let sec=Math.floor((d%(1000*60))/1000);

 el.innerHTML=`${days} Days ${hrs} Hours ${min} Min ${sec} Sec`;
},1000);

/* Slideshow */
let i=0;
let slides=document.querySelectorAll(".slideshow img");
function slide(){
 if(slides.length==0) return;
 slides.forEach(s=>s.style.display="none");
 i++;
 if(i>slides.length)i=1;
 slides[i-1].style.display="block";
 setTimeout(slide,3000);
}
slide();