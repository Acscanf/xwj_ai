var kthCharacter = function(k) {
    let word = 'a';
    while(word.length < k) {
        let newWord = Array.from(word).map(item => {
            if(item === 'z') {
                item = 'a';
            } else {
                item = String.fromCharCode(item.charCodeAt() + 1);
            }
            return item;
        })
        word = word + newWord;
    }
    console.log(word[k - 1]);
};

kthCharacter(5);