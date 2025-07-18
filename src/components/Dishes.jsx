import { Link } from "react-router-dom"

export default function Dishes({ dishesData }) {
  return (

    <section className="dishes-section">
      <h2>Our Menu</h2>
      <div className="dishes-grid">
        {dishesData.map(dish => {
          const imageUrl = import.meta.env.BASE_URL + dish.image.substring(1);
          return (
            <article key={dish.id} className="dish-card">
              <h3>{dish.name}</h3>
              <img src={imageUrl} alt={dish.name} />
            </article>
          )
        })}
      </div>
      <button className="menu-btn">
        <Link to="/Menu">Learn more about our menu</Link>
      </button>
    </section>

  )
}