var once = require("once");
var wrappy = require("wrappy");
/**
 *
 * @param fn Function to execute before waiting for timeout time and executing the callback
 * @param cb Function to execute after the said 'timeout' period
 * @param timeout After waiting for 'timeout' interval execute the function
 * @param executeOnce Make sure this function executes only once
 */
function waituntil(fn, cb, timeout, executeOnce) {
    if (fn === void 0) { fn = function () { }; }
    if (cb === void 0) { cb = function () { }; }
    if (timeout === void 0) { timeout = 0; }
    if (executeOnce === void 0) { executeOnce = false; }
    if (!fn || !cb)
        throw new Error("Expected function and callback to be present");
    if (typeof fn !== "function")
        throw new TypeError("Expected fn to be a function but got " + typeof fn);
    if (typeof cb !== "function")
        throw new TypeError("Expected cb to be of type function but got " + typeof cb);
    function wrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        fn.apply(this);
        setTimeout(function () {
            cb.apply(this, args);
        }, timeout);
    }
    var withWrappy = wrappy(wrapper);
    return executeOnce ? once(withWrappy) : withWrappy;
}
module.exports = waituntil;
