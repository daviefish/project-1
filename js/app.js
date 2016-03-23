  var board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
  ];


var reset = $('.reset').on('click', function(){
  $("*").removeClass("red green");
  board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
  ];
});

var startOver = function() {
  location.reload();
};

var $drop0 = $('#drop0');
var $drop1 = $('#drop1');
var $drop2 = $('#drop2');
var $drop3 = $('#drop3');
var $drop4 = $('#drop4');
var $drop5 = $('#drop5');
var $drop6 = $('#drop6');

var turn = '';


var checkRow = function() {
  for(var i=0; i<7; i++) {
    if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === board[i][3] && board[i][0] !== ('') && board[i][1] !== ('') && board[i][2] !== ('') && board[i][3] !== ('')) {
      return true;
    }
     if(board[i][1] === board[i][2] && board[i][2] === board[i][3] && board[i][3] === board[i][4] && board[i][1] !== ('') && board[i][2] !== ('') && board[i][3] !== ('') && board[i][4] !== ('')) {
     return true;
    }
     if(board[i][2] === board[i][3] && board[i][3] === board[i][4] && board[i][4] === board[i][5] && board[i][2] !== ('') && board[i][3] !== ('') && board[i][4] !== ('') && board[i][5] !== ('')) {
      return true;
    }
    if(board[i][3] === board[i][4] && board[i][4] === board[i][5] && board[i][5] === board[i][6] && board[i][3] !== ('') && board[i][4] !== ('') && board[i][5] !== ('') && board[i][6] !== ('')) {
      return true;
    }
  }
};

var checkCol = function() {
  for(var j=0; j<6; j++) {
    if(board[5][j] === board[4][j] && board[4][j] === board[3][j] && board[3][j] === board[2][j] && board[5][j] !== ('') && board[4][j] !== ('') && board[3][j] !== ('') && board[2][j] !== ('')) {
      return true;
    }
    if(board[4][j] === board[3][j] && board[3][j] === board[2][j] && board[2][j] === board[1][j] && board[4][j] !== ('') && board[3][j] !== ('') && board[2][j] !== ('') && board[1][j] !== ('')) {
      return true;
    }
    if(board[3][j] === board[2][j] && board[3][j] === board[1][j] && board[1][j] === board[1][j] && board[3][j] !== ('') && board[2][j] !== ('') && board[1][j] !== ('') && board[0][j] !== ('')) {
      return true;
    }
  }
};

var checkCol = function() {
  for(var j=0; j<6; j++) {
    if(board[5][j] === board[4][j] && board[4][j] === board[3][j] && board[3][j] === board[2][j] && board[5][j] !== ('') && board[4][j] !== ('') && board[3][j] !== ('') && board[2][j] !== ('')) {
      return true;
    }
    if(board[4][j] === board[3][j] && board[3][j] === board[2][j] && board[2][j] === board[1][j] && board[4][j] !== ('') && board[3][j] !== ('') && board[2][j] !== ('') && board[1][j] !== ('')) {
      return true;
    }
    if(board[3][j] === board[2][j] && board[3][j] === board[1][j] && board[1][j] === board[1][j] && board[3][j] !== ('') && board[2][j] !== ('') && board[1][j] !== ('') && board[0][j] !== ('')) {
      return true;
    }
  }
};

var checkWin = function() {
   if (checkCol()) {
    return window.alert('YOU HAVE WON'), startOver();
  }
  if (checkRow()) {
    return window.alert('YOU HAVE WON'), startOver();
  }
};

var move = $drop0.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][0] === '') {
      board[i][0] = turn;
      $('.row' + i + ' .col0').addClass(turn + " animated" + " flash");
      checkWin();
      return;
    }
  }
});

var move = $drop1.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][1] === '') {
      board[i][1] = turn;
      $('.row' + i + ' .col1').addClass(turn);
      checkWin();
      return;
    }
  }
});

var move = $drop2.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][2] === '') {
      board[i][2] = turn;
      $('.row' + i + ' .col2').addClass(turn);
      checkWin();
      return;
    }
  }
});

var move = $drop3.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][3] === '') {
      board[i][3] = turn;
      $('.row' + i + ' .col3').addClass(turn);
      checkWin();
      return;
    }
  }
});

var move = $drop4.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][4] === '') {
      board[i][4] = turn;
      $('.row' + i + ' .col4').addClass(turn);
      checkWin();
      return;
    }
  }
});

var move = $drop5.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][5] === '') {
      board[i][5] = turn;
      $('.row' + i + ' .col5').addClass(turn);
      checkWin();
      return;
    }
  }
});

var move = $drop6.on('click', function(){
  turn === 'green' ? turn = 'red' : turn = 'green';
  for(var i = 5; i >= 0; i--) {
    if(board[i][6] === '') {
      board[i][6] = turn;
      $('.row' + i + ' .col6').addClass(turn);
      checkWin();
      return;
    }
  }
});



