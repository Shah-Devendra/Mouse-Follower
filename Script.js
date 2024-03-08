var circle = document.querySelector("#circle");
var hovers = document.querySelectorAll(".mousehover")

hovers.forEach(hover => {
    hover.addEventListener("mousemove", function (dets) {
        gsap.to(circle, {
            scale: 20,
            duration: .2,

        })
    })

    hover.addEventListener("mouseleave", function (dets) {
        gsap.to(circle, {
            scale: 1,
            duration: .2,
        })
    })
})

document.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .3,
        ease: "expo",

    })
})



// const cursor = new MouseFollower({
//     container: '#main',
//     speed: 1,
//     skewing: 2,
//     skewingText: 2,
// });
// cursor.addState('-inverse')









// hover.addEventListener("mousemove", function(dets){
//     gsap.to(circle,{
//         scale: 3
//     })
// })

// hover.addEventListener("mouseleave", function(dets){
//     gsap.to(circle,{
//         scale: 1
//     })
// })
// var mouse = document.querySelector(".mouse")
// var main = document.querySelector("#main")
// var text = document.querySelector(".mousehover")

// main.addEventListener("mousemove",function(dets){
//     // console.log("Mouse chal raha hai")
//     mouse.style.left = dets.x + "px"
//     mouse.style.top = dets.y + "px"
// })

// text.addEventListener("mousemove",function(dets1){
//     mouse.style.transition = `all .3s cubic-bezier(0.39, 0.575, 0.565, 1)`
//     mouse.style.scale = 5
//     mouse.style.left = `dets1.x px`
//     mouse.style.top = `dets1.y px`
// })

// text.addEventListener("mouseleave",function(dets1){
//     mouse.style.transition = `all .3s cubic-bezier(0.39, 0.575, 0.565, 1)`
//     mouse.style.scale = 1
//     mouse.style.left = `dets1.x px`
//     mouse.style.top = `dets1.y px`
// })


