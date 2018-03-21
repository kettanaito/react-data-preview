import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';

import Example from './Example';

storiesOf('Welcome', module)
  .add('Example', () => <Example />);
