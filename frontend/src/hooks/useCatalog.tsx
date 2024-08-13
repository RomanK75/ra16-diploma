import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../types/Item";

export function useCatalog() {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState([]);
  const { search } = useParams();
  const itemUrl = `http://localhost:7070/api/items?`;
  const catUrl = `http://localhost:7070/api/categories`;

  useEffect(() => {
    const fetchData = async () => {
      setItems([]);
      try {
        let q = "";
        if (search === undefined) {
          q = "";
        } else {
          q = search.replace("search=", "");
        }
        const [itemsResponse, categoriesResponse] = await Promise.all([
          fetch(`${itemUrl}categoryId=${category}&q=${q}`),
          fetch(catUrl),
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
    setOffset(6);
  }, [category, search]);

  const fetchItems = async () => {
    let url = `http://localhost:7070/api/items?categoryId=${category}&offset=${offset}`;
    if (search) {
      url += `&q=${search.replace("search=", "")}`;
    }
    const response = await fetch(url);
    const newItems = await response.json();
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  useEffect(() => {}, [items]);

  const handleLoadMore = () => {
    setOffset(offset + 6);
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
    search,
    setOffset,
  };
}
