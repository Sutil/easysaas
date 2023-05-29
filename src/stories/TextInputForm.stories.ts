import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { FormControlErrorModule } from 'src/app/components/form-control-error/form-control-error.module';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';

const meta: Meta<TextInputComponent> = {
  title: 'Forms/TextInput',
  tags: ['autodocs'],
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ReactiveFormsModule, FormsModule, FormControlErrorModule],
    }),
    componentWrapperDecorator((story) => `<form [formGroup]="formGroup" (submit)="submitFunction()" >
      ${story}</form>`)
  ],
};

export default meta;
type Story = StoryObj<TextInputComponent>;

const Default: Story = {
  args: {
    placeholderText: 'My placeholder',
    formControlName: 'name'
  },
  render: (args: TextInputComponent) => {

    const formGroup = new FormGroup({})
    const control = new FormControl()
    formGroup.addControl(args.formControlName, control)
    control.setValidators(Validators.required)

    const submitFunction = () => alert(JSON.stringify(formGroup.value))

    return {
      template: `<es-text-input placeholderText="${args.placeholderText}" formControlName="${args.formControlName}" >Rótulo</es-text-input>`,
      props: {
        formGroup: formGroup,
        submitFunction,
        ...args
      },
    }
  }
}


export {
  Default
};

