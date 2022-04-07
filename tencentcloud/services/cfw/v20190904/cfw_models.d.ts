/**
 * DescribeVpcRuleOverview返回参数结构体
 */
export interface DescribeVpcRuleOverviewResponse {
    /**
      * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyNum: number;
    /**
      * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartRuleNum: number;
    /**
      * 规则总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatFwInstance请求参数结构体
 */
export declare type DescribeNatFwInstanceRequest = null;
/**
 * ModifyNatFwVpcDnsSwitch返回参数结构体
 */
export interface ModifyNatFwVpcDnsSwitchResponse {
    /**
      * 修改成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatFwInstanceWithRegion请求参数结构体
 */
export declare type DescribeNatFwInstanceWithRegionRequest = null;
/**
 * DescribeRuleOverview返回参数结构体
 */
export interface DescribeRuleOverviewResponse {
    /**
      * 规则总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllTotal?: number;
    /**
      * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyNum?: number;
    /**
      * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartRuleNum?: number;
    /**
      * 停用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StopRuleNum?: number;
    /**
      * 剩余配额
注意：此字段可能返回 null，表示取不到有效值。
      */
    RemainingNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * NAT防火墙Dnat规则
 */
export interface CfwNatDnatRule {
    /**
      * 网络协议，可选值：TCP、UDP。
      */
    IpProtocol: string;
    /**
      * 弹性IP。
      */
    PublicIpAddress: string;
    /**
      * 公网端口。
      */
    PublicPort: number;
    /**
      * 内网地址。
      */
    PrivateIpAddress: string;
    /**
      * 内网端口。
      */
    PrivatePort: number;
    /**
      * NAT防火墙转发规则描述。
      */
    Description: string;
}
/**
 * StaticInfo 告警柱形图统计信息
 
 */
export interface StaticInfo {
    /**
      * 数
      */
    Num: number;
    /**
      * 端口
      */
    Port: string;
    /**
      * ip信息
      */
    Ip: string;
    /**
      * 地址
      */
    Address: string;
    /**
      * 资产id
      */
    InsID: string;
    /**
      * 资产名称
      */
    InsName: string;
}
/**
 * ModifyPublicIPSwitchStatus返回参数结构体
 */
export interface ModifyPublicIPSwitchStatusResponse {
    /**
      * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 接口返回错误码，0请求成功  非0失败
      */
    ReturnCode: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAcRule返回参数结构体
 */
export interface ModifyAcRuleResponse {
    /**
      * 状态值，0:操作成功，非0：操作失败
      */
    Status?: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTableStatus返回参数结构体
 */
export interface DescribeTableStatusResponse {
    /**
      * 0：正常，其它：不正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddAcRule请求参数结构体
 */
export interface AddAcRuleRequest {
    /**
      * -1表示优先级最低，1表示优先级最高
      */
    OrderIndex: string;
    /**
      * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
log：观察
      */
    RuleAction: string;
    /**
      * 访问控制策略的流量方向。取值：
in：外对内流量访问控制
out：内对外流量访问控制
      */
    Direction: string;
    /**
      * 访问控制策略的描述信息
      */
    Description: string;
    /**
      * 访问控制策略中的源地址类型。取值：
net：源IP或网段（IP或者CIDR）
location：源区域
template：云防火墙地址模板
instance：实例id
vendor：云厂商
      */
    SourceType: string;
    /**
      * 访问控制策略中的源地址。取值：
当SourceType为net时，SourceContent为源IP地址或者CIDR地址。
例如：1.1.1.0/24

当SourceType为template时，SourceContent为源地址模板名称。

当SourceType为location时，SourceContent为源区域。
例如["BJ11", "ZB"]

当SourceType为instance时，SourceContent为该实例id对应的公网ip。
例如ins-xxxxx

当SourceType为vendor时，SourceContent为所选择厂商的公网ip列表。
例如：aws,huawei,tencent,aliyun,azure,all代表以上五个
      */
    SourceContent: string;
    /**
      * 访问控制策略中的目的地址类型。取值：
net：目的IP或者网段（IP或者CIDR）
location：源区域
template：云防火墙地址模板
instance：实例id
vendor：云厂商
domain: 域名或者ip
      */
    DestType: string;
    /**
      * 访问控制策略中的目的地址。取值：
当DestType为net时，DestContent为源IP地址或者CIDR地址。
例如：1.1.1.0/24

当DestType为template时，DestContent为源地址模板名称。

当DestType为location时，DestContent为源区域。
例如["BJ11", "ZB"]

当DestType为instance时，DestContent为该实例id对应的公网ip。
例如ins-xxxxx

当DestType为domain时，DestContent为该实例id对应的域名规则。
例如*.qq.com

当DestType为vendor时，DestContent为所选择厂商的公网ip列表。
例如：aws,huawei,tencent,aliyun,azure,all代表以上五个
      */
    DestContent: string;
    /**
      * 访问控制策略的端口。取值：
-1/-1：全部端口
80,443：80或者443
      */
    Port: string;
    /**
      * 访问控制策略中流量访问的协议类型。取值：TCP，目前互联网边界规则只能支持TCP，不传参数默认就是TCP
      */
    Protocol?: string;
    /**
      * 七层协议，取值：
HTTP/HTTPS
TLS/SSL
      */
    ApplicationName?: string;
    /**
      * 是否启用规则，默认为启用，取值：
true为启用，false为不启用
      */
    Enable?: string;
}
/**
 * ip防护状态
 */
export interface IPDefendStatus {
    /**
      * ip地址
      */
    IP: string;
    /**
      * 防护状态   1:防护打开; -1:地址错误; 其他:未防护
      */
    Status: number;
}
/**
 * 安全组规则
 */
export interface SecurityGroupRule {
    /**
      * 访问源示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
      */
    SourceContent: string;
    /**
      * 访问源类型，类型可以为以下6种：net|template|instance|resourcegroup|tag|region
      */
    SourceType: string;
    /**
      * 访问目的示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
      */
    DestContent: string;
    /**
      * 访问目的类型，类型可以为以下6种：net|template|instance|resourcegroup|tag|region
      */
    DestType: string;
    /**
      * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
      */
    RuleAction: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 规则顺序，-1表示最低，1表示最高
      */
    OrderIndex: string;
    /**
      * 协议；TCP/UDP/ICMP/ANY
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol?: string;
    /**
      * 访问控制策略的端口。取值：
-1/-1：全部端口
80：80端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: string;
    /**
      * 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceTemplateId?: string;
    /**
      * 规则对应的唯一id
      */
    Id?: string;
    /**
      * 规则状态，true表示启用，false表示禁用
      */
    Enable?: string;
}
/**
 * ModifyNatFwVpcDnsSwitch请求参数结构体
 */
export interface ModifyNatFwVpcDnsSwitchRequest {
    /**
      * nat 防火墙 id
      */
    NatFwInsId: string;
    /**
      * DNS 开关切换列表
      */
    DnsVpcSwitchLst: Array<DnsVpcSwitch>;
}
/**
 * 添加安全组Api规则对象
 */
export interface SecurityGroupApiRuleData {
    /**
      * 访问源，入站时为Ip/Cidr，默认为0.0.0.0/0； 出站时当RuleType为1时，支持内网Ip/Cidr, 当RuleType为2时，填实例ID
      */
    SourceId: string;
    /**
      * 访问目的，出站时为Ip/Cidr，默认为0.0.0.0/0；入站时当RuleType为1时，支持内网Ip/Cidr, 当RuleType为2时，填实例ID
      */
    TargetId: string;
    /**
      * 协议，支持ANY/TCP/UDP/ICMP
      */
    Protocol: string;
    /**
      * 端口, 当Protocol为ANY或ICMP时，Port为-1/-1
      */
    Port: string;
    /**
      * 策略, 1：阻断，2：放行
      */
    Strategy: string;
    /**
      * 描述
      */
    Detail: string;
    /**
      * 规则类型，1：VpcId+Ip/Cidr, 2: 实例ID，入站时为访问目的类型，出站时为访问源类型
      */
    RuleType: number;
    /**
      * 执行顺序，中间插入必传，前插、后插非必传
      */
    OrderIndex?: number;
    /**
      * 私有网络ID，当RuleType为1时必传
      */
    VpcId?: string;
}
/**
 * DeleteNatFwInstance返回参数结构体
 */
export interface DeleteNatFwInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAllAccessControlRule请求参数结构体
 */
export interface DeleteAllAccessControlRuleRequest {
    /**
      * 方向，0：出站，1：入站  默认值是 0
      */
    Direction?: number;
    /**
      * VPC间防火墙开关ID  全部删除 EdgeId和Area只填写一个，不填写则不删除vpc间防火墙开关 ，默认值为‘’
      */
    EdgeId?: string;
    /**
      * nat地域 全部删除 EdgeId和Area只填写一个，不填写则不删除nat防火墙开关 默认值为‘’
      */
    Area?: string;
}
/**
 * ModifySecurityGroupRule请求参数结构体
 */
export interface ModifySecurityGroupRuleRequest {
    /**
      * 方向，0：出站，1：入站，默认1
      */
    Direction: number;
    /**
      * 编辑后是否启用规则，0：不启用，1：启用，默认1
      */
    Enable: number;
    /**
      * 编辑的企业安全组规则数据
      */
    Data: Array<SecurityGroupListData>;
    /**
      * 编辑的企业安全组规则的原始执行顺序
      */
    SgRuleOriginSequence: number;
}
/**
 * ModifyAllVPCSwitchStatus返回参数结构体
 */
export interface ModifyAllVPCSwitchStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * vpc区域数据详情
 */
export interface VpcZoneData {
    /**
      * 可用区
      */
    Zone: string;
    /**
      * vpc节点地域
      */
    Region: string;
}
/**
 * CreateSecurityGroupRules返回参数结构体
 */
export interface CreateSecurityGroupRulesResponse {
    /**
      * 状态值，0：添加成功，非0：添加失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatFwVpcDnsLst请求参数结构体
 */
export interface DescribeNatFwVpcDnsLstRequest {
    /**
      * natfw 防火墙实例id
      */
    NatFwInsId: string;
    /**
      * natfw 过滤，以','分隔
      */
    NatInsIdFilter?: string;
    /**
      * 分页页数
      */
    Offset?: number;
    /**
      * 每页最多个数
      */
    Limit?: number;
}
/**
 * DescribeCfwEips请求参数结构体
 */
export interface DescribeCfwEipsRequest {
    /**
      * 0：cfw新增模式，1：cfw接入模式
      */
    Mode: number;
    /**
      * ALL：查询所有弹性公网ip; nat-xxxxx：接入模式场景指定网关的弹性公网ip
      */
    NatGatewayId: string;
    /**
      * 防火墙实例id
      */
    CfwInstance?: string;
}
/**
 * DescribeTLogInfo返回参数结构体
 */
export interface DescribeTLogInfoResponse {
    /**
      * 无
      */
    Data: TLogInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAllSwitchStatus请求参数结构体
 */
export interface ModifyAllSwitchStatusRequest {
    /**
      * 状态，0：关闭，1：开启
      */
    Status: number;
    /**
      * 0: 互联网边界防火墙开关，1：vpc防火墙开关
      */
    Type?: number;
    /**
      * 选中的防火墙开关Id
      */
    Ids?: Array<string>;
    /**
      * NAT开关切换类型，1,单个子网，2，同开同关，3，全部
      */
    ChangeType?: number;
    /**
      * NAT实例所在地域
      */
    Area?: string;
}
/**
 * DescribeUnHandleEventTabList请求参数结构体
 */
export interface DescribeUnHandleEventTabListRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 查询示例ID
      */
    AssetID?: string;
}
/**
 * DescribeAssociatedInstanceList返回参数结构体
 */
export interface DescribeAssociatedInstanceListResponse {
    /**
      * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<AssociatedInstanceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceGroup返回参数结构体
 */
export interface DescribeResourceGroupResponse {
    /**
      * 返回树形结构
      */
    Data: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatRuleOverview返回参数结构体
 */
export interface DescribeNatRuleOverviewResponse {
    /**
      * 实例ID
      */
    InstanceId?: string;
    /**
      * 实例名称
      */
    InstanceName?: string;
    /**
      * 弹性IP列表
      */
    EipList?: Array<string>;
    /**
      * 端口转发规则数量
      */
    DnatNum?: number;
    /**
      * 访问控制规则总数
      */
    TotalNum?: number;
    /**
      * 访问控制规则剩余配额
      */
    RemainNum?: number;
    /**
      * 阻断规则条数
      */
    BlockNum?: number;
    /**
      * 启用规则条数
      */
    EnableNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveAcRule返回参数结构体
 */
export interface RemoveAcRuleResponse {
    /**
      * 删除成功后返回被删除策略的uuid
      */
    RuleUuid: number;
    /**
      * 0代表成功，-1代表失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnCode: number;
    /**
      * success代表成功，failed代表失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Nat实例类型
 */
export interface NatFwInstance {
    /**
      * nat实例id
      */
    NatinsId: string;
    /**
      * nat实例名称
      */
    NatinsName: string;
    /**
      * 实例所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 0:新增模式，1:接入模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    FwMode: number;
    /**
      * 0:正常状态， 1: 正在创建
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * nat公网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatIp: string;
}
/**
 * DeleteNatFwInstance请求参数结构体
 */
export interface DeleteNatFwInstanceRequest {
    /**
      * 防火墙实例id
      */
    CfwInstance: string;
}
/**
 * ExpandCfwVertical请求参数结构体
 */
export interface ExpandCfwVerticalRequest {
    /**
      * nat：nat防火墙，ew：东西向防火墙
      */
    FwType: string;
    /**
      * 带宽值
      */
    Width: number;
    /**
      * 防火墙实例id
      */
    CfwInstance?: string;
}
/**
 * ModifyAllPublicIPSwitchStatus返回参数结构体
 */
export interface ModifyAllPublicIPSwitchStatusResponse {
    /**
      * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 接口返回错误码，0请求成功  非0失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnCode: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteVpcInstance返回参数结构体
 */
export interface DeleteVpcInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAssetScan请求参数结构体
 */
export interface ModifyAssetScanRequest {
    /**
      * 扫描范围：1端口, 2端口+漏扫
      */
    ScanRange: number;
    /**
      * 扫描深度：'heavy', 'medium', 'light'
      */
    ScanDeep: string;
    /**
      * 扫描类型：1立即扫描 2 周期任务
      */
    RangeType: number;
    /**
      * RangeType为2 是必须添加，定时任务时间
      */
    ScanPeriod?: string;
    /**
      * 立即扫描这个字段传过滤的扫描集合
      */
    ScanFilterIp?: Array<string>;
    /**
      * 1全量2单个
      */
    ScanType?: number;
}
/**
 * ModifyBlockIgnoreList请求参数结构体
 */
export interface ModifyBlockIgnoreListRequest {
    /**
      * 1拦截列表 2 忽略列表
      */
    RuleType: number;
    /**
      * IP、Domain二选一，不能同时为空
      */
    IOC: Array<IocListData>;
    /**
      * 可选值：delete（删除）、edit（编辑）、add（添加）  其他值无效
      */
    IocAction: string;
    /**
      * 时间格式：yyyy-MM-dd HH:mm:ss
      */
    StartTime?: string;
    /**
      * 时间格式：yyyy-MM-dd HH:mm:ss
      */
    EndTime?: string;
}
/**
 * AddEnterpriseSecurityGroupRules请求参数结构体
 */
export interface AddEnterpriseSecurityGroupRulesRequest {
    /**
      * 创建规则数据
      */
    Data: Array<SecurityGroupRule>;
    /**
      * 添加类型，0：添加到最后，1：添加到最前；2：中间插入；默认0添加到最后
      */
    Type?: number;
    /**
      * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
      */
    ClientToken?: string;
}
/**
 * DeleteSecurityGroupRule返回参数结构体
 */
export interface DeleteSecurityGroupRuleResponse {
    /**
      * 状态值，0：成功，非0：失败
      */
    Status: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupAllRuleStatus请求参数结构体
 */
export interface ModifySecurityGroupAllRuleStatusRequest {
    /**
      * 列表规则状态，0：全部停用，1：全部启用
      */
    Status: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction?: number;
    /**
      * Edge ID值
      */
    EdgeId?: string;
    /**
      * NAT地域, 腾讯云地域的英文简写
      */
    Area?: string;
}
/**
 * ModifySequenceRules请求参数结构体
 */
export interface ModifySequenceRulesRequest {
    /**
      * 边Id值
      */
    EdgeId?: string;
    /**
      * 修改数据
      */
    Data?: Array<SequenceData>;
    /**
      * NAT地域
      */
    Area?: string;
    /**
      * 方向，0：出向，1：入向
      */
    Direction?: number;
}
/**
 * DescribeAddrTemplateList请求参数结构体
 */
export interface DescribeAddrTemplateListRequest {
    /**
      * 偏移量，分页用
      */
    Offset?: number;
    /**
      * 条数，分页用
      */
    Limit?: number;
    /**
      * 排序字段，取值 'UpdateTime' | 'RulesNum'
      */
    By?: string;
    /**
      * 排序，取值 'asc'|'desc'
      */
    Order?: string;
    /**
      * 搜索值
      */
    SearchValue?: string;
}
/**
 * CreateNatFwInstance请求参数结构体
 */
export interface CreateNatFwInstanceRequest {
    /**
      * 防火墙实例名称
      */
    Name: string;
    /**
      * 带宽
      */
    Width: number;
    /**
      * 模式 1：接入模式；0：新增模式
      */
    Mode: number;
    /**
      * 新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。
      */
    NewModeItems?: NewModeItems;
    /**
      * 接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。
      */
    NatGwList?: Array<string>;
    /**
      * 主可用区，为空则选择默认可用区
      */
    Zone?: string;
    /**
      * 备可用区，为空则选择默认可用区
      */
    ZoneBak?: string;
    /**
      * 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备
      */
    CrossAZone?: number;
}
/**
 * ModifySecurityGroupItemRuleStatus返回参数结构体
 */
export interface ModifySecurityGroupItemRuleStatusResponse {
    /**
      * 状态值，0：修改成功，非0：修改失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnterpriseSecurityGroupRule返回参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleResponse {
    /**
      * 分页查询时，显示的当前页的页码。
      */
    PageNo: string;
    /**
      * 分页查询时，显示的每页数据的最大条数。
      */
    PageSize: string;
    /**
      * 访问控制策略列表
      */
    Rules: Array<SecurityGroupRule>;
    /**
      * 访问控制策略的总数量。
      */
    TotalCount: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * nat防火墙 vpc dns 开关信息
 */
export interface VpcDnsInfo {
    /**
      * vpc id
      */
    VpcId: string;
    /**
      * vpc 名称
      */
    VpcName: string;
    /**
      * nat 防火墙模式 0：新增模式， 1: 接入模式
      */
    FwMode: number;
    /**
      * vpc ipv4网段范围 CIDR（Classless Inter-Domain Routing，无类域间路由选择）
      */
    VpcIpv4Cidr: string;
    /**
      * 外网弹性ip，防火墙 dns解析地址
      */
    DNSEip: string;
    /**
      * nat网关id
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatInsId: string;
    /**
      * nat网关名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatInsName: string;
    /**
      * 0：开关关闭 ， 1: 开关打开
      */
    SwitchStatus: number;
}
/**
 * DescribeEnterpriseSecurityGroupRule请求参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleRequest {
    /**
      * 分页查询时，显示的当前页的页码。

默认值为1。
      */
    PageNo: string;
    /**
      * 分页查询时，显示的每页数据的最大条数。

可设置值最大为50。
      */
    PageSize: string;
    /**
      * 访问源示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
支持通配
      */
    SourceContent?: string;
    /**
      * 访问目的示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
支持通配
      */
    DestContent?: string;
    /**
      * 规则描述，支持通配
      */
    Description?: string;
    /**
      * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
      */
    RuleAction?: string;
    /**
      * 是否启用规则，默认为启用，取值：
true为启用，false为不启用
      */
    Enable?: string;
    /**
      * 访问控制策略的端口。取值：
-1/-1：全部端口
80：80端口
      */
    Port?: string;
    /**
      * 协议；TCP/UDP/ICMP/ANY
      */
    Protocol?: string;
    /**
      * 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥
      */
    ServiceTemplateId?: string;
}
/**
 * ModifyItemSwitchStatus返回参数结构体
 */
export interface ModifyItemSwitchStatusResponse {
    /**
      * 修改成功与否状态值 0：修改成功，非 0：修改失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNatFwReSelect返回参数结构体
 */
export interface ModifyNatFwReSelectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecurityGroupRule请求参数结构体
 */
export interface DeleteSecurityGroupRuleRequest {
    /**
      * 所需要删除规则的ID
      */
    Id: number;
    /**
      * 腾讯云地域的英文简写
      */
    Area: string;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 是否删除反向规则，0：否，1：是
      */
    IsDelReverse?: number;
}
/**
 * SetNatFwEip请求参数结构体
 */
export interface SetNatFwEipRequest {
    /**
      * bind：绑定eip；unbind：解绑eip；newAdd：新增防火墙弹性公网ip
      */
    OperationType: string;
    /**
      * 防火墙实例id
      */
    CfwInstance: string;
    /**
      * 当OperationType 为bind或unbind操作时，使用该字段。
      */
    EipList?: Array<string>;
}
/**
 * SetNatFwEip返回参数结构体
 */
export interface SetNatFwEipResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 访问控制列表对象
 */
export interface AcListsData {
    /**
      * 规则id
      */
    Id: number;
    /**
      * 访问源
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceIp: string;
    /**
      * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetIp: string;
    /**
      * 协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: string;
    /**
      * 策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    Strategy: number;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail: string;
    /**
      * 命中次数
      */
    Count: number;
    /**
      * 执行顺序
      */
    OrderIndex: number;
    /**
      * 告警规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogId: string;
}
/**
 * ModifyPublicIPSwitchStatus请求参数结构体
 */
export interface ModifyPublicIPSwitchStatusRequest {
    /**
      * 公网IP
      */
    FireWallPublicIP: string;
    /**
      * 状态值，0: 关闭 ,1:开启
      */
    Status: number;
}
/**
 * 执行顺序对象
 */
export interface SequenceData {
    /**
      * 规则Id值
      */
    Id: number;
    /**
      * 修改前执行顺序
      */
    OrderIndex: number;
    /**
      * 修改后执行顺序
      */
    NewOrderIndex: number;
}
/**
 * CreateSecurityGroupApiRules返回参数结构体
 */
export interface CreateSecurityGroupApiRulesResponse {
    /**
      * 状态值，0:添加成功，非0：添加失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupItemRuleStatus请求参数结构体
 */
export interface ModifySecurityGroupItemRuleStatusRequest {
    /**
      * 方向，0：出站，1：入站，默认1
      */
    Direction: number;
    /**
      * 是否开关开启，0：未开启，1：开启
      */
    Status: number;
    /**
      * 更改的企业安全组规则的执行顺序
      */
    RuleSequence: number;
}
/**
 * DescribeSourceAsset请求参数结构体
 */
export interface DescribeSourceAssetRequest {
    /**
      * 模糊查询
      */
    FuzzySearch?: string;
    /**
      * 资产类型 1公网 2内网
      */
    InsType?: string;
    /**
      * ChooseType为1，查询已经分组的资产；ChooseType不为1查询没有分组的资产
      */
    ChooseType?: string;
    /**
      * 地域
      */
    Zone?: string;
    /**
      * 查询单页的最大值；eg：10；则最多返回10条结果
      */
    Limit?: number;
    /**
      * 查询结果的偏移量
      */
    Offset?: number;
}
/**
 * 企业安全组规则执行顺序修改对象
 */
export interface SecurityGroupOrderIndexData {
    /**
      * 企业安全组规则当前执行顺序
      */
    OrderIndex: number;
    /**
      * 企业安全组规则更新目标执行顺序
      */
    NewOrderIndex: number;
}
/**
 * DescribeSourceAsset返回参数结构体
 */
export interface DescribeSourceAssetResponse {
    /**
      * 地域集合
      */
    ZoneList: Array<AssetZone>;
    /**
      * 数据
      */
    Data: Array<InstanceInfo>;
    /**
      * 返回数据总数
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTLogInfo请求参数结构体
 */
export interface DescribeTLogInfoRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 类型 1 告警 2阻断
      */
    QueryType: string;
    /**
      * 查询条件
      */
    SearchValue?: string;
}
/**
 * DescribeSecurityGroupList返回参数结构体
 */
export interface DescribeSecurityGroupListResponse {
    /**
      * 列表当前规则总条数
      */
    Total: number;
    /**
      * 安全组规则列表数据
      */
    Data: Array<SecurityGroupListData>;
    /**
      * 不算筛选条数的总条数
      */
    AllTotal: number;
    /**
      * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssetZone
 */
export interface AssetZone {
    /**
      * 地域
      */
    Zone: string;
    /**
      * 地域英文
      */
    ZoneEng: string;
}
/**
 * DescribeAddrTemplateList返回参数结构体
 */
export interface DescribeAddrTemplateListResponse {
    /**
      * 模板总数
      */
    Total: number;
    /**
      * 模板列表数据
      */
    Data: Array<TemplateListInfo>;
    /**
      * 模板名称列表
      */
    NameList: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RunSyncAsset请求参数结构体
 */
export interface RunSyncAssetRequest {
    /**
      * 0: 互联网防火墙开关，1：vpc 防火墙开关
      */
    Type?: number;
}
/**
 * DescribeTLogIpList请求参数结构体
 */
export interface DescribeTLogIpListRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 类型 1 告警 2阻断
      */
    QueryType: string;
    /**
      * top数
      */
    Top: number;
    /**
      * 查询条件
      */
    SearchValue?: string;
}
/**
 * DescribeNatFwInstancesInfo请求参数结构体
 */
export interface DescribeNatFwInstancesInfoRequest {
    /**
      * 获取实例列表过滤字段
      */
    Filter?: Array<NatFwFilter>;
    /**
      * 第几页
      */
    Offset?: number;
    /**
      * 每页长度
      */
    Limit?: number;
}
/**
 * DescribeTableStatus请求参数结构体
 */
export interface DescribeTableStatusRequest {
    /**
      * EdgeId值两个vpc间的边id vpc填Edgeid，不要填Area；
      */
    EdgeId?: string;
    /**
      * 状态值，0：检查表的状态 确实只有一个默认值
      */
    Status?: number;
    /**
      * Nat所在地域 NAT填Area，不要填Edgeid；
      */
    Area?: string;
    /**
      * 方向，0：出站，1：入站 默认值为 0
      */
    Direction?: number;
}
/**
 * DescribeSecurityGroupList请求参数结构体
 */
export interface DescribeSecurityGroupListRequest {
    /**
      * 0: 出站规则，1：入站规则
      */
    Direction: number;
    /**
      * 地域代码（例: ap-guangzhou),支持腾讯云全部地域
      */
    Area: string;
    /**
      * 搜索值
      */
    SearchValue?: string;
    /**
      * 每页条数，默认为10
      */
    Limit?: number;
    /**
      * 偏移值，默认为0
      */
    Offset?: number;
    /**
      * 状态，'': 全部，'0'：筛选停用规则，'1'：筛选启用规则
      */
    Status?: string;
    /**
      * 0: 不过滤，1：过滤掉正常规则，保留下发异常规则
      */
    Filter?: number;
}
/**
 * ModifyResourceGroup请求参数结构体
 */
export interface ModifyResourceGroupRequest {
    /**
      * 组id
      */
    GroupId: string;
    /**
      * 组名称
      */
    GroupName: string;
    /**
      * 上级组id
      */
    ParentId: string;
}
/**
 * CreateNatFwInstance返回参数结构体
 */
export interface CreateNatFwInstanceResponse {
    /**
      * 防火墙实例id
      */
    CfwInsId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAllSwitchStatus返回参数结构体
 */
export interface ModifyAllSwitchStatusResponse {
    /**
      * 修改成功与否的状态值 0：修改成功，非 0：修改失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 新增模式传递参数
 */
export interface NewModeItems {
    /**
      * 新增模式下接入的vpc列表
      */
    VpcList: Array<string>;
    /**
      * 新增模式下绑定的出口弹性公网ip列表，其中Eips和AddCount至少传递一个。
      */
    Eips?: Array<string>;
    /**
      * 新增模式下新增绑定的出口弹性公网ip个数，其中Eips和AddCount至少传递一个。
      */
    AddCount?: number;
}
/**
 * DescribeNatFwInfoCount返回参数结构体
 */
export interface DescribeNatFwInfoCountResponse {
    /**
      * 返回参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 当前租户的nat实例个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatFwInsCount: number;
    /**
      * 当前租户接入子网个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetCount: number;
    /**
      * 打开开关个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenSwitchCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全组列表数据
 */
export interface SecurityGroupListData {
    /**
      * 执行顺序
      */
    OrderIndex: number;
    /**
      * 访问源
      */
    SourceId: string;
    /**
      * 访问源类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资源组
      */
    SourceType: number;
    /**
      * 访问目的
      */
    TargetId: string;
    /**
      * 访问目的类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100:资源组
      */
    TargetType: number;
    /**
      * 协议
      */
    Protocol: string;
    /**
      * 目的端口
      */
    Port: string;
    /**
      * 策略, 1：阻断，2：放行
      */
    Strategy: number;
    /**
      * 描述
      */
    Detail: string;
    /**
      * 单/双向下发，0:单向下发，1：双向下发
      */
    BothWay: number;
    /**
      * 规则ID
      */
    Id?: number;
    /**
      * 是否开关开启，0：未开启，1：开启
      */
    Status?: number;
    /**
      * 是否是正常规则，0：正常，1：异常
      */
    IsNew?: number;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName?: string;
    /**
      * 公网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp?: string;
    /**
      * 内网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIp?: string;
    /**
      * 掩码地址，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cidr?: string;
    /**
      * 端口协议类型参数模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceTemplateId?: string;
    /**
      * 生成双向下发规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    BothWayInfo?: Array<SecurityGroupBothWayInfo>;
    /**
      * 方向，0：出站，1：入站，默认1
      */
    Direction?: number;
    /**
      * 是否使用端口协议模板，0：否，1：是
      */
    ProtocolPortType?: number;
}
/**
 * CreateNatFwInstanceWithDomain返回参数结构体
 */
export interface CreateNatFwInstanceWithDomainResponse {
    /**
      * nat实例信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CfwInsId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveAcRule请求参数结构体
 */
export interface RemoveAcRuleRequest {
    /**
      * 规则的uuid，可通过查询规则列表获取
      */
    RuleUuid: number;
}
/**
 * 数据库白名单规则数据
 */
export interface DatabaseWhiteListRuleData {
    /**
      * 访问源
      */
    SourceIp: string;
    /**
      * 访问源类型，1 ip；6 实例；100 资源分组
      */
    SourceType: number;
    /**
      * 访问目的
      */
    TargetIp: string;
    /**
      * 访问目的类型，1 ip；6 实例；100 资源分组
      */
    TargetType: number;
    /**
      * 规则描述
      */
    Detail: string;
    /**
      * 是否地域规则，0不是 1是
      */
    IsRegionRule: number;
    /**
      * 是否云厂商规则，0不是 1 时
      */
    IsCloudRule: number;
    /**
      * 是否启用，0 不启用，1启用
      */
    Enable: number;
    /**
      * 地域码1
      */
    FirstLevelRegionCode?: number;
    /**
      * 地域码2
      */
    SecondLevelRegionCode?: number;
    /**
      * 地域名称1
      */
    FirstLevelRegionName?: string;
    /**
      * 地域名称2
      */
    SecondLevelRegionName?: string;
    /**
      * 云厂商码
      */
    CloudCode?: string;
}
/**
 * ModifyAllRuleStatus请求参数结构体
 */
export interface ModifyAllRuleStatusRequest {
    /**
      * 状态，0：全部停用，1：全部启用
      */
    Status: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction?: number;
    /**
      * Edge ID值
      */
    EdgeId?: string;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * 规则输入对象
 */
export interface RuleInfoData {
    /**
      * 执行顺序
      */
    OrderIndex: number;
    /**
      * 访问源
      */
    SourceIp: string;
    /**
      * 访问目的
      */
    TargetIp: string;
    /**
      * 协议
      */
    Protocol: string;
    /**
      * 策略, 0：观察，1：阻断，2：放行
      */
    Strategy: string;
    /**
      * 访问源类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版
      */
    SourceType: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 描述
      */
    Detail: string;
    /**
      * 访问目的类型，1是IP，3是域名，4是IP地址模版，5是域名地址模版
      */
    TargetType: number;
    /**
      * 端口
      */
    Port?: string;
    /**
      * id值
      */
    Id?: number;
    /**
      * 日志id，从告警处创建必传，其它为空
      */
    LogId?: string;
    /**
      * 城市Code
      */
    City?: number;
    /**
      * 国家Code
      */
    Country?: number;
    /**
      * 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅中国香港及海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云
      */
    CloudCode?: string;
    /**
      * 是否为地域
      */
    IsRegion?: number;
    /**
      * 城市名
      */
    CityName?: string;
    /**
      * 国家名
      */
    CountryName?: string;
}
/**
 * DescribeAcLists返回参数结构体
 */
export interface DescribeAcListsResponse {
    /**
      * 总条数
      */
    Total?: number;
    /**
      * 访问控制列表数据
      */
    Data?: Array<AcListsData>;
    /**
      * 不算筛选条数的总条数
      */
    AllTotal?: number;
    /**
      * 访问控制规则全部启用/全部停用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAllPublicIPSwitchStatus请求参数结构体
 */
export interface ModifyAllPublicIPSwitchStatusRequest {
    /**
      * 状态，0：关闭，1：开启
      */
    Status: number;
    /**
      * 选中的防火墙开关Id
      */
    FireWallPublicIPs?: Array<string>;
}
/**
 * DescribeBlockStaticList返回参数结构体
 */
export interface DescribeBlockStaticListResponse {
    /**
      * 无
      */
    Data: Array<StaticInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupSequenceRules请求参数结构体
 */
export interface ModifySecurityGroupSequenceRulesRequest {
    /**
      * 方向，0：出站，1：入站，默认1
      */
    Direction: number;
    /**
      * 企业安全组规则快速排序数据
      */
    Data: Array<SecurityGroupOrderIndexData>;
}
/**
 * CreateDatabaseWhiteListRules返回参数结构体
 */
export interface CreateDatabaseWhiteListRulesResponse {
    /**
      * 状态值，0:添加成功，非0：添加失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 新手引导扫描信息
 */
export interface ScanInfo {
    /**
      * 扫描结果信息
      */
    ScanResultInfo: ScanResultInfo;
    /**
      * 扫描状态 0扫描中 1完成  2未勾选自动扫描
      */
    ScanStatus: number;
    /**
      * 进度
      */
    ScanPercent: number;
    /**
      * 预计完成时间
      */
    ScanTime: string;
}
/**
 * CreateChooseVpcs返回参数结构体
 */
export interface CreateChooseVpcsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUnHandleEventTabList返回参数结构体
 */
export interface DescribeUnHandleEventTabListResponse {
    /**
      * 租户伪攻击链未处置事件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: UnHandleEvent;
    /**
      * 错误码，0成功 非0错误
      */
    ReturnCode: number;
    /**
      * 返回信息 success成功
      */
    ReturnMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * nat fw 实例展示的过滤列表
 */
export interface NatFwFilter {
    /**
      * 过滤的类型，例如实例id
      */
    FilterType: string;
    /**
      * 过滤的内容，以',' 分隔
      */
    FilterContent: string;
}
/**
 * 新手引导扫描结果信息PortNum   int
    LeakNum   int
    IPNum     int
    IPStatus  bool
    IdpStatus bool
    BanStatus bool
 */
export interface ScanResultInfo {
    /**
      * 暴漏漏洞数量
      */
    LeakNum: number;
    /**
      * 防护ip数量
      */
    IPNum: number;
    /**
      * 暴漏端口数量
      */
    PortNum: number;
    /**
      * 是否开启防护
      */
    IPStatus: boolean;
    /**
      * 是否拦截攻击
      */
    IdpStatus: boolean;
    /**
      * 是否禁封端口
      */
    BanStatus: boolean;
}
/**
 * ModifyRunSyncAsset返回参数结构体
 */
export interface ModifyRunSyncAssetResponse {
    /**
      * 0：同步成功，1：资产更新中，2：后台同步调用失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupSequenceRules返回参数结构体
 */
export interface ModifySecurityGroupSequenceRulesResponse {
    /**
      * 状态值，0：修改成功，非0：修改失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 统计折线图通用结构体
 */
export interface IpStatic {
    /**
      * 值
      */
    Num: number;
    /**
      * 折线图横坐标时间
      */
    StatTime: string;
}
/**
 * AddEnterpriseSecurityGroupRules返回参数结构体
 */
export interface AddEnterpriseSecurityGroupRulesResponse {
    /**
      * 状态值，0：添加成功，非0：添加失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 未处置事件信息汇总
 */
export interface UnHandleEventDetail {
    /**
      * 安全事件名称
      */
    EventName: string;
    /**
      * 未处置事件数量
      */
    Total: number;
}
/**
 * RemoveEnterpriseSecurityGroupRule请求参数结构体
 */
export interface RemoveEnterpriseSecurityGroupRuleRequest {
    /**
      * 规则的uuid，可通过查询规则列表获取
      */
    RuleUuid: number;
    /**
      * 删除类型，0是单条删除，RuleUuid填写删除规则id，1为全部删除，RuleUuid填0即可
      */
    RemoveType: number;
}
/**
 * DeleteResourceGroup请求参数结构体
 */
export interface DeleteResourceGroupRequest {
    /**
      * 组id
      */
    GroupId: string;
}
/**
 * DescribeBlockByIpTimesList请求参数结构体
 */
export interface DescribeBlockByIpTimesListRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * ip查询条件
      */
    Ip: string;
    /**
      * 地域
      */
    Zone?: string;
    /**
      * 方向
      */
    Direction?: string;
    /**
      * 来源
      */
    Source?: string;
    /**
      * vpc间防火墙开关边id
      */
    EdgeId?: string;
    /**
      * 日志来源 move：vpc间防火墙
      */
    LogSource?: string;
}
/**
 * ModifyVPCSwitchStatus返回参数结构体
 */
export interface ModifyVPCSwitchStatusResponse {
    /**
      * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 接口返回错误码，0请求成功  非0失败
      */
    ReturnCode: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveEnterpriseSecurityGroupRule返回参数结构体
 */
export interface RemoveEnterpriseSecurityGroupRuleResponse {
    /**
      * 删除成功后返回被删除策略的uuid
      */
    RuleUuid: number;
    /**
      * 0代表成功，-1代表失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAllVPCSwitchStatus请求参数结构体
 */
export interface ModifyAllVPCSwitchStatusRequest {
    /**
      * 状态，0：关闭，1：开启
      */
    Status: number;
    /**
      * 选中的防火墙开关Id
      */
    FireWallVpcIds?: Array<string>;
}
/**
 * ModifySequenceRules返回参数结构体
 */
export interface ModifySequenceRulesResponse {
    /**
      * 0: 修改成功, 非0: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecurityGroupAllRule返回参数结构体
 */
export interface DeleteSecurityGroupAllRuleResponse {
    /**
      * 0: 操作成功，非0：操作失败
      */
    Status?: number;
    /**
      * 返回数据的json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceGroupNew返回参数结构体
 */
export interface DescribeResourceGroupNewResponse {
    /**
      * 返回树形结构
      */
    Data: string;
    /**
      * 未分类实例数量
      */
    UnResourceNum: number;
    /**
      * 接口返回消息
      */
    ReturnMsg: string;
    /**
      * 返回码；0为请求成功
      */
    ReturnCode: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatFwInstanceWithRegion返回参数结构体
 */
export interface DescribeNatFwInstanceWithRegionResponse {
    /**
      * 实例数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatinsLst: Array<NatFwInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceGroupNew请求参数结构体
 */
export interface DescribeResourceGroupNewRequest {
    /**
      * 查询类型 网络结构-vpc，业务识别-resource ，资源标签-tag
      */
    QueryType: string;
    /**
      * 资产组id  全部传0
      */
    GroupId?: string;
    /**
      * all  包含子组 own自己
      */
    ShowType?: string;
}
/**
 * ModifyBlockTop请求参数结构体
 */
export interface ModifyBlockTopRequest {
    /**
      * 记录id
      */
    UniqueId: string;
    /**
      * 操作类型 1 置顶 0取消
      */
    OpeType: string;
}
/**
 * DeleteAcRule返回参数结构体
 */
export interface DeleteAcRuleResponse {
    /**
      * 状态值 0: 删除成功, !0: 删除失败
      */
    Status: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 黑白名单IOC列表
 */
export interface IocListData {
    /**
      * 待处置IP地址，IP/Domain字段二选一
      */
    IP: string;
    /**
      * 只能为0或者1   0代表出站 1代表入站
      */
    Direction: number;
    /**
      * 待处置域名，IP/Domain字段二选一
      */
    Domain?: string;
}
/**
 * // InstanceInfo 实例详情结果
type InstanceInfo struct {
    AppID        string `json:"AppId" gorm:"column:appid"`
    Region       string `json:"Region" gorm:"column:region"`
    VPCID        string `json:"VpcId" gorm:"column:vpc_id"`
    SubNetID     string `json:"SubnetId" gorm:"column:subnet_id"`
    InstanceID   string `json:"InstanceId" gorm:"column:instance_id"`
    InstanceName string `json:"InstanceName" gorm:"column:instance_name"`
    //InsType common.CVM 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA
    InsType   int    `json:"InsType" gorm:"column:instance_type"`
    PublicIP  string `json:"PublicIp" gorm:"column:public_ip"`
    PrivateIP string `json:"PrivateIp" gorm:"column:ip"`

    //规则下发无需管，前端展示用
    PortNum          string `json:"PortNum" gorm:"column:port_num"`
    LeakNum          string `json:"LeakNum" gorm:"column:leak_num"`
    ResourceGroupNum int    `json:"ResourceGroupNum"`
    VPCName          string `json:"VPCName" gorm:"column:VPCName"`
}

 */
export interface InstanceInfo {
    /**
      * appid信息
      */
    AppId: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * vpcid信息
      */
    VpcId: string;
    /**
      * vpc名称
      */
    VPCName: string;
    /**
      * 子网id
      */
    SubnetId: string;
    /**
      * 资产id
      */
    InstanceId: string;
    /**
      * 资产名
      */
    InstanceName: string;
    /**
      * 资产类型
 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA 13 NATFW
      */
    InsType: number;
    /**
      * 公网ip
      */
    PublicIp: string;
    /**
      * 内网ip
      */
    PrivateIp: string;
    /**
      * 端口数
      */
    PortNum: string;
    /**
      * 漏洞数
      */
    LeakNum: string;
    /**
      * 1，公网 2内网
      */
    InsSource: string;
    /**
      * [a,b]
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourcePath: Array<string>;
}
/**
 * DescribeIPStatusList请求参数结构体
 */
export interface DescribeIPStatusListRequest {
    /**
      * 资产Id
      */
    IPList: Array<string>;
}
/**
 * ModifyNatFwSwitch返回参数结构体
 */
export interface ModifyNatFwSwitchResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RunSyncAsset返回参数结构体
 */
export interface RunSyncAssetResponse {
    /**
      * 0：同步成功，1：资产更新中，2：后台同步调用失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBlockByIpTimesList返回参数结构体
 */
export interface DescribeBlockByIpTimesListResponse {
    /**
      * 返回数据
      */
    Data: Array<IpStatic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetNatFwDnatRule返回参数结构体
 */
export interface SetNatFwDnatRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRuleOverview请求参数结构体
 */
export interface DescribeRuleOverviewRequest {
    /**
      * 方向，0：出站，1：入站
      */
    Direction?: number;
}
/**
 * DescribeAcLists请求参数结构体
 */
export interface DescribeAcListsRequest {
    /**
      * 协议
      */
    Protocol?: string;
    /**
      * 策略
      */
    Strategy?: string;
    /**
      * 搜索值
      */
    SearchValue?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 偏移值
      */
    Offset?: number;
    /**
      * 出站还是入站，0：入站，1：出站
      */
    Direction?: number;
    /**
      * EdgeId值
      */
    EdgeId?: string;
    /**
      * 规则是否开启，'0': 未开启，'1': 开启, 默认为'0'
      */
    Status?: string;
    /**
      * 地域
      */
    Area?: string;
    /**
      * 实例ID
      */
    InstanceId?: string;
}
/**
 * DescribeVpcRuleOverview请求参数结构体
 */
export interface DescribeVpcRuleOverviewRequest {
    /**
      * EdgeId值两个vpc间的边id  不是必填项可以为空，就是所有vpc间的访问控制规则
      */
    EdgeId: string;
}
/**
 * 未处置事件详情
 */
export interface UnHandleEvent {
    /**
      * 伪攻击链类型
      */
    EventTableListStruct: Array<UnHandleEventDetail>;
    /**
      * 1 是  0否
      */
    BaseLineUser: number;
    /**
      * 1 打开 0 关闭
      */
    BaseLineInSwitch: number;
    /**
      * 1 打开 0 关闭
      */
    BaseLineOutSwitch: number;
    /**
      * vpc间防火墙实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcFwCount: number;
}
/**
 * DescribeAssociatedInstanceList请求参数结构体
 */
export interface DescribeAssociatedInstanceListRequest {
    /**
      * 列表偏移量
      */
    Offset: number;
    /**
      * 每页记录条数
      */
    Limit: number;
    /**
      * 地域代码（例：ap-guangzhou）,支持腾讯云全地域
      */
    Area: string;
    /**
      * 额外检索条件（JSON字符串）
      */
    SearchValue?: string;
    /**
      * 排序字段
      */
    By?: string;
    /**
      * 排序方式（asc:升序,desc:降序）
      */
    Order?: string;
    /**
      * 安全组ID
      */
    SecurityGroupId?: string;
    /**
      * 实例类型,'3'是cvm实例,'4'是clb实例,'5'是eni实例,'6'是云数据库
      */
    Type?: string;
}
/**
 * DeleteAcRule请求参数结构体
 */
export interface DeleteAcRuleRequest {
    /**
      * 删除规则对应的id值, 对应获取规则列表接口的Id 值
      */
    Id: number;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * EdgeId值两个vpc间的边id
      */
    EdgeId?: string;
    /**
      * NAT地域， 如ap-shanghai/ap-guangzhou/ap-chongqing等
      */
    Area?: string;
}
/**
 * DeleteAllAccessControlRule返回参数结构体
 */
export interface DeleteAllAccessControlRuleResponse {
    /**
      * 状态值 0: 修改成功, !0: 修改失败
      */
    Status: number;
    /**
      * 删除了几条访问控制规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNatFwSwitch请求参数结构体
 */
export interface ModifyNatFwSwitchRequest {
    /**
      * 开关，0：关闭，1：开启
      */
    Enable: number;
    /**
      * 防火墙实例id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。
      */
    CfwInsIdList?: Array<string>;
    /**
      * 子网id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。
      */
    SubnetIdList?: Array<string>;
    /**
      * 路由表id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。
      */
    RouteTableIdList?: Array<string>;
}
/**
 * DescribeIPStatusList返回参数结构体
 */
export interface DescribeIPStatusListResponse {
    /**
      * ip状态信息
      */
    StatusList: Array<IPDefendStatus>;
    /**
      * 状态码
      */
    ReturnCode: number;
    /**
      * 状态信息
      */
    ReturnMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatRuleOverview请求参数结构体
 */
export interface DescribeNatRuleOverviewRequest {
    /**
      * 方向，0：出站，1：入站 默认值：0
      */
    Direction?: number;
    /**
      * NAT地域  这个是必填项，填入相关的英文，'ap-beijing-fsi': '北京金融',
        'ap-beijing': '北京',
        'ap-changsha-ec': '长沙EC',
        'ap-chengdu': '成都',
        'ap-chongqing': '重庆',
        'ap-fuzhou-ec': '福州EC',
        'ap-guangzhou-open': '广州Open',
        'ap-guangzhou': '广州',
        'ap-hangzhou-ec': '杭州EC',
        'ap-jinan-ec': '济南EC',
        'ap-nanjing': '南京',
        'ap-shanghai-fsi': '上海金融',
        'ap-shanghai': '上海',
        'ap-shenzhen-fsi': '深圳金融',
        'ap-shenzhen': '深圳',
        'ap-wuhan-ec': '武汉EC'
      */
    Area?: string;
}
/**
 * CreateDatabaseWhiteListRules请求参数结构体
 */
export interface CreateDatabaseWhiteListRulesRequest {
    /**
      * 创建白名单数据
      */
    DatabaseWhiteListRuleData: Array<DatabaseWhiteListRuleData>;
}
/**
 * DescribeResourceGroup请求参数结构体
 */
export interface DescribeResourceGroupRequest {
    /**
      * 查询类型 网络结构 vpc，业务识别- resource ，资源标签-tag
      */
    QueryType: string;
    /**
      * 资产组id  全部传0
      */
    GroupId?: string;
}
/**
 * Nat实例卡片详细信息
 */
export interface NatInstanceInfo {
    /**
      * nat实例id
      */
    NatinsId: string;
    /**
      * nat实例名称
      */
    NatinsName: string;
    /**
      * 实例所在地域
      */
    Region: string;
    /**
      * 0: 新增模式，1:接入模式
      */
    FwMode: number;
    /**
      * 实例带宽大小 Mbps
      */
    BandWidth: number;
    /**
      * 入向带宽峰值 bps
      */
    InFlowMax: number;
    /**
      * 出向带宽峰值 bps
      */
    OutFlowMax: number;
    /**
      * 地域中文信息
      */
    RegionZh: string;
    /**
      * 公网ip数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipAddress: Array<string>;
    /**
      * 内外使用ip数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcIp: Array<string>;
    /**
      * 实例关联子网数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Subnets: Array<string>;
    /**
      * 0 :正常 1：正在初始化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * Nat防火墙弹性公网ip列表
 */
export interface NatFwEipsInfo {
    /**
      * 弹性公网ip
      */
    Eip: string;
    /**
      * 所属的Nat网关Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatGatewayId: string;
    /**
      * Nat网关名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatGatewayName: string;
}
/**
 * DeleteSecurityGroupAllRule请求参数结构体
 */
export interface DeleteSecurityGroupAllRuleRequest {
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 腾讯云地域的英文简写
      */
    Area: string;
}
/**
 * DescribeTLogIpList返回参数结构体
 */
export interface DescribeTLogIpListResponse {
    /**
      * 数据集合
      */
    Data: Array<StaticInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopSecurityGroupRuleDispatch返回参数结构体
 */
export interface StopSecurityGroupRuleDispatchResponse {
    /**
      * true代表成功，false代表错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatFwInfoCount请求参数结构体
 */
export declare type DescribeNatFwInfoCountRequest = null;
/**
 * AddAcRule返回参数结构体
 */
export interface AddAcRuleResponse {
    /**
      * 创建成功后返回新策略的uuid
      */
    RuleUuid: number;
    /**
      * 0代表成功，-1代表失败
      */
    ReturnCode: number;
    /**
      * success代表成功，failed代表失败
      */
    ReturnMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNatFwReSelect请求参数结构体
 */
export interface ModifyNatFwReSelectRequest {
    /**
      * 模式 1：接入模式；0：新增模式
      */
    Mode: number;
    /**
      * 防火墙实例id
      */
    CfwInstance: string;
    /**
      * 接入模式重新接入的nat网关列表，其中NatGwList和VpcList只能传递一个。
      */
    NatGwList?: Array<string>;
    /**
      * 新增模式重新接入的vpc列表，其中NatGwList和NatgwList只能传递一个。
      */
    VpcList?: Array<string>;
}
/**
 * SetNatFwDnatRule请求参数结构体
 */
export interface SetNatFwDnatRuleRequest {
    /**
      * 0：cfw新增模式，1：cfw接入模式。
      */
    Mode: number;
    /**
      * 操作类型，可选值：add，del，modify。
      */
    OperationType: string;
    /**
      * 防火墙实例id，该字段必须传递。
      */
    CfwInstance?: string;
    /**
      * 添加或删除操作的Dnat规则列表。
      */
    AddOrDelDnatRules?: Array<CfwNatDnatRule>;
    /**
      * 修改操作的原始Dnat规则
      */
    OriginDnat?: CfwNatDnatRule;
    /**
      * 修改操作的新的Dnat规则
      */
    NewDnat?: CfwNatDnatRule;
}
/**
 * DescribeSyncAssetStatus返回参数结构体
 */
export interface DescribeSyncAssetStatusResponse {
    /**
      * 1-更新中 2-更新完成 3、4-更新失败
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 双向下发的企业安全组规则
 */
export interface SecurityGroupBothWayInfo {
    /**
      * 执行顺序
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderIndex: number;
    /**
      * 访问源
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceId: string;
    /**
      * 访问源类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceType: number;
    /**
      * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetId: string;
    /**
      * 访问目的类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetType: number;
    /**
      * 协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 目的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: string;
    /**
      * 策略, 1：阻断，2：放行
注意：此字段可能返回 null，表示取不到有效值。
      */
    Strategy: number;
    /**
      * 方向，0：出站，1：入站，默认1
注意：此字段可能返回 null，表示取不到有效值。
      */
    Direction: number;
    /**
      * 地域
      */
    Region: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail?: string;
    /**
      * 是否开关开启，0：未开启，1：开启
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 是否是正常规则，0：正常，1：异常
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsNew?: number;
    /**
      * 单/双向下发，0:单向下发，1：双向下发
注意：此字段可能返回 null，表示取不到有效值。
      */
    BothWay?: number;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName?: string;
    /**
      * 公网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp?: string;
    /**
      * 内网IP，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIp?: string;
    /**
      * 掩码地址，多个以英文逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cidr?: string;
    /**
      * 端口协议类型参数模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceTemplateId?: string;
    /**
      * 是否使用端口协议模板，0：否，1：是
      */
    ProtocolPortType?: number;
}
/**
 * ModifyAllRuleStatus返回参数结构体
 */
export interface ModifyAllRuleStatusResponse {
    /**
      * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopSecurityGroupRuleDispatch请求参数结构体
 */
export interface StopSecurityGroupRuleDispatchRequest {
    /**
      * 值为1，中止全部
      */
    StopType?: number;
}
/**
 * DescribeGuideScanInfo请求参数结构体
 */
export declare type DescribeGuideScanInfoRequest = null;
/**
 * ModifyBlockTop返回参数结构体
 */
export interface ModifyBlockTopResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 地址模版列表数据
 */
export interface TemplateListInfo {
    /**
      * 模版ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uuid: string;
    /**
      * 模版名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail: string;
    /**
      * IP模版
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpString: string;
    /**
      * 插入时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime: string;
    /**
      * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 模版类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 关联规则条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RulesNum: number;
}
/**
 * CreateSecurityGroupApiRules请求参数结构体
 */
export interface CreateSecurityGroupApiRulesRequest {
    /**
      * 创建规则数据
      */
    Data: Array<SecurityGroupApiRuleData>;
    /**
      * 方向，0：出站，1：入站
      */
    Direction: number;
    /**
      * 插入类型，0：后插，1：前插，2：中插
      */
    Type?: number;
    /**
      * 腾讯云地域的英文简写
      */
    Area?: string;
}
/**
 * DescribeNatFwVpcDnsLst返回参数结构体
 */
export interface DescribeNatFwVpcDnsLstResponse {
    /**
      * nat防火墙vpc dns 信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcDnsSwitchLst: Array<VpcDnsInfo>;
    /**
      * 返回参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 开关总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateChooseVpcs请求参数结构体
 */
export interface CreateChooseVpcsRequest {
    /**
      * vpc列表
      */
    VpcList: Array<string>;
    /**
      * zone列表
      */
    AllZoneList: Array<VpcZoneData>;
}
/**
 * ExpandCfwVertical返回参数结构体
 */
export interface ExpandCfwVerticalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBlockStaticList请求参数结构体
 */
export interface DescribeBlockStaticListRequest {
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 类型
      */
    QueryType: string;
    /**
      * top数
      */
    Top: number;
    /**
      * 查询条件
      */
    SearchValue?: string;
}
/**
 * 告警中心概览数据

 */
export interface TLogInfo {
    /**
      * 失陷主机
      */
    OutNum: number;
    /**
      * 待处置告警
      */
    HandleNum: number;
    /**
      * 漏洞攻击
      */
    VulNum: number;
    /**
      * 网络探测
      */
    NetworkNum: number;
    /**
      * 封禁列表
      */
    BanNum: number;
    /**
      * 暴力破解
      */
    BruteForceNum: number;
}
/**
 * CreateSecurityGroupRules请求参数结构体
 */
export interface CreateSecurityGroupRulesRequest {
    /**
      * 添加的企业安全组规则数据
      */
    Data: Array<SecurityGroupListData>;
    /**
      * 方向，0：出站，1：入站，默认1
      */
    Direction: number;
    /**
      * 0：后插，1：前插，2：中插，默认0
      */
    Type?: number;
    /**
      * 添加后是否启用规则，0：不启用，1：启用，默认1
      */
    Enable?: number;
}
/**
 * DeleteVpcInstance请求参数结构体
 */
export declare type DeleteVpcInstanceRequest = null;
/**
 * 防火墙开关列表对象
 */
export interface SwitchListsData {
    /**
      * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp: string;
    /**
      * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntranetIp: string;
    /**
      * 实例名
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 资产类型
      */
    AssetType: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Area: string;
    /**
      * 防火墙开关
      */
    Switch: number;
    /**
      * id值
      */
    Id: number;
    /**
      * 公网 IP 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpType: number;
    /**
      * 风险端口数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PortTimes: number;
    /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastTime: string;
    /**
      * 扫描深度
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanMode: string;
    /**
      * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanStatus: number;
}
/**
 * CreateNatFwInstanceWithDomain请求参数结构体
 */
export interface CreateNatFwInstanceWithDomainRequest {
    /**
      * 防火墙实例名称
      */
    Name: string;
    /**
      * 带宽
      */
    Width: number;
    /**
      * 模式 1：接入模式；0：新增模式
      */
    Mode: number;
    /**
      * 新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。
      */
    NewModeItems?: NewModeItems;
    /**
      * 接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。
      */
    NatGwList?: Array<string>;
    /**
      * 主可用区，为空则选择默认可用区
      */
    Zone?: string;
    /**
      * 备可用区，为空则选择默认可用区
      */
    ZoneBak?: string;
    /**
      * 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备
      */
    CrossAZone?: number;
    /**
      * 0不创建域名,1创建域名
      */
    IsCreateDomain?: number;
    /**
      * 如果要创建域名则必填
      */
    Domain?: string;
}
/**
 * DescribeSwitchLists返回参数结构体
 */
export interface DescribeSwitchListsResponse {
    /**
      * 总条数
      */
    Total?: number;
    /**
      * 列表数据
      */
    Data?: Array<SwitchListsData>;
    /**
      * 区域列表
      */
    AreaLists?: Array<string>;
    /**
      * 打开个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OnNum?: number;
    /**
      * 关闭个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OffNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSyncAssetStatus请求参数结构体
 */
export interface DescribeSyncAssetStatusRequest {
    /**
      * 0: 互联网防火墙开关，1：vpc 防火墙开关
      */
    Type?: number;
}
/**
 * DescribeCfwEips返回参数结构体
 */
export interface DescribeCfwEipsResponse {
    /**
      * 返回值信息
      */
    NatFwEipList: Array<NatFwEipsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyResourceGroup返回参数结构体
 */
export interface ModifyResourceGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteResourceGroup返回参数结构体
 */
export interface DeleteResourceGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSwitchLists请求参数结构体
 */
export interface DescribeSwitchListsRequest {
    /**
      * 防火墙状态  0: 关闭，1：开启
      */
    Status?: number;
    /**
      * 资产类型 CVM/NAT/VPN/CLB/其它
      */
    Type?: string;
    /**
      * 地域 上海/重庆/广州，等等
      */
    Area?: string;
    /**
      * 搜索值  例子："{"common":"106.54.189.45"}"
      */
    SearchValue?: string;
    /**
      * 条数  默认值:10
      */
    Limit?: number;
    /**
      * 偏移值 默认值: 0
      */
    Offset?: number;
    /**
      * 排序，desc：降序，asc：升序
      */
    Order?: string;
    /**
      * 排序字段 PortTimes(风险端口数)
      */
    By?: string;
}
/**
 * ModifyItemSwitchStatus请求参数结构体
 */
export interface ModifyItemSwitchStatusRequest {
    /**
      * id值
      */
    Id: number;
    /**
      * 状态值，0: 关闭 ,1:开启
      */
    Status: number;
    /**
      * 0: 互联网边界边界防火墙开关，1：vpc防火墙开关
      */
    Type?: number;
}
/**
 * ModifyRunSyncAsset请求参数结构体
 */
export interface ModifyRunSyncAssetRequest {
    /**
      * 0: 互联网防火墙开关，1：vpc 防火墙开关
      */
    Type?: number;
}
/**
 * CreateAcRules返回参数结构体
 */
export interface CreateAcRulesResponse {
    /**
      * 状态值，0:操作成功
      */
    Status?: number;
    /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAssetScan返回参数结构体
 */
export interface ModifyAssetScanResponse {
    /**
      * 接口返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
    /**
      * 接口返回错误码，0请求成功  非0失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnCode: number;
    /**
      * 状态值 0：成功，1 执行扫描中,其他：失败
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAcRule请求参数结构体
 */
export interface ModifyAcRuleRequest {
    /**
      * 规则数组
      */
    Data: Array<RuleInfoData>;
    /**
      * EdgeId值
      */
    EdgeId?: string;
    /**
      * 访问规则状态
      */
    Enable?: number;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * DescribeNatFwInstancesInfo返回参数结构体
 */
export interface DescribeNatFwInstancesInfoResponse {
    /**
      * 实例卡片信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatinsLst: Array<NatInstanceInfo>;
    /**
      * nat 防火墙个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyVPCSwitchStatus请求参数结构体
 */
export interface ModifyVPCSwitchStatusRequest {
    /**
      * 公网IP
      */
    FirewallVpcId: string;
    /**
      * 状态值，0: 关闭 ,1:开启
      */
    Status: number;
}
/**
 * ModifyBlockIgnoreList返回参数结构体
 */
export interface ModifyBlockIgnoreListResponse {
    /**
      * 接口返回信息
      */
    ReturnMsg: string;
    /**
      * 接口返回错误码，0请求成功  非0失败
      */
    ReturnCode: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNatFwInstance返回参数结构体
 */
export interface DescribeNatFwInstanceResponse {
    /**
      * 实例数组
      */
    NatinsLst: Array<NatFwInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupRule返回参数结构体
 */
export interface ModifySecurityGroupRuleResponse {
    /**
      * 状态值，0：编辑成功，非0：编辑失败
      */
    Status: number;
    /**
      * 编辑后新生成规则的Id
      */
    NewRuleId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecurityGroupAllRuleStatus返回参数结构体
 */
export interface ModifySecurityGroupAllRuleStatusResponse {
    /**
      * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设置nat防火墙的vpc dns 接入开关
 */
export interface DnsVpcSwitch {
    /**
      * vpc id
      */
    VpcId: string;
    /**
      * 0：设置为关闭 1:设置为打开
      */
    Status: number;
}
/**
 * 企业安全组关联实例信息
 */
export interface AssociatedInstanceInfo {
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例类型，3是cvm实例,4是clb实例,5是eni实例,6是云数据库
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 私有网络名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcName: string;
    /**
      * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIp: string;
    /**
      * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 关联安全组数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecurityGroupCount: number;
}
/**
 * CreateAcRules请求参数结构体
 */
export interface CreateAcRulesRequest {
    /**
      * 创建规则数据
      */
    Data: Array<RuleInfoData>;
    /**
      * 0：添加（默认），1：插入
      */
    Type?: number;
    /**
      * 边id
      */
    EdgeId?: string;
    /**
      * 访问控制规则状态
      */
    Enable?: number;
    /**
      * 0：添加，1：覆盖
      */
    Overwrite?: number;
    /**
      * NAT实例ID, 参数Area存在的时候这个必传
      */
    InstanceId?: string;
    /**
      * portScan: 来自于端口扫描, patchImport: 来自于批量导入
      */
    From?: string;
    /**
      * NAT地域
      */
    Area?: string;
}
/**
 * ModifyTableStatus请求参数结构体
 */
export interface ModifyTableStatusRequest {
    /**
      * EdgeId值两个vpc间的边id
      */
    EdgeId?: string;
    /**
      * 状态值，1：锁表，2：解锁表
      */
    Status?: number;
    /**
      * Nat所在地域
      */
    Area?: string;
    /**
      * 0： 出向，1：入向
      */
    Direction?: number;
}
/**
 * ModifyTableStatus返回参数结构体
 */
export interface ModifyTableStatusResponse {
    /**
      * 0：正常，-1：不正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGuideScanInfo返回参数结构体
 */
export interface DescribeGuideScanInfoResponse {
    /**
      * 扫描信息
      */
    Data: ScanInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
