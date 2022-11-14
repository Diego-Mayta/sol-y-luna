function factorial(){
    var n = parseInt(document.getElementById("n").value);
    var aux=1
    var aux2=2
    var aux3=3
    if(n==aux){
        var m1=5.98*10**28;
        var m2=2.0*10**30;
        var mt=m1*m2
        var r=149.6*10**9;
        var mf=mt/r**2
        var g=6.67*10**(-11)
        var ff=mf*g
        document.getElementById("factorial").innerHTML=(ff)
    }
    else{
        if(n==aux2){
            var m1=5.98*10**28;
            var m2=7.36*10**22;
            var mt=m1*m2
            var r=384.4*10**6;
            var mf=mt/r**2
            var g=6.67*10**(-11)
            var ff=mf*g
            document.getElementById("factorial2").innerHTML=(ff)
        }
        if(n==aux3){
            var m1=5.98*10**28;
            var m2=2.0*10**30;
            var mt=m1*m2
            var r=149.6*10**9;
            var mf=mt/r**2
            var g=6.67*10**(-11)
            var ff=mf*g
            //fsdfsdfsfsdf//
            var m11=5.98*10**28;
            var m21=7.36*10**22;
            var mt1=m11*m21
            var r1=384.4*10**6;
            var mf1=mt1/r1**2
            var g1=6.67*10**(-11)
            var ff1=mf1*g1
            //final//
            var ffff=ff/ff1
            document.getElementById("factorial3").innerHTML=(ffff)
        }
    }
}
function factorial2() {
	document.getElementById("factorial2").innerHTML=(ff) 
}
function factorial3 () {
	document.getElementById("factorial3").innerHTML=(ffff) 
}
