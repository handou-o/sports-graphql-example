import { Props } from 'react-relay/relay-hooks/RelayEnvironmentProvider.react';

import React from 'react';
import { Error } from './Error';

type State = {error: Error};

export class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: Error): State {
    // Set some state derived from the caught error
    return {error: error};
  }

  render() {

    if (this?.state?.error) {
      // You can render any custom fallback UI
      return <Error></Error>;
    }

    return this.props.children;
  }

}