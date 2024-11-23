alert('Multiplication & Division Time ')

var num1 = prompt('Enter the first num = ? ')

var num2 = prompt('Enter the  second num= ? ')

var opr = prompt('choose the operation = ? ')

var result = num1*num2
var result2 = num1/num2

if (opr == ('*')) {
    alert(result)

    
} else if (opr == ('/')) {
    alert(result2)
    
} else {
    alert("WRONG OPERATION only ( * or / )" )
    
}


