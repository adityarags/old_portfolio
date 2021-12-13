
//Container0
const card = document.querySelector('.card');
const container = document.querySelector('.containers')


container.addEventListener("mousemove",(e) =>{
    let xAxis = (window.innerWidth /2 - e.pageX)/25;
    let yAxis = (window.innerWidth /2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseleave',(e) =>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
})



//Container1
const card1 = document.querySelector('.card1');
const container1 = document.querySelector('.container1')


container1.addEventListener("mousemove",(e) =>{
    let xAxis = (window.innerWidth /2 - e.pageX)/25;
    let yAxis = (window.innerWidth /2 - e.pageY)/25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container1.addEventListener('mouseleave',(e) =>{
    card1.style.transform = `rotateX(0deg) rotateY(0deg)`
})




//Container2
const card2 = document.querySelector('.card2');
const container2 = document.querySelector('.container2')


container2.addEventListener("mousemove",(e) =>{
    let xAxis = (window.innerWidth /2 - e.pageX)/25;
    let yAxis = (window.innerWidth /2 - e.pageY)/25;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container2.addEventListener('mouseleave',(e) =>{
    card2.style.transform = `rotateX(0deg) rotateY(0deg)`
})



//Container3
const card3 = document.querySelector('.card3');
const container3 = document.querySelector('.container3')


container3.addEventListener("mousemove",(e) =>{
    let xAxis = (window.innerWidth /2 - e.pageX)/25;
    let yAxis = (window.innerWidth /2 - e.pageY)/25;
    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container3.addEventListener('mouseleave',(e) =>{
    card3.style.transform = `rotateX(0deg) rotateY(0deg)`
})