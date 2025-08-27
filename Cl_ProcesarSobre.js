import cl_Sobre from "./Cl_Sobre.js";
export default class Cl_ProcesarSobre {
    constructor() {
        this._acumTotalSobres = 0;
    }
    procesarSobre(s) {
        this._acumTotalSobres += s.totalSobre();
    }
    totalSobre() {
        return this._acumTotalSobres;
    }
}
