var dateOfBirthInput = document.querySelector("#dateOfBirth");
var luckyNumberInput = document.querySelector("#luckyNumber");
var buttonCheck = document.querySelector("#btn-check");
var messageValue = document.querySelector("#message");

function birthdayHandler(){
    messageValue.style.display = "none";
    var birthday = dateOfBirthInput.value.replaceAll("-","");
    var birthdaySum = sumOfDate(birthday);
    isLucky(birthdaySum,luckyNumberInput.value);
}

function sumOfDate(birthday){
    var sum =0;
    for(var i=0;i<birthday.length;i++){
        sum = sum + Number(birthday.charAt(i));
    }
    return sum;
}

function isLucky(birthday,luckyNumber){
    if(birthday % luckyNumber === 0){
        showMessage("Congratulations! You are Lucky 🥳");
    }else{
        showMessage("You are not Lucky 😣");
    }
}

function showMessage(message){
    messageValue.style.display = "block";
    messageValue.innerText = message;
}

buttonCheck.addEventListener("click",birthdayHandler);