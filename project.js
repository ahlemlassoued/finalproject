let like = document.getElementsByClassName("like");
console.log("like",like);
for(let i =0;i < like.length;i++) {
    like[i].addEventListener("click", function (){
        if(like[i].style.color=="white"){
            like[i].style.color="red";
        }else{
            like[i].style.color="white";

        }
    })
}