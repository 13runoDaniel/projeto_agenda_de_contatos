const form = document.getElementById('form-contato');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    criaLinha();
    adicionaLInha();
    totalDeContato();
});

function criaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nome.includes(inputNomeContato.value)){
        alert(`Revisar nome ${inputNomeContato.value} pois está duplicado`);
    }else if(numero.includes(inputNumeroContato.value)){
        alert(`Revisar número ${inputNumeroContato.value} pois está duplicado`);
    }else{
        nome.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    };
};

function adicionaLInha(){
    document.querySelector('tbody').innerHTML = linhas;
};

function totalDeContato(){
    document.getElementById('contar-contato').innerHTML = numero.length;
};