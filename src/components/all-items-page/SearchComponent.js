import React, { useState } from "react";
import styles from "./SearchComponent.module.css";
import { useItemContext } from "../../contexts/ItemContext";
import { SingleItem } from "../single-item/SingleItem";

export const SearchComponent = () => {
  const { items } = useItemContext();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {items.length > 0 && (
        <input
          type="text"
          className={styles.searchField}
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInput}
        />
      )}

      {items.length > 0 ? (
        items
          .filter((item) =>
            item.type.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((x) => <SingleItem key={x._id} item={x} />)
      ) : (
        <h1 className={styles.mainWrapper}>
          No clothes currently available to sell
        </h1>
      )}
    </div>
  );
};
