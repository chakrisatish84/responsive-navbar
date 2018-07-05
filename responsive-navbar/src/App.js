import React, { Component } from 'react';
import SideDrawer from './/components/SideDrawer/SideDrawer'
import BackDrop from './/components/BackDrop/BackDrop'
import Toolbar from './components/Toolbar/Toolbar'
import sideDrawer from './/components/SideDrawer/SideDrawer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      sideDrawerOpen: false
    }    
  }
  drawerClickHandler =()=>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backDropClickHandler= () =>{
    this.setState({sideDrawerOpen:false})
  }
  render() {
    let sideDrawer;
    let backDrop;

    if(this.state.sideDrawerOpen){      
      backDrop = <BackDrop backdropClickHandler ={this.backDropClickHandler} />;
    };
    
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler = {this.drawerClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        
        <main style={{marginTop: "64px"}}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
