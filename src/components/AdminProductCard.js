import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
const AdminProductCard = ({ data }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="bg-white p-4 rounded">
      <img src={data?.productImage[0]} width={120} height={120} />
      <h1>{data?.productName}</h1>
      <div
        className="w-fit ml-auto p-2 bg-green-200 cursor-pointer hover:bg-green-600 rounded-full  hover:text-white "
        onClick={() => setEditProduct(true)}>
        <MdModeEditOutline />
      </div>
      {editProduct && (
        <AdminEditProduct
          productdata={data}
          onClose={() => setEditProduct(false)}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
