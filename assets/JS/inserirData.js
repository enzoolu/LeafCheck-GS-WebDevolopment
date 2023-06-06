let inserirData = document.getElementById('inserirData');
let inserirHora = document.getElementById('inserirHora');

let now = new Date();

inserirData.innerHTML = `Dia: ${now.getDate().toString().padStart(2,'0')}/${String(now.getMonth() + 1).padStart(2,'0')}/${now.getFullYear()}`;
inserirHora.innerHTML = `Hora: ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;