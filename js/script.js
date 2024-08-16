/**
 * Javascript puro para o site calculadora de IMC. Ao revisar o meu código, lembre-se que sou apenas um estudante e não possou quaisquer expriencia ainda com o mercado de trabalho
 * Se você tiver alguma sugestão, critica e ideias para o que está prestes a ver, comente comigo nas minhas redes sociais que você encontra no meu perfil do github
 * Dei o meu melhor para tornar o código o melhor possivel com base nos meus atuais conhecimentos.
 */


const magrezaMaisSevera = document.querySelector(".magreza-I");
const magrezaSevera = document.querySelector(".magreza-II");
const magreza = document.querySelector(".magreza-III");
const normal = document.querySelector(".normal");
const sobrepeso = document.querySelector(".sobrepeso");
const obesidade = document.querySelector(".obesidade-I");
const obesidadeSevera = document.querySelector(".obesidade-II");
const obesidadeMaisSevera = document.querySelector(".obesidade-III");
let loop, time;



const showColorFlashing = (element, color) => {
    loop = setInterval(() => {
        element.classList.toggle(color);
    }, 300);
    time = setTimeout(() => {
        stopLoopColor(loop, time);
    }, 3000);
}

const stopLoopColor = (loop, time) => {
    clearInterval(loop);
    clearTimeout(time);
}


const notification = document.querySelector(".notification");
const message = document.querySelector(".message");
const soundAlert = document.querySelector(".audio");

const showAlert = (element) => {
    soundAlert.play();
    element.disabled = true;
    element.textContent = 'Erro'
    
    const weight = Number(document.querySelector(".weight").value);
    const height = Number(document.querySelector(".height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        message.textContent = "Verifique as informações digitadas e tente novamente!";
    } else {
        element.textContent = 'Processando...'
        const result = Math.floor((weight / (height / 100) ** 2) * 10) / 10;
        if (result < 16) {
            showColorFlashing(magrezaMaisSevera, 'red');
        } else if(result >= 16 && result < 17) {
            showColorFlashing(magrezaSevera, 'red');
        } else if(result >= 17  && result < 18.5) {
            showColorFlashing(magreza, 'yellow');
        } else if(result >= 18.5  && result < 25) {
            showColorFlashing(normal, 'green');
        } else if(result >= 25  && result < 30) {
            showColorFlashing(sobrepeso, 'yellow');
        } else if(result >= 30  && result < 35) {
            showColorFlashing(obesidade, 'red');
        } else if(result >= 35  && result < 40) {
            showColorFlashing(obesidadeSevera, 'red');
        } else {
            showColorFlashing(obesidadeMaisSevera, 'red');
        }
        message.textContent = ` Seu IMC é ${result}`;
    }

    notification.classList.toggle('active');

    setTimeout(() => {
        element.disabled = false; 
        notification.classList.toggle('active');
        element.textContent = 'Calcular IMC'
}, 3000);
}