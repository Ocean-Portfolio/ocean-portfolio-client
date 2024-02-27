import { render } from '@testing-library/react';
import HistoryCard, { HistoryCardProps } from './HistoryCard';

describe('HistoryCard 컴포넌트', () => {
  const mockProps: HistoryCardProps = {
    visible_status: 'VISIBLE',
    sizeToken: 'LARGE',
    companyName: '회사명',
    period: '기간',
  };

  it('visible_status가 NONE이면 렌더링되지 않아야 한다', () => {
    const { queryByText } = render(
      <HistoryCard {...mockProps} visible_status="NONE">
        <HistoryCard.Company />
        <HistoryCard.Period />
      </HistoryCard>,
    );

    expect(queryByText('회사명')).toBeNull();
    expect(queryByText('직책명')).toBeNull();
    expect(queryByText('기간')).toBeNull();
  });

  it('적절한 props를 받아 하위 컴포넌트들이 올바르게 렌더링되어야 한다', () => {
    const { getByText } = render(
      <HistoryCard {...mockProps}>
        <HistoryCard.Company />
        <HistoryCard.Period />
      </HistoryCard>,
    );

    expect(getByText('회사명')).toBeInTheDocument();
    expect(getByText('직책명')).toBeInTheDocument();
    expect(getByText('기간')).toBeInTheDocument();
  });
});
