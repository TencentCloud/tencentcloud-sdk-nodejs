/**
 * UnbindEipAcls请求参数结构体
 */
export interface UnbindEipAclsRequest {
    /**
     * 待解关联的 EIP 与 ACL列表
     */
    EipIdAclIdList: Array<EipAclMap>;
}
/**
 * eipid与aclid关联关系
 */
export interface EipAclMap {
    /**
     * EIP 实例 ID
     */
    EipId: string;
    /**
     * ACL 实例 ID
     */
    AclId: string;
}
/**
 * ModifyEipCharge返回参数结构体
 */
export interface ModifyEipChargeResponse {
    /**
     * 修改计费模式的异步任务ID，可以通过查询EIP任务状态查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEipAcl返回参数结构体
 */
export interface ModifyEipAclResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEips返回参数结构体
 */
export interface DescribeEipsResponse {
    /**
     * 返回EIP信息数组
     */
    EipSet?: Array<EipInfo>;
    /**
     * 返回EIP数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEipAcl请求参数结构体
 */
export interface ModifyEipAclRequest {
    /**
     * ACL 实例 ID
     */
    AclId: string;
    /**
     * ACL 名称
     */
    AclName?: string;
    /**
     * ACL 状态。0：无状态 1：有状态
     */
    Status?: number;
    /**
     * 规则类型（in/out）。in：入站规则 out：出站规则
     */
    Type?: string;
    /**
     * ACL规则列表
     */
    Rules?: Array<EipAclRule>;
}
/**
 * UnbindVpcIp请求参数结构体
 */
export interface UnbindVpcIpRequest {
    /**
     * Eip实例ID
     */
    EipId: string;
    /**
     * EIP归属VpcId，例如vpc-k7j1t2x1
     */
    VpcId: string;
    /**
     * 绑定的VPC内IP地址
     */
    VpcIp: string;
}
/**
 * BindRs返回参数结构体
 */
export interface BindRsResponse {
    /**
     * 绑定黑石物理机异步任务ID，可以通过DescribeEipTask查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindEipAcls返回参数结构体
 */
export interface BindEipAclsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEip请求参数结构体
 */
export interface CreateEipRequest {
    /**
     * 申请数量，默认为1, 最大 20
     */
    GoodsNum?: number;
    /**
     * EIP计费方式，flow-流量计费；bandwidth-带宽计费
     */
    PayMode?: string;
    /**
     * 带宽设定值（只在带宽计费时生效）
     */
    Bandwidth?: number;
    /**
     * EIP模式，目前支持tunnel和fullnat
     */
    SetType?: string;
    /**
     * 是否使用独占集群，0：不使用，1：使用。默认为0
     */
    Exclusive?: number;
    /**
     * EIP归属私有网络ID，例如vpc-k7j1t2x1
     */
    VpcId?: string;
    /**
     * 指定申请的IP列表
     */
    IpList?: Array<string>;
}
/**
 * eipacl规则
 */
export interface EipAclRule {
    /**
     * 源 IP
     */
    Ip: string;
    /**
     * 目标端口
     */
    Port: string;
    /**
     * 协议(TCP/UDP/ICMP/ANY)
     */
    Protocol: string;
    /**
     * 策略（accept/drop）
     */
    Action: string;
    /**
     * 备注
     */
    Description: string;
}
/**
 * UnbindHosted返回参数结构体
 */
export interface UnbindHostedResponse {
    /**
     * 异步任务ID，可以通过EipBmQueryTask查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteEipAcl请求参数结构体
 */
export interface DeleteEipAclRequest {
    /**
     * 待删除的 ACL 实例 ID
     */
    AclId: string;
}
/**
 * Eip信息
 */
export interface EipInfo {
    /**
     * EIP实例ID
     */
    EipId: string;
    /**
     * EIP名称
     */
    EipName: string;
    /**
     * EIP地址
     */
    Eip: string;
    /**
     * 运营商ID 0：电信； 1：联通； 2：移动； 3：教育网； 4：盈科； 5：BGP； 6：中国香港
     */
    IspId: number;
    /**
     * 状态 0：创建中； 1：绑定中； 2：已绑定； 3：解绑中； 4：未绑定； 6：下线中； 9：创建失败
     */
    Status: number;
    /**
     * 是否欠费隔离 1： 欠费隔离； 0： 正常。处在欠费隔离情况下的EIP不能进行任何管理操作。
     */
    Arrears: number;
    /**
     * EIP所绑定的服务器实例ID，未绑定则为空
     */
    InstanceId: string;
    /**
     * 服务器别名
     */
    InstanceAlias: string;
    /**
     * EIP解绑时间
     */
    FreeAt: string;
    /**
     * EIP创建时间
     */
    CreatedAt: string;
    /**
     * EIP更新时间
     */
    UpdatedAt: string;
    /**
     * EIP未绑定服务器时长（单位：秒）
     */
    FreeSecond: number;
    /**
     * EIP所绑定的资源类型，-1：未绑定资源；0：黑石物理机，字段对应unInstanceId；1：Nat网关，字段对应natUid；2：云服务器字段对应vpcIp; 3: 托管机器，字段对应HInstanceId, HInstanceAlias
     */
    Type: number;
    /**
     * EIP计费模式，"flow"：流量计费； "bandwidth"：带宽计费
     */
    PayMode: string;
    /**
     * EIP带宽计费模式下的带宽上限（单位：MB）
     */
    Bandwidth: number;
    /**
     * 最近一次操作变更的EIP计费模式，"flow"：流量计费； "bandwidth"：带宽计费
     */
    LatestPayMode: string;
    /**
     * 最近一次操作变更的EIP计费模式对应的带宽上限值，仅在带宽计费模式下有效（单位：MB）
     */
    LatestBandwidth: number;
    /**
     * 私有网络名称
     */
    VpcName: string;
    /**
     * EIP所绑定的NAT网关的数字ID，形如：1001,，未绑定则为空
     */
    NatId: number;
    /**
     * EIP所绑定的NAT网关实例ID，形如："nat-n47xxxxx"，未绑定则为空
     */
    NatUid: string;
    /**
     * EIP所绑定的云服务器IP(托管或者云服务器的IP），形如："10.1.1.3"。 注意：IP资源需要通过bmvpc模块注册或者申请后才可以绑定eip，接口使用申请子网IP和注册子网IP：,未绑定则为空
     */
    VpcIp: string;
    /**
     * 私有网络实例ID
     */
    VpcId: string;
    /**
     * 是否为独占类型EIP
     */
    Exclusive: number;
    /**
     * 私有网络的cidr
     */
    VpcCidr: string;
    /**
     * EIP ACL实例ID
     */
    AclId: string;
    /**
     * EIP ACL名称
     */
    AclName: string;
    /**
     * 托管机器实例ID
     */
    HInstanceId: string;
    /**
     * 托管机器别名
     */
    HInstanceAlias: string;
}
/**
 * UnbindEipAcls返回参数结构体
 */
export interface UnbindEipAclsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEipAcls返回参数结构体
 */
export interface DescribeEipAclsResponse {
    /**
     * 返回 EIPACL 列表总数
     */
    TotalCount: number;
    /**
     * EIPACL列表
     */
    EipAclList: Array<EipAcl>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEipName返回参数结构体
 */
export interface ModifyEipNameResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEipQuota返回参数结构体
 */
export interface DescribeEipQuotaResponse {
    /**
     * 能拥有的EIP个数的总配额，默认是100个
     */
    EipNumQuota?: number;
    /**
     * 当前已使用的EIP个数，包括创建中、绑定中、已绑定、解绑中、未绑定几种状态的EIP个数总和
     */
    CurrentEipNum?: number;
    /**
     * 当天申请EIP次数
     */
    DailyApplyCount?: number;
    /**
     * 每日申请EIP的次数限制
     */
    DailyApplyQuota?: number;
    /**
     * BatchApplyMax
     */
    BatchApplyMax?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UnbindRs返回参数结构体
 */
export interface UnbindRsResponse {
    /**
     * 解绑操作的异步任务ID，可以通过查询EIP任务状态查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindRs请求参数结构体
 */
export interface BindRsRequest {
    /**
     * Eip实例ID
     */
    EipId: string;
    /**
     * 物理服务器实例ID
     */
    InstanceId: string;
}
/**
 * UnbindHosted请求参数结构体
 */
export interface UnbindHostedRequest {
    /**
     * 托管机器实例ID
     */
    InstanceId: string;
    /**
     * Eip实例ID，可通过DescribeBmEip 接口返回字段中的 eipId获取。Eip和EipId参数必须要填写一个。
     */
    EipId?: string;
    /**
     * 弹性IP。Eip和EipId参数必须要填写一个。
     */
    Eip?: string;
}
/**
 * UnbindRsList返回参数结构体
 */
export interface UnbindRsListResponse {
    /**
     * 解绑操作的异步任务ID，可以通过查询EIP任务状态查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindVpcIp返回参数结构体
 */
export interface BindVpcIpResponse {
    /**
     * EIP绑定VPC网络IP异步任务ID，可以通过查询EIP任务状态查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEips请求参数结构体
 */
export interface DescribeEipsRequest {
    /**
     * EIP实例ID列表
     */
    EipIds?: Array<string>;
    /**
     * EIP IP 列表
     */
    Eips?: Array<string>;
    /**
     * 主机实例ID 列表
     */
    InstanceIds?: Array<string>;
    /**
     * EIP名称,模糊匹配
     */
    SearchKey?: string;
    /**
     * 状态列表, 默认所有
     */
    Status?: Array<number | bigint>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回EIP数量，默认 20, 最大值 100
     */
    Limit?: number;
    /**
     * 排序字段，支持： EipId,Eip,Status, InstanceId,CreatedAt
     */
    OrderField?: string;
    /**
     * 排序方式 0:递增 1:递减(默认)
     */
    Order?: number;
    /**
     * 计费模式,流量：flow，带宽：bandwidth
     */
    PayMode?: string;
    /**
     * EIP归属VpcId，例如vpc-k7j1t2x1
     */
    VpcId?: string;
    /**
     * 绑定类型，-1：未绑定，0：物理机，1：nat网关，2：虚拟IP, 3:托管机器
     */
    BindTypes?: Array<number | bigint>;
    /**
     * 独占标志，0：共享，1：独占
     */
    ExclusiveTag?: number;
    /**
     * EIP ACL实例ID
     */
    AclId?: string;
    /**
     * 搜索条件，是否绑定了EIP ACL， 0：未绑定，1：绑定
     */
    BindAcl?: number;
}
/**
 * ModifyEipName请求参数结构体
 */
export interface ModifyEipNameRequest {
    /**
     * Eip实例ID，可通过/v2/DescribeEip 接口返回字段中的 eipId获取
     */
    EipId: string;
    /**
     * EIP 实例别名
     */
    EipName: string;
}
/**
 * DeleteEip返回参数结构体
 */
export interface DeleteEipResponse {
    /**
     * 任务Id
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindHosted返回参数结构体
 */
export interface BindHostedResponse {
    /**
     * 异步任务ID，可以通过EipBmQueryTask查询任务状态
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindVpcIp请求参数结构体
 */
export interface BindVpcIpRequest {
    /**
     * Eip实例ID
     */
    EipId: string;
    /**
     * EIP归属VpcId，例如vpc-k7j1t2x1
     */
    VpcId: string;
    /**
     * 绑定的VPC内IP地址
     */
    VpcIp: string;
}
/**
 * CreateEipAcl请求参数结构体
 */
export interface CreateEipAclRequest {
    /**
     * ACL 名称
     */
    AclName: string;
    /**
     * ACL 状态 0：无状态，1：有状态
     */
    Status: number;
}
/**
 * EipAcl信息
 */
export interface EipAcl {
    /**
     * ACL 实例 ID。
     */
    AclId: string;
    /**
     * ACL 实例名称
     */
    AclName: string;
    /**
     * ACL 状态。0：无状态，1：有状态
     */
    Status: string;
    /**
     * EIPACL 创建时间
     */
    CreatedAt: string;
    /**
     * EIPACL 已关联的 eip 数目
     */
    EipNum: number;
    /**
     * 出站规则
     */
    OutRules: Array<EipAclRule>;
    /**
     * 入站规则
     */
    InRules?: Array<EipAclRule>;
}
/**
 * CreateEip返回参数结构体
 */
export interface CreateEipResponse {
    /**
     * EIP列表
     */
    EipIds: Array<string>;
    /**
     * 任务ID
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindHosted请求参数结构体
 */
export interface BindHostedRequest {
    /**
     * Eip实例ID，可通过DescribeBmEip 接口返回字段中的 eipId获取。Eip和EipId参数必须要填写一个。
     */
    EipId: string;
    /**
     * 托管机器实例ID
     */
    InstanceId: string;
}
/**
 * DescribeEipTask返回参数结构体
 */
export interface DescribeEipTaskResponse {
    /**
     * 当前任务状态码：0-成功，1-失败，2-进行中
     */
    Status: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEipCharge请求参数结构体
 */
export interface ModifyEipChargeRequest {
    /**
     * EIP计费方式，flow-流量计费；bandwidth-带宽计费
     */
    PayMode: string;
    /**
     * Eip实例ID列表
     */
    EipIds?: Array<string>;
    /**
     * 带宽设定值（只在带宽计费时生效）
     */
    Bandwidth?: number;
}
/**
 * DescribeEipQuota请求参数结构体
 */
export declare type DescribeEipQuotaRequest = null;
/**
 * DeleteEip请求参数结构体
 */
export interface DeleteEipRequest {
    /**
     * Eip实例ID列表
     */
    EipIds: Array<string>;
}
/**
 * EipId与InstanceId绑定关系
 */
export interface EipRsMap {
    /**
     * EIP实例 ID
     */
    EipId: string;
    /**
     * 黑石物理机实例ID
     */
    InstanceId: string;
}
/**
 * UnbindRsList请求参数结构体
 */
export interface UnbindRsListRequest {
    /**
     * 物理机绑定的EIP列表
     */
    EipRsList: Array<EipRsMap>;
}
/**
 * DeleteEipAcl返回参数结构体
 */
export interface DeleteEipAclResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEipAcls请求参数结构体
 */
export interface DescribeEipAclsRequest {
    /**
     * ACL 名称，支持模糊查找
     */
    AclName?: string;
    /**
     * ACL 实例 ID 列表，数组下标从 0 开始
     */
    AclIds?: Array<string>;
    /**
     * 分页参数。偏移量，默认为 0
     */
    Offset?: number;
    /**
     * 分页参数。每一页的 EIPACL 列表数目
     */
    Limit?: number;
    /**
     * EIP实例ID列表
     */
    EipIds?: Array<string>;
    /**
     * EIP IP地址列表
     */
    EipIps?: Array<string>;
    /**
     * EIP名称列表
     */
    EipNames?: Array<string>;
    /**
     * 排序字段
     */
    OrderField?: string;
    /**
     * 排序方式，取值：0:增序(默认)，1:降序
     */
    Order?: number;
    /**
     * ACL名称列表，支持模糊查找
     */
    AclNames?: Array<string>;
}
/**
 * BindEipAcls请求参数结构体
 */
export interface BindEipAclsRequest {
    /**
     * 待关联的 EIP 与 ACL关系列表
     */
    EipIdAclIdList: Array<EipAclMap>;
}
/**
 * DescribeEipTask请求参数结构体
 */
export interface DescribeEipTaskRequest {
    /**
     * EIP查询任务ID
     */
    TaskId: number;
}
/**
 * UnbindRs请求参数结构体
 */
export interface UnbindRsRequest {
    /**
     * Eip实例ID
     */
    EipId: string;
    /**
     * 物理服务器实例ID
     */
    InstanceId: string;
}
/**
 * UnbindVpcIp返回参数结构体
 */
export interface UnbindVpcIpResponse {
    /**
     * 绑定黑石物理机异步任务ID，可以通过查询EIP任务状态查询任务状态
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEipAcl返回参数结构体
 */
export interface CreateEipAclResponse {
    /**
     * ACL 实例 ID
     */
    AclId?: string;
    /**
     * ACL 实例状态
     */
    Status?: number;
    /**
     * ACL 实例名称
     */
    AclName?: string;
    /**
     * ACL 实例创建时间
     */
    CreatedAt?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
