(function(){
  var windowHeight = window.innerHeight;
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  var styleZindex = 999;
  var styleTop = new Array();
  var styleLeft = new Array();
  var yuragi = new Array();
  var sokudo = new Array();
  var hanabiraId = new Array();
  var yuragiConut = new Array();
  var kazeCount = 0;
  for(var i = 0; i < 60; i++){
    var divHanabira = document.createElement('div');
    divHanabira.id = 'hanabira' + i;
    styleTop[i] = Math.random() * -1000 + scroll;
    styleLeft[i] = Math.random() * window.innerWidth;
    // divHanabira.setAttribute('style', 'z-index:' + (styleZindex--) + ';top:' + styleTop[i] + 'px;left:' + styleLeft[i] + 'px;');
    var zIndex = Math.round(Math.random() * 50 - 25)
    divHanabira.setAttribute('style', 'z-index:' + (zIndex--) + ';top:' + styleTop[i] + 'px;left:' + styleLeft[i] + 'px;');
    var hanabiraClass = 'hana y' + (Math.floor(Math.random() * 2) + 1);
    divHanabira.setAttribute('class', hanabiraClass);
		document.body.appendChild(divHanabira);
    yuragi[i] = Math.random() * 40 + 5;
    sokudo[i] = Math.random() * 5 + 2;
    hanabiraId[i] = document.getElementById('hanabira' + i);
		yuragiConut[i] = 0;
  }
  setInterval(function(){
    for(var i = 0; i < 30; i++){
      if(styleTop[i] < scroll + windowHeight + 30){
        if(yuragi[i] >= yuragiConut[i]){
          styleLeft[i] = styleLeft[i] + 0.5 + Math.random() * 0.5;
        }else{
          styleLeft[i] = styleLeft[i] - 0.5 - Math.random() * 0.5;
        }
        if((yuragi[i] * 2) <= yuragiConut[i]){ yuragiConut[i] = 0; }
      }else{
        styleTop[i] = scroll - 40;
        styleLeft[i] = Math.random() * window.innerWidth;
      }
      if(kazeCount >= 100 && kazeCount <= 110){ styleLeft[i] = styleLeft[i] + 1; }
      else if(kazeCount >= 111 && kazeCount <= 120){ styleLeft[i] = styleLeft[i] + 3; }
      else if(kazeCount >= 121 && kazeCount <= 129){ styleLeft[i] = styleLeft[i] + 5; }
      else if(kazeCount >= 130 && kazeCount <= 137){ styleLeft[i] = styleLeft[i] + 7; }
      else if(kazeCount >= 138 && kazeCount <= 144){ styleLeft[i] = styleLeft[i] + 9; }
      else if(kazeCount >= 145 && kazeCount <= 300){ styleLeft[i] = styleLeft[i] + 11; }
      else if(kazeCount >= 301 && kazeCount <= 311){ styleLeft[i] = styleLeft[i] + 9; }
      else if(kazeCount >= 312 && kazeCount <= 322){ styleLeft[i] = styleLeft[i] + 7; }
      else if(kazeCount >= 323 && kazeCount <= 335){ styleLeft[i] = styleLeft[i] + 5; }
      else if(kazeCount >= 336 && kazeCount <= 349){ styleLeft[i] = styleLeft[i] + 3; }
      else if(kazeCount >= 350 && kazeCount <= 354){ styleLeft[i] = styleLeft[i] + 1; }
      else if(kazeCount >= 500 && kazeCount <= 510){ styleLeft[i] = styleLeft[i] - 1; }
      else if(kazeCount >= 511 && kazeCount <= 520){ styleLeft[i] = styleLeft[i] - 3; }
      else if(kazeCount >= 521 && kazeCount <= 529){ styleLeft[i] = styleLeft[i] - 5; }
      else if(kazeCount >= 530 && kazeCount <= 537){ styleLeft[i] = styleLeft[i] - 7; }
      else if(kazeCount >= 538 && kazeCount <= 544){ styleLeft[i] = styleLeft[i] - 9; }
      else if(kazeCount >= 545 && kazeCount <= 700){ styleLeft[i] = styleLeft[i] - 11; }
      else if(kazeCount >= 701 && kazeCount <= 711){ styleLeft[i] = styleLeft[i] - 9; }
      else if(kazeCount >= 712 && kazeCount <= 722){ styleLeft[i] = styleLeft[i] - 7; }
      else if(kazeCount >= 723 && kazeCount <= 735){ styleLeft[i] = styleLeft[i] - 5; }
      else if(kazeCount >= 736 && kazeCount <= 749){ styleLeft[i] = styleLeft[i] - 3; }
      else if(kazeCount >= 750 && kazeCount <= 754){ styleLeft[i] = styleLeft[i] - 1; }
      else if(kazeCount >= 900){ kazeCount = 0; }
      styleTop[i] = styleTop[i] + sokudo[i];
      hanabiraId[i].style.top = styleTop[i] + 'px';
      hanabiraId[i].style.left = styleLeft[i] + 'px';
      yuragiConut[i]++;
    }
    kazeCount++;
  }, 50);
})();