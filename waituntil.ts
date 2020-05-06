const once = require("once");
const wrappy = require("wrappy");

/**
 * This module is supposed to wait for a time duration and then execute a specific callback function
 * While waiting, the function may optionally execute another function. 
 * 
 * @param fn Function to execute before waiting for timeout time and executing the callback
 * @param cb Function to execute after the said 'timeout' period
 * @param timeout After waiting for 'timeout' interval execute the function
 * @param executeOnce Make sure this function executes only once
 */
function waituntil(
  fn: () => any = () => {},
  cb: (x: any) => any = () => {},
  timeout: number = 0,
  executeOnce: boolean = false
) {
  if (!fn || !cb)
    throw new Error("Expected function and callback to be present");
  if (typeof fn !== "function")
    throw new TypeError("Expected fn to be a function but got " + typeof fn);
  if (typeof cb !== "function")
    throw new TypeError(
      "Expected cb to be of type function but got " + typeof cb
    );
  function wrapper(...args: Array<any>): void {
    fn.apply(this);

    setTimeout(function () {
      cb.apply(this, args as any);
    }, timeout);
  }

  const withWrappy = wrappy(wrapper);
  return executeOnce ? once(withWrappy) : withWrappy;
}

module.exports = waituntil;
