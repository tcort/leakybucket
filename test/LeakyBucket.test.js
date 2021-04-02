'use strict';

const LeakyBucket = require('..');
const expect = require('expect.js');

describe('LeakyBucket', function () {

    describe('constructor(capacity, window)', function () {
        it('should set up the bucket', function () {
            const bucket = new LeakyBucket(10, 1000);
            expect(bucket.capacity).to.be(10);
            expect(bucket.window).to.be(1000);
            expect(bucket.index).to.be(-1);
        });
        it('should enforce limits', function (done) {
            const bucket = new LeakyBucket(2, 1000);
            expect(bucket.capacity).to.be(2);
            expect(bucket.window).to.be(1000);
            expect(bucket.index).to.be(-1);
            expect(() => bucket.drip()).not.to.throwError();
            expect(() => bucket.drip()).not.to.throwError();
            expect(() => bucket.drip()).to.throwError();
            setTimeout(() => {
                expect(() => bucket.drip()).not.to.throwError();
                done();
            }, 1001);
        });
    });

});
