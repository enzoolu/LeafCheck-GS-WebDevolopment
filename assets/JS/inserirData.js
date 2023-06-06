let inserirData = document.getElementById('inserirData')
let now = new Date()
    inserirData.innerHTML = ("Hoje é: " + now.getDate().toString().padStart(2,'0') +
                     "/" + (String(now.getMonth() + 1).padStart(2,'0') +
                     "/" + now.getFullYear()));