var a = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

var b = [
    [16, 17, 18],
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
    [28, 29, 30]
];

var p = [];

for (let i = 0; i < a.length; i++) {
    p[i] = [];
    for (let j = 0; j < b[0].length; j++) {
        var soma = 0;
        for (let k = 0; k < a[0].length; k++) {
           soma += a[i][k] * b[k][j];
        }
        p[i][j] = soma;
    }
}

for (let indexI = 0; indexI < p.length; indexI++) {
   for (let indexJ = 0; indexJ < p[indexI].length; indexJ++) {
        console.log(p[indexI][indexJ]);
   }    
}
