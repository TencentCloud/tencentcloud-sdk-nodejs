/**
 * DescribeConfig请求参数结构体
 */
export interface DescribeConfigRequest {
    /**
     * 配置名称
     */
    Name: string;
}
/**
 * DescribeWorkspaces请求参数结构体
 */
export interface DescribeWorkspacesRequest {
    /**
     * 工作空间名称过滤条件
     */
    Name?: string;
}
/**
 * 环境变量
 */
export interface Env {
    /**
     * 环境变量 key
     */
    Name: string;
    /**
     * 环境变量 value
     */
    Value: string;
}
/**
 * RunWorkspace请求参数结构体
 */
export interface RunWorkspaceRequest {
    /**
     * 工作空间 SpaceKey
     */
    SpaceKey: string;
}
/**
 * CreateWorkspaceToken返回参数结构体
 */
export interface CreateWorkspaceTokenResponse {
    /**
     * 访问工作空间临时凭证
     */
    Token?: string;
    /**
     * token 过期时间
     */
    ExpiredTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Git 仓库
 */
export interface GitRepository {
    /**
     * Git 仓库地址
     */
    Url: string;
    /**
     * Git 仓库分支名或 Tag 名
     */
    Branch?: string;
}
/**
 * CreateWorkspaceToken请求参数结构体
 */
export interface CreateWorkspaceTokenRequest {
    /**
     * 工作空间 SpaceKey
     */
    SpaceKey: string;
    /**
     * token过期时间，单位是秒，默认 3600
     */
    TokenExpiredLimitSec?: number;
    /**
     * token 授权策略，可选值为 workspace-run-only, all。默认为 workspace-run-only
     */
    Policies?: Array<string>;
}
/**
 * CreateWorkspace请求参数结构体
 */
export interface CreateWorkspaceRequest {
    /**
     * 工作空间名称, 长度限制 2~64
     */
    Name: string;
    /**
     * 工作空间描述, 长度限制 0~255
     */
    Description?: string;
    /**
     * 工作空间规格。Standard: 2C4G, Calculation: 4C8G, Profession: 8C16G. 默认是 Standard。
     */
    Specs?: string;
    /**
     * 工作空间基础镜像名称, 默认会使用 All In One 镜像, 长度限制 1~255
     */
    Image?: string;
    /**
     * Git 仓库. 工作空间启动时会自动克隆该仓库
     */
    Repository?: GitRepository;
    /**
     * 环境变量. 会被注入到工作空间中
     */
    Envs?: Array<Env>;
    /**
     * 预装插件. 工作空间启动时, 会自动安装这些插件。长度限制: 0~10
     */
    Extensions?: Array<string>;
    /**
     * 工作空间生命周期钩子.  分为三个阶段 init, start, destroy. 分别表示工作空间数据初始化阶段, 工作空间启动阶段, 工作空间关闭阶段.  用户可以自定义 shell 命令.
     */
    Lifecycle?: LifeCycle;
    /**
     * 应用名称
     */
    TenantAppId?: number;
    /**
     * 用户UIN
     */
    TenantUin?: string;
    /**
     * VPCID
     */
    TenantUniqVpcId?: string;
    /**
     * 子网ID
     */
    TenantSubnetId?: string;
    /**
     * 地域
     */
    Region?: string;
}
/**
 * RunWorkspace返回参数结构体
 */
export interface RunWorkspaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopWorkspace返回参数结构体
 */
export interface StopWorkspaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RemoveWorkspace返回参数结构体
 */
export interface RemoveWorkspaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RemoveWorkspace请求参数结构体
 */
export interface RemoveWorkspaceRequest {
    /**
     * 工作空间 SpaceKey
     */
    SpaceKey: string;
}
/**
 * 工作空间生命周期执行指令
 */
export interface LifeCycleCommand {
    /**
     * 指令描述
     */
    Name: string;
    /**
     * 具体命令
     */
    Command: string;
}
/**
 * StopWorkspace请求参数结构体
 */
export interface StopWorkspaceRequest {
    /**
     * 工作空间 SpaceKey
     */
    SpaceKey: string;
}
/**
 * 获取用户工作空间返回信息
 */
export interface WorkspaceStatusInfo {
    /**
     * 工作空间 ID
     */
    Id?: number;
    /**
     * 工作空间名称
     */
    Name?: string;
    /**
     * 工作空间标识
     */
    SpaceKey?: string;
    /**
     * 工作空间状态
     */
    Status?: string;
    /**
     * CPU数量
     */
    Cpu?: number;
    /**
     * 内存
     */
    Memory?: number;
    /**
     * 工作空间图标
     */
    Icon?: string;
    /**
     * 工作空间状态, 异常原因
     */
    StatusReason?: string;
    /**
     * 工作空间描述
     */
    Description?: string;
    /**
     * 工作空间类型
     */
    WorkspaceType?: string;
    /**
     * Git 仓库 HTTPS 地址
     */
    VersionControlUrl?: string;
    /**
     * Git 仓库引用。指定分支使用 /refs/heads/{分支名}, 指定 Tag 用 /refs/tags/{Tag名}
     */
    VersionControlRef?: string;
    /**
     * 最后操作时间
     */
    LastOpsDate?: string;
    /**
     * 创建时间
     */
    CreateDate?: string;
}
/**
 * 工作空间生命周期自动执行脚本
 */
export interface LifeCycle {
    /**
     * 工作空间首次初始化时执行
     */
    Init?: Array<LifeCycleCommand>;
    /**
     * 每次工作空间启动时执行
     */
    Start?: Array<LifeCycleCommand>;
    /**
     * 每次工作空间关闭时执行
     */
    Destroy?: Array<LifeCycleCommand>;
}
/**
 * ModifyWorkspace返回参数结构体
 */
export interface ModifyWorkspaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWorkspace返回参数结构体
 */
export interface CreateWorkspaceResponse {
    /**
     * 工作空间 SpaceKey
     */
    SpaceKey?: string;
    /**
     * 工作空间名称
     */
    Name?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 基础镜像
 */
export interface Image {
    /**
     * 镜像名称
     */
    Name?: string;
    /**
     * 镜像仓库
     */
    Repository?: string;
    /**
     * tag 列表
     */
    Tags?: Array<string>;
}
/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
    /**
     * 配置值
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImages请求参数结构体
 */
export declare type DescribeImagesRequest = null;
/**
 * DescribeWorkspaces返回参数结构体
 */
export interface DescribeWorkspacesResponse {
    /**
     * 工作空间列表
     */
    Data?: Array<WorkspaceStatusInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWorkspace请求参数结构体
 */
export interface ModifyWorkspaceRequest {
    /**
     * 工作空间 SpaceKey. 更新该工作空间的属性
     */
    SpaceKey: string;
    /**
     * 工作空间名称
     */
    Name?: string;
    /**
     * 工作空间描述
     */
    Description?: string;
    /**
     * 工作空间规格。STANDARD: 2C4G, CALCULATION: 4C8G, PROFESSION: 8C16G. 默认是 STANDARD。
     */
    Specs?: string;
    /**
     * 环境变量. 会被注入到工作空间中
     */
    Envs?: Array<Env>;
    /**
     * 预装插件. 工作空间启动时, 会自动安装这些插件
     */
    Extensions?: Array<string>;
    /**
     * 工作空间生命周期钩子.  分为三个阶段 init, start, destroy. 分别表示工作空间数据初始化阶段, 工作空间启动阶段, 工作空间关闭阶段.  用户可以自定义 shell 命令.
     */
    Lifecycle?: LifeCycle;
}
/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
    /**
     * 镜像列表
     */
    Images?: Array<Image>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
