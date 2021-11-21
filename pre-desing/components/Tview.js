/*
 settings to mode split interval 1 timeout 0
*/
export default function Tview(proper, vwCtx, msInterval = 5000, split = false) {

    var y_spl = 0;
    var x_spl = 0;
    setInterval(() => {

        if (split == true) {

            setTimeout(() => {
                viewSquare(x_spl, y_spl,vwCtx)
                y_spl++;
            }, 0);

            if (y_spl == proper.c) {
                x_spl++;
                y_spl = 0;
                if (y == proper.c && x == proper.r) {
                    x_spl = 0;
                    y_spl = 0;
                }
            }

        } else {
            for (let x = 0; x < proper.r + 1; x++) { // fix bug when draw lack pos
                for (let y = 0; y < proper.c + 1; y++) {
                    viewSquare(x, y, vwCtx)
                }
            }
        }

    }, msInterval);

    function viewSquare(aX, aY,vwCtx) {
        if (proper.a[aX][aY] != 0) {
            let gradient = vwCtx.createLinearGradient(0, 0, aX, 0);
            gradient.addColorStop("0", "blue");
            vwCtx.fillStyle = gradient;
            vwCtx.font = "14px Verdana";
            vwCtx.fillText(proper.a[aX][aY], aX, aY);
        }
    }
}