function counter(n) {
    let current = 1;
    let intervalId = setInterval(() => {
        if(current == n) clearInterval(intervalId);
        console.log(current);
        current++;
    }, 1000);
}

// counter(10);