document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    form();
});

function form() {
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let plano = document.getElementById('plano').value;
    console.log(plano);

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
    } else if (senha == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha a senha corretamente',
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
    };
};