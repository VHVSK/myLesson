import './Info.css'
import styles from './Info.module.css'

console.log(styles)
// {info: 'Info_info__0+lO2', myOtherButton: 'Info_myOtherButton__ILIPz'}

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading h2 in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>
        Click me in the Info component
      </button>
    </div>
  )
}

export default Info
