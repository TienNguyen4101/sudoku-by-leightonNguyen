export function checkSudoku(puzzle) {
	// Check each row
	for (let i = 0; i < puzzle.length; i++) {
	  let row = puzzle[i];
	  let set = new Set();
	  for (let j = 0; j < row.length; j++) {
		let num = row[j];
		if (num !== null) {
		  if (set.has(num)) {
			return false; // duplicate value in row
		  }
		  set.add(num);
		}
	  }
	}
  
	// Check each column
	for (let i = 0; i < puzzle.length; i++) {
	  let set = new Set();
	  for (let j = 0; j < puzzle.length; j++) {
		let num = puzzle[j][i];
		if (num !== null) {
		  if (set.has(num)) {
			return false; // duplicate value in column
		  }
		  set.add(num);
		}
	  }
	}
  
	// Check each 3x3 subgrid
	for (let i = 0; i < puzzle.length; i += 3) {
	  for (let j = 0; j < puzzle.length; j += 3) {
		let set = new Set();
		for (let k = 0; k < 3; k++) {
		  for (let l = 0; l < 3; l++) {
			let num = puzzle[i + k][j + l];
			if (num !== null) {
			  if (set.has(num)) {
				return false; // duplicate value in subgrid
			  }
			  set.add(num);
			}
		  }
		}
	  }
	}
  
	return true;
  }
  
//   let puzzle = [
// 	[5, 3, 4, 6, 6, 8, 9, 1, 2],
// 	[6, 7, 2, 1, 9, 5, 3, 4, 8],
// 	[1, 9, 8, 3, 4, 2, 5, 6, 7],
// 	[8, 5, 9, 7, 6, 1, 4, 2, 3],
// 	[4, 2, 6, 8, 5, 3, 7, 9, 1],
// 	[7, 1, 3, 9, 2, 4, 8, 5, 6],
// 	[9, 6, 1, 5, 3, 7, 2, 8, 4],
// 	[2, 8, 7, 4, 1, 9, 6, 3, 5],
// 	[3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ];
  
// console.log(checkSudoku(puzzle)); // should output true
  