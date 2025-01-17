# Entities DOM Decode

A ~200 bytes function with no dependencies for decoding HTML entities, it only works in the browser.

## Features

- Every other package for decoding HTML entities ships with a ~30kb list of entities supported, this package doesn't need such list as it uses the DOM for decoding entities, and it's as a result ~99% smaller. The downside is that it only works in the browser.

## Install

```sh
npm install --save entities-dom-decode
```

## Usage

```ts
import decode from 'entities-dom-decode';

// Let's decode some HTML entities

decode ( 'foo&amp;&#x3a;bar' ); // => 'foo&:bar'
```

## License

MIT © Fabio Spampinato
