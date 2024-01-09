// CACHORRO SERVE COM OBJETO BASE !

const cachorro = {
    raca:null,
    patas: 4,
}
const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemão'

//console.log(pastorAlemao)

const viraLata = Object.create(cachorro)
viraLata.raca = 'Vira Lata'

console.log(pastorAlemao, viraLata)

