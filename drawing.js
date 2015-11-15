window.onload = draw; // Executes draw function DOM (Document Object Model) is ready

function draw() {
    
    var canvas = document.getElementById("canvas"); // Assign our canvas element (in HTML) to a variable 
    
    var ctx = canvas.getContext("2d"); // Create the HTML object to enable draw methods

    ctx.fillStyle = "rgb(29, 40, 115)"; // sky
    ctx.fillRect(0, 0, 400, 400); // (x coordinate, y coordinate, width, height);

// skyscrapers
    ctx.fillStyle = "rgba(31,28,28,1)";
    ctx.fillRect(0,250,40,150);
    ctx.fillRect(42,260,40,140);
    ctx.fillRect(86,220,66,180);
    ctx.fillRect(200,200,40,200);
    ctx.fillRect(250,200,40,200);
    ctx.fillRect(320,210,70,200);

// moon
    ctx.arc(60,130,20,0,Math.PI*2,true);
    ctx.stroke();
    
// stars   
    ctx.fillStyle = "rgba(230,229,218,1)";
    ctx.fillRect(10,10,2,2);
    ctx.fillRect(26,46,2,2);
    ctx.fillRect(48,32,2,2);
    ctx.fillRect(60,20,2,2);
    ctx.fillRect(100,72,2,2);
    ctx.fillRect(113,56,2,2);
    ctx.fillRect(151,36,2,2);
    ctx.fillRect(181,92,2,2);
    ctx.fillRect(199,41,2,2);
    ctx.fillRect(228,17,2,2);
    ctx.fillRect(254,42,2,2);
    ctx.fillRect(270,102,2,2);
    ctx.fillRect(301,88,2,2);
    ctx.fillRect(321,53,2,2);
    ctx.fillRect(342,77,2,2);
    ctx.fillRect(366,66,2,2);
    ctx.fillRect(387,22,2,2);

// runner
    ctx.fillStyle = "rgba(230,229,218,0.5)";
    ctx.fillRect(4,395,2,6);
}
