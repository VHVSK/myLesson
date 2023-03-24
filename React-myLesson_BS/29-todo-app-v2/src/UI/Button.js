import styles from './Button.module.css'

function Button(props) {
  const { children, disabled = false } = props
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button

//  Згадайте, props містить всі властивості які передаються!
// {...props} - деструктуризайіяя всіх, деякі потім перезапишемо, таким чином можемо залишити всі ті властивості які передаються і які ми не будемо рперезаписувати далі.
// className, disabled - ми перезапишемо, якщо вони є в props, також вони в нас змінються коли потрібно
// Тобто, такі поля onClick та title і в одній і type - виведемо і перезапишемо з тих які вивели за допомогою {...props}
// Тобто, ми робимо деструктуризацію тільки тих параметрів які змінюються, а ті які не змінюються ми виводимо {...props}
// Спочатку {...props}, а потім ті які перезаписуються
// Хух)))

/**
 * Нижче код, а вище той спосіб який дає нам можливість використвоувати поля які передаються, але не деструктуризуються, тобто як параметри за умовчанням у функції які не вказані в параметрах
 * 
 * import styles from './Button.module.css'

function Button({ onClick, children, title, disabled = false }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
 */
