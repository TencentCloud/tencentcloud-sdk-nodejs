
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.redis.v20180412.Client({
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
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})
describe("redis.v20180412.test.js", function () {

it("redis.v20180412.ModifyInstanceReadOnly", async function () {
    try {
       const data = await client.ModifyInstanceReadOnly({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorBigKeySizeDist", async function () {
    try {
       const data = await client.DescribeInstanceMonitorBigKeySizeDist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeTaskList", async function () {
    try {
       const data = await client.DescribeTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DeleteReplicationInstance", async function () {
    try {
       const data = await client.DeleteReplicationInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CleanUpInstance", async function () {
    try {
       const data = await client.CleanUpInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceAccount", async function () {
    try {
       const data = await client.DescribeInstanceAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.SwitchAccessNewInstance", async function () {
    try {
       const data = await client.SwitchAccessNewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ChangeReplicaToMaster", async function () {
    try {
       const data = await client.ChangeReplicaToMaster({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorTopNCmd", async function () {
    try {
       const data = await client.DescribeInstanceMonitorTopNCmd({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.UpgradeInstanceVersion", async function () {
    try {
       const data = await client.UpgradeInstanceVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeProductInfo", async function () {
    try {
       const data = await client.DescribeProductInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeTaskInfo", async function () {
    try {
       const data = await client.DescribeTaskInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstanceBackupMode", async function () {
    try {
       const data = await client.ModifyInstanceBackupMode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyBackupDownloadRestriction", async function () {
    try {
       const data = await client.ModifyBackupDownloadRestriction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstanceAccount", async function () {
    try {
       const data = await client.ModifyInstanceAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceSecurityGroup", async function () {
    try {
       const data = await client.DescribeInstanceSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeBackupDetail", async function () {
    try {
       const data = await client.DescribeBackupDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.UpgradeVersionToMultiAvailabilityZones", async function () {
    try {
       const data = await client.UpgradeVersionToMultiAvailabilityZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeGlobalReplicationArea", async function () {
    try {
       const data = await client.DescribeGlobalReplicationArea({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstanceParams", async function () {
    try {
       const data = await client.ModifyInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ClearInstance", async function () {
    try {
       const data = await client.ClearInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeBackupUrl", async function () {
    try {
       const data = await client.DescribeBackupUrl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeSecondLevelBackupInfo", async function () {
    try {
       const data = await client.DescribeSecondLevelBackupInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyConnectionConfig", async function () {
    try {
       const data = await client.ModifyConnectionConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceLogDelivery", async function () {
    try {
       const data = await client.DescribeInstanceLogDelivery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstance", async function () {
    try {
       const data = await client.ModifyInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ChangeInstanceRole", async function () {
    try {
       const data = await client.ChangeInstanceRole({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceNodeInfo", async function () {
    try {
       const data = await client.DescribeInstanceNodeInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CreateInstanceAccount", async function () {
    try {
       const data = await client.CreateInstanceAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstanceEvent", async function () {
    try {
       const data = await client.ModifyInstanceEvent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.UpgradeProxyVersion", async function () {
    try {
       const data = await client.UpgradeProxyVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorTopNCmdTook", async function () {
    try {
       const data = await client.DescribeInstanceMonitorTopNCmdTook({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyAutoBackupConfig", async function () {
    try {
       const data = await client.ModifyAutoBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DeleteParamTemplate", async function () {
    try {
       const data = await client.DeleteParamTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.AddReplicationInstance", async function () {
    try {
       const data = await client.AddReplicationInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CloneInstances", async function () {
    try {
       const data = await client.CloneInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CreateParamTemplate", async function () {
    try {
       const data = await client.CreateParamTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DisableReplicaReadonly", async function () {
    try {
       const data = await client.DisableReplicaReadonly({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceDTSInfo", async function () {
    try {
       const data = await client.DescribeInstanceDTSInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.InquiryPriceUpgradeInstance", async function () {
    try {
       const data = await client.InquiryPriceUpgradeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.RenewInstance", async function () {
    try {
       const data = await client.RenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstanceLogDelivery", async function () {
    try {
       const data = await client.ModifyInstanceLogDelivery({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.AllocateWanAddress", async function () {
    try {
       const data = await client.AllocateWanAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeProjectSecurityGroups", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeTendisSlowLog", async function () {
    try {
       const data = await client.DescribeTendisSlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyParamTemplate", async function () {
    try {
       const data = await client.ModifyParamTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.InquiryPriceCreateInstance", async function () {
    try {
       const data = await client.InquiryPriceCreateInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyReplicationGroup", async function () {
    try {
       const data = await client.ModifyReplicationGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceSupportFeature", async function () {
    try {
       const data = await client.DescribeInstanceSupportFeature({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceParams", async function () {
    try {
       const data = await client.DescribeInstanceParams({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorBigKeyTypeDist", async function () {
    try {
       const data = await client.DescribeInstanceMonitorBigKeyTypeDist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ReleaseWanAddress", async function () {
    try {
       const data = await client.ReleaseWanAddress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DisassociateSecurityGroups", async function () {
    try {
       const data = await client.DisassociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ManualBackupInstance", async function () {
    try {
       const data = await client.ManualBackupInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceSpecBandwidth", async function () {
    try {
       const data = await client.DescribeInstanceSpecBandwidth({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DeleteInstanceAccount", async function () {
    try {
       const data = await client.DeleteInstanceAccount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.SwitchProxy", async function () {
    try {
       const data = await client.SwitchProxy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DestroyPrepaidInstance", async function () {
    try {
       const data = await client.DestroyPrepaidInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceParamRecords", async function () {
    try {
       const data = await client.DescribeInstanceParamRecords({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeParamTemplateInfo", async function () {
    try {
       const data = await client.DescribeParamTemplateInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DestroyPostpaidInstance", async function () {
    try {
       const data = await client.DestroyPostpaidInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.StartupInstance", async function () {
    try {
       const data = await client.StartupInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorTookDist", async function () {
    try {
       const data = await client.DescribeInstanceMonitorTookDist({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeParamTemplates", async function () {
    try {
       const data = await client.DescribeParamTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceBackups", async function () {
    try {
       const data = await client.DescribeInstanceBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ResetPassword", async function () {
    try {
       const data = await client.ResetPassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.RemoveReplicationInstance", async function () {
    try {
       const data = await client.RemoveReplicationInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.UpgradeSmallVersion", async function () {
    try {
       const data = await client.UpgradeSmallVersion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstancePassword", async function () {
    try {
       const data = await client.ModifyInstancePassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CreateReplicationGroup", async function () {
    try {
       const data = await client.CreateReplicationGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorSIP", async function () {
    try {
       const data = await client.DescribeInstanceMonitorSIP({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeProjectSecurityGroup", async function () {
    try {
       const data = await client.DescribeProjectSecurityGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorHotKey", async function () {
    try {
       const data = await client.DescribeInstanceMonitorHotKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModfiyInstancePassword", async function () {
    try {
       const data = await client.ModfiyInstancePassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.EnableReplicaReadonly", async function () {
    try {
       const data = await client.EnableReplicaReadonly({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.AssociateSecurityGroups", async function () {
    try {
       const data = await client.AssociateSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeSSLStatus", async function () {
    try {
       const data = await client.DescribeSSLStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceMonitorBigKey", async function () {
    try {
       const data = await client.DescribeInstanceMonitorBigKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeRedisClusters", async function () {
    try {
       const data = await client.DescribeRedisClusters({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.KillMasterGroup", async function () {
    try {
       const data = await client.KillMasterGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeCommonDBInstances", async function () {
    try {
       const data = await client.DescribeCommonDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeSlowLog", async function () {
    try {
       const data = await client.DescribeSlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeBackupDownloadRestriction", async function () {
    try {
       const data = await client.DescribeBackupDownloadRestriction({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceZoneInfo", async function () {
    try {
       const data = await client.DescribeInstanceZoneInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceEvents", async function () {
    try {
       const data = await client.DescribeInstanceEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.SwitchInstanceVip", async function () {
    try {
       const data = await client.SwitchInstanceVip({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeDBSecurityGroups", async function () {
    try {
       const data = await client.DescribeDBSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeReplicationGroup", async function () {
    try {
       const data = await client.DescribeReplicationGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.InquiryPriceRenewInstance", async function () {
    try {
       const data = await client.InquiryPriceRenewInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyMaintenanceWindow", async function () {
    try {
       const data = await client.ModifyMaintenanceWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyNetworkConfig", async function () {
    try {
       const data = await client.ModifyNetworkConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceShards", async function () {
    try {
       const data = await client.DescribeInstanceShards({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.RestoreInstance", async function () {
    try {
       const data = await client.RestoreInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstances", async function () {
    try {
       const data = await client.DescribeInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.RemoveReplicationGroup", async function () {
    try {
       const data = await client.RemoveReplicationGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.OpenSSL", async function () {
    try {
       const data = await client.OpenSSL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeAutoBackupConfig", async function () {
    try {
       const data = await client.DescribeAutoBackupConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeBandwidthRange", async function () {
    try {
       const data = await client.DescribeBandwidthRange({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeReplicationGroupInstance", async function () {
    try {
       const data = await client.DescribeReplicationGroupInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeProxySlowLog", async function () {
    try {
       const data = await client.DescribeProxySlowLog({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyInstanceAvailabilityZones", async function () {
    try {
       const data = await client.ModifyInstanceAvailabilityZones({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ModifyDBInstanceSecurityGroups", async function () {
    try {
       const data = await client.ModifyDBInstanceSecurityGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ChangeMasterInstance", async function () {
    try {
       const data = await client.ChangeMasterInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.UpgradeInstance", async function () {
    try {
       const data = await client.UpgradeInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeRedisClusterOverview", async function () {
    try {
       const data = await client.DescribeRedisClusterOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.ApplyParamsTemplate", async function () {
    try {
       const data = await client.ApplyParamsTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeMaintenanceWindow", async function () {
    try {
       const data = await client.DescribeMaintenanceWindow({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CreateInstances", async function () {
    try {
       const data = await client.CreateInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.DescribeInstanceDealDetail", async function () {
    try {
       const data = await client.DescribeInstanceDealDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("redis.v20180412.CloseSSL", async function () {
    try {
       const data = await client.CloseSSL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
