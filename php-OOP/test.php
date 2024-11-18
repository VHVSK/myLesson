<?php

////////////////////////////////////////////////////////////////////////////
// Гарний робочий метод
// https://youtu.be/-V43jPvGLgw

echo '<div><strong>Стоврити новий клас та наслідувати дочірній</strong></div>';

// Створимо новий клас
class Person
{
  public $name = 'Назва не визначена'; // ініціалізація змінних за умовчанням

  public function __construct($name)
  { // функція яка запускається автомастично
    $this->name = $name;
  }

  public function parsenInfo()
  { // метод, функція яку можна визвати щоб вивести імя
    return ('Назва ' . $this->name);
  }
}

// Створимо новий клас який буде наслідувати наш основний клас
class Job extends Person
{
  public $jobName;

  public function __construct($name, $jobName)
  { // функція яка запускається автомастично
    $this->jobName = $jobName;

    // щоб передати данні з дочірнього класу в основоний клас, але їх потріно також десь взяти, тобто передати данні в дочірній які потім попадають в основний. Тоді можна визвати дочірній клас без помилок, не визиваючи соновний клас.
    parent::__construct($name);
  }

  public function getJobName()
  {
    return ('Робота ' . $this->jobName);
  }
}

$admin = new Person('Віталій'); // ініціалізуємо новий клас та передамо назву
echo $admin->parsenInfo(); // тепер можна вивести данні - Віталій

echo '<br>';

$jobName = new Job('Віталій', 'Програміст');
echo $jobName->getJobName();

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

echo '<div><strong>Якщо прописати зі змінною private</strong></div>';
// змінні та функції зі ознакою private, protected
// private - доступ тільки в цьому класі
// protected - дорступ в цьому та дочірньому класі
// Геттер та Сеттер
// щоб задавати та виводити змінні потрібно використовувати спеціальні метоти Геттер та Сеттер
// Можна задвати вручну такі функції, а можна створити геттер та сеттер які ПХП буде генерувати автоматичному режимі
// Геттер ми вже використовували вище getJobName()

// класс з private
class Job2
{
  private $jobName;

  public function __construct($jobName)
  { // функція яка запускається автомастично
    $this->jobName = $jobName;
  }

  public function setJobName($jobName)
  {
    $this->jobName = $jobName;
  }

  public function getJobName()
  {
    return ('Робота ' . $this->jobName);
  }
}

// і щоб вивести ми звертаємося до методів
$job2 = new Job2('Developer');
echo $job2->getJobName();

echo '<br>';

$job2->setJobName('Manager');
echo $job2->getJobName();



echo '<div><strong>Спеціальні методи ГЕТ та СЕТ</strong></div>';


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Якщо ми працюємо з приватними змінними нам краще використовувати динімічні Тетери та Сетери

// Створимо новий клас який буде наслідувати наш основний клас
class Job3
{
  private $name;

  public function __set($name, $value)
  {
    $this->$name = $value;
  }

  public function __get($name)
  {
    return $this->name;
  }
}

$jobName3 = new Job3();
$jobName3->jobName = 'Програміст';
echo $jobName3->jobName;

echo '<br>';

$jobName3->jobName = 'Тетстувальник';
echo $jobName3->jobName;


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
echo '<div><strong>Константи</strong></div>';

// Це змінні які ніколи не змінюються

// Створимо новий клас
class Person4
{

  const NATIONALITY = 'Ukrainian';

  public $name = 'Назва не визначена'; // ініціалізація змінних за умовчанням

  public function __construct($name)
  { // функція яка запускається автомастично
    $this->name = $name;
  }

  public function parsenInfo()
  { // метод, функція яку можна визвати щоб вивести імя
    return ('Назва ' . $this->name);
  }
}

// Створимо новий клас який буде наслідувати наш основний клас
class Job4 extends Person4
{

  const COMPANY = 'YouTube';

  public $jobName;

  public function __construct($name, $jobName)
  { // функція яка запускається автомастично
    $this->jobName = $jobName;

    // щоб передати данні з дочірнього класу в основоний клас, але їх потріно також десь взяти, тобто передати данні в дочірній які потім попадають в основний. Тоді можна визвати дочірній клас без помилок, не визиваючи соновний клас.
    parent::__construct($name);


    // щоб звернутися до константи в середині класу
    echo 'константи в середині класу - ' . self::COMPANY . '<br>';
    // щоб звернутися до константи в бітьківському класі
    echo 'константи в бітьківському класі - ' . parent::NATIONALITY . '<br>';
  }

  public function getJobName()
  {
    return ('Робота ' . $this->jobName);
  }
}

$admin4 = new Person4('Віталій'); // ініціалізуємо новий клас та передамо назву
echo $admin4->parsenInfo(); // тепер можна вивести данні - Віталій

echo '<br>';

$jobName4 = new Job4('Віталій', 'Програміст');
echo $jobName4->getJobName();

echo '<br>';

// щоб вивести контанту звертаємося до класу і :: та назва константи
echo Job4::COMPANY;

echo '<br>';

// Щоб витвести констату з батьківського класу
echo Person4::NATIONALITY;
