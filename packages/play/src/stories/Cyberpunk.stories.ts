import { Meta, StoryObj } from '@storybook/vue3';
import { Cyberpunk } from 'some-vue-element'
import 'some-vue-element/dist/style.css'

type Story = StoryObj<typeof Cyberpunk>

const meta: Meta<typeof Cyberpunk> = {
  title: 'Example/Cyberpunk',
  component: Cyberpunk,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    fontStyle: {
      control: { type: 'select' },
      options: ['normal', 'italic']
    },
    fontSize: {
      control: { type: 'number' },
    }
  }
}

export const Default: Story = {
  args: {
    text: "Storybook",
    fontStyle: "italic",
  },
  render: (args) => ({
    components: {
      Cyberpunk
    },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 900px">
        <Cyberpunk v-bind="args"/>
      </div>`
  }),
}

export default meta