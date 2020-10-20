/**
 * 迁移目的信息
 */
export interface DstInfo {
    /**
      * 迁移目的地域
      */
    Region?: string;
    /**
      * 迁移目的Ip
      */
    Ip?: string;
    /**
      * 迁移目的端口
      */
    Port?: string;
    /**
      * 迁移目的实例Id
      */
    InstanceId?: string;
}
/**
 * 迁移源信息
 */
export interface SrcInfo {
    /**
      * 迁移源地域
      */
    Region?: string;
    /**
      * 迁移源Ip
      */
    Ip?: string;
    /**
      * 迁移源端口
      */
    Port?: string;
    /**
      * 迁移源实例Id
      */
    InstanceId?: string;
}
/**
 * DescribeMigrationTask请求参数结构体
 */
export interface DescribeMigrationTaskRequest {
    /**
      * 任务ID，例如msp-jitoh33n
      */
    TaskId: string;
}
/**
 * 时间对象
 */
export interface TimeObj {
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
}
/**
 * ModifyMigrationTaskBelongToProject请求参数结构体
 */
export interface ModifyMigrationTaskBelongToProjectRequest {
    /**
      * 任务ID，例如msp-jitoh33n
      */
    TaskId: string;
    /**
      * 项目ID，例如10005
      */
    ProjectId: number;
}
/**
 * 迁移详情列表
 */
export interface TaskStatus {
    /**
      * 迁移状态
      */
    Status: string;
    /**
      * 迁移进度
      */
    Progress: string;
    /**
      * 迁移日期
      */
    UpdateTime: string;
}
/**
 * ModifyMigrationTaskStatus返回参数结构体
 */
export interface ModifyMigrationTaskStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListMigrationTask请求参数结构体
 */
export interface ListMigrationTaskRequest {
    /**
      * 记录起始数，默认值为0
      */
    Offset?: number;
    /**
      * 记录条数，默认值为10
      */
    Limit?: number;
    /**
      * 项目ID，默认值为空
      */
    ProjectId?: number;
}
/**
 * DeregisterMigrationTask返回参数结构体
 */
export interface DeregisterMigrationTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 列表类型
 */
export interface Project {
    /**
      * 项目ID
      */
    ProjectId: number;
    /**
      * 项目名称
      */
    ProjectName: string;
}
/**
 * ModifyMigrationTaskBelongToProject返回参数结构体
 */
export interface ModifyMigrationTaskBelongToProjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListMigrationProject返回参数结构体
 */
export interface ListMigrationProjectResponse {
    /**
      * 项目列表
      */
    Projects?: Array<Project>;
    /**
      * 项目总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 迁移任务类别
 */
export interface Task {
    /**
      * 任务Id
      */
    TaskId: string;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 迁移类型
      */
    MigrationType: string;
    /**
      * 迁移状态
      */
    Status: string;
    /**
      * 项目Id
      */
    ProjectId: number;
    /**
      * 项目名称
      */
    ProjectName: string;
    /**
      * 迁移源信息
      */
    SrcInfo: SrcInfo;
    /**
      * 迁移时间信息
      */
    MigrationTimeLine: TimeObj;
    /**
      * 状态更新时间
      */
    Updated: string;
    /**
      * 迁移目的信息
      */
    DstInfo: DstInfo;
}
/**
 * RegisterMigrationTask返回参数结构体
 */
export interface RegisterMigrationTaskResponse {
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
 * ModifyMigrationTaskStatus请求参数结构体
 */
export interface ModifyMigrationTaskStatusRequest {
    /**
      * 任务状态，取值为unstart，migrating，finish，fail之一，分别代表该迁移任务状态为迁移未开始，迁移中，迁移完成，迁移失败
      */
    Status: string;
    /**
      * 任务ID，例如msp-jitoh33n
      */
    TaskId: string;
}
/**
 * ListMigrationProject请求参数结构体
 */
export interface ListMigrationProjectRequest {
    /**
      * 记录起始数，默认值为0
      */
    Offset?: number;
    /**
      * 返回条数，默认值为500
      */
    Limit?: number;
}
/**
 * DeregisterMigrationTask请求参数结构体
 */
export interface DeregisterMigrationTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * ListMigrationTask返回参数结构体
 */
export interface ListMigrationTaskResponse {
    /**
      * 记录总条数
      */
    TotalCount?: number;
    /**
      * 迁移任务列表
      */
    Tasks?: Array<Task>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMigrationTask返回参数结构体
 */
export interface DescribeMigrationTaskResponse {
    /**
      * 迁移详情列表
      */
    TaskStatus?: Array<TaskStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RegisterMigrationTask请求参数结构体
 */
export interface RegisterMigrationTaskRequest {
    /**
      * 任务类型，取值database（数据库迁移）、file（文件迁移）、host（主机迁移）
      */
    TaskType: string;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 服务提供商名称
      */
    ServiceSupplier: string;
    /**
      * 迁移任务创建时间
      */
    CreateTime: string;
    /**
      * 迁移任务更新时间
      */
    UpdateTime: string;
    /**
      * 迁移类别，如数据库迁移中mysql:mysql代表从mysql迁移到mysql，文件迁移中oss:cos代表从阿里云oss迁移到腾讯云cos
      */
    MigrateClass: string;
    /**
      * 迁移任务源信息
      */
    SrcInfo?: SrcInfo;
    /**
      * 迁移任务目的信息
      */
    DstInfo?: DstInfo;
    /**
      * 源实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
      */
    SrcAccessType?: string;
    /**
      * 源实例数据库类型，数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一
      */
    SrcDatabaseType?: string;
    /**
      * 目标实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
      */
    DstAccessType?: string;
    /**
      * 目标实例数据库类型,数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一
      */
    DstDatabaseType?: string;
}
