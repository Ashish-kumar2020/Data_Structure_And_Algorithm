var markRow = (matrix, m, n, i) => {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
};

var markCol = (matrix, m, n, j) => {
  for (let i = 0; i < m; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
};

var setZeroes = function (matrix) {
  let m = matrix.length; // Number of rows
  let n = matrix[0].length; // Number of columns

  // First pass: mark rows and columns to be zeroed
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, m, n, i);
        markCol(matrix, m, n, j);
      }
    }
  }

  // Second pass: set marked cells to zero
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
