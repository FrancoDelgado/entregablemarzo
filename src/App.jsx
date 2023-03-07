import { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const form = () => {
    const [auto, setauto] = useState({
      marcaAuto: '',
      modelo: '',
    })
  }

  const [mostrar, setmostrar] = useState(true)
  
  const handleSumbit = (e) => {
    if (auto.marcaAuto.length > 4 &&
        modelo.length > 7
        ){
      setmostrar(true);

    }else {setmostrar(false)}
  }


  return (
    <div className="App">
      <h1>Elige un Auto</h1>
      
      <form onSubmit={handleSumbit}>
      <label>Marca del Auto</label>
      <input
        type = "text"
        value = {auto.marcaAuto}
        onChange = {(e) => setauto({...auto, marcaAuto: e.target.value})}
      />



      <label>Modelo del Auto</label>
      <input
        type = "text"
        value = {auto.modelo}
        onChange = {(e) => setauto({...auto, modelo: e.target.value})}
      />
      

      <button type="submit">ENVIAR</button>
      </form>
      
      {mostrar ?  (
        <>
        <Card/>
        </>
      ) : <h3>Por favor chequea que la información sea correcta</h3> }
    </div>
  
  
  
  
  
  
  );
}

export default App;
