import { FC } from 'react';
import { RedIcon } from 'shared/components/Icon';

interface ICloseIcon {
    onClick(): void;
}

export const CloseIcon: FC<ICloseIcon> = ({ onClick }) => {
  return <RedIcon onClick={onClick}>&#10006;</RedIcon>;
};