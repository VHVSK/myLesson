function greeting(name) {
  console.log('Hello', name)
}

// console.log(__filename);

// Якщо нам потрібно експортувати тільки одне значення
module.exports = greeting

// При цьому не робіть так як нижче:
// DON'T DO THIS!
// module.exports remains {}
// exports = greeting;
