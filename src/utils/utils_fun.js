/** 防抖函数 (debounce)
 * @author 猫吃鱼
 * @param {Function} fn // 要执行的函数
 * @param {Object} delay // 时间毫秒
 */
function debounce(fn, delay) {
  var timer;
  var gapTime = delay || 1000;//间隔时间，如果delay不传，则默认1000ms
  return function () {
    clearTimeout(timer);
    var context = this;
    var args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args);
    }, gapTime);
  };
}

/** 节流函数 (throttle)
 * @author 猫吃鱼
 * @param {Function} fn 要执行的函数
 * @param {Nunber} delay 时间毫秒
 */
function throttle(fn, delay) {
  var enterTime = 0;//触发的时间
  var gapTime = delay || 300;//间隔时间，如果delay不传，则默认300ms
  return function () {
    var context = this;
    var backTime = new Date();//第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}



export default {
  debounce, // 防抖
  throttle, // 节流
}
