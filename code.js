//updated from v2 to v3 for the change order request with a mid warning
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        
        if (i <= 5) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left" = + count;
                count--;
            }, 1000 * i);
        }


    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
        count--;
    }, 11000);
}




//creating a countdown function to count from 10 to 1 then blast off
function countDown() {
    var count = 10;
    //starting count at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;

    //then going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    //then 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    //then 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //then 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    //then 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //then 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    //then 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //then 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    //then 1 
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //blastoff!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
        count = count - 1;
    }, 10000);
}

function playcraps() {
    //create die1 varible
    var die1;
    //create die2 varible
    var die2;
    // create sum 
    var sum;
    //make sure number are correct by 6 to get whole number with the math ceil
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    sum = die1 + die2;
    //prints results for each of the result includeing the sum
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;

    //lose or win sequence
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps!! You Lose.";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles, You Win.";
    } else {
        document.getElementById("crapsResults").innerHTML = "Push. Please Try Again.";
    }
}

function runSandbox() {
    var count = 10;

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);

    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!!";
        count--;
    }, 11000);
}