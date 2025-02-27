import React from "react";
import styles from "../styles/ProductList.module.css";

function ProductTable(props) {
  const { cardsData, handlePlus, handleMinus, handleRemove } = props;
  return (
    <div>
      <table className={styles['fullCard']}>
        <thead>
          <tr>
            <th>Название</th>
            <th></th>
            <th>Стоимость</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
        </thead>
        <tbody className={styles['tbodeTr']}>
          {cardsData.map((item) => {
            return (
              <TableCard
                key={item.id}
                item={item}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
                handleRemove={handleRemove}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

function TableCard(props) {
  const { item, handlePlus, handleMinus, handleRemove } = props;
  return (
    <tr key={item.id}>
      <td>
        <img className={styles['imgBucket']} src={item.img} alt="" />
      </td>
      <td>
        <p className={styles['nameHr']}>{item.title}</p>
      </td>
      <td>
        <div className={styles['tdTh']}>
          <p>{item.price}$</p>
        </div>
      </td>
      <td>
        <div className={styles['tdTh']}>
          <button onClick={() => handleMinus(item.id)} className={styles['btnCount']}>
            -
          </button>
          <p>{item.count}</p>
          <button onClick={() => handlePlus(item.id)} className={styles['btnCount']}>
            +
          </button>
        </div>
      </td>
      <td>
        <div className={styles['tdTh']}>
          <p>{item.count * item.price} $</p>
        </div>
      </td>
      <td>
        <button onClick={() => handleRemove(item.id)} className={styles['xBtn']}>
          ✖
        </button>
      </td>
    </tr>
  );
}
