// Вариант 1: 
// Напишите решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива
// (Input: arr=[1,4,5,99,16,53,64,5], Output: 14)

let arr = [1, 4, 5, 99, 16, 53, 64, 5]
let result = 0
arr = arr.filter(elem => !(elem % 2))
for (let i in arr) {
	result += Math.sqrt(arr[i])
}
console.log(result)
