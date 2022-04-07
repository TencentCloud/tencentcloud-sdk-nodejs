
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.iecp.v20210914.Client({
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
describe("iecp.v20210914.test.js", function () {

it("iecp.v20210914.DescribeNamespace", async function () {
    try {
       const data = await client.DescribeNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationVisualization", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationVisualization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitExtra", async function () {
    try {
       const data = await client.DescribeEdgeUnitExtra({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateUpdateNodeUnit", async function () {
    try {
       const data = await client.CreateUpdateNodeUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyNodeUnitTemplate", async function () {
    try {
       const data = await client.ModifyNodeUnitTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateNamespace", async function () {
    try {
       const data = await client.CreateNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeUnitDeployGridItem", async function () {
    try {
       const data = await client.ModifyEdgeUnitDeployGridItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeSecrets", async function () {
    try {
       const data = await client.DescribeSecrets({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitDeployGridItemYaml", async function () {
    try {
       const data = await client.DescribeEdgeUnitDeployGridItemYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeUnitApplicationYaml", async function () {
    try {
       const data = await client.CreateEdgeUnitApplicationYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyConfigMap", async function () {
    try {
       const data = await client.ModifyConfigMap({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationEvents", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.GetMarketComponentList", async function () {
    try {
       const data = await client.GetMarketComponentList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteConfigMap", async function () {
    try {
       const data = await client.DeleteConfigMap({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeNodeUnitTemplate", async function () {
    try {
       const data = await client.CreateEdgeNodeUnitTemplate({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeUnitDevices", async function () {
    try {
       const data = await client.DeleteEdgeUnitDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeUnitDevices", async function () {
    try {
       const data = await client.CreateEdgeUnitDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeIotDevices", async function () {
    try {
       const data = await client.DescribeIotDevices({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeNodeUnitTemplateOnNodeGroup", async function () {
    try {
       const data = await client.DescribeNodeUnitTemplateOnNodeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeDracoNode", async function () {
    try {
       const data = await client.ModifyEdgeDracoNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplications", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeNodes", async function () {
    try {
       const data = await client.DescribeEdgeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeApplications", async function () {
    try {
       const data = await client.DescribeApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeIotDevice", async function () {
    try {
       const data = await client.DescribeIotDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeUnitPod", async function () {
    try {
       const data = await client.DeleteEdgeUnitPod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitGridEvents", async function () {
    try {
       const data = await client.DescribeEdgeUnitGridEvents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitMonitorStatus", async function () {
    try {
       const data = await client.DescribeEdgeUnitMonitorStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeNodeGroup", async function () {
    try {
       const data = await client.DeleteEdgeNodeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateIotDevice", async function () {
    try {
       const data = await client.CreateIotDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeAgentNodeInstaller", async function () {
    try {
       const data = await client.DescribeEdgeAgentNodeInstaller({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteIotDeviceBatch", async function () {
    try {
       const data = await client.DeleteIotDeviceBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.RedeployEdgeUnitApplication", async function () {
    try {
       const data = await client.RedeployEdgeUnitApplication({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeUnit", async function () {
    try {
       const data = await client.ModifyEdgeUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeNodeRemarkList", async function () {
    try {
       const data = await client.DescribeEdgeNodeRemarkList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeNode", async function () {
    try {
       const data = await client.CreateEdgeNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeNodeUnitTemplates", async function () {
    try {
       const data = await client.DeleteEdgeNodeUnitTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeUnitDeployGridItem", async function () {
    try {
       const data = await client.DeleteEdgeUnitDeployGridItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationYaml", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeUnitApplicationVisualization", async function () {
    try {
       const data = await client.ModifyEdgeUnitApplicationVisualization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteApplications", async function () {
    try {
       const data = await client.DeleteApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyApplicationVisualization", async function () {
    try {
       const data = await client.ModifyApplicationVisualization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitGridPods", async function () {
    try {
       const data = await client.DescribeEdgeUnitGridPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeDefaultVpc", async function () {
    try {
       const data = await client.DescribeEdgeDefaultVpc({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeNodePods", async function () {
    try {
       const data = await client.DescribeEdgeNodePods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeNodeUnit", async function () {
    try {
       const data = await client.DescribeNodeUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationYamlError", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationYamlError({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifySecret", async function () {
    try {
       const data = await client.ModifySecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeSecret", async function () {
    try {
       const data = await client.DescribeSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeNamespaceResources", async function () {
    try {
       const data = await client.DescribeNamespaceResources({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyIotDevice", async function () {
    try {
       const data = await client.ModifyIotDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeConfigMapYamlError", async function () {
    try {
       const data = await client.DescribeConfigMapYamlError({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeNodeGroup", async function () {
    try {
       const data = await client.CreateEdgeNodeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteNodeUnit", async function () {
    try {
       const data = await client.DeleteNodeUnit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationLogs", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeNode", async function () {
    try {
       const data = await client.DescribeEdgeNode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteIotDevice", async function () {
    try {
       const data = await client.DeleteIotDevice({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeApplicationYamlError", async function () {
    try {
       const data = await client.DescribeApplicationYamlError({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateUserToken", async function () {
    try {
       const data = await client.CreateUserToken({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitsCloud", async function () {
    try {
       const data = await client.DescribeEdgeUnitsCloud({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeUnitCloud", async function () {
    try {
       const data = await client.CreateEdgeUnitCloud({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteSecret", async function () {
    try {
       const data = await client.DeleteSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeUnitApplicationVisualization", async function () {
    try {
       const data = await client.CreateEdgeUnitApplicationVisualization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.SetRouteOnOff", async function () {
    try {
       const data = await client.SetRouteOnOff({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitNodeGroup", async function () {
    try {
       const data = await client.DescribeEdgeUnitNodeGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteMessageRoute", async function () {
    try {
       const data = await client.DeleteMessageRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ApplyMarketComponent", async function () {
    try {
       const data = await client.ApplyMarketComponent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeApplicationVisualization", async function () {
    try {
       const data = await client.DescribeApplicationVisualization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitNodeUnitTemplates", async function () {
    try {
       const data = await client.DescribeEdgeUnitNodeUnitTemplates({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.GetMarketComponent", async function () {
    try {
       const data = await client.GetMarketComponent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeNamespaces", async function () {
    try {
       const data = await client.DescribeNamespaces({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeOperationLogs", async function () {
    try {
       const data = await client.DescribeEdgeOperationLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateSecret", async function () {
    try {
       const data = await client.CreateSecret({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgePod", async function () {
    try {
       const data = await client.DescribeEdgePod({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationPods", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationPods({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeUnitApplications", async function () {
    try {
       const data = await client.DeleteEdgeUnitApplications({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitDeployGrid", async function () {
    try {
       const data = await client.DescribeEdgeUnitDeployGrid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.BuildMessageRoute", async function () {
    try {
       const data = await client.BuildMessageRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeNodes", async function () {
    try {
       const data = await client.DeleteEdgeNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeDracoEdgeNodeInstaller", async function () {
    try {
       const data = await client.DescribeDracoEdgeNodeInstaller({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateConfigMap", async function () {
    try {
       const data = await client.CreateConfigMap({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitCloud", async function () {
    try {
       const data = await client.DescribeEdgeUnitCloud({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteNamespace", async function () {
    try {
       const data = await client.DeleteNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeMessageRouteList", async function () {
    try {
       const data = await client.DescribeMessageRouteList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeNodeLabels", async function () {
    try {
       const data = await client.ModifyEdgeNodeLabels({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeMonitorMetrics", async function () {
    try {
       const data = await client.DescribeMonitorMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeConfigMaps", async function () {
    try {
       const data = await client.DescribeConfigMaps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeSecretYamlError", async function () {
    try {
       const data = await client.DescribeSecretYamlError({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeUnitCloudApi", async function () {
    try {
       const data = await client.ModifyEdgeUnitCloudApi({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyApplicationBasicInfo", async function () {
    try {
       const data = await client.ModifyApplicationBasicInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitDeployGridItem", async function () {
    try {
       const data = await client.DescribeEdgeUnitDeployGridItem({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeApplicationYaml", async function () {
    try {
       const data = await client.DescribeApplicationYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeUnitApplicationBasicInfo", async function () {
    try {
       const data = await client.ModifyEdgeUnitApplicationBasicInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateApplicationVisualization", async function () {
    try {
       const data = await client.CreateApplicationVisualization({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeConfigMap", async function () {
    try {
       const data = await client.DescribeConfigMap({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeNodePodContainers", async function () {
    try {
       const data = await client.DescribeEdgeNodePodContainers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeUnitApplicationPodContainers", async function () {
    try {
       const data = await client.DescribeEdgeUnitApplicationPodContainers({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateEdgeNodeBatch", async function () {
    try {
       const data = await client.CreateEdgeNodeBatch({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.CreateMessageRoute", async function () {
    try {
       const data = await client.CreateMessageRoute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeYeheResourceLimit", async function () {
    try {
       const data = await client.DescribeYeheResourceLimit({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.ModifyEdgeUnitApplicationYaml", async function () {
    try {
       const data = await client.ModifyEdgeUnitApplicationYaml({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DeleteEdgeUnitCloud", async function () {
    try {
       const data = await client.DeleteEdgeUnitCloud({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iecp.v20210914.DescribeEdgeSnNodes", async function () {
    try {
       const data = await client.DescribeEdgeSnNodes({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
