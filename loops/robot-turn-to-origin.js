const judgeCircle = function (moves) {
    let yAxis = [0, 0, -1, +1];
    let xAxis = [+1, -1, 0, 0];
    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') {
            x += xAxis[0];
            y += yAxis[0];
        }
        if (moves[i] === 'L') {
            x += xAxis[1];
            y += yAxis[1];
        }
        if (moves[i] === 'D') {
            x += xAxis[2];
            y += yAxis[2];
        }
        if (moves[i] === 'U') {
            x += xAxis[3];
            y += yAxis[3];
        }
    }
    return x === 0 && y === 0;
};

judgeCircle("UD")
// RRDD - false
// LLUUD - false
// UD - true