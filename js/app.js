const canvas = document.getElementById("render_canvas");
// automatically sets the canvas to the client_height / client_width requirements.
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas. getContext("2d");
ctx.font = "50px Arial";
ctx.fillText("a001-Engine Intro", 0, 50)