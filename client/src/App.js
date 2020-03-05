import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import Questions from './components/pages/Questions/QuestionsPage';
import Contact from './components/pages/Contact/ContactPage';
import TermsOfUse from './components/pages/TermsOfUse/TermsOfUsePage';
import Cart from './components/pages/Cart/CartPage';
import SingleItem from './components/pages/SingleItem/SingleItemPage';
import OrderSummary from './components/pages/OrderSummary/OrderSummaryPage';
import NotFound from './components/pages/NotFound/NotFoundPage';


class App extends React.Component {
  render(){
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" exact component={Questions} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/termsofuse" exact component={TermsOfUse} />
          <Route path="/items:id" exact component={SingleItem} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/summary" exact component={OrderSummary} />
          <Route component={NotFound} />
        </Switch>  
      </MainLayout>
    );
  }
}

export default App;
