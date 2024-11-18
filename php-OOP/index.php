<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>ООП на PHP</title>
</head>

<body>

    <h1><a href="test.php">Практичний зразок створення та наслідування класу</a></h1>


    <h1>ООП на PHP</h1>
    <h2>Урок №1 Введение основы ООП. Классы и объекты.</h2>
    <?php

    echo 'Клас - шаблон для створення обєктів...<br>';
    // https://www.youtube.com/watch?v=ToUlSK8Wiyk&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=1
    // Створити новий клас
    class ShoppingCard
    {
    }
    class Shopping
    {
    }

    $product1 = new ShoppingCard();
    $product2 = new ShoppingCard();
    $product3 = new ShoppingCard();

    var_dump($product1 instanceof ShoppingCard);
    var_dump($product2 instanceof Shopping);
    var_dump($product3);

    // instanceof - чи являеться обєкт екземляром якогось класу 

    ?>

    <h2>Урок №2 Свойства класса. Область видимости свойства. Изменить свойства и обратиться к объекту</h2>
    <?php
    // https://www.youtube.com/watch?v=ZT7dgmqsLxE&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=2

    class Shop
    {
        // public
        // private - тільки в середині методу 
        // protected - в середині класу та в середина дочірнього класу

        private $name; // приватна властивість

        // Методи  - це функції в середині класу. Також мають область доступу. 
        // Якщо не вказано, то public
        public function naming()
        {
            $this->name = 'Adidas'; // звернемося до змінної в цьому класі, без начка $
            echo $this->name;
        }
    }

    $product = new Shop();
    $product->naming(); // запустити метод в класі, ЗВЕРНЕННЯ ДО МЕТОДА
    //$product->name = 'Nike'; // присвоїти значення властивості

    echo '<br>';

    class User
    {
        // Створимо властивість
        // Присвоїсо значення за умовчанням
        public $name = 'Name';
        public $password = 'Password';
        public $email = 'Email';
        public $city = 'City';
    }

    // Створити екземпляр-обєкт
    $admin = new User();
    $User1 = new User();
    // Присвоїсо значення
    $admin->name = 'Alex';
    $User1->name = 'Vlad';

    echo $admin->name . ' - ' . $User1->name;

    // Додати властивысть до обэкта
    $User1->surname = 'Ivanov';
    echo ' ' . $User1->surname;


    ?>



    <h2>Урок 4. Конструкторы и деструкторы. Магические методы.</h2>
    <?php
    // https://www.youtube.com/watch?v=ORF6R0eYfhs&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=4
    // __construct - це метод який виконується за умовчання при ініціалізації класу  

    class Usertest
    {

        public $name;
        public $pass;
        public $email;

        // Автоматично визвати цю фуекцію
        function __construct($name, $pass, $email)
        {
            $this->name = $name;
            $this->pass = $pass;
            $this->email = $email;
        }

        function getInfo()
        {
            return $this->name . $this->pass  . $this->email;
        }
    }

    $userTest = new Usertest('Alex', '1234', 'mail@mail.com');
    echo $userTest->name;
    var_dump($userTest);

    echo '<br><br>';

    $userTest2 = new Usertest('Oleksiy', '3456', 'mail@mail.com');
    echo $userTest2->name;
    echo $userTest2->getInfo();


    // https://www.youtube.com/watch?v=ORF6R0eYfhs&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=4

    class destractableClass
    {
        function __construct()
        {
            print 'Consctuct;';
            $this->name = 'Consctuct;';
        }

        function __destruct()
        {
            print 'Destruct -> ' . $this->name;
        }
    }


    //$constr = new destractableClass(); // знищує

    ?>

    <h2>Урок 5 - Переменная $this и Self. Для чего нужны?</h2>

    <?php
    // https://www.youtube.com/watch?v=PHE9kCowTgc&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=5

    echo '$this - звернення до поточного клаусу з середини класу. <br>';
    echo 'self - звернення до статичних властивостей та методів в контексті класу...??? <br>';

    class userSelf
    {
        private static $name;

        public static function setName($name1)
        {
            self::$name = $name1;
        }

        public static function getName()
        {
            return self::$name;
        }
    }



    echo '<br><br>';

    userSelf::setName('Alex');
    echo userSelf::getName();
    ?>

    <h2>Урок №6. Конструкторы в наследовании. Свойство protected.</h2>
    <?php

    class User2
    {
        // Створимо властивість
        // Присвоїсо значення за умовчанням
        public $name = 'Name';
        public $password = 'Password';
        public $email = 'Email';
        public $city = 'City';

        // Захищений метод, мжна викоритовувати але не змінювати
        // Доступ з класу або підкласу
        //protected $protectedTest;

    }

    final class User_final
    {
        // Заборонити переоприділяти метод або клас
        final function getInfo()
        {
            echo 'final... <br>';
        }
    }

    $User_final = new User_final();
    $User_final->getInfo();

    /*// Створити екземпляр-обєкт
    $admin = new User();
    $User1 = new User();
    // Присвоїсо значення
    $admin->name = 'Alex';
    $User1->name = 'Vlad';

    echo $admin->name . ' - ' . $User1->name;

    // Додати властивысть до обэкта
    $User1->surname = 'Ivanov';
    echo ' '. $User1->surname;*/

    class Moderator extends User2
    {
        public $info;
        public $rights;

        function hello()
        {
            echo 'Moderator is here ';
        }


        // Використовувати в дочерньому класі
        // parent::__construct($name, $password, $email, $city, $info, $rights);
    }

    $moderator = new Moderator();
    $moderator->name = 'Віктор';
    $moderator->password = 'Пароль';
    $moderator->email = 'мило@mail.com';
    $moderator->city = 'Kiev';
    $moderator->info = 'Модератор';
    $moderator->rights = 'Права';
    var_dump($moderator);



    ?>

    <h2>Урок №7. Инкапсуляция и полиморфизм</h2>
    <?php
    echo 'полиморфизм - следствие унаследования... просто переопределила функцию. <br>';
    echo 'Инкапсуляция - размещение в оболочке, изоляция, закрытие чего-либо...<br><br>';

    // http://www.php.su/learnphp/phpoo/?cp
    class A
    {
        // Выводит, функция какого класса была вызвана
        function Test()
        {
            echo "Test from A<br>";
        }
        // Тестовая функция — просто переадресует на Test()
        function Call()
        {
            $this->Test();
        }
    }

    class B extends A
    {
        // Функция Test() для класса B
        // просто переопределила функцию Test()
        function Test()
        {
            echo "Test from B<br>";
        }
    }

    $a = new A();
    $b = new B();

    $a->Call(); // выводит "Test from A"
    $b->Test(); // выводит "Test from B"
    $b->Call(); // Внимание! Выводит "Test from B"!

    // просто переопределила функцию
    ?>

    <h2>Урок №8. Статические свойства и методы.Где применяют.</h2>

    <?php
    echo 'Статические свойства - свойства, к которым можно обратиться без содания объекта...<br>';

    class Statics
    {
        public static $name;

        public static function hello_sts()
        {
            // self аналог $this
            echo 'Hello ' . self::$name;
        }
    }

    // не створили обєкт
    Statics::$name = 'Viktor<br>';
    echo Statics::$name;
    // не створили обєкт
    Statics::hello_sts();
    ?>

    <h2>Урок 9. Константы класса.Постоянные свойства</h2>

    <?php
    class Consts
    {
        // не використовуємо специфікатори
        // всі у відкритому доступі
        // не призначати обєкти, для простих данних
        // змінювати контанти не можна!!! Буде помилка.
        const SOME_CONST = 314;
    }

    echo Consts::SOME_CONST;

    ?>

    <h2>Урок 10. Абстрактные классы - класи для яких не можна робити екземпляри (об'єкти)</h2>

    <?php
    // класи для яких не можна робити екземпляри
    abstract class Absracts
    {
        public $name;

        // абстарктні методи - такий метод може бути без тіла
        // він обовязково має бути реалізований в дочірньому класі
        abstract public function getAbstrct();
    }

    class AbstrctsSUPER extends Absracts
    {
        public function getAbstrct()
        {
            echo 'Admin ';
        }
    }

    $AbstrctsSUPER = new AbstrctsSUPER();
    echo $AbstrctsSUPER->getAbstrct();

    // видасть помилку
    //$Absracts1 = new Absracts();

    ?>

    <h2>Урок 11. Интерфейсы в ООП</h2>
    <?php
    // єто просто шаблони, список данных и методов
    // екземпляр не створювати
    // опис структур , только списток
    // нет методов, только перечеслненее

    interface firstInterface
    {
        public function getName();
    }

    interface secondInterface
    {
        public function getStatus();
    }

    // можна декілька виокристовувати, тоді перераховуємо через кому
    // class Test implements firstInterface, secondInterface {}

    // також підтримує множествене наслідування
    // interface thirdInterface extends firstInterface, secondInterface {}

    class Test implements firstInterface
    {
        // обовязкова реалізація всіх методів які перелічені в інтерфейсі
        public $name = 'Alex';

        public function getName()
        {
            echo $this->name;
        }
    }

    $Test = new Test();
    echo $Test->getName();

    ?>

    <h2>Урок 12. Трейты php.</h2>

    <?php
    // Обеденить общие методы для всех последующих класов
    // Преднозначен для групирования функционала

    // ПРИКЛАД 1
    class Base
    {
        public function sayHello()
        {
            echo 'Hello ';
        }
    }

    trait sayWorld
    {
        public function sayHello()
        {
            // доповнюємо його
            parent::sayHello();
            echo 'World! <br>';
        }
    }

    class MyHelloWorld extends Base
    {
        use sayWorld;
    }

    $obj = new MyHelloWorld();
    $obj->sayHello();

    // ПРИКЛАД 2
    trait Hello
    {
        public function Hello()
        {
            echo 'Hello ';
        }
    }

    trait World
    {
        public function World()
        {
            echo 'World! ';
        }
    }

    class myHelloWorld_2
    {
        use Hello, World;
    }
    $obj2 = new myHelloWorld_2();
    $obj2->Hello() . ' ' . $obj2->World();

    ?>

    <h2>Урок 13. Магические методы get,set,clone</h2>

    <?php
    // __clone
    class UserClone
    {
        // магический метод всегда начинается с двух подчеркиваний
        public function __clone()
        {
            echo 'Cloned<br>';
        }
    }

    $objClone = new UserClone();
    // у клона тепер доступний метод __clone
    $objClone2 = clone $objClone;


    // __get
    // __set
    // private ....
    class GetSet
    {
        private $number = 1;

        // $name не задано!!!
        public function __get($name)
        {
            echo $name . '<br>';
        }

        public function __set($name, $value)
        {
            echo 'Номер ' . $name . ' - ' . $value . '<br>';
        }
    }

    $obj = new GetSet();
    echo $obj->number;

    echo $obj->number = 2;

    ?>

    <h2>Урок 14. Пространства имен</h2>
    <?php
    // способ организасции пространства
    // изолировать, чтобы избегать конфликтов названий
    // имеющий имя фрагмент программы
    // для класов, интерфейсов, функций, констант


    //namespace home; 
    // призначили імя, в іншому файлі через префікс будемо мати доступ до класу...
    // namespace ЗАВЖДИ зверху
    class user14
    {
    }

    // 2 варіант
    //namespace home2;
    //    {
    //        
    //    }

    // в новом файле
    //require_once('index.php');
    //$obj = new \home\user14();
    // $obj->getInfo();

    // namespace можна импортировать 
    // для этого есть use
    // use поимогает создавать псевдонимы

    // use newClass\home as Home;

    // можна групировать
    // use some\namespace\ {classA, ClassB}
    // use function some\namespace\ {functionA, functionB}
    // use const some\namespace\ {constA, constB}
    ?>

    <h2>Урок 15. Обработка ошибок PHP</h2>
    <?php
    // https://www.youtube.com/watch?v=TFdiKsCZfWI&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=15

    ?>

    <h2>Урок 16. Исключения (Exceptions)</h2>
    <?php
    // https://www.youtube.com/watch?v=MCNFpthTnio&list=PLVfMKQXDAhGV1kj1gEGTgdzXt2jHwg-if&index=16
    ?>
</body>

</html>