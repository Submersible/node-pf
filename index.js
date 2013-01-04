/*jslint node: true, nomen: true */
var pf = (function (opts) {
    'use strict';

    ops = {
        slice: 'a[b]',
        call: 'a.apply(this,args)',
        inst: 't=Object.create(a),a.apply(o,args)',
        t: '!!a',
        f: '!a',
        incr: 'a++',
        decr: 'a--',
        type: 'typeof a',
        delete: 'delete a[b]',
        times: 'a*b',
        over: 'a/b',
        mod: 'a%b',
        modb: 'b%a',
        shl: 'a<<b',
        shr: 'a>>b',
        lshr: 'a>>>b',
        lt: 'a<b',
        lte: 'a<=b',
        gt: 'a>b',
        gte: 'a>=b',
        eq: 'a===b',
        neq: 'a!===b',
        weq: 'a==b',
        nweq: 'a!==b',
        and: 'a&&b',
        or: 'a||b',
        tern: 'a?b:c',
        set: 'a=b',
        sincr: 'a+=b',
        sdecr: 'a-=b'
    };

    ops.map(function (code) {
        return function (a, b, c) {
            var t, args = Array.prototype.slice(arguments, 1);
            return eval(code);
        };
    });

    return pf;
}());

/*
var pf = dsl
    .methods([

        'slice',
        'call', 'inst', 'incr', 'decr', 'type', 'del',
        't', 'f', 'sub', 'add', 'times', 'over', 'mod',
        'shl', 'shr', 'lshr',
        'gt', 'gte', 'lt', 'lte', 'eq', 'seq',
        'curry', 'flip'
    ])
    .call(function (fn) {
        if (!this._fn) {
            return {_fn: fn};
        }
        console.log('rawrrr!', this._actions);
    })
    .done();


var blah = pf
    .curry('foo')
    .curry('bar')
    .foo('hello', 'wrold')
    .bar('rwarrrr');

promise.get('foo')
promise.then(pf.(op.get, 'foo'))

var curryFn = pf.flip().partial('hello', 'world');


function tripleBackflip(pf) {
    return pf.flip().flip().flip();
}

var tripleBackFlip = (pf) => pf.flip().flip().flip()

var tripleBackFlip = pf.chain('flip', 'flip', 'flip')

pf.compose([
    pf.partialRight(op.fcall, 'flip'),
    pf.partialRight(op.fcall, 'flip'),
    pf.partialRight(op.fcall, 'flip')
])(pf)


function oneTwoThreeFlip(pf) {
    return tripleBackflip(pf).partial(1, 2, 3);
}

oneTwoThreeFlip(pf(thisFunction))


curryFn(thisFunction)('gfsga')



blah('hello');
*/

