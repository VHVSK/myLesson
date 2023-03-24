function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    padding: '10px',
    margin: '10px auto',
    width: '350px',
    height: '125px',
  }

  return (
    <div style={style}>
      <h1>Hello from Wrapper</h1>
      {props.children}
    </div>
  )
}

export default Wrapper

// Додали властивість style={}, значення його об'єкт, тому ще одна пара фігурних дужок

// Давайте винесемо { backgroundColor: props.color } в окремий об'єкт style та додамо інші стилі.
