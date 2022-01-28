/**
 * 数据源授权信息
 */
export interface TicketAuthInfo {
    /**
      * 授权用户
      */
    AuthUser: string;
}
/**
 * DescribeDataSourceList请求参数结构体
 */
export interface DescribeDataSourceListRequest {
    /**
      * 每页条数
      */
    PageSize: number;
    /**
      * 页码
      */
    PageIndex: number;
    /**
      * 环境 id
      */
    EnvId: string;
    /**
      * 应用id数组
      */
    Appids?: Array<string>;
    /**
      * 数据源id数组
      */
    DataSourceIds?: Array<string>;
    /**
      * 数据源名称数组
      */
    DataSourceNames?: Array<string>;
    /**
      * 数据源类型 database-自建数据源；cloud-integration-自定义数据源
      */
    DataSourceType?: string;
    /**
      * 数据源模糊查询参数
      */
    QueryOption?: DataSourceQueryOption;
    /**
      * 数据源视图Id数组
      */
    ViewIds?: Array<string>;
    /**
      * 查询未关联应用的数据源，0:未关联，该参数配合 AppIds 参数一块使用
      */
    AppLinkStatus?: number;
    /**
      * 查询应用绑定数据源: 0: 否,1: 是
      */
    QueryBindToApp?: number;
    /**
      * 查询连接器 0 数据模型 1 连接器 2 自定义连接器
      */
    QueryConnector?: number;
    /**
      * 查询数据源黑名单机制，比如不想要系统数据源["system"]
      */
    NotQuerySubTypeList?: Array<string>;
}
/**
 * 数据源模糊查询参数
 */
export interface DataSourceQueryOption {
    /**
      * 数据源标识模糊匹配
      */
    LikeName?: string;
    /**
      * 数据源名称模糊匹配
      */
    LikeTitle?: string;
}
/**
 * 数据源关联App信息
 */
export interface DataSourceLinkApp {
    /**
      * 应用Id
      */
    Id: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Title: string;
    /**
      * 是否编辑状态使用
注意：此字段可能返回 null，表示取不到有效值。
      */
    EditStatusUse: number;
    /**
      * 是否预览状态使用
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreviewStatusUse: number;
    /**
      * 是否正式状态使用
注意：此字段可能返回 null，表示取不到有效值。
      */
    OnlineStatusUse: number;
}
/**
 * 数据源详情列表
 */
export interface DataSourceDetail {
    /**
      * 数据源 ID
      */
    Id: string;
    /**
      * 数据源名称
      */
    Title: string;
    /**
      * 数据源标识
      */
    Name: string;
    /**
      * 数据源类型
      */
    Type: string;
    /**
      * 数据源描述
      */
    Description: string;
    /**
      * 数据源配置
      */
    Schema: string;
    /**
      * cms 项目状态, 0: 重新获取详情信息，1： 不需要重新获取详情信息
      */
    CmsProject: string;
    /**
      * 当前为环境 id
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgId: string;
    /**
      * schema 版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchemaVersion: string;
    /**
      * 创建者用户 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatorId: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
    /**
      * 环境 id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId: string;
    /**
      * 版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSourceVersion: string;
    /**
      * 所属应用数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppUsageList: Array<DataSourceLinkApp>;
    /**
      * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublishedAt: string;
    /**
      * 子数据源ids
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChildDataSourceIds: Array<string>;
    /**
      * 数据源发布信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Fun: string;
    /**
      * 云函数状态 1 Active 2 Creating 3 Updating 4 Deleting  9 Deleted 11 CreatFailed  12 UpdateFailed 13 DeleteFailed 21 UpdateTimeOut
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScfStatus: number;
    /**
      * 自定义方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    Methods: string;
    /**
      * 子数据源名数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChildDataSourceNames: Array<string>;
    /**
      * 是否旧数据源 1 新 0 旧
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsNewDataSource: number;
    /**
      * 数据源视图id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewId: string;
    /**
      * 数据源属性配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Configuration: string;
    /**
      * 外部数据源模板code
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateCode: string;
    /**
      * 外部数据源模板来源 0 空模板 1 腾讯文档 2 腾讯会议 3 企业微信 4 微信电商
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source: number;
    /**
      * 发布版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublishVersion: string;
    /**
      * 发布视图id
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublishViewId: string;
    /**
      * 数据源子类型   "database" 标准模型 "custom-database" 自定义模型 "system" 系统模型 "connector" 连接器 "custom-connector" 自定义连接器 "hidden" 隐藏数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubType: string;
    /**
      * 授权状态  0 授权无效 1 授权有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthStatus: number;
    /**
      * 数据源授权信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthInfo: TicketAuthInfo;
}
/**
 * 数据详情列表
 */
export interface DataSourceDetailItems {
    /**
      * 数据详情列表
      */
    Rows: Array<DataSourceDetail>;
    /**
      * 数据源列表总个数
      */
    Count: number;
}
/**
 * DescribeDataSourceList返回参数结构体
 */
export interface DescribeDataSourceListResponse {
    /**
      * data 数据
      */
    Data: DataSourceDetailItems;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
