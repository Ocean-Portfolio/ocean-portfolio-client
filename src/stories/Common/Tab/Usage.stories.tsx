import { Meta, StoryObj } from '@storybook/react';
import Tab, { TabProps } from '@/composable/Tab/Tab';
import useOceanTab from '@/hook/useOceanTab';

const Template = (args: TabProps) => {
  const { selectedIdx, handleClick } = useOceanTab(args.selectedIdx);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '10rem',
        backgroundColor: 'lightgray',
      }}
    >
      <Tab
        length={args.length}
        selectedIdx={selectedIdx}
        onClick={handleClick}
      />
    </div>
  );
};

const meta: Meta<typeof Tab> = {
  title: 'Common/Tab',
  component: Template,
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Tab>;
export const Usage: Story = {
  args: {
    length: 5,
    selectedIdx: 0,
  },
};

export default meta;
