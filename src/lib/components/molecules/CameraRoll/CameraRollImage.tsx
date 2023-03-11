import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { Modal } from '../Modal';

export interface CameraRollImageProps {
  src: string;
  alt?: string;
}

export const CameraRollImage: FC<CameraRollImageProps> = ({ src, alt }) => {
  const [open, setOpen] = useState<boolean>();

  const theme = useTheme().theme.cameraRoll.item;

  return (
    <>
      <div className={theme.base}>
        <img src={src} alt={alt} className={theme.image} />
        <button className={theme.button} onClick={() => setOpen(true)}>
          <div>
            <HiOutlineArrowsExpand className={theme.hoverIcon} />
          </div>
        </button>
      </div>
      <Modal show={open} onClose={() => setOpen(false)} onClick={() => setOpen(false)}>
        <img src={src} alt="" className={theme.modalImage} />
      </Modal>
    </>
  );
};
