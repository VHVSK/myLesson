// ОБ'ЄКТИ
            // всі сущності в JS  - це об'єкти
            // Об'єкт - набір властивостей "ім'я: значення"
            // Це - тип значень, це тип змінних
            // Це посилающийся тип

            // Структура об'єкта, в прикладі нижче три властивосі
            // порядок немає значення, але рекомендується сортувати по довжині
            // Рекомендується використовувати тип const
            // незважаючи на те, щоб тип константа, ми не змінюємо значення змінної, так вона має тільки посилання на обєкт, а сам обєкти ми зсінюємо.
            const myCity = {
                city: 'New York',
                popular: true,
                country: 'USA'
            }
            // доступ до властивостей через крапку, точковий запис, dot notation, напр.: myCity.city
            console.log(myCity.city)

            // ЗМІНИТИ данні, наприклад:
            myCity.city = 'Las Vegas'
            console.log(myCity.city)

            // ДОДАТИ властивості
            // незважаючи на тип данних const, можна змінювати об'єкт, сам тип змінної не змінюється, так як це посилення
            myCity.language = 'en'
            console.log(myCity.language)
            // або додати через квадратні дужки, як в масивах, так само як і через крапковий метод
            // дужковий запис
            myCity['popular'] = false
            // такий метод знадобиться також тоді, коли назви зміннох співпаждає з назвою властивості, наприклад:
            const countryPropertyName = 'country'
            myCity[countryPropertyName] = 'USA'
            // так не вийде, як нижче, бо створиться властивість countryPropertyName, а нам потріна country
            // це не підходить нам: myCity.countryPropertyName = 'USA'

            // ВИДАЛИТИ властивості, задача 58
            // в даному варіанти видаляється тільки одна властивість
            delete myCity.language
            console.log(myCity)


            // ВКЛАДЕНІ об'єкти
            const myCityNew.vObj = {
              values1: true,
              values2: false,
              info: { // вкладений об'єкт
                isPopular: true,
                country: 'USA'
              }
            }
            // два варінати доступа
            console.log(myCityNew.info.isPopular);
            delete myCityNew.info['isPopular'];

            // 4-15
            // СКОРОЧЕНИЙ формат запису властивостей в об'єкті, формат створення об'єктів
            const myName = 'Viktor'
            const postiOty = 23

            // Звичаний
            const userProfile1 = {
              myName: myName,
              postiOty: postіOty,
              myLang: false
            }

            // Скорочений запис імені властивості об'єкта
            const userProfile2 = {
              myName, // скорочений варіан записів, приклад в задачі 53
              postiOty, // такі записи краще вказувати на початку об'єкта, також можна сортувати по довжині назви
              myLang: false,
              info() { // скорочений запис функціх, тобто метода
                console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
              },
              info2: function info2() { // повний запис функції, тобто метода, варіант 1
                console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
              },
              info3: () => { // повний запис функції, тобто метода, варіант 2
                console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
              },
              dimensions: dimensions, // звичаний запис
              [dimensions]: true // динамічний запис властивості, тобто назва властивості = значенню
            }

            // задача 53, згадано про замикання, тобто
            // функція photosGallery вже виконана, а метод в ній все ще доступний

            // ЗАДАЧА 48
            // перебрати масив з об'єктами, дістати значення, створити в новому об'єкті змінну з цим значенням, перевірити чи є таке значення, та зсумувати значення іншого значення.
            // В задачі 47 також метод reduce

            // Варіант 1
            // const quantitiesByCategories = (products) => {
            //   return products.reduce((accumulator, currentValue) => {
            //     accumulator[currentValue.category] = (accumulator[currentValue.category] || 0) + currentValue.quantity
            //     return accumulator
            //   }, {})
            // }

            // Варіант 2, викориттовуючи коротший запис, з деструктуризацією
            const quantitiesByCategories = (products) => {
              return products.reduce((accumulator, currentValue) => {

                const { category, quantity} = currentValue // реструктуризація, це значить, створити дві змінні, та присвоїть їм значення які відповідно відповідають значенням об'єкта currentValue

                accumulator[category] = (accumulator[category] || 0) + quantity
                return accumulator
              }, {})
            }

            // Задача 77
            // Повернути у фіункції обєкт з методами
            function createGreeting() {
              let greetingString = 'Hey, this is'

              function greet(name) {
                return `${greetingString} ${name}`
              }

              function changeGreeting(newGreating) {
                greetingString = newGreating
              }

              return { greet, changeGreeting } // обєкт з методами
            }

      // ЗАДАЧА 79 -перебрати властивості обєкта
      const objectWithNumbers = {
        a: 10,
        b: 20,
        c: 'string',
        d: 12,
      }

      function sumObjectValues(nums) {
        let sum = 0
        // за допогою Object.keys() - статичний метод який знаходиться в об'єкті, Object - це батьківський клас всіх об'єктів в JS, оримаємо масив ключів ВЛАСНОГО об'єкта (без унаслідуваних)
        // перебрати ці ключі
        Object.keys(nums).forEach((key) => {
          if (typeof nums[key] === 'number') {
            sum += nums[key]
          }
        })

        return sum
      }

      const result = sumObjectValues(objectWithNumbers)
      console.log(result)
      //42


      // ЗАДАЧА 79 - перебрати значення об'єкта
      const objectWithNumbers = {
        a: 10,
        b: 20,
        c: 'string',
        d: 12,
      }

      function sumObjectValues(nums) {
        let sum = 0
        // за допогою Object.keys() - статичний метод який знаходиться в об'єкті, Object - це батьківський клас всіх об'єктів в JS, оримаємо масив ключів ВЛАСНОГО об'єкта (без унаслідуваних)
        // перебрати ці ключі
        Object.keys(nums).forEach((key) => {
          if (typeof nums[key] === 'number') {
            sum += nums[key]
          }
        })

        return sum
      }

      // самостійне опрацювання з методом reduce
      function sumObjectValues_reduce(nums) {
        return Object.keys(nums).reduce(
          (accumulator, currentValue) =>
            typeof nums[currentValue] === 'number'
              ? accumulator + nums[currentValue]
              : accumulator,
          (initialValue = 0)
        )
      }

      // самостійне опрацювання з методом entries
      function sumObjectValues_entries(nums) {
        let sum = 0
        Object.entries(nums).forEach((Element) =>
          typeof Element[1] === 'number' ? (sum += Element[1]) : 0
        )

        return sum
      }