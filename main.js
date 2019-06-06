import Tareas from "./Tareas.js";
import Tabla from "./Tabla.js";

class Main {
    constructor() {
        let tabla = new Tabla(document.querySelector("#listado"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");


            if (form.checkValidity() === true) {

                let nombreA = document.querySelector("#nombreA").value;
                let sfechaL = document.querySelector("#fechaL").value;
                sfechaL = sfechaL.split('-');

                let fechaL = new Date(sfechaL[0], sfechaL[1]-1, sfechaL[2]);




                let objTarea = {
                    nombreA: nombreA,
                    fechaL: fechaL
                }

                let tarea = new Tareas(objTarea);

                tabla.addTarea(tarea);
            }
            form.classList.add("was-validated");


        })
        document.querySelector("#alfabeticamente").addEventListener("click",() => {
            tabla.mostrarAlfabeticamente();
        });
        document.querySelector("#numericamente").addEventListener("click",() => {
            tabla.mostrarNumericamente();
        });


    }
}
let m = new Main();