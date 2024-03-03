import { Meta, StoryObj } from '@storybook/react';
import Pagination, {
  PaginationProps,
} from '@/composable/Pagination/Pagination';
import useContentsPagination from '@/hook/useContentsPagination';

const Template = (args: PaginationProps) => {
  const { selectedIdx, handleClick } = useContentsPagination(args.selectedIdx);
  return (
    <div
      style={{
        width: '100%',
        height: '10rem',
        paddingTop: '5rem',
        backgroundColor: 'lightgray',
      }}
    >
      <Pagination
        length={args.length}
        selectedIdx={selectedIdx}
        onClick={handleClick}
      />
    </div>
  );
};

const meta: Meta<typeof Template> = {
  title: 'Common/Pagination',
  component: Template,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Template>;
export const Usage: Story = {
  args: {
    length: 5,
    selectedIdx: 0,
  },
};

export default meta;
