import { useLocation } from "react-router-dom";
import { useCatalog } from "../../hooks/useCatalog";
import { useSearch } from "../../hooks/useSearch";

const Catalog = () => {
  const {
    loading,
    category,
    items,
    categories,
    setCategory,
    handleLoadMore,
    setOffset,
  } = useCatalog();

  const { handleSearchInputChange, handleSearchFormSubmit } = useSearch();

  const location = useLocation();

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
          {location.pathname.startsWith("/catalog") && (
            <form
              className="catalog-search-form form-inline"
              onSubmit={handleSearchFormSubmit}
            >
              <input
                className="form-control "
                placeholder="Поиск"
                onChange={handleSearchInputChange}
              />
            </form>
          )}
          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <a
                className={`nav-link ${category === 0 ? "active" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOffset(0);
                  setCategory(0);
                }}
              >
                Все
              </a>
            </li>
            {categories.map((item: any, index: number) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${category === item.id ? "active" : ""}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOffset(0);
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
            {items?.length === 0 && (
              <div className="col">
                <h3 className="text-center ">
                  По вашему запросу ничего не найдено
                </h3>
              </div>
            )}
            {items.map((item: any, index: number) => (
              <div className="col-4" key={index}>
                <div className="card catalog-item-card">
                  <img
                    src={item.images[0]}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <a
                      href={`/product/${item.id}`}
                      className="btn btn-outline-primary"
                    >
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
