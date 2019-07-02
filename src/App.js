import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      member:false
    }
  }
  setMember = () => {
    this.setState({
      member:true
    })
  }
  render (){
    return (
      <div className="App">
        <Header setMember={()=>this.setMember()} member={this.state.member}/>
        <Main member={this.state.member}/>
      </div>
    );
  }
}

export default App;
