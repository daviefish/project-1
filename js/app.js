  var board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
  ];


var turn = 1;


$('.drop').get[col].on('click', function() {




var move = function(row,col) {





  var ele = $('.container2').children[row].children[col];
  if(ele.textContent === '') {
    turn = turn +1;
    if (turn % 2 === 0) {
      board[row][col] = 'x';
    } else {
      board[row][col] = 'o';
    }
    ele.textContent = board[row][col];
  }
};

  }

