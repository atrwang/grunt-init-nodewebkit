var DEBUG = 1; //是否输出日志
var markString = 'CN';//DEV 开发、CN 国内、NA 北美
var LocationVersion = '2.001.0039';
var ReleaseTime = '2015-02-04';
switch (markString){
    case 'DEV':
	DEBUG = 1;
        break;
    case 'CN':
	DEBUG = 0;
        break;
    case 'NA':
	DEBUG = 0;
        break;
}

function log(){
	if (DEBUG) {
		console.log(new Date());
		for (var i =0;i<arguments.length;i++) {
			console.log(arguments[i]);
		}
	}
}
log('Test log');