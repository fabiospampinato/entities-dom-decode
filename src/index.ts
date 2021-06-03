
/* HELPERS */

const re = /(&(?:[a-zA-Z0-9]+|#[0-9]{1,6}|#[xX][a-fA-F0-9]{1,6});)/g;
const span = document.createElement ( 'span' );

/* MAIN */

const decode = ( str: string ): string => {

  return str.replace ( re, ( match: string, entity: string ) => {
    span.innerHTML = entity;
    return span.textContent || entity;
  });

};

/* EXPORT */

export default decode;
