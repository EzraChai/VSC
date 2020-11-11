document.getElementById("submit").onclick = function(){

    let waktuTidur = document.getElementById("waktuTidur").value 
    let waktuBangun = document.getElementById("waktuBangun").value

    start = waktuTidur.split(":")
    end = waktuBangun.split(":")
    let Tidur = new Date(2020, 0, 0, start[0], start[1], 0);
    let Bangun = new Date(2020, 0, 0, end[0], end[1], 0);

    Bangun2 = Bangun.getHours()* 60 + Bangun.getMinutes()
    Tidur2 = Tidur.getHours()* 60 + Tidur.getMinutes()


    function CalculateTime(){
        if (Bangun > Tidur){
            return Bangun2 - Tidur2
        }else if(Tidur > Bangun){
            return (Bangun2 + 1440 )- Tidur2
        }else{
            return 0
        }
    }


    let minutes = CalculateTime()
    let hour = 0    
    
    while(minutes > 60){
        hour += 1
        minutes -= 60
    }

    function output(){
        if (hour == 0){
            return ("Not Nice. You only slept : " + minutes + " minutes"); 
        }else if (hour < 4){
            return ("OK... You slept: " + hour + " hour " + minutes + " minutes");
        }else if(hour < 6){
            return ("Good. You slept: " + hour + " hour " + minutes + " minutes");
        }else if (hour < 8){
            return ("Nice!  You slept: " + hour + " hour " + minutes + " minutes");
        }else {
            return ("You're the Best!  You slept : " + hour + " hour " + minutes + " minutes");
        }
    }

    alert(output())

}

