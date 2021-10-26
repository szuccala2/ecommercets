import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Prova from './components/Prova';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/prod/:id">
        <ProductDetails />
      </Route>
      <Route path="/prova">
        <Prova />
      </Route>
    </Switch>
  );
}

export default App;
