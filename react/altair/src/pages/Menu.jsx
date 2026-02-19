import './Menu.css'

function Menu() {
  const menuItems = [
    { 
      id: 1, 
      name: 'Салат из помидоров', 
      category: 'Закуски', 
      price: '2400 ₸',
      ingredients: 'Помидоры, огурцы, морковь, масло оливковое',
      description: 'Свежий овощной салат с легкой масляной заправкой'
    },
    { 
      id: 2, 
      name: 'Ленивые голубцы', 
      category: 'Закуски', 
      price: '3200 ₸',
      ingredients: 'Фарш из говядины, капуста, помидоры, сметана',
      description: 'Слои капусты и говяжьего фарша в томатном соусе'
    },
    { 
      id: 3, 
      name: 'Манты с говядиной', 
      category: 'Закуски', 
      price: '3900 ₸',
      ingredients: 'Говяжий фарш, картофель, лук, мука',
      description: 'Традиционные казахские манты с говядиной и картофелем, подаются со сметаной'
    },
    { 
      id: 4, 
      name: 'Крем-суп из грибов', 
      category: 'Супы', 
      price: '2100 ₸',
      ingredients: 'Грибы, сливки, картофель, лук',
      description: 'Нежный крем-суп с ароматом лесных грибов'
    },
    { 
      id: 5, 
      name: 'Борщ украинский', 
      category: 'Супы', 
      price: '2400 ₸',
      ingredients: 'Свежая свёкла, говядина, капуста, помидоры',
      description: 'Классический красный борщ с кусочками говядины'
    },
    { 
      id: 6, 
      name: 'Лагман', 
      category: 'Супы', 
      price: '3200 ₸',
      ingredients: 'Лапша, говядина, болгарский перец, помидоры, специи',
      description: 'Среднеазиатское блюдо с лапшой в пряном бульоне'
    },
    { 
      id: 7, 
      name: 'Навальный чай', 
      category: 'Супы', 
      price: '1800 ₸',
      ingredients: 'Молоко, чай чёрный, животное масло, соль',
      description: 'Традиционный казахский молочный чай - согревающий и питательный'
    },
    { 
      id: 8, 
      name: 'Стейк из говядины', 
      category: 'Основные блюда', 
      price: '6700 ₸',
      ingredients: 'Мраморная говядина, масло, чеснок, травы',
      description: 'Сочный стейк средней степени прожарки с гарниром из овощей'
    },
    { 
      id: 9, 
      name: 'Паста Карбонара', 
      category: 'Основные блюда', 
      price: '3900 ₸',
      ingredients: 'Паста, бекон, яйца, сливки, пармезан',
      description: 'Классическая итальянская паста с беконом и сливочным соусом'
    },
    { 
      id: 10, 
      name: 'Рыба на гриле', 
      category: 'Основные блюда', 
      price: '5400 ₸',
      ingredients: 'Форель, лимон, травы, оливковое масло',
      description: 'Филе форели на гриле с лимонным соусом и травами'
    },
    { 
      id: 11, 
      name: 'Курица Терияки', 
      category: 'Основные блюда', 
      price: '4350 ₸',
      ingredients: 'Куриное филе, соевый соус, имбирь, чеснок, мёд',
      description: 'Нежное куриное филе в сладко-остром азиатском маринаде'
    },
    { 
      id: 12, 
      name: 'Шашлык из баранины', 
      category: 'Основные блюда', 
      price: '5900 ₸',
      ingredients: 'Корейка баранины, лук, помидоры, травы',
      description: 'Ароматный шашлык из молодой баранины с овощами'
    },
    { 
      id: 13, 
      name: 'Плов казахский', 
      category: 'Основные блюда', 
      price: '4800 ₸',
      ingredients: 'Рис, говяжья корейка, морковь, лук, специи',
      description: 'Традиционный казахский плов с рисом и мясом - сытное и ароматное блюдо'
    },
    { 
      id: 14, 
      name: 'Шашлычок из курицы', 
      category: 'Основные блюда', 
      price: '4200 ₸',
      ingredients: 'Куриное филе, маринад с лимоном, овощи',
      description: 'Нежный шашлык из куриного мяса с овощами на шпажке'
    },
    { 
      id: 15, 
      name: 'Бешбармак', 
      category: 'Основные блюда', 
      price: '5500 ₸',
      ingredients: 'Вареная говядина, лапша, луковый соус, бульон',
      description: 'Национальное казахское блюдо - мясо с лапшой в пикантном луковом соусе'
    },
    { 
      id: 16, 
      name: 'Тирамису', 
      category: 'Десерты', 
      price: '2400 ₸',
      ingredients: 'Печенье Ладифингер, маскарпоне, кофе, какао',
      description: 'Классический итальянский десерт с кофейным ароматом'
    },
    { 
      id: 17, 
      name: 'Чизкейк', 
      category: 'Десерты', 
      price: '2175 ₸',
      ingredients: 'Сливочный сыр, печенье, яйца, сахар',
      description: 'Нежный чизкейк с кремовой текстурой и печенной основой'
    },
    { 
      id: 18, 
      name: 'Шоколадный мусс', 
      category: 'Десерты', 
      price: '1875 ₸',
      ingredients: 'Тёмный шоколад, сливки, яйца, сахар',
      description: 'Лёгкий воздушный мусс из бельгийского шоколада'
    },
    { 
      id: 19, 
      name: 'Апельсиновый сок', 
      category: 'Напитки', 
      price: '1125 ₸',
      ingredients: 'Спелые апельсины',
      description: 'Свежевыжатый апельсиновый сок с витаминами'
    },
    { 
      id: 20, 
      name: 'Компот из фруктов', 
      category: 'Напитки', 
      price: '1300 ₸',
      ingredients: 'Яблоки, груши, смородина, сахар',
      description: 'Ароматный домашний компот из сезонных фруктов'
    },
    { 
      id: 21, 
      name: 'Морс из ягод', 
      category: 'Напитки', 
      price: '1400 ₸',
      ingredients: 'Клубника, малина, черника, сахар',
      description: 'Освежающий морс из свежих ягод'
    },
    { 
      id: 22, 
      name: 'Зелёный чай', 
      category: 'Напитки', 
      price: '900 ₸',
      ingredients: 'Листья зелёного чая премиум качества',
      description: 'Тонизирующий чай с нежным вкусом'
    },
    { 
      id: 23, 
      name: 'Эспрессо', 
      category: 'Напитки', 
      price: '900 ₸',
      ingredients: 'Молотое кофе эспрессо обжарка',
      description: 'Крепкий итальянский кофе с богатой пеной'
    },
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
                <div>
                  <h3>{item.name}</h3>
                  <span className="category">{item.category}</span>
                </div>
                <span className="price">{item.price}</span>
              </div>
              <div className="item-details">
                <p className="ingredients"><strong>Ингредиенты:</strong> {item.ingredients}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
