// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


function makeNegative(num) {
    if (num > 0) {
        num = num * (-1);
    } else {
        num = num;
    }
    return num;
}
