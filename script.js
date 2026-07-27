//versão mais antiga com var
var idade = 25;
var nome = "Marcos";
var estudante = true;

//introduzido no E56
let idade = 25;
let nome = "Marcos";
let estudante = true;

//valores constantes que não mudam
const PI = 3.14;
const NOME_EMPRESA = "TechSolutions";







//1. Tipos primitivos
Tipos de JavaScript
Number (Numero)
Representa tanto numeros inteiros quanto decimais
let idade = 25;//Inteiro
let altura = 1.75;//Decimal
let temperatura = -5//numero negativo

String (Texto)
let nome = "Dona"
let sobrenome = 'Traidor'
let endereco = "Rua Belterra 291 Santo Amaro Sp"//Template sting (E56)

Boolean (Booleano)
representa valores logicos: verdadeiro (true) ou falso (false)
let estudante = true;
let aprovado = false;
Underfined
Representa uma variavel que foi declarada, mas não recebeu um valor
let cidade; // valor é Underfined
Null
Representa a ausência intencional de valor
let telefone = null; //Explicidamente sem valor



2. Tipos Complexos
//Array(Vetor)
//Coleção ordenada de valores
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misturado = [1, "dois", true, null];

//Object (Objeto)
//Coleção de pares chave valor
let pessoa = {
    nome: "Ana" ,
    Idade: 35 ,
    profissão: "Desnvolvedora"
};


Verificando o Tipo de uma variavel

let idade = 25;
console.log(typeof idade);

let nome = "Maria";
console.log(typeof nome);

let ativo = true;
console.log(typeof ativo);


Conversão entre Tipos
//De String para Number
let numeroTexto = "42";
let numero = Number(numeroTexto);
console.log(typeof numero);//Number

let numero1 = parseInt(numeroTexto);//Para inteiros
let numero2 = parsefloat(numeroTexto);//Para decimais

//De Number para String
let numero = 42;
let texto = String(numero);//"42" (texto)
// Alternativa
let texto2 = numero.toString():
//Para Boolean
let valor = 1;
let booleano = BooLean(valor);
//Valores que convertem para false;
//0, "", null, underfined, NaN, false



Exemplo Pratico: Caluladora de Idade

//declaração de variaveis
const anoAtual = 2026;
let anoNascimento = 1990;
//Calculando a idade
let idade = anoAtual - anoNascimento;
//exibindo o resultado
console.log(`Você tem ${idade} anos.`);





Exemplo Prático:
//Calculadora de média de notas
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.5;

let media = (nota1 + nota2 + nota3) / 3;
console.log(`Sua media é ${media.toFixed(1)}`);

let pontos = 100;
console.log(`Pontuação Inicial: ${pontos}`);
//O jogador ganhou 50 pontos
pontos += 50; //Adiciona 50 pontos
console.log(`Pontuação apos ganha 50 pontos: ${pontos}`);
//O jogador perdeu 30 pontos
pontos -= 30; //Subtrai 30 pontos
console.log(`Pontuação apos perder 30 pontos ${pontos}`);