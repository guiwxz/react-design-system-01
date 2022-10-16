import React from "react";
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: React.ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
  return (
    <div className='flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

const TextInputIcon: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

export interface TextInputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput: React.FC<TextInputInputProps> = (props) => {

  return (
    <input 
      className={'bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'}
      {...props}
    />
  )
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputInput.displayName = 'TextInput.Input';
TextInputIcon.displayName = 'TextInput.Icon';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}