# public site for bsidesvi.com

## Developing locally

The actual site is just static html/css/js using github pages, however if you want to develop locally there's a nodejs devserver script you can run via

Github-Pages only lets you serve from `/.*` (root) or `/docs/.*`, it would be nice to serve from `/public/.*` but whatever.

```
$ npm install
...
$ node devserver.js 
dev app listening on port http://localhost:3030
```
