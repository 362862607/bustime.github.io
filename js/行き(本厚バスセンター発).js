function yuki(hour) {
    var busjikan = document.getElementById("busjikan");
    var yukibustimes = {
        5: [35],
        6: [25, 35, 43, 55],
        7: [0, 6, 12, 18, 26, 30, 36, 42, 48, 54],
        8: [2, 7, 13, 18, 25, 30, 35, 38, 41, 45, 50, 55],
        9: [5, 20, 40],
        10: [0, 20, 35, 40, 45],
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
    var specialTimes8 = [35, 38, 45, 50]; // 特急
    var specialTimes10 = [35, 45]; // 特急
    if (times) {
        var output = `<p>${hour}時のバスの時間:</p>`;
        for (var i = 0; i < times.length; i++) {
            if (hour == 8 && specialTimes8.includes(times[i])) {
                output += `<p>${hour}時${times[i]}分 <strong style="color: rgb(188, 180, 177);">(特急)</strong></p>`;
            } else if (hour == 10 && specialTimes10.includes(times[i])) {
                output += `<p>${hour}時${times[i]}分 <strong style="color: rgb(188, 180, 177);">(特急)</strong></p>`;
            } else {
                output += `<p>${hour}時${times[i]}分</p>`;
            }
        }
        busjikan.innerHTML = output;
    }
}
