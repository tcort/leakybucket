'use strict';

// const LeakyBucket = require('leakybucket');
const LeakyBucket = require('..');

                               /* capacity */ /* window     */
const bucket = new LeakyBucket(      2       ,   5000 /* ms */);

setInterval(() => bucket.drip(), 1000); // simulate hits every 1 second

// throws a LEAKYBUCKET_FULL error after 3 seconds
