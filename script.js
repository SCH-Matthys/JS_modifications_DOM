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
