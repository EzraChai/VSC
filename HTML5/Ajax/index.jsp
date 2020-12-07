<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI</title>
    <script>
        let xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function(){
            let text = document.getElementById("span")
            text.innerText = "Hi"
        }

        xmlHttp.open("get","bmiAjax",true);

        xmlHttp.send();

    </script>
</head>
<body>
    <p>Calculate BMI</p>
    <div>
        Name : <input type="text" name="Name"><br>
        Weight(kg) : <input type="text" name="Weight"><br>
        Height(cm) : <input type="text" name="Height"><br>
        <input type="button" value="Submit" onclick="doAjax()" >
    </div>
    <span id="span"></span>
</body>
</html>