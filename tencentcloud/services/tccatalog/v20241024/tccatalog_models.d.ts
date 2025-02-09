/**
 * DescribeTccCatalog请求参数结构体
 */
export interface DescribeTccCatalogRequest {
    /**
     * 数据目录Id
     */
    CatalogId?: string;
}
/**
 * 网络配置信息
 */
export interface NetWork {
    /**
     * vpc实例id
     */
    VpcId?: string;
    /**
     * vpc网段
     */
    VpcCidrBlock?: string;
    /**
     * 子网实例id
     */
    SubnetId?: string;
    /**
     * 子网网段
     */
    SubnetCidrBlock?: string;
    /**
     * 服务clbip
     */
    ClbIp?: string;
    /**
     * 服务clbPort
     */
    ClbPort?: string;
}
/**
 * Tcc数据目录信息集合
 */
export interface TccCatalogSet {
    /**
     * 数据目录唯一id
     */
    Id?: string;
    /**
     * 数据目录名字
     */
    Name?: string;
    /**
     * 数据目录类型,当前支持：TCC-HIVE
     */
    Type?: string;
    /**
     * 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5
     */
    Status?: number;
    /**
     * 操作人uin
     */
    Operator?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
}
/**
 * Tcc数据目录信息
 */
export interface TccCatalogConfig {
    /**
     * 数据目录唯一id
     */
    Id?: string;
    /**
     * 数据目录名字
     */
    Name?: string;
    /**
     * 数据目录类型,当前支持：TCC-HIVE
     */
    Type?: string;
    /**
     * 描述信息
     */
    Comment?: string;
    /**
     * 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5
     */
    Status?: number;
    /**
     * Tcc数据目录连接信息
     */
    Connection?: TccConnectionConfig;
    /**
     * 操作人uin
     */
    Operator?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
}
/**
 * Tcc数据目录连接配置
 */
export interface TccConnection {
    /**
     * 引擎终端节点服务Id
     */
    EndpointServiceId?: string;
    /**
     * 元数据连接串
     */
    MetaStoreUrl?: string;
    /**
     * 网络信息
     */
    NetWork?: NetWork;
    /**
     * hive版本
     */
    HiveVersion?: string;
    /**
     * hive location
     */
    Location?: string;
    /**
     * HMS终端节点服务
     */
    HmsEndpointServiceId?: string;
}
/**
 * DescribeTccCatalogs请求参数结构体
 */
export interface DescribeTccCatalogsRequest {
    /**
     * 数据目录Id
     */
    CatalogId?: string;
    /**
     * 数据目录名称
     */
    Name?: string;
    /**
     * 数据目录类型,当前支持：TCC-HIVE
     */
    Type?: string;
    /**
     * 状态信息：注册中0，待测试1，连接成功2，连接失败3，删除中4，已删除5
     */
    Status?: number;
    /**
     * 操作人uin
     */
    Operator?: string;
}
/**
 * BindTccVpcEndPointServiceWhiteList返回参数结构体
 */
export interface BindTccVpcEndPointServiceWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AcceptTccVpcEndPointConnect返回参数结构体
 */
export interface AcceptTccVpcEndPointConnectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindTccVpcEndPointServiceWhiteList请求参数结构体
 */
export interface BindTccVpcEndPointServiceWhiteListRequest {
    /**
     * 终端节点服务Id
     */
    EndPointServiceId?: string;
    /**
     * 需要开白的用户Uin
     */
    UserUin?: string;
    /**
     * 用户描述
     */
    Description?: string;
}
/**
 * AcceptTccVpcEndPointConnect请求参数结构体
 */
export interface AcceptTccVpcEndPointConnectRequest {
    /**
     * 终端节点服务Id
     */
    EndPointServiceId?: string;
    /**
     * 终端节点id
     */
    EndPointId?: Array<string>;
    /**
     * 是否接受连接
     */
    AcceptFlag?: boolean;
}
/**
 * Tcc数据目录连接信息
 */
export interface TccConnectionConfig {
    /**
     * Tcc数据目录连接配置
     */
    TccHive?: TccConnection;
}
/**
 * DescribeTccCatalogs返回参数结构体
 */
export interface DescribeTccCatalogsResponse {
    /**
     * 数据目录列表
     */
    TccCatalogSet?: Array<TccCatalogSet>;
    /**
     * 总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTccCatalog返回参数结构体
 */
export interface DescribeTccCatalogResponse {
    /**
     * Tcc数据目录信息
     */
    TccCatalog?: TccCatalogConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
