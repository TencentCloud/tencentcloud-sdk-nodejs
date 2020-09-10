# 简介

欢迎使用腾讯云开发者工具套件（SDK）3.0，SDK3.0是云 API3.0 平台的配套工具。目前已经支持cvm、vpc、cbs等产品，后续所有的云服务产品都会接入进来。新版SDK实现了统一化，具有各个语言版本的SDK使用方法相同，接口调用方式相同，统一的错误码和返回包格式这些优点。
为方便 NODEJS 开发者调试和接入腾讯云产品 API，这里向您介绍适用于 NODEJS 的腾讯云开发工具包，并提供首次使用开发工具包的简单示例。让您快速获取腾讯云 NODEJS SDK 并开始调用。

# 依赖环境

1. NODEJS 7.10.1 版本及以上
2. 从腾讯云控制台 开通相应产品
3. 获取 SecretID、SecretKey 以及调用地址（endpoint），endpoint 一般形式为\*.tencentcloudapi.com，如CVM 的调用地址为 cvm.tencentcloudapi.com，具体参考各产品说明。

# 获取安装

安装 NODEJS SDK 前，先获取安全凭证。在第一次使用云API之前，用户首先需要在腾讯云控制台上申请安全凭证，安全凭证包括 SecretID 和 SecretKey， SecretID 是用于标识 API 调用者的身份，SecretKey是用于加密签名字符串和服务器端验证签名字符串的密钥。SecretKey 必须严格保管，避免泄露。

## 通过 Npm 安装

通过 npm 获取安装是使用 NODEJS SDK 的推荐方法，npm 是 NODEJS 的包管理工具。关于 npm 详细可参考[ npm 官网](https://www.npmjs.com/) 。
1. 中国大陆地区的用户可以使用国内镜像源提高下载速度，例如：
    
    > npm config set registry https://mirrors.tencent.com/npm/
2. 执行以下安装命令：
    
    > npm install tencentcloud-sdk-nodejs --save
3. 在您的代码中引用对应模块代码，可参考示例。

## 通过源码包安装

1. 前往 [Github 代码托管地址](https://github.com/tencentcloud/tencentcloud-sdk-nodejs) 下载源码压缩包。
2. 解压源码包到您项目合适的位置。
3. 在您的代码中引用对应模块代码，可参考示例。

# 示例

下文以DescribeInstances接口为例。

注意这里需要将导包路径改为真实包路径。

### 简化版

```js
const tencentcloud = require("tencentcloud-sdk-nodejs");
const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;
const Credential = tencentcloud.common.Credential;

let cred = new Credential("secretId", "secretKey");
let client = new CvmClient(cred, "ap-shanghai");
let req = new models.DescribeZonesRequest();

client.DescribeZones(req, function(err, response) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(response.to_json_string());
});
```

### 详细版

```js
const tencentcloud = require("tencentcloud-sdk-nodejs");

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client;
const models = tencentcloud.cvm.v20170312.Models;

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;


// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
let cred = new Credential("secretId", "secretKey");

// 实例化一个http选项，可选的，没有特殊需求可以跳过。
let httpProfile = new HttpProfile();
httpProfile.reqMethod = "POST";  // post请求(默认为post请求)(POST or GET)
httpProfile.reqTimeout = 30;  // 请求超时时间，单位为秒(默认60秒)
httpProfile.endpoint = "cvm.ap-shanghai.tencentcloudapi.com";  // 指定接入地域域名(默认就近接入)

// 实例化一个client选项，可选的，没有特殊需求可以跳过。
let clientProfile = new ClientProfile();
clientProfile.signMethod = "TC3-HMAC-SHA256";  // 指定签名算法(默认为HmacSHA256)(HmacSHA1, HmacSHA256)
clientProfile.httpProfile = httpProfile;

// 实例化要请求产品(以cvm为例)的client对象。clientProfile可选。
let client = new CvmClient(cred, "ap-shanghai", clientProfile);

// 实例化一个请求对象,并填充参数
let req = new models.DescribeInstancesRequest();
let filters = {
    Filters: [
        {
            Name: "zone",
            Values: ["ap-shanghai-1", "ap-shanghai-2"]
        },
        {
            Name: "instance-charge-type",
            Values: ["POSTPAID_BY_HOUR"]
        }
    ]
};
// 传入json参数
req.from_json_string(JSON.stringify(filters));

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeInstances(req, function (err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
        console.log(err);
        return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
});
```

## 更多示例

更丰富的使用demo请在examples目录中寻找。

# 相关配置

## 代理

如果是有代理的环境下，需要设置系统环境变量 `https_proxy` ，否则可能无法正常调用，抛出连接超时的异常。

## 签名方法 v3

从3.0.224版本开始，支持签名方法 v3。

# 旧版SDK
我们推荐使用新版NODEJS SDK，如果一定要用旧版SDK，请前往[github仓库](https://github.com/CFETeam/qcloudapi-sdk)下载。
