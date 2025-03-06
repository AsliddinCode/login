import { useState } from 'react'
import styles from '../styles/Products.module.css'
import ProductTable from '../components/ProductList'
import { cards } from '../data/data'

function Product() {
  const [cardsData, setCardsData] = useState(cards)

  const handlePlus = (cardsDataID) => {
    const newPlus = cardsData.map((item) => {
      if (cardsDataID === item.id) {
        item.count = item.count + 1
      }
      return item
    })
    setCardsData(newPlus)
  }

  const handleMinus = (cardsDataID) => {
    const newMinus = cardsData.map((item) => {
      if (cardsDataID === item.id) {
        if (item.count > 1) {
          item.count = item.count - 1
        }
      }
      return item
    })
    setCardsData(newMinus)
  }

  const handleRemove = (cardsDataID) => {
    const newDelete = cardsData.filter(item => item.id !== cardsDataID)
    setCardsData(newDelete)
  }

  const totalPrice = () => {
    return cardsData.reduce((total, item) => {
      return total + item.count * item.all; 
    }, 0);  
  }

  return (
    <div className={styles['container']}>
      <div className={styles['table']}>
        <p>Главная/Корзина</p>
        <h1>Корзина</h1>
        <ProductTable
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          handleRemove={handleRemove}
          cardsData={cardsData} 
          totalPrice={totalPrice}
        />

        <div className={styles['check']}>
          <div className={styles['formBtn']}>
            <form className='for' action="submit">
              <input className={styles['inp']} type="text" placeholder="name" />
              <input className={styles['inp']} type="text" placeholder="price" />
              <button className='formbtn'>Click me</button>
            </form>
          </div>
          <div className={styles['allPrice']}>
            <div className={styles['summa']}>
              <p>Сумма</p>
              <p>{totalPrice()}</p>
            </div>
            <hr />
            <div className={styles['ummumiy']}>
              <p>К оплате</p>
              <p>{totalPrice()}</p>
            </div>
            <div className={styles['btnUmmiy']}>
              <button className={styles['oformel']}>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
