/* let mediaDevices = navigator.mediaDevices;

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
*/

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

    if (medida <= 77){
        tamanho = "PP"; 
        largura = 3.5;
        altura = 4;
        manequim.setAttribute("src","mascP.png")
    } else if ( medida >= 78 && medida <= 82){
        tamanho = "P";
        largura = 3.8;
        altura = 3.8;
        manequim.setAttribute("src","mascP.png");
    } else if (medida >=83 && medida <= 88){
        tamanho = "M";
        largura = 4.2;
        altura = 4.2;
        manequim.setAttribute("src","mascM.png");
    } else if (medida>=89 && medida <= 94){
        tamanho = "G";
        largura = 4.6;
        altura = 4.6;
        manequim.setAttribute("src","mascG.png");
    } else {
        tamanho = "GG";
        largura = 4.8;
        altura = 4.8;
        manequim.setAttribute("src","mascG.png")
    }
    document.getElementById("roupaSobre").setAttribute("width",largura);
    document.getElementById("roupaSobre").setAttribute("height",altura);
    document.getElementById("tamanhos").innerHTML = "Seu tamanho é " + tamanho;
    
});


/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}
 
 
// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});


//document.querySelector('body').setAttribute('style', '');
//document.getElementById('arjs-video').setAttribute('style', 'width: 100vw;height: 100vh;object-fit: cover;position: absolute;top: 0;left: 0;');

// pega a url
const searchParams = new URLSearchParams(window.location.search);
roupa = searchParams.get('roupa');
let img = '';
switch (roupa) {
    case '1':
      img = "roupam1.png";
    break;
    case '2':
      img = "roupam2.png";
    break;
    case '3':
      img = "roupaMnova.png";
    break;
    case '4':
      img = "roupam4.png";
    break;
    case '5':
      img = "roupam5.png";
    break;
    case '6':
      img = "roupam6.png";
    break;
    case '7':
      img = "roupam7.png";
    break;
    case '8':
      img = "roupam8.png";
    break;
    case '9':
      img = "roupam9.png";
    break;
    case '10':
      img = "roupam10.png";
    break;
}
document.getElementById("foto").src = img;