import { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />
    ]
  }, 
  argTypes: {}

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {} 

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />
  }
} 

export const BothIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Selecione seu e-mail'/>,
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>
    ]
  }
}