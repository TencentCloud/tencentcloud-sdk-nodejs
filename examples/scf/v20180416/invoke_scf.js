const tencentcloud = require("tencentcloud-sdk-nodejs");
const { Client } = require("../../../tencentcloud/yunsou/v20180504");

// 导入对应产品模块的client models。
const ScfClient = tencentcloud.scf.v20180416.Client;
const Models = tencentcloud.scf.v20180416.Models;

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;

// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
let credentials = new Credential("secretId", "secretKey");

// 实例化一个http选项，可选的，没有特殊需求可以跳过。v20180416
let httpProfile = new HttpProfile();
httpProfile.reqMethod = "POST";
httpProfile.reqTimeout = 30;
httpProfile.endpoint = "scf.ap-shanghai.tencentcloudapi.com";

// 实例化一个client选项，可选的，没有特殊需求可以跳过。
let clientProfile = new ClientProfile();
clientProfile.signMethod = "HmacSHA256";
clientProfile.httpProfile = httpProfile;

// 实例化要请求产品(以scf为例)的client对象。clientProfile可选。
let client = new ScfClient(credentials, "ap-shanghai", clientProfile);

// 实例化一个请求对象,并填充参数
let invokeRequest = new Models.InvokeRequest();
invokeRequest.FunctionName = "YourFunctionName";
invokeRequest.Qualifier = "$LATEST";
invokeRequest.ClientContext = JSON.stringify({
    "test": "test"
});
invokeRequest.LogType = "Tail";
invokeRequest.Namespace = "default";

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.Invoke(invokeRequest, (error, response) => {
    // 请求异常返回，打印异常信息
    if (error) {
        console.log(error);
        return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
})
