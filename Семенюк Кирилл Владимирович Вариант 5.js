//Вариант 5:
//Напишите функцию, которая возвращает сумму квадратов значений массива
//(Input: arr=[1,2,3,4,5], Output: 55)

function Sum_of_Squares(array) {
	let result = 0
	for (let i in array) {
		result += (array[i])**2
	}
	return result
}

let arr = [1, 2, 3, 4, 5]
console.log(Sum_of_Squares(arr))