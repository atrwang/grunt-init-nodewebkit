//配置文件，主要是 thrift 接口地址和一些标识字符串

var markString = 'CN';//DEV 开发、CN 国内、NA 北美
var LocationVersion = '2.001.0039';
var ReleaseTime = '2015-02-04';
switch (markString){
    case 'DEV':
        var thriftURL = "http://devthrift.plaso.cn:8801/plaso/thrift/js/",
        thriftURLSafe = "https://devthrift.plaso.cn:8443/plaso/thrift/js/",//https安全接口
        serverURL = "http://devthrift.plaso.cn/",//不要端口号，用于读取头像，服务器要重定向
        FileURL = "http://devthrift.plaso.cn:8801",
        updateURL = "http://app.plaso.cn:8801",//不动
        downloadPath = "http://devthrift.plaso.cn/";
        break;
    case 'CN':
        var thriftURL = "http://thrift.plaso.cn/plaso/thrift/js/",
        thriftURLSafe = "https://thrift.plaso.cn/plaso/thrift/js/",//https安全接口
        serverURL = "http://thrift.plaso.cn/",//不要端口号，用于读取头像，服务器要重定向
        FileURL = "http://thrift.plaso.cn",
        updateURL = "http://app.plaso.cn",//不动
        downloadPath = "http://thrift.plaso.cn/";
        break;
    case 'NA':
        var thriftURL = "http://thrift.plaso.com:8801/plaso/thrift/js/",
        thriftURLSafe = "https://thrift.plaso.com:8443/plaso/thrift/js/",//https安全接口
        serverURL = "http://thrift.plaso.com/",//不要端口号，用于读取头像，服务器要重定向
        FileURL = "http://thrift.plaso.com:8801",
        updateURL = "http://app.plaso.cn:8801",//不动
        downloadPath = "http://thrift.plaso.com/";
        break;
}