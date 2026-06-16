export function random(min,max){

return Math.floor(

Math.random()

*

(max-min+1)

)+min;

}

export function wait(ms){

return new Promise(

r=>

setTimeout(
r,
ms
)

);

}
