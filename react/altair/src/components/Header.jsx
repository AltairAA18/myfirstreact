import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Restaurant</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/menu" className="nav-link">Меню</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
          <Link to="/book" className="nav-link">Забронировать</Link>
          <Link to="/register" className="nav-link register-btn">Регистрация</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
