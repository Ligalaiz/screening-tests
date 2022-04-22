import { errorFallback } from '@utils/errorFallback.utils';
import { ComponentType } from 'react';
import { withErrorBoundary } from 'react-error-boundary';

const errorBoundary = <P extends object>(Component: ComponentType<P>) =>
  withErrorBoundary(Component, {
    FallbackComponent: errorFallback,
    onError(error) {
      console.log({ error });
    },
  });

export { errorBoundary };
