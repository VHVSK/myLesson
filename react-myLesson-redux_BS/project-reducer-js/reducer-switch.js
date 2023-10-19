const initialState = []

// теж саме тільки з switch

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload]

    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload)

    case 'CLEAR_NAMES':
      return []

    default:
      return state
  }
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
