import { Title } from '@components/Title';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Title title="title" subtitle="subtitle" />);

describe('Title component', () => {
  describe('Component not exist', () => {
    it('formTitle check that the component has not been rendered #smoke #test', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('formTitle')).not.toBeInTheDocument();
      expect(queryByTestId('formTitle')).not.toHaveTextContent('title');
      expect(queryByTestId('formSubtitle')).not.toBeInTheDocument();
      expect(queryByTestId('formSubtitle')).not.toHaveTextContent('subtitle');
    });
  });
});
