const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const AppSetInfo = models.AppSetInfo;
const ScanInfo = models.ScanInfo;
const DescribeShieldInstancesResponse = models.DescribeShieldInstancesResponse;
const PluginInfo = models.PluginInfo;
const DescribeShieldResultRequest = models.DescribeShieldResultRequest;
const CreateShieldInstanceRequest = models.CreateShieldInstanceRequest;
const DescribeScanResultsResponse = models.DescribeScanResultsResponse;
const VirusInfo = models.VirusInfo;
const ScanSetInfo = models.ScanSetInfo;
const AppScanSet = models.AppScanSet;
const CreateShieldInstanceResponse = models.CreateShieldInstanceResponse;
const DeleteShieldInstancesRequest = models.DeleteShieldInstancesRequest;
const DescribeShieldInstancesRequest = models.DescribeShieldInstancesRequest;
const CreateScanInstancesResponse = models.CreateScanInstancesResponse;
const DescribeScanInstancesResponse = models.DescribeScanInstancesResponse;
const AppInfo = models.AppInfo;
const DescribeShieldResultResponse = models.DescribeShieldResultResponse;
const ServiceInfo = models.ServiceInfo;
const VulInfo = models.VulInfo;
const AdInfo = models.AdInfo;
const VulList = models.VulList;
const ShieldInfo = models.ShieldInfo;
const AppDetailInfo = models.AppDetailInfo;
const DeleteScanInstancesResponse = models.DeleteScanInstancesResponse;
const DeleteShieldInstancesResponse = models.DeleteShieldInstancesResponse;
const DescribeScanInstancesRequest = models.DescribeScanInstancesRequest;
const DescribeScanResultsRequest = models.DescribeScanResultsRequest;
const CreateScanInstancesRequest = models.CreateScanInstancesRequest;
const Filters = models.Filters;
const DeleteScanInstancesRequest = models.DeleteScanInstancesRequest;


/**
 * ms client
 * @class
 */
class MsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ms.tencentcloudapi.com", "2018-04-08", credential, region, profile);
    }
    
    /**
     * 用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     * @param {CreateScanInstancesRequest} req
     * @param {function(string, CreateScanInstancesResponse):void} cb
     * @public
     */
    CreateScanInstances(req, cb) {
        let resp = new CreateScanInstancesResponse();
        this.request("CreateScanInstances", req, resp, cb);
    }

    /**
     * 通过唯一标识获取加固的结果
     * @param {DescribeShieldResultRequest} req
     * @param {function(string, DescribeShieldResultResponse):void} cb
     * @public
     */
    DescribeShieldResult(req, cb) {
        let resp = new DescribeShieldResultResponse();
        this.request("DescribeShieldResult", req, resp, cb);
    }

    /**
     * 删除一个或者多个app扫描信息
     * @param {DeleteScanInstancesRequest} req
     * @param {function(string, DeleteScanInstancesResponse):void} cb
     * @public
     */
    DeleteScanInstances(req, cb) {
        let resp = new DeleteScanInstancesResponse();
        this.request("DeleteScanInstances", req, resp, cb);
    }

    /**
     * 用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     * @param {DescribeScanResultsRequest} req
     * @param {function(string, DescribeScanResultsResponse):void} cb
     * @public
     */
    DescribeScanResults(req, cb) {
        let resp = new DescribeScanResultsResponse();
        this.request("DescribeScanResults", req, resp, cb);
    }

    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果
     * @param {CreateShieldInstanceRequest} req
     * @param {function(string, CreateShieldInstanceResponse):void} cb
     * @public
     */
    CreateShieldInstance(req, cb) {
        let resp = new CreateShieldInstanceResponse();
        this.request("CreateShieldInstance", req, resp, cb);
    }

    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。

     * @param {DescribeShieldInstancesRequest} req
     * @param {function(string, DescribeShieldInstancesResponse):void} cb
     * @public
     */
    DescribeShieldInstances(req, cb) {
        let resp = new DescribeShieldInstancesResponse();
        this.request("DescribeShieldInstances", req, resp, cb);
    }

    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     * @param {DescribeScanInstancesRequest} req
     * @param {function(string, DescribeScanInstancesResponse):void} cb
     * @public
     */
    DescribeScanInstances(req, cb) {
        let resp = new DescribeScanInstancesResponse();
        this.request("DescribeScanInstances", req, resp, cb);
    }

    /**
     * 删除一个或者多个app加固信息
     * @param {DeleteShieldInstancesRequest} req
     * @param {function(string, DeleteShieldInstancesResponse):void} cb
     * @public
     */
    DeleteShieldInstances(req, cb) {
        let resp = new DeleteShieldInstancesResponse();
        this.request("DeleteShieldInstances", req, resp, cb);
    }


}
module.exports = MsClient;
