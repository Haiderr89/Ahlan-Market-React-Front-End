import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService'; // import the authservice
import * as marketService from '../src/services/marketService'
import ProductList from './components/productList/ProductList';
import addProduct from './components/Add Product/addProduct';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const [market, setMarket] = useState([]);

  useEffect(() => {
    const fetchAllMarkets = async () => {
      const MarketData = await marketService.index();
      console.log('MarketData:', MarketData);
    };
    if (user) fetchAllMarkets();
  }, [user]);

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <Route path="/" element={<Dashboard user={user} />} />
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
          <Route path="/market" element={<ProductList ProductList={ProductList}/>} />
          <Route path="/new" element={<addProduct addProduct={addProduct}/>} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
