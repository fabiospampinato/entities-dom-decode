
/* HELPERS */

const re = /(&(?:[a-zA-Z0-9]+|#[0-9]{1,6}|#[xX][a-fA-F0-9]{1,6});)/g;
const span = document.createElement ( 'span' );
const cache: Record<string, string> = {};

/* MAIN */

const decode = ( str: string ): string => {

  return str.replace ( re, ( match: string, entity: string ) => {
    if ( entity in cache ) return cache[entity];
    span.innerHTML = entity;
    return cache[entity] = span.textContent || entity;
  });

};

/* EXPORT */

export default decode;
