const child_process = require('child_process');
child_process.exec('ls -l',{},(err,stdout,stderr) =>{
    //会衍生一个shell
    console.log('衍生一个shell',stdout);
})

child_process.execFile('ls',['-l'],{},(err,stdout,srderr)=>{
    //不会衍生一个Shell但是会衍生一个进程
    console.log('衍生出进程',stdout)
})


const ls  = child_process.spawn('ls',['-l']);// ls.prd 子进程的标识 ls就是这个子进程
ls.stdout.on('data', (data) =>{//ls.stdout是一个流
    console.log(`输出:${data}`)
});
ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});

//同步
let result = child_process.execSync('ls -l');
console.log('同步',result.toString())