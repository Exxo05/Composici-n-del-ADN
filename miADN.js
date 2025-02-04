
let miADN = [];
let bases = ['A', 'C', 'G', 'T'];
for (let i = 0; i < 24; i++) {
    miADN.push(bases[Math.floor(Math.random() * 4)]);
}
console.log(miADN);
