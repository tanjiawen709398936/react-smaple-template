import { lazy } from 'react';

const lazyLoad = path => lazy(() => import(`./${path}`));

//数据统计-sdk数据查询
const sdkDataSearchList = lazyLoad('statistics/sdkDataSearch/list');


// 系统设置
const Password = lazyLoad('system/password/list');






export default {
  sdkDataSearchList, 
  Password,
}