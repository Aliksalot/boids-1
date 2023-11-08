const birdSize = 20;
        
class Bird{
    constructor(x, y, dir, vel){
        this.x = x;
        this.y = y;
        this.dir = dir; //rad
        this.vel = vel; //pix
    }

    isColliding(x1, y1){
        return (this.x + birdSize > x1 && this.y + birdSize > y1 && this.x < x1 + birdSize && this.y < birdSize + y1) 
    }
}

const coh = 0.2;
const sep = 1;
const ali = 0.3;
const vr = 60
const vel = 3

const birdCount = 40;
let arr = [];

for(let i = 0; i < birdCount; i++){
    arr.push(new Bird(Math.random() * 800, Math.random() * 600, Math.random() * Math.PI * 2, vel))
}
