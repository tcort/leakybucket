# leakybucket

simple and efficient leaky bucket implementation.

## Example

This leaky bucket allows up to 2 drips in a 5 second window.

```
'use strict';

const LeakyBucket = require('@tcort/leakybucket');

                               /* capacity */ /* window     */
const bucket = new LeakyBucket(      2       ,   5000 /* ms */);

setInterval(() => bucket.drip(), 1000); // simulate hits every 1 second

// throws a LEAKYBUCKET_FULL error after 3 seconds
```
