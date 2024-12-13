const arr = ["hello", "world", "js", "hello", "js"];

const cnt = (p) => {
    const ret = p.reduce((wordMap, w) => {
        if(w in wordMap) wordMap[w]++;
        else wordMap[w]=1;

        console.log('---------------');
        console.dir(wordMap);

        return wordMap;
    }, {});

    return ret;
}


cnt(arr);
