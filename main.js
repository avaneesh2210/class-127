song1 = "";
song2 = "";

function preload(){
   song1 = loadSound("Is halloween.mp3");
   song2 = loadSound("the magic tree.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized.');
}
function draw(){
    Image(video, 0, 0, 600, 500);
}