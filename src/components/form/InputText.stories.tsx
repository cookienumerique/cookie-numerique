// Meta
import { Meta, StoryObj } from '@storybook/react';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import InputText from './InputText';

const meta = {
  title: 'CookUI/Form/InputText',
  component: InputText,
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;

const FormWrapper = ({
  children,
}: {
  children: ReactElement;
}) => {
  const form = useForm();
  return (
    <FormProvider {...form}>{children}</FormProvider>
  );
};

// Story
type Story = StoryObj<typeof meta>;

export const InputTextWithoutLabel: Story = {
  args: {
    name: 'name',
    placeholder: 'Doe',
  },
  render: (args) => (
    <FormWrapper>
      <InputText {...args} />
    </FormWrapper>
  ),
};

export const InputTextWithLabel: Story = {
  args: {
    name: 'name',
    placeholder: 'Doe',
    label: 'my label',
  },
  render: (args) => (
    <FormWrapper>
      <InputText {...args} />
    </FormWrapper>
  ),
};

export const InputTextRequired: Story = {
  args: {
    name: 'name',
    placeholder: 'Doe',
    label: 'Name',
    rules: {
      required: true,
    },
  },
  render: (args) => (
    <FormWrapper>
      <InputText {...args} />
    </FormWrapper>
  ),
};

export const InputPassword: Story = {
  args: {
    name: 'name',
    type: 'password',
    placeholder: '********',
    label: 'Password',
    rules: {
      required: true,
    },
  },
  render: (args) => (
    <FormWrapper>
      <InputText {...args} />
    </FormWrapper>
  ),
};
