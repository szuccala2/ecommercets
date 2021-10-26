import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
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
      <Route exact path="/ecommerce" component={ProductList} />
      <Route exact path="/prod/:id" component={ProductDetails} />
    </Switch>
  );
}

export default App;
