$(document).ready(function() {

    /*
    ==============================
    ====== GLOBAL VARIABLES ======
    ==============================
    */
    var defStack = [],
        numStack = [],
        symStack = [];

    /*
    ==============================
    ========== METHODS ===========
    ==============================
    */

    // [clearStacks] method will clear all arrays and reset to 0.
    function clearStacks() {
        defStack = [];
        numStack = [];
        symStack = [];
    }


    /*
    ============================
    ===== BUTTON FUNCTIONS =====
    ============================
    */

    $(".buttonEqual").click(function(){

        var LHS = [],
            RHS = [],
            result = 0;

        for (var i = 0; i < defStack.length; i++) {
            if (isNaN(defStack[i])) {

                for (var x = 0; x < i; x++) {
                    LHS.push(defStack[x]);}

                for (var x = i+1; x <= defStack.length; x++) {
                    RHS.push(defStack[x]);}

                switch(defStack[i]) {
                    case '*':
                        result = Number(LHS.join('')) * Number(RHS.join(''));
                        break;
                    case '/':
                        result = Number(LHS.join('')) / Number(RHS.join(''));
                        break;
                    case '+':
                        result = Number(LHS.join('')) + Number(RHS.join(''));
                        break;
                    case '-':
                        result = Number(LHS.join('')) - Number(RHS.join(''));
                        break;
                    default:
                        result = "Error";
                }
            }
        }
        $("#result").html(result);
        clearStacks();
        
    });

    $(".buttonAC").click(function(){
        clearStacks();
        $("#result").html(defStack);
    });

    $(".buttonPlus").click(function(){
        defStack.push("+");
        $("#result").html(defStack);
    });

    $(".buttonMinus").click(function(){
        defStack.push("-");
        $("#result").html(defStack);
    });

    $(".buttonDivide").click(function(){
        defStack.push("/");
        $("#result").html(defStack);
    });

    $(".buttonMultiply").click(function(){
        defStack.push("*");
        $("#result").html(defStack);
    });

    $(".buttonBS").click(function(){
        defStack.pop();
        $("#result").html(defStack);
    });

    $(".buttonPeriod").click(function(){
        defStack.push(".");
        $("#result").html(defStack);
    });



    $(".button0").click(function(){
        defStack.push(0);
        $("#result").html(defStack);
    });
    $(".button1").click(function(){
        defStack.push(1);
        $("#result").html(defStack);
    });
    $(".button2").click(function(){
        defStack.push(2);
        $("#result").html(defStack);
    });
    $(".button3").click(function(){
        defStack.push(3);
        $("#result").html(defStack);
    });
    $(".button4").click(function(){
        defStack.push(4);
        $("#result").html(defStack);
    });
    $(".button5").click(function(){
        defStack.push(5);
        $("#result").html(defStack);
    });
    $(".button6").click(function(){
        defStack.push(6);
        $("#result").html(defStack);
    });
    $(".button7").click(function(){
        defStack.push(7);
        $("#result").html(defStack);
    });
    $(".button8").click(function(){
        defStack.push(8);
        $("#result").html(defStack);
    });
    $(".button9").click(function(){
        defStack.push(9);
        $("#result").html(defStack);
    });
    
    
});
