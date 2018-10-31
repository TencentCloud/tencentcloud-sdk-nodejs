const tencentcloud = require("../../../../tencentcloud-sdk-nodejs");

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
httpProfile.reqMethod = "POST";
httpProfile.reqTimeout = 30;
httpProfile.endpoint = "cvm.ap-shanghai.tencentcloudapi.com";

// 实例化一个client选项，可选的，没有特殊需求可以跳过。
let clientProfile = new ClientProfile();
clientProfile.signMethod = "HmacSHA256";
clientProfile.httpProfile = httpProfile;

// 实例化要请求产品(以cvm为例)的client对象。clientProfile可选。
let client = new CvmClient(cred, "ap-shanghai", clientProfile);

// 实例化一个请求对象,并填充参数
let req = new models.RunInstancesRequest();

req.InternetAccessible = new models.InternetAccessible();
req.InternetAccessible.InternetChargeType = "TRAFFIC_POSTPAID_BY_HOUR";
req.InternetAccessible.InternetMaxBandwidthOut = 1;
req.InternetAccessible.PublicIpAssigned = true;

req.InstanceCount = 1;
req.Placement = new models.Placement();
req.Placement.Zone = "ap-shanghai-2";

req.SystemDisk = new models.SystemDisk();
req.SystemDisk.DiskType = "CLOUD_BASIC";
req.SystemDisk.DiskSize = 50;

req.LoginSettings = new models.LoginSettings();
req.LoginSettings.Password = "isd@cloud";

req.ImageId = "img-8toqc6s3";
req.InstanceChargeType = "POSTPAID_BY_HOUR";
req.EnhancedService = new models.EnhancedService();

req.InstanceChargePrepaid = new models.InstanceChargePrepaid();
req.InstanceChargePrepaid.Period = 1;
req.InstanceChargePrepaid.RenewFlag = "NOTIFY_AND_MANUAL_RENEW";

req.InstanceName = "API-SDK-NODEJS";
req.InstanceType = "S2.SMALL1";

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.RunInstances(req, function(err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
        console.log(err);
        return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
});
