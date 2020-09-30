const tencentcloud = require("../../../../tencentcloud-sdk-nodejs")

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client

// 实例化要请求产品的client对象。profile可选。
const client = new CvmClient({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
    },
  },
})

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client
  .RunInstances({
    InternetAccessible: {
      InternetMaxBandwidthOut: 1,
      InternetChargeType: "TRAFFIC_POSTPAID_BY_HOUR",
      PublicIpAssigned: true,
    },
    InstanceCount: 1,
    Placement: {
      Zone: "ap-shanghai-2",
      // ProjectId: "1138633" as any,
    },
    SystemDisk: {
      DiskType: "CLOUD_PREMIUM",
      DiskSize: 50,
    },
    LoginSettings: {
      Password: "isd@cloud",
    },
    ImageId: "img-25szkc8t",
    InstanceChargeType: "POSTPAID_BY_HOUR",
    EnhancedService: {
      MonitorService: {
        Enabled: true,
      },
      SecurityService: {
        Enabled: true,
      },
    },
    InstanceChargePrepaid: {
      Period: 1,
      RenewFlag: "NOTIFY_AND_MANUAL_RENEW",
    },
    InstanceName: "API-SDK-NODEJS",
    InstanceType: "S2.SMALL1",
    // VirtualPrivateCloud: {
    //   AsVpcGateway: true,
    //   Ipv6AddressCount: 0,
    //   SubnetId: "subnet-mom67r5j",
    //   VpcId: "vpc-pz4uwz7s",
    // },
  })
  .then(
    (response) => {
      // 请求正常返回，打印response对象
      console.log(response)
    },
    (err) => {
      console.log(err)
    }
  )
