export default class Cl_Sobre {
    private _numero : number;
    private _cantBillete : number;
    private _denominacionBillete: number;
    
    constructor (numero: number, cantBillete: number, denominacionBillete: number) {
        this._numero = numero;
        this._cantBillete = cantBillete;
        this._denominacionBillete = denominacionBillete;
    }           

    set establecenumero(numero: number) {
        this._numero = numero;     }
   
    get regresanumero(): number {
        return this._numero;     }
   
    set establececantBillete(cantBillete: number) {
        this._cantBillete = cantBillete;     }
  
    get regresacantBillete(): number {
        return this._cantBillete;     }

    set establecedenominacionBillete(denominacionBillete: number) {
        this._denominacionBillete = denominacionBillete;     }

    get regresadenominacionBillete(): number {
        return this._denominacionBillete;    }
    
    totalSobre(): number {
        return (this._cantBillete * this._denominacionBillete); }
}   