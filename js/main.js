document.addEventListener(
"mousemove",
(event)=>{

let x =
event.clientX
/
100;

let y =
event.clientY
/
100;

document.body.style.backgroundPosition =
`${x}px ${y}px`;

}
);
