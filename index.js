const wheel = document.querySelector("img");
const zodiacSign = document.querySelector('.zodiac-sign__header__h2');
const zodiacSignText = document.querySelector('.zodiac-sign__text');
const zodiacSignContainer = document.querySelector('.zodiac-sign__info');
const date = document.querySelector('.zodiac-sign__date');
const btn = document.querySelector('.zodiac-sign__btn');
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
    console.log(inputIndex)

    for (let sign of zodiacArray[0] ){
        if (sign.id === 9 && (inputIndex >= 1221 || inputIndex <= 120)) {
            zodiacSign.innerHTML = sign.nazev
            zodiacSignText.innerHTML = sign.text[0]
        }
        else if (inputIndex >= sign.startIndex && inputIndex <= sign.endIndex){
            zodiacSign.innerHTML = sign.nazev
            zodiacSignText.innerHTML = sign.text[0]
        }
    }

    zodiacSignText.style.opacity = 1;
    zodiacSign.style.opacity = 1;
    zodiacSignContainer.style.opacity = 1;

    console.log(zodiacSign.innerHTML);
    switch (zodiacSign.innerHTML) {
        case "Beran":
            wheel.style.transform = "rotate(0deg)"
            break;
        case "Býk":
            wheel.style.transform = "rotate(-30deg)"
            break;
        case "Blíženec":
            wheel.style.transform = "rotate(-60deg)"
            break;
        case "Rak":
            wheel.style.transform = "rotate(-90deg)"
            break;
        case "Lev":
            wheel.style.transform = "rotate(-120deg)"
            break;
        case "Panna":
            wheel.style.transform = "rotate(-150deg)"
            break;
        case "Váhy":
            wheel.style.transform = "rotate(-180deg)"
            break;
        case "Štír":
            wheel.style.transform = "rotate(-210deg)"
            break;
        case "Střelec":
            wheel.style.transform = "rotate(-240deg)"
            break;
        case "Kozoroh":
            wheel.style.transform = "rotate(-270deg)"
            break;
        case "Vodnář":
            wheel.style.transform = "rotate(-300deg)"
            break;
        case "Ryby":
            wheel.style.transform = "rotate(-330deg)"
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
