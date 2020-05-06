# waituntil

Execute a task now and wait until a time interval to execute another task.

Suppose you need to show a snackbar message to a user after getting the API response from the server. After 5 seconds you need to redirect the user to the target route given by the API. You can solve this problem easily using this module.

## Installation

`npm i waituntil`

## Usage

### Basic usage

```
const waituntil = require('waituntil')

const delayedTask = waituntil(()=>{ console.log("I will be running immediately when executed") }, (msg)=>{ console.log("I will run after 5 seconds and print this message ",msg) }, 5000 )

delayedTask("I am awesome")
```

The output is going to be

```
I will be running immediately when executed
```

and after 5 seconds

```
I will run after 5 seconds and print this message I am awesome
```

### Execute Once

Execute the function only once by passing the `executeOnce` flag as true

```
const waituntil = require('waituntil')

const delayedTask = waituntil(()=>{ console.log("I will be running immediately when executed") }, (msg)=>{ console.log("I will run after 5 seconds and print this message",msg) }, 5000, true )

delayedTask("I am awesome")
delayedTask("I am awesome")
```

The output is going to be

```
I will be running immediately when executed
I will run after 5 seconds and print this message I am awesome
```

Note that although delayedTask is called twice, the function will be executed only once.