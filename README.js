/**
 * Questo file è un file javascript che non viene chiamato da nessuna parte, e modificarlo non 
 * intaccherà in nessun modo il codice.
 * Qui voglio elencare tutte le cose "antintuitive" del javascript che possono 
 * ritornare utili per il development.
 * Potrebbe risparmiare qualche ricerca su google
 */

/***********************************************************************************
 * CLASSI IN JAVASCRIPT [ES6 Javascript]
 ***********************************************************************************/

class nomeClasse {
    constructor(parametro1,parametro2) {
        //Codice del costruttore, per esempio:
        this.booleano = parametro1
        this.stringa = parametro2
    }

    metodo1() {
        //Codice del metodo, per esempio:
        if (this.booleano)
        console.log(this.stringa)
    }
}

/**
 * Notare la mancanza della keyword "function" per le dichiarazioni delle funzioni
 * Notare allo stesso modo l'assenza della dichiarazione dei campi
 */


/**********************************************************************************
 * IL CONCETTO DI EXPORTS [NodeJS]
 **********************************************************************************
 * 
 * Qualsiasi cosa dichiarata in un file a sé stante, non può essere vista facilmente da un file esterno
 * Per ovviare a questo problema, si può salvare ciò che ci interessa nell'oggetto "exports".
 * NodeJS si occuperà di rimandare ciò che abbiamo salvato con la funzione "require"
 */

//Per esempio, se volessimo esportare la nostra "nomeClasse" dichiarata sopra

exports.nomePubblico = nomeClasse

//Questo non vale solo per le classi, ma letteralmente per TUTTO, per esempio, questo è valido:

function funzioneDiProva() {
    return "Javascript fa schifo"
}

exports.valutaJavascript = funzioneDiProva

//Ci sono dei modi più veloci per dichiarare funzioni, classi, eccetera, per esempio, la funzione sopra
//è equivalente a:

exports.valutaJavascript = () => {
    return "Javascript fa schifo"
}

//che è semplicemente la dichiarazione di una funzione anonima assegnata direttamente a valutaJavascript

//Per recuperare da un file esterno questa funzione, il codice corretto sarebbe
let README = require("./percorso/per/README.js")
README.valutaJavascript()

//Ovviamente possiamo andare a riprendere anche singole fuzioni, per esempio con:
let valutaJavascript = require("./percorso/per/README.js").valutaJavascript

//Il punto che si vede su require ("./") è obbligatorio