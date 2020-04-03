import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props); // call the base class with super.
    this.state = { // define the state. it has 2 variables. 
      items:[], // 1st variable is the items array.
      currentItem: { // 2nd variable is the object for current item that stores the text of the key.
        text:'',
        key:''
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this); // bind this to construstor file
  }

  handleInput(a) {
    this.setState ( {
      currentItem: {
        text: a.target.value,
        key:Date.now()
      }
    } )
  }

  // define addItem
  addItem(a){
    a.preventDefault(); // this will prevent from the elements default behaviour operations instead. so, when click the Add button, the page doesn't get refreshed.
    const newItem = this.state.currentItem; // get currentItem and store it in a variable called newItem
    if( newItem.text !== "" ) { // check if the newItem.text is not empty
      const newItems=[...this.state.items, newItem]; // -DESTRUCTURING ASSIGNMENT- the firt parameter basically unpacks all the items in the lists and converts them into individual items and the second paramater is added to the list.
      
      // update state variable
      this.setState ( { // calling setState method
        items:newItems, // set the items to the new items array
        currentItem: {
          text:'',
          key:''
        }
      } )
    }
  }

  // it will filter all the items that doesn't match and then store it in a variable called filteredItems and just have to update the state 
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => 
      item.key !== key);
      this.setState ( {
        items:filteredItems
      } )
  }

  // define this function. it'll receives the value and the key 
  setUpdate(text, key) {
    console.log("items:"+this.state.items); 
    const items = this.state.items;
    items.map(item => { // will loop through each and every item using the map function 
      if(item.key === key) { // check if the item key is equal to key that's provided in function
        console.log(item.key + " " + key) 
        item.text = text; // change the text to the text value 
      }
    })

    // update the state with the new items
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <header>

          {/* when click Submit button, it will call the method this.addItem */}
          <form id="to-do-form" 
          onSubmit={this.addItem}> 

            <input type="text" 
            placeholder="Enter Text"
            value={this.state.currentItem.text} 
            onChange={this.handleInput}></input>
            <button type="submit">Add</button>

          </form>

          <p>{this.state.items.text}</p>

        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}/>

        </header>
      </div>
    );
  }
}
export default App;
