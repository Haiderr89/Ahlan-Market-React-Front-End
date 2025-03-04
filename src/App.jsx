import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService'; // import the authservice
import * as marketService from '../src/services/marketService'
import ProductList from './components/productList/ProductList';
import AddProduct from './components/AddProduct/AddProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';


export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice
  const [market, setMarket] = useState([]);
  const navigate = useNavigate();

	const handleSignout = () => {
		authService.signout();
		setUser(null);
	};

  const handleAddProduct = async (productFormData) => {
    const newProduct = await marketService.create(productFormData)
    const newProductList = [ newProduct, ...market];

    setMarket(newProductList)
    navigate('/market');
  };

	useEffect(() => {
		const fetchAllMarkets = async () => {
			const MarketData = await marketService.index();
			setMarket(MarketData);
		};
		if (user) fetchAllMarkets();
	}, [user]);

  const handleDeleteProduct = async (marketId) => {
    const deletedProduct = await marketService.deleteProduct(marketId);

    setMarket(market.filter((market) => market._id !== deletedProduct._id));
    navigate('/market');
  };
  
  const handleUpdateProduct = async (marketId, productFormData) => {
    const updatedProduct = await marketService.update(marketId, productFormData);
  
    setMarket(market.map((market) => (marketId === market._id ? updatedProduct : market)));
  
    navigate(`/market/${marketId}`);
  };

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
          <Route path="/market" element={<ProductList market={market}/>} />
          <Route path="/market/new" element={<AddProduct handleAddProduct={handleAddProduct}/>} />
          {/* <Route path="/market/:marketId" element={<ProductDetails />} /> */}
          <Route path="/market/:marketId/edit" element={<AddProduct handleUpdateProduct={handleUpdateProduct}/>} />
          <Route path="/market/:marketId" element={<ProductDetails handleDeleteProduct={handleDeleteProduct} />} />
          </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
