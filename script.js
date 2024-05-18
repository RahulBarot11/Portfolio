function revealTospan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    // create two spans
    var parent = document.createElement("span")
    var child = document.createElement("span")

    // parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
})
}

function valueSetter(){
    gsap.set("#nav a", { y:"-100%" , opacity: 0});
    gsap.set("#home .parent .child" , { y: "110%" })
    gsap.set("#home .row img",{opacity:0})

}
function loaderAnimation(){
    var tl = gsap.timeline();


tl.from("#loader .child span",{
    x: 70,
    duration:1.6,
    ease:Power3.easeInOut,
    stagger:0.2
})
tl.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut
})
tl.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
})
tl.to("#green",{
    height:"100%",
    duration:1,
    top:0,
    delay:-0.8,
    ease:Circ.easeInOut
})
tl.to("#green",{
    height:"0%",
    duration:1,
    delay: -0.3,
    ease:Circ.easeInOut,
    onComplete: function(){
    animateHomepage();

    }
})
}
function animateHomepage(){
    
    var tl = gsap.timeline();
    tl.to("#nav a",{
        y:0,
        opacity:1,
        stagger:0.3,
        ease:Expo.easeInOut
    
    })
    tl.to("#home .parent .child",{
        y:0,
        stagger:0.1,
        duration:2,
        ease:Expo.easeInOut

    })
    tl.to("#home .row img",{
        opacity:1,
        ease:Expo.easeInOut,
        delay:-.2
        
    })
    
}
function string(){
    var path = `M 20 80 Q 500 80 880 80`
var finalpath = `M 20 80 Q 500 80 880 80`

var str = document.querySelector("#string")
str.addEventListener("mousemove",function(dets){
    path = `M 20 80 Q ${dets.x} ${dets.y} 880 80`

    gsap.to("#line path",{
        attr:{ d:path },
        duration:0.3,
        ease: "power3"
    })
})
str.addEventListener("mouseleave",function(){
    gsap.to("#line path",{
        duration:0.8,
        ease: "elastic.out(1.2,0.2)",
        attr:{ d:finalpath }
    })
   
})
}

// function loco(){
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });
// }

function cardHowerEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showImage;
        cnt.addEventListener("mousemove",function(dets){
   
         document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
         showImage = dets.target;
         document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

         showImage.style.filter = "grayscale(1)";

         document.querySelector("#work").style.backgroundColor="#" + dets.target.dataset.color;
        })


        cnt.addEventListener("mouseleave",function(dets){
   
            document.querySelector("#cursor").children[showImage.dataset.index].style.opacity=0;
            document.querySelector("#cursor").children[showImage.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

            showImage.style.filter = "grayscale(0)"

            document.querySelector("#work").style.backgroundColor="#fff";

           })
    })
    
}
revealTospan();
valueSetter();
// animateHomepage();
loaderAnimation();
string(); 
cardHowerEffect();

// loco();

// const logo = document.querySelectorAll("#logo path");
// for(let i=0;i<logo.length;i++){
//     console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
// }




