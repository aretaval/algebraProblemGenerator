// -----ALGORITHM-----
var seed = 0;
// var eqType = 0;
var key = 0;
var level = 0;
var problems = [];
// var ineqs = [];
var problemType = 1;

function isInteger(num) {
    return (num ^ 0) === num;
}

function myRandom() {
    return Math.abs(Math.floor(Math.sin(key + seed * seed++) * 1000 * level));
}

function randomInRange(a, b) {
    return myRandom() % (b - a + 1) + a;
}

function randomSign() {
    var res = Math.sign(myRandom() % 100 - 50)
    if (res !== 0) {
        return res;
    } else {
        return 1;
    }
}

function getDropDownListValue(name) {
    var list = document.getElementById(name);
    return list.options[list.selectedIndex].value;
}

function generateEquation1() {
    var x1 = randomInRange(-7, 7);
    var x2 = randomInRange(-7, 7);

    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }

    var a = randomInRange(1, 7) * randomSign();
    var d = randomInRange(1, 7);

    var b = -(x1 + x2) * a;
    var c = a * x1 * x2 + d * d;

    return createEquationText1(x1, x2, a, b, c, d);
}

function generateEquation3() {
    var x1 = randomInRange(-7, 7);
    var x2 = randomInRange(-7, 7);

    while (x1 === x2) {
        x2 = randomInRange(-7, 7);
        console.log("x2: ", x2);
    }

    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }

    var eqType = randomSign();
    console.log("eqType: ", eqType);

    if (eqType >= 0) {
        var a = randomInRange(1, 7) * randomSign();
        console.log("a: ", a);

        left = 0;
        right = 0;
        var d = 0;

        while(left === right) {
            d = randomInRange(1, 7) * randomSign();
            console.log("d: ", d);

            if (d < 0) {
                left = -d * x1;
                right = -d * x2;


            } else {
                left = -d * x2;
                right = -d * x1;

                tmp = x1;
                x1 = x2;
                x2 = tmp;
            }
        }

        var e = randomInRange(left + 1, right);
        console.log("e: ", e);

        var b = 2 * d * e - (x1 + x2) * (a - d * d);
        console.log("b: ", b);

        var c = x1 * x2 * (a - d * d) + e * e;
        console.log("c: ", c);

        console.log(a, b, c, d, e);

        return createEquationText31(x1, a, b, c, d, e);
    } else {
        a = 0;
        c = 0;
        d = 0;

        while (a === 0) {
            c = randomInRange(1, 7) * randomSign();
            console.log("c: ", c);

            var left = 0;
            var right = 0;
            if (c < 0) {
                left = -c * x1;
                right = -c * x2;
            } else {
                left = -c * x2;
                right = -c * x1;

                tmp = x1;
                x1 = x2;
                x2 = tmp;
            }
            console.log("left: ", left);
            console.log("right: ", right);

            d = randomInRange(left + 1, right);
            console.log("d: ", d);

            a = (x1 + x2) * c * c + 2 * c * d;
            console.log("a: ", a);
        }

        b = d * d - x1 * x2 * c * c;
        console.log("b: ", b);

        console.log(a, b, c, d);
        return createEquationText32(x1, a, b, c, d);
    }
}

function generateEquation2() {
    var x1 = randomInRange(-7, 7);
    var x2 = randomInRange(-7, 7);

    while (x1 === x2) {
        x2 = randomInRange(-7, 7);
        console.log("x2: ", x2);
    }

    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }

    var a = randomInRange(1, 7) * randomSign();
    console.log("a: ", a);

    left = 0;
    right = 0;
    var d = 0;

    while(left === right) {
        d = randomInRange(1, 7) * randomSign();
        console.log("d: ", d);

        if (d < 0) {
            left = -d * x1;
            right = -d * x2;


        } else {
            left = -d * x2;
            right = -d * x1;

            tmp = x1;
            x1 = x2;
            x2 = tmp;
        }
    }

    var e = randomInRange(left + 1, right);
    console.log("e: ", e);

    var b = d - a * (x1 + x2);
    console.log("b: ", b);

    var c = x1 * x2 * a + e;
    console.log("c: ", c);

    console.log(a, b, c, d, e);

    return createEquationText2(x1, a, b, c, d, e);
}

function generateInequality2() {
    var x1 = randomInRange(-7, 7);
    var x2 = randomInRange(-7, 7);

    while (x1 === x2) {
        x2 = randomInRange(-7, 7);
    }

    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }

    var a = randomInRange(1, 3) * randomSign();
    var d = randomInRange(1, 7) * randomSign();
    var e = randomSign() * d * randomInRange(1, 4);
    var b = d - (x1 + x2) * a;
    var c = x1 * x2 * a + e;

    return createInequalityText2(x1, x2, a, b, c, d, e);
}

function generateInequality1() {
    var sign = randomSign();
    var x1 = 0, x2 = 0, a = 0, b = 0, c = 0, d = 0;

    x_1 = randomInRange(-7, 7);
    x_2 = randomInRange(-7, 7);

    while (x1 === x2) {
        x2 = randomInRange(-7, 7);
    }

    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }
    a = randomInRange(1, 3) * randomSign();

    if (sign > 0) {
        d = randomInRange(-7, 7);

        if (d >= 0) {
            b = -(x1 + x2) * a;
            c = a * x1 * x2 + d * d;
        } else {
            b = -(x1 + x2) * a;
            c = a * x1 * x2;
        }

        return createInequalityText11(x1, x2, a, b, c, d);
    } else {
        var y1 = randomInRange(1, 7) * randomSign();

        b = -(x1 + x2) * a;
        c = a * x1 * x2;
        var y2 = -b / a - y1;
        d = c - y1 * y2 * a;

        if (y1 > y2) {
            tmp = y1;
            y1 = y2;
            y2 = tmp;
        }

        return createInequalityText12(x1, x2, y1, y2, a, b, c, d);
    }
}

function generateInequality3() {

}

function createEquationText1(x1, x2, a, b, c, d) {
    var taskText = "\\sqrt{"
        + normalizeLeadX2(a)
        + normalizeMiddleX1(b)
        + normalizeMiddleX0(c)
        + " } = "
        + String(d);
    var ansText = "x_1 = "
        + x1
        + ", \\quad x_2 = "
        + x2;

    return {task:taskText, ans:ansText};
}

function createEquationText31(x, a, b, c, d, e) {
    var ansText = "x = " + x;

    var taskText = "\\sqrt{"
            + normalizeLeadX2(a)
            + normalizeMiddleX1(b)
            + normalizeMiddleX0(c)
            + " } = "
            + normalizeLeadX1(d)
            + normalizeMiddleX0(e);


    return {task:taskText, ans:ansText};
}

function createEquationText32(x, a, b, c, d) {
    var ansText = "x = " + x;

    var taskText = "\\sqrt{"
            + normalizeLeadX1(a)
            + normalizeMiddleX0(b)
            + " } = "
            + normalizeLeadX1(c)
            + normalizeMiddleX0(d);

    return {task:taskText, ans:ansText};
}

function createEquationText2(x, a, b, c, d, e) {
    var taskText = "\\sqrt{"
        + normalizeLeadX2(a)
        + normalizeMiddleX1(b)
        + normalizeMiddleX0(c)
        + " } = \\sqrt{"
        + normalizeLeadX1(d)
        + normalizeMiddleX0(e)
        + "}";

    var  ansText = "x = " + x;

    return {task:taskText, ans:ansText};
}

