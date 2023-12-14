import React, { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  sizeToken: CardSizeToken;
}

const SkillCard = ({
  className,
  children,
  sizeToken,
}: PropsWithChildren<Props>) => {
  return <div></div>;
};

export default SkillCard;
