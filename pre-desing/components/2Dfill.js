/*
 
*/

export default function DimensionsArray2D(proper) {
    var area = [];
    for (var i = 0; i < proper.r + 1; i++) {
        area.push([0]);
        for (var j = 0; j < proper.c + 1; j++) {
            area[i][j] = 0;
        }
    }
    return area;
}

