/**
 * 用户自定义模板Patched参数
 */
export interface UserDefinedTemplatePatchedParams {
    /**
      * 模板来源
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source: string;
    /**
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 模板图标地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Icon?: string;
    /**
      * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description?: string;
    /**
      * 模板标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags?: Array<string>;
}
/**
 * 工作空间基本信息描述
 */
export interface WorkspaceInfoDTO {
    /**
      * 工作空间创建时间
      */
    CreateDate: string;
    /**
      * 空间key
      */
    SpaceKey: string;
    /**
      * 工作空间id
      */
    WorkspaceId: number;
}
/**
 * RecoverWorkspace返回参数结构体
 */
export interface RecoverWorkspaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWorkspaceIsReady请求参数结构体
 */
export interface DescribeWorkspaceIsReadyRequest {
    /**
      * 工作空间 spaceKey
      */
    SpaceKey: string;
}
/**
 * DescribeWorkspaceStatus请求参数结构体
 */
export interface DescribeWorkspaceStatusRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 空间标识
      */
    SpaceKey: string;
}
/**
 * CreateCustomizeTemplates请求参数结构体
 */
export interface CreateCustomizeTemplatesRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 无
      */
    UserDefinedTemplateParams: UserDefinedTemplateParams;
}
/**
 * RecoverWorkspace请求参数结构体
 */
export interface RecoverWorkspaceRequest {
    /**
      * 无
      */
    CloudStudioSessionTeam: string;
    /**
      * 无
      */
    SpaceKey: string;
}
/**
 * DescribeCustomizeTemplatesById请求参数结构体
 */
export interface DescribeCustomizeTemplatesByIdRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 模板ID
      */
    Id: number;
}
/**
 * CreateWorkspaceByVersionControl请求参数结构体
 */
export interface CreateWorkspaceByVersionControlRequest {
    /**
      * 工作空间结构
      */
    WorkspaceDTO: WorkspaceDTO;
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
}
/**
 * ModifyCustomizeTemplateVersionControl请求参数结构体
 */
export interface ModifyCustomizeTemplateVersionControlRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 模板ID
      */
    TemplateId: number;
    /**
      * 仓库地址
      */
    Url?: string;
    /**
      * 代码仓库分支/标签
      */
    Ref?: string;
    /**
      * 代码仓库 ref 类型
      */
    RefType?: string;
}
/**
 * 工作空间资源结构
 */
export interface WorkspaceResourceDTO {
    /**
      * CPU核心数
      */
    CpuCoreNumber: number;
    /**
      * 一般内存
      */
    NormalMemory: number;
    /**
      * 系统存储
      */
    SystemStorage: number;
    /**
      * 用户存储
      */
    UserStorage: number;
    /**
      * GPU数
      */
    GpuNumber: number;
    /**
      * GPU内存
      */
    GpuMemory: number;
}
/**
 * CreateCustomizeTemplates返回参数结构体
 */
export interface CreateCustomizeTemplatesResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: WorkspaceTemplateInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取工作空间临时访问 token 出参
 */
export interface WorkspaceTokenInfoV0 {
    /**
      * 访问工作空间临时凭证
      */
    Token: string;
    /**
      * token 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpiredTime: string;
}
/**
 * 可用镜像模板列表
 */
export interface ImageUserDTO {
    /**
      * 镜像模板ID
      */
    Id: string;
    /**
      * 镜像模板名称
      */
    Name: string;
    /**
      * Tag时间
      */
    Tag: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 中文描述
      */
    DescriptionCN: string;
    /**
      * 图标地址
      */
    IconUrl: string;
    /**
      * 创建人
      */
    Author: string;
    /**
      * 访问状态
      */
    Visible: string;
    /**
      * 版本
      */
    WorkspaceVersion: number;
    /**
      * 分类
      */
    Sort: number;
}
/**
 * RunWorkspace请求参数结构体
 */
export interface RunWorkspaceRequest {
    /**
      * 空间标识
      */
    SpaceKey: string;
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
}
/**
 * DescribeWorkspaceStatus返回参数结构体
 */
export interface DescribeWorkspaceStatusResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: WorkspaceStatusInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkspaceByAgent请求参数结构体
 */
export interface CreateWorkspaceByAgentRequest {
    /**
      * 无
      */
    CloudStudioSessionTeam: string;
    /**
      * 无
      */
    AgentSpaceDTO: AgentSpaceDTO;
}
/**
 * DeleteCustomizeTemplatesById请求参数结构体
 */
export interface DeleteCustomizeTemplatesByIdRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 模板ID
      */
    Id: number;
}
/**
 * StopWorkspace请求参数结构体
 */
export interface StopWorkspaceRequest {
    /**
      * 空间标识
      */
    SpaceKey: string;
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 是否强制终止，true或者false
      */
    Force?: string;
}
/**
 * DescribeWorkspaceEnvList返回参数结构体
 */
export interface DescribeWorkspaceEnvListResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<ImageUserDTO>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户空间共享信息
 */
export interface WorkspaceShareInfo {
    /**
      * 共享或不共享状态
      */
    Status: boolean;
    /**
      * 是否与我共享
注意：此字段可能返回 null，表示取不到有效值。
      */
    WithMe: boolean;
    /**
      * 开始共享的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BeginDate: string;
    /**
      * 停止共享的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndDate: string;
    /**
      * 停止共享的时间
      */
    Users: Array<UserInfoRsp>;
}
/**
 * 工作空间模板信息
 */
export interface WorkspaceTemplateInfo {
    /**
      * 模板ID
      */
    Id: number;
    /**
      * 模板分类
      */
    Category: string;
    /**
      * 模板名称
      */
    Name: string;
    /**
      * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 中文描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    DescriptionEN: string;
    /**
      * 模板标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: string;
    /**
      * 模板图标地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Icon: string;
    /**
      * 默认仓库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlType: string;
    /**
      * 默认仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlUrl: string;
    /**
      * 默认仓库描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlDesc: string;
    /**
      * 默认仓库所属人
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlOwner: string;
    /**
      * 默认仓库引用地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlRef: string;
    /**
      * 默认仓库引用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlRefType: string;
    /**
      * 用户自定义仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserVersionControlUrl: string;
    /**
      * 用户自定义仓库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserVersionControlType: string;
    /**
      * 用户自定义仓库引用
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserVersionControlRef: string;
    /**
      * 用户自定义仓库引用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserVersionControlRefType: string;
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    DevFile: string;
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    PluginFile: string;
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrebuildFile: string;
    /**
      * 是否标记
      */
    Marked: boolean;
    /**
      * 标记状态
      */
    MarkAt: number;
    /**
      * 创建时间
      */
    CreateDate: string;
    /**
      * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModified: string;
    /**
      * 编号
      */
    Sort: number;
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotUid: string;
    /**
      * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: number;
    /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Author: string;
    /**
      * 是否属于当前用户
      */
    Me: boolean;
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorAvatar: string;
}
/**
 * 用户验证信息
 */
export interface UserSubInfo {
    /**
      * 团队名称
      */
    Team: string;
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 昵称
      */
    NickName: string;
    /**
      * 是否为管理员
      */
    IsAdmin: boolean;
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsTrial: boolean;
}
/**
 * DescribeWorkspaceStatusList返回参数结构体
 */
export interface DescribeWorkspaceStatusListResponse {
    /**
      * xxx
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<WorkspaceStatusInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCustomizeTemplatesFullById请求参数结构体
 */
export interface ModifyCustomizeTemplatesFullByIdRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 模板ID
      */
    Id: number;
    /**
      * 自定义模板参数
      */
    UserDefinedTemplateParams: UserDefinedTemplateParams;
}
/**
 * ModifyCustomizeTemplateVersionControl返回参数结构体
 */
export interface ModifyCustomizeTemplateVersionControlResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: WorkspaceTemplateInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户信息
 */
export interface UserInfoRsp {
    /**
      * 用户ID
      */
    Id: number;
    /**
      * 用户验证信息
      */
    AuthenticationUserInfo: UserSubInfo;
    /**
      * 头像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Avatar: string;
    /**
      * 介绍
注意：此字段可能返回 null，表示取不到有效值。
      */
    Features: string;
    /**
      * 状况
      */
    PreviewStatus: number;
}
/**
 * DescribeWorkspaceEnvList请求参数结构体
 */
export interface DescribeWorkspaceEnvListRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
}
/**
 * ModifyWorkspaceAttributes返回参数结构体
 */
export interface ModifyWorkspaceAttributesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取用户工作空间返回信息
 */
export interface WorkspaceStatusInfo {
    /**
      * 空间ID
      */
    Id: number;
    /**
      * 空间名称
      */
    Name: string;
    /**
      * 所属人
      */
    Owner: UserInfoRsp;
    /**
      * 空间标识
      */
    SpaceKey: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 最后操作时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastOpsDate: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 共享状态
      */
    Share: WorkspaceShareInfo;
    /**
      * 空间类型
      */
    WorkspaceType: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 空间版本
      */
    WorkspaceVersion: number;
    /**
      * 图标地址
      */
    ImageIcon: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateDate: string;
    /**
      * 版本控制地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlUrl: string;
    /**
      * 版本控制描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlDesc: string;
    /**
      * 版本控制引用
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlRef: string;
    /**
      * 版本控制引用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlRefType: string;
    /**
      * 版本控制类型
      */
    VersionControlType: string;
    /**
      * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId: number;
    /**
      * 快照ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotUid: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecDesc: string;
    /**
      * CPU数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu: number;
    /**
      * 内存
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: number;
}
/**
 * DescribeCustomizeTemplatesPresets请求参数结构体
 */
export interface DescribeCustomizeTemplatesPresetsRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 空间标识
      */
    SpaceKey?: string;
}
/**
 * StopWorkspace返回参数结构体
 */
export interface StopWorkspaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWorkspaceNameExist请求参数结构体
 */
export interface DescribeWorkspaceNameExistRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 工作空间名称
      */
    Name: string;
    /**
      * 工作空间ID
      */
    WorkspaceId?: string;
}
/**
 * DescribeWorkspaceStatusList请求参数结构体
 */
export interface DescribeWorkspaceStatusListRequest {
    /**
      * xxx
      */
    CloudStudioSessionTeam: string;
}
/**
 * RemoveWorkspace请求参数结构体
 */
export interface RemoveWorkspaceRequest {
    /**
      * 无
      */
    CloudStudioSessionTeam: string;
    /**
      * 无
      */
    SpaceKey: string;
    /**
      * 是否强制，true或者false
      */
    Force?: boolean;
}
/**
 * DescribeCustomizeTemplates请求参数结构体
 */
export interface DescribeCustomizeTemplatesRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
}
/**
 * 模板的预置参数
 */
