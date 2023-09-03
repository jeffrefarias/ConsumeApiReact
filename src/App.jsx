import { useState } from 'react';
import './App.css'
import MiApi from './components/MiApi'
import ListaPaises from './components/Lista'
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [area, setArea] = useState('Canadian');
  const [filtro, setFiltro] = useState("");


  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center mt-5 mb-5'>
          <div className="col-4">
            <ListaPaises area={area} setArea={setArea} />
          </div>
          <div className="col-4">
            <Buscador setFiltro={setFiltro} />
          </div>
        </div>
        <div className='row justify-content-center  text-center'>
          <MiApi area={area} filtro={filtro} />
        </div>
      </div>

    </>
  )
}

export default App
