console.log('hello');
let boxes=document.getElementsByClassName('box');


for(box of boxes){
    box.addEventListener('click',focusImg);
   
}
// is used to change properties of style parent. Will add class focus to grow box size and will translate h3 and h1 
function focusImg(){
//   this is the box that triggered function

// this is used to remove all the added classes(after first click).It will check if flex has been added, if it has means it was click onto before and property 
// must be set to original values
    if(this.classList.contains("focus")){
        this.classList.remove("focus");
        this.children[0].style.transform="translateY(-100%)"; //moves h3 100% above
        this.children[1].style.transform="scale(0)"; //makes h1 disappear
        this.children[2].style.transform="translateY(100%)"
    }
    else{
        this.classList.add("focus");
        this.children[0].style.transform="translateY(-10%)";
        this.children[1].style.transform="scale(2)";
        this.children[2].style.transform="translateY(10%)";
    }
}