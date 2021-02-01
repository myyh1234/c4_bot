const WIDTH = 7, HEIGHT = 6;
const EMPTY = 0, FIRST_USER = 1, SECOND_USER = 2;
const MAX_DEFTH = 6;

var board = [];
var board_height = [];

function init_board(){ // 판 정보 초기화 - 지울 것 같음
    for (var i = 0; i < HEIGHT; i++){
        board.push([])
        board_height.push(EMPTY);
        for (var j = 0; j < WIDTH; j++)
            board[board.length - 1].push(EMPTY);
    }
}



function evaluate(now_board, now_turn){ // 받은 판의 점수 계산

}

function choose(now_board, now_turn, cnt){
    if (cnt == MAX_DEFTH){
        return evaluate(now_board, now_turn);
    }
    for (var i = 0; i < WIDTH; i++){

    }
}