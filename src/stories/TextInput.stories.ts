import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { TextInputModule } from 'src/app/components/text-input/text-input.module';

const meta: Meta<TextInputComponent> = {
  title: 'Forms/TextInput',
  component: TextInputComponent,
  tags: ['autodocs'],
  render: (args: any) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
    moduleMetadata: {
      imports: [TextInputModule]
    },
    template: `<es-text-input
        formControlName="${args.formControlName}"
        placeholderText="${args.placeholderText}"
        >My Label</es-text-input>`
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<TextInputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
  args: {
    formControlName: 'myInput',
    placeholderText: 'My Placeholder'
  },
};

