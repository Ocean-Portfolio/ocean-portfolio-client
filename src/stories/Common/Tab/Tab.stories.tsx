import { Meta, StoryObj } from '@storybook/react';
import Tab from '@/composable/Tab/Tab';

const meta: Meta<typeof Tab> = {
  title: 'Common/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '10rem',
          backgroundColor: 'lightgray',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Tab>;
export const Static: Story = {
  args: {
    length: 5,
    selectedIdx: 0,
  },
};
export default meta;
