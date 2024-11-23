alert('Converter Time ')


var c_or_f  = prompt('| celsius or fahrenheit | press c for celsius , press f for fahrenheit ? ')
var deg  = prompt('How many degrees ? ')


var convert = (1.8*deg)+(32)+('-F')
var convert2 = ( deg-32)*(0.555555556)+('-C')
if (c_or_f == ('c')) {
    alert(convert)

    
} else if (c_or_f == ('f')) {
    alert(convert2)
    
} else {
    alert("WRONG LETTER only ( c or f )" )
    
}
