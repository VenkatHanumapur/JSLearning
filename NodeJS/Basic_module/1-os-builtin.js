const os=require('os');

const userInfo = os.userInfo();
//console.log(userInfo);

//console.log(`the system uptime ${os.uptime()} seconds`);

const currentOS={
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    cpus : os.cpus()
}

console.log(currentOS);