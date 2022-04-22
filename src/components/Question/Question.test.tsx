import { Question } from '@components/Question';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Question question="question" link="link" />);

describe('Question component', () => {
  describe('Component exist', () => {
    it('formBtn check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('formQuestion')).toBeInTheDocument();
      expect(queryByTestId('formQuestion')).toHaveTextContent('question');
      expect(queryByTestId('formLink')).toBeInTheDocument();
      expect(queryByTestId('formLink')).toHaveTextContent('link');
    });
  });
});
