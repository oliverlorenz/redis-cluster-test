# Usage

This is a test for running a redis cluster with sentinel, and connecting by [ioredis](https://github.com/luin/ioredis) library.

```
docker-compose up
npm install
node test.js
[STRG+C]
redis-cli GET direct
redis-cli GET sentinel
```