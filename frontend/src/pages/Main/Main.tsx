import { useState,useEffect } from 'react'
import Banner from '../../components/Banner/Banner'

type Props = {}

const Main = (props: Props) => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [topSales, setTopSales] = useState([])
	const [categories, setCategories] = useState([])
	const [activeCategory, setActiveCategory] = useState(0)
  useEffect(() => {
    fetch('http://localhost:7070/api/top-sales')
      .then(response => response.json())
      .then(data => {
        setTopSales(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
			<div className="row">
				<div className="col">
					<Banner/>
					{loading?
					<section className="top-sales">
						<h2 className="text-center">Хиты продаж!</h2>
						<div className="preloader">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</section>
					:
					<section className="top-sales">
						<h2 className="text-center">Хиты продаж!</h2>
						<div className="row">
							{topSales.map((item: any) => (
								<div className="col-4">
									<div className="card">
										<img
											src={item.images[0]}
											className="card-img-top img-fluid"
											alt={item.title}
										/>
										<div className="card-body">
											<p className="card-text">{item.title}</p>
											<p className="card-text">{item.price}</p>
											<a href="#" className="btn btn-outline-primary">
												Заказать
											</a>
										</div>
									</div>
								</div>
							))}

						</div>
					</section>}
					<section className="catalog">
						<h2 className="text-center">Каталог</h2>
						<div className="preloader">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</section>
				</div>
			</div>
  </main>
  )
}

export default Main