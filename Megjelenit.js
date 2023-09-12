
export class Megjelenit {
    constructor(lista, tarolo) {
        this.lista = lista
        this.tarolo = tarolo
        this.megjelenit()
    }
    megjelenit() {

        for (const key in this.lista) {
            { 
                console.log(key)
                console.log(this.lista[key])
                let par = this.lista[key]
                this.tarolo.innerHTML +=
                    `<table class="table">
                        <tr class = "${key}">
                            <th scope="col">${this.lista[key].tevekenyseg}</th>
                            <th scope="row">${this.lista[key].hatarido}</th>
                            <th scope="row">&#9989;</th>
                            <th scope="row">🗑️</th>
                        </tr>
                    </table>`
            }
                
            }
        
    }

}