declare const once: any;
declare const wrappy: any;
/**
 * This module is supposed to wait for a time duration and then execute a specific callback function
 * While waiting, the function may optionally execute another function.
 *
 * @param fn Function to execute before waiting for timeout time and executing the callback
 * @param cb Function to execute after the said 'timeout' period
 * @param timeout After waiting for 'timeout' interval execute the function
 * @param executeOnce Make sure this function executes only once
 */
declare function waituntil(fn?: () => any, cb?: (x: any) => any, timeout?: number, executeOnce?: boolean): any;
