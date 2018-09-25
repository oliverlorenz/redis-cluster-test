var Redis = require('ioredis');

var redis = new Redis({
  sentinels: [{ host: '0.0.0.0', port: 26379 }],
  name: 'master'
});

redis.set('foo', new Date());