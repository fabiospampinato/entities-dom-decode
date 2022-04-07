
/* IMPORT */

import 'jsdom-global/register.js';
import {describe} from 'fava';
import decode from '../dist/index.js';

/* MAIN */

describe ( 'decode', it => {

  it ( 'works', t => {

    const tests = [
      ['&foo;', '&foo;'],
      ['&amp;', '&'],
      ['&amp;amp;', '&amp;'],
      ['&amp;#38;', '&#38;'],
      ['&amp;#x26;', '&#x26;'],
      ['&amp;#X26;', '&#X26;'],
      ['&#38;', '&'],
      ['&#38;#38;', '&#38;'],
      ['&#x26;', '&'],
      ['&#x26;#38;', '&#38;'],
      ['&#X26;#38;', '&#38;'],
      ['&#x3a;', ':'],
      ['&#x3A;', ':'],
      ['&#X3a;', ':'],
      ['&#X3A;', ':'],
      ['asdf &amp; &yuml; &uuml; &apos;', 'asdf & ÿ ü \''],
      ['&amp;&num;38&semi;', '&#38;'],
      ['Foo &#xA9; bar &#x1D306; baz &#x2603; qux', 'Foo © bar 𝌆 baz ☃ qux']
    ];

    tests.forEach ( ([ encoded, decoded ]) => t.is ( decode ( encoded ), decoded ) );

  });

});
