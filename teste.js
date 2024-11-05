// valor constante do pixel para centimetro
const pixelCM = 0.0264583333;


const btCalculaMedida = document.getElementById('calcula');
btCalculaMedida.addEventListener('click', () => {
    // captura a medida
    let medida = document.getElementById('medida').value;
    
    let conversao = ((pixelCM*medida)*100)*2;
    let roupa = document.getElementById("roupa");
    roupa.setAttribute("width", conversao);


    if (medida <= 48){
        tamanho = "PP"; 
    } else if ( medida >= 49 && medida <= 51){
        tamanho = "P";
    } else if (medida >=52 && medida <= 53){
        tamanho = "M";
    } else if (medida>=54 && medida <= 56){
        tamanho = "G";
    } else {
        tamanho = "GG";
    }
    
    document.getElementById("tamanhos").innerHTML = "Seu tamanho é " + tamanho;
    
});
