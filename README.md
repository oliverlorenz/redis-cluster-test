# Usage

This is a test for running a redis cluster with sentinel, and connecting by [ioredis](https://github.com/luin/ioredis) library.

```
docker-compose up
node test.js
redis-cli GET foo
```