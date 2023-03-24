function PetInfo(props) {
  const { animal, age } = props
  console.log(props) // звеніть увагу, це тип строка
  return (
    <h1>
      My {animal} is {age} years old
    </h1>
  )
}

export default PetInfo
