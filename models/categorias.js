export  default class Categoria{ //  export con  ES6 (sesión 6)

    constructor(categoriaId, categoriaNombre, descripcion){

        this._categoriaId = categoriaId;

        this._categoriaNombre = categoriaNombre;

        this._descripcion = descripcion;

    }

    get categoriaId(){

        return this._categoriaId;

    }

    set categoriaId(categoriaId){

        this._categoriaId = categoriaId;

    }

    get categoriaNombre(){

        return this._categoriaNombre;

    }

    set categoriaNombre(categoriaNombre){

        this._categoriaNombre = categoriaNombre;

    }

    get descripcion(){

        return this._descripcion;

    }

    set descripcion(descripcion){

        this._descripcion = descripcion

    }

}