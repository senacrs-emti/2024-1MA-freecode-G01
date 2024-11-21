let mediaDevices = navigator.mediaDevices;

document.addEventListener("DOMContentLoaded", () => {
    let but = document.getElementById("but");
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    

// Accessing the user camera and video.
mediaDevices
    .getUserMedia({
        video: true,
        audio: true,
})
.then((stream) => {

// Changing the source of video to current stream.
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
        video.play();
        });
    })
    .catch(alert);
    });
;

// valor constante do pixel para centimetro
const pixelCM = 0.0264583333;


const btCalculaMedida = document.getElementById('calcula');
btCalculaMedida.addEventListener('click', () => {
    // captura a medida
    let medida = document.getElementById('medida').value;
    
    let conversao = ((pixelCM*medida)*100)*2;
    let roupa = document.getElementById("roupa");
    roupa.setAttribute("width", conversao);

    let manequim = document.getElementById("manequim");

    if (medida <= 48){
        tamanho = "PP"; 
        manequim.setAttribute("src","mascP.png")
    } else if ( medida >= 49 && medida <= 51){
        tamanho = "P";
        manequim.setAttribute("src","mascP.png");
    } else if (medida >=52 && medida <= 53){
        tamanho = "M";
        manequim.setAttribute("src","mascM.png");
    } else if (medida>=54 && medida <= 56){
        tamanho = "G";
        manequim.setAttribute("src","mascG.png");
    } else {
        tamanho = "GG";
    }
    
    document.getElementById("tamanhos").innerHTML = "Seu tamanho é " + tamanho;
    
});

