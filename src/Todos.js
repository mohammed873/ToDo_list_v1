import React from 'react';
import './Todos.css'
import  FlipMove from "react-flip-move";

function Todos(props) {

    const items = props.items;
    const listItems = items.map(item =>{
        return (
            <div className ="list-item" key={item.key}> 
               <div id="cancel">
                 <span> ✔️</span>
               </div>
               <div id='task'>
                  {item.text}
               </div>
               <div id="done">
                 <span onClick={ () => props.deleteItem(item.key)}>❌</span>
               </div>
            </div>
            
        ) 
        
    })
    return (
        <div>
            <FlipMove duration={600} easing="ease-in-out" >
                {listItems}
                <br/>
            </FlipMove>
        </div>
       
    );
}

export default Todos;
