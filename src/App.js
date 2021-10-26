import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Prova from './components/Prova';
import ProductDetails from './components/ProductDetails';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/prod/:id" component={ProductDetails} />
      <Route exact path="/" component={ProductList} />
    </Switch>
  );
}

export default App;
