let imagensLinha1 = [
    'assets/images/solução/folha-danificada1.png',
    'assets/images/solução/folha-danificada2.png',
];

let imagensLinha2 = [
    'assets/images/solução/folha-danificada2.png',
    'assets/images/solução/folha-danificada1.png',
];

let index = 0;
let time = 5000;

function slideShow() {
    document.getElementById('image1').src = imagensLinha1[index];
    document.getElementById('image2').src = imagensLinha2[index];
    index++;
    if (index == imagensLinha1.length) { index = 0; }
    setTimeout("slideShow()", time);
}
slideShow();