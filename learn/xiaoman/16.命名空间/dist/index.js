"use strict";
var A;
(function (A) {
    A.c = 3;
})(A || (A = {}));
var A;
(function (A) {
    var C;
    (function (C) {
        C.a = 1;
    })(C = A.C || (A.C = {}));
})(A || (A = {}));
console.log(A);
//# sourceMappingURL=index.js.map