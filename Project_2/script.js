window.onload = function(){
    console.log("This File is Connected");

    var lines = $(".textbox").html().split("<br>");
    $(".textbox").empty();

    var lineIndex = 0;
    var charIndex = 0;

    var typingInterval = setInterval(function() {
        var currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
            $(".textbox").append(currentLine[charIndex]);
            charIndex++;
        } else {
            $(".textbox").append("<br>");
            charIndex = 0;
            lineIndex++;
            if (lineIndex === lines.length) {
                clearInterval(typingInterval);
            }
        }
    }, 20);

    $(document).on("keypress", function(event) {
        if (event.key === '1' || event.key === '1') {
            top.location.href = "./article_1.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '2' || event.key === '2') {
            top.location.href = "./article_2.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '3' || event.key === '3') {
            top.location.href = "./article_3.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '4' || event.key === '4') {
            top.location.href = "./article_4.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '5' || event.key === '5') {
            top.location.href = "./article_5.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '6' || event.key === '6') {
            top.location.href = "./article_6.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '7' || event.key === '7') {
            top.location.href = "./article_7.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '8' || event.key === '8') {
            top.location.href = "./article_8.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '9' || event.key === '9') {
            top.location.href = "./article_9.html";
        }
    });
    $(document).on("keypress", function(event) {
        if (event.key === '0' || event.key === '0') {
            top.location.href = "./article_10.html";
        }
    });
    
}