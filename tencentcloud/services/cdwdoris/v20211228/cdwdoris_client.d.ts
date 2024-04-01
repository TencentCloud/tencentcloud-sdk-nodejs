import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceResponse, DestroyInstanceResponse, DescribeSlowQueryRecordsDownloadRequest, ResizeDiskRequest, RestartClusterForNodeResponse, DescribeInstanceNodesResponse, DescribeInstanceStateRequest, DescribeClusterConfigsResponse, ScaleOutInstanceResponse, DescribeInstanceNodesRequest, ModifyInstanceRequest, CreateInstanceNewResponse, DescribeSlowQueryRecordsDownloadResponse, DestroyInstanceRequest, CreateInstanceNewRequest, DescribeInstancesResponse, DescribeInstancesRequest, DescribeSlowQueryRecordsRequest, DescribeClusterConfigsRequest, ResizeDiskResponse, ScaleOutInstanceRequest, DescribeSlowQueryRecordsResponse, DescribeDatabaseAuditRecordsResponse, DescribeInstanceResponse, RestartClusterForNodeRequest, ScaleUpInstanceRequest, DescribeInstanceRequest, DescribeInstanceStateResponse, DescribeDatabaseAuditRecordsRequest, DescribeInstanceNodesInfoRequest, DescribeDatabaseAuditDownloadResponse, DescribeDatabaseAuditDownloadRequest, DescribeInstanceNodesInfoResponse, ScaleUpInstanceResponse } from "./cdwdoris_models";
/**
 * cdwdoris client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 计算资源垂直变配
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
    /**
     * 获取集群列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 销毁集群
     */
    DestroyInstance(req: DestroyInstanceRequest, cb?: (error: string, rep: DestroyInstanceResponse) => void): Promise<DestroyInstanceResponse>;
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    DescribeInstanceState(req: DescribeInstanceStateRequest, cb?: (error: string, rep: DescribeInstanceStateResponse) => void): Promise<DescribeInstanceStateResponse>;
    /**
     * 获取数据库审计记录
     */
    DescribeDatabaseAuditRecords(req: DescribeDatabaseAuditRecordsRequest, cb?: (error: string, rep: DescribeDatabaseAuditRecordsResponse) => void): Promise<DescribeDatabaseAuditRecordsResponse>;
    /**
     * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
     */
    DescribeClusterConfigs(req: DescribeClusterConfigsRequest, cb?: (error: string, rep: DescribeClusterConfigsResponse) => void): Promise<DescribeClusterConfigsResponse>;
    /**
     * 扩容云盘
     */
    ResizeDisk(req: ResizeDiskRequest, cb?: (error: string, rep: ResizeDiskResponse) => void): Promise<ResizeDiskResponse>;
    /**
     * 下载数据库审计日志
     */
    DescribeDatabaseAuditDownload(req: DescribeDatabaseAuditDownloadRequest, cb?: (error: string, rep: DescribeDatabaseAuditDownloadResponse) => void): Promise<DescribeDatabaseAuditDownloadResponse>;
    /**
     * 根据集群ID查询某个集群的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 集群滚动重启
     */
    RestartClusterForNode(req: RestartClusterForNodeRequest, cb?: (error: string, rep: RestartClusterForNodeResponse) => void): Promise<RestartClusterForNodeResponse>;
    /**
     * 获取集群节点信息列表
     */
    DescribeInstanceNodes(req: DescribeInstanceNodesRequest, cb?: (error: string, rep: DescribeInstanceNodesResponse) => void): Promise<DescribeInstanceNodesResponse>;
    /**
     * 下载慢查询文件
     */
    DescribeSlowQueryRecordsDownload(req: DescribeSlowQueryRecordsDownloadRequest, cb?: (error: string, rep: DescribeSlowQueryRecordsDownloadResponse) => void): Promise<DescribeSlowQueryRecordsDownloadResponse>;
    /**
     * 获取BE/FE节点角色
     */
    DescribeInstanceNodesInfo(req: DescribeInstanceNodesInfoRequest, cb?: (error: string, rep: DescribeInstanceNodesInfoResponse) => void): Promise<DescribeInstanceNodesInfoResponse>;
    /**
     * 通过API创建集群
     */
    CreateInstanceNew(req: CreateInstanceNewRequest, cb?: (error: string, rep: CreateInstanceNewResponse) => void): Promise<CreateInstanceNewResponse>;
    /**
     * 水平扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 修改集群名称
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 获取慢查询列表
     */
    DescribeSlowQueryRecords(req: DescribeSlowQueryRecordsRequest, cb?: (error: string, rep: DescribeSlowQueryRecordsResponse) => void): Promise<DescribeSlowQueryRecordsResponse>;
}
