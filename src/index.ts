
/* HELPERS */

const entityRe = /(&(?:[a-zA-Z0-9]+|#[0-9]{1,6}|#[xX][a-fA-F0-9]{1,6});)/g;
const element = document.createElement ( 'textarea' );
const cache: Record<string, string> = {};

/* MAIN */

const decode = ( str: string ): string => {

  return str.replace ( entityRe, ( _: string, entity: string ) => {

    const cached = cache[entity];

    if ( cached ) return cached;

    element.innerHTML = entity;

    return cache[entity] = ( element.textContent || entity );

  });

};

/* EXPORT */

export default decode;
