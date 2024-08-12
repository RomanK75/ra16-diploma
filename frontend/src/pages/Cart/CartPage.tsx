import Banner from '../../components/Banner/Banner'
import { useSelector, useDispatch } from 'react-redux'

type Props = {}

const CartPage = (props: Props) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state: any) => state.cart.cartList);

  const clearCart = () => {
    dispatch({ type: 'cart/clearCart' });
  };
  return (
    <main className="container">
    <div className="row">
      <div className="col">
        <Banner />
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
              <tbody>
                  {cartList.map((item: any,index: number) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><a href={`/product/${item.id}`}>{item.title}</a></td>
                      <td>{item.size}</td>
                      <td>{item.count}</td>
                      <td>{item.price}</td>
                      <td>{item.price * item.count}</td>
                      <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
                    </tr>
                  ))}
                <tr>
                  <td colSpan={5} className="text-right">Общая стоимость</td>
                  <td>34 000 руб.</td>
                  <td><button className="btn btn-outline-danger btn-sm" onClick={clearCart}>Очистить корзину</button></td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
              <form className="card-body">
                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input className="form-control" id="phone" placeholder="Ваш телефон"/>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Адрес доставки</label>
                  <input className="form-control" id="address" placeholder="Адрес доставки"/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="agreement"/>
                  <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary">Оформить</button>
              </form>
            </div>
          </section>
    </div>
    </div>
    </main>
  )
}

export default CartPage