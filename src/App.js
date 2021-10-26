import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/prod/:id" component={ProductDetails} />
        <Route exact path="/ecommerce" component={ProductList} />
    </Router>
  );
}

export default App;
