const wheel = document.querySelector("img");
const zodiacSign = document.querySelector(('.zodiac-sign'));
const date = document.querySelector('.date');
const btn = document.querySelector('.btn');
let inputIndex = null;
let zodiacArray = [];
const getData = function (){
    fetch("./text.json")
        .then(response => {
            return response.json();
        })
        .then(data => zodiacArray.push(data));
}
getData()
console.log(zodiacArray);

btn.addEventListener('click', function () {
    const inputDay = ("0" + new Date(date.value).getDate()).slice(-2)
    const inputMonth = new Date(date.value).getMonth();
    inputIndex = `${inputMonth + 1}${inputDay}`;

    for (let sign of zodiacArray[0] ){
        if (inputIndex > sign.startIndex && inputIndex < sign.endIndex){
            console.log(sign.nazev)
            zodiacSign.innerHTML = sign.nazev
        } else if(inputIndex > 1121 || inputIndex < 19) {
            zodiacSign.innerHTML = " Kozoroh"
        }
    }

    console.log(zodiacSign.innerHTML);
    switch (zodiacSign.innerHTML) {
        case "Beran":
            wheel.style.transform = "rotate(0deg)"
            break;
        case "Býk":
            wheel.style.transform = "rotate(-25deg)"
            break;
        case "Blíženec":
            wheel.style.transform = "rotate(-55deg)"
            break;
        default:
            wheel.style.transform = "rotate(0deg)"
    }

});

wheel.addEventListener("click", function (){
    console.log("kliknuto")
})

switch (zodiacSign.innerHTML) {
    case "Beran":
        wheel.style.transform = "rotate(20deg)"
        break;
    case "Býk":
        wheel.style.transform = "rotate(40deg)"
        break;
    case "Blíženec":
        wheel.style.transform = "rotate(60deg)"
        break;
    default:
        wheel.style.transform = "rotate(0deg)"
}
