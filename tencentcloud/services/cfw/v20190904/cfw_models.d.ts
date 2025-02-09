/**
 * ModifyEWRuleStatus返回参数结构体
 */
export interface ModifyEWRuleStatusResponse {
    /**
     * 状态值，0：修改成功，非0：修改失败
     */
    ReturnCode?: number;
    /**
     * 状态信息，success：查询成功，fail：查询失败
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNatFwInstance请求参数结构体
 */
export declare type DescribeNatFwInstanceRequest = null;
/**
 * DescribeNatFwInstanceWithRegion请求参数结构体
 */
export declare type DescribeNatFwInstanceWithRegionRequest = null;
/**
 * DescribeLogs请求参数结构体
 */
export interface DescribeLogsRequest {
    /**
     * 日志类型标识
  流量日志：互联网边界防火墙netflow_border，NAT边界防火墙netflow_nat，VPC间防火墙vpcnetflow，内网流量日志netflow_fl
  入侵防御日志rule_threatinfo
  访问控制日志：互联网边界规则rule_acl，NAT边界规则rule_acl，内网间规则rule_vpcacl，企业安全组rule_sg
  操作日志：防火墙开关-开关操作operate_switch，防火墙开关-实例配置operate_instance，资产中心操作operate_assetgroup，访问控制操作operate_acl，零信任防护操作operate_identity，入侵防御操作-入侵防御operate_ids，入侵防御操作-安全基线operate_baseline，常用工具操作operate_tool，网络蜜罐操作operate_honeypot，日志投递操作operate_logdelivery，通用设置操作operate_logstorage，登录日志operate_login
     */
    Index: string;
    /**
     * 每页条数，最大支持2000
     */
    Limit: number;
    /**
     * 偏移值，最大支持60000
     */
    Offset: number;
    /**
     * 筛选开始时间
     */
    StartTime: string;
    /**
     * 筛选结束时间
     */
    EndTime: string;
    /**
     * 过滤条件组合，各数组元素间为AND关系，查询字段名Name参考文档https://cloud.tencent.com/document/product/1132/87894，数值类型字段不支持模糊匹配
     */
    Filters?: Array<CommonFilter>;
}
/**
 * ModifyFwGroupSwitch请求参数结构体
 */
export interface ModifyFwGroupSwitchRequest {
    /**
     * 打开或关闭开关
  0：关闭开关
  1：打开开关
     */
    Enable: number;
    /**
     * 是否操作全部开关 0 不操作全部开关，1 操作全部开关
     */
    AllSwitch: number;
    /**
     * 开关列表
     */
    SwitchList?: Array<FwGroupSwitch>;
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
 * ModifyAssetSync返回参数结构体
 */
export interface ModifyAssetSyncResponse {
    /**
     * 返回状态
  0 请求成功
  2 请求失败
  3 请求失败-频率限制
     */
    Status?: number;
    /**
     * success 成功
  其他失败
     */
    ReturnMsg?: string;
    /**
     * 0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNatFwVpcDnsSwitch返回参数结构体
 */
export interface ModifyNatFwVpcDnsSwitchResponse {
    /**
     * 修改成功
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBlockIgnoreRuleNew请求参数结构体
 */
export interface CreateBlockIgnoreRuleNewRequest {
    /**
     * 非自定义类型规则列表
     */
    Rules: Array<BanAndAllowRule>;
    /**
     * RuleType: 1黑名单 2外部IP 3域名 4情报 5资产 6自定义规则  7入侵防御规则
     */
    RuleType: number;
    /**
     * 是否覆盖重复数据，1覆盖，非1不覆盖，跳过重复数据
     */
    CoverDuplicate?: number;
}
/**
 * ModifyAddressTemplate请求参数结构体
 */
export interface ModifyAddressTemplateRequest {
    /**
     * 地址模板唯一Id
     */
    Uuid: string;
    /**
     * 模板名称
     */
    Name: string;
    /**
     * 模板描述
     */
    Detail: string;
    /**
     * Type为1，ip模板eg：1.1.1.1,2.2.2.2；
  Type为5，域名模板eg：www.qq.com,www.tencent.com
     */
    IpString: string;
    /**
     * 1 ip模板
  5 域名模板
     */
    Type: number;
    /**
     * 协议端口模板，协议类型，4:4层协议，7:7层协议。Type=6时必填。
     */
    ProtocolType?: string;
}
/**
 * DescribeRuleOverview返回参数结构体
 */
export interface DescribeRuleOverviewResponse {
    /**
     * 规则总数
     */
    AllTotal?: number;
    /**
     * 阻断策略规则数量
     */
    StrategyNum?: number;
    /**
     * 启用规则数量
     */
    StartRuleNum?: number;
    /**
     * 停用规则数量
     */
    StopRuleNum?: number;
    /**
     * 剩余配额
     */
    RemainingNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 新手引导扫描信息
 */
export interface ScanInfo {
    /**
     * 进度
     */
    ScanPercent?: number;
    /**
     * 扫描结果信息
     */
    ScanResultInfo?: ScanResultInfo;
    /**
     * 扫描状态 0扫描中 1完成  2未勾选自动扫描
     */
    ScanStatus?: number;
    /**
     * 预计完成时间
     */
    ScanTime?: string;
}
/**
 * ModifyEnterpriseSecurityGroupRule返回参数结构体
 */
export interface ModifyEnterpriseSecurityGroupRuleResponse {
    /**
     * 状态值，0：编辑成功，非0：编辑失败
     */
    Status?: number;
    /**
     * 编辑后新生成规则的Id
     */
    NewRuleUuid?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 防火墙网段信息
 */
export interface FwCidrInfo {
    /**
     * 防火墙使用的网段类型，值VpcSelf/Assis/Custom分别代表自有网段优先/扩展网段优先/自定义
     */
    FwCidrType: string;
    /**
     * 为每个vpc指定防火墙的网段
     */
    FwCidrLst?: Array<FwVpcCidr>;
    /**
     * 其他防火墙占用网段，一般是防火墙需要独占vpc时指定的网段
     */
    ComFwCidr?: string;
}
/**
 * StaticInfo 告警柱形图统计信息
 */
export interface StaticInfo {
    /**
     * 地址
     */
    Address?: string;
    /**
     * 资产id
     */
    InsID?: string;
    /**
     * 资产名称
     */
    InsName?: string;
    /**
     * ip信息
     */
    Ip?: string;
    /**
     * 数
     */
    Num?: number;
    /**
     * 端口
     */
    Port?: string;
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
 * DescribeNatAcRule返回参数结构体
 */
export interface DescribeNatAcRuleResponse {
    /**
     * 总条数
     */
    Total?: number;
    /**
     * nat访问控制列表数据
     */
    Data?: Array<DescAcItem>;
    /**
     * 未过滤的总条数
     */
    AllTotal?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBlockTop请求参数结构体
 */
export interface ModifyBlockTopRequest {
    /**
     * 操作类型 1 置顶 0取消
     */
    OpeType: string;
    /**
     * 记录id
     */
    UniqueId: string;
}
/**
 * AddAclRule请求参数结构体
 */
export interface AddAclRuleRequest {
    /**
     * 需要添加的访问控制规则列表
     */
    Rules: Array<CreateRuleItem>;
    /**
     * 添加规则的来源，一般不需要使用，值insert_rule 表示插入指定位置的规则；值batch_import 表示批量导入规则；为空时表示添加规则
     */
    From?: string;
}
/**
 * DescribeVpcFwGroupSwitch请求参数结构体
 */
export interface DescribeVpcFwGroupSwitchRequest {
    /**
     * 每页条数
     */
    Limit: number;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
     */
    Order?: string;
    /**
     * 排序所用到的字段
     */
    By?: string;
}
/**
 * 防火墙部署输入参数列表
 */
export interface FwDeploy {
    /**
     * 防火墙部署地域
     */
    DeployRegion: string;
    /**
     * 带宽，单位：Mbps
     */
    Width: number;
    /**
     * 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备
     */
    CrossAZone?: number;
    /**
     * 主可用区，为空则选择默认可用区
     */
    Zone?: string;
    /**
     * 备可用区，为空则选择默认可用区
     */
    ZoneBak?: string;
    /**
     * 若为cdc防火墙时填充该id
     */
    CdcId?: string;
}
/**
 * CreateAlertCenterIsolate返回参数结构体
 */
export interface CreateAlertCenterIsolateResponse {
    /**
     * 返回状态码：
  0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 返回信息：
  success 成功
  其他
     */
    ReturnMsg?: string;
    /**
     * 处置状态码：
  0  处置成功
  -1 通用错误，不用处理
  -3 表示重复，需重新刷新列表
  其他
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNatAcRule请求参数结构体
 */
export interface ModifyNatAcRuleRequest {
    /**
     * 需要编辑的规则数组,基于Uuid唯一id来修改该规则
     */
    Rules: Array<CreateNatRuleItem>;
}
/**
 * ModifyAclRule请求参数结构体
 */
export interface ModifyAclRuleRequest {
    /**
     * 需要编辑的规则数组，基于Uuid唯一id修改该规则
     */
    Rules: Array<CreateRuleItem>;
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
     */
    Info?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAssetScan返回参数结构体
 */
export interface ModifyAssetScanResponse {
    /**
     * 接口返回信息
     */
    ReturnMsg?: string;
    /**
     * 接口返回错误码，0请求成功  非0失败
     */
    ReturnCode?: number;
    /**
     * 状态值 0：成功，1 执行扫描中,其他：失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNatSequenceRules请求参数结构体
 */
export interface ModifyNatSequenceRulesRequest {
    /**
     * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
     */
    RuleChangeItems: Array<RuleChangeItem>;
    /**
     * 规则方向：1，入站；0，出站
     */
    Direction: number;
}
/**
 * DescribeAclRule返回参数结构体
 */
export interface DescribeAclRuleResponse {
    /**
     * 总条数
     */
    Total?: number;
    /**
     * nat访问控制列表数据
     */
    Data?: Array<DescAcItem>;
    /**
     * 未过滤的总条数
     */
    AllTotal?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNatFwInstanceWithRegion返回参数结构体
 */
export interface DescribeNatFwInstanceWithRegionResponse {
    /**
     * 实例数组
     */
    NatinsLst?: Array<NatFwInstance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTLogInfo请求参数结构体
 */
export interface DescribeTLogInfoRequest {
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 类型 1 告警 2阻断
     */
    QueryType: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 查询条件
     */
    SearchValue?: string;
}
/**
 * 入侵防御放通封禁规则
 */
export interface BlockIgnoreRule {
    /**
     * 规则类型，取值：1 封禁，2外部IP，3域名，4情报，5assets，6自定义策略，7入侵防御规则id （2-7属于白名单类型）
     */
    RuleType?: number;
    /**
     * 规则ip或白名单内容
     */
    Ioc?: string;
    /**
     * 资产实例名称、自定义策略名称等
     */
    IocName?: string;
    /**
     * 白名单信息
     */
    IocInfo?: string;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * IP
     */
    IP?: string;
    /**
     * 危险等级
     */
    Level?: string;
    /**
     * 来源事件名称
     */
    EventName?: string;
    /**
     * 方向：1入站，0出站
     */
    Direction?: number;
    /**
     * 所有方向聚合成字符串
     */
    DirectionList?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 地理位置
     */
    Address?: string;
    /**
     * 规则类型：1封禁，2放通
     */
    Action?: number;
    /**
     * 规则生效开始时间
     */
    StartTime?: string;
    /**
     * 规则生效结束时间
     */
    EndTime?: string;
    /**
     * 忽略原因
     */
    IgnoreReason?: string;
    /**
     * 安全事件来源
     */
    Source?: string;
    /**
     * 规则id
     */
    UniqueId?: string;
    /**
     * 规则命中次数
     */
    MatchTimes?: number;
    /**
     * 国家
     */
    Country?: string;
    /**
     * 备注
     */
    Comment?: string;
    /**
     * 上次命中时间
     */
    LastHitTime?: string;
    /**
     * 自定义规则细节
     */
    CustomRule?: CustomWhiteRule;
    /**
     * 1 border 2 nat 4 vpc 8 border-serial
     */
    FwType?: number;
}
/**
 * ModifyFwGroupSwitch返回参数结构体
 */
export interface ModifyFwGroupSwitchResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteNatFwInstance返回参数结构体
 */
export interface DeleteNatFwInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteBlockIgnoreRuleNew返回参数结构体
 */
export interface DeleteBlockIgnoreRuleNewResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyEdgeIpSwitch请求参数结构体
 */
export interface ModifyEdgeIpSwitchRequest {
    /**
     * 0 关闭开关
  1 打开开关
  2 不操作开关，此次切换模式
     */
    Enable?: number;
    /**
     * 操作开关详情
     */
    EdgeIpSwitchLst?: Array<EdgeIpSwitch>;
    /**
     * 0 不自动选择子网
  1 自动选择子网创建私有连接
     */
    AutoChooseSubnet?: number;
    /**
     * 0 切换为旁路
  1 切换为串行
  2 不切换模式，此次操作开关
     */
    SwitchMode?: number;
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
     * 1：cfw接入模式，目前仅支持接入模式实例
     */
    Mode: number;
    /**
     * ALL：查询所有弹性公网ip; nat-xxxxx：接入模式场景指定网关的弹性公网ip
     */
    NatGatewayId: string;
    /**
     * 防火墙实例id，当前仅支持接入模式的实例
     */
    CfwInstance?: string;
}
/**
 * DescribeTLogInfo返回参数结构体
 */
export interface DescribeTLogInfoResponse {
    /**
     * "NetworkNum":网络扫描探测
   "HandleNum": 待处理事件
  "BanNum":
    "VulNum": 漏洞利用
    "OutNum": 失陷主机
  "BruteForceNum": 0
     */
    Data?: TLogInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyNatInstance请求参数结构体
 */
export interface ModifyNatInstanceRequest {
    /**
     * NAT防火墙实例名称
     */
    InstanceName: string;
    /**
     * NAT防火墙实例ID
     */
    NatInstanceId?: string;
}
/**
 * DescribeNatFwDnatRule请求参数结构体
 */
export interface DescribeNatFwDnatRuleRequest {
    /**
     * 需要查询的索引，特定场景使用，可不填
     */
    Index?: string;
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * 每页条数
     */
    Limit?: number;
    /**
     * 偏移值
     */
    Offset?: number;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值，可不传
     */
    Order?: string;
    /**
     * 排序所用到的字段，可不传
     */
    By?: string;
}
/**
 * DescribeAssociatedInstanceList返回参数结构体
 */
export interface DescribeAssociatedInstanceListResponse {
    /**
     * 实例数量
     */
    Total?: number;
    /**
     * 实例列表
     */
    Data?: Array<AssociatedInstanceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 企业安全组关联实例信息
 */
export interface AssociatedInstanceInfo {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * 实例类型，3是cvm实例,4是clb实例,5是eni实例,6是云数据库
     */
    Type: number;
    /**
     * 私有网络ID
     */
    VpcId: string;
    /**
     * 私有网络名称
     */
    VpcName: string;
    /**
     * 公网IP
     */
    PublicIp: string;
    /**
     * 内网IP
     */
    Ip: string;
    /**
     * 关联安全组数量
     */
    SecurityGroupCount: number;
    /**
     * 关联安全组规则数量
     */
    SecurityGroupRuleCount?: number;
    /**
     * 关联数据库代理Id
     */
    CdbId?: string;
}
/**
 * CreateBlockIgnoreRuleList请求参数结构体
 */
export interface CreateBlockIgnoreRuleListRequest {
    /**
     * 规则列表
     */
    Rules: Array<IntrusionDefenseRule>;
    /**
     * 规则类型，1封禁，2放通，不支持域名封禁
     */
    RuleType: number;
    /**
     * 是否覆盖重复数据，1覆盖，非1不覆盖，跳过重复数据
     */
    CoverDuplicate?: number;
}
/**
 * RemoveAcRule返回参数结构体
 */
export interface RemoveAcRuleResponse {
    /**
     * 删除成功后返回被删除策略的uuid
     */
    RuleUuid?: number;
    /**
     * 0代表成功，-1代表失败
     */
    ReturnCode?: number;
    /**
     * success代表成功，failed代表失败
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    NatinsId?: string;
    /**
     * nat实例名称
     */
    NatinsName?: string;
    /**
     * 实例所在地域
     */
    Region?: string;
    /**
     * 0:新增模式，1:接入模式
     */
    FwMode?: number;
    /**
     * 0:正常状态， 1: 正在创建
     */
    Status?: number;
    /**
     * nat公网ip
     */
    NatIp?: string;
}
/**
 * ModifyNatAcRule返回参数结构体
 */
export interface ModifyNatAcRuleResponse {
    /**
     * 编辑成功后返回新策略ID列表
     */
    RuleUuid?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAclRule请求参数结构体
 */
export interface DescribeAclRuleRequest {
    /**
     * 每页条数
     */
    Limit: number;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 需要查询的索引，特定场景使用，可不填
     */
    Index?: string;
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值，默认为asc
     */
    Order?: string;
    /**
     * 排序所用到的字段，默认为sequence
     */
    By?: string;
}
/**
 * Nat实例卡片详细信息
 */
export interface NatInstanceInfo {
    /**
     * nat实例id
     */
    NatinsId?: string;
    /**
     * nat实例名称
     */
    NatinsName?: string;
    /**
     * 实例所在地域
     */
    Region?: string;
    /**
     * 0: 新增模式，1:接入模式
     */
    FwMode?: number;
    /**
     * 实例带宽大小 Mbps
     */
    BandWidth?: number;
    /**
     * 入向带宽峰值 bps
     */
    InFlowMax?: number;
    /**
     * 出向带宽峰值 bps
     */
    OutFlowMax?: number;
    /**
     * 地域中文信息
     */
    RegionZh?: string;
    /**
     * 公网ip数组
     */
    EipAddress?: Array<string>;
    /**
     * 内外使用ip数组
     */
    VpcIp?: Array<string>;
    /**
     * 实例关联子网数组
     */
    Subnets?: Array<string>;
    /**
     * 0 :正常 1：正在初始化
     */
    Status?: number;
    /**
     * 地域区域信息
     */
    RegionDetail?: string;
    /**
     * 实例所在可用区
     */
    ZoneZh?: string;
    /**
     * 实例所在可用区
     */
    ZoneZhBak?: string;
    /**
     * 已使用规则数
     */
    RuleUsed?: number;
    /**
     * 实例的规则限制最大规格数
     */
    RuleMax?: number;
    /**
     * 实例引擎版本
     */
    EngineVersion?: string;
    /**
     * 引擎是否可升级：0，不可升级；1，可升级
     */
    UpdateEnable?: number;
    /**
     * 是的需要升级引擎 支持 nat拨测 1需要 0不需要
     */
    NeedProbeEngineUpdate?: number;
    /**
     * 引擎运行模式，Normal:正常, OnlyRoute:透明模式
     */
    TrafficMode?: string;
    /**
     * 实例主所在可用区
     */
    Zone?: string;
    /**
     * 实例备所在可用区
     */
    ZoneBak?: string;
    /**
     * 引擎预约升级时间
     */
    ReserveTime?: string;
    /**
     * 引擎预约升级版本
     */
    ReserveVersion?: string;
    /**
     * 引擎预约升级版本状态 stable:稳定版；previewed:预览版
     */
    ReserveVersionState?: string;
    /**
     * 弹性开关
  1 打开
  0 关闭
     */
    ElasticSwitch?: number;
    /**
     * 弹性带宽，单位Mbps
     */
    ElasticBandwidth?: number;
    /**
     * 是否首次开通按量付费
  1 是
  0 不是
     */
    IsFirstAfterPay?: number;
}
/**
 * CreateSecurityGroupRules返回参数结构体
 */
export interface CreateSecurityGroupRulesResponse {
    /**
     * 状态值，0：添加成功，非0：添加失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 弹性开关 1打开 0 关闭
     */
    ElasticSwitch?: number;
    /**
     * 弹性带宽上限，单位Mbps
     */
    ElasticBandwidth?: number;
    /**
     * 按量计费标签
     */
    Tags?: Array<TagInfo>;
}
/**
 * ModifyAllPublicIPSwitchStatus返回参数结构体
 */
export interface ModifyAllPublicIPSwitchStatusResponse {
    /**
     * 接口返回信息
     */
    ReturnMsg?: string;
    /**
     * 接口返回错误码，0请求成功  非0失败
     */
    ReturnCode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SyncFwOperate请求参数结构体
 */
export interface SyncFwOperateRequest {
    /**
     * 同步操作类型：Route，同步防火墙路由
     */
    SyncType: string;
    /**
     * 防火墙类型；nat,nat防火墙;ew,vpc间防火墙
     */
    FwType?: string;
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
     * 1封禁列表 2 放通列表
     */
    RuleType: number;
    /**
     * IP、Domain二选一（注：封禁列表，只能填写IP），不能同时为空
     */
    IOC: Array<IocListData>;
    /**
     * 可选值：delete（删除）、edit（编辑）、add（添加）  其他值无效
     */
    IocAction: string;
    /**
     * 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填
     */
    StartTime?: string;
    /**
     * 时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填，必须大于当前时间且大于StartTime
     */
    EndTime?: string;
}
/**
 * 封禁列表和放通列表结构体
 */
export interface BanAndAllowRuleDel {
    /**
     * 封禁和放通对象
     */
    Ioc?: string;
    /**
     * 0互联网出站 1互联网入站 5内网访问源 6内网访问目的 （DeleteBlockIgnoreRuleNew接口，该字段无效）
     */
    DirectionList?: string;
    /**
     * 规则类型
  RuleType: 1黑名单 2外部IP 3域名 4情报 5资产 6自定义规则  7入侵防御规则
     */
    RuleType?: number;
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
    /**
     * （IsDelay为老版参数，新版无需输入）是否延迟下发，1则延迟下发，否则立即下发
     */
    IsDelay?: number;
    /**
     * 来源 默认空 覆盖导入是 batch_import_cover
     */
    From?: string;
    /**
     * 是否复用rule id，1为是，默认不需要
     */
    IsUseId?: number;
}
/**
 * 防火墙引流网关信息
 */
export interface FwGateway {
    /**
     * 防火墙网关id
     */
    GatewayId: string;
    /**
     * 网关所属vpc id
     */
    VpcId: string;
    /**
     * 网关ip地址
     */
    IpAddress: string;
}
/**
 * ModifySecurityGroupSequenceRules返回参数结构体
 */
export interface ModifySecurityGroupSequenceRulesResponse {
    /**
     * 状态值，0：修改成功，非0：修改失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全组规则
 */
export interface SecurityGroupRule {
    /**
     * 访问源示例：
  net：IP/CIDR(192.168.0.2)
  template：参数模板id(ipm-dyodhpby)
  instance：资产实例id(ins-123456)
  resourcegroup：资产分组id(cfwrg-xxxx)
  tag：资源标签({\"Key\":\"标签key值\",\"Value\":\"标签Value值\"})
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
  template：参数模板id(ipm-dyodhpby)
  instance：资产实例id(ins-123456)
  resourcegroup：资产分组id(cfwrg-xxxx)
  tag：资源标签({\"Key\":\"标签key值\",\"Value\":\"标签Value值\"})
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
     * 规则顺序，-1表示最低，1表示最高，请勿和外层Type冲突（和外层的Type配合使用，当中间插入时，指定添加位置）
     */
    OrderIndex: string;
    /**
     * 协议；TCP/UDP/ICMP/ANY
     */
    Protocol?: string;
    /**
     * 访问控制策略的端口。取值：
  -1/-1：全部端口
  80：80端口
     */
    Port?: string;
    /**
     * 端口协议类型参数模板id；协议端口模板id；与Protocol,Port互斥
     */
    ServiceTemplateId?: string;
    /**
     * （入参时无需填写，自动生成）规则对应的唯一id
     */
    Id?: string;
    /**
     * （入参时、Enable已弃用；由通用配置中新增规则启用状态控制）
  规则状态，true表示启用，false表示禁用
     */
    Enable?: string;
    /**
     * 规则对应的唯一内部id
     */
    Uid?: string;
}
/**
 * DeleteIdsWhiteRule请求参数结构体
 */
export interface DeleteIdsWhiteRuleRequest {
    /**
     * 入侵防御白名单id
  参考DescribeIdsWhiteRule接口返回的Id字段
     */
    Id: number;
}
/**
 * ModifyNatFwSwitch返回参数结构体
 */
export interface ModifyNatFwSwitchResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAclRule返回参数结构体
 */
export interface ModifyAclRuleResponse {
    /**
     * 编辑成功后返回新策略ID列表
     */
    RuleUuid?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 指定防火墙使用网段信息
     */
    FwCidrInfo?: FwCidrInfo;
}
/**
 * ModifySecurityGroupItemRuleStatus返回参数结构体
 */
export interface ModifySecurityGroupItemRuleStatusResponse {
    /**
     * 状态值，0：修改成功，非0：修改失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    PageNo?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     */
    PageSize?: string;
    /**
     * 访问控制策略列表
     */
    Rules?: Array<SecurityGroupRule>;
    /**
     * 访问控制策略的总数量。
     */
    TotalCount?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VPC防火墙(组)及防火墙实例详情信息
 */
export interface VpcFwGroupInfo {
    /**
     * 防火墙(组)ID
     */
    FwGroupId?: string;
    /**
     * 防火墙(组)名称
     */
    FwGroupName?: string;
    /**
     * 防火墙组涉及到的开关个数
     */
    FwSwitchNum?: number;
    /**
     * 防火墙(组)部署的地域
     */
    RegionLst?: Array<string>;
    /**
     * 模式 1：CCN云联网模式；0：私有网络模式 2: sase 模式 3：ccn 高级模式 4: 私有网络(跨租户单边模式)
     */
    Mode?: number;
    /**
     * 防火墙实例的开关模式 1: 单点互通 2: 多点互通 3: 全互通 4: 自定义路由
     */
    SwitchMode?: number;
    /**
     * VPC防火墙实例卡片信息数组
     */
    FwInstanceLst?: Array<VpcFwInstanceInfo>;
    /**
     * 防火墙(状态) 0：正常 1: 初始化或操作中
     */
    Status?: number;
    /**
     * auto :自动选择
  如果为网段，则为用户自定义 192.168.0.0/20
     */
    FwVpcCidr?: string;
    /**
     * cdc专用集群场景时表示部署所属的cdc
     */
    CdcId?: string;
    /**
     * cdc专用集群场景时表示cdc名称
     */
    CdcName?: string;
    /**
     * 跨租户模式 1管理员 2单边 0 非跨租户
     */
    CrossUserMode?: string;
    /**
     * 云联网模式下，当前实例是否需要开启重叠路由开关，1：需要开启，0：不需要开启
     */
    NeedSwitchCcnOverlap?: number;
    /**
     * 云联网模式下，实例关联的云联网id
     */
    CcnId?: string;
}
/**
 * DeleteBlockIgnoreRuleList返回参数结构体
 */
export interface DeleteBlockIgnoreRuleListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Num?: number;
    /**
     * 折线图横坐标时间
     */
    StatTime?: string;
}
/**
 * CreateVpcFwGroup返回参数结构体
 */
export interface CreateVpcFwGroupResponse {
    /**
     * 防火墙组ID
     */
    FwGroupId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VPC防火墙实例的CVM信息
 */
export interface VpcFwCvmInsInfo {
    /**
     * VPC防火墙实例ID
     */
    FwInsId: string;
    /**
     * CVM所在地域
     */
    Region?: string;
    /**
     * CVM所在地域中文
     */
    RegionZh?: string;
    /**
     * CVM所在地域详情
     */
    RegionDetail?: string;
    /**
     * 主机所在可用区
     */
    ZoneZh?: string;
    /**
     * 备机所在可用区
     */
    ZoneZhBack?: string;
    /**
     * 防火墙CVM带宽值
     */
    BandWidth?: number;
    /**
     * 实例主机所在可用区
     */
    Zone?: string;
    /**
     * 实例备机所在可用区
     */
    ZoneBak?: string;
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
     * 端口协议类型参数模板id；协议端口模板id
     */
    ServiceTemplateId?: string;
    /**
     * 规则的uuid
     */
    RuleUuid?: number;
}
/**
 * CreateAlertCenterRule请求参数结构体
 */
export interface CreateAlertCenterRuleRequest {
    /**
     * 处置时间
  1  1天
  7   7天
  -2 永久
     */
    HandleTime: number;
    /**
     * 处置类型
  当HandleIdList 不为空时：1封禁 2放通
  当HandleIpList 不为空时：3放通 4封禁
     */
    HandleType: number;
    /**
     * 当前日志方向： 0 出向 1 入向
     */
    AlertDirection: number;
    /**
     * 处置方向： 0出向 1入向 0,1出入向 3内网
     */
    HandleDirection: string;
    /**
     * 处置对象,ID列表，  IdLists和IpList二选一
     */
    HandleIdList?: Array<string>;
    /**
     * 处置对象,IP列表，  IdLists和IpList二选一
     */
    HandleIpList?: Array<string>;
    /**
     * 处置描述
     */
    HandleComment?: string;
    /**
     * 放通原因:
  0默认 1重复 2误报 3紧急放通
     */
    IgnoreReason?: number;
    /**
     * 封禁域名-保留字段
     */
    BlockDomain?: string;
}
/**
 * ModifyNatFwReSelect返回参数结构体
 */
export interface ModifyNatFwReSelectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAlertCenterOmit请求参数结构体
 */
export interface CreateAlertCenterOmitRequest {
    /**
     * 处置对象,ID列表，  IdLists和IpList二选一
     */
    HandleIdList: Array<string>;
    /**
     * 忽略数据来源：
  AlertTable 告警中心  InterceptionTable拦截列表
     */
    TableType: string;
}
/**
 * DescribeVpcAcRule请求参数结构体
 */
export interface DescribeVpcAcRuleRequest {
    /**
     * 每页条数
     */
    Limit: number;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 需要查询的索引，特定场景使用，可不填
     */
    Index?: string;
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
     */
    Order?: string;
    /**
     * 排序所用到的字段
     */
    By?: string;
}
/**
 * DeleteRemoteAccessDomain返回参数结构体
 */
export interface DeleteRemoteAccessDomainResponse {
    /**
     * 状态值 0：删除成功，非 0：删除失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VPC防火墙实例卡片信息
 */
export interface VpcFwInstanceInfo {
    /**
     * VPC防火墙实例名称
     */
    FwInsName: string;
    /**
     * VPC防火墙实例ID
     */
    FwInsId: string;
    /**
     * VPC防火墙实例模式 0: 旧VPC模式防火墙 1: CCN模式防火墙
     */
    FwMode: number;
    /**
     * VPC防火墙接入网络实例个数
     */
    JoinInsNum: number;
    /**
     * VPC防火墙开关个数
     */
    FwSwitchNum: number;
    /**
     * VPC防火墙状态 0:正常 ， 1：创建中 2: 变更中
     */
    Status: number;
    /**
     * VPC防火墙创建时间
     */
    Time: string;
    /**
     * VPC 相关云联网ID列表
     */
    CcnId?: Array<string>;
    /**
     * VPC 相关云联网名称列表
     */
    CcnName?: Array<string>;
    /**
     * VPC 相关对等连接ID列表
     */
    PeerConnectionId?: Array<string>;
    /**
     * VPC 相关对等连接名称列表
     */
    PeerConnectionName?: Array<string>;
    /**
     * VPC防火墙CVM的列表
     */
    FwCvmLst?: Array<VpcFwCvmInsInfo>;
    /**
     * VPC防火墙接入网络实例类型列表
     */
    JoinInsLst?: Array<VpcFwJoinInstanceType>;
    /**
     * 防火墙网关信息
     */
    FwGateway?: Array<FwGateway>;
    /**
     * 防火墙(组)ID
     */
    FwGroupId?: string;
    /**
     * 已使用规则数
     */
    RuleUsed?: number;
    /**
     * 最大规则数
     */
    RuleMax?: number;
    /**
     * 防火墙实例带宽
     */
    Width?: number;
    /**
     * 用户VPC墙总带宽
     */
    UserVpcWidth?: number;
    /**
     * 接入的vpc列表
     */
    JoinInsIdLst?: Array<string>;
    /**
     * 内网间峰值带宽 (单位 bps )
     */
    FlowMax?: number;
    /**
     * 实例引擎版本
     */
    EngineVersion?: string;
    /**
     * 引擎是否可升级：0，不可升级；1，可升级
     */
    UpdateEnable?: number;
    /**
     * 引擎运行模式，Normal:正常, OnlyRoute:透明模式
     */
    TrafficMode?: string;
    /**
     * 引擎预约升级时间
     */
    ReserveTime?: string;
    /**
     * 预约引擎升级版本
     */
    ReserveVersion?: string;
    /**
     * 引擎预约升级版本状态
     */
    ReserveVersionState?: string;
    /**
     * 弹性开关 1打开 0关闭
     */
    ElasticSwitch?: number;
    /**
     * 弹性带宽，单位Mbps
     */
    ElasticBandwidth?: number;
    /**
     * 是否首次开通按量付费
  1 是
  0 不是
     */
    IsFirstAfterPay?: number;
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
 * Nat防火墙弹性公网ip列表
 */
export interface NatFwEipsInfo {
    /**
     * 弹性公网ip
     */
    Eip?: string;
    /**
     * 所属的Nat网关Id
     */
    NatGatewayId?: string;
    /**
     * Nat网关名称
     */
    NatGatewayName?: string;
}
/**
 * AddAclRule返回参数结构体
 */
export interface AddAclRuleResponse {
    /**
     * 创建成功后返回新策略ID列表
     */
    RuleUuid?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRemoteAccessDomain请求参数结构体
 */
export interface DeleteRemoteAccessDomainRequest {
    /**
     * 域名列表
     */
    AccessDomainList: Array<string>;
}
/**
 * SetNatFwEip返回参数结构体
 */
export interface SetNatFwEipResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSecurityGroupRule返回参数结构体
 */
export interface DeleteSecurityGroupRuleResponse {
    /**
     * 状态值，0：成功，非0：失败
     */
    Status?: number;
    /**
     * 返回多余的信息
     */
    Info?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 创建NAT ACL规则参数结构
 */
export interface CreateNatRuleItem {
    /**
     * 访问源示例： net：IP/CIDR(192.168.0.2)
     */
    SourceContent: string;
    /**
     * 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag
     */
    SourceType: string;
    /**
     * 访问目的示例： net：IP/CIDR(192.168.0.2) domain：域名规则，例如*.qq.com
     */
    TargetContent: string;
    /**
     * 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为  ip,net,domain,template,location
     */
    TargetType: string;
    /**
     * 协议，可选的值： TCP UDP ICMP ANY HTTP HTTPS HTTP/HTTPS SMTP SMTPS SMTP/SMTPS FTP DNS
     */
    Protocol: string;
    /**
     * 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察
     */
    RuleAction: string;
    /**
     * 访问控制策略的端口。取值： -1/-1：全部端口 80：80端口
     */
    Port: string;
    /**
     * 规则方向：1，入站；0，出站
     */
    Direction: number;
    /**
     * 规则序号
     */
    OrderIndex: number;
    /**
     * 规则状态，true表示启用，false表示禁用
     */
    Enable?: string;
    /**
     * 规则对应的唯一id，创建规则时无需填写
     */
    Uuid?: number;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 端口协议组ID
     */
    ParamTemplateId?: string;
    /**
     * 内部id
     */
    InternalUuid?: number;
    /**
     * 规则生效的范围：ALL，全局生效；ap-guangzhou，生效的地域；cfwnat-xxx，生效基于实例维度
     */
    Scope?: string;
}
/**
 * ModifyStorageSetting返回参数结构体
 */
export interface ModifyStorageSettingResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Id?: number;
    /**
     * 访问源
     */
    SourceIp?: string;
    /**
     * 访问目的
     */
    TargetIp?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 端口
     */
    Port?: string;
    /**
     * 策略
     */
    Strategy?: number;
    /**
     * 描述
     */
    Detail?: string;
    /**
     * 命中次数
     */
    Count?: number;
    /**
     * 执行顺序
     */
    OrderIndex?: number;
    /**
     * 告警规则id
     */
    LogId?: string;
    /**
     * 规则开关状态 1打开 0关闭
     */
    Status?: number;
    /**
     * 规则源类型
     */
    SrcType?: number;
    /**
     * 规则目的类型
     */
    DstType?: number;
    /**
     * 规则唯一ID
     */
    Uuid?: string;
    /**
     * 规则有效性
  1 有效
  0 无效
     */
    Invalid?: number;
    /**
     * 是否地域规则
     */
    IsRegion?: number;
    /**
     * 云厂商代码
     */
    CloudCode?: string;
    /**
     * 自动化助手信息
     */
    AutoTask?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 地域码信息
     */
    RegionCode?: string;
    /**
     * 国家代码
     */
    Country?: number;
    /**
     * 城市代码
     */
    City?: number;
    /**
     * 国家名称
     */
    RegName1?: string;
    /**
     * 城市名称
     */
    RegName2?: string;
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
 * ModifyBlockIgnoreRuleNew返回参数结构体
 */
export interface ModifyBlockIgnoreRuleNewResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSourceAsset请求参数结构体
 */
export interface DescribeSourceAssetRequest {
    /**
     * ChooseType为1，查询已经分组的资产；ChooseType不为1查询没有分组的资产
     */
    ChooseType?: string;
    /**
     * 模糊查询
     */
    FuzzySearch?: string;
    /**
     * 资产类型 1公网 2内网
     */
    InsType?: string;
    /**
     * 查询单页的最大值；eg：10；则最多返回10条结果
     */
    Limit?: number;
    /**
     * 查询结果的偏移量
     */
    Offset?: number;
    /**
     * 地域
     */
    Zone?: string;
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
 * DescribeFwGroupInstanceInfo返回参数结构体
 */
export interface DescribeFwGroupInstanceInfoResponse {
    /**
     * 防火墙(组)详细信息
     */
    VpcFwGroupLst?: Array<VpcFwGroupInfo>;
    /**
     * 防火墙(组)个数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSourceAsset返回参数结构体
 */
export interface DescribeSourceAssetResponse {
    /**
     * 数据
     */
    Data?: Array<InstanceInfo>;
    /**
     * 返回数据总数
     */
    Total?: number;
    /**
     * 地域集合
     */
    ZoneList?: Array<AssetZone>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFwGroupInstanceInfo请求参数结构体
 */
export interface DescribeFwGroupInstanceInfoRequest {
    /**
     * 每页条数
     */
    Limit: number;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
     */
    Order?: string;
    /**
     * 排序所用到的字段
     */
    By?: string;
}
/**
 * ModifyBlockIgnoreRule请求参数结构体
 */
export interface ModifyBlockIgnoreRuleRequest {
    /**
     * 规则列表
     */
    Rule: IntrusionDefenseRule;
    /**
     * 规则类型，1封禁，2放通
     */
    RuleType: number;
}
/**
 * DescribeEnterpriseSGRuleProgress请求参数结构体
 */
export declare type DescribeEnterpriseSGRuleProgressRequest = null;
/**
 * vpc的防火墙网段
 */
export interface FwVpcCidr {
    /**
     * vpc的id
     */
    VpcId: string;
    /**
     * 防火墙网段，最少/24的网段
     */
    FwCidr: string;
}
/**
 * 边界防火墙公网IP开关列表
 */
export interface EdgeIpInfo {
    /**
     * 公网IP
     */
    PublicIp?: string;
    /**
     * 公网 IP 类型 1 公网,2 弹性,3 弹性ipv6,4 anycastIP, 6 HighQualityEIP
     */
    PublicIpType?: number;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 内网IP
     */
    IntranetIp?: string;
    /**
     * 资产类型
     */
    AssetType?: string;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 风险端口数
     */
    PortRiskCount?: number;
    /**
     * 最近扫描时间
     */
    LastScanTime?: string;
    /**
     * 是否为region eip
  0 不为region eip，不能选择串行
  1 为region eip 可以选择串行
     */
    IsRegionEip?: number;
    /**
     * EIP 所关联的VPC
     */
    VpcId?: string;
    /**
     * 0: 该地域暂未支持串行
  1: 该用户未在该地域配置串行带宽
  2: 该用户已在该地域配置串行带宽，可以开启串行开关
     */
    IsSerialRegion?: number;
    /**
     * 0: 不是公网CLB 可以开启串行开关
  1: 是公网CLB 不可以开启串行开关
  
     */
    IsPublicClb?: number;
    /**
     * 0: 开启开关时提示要创建私有连接。
  1: 关闭该开关是提示删除私有连接。
  如果大于 1: 关闭开关 、开启开关不需提示创建删除私有连接。
     */
    EndpointBindEipNum?: number;
    /**
     * 扫描深度
     */
    ScanMode?: string;
    /**
     * 扫描状态
     */
    ScanStatus?: number;
    /**
     * 开关状态
  0 : 关闭
  1 : 开启
  2 : 开启中
  3 : 关闭中
  4 : 异常
     */
    Status?: number;
    /**
     * 私有连接ID
     */
    EndpointId?: string;
    /**
     * 私有连接IP
     */
    EndpointIp?: string;
    /**
     * 0 : 旁路
  1 : 串行
  2 : 正在模式切换
     */
    SwitchMode?: number;
    /**
     * 开关权重
     */
    SwitchWeight?: number;
    /**
     * 域名化CLB的域名
     */
    Domain?: string;
    /**
     * IP超量状态
     */
    OverUsedStatus?: number;
}
/**
 * AssetZone
 */
export interface AssetZone {
    /**
     * 地域
     */
    Zone?: string;
    /**
     * 地域英文
     */
    ZoneEng?: string;
}
/**
 * 规则顺序变更项，由原始id值变为新的id值。
 */
export interface RuleChangeItem {
    /**
     * 原始sequence 值
     */
    OrderIndex: number;
    /**
     * 新的sequence 值
     */
    NewOrderIndex: number;
    /**
     * Ip版本，0：IPv4，1：IPv6，默认为IPv4
     */
    IpVersion?: number;
}
/**
 * 入侵防御封禁列表、放通列表添加规则入参
 */
export interface IntrusionDefenseRule {
    /**
     * 规则方向，0出站，1入站，3内网间
     */
    Direction: number;
    /**
     * 规则结束时间，格式：2006-01-02 15:04:05，必须大于当前时间
     */
    EndTime: string;
    /**
     * 规则IP地址，IP与Domain必填其中之一
     */
    IP?: string;
    /**
     * 规则域名，IP与Domain必填其中之一
     */
    Domain?: string;
    /**
     * 规则开始时间
     */
    StartTime?: string;
    /**
     * 备注信息，长度不能超过50
     */
    Comment?: string;
}
/**
 * DescribeTLogIpList请求参数结构体
 */
export interface DescribeTLogIpListRequest {
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 类型 1 告警 2阻断
     */
    QueryType: string;
    /**
     * 开始时间
     */
    StartTime: string;
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
 * 通用的列表检索过滤选项
 */
export interface CommonFilter {
    /**
     * 检索的键值
     */
    Name: string;
    /**
     * 枚举类型，代表Name与Values之间的匹配关系
  enum FilterOperatorType {
      //等于
      FILTER_OPERATOR_TYPE_EQUAL = 1;
      //大于
      FILTER_OPERATOR_TYPE_GREATER = 2;
      //小于
      FILTER_OPERATOR_TYPE_LESS = 3;
      //大于等于
      FILTER_OPERATOR_TYPE_GREATER_EQ = 4;
      //小于等于
      FILTER_OPERATOR_TYPE_LESS_EQ = 5;
      //不等于
      FILTER_OPERATOR_TYPE_NO_EQ = 6;
      //not in
      FILTER_OPERATOR_TYPE_NOT_IN = 8;
      //模糊匹配
      FILTER_OPERATOR_TYPE_FUZZINESS = 9;
  }
     */
    OperatorType: number;
    /**
     * 检索的值，各检索值间为OR关系
     */
    Values: Array<string>;
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
 * AddVpcAcRule请求参数结构体
 */
export interface AddVpcAcRuleRequest {
    /**
     * 需要添加的vpc内网间规则列表
     */
    Rules: Array<VpcRuleItem>;
    /**
     * 添加规则的来源，一般不需要使用，值insert_rule 表示插入指定位置的规则；值batch_import 表示批量导入规则；为空时表示添加规则
     */
    From?: string;
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
 * ModifyNatSequenceRules返回参数结构体
 */
export interface ModifyNatSequenceRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAssetSync返回参数结构体
 */
export interface DescribeAssetSyncResponse {
    /**
     * 返回状态
  1 更新中
  2 更新完成
  3 更新失败
  4 更新失败
     */
    Status?: number;
    /**
     * success 成功
  其他失败
     */
    ReturnMsg?: string;
    /**
     * 0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyAddressTemplate返回参数结构体
 */
export interface ModifyAddressTemplateResponse {
    /**
     * 创建结果,0成功
     */
    Status?: number;
    /**
     * 唯一Id
     */
    Uuid?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNatFwInstance返回参数结构体
 */
export interface CreateNatFwInstanceResponse {
    /**
     * 防火墙实例id
     */
    CfwInsId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 返回参数 success 成功 failed 失败
     */
    ReturnMsg?: string;
    /**
     * 当前租户的nat防火墙实例个数
     */
    NatFwInsCount?: number;
    /**
     * 当前租户接入防火墙的子网个数
     */
    SubnetCount?: number;
    /**
     * 打开NAT防火墙开关个数
     */
    OpenSwitchCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDefenseSwitch请求参数结构体
 */
export declare type DescribeDefenseSwitchRequest = null;
/**
 * ModifyVpcFwGroup请求参数结构体
 */
export interface ModifyVpcFwGroupRequest {
    /**
     * 编辑的防火墙(组)ID
     */
    FwGroupId: string;
    /**
     * 修改防火墙(组)名称
     */
    Name?: string;
    /**
     * 编辑的防火墙实例列表
     */
    VpcFwInstances?: Array<VpcFwInstance>;
    /**
     * 指定防火墙使用网段信息
     */
    FwCidrInfo?: FwCidrInfo;
}
/**
 * ModifyEnterpriseSecurityDispatchStatus返回参数结构体
 */
export interface ModifyEnterpriseSecurityDispatchStatusResponse {
    /**
     * 0: 修改成功, 其他: 修改失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateIdsWhiteRule返回参数结构体
 */
export interface CreateIdsWhiteRuleResponse {
    /**
     * 返回状态码：
  0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 返回信息：
  success 成功
  其他
     */
    ReturnMsg?: string;
    /**
     * 返回状态码：
  0  处置成功
  -1 通用错误，不用处理
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyResourceGroup请求参数结构体
 */
export interface ModifyResourceGroupRequest {
    /**
     * 资产组id
     */
    GroupId: string;
    /**
     * 组名称
     */
    GroupName: string;
    /**
     * 上级组资产组id
     */
    ParentId: string;
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
     */
    VpcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 公网IP，多个以英文逗号分隔
     */
    PublicIp?: string;
    /**
     * 内网IP，多个以英文逗号分隔
     */
    PrivateIp?: string;
    /**
     * 掩码地址，多个以英文逗号分隔
     */
    Cidr?: string;
    /**
     * 端口协议类型参数模板id
     */
    ServiceTemplateId?: string;
    /**
     * 生成双向下发规则
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
    /**
     * Uuid
     */
    Uuid?: string;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 资产分组名称
     */
    AssetGroupNameIn?: string;
    /**
     * 资产分组名称
     */
    AssetGroupNameOut?: string;
    /**
     * 模板名称
     */
    ParameterName?: string;
    /**
     * 端口协议类型参数模板名称
     */
    ProtocolPortName?: string;
}
/**
 * 开启、关闭 防火墙互联网边界开关
 */
export interface EdgeIpSwitch {
    /**
     * 公网IP
     */
    PublicIp: string;
    /**
     * vpc 中第一个EIP开关打开，需要指定子网创建私有连接
     */
    SubnetId?: string;
    /**
     * 创建私有连接指定IP
     */
    EndpointIp?: string;
    /**
     * 0 : 旁路 1 : 串行
     */
    SwitchMode?: number;
}
/**
 * ModifySequenceAclRules请求参数结构体
 */
export interface ModifySequenceAclRulesRequest {
    /**
     * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
     */
    RuleChangeItems: Array<RuleChangeItem>;
    /**
     * 规则方向：1，入站；0，出站
     */
    Direction: number;
}
/**
 * ModifyVpcAcRule请求参数结构体
 */
export interface ModifyVpcAcRuleRequest {
    /**
     * 需要编辑的规则数组
     */
    Rules: Array<VpcRuleItem>;
}
/**
 * CreateNatFwInstanceWithDomain返回参数结构体
 */
export interface CreateNatFwInstanceWithDomainResponse {
    /**
     * nat实例信息
     */
    CfwInsId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFwSyncStatus请求参数结构体
 */
export interface DescribeFwSyncStatusRequest {
    /**
     * 查询的同步状态类型：Route,同步路由状态
     */
    SyncType?: string;
}
/**
 * ModifyEnterpriseSecurityGroupRule请求参数结构体
 */
export interface ModifyEnterpriseSecurityGroupRuleRequest {
    /**
     * 规则的uuid，可通过查询规则列表获取
     */
    RuleUuid: number;
    /**
     * 修改类型，0：修改规则内容；1：修改单条规则开关状态；2：修改所有规则开关状态
     */
    ModifyType: number;
    /**
     * 编辑后的企业安全组规则数据；修改规则状态不用填该字段
     */
    Data?: SecurityGroupRule;
    /**
     * 0是关闭,1是开启
     */
    Enable?: number;
}
/**
 * 规则关联的beta任务
 */
export interface BetaInfoByACL {
    /**
     * 任务id
     */
    TaskId?: number;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 上次执行时间
     */
    LastTime?: string;
}
/**
 * RemoveNatAcRule请求参数结构体
 */
export interface RemoveNatAcRuleRequest {
    /**
     * 规则的uuid列表，可通过查询规则列表获取，注意：如果传入的是[-1]将删除所有规则
     */
    RuleUuid: Array<number | bigint>;
    /**
     * 规则方向：1，入站；0，出站
     */
    Direction?: number;
}
/**
 * DescribeAssetSync请求参数结构体
 */
export declare type DescribeAssetSyncRequest = null;
/**
 * DeleteVpcFwGroup请求参数结构体
 */
export interface DeleteVpcFwGroupRequest {
    /**
     * 防火墙(组)Id
     */
    FwGroupId?: string;
    /**
     * 是否删除整个防火墙(组)
  0：不删除防火墙(组)，只删除单独实例
  1：删除整个防火墙(组)
     */
    DeleteFwGroup?: number;
    /**
     * 待删除的防火墙实例数组
     */
    VpcFwInsList?: Array<string>;
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
     * 访问源类型，1是IP，3是域名，4是IP地址模板，5是域名地址模板
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
     * 访问目的类型，1是IP，3是域名，4是IP地址模板，5是域名地址模板
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
    /**
     * 国家二位iso代码或者省份缩写代码
     */
    RegionIso?: string;
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
     */
    Enable?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifySequenceAclRules返回参数结构体
 */
export interface ModifySequenceAclRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAddressTemplate请求参数结构体
 */
export interface CreateAddressTemplateRequest {
    /**
     * 模板名称
     */
    Name: string;
    /**
     * 模板描述
     */
    Detail: string;
    /**
     * Type为1，ip模板eg：1.1.1.1,2.2.2.2；
  Type为5，域名模板eg：www.qq.com,www.tencent.com
     */
    IpString: string;
    /**
     * 1 ip模板
  5 域名模板
  6 协议端口模板
     */
    Type: number;
    /**
     * 协议端口模板，协议类型，4:4层协议，7:7层协议，Type=6时必填
     */
    ProtocolType?: string;
    /**
     * IP版本,0 IPV4;1 IPV6
     */
    IpVersion?: number;
}
/**
 * CreateBlockIgnoreRuleNew返回参数结构体
 */
export interface CreateBlockIgnoreRuleNewResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddNatAcRule请求参数结构体
 */
export interface AddNatAcRuleRequest {
    /**
     * 需要添加的nat访问控制规则列表
     */
    Rules: Array<CreateNatRuleItem>;
    /**
     * 添加规则的来源，一般不需要使用，值insert_rule 表示插入指定位置的规则；值batch_import 表示批量导入规则；为空时表示添加规则
     */
    From?: string;
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
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteBlockIgnoreRuleList请求参数结构体
 */
export interface DeleteBlockIgnoreRuleListRequest {
    /**
     * 规则列表
     */
    Rules: Array<IocListData>;
    /**
     * 规则类型，1封禁，2放通，不支持域名封禁
     */
    RuleType: number;
}
/**
 * SyncFwOperate返回参数结构体
 */
export interface SyncFwOperateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteVpcFwGroup返回参数结构体
 */
export interface DeleteVpcFwGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateChooseVpcs返回参数结构体
 */
export interface CreateChooseVpcsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnHandleEventTabList返回参数结构体
 */
export interface DescribeUnHandleEventTabListResponse {
    /**
     * 租户伪攻击链未处置事件
     */
    Data?: UnHandleEvent;
    /**
     * 错误码，0成功 非0错误
     */
    ReturnCode?: number;
    /**
     * 返回信息 success成功
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 新手引导扫描结果信息
 */
export interface ScanResultInfo {
    /**
     * 是否禁封端口
     */
    BanStatus?: boolean;
    /**
     * 防护ip数量
     */
    IPNum?: number;
    /**
     * 是否开启防护
     */
    IPStatus?: boolean;
    /**
     * 是否拦截攻击
     */
    IdpStatus?: boolean;
    /**
     * 暴露漏洞数量
     */
    LeakNum?: number;
    /**
     * 暴露端口数量
     */
    PortNum?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddVpcAcRule返回参数结构体
 */
export interface AddVpcAcRuleResponse {
    /**
     * 创建成功后返回新策略ID列表
     */
    RuleUuids?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecurityGroupList返回参数结构体
 */
export interface DescribeSecurityGroupListResponse {
    /**
     * 列表当前规则总条数
     */
    Total?: number;
    /**
     * 安全组规则列表数据
     */
    Data?: Array<SecurityGroupListData>;
    /**
     * 不算筛选条数的总条数
     */
    AllTotal?: number;
    /**
     * 访问控制规则全部启用/全部停用
     */
    Enable?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVpcAcRule返回参数结构体
 */
export interface DescribeVpcAcRuleResponse {
    /**
     * 总条数
     */
    Total?: number;
    /**
     * 内网间访问控制列表数据
     */
    Data?: Array<VpcRuleItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddEnterpriseSecurityGroupRules返回参数结构体
 */
export interface AddEnterpriseSecurityGroupRulesResponse {
    /**
     * 状态值，0：添加成功，非0：添加失败
     */
    Status?: number;
    /**
     * 添加成功的规则详情
     */
    Rules?: Array<SecurityGroupSimplifyRule>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 安全组规则
 */
export interface SecurityGroupSimplifyRule {
    /**
     * 访问源示例：
  net：IP/CIDR(192.168.0.2)
  template：参数模板(ipm-dyodhpby)
  instance：资产实例(ins-123456)
  resourcegroup：资产分组(/全部分组/分组1/子分组1)
  tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
  region：地域(ap-gaungzhou)
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
     */
    DestContent?: string;
    /**
     * 协议；TCP/UDP/ICMP/ANY
     */
    Protocol?: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 规则对应的唯一id
     */
    RuleUuid?: number;
    /**
     * 规则序号
     */
    Sequence?: number;
}
/**
 * DescribeBlockByIpTimesList请求参数结构体
 */
export interface DescribeBlockByIpTimesListRequest {
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * ip查询条件
     */
    Ip: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 方向
     */
    Direction?: string;
    /**
     * vpc间防火墙开关边id
     */
    EdgeId?: string;
    /**
     * 日志来源 move：vpc间防火墙
     */
    LogSource?: string;
    /**
     * 来源
     */
    Source?: string;
    /**
     * 地域
     */
    Zone?: string;
}
/**
 * VPC内网间规则
 */
export interface VpcRuleItem {
    /**
     * 访问源示例：
  net：IP/CIDR(192.168.0.2)
     */
    SourceContent: string;
    /**
     * 访问源类型，类型可以为：net
     */
    SourceType: string;
    /**
     * 访问目的示例：
  net：IP/CIDR(192.168.0.2)
  domain：域名规则，例如*.qq.com
     */
    DestContent: string;
    /**
     * 访问目的类型，类型可以为：net，domain，dnsparse
     */
    DestType: string;
    /**
     * 协议，可选的值：
  TCP
  UDP
  ICMP
  ANY
  HTTP
  HTTPS
  HTTP/HTTPS
  SMTP
  SMTPS
  SMTP/SMTPS
  FTP
  DNS
  TLS/SSL
     */
    Protocol: string;
    /**
     * 访问控制策略中设置的流量通过云防火墙的方式。取值：
  accept：放行
  drop：拒绝
  log：观察
     */
    RuleAction: string;
    /**
     * 访问控制策略的端口。取值：
  -1/-1：全部端口
  80：80端口
     */
    Port: string;
    /**
     * 描述
     */
    Description: string;
    /**
     * 规则顺序，-1表示最低，1表示最高
     */
    OrderIndex: number;
    /**
     * 规则状态，true表示启用，false表示禁用
     */
    Enable: string;
    /**
     * 规则生效的范围，是在哪对vpc之间还是针对所有vpc间生效
     */
    EdgeId: string;
    /**
     * 规则对应的唯一id，添加规则时忽略该字段，修改该规则时需要填写Uuid;查询返回时会返回该参数
     */
    Uuid?: number;
    /**
     * 规则的命中次数，增删改查规则时无需传入此参数，主要用于返回查询结果数据
     */
    DetectedTimes?: number;
    /**
     * EdgeId对应的这对VPC间防火墙的描述
     */
    EdgeName?: string;
    /**
     * 内部使用的uuid，一般情况下不会使用到该字段
     */
    InternalUuid?: number;
    /**
     * 规则被删除：1，已删除；0，未删除
     */
    Deleted?: number;
    /**
     * 规则生效的防火墙实例ID
     */
    FwGroupId?: string;
    /**
     * 防火墙名称
     */
    FwGroupName?: string;
    /**
     * beta任务详情
     */
    BetaList?: Array<BetaInfoByACL>;
    /**
     * 端口协议组ID
     */
    ParamTemplateId?: string;
    /**
     * 端口协议组名称
     */
    ParamTemplateName?: string;
    /**
     * 访问目的名称
     */
    TargetName?: string;
    /**
     * 访问源名称
     */
    SourceName?: string;
    /**
     * Ip版本，0：IPv4，1：IPv6，默认为IPv4
     */
    IpVersion?: number;
    /**
     * 是否是无效规则，0 表示有效规则，1 表示无效规则，出参场景返回使用
     */
    Invalid?: number;
}
/**
 * DescribeIdsWhiteRule返回参数结构体
 */
export interface DescribeIdsWhiteRuleResponse {
    /**
     * 总条数
     */
    Total?: number;
    /**
     * 规则详情
     */
    Data?: Array<IdsWhiteInfo>;
    /**
     * 返回状态码 0 成功 非0不成功
     */
    ReturnCode?: number;
    /**
     * 返回信息  success 成功 其他 不成功
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    RuleUuid?: number;
    /**
     * 0代表成功，-1代表失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网络实例信息
 */
export interface NetInstancesInfo {
    /**
     * 网络实例ID
     */
    InstanceId?: string;
    /**
     * 网络实例名称
     */
    InstanceName?: string;
    /**
     * 网络cidr (多段以逗号分隔)
     */
    InstanceCidr?: string;
    /**
     * 网络实例所在地域
     */
    Region?: string;
}
/**
 * DescribeEnterpriseSecurityGroupRuleList请求参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleListRequest {
    /**
     * 分页每页数量
     */
    Limit: number;
    /**
     * 分页当前页
     */
    Offset: number;
    /**
     * 启用状态 1启用 0 未启用
     */
    Status?: string;
    /**
     * 地域
     */
    Area?: string;
    /**
     * 规则下发方式筛选  1 新规则和延迟下发  2  仅看新规则
     */
    Filter?: number;
    /**
     * 查询条件
     */
    SearchValue?: string;
    /**
     * 查询条件新
     */
    SearchFilters?: Array<CommonFilter>;
}
/**
 * nat防火墙 vpc dns 开关信息
 */
export interface VpcDnsInfo {
    /**
     * vpc id
     */
    VpcId?: string;
    /**
     * vpc 名称
     */
    VpcName?: string;
    /**
     * nat 防火墙模式 0：新增模式， 1: 接入模式
     */
    FwMode?: number;
    /**
     * vpc ipv4网段范围 CIDR（Classless Inter-Domain Routing，无类域间路由选择）
     */
    VpcIpv4Cidr?: string;
    /**
     * 外网弹性ip，防火墙 dns解析地址
     */
    DNSEip?: string;
    /**
     * nat网关id
     */
    NatInsId?: string;
    /**
     * nat网关名称
     */
    NatInsName?: string;
    /**
     * 0：开关关闭 ， 1: 开关打开
     */
    SwitchStatus?: number;
    /**
     * 0：未防护， 1: 已防护，2：忽略此字段
     */
    ProtectedStatus?: number;
    /**
     * 是否支持DNS FW，0-不支持、1-支持
     */
    SupportDNSFW?: number;
}
/**
 * CreateAddressTemplate返回参数结构体
 */
export interface CreateAddressTemplateResponse {
    /**
     * 创建结果,0成功
     */
    Status?: number;
    /**
     * 唯一Id
     */
    Uuid?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableStatus返回参数结构体
 */
export interface DescribeTableStatusResponse {
    /**
     * 0：正常，其它：不正常
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySequenceRules返回参数结构体
 */
export interface ModifySequenceRulesResponse {
    /**
     * 0: 修改成功, 非0: 修改失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteIdsWhiteRule返回参数结构体
 */
export interface DeleteIdsWhiteRuleResponse {
    /**
     * 返回状态码：
  0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 返回信息：
  success 成功
  其他
     */
    ReturnMsg?: string;
    /**
     * 返回状态码：
  0  处置成功
  -1 通用错误，不用处理
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAlertCenterOmit返回参数结构体
 */
export interface CreateAlertCenterOmitResponse {
    /**
     * 返回状态码：
  0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 返回信息：
  success 成功
  其他
     */
    ReturnMsg?: string;
    /**
     * 处置状态码：
  0  处置成功
  -1 通用错误，不用处理
  -3 表示重复，需重新刷新列表
  其他
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Data?: string;
    /**
     * 返回码；0为请求成功
     */
    ReturnCode?: number;
    /**
     * 接口返回消息
     */
    ReturnMsg?: string;
    /**
     * 未分类实例数量
     */
    UnResourceNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEdgeIpSwitch返回参数结构体
 */
export interface ModifyEdgeIpSwitchResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeAddressTemplateList请求参数结构体
 */
export interface DescribeAddressTemplateListRequest {
    /**
     * 偏移量，分页用
     */
    Offset?: number;
    /**
     * 条数，分页用
     */
    Limit?: number;
    /**
     * 排序字段，取值：UpdateTime最近更新时间，RulesNum关联规则数
     */
    By?: string;
    /**
     * 排序，取值 ：asc正序，desc逆序
     */
    Order?: string;
    /**
     * 搜索值
     */
    SearchValue?: string;
    /**
     * 检索地址模板唯一id
     */
    Uuid?: string;
    /**
     * 模板类型，取值：1：ip模板，5：域名模板，6：协议端口模板
     */
    TemplateType?: string;
    /**
     * 模板Id
     */
    TemplateId?: string;
}
/**
 * RemoveAclRule请求参数结构体
 */
export interface RemoveAclRuleRequest {
    /**
     * 规则的uuid列表，可通过查询规则列表获取，注意：如果传入的是[-1]将删除所有规则
     */
    RuleUuid: Array<number | bigint>;
    /**
     * 规则方向：1，入站；0，出站
     */
    Direction?: number;
}
/**
 * DeleteAcRule返回参数结构体
 */
export interface DeleteAcRuleResponse {
    /**
     * 状态值 0: 删除成功, !0: 删除失败
     */
    Status?: number;
    /**
     * 返回多余的信息
     */
    Info?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 企业安全组规则列表信息
 */
export interface EnterpriseSecurityGroupRuleRuleInfo {
    /**
     * 排序
     */
    OrderIndex?: number;
    /**
     * 主键id
     */
    RuleUuid?: number;
    /**
     * 规则uuid
     */
    Uuid?: string;
    /**
     * 源规则内容
     */
    SourceId?: string;
    /**
     * 源规则类型
  取值范围 0/1/2/3/4/5/6/7/8/9/100
  0表示ip(net),
  1表示VPC实例(intance)
  2表示子网实例(intance)
  3表示CVM实例(intance)
  4表示CLB实例(intance)
  5表示ENI实例(intance)
  6表示数据库实例(intance)
  7表示模版(template)
  8表示标签(tag)
  9表示地域(region)
  100表示资产分组(resourcegroup)
     */
    SourceType?: number;
    /**
     * 目的规则内容
     */
    TargetId?: string;
    /**
     * 目的规则类型
  取值范围 0/1/2/3/4/5/6/7/8/9/100
  0表示ip(net),
  1表示VPC实例(intance)
  2表示子网实例(intance)
  3表示CVM实例(intance)
  4表示CLB实例(intance)
  5表示ENI实例(intance)
  6表示数据库实例(intance)
  7表示模版(template)
  8表示标签(tag)
  9表示地域(region)
  100表示资产分组(resourcegroup)
     */
    TargetType?: number;
    /**
     * 协议名称
  取值范围:TCP/ANY/ICMP/UDP
  ANY:表示所有
  
     */
    Protocol?: string;
    /**
     * 端口
     */
    Port?: string;
    /**
     * 规则策略
  取值范围:1/2
  1:阻断
  2:放行
     */
    Strategy?: number;
    /**
     * 规则启用状态
  取值范围： 0/1
  0:未开启
  1:开启
     */
    Status?: number;
    /**
     * 描述
     */
    Detail?: string;
    /**
     * 标签
     */
    AclTags?: string;
    /**
     * 规则最新一次是否有改动
  取值范围：0/1
  0:否
  1:是
     */
    IsNew?: number;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 是否延迟下发规则
  取值范围：0/1
  0:立即下发 1:延迟下发
     */
    IsDelay?: number;
    /**
     * 服务模板id
     */
    ServiceTemplateId?: string;
    /**
     * 源资产名称
     */
    SouInstanceName?: string;
    /**
     * 源资产公网ip
     */
    SouPublicIp?: string;
    /**
     * 源资产内网ip
     */
    SouPrivateIp?: string;
    /**
     * 源资产网段信息
     */
    SouCidr?: string;
    /**
     * 源模板名称
     */
    SouParameterName?: string;
    /**
     * 目的资产名称
     */
    InstanceName?: string;
    /**
     * 目的资产公网ip
     */
    PublicIp?: string;
    /**
     * 目的资产内网ip
     */
    PrivateIp?: string;
    /**
     * 目的资产网段信息
     */
    Cidr?: string;
    /**
     * 目的模板名称
     */
    ParameterName?: string;
    /**
     * 端口模板名称
     */
    ProtocolPortName?: string;
    /**
     * 自动化任务信息
     */
    BetaList?: Array<EnterpriseSecurityGroupRuleBetaInfo>;
    /**
     * 规则id  等同RuleUuid
     */
    Id?: number;
}
/**
 * 封禁放通IOC列表
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
 * 实例详情结果
 */
export interface InstanceInfo {
    /**
     * appid信息
     */
    AppId?: string;
    /**
     * 资产来源
  1公网 2内网
     */
    InsSource?: string;
    /**
     * 资产类型
   3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA 13 NATFW
     */
    InsType?: number;
    /**
     * 资产id
     */
    InstanceId?: string;
    /**
     * 资产名
     */
    InstanceName?: string;
    /**
     * 漏洞数
     */
    LeakNum?: string;
    /**
     * 端口数
     */
    PortNum?: string;
    /**
     * 内网ip
     */
    PrivateIp?: string;
    /**
     * 公网ip
     */
    PublicIp?: string;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 地域
     */
    RegionKey?: string;
    /**
     * 资产路径
     */
    ResourcePath?: Array<string>;
    /**
     * 扫描结果
     */
    Server?: Array<string>;
    /**
     * 子网id
     */
    SubnetId?: string;
    /**
     * vpc名称
     */
    VPCName?: string;
    /**
     * vpcid信息
     */
    VpcId?: string;
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
 * DescribeNatFwDnatRule返回参数结构体
 */
export interface DescribeNatFwDnatRuleResponse {
    /**
     * Dnat规则列表
     */
    Data?: Array<DescNatDnatRule>;
    /**
     * 列表总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeFwSyncStatus返回参数结构体
 */
export interface DescribeFwSyncStatusResponse {
    /**
     * 同步状态：1，同步中；0，同步完成
     */
    SyncStatus?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Data?: Array<IpStatic>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * SetNatFwDnatRule返回参数结构体
 */
export interface SetNatFwDnatRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VPC防火墙实例信息
 */
export interface VpcFwInstanceShow {
    /**
     * VPC防火墙实例ID
     */
    FwInsId?: string;
    /**
     * VPC防火墙实例名称
     */
    FwInsName?: string;
    /**
     * 网络经过VPC防火墙CVM所在地域
     */
    FwInsRegion?: string;
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
 * DescribeDefenseSwitch返回参数结构体
 */
export interface DescribeDefenseSwitchResponse {
    /**
     * 基础防御开关
     */
    BasicRuleSwitch?: number;
    /**
     * 安全基线开关
     */
    BaselineAllSwitch?: number;
    /**
     * 威胁情报开关
     */
    TiSwitch?: number;
    /**
     * 虚拟补丁开关
     */
    VirtualPatchSwitch?: number;
    /**
     * 是否历史开启
     */
    HistoryOpen?: number;
    /**
     * 状态值，0：查询成功，非0：查询失败
     */
    ReturnCode?: number;
    /**
     * 状态信息，success：查询成功，fail：查询失败
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 出站还是入站，1：入站，0：出站
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
 * 入侵防御规则白名单详情
 */
export interface IdsWhiteInfo {
    /**
     * 白名单唯一ID
     */
    Id?: number;
    /**
     * 源IP
     */
    SrcIp?: string;
    /**
     * 目的IP
     */
    DstIp?: string;
    /**
     * 规则类型
     */
    WhiteRuleType?: string;
    /**
     * 白名单生效防火墙范围： 1 边界防火墙 2 nat防火墙 4 vpc防火墙 7 = 1+2+4 所有防火墙
     */
    FwType?: number;
    /**
     * 入侵防御规则ID
     */
    RuleId?: string;
}
/**
 * DescribeGuideScanInfo请求参数结构体
 */
export declare type DescribeGuideScanInfoRequest = null;
/**
 * 未处置事件详情
 */
export interface UnHandleEvent {
    /**
     * 伪攻击链类型
     */
    EventTableListStruct?: Array<UnHandleEventDetail>;
    /**
     * 1 是  0否
     */
    BaseLineUser?: number;
    /**
     * 1 打开 0 关闭
     */
    BaseLineInSwitch?: number;
    /**
     * 1 打开 0 关闭
     */
    BaseLineOutSwitch?: number;
    /**
     * vpc间防火墙实例数量
     */
    VpcFwCount?: number;
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
 * ModifyVpcAcRule返回参数结构体
 */
export interface ModifyVpcAcRuleResponse {
    /**
     * 编辑成功后返回新策略ID列表
     */
    RuleUuids?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBlockIgnoreRuleNew请求参数结构体
 */
export interface ModifyBlockIgnoreRuleNewRequest {
    /**
     * 规则
     */
    Rule: BanAndAllowRule;
    /**
     * RuleType: 1放通列表 2外部IP 3域名 4情报 5资产 6自定义规则  7入侵防御规则
     */
    RuleType: number;
}
/**
 * ModifyEWRuleStatus请求参数结构体
 */
export interface ModifyEWRuleStatusRequest {
    /**
     * vpc规则必填，边id
     */
    EdgeId: string;
    /**
     * 是否开关开启，0：未开启，1：开启
     */
    Status: number;
    /**
     * 规则方向，0：出站，1：入站，默认1
     */
    Direction: number;
    /**
     * 更改的规则当前执行顺序
     */
    RuleSequence: number;
    /**
     * 规则类型，vpc：VPC间规则、nat：Nat边界规则
     */
    RuleType: string;
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
     * 状态值 0: 修改成功, 非0: 修改失败
     */
    Status?: number;
    /**
     * 删除了几条访问控制规则
     */
    Info?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteBlockIgnoreRuleNew请求参数结构体
 */
export interface DeleteBlockIgnoreRuleNewRequest {
    /**
     * 是否删除全部
     */
    DeleteAll: number;
    /**
     * 规则列表
     */
    Rules?: Array<BanAndAllowRuleDel>;
    /**
     * 封禁：1，放通：100，
  主要用于全部删除时区分列表类型
     */
    RuleType?: number;
    /**
     * blocklist 封禁列表 whitelist 白名单列表
     */
    ShowType?: string;
}
/**
 * RemoveNatAcRule返回参数结构体
 */
export interface RemoveNatAcRuleResponse {
    /**
     * 删除成功后返回被删除策略的uuid列表
     */
    RuleUuid?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自定义白名单规则
 */
export interface CustomWhiteRule {
    /**
     * 访问目的
     */
    DstIP?: string;
    /**
     * 规则ID
     */
    IdsRuleId?: string;
    /**
     * 规则名称
     */
    IdsRuleName?: string;
    /**
     * 访问源
     */
    SrcIP?: string;
}
/**
 * DescribeFwEdgeIps返回参数结构体
 */
export interface DescribeFwEdgeIpsResponse {
    /**
     * ip 开关列表
     */
    Data?: Array<EdgeIpInfo>;
    /**
     * ip 开关列表个数
     */
    Total?: number;
    /**
     * 地域列表
     */
    RegionLst?: Array<string>;
    /**
     * 实例类型列表
     */
    InstanceTypeLst?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIPStatusList返回参数结构体
 */
export interface DescribeIPStatusListResponse {
    /**
     * IP状态信息
     */
    StatusList?: Array<IPDefendStatus>;
    /**
     * 状态码
     */
    ReturnCode?: number;
    /**
     * 状态信息
     */
    ReturnMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 多种VPC墙模式开关结构
 */
export interface FwGroupSwitch {
    /**
     * 防火墙实例的开关模式 1: 单点互通 2: 多点互通 3: 全互通 4: 自定义路由
     */
    SwitchMode?: number;
    /**
     * 防火墙开关ID
  支持三种类型
  1. 边开关(单点互通)
  2. 点开关(多点互通)
  3. 全开关(全互通)
     */
    SwitchId?: string;
}
/**
 * 地址模板列表数据
 */
export interface TemplateListInfo {
    /**
     * 模板ID
     */
    Uuid?: string;
    /**
     * 模板名称
     */
    Name?: string;
    /**
     * 描述
     */
    Detail?: string;
    /**
     * IP模板
     */
    IpString?: string;
    /**
     * 插入时间
     */
    InsertTime?: string;
    /**
     * 修改时间
     */
    UpdateTime?: string;
    /**
     * 模板类型
     */
    Type?: number;
    /**
     * 关联规则条数
     */
    RulesNum?: number;
    /**
     * 模板Id
     */
    TemplateId?: string;
    /**
     * 协议端口模板，协议类型，4:4层协议，7:7层协议
     */
    ProtocolType?: string;
    /**
     * 模板包含地址数量
     */
    IPNum?: number;
    /**
     * IP版本,0,IPv4;1,IPv6
     */
    IpVersion?: number;
}
/**
 * VPC防火墙接入的网络实例类型及数量
 */
export interface VpcFwJoinInstanceType {
    /**
     * 接入实例类型，VPC、DIRECTCONNECT、 VPNGW 等
     */
    JoinType: string;
    /**
     * 接入的对应网络实例类型的数量
     */
    Num: number;
}
/**
 * DescribeVpcFwGroupSwitch返回参数结构体
 */
export interface DescribeVpcFwGroupSwitchResponse {
    /**
     * 开关列表
     */
    SwitchList?: Array<FwGroupSwitchShow>;
    /**
     * 开关总个数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBlockIgnoreRule返回参数结构体
 */
export interface ModifyBlockIgnoreRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTLogIpList返回参数结构体
 */
export interface DescribeTLogIpListResponse {
    /**
     * 数据集合
     */
    Data?: Array<StaticInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopSecurityGroupRuleDispatch返回参数结构体
 */
export interface StopSecurityGroupRuleDispatchResponse {
    /**
     * true代表成功，false代表错误
     */
    Status?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNatFwInfoCount请求参数结构体
 */
export declare type DescribeNatFwInfoCountRequest = null;
/**
 * 封禁列表和放通列表结构体
 */
export interface BanAndAllowRule {
    /**
     * 规则评论
     */
    Comment?: string;
    /**
     * 自定义白名单规则
     */
    CustomRule?: CustomWhiteRule;
    /**
     * 0互联网出站 1互联网入站 5内网访问源 6内网访问目的
     */
    DirectionList?: string;
    /**
     * 规则截止时间
     */
    EndTime?: string;
    /**
     * 放通的引擎: 1针对互联网边界 2针对nat防火墙 4针对vpc防火墙
     */
    FwType?: number;
    /**
     * 封禁和放通对象
     */
    Ioc?: string;
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
 * VPC防火墙(组)四种开关展示
 */
export interface FwGroupSwitchShow {
    /**
     * 防火墙开关ID
     */
    SwitchId?: string;
    /**
     * 防火墙开关NAME
     */
    SwitchName?: string;
    /**
     * 互通模式
     */
    SwitchMode?: number;
    /**
     * 开关边连接类型 0：对等连接， 1：云连网
     */
    ConnectType?: number;
    /**
     * 连接ID
     */
    ConnectId?: string;
    /**
     * 连接名称
     */
    ConnectName?: string;
    /**
     * 源实例信息
     */
    SrcInstancesInfo?: Array<NetInstancesInfo>;
    /**
     * 目的实例信息
     */
    DstInstancesInfo?: Array<NetInstancesInfo>;
    /**
     * 防火墙(组)数据
     */
    FwGroupId?: string;
    /**
     * 防火墙(组)名称
     */
    FwGroupName?: string;
    /**
     * 开关状态 0：关 ， 1：开
     */
    Enable?: number;
    /**
     * 开关的状态 0：正常， 1：转换中
     */
    Status?: number;
    /**
     * 0-非sase实例，忽略，1-未绑定状态，2-已绑定
     */
    AttachWithEdge?: number;
    /**
     * 对等防火墙和开关状态 0：正常， 1：对等未创建防火墙，2：对等已创建防火墙，未打开开关
     */
    CrossEdgeStatus?: number;
    /**
     * 网络经过VPC防火墙CVM所在地域
     */
    FwInsRegion?: Array<string>;
    /**
     * 0 观察 1 拦截 2 严格 3 关闭 4 不支持ips 前端展示tag
     */
    IpsAction?: number;
    /**
     * 开关关联的防火墙实例列表
     */
    FwInsLst?: Array<VpcFwInstanceShow>;
    /**
     * 开关是否处于bypass状态
  0：正常状态
  1：bypass状态
     */
    BypassStatus?: number;
    /**
     * 0: ipv4 , 1:ipv6
     */
    IpVersion?: number;
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
    /**
     * 指定防火墙使用网段信息
     */
    FwCidrInfo?: FwCidrInfo;
}
/**
 * ModifyVpcFwSequenceRules返回参数结构体
 */
export interface ModifyVpcFwSequenceRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 双向下发的企业安全组规则
 */
export interface SecurityGroupBothWayInfo {
    /**
     * 执行顺序
     */
    OrderIndex: number;
    /**
     * 访问源
     */
    SourceId: string;
    /**
     * 访问源类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
     */
    SourceType: number;
    /**
     * 访问目的
     */
    TargetId: string;
    /**
     * 访问目的类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
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
     * 方向，0：出站，1：入站，默认1
     */
    Direction: number;
    /**
     * 地域
     */
    Region: string;
    /**
     * 描述
     */
    Detail?: string;
    /**
     * 是否开关开启，0：未开启，1：开启
     */
    Status?: number;
    /**
     * 是否是正常规则，0：正常，1：异常
     */
    IsNew?: number;
    /**
     * 单/双向下发，0:单向下发，1：双向下发
     */
    BothWay?: number;
    /**
     * 私有网络ID
     */
    VpcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 公网IP，多个以英文逗号分隔
     */
    PublicIp?: string;
    /**
     * 内网IP，多个以英文逗号分隔
     */
    PrivateIp?: string;
    /**
     * 掩码地址，多个以英文逗号分隔
     */
    Cidr?: string;
    /**
     * 端口协议类型参数模板id
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
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 企业安全组自动化任务信息
 */
export interface EnterpriseSecurityGroupRuleBetaInfo {
    /**
     * 任务id
     */
    TaskId?: number;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 时间
     */
    LastTime?: string;
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
 * DescribeBlockIgnoreList请求参数结构体
 */
export interface DescribeBlockIgnoreListRequest {
    /**
     * 单页数量
     */
    Limit: number;
    /**
     * 页偏移量
     */
    Offset: number;
    /**
     * 方向：1互联网入站，0互联网出站，3内网，空 全部方向
     */
    Direction: string;
    /**
     * 排序类型：desc降序，asc正序
     */
    Order: string;
    /**
     * 排序列：EndTime结束时间，StartTime开始时间，MatchTimes命中次数
     */
    By: string;
    /**
     * 搜索参数，json格式字符串，空则传"{}"，域名：domain，危险等级：level，放通原因：ignore_reason，安全事件来源：rule_source，地理位置：address，模糊搜索：common
     */
    SearchValue?: string;
    /**
     * 规则类型：1封禁，2放通
     */
    RuleType?: number;
    /**
     * blocklist 封禁列表
  whitelist 白名单列表
     */
    ShowType?: string;
}
/**
 * ModifyBlockTop返回参数结构体
 */
export interface ModifyBlockTopResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RemoveAclRule返回参数结构体
 */
export interface RemoveAclRuleResponse {
    /**
     * 删除成功后返回被删除策略的uuid列表
     */
    RuleUuid?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyVpcFwSequenceRules请求参数结构体
 */
export interface ModifyVpcFwSequenceRulesRequest {
    /**
     * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
     */
    RuleChangeItems?: Array<RuleChangeItem>;
}
/**
 * ModifyStorageSetting请求参数结构体
 */
export declare type ModifyStorageSettingRequest = null;
/**
 * DescribeIdsWhiteRule请求参数结构体
 */
export interface DescribeIdsWhiteRuleRequest {
    /**
     * 每页条数
     */
    Limit: number;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
     */
    Order?: string;
    /**
     * 排序所用到的字段
     */
    By?: string;
}
/**
 * ModifyAssetSync请求参数结构体
 */
export declare type ModifyAssetSyncRequest = null;
/**
 * DescribeNatFwVpcDnsLst返回参数结构体
 */
export interface DescribeNatFwVpcDnsLstResponse {
    /**
     * nat防火墙vpc dns 信息数组
     */
    VpcDnsSwitchLst?: Array<VpcDnsInfo>;
    /**
     * 返回参数 success成功 failed 失败
     */
    ReturnMsg?: string;
    /**
     * 开关总条数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 访问控制列表对象
 */
export interface DescAcItem {
    /**
     * 访问源
     */
    SourceContent?: string;
    /**
     * 访问目的
     */
    TargetContent?: string;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 端口
     */
    Port?: string;
    /**
     * 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察
     */
    RuleAction?: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 命中次数
     */
    Count?: number;
    /**
     * 执行顺序
     */
    OrderIndex?: number;
    /**
     * 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag
     */
    SourceType?: string;
    /**
     * 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为 ip,net,domain,template,location,dnsparse
     */
    TargetType?: string;
    /**
     * 规则对应的唯一id
     */
    Uuid?: number;
    /**
     * 规则有效性
     */
    Invalid?: number;
    /**
     * 0为正常规则,1为地域规则
     */
    IsRegion?: number;
    /**
     * 国家id
     */
    CountryCode?: number;
    /**
     * 城市id
     */
    CityCode?: number;
    /**
     * 国家名称
     */
    CountryName?: string;
    /**
     * 省名称
     */
    CityName?: string;
    /**
     * 云厂商code
     */
    CloudCode?: string;
    /**
     * 0为正常规则,1为云厂商规则
     */
    IsCloud?: number;
    /**
     * 规则状态，true表示启用，false表示禁用
     */
    Enable?: string;
    /**
     * 规则方向：1，入向；0，出向
     */
    Direction?: number;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 内部使用的uuid，一般情况下不会使用到该字段
     */
    InternalUuid?: number;
    /**
     * 规则状态，查询规则命中详情时该字段有效，0：新增，1: 已删除, 2: 编辑删除
     */
    Status?: number;
    /**
     * 关联任务详情
     */
    BetaList?: Array<BetaInfoByACL>;
    /**
     * （1）互联网边界防火墙，生效范围：serial，串行；side，旁路；all，全局；
  （2）NAT边界防火墙：ALL，全局生效；ap-guangzhou，生效的地域；cfwnat-xxx，生效基于实例维度
     */
    Scope?: string;
    /**
     * 生效范围描述
     */
    ScopeDesc?: string;
    /**
     * 互联网边界防火墙使用的内部规则id
     */
    InternetBorderUuid?: string;
    /**
     * 协议端口组名称
     */
    ParamTemplateName?: string;
    /**
     * 协议端口组ID
     */
    ParamTemplateId?: string;
    /**
     * 访问源名称
     */
    SourceName?: string;
    /**
     * 访问目的名称
     */
    TargetName?: string;
    /**
     * 规则最近命中时间
     */
    LastHitTime?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBlockStaticList请求参数结构体
 */
export interface DescribeBlockStaticListRequest {
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 列表类型，只能是下面三种之一：port、address、ip
     */
    QueryType: string;
    /**
     * 开始时间
     */
    StartTime: string;
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
     * 封禁列表
     */
    BanNum?: number;
    /**
     * 暴力破解
     */
    BruteForceNum?: number;
    /**
     * 待处置告警
     */
    HandleNum?: number;
    /**
     * 网络探测
     */
    NetworkNum?: number;
    /**
     * 失陷主机
     */
    OutNum?: number;
    /**
     * 漏洞攻击
     */
    VulNum?: number;
}
/**
 * DescribeLogs返回参数结构体
 */
export interface DescribeLogsResponse {
    /**
     * 日志列表
     */
    Data?: string;
    /**
     * 总条数
     */
    Total?: number;
    /**
     * 返回状态码 0 成功 非0不成功
     */
    ReturnCode?: number;
    /**
     * 返回信息  success 成功 其他 不成功
     */
    ReturnMsg?: string;
    /**
     * 七层协议，NTA日志有效
     */
    AppProtocolList?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 防火墙开关列表对象
 */
export interface SwitchListsData {
    /**
     * 公网IP
     */
    PublicIp?: string;
    /**
     * 内网IP
     */
    IntranetIp?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 资产类型
     */
    AssetType?: string;
    /**
     * 地域
     */
    Area?: string;
    /**
     * 防火墙开关
     */
    Switch?: number;
    /**
     * id值
     */
    Id?: number;
    /**
     * 公网 IP 类型
     */
    PublicIpType?: number;
    /**
     * 风险端口数
     */
    PortTimes?: number;
    /**
     * 最近扫描时间
     */
    LastTime?: string;
    /**
     * 扫描深度
     */
    ScanMode?: string;
    /**
     * 扫描状态
     */
    ScanStatus?: number;
}
/**
 * CreateVpcFwGroup请求参数结构体
 */
export interface CreateVpcFwGroupRequest {
    /**
     * VPC防火墙(组)名称
     */
    Name: string;
    /**
     * 模式 1：CCN云联网模式；0：私有网络模式 2: sase 模式 3：ccn 高级模式 4: 私有网络(跨租户单边模式)
     */
    Mode: number;
    /**
     * 防火墙(组)下的防火墙实例列表
     */
    VpcFwInstances: Array<VpcFwInstance>;
    /**
     * 防火墙实例的开关模式
  1: 单点互通
  2: 多点互通
  3: 全互通
  4: 自定义路由
     */
    SwitchMode: number;
    /**
     * auto 自动选择防火墙网段
  10.10.10.0/24 用户输入的防火墙网段
     */
    FwVpcCidr: string;
    /**
     * 云联网id ，适用于云联网模式
     */
    CcnId?: string;
    /**
     * 指定防火墙使用网段信息
     */
    FwCidrInfo?: FwCidrInfo;
    /**
     * 跨租户管理员模式  1管理员 2多账号
     */
    CrossUserMode?: string;
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
    /**
     * 指定防火墙使用网段信息
     */
    FwCidrInfo?: FwCidrInfo;
}
/**
 * RemoveVpcAcRule请求参数结构体
 */
export interface RemoveVpcAcRuleRequest {
    /**
     * 规则的uuid列表，可通过查询规则列表获取，注意：如果传入的是[-1]将删除所有规则
     */
    RuleUuids: Array<number | bigint>;
    /**
     * 仅当RuleUuids为-1时有效；0：删除Ipv4规则，1：删除Ipv6规则；默认为Ipv4类型规则
     */
    IpVersion?: number;
}
/**
 * 标签信息
 */
export interface TagInfo {
    /**
     * 目标key
     */
    TagKey?: string;
    /**
     * 目标值
     */
    TagValue?: string;
}
/**
 * DescribeResourceGroup返回参数结构体
 */
export interface DescribeResourceGroupResponse {
    /**
     * 返回树形结构
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAddressTemplate返回参数结构体
 */
export interface DeleteAddressTemplateResponse {
    /**
     * 删除结果,0成功
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBlockIgnoreRuleList返回参数结构体
 */
export interface CreateBlockIgnoreRuleListResponse {
    /**
     * 成功返回
     */
    List?: Array<IocListData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCfwEips返回参数结构体
 */
export interface DescribeCfwEipsResponse {
    /**
     * 返回值信息
     */
    NatFwEipList?: Array<NatFwEipsInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyResourceGroup返回参数结构体
 */
export interface ModifyResourceGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVpcFwGroup返回参数结构体
 */
export interface ModifyVpcFwGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteResourceGroup返回参数结构体
 */
export interface DeleteResourceGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateAlertCenterIsolate请求参数结构体
 */
export interface CreateAlertCenterIsolateRequest {
    /**
     * 处置对象,资产列表
     */
    HandleAssetList: Array<string>;
    /**
     * 处置时间
  1  1天
  7   7天
  -2 永久
     */
    HandleTime: number;
    /**
     * 当前日志方向： 0 出向 1 入向
     */
    AlertDirection: number;
    /**
     * 隔离类型
  1 互联网入站
  2 互联网出站
  4 内网访问
     */
    IsolateType: Array<number | bigint>;
    /**
     * 运维模式 1 IP白名单 2 身份认证  0 非运维模式
     */
    OmMode?: number;
}
/**
 * DescribeNatAcRule请求参数结构体
 */
export interface DescribeNatAcRuleRequest {
    /**
     * 每页条数
     */
    Limit: number;
    /**
     * 偏移值
     */
    Offset: number;
    /**
     * 需要查询的索引，特定场景使用，可不填
     */
    Index?: string;
    /**
     * 过滤条件组合，Direction 为0时表述查询出向规则，为1时表示查询入向规则
     */
    Filters?: Array<CommonFilter>;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值，默认为asc
     */
    Order?: string;
    /**
     * 排序所用到的字段，默认为sequence
     */
    By?: string;
}
/**
 * DescribeEnterpriseSecurityGroupRuleList返回参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleListResponse {
    /**
     * 查询结果总数
     */
    Total?: number;
    /**
     * 规则总数
     */
    AllTotal?: number;
    /**
     * 规则列表
     */
    Data?: Array<EnterpriseSecurityGroupRuleRuleInfo>;
    /**
     * 规则列表整体启用状态
  取值范围 0/1/2
  0.表示没有启用的(可以批量启用)
  1.表示没有禁用的(可以批量禁用)
  2 表示混合情况（不可批量操作）
     */
    Enable?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DeleteAddressTemplate请求参数结构体
 */
export interface DeleteAddressTemplateRequest {
    /**
     * 模板id
     */
    Uuid: string;
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
     */
    Info?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEnterpriseSGRuleProgress返回参数结构体
 */
export interface DescribeEnterpriseSGRuleProgressResponse {
    /**
     * 0-100，代表下发进度百分比
     */
    Progress?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     */
    OnNum?: number;
    /**
     * 关闭个数
     */
    OffNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * RemoveVpcAcRule返回参数结构体
 */
export interface RemoveVpcAcRuleResponse {
    /**
     * 删除成功后返回被删除策略的uuid列表
     */
    RuleUuids?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNatFwInstancesInfo返回参数结构体
 */
export interface DescribeNatFwInstancesInfoResponse {
    /**
     * 实例卡片信息数组
     */
    NatinsLst?: Array<NatInstanceInfo>;
    /**
     * nat 防火墙个数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddNatAcRule返回参数结构体
 */
export interface AddNatAcRuleResponse {
    /**
     * 创建成功后返回新策略ID列表
     */
    RuleUuid?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBlockIgnoreList返回参数结构体
 */
export interface ModifyBlockIgnoreListResponse {
    /**
     * 接口返回信息
     */
    ReturnMsg?: string;
    /**
     * 接口返回错误码，0请求成功  非0失败
     */
    ReturnCode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    NatinsLst?: Array<NatFwInstance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Status?: number;
    /**
     * 编辑后新生成规则的Id
     */
    NewRuleId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFwEdgeIps请求参数结构体
 */
export interface DescribeFwEdgeIpsRequest {
    /**
     * 过滤条件组合
     */
    Filters?: Array<CommonFilter>;
    /**
     * 每页条数
     */
    Limit?: number;
    /**
     * 偏移值
     */
    Offset?: number;
    /**
     * 检索的起始时间，可不传
     */
    StartTime?: string;
    /**
     * 检索的截止时间，可不传
     */
    EndTime?: string;
    /**
     * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
     */
    Order?: string;
    /**
     * 排序所用到的字段
     */
    By?: string;
}
/**
 * 创建互联网边界规则参数结构
 */
export interface CreateRuleItem {
    /**
     * 访问源示例： net：IP/CIDR(192.168.0.2)
     */
    SourceContent: string;
    /**
     * 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag
     */
    SourceType: string;
    /**
     * 访问目的示例： net：IP/CIDR(192.168.0.2) domain：域名规则，例如*.qq.com
     */
    TargetContent: string;
    /**
     * 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为  ip,net,domain,template,location
     */
    TargetType: string;
    /**
     * 协议，可选的值： TCP UDP ICMP ANY HTTP HTTPS HTTP/HTTPS SMTP SMTPS SMTP/SMTPS FTP DNS
  1. 入方向  旁路防火墙/全局规则 仅支持TCP
  
  2.出方向  旁路防火墙/全局规则 仅支持TCP HTTP/HTTPS TLS/SSL
  
  3.domain  请选择七层协议 如HTTP/HTTPS
  
     */
    Protocol: string;
    /**
     * 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察
     */
    RuleAction: string;
    /**
     * 访问控制策略的端口。取值： -1/-1：全部端口 80：80端口
     */
    Port: string;
    /**
     * 规则方向：1，入站；0，出站
     */
    Direction: number;
    /**
     * 规则序号
     */
    OrderIndex: number;
    /**
     * 规则对应的唯一id，创建规则时无需填写
     */
    Uuid?: number;
    /**
     * 规则状态，true表示启用，false表示禁用
     */
    Enable?: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * all
     */
    Scope?: string;
    /**
     * 0，正常规则添加；1，入侵检测添加
     */
    RuleSource?: number;
    /**
     * 告警Id
     */
    LogId?: string;
    /**
     * 端都协议组ID
     */
    ParamTemplateId?: string;
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
    /**
     * all  包含子组 own自己
     */
    ShowType?: string;
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
 * ModifyEnterpriseSecurityDispatchStatus请求参数结构体
 */
export interface ModifyEnterpriseSecurityDispatchStatusRequest {
    /**
     * 0：打开立即下发开关；
  
  1：关闭立即下发开关；
  
  2：关闭立即下发开关情况下，触发开始下发
     */
    Status: number;
}
/**
 * NAT防火墙Dnat规则列表
 */
export interface DescNatDnatRule {
    /**
     * id
     */
    Id?: number;
    /**
     * 网络协议，可选值：TCP、UDP。
     */
    IpProtocol?: string;
    /**
     * 弹性IP。
     */
    PublicIpAddress?: string;
    /**
     * 公网端口。
     */
    PublicPort?: number;
    /**
     * 内网地址。
     */
    PrivateIpAddress?: string;
    /**
     * 内网端口。
     */
    PrivatePort?: number;
    /**
     * NAT防火墙转发规则描述。
     */
    Description?: string;
    /**
     * 是否被关联引用，如被远程运维使用
     */
    IsReferenced?: number;
    /**
     * 所属防火墙实例id
     */
    FwInsId?: string;
    /**
     * 关联的nat网关Id
     */
    NatGwId?: string;
}
/**
 * DescribeBlockIgnoreList返回参数结构体
 */
export interface DescribeBlockIgnoreListResponse {
    /**
     * 列表数据
     */
    Data?: Array<BlockIgnoreRule>;
    /**
     * 查询结果总数，用于分页
     */
    Total?: number;
    /**
     * 状态值，0：查询成功，非0：查询失败
     */
    ReturnCode?: number;
    /**
     * 状态信息，success：查询成功，fail：查询失败
     */
    ReturnMsg?: string;
    /**
     * 安全事件来源下拉框
     */
    SourceList?: Array<string>;
    /**
     * 对应规则类型的数量，示例：[0,122,30,55,12,232,0]，封禁0个，IP地址122个，域名30个，威胁情报55个，资产实例12个，自定义策略232个，入侵防御规则0个
     */
    RuleTypeDataList?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNatInstance返回参数结构体
 */
export interface ModifyNatInstanceResponse {
    /**
     * 0 正常
  -1 异常
     */
    Status?: number;
    /**
     * nat实例唯一ID
     */
    NatInstanceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBlockStaticList返回参数结构体
 */
export interface DescribeBlockStaticListResponse {
    /**
     * 查询结果
     */
    Data?: Array<StaticInfo>;
    /**
     * 异步查询状态，1查询执行中，0查询已结束
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Data?: ScanInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * vpc 防火墙下单防火墙实例结构体
 */
export interface VpcFwInstance {
    /**
     * 防火墙实例名称
     */
    Name: string;
    /**
     * 私有网络模式下接入的VpcId列表；仅私有网络模式使用
     */
    VpcIds: Array<string>;
    /**
     * 部署地域信息
     */
    FwDeploy: FwDeploy;
    /**
     * 防火墙实例ID (编辑场景传)
     */
    FwInsId?: string;
}
/**
 * CreateAlertCenterRule返回参数结构体
 */
export interface CreateAlertCenterRuleResponse {
    /**
     * 返回状态码：
  0 成功
  非0 失败
     */
    ReturnCode?: number;
    /**
     * 返回信息：
  success 成功
  其他
     */
    ReturnMsg?: string;
    /**
     * 处置状态码：
  0  处置成功
  -1 通用错误，不用处理
  -3 表示重复，需重新刷新列表
  其他
     */
    Status?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAddressTemplateList返回参数结构体
 */
export interface DescribeAddressTemplateListResponse {
    /**
     * 模板总数
     */
    Total?: number;
    /**
     * 模板列表数据
     */
    Data?: Array<TemplateListInfo>;
    /**
     * 模板名称列表
     */
    NameList?: Array<string>;
    /**
     * Ip地址模板数量
     */
    IpTemplateCount?: number;
    /**
     * 域名地址模板数量
     */
    DomainTemplateCount?: number;
    /**
     * 协议端口模板数量
     */
    PortTemplateCount?: number;
    /**
     * 已使用的地址模板数
     */
    UsedTemplateCount?: number;
    /**
     * 地址模板配额数量
     */
    TemplateQuotaCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateIdsWhiteRule请求参数结构体
 */
export interface CreateIdsWhiteRuleRequest {
    /**
     * 入侵防御规则ID
     */
    IdsRuleId: string;
    /**
     * 白名单类型：
  src 针对源放通
  dst 针对目的放通
  srcdst 针对源和目的放通
     */
    WhiteRuleType: string;
    /**
     * 白名单生效防火墙范围：
  1 边界防火墙
  2 nat防火墙
  4 vpc防火墙
  7 = 1+2+4  所有防火墙
     */
    FwType: number;
    /**
     * 源IP
     */
    SrcIp?: string;
    /**
     * 目的IP
     */
    DstIp?: string;
}
