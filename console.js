//console

const fs = require('fs')
const output = fs.createWriteStream('./stdout.log');//写出流
const errorOutput = fs.createWriteStream('./stderr.log');//写出流
const { Console } = require('console');
// 自定义的简单记录器
const logger = new Console(output, errorOutput);
// 像 console 一样使用
const count = 5;
logger.log('count: %d', count);
logger.error('errrrr')
//平时的console
const consoler =  new Console(process.stdout, process.stderr);//process.stdout, process.stderr标准输出输入流
consoler.log('hhhh')