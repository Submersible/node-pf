# pf&mdash;Pointfree style your JavaScript

## Value Operators 

Method | Operator
-------|---------
slice(key) | obj[key]
call(args...) | obj(args...)
inst(args...) | new obj(args...)
t() | !!obj
f() | !obj
incr() | obj++
decr() | obj--
type() | typeof obj
delete(key) | delete obj[key]
times(n) | obj * n
over(n) | obj / n
mod(n) | obj % n
modb(n) | n % obj
shl(n) | obj << n
shr(n) | obj >> n
lshr(n) | obj >>> n
lt(n) | obj < n
lte(n) | obj <= n
gt(n) | obj > n
gte(n) | obj >= n
eq(n) | obj === n
neq(n) | obj !=== n
weq(n) | obj == n
nweq | obj !== n
and(n) | obj && n
or(n) | obj || n
tern(t, f) | obj ? t : f
set(v) | obj = v
sincr(v) | obj += v
sdecr(v) | obj -= v

## Function Arithmetic

Method | Operator
-------|---------
curry(args...) | obj(args..., called args...)
rcurry(args...) | obj(called args..., args...)
flip() | Flips any arguments applied to function after this
compose(a, b, ...) | a(b(obj(called args...)))

## Examples

### Array manipulation

```javascript
[1, 2, 3, 4, 5].map(pf.times(3)).filter(pf.mod(2).eq(1))
// [ 3, 9, 15 ]
```
