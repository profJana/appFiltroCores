function preload(){
 //estamos mantendo vazia pq não temos nenhuma imagem para carregar.
}
function setup(){
    canvas = createCanvas(640,480); //altura e largura
    canvas.position(380,300); //posição, margin-left e margin-top
    video = createCapture(VIDEO); //acessa a webcam
    video.hide();
    tintColor = "";
}

function draw(){
    image(video,0,0,640,480);
    tint(tintColor);
}

function takeSnapShot(){
    save('fotoFiltro.png');
}

function filterTint(){
    tintColor = document.getElementById("colorName").value;
}

