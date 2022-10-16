import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {} 

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
} 

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
} 

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <b>testando</b>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
} 