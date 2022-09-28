function buscar_end(){
    if(cep.value.length !== 8){
        alert('CEP invalido')
        cep.value = '';
        return;
    }
    fetch(`http://viacep.com.br/ws/${cep.value}/json`) // Busca
        .then((resposta) => resposta.json()) // Extrair o resposta.json
        .then((endereco) => {
            if(endereco.erro){
                alert('Cep invalido')
                return;
            }
            logradouro.value = endereco.logradouro;
            bairro.value = endereco.bairro;
            cidade.value = endereco.localidade;
            uf.value = endereco.uf;
        }); // Usar o resposta.json
}