
module.exports = function controller (){
	var new_board = [
				['-','W','-','W','-','W','-','W'],
				['W','-','W','-','W','-','W','-'],
				['-','W','-','W','-','W','-','W'],
				[' ','-',' ','-',' ','-',' ','-'],
				[' ','-',' ','-',' ','-',' ','-'],
				['B','-','B','-','B','-','B','-'],
				['-','B','-','B','-','B','-','B'],
				['B','-','B','-','B','-','B','-'],		
			]

	var checker_board_table_open = '<table id = "board"'
	var checker_board_table_close = '\n</table>'
	var white_checker_table_data = '\n\t<td class="black cell"><div class="draggable"><img class = "piece" src="/images/white_checker.png"></div></td>'
	var black_checker_table_data = '\n\t<td class="black cell"><div class="draggable"><img class = "piece" src="/images/black_checker.png"></div></td>'
	var blank_white_checker_table_data = '\n\t<td class="cell white"><div class="droppable"></div></td>'
	var blank_black_checker_table_data = '\n\t<td class="cell black"><div class="droppable"></div></td>'
	var blank_checker_table_data = '\n\t<td class="cell"><div class="droppable"></div></td>'
	var table_row_open = '\n<tr>'
	var table_row_close = '\n</tr>'

// http://www.bgshop.com/img/v152105.jpg
// http://www.bgshop.com/img/v152007.jpg

	controller.prototype.checker_board_element_for_board = function (a_board){
		var result = checker_board_table_open
		for (i=0; i < a_board.length; i++){
			result += table_row_open
			for (j=0; j < a_board[i].length; j++){
				switch (a_board[i][j] ){
					case 'W': 
						result += white_checker_table_data
						break;
					case 'B': 
						result += black_checker_table_data
						break;			
					default: 
						if ((i == 0 || i % 2 == 0) && (j == 0 || j % 2 == 0)) {
							result += blank_black_checker_table_data; }
						else if (i != 0 && i % 2 != 0 && j % 2 != 0) {
							result += blank_black_checker_table_data; }
						else
							result += blank_white_checker_table_data
						break;  
				}
			}
			result += table_row_close
		}
		result  += checker_board_table_close
		return result
	}

	controller.prototype.new_board = function () {
		return this.checker_board_element_for_board (new_board);
	} 
}; // end controller obj.

