import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateShieldPlanInstanceResponse, CreateResourceInstancesRequest, DescribeShieldInstancesResponse, DescribeShieldResultRequest, CreateShieldInstanceRequest, CreateCosSecKeyInstanceRequest, DescribeScanResultsResponse, CreateScanInstancesRequest, DescribeUserBaseInfoInstanceResponse, CreateShieldPlanInstanceRequest, CreateBindInstanceRequest, CreateShieldInstanceResponse, DeleteShieldInstancesRequest, DescribeShieldInstancesRequest, CreateScanInstancesResponse, DescribeScanInstancesResponse, DescribeShieldPlanInstanceResponse, DescribeResourceInstancesRequest, DescribeShieldPlanInstanceRequest, CreateResourceInstancesResponse, DeleteScanInstancesResponse, DeleteShieldInstancesResponse, DescribeScanInstancesRequest, DescribeUserBaseInfoInstanceRequest, DescribeResourceInstancesResponse, DescribeScanResultsRequest, CreateCosSecKeyInstanceResponse, DescribeShieldResultResponse, CreateBindInstanceResponse, DeleteScanInstancesRequest } from "./ms_models";
/**
 * ms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     */
    CreateScanInstances(req: CreateScanInstancesRequest, cb?: (error: string, rep: CreateScanInstancesResponse) => void): Promise<CreateScanInstancesResponse>;
    /**
     * 通过唯一标识获取加固的结果
     */
    DescribeShieldResult(req: DescribeShieldResultRequest, cb?: (error: string, rep: DescribeShieldResultResponse) => void): Promise<DescribeShieldResultResponse>;
    /**
     * 删除一个或者多个app扫描信息
     */
    DeleteScanInstances(req: DeleteScanInstancesRequest, cb?: (error: string, rep: DeleteScanInstancesResponse) => void): Promise<DeleteScanInstancesResponse>;
    /**
     * 用户可以使用该接口自建资源，只支持白名单用户
     */
    CreateResourceInstances(req: CreateResourceInstancesRequest, cb?: (error: string, rep: CreateResourceInstancesResponse) => void): Promise<CreateResourceInstancesResponse>;
    /**
     * 将应用和资源进行绑定
     */
    CreateBindInstance(req: CreateBindInstanceRequest, cb?: (error: string, rep: CreateBindInstanceResponse) => void): Promise<CreateBindInstanceResponse>;
    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性。
     */
    CreateCosSecKeyInstance(req: CreateCosSecKeyInstanceRequest, cb?: (error: string, rep: CreateCosSecKeyInstanceResponse) => void): Promise<CreateCosSecKeyInstanceResponse>;
    /**
     * 获取某个用户的所有资源信息
     */
    DescribeResourceInstances(req: DescribeResourceInstancesRequest, cb?: (error: string, rep: DescribeResourceInstancesResponse) => void): Promise<DescribeResourceInstancesResponse>;
    /**
     * 用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     */
    DescribeScanResults(req: DescribeScanResultsRequest, cb?: (error: string, rep: DescribeScanResultsResponse) => void): Promise<DescribeScanResultsResponse>;
    /**
     * 查询加固策略
     */
    DescribeShieldPlanInstance(req: DescribeShieldPlanInstanceRequest, cb?: (error: string, rep: DescribeShieldPlanInstanceResponse) => void): Promise<DescribeShieldPlanInstanceResponse>;
    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果
     */
    CreateShieldInstance(req: CreateShieldInstanceRequest, cb?: (error: string, rep: CreateShieldInstanceResponse) => void): Promise<CreateShieldInstanceResponse>;
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。

     */
    DescribeShieldInstances(req: DescribeShieldInstancesRequest, cb?: (error: string, rep: DescribeShieldInstancesResponse) => void): Promise<DescribeShieldInstancesResponse>;
    /**
     * 对资源进行策略新增
     */
    CreateShieldPlanInstance(req: CreateShieldPlanInstanceRequest, cb?: (error: string, rep: CreateShieldPlanInstanceResponse) => void): Promise<CreateShieldPlanInstanceResponse>;
    /**
     * 获取用户基础信息
     */
    DescribeUserBaseInfoInstance(req?: DescribeUserBaseInfoInstanceRequest, cb?: (error: string, rep: DescribeUserBaseInfoInstanceResponse) => void): Promise<DescribeUserBaseInfoInstanceResponse>;
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     */
    DescribeScanInstances(req: DescribeScanInstancesRequest, cb?: (error: string, rep: DescribeScanInstancesResponse) => void): Promise<DescribeScanInstancesResponse>;
    /**
     * 删除一个或者多个app加固信息
     */
    DeleteShieldInstances(req: DeleteShieldInstancesRequest, cb?: (error: string, rep: DeleteShieldInstancesResponse) => void): Promise<DeleteShieldInstancesResponse>;
}
