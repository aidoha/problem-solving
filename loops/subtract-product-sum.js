const isPalindrome = function (s) {
    const string = s.toLowerCase().replace(/[\W_]+/g, "");
    const arr = [];
    for (let i = string.length - 1; i >= 0; i--) {
        arr.push(string[i])
    }
    return arr.join('') === string;
};

isPalindrome("A man, a plan, a canal: Panama")