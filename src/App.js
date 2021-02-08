import './App.css';
import React, {Component} from 'react';
import Todo from './component/Todo'
import List from './component/List';
import View from './component/View';

class App extends Component { 
  render(){
   
    return( 
      <div>
        <List></List>
        {/* <View></View> */}
       
      </div>
    ); 
  }
}


  export default App;