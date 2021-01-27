import React, { Component } from 'react'
import './App.css';
import Todos from './Todos'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem:{
        text:'',
        completed : false,
        key : ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text : e.target.value,
        completed : false,
        key : Date.now()
      }
    })
  }

  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if(newItem.text !== ""){
      const newItems = [...this.state.items,newItem]
      this.setState({
        items : newItems,
        currentItem:{
          text : '',
          completed : '',
          key : ''
        }
      })
    }
  }


  deleteItem(key){
    const filtredItems = this.state.items.filter( item => item.key !== key);
    this.setState({
      items:filtredItems
    })
  }
   
  render() {
    return (
        <div className="App">
          <header>
            <form id="todo-form" onSubmit={this.addItem}>
              <input type="text" placeholder=" Enter a Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
              />
              <button type="submit">Add</button>
            </form>
          </header>  
          <Todos items = {this.state.items}  
            deleteItem = {this.deleteItem}
          >
          </Todos>
        </div>
    );
  }
}