function createInequalityText2(x1, x2, a, b, c, d, e) {
    var x0 = -e / d;

    var taskText =  "\\sqrt{"
        + normalizeLeadX2(a)
        + normalizeMiddleX1(b)
        + normalizeMiddleX0(c)
        + " } > \\sqrt{"
        + normalizeLeadX1(d)
        + normalizeMiddleX0(e)
        + "}";

    var ansText = "";

    if (a > 0) {
        if (d > 0) {
            if (x0 < x1) {
                ansText = "["
                    + x0
                    + ","
                    + x1
                    + ") \\cup ("
                    + x2
                    +", +\\infty )"
            } else if ( x0 >= x1 && x0 <= x2) {
                ansText = "("
                    + x2
                    +", +\\infty )"
            } else {
                ansText = "["
                    + x0
                    +", +\\infty )"
            }
        } else {
            if (x0 < x1) {
                ansText = "(-\\infty , "
                    + x0
                    + "]";
            } else if ( x0 >= x1 && x0 <= x2) {
                ansText = "(-\\infty , "
                    + x1
                    + ")";
            } else {
                ansText = "(" + x2 + ", +\\infty )";
            }
        }
    } else {
        if (d > 0) {
            if (x0 <= x1) {
                ansText = "(" + x1 + "," + x2 + ")";
            } else if ( x0 > x1 && x0 < x2) {
                ansText = "[" + x0 + "," + x2 + ")";
            } else {
                ansText = "\\varnothing";
            }
        } else {
            if (x0 <= x1) {
                ansText = "\\varnothing";
            } else if ( x0 > x1 && x0 < x2) {
                ansText = "(" + x1 + "," + x0 + "]";
            } else {
                ansText = "(" + x1 + "," + x2 + ")";
            }
        }
    }

    return {task:taskText, ans:ansText};
}

function createInequalityText11(x1, x2, a, b, c, d) {
    var taskText = "\\sqrt{"
        + normalizeLeadX2(a)
        + normalizeMiddleX1(b)
        + normalizeMiddleX0(c)
        + " } > "
        + String(d);

    var ansText = "";

    if (d >= 0) {
        if (a > 0) {
            ansText = "( - \\infty,"
                + x1
                + ") \\cup ("
                + x2
                + ", + \\infty )"
        } else {
            ansText = "(" + x1 + "," + x2 + ")";
        }
    } else {
        if (a > 0) {
            ansText = "( - \\infty,"
                + x1
                + "] \\cup ["
                + x2
                + ", + \\infty )"
        } else {
            ansText = "[" + x1 + "," + x2 + "]";
        }
    }
    return {task:taskText, ans:ansText};
}

function createInequalityText12(x1, x2, y1, y2, a, b, c, d) {
    var taskText = "";

    if (isInteger(Math.sqrt(d))) {
        taskText = "\\sqrt{"
            + normalizeLeadX2(a)
            + normalizeMiddleX1(b)
            + normalizeMiddleX0(c)
            + " } < "
            + String(Math.sqrt(d));
    } else if (d > 0){
        taskText = "\\sqrt{"
            + normalizeLeadX2(a)
            + normalizeMiddleX1(b)
            + normalizeMiddleX0(c)
            + " } < \\sqrt{"
            + String(d)
            + "}";
    } else {
        taskText = "\\sqrt{"
            + normalizeLeadX2(a)
            + normalizeMiddleX1(b)
            + normalizeMiddleX0(c)
            + " } < "
            + String(d);
    }


    var ansText = "";

    if (d > 0) {
        if (a > 0) {
            if (y1 < x1) {
                if (y2 <= x1) {
                    ansText = "(" + y1 + "," + y2 + ")";
                } else if (y2 <= x2) {
                    ansText = "(" + y1 + "," + x1 + "]";
                } else {
                    ansText = "(" + y1 + "," + x1 + "]"
                        + "\\cup"
                        + "[" + x2 + "," + y2 + ")";
                }
            } else if (y1 < x2) {
                if (y2 <= x2) {
                    ansText = "\\varnothing";
                } else {
                    ansText = "[" + x2 + "," + y2 + ")";
                }
            } else {
                ansText = "(" + y1 + "," + y2 + ")";
            }
        } else { // a < 0
            if (y1 <= x1) {
                if (y2 < x1) {
                    ansText = "[" + x1 + "," + x2 + "]";
                } else if (y2 < x2) {
                    ansText = "(" + y2 + "," + x2 + "]";
                } else {
                    ansText = "\\varnothing";
                }
            } else if (y1 <= x2) {
                if (y2 < x2) {
                    ansText = "[" + x1 + "," + y1 + ")"
                        + "\\cup"
                        + "(" + y2 + "," + x2 + "]";
                } else {
                    ansText = "[" + x1 + "," + y1 + ")";
                }
            } else {
                ansText = "[" + x1 + "," + x2 + "]";
            }
        }
    } else { // d <= 0
        ansText = "\\varnothing";
    }

    return {task:taskText, ans:ansText};
}

