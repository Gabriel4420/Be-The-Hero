import React from 'react';
import './global.css';
import Routes from './routes';


/* JSX (Javascript XML) */

/* Componente no React >> função que retorna um HTML, alem de possuir funcionalidades de javascript */

function App() {

  /* 
    const [counter, setCounter] = useState(0);

    function increments(){
      setCounter(counter+1);
    } 
  */

  return (
    {/* <div>
         <Header >contador: <span> {counter} </span> </Header>
         <button onClick={increments}>Incrementar</button>
    </div> */},
    <Routes />
   );
}

export default App;
