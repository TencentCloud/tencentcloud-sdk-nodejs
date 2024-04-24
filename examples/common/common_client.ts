import * as tencentcloud from "../../../tencentcloud-sdk-nodejs"
const TencentCloudCommon = tencentcloud.common;
const CommonClient = TencentCloudCommon.CommonClient;

// 实例化一个认证对象，入参需要传入腾讯云账户 SecretId 和 SecretKey，此处还需注意密钥对的保密
// 代码泄露可能会导致 SecretId 和 SecretKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议采用更安全的方式来使用密钥，请参见：https://cloud.tencent.com/document/product/1278/85305
// 密钥可前往官网控制台 https://console.cloud.tencent.com/cam/capi 进行获取
const clientConfig = {
  credential: {
    secretId: "$secretId",
    secretKey: "$secretKey",
  },
  region: "ap-shanghai",
  profile: {
    httpProfile: {
      endpoint: "cvm.tencentcloudapi.com",
    },
  },
};

// 实例化要请求产品的 CommonClient 对象,依次传入产品调用地址(产品名.tencentcloudapi.com)、产品版本、ClientConfig
const client = new CommonClient(
  "cvm.tencentcloudapi.com",
  "2017-03-12",
  clientConfig
);
const params = {
  Filters: [
    {
      Name: "zone",
      Values: ["ap-shanghai-1", "ap-shanghai-2"],
    },
    {
      Name: "instance-charge-type",
      Values: ["POSTPAID_BY_HOUR"],
    },
  ]
};
// 传入要调用的接口名，和接口对应的参数
client.request("DescribeInstances", params).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("error", err);
  }
);