function createInequalityText3(x1, x2, a, b, c, d, e) {
    var taskText = "";
    var ansText = "";




    return {task:taskText, ans:ansText};
}

function generateProblem(i) {
    var text = {};

    switch (problemType) {
        case 1:
        {
            switch (level) {
                case 1:
                {
                    text = generateEquation1();
                    break;
                }

                case 2:
                {
                    text = generateEquation2();
                    break;
                }

                case 3:
                {

                    text = generateEquation3();
                    break;
                }
            }

            break;
        }

        case 2:
        {
            switch (level) {
                case 1:
                {
                    text = generateInequality1();
                    break;
                }

                case 2:
                {

                    text = generateInequality2();
                    break;
                }

                case 3:
                {

                    text = generateInequality3();
                    break;
                }
            }

            break;
        }
    }

    problems.push(text);
    printInTable("problems", toMath(text.task), i);
}

function normalizeLeadX2(a) {
    // if (a === 0) {
    //     return "";
    // }

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

// ----DESIGN----

function hideElement(elementName) {
    var helpElement = document.getElementById(elementName);
    if (helpElement != null) {
        helpElement.parentNode.removeChild(helpElement);
    }
}

function generateEquations() {
    seed = 0;

    problemType = parseInt(getDropDownListValue("typeOfProblems"));
    console.log("problemType " + problemType);

    level = parseInt(getDropDownListValue("typeOfEquations"));
    console.log("level " + level);

    var equationsCount = parseInt(getDropDownListValue("numberOfEquations"));
    console.log("problems " + equationsCount);
    problems = [];

    key = Number(document.getElementById("input_key").value);
    console.log("key " + key);

    // var equationsGroup = document.getElementById("problems");
    // if (equationsGroup != null) {
    //     equationsGroup.parentNode.removeChild(equationsGroup);
    // }

    hideElement("problems");
    hideElement("help");
    // var helpElement = document.getElementById("help");
    // if (helpElement != null) {
    //     helpElement.parentNode.removeChild(helpElement);
    // }

    for (var i = 0; i < equationsCount; i++) {
        generateProblem(i);
    }
    refreshMathRender();
}

function showAnswersPage() {
    hideElement("problems");
    hideElement("help");

    // var equationsGroup = document.getElementById("problems");
    // if (equationsGroup != null) {
    //     equationsGroup.parentNode.removeChild(equationsGroup);
    // }

    for (var i = 0; i < problems.length; i++) {

        printInTable("problems", toMath("\\begin{align}&"
            + problems[i].task
            + "& "
            + problems[i].ans
            + "\\end{align}"), i);
    }

    refreshMathRender();
}

function printInTable(divID, printText, i) {
    var equationsGroup = document.getElementById(divID);
    if (equationsGroup == null) {
        equationsGroup = document.createElement('table');
        equationsGroup.id = divID;
        equationsGroup.className = "table table-hover table-striped";
        document.body.appendChild(equationsGroup);
    }

    var equationElement = document.createElement('tr');
    equationElement.innerHTML =  '<tr><td class=equation><span class=number>'
        + String(i+1)
        + ')&nbsp;&nbsp;&nbsp;</span>'
        + printText
        + '</td></tr>';
    equationsGroup.appendChild(equationElement);
    console.log("printInTable " + printText);
}

function refreshMathRender() {
    MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);  // Нужно для применения MathJax после нового вывода
}

function toMath(texString) {
    return "$$" + texString + "$$";
}