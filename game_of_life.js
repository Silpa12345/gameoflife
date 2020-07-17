const prompt = require('prompt-sync')();

const r = 'x';
const s = '_';

let rowLimit = prompt('Enter Row Size :');
let columnLimit = prompt('Enter Column Size :');
let universe = [];
console.log('Enter input generation :');

for (let l = 0; l < rowLimit; l++) {
     let row = [];

     for (let m = 0; m < columnLimit; m++) {
          const ip = prompt('');
          row.push(ip);
     }
     universe.push(row);
}
rowLimit--;
columnLimit--;

let new_universe = JSON.parse(JSON.stringify(universe));

function findingNeighbors(i, j) {
     let count = 0;
     for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
          for (
               var y = Math.max(0, j - 1);
               y <= Math.min(j + 1, columnLimit);
               y++
          ) {
               if (x !== i || y !== j) {
                    if (universe[x][y] == r) {
                         count++;
                    }
               }
          }
     }
     return count;
}
const newGeneration = () => {
     for (let i = 0; i <= rowLimit; i++) {
          for (let j = 0; j <= columnLimit; j++) {
               let aliveneighbours = 0;
               let deadneighbours = 0;
               if (universe[i][j] == r) {
                    //count the adjacent no of live cells
                    aliveneighbours = findingNeighbors(i, j);
                    if (aliveneighbours < 2 || aliveneighbours > 3) {
                         new_universe[i][j] = s;
                    } else if (aliveneighbours == 2 || aliveneighbours == 3) {
                         new_universe[i][j] = r;
                    }
               } else {
                    deadneighbours = findingNeighbors(i, j);
                    if (deadneighbours == 3) {
                         new_universe[i][j] = r;
                    }
               }
          }
     }
};

newGeneration();
console.log('Old Generation');
for (let item of universe) {
     console.log(item);
}
console.log('New Generation');
for (let item of new_universe) {
     console.log(item);
}
