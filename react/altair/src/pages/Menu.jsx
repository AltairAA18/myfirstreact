import './Menu.css'

function Menu() {
  const menuItems = [
    { id: 1, name: 'Салат из помидоров', category: 'Закуски', price: '320 р' },
    { id: 2, name: 'Крем-суп из грибов', category: 'Супы', price: '280 р' },
    { id: 3, name: 'Борщ украинский', category: 'Супы', price: '320 р' },
    { id: 4, name: 'Стейк из говядины', category: 'Основные блюда', price: '890 р' },
    { id: 5, name: 'Паста Карбонара', category: 'Основные блюда', price: '520 р' },
    { id: 6, name: 'Рыба на гриле', category: 'Основные блюда', price: '720 р' },
    { id: 7, name: 'Курица Терияки', category: 'Основные блюда', price: '580 р' },
    { id: 8, name: 'Тирамису', category: 'Десерты', price: '320 р' },
    { id: 9, name: 'Чизкейк', category: 'Десерты', price: '290 р' },
    { id: 10, name: 'Шоколадный мусс', category: 'Десерты', price: '250 р' },
    { id: 11, name: 'Апельсиновый сок', category: 'Напитки', price: '150 р' },
    { id: 12, name: 'Эспрессо', category: 'Напитки', price: '120 р' },
  ]

  const categories = ['Все', 'Закуски', 'Супы', 'Основные блюда', 'Десерты', 'Напитки']

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Наше меню</h1>
        <p>Выберите ваше любимое блюдо</p>
      </div>

      <div className="menu-container">
        <div className="menu-items">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="item-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <span className="category">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
