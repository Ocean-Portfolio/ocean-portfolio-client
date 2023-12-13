import React, { PropsWithChildren } from 'react';

interface HistoryDetailCardProps {
  className?: string;
  visible_status: VisibleStatusToken;
  sizeToken: 'LARGE' | 'SMALL';
  colorThemeToken: UserNameToken;
  historyItemMode: HistoryItemModeToken;
}

const HistoryDetailCard = ({
  children,
}: PropsWithChildren<HistoryDetailCardProps>) => {
  return <div></div>;
};

interface TitleProps {}

const Title = () => {
  return <></>;
};

interface DescriptionProps {}

const Description = () => {
  return <></>;
};

HistoryDetailCard.Title = Title;
HistoryDetailCard.Description = Description;

export default HistoryDetailCard;
