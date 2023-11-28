import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './concepts/cakeShopApp/store';
// imports about comp dynamically
// import CakeContainer from './concepts/cakeShopApp/CakeContainer';
// import HooksCakeContainer from './concepts/cakeShopApp/HooksCakeContainer';
// import IceCreamContainer from './concepts/cakeShopApp/icecream/IceCreamContainer';
// import NewCakeContainer from './concepts/cakeShopApp/NewCakeContainer'
// import ItemContainer from './concepts/cakeShopApp/ItemContainer';
// import UserContainer from './concepts/fetchAPI/UserContainer';
import Home from "./concepts/React Router/Home"
// import About from './concepts/React Router/About'
// for lazy loading the component must be defaultly exported
import { Navbar } from './concepts/React Router/Navbar';
import OrderSummary from './concepts/React Router/OrderSummary'
import NoMatch from './concepts/React Router/NoMatch'
import Products from './concepts/React Router/Products';
import FeaturedProducts from './concepts/React Router/FeaturedProducts'
import NewProducts from './concepts/React Router/NewProducts'
import UserDetails from './concepts/React Router/UserDetails';
import Users from './concepts/React Router/Users'
import Profile from './concepts/React Router/Profile';R
import { AuthProvider } from './concepts/React Router/Auth';
import RequireAuth from './concepts/React Router/RequireAuth'
import Login from './concepts/React Router/Login'
const LazyAbout = React.lazy(() => import('./concepts/React Router/About'))

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<React.Suspense fallback="loading... ">
              <LazyAbout />
            </React.Suspense>}></Route>
            <Route path='order-summary' element={<OrderSummary />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:userId' element={<UserDetails />} />
            <Route path='products' element={<Products />}>
              {/* allows to access the /products route in parent level */}
              <Route index element={<FeaturedProducts />} />
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new-products' element={<NewProducts />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
            <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='login' element={<Login/>}/>
          </Routes>
          {/* <CakeContainer /> */}
          {/* <HooksCakeContainer/> */}
          {/* <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
        <IceCreamContainer/> */}
          {/* <UserContainer/> */}
        </div>
      </Provider>
    </AuthProvider>
  );
}

export default App;
