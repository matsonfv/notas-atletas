let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

class Ginastica {
    constructor(atletas) {
        this.atletas = atletas;
    }
    ordenarNotas(notasAtleta) {
        return notasAtleta.sort(function(a, b){return b - a});
    }
    mediaNotas(mediaAtleta) {
        let notasComputadas = mediaAtleta.slice(1,4).reduce((total, valorAtual) => 
            total + valorAtual    
        , 0);

        return notasComputadas/(mediaAtleta.length - 2);
    };
    imprimirResultadoAtleta() {
        for (let i = 0; i < this.atletas.length; i++) {
            console.log(`Atleta: ${this.atletas[i].nome}`);
            console.log(`Notas obtidas: ${this.ordenarNotas(this.atletas[i].notas)}`);
            console.log(`Média válida: ${this.mediaNotas(this.ordenarNotas((this.atletas[i].notas)))}\n`);
        }
    }
}

let notas = new Ginastica(atletas);
notas.imprimirResultadoAtleta();
