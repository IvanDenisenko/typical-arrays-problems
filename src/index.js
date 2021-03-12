
exports.min = function min (array) {
   if (array.length == 0) return 0;
    let minimal = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minimal > array[i]) minimal = array[i];
    }
    return minimal;
}

exports.max = function max (array) {
  if (array.length == 0) return 0;
    let maxi = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxi < array[i]) maxi = array[i];
    }
    return maxi;
}

exports.avg = function avg (array) {
  let count = 0;
    if (array.length == 0) return 0;
    for (let i = 0; i < array.length; i++) {
       count += array[i]; 
    }
    return count/array.length;
}
