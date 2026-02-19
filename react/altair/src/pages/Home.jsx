import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">🍽️ Добро пожаловать</span>
            <h1>Premium Restaurant</h1>
            <p className="hero-subtitle">Вкусная еда, теплая атмосфера, незабываемые впечатления</p>
            <p className="tagline">Блюда приготовленные с любовью и качественными ингредиентами</p>
            <div className="hero-buttons">
              <a href="/menu" className="btn btn-primary">Посмотреть меню</a>
              <a href="/book" className="btn btn-secondary">Забронировать стол</a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Лет опыта</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Довольных клиентов</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Блюд в меню</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight">
        <div className="highlight-container">
          <div className="highlight-item">
            <div className="highlight-icon">🥘</div>
            <h3>Авторские рецепты</h3>
            <p>Уникальные блюда, созданные нашими шефами с использованием лучших ингредиентов</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🌍</div>
            <h3>Международная кухня</h3>
            <p>Блюда со всего мира, приготовленные в нашей кухне с уважением к традициям</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">⭐</div>
            <h3>Премиум сервис</h3>
            <p>Внимательный персонал, комфортная обстановка, безупречное обслуживание</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Почему выбирают нас?</h2>
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">🍽️</div>
            <h3>Качество</h3>
            <p>Используем только свежие и натуральные ингредиенты высшего качества</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Профессионализм</h3>
            <p>Опытная команда поваров готовит каждое блюдо с душой и мастерством</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🏠</div>
            <h3>Атмосфера</h3>
            <p>Уютная, елегантная атмосфера для вашего комфортного отдыха</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⏰</div>
            <h3>Быстрое обслуживание</h3>
            <p>Оперативный сервис без ущерба качеству приготовления блюд</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Справедливые цены</h3>
            <p>Доступные цены за высокое качество и порции</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎉</div>
            <h3>События</h3>
            <p>Проводим тематические ужины и специальные мероприятия</p>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="promo-box">
          <div className="promo-content">
            <h2>Первый заказ со скидкой!</h2>
            <p>Зарегистрируйтесь и получите <span className="promo-highlight">10% скидку</span> на первый заказ</p>
            <div className="promo-buttons">
              <a href="/register" className="btn btn-primary">Зарегистрироваться</a>
              <a href="/menu" className="btn btn-light">Посмотреть меню</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
