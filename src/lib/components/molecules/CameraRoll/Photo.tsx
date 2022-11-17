import { useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { Modal } from '../Modal';

export type PhotoProps = {
  image: string;
  alt?: string;
};

export const Photo = ({ image, alt }: PhotoProps) => {
  const [open, setOpen] = useState<boolean>();
  return (
    <>
      <div className="relative flex flex-col">
        <img src={image} alt={alt} className="duration:1300 h-full object-cover transition " />
        <button
          className="absolute flex h-full w-full items-center justify-center bg-white opacity-0 hover:opacity-60  "
          onClick={() => setOpen(true)}
        >
          <div>
            <HiOutlineArrowsExpand className="w-10" />
          </div>
        </button>
      </div>
      <Modal show={open} onClose={() => setOpen(false)} onClick={() => setOpen(false)}>
        <img src={image} alt="" className="rounded-lg " />
      </Modal>
    </>
  );
};
