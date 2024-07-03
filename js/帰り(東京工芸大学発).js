function kaeri(hour) {
    var busjikan = document.getElementById("busjikan");
    var kaeribustimes = {
        6: [5, 20, 35, 50],
        7: [1, 10, 22, 30, 37, 45, 50],
        8: [0, 5, 10, 15, 25, 35, 45, 53],
        9: [10, 25, 40, 55],
        10: [10, 25, 40, 55],
        11: [15, 35, 55],
        12: [15, 35, 55],
        13: [10, 30, 50],
        14: [10, 30, 50],
        15: [15, 35, 40, 45, 55],
        16: [5, 20, 40, 55],
        17: [3, 8, 16, 23, 30, 35, 38, 42, 47, 52],
        18: [0, 7, 15, 30, 45],
        19: [0, 15, 30, 45],
        20: [0, 25, 55],
        21: [25, 55],
        22: [45]
    };
    var times = kaeribustimes[hour];
    if (times) {
        busjikan.innerHTML = `<p>${hour}時のバスの時間:</p>` + times.map(time => `<p>${hour}時${time}分</p>`).join('');
    }
}
