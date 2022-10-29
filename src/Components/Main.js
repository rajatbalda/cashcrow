import React from 'react'
import Content from './MainPage/Content'
import Footer from './MainPage/Footer'
import Header from './MainPage/Header'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './Loginandregister/Login';
import Register from './Loginandregister/Register';
import ShowOffers from './Offers/ShowOffers';
import Crouselcmp from './MainPage/Crouselcmp';
import ShowCoupons from './Coupons/ShowCoupons';
import TemporaryDrawer from './MainPage/TemporaryDrawer';

function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mb-2 mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
              <>
              <Crouselcmp />
              <Content />
              </>
            </Route>
            <Route exact path="/Home">
              <>
              <Crouselcmp />
              <Content />
              </>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/Offers">
              <ShowOffers />
            </Route>
            <Route exact path="/Coupons">
              <ShowCoupons />
            </Route>
            <Route exact path="/Dashboard">
              <TemporaryDrawer />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default Main