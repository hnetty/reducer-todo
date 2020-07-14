import React, { useState, useReducer } from 'react';

import { reducer, initialState } from '../reducers/reducer';

const TodoList = () => {

    const [newItem, setNewItem] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewItem(e.target.value);
    }

    const submitItem = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: newItem})
        setNewItem('');
    }

    const  handleToggle = id => {
        dispatch({
            type: "COMPLETED_TASK",
            payload:id})
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        })
    }

    return(
        <div>
            
            <div>
                <form>
                    <input 
                        type="text"
                        name="newItem"
                        value={newItem}
                        onChange={handleChanges}
                    />

                    <button onClick={submitItem}>Add Item</button>
                    <button onClick={clearCompleted}>Clear Completed</button>
                </form>
                
                
            </div>

            <div>
                {state.map(obj => (
                    <div key={obj.id} onClick={() =>handleToggle(obj.id)} className={`task${obj.completed ? ' complete' : ''}`}>{obj.item}</div>
                ))}
            </div>
        </div>
    )

}


export default TodoList;