import { Button } from '@components/Button';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = (testid: string) =>
  render(
    <Button type="button" testid={testid} disabled={false}>
      {testid === 'formBtn' ? 'Submit' : 'X'}
    </Button>,
  );

describe('Button component', () => {
  describe('Component exist', () => {
    it('formBtn check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent('formBtn');

      expect(queryByTestId('formBtn')).toBeInTheDocument();
    });
  });
});
