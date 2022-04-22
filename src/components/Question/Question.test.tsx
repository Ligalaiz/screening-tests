import { Question } from '@components/Question';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<Question question="question" link="link" />);

describe('Question component', () => {
  describe('Component not exist', () => {
    it('formBtn check that the component not has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('formQuestion')).not.toBeInTheDocument();
      expect(queryByTestId('formQuestion')).not.toHaveTextContent('question');
      expect(queryByTestId('formLink')).not.toBeInTheDocument();
      expect(queryByTestId('formLink')).not.toHaveTextContent('link');
    });
  });
});
