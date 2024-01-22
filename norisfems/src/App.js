import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Auth from './components/Auth';


function App() {
  return (

    //render home component
    <Home />
  );
}

export default App;
