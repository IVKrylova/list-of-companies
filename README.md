# Тестовое задание для Frontend developer

## Стек технологий
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![](https://img.shields.io/badge/-JSON--Server-blue?style=for-the-badge&logo)

## Запуск проекта
`npm run start` — запускает проект (интерфейс + сервер) <br />
`npm run dev` — запускает frontend на порту 3000 <br />
`npm run server` — запускает сервер на порту 3001

## Описание
Одностраничное приложение "Список компаний". Слева имеется таблица со списком компаний. <br />
Справа - таблица сотрудников выбранной компании. Данные в таблицах храняться в store. Данные для таблиц  фейковые, созданы с помощью npm json-server. <br />
Тело таблицы компаний имеет столбцы: <br /> Чекбокс | Название компании | Кол-во сотрудников | Адрес <br />
Тело таблицы сотрудников имеет столбцы: <br /> Чекбокс | Фамилия | Имя | Должность

## Функционал приложения
* Возможность выбрать строку таблицы при клике по чекбоксу
* Возможность выбрать все строки таблицы при клике по чекбоксу "Выделить все"
* Возможность видеть данные сотрудников компании в таблице сотрудников при выделении компании в таблице компаний
* Если не выделена ни одна из компаний, таблица сотрудников не видна
* Все поля таблиц редактируемые кроме счетчика сотрудников в таблице компаний
* В обеих таблицах реализован механизм добавления/удаления компаний/сотрудников по соответствующим кнопкам
* Удаление может быть множественное
* При добавлении/удалении сотрудников у компании счетчик сотрудников в таблице компаний обновляется
