import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as stories from '@/components/form/InputText.stories';

const { InputTextWithLabel, InputTextWithoutLabel } =
  composeStories(stories);

test('render input without label', () => {
  render(<InputTextWithoutLabel />);
  const inputElement = screen.queryByText(/my label/i);
  expect(inputElement).not.toBeInTheDocument();
});
test('render input with label', () => {
  render(<InputTextWithLabel />);
  const inputElement = screen.getByLabelText(/my label/i);
  expect(inputElement).toBeInTheDocument();
});
