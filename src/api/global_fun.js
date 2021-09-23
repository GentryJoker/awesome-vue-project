/**
 * 说在前面：推荐使用【匿名函数】或【函数表达式】挂载全局函数
 * 注意：箭头函数的 this 指向为 undefined。
 */

"use strict"; // 这里是严格模式

// const test0 = () => {
//   console.log('全局函数0 test this',this)
// };

// 【推荐】
function test1() {
  console.log('全局函数1 test this',this)
};

// 【推荐】
const test2 = function() {
  console.log('全局函数2 test this',this)
};

/** 请求函数封装
 * @author 猫吃鱼
 * @param {Object} config 参数
 */
function myRequest(config) {
  config = config || {};

  // 如果没有传入 url 字段则返回错误
  if(!config.url) {
    return Promise.reject('错误 url 必填')
  }

  //创建axios实例
  const instance = this.$axios.create({
      baseURL: this.GLOBAL.baseUrl,
      timeout: 50000
  })
  //发送真正的网络请求
  return instance(config);
};


// 全局函数表
const fun_form = {
  // test0,
  test1, // 【推荐】
  test2, // 【推荐】
  test() {
    console.log('全局函数 test this',this)
  },
  myRequest, // 请求函数封装
}

console.log('全局函数表 == ',fun_form)


// console.log(fun_form)
export default {
  install: function(Vue,options) {
    // Vue.prototype['test'] = function() {
    //   console.log('测试函数名重复错误')
    // };
    for(let key in fun_form) {
      if(Vue.prototype[key]) throw new Error(`The vue already includes "${key}" functions`); // 函数名已存在
      if(fun_form.hasOwnProperty(key)) {
        Vue.prototype[key] = fun_form[key];
      }
    }
  }
}
