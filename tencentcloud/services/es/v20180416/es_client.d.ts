import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RestartLogstashInstanceRequest, DescribeInstanceOperationsRequest, DiagnoseInstanceResponse, CreateServerlessSpaceV2Request, DescribeDiagnoseResponse, DescribeLogstashInstanceLogsResponse, CreateInstanceResponse, DescribeInstanceLogsRequest, RestoreClusterSnapshotResponse, DeleteLogstashPipelinesResponse, DescribeSpaceKibanaToolsRequest, DescribeClusterSnapshotRequest, UpdateLogstashPipelineDescResponse, DescribeInstancesResponse, DescribeInstanceLogsResponse, UpdateServerlessSpaceRequest, DiagnoseInstanceRequest, UpdateDiagnoseSettingsRequest, DeleteServerlessInstanceResponse, InstallInstanceModelResponse, DescribeInstanceOperationsResponse, UpdateRequestTargetNodeTypesResponse, DeleteLogstashInstanceResponse, DescribeLogstashInstancesRequest, CreateServerlessSpaceV2Response, DeleteClusterSnapshotRequest, CheckMigrateIndexMetaDataResponse, DeleteClusterSnapshotResponse, GetRequestTargetNodeTypesResponse, CreateIndexResponse, DescribeServerlessSpaceUserResponse, DescribeLogstashInstanceLogsRequest, DescribeIndexMetaResponse, StartLogstashPipelinesRequest, DescribeServerlessMetricsRequest, GetDiagnoseSettingsResponse, CreateServerlessInstanceRequest, DeleteServerlessSpaceUserResponse, UpgradeLicenseResponse, UpdateLogstashInstanceRequest, UpdateRequestTargetNodeTypesRequest, DescribeLogstashInstancesResponse, InstallInstanceModelRequest, DeleteInstanceResponse, UpdateDiagnoseSettingsResponse, DescribeLogstashInstanceOperationsResponse, CreateIndexRequest, UpdatePluginsRequest, RestoreClusterSnapshotRequest, DescribeServerlessSpaceUserRequest, DescribeServerlessSpacesResponse, InquirePriceRenewInstanceRequest, UpdateInstanceResponse, DeleteIndexRequest, DescribeViewsRequest, DescribeIndexListResponse, DescribeUserCosSnapshotListRequest, DescribeLogstashInstanceOperationsRequest, CreateLogstashInstanceResponse, DeleteServerlessInstanceRequest, SaveAndDeployLogstashPipelineRequest, InquirePriceRenewInstanceResponse, CreateClusterSnapshotRequest, DeleteLogstashPipelinesRequest, RestartKibanaRequest, SaveAndDeployLogstashPipelineResponse, UpdateDictionariesRequest, UpgradeLicenseRequest, DescribeIndexListRequest, DescribeLogstashPipelinesResponse, CreateInstanceRequest, CreateLogstashInstanceRequest, UpdateServerlessInstanceResponse, UpdateDictionariesResponse, DeleteIndexResponse, DeleteServerlessSpaceUserRequest, RestartNodesResponse, DescribeInstancesRequest, CheckMigrateIndexMetaDataRequest, DescribeLogstashPipelinesRequest, GetRequestTargetNodeTypesRequest, ModifyEsVipSecurityGroupRequest, CreateCosMigrateToServerlessInstanceRequest, DeleteInstanceRequest, UpgradeInstanceResponse, DescribeIndexMetaRequest, UpdateJdkResponse, RestartKibanaResponse, DescribeUserCosSnapshotListResponse, UpdateIndexRequest, UpdatePluginsResponse, UpdateIndexResponse, UpdateLogstashInstanceResponse, StopLogstashPipelinesRequest, DescribeClusterSnapshotResponse, CreateCosMigrateToServerlessInstanceResponse, RestartInstanceResponse, UpdateServerlessSpaceResponse, UpdateLogstashPipelineDescRequest, UpdateServerlessInstanceRequest, DescribeSpaceKibanaToolsResponse, ModifyEsVipSecurityGroupResponse, UpdateInstanceRequest, CreateServerlessInstanceResponse, DescribeDiagnoseRequest, DescribeInstancePluginListResponse, DescribeServerlessSpacesRequest, RestartInstanceRequest, UpdateJdkRequest, DescribeServerlessMetricsResponse, StopLogstashPipelinesResponse, DescribeServerlessInstancesRequest, StartLogstashPipelinesResponse, GetDiagnoseSettingsRequest, DescribeInstancePluginListRequest, RestartNodesRequest, DescribeServerlessInstancesResponse, DeleteLogstashInstanceRequest, UpgradeInstanceRequest, DescribeViewsResponse, CreateClusterSnapshotResponse, RestartLogstashInstanceResponse } from "./es_models";
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
     * 快照备份恢复，从仓库中恢复快照到集群中
     */
    RestoreClusterSnapshot(req: RestoreClusterSnapshotRequest, cb?: (error: string, rep: RestoreClusterSnapshotResponse) => void): Promise<RestoreClusterSnapshotResponse>;
    /**
     * 获取接收客户端请求的节点类型
     */
    GetRequestTargetNodeTypes(req: GetRequestTargetNodeTypesRequest, cb?: (error: string, rep: GetRequestTargetNodeTypesResponse) => void): Promise<GetRequestTargetNodeTypesResponse>;
    /**
     * 用于批量停止Logstash管道
     */
    StopLogstashPipelines(req: StopLogstashPipelinesRequest, cb?: (error: string, rep: StopLogstashPipelinesResponse) => void): Promise<StopLogstashPipelinesResponse>;
    /**
     * 获取Serverless索引空间列表
     */
    DescribeServerlessSpaces(req: DescribeServerlessSpacesRequest, cb?: (error: string, rep: DescribeServerlessSpacesResponse) => void): Promise<DescribeServerlessSpacesResponse>;
    /**
     * ES集群安装模型接口
     */
    InstallInstanceModel(req: InstallInstanceModelRequest, cb?: (error: string, rep: InstallInstanceModelResponse) => void): Promise<InstallInstanceModelResponse>;
    /**
     * 获取索引列表
     */
    DescribeIndexList(req: DescribeIndexListRequest, cb?: (error: string, rep: DescribeIndexListResponse) => void): Promise<DescribeIndexListResponse>;
    /**
     * 用于更新管道描述信息
     */
    UpdateLogstashPipelineDesc(req: UpdateLogstashPipelineDescRequest, cb?: (error: string, rep: UpdateLogstashPipelineDescResponse) => void): Promise<UpdateLogstashPipelineDescResponse>;
    /**
     * 查询快照信息接口
     */
    DescribeUserCosSnapshotList(req: DescribeUserCosSnapshotListRequest, cb?: (error: string, rep: DescribeUserCosSnapshotListResponse) => void): Promise<DescribeUserCosSnapshotListResponse>;
    /**
     * 更新索引
     */
    UpdateIndex(req: UpdateIndexRequest, cb?: (error: string, rep: UpdateIndexResponse) => void): Promise<UpdateIndexResponse>;
    /**
     * 销毁集群实例
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 查看智能运维配置
     */
    GetDiagnoseSettings(req: GetDiagnoseSettingsRequest, cb?: (error: string, rep: GetDiagnoseSettingsResponse) => void): Promise<GetDiagnoseSettingsResponse>;
    /**
     * 创建索引
     */
    CreateIndex(req: CreateIndexRequest, cb?: (error: string, rep: CreateIndexResponse) => void): Promise<CreateIndexResponse>;
    /**
     * 用于启动Logstash管道
     */
    StartLogstashPipelines(req: StartLogstashPipelinesRequest, cb?: (error: string, rep: StartLogstashPipelinesResponse) => void): Promise<StartLogstashPipelinesResponse>;
    /**
     * 更新接收客户端请求的节点类型
     */
    UpdateRequestTargetNodeTypes(req: UpdateRequestTargetNodeTypesRequest, cb?: (error: string, rep: UpdateRequestTargetNodeTypesResponse) => void): Promise<UpdateRequestTargetNodeTypesResponse>;
    /**
     * 更新智能运维配置
     */
    UpdateDiagnoseSettings(req: UpdateDiagnoseSettingsRequest, cb?: (error: string, rep: UpdateDiagnoseSettingsResponse) => void): Promise<UpdateDiagnoseSettingsResponse>;
    /**
     * cos迁移流程
     */
    CreateCosMigrateToServerlessInstance(req: CreateCosMigrateToServerlessInstanceRequest, cb?: (error: string, rep: CreateCosMigrateToServerlessInstanceResponse) => void): Promise<CreateCosMigrateToServerlessInstanceResponse>;
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
     * 检查cos迁移索引元数据
     */
    CheckMigrateIndexMetaData(req: CheckMigrateIndexMetaDataRequest, cb?: (error: string, rep: CheckMigrateIndexMetaDataResponse) => void): Promise<CheckMigrateIndexMetaDataResponse>;
    /**
     * 更新实例Jdk配置
     */
    UpdateJdk(req: UpdateJdkRequest, cb?: (error: string, rep: UpdateJdkResponse) => void): Promise<UpdateJdkResponse>;
    /**
     * 删除Serverless索引
     */
    DeleteServerlessInstance(req: DeleteServerlessInstanceRequest, cb?: (error: string, rep: DeleteServerlessInstanceResponse) => void): Promise<DeleteServerlessInstanceResponse>;
    /**
     * 创建Serverless索引空间
     */
    CreateServerlessSpaceV2(req: CreateServerlessSpaceV2Request, cb?: (error: string, rep: CreateServerlessSpaceV2Response) => void): Promise<CreateServerlessSpaceV2Response>;
    /**
     * 获取快照备份列表
     */
    DescribeClusterSnapshot(req: DescribeClusterSnapshotRequest, cb?: (error: string, rep: DescribeClusterSnapshotResponse) => void): Promise<DescribeClusterSnapshotResponse>;
    /**
     * 用于创建Logstash实例
     */
    CreateLogstashInstance(req: CreateLogstashInstanceRequest, cb?: (error: string, rep: CreateLogstashInstanceResponse) => void): Promise<CreateLogstashInstanceResponse>;
    /**
     * 重启ES集群实例(用于系统版本更新等操作)
     */
    RestartInstance(req: RestartInstanceRequest, cb?: (error: string, rep: RestartInstanceResponse) => void): Promise<RestartInstanceResponse>;
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
     * 查询用户该地域下符合条件的ES集群的日志
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * 重启Kibana
     */
    RestartKibana(req: RestartKibanaRequest, cb?: (error: string, rep: RestartKibanaResponse) => void): Promise<RestartKibanaResponse>;
    /**
     * 修改绑定VIP的安全组，传安全组id列表
     */
    ModifyEsVipSecurityGroup(req: ModifyEsVipSecurityGroupRequest, cb?: (error: string, rep: ModifyEsVipSecurityGroupResponse) => void): Promise<ModifyEsVipSecurityGroupResponse>;
    /**
     * 创建Serverless索引
     */
    CreateServerlessInstance(req: CreateServerlessInstanceRequest, cb?: (error: string, rep: CreateServerlessInstanceResponse) => void): Promise<CreateServerlessInstanceResponse>;
    /**
     * 获取serverless实例对应指标，获取space维度时不需要传入indexid，获取index时不需要传入spaceid
获取一段时间时间范围内的指标数据
     */
    DescribeServerlessMetrics(req: DescribeServerlessMetricsRequest, cb?: (error: string, rep: DescribeServerlessMetricsResponse) => void): Promise<DescribeServerlessMetricsResponse>;
    /**
     * 查询实例指定条件下的操作记录
     */
    DescribeInstanceOperations(req: DescribeInstanceOperationsRequest, cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void): Promise<DescribeInstanceOperationsResponse>;
    /**
     * space维度的kibana获取登录token
     */
    DescribeSpaceKibanaTools(req: DescribeSpaceKibanaToolsRequest, cb?: (error: string, rep: DescribeSpaceKibanaToolsResponse) => void): Promise<DescribeSpaceKibanaToolsResponse>;
    /**
     * 用于获取Logstash实例管道列表
     */
    DescribeLogstashPipelines(req: DescribeLogstashPipelinesRequest, cb?: (error: string, rep: DescribeLogstashPipelinesResponse) => void): Promise<DescribeLogstashPipelinesResponse>;
    /**
     * 查询用户该地域下符合条件的所有Logstash实例
     */
    DescribeLogstashInstances(req: DescribeLogstashInstancesRequest, cb?: (error: string, rep: DescribeLogstashInstancesResponse) => void): Promise<DescribeLogstashInstancesResponse>;
    /**
     * Serverless获取索引列表
     */
    DescribeServerlessInstances(req: DescribeServerlessInstancesRequest, cb?: (error: string, rep: DescribeServerlessInstancesResponse) => void): Promise<DescribeServerlessInstancesResponse>;
    /**
     * 查询集群各视图数据，包括集群维度、节点维度、Kibana维度
     */
    DescribeViews(req: DescribeViewsRequest, cb?: (error: string, rep: DescribeViewsResponse) => void): Promise<DescribeViewsResponse>;
    /**
     * 创建指定规格的ES集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 更新Serverless索引
     */
    UpdateServerlessInstance(req: UpdateServerlessInstanceRequest, cb?: (error: string, rep: UpdateServerlessInstanceResponse) => void): Promise<UpdateServerlessInstanceResponse>;
    /**
     * 升级ES集群版本
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 查询智能运维诊断结果报告
     */
    DescribeDiagnose(req: DescribeDiagnoseRequest, cb?: (error: string, rep: DescribeDiagnoseResponse) => void): Promise<DescribeDiagnoseResponse>;
    /**
     * 删除Serverless空间子用户
     */
    DeleteServerlessSpaceUser(req: DeleteServerlessSpaceUserRequest, cb?: (error: string, rep: DeleteServerlessSpaceUserResponse) => void): Promise<DeleteServerlessSpaceUserResponse>;
    /**
     * 用于批量删除Logstash管道
     */
    DeleteLogstashPipelines(req: DeleteLogstashPipelinesRequest, cb?: (error: string, rep: DeleteLogstashPipelinesResponse) => void): Promise<DeleteLogstashPipelinesResponse>;
    /**
     * 查询用户该地域下符合条件的所有实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 更新Serverless索引空间
     */
    UpdateServerlessSpace(req: UpdateServerlessSpaceRequest, cb?: (error: string, rep: UpdateServerlessSpaceResponse) => void): Promise<UpdateServerlessSpaceResponse>;
    /**
     * 删除索引
     */
    DeleteIndex(req: DeleteIndexRequest, cb?: (error: string, rep: DeleteIndexResponse) => void): Promise<DeleteIndexResponse>;
    /**
     * 用于重启Logstash实例
     */
    RestartLogstashInstance(req: RestartLogstashInstanceRequest, cb?: (error: string, rep: RestartLogstashInstanceResponse) => void): Promise<RestartLogstashInstanceResponse>;
    /**
     * 集群快照手动创建
     */
    CreateClusterSnapshot(req: CreateClusterSnapshotRequest, cb?: (error: string, rep: CreateClusterSnapshotResponse) => void): Promise<CreateClusterSnapshotResponse>;
    /**
     * 删除快照仓库里备份的快照
     */
    DeleteClusterSnapshot(req: DeleteClusterSnapshotRequest, cb?: (error: string, rep: DeleteClusterSnapshotResponse) => void): Promise<DeleteClusterSnapshotResponse>;
    /**
     * 查询用户该地域下符合条件的Logstash实例的日志
     */
    DescribeLogstashInstanceLogs(req: DescribeLogstashInstanceLogsRequest, cb?: (error: string, rep: DescribeLogstashInstanceLogsResponse) => void): Promise<DescribeLogstashInstanceLogsResponse>;
    /**
     * 用于重启集群节点
     */
    RestartNodes(req: RestartNodesRequest, cb?: (error: string, rep: RestartNodesResponse) => void): Promise<RestartNodesResponse>;
    /**
     * 查看Serverless空间子用户
     */
    DescribeServerlessSpaceUser(req: DescribeServerlessSpaceUserRequest, cb?: (error: string, rep: DescribeServerlessSpaceUserResponse) => void): Promise<DescribeServerlessSpaceUserResponse>;
    /**
     * 用于下发并且部署管道
     */
    SaveAndDeployLogstashPipeline(req: SaveAndDeployLogstashPipelineRequest, cb?: (error: string, rep: SaveAndDeployLogstashPipelineResponse) => void): Promise<SaveAndDeployLogstashPipelineResponse>;
    /**
     * 更新ES集群词典
     */
    UpdateDictionaries(req: UpdateDictionariesRequest, cb?: (error: string, rep: UpdateDictionariesResponse) => void): Promise<UpdateDictionariesResponse>;
    /**
     * 升级ES商业特性
     */
    UpgradeLicense(req: UpgradeLicenseRequest, cb?: (error: string, rep: UpgradeLicenseResponse) => void): Promise<UpgradeLicenseResponse>;
    /**
     * 查询实例插件列表
     */
    DescribeInstancePluginList(req: DescribeInstancePluginListRequest, cb?: (error: string, rep: DescribeInstancePluginListResponse) => void): Promise<DescribeInstancePluginListResponse>;
    /**
     * 获取索引元数据
     */
    DescribeIndexMeta(req: DescribeIndexMetaRequest, cb?: (error: string, rep: DescribeIndexMetaResponse) => void): Promise<DescribeIndexMetaResponse>;
    /**
     * 查询实例指定条件下的操作记录
     */
    DescribeLogstashInstanceOperations(req: DescribeLogstashInstanceOperationsRequest, cb?: (error: string, rep: DescribeLogstashInstanceOperationsResponse) => void): Promise<DescribeLogstashInstanceOperationsResponse>;
    /**
     * 集群续费询价接口，续费前通过调用该接口，可获取集群续费的价格。
     */
    InquirePriceRenewInstance(req: InquirePriceRenewInstanceRequest, cb?: (error: string, rep: InquirePriceRenewInstanceResponse) => void): Promise<InquirePriceRenewInstanceResponse>;
}
