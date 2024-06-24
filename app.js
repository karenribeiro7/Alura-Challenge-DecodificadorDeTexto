function criptografar() {
    let novoTexto = '';
    let texto = document.querySelector('textarea').value;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let codigo = '';

        switch (letra) {
            case 'a':
                codigo = 'ai';
                break;
            case 'e':
                codigo = 'enter';
                break;
            case 'i':
                codigo = 'imes';
                break;
            case 'o':
                codigo = 'ober';
                break;
            case 'u':
                codigo = 'ufat';
                break;
            default:
                codigo = letra; 
                break;
        }

        novoTexto += codigo;        
    }
    limparTexto();

    exibirResultado(novoTexto);
}

function limparTexto(){
    document.querySelector('textarea').value = '';
    document.querySelector('textarea').setAttribute('placeholder', 'Digite seu texto');

}

function exibirResultado(resultado) {
    document.getElementById("textoResultado").innerText = resultado;
    document.getElementById("subtitulo").style.display = "none";
    document.getElementById("iconeResultado").style.display = "none";
    mostrarBotaoCopiar(resultado);
}


function descriptografar() {
    let textoOriginal = '';
    let novoTexto = document.querySelector('textarea').value;

    let i = 0;

    while (i < novoTexto.length) {
        let codigo = '';

        if (novoTexto.startsWith('ai', i)) {
            codigo = 'ai';
        } else if (novoTexto.startsWith('enter', i)) {
            codigo = 'enter';
        } else if (novoTexto.startsWith('imes', i)) {
            codigo = 'imes';
        } else if (novoTexto.startsWith('ober', i)) {
            codigo = 'ober';
        } else if (novoTexto.startsWith('ufat', i)) {
            codigo = 'ufat';
        } else {
            textoOriginal += novoTexto[i];
            i++;
            continue;
        }

        switch (codigo) {
            case 'ai':
                textoOriginal += 'a';
                break;
            case 'enter':
                textoOriginal += 'e';
                break;
            case 'imes':
                textoOriginal += 'i';
                break;
            case 'ober':
                textoOriginal += 'o';
                break;
            case 'ufat':
                textoOriginal += 'u';
                break;
        }

        i += codigo.length; 
    }
    limparTexto();  
    exibirResultado(textoOriginal);       
}

function mostrarBotaoCopiar(resultado) {
    if (resultado.trim() !== '') {
        document.getElementById("copiar").disabled = false;
        document.getElementById("copiar").innerText = "Copiar";
    } else {
        document.getElementById("copiar").disabled = true;
    }
}

function copiarResultado() {
    let elemento = document.getElementById("textoResultado");
    let texto = elemento.innerText || elemento.textContent;
    

    navigator.clipboard.writeText(texto).then(() => {
        document.getElementById("copiar").innerText = "Copiado!";
        document.getElementById("copiar").disabled = true; 
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}