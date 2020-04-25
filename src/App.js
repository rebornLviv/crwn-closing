import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authorization from './pages/authorization/authorization.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
 this.unsubscribeFromAuth =   auth.onAuthStateChanged(user=>{
      console.log(user)
      this.setState({currentUser:user})
    })

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){

    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact  path='/' component={HomePage} />
        <Route   path='/shop' component={ShopPage} />
        <Route   path='/signin' component={Authorization} />
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }
  }
 

export default App;
