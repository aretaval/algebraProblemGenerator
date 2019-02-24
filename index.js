var step = 0;
var x1 = 0;
var x2 = 0;
var level = 1;

function generateEquation() {
    var key = Number(document.getElementById("input_key").value);
    console.log(key);
    level = Number(document.getElementById("input_level").value);
    console.log(level);

    x1 = myRandom(key, level) % 16 - 8;
    x2 = myRandom(key, level) % 16 - 8;
    var text = "";

    if (x1 > x2) {
        let tmp = x1;
        x1 = x2;
        x2 = tmp;
    }

    switch (level) {
        case 1:
        {
            let a = (myRandom(key, level) % 10 + 1) * Math.sign(myRandom(key, level) % 20 - 10);
            let d = myRandom(key, level) % 7;

            let b = -(x1 + x2) * a;
            let c = a * x1 * x2 + d * d;

            text = createEquation(a, b, c, d);
            break;
        }

        case 2:
        {
            let a = (myRandom(key, level) % 10 + 1) * Math.sign(myRandom(key, level) % 20 - 10);
            let d = (myRandom(key, level) % 7 + 1) * Math.sign(myRandom(key, level) % 20 - 10);

            let left = 0;
            let right = 0;
            if (d < 0) {
                left = -d * x1;
                right = -d * x2;


            } else {
                left = -d * x2;
                right = -d * x1;

                let tmp = x1;
                x1 = x2;
                x2 = tmp;
            }

            let e = myRandom(key, level) % (right - left) + left;
            let b = 2 * d * e - (x1 + x2) * (a - d * d);
            let c = x1 * x2 * (a - d * d) + e * e;

            text = createEquation(a, b, c, d, e);
            break;
        }

        case 3:
        {
            break;
        }

    }

    console.log(text);

    printInDiv("equation", text);
}

function showAnswer() {
    let text1 = "";

    switch (level) {
        case 1:
        {
            text1 = "$$x_1 = " + x1 + ", \\quad x_2 = " + x2 + "$$";
            break;
        }

        case 2:
        {
            text1 = "$$x = " + x1 + "$$";
        }

    }

    printInDiv("answer", text1);
}

function createEquation(a, b, c, d, e) {
    switch (level) {
        case 1:
        {
            let str1 = normalizeLeadX2(a);
            let str2 = normalizeMiddleX1(b);
            let str3 = normalizeMiddleX0(c);
            let str4 = String(d);

            return "$$\\sqrt{" + str1 + str2 + str3 + " } = " + str4 + "$$";
        }

        case 2:
            let str1 = normalizeLeadX2(a);
            let str2 = normalizeMiddleX1(b);
            let str3 = normalizeMiddleX0(c);
            let str4 = normalizeLeadX1(d);
            let str5 = normalizeMiddleX0(e);

            return "$$\\sqrt{" + str1 + str2 + str3 + " } = " + str4 + str5 + "$$";
    }
}

function normalizeLeadX2(a) {
    if (a === 0) {
        return "";
    }

    if (a === 1) {
        return "x^2";
    }

    if (a === -1) {
        return "-x^2";
    }

    return String(a) + "x^2";
}

function normalizeLeadX1(a) {
    if (a === 0) {
        return "";
    }

    if (a === 1) {
        return "x";
    }

    if (a === -1) {
        return "-x";
    }

    return String(a) + "x";
}

function normalizeMiddleX1(a) {
    if (a > 0) {
        if (a === 1) {
            return " + x";
        }

        return " + " + String(a) + "x";
    }

    if (a < 0) {
        if (a === -1) {
            return " - x";
        }

        return " - " + String(-a) + "x";
    }

    return "";
}


function normalizeMiddleX0(a) {
    if (a > 0) {
        return " + " + String(a);
    }

    if (a < 0) {
        return " - " + String(-a);
    }

    return "";
}

function printInDiv(divID, printText) {
    var div = document.getElementById(divID);
    div.innerHTML = printText;
    MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);  // Нужно для применения MathJax после нового вывода
}

function myRandom(key, level) {
    var value = Math.abs(Math.floor(Math.sin(key + step * step) * 1117 * level));
    ++step;

    return value;
}


var res = generateEquation();
console.log(res);