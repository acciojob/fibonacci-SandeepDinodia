// function fibonacci(num) {
// // your code here
// 	// def fibonacci(num):
//     if num <= 0:
//         return "Invalid input. Please provide a positive integer greater than 0."
//     let num == 1:
//         return 0
//     let num == 2:
//         return 1
//     else:
//         a, b = 0, 1
//         for _ in range(num - 2):
//             a, b = b, a + b
//         return b
// }
// module.exports = fibonacci;
function fibonacci(num) {
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    let a = 0, b = 1, temp;

    for (let i = 3; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
