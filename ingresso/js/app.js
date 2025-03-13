
function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso");
    let opcaoSelecionada = tipoIngresso.selectedIndex;
    let quantidade = parseFloat(document.getElementById("qtd").value);
    
    let qtdInferiorElem = document.getElementById("qtd-inferior");
    let qtdSuperiorElem = document.getElementById("qtd-superior");
    let qtdPistaElem = document.getElementById("qtd-pista");

    let quantidadeInferior = parseInt(qtdInferiorElem.textContent);
    let quantidadeSuperior = parseInt(qtdSuperiorElem.textContent);
    let quantidadePista = parseInt(qtdPistaElem.textContent);

    if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)){
        alert("Por favor insira uma quantidade positiva e inteira");
        return;
    } 

    if (opcaoSelecionada == 0) {
        quantidadeInferior -= quantidade;
        if (quantidadeInferior < 0){
            alert("Não existe o numero informado de ingressos para Cadeira Inferior")
            return
        }
        qtdInferiorElem.textContent = quantidadeInferior; 
        alert("Compra concluida com sucesso!")
    } else if (opcaoSelecionada == 1) {
        quantidadeSuperior -= quantidade;
        if (quantidadeSuperior < 0){
            alert("Não existe o numero informado de ingressos para Cadeira Superior")
            return
        }
        qtdSuperiorElem.textContent = quantidadeSuperior;
        alert("Compra concluida com sucesso!")
    } else {
        quantidadePista -= quantidade;
        if (quantidadePista < 0){
            alert("Não existe o numero informado de ingressos para Pista")
            return
        }
        qtdPistaElem.textContent = quantidadePista;
        alert("Compra concluida com sucesso!")
    }

}

