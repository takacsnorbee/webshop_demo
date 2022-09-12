## JavaScript

```js
// Input
const servers = {
  S1: {
    os: "debian",
    status: true,
    services: ["http", "ssh"],
    cpu: 2,
    ram: 8192
  },
  S2: {
    os: "windows",
    status: true,
    services: ["http", "ftp", "print"],
    cpu: 8,
    ram: 16384
  },
  S3: {
    os: "debian",
    status: false,
    services: ["http", "ssh"],
    cpu: 2,
    ram: 8192
  },
  S4: {
    os: "windows",
    status: false,
    services: ["http", "ftp", "print"],
    cpu: 8,
    ram: 16384
  },
  S5: {
    os: "debian",
    status: true,
    services: ["ssh"],
    cpu: 2,
    ram: 8192
  },
  S6: {
    os: "windows",
    status: true,
    services: ["ftp", "print"],
    cpu: 8,
    ram: 16384
  }
};

// Expected output:
// list of object, where
// the status is true, services include http (filters)
// result object, like: name: S1 + status: 'online'/'offline' + services as before BUT WITHOUT http
// Expected console output:
(2) [Object, Object]
0: Object
name: "S1"
status: "online"
services: Array(1)
0: "ssh"
1: Object
name: "S2"
status: "online"
services: Array(2)
0: "ftp"
1: "print"
```

## React

Create a simple React app in this way:

- From the index.js you call the App.js comp. and pass an array to it as a prop
- The array elements are the words for a greeting. Example: ["Hello", "Dear", "My", "Friend!"]
- If we pass another array (shorter, longer one) that also should work nicely
- App.js: initial layout: "Click on the button!" text (H1) and a button with "Next"
- Working: when the user clicks, every time one word (the next one) from the array is rendered.
- At the end: Bye bye is rendered.

Example: ["Hello", "Boy!"]

- Click on the button!
- Next

[click]

- Hello
- Next

[click]

- Boy!
- Next

[click]

- Bye bye!
- Next

[click]

- Bye bye!
- Next
