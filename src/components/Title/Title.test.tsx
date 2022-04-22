import { Title } from '@components/Title';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Title title="title" subtitle="subtitle" />);

describe('Title component', () => {
  describe('Component exist', () => {
    it('formTitle check that the component has been rendered #smoke #test', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('formTitle')).toBeInTheDocument();
      expect(queryByTestId('formTitle')).toHaveTextContent('title');
      expect(queryByTestId('formSubtitle')).toBeInTheDocument();
      expect(queryByTestId('formSubtitle')).toHaveTextContent('subtitle');
    });
  });
});
