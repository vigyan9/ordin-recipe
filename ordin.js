const chick= document.querySelector(".chick");
const chickenphoto=document.querySelector(".chickenphoto");
chick.addEventListener("click",()=>{
    if(chickenphoto.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXh3D-Ylsw9HDXYMCP3WSiUFLebrXoxum9GQ&usqp=CAU"){
        chickenphoto.src="https://5.imimg.com/data5/FK/HB/GLADMIN-63144995/dress-chicken-with-skin-roasted-500x500.png";

    }else{
        chickenphoto.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXh3D-Ylsw9HDXYMCP3WSiUFLebrXoxum9GQ&usqp=CAU" ;
    }
})


const but=document.querySelector(".but");
const butterphoto=document.querySelector(".butterphoto");
but.addEventListener("click",()=>{
    if(butterphoto.src=="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Western-pack-butter.jpg/220px-Western-pack-butter.jpg"){
        butterphoto.src="https://play-lh.googleusercontent.com/P26WtGrhqoIk8W6J_S3yJ0pBJcbBG3dEEiYv1u9pZCAeYtOPkXP71N4_7WccH6M8YgXK=w240-h480-rw";
    }else{
        butterphoto.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Western-pack-butter.jpg/220px-Western-pack-butter.jpg";
    }
})

const spec= document.querySelector(".spec")
const body = document.querySelector("body");
const speciesphoto=document.querySelector(".speciesphoto")
spec.addEventListener("click",()=>{
    const red = Math.floor(Math.random()*225);
    const blue = Math.floor(Math.random()*225);
    const green = Math.floor(Math.random()*225);
     body.style.backgroundColor= `rgb(${red},${blue},${green})`;
     if(speciesphoto.src=="https://i.ndtvimg.com/i/2015-07/spices_625x350_81437462687.jpg"){
        speciesphoto.src="https://nrathmell.files.wordpress.com/2016/10/lears-fool-01.png?w=640";
    }else{
        speciesphoto.src="https://i.ndtvimg.com/i/2015-07/spices_625x350_81437462687.jpg";
    }
})