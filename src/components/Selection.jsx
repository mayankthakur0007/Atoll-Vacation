import React,{useState} from 'react';
import ModalWrapper from "./modalWrapper";

const Selection = ({ figure, caption,duration, price }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <figure
        onClick={onOpenModal}
        className="relative transform h-64 bg-indigo-400 w-80 hover:bg-indigo-600 transition duration-500 hover:scale-110 flex justify-center items-center"
      >
        <img
          src={figure}
          alt={caption}
          className="w-full hover: h-full object-cover"
        />
        <figcaption className="absolute z-10 bottom-12 left-2 text-white text-2xl font-bold">
          {caption}
        </figcaption>
        <figcaption className="absolute z-10 bottom-7 left-2 text-white text-l">
          {duration}
        </figcaption>
        <figcaption className="absolute z-10 bottom-2 left-2 text-white text-l">
          {price}
        </figcaption>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </figure>
      <ModalWrapper
        open={open}
        selectedLocation={caption.toUpperCase()}
        onClose={onCloseModal}
      />
    </div>
  );
};

export default Selection;
