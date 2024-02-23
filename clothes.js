



var button = document.querySelector(".btn");

var changingPic = document.querySelector("#changing-pic");



button.addEventListener("click", function () {

    var randomNumber = (Math.floor(Math.random () * 55)+1);
    var randomDress = ("./" + randomNumber + ".png");

    changingPic.setAttribute ("src", randomDress);


    // changing the header that shows for pic number 47
    let hotPic = 47;
    if (randomNumber === hotPic) { 
        document.querySelector(".mainTextHeading").innerHTML = "🌶️ A little bit sexy!"
    }

    else { 
        document.querySelector("h3").innerHTML = "Let's choose what to wear."
    }
}); 

// changing main pic 1
var mainPics1 = document.querySelectorAll("#img1")[0];
var randomNumber1 = (Math.floor(Math.random () * 5)+1);

randomPic1 = ("./MP" + randomNumber1 + ".png");

mainPics1.setAttribute("src", randomPic1);

// changing main pic 2

var mainPics2 = document.querySelectorAll ("#img1")[1];
var randomNumber2 = (Math.floor(Math.random () * 3)+1);
randomPic2 = ("./MP" + randomNumber2 + ".png");

mainPics2.setAttribute("src", randomPic2);


// changing main pic 3 

var mainPics3 = document.querySelectorAll ("#img1")[2];
var randomNumber3 = (Math.floor(Math.random () * 4)+1);
randomNumberRemoveFirstPic = (randomNumber3 + 1);
randompic3 = ("./MP" + randomNumberRemoveFirstPic + ".png");

mainPics3.setAttribute("src", randompic3);

// making sure two pic don't appeear at a time

let pic1 = ("./MP" + 1 + ".png");
let pic2 = ("./MP" + 2 + ".png");
let pic3 = ("./MP" + 3 + ".png");
let pic4 = ("./MP" + 4 + ".png");
let pic5 = ("./MP" + 5 + ".png");


if (randomNumber1 === randomNumber2) {
    mainPics1.setAttribute("src", pic1);
    mainPics2.setAttribute("src", pic4);
    mainPics3.setAttribute("src", pic5);
}

 else if (randomNumber2 === randomNumber3) {
    mainPics2.setAttribute("src", pic4);
    
}

else if (randomNumber1 === randomNumber3) {
    mainPics2.setAttribute("src", pic4);
    mainPics3.setAttribute("src", pic5);
}
