import logo from './logo.svg';
import { useState } from 'react'; 
import './App.css';

function App() {//componente principal de una app React
  const e=<h2 className='centrar-titulo'>aaa</h2>
  const c1= suma(4,6);
  return <div>
    <div>{e}</div>
    <div>{c1}</div>
    <button onClick={saludar} >To greet</button>
    <MyButton></MyButton>
  </div>
}

function MyButton(){
  const[contador, setContador]= useState(0);
  function dameClick(){
    setContador(contador +1 );
  }
  return (
    <button onClick={dameClick}>Clikeado {contador} tiempo</button>
  );
}

function saludar(){
  alert("Hello World");
}

function suma(a,b){
  //Esto es una funcion normal y no un componente que devuelve elemento HTML
  return a+b;
}
export default App; //exporeta el componente
