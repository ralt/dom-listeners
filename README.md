dom-listeners
===

DOM Event listeners made easy.

Installation
---

    npm install dom-listeners

API
---

```javascript
// Simple listener
var on = require('dom-listeners/listener'),
    byId = require('dom-essentials/by').id;

var someEl = byId('some-id');

on(someEl, 'click', function(e) {
    // Event listening!
});

// Delegation
var delegate = require('dom-listeners/delegation');

delegate(document, 'click', 'li', function(e) {
    console.log(this.nodeName); // "LI"
});
```

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
