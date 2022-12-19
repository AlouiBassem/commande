
import './App.css';
import Menu from './Components/Menu';
import {BrowserRouter as Router  , Routes, Route} from "react-router-dom"
import Listearticle from './Components/Article/Listearticle';
import './Components/style.css';
import ListeParCategorie from './Components/Article/ListeParCategorie';
import Homepage from './Components/Homepage';

import Formulaire from './Components/Formulaire';
import ListeTicket from './Components/Ticket/ListeTicket';
import ListeTicket1 from './Components/Ticket/ListeTicket1';



//fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {

//console.log(response)})

function App() {
  return (
    <div className="App">

<Router>
<Menu/>


<Routes>

<Route path="/article" element={<Listearticle/>} />
<Route path="/" element={<Homepage/>} />
<Route path="/categorie" element={<ListeParCategorie/>} />
<Route path="/ticket1" element={<ListeTicket1/>} />
<Route path="/ticket" element={<ListeTicket/>} />
<Route path="/formulaire" element={<Formulaire/>} />

</Routes>
</Router>
      
    </div>
  );
}

export default App;
