import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';
import 'loki/configure-react';

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    controls: { expanded: true },
  },
});
