//https://teachablemachine.withgoogle.com/models/1hdocpWXo/
Webcam.set({
height:300,
width:350,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(
"#camera"
)

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML="<img id='selfie_image'src='"+data_uri+"'>";
    }) ;
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yuF3VN2bR/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded")
}

function check(){
    img=document.getElementById("selfie_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("object_name").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("object_accuracy").style.color="rgb("+r+","+g+","+b+")";
    }
}

