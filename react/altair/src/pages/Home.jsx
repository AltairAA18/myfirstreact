import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Restaurant</h1>
          <p>Добро пожаловать в наш ресторан</p>
          <p className="tagline">Блюда приготовленные с любовью и качественными ингредиентами</p>
          <div className="hero-buttons">
            <a href="/menu" className="btn btn-primary">Посмотреть меню</a>
            <a href="/book" className="btn btn-secondary">Забронировать стол</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature">
            <h3>🍽️ Качество</h3>
            <p>Используем только свежие и натуральные ингредиенты</p>
          </div>
          <div className="feature">
            <h3>👨‍🍳 Профессионализм</h3>
            <p>Наша команда опытных поваров готовит с душой</p>
          </div>
          <div className="feature">
            <h3>🏠 Уют</h3>
            <p>Комфортная атмосфера для вашего отдыха</p>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="promo-box">
          <h2>Специальные предложения</h2>
          <p>Скидка 10% на первый заказ при регистрации</p>
          <a href="/register" className="btn btn-primary">Зарегистрироваться</a>
        </div>
      </section>
    </div>
  )
}

export default Home
