const os = require('os');
setInterval(()=>{
    const {arch, platform, totalmem, freemem, hostname} = os;
    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const usage = (fRam/tRam)*100;
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRam: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %` ,
        Hostname: hostname()
    }
    //console.clear();
    //console.table(stats);
    exports.stats = stats;
},1000)
