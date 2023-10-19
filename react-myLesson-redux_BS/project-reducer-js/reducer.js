const initialState = []

function reducer(state, action) {
  if (action.type === 'ADD_NAME') {
    return [...state, action.payload]
  }

  if (action.type === 'DELETE_NAME') {
    // filter - повертає новий масив, в даному випадку всі значення які не такі як action.payload
    return state.filter((personName) => personName !== action.payload)
  }

  if (action.type === 'CLEAR_NAMES') {
    // (просто очистити масив)
    return []
  }

  return state
}

// Визови:

// initialState - ADD_NAME
let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Viktor' })
console.log(newState) // [ 'Viktor' ]

// newState - ADD_NAME
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' })
console.log(newState) // [ 'Viktor', 'Alice' ]

// newState - MODIFY_NAME (в нас поки немає MODIFY_NAME, тому ніяких зимін)
newState = reducer(newState, { type: 'MODIFY_NAME', payload: 'Alice' })
console.log(newState) // [ 'Viktor', 'Alice' ]

// newState - DELETE_NAME
newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Alice' })
console.log(newState) // [ 'Viktor' ]

// newState - CLEAR_NAMES
newState = reducer(newState, { type: 'CLEAR_NAMES' })
console.log(newState) // []

// newState - ADD_NAME
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Bob' })
console.log(newState) // [ 'Bob' ]
