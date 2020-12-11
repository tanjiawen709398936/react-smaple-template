import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'mobx-react';
import {ConfigProvider} from 'antd';

import Page from './page';
import * as serviceWorker from './serviceWorker';

render(
    <Provider >
      <ConfigProvider locale={zhCN}>
        <Page/>
      </ConfigProvider>
    </Provider>
    , 
    document.getElementById('container')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
