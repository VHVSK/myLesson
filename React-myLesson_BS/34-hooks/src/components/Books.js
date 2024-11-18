const Books = (props) => {
  // додали також функцію addToOrder і прокинули її далі в дочерні компоненти
  const { items = [], addToOrder } = props
  return (
    <div className='books'>
      {items.map((book) => (
        <Book key={book.id} addToOrder={addToOrder} {...book} />
      ))}
    </div>
  )
}

const Book = (props) => {
  const { id, title, price, addToOrder } = props
  return (
    <div className='book'>
      <h2>{title}</h2>
      <div>id: {id}</div>
      <div>price: {price}</div>
      <button onClick={() => addToOrder(id)}>Buy</button>
    </div>
  )
}

export { Books }
