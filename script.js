let tl1 = gsap.timeline();
let tl2=gsap.timeline();
let tl3 = gsap.timeline();

tl1.to(".right",{
    opacity:1,
    duration:0.3,
    scale:1
})
tl1.to(".right",{
    opacity:0,
    duration:0.3,
    scale:0.5
})
tl1.pause();

tl2.to(".wrong",{
    opacity:1,
    duration:0.3,
    scale:1
})
tl2.to(".wrong",{
    opacity:0,
    duration:0.3,
    scale:0.5
})
tl2.pause()

tl3.to(".green",{
    width:"1%",
    duration:40,
    ease:"none",
    backgroundColor:"red"
})
tl3.pause()

gsap.to("body h1",{
    transform: "translate(0%,-100%)rotate(0deg)",
    duration:1.5,
    opacity:0.5,
    delay:1,
    ease:"none",
    onComplete:()=>{
        gsap.to("body h1",{
            transform: "translate(50%,-200%)",
            duration:1,
            opacity:0
        })
    }
})

gsap.from(".child",{
    opacity:0,
    x:50,
    delay:1,
    scale:0.5,
    duration:1.5
})
gsap.from(".parent",{
    opacity:0.1,
    duration:1,
    x:-20,
    delay:0.5
})
gsap.from(".start",{
    opacity:0,
    y:30,
    scale:1.2,
    duration:2,
    delay:1
})


let colors = ["red","blue","yellow","orange","green","purple","white","black","brown"];
const basecolors= [...colors];
let target = document.querySelector(".target span");
let color;
let btntext = [0,1,2,3];
let randomtext,randomcolor,temp,i=0;
let btncolor = [0,1,2,3];

function change(){
   color= Math.floor(Math.random()*colors.length);
   target.textContent = colors[color].toUpperCase();
   randomtext=Math.floor(Math.random()*btntext.length);
   document.querySelector(`.btn${btntext[randomtext]}`).textContent = colors[color].toUpperCase();
   btntext.splice(randomtext,1);
   btncolor.splice(randomtext,1)
   randomcolor=Math.floor(Math.random()*btntext.length);
   document.querySelector(`.btn${btncolor[randomcolor]}`).style.color = colors[color];
   btncolor.push(randomtext)
   btncolor.splice(randomcolor,1)
   colors.splice(color,1);
}

function tempoptions(){
    color= Math.floor(Math.random()*colors.length);
    randomtext=Math.floor(Math.random()*btntext.length);
    document.querySelector(`.btn${btntext[randomtext]}`).textContent = colors[color].toUpperCase();
    colors.splice(color,1);
    btntext.splice(randomtext,1);
    color= Math.floor(Math.random()*colors.length);
    randomcolor=Math.floor(Math.random()*btncolor.length);
    document.querySelector(`.btn${btncolor[randomcolor]}`).style.color = colors[color];
    colors.splice(color,1);
    btncolor.splice(randomcolor,1);
}
for(let i=0;i<3;i++){
    if(i==0){change();}
    tempoptions();
}

let click = document.querySelector(".options");
let btn,score=0;

click.addEventListener("click",function(e){
    if(e.target.tagName === "BUTTON"){btn=e.target;}
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "transform 0.2s ease";
    // Reset back to normal after 200ms
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 200);
    if(target.textContent.toLocaleLowerCase()==btn.style.color){
        score++;
        tl1.restart();
    }else{
        score--;
        tl2.restart();
    };
    document.querySelector(".score span").textContent=score;
    document.querySelector(".result span").textContent=score;
    colors=[...basecolors];
    btntext = [0,1,2,3];
    btncolor = [0,1,2,3];
    for(let i=0;i<3;i++){
    if(i==0){change();}
    tempoptions();
}
})

let time=40;
let timer=document.querySelector(".timer h4");
let id;

clearInterval(i);

let start=document.querySelector(".start");
start.addEventListener("click",()=>{
    console.log("hello");
    
    gsap.to(".start",{
    opacity:0,
    duration:0.5,
    y:40
    })
    gsap.to(".how , .box",{
    opacity:0,
    duration:0.5,
    onComplete:()=>{
        document.querySelector(".home").style.height="auto";
        document.querySelector(".box").style.display="none";
        document.querySelector(".how").style.display="none";
        document.querySelector(".start").style.display="none";
        document.querySelector(".maingame").style.display="block";
        document.querySelector(".maingame").style.pointerEvents="auto";
        gsap.from(".child",{
        opacity:0,
        x:50,
        delay:1,
        scale:0.5,
        duration:1.5
        })
        gsap.from(".parent",{
            opacity:0,
            duration:1,
            x:-20,
            delay:0.5
        })
        gsap.to(".maingame",{
        opacity:1,
        scale:1,
        duration:1,
        left:"auto",
        right:"auto",
        onComplete:()=>{
            tl3.restart();
            id=setInterval(()=>{
            timer.textContent=time;
            time--;
            if(time==-1){
                document.querySelector(".timer").style.display="none";
                document.querySelector(".target").style.display="none";
                document.querySelector(".options").style.display="none";
                document.querySelector(".progress").style.display="none";
                document.querySelector(".score").style.display="none";
                document.querySelector(".result h4").style.display="block";
                document.querySelector(".result .restart").style.display="block";
            }
            },1000)
        }
        })
    }
    })
})

document.querySelector(".restart").addEventListener("click",()=>{
    location.reload(); 
})
