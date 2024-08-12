import { useState, useEffect } from "react";
import Item from "../types/Item";

export function useCatalog() {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setItems([]);
      try {
        const [itemsResponse, categoriesResponse] = await Promise.all([
          fetch(`http://localhost:7070/api/items?categoryId=${category}`),
          fetch("http://localhost:7070/api/categories"),
        ]);
        const [itemsData, categoriesData] = await Promise.all([
          itemsResponse.json(),
          categoriesResponse.json(),
        ]);
        setCategories(categoriesData);
        if (category === 0) {
          setItems(itemsData);
        } else {
          setItems(itemsData.filter((item: any) => item.category === category));
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const fetchItems = async () => {
    const response = await fetch(
      `http://localhost:7070/api/items?categoryId=${category}&offset=${offset}`,
    );
    const newItems = await response.json();
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  useEffect(() => {
    console.log(items.length);
  }, [items]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 6);
    fetchItems();
  };

  return {
    offset,
    loading,
    category,
    items,
    categories,
    setCategory,
    handleLoadMore,
  };
}
