FROM python:alpine
WORKDIR /app
RUN pip install pymongo
COPY . .
CMD ["python", "main.py"]

# RUN - виконати команду, щоб в контейнері був доступний млдуль для імпорта, нам потрібно його вствановити
# https://pypi.org/project/pymongo/
# pip install pymongo
