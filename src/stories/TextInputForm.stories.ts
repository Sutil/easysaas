import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputModule } from 'src/app/components/text-input/text-input.module';


@Component({
  template: `<form [formGroup]="formGroup" (submit)="submit()">
      <es-text-input
        formControlName="myInput"
        placeholderText="My Placeholder"
        >My Label</es-text-input>
        <button class="btn btn-primary" >Submit</button>
    </form>`,
})
class WrapStoryComponent {

  formGroup = this.fb.group({
    myInput: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {}

  submit() {
    alert(JSON.stringify(this.formGroup.value))
  }
}

const meta: Meta<WrapStoryComponent> = {
  title: 'Forms/TextInput/FormControl',
  component: WrapStoryComponent,
  render: () => ({
    moduleMetadata: {
      imports: [ReactiveFormsModule, TextInputModule]
    }
  }),
};

export default meta;
type Story = StoryObj<WrapStoryComponent>;

export const TextInputForm: Story = {
  args: {
  },
};

