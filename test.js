var Redis = require('ioredis');

/////////////////////////////////
// Direct
/////////////////////////////////
var redisDirect = new Redis();
redisDirect.set('direct', 'bla');
console.log('wrote direct');


/////////////////////////////////
// Sentinel way
/////////////////////////////////
var redisSentinel = new Redis({
  sentinels: [{ host: '0.0.0.0', port: 26379 }],
  name: 'master'
});

redisSentinel.set('sentinel', 'foo');
console.log('wrote sentinel');