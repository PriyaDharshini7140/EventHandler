import React, {Component} from 'react';

import Todo from './Todo';

class View extends Component { 
  constructor(props) { 
    super(props); 
    this.state= { 
       add:this.props.add,
    } 
  } 
  
 render(){
      // const  {add} = this.state
      const items = this.state.add.map((e)=>{return (<div key={e.id}>
          {e.id}
          <input type="text" onChange={e=> this.setState({add:e.target.value})} value={this.state.add}/>
          {e.todo}
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
