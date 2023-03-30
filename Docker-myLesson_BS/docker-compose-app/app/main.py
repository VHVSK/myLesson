from pymongo import MongoClient
from pprint import pprint

MONGO_URL = "mongodb://mongo:27017"
client = MongoClient(MONGO_URL)
db = client.admin
dbs_list = db.command("listDatabases")
pprint(dbs_list)

print("End!!!!!!!!!!!!!!!!!!")

# В цьому прикладі показати як різні контейнери взаємодіють один з одним

# pymongo - такого модуля в нас компі немає, але ж ми його будемо запускати в контейнері, в який буде встановлений в процесі ствренні образу.
# MONGO_URL = "mongodb://mongo:27017" - 27017 порт по якому за умовчанням працює mongodb, mongo - це ім'я іншолго сервіса, це ім'я сервера де знаходиться монго БД, як видно в цьому прикладі ми вказуємо ім'я mongo, і це БУДЕ ім'я сервісу для БД mongodb, який ми будемо використовувати в файлі docker-compose.yml, таким чином ми підтвердимо, що взяаємодія можлива використовуючи імена сервісів.
# client = MongoClient(MONGO_URL) - створення екземпляра MongoClient
# db = client.admin - вибрати БД
# pprint(dbs_list) - вивід, показати список БД


