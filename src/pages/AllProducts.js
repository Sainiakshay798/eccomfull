import React, { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import SummaryApi from "../common";
import AdminProductCard from "../components/AdminProductCard";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async()=> {
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()
    
    setAllProduct(dataResponse?.data || [])    
  }
  useEffect(() => {
    fetchAllProduct()
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg ">All Products</h2>
        <button
          className="border-2 border-red-600  text-red-500  hover:bg-red-500 hover:text-white  transition-all py-1 px-3 rounded-full"
          onClick={() => setOpenUploadProduct(true)}>
          Upload Products
        </button>
      </div>

      {/* all product */}
      <div className='flex items-center gap-5 py-4'>
        {
            allProduct.map((product,index)=>{
              return(
                <AdminProductCard  data={product}  key={index+"allProduct"}/>
               
              )
            })
           }
      </div>

      {/** upload prouct component*/}
      {openUploadProduct && (
        <UploadProduct onClick={() => setOpenUploadProduct(false)} />
      )}
    </div>
  );
};

export default AllProducts;
