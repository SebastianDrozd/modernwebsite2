import React, { useEffect } from 'react'
import './CanvasLayout.css'
const CanvasLayout = () => {
  var ctx = null;
  var canvas = null;
  const mouse = {
    x: undefined,
    y: undefined,
  };

  class Particle {
    constructor() {
      // this.x = mouse.x;
      //  this.y = mouse.y;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1 + 0.1;
      this.speedX = Math.random() * 3 - .9;
      this.speedY = Math.random() * 3 - .9;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = "rgb(23, 255, 243)";

      ctx.beginPath(); //necesarry for lines
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
    useEffect(() => {
      var particlesArray = [];
      canvas = document.getElementById("canvas1");
      ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
  
      canvas.addEventListener("click", function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log("x", mouse.x, "y", mouse.y);
      });
      canvas.addEventListener("mousemove", function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
      });
  
      //main animation function
      function animate() {
        ctx.fillStyle = '#141414'
        ctx.clearRect(0,0,canvas.width,canvas.height)
        handleParticles()
        requestAnimationFrame(animate);
      }
  
      //function to create particles
      function init() {
        for (let i = 0; i < 500; i++) {
          particlesArray.push(new Particle());
        }
      }
    
     //function to handle particles
      function handleParticles(){
        for(let i = 0; i< particlesArray.length;i++){
          particlesArray[i].update();
          particlesArray[i].draw();

          for(let j = i ; j < particlesArray.length;j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy)
            if(distance < 70){
              ctx.beginPath()
              ctx.strokeStyle = 'white'
              ctx.lineWidth= 0.05
              ctx.moveTo(particlesArray[i].x,particlesArray[i].y)
              ctx.lineTo(particlesArray[j].x,particlesArray[j].y)
              ctx.stroke()
            }
          }
        }
      }
  
  
      init();
      animate();
    }, []);
    return (
        <>
            <canvas id="canvas1">
                
            </canvas>
        </>
    )
}

export default CanvasLayout
