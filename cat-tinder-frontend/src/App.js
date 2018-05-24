import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import { getCats, createCat } from './api'


export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        cats: [],
        newCatSuccess: false
      }
    }


    componentWillMount() {
        getCats()
        .then(APIcats => {
            this.setState({
                cats: APIcats
            })
        })
    }


handleNewCat(newCatInfo) {
    console.log("New Cat TRY", newCatInfo)
    createCat(newCatInfo)
    .then(successCat => {
        console.log("CREATE SUCCESS!", successCat);
        this.setState({
            newCatSuccess: true
        })
    })
}


  render() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
                    <Route exact path="/" render={(props) => <NewCat onSubmit ={this.handleNewCat.bind(this)} success={this.state.newCatSuccess}/>} />
                </Switch>
            </Router>
        </div>
    );
  }
}
