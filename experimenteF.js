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

    if (medida <= 48){
        tamanho = "PP"; 
        manequim.setAttribute("src","femP.png")
    } else if ( medida >= 49 && medida <= 51){
        tamanho = "P";
        manequim.setAttribute("src","femP.png");
    } else if (medida >=52 && medida <= 53){
        tamanho = "M";
        manequim.setAttribute("src","femM.png");
    } else if (medida>=54 && medida <= 56){
        tamanho = "G";
        manequim.setAttribute("src","femG.png");
    } else {
        tamanho = "GG";
    }
    
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
      img = "roupaf1.png";
    break;
    case '2':
      img = "roupaf2.png";
    break;
    case '3':
      img = "roupaf3.png";
    break;
    case '4':
      img = "roupaf4.png";
    break;
    case '5':
      img = "roupaf5.png";
    break;
    case '6':
      img = "roupaf6.png";
    break;
    case '7':
      img = "roupaf7.png";
    break;
    case '8':
      img = "roupaf8.png";
    break;
    case '9':
      img = "roupaf9.png";
    break;
    case '10':
      img = "roupaf10.png";
    break;
}
document.getElementById("foto").src = img;