/**
 * CheckAppidExist请求参数结构体
 */
export interface CheckAppidExistRequest {
    /**
     * 业务的appid
     */
    SDKAppid: string;
    /**
     * sub product code
     */
    Type: string;
}
/**
 * QueryResourceInfo返回参数结构体
 */
export interface QueryResourceInfoResponse {
    /**
     * 资源信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: Resource;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckAppidExist返回参数结构体
 */
export interface CheckAppidExistResponse {
    /**
     * appid是否存在
     */
    Exist: boolean;
    /**
     * 请求是否成功
     */
    HasError: boolean;
    /**
     * 出错消息
     */
    Msg: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 购买详情
 */
export interface GoodsDetail {
    /**
     * 按照四层接入的产品需要传入产品标签,例如:p_cvm
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode: string;
    /**
     * 四层定义的子产品标签,例如:sp_cvm_s1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductCode: string;
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: Array<string>;
    /**
     * 资源数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GoodsNum: number;
}
/**
 * QueryResourceInfo请求参数结构体
 */
export interface QueryResourceInfoRequest {
    /**
     * 资源id
     */
    InstanceId: string;
}
/**
 * QueryResource返回参数结构体
 */
export interface QueryResourceResponse {
    /**
     * 资源信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resources: Array<Resource>;
    /**
     * 总量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryResource请求参数结构体
 */
export interface QueryResourceRequest {
    /**
     * 0: sdk 1:material
     */
    Type: number;
    /**
     * 分页起始页
     */
    PageNumber: number;
    /**
     * 分页大小
     */
    PageSize: number;
}
/**
 * 资源信息
 */
export interface Resource {
    /**
     * 资源拥有者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UIN: string;
    /**
     * 云平台应用ID，一般来说与uin存在一一对应的关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId: number;
    /**
     * 资源id，会展示到通知内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId: string;
    /**
     * 区域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId: number;
    /**
     * 资源状态，1正常，2隔离，3销毁(如果资源已经删除或销毁，不需要返回)，4冻结/封禁
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 资源隔离时间，未隔离传"0000-00-00 00:00:00"，资源由隔离变回正常传"0000-00-00 00:00:00"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolatedTimestamp: string;
    /**
     * 资源创建时间，用于更新新购订单的资源开始时间，按时长退费时的资源结束时间取自订单的资源结束时间，
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 0后付费 1预付费 2预留实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode: number;
    /**
     * 资源名称，账单中资源别名，生命周期通知中的资源名称，不返回则通知中展示为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias: string;
    /**
     * 购买详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GoodsDetail: GoodsDetail;
    /**
     * 预付费必填 ，自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费，用户开通了预付费不停服特权也会进行自动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag: number;
    /**
     * （仅预付费）资源到期时间，无到期概念传"0000-00-00 00:00:00"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: number;
    /**
     * sdk appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SdkAppId: string;
    /**
     * app名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppName: string;
    /**
     * app的package名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageName: string;
    /**
     * 资源链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    URL: string;
    /**
     * app的entry
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Entry: string;
    /**
     * 0：sdk 1：素材
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstType: number;
    /**
     * license的秘钥
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
}
