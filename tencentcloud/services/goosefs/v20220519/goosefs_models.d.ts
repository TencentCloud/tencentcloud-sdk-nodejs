/**
 * DescribeDataRepositoryTaskStatus返回参数结构体
 */
export interface DescribeDataRepositoryTaskStatusResponse {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败)
     */
    Status?: number;
    /**
     * 已完成的文件数量
     */
    FinishedFileNumber?: number;
    /**
     * 已完成的数据量
     */
    FinishedCapacity?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterRoleToken请求参数结构体
 */
export interface DescribeClusterRoleTokenRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 角色名
     */
    RoleName: string;
}
/**
 * 查询Client Token
 */
export interface ClientToken {
    /**
     * 节点 IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeIp?: string;
    /**
     * 挂载点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalDirectory?: string;
    /**
     * 可以访问的 GooseFS 目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GooseFSDirectory?: string;
    /**
     * token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
}
/**
 * 角色凭证
 */
export interface RoleToken {
    /**
     * 角色名
     */
    RoleName?: string;
    /**
     * 用于goosefs client/sdk等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Token?: string;
}
/**
 * DescribeClusterRoleToken返回参数结构体
 */
export interface DescribeClusterRoleTokenResponse {
    /**
     * 角色凭证
     */
    RoleTokens?: Array<RoleToken>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterRoles请求参数结构体
 */
export interface DescribeClusterRolesRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 角色名
     */
    RoleName?: string;
}
/**
 * CreateDataRepositoryTask请求参数结构体
 */
export interface CreateDataRepositoryTaskRequest {
    /**
     * 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统)
     */
    TaskType: string;
    /**
     * COS存储桶名
     */
    Bucket: string;
    /**
     * 文件系统ID
     */
    FileSystemId: string;
    /**
     * 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据
     */
    TaskPath: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 数据流通方式 MSP_AFM 手动加载  RAW_AFM 按需加载
     */
    RepositoryType?: string;
    /**
     * 文件列表下载地址，以http开头
     */
    TextLocation?: string;
}
/**
 * DescribeClusterClientToken请求参数结构体
 */
export interface DescribeClusterClientTokenRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
}
/**
 * CreateDataRepositoryTask返回参数结构体
 */
export interface CreateDataRepositoryTaskResponse {
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterRoles返回参数结构体
 */
export interface DescribeClusterRolesResponse {
    /**
     * 集群角色
     */
    ClusterRoles?: Array<ClusterRole>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDataRepositoryTaskStatus请求参数结构体
 */
export interface DescribeDataRepositoryTaskStatusRequest {
    /**
     * task id
     */
    TaskId: string;
    /**
     * file system id
     */
    FileSystemId: string;
}
/**
 * ClusterRole
 */
export interface ClusterRole {
    /**
     * 集群ID
     */
    ClusterId?: string;
    /**
     * 角色名
     */
    RoleName?: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 目录列表
     */
    DirectoryList?: Array<string>;
}
/**
 * DescribeClusterClientToken返回参数结构体
 */
export interface DescribeClusterClientTokenResponse {
    /**
     * 客户端凭证
     */
    ClientTokens?: Array<ClientToken>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