export interface CustomizeTemplatesPresetsInfo {
    /**
      * 模板tag列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 模板图标列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Icons: Array<string>;
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Templates: UserDefinedTemplateParams;
}
/**
 * RunWorkspace返回参数结构体
 */
export interface RunWorkspaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomizeTemplatesById返回参数结构体
 */
export interface DescribeCustomizeTemplatesByIdResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: WorkspaceTemplateInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWorkspaceNameExist返回参数结构体
 */
export interface DescribeWorkspaceNameExistResponse {
    /**
      * 工作空间信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: WorkspaceInfoDTO;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkspaceByTemplate返回参数结构体
 */
export interface CreateWorkspaceByTemplateResponse {
    /**
      * 创建工作空间返回的信息
      */
    Data: WorkspaceInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkspaceByAgent返回参数结构体
 */
export interface CreateWorkspaceByAgentResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: WorkspaceInfoDTO;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveWorkspace返回参数结构体
 */
export interface RemoveWorkspaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkspaceTemporaryToken请求参数结构体
 */
export interface CreateWorkspaceTemporaryTokenRequest {
    /**
      * 创建工作空间凭证 DTO
      */
    WorkspaceTokenDTO: WorkspaceTokenDTO;
}
/**
 * 工作空间结构
 */
export interface WorkspaceDTO {
    /**
      * 工作空间名称
      */
    Name: string;
    /**
      * 代码来源类型
      */
    VersionControlType: string;
    /**
      * 镜像id
      */
    ImageId: number;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 工作空间版本
      */
    WorkspaceVersion: number;
    /**
      * 工作空间资源结构
      */
    WorkspaceResourceDTO: WorkspaceResourceDTO;
    /**
      * 代码仓库地址
      */
    VersionControlUrl?: string;
    /**
      * 代码Ref是分支还是标签
      */
    VersionControlRef?: string;
    /**
      * 代码Ref地址
      */
    VersionControlRefType?: string;
    /**
      * 快照Uid
      */
    SnapshotUid?: string;
    /**
      * 模板id
      */
    TemplateId?: number;
    /**
      * 价格id
      */
    PriceId?: number;
    /**
      * 初始化状态
      */
    InitializeStatus?: number;
    /**
      * 描述
      */
    VersionControlDesc?: string;
}
/**
 * ModifyCustomizeTemplatesFullById返回参数结构体
 */
export interface ModifyCustomizeTemplatesFullByIdResponse {
    /**
      * 自定义模板返回值
      */
    Data: WorkspaceTemplateInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomizeTemplates返回参数结构体
 */
export interface DescribeCustomizeTemplatesResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<WorkspaceTemplateInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkspaceByVersionControl返回参数结构体
 */
export interface CreateWorkspaceByVersionControlResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: WorkspaceInfoDTO;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCustomizeTemplatesPartById请求参数结构体
 */
export interface ModifyCustomizeTemplatesPartByIdRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 模板ID
      */
    Id: number;
    /**
      * 自定义模板Patched参数
      */
    UserDefinedTemplatePatchedParams: UserDefinedTemplatePatchedParams;
}
/**
 * DescribeWorkspaceIsReady返回参数结构体
 */
export interface DescribeWorkspaceIsReadyResponse {
    /**
      * 工作空间是否就绪
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建临时工作空间凭证 DTO
 */
export interface WorkspaceTokenDTO {
    /**
      * 工作空间 SpaceKey
      */
    SpaceKey?: string;
    /**
      * token过期时间，单位是秒，默认 3600
      */
    TokenExpiredLimitSec?: number;
}
/**
 * 用户自定义模板参数
 */
export interface UserDefinedTemplateParams {
    /**
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 模板图标地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Icon: string;
    /**
      * 模板标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 模板来源
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source: string;
    /**
      * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description?: string;
    /**
      * 模板仓库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlType?: string;
    /**
      * 模板地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionControlUrl?: string;
}
/**
 * DeleteCustomizeTemplatesById返回参数结构体
 */
export interface DeleteCustomizeTemplatesByIdResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 工作空间信息
 */
export interface WorkspaceInfo {
    /**
      * 工作空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkspaceId: number;
    /**
      * 工作空间标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpaceKey: string;
}
/**
 * CreateWorkspaceTemporaryToken返回参数结构体
 */
export interface CreateWorkspaceTemporaryTokenResponse {
    /**
      * 工作空间临时访问 token 信息
      */
    Data?: WorkspaceTokenInfoV0;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云服务器创建工作空间 DTO
 */
export interface AgentSpaceDTO {
    /**
      * 工作空间名称
      */
    Name: string;
    /**
      * 镜像id
      */
    ImageId: number;
    /**
      * 镜像名称
      */
    ImageName: string;
    /**
      * 云服务器登录名称
      */
    RemoteUser: string;
    /**
      * 云服务器登录地址
      */
    RemoteHost: string;
    /**
      * 云服务器登录端口
      */
    RemotePort: string;
    /**
      * 工作空间类型
      */
    WorkspaceType: string;
    /**
      * 工作空间版本
      */
    WorkspaceVersion: number;
    /**
      * 工作空间资源结构
      */
    WorkspaceResourceDTO: WorkspaceResourceDTO;
    /**
      * 描述
      */
    Description?: string;
}
/**
 * DescribeCustomizeTemplatesPresets返回参数结构体
 */
export interface DescribeCustomizeTemplatesPresetsResponse {
    /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: CustomizeTemplatesPresetsInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkspaceByTemplate请求参数结构体
 */
export interface CreateWorkspaceByTemplateRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 模板ID
      */
    TemplateId: number;
}
/**
 * ModifyCustomizeTemplatesPartById返回参数结构体
 */
export interface ModifyCustomizeTemplatesPartByIdResponse {
    /**
      * 自定义模板返回值
      */
    Data: WorkspaceTemplateInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyWorkspaceAttributes请求参数结构体
 */
export interface ModifyWorkspaceAttributesRequest {
    /**
      * 用户所属组
      */
    CloudStudioSessionTeam: string;
    /**
      * 工作空间ID
      */
    WorkspaceId: number;
    /**
      * 工作空间名称
      */
    Name?: string;
    /**
      * 工作空间描述
      */
    Description?: string;
    /**
      * xxx
      */
    PriceId?: number;
}
