import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer';

const TodoList = () => {

    const [newItem, setNewItem] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewItem(e.target.value);
    }

    const submitItem = e => {
        e.preventDefault();
        dispatch({item: ''});
        setNewItem(e, newItem);
    }

    return(
        <div>
            <h1>{state.item}</h1>
            <div>
                <form onSubmit={submitItem}>
                    <input 
                        type="text"
                        name="newItem"
                        value={newItem}
                        onChange={handleChanges}
                    />

                    <button
                        onClick ={() => 
                            dispatch({ type: "ADD_TODO", payload: newItem})
                        }
                    >Add Item</button>
                    <p>{newItem}</p>
                </form>
                
            </div>
        </div>
    )

}


export default TodoList;