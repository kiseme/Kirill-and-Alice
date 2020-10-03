//Вариант 7
//Напишите функцию, которая генерирует массив заданной длины, заполненный целыми числами, где каждое число больше предыдущего на единицу
// Input: length=4, value=10, Output: [10, 11, 12, 13]
 
function array_plus_one (start, len) {
    var arr = new Array(len);
    for (var i=0; i<len; i++, start++) {
      arr[i] = start;
    }
    return arr;
}

console.log(array_plus_one(10, 4));
