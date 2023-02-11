import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./Api";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const list = getProductList();

    list.then(function (product) {
      setProductList(product);
      setLoading(false);
    });
  }, []);

  const data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });
  if (sort == "title") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "low to high") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "high to low") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  if (loading) {
    return <Loading />;
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <div>
      <div className="mx-4 my-6 mb-5 bg-white rounded md:mx-8 md:mt-24 md:pb-24 md:py-20 md:px-10">
        <div className="flex flex-wrap pt-6 mx-5 md:justify-between md:px-6 ">
          <input
            className="border rounded-md border-primary-500"
            onChange={handleQueryChange}
            value={query}
            placeholder="    Search"
          />
          <select
            onChange={handleSortChange}
            className="w-56 mt-4 border rounded-md md:mt-0 border-primary-500"
            value={sort}
          >
            <option value="default">DEFAULT SOURTING</option>
            <option value="title">SHORT BY TITLE</option>
            <option value="low to high">SHORT BY PRICE LOW-HIGH</option>
            <option value="high to low">SHORT BY PRICE HIGH TO LOW</option>
          </select>
        </div>

        {data.length > 0 && <ProductList Products={data} />}
        {data.length == 0 && <NoMatching />}
      </div>
    </div>
  );
}
export default ProductListPage;
