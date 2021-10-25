import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {
    HashRouter,
    BrowserRouter as Router,
    Route
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Route exact path="/prod/:id" component={ProductDetails} />
        <Route exact path="/ecommerce" component={ProductList} />
    </HashRouter>
  );
}

export default App;
