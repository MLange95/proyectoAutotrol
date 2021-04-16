
function semaforo2Rojo() {

    document.getElementById('ROJO_S2').style.fill='#FF0000'
    document.getElementById('VERDE_S2').style.fill='#768374'
    }

function semaforo2Verde() {

    document.getElementById('ROJO_S2').style.fill='#754646'
    document.getElementById('VERDE_S2').style.fill='#0CC200'
    }
   
function semaforo3Rojo() {

    document.getElementById('ROJO_S3').style.fill='#FF0000'
    document.getElementById('VERDE_S3').style.fill='#768374'
    }

function semaforo3Verde() {

    document.getElementById('ROJO_S3').style.fill='#754646'
    document.getElementById('VERDE_S3').style.fill='#0CC200'
    }
   
function semaforo12Rojo() {

    document.getElementById('ROJO_S12').style.fill='#FF0000'
    document.getElementById('VERDE_S12').style.fill='#768374'
    }

function semaforo12Verde() {

    document.getElementById('ROJO_S12').style.fill='#754646'
    document.getElementById('VERDE_S12').style.fill='#0CC200'
    }
   
function semaforo13Rojo() {

    document.getElementById('ROJO_S13').style.fill='#FF0000'
    document.getElementById('VERDE_S13').style.fill='#768374'
    }

function semaforo13Verde() {

    document.getElementById('ROJO_S13').style.fill='#754646'
    document.getElementById('VERDE_S13').style.fill='#0CC200'
    }

    function showTime(){
    
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();