import React, { PropsWithChildren } from 'react';
import { ODSColorTokenVariables } from '@/const/colors';
import {
  PalleteWrapDiv,
  PalleteRowDiv,
  PalleteTileDiv,
} from './ColorPalette.style';

const ColorPallete = ({ children }: PropsWithChildren) => {
  return <PalleteWrapDiv>{children}</PalleteWrapDiv>;
};

interface TileProps {
  colorToken: ODSColorToken;
  textColor: GrayScaleToken;
}

const Row = ({ children }: PropsWithChildren) => {
  return <PalleteRowDiv>{children}</PalleteRowDiv>;
};

const Tile = ({ colorToken, textColor }: TileProps) => {
  return (
    <PalleteTileDiv
      css={{
        backgroundColor: `$${colorToken}`,
        color: `$${textColor}`,
      }}
    >
      <span>{colorToken}</span>
      <span>{ODSColorTokenVariables[colorToken]}</span>
    </PalleteTileDiv>
  );
};

ColorPallete.Row = Row;
ColorPallete.Tile = Tile;

export default ColorPallete;
