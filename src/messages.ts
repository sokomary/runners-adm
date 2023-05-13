const messages = {
  "home.header": "welcome home",
  "company.name": "Runners&Companies",

  "loginpage.login.placeholder": "Номер телефона",
  "loginpage.account.continue": "Продолжить",

  "register.code.question": "Не пришел код? ",
  "register.code.actions.resend": "Отправить код еще раз",
  "register.code.actions.submit": "Продолжить",
  "register.code.header": "Введите код",
  "register.code.resended": "Код отправлен на ваш номер",

  "menu.header": "Администрирование",
  "menu.items": `{
    name, select,
    users {Пользователи}
    valuations {Оценки}
    campaigns {Кампании}
    zones {Города}
    other {}
  }`,
  "menu.logout": "Выйти",

  "users.title": "Пользователи",
  "users.title.count": "Всего {count}",
  "users.empty": "Зарегистрированных в системе пользователей нет",
  "users.companies.empty": "Компаний не нашлось",
  "users.companies.title": "Компании ({count})",
  "users.companies.current.count": "Найдено {count}",
  "users.companies.filters.date": "Дата регистрации",
  "users.companies.filters.text": "Id, название или город",
  "users.companies.table.headers.id": "ID",
  "users.companies.table.headers.name": "Название",
  "users.companies.table.headers.registrationDate": "Дата регистрации",
  "users.companies.table.headers.town": "Город",
  "users.companies.table.headers.creationDate": "Дата создания",
  "users.companies.table.headers.lastAuthDate": "Последняя аутентификация",

  "users.couriers.empty": "Курьеров не нашлось",
  "users.couriers.title": "Курьеры ({count})",
  "users.couriers.current.count": "Найдено {count}",
  "users.couriers.filters.date": "Дата регистрации",
  "users.couriers.filters.birthDate": "Дата рождения",
  "users.couriers.filters.text": "Id, имя или город",
  "users.couriers.table.headers.id": "ID",
  "users.couriers.table.headers.name": "Имя",
  "users.couriers.table.headers.registrationDate": "Дата регистрации",
  "users.couriers.table.headers.town": "Город",
  "users.couriers.table.headers.birthDate": "Дата рождения",
  "users.couriers.table.headers.lastAuthDate": "Последняя аутентификация",

  "valuations.empty": "Отзывов не нашлось",
  "valuations.count": "Всего {count}",
  "valuations.current.count": "Нашлось {count}",
  "valuations.fields.value": "Оценка",
  "valuations.fields.text": "Отзыв",
  "valuations.fields.category": "Категория",
  "valuations.fields.category.value": `{
    category, select,
    COMPANY {Компания}
    COURIER {Курьер}
    other {}
  }`,
  "valuations.fields.date": "Дата",
  "valuations.filters.date": "Дата",
  "valuations.filters.estimation": "Оценка",
  "valuations.filters.category": "Категория",

  "towns.filters.text": "Название",
  "towns.empty": "Городов не нашлось",
  "towns.current.count": "Найдено {count}",
  "towns.fields.name": "Название",
  "towns.fields.companies": "Компании",
  "towns.fields.couriers": "Курьеры",
  "towns.fields.campaigns": "Кампании",
};

export { messages };
