function dice() {
    var num1 = Math.floor(Math.random() * 6 + 1);
    var num2 = Math.floor(Math.random() * 6 + 1);
    var ranImg = "dice" + num1 + ".png";
    var ranImgSource = "images/" + ranImg;
    var img1 = document.querySelectorAll("img")[0].setAttribute("src", ranImgSource);
    var ranImg2 = "dice" + num2 + ".png";
    var ranImgSource2 = "images/" + ranImg2;
    var img2 = document.querySelectorAll("img")[1].setAttribute("src", ranImgSource2);
    if (num1 > num2) {
        var result1 = document.querySelector("h1");
        result1.innerHTML = "Player1 has won";
    } else if (num1 < num2) {
        var result2 = document.querySelector("h1");
        result2.innerHTML = "Player 2 has won ";
    } else {
        var result3 = document.querySelector("h1");
        result3.innerHTML = "Draw!!";
    }


}

dice();