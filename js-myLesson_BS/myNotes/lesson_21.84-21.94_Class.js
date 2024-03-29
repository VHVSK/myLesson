// Класи та прототипи
// ВВЕДЕННЯ В КЛАСИ ТА ПРОТОТИПИ
// данний синтаксив появився в ЕС6
// Це шаблони, заготовки для обєктів
// Класи позволяють створювати прототипи для об'єктів
// На основі прототипів, створюються багато екземплярів
// Екземпляри мають свої власні властивості та методи
// Також екз. можуть наслідувати методи та властивості

// Приклад класу
class Comment {
  constructor(text) {
    // метод який визаважться в любому випадку
    // тим самим можна створити власні властивочсті, тобто ми створюємо властивість this.text і потім можемо звертатися до значення через this.text
    this.text = text // сторимо в екземплярі змінну та присвоїмо отримане значення text
    this.votesQty = 0
  }
  // constructor - визивається тільки коли створюється новий екземпляр

  // створюється властивість text та votesQty
  upvote() {
    this.votesQty += 1
  }
  // upvote - метод, функція
}

// this вказує на екземпляр класа, за допомогою можна змінювати власні значення екземпляра

// Створення екземплярів
// new
const firstComment = new Comment('First comment!')
// все, ми маємо об'єкт firstComment
console.log(firstComment.text)

// Метод upvote видно на рівні прототипу
// Comment {text: 'First comment!', votesQty: 0}
// text: "First comment!"
// votesQty: 0
// [[Prototype]]: Object
//     constructor: class Comment
//     upvote: ƒ upvote()
//     [[Prototype]]: Object

firstComment.upvote() // +1
firstComment.upvote() // +1
// = 2

// firstComment
// Comment {text: 'First comment!', votesQty: 2}
// text: "First comment!"
// votesQty: 2
// [[Prototype]]: Object

// ЦЕПОЧКА ПРОТОТИПІВ
// firstComment -> Comment -> Object
// Тобто, наслідується по цепочці, щось типу:
// firstComment.
// firstComment.Comment
// firstComment.Comment.Object

// ПЕРЕВІРКА ПРИНАЛЕЖНОСТІ КЛАСУ
// instanceof - щоб перевірити, до якого класу належить екземпляр
firstComment instanceof Comment // true
firstComment instanceof Object // true
firstComment instanceof Array // false

// Набрати в консолі браузера
// hasOwnProperty - метод, наслідується від об'єкта, можна перевірити приналежнійсть властивості екземпляра конкретного класа
// firstComment.hasOwnProperty('text') // true
// firstComment.hasOwnProperty('votesQty') // true
// upvote - це не власна властивість
// firstComment.hasOwnProperty('upvote') // false
// firstComment.hasOwnProperty('hasOwnProperty') // false

// ВИЗОВ УНАСЛІДУВАНИХ МЕТОДІВ
// Можна визивати багатократно
firstComment.upvote()
firstComment.upvote()

// СТВОРЕННЯ ДЕКІЛЬКА ЕКЗЕМПЛЯРІВ
// створимо новий екз. об'єкта
const secondComment = new Comment('second comment!')
const thirdComment = new Comment('third comment!')
secondComment.upvote()
thirdComment.upvote()

// ПРАКТИКА
// Набрати в браузері
Comment.prototype

// {constructor: ƒ, upvote: ƒ}
// constructor: class Comment
// upvote: ƒ upvote()
// [[Prototype]]: Object

// Досить цікаво, це внутрішні справи JS
// Comment.prototype.constructor === Comment // true

// СТАТИЧНІ МЕТОДИ
// static - додається в клас, та він не наслідується екземплярами
// Цей метод доступний як властивість класу і НЕ НАСЛІДУЮТЬСЯ екземплярами класу

class testStatic {
  constructor(text) {
    this.text = text
  }

  upvote() {
    this.text = text + '!'
  }

  // static
  static mergeComments(first, second) {
    return `${first} ${second}`
  }
}

console.dir(testStatic)
/*
        mergeComments - присутній, але він не буде доступний на рівні екземплярів класів об'єкта
        
        console.dir(testStatic)
        class testStatic
        length: 1
        mergeComments: ƒ mergeComments(first, second)
        name: "testStatic"
        prototype: {constructor: ƒ, upvote: ƒ}
        arguments: (…)
        caller: (…)
        [[FunctionLocation]]: VM188:2
        [[Prototype]]: ƒ ()
        [[Scopes]]: Scopes[2]    
        */

const test = new testStatic('Text test')

// В консолі браузера
test
/*
        mergeComments - відсутній

        testStatic {text: 'Text test'}
        text: "Text test"
        [[Prototype]]: Object
        constructor: class testStatic
        upvote: ƒ upvote()
        [[Prototype]]: Object
        */

// ТОБТО, цей метод static можна визивати прямо з класу, статично, а не в екземплярах.
// Мій висновок такий, що це типу як просто функцію створити...

// ЗАДАЧА 78

class Fruit {
  constructor(title, price) {
    this.title = title
    this.price = price
  }

  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`
  }
}

// Повторюся:
// метод який визаважться в любому випадку
// тим самим можна створити власні властивочсті, тобто ми створюємо властивість this.text і потім можемо звертатися до значення через this.text

const apple = new Fruit('Apple', 2)
console.log(apple.priceInfo())
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3)
console.log(orange.priceInfo())
// Price of the Orange is 3$
