import React from "react";
import Catalog from "../../components/Catalog/Catalog";

type Props = {};

const CatalogPage = (props: Props) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Catalog />
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
