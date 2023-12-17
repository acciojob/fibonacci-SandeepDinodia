function fibonacci(num) {
// your code here
	// def fibonacci(num):
    if num <= 0:
        return "Invalid input. Please provide a positive integer greater than 0."
    let num == 1:
        return 0
    let num == 2:
        return 1
    else:
        a, b = 0, 1
        for _ in range(num - 2):
            a, b = b, a + b
        return b
}

module.exports = fibonacci;
