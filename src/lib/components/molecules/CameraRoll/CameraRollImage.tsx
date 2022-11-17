import { FC, useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { Modal } from '../Modal';

export interface CameraRollImageProps {
  src: string;
  alt?: string;
}

export const CameraRollImage: FC<CameraRollImageProps> = ({ src, alt }) => {
  const [open, setOpen] = useState<boolean>();

  return (
    <>
      <div className="relative flex flex-col">
        <img src={src} alt={alt} className="duration:1300 h-full object-cover transition " />
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
        <img src={src} alt="" className="rounded-lg " />
      </Modal>
    </>
  );
};
