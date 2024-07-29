/* PROYECTO EN JAVASCRIPT:

LLEGAS AL TRABAJO POR LA MAÑANA Y TU JEFE TE DICE:

"...NECESITAMOS EXTRAER EL NOMBRE DEL PROVEEDOR DE CORREOS DE CADA E-MAIL QUE RECIBIMOS."</h2>

ENTONCES...

¿COMO LO HACEMOS?

*/

// SOLUCIÓN:

function findEmailProvider(address)
{
    const lastIndex = address.lastIndexOf('@');
    return address.slice(lastIndex + 1, address.length);
}

// EN UN CORREO TRADICIONAL, TODO LO QUE VIENE DESPUÉS DE UN '@' (ARROBA) REPRESENTA EL NOMBRE DEL PROVEEDOR DE CORREOS.

console.log(findEmailProvider('MARSFOREVER472@gmail.com'));

// SOLUCIÓN 2 (ALTERNATIVO):

function findEmailProvider2(address)
{
    const lastIndex = address.lastIndexOf('@');
    return address.slice(lastIndex, address.length);
}

console.log(findEmailProvider2('MARSFOREVER472@gmail.com'));