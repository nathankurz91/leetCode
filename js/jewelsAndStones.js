/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
let numJewelsInStones = function (J, S) {
    // J are jewels
    // S are stones
    // Each char in S is a type of stone you have
    // How many of the stones are also jewels
    // Letters in J guaranteed distinct
    // All characters in both strings are letters
    // Letters are case sensitive

    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.includes(S[i])) {
            count++;
        }
    }
    return count;
};
