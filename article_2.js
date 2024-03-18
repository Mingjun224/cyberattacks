window.onload = function() {

    const articleHeader = document.querySelector('.article_2.header');
    let headerIndex = 0;
    const articleHeadline = document.querySelector('.article_2.headline');
    let headlineIndex = 0;
    const articleBodyone = document.querySelector('.article_2.body.one');
    let bodyoneIndex = 0;
    const articleBodytwo = document.querySelector('.article_2.body.two');
    let bodytwoIndex = 0;
    const articleBodythree = document.querySelector('.article_2.body.three');
    let bodythreeIndex = 0;
    
    const headlineoriginalText = articleHeadline.textContent;
    articleHeadline.textContent = '';
    const headeroriginalText = articleHeader.textContent;
    articleHeader.textContent = '';
    const bodyoneoriginalText = articleBodyone.textContent;
    articleBodyone.textContent = '';
    const bodytwooriginalText = articleBodytwo.textContent;
    articleBodytwo.textContent = '';
    const bodythreeoriginalText = articleBodythree.textContent;
    articleBodythree.textContent = '';
    
    const image = document.querySelector('.image');
    image.style.display = 'none';

    document.addEventListener('keypress', (event) => {
      const key = event.key;
      if (/^[a-zA-Z]$/.test(key)) {
        articleHeader.textContent = headeroriginalText.substring(0, headerIndex + 1);
        headerIndex++;
      }
      if (headerIndex > 75 && /^[a-zA-Z]$/.test(key)){
        articleHeadline.textContent = headlineoriginalText.substring(0, headlineIndex + 1);
        headlineIndex++;
      }
      if (headlineIndex > 187 && /^[a-zA-Z]$/.test(key)){
        articleBodyone.textContent = bodyoneoriginalText.substring(0, bodyoneIndex + 1);
        bodyoneIndex++;
      }
      if (bodyoneIndex > 292 && /^[a-zA-Z]$/.test(key)){
        articleBodytwo.textContent = bodytwooriginalText.substring(0, bodytwoIndex + 1);
        bodytwoIndex++;
      }
      if (bodytwoIndex > 407 && /^[a-zA-Z]$/.test(key)){
        articleBodythree.textContent = bodythreeoriginalText.substring(0, bodythreeIndex + 1);
        bodythreeIndex++;
      }
      if (bodythreeIndex > 416 && /^[a-zA-Z]$/.test(key)){
        image.style.display = 'block';
      }
    });
    
    document.addEventListener("keydown", (event) => {
      if (image.style.display === 'block' && event.key === 'Escape'){
        image.style.display = 'none';
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" && event.ctrlKey) {
        articleHeader.textContent = headeroriginalText.substring(0, headerIndex + 75);
        articleHeadline.textContent = headlineoriginalText.substring(0, headlineIndex + 187);
        articleBodyone.textContent = bodyoneoriginalText.substring(0, bodyoneIndex + 292);
        articleBodytwo.textContent = bodytwooriginalText.substring(0, bodytwoIndex + 407);
        articleBodythree.textContent = bodythreeoriginalText.substring(0, bodythreeIndex + 416);
      }
    });
    
    var lines = $(".sidebar").html().split("<br>");
    $(".sidebar").empty();
    
    var lineIndex = 0;
    var charIndex = 0;
    
    var typingInterval = setInterval(function() {
        var currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
            $(".sidebar").append(currentLine[charIndex]);
            charIndex++;
        } else {
            $(".sidebar").append("<br>");
            charIndex = 0;
            lineIndex++;
            if (lineIndex === lines.length) {
                clearInterval(typingInterval);
            }
        }
    }, 17);
    
    $(document).on("keypress", function(event) {
        if (event.key === '`' || event.key === '`') {
            top.location.href = "./index.html";
        }
    });
    $(document).on("keypress", function(event) {
      if (event.key === '1' || event.key === '1') {
        top.location.href = "./article_1.html";
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
    
    articleHeader.style.display = 'block';
    articleHeadline.style.display = 'block';
    articleBodyone.style.display = 'block';
    articleBodytwo.style.display = 'block';
    articleBodythree.style.display = 'block';
    
    }
    