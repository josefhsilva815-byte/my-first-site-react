import { useState } from "react";
import Botao from "./components/Botao.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";

function App() {
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
    
    
    testStyle:(<o 
      className='
      h-
      '
    />)
  }

  const [displayIn, setDisplayIn] = useState("");
  const [displayOut, setDisplayOut] = useState("");

  function handclick(input) {
    const {value, textContent} = input.target;
    setDisplayIn((preValue) => {
      if(value) { return value };
      if(textContent) return preValue ? preValue + textContent : textContent
    });
  }

  function limpar() { // Limpar todo conteúdo da tela da calculdora
    setDisplayIn("")
  }
  function apagar() { // Apagar o último caracter
    setDisplayIn((preValue) => preValue.slice(0, -1));
  }
  function calcular() { // Resolve a expressão aritmética digitada
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
        <Botao click={(e) => handclick(e)} ctn="x" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-4`}/>
        <Botao click={(e) => handclick(e)} ctn="." classe={`${stl.botao} ${stl.borda} col-start-1 row-start-6`}/>
        <Botao click={(e) => handclick(e)} ctn="%" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-6`}/>

        <Botao click={apagar} ctn="Del" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-2`}/>
        <Botao click={limpar} ctn="C"   classe={`${stl.botao} ${stl.borda} col-start-1 row-start-2`}/>
        <Botao click={calcular} ctn="="   classe={`${stl.botao} ${stl.borda} col-start-4 row-start-5 row-end-7`}/>
      </div>
    </div>
  )
}

export default App