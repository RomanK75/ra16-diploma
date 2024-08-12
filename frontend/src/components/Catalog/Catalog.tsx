import { useCatalog } from "../../hooks/useCatalog";

type Props = {};

const Catalog = (props: Props) => {
  const { loading, category, items, categories, setCategory, handleLoadMore } =
    useCatalog();

  return (
    <section className="catalog">
      {loading ? (
        <div>
          <h2 className="text-center">Каталог</h2>
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center">Каталог</h2>
          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <a
                className={`nav-link ${category === 0 ? "active" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCategory(0);
                }}
              >
                Все
              </a>
            </li>
            {categories.map((item: any) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${category === item.id ? "active" : ""}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategory(item.id);
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="row">
            {/* TODO: fix image size */}
            {items.map((item: any) => (
              <div className="col-4" key={item.id}>
                <div className="card catalog-item-card">
                  <img
                    src={item.images[0]}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <a href={`/product/${item.id}`} className="btn btn-outline-primary">
                      Заказать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={handleLoadMore}
            >
              Загрузить ещё
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
