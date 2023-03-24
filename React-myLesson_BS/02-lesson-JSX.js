// JSX - JavaScrpt Sintax Extension
// Нижче приклад компонента
// Схожий на CSS
// Схожий на HTML
// Схожий на JS, це JS - але не являються такими

// Card та Card.img - це компоненти React

;<Card // Схожий на HTML та CSS
  style={{
    backgraundColor: `rgb(${initialColor}, ${opacity})`, // по суті це об'єкт JS
    className: 'm-2',
  }}
>
  <Card.img
    variant="top"
    style={
      imageLoaded
        ? { opacity: 1, transition: 'opacity 2s ease-in-out' }
        : { opacity: 0 } // це JS
    }
    src={image}
    alt={title}
    onLoad={() => setImageLoaded(true)} // це JS
  />
</Card>

// JSX - синтаксична надбудова над JS
// насправді, вище вказаний код конвертується в визов функції React.createElement
// Як видно він визивається два рази

React.createElement(
  Card,
  {
    style: {
      backgraundColor: `rgb(${initialColor}, ${opacity})`,
    },
    className: 'm-2',
  },
  React.createElement(Card.img, {
    variant: 'top',
    style: imageLoaded
      ? { opacity: 1, transition: 'opacity 2s ease-in-out' }
      : { opacity: 0 },
    src: image,
    alt: title,
    onLoad: () => setImageLoaded(true),
  })
)

// КОРИСТУВАЦЬКІ ТА ВБУДОВАНІ КОМПОНЕНТИ
// React поставляється вже з вбудованими компонентами JSX
// Валідний JSX, так як він містить в собі корневий елемент, в даному випадку div
return (
  <div>
    <h1>JSX in React</h1>
    <p>JSX similar to HTML</p>
    <Footer text={text} />
  </div>
)

// div, h1, p - вбудований компонент
// Footer - користувацький компонент, його має створити розробник
// React розрізняє їх по ПЕРШІЙ букві, якщо з великою, то це користувацький компонент

// JSX - ПОВИНЕН МІСТИТИ ОДИНГ КОРНЕВИЙ ЕЛЕМЕНТ
// Невалідний JSX, так як немає корневого компонента, цей код не можна використовувти
return (
  <div>
    <h1>JSX in React</h1>
    <p>JSX similar to HTML</p>
  </div>
)
