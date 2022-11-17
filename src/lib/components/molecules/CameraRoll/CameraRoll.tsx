import { FC } from 'react';
import { Photo } from './Photo';

interface CameraRollProps {
  images: CameraPhoto[];
}

export type CameraPhoto = {
  src: string;
  alt?: string;
}

export const CameraRoll: FC<CameraRollProps> = ({ images }) => {
  return (
    <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <Photo image={image.src} alt={image.alt} />
      ))}
    </div>
  );
};
