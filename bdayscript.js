let btn=document.getElementById("button");
let btnn=document.createElement('button');
btnn.innerText="Click Here Akka!";
btn.appendChild(btnn);
btnn.addEventListener('click',function(){
    let image_element=document.getElementById('image');
    let img=document.createElement('img');
    img.src="https://thumbs.dreamstime.com/z/happy-birthday-written-sand-sunset-beach-hawaii-palm-trees-ocean-background-happy-birthday-167863724.jpg"
    image_element.appendChild(img);
})