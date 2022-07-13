import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RestartLogstashInstanceRequest, DescribeInstanceOperationsRequest, StartLogstashPipelinesRequest, DescribeLogstashInstanceLogsResponse, CreateInstanceResponse, DescribeInstanceLogsRequest, DeleteLogstashPipelinesResponse, UpdateLogstashPipelineDescResponse, DescribeInstancesResponse, DescribeInstanceLogsResponse, DiagnoseInstanceRequest, UpdateDiagnoseSettingsRequest, DescribeInstanceOperationsResponse, UpdateRequestTargetNodeTypesResponse, DeleteLogstashInstanceResponse, GetRequestTargetNodeTypesResponse, DescribeIndexMetaResponse, DiagnoseInstanceResponse, UpgradeLicenseResponse, UpdateLogstashInstanceRequest, UpdateRequestTargetNodeTypesRequest, DescribeLogstashInstancesResponse, DeleteInstanceResponse, DescribeLogstashInstanceOperationsResponse, CreateIndexRequest, UpdatePluginsRequest, UpgradeLicenseRequest, UpdateJdkResponse, UpdateInstanceResponse, DeleteIndexRequest, DescribeViewsRequest, DescribeIndexListResponse, StartLogstashPipelinesResponse, DescribeLogstashInstanceOperationsRequest, CreateLogstashInstanceResponse, SaveAndDeployLogstashPipelineRequest, CreateIndexResponse, DeleteLogstashPipelinesRequest, RestartKibanaRequest, DescribeIndexListRequest, UpdateDictionariesRequest, SaveAndDeployLogstashPipelineResponse, DescribeLogstashPipelinesResponse, CreateInstanceRequest, CreateLogstashInstanceRequest, UpdateDictionariesResponse, DeleteIndexResponse, UpdatePluginsResponse, DescribeInstancesRequest, DescribeLogstashPipelinesRequest, RestartNodesRequest, GetRequestTargetNodeTypesRequest, DescribeLogstashInstancesRequest, DeleteInstanceRequest, UpgradeInstanceResponse, DescribeIndexMetaRequest, RestartKibanaResponse, UpdateIndexRequest, UpdateIndexResponse, UpdateJdkRequest, UpdateLogstashInstanceResponse, StopLogstashPipelinesRequest, RestartInstanceResponse, UpdateLogstashPipelineDescRequest, UpdateInstanceRequest, DescribeLogstashInstanceLogsRequest, RestartInstanceRequest, StopLogstashPipelinesResponse, UpdateDiagnoseSettingsResponse, RestartNodesResponse, DeleteLogstashInstanceRequest, UpgradeInstanceRequest, DescribeViewsResponse, RestartLogstashInstanceResponse } from "./es_models";
/**
 * es client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 智能运维诊断集群
     */
    DiagnoseInstance(req: DiagnoseInstanceRequest, cb?: (error: string, rep: DiagnoseInstanceResponse) => void): Promise<DiagnoseInstanceResponse>;
    /**
     * 用于删除Logstash实例
     */
    DeleteLogstashInstance(req: DeleteLogstashInstanceRequest, cb?: (error: string, rep: DeleteLogstashInstanceResponse) => void): Promise<DeleteLogstashInstanceResponse>;
    /**
     * 更新索引
     */
    UpdateIndex(req: UpdateIndexRequest, cb?: (error: string, rep: UpdateIndexResponse) => void): Promise<UpdateIndexResponse>;
    /**
     * 获取接收客户端请求的节点类型
     */
    GetRequestTargetNodeTypes(req: GetRequestTargetNodeTypesRequest, cb?: (error: string, rep: GetRequestTargetNodeTypesResponse) => void): Promise<GetRequestTargetNodeTypesResponse>;
    /**
     * 用于批量停止Logstash管道
     */
    StopLogstashPipelines(req: StopLogstashPipelinesRequest, cb?: (error: string, rep: StopLogstashPipelinesResponse) => void): Promise<StopLogstashPipelinesResponse>;
    /**
     * 获取索引列表
     */
    DescribeIndexList(req: DescribeIndexListRequest, cb?: (error: string, rep: DescribeIndexListResponse) => void): Promise<DescribeIndexListResponse>;
    /**
     * 销毁集群实例
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 创建索引
     */
    CreateIndex(req: CreateIndexRequest, cb?: (error: string, rep: CreateIndexResponse) => void): Promise<CreateIndexResponse>;
    /**
     * 更新接收客户端请求的节点类型
     */
    UpdateRequestTargetNodeTypes(req: UpdateRequestTargetNodeTypesRequest, cb?: (error: string, rep: UpdateRequestTargetNodeTypesResponse) => void): Promise<UpdateRequestTargetNodeTypesResponse>;
    /**
     * 更新智能运维配置
     */
    UpdateDiagnoseSettings(req: UpdateDiagnoseSettingsRequest, cb?: (error: string, rep: UpdateDiagnoseSettingsResponse) => void): Promise<UpdateDiagnoseSettingsResponse>;
    /**
     * 查询用户该地域下符合条件的所有实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 变更插件列表
     */
    UpdatePlugins(req: UpdatePluginsRequest, cb?: (error: string, rep: UpdatePluginsResponse) => void): Promise<UpdatePluginsResponse>;
    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，等操作。参数中InstanceId为必传参数，参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeNum: 修改实例节点数量（节点横向扩缩容，纵向扩缩容等）
- YMLConfig: 修改实例YML配置
- BindedES：修改绑定的ES集群配置
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
    UpdateLogstashInstance(req: UpdateLogstashInstanceRequest, cb?: (error: string, rep: UpdateLogstashInstanceResponse) => void): Promise<UpdateLogstashInstanceResponse>;
    /**
     * 更新实例Jdk配置
     */
    UpdateJdk(req: UpdateJdkRequest, cb?: (error: string, rep: UpdateJdkResponse) => void): Promise<UpdateJdkResponse>;
    /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     */
    UpdateInstance(req: UpdateInstanceRequest, cb?: (error: string, rep: UpdateInstanceResponse) => void): Promise<UpdateInstanceResponse>;
    /**
     * 用于创建Logstash实例
     */
    CreateLogstashInstance(req: CreateLogstashInstanceRequest, cb?: (error: string, rep: CreateLogstashInstanceResponse) => void): Promise<CreateLogstashInstanceResponse>;
    /**
     * 重启ES集群实例(用于系统版本更新等操作)
     */
    RestartInstance(req: RestartInstanceRequest, cb?: (error: string, rep: RestartInstanceResponse) => void): Promise<RestartInstanceResponse>;
    /**
     * 查询用户该地域下符合条件的ES集群的日志
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * 重启Kibana
     */
    RestartKibana(req: RestartKibanaRequest, cb?: (error: string, rep: RestartKibanaResponse) => void): Promise<RestartKibanaResponse>;
    /**
     * 用于下发并且部署管道
     */
    SaveAndDeployLogstashPipeline(req: SaveAndDeployLogstashPipelineRequest, cb?: (error: string, rep: SaveAndDeployLogstashPipelineResponse) => void): Promise<SaveAndDeployLogstashPipelineResponse>;
    /**
     * 查询实例指定条件下的操作记录
     */
    DescribeLogstashInstanceOperations(req: DescribeLogstashInstanceOperationsRequest, cb?: (error: string, rep: DescribeLogstashInstanceOperationsResponse) => void): Promise<DescribeLogstashInstanceOperationsResponse>;
    /**
     * 用于启动Logstash管道
     */
    StartLogstashPipelines(req: StartLogstashPipelinesRequest, cb?: (error: string, rep: StartLogstashPipelinesResponse) => void): Promise<StartLogstashPipelinesResponse>;
    /**
     * 查询实例指定条件下的操作记录
     */
    DescribeInstanceOperations(req: DescribeInstanceOperationsRequest, cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void): Promise<DescribeInstanceOperationsResponse>;
    /**
     * 用于获取Logstash实例管道列表
     */
    DescribeLogstashPipelines(req: DescribeLogstashPipelinesRequest, cb?: (error: string, rep: DescribeLogstashPipelinesResponse) => void): Promise<DescribeLogstashPipelinesResponse>;
    /**
     * 查询用户该地域下符合条件的所有Logstash实例
     */
    DescribeLogstashInstances(req: DescribeLogstashInstancesRequest, cb?: (error: string, rep: DescribeLogstashInstancesResponse) => void): Promise<DescribeLogstashInstancesResponse>;
    /**
     * 用于更新管道描述信息
     */
    UpdateLogstashPipelineDesc(req: UpdateLogstashPipelineDescRequest, cb?: (error: string, rep: UpdateLogstashPipelineDescResponse) => void): Promise<UpdateLogstashPipelineDescResponse>;
    /**
     * 查询集群各视图数据，包括集群维度、节点维度、Kibana维度
     */
    DescribeViews(req: DescribeViewsRequest, cb?: (error: string, rep: DescribeViewsResponse) => void): Promise<DescribeViewsResponse>;
    /**
     * 创建指定规格的ES集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 升级ES集群版本
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 用于批量删除Logstash管道
     */
    DeleteLogstashPipelines(req: DeleteLogstashPipelinesRequest, cb?: (error: string, rep: DeleteLogstashPipelinesResponse) => void): Promise<DeleteLogstashPipelinesResponse>;
    /**
     * 用于重启集群节点
     */
    RestartNodes(req: RestartNodesRequest, cb?: (error: string, rep: RestartNodesResponse) => void): Promise<RestartNodesResponse>;
    /**
     * 删除索引
     */
    DeleteIndex(req: DeleteIndexRequest, cb?: (error: string, rep: DeleteIndexResponse) => void): Promise<DeleteIndexResponse>;
    /**
     * 用于重启Logstash实例
     */
    RestartLogstashInstance(req: RestartLogstashInstanceRequest, cb?: (error: string, rep: RestartLogstashInstanceResponse) => void): Promise<RestartLogstashInstanceResponse>;
    /**
     * 查询用户该地域下符合条件的Logstash实例的日志
     */
    DescribeLogstashInstanceLogs(req: DescribeLogstashInstanceLogsRequest, cb?: (error: string, rep: DescribeLogstashInstanceLogsResponse) => void): Promise<DescribeLogstashInstanceLogsResponse>;
    /**
     * 更新ES集群词典
     */
    UpdateDictionaries(req: UpdateDictionariesRequest, cb?: (error: string, rep: UpdateDictionariesResponse) => void): Promise<UpdateDictionariesResponse>;
    /**
     * 升级ES商业特性
     */
    UpgradeLicense(req: UpgradeLicenseRequest, cb?: (error: string, rep: UpgradeLicenseResponse) => void): Promise<UpgradeLicenseResponse>;
    /**
     * 获取索引元数据
     */
    DescribeIndexMeta(req: DescribeIndexMetaRequest, cb?: (error: string, rep: DescribeIndexMetaResponse) => void): Promise<DescribeIndexMetaResponse>;
}
