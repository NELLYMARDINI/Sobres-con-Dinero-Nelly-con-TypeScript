import cl_Sobre from "./Cl_Sobre.js";
export default class Cl_ProcesarSobre {

    private _acumTotalSobres: number = 0;
    
    constructor() {}
    
    procesarSobre(s: cl_Sobre): void {
        this._acumTotalSobres += s.totalSobre(); }  

    totalSobre() {
        return this._acumTotalSobres;
    }
}