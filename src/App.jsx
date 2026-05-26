import { useState } from "react";
import Botao from "./components/Botao.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";

function App() {
  // Estilos com TailWindCSS:
  const stl = {
    main:`
      flex bg-blue-100 w-screen h-screen flex-col pt-8 items-center
    `,
    h1:`
      text-3xl font-bold text-center mb-12
    `,
    borda: `
      border border-black
    `,
    botao: `
      flex items-center justify-center rounded-lg
    `,
    
    // Propriedade para testar estilos
    testStyle:(<o 
      className='
      h-screen
      '
    />)
  }
  
  // "displayIn": variável que recebe o conteúdo do display. Ex: Cálculo digitado.
  // "setDisplayIn": função que altera o conteúdo da variável acima. Ex: setDisplayIn("1+1"), o conteúdo de "displayIn" agora será "1+1".
  const [displayIn, setDisplayIn] = useState("");

  // "displayOut": variável que recebe o que vamos retornar no display. Ex: Resultado do cálculo.
  // "setDisplayOut": função que altera o conteúdo da variável acima. Ex: setDisplayOut("2"), o conteúdo de "displayOut" agora será "2", resultado do clculo acima.
  const [displayOut, setDisplayOut] = useState("");

  // Função executada ao clicar em um botão da calculadora ou escrever direto no display da mesma. Possui o parâmetro "input" que é o elemento clicado(botão) ou elemento que está sendo digitado(display).
  function handclick(input) {
    // "value" é o texto do display | "textContent" é o conteúdo do botão clicado
    // Quando chamamos essas propriedades em "input.target", ele nos retorna o "valor da propriedade" ou "undefined"
    const {value, textContent} = input.target;

    // Usamos o setDisplayIn() para alterar o conteúdo do displayIn, usei uma arrow function com o parâmetro "preValue", que é o atual do displayIn
    setDisplayIn((preValue) => {
      // Verficar se algum dos dois é "undefined", logo se um tem valor o outro é "undefined"
      
      // Se "textContent" possuir algum valor ele é "true", então vamos retornar algo.
      if(textContent) {
        // Retornaremos um valor baseado em um ifterário.
        // Se "preValue", parâmetro, possuir algum valor, retornamos esse valor mais(+) o conteúdo(textContent) do botão clicado. Porém, se "preValue" não possuir nenhum valor, retornamos apenas o conteúdo do botão clicado(textContent).
        return preValue ? preValue + textContent : textContent
      }

      // Se "value" possuir algum valor ele é "true", então vamos retornar algo.
      if(value) {
        // Verificar se o último caractere digitado é o sinal de igual, se for então vamos chamar a função "calcularComEval()" e retornar o próprio conteúdo do display.
        if(value[value.length-1] === "=") {calculaComEval(); return preValue};
        // Retornaremos um valor baseado em um ifterário.
        // Aqui verificamos se o último caractere, ou seja, o que acabamos de digitar, é uma operação("+","-","/","*") ou(||) um número(>= 0), seja qual for retornamos "value". Porém se for uma letra, por exemplo, ira ser "false" em ambas as verificações, retornando assim nada(""). 
        return (["+","-","/","*"].includes(value[value.length-1]) || parseFloat(value[value.length-1]) >= 0) ? value : ""
      }
    });
  }

  function limpar() { // Limpar todo conteúdo da tela da calculdora "displayIn".
    setDisplayIn("") // Altera o valor de "displayIn" para vazio("").
    setDisplayOut("") // Altera o valor de "displayOut" para vazio("").
  }

  function apagar() { // Apagar o último caracter da tela da calculadora "displayIn".
    // O parâmetro "preValue" é atual conteúdo de "diplayIn".
    setDisplayIn((preValue) => preValue.slice(0, -1)); // Retornamos o conteúdo de "preValue" menos o último caractere.
    setDisplayOut("") // Altera o conteúdo de "displayOut" para vazio(""). Para não ocorrer nenhum erro de cálculo.
  }

  function calculaComEval() { // Resolve a expressão aritmética digitada.
    if(["+","-","*","/"].includes(displayIn.slice(-1))) { // Verifica se o último caractere digitado na no "displayIn" é uma operação.
      // console.log(displayIn.slice(-1)) // Mostra no console o último caractere de "displayIn".
      setDisplayOut("") // Se o último caractere for uma operação o conteúdo de "displayOut" será apagado, ou seja, "displayOut" tem seu conteúdo alterado para vazio("").
    } else setDisplayOut(() => eval(displayIn)); // Se não for uma operação então "displayOut" tem seu conteúdo alterado para o resultado da expressão continda em "displaIn", calculada por "eval('1+1')", função que executa uma string como código JS.
  }

  function calcularSemEval(Num1, operacao, Num2) { // Teste: Cálculo e funcionamento como uma calculadora de mesa. Recebe os parãmetros "Num1", "Num2" e "operacao". Retorna o resultado do cálculo entre os dois números pela operacao informada.
    if(operacao == "+")  return Num1 + Num2;
    if(operacao == "-")  return Num1 - Num2;
    if(operacao == "*")  return Num1 * Num2;
    if(operacao == "/")  return Num1 / Num2;
    if(operacao == "**") return Num1 ** Num2;
    if(operacao == "%")  return Num1 * (Num2/100);
  }

  return (
    <div className={stl.main}>
      <h1 className={stl.h1}>Calculadora</h1>

      <div className="grid w-auto h-3/6 grid-cols-4 grid-rows-6 gap-1 ">
        <Input 
        value={displayIn}
        input={(e) => handclick(e)} 
        type="text" 
        placeholder="Digite" 
        classe={`
          rounded-lg
          flex 
          h-full 
          text-left 
          p-2 
          col-start-1 
          col-end-5 
          row-start-1 
          outline-none 
          ${stl.borda}
        `}
        />
        <Output 
        out={displayOut} 
        classe={`
          opacity-40
          self-end 
          pr-2 
          pb-2 
          text-end 
          h-6 
          bg-transparent 
          col-start-1 
          col-end-5 
          row-start-1
        `}
        />

        <Botao click={(e) => handclick(e)} ctn="1" classe={`${stl.botao} ${stl.borda}`}/>
        <Botao click={(e) => handclick(e)} ctn="2" classe={`${stl.botao} ${stl.borda}`}/>
        <Botao click={(e) => handclick(e)} ctn="3" classe={`${stl.botao} ${stl.borda}`}/>
        <Botao click={(e) => handclick(e)} ctn="4" classe={`${stl.botao} ${stl.borda} col-start-1 row-start-4`}/>
        <Botao click={(e) => handclick(e)} ctn="5" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-4`}/>
        <Botao click={(e) => handclick(e)} ctn="6" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-4`}/>
        <Botao click={(e) => handclick(e)} ctn="7" classe={`${stl.botao} ${stl.borda} col-start-1 row-start-5`}/>
        <Botao click={(e) => handclick(e)} ctn="8" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-5`}/>
        <Botao click={(e) => handclick(e)} ctn="9" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-5`}/>
        <Botao click={(e) => handclick(e)} ctn="0" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-6`}/>

        <Botao click={(e) => handclick(e)} ctn="+" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-2`}/>
        <Botao click={(e) => handclick(e)} ctn="-" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-2`}/>
        <Botao click={(e) => handclick(e)} ctn="/" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-3`}/>
        <Botao click={(e) => handclick(e)} ctn="*" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-4`}/>
        <Botao click={(e) => handclick(e)} ctn="." classe={`${stl.botao} ${stl.borda} col-start-1 row-start-6`}/>
        <Botao click={(e) => handclick(e)} ctn="%" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-6`}/>

        <Botao click={apagar} ctn="Del" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-2`}/>
        <Botao click={limpar} ctn="C"   classe={`${stl.botao} ${stl.borda} col-start-1 row-start-2`}/>
        <Botao click={calculaComEval} ctn="="   classe={`${stl.botao} ${stl.borda} col-start-4 row-start-5 row-end-7`}/>
      </div>
    </div>
  )
}

export default App