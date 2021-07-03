const countSubstrings = function (s) {
    const arr = s.split('');
    let result = 0;
    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    }

    const substrings = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            substrings.push(arr.slice(i, j));
        }
    }

    for (let i = 0; i < substrings.length; i++) {
        if (isPalindrome(substrings[i].join(''))) {
            result += 1
        }
    }

    return result
};

countSubstrings('aaa')
