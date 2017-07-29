const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);//在子进程中进行sub.js这个脚本

n.on('message', (m) => {
  console.log('父进程收到消息：', m);
});

n.send({ hello: 'world' });