const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/desconto', (req, res) => {
    const {salario} = req.body;
    const tetoINSS = 7087.22;  
    let desconto = 0;
    let salarioFinal = salario;


    if (salario <= 1212) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = tetoINSS * 0.14;
    }

    salarioFinal = salario - desconto;

    res.json({
        desconto: desconto.toFixed(2),
        salarioFinal: salarioFinal.toFixed(2)
    });

});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
});


app.post('/triangulo', (req, res) => {
    const {ladoA} = req.body;
    const {ladoB} = req.body;
    const {ladoC} = req.body;


    
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Por favor, insira valores válidos e positivos para os lados.");
        return;
    }

    let tipo = '';

   
    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = 'Equilátero';
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        tipo = 'Isósceles';
    } else {
        tipo = 'Escaleno';
    }
    
    res.json({tipo});
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
});

app.post('/mercadoria', (req, res) => {
    const {nome} = req.body;
    const {preco} = req.body;


    if (nome === "" || isNaN(preco) || preco <= 0) {
        alert("Por favor, insira o nome e o preço da mercadoria corretamente.");
        return;
    }

   
    let aumento = 0;
    if (preco < 1000) {
        aumento = preco * 0.05; 
    } else {
        aumento = preco * 0.07; 
    }

    
    const novoPreco = preco + aumento;

    
    res.json({novoPreco, nome});
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
});

app.post('/numero', (req, res) => {
    const {num1} = req.body;
    const {num2} = req.body;
    const {num3} = req.body;
    const {num4} = req.body;
    const {num5} = req.body;
    const {num6} = req.body;
    
    let numeros = [num1, num2, num3, num4, num5, num6];

    let maiorNumero = Math.max(...numeros);

    res.json({maiorNumero});
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
});

app.post('/ordenar', (req, res) => {
    const {num1} = req.body;
    const {num2} = req.body;
    const {num3} = req.body;
    const {num4} = req.body;
    const {num5} = req.body;
    
    let numeros = [num1, num2, num3, num4, num5,];

    let numerosOrdenados = numeros.sort((a, b) => a - b);

    res.json({numerosOrdenados});
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
});
app.use(cors());
app.use(express.json());
app.post('/comparar', (req, res) => {
    const {num1} = req.body;
    const {num2} = req.body;
    const numeros = [num1, num2];
    const maiorNumero = Math.max(...numeros);
    const menorNumero = Math.min(...numeros);

    res.json({ maiorNumero, menorNumero });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/ordemCresc', (req, res) => {
    const { preco } = req.body;
    let rj = 0;

    if (preco >= 1500 && preco < 1750) {
        rj = preco * 15 / 100;
    } else if (preco >= 1750 && preco < 2000) {
        rj = preco * 12 / 100;
    } else if (preco >= 2000 && preco < 3000) {
        rj = preco * 9 / 100;
    } else if (preco >= 3000) {
        rj = preco * 6 / 100;
    }

    let total = preco + rj;

    res.json({ total });
});

app.post('/Media', (req, res) => {
    const {nota1} = req.body;
    const {nota2} = req.body;
    const {nota3} = req.body;
    const {nome} = req.body;
    let media = (nota1 + nota2 + nota3) / 3;
    let situação = "";

    if (media >= 6) {
        situação = "Aprovado";
    } else if (media < 6 && media >= 4) {
        situação = "Recuperação";
    } else if (media < 4) {
        situação = "Retido";
    } 

    res.json({ nome, situação, media });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/LojadeRoupa', (req, res) => {
    const {vest} = req.body;
            let resultado = "";

            switch(vest) {
                case 'Camisa':
                    resultado = "20% de desconto!";
                    break;
                case 'Bermuda':
                    resultado = "10% de desconto";
                    break;
                case 'Calça':
                    resultado = "15% de desconto";
                    break;
                default:
                    resultado = "Peça não existente";
                    break;
            }

    res.json({ resultado });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});