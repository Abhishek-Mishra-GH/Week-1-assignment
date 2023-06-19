function counter(n) {
    let current = 1;
    let increment = () => {
        if(current <= n) {
            console.log(current);
            current++;
            setTimeout(increment, 1000);
        }
    }

    setTimeout(increment, 1000);
}

// counter(10);