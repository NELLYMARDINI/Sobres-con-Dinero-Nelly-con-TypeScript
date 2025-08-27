export default class Cl_Sobre {
    constructor(numero, cantBillete, denominacionBillete) {
        this._numero = numero;
        this._cantBillete = cantBillete;
        this._denominacionBillete = denominacionBillete;
    }
    set establecenumero(numero) {
        this._numero = numero;
    }
    get regresanumero() {
        return this._numero;
    }
    set establececantBillete(cantBillete) {
        this._cantBillete = cantBillete;
    }
    get regresacantBillete() {
        return this._cantBillete;
    }
    set establecedenominacionBillete(denominacionBillete) {
        this._denominacionBillete = denominacionBillete;
    }
    get regresadenominacionBillete() {
        return this._denominacionBillete;
    }
    totalSobre() {
        return (this._cantBillete * this._denominacionBillete);
    }
}
