export default class Tareas {
    constructor(tarea) {
        this._nombreA = tarea.nombreA;
        this._fechaL = tarea.fechaL;
    }

    get nombreA() {
        return this._nombreA;
    }

    get fechaL() {
        return this._fechaL
    }

    getFechaS() {
        let d = this._fechaL.getDate() + "/" + this._fechaL.getMonth() + "/" + this._fechaL.getFullYear();
        return d;
    }

    getDiasRestantes() {
        let oneDay = (24 * 60 * 60 * 1000);

        let differenceMs = Math.abs(new Date() - this._fechaL);
        return Math.round(differenceMs / oneDay);
    }
}