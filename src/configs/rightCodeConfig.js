import config from './index';

const getRightCode = r => {
  let {key, rightCode, breadcrumb} = r;
  key = '/main' + key;
  return {[key]: {rightCode, breadcrumb}}
}

const rightCodeList = config.reduce((value, r) => {
  if(r.subs){
    value = r.subs.reduce((data, ele)=>{
      return {...data, ...getRightCode(ele)}
    }, value);
  }
  return {...getRightCode(r), ...value}
}, {});

export default rightCodeList