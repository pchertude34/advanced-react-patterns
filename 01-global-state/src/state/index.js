import React from 'react';

import { NameProvider } from './name';
import { CountProvider } from './count';
export * from './name';
export * from './count';

export default function (props) {
  const { children } = props;
  return (
    <NameProvider>
      <CountProvider>{children}</CountProvider>
    </NameProvider>
  );
}
