import './App.css';
import { StarWarsProvider } from './Context/StarWarsContext';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Detail from './Components/Detail';
import List from './Components/List';
import Header from './Components/Header';

function App() {
  return (
   <StarWarsProvider>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<List/>} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </Router>
   </StarWarsProvider>
  );
}

export default App;
