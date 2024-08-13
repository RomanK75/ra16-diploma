import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearchIconClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchText(event.target.value);
  };

  const handleSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/catalog/search=${searchText}`);
  };

  return {
    searchOpen,
    searchText,
    handleSearchIconClick,
    handleSearchInputChange,
    handleSearchFormSubmit,
  };
}
