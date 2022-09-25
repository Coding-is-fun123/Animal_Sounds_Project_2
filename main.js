function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gAnfNGrP8/model.json", modelReady)
    }
    function modelReady(){
    classifier.classify(gotResult)
    }
    
    function gotResult(error,result)
{
    if(error)
    {
console.error(error)
    }
    else{
        console.log(result);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear:"+ result[0].label;
        document.getElementById("result_label").style.color="rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").innerHTML="Accuracy:"+ (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color="rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById("Cat");
        img1= document.getElementById("Dog");
        img2= document.getElementById("Lion");
        img3= document.getElementById("Cow");


        if(result[0].label=="Roar"){
            img.src="lion.jpg";
          
        }
        else if(result[0].label=="Barking"){
            img.src="german sherpard.jpg";
            
        }
        else if(result[0].label=="Meowing"){
            img.src="kitty.jpg";
           
        }  
        else if(result[0].label=="Background Noise"){
            img.src="cow.jpg";
            img1.src="german sherpard.jpg";
            img2.src="lion.jpg";
            img3.src="kitty.jpg"; 
        }

        


    }
}