function fibonacci(num) {
// your code here
	
    if num <= 0:
        return "Invalid input. Please provide a positive integer greater than 0."
    elif num == 1:
        return 0
    elif num == 2:
        return 1
    else:
        a, b = 0, 1
        for _ in range(num - 2):
            a, b = b, a + b
        return b
}

module.exports = fibonacci;
