import React from "react";

const FilterBar = ({ categories, brands, setCategory, setBrand, setRating }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <select onChange={(e) => setCategory(e.target.value)} defaultValue="">
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select onChange={(e) => setBrand(e.target.value)} defaultValue="">
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Min Rating"
        onChange={(e) => setRating(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
