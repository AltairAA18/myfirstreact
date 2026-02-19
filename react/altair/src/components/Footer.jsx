import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Restaurant</h3>
          <p>Лучшие блюда, приготовленные с любовью для вас</p>
        </div>
        <div className="footer-section">
          <h4>Рабочее время</h4>
          <p>Пн-Чт: 11:00 - 23:00</p>
          <p>Пт-Сб: 11:00 - 00:00</p>
          <p>Вс: 11:00 - 22:00</p>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Телефон: +7 (727) 333-44-55</p>
          <p>Email: info@restaurant.kz</p>
          <p>Адрес: пр. Абая, д. 42, Алматы</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Restaurant. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
