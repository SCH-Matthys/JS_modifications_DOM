// // Exercice 1 :
// const btn = document.getElementById("btn");
// const paragraph = document.getElementById("message");
// const input = document.getElementById("userInput");

// btn.style.marginBottom = "64px";

// function inputCheck(){
//     if(input.value === "Bonjour" || input.value === "Au revoir"){
//         paragraph.style.color = "green";
//         if(input.value === "Bonjour")
//             paragraph.textContent = "Bonne journée !"
//         if(input.value === "Au revoir")
//             paragraph.textContent = "À la prochaine !"
//     }else{
//         paragraph.style.color = "red";
//         paragraph.textContent = "Je ne comprends pas"
//     }
// }

// btn.addEventListener("click", inputCheck);


// Exercice 2 : 
// const btn = document.getElementById("calculate");
// const firstInput = document.getElementById("number1");
// const secondInput = document.getElementById("number2");
// const result = document.getElementById("result");

// function calculate(){
//     calcul = Number(firstInput.value) + Number(secondInput.value);
//     result.textContent = "Résultat : " + calcul;
// }

// btn.addEventListener("click", calculate);


// Exercice 3 : 
// const container = document.getElementById("container");
// const images = document.getElementsByClassName("image-diapo");

// for( let image of images){
//     image.addEventListener("click", () =>{
//         const sourceImg = image.getAttribute("src");
//         const sourceString = sourceImg.toString();
//         console.log(sourceImg, sourceString);
//         container.style.backgroundImage = "url('"+sourceImg+"')";
//     })
// }


// Exercice 4 : 
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia (Federated States of)", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
const bar = document.getElementById("searchBar");
const ul = document.getElementById("countriesList");

for( const country of countries){
    const li = document.createElement("li");
    li.textContent = country;
    ul.appendChild(li);
}

bar.addEventListener("input", () =>{
    const barValue = bar.value.toLowerCase();
    console.log(bar, barValue);

    Array.from(ul.children).forEach((li) => {
        if(li.textContent.toLowerCase().includes(barValue)){
            li.style.display = "block";
        }else{
            li.style.display = "none";
        }
    });
});