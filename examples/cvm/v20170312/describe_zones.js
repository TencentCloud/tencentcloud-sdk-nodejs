const tencentcloud = require("../../../../tencentcloud-sdk-nodejs");

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;

const Credential = tencentcloud.common.Credential;

// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
let cred = new Credential("secretId", "secretKey");

// 实例化要请求产品(以cvm为例)的client对象
let client = new CvmClient(cred, "ap-shanghai");

// 实例化一个请求对象
let req = new models.DescribeZonesRequest();

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeZones(req, function(err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
        console.log(err);
        return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
});