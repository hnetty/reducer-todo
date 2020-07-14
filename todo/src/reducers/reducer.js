export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];




export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const placeHolder = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return[ 
                ...state,
                placeHolder
            ];
        case "COMPLETED_TASK":
            console.log(action.payload)
            return state.map(obj =>  {
                return obj.id === action.payload ? { ...obj, completed : !obj.completed}:obj})
        case "CLEAR_COMPLETED":
            return state.filter( obj => !obj.completed)
        default:
         return state;
    }    
}