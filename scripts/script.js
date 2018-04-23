$(document).ready(function() {

    /*
    ==============================
    ====== GLOBAL VARIABLES ======
    ==============================
    */
    // Numbers and operators will be stored in this array
    var result = []; 
    // Tells us if a full equatino has been formed
    // Default is false

    /*
    ==============================
    ========== METHODS ===========
    ==============================
    */

    // [clearStacks] method will clear all arrays and reset to empty.
    function clearStack() {
        result = [];
    }


    // Checks for an equation
    function isEquation() {
        for (var i = 0; i < result.length; i++) {
            console.log("result array: " + result)
            if (result[i] === "+" || result[i] === "-"
                || result[i] === "*" || result[i] === "/"
                && !isNaN(result[i+1])) {
                return true;
            }
            else {
                return false;
            }
        }
    }



    // Calculates the current equation
    function carryOutOperation() {

        // variables specific to the [=] button
        var OpPos = 0,
            op1 = [],
            op2 = [],
            operator = [];
        
        // this loop grabs the index at which the operator is located
        // and stores it in a value called OpPos (Operator Position)
        for (var i = 0; i < result.length; i++) {


            // ignores [.] if user wants to use floating numbers
            if (result[i] === ".") continue; 

            if (isNaN(result[i])) {
                operator.push(result[i]);
                OpPos = result.indexOf(result[i]);
                console.log("Pushing operator" + result[i] + "to result")
                break;
            }

        }
        
        // forms the first operand and stores it in op1
        for (var j = 0; j < OpPos; j++) {
            op1.splice(j, 0, result[j]);
        }
        console.log("op1 " + op1);

        // forms the second operand and stores it in op2
        for (var y = OpPos+1; y < result.length; y++) {

            op2.splice(y, 0, result[y]);
        }

        console.log("op2 " + op2); // tracer
        
        // Clear stack to output result
        clearStack();
        // Join left-hand side
        op1 = op1.join('');
        // Join right-hand side
        op2 = op2.join('');

        // Switch statement figures out which operator is being used
        // and carries out the problem and stores the solution 
        // back in result.
        switch (operator[0]) {
            case '*':
                result.splice(0, 0, Number(op1) * Number(op2));
                console.log("result stack is currently: " + result);
                break;
            case '/':
                result.splice(0, 0, Number(op1) / Number(op2));
                console.log("result stack is currently: " + result);
                break;
            case '+':
                result.splice(0, 0, Number(op1) + Number(op2));
                console.log("result stack is currently: " + result);
                break;
            case '-':
                result.splice(0, 0, Number(op1) - Number(op2));
                console.log("result stack is currently: " + result);
                break;
            default:
                $("#output").html("Error");
        }
        
        // Outputs the result stack array to the #result id.
        $("#output").html(result);
        
    }



    // ===========================
    // ====== NUMPAD INPUT =======
    // ===========================
    $(document).on("keypress keyup keydown", function(e) {

        // Store type of event in eventType
        var eventType = e.type;

        // if any number is pressed on keyboard/numpad
        switch (eventType) {
            case 'keypress':

                var key = e.which || e.keyCode;

                // Convert charCode to corresponding number
                var num = String.fromCharCode(key);

                if (key >= 48 && key <= 57) {
                    result.push(num);
                    $("#output").html(result); 
                } else if (key == 42) { // if key is an asterisk 
                    result.push("*");
                    $("#output").html(result);
                } else if (key == 43) { // if key is a plus operator
                    result.push("+");
                    $("#output").html(result);
                } else if (key == 45) { // if key is a minus operator
                    result.push("-");
                    $("#output").html(result);
                } else if (key == 47) { // if key is a division operator
                    result.push("/");
                    $("#output").html(result);
                } else if (key == 46) { // if key is a period
                    result.push(".");
                    $("#output").html(result);
                } else if (key == 13) { // if key is an equal
                    carryOutOperation();
                } 
                break;
            case 'keydown':
                if (e.which == 8) {
                    result.pop();
                    $("#output").html(result)
                }
                break;
            default:
                break;
        }

    });


    /*
    ==============================
    ====== BUTTON FUNCTIONS ======
    ==============================
    */

    $(".buttonEqual").click(function(){

        carryOutOperation();
        
    }); // End button equal click function


    // clear button function
    $(".buttonC").click(function(){
        clearStack();
        $("#output").html(result);
    });

    $(".buttonPlus").click(function(){
        // if continuation of previous equation
        if (isEquation() == true) {
            carryOutOperation();
        }
        else {
            result.push("+");
            $("#output").html(result);
        }
    });

    $(".buttonMinus").click(function(){
        if (isEquation()) {carryOutOperation();}
        else {
            result.push("-");
            $("#output").html(result);
        }
    });

    $(".buttonDivide").click(function(){
        if (isEquation()) {carryOutOperation();}
        else {
            result.push("/");
            $("#output").html(result);
        }
    });

    $(".buttonMultiply").click(function(){
        if (isEquation()) {carryOutOperation();}
        else {
            result.push("*");
            $("#output").html(result);
        }
    });

    // backspace button function
    $(".buttonBS").click(function(){
        result.pop();
        $("#output").html(result);
    });

    $(".buttonPeriod").click(function(){
        result.push(".");
        $("#output").html(result);
    });


    // ======= Number Buttons ======
    $(".button0").click(function(){
        result.push(0);
        $("#output").html(result);
    });
    $(".button1").click(function(){
        result.push(1);
        $("#output").html(result);
    });
    $(".button2").click(function(){
        result.push(2);
        $("#output").html(result);
    });
    $(".button3").click(function(){
        result.push(3);
        $("#output").html(result);
    });
    $(".button4").click(function(){
        result.push(4);
        $("#output").html(result);
    });
    $(".button5").click(function(){
        result.push(5);
        $("#output").html(result);
    });
    $(".button6").click(function(){
        result.push(6);
        $("#output").html(result);
    });
    $(".button7").click(function(){
        result.push(7);
        $("#output").html(result);
    });
    $(".button8").click(function(){
        result.push(8);
        $("#output").html(result);
    });
    $(".button9").click(function(){
        result.push(9);
        $("#output").html(result);
    });
    
    
});
