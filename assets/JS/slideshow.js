let imagensLinha1 = [
    'assets/images/solução/folhas-danificadas1.svg',
    'assets/images/solução/folhas-danificadas2.svg',
];

let imagensLinha2 = [
    'assets/images/solução/folhas-danificadas2.svg',
    'assets/images/solução/folhas-danificadas1.svg',
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