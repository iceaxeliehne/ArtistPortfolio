

(function() {
    //console.log("hello");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    let secondsPassed = 0.0;
    let oldTimeStamp = 0.0;
    
    var circles = [];

    class genericCircle {
        "current_Radius" = 0;
        "colour" = "white";
        "timer" = 0.0;
        "timer_offset" = 0.0;
        "draw" = function() {
            ctx.beginPath();
            ctx.arc(250, 250, this.current_Radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.colour;
            ctx.fill();
        };
        "animate" = function() {
            console.log(this.colour);
            //update the timer
            if (typeof(secondsPassed) == "number") {
                this.timer = this.timer + secondsPassed; //time sinse last animate call
            }
            
            if (this.timer >= 1.0) {
                this.timer = 0.0;
            }
            this.current_Radius = this.timer * 400.0;
            this.draw();
        };

    };

    function drawRectangle(rec_x, rec_y, rec_width, rec_height, rec_colour) {
        ctx.beginPath();
        ctx.rect(rec_x, rec_y, rec_width, rec_height);
        ctx.fillStyle = rec_colour;
        ctx.fill();
    }

    var circle = new genericCircle();
    circle.colour = "white";

    var circle2 = new genericCircle();
    circle2.colour = "black";
    circle.timer = 0.5;
    
    drawRectangle(0,0,c.width,c.height,"black");
    //drawCircle(250,250,250,"white");

    circle.animate();
   
    // drawRectangle(300,300,100,50,"blue");
    // drawRectangle(100,300,5,70,"red");

    function gameLoop(timeStamp) {
        

         // Calculate the number of seconds passed since the last frame
        secondsPassed = (timeStamp - oldTimeStamp) / 1000;
        oldTimeStamp = timeStamp;

        //draw background
        drawRectangle(0,0,c.width,c.height,"black");

        circle.animate();
        circle2.animate();

        window.requestAnimationFrame(gameLoop);
    }

    //window.requestAnimationFrame(gameLoop);
    //comment
})();



