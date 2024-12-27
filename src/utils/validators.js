export const isGoodPassword = (value) => {
    //entre 6 y 12 caracteres, minimo de un digito numerico una letra minuscula y una letra mayuscula
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    return regex.test(value);
}