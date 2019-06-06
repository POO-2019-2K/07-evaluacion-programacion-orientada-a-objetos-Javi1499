import Tareas from "./Tareas.js"

export default class Tabla {
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

    _cancelEdit(row, tarea) {
        row.cells[0].innerHTML = tarea.nombreA;
        row.cells[1].innerHTML = tarea.getFechaS();
        this._addEditDeleteToRow(row, tarea);
    }

    _saveEdit(row, tarea, newTarea) {
        let pos = this._findtarea(tarea.email);
        this._tareasArray[pos] = newTarea;
        localStorage.setItem('tareas', JSON.stringify(this._tareasArray));
        this._cancelEdit(row, new Tareas(newTarea));
    }

    _editRow(row, tarea) {
        let inombreA = document.createElement('input');
        inombreA.type = 'text';
        inombreA.value = tarea.nombreA;

        let ifechaL = document.createElement('input');
        ifechaL.type = 'date';
        ifechaL.value = tarea.getFechaS();

        let btnSave = document.createElement('input');
        btnSave.type = 'button';
        btnSave.value = 'Grabar';
        btnSave.className = "btn btn-success";
        btnSave.addEventListener('click', () => {
            let newTarea = {
                nombreA: tarea.inombreA,
                fechaL: tarea.ifechaL
            };

            this._saveEdit(row, tarea, newTarea);
        });

        let btnCancel = document.createElement('input');
        btnCancel.type = 'button';
        btnCancel.value = 'Cancelar';
        btnCancel.className = "btn btn-danger";
        btnCancel.addEventListener('click', () => {
            this._cancelEdit(row, tarea);
        });

        row.cells[0].innerHTML = '';
        row.cells[0].appendChild(inombreA);
        row.cells[1].innerHTML = '';
        row.cells[1].appendChild(fechaL);
        row.cells[2].innerHTML = '';
        row.cells[2].appendChild(btnSave);
        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnCancel);
    }

    _addEditDeleteToRow(row, tarea) {
        let btnEdit = document.createElement("input");
        btnEdit.type = "button";
        btnEdit.value = 'Editar';
        btnEdit.className = 'btn btn-success';
        btnEdit.addEventListener('click', () => {
            this._editRow(row, tarea);
        });


        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';


        row.cells[3].innerHTML = "";
        row.cells[3].appendChild(btnDelete);
        row.cells[4].innerHTML = "";
        row.cells[4].appendChild(btnEdit)
        
        btnDelete.addEventListener('click', () => {
            this._tareasArray.splice(tarea, 1);
            row.innerHTML = "";
            localStorage.setItem("tareas", JSON.stringify(this._tareasArray));

            return;
        });
    }


    _showInTable(tarea) {
        let row = this._tablaTareas.insertRow(-1);

        let cellNombreA = row.insertCell(0)
        let cellFechaL = row.insertCell(1);
        let cellDiasR = row.insertCell(2);

        row.insertCell(3);
        row.insertCell(4);

        cellNombreA.innerHTML = tarea.nombreA;
        cellFechaL.innerHTML = tarea.getFechaS();
        cellDiasR.innerHTML = tarea.getDiasRestantes();

        this._addEditDeleteToRow(row)

        let objTarea = {
            nombreA: tarea.nombreA,
            fechaL: tarea.fechaL
        }
        this._tareasArray.push(objTarea);
    }



    addTarea(tarea) {

        this._showInTable(tarea);

        this._tareasArray.sort();
        localStorage.setItem("tareas", JSON.stringify(this._tareasArray.sort()));
        localStorage.setItem("tareas", JSON.stringify(this._tareasArray.sort()));
    }



}