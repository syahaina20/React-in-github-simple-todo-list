import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => //use a function called map. this is basically like a for loop 
        {
            return <div className="list" key={item.key}>
                {/* <p>{item.text} */}
                <p>
                    <input type="text" 
                    id={item.key} // mention the ID as the key value so can uniquely identify that 
                    value ={item.text}
                    onChange ={ // define onChange attribute 
                        (a) =>{ //call the reference of the function that we want
                            props.setUpdate(a.target.value, item.key) // pass the value and the key value as the parameters
                        }
                    }
                    />
                <span>
                    <FontAwesomeIcon className="faicons" 
                    onClick={ () => { // use arrow functions to pass the reference and going to pass the key value to uniquely identify which item want to be deleted 
                        props.deleteItem(item.key) 
                    }} 
                    icon="trash" />
                </span>
                </p>
            </div>
        } ) 

    return(
        //display ListItems inside return statement of the functional component
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )

}

export default ListItems;