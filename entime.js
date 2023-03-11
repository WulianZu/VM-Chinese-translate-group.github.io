function time() {
    window.setTimeout("time()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth() + 1
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    var t1 = Date.UTC(2024, 2, 10, 00, 00, 00)
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t1 - t2
    //t1 - t2倒计时，t2 - t1算过去时间
    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) - diffYears * 365)
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes *
        minutes) / seconds)
    document.getElementById("time").innerHTML = diffYears + "years" + diffDays + "days" + diffHours + "hours" + diffMinutes + "minutes" + diffSeconds + "seconds."
}
time()