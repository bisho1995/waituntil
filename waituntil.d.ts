declare const once: any;
declare const wrappy: any;
/**
 *
 * @param fn Function to execute before waiting for timeout time and executing the callback
 * @param cb Function to execute after the said 'timeout' period
 * @param timeout After waiting for 'timeout' interval execute the function
 * @param executeOnce Make sure this function executes only once
 */
declare function waituntil(fn?: () => any, cb?: (x: any) => any, timeout?: number, executeOnce?: boolean): any;
