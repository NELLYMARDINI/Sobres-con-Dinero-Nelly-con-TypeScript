//4. SOBRES CON DINERO 
//Se tienen N sobres con dinero, cada uno con billetes del mismo valor.
// De cada sobre se conoce el valor del billete y la cantidad. Se requiere
// determinar el total de dinero: a. en cada sobre, b. entre todos los
// sobres. 
//El cliente entrega el siguiente formato para la presentación de la
// salida: 
//El sobre Nº1 tiene $50 
//El sobre Nº2 tiene $40 
//El sobre Nº3 tiene $400 
//El sobre Nº4 tiene $150 
//El total entre todos los sobres es de $640 
//Se procesaron para este ejemplo 4 sobres:
//  a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y d) 3 de $50

import Cl_Sobre from "./Cl_Sobre.js";
import Cl_ProcesarSobre from "./Cl_ProcesarSobre.js";

const sobre1 : Cl_Sobre = new Cl_Sobre(1, 5, 10);
const sobre2 : Cl_Sobre = new Cl_Sobre(2, 2, 20);
const sobre3 : Cl_Sobre = new Cl_Sobre(3, 4, 100);
const sobre4 : Cl_Sobre= new Cl_Sobre(4, 3, 50);

const procesarS : Cl_ProcesarSobre = new Cl_ProcesarSobre();

procesarS.procesarSobre(sobre1);
procesarS.procesarSobre(sobre2);
procesarS.procesarSobre(sobre3);
procesarS.procesarSobre(sobre4);

let salida : HTMLElement  | null =  document.getElementById("salida");

if (salida) {
    salida.innerHTML =
   `El sobre Nº1 tiene ${sobre1.totalSobre()}<br>`+
   `El sobre Nº2 tiene ${sobre2.totalSobre()}<br>`+
   `El sobre Nº3 tiene ${sobre3.totalSobre()}<br`+
   `El sobre Nº4 tiene ${sobre4.totalSobre()}<br>`+
   `El total entre todos los sobres es de ${procesarS.totalSobre()}`
}