import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

const App = () => {
  let user = true;
  return(
    
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products/:category' element= {<ProductList />}/>
          <Route path='/product/:id' element={ <Product />}></Route>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={user ? <Navigate to="/"/> : <Register/> }/>
          <Route path='/login' element= {user ? <Navigate to="/"/> : <Login/> }/>
          <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  </div>
  )
};

export default App;
