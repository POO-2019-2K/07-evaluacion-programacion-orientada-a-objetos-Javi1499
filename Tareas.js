export default class Tareas {
    constructor(tarea) {
        this._nombreA = tarea.nombreA;
        this._fechaL = tarea.fechaL;

        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }

    get nombreA() {
        return this._nombreA;
    }

    get fechaL() {
        return this._fechaL
    }

    getFechaS() {
        let date = this._getNumber(this._fechaL.getDate() + 1) + "/" + this._months[this._fechaL.getMonth()] + "/" + this._fechaL.getFullYear();

        return date;
    }

    _getNumber(number) {
        if (number < 10) {
            return "0" + number
        }
        return number;
    }

getFechaForDate() {
        let {
            fechaL
        } = this

        let date = fechaL.getFullYear() + "-" + this._getNumber(fechaL.getMonth() + 1) + "-" + this._getNumber(fechaL.getDate() + 1);
        return date;

    }



    getDiasRestantes() {
        let oneDay = (24 * 60 * 60 * 1000);

        let differenceMs = Math.abs(new Date() - this._fechaL);

        return Math.round(differenceMs / oneDay);
    }
}