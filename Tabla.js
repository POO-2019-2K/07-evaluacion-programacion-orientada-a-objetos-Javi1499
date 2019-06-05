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
    }
    

    _showInTable(tarea) {
        let row = this._tablaTareas.insertRow(-1);

        let cellNombreA = row.insertCell(0)
        let cellFechaL = row.insertCell(1);
        let cellDiasR= row.insertCell(2);

        let cellDelete = row.insertCell(3);
        row.insertCell(4);

        cellNombreA.innerHTML = tarea.nombreA;
        cellFechaL.innerHTML = tarea.fechaL;
        cellDiasR.innerHTML = tarea.getDiasRestantes();

        let objTarea = {
            nombreA: tarea.nombreA,
            fechaL: tarea.fechaL
        }
        this._tareasArray.push(objTarea);
    }


    _addEditDeleteToRow(row, tareas) {
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';
    
    
        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnDelete);
        btnDelete.addEventListener('click', () => {
            this._tareasArray.splice(tarea, 1);
            row.innerHTML = "";
            localStorage.setItem("tareas", JSON.stringify(this._tareasArray));
    
            return;
        });
        row.cells[4].innerHTML = "";
        row.cells[4].appendChild(btnDelete);
    }

    addTarea(tarea) {

        this._showInTable(tarea);

        this._tareasArray.sort();
        localStorage.setItem("tareas", JSON.stringify(this._tareasArray.sort()));
        localStorage.setItem("tareas", JSON.stringify(this._tareasArray.sort()));
    }
    


}