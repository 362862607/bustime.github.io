function yuki(hour) {
    var busjikan = document.getElementById("busjikan");
    var yukibustimes = {
        5: [35],
        6: [25, 35, 43, 55],
        7: [0, 6, 12, 18, 26, 30, 36, 42, 48, 54],
        8: [2, 7, 13, 18, 25, 30, 41, 55],
        9: [5, 20, 40],
        10: [0, 20, 40],
        11: [0, 20, 40],
        12: [0, 20, 40],
        13: [0, 20, 40],
        14: [0, 20, 40],
        15: [0, 20, 40],
        16: [0, 20, 40],
        17: [0, 20, 39],
        18: [0, 15, 30, 50],
        19: [9, 30, 50],
        20: [10, 29, 50],
        21: [10, 30, 55],
        22: [20, 50],
        23: [10]
    };
    var times = yukibustimes[hour];
    if (times) {
        busjikan.innerHTML = `<p>${hour}時のバスの時間:</p>` + times.map(time => `<p>${hour}時${time}分</p>`).join('');
    }
}