function loo(){

    var message = document.getElementById("message").value;

    var messageUp=message.toLowerCase();
    
    var arrayOfStrings = messageUp.split(" ");
    var countW=0;
    
    for (var i=0; i<arrayOfStrings.length; i++){
    countW=countW+arrayOfStrings[i].length;
    }
    
    if (countW<20){
        alert("Your message less than 20 simbols! Text more!");
    }
    else {
    var fr, max_fr=1, num=0;
    
    for (var i=0; i<arrayOfStrings.length-1; i++){
        fr=1;
        for (var j = i+1; j<arrayOfStrings.length; j++) {
           if (arrayOfStrings[i]==arrayOfStrings[j]){
            fr++;
           }
           if (fr>max_fr){
            max_fr=fr;
            num=arrayOfStrings[i];
           }
        }
    }
    
    document.getElementById("result").innerHTML = "Number of word= " + arrayOfStrings.length + " Most common word is '" + num + "'" ;
     
    var b= Math.floor(Math.random() * 3);
    
    if (b==0){
    document.getElementById("phrase").innerHTML = "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey";
    var  imageURL = "https://i.pinimg.com/originals/aa/eb/49/aaeb4941ff8afe1bf468c148926c1bdd.jpg";
    document.getElementById("picture").src = imageURL;
    }
    
    if (b==1){
    document.getElementById("phrase").innerHTML = "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore";
    var  imageURL = "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg";
    document.getElementById("picture").src = imageURL;
    }
    
    if (b==2){
    document.getElementById("phrase").innerHTML ="You are a wizard, Harry (c) Hagrid";
    var  imageURL = "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg";
    document.getElementById("picture").src = imageURL;
       } 
    }
 }