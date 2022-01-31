import {useState} from 'react';
import './app.css';


function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensage, setMensage] = useState('Esperando dados...');

  function calcularIMC(){
    const alt = altura /100;
    const imc = peso/(alt * alt)


    if(imc < 18.6){
      setMensage("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMensage("Você está no peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMensage("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >34.9){
      setMensage("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso em (kg) ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Altura em (cm) ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{mensage}</h2>
    </div>
  );
}

export default App;