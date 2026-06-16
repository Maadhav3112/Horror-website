const warning =

document.getElementById(
"warning"
);

const events=[

"Medical Ward",

"Basement",

"Archive",

"Isolation Cell"

];

let index=0;

setInterval(()=>{

warning.textContent=

events[index];

index++;

if(
index>=events.length
)

index=0;

},3000);

document.body.addEventListener(

"click",

()=>{

document.body.animate(

[

{
transform:
"translateX(-4px)"
},

{
transform:
"translateX(4px)"
}

],

{

duration:80,

iterations:6

}

);

}

);
