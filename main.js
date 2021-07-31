prediction=""

Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5_version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aN__m09z-/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSyntesis;
    speak_data = "The prediction is" + prediction;  
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}