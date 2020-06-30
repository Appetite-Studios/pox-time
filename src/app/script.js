
setTimeout(()=>{
    const ms = require("moment")
    var span = document.getElementById("text")
    setInterval(()=>{
        var time = ms().format('h:mm:ss a')
        span.innerHTML = time
    }, 500)
}, 10)
