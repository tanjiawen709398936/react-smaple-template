import React from 'react';
import { Route } from 'react-router-dom';
import AllPages from '@pages';

export const RouteWithSubRoutes = r => {
  const Component = AllPages[r.component];

  return <Route
    key={r.key}
    path={`/main${r.key}`}
    render={props => {
      return (
        // pass the sub-routes down to keep nesting
        <Component {...props}/>
      )
    }}
  />
}