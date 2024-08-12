import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { useDispatch} from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Item from "../../types/Item";


type Props = {};

const Product = (props: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState<Item>();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');
  
  const addToBasket = () => {
    if (size === '') {
      alert('Выберите размер');
      return;
    }
    const cartItem = { ...item, count, size };
    console.log('ITEM CHEKC:', cartItem);
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:7070/api/items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);
  // TODO: handle error
  if (!item) {
    return <div>Loading...</div>;
  }

  const sizeSelect = (e: any) => {
    e.preventDefault();
    setSize(e.target.textContent);
    console.log(size);
  }
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner/>
          <section className="catalog-item">
            <h2 className="text-center">{item.title}</h2>
            <div className="row">
              <div className="col-5">
                <img
                  src={item.images[0]}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{item.sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{item.manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{item.color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{item.material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{item.season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{item.reason}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <p>
                    Размеры в наличии:{" "}
                    {item.sizes.map((size) => (
                        size.available ? <span className="catalog-item-size" onClick={sizeSelect}>{size.size}</span> : null
                    ))}
                  </p>
                  <p>
                    Количество:{" "}
                    <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary" onClick={() =>count !==1? setCount(count - 1):{}}>-</button>
                      <span className="btn btn-outline-primary">{count}</span>
                      <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>+</button>
                    </span>
                  </p>
                  <p>
                    Цена: <span className="catalog-item-price">{item.price} руб.</span>
                  </p>
                </div>
                <button className="btn btn-danger btn-block btn-lg" onClick={() => addToBasket()}>
                  В корзину
                </button>
                <p>Размер : {size}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Product;
