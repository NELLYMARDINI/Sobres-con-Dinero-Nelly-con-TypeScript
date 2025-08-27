import cl_Sobre from "./Cl_Sobre.js";
export default class Cl_ProcesarSobre {
    totalSobre() {
        throw new Error("Method not implemented.");
    }
    constructor() {
        this._acumTotalSobres = 0;
    }
    procesarSobre(s) {
        this._acumTotalSobres += s.totalSobre();
    }
}
