import './Contacts.css'

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <h1>Контакты</h1>
        <p>Мы будем рады вас видеть</p>
      </div>

      <div className="contacts-container">
        <section className="contact-info">
          <h2>Основная информация</h2>
          <div className="info-item">
            <h3>📍 Адрес</h3>
            <p>улица Примерная, дом 42<br/>Город, Регион 123456</p>
          </div>
          <div className="info-item">
            <h3>📞 Телефон</h3>
            <p><a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p><a href="mailto:info@restaurant.ru">info@restaurant.ru</a></p>
          </div>
        </section>

        <section className="contact-info">
          <h2>Рабочее время</h2>
          <div className="hours">
            <div className="hour-item">
              <span className="day">Понедельник - Чётверг:</span>
              <span className="time">11:00 - 23:00</span>
            </div>
            <div className="hour-item">
              <span className="day">Пятница - Суббота:</span>
              <span className="time">11:00 - 00:00</span>
            </div>
            <div className="hour-item">
              <span className="day">Воскресенье:</span>
              <span className="time">11:00 - 22:00</span>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h2>Свяжитесь с нами</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contacts
