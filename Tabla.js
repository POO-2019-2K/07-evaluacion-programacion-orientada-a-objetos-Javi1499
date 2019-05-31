import Tareas from "./Tareas.js"

export default class Tabla{
    constructor(tableT) {
        this._tablaTareas = tableT;
        this._tareasArray = [];
        this._initTables();

    }

    _initTables() {
        //localStorage.removeItem("tareas")
        let lstareas = JSON.parse(localStorage.getItem("tareas"));
        if (lstareas === null) {
            return;
        }
        lstareas.forEach((e, index) => {
            e.fechaL = new Date(e.fechaL)
            this._showInTable(new Tareas(e));
        });

        console.log(tarea.getDiasRestantes())
    }
    

    _showInTable(tarea) {
        let row = this._tablaTareas.insertRow(-1);

        let cellNombreA = row.insertCell(0)
        let cellFechaL = row.insertCell(1);
        let cellDiasR= row.insertCell(2);

        let cellDelete = row.insertCell(3);
        row.insertCell(4);

        cellNombreA.innerHTML = tarea.nombreA;
        cellFechaL.innerHTML = tarea.getFechaS();
        cellDiasR.innerHTML = tarea.getDiasRestantes();

        let objTarea = {
            nombre: tarea.nombreA,
            email: tarea.getFechaS(),
        }
        this._tareasArray.push(objTarea);
    }


    addTarea(e) {

        this._showInTable(e);

        this._tareasArray.sort()
        localStorage.setItem("contacto1", JSON.stringify(this._tareasArray));
        localStorage.setItem("contacto1", JSON.stringify(this._tareasArray));
    }
    


}