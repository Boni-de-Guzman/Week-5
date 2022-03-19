const vowel = ['a', 'e', 'i', 'o', 'u']


function hasMoreVowels(word) {
    let words = word.lenght;

    for (let i = 0; i < vowel.length; i++) {
        if (words > vowel.lenght) {
            return ("yes")
        } else {
            return ("no")
        }
    }
}
console.log(hasMoreVowels('e'))