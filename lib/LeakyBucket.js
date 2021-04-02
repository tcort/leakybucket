'use strict';

class LeakyBucket {

    constructor(capacity, window) {
        this.capacity = Math.max(Math.floor(capacity), 1);
        this.window = Math.max(Math.floor(window), 1);
        this.contents = new Array(this.capacity);
        this.contents.fill(0);
        this.index = -1;
    }

    drip(timestamp = new Date()) {
        this.index = (this.index + 1) % this.capacity;
        const previousTimestamp = this.contents[this.index];
        this.contents[this.index] = timestamp.getTime();
        if (previousTimestamp + this.window > timestamp) {
            const error = new Error('LeakyBucket is FULL');
            error.name = 'LEAKYBUCKET_FULL';
            error.code = 'ERR_LEAKYBUCKET_FULL';
            error.status = 429;
            error.timestamp = timestamp;
            error.previousTimestamp = previousTimestamp;
            error.index = this.index;
            error.capacity = this.capacity;
            error.window = this.window;
            throw error;
        }
    }

}

module.exports = LeakyBucket;
