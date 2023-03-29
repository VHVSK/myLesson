import calendar

print('\nВітаємо в календарі\n')

year = int(input('Вкажіть рік: '))
month = int(input('Вкажіть місяць: '))

print('\n')
print(calendar.month(year, month))
print('Всього найкращого!\n')