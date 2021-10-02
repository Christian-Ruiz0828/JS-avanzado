/* Try nos permite ejecutar codigo propenso a fallar de una manera segura
*/

const gravedad = 9.8;
console.log

/* Intenta ejecutar el codigo, si hay un error ejecuta el catch */
try {
gravedad = 10.14;
} catch(error) {
    /* El catch se ejecutar si hay un error, recibe como primer parametro el error */
    console.log(error);
} finally {
    /* El finally siempre se ejecuta */
    console.log('soy el finally');
}
console.log(gravedad);