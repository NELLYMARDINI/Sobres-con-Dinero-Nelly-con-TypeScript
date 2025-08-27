import cl_Sobre from "./Cl_Sobre.js";
export default class Cl_ProcesarSobre {
    totalSobre() {
        throw new Error("Method not implemented.");
    }
    private _acumTotalSobres: number = 0;
    
    constructor() {}
    
    procesarSobre(s: cl_Sobre): void {
        this._acumTotalSobres += s.totalSobre(); }  
}