import Image from 'next/image';
import React from 'react';
import { RxCross2 } from "react-icons/rx";

interface PopupProps {
  imageUrl: string;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed z-[1050] inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-x-hidden overflow-y-auto opacity-100">
      <div className="bg-white rounded-lg p-5">
        <button onClick={onClose} className="float-right w-[25px] h-[25px] text-center m-auto px-1 py-[3px] rounded-[50%] border border-solid border-[black] mb-5"><RxCross2 /></button>
        <div className="max-w-full max-h-[90svh]">
          <Image
            className='max-w-full max-h-[80svh]'
            src={imageUrl}
            alt="Popup Image"
            width={300}
            height={400}
          />
        </div>

      </div>
    </div>
  );
};
