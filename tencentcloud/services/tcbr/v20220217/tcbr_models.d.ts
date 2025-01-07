/**
 * DescribeCloudRunServers返回参数结构体
 */
export interface DescribeCloudRunServersResponse {
    /**
     * 服务列表
     */
    ServerList?: Array<ServerBaseInfo>;
    /**
     * 服务总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 代码仓库信息
 */
export interface RepositoryInfo {
    /**
     * git source
     */
    Source: string;
    /**
     * 仓库名
     */
    Repo: string;
    /**
     * 分支名
     */
    Branch: string;
}
/**
 * ReleaseGray请求参数结构体
 */
export interface ReleaseGrayRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
    /**
     * 灰度类型
     */
    GrayType: string;
    /**
     * 流量类型
     */
    TrafficType: string;
    /**
     * 流量策略
     */
    VersionFlowItems?: Array<VersionFlowInfo>;
    /**
     * 操作标识
     */
    OperatorRemark?: string;
    /**
     * 流量比例
     */
    GrayFlowRatio?: number;
}
/**
 * StorageInfo 资源信息
 */
export interface StorageInfo {
    /**
     * 资源所属地域。
  当前支持ap-shanghai
     */
    Region: string;
    /**
     * 桶名，存储资源的唯一标识
     */
    Bucket: string;
    /**
     * cdn 域名
     */
    CdnDomain: string;
    /**
     * 资源所属用户的腾讯云appId
     */
    AppId: string;
}
/**
 * DescribeEnvBaseInfo返回参数结构体
 */
export interface DescribeEnvBaseInfoResponse {
    /**
     * 环境基础信息
     */
    EnvBaseInfo?: EnvBaseInfo;
    /**
     * 是否存在
     */
    IsExist?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudRunServer请求参数结构体
 */
export interface CreateCloudRunServerRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
    /**
     * 部署信息
     */
    DeployInfo: DeployParam;
    /**
     * 服务配置信息
     */
    ServerConfig: ServerBaseConfig;
}
/**
 * 函数的信息
 */
export interface FunctionInfo {
    /**
     * 命名空间
     */
    Namespace: string;
    /**
     * 所属地域。
  当前支持ap-shanghai
     */
    Region: string;
}
/**
 * DescribeServerManageTask返回参数结构体
 */
export interface DescribeServerManageTaskResponse {
    /**
     * 是否存在
     */
    IsExist?: boolean;
    /**
     * 任务信息
     */
    Task?: ServerManageTaskInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务步骤信息
 */
export interface TaskStepInfo {
    /**
     * 步骤名
     */
    Name?: string;
    /**
     * 未启动："todo"
  运行中："running"
  失败："failed"
  成功结束："finished"
     */
    Status?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 消耗时间：秒
     */
    CostTime?: number;
    /**
     * 失败原因
     */
    FailReason?: string;
}
/**
 * DescribeCloudRunEnvs返回参数结构体
 */
export interface DescribeCloudRunEnvsResponse {
    /**
     * 环境信息列表
     */
    EnvList?: Array<EnvInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCloudRunEnvs请求参数结构体
 */
export interface DescribeCloudRunEnvsRequest {
    /**
     * 环境ID，如果传了这个参数则只返回该环境的相关信息
     */
    EnvId?: string;
    /**
     * 指定Channels字段为可见渠道列表或不可见渠道列表
  如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
     */
    IsVisible?: boolean;
    /**
     * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
     */
    Channels?: Array<string>;
}
/**
 * ReleaseGray返回参数结构体
 */
export interface ReleaseGrayResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 部署参数
 */
export interface DeployParam {
    /**
     * 部署类型：package/image/repository/pipeline/jar/war
     */
    DeployType: string;
    /**
     * 部署类型为image时传入
     */
    ImageUrl?: string;
    /**
     * 部署类型为package时传入
     */
    PackageName?: string;
    /**
     * 部署类型为package时传入
     */
    PackageVersion?: string;
    /**
     * 部署备注
     */
    DeployRemark?: string;
    /**
     * 代码仓库信息
     */
    RepoInfo?: RepositoryInfo;
    /**
     * 无Dockerfile时填写
     */
    BuildPacks?: BuildPacksInfo;
    /**
     * 发布类型 GRAY | FULL
     */
    ReleaseType?: string;
}
/**
 * OperateServerManage请求参数结构体
 */
export interface OperateServerManageRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
    /**
     * 任报Id
     */
    TaskId: number;
    /**
     * 操作类型:cancel | go_back | done
     */
    OperateType: string;
    /**
     * 操作标识
     */
    OperatorRemark?: string;
}
/**
 * 静态CDN资源信息
 */
export interface StaticStorageInfo {
    /**
     * 静态CDN域名
     */
    StaticDomain: string;
    /**
     * 静态CDN默认文件夹，当前为根目录
     */
    DefaultDirName: string;
    /**
     * 资源状态(process/online/offline/init)
     */
    Status: string;
    /**
     * cos所属区域
     */
    Region: string;
    /**
     * bucket信息
     */
    Bucket: string;
}
/**
 * UpdateCloudRunServer请求参数结构体
 */
export interface UpdateCloudRunServerRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
    /**
     * 部署信息
     */
    DeployInfo: DeployParam;
    /**
     * 服务配置信息
     */
    ServerConfig: ServerBaseConfig;
}
/**
 * 云日志服务相关信息
 */
export interface LogServiceInfo {
    /**
     * log名
     */
    LogsetName: string;
    /**
     * log-id
     */
    LogsetId: string;
    /**
     * topic名
     */
    TopicName: string;
    /**
     * topic-id
     */
    TopicId: string;
    /**
     * cls日志所属地域
     */
    Region: string;
}
/**
 * OperateServerManage返回参数结构体
 */
export interface OperateServerManageResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCloudRunServerDetail请求参数结构体
 */
export interface DescribeCloudRunServerDetailRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
}
/**
 * 数据库资源信息
 */
export interface DatabasesInfo {
    /**
     * 数据库唯一标识
     */
    InstanceId: string;
    /**
     * 状态。包含以下取值：
  <li>INITIALIZING：资源初始化中</li>
  <li>RUNNING：运行中，可正常使用的状态</li>
  <li>UNUSABLE：禁用，不可用</li>
  <li>OVERDUE：资源过期</li>
     */
    Status: string;
    /**
     * 所属地域。
  当前支持ap-shanghai
     */
    Region: string;
}
/**
 * DescribeCloudRunServers请求参数结构体
 */
export interface DescribeCloudRunServersRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 默认为9， 最大为30
  不传或传0时 取默认9
  大于30时取30
     */
    PageSize?: number;
    /**
     * 不传或传0时 会默认为1
     */
    PageNum?: number;
}
/**
 * cls日志信息
 */
export interface ClsInfo {
    /**
     * cls所属地域
     */
    ClsRegion: string;
    /**
     * cls日志集ID
     */
    ClsLogsetId: string;
    /**
     * cls日志主题ID
     */
    ClsTopicId: string;
    /**
     * 创建时间
     */
    CreateTime: string;
}
/**
 * DescribeServerManageTask请求参数结构体
 */
export interface DescribeServerManageTaskRequest {
    /**
     * 环境Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
    /**
     * 任务Id
     */
    TaskId: number;
    /**
     * 操作标识
     */
    OperatorRemark?: string;
}
/**
 * 扩缩容入参
 */
export interface HpaPolicy {
    /**
     * 扩缩容类型
     */
    PolicyType: string;
    /**
     * 扩缩容阈值
     */
    PolicyThreshold: number;
}
/**
 * 在线版本信息
 */
export interface OnlineVersionInfo {
    /**
     * 版本名
     */
    VersionName?: string;
    /**
     * 镜像url
     */
    ImageUrl?: string;
    /**
     * 流量
     */
    FlowRatio?: string;
}
/**
 * 服务基础配置信息
 */
export interface ServerBaseConfig {
    /**
     * 环境 Id
     */
    EnvId: string;
    /**
     * 服务名
     */
    ServerName: string;
    /**
     * 是否开启公网访问
     */
    OpenAccessTypes: Array<string>;
    /**
     * Cpu 规格
     */
    Cpu: number;
    /**
     * Mem 规格
     */
    Mem: number;
    /**
     * 最小副本数
     */
    MinNum: number;
    /**
     * 最大副本数
     */
    MaxNum: number;
    /**
     * 扩缩容配置
     */
    PolicyDetails: Array<HpaPolicy>;
    /**
     * 日志采集路径
     */
    CustomLogs: string;
    /**
     * 环境变量
     */
    EnvParams: string;
    /**
     * 延迟检测时间
     */
    InitialDelaySeconds: number;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 服务端口
     */
    Port: number;
    /**
     * 是否有Dockerfile
     */
    HasDockerfile: boolean;
    /**
     * Dockerfile 文件名
     */
    Dockerfile: string;
    /**
     * 构建目录
     */
    BuildDir: string;
    /**
     * 日志类型: none | default | custom
     */
    LogType?: string;
    /**
     * cls setId
     */
    LogSetId?: string;
    /**
     * cls 主题id
     */
    LogTopicId?: string;
    /**
     * 解析类型：json ｜ line
     */
    LogParseType?: string;
    /**
     * 服务标签, function: 函数托管
     */
    Tag?: string;
}
/**
 * DescribeCloudRunServerDetail返回参数结构体
 */
export interface DescribeCloudRunServerDetailResponse {
    /**
     * 服务基本信息
     */
    BaseInfo?: ServerBaseInfo;
    /**
     * 服务配置信息
     */
    ServerConfig?: ServerBaseConfig;
    /**
     * 在线版本信息
     */
    OnlineVersionInfos?: Array<OnlineVersionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudRunEnv返回参数结构体
 */
export interface CreateCloudRunEnvResponse {
    /**
     * 环境Id
     */
    EnvId?: string;
    /**
     * 后付费订单号
     */
    TranId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 环境基础信息
 */
export interface EnvBaseInfo {
    /**
     * 环境Id
     */
    EnvId?: string;
    /**
     * 套餐类型：Trial ｜ Standard ｜ Professional ｜ Enterprise
     */
    PackageType?: string;
    /**
     * VPC Id
     */
    VpcId?: string;
    /**
     * 环境创建时间
     */
    CreateTime?: string;
    /**
     * 环境别名
     */
    Alias?: string;
    /**
     * 环境状态
     */
    Status?: string;
    /**
     * 环境地域
     */
    Region?: string;
    /**
     * 环境类型 tcbr ｜ run
     */
    EnvType?: string;
    /**
     * 子网id
     */
    SubnetIds?: string;
}
/**
 * 服务基本信息
 */
export interface ServerBaseInfo {
    /**
     * 服务名
     */
    ServerName?: string;
    /**
     * 默认服务域名
     */
    DefaultDomainName?: string;
    /**
     * 自定义域名
     */
    CustomDomainName?: string;
    /**
     * 服务状态：running/deploying/deploy_failed
     */
    Status?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 公网访问类型
     */
    AccessTypes?: Array<string>;
    /**
     * 展示自定义域名
     */
    CustomDomainNames?: Array<string>;
    /**
     * 服务类型: function 云函数2.0；container 容器服务
     */
    ServerType?: string;
}
/**
 * 环境信息
 */
export interface EnvInfo {
    /**
     * 账户下该环境唯一标识
     */
    EnvId?: string;
    /**
     * 环境来源。包含以下取值：
  <li>miniapp：微信小程序</li>
  <li>qcloud ：腾讯云</li>
     */
    Source?: string;
    /**
     * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
     */
    Alias?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 最后修改时间
     */
    UpdateTime?: string;
    /**
     * 环境状态。包含以下取值：
  <li>NORMAL：正常可用</li>
  <li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
     */
    Status?: string;
    /**
     * 是否到期自动降为免费版
     */
    IsAutoDegrade?: boolean;
    /**
     * 环境渠道
     */
    EnvChannel?: string;
    /**
     * 支付方式。包含以下取值：
  <li> prepayment：预付费</li>
  <li> postpaid：后付费</li>
     */
    PayMode?: string;
    /**
     * 是否为默认环境
     */
    IsDefault?: boolean;
    /**
     * 环境所属地域
     */
    Region?: string;
    /**
     * 环境类型：baas, run, hosting, weda,tcbr
     */
    EnvType?: string;
    /**
     * 数据库列表
     */
    Databases?: Array<DatabasesInfo>;
    /**
     * 存储列表
     */
    Storages?: Array<StorageInfo>;
    /**
     * 函数列表
     */
    Functions?: Array<FunctionInfo>;
    /**
     * 云日志服务列表
     */
    LogServices?: Array<LogServiceInfo>;
    /**
     * 静态资源信息
     */
    StaticStorages?: Array<StaticStorageInfo>;
    /**
     * 环境标签列表
     */
    Tags?: Array<Tag>;
    /**
     * 自定义日志服务
     */
    CustomLogServices?: Array<ClsInfo>;
    /**
     * tcb产品套餐ID，参考DescribePackages接口的返回值。
     */
    PackageId?: string;
    /**
     * 套餐中文名称，参考DescribePackages接口的返回值。
     */
    PackageName?: string;
}
/**
 * 标签键值对
 */
export interface Tag {
    /**
     * 标签键
     */
    Key: string;
    /**
     * 标签值
     */
    Value: string;
}
/**
 * DescribeEnvBaseInfo请求参数结构体
 */
export interface DescribeEnvBaseInfoRequest {
    /**
     * 环境 Id
     */
    EnvId: string;
}
/**
 * CreateCloudRunServer返回参数结构体
 */
export interface CreateCloudRunServerResponse {
    /**
     * 一键部署任务Id，微信云托管，暂时用不到
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 版本流量信息
 */
export interface VersionFlowInfo {
    /**
     * 版本名
     */
    VersionName: string;
    /**
     * 是否默认版本
     */
    IsDefaultPriority: boolean;
    /**
     * 流量比例
     */
    FlowRatio?: number;
    /**
     * 测试KV值
     */
    UrlParam?: ObjectKV;
    /**
     * 权重
     */
    Priority?: number;
}
/**
 * UpdateCloudRunServer返回参数结构体
 */
export interface UpdateCloudRunServerResponse {
    /**
     * 环境Id
     */
    EnvId?: string;
    /**
     * 一键部署任务Id，暂时用不到
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 通用Key Value
 */
export interface ObjectKV {
    /**
     * 键值对Key
     */
    Key: string;
    /**
     * 键值对Value
     */
    Value: string;
}
/**
 * BuildPacks信息
 */
export interface BuildPacksInfo {
    /**
     * 基础镜像
     */
    BaseImage: string;
    /**
     * 启动命令
     */
    EntryPoint: string;
    /**
     * 语言
     */
    RepoLanguage: string;
    /**
     * 上传文件名
     */
    UploadFilename: string;
    /**
     * 语言版本
     */
    LanguageVersion?: string;
}
/**
 * CreateCloudRunEnv请求参数结构体
 */
export interface CreateCloudRunEnvRequest {
    /**
     * Trial,Standard,Professional,Enterprise
     */
    PackageType: string;
    /**
     * 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符
     */
    Alias?: string;
    /**
     * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
     */
    FreeQuota?: string;
    /**
     * 订单标记。建议使用方统一转大小写之后再判断。
  QuickStart：快速启动来源
  Activity：活动来源
     */
    Flag?: string;
    /**
     * 私有网络Id
     */
    VpcId?: string;
    /**
     * 子网列表
     */
    SubNetIds?: Array<string>;
    /**
     * 请求key 用于防重
     */
    ReqKey?: string;
    /**
     * 来源：wechat | cloud | weda
     */
    Source?: string;
    /**
     * 渠道：wechat | cloud | weda
     */
    Channel?: string;
    /**
     * 环境ID 云开发平台必填
     */
    EnvId?: string;
}
/**
 * 服务管理任务信息
 */
export interface ServerManageTaskInfo {
    /**
     * 任务Id
     */
    Id?: number;
    /**
     * 环境Id
     */
    EnvId?: string;
    /**
     * 服务名
     */
    ServerName?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 变更类型
     */
    ChangeType?: string;
    /**
     * 发布类型
     */
    ReleaseType?: string;
    /**
     * 部署类型
     */
    DeployType?: string;
    /**
     * 上一个版本名
     */
    PreVersionName?: string;
    /**
     * 版本名
     */
    VersionName?: string;
    /**
     * 流水线Id
     */
    PipelineId?: number;
    /**
     * 流水线任务Id
     */
    PipelineTaskId?: number;
    /**
     * 发布单Id
     */
    ReleaseId?: number;
    /**
     * 状态
     */
    Status?: string;
    /**
     * 步骤信息
     */
    Steps?: Array<TaskStepInfo>;
    /**
     * 失败原因
     */
    FailReason?: string;
    /**
     * 操作标识
     */
    OperatorRemark?: string;
}
