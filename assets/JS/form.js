document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    form();
});

function form() {
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let tel = document.getElementById('telefone').value;
    let plano = document.getElementById('plano').value;
    
    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('senha', senha);

    if (nome.length < 3 || nome == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o nome corretamente',
                icon: 'error'
            });
    } else if (email == '' || email.indexOf('@')==-1 || email.indexOf('.')==-1 ) {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o email corretamente',
                icon: 'error'
            });
    } else if (tel == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o telefone corretamente',
                icon: 'error'
            });
    } else if (senha == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o telefone corretamente',
                icon: 'error'
            });
    } else if (plano == 0){
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Escolha seu plano',
                icon: 'error'
            });
    } else {
        Swal.fire(
            {
                title: 'Verifique o email cadastrado',
                icon: 'success'
            });

        setTimeout(function() {
            window.open('../pages/login.html');
        }, 1750);
    };
};