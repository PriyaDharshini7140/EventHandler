import React, {Component} from 'react';
import Delete from './Delete';
import Todo from './Todo';
import View from './View';

class List extends Component { 
  constructor(props) { 
    super(props); 
    this.state= { 
           list:[
        {
            id:1,
        todo:"add todo",
    },
], 
    } 
  } 
  addHandler=(text)=>{ 
    console.log(text);
  const arrCopy = [... this.state.list]
  console.log(arrCopy)
  arrCopy.push({id:Math.round(Math.random()*1000),todo:text})
  this.setState({list:arrCopy,})
};
 removeHandler=(text)=>{ 
    console.log(text);
  const arrCopy = [... this.state.list]
const filter = arrCopy.filter((e)=>e.id !== text)
  this.setState({list:filter})
};
updateHandler=(id,text)=>{
   console.log(text,id);
   const arrCopy = [... this.state.list]
   const update = arrCopy.map((e)=>{
       if(e.id !== id){
            
       }
    })

}

   render(){
    return( 
      <div>
        <center>
        <Todo addItem={this.addHandler}></Todo>
        <View add={this.state.list} remove={this.removeHandler} update={this.updateHandler} ></View>
       
         </center>
      </div>
    ); 
  }
}


  
export default List;
