function shake(){

document.body.animate(

[

{
transform:
"translate(-6px)"
},

{
transform:
"translate(6px)"
}

],

{

duration:100,

iterations:5

}

);

}

function flicker(){

document.body.style.opacity=

".9";

setTimeout(

()=>{

document.body.style.opacity=
"1";

},

120

);

}

setInterval(

()=>{

if(
Math.random()
>.7
){

shake();

flicker();

}

},

4000

);
