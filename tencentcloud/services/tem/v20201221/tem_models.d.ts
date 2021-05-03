/**
 * ModifyNamespace请求参数结构体
 */
export interface ModifyNamespaceRequest {
    /**
      * 环境id
      */
    NamespaceId: string;
    /**
      * 命名空间名称
      */
    NamespaceName?: string;
    /**
      * 命名空间描述
      */
    Description?: string;
    /**
      * 私有网络名称
      */
    Vpc?: string;
    /**
      * 子网网络
      */
    SubnetIds?: Array<string>;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * 命名空间对象
 */
export interface TemNamespaceInfo {
    /**
      * 命名空间id
      */
    NamespaceId: string;
    /**
      * 渠道
      */
    Channel: string;
    /**
      * 命名空间名称
      */
    NamespaceName: string;
    /**
      * 区域名称
      */
    Region: string;
    /**
      * 命名空间描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 状态,1:已销毁;0:正常
      */
    Status: number;
    /**
      * vpc网络
      */
    Vpc: string;
    /**
      * 创建时间
      */
    CreateDate: string;
    /**
      * 修改时间
      */
    ModifyDate: string;
    /**
      * 修改人
      */
    Modifier: string;
    /**
      * 创建人
      */
    Creator: string;
    /**
      * 服务数
      */
    ServiceNum: number;
    /**
      * 运行实例数
      */
    RunInstancesNum: number;
    /**
      * 子网络
      */
    SubnetId: string;
    /**
      * tcb环境状态
      */
    TcbEnvStatus: string;
    /**
      * eks cluster status
      */
    ClusterStatus: string;
}
/**
 * 命名空间分页
 */
export interface NamespacePage {
    /**
      * 分页内容
      */
    Records: Array<TemNamespaceInfo>;
    /**
      * 总数
      */
    Total: number;
    /**
      * 条目数
      */
    Size: number;
    /**
      * 页数
      */
    Pages: number;
}
/**
 * ModifyIngress请求参数结构体
 */
export interface ModifyIngressRequest {
    /**
      * Ingress 规则配置
      */
    Ingress: IngressInfo;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * DescribeNamespaces请求参数结构体
 */
export interface DescribeNamespacesRequest {
    /**
      * 分页limit
      */
    Limit?: number;
    /**
      * 分页下标
      */
    Offset?: number;
    /**
      * 来源source
      */
    SourceChannel?: number;
}
/**
 * Cos token
 */
export interface CosToken {
    /**
      * 唯一请求 ID
      */
    RequestId: string;
    /**
      * 存储桶桶名
      */
    Bucket: string;
    /**
      * 存储桶所在区域
      */
    Region: string;
    /**
      * 临时密钥的SecretId
      */
    TmpSecretId: string;
    /**
      * 临时密钥的SecretKey
      */
    TmpSecretKey: string;
    /**
      * 临时密钥的 sessionToken
      */
    SessionToken: string;
    /**
      * 临时密钥获取的开始时间
      */
    StartTime: string;
    /**
      * 临时密钥的 expiredTime
      */
    ExpiredTime: string;
    /**
      * 包完整路径
      */
    FullPath: string;
}
/**
 * Ingress 规则 backend 配置
 */
export interface IngressRuleBackend {
    /**
      * eks service 名
      */
    ServiceName: string;
    /**
      * eks service 端口
      */
    ServicePort: number;
}
/**
 * Ingress 配置
 */
export interface IngressInfo {
    /**
      * tem namespaceId
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * eks namespace
      */
    EksNamespace: string;
    /**
      * ip version
      */
    AddressIPVersion: string;
    /**
      * ingress name
      */
    Name: string;
    /**
      * rules 配置
      */
    Rules: Array<IngressRule>;
    /**
      * clb ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClbId?: string;
    /**
      * tls 配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tls?: Array<IngressTls>;
    /**
      * eks clusterId
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId?: string;
    /**
      * clb ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip?: string;
}
/**
 * ingress tls 配置
 */
export interface IngressTls {
    /**
      * host 数组
      */
    Hosts: Array<string>;
    /**
      * secret name
      */
    SecretName: string;
}
/**
 * CreateCosToken返回参数结构体
 */
export interface CreateCosTokenResponse {
    /**
      * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: CosToken;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ingress rule 配置
 */
export interface IngressRule {
    /**
      * ingress rule value
      */
    Http: IngressRuleValue;
    /**
      * host 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Host?: string;
}
/**
 * Ingress Rule Path 配置
 */
export interface IngressRulePath {
    /**
      * path 信息
      */
    Path: string;
    /**
      * backend 配置
      */
    Backend: IngressRuleBackend;
}
/**
 * CreateCosToken请求参数结构体
 */
export interface CreateCosTokenRequest {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 服务版本ID
      */
    VersionId: string;
    /**
      * 包名
      */
    PkgName: string;
    /**
      * optType 1上传  2查询
      */
    OptType: number;
    /**
      * 来源 channel
      */
    SourceChannel?: number;
}
/**
 * ModifyNamespace返回参数结构体
 */
export interface ModifyNamespaceResponse {
    /**
      * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNamespaces返回参数结构体
 */
export interface DescribeNamespacesResponse {
    /**
      * 返回结果
      */
    Result: NamespacePage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateNamespace请求参数结构体
 */
export interface CreateNamespaceRequest {
    /**
      * 命名空间名称
      */
    NamespaceName: string;
    /**
      * 私有网络名称
      */
    Vpc: string;
    /**
      * 子网列表
      */
    SubnetIds: Array<string>;
    /**
      * 命名空间描述
      */
    Description?: string;
    /**
      * K8s version
      */
    K8sVersion?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * ModifyIngress返回参数结构体
 */
export interface ModifyIngressResponse {
    /**
      * 创建成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Ingress Rule Value 配置
 */
export interface IngressRuleValue {
    /**
      * rule 整体配置
      */
    Paths: Array<IngressRulePath>;
}
/**
 * CreateNamespace返回参数结构体
 */
export interface CreateNamespaceResponse {
    /**
      * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
