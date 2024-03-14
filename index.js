 var a = [];
    var op = "";
    function addto(x){
        document.getElementById("a1").innerText += String(x);
    }
    function opr(x){
        a.push(Number(document.getElementById("a1").innerText));
        document.getElementById("a1").innerText = " ";
        op = "";
        op = x;
    }
    function equal(){
        a.push(Number(document.getElementById("a1").innerText));
        if (op == "+"){
            document.getElementById("a1").innerText = String(a[0] + a[1]);
            a = [];
        }
        if (op == "-"){
            document.getElementById("a1").innerText = String(a[0] - a[1]);
            a = [];
        }
        if (op == "x"){
            document.getElementById("a1").innerText = String(a[0] * a[1]);
            a = [];
        }
        if (op == ":"){
            document.getElementById("a1").innerText = String(a[0] / a[1]);
            a = [];
        }
    }
