import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { FormControlErrorModule } from 'src/app/components/form-control-error/form-control-error.module';
import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';

const meta: Meta<PasswordInputComponent> = {
  title: 'Forms/PasswordInput',
  tags: ['autodocs'],
  component: PasswordInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ReactiveFormsModule, FormsModule, FormControlErrorModule],
    }),
    componentWrapperDecorator((story) => `<form [formGroup]="formGroup" (submit)="submitFunction()" >
      ${story}</form>`)
  ],
};

export default meta;
type Story = StoryObj<PasswordInputComponent>;

const Default: Story = {
  args: {
    placeholderText: 'My placeholder',
    formControlName: 'name'
  },
  render: (args: PasswordInputComponent) => {

    const formGroup = new FormGroup({})
    const control = new FormControl()
    formGroup.addControl(args.formControlName, control)
    control.setValidators(Validators.minLength(6))

    const submitFunction = () => alert(JSON.stringify(formGroup.value))

    return {
      template: `<es-password-input placeholderText="${args.placeholderText}" formControlName="${args.formControlName}" >Rótulo</es-password-input>`,
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

