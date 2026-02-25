let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let greeting = document.getElementById("greeting");
let message = document.getElementById("message");


if(month == 1){

    greeting.innerHTML = "Happy New Year 🎆";
    message.innerHTML = "Welcome to the New Year " + year + " !";
    document.body.style.background = "url('images/fireworks.jpg')";

}

else if(month == 2){

    greeting.innerHTML = "Happy Valentines " ;
    message.innerHTML = "Make your memories glow together!";
    document.body.style.backgroundImage = "url('images/valentines.jpg')";
}

else if(month == 4){

    greeting.innerHTML = "Happy Sinhala & Tamil New Year 🇱🇰";
    message.innerHTML = "Suba Aluth Avuruddak Wewa!";
    document.body.style.background = "url('images/avurudu.jpg')";
}

else if(month == 5){

    greeting.innerHTML = "Happy Vesak 🇱🇰";
    message.innerHTML = "පිංබර වෙසක් පොහොය මංගල්‍යයක් වේවා!";
    document.body.style.background = "url('images/vesak.jpg')";
}

else if(month == 6){

    greeting.innerHTML = "Happy Poson 🇱🇰";
    message.innerHTML = "පිංබර පොසොන් පොහොය මංගල්‍යයක් වේවා!";
    document.body.style.background = "url('images/poson.jpg')";
}

else if(month == 8){

    greeting.innerHTML = "Kandy Perahera";
    message.innerHTML = "නුවර දළදා පෙරහැරට බැති සිතින් ආරාධනා!";
    document.body.style.background = "url('images/kandyperahera.jpg')";
}

else if(month == 10){

    greeting.innerHTML = "Happy Halloween";
    message.innerHTML = "Witching you a spooktacular Halloween!";
    document.body.style.background = "url('images/halloween.jpg')";
}

else if(month == 11){

    greeting.innerHTML = "Happy Deepawali";
    message.innerHTML = "May the festival of lights bring warmth and happiness to your life!";
    document.body.style.background = "url('images/deepawali.jpg')";
}


else if(month == 12){

    greeting.innerHTML = "Merry Christmas 🎄";
    message.innerHTML = "Wishing you a joyful Christmas!";
    document.body.style.background = "url('images/christmas.jpg')";
}


else{

    greeting.innerHTML = "Welcome 🌎";

    message.innerHTML =
    "Have a wonderful day!";

    document.body.style.background =
    "linear-gradient(to right,blue,purple)";
}