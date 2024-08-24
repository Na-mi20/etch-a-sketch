let container=document.querySelector(".container");
let clearBtn=document.querySelector(".clear");
clearBtn.textContent="Clear";
let btn=document.querySelector(".btn");

let input=document.querySelector("input");
function gridSize(){
  let num = input.value;
  container.textContent='';
  let cellSize=Math.floor((container.clientWidth)/num);
  if(num<=100){
  for(let i=1;i<=num;i++){
    let div1=document.createElement("div");
    div1.classList.add("one");
    for(let j=1;j<=num;j++){
      let div2=document.createElement("div");
      div2.classList.add("two");
      div2.style.width=`${cellSize}px`;
      div2.style.height= `${cellSize}px`;
     let count=0;
      div2.addEventListener("mouseover",function(){
        let color=[];
        for(let l=1;l<=3;l++){
          count+=1;
        if(count<=9){
        color.push(Math.floor(Math.random()*256));
        let t= "rgb(" + color.join(", ") + ")";
        div2.style.backgroundColor =t;
        div2.style.opacity=0.1*count;}
        else{
             div2.style.backgroundColor="black";
             div2.style.opacity=0.1*count;
        }
          
         clearBtn.addEventListener("click", function () {
           div2.style.backgroundColor = "";
           div2.style.opacity = "";
         });
    }});
    

       div1.appendChild(div2);
      
    }
    container.appendChild(div1);
  }}

}
btn.textContent="Choose the grid size";

btn.addEventListener("click",gridSize);

