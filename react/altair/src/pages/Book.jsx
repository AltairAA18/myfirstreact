import { useState } from 'react'
import './Book.css'

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    alert('Благодарим за бронирование! Мы вскоре свяжемся с вами.')
  }

  return (
    <div className="book-page">
      <div className="book-header">
        <h1>Забронировать стол</h1>
        <p>Зарезервируйте стол в нашем ресторане</p>
      </div>

      <div className="book-container">
        <div className="book-info">
          <h2>Информация</h2>
          <p>✓ Бронирование доступно до 30 дней вперед</p>
          <p>✓ Минимальное время на столе: 2 часа</p>
          <p>✓ Подтверждение придет на ваш email</p>
          <p>✓ Для групп более 8 человек позвоните нам</p>
        </div>

        <form className="book-form" onSubmit={handleSubmit}>
          <h2>Забронировать</h2>

          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Дата</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Время</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Количество гостей</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 человек</option>
              <option value="2">2 человека</option>
              <option value="3">3 человека</option>
              <option value="4">4 человека</option>
              <option value="5">5 человек</option>
              <option value="6">6 человек</option>
              <option value="7">7 человек</option>
              <option value="8">8+ человек (позвоните нам)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Забронировать</button>
        </form>
      </div>
    </div>
  )
}

export default Book
