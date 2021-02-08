import React, {Component} from 'react';
import Delete from './Delete';
import Todo from './Todo';

class View extends Component { 
  
 render(){
      const items = this.props.add.map((e)=>{return (<div key={e.id}>
          {e.id}{e.todo}
           <button onClick={()=>{
              this.props.remove(e.id)
          }}>remove</button>
          <button onClick={()=>{
            this.props.update(e.id,e.todo)
          }}>update</button> 
          </div>)
      })
    return( 
      <div>
        <center>
      {items}
      </center>
      </div>
    ); 
  }
}


  
export default View;
