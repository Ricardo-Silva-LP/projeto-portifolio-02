function enviarWhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');
    const telefone = '5565981274075';

    const texto = `Ola! me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto);

    const url = `http://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}


