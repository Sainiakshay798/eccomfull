import React from "react";
import { CgClose } from "react-icons/cg";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
        <div className="fixed bottom-0 top-0  right-0 left-0 flex justify-center items-center ">
          <div className="bg-white shadow-lg rounded max-w-5x1 mx-auto p-4">
            <div className="w-fit ml-auto text-2xl cursor-pointer hover:text-red-800"
              onClick={onClose} // Call onClose inside an arrow function
            >
              <CgClose />
            </div>

            <div className="flex justify-center p-4 max-w-[80vh] max-h-[80vh]">
              <img src={imgUrl} className="w-full h-full" />
            </div>
          </div>
        </div>
      );
    };

export default DisplayImage;
