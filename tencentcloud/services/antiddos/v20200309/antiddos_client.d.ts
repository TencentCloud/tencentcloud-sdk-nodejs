import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDefaultAlarmThresholdRequest, DescribeDDoSConnectLimitListRequest, DescribeListBGPIPInstancesResponse, DescribeBlackWhiteIpListResponse, DeleteCCLevelPolicyRequest, CreateBoundIPRequest, DescribeListSchedulingDomainRequest, CreateWaterPrintConfigRequest, CreateBlackWhiteIpListResponse, DeleteCCRequestLimitPolicyRequest, DescribeL7RulesBySSLCertIdResponse, DescribeDDoSBlackWhiteIpListResponse, ModifyNewDomainRulesRequest, DescribeListProtocolBlockConfigResponse, DescribeListBGPInstancesRequest, ModifyCcBlackWhiteIpListRequest, DeleteDDoSSpeedLimitConfigRequest, CreatePacketFilterConfigResponse, CreateCCReqLimitPolicyResponse, DescribeListWaterPrintConfigRequest, CreateL7RuleCertsRequest, CreateCCPrecisionPolicyResponse, DeleteCcGeoIPBlockConfigResponse, DeleteDDoSGeoIPBlockConfigRequest, ModifyDDoSGeoIPBlockConfigResponse, DescribeCcBlackWhiteIpListResponse, ModifyCCLevelPolicyResponse, CreateIPAlarmThresholdConfigRequest, CreateCcBlackWhiteIpListResponse, DescribeDefaultAlarmThresholdResponse, CreateDDoSAIRequest, DescribeListProtectThresholdConfigRequest, ModifyNewDomainRulesResponse, DescribeDDoSConnectLimitListResponse, ModifyPacketFilterConfigResponse, DescribeCCLevelPolicyRequest, CreateWaterPrintConfigResponse, ModifyPortAclConfigRequest, DescribeListBGPIPInstancesRequest, CreatePortAclConfigRequest, DescribeCCThresholdListResponse, DescribeL7RulesBySSLCertIdRequest, DescribeListPacketFilterConfigResponse, DeleteBlackWhiteIpListResponse, CreateSchedulingDomainRequest, CreateDDoSBlackWhiteIpListRequest, ModifyCCReqLimitPolicyRequest, DisassociateDDoSEipAddressResponse, DeleteCCThresholdPolicyResponse, DeleteBlackWhiteIpListRequest, ModifyCcBlackWhiteIpListResponse, CreatePortAclConfigListRequest, DisassociateDDoSEipAddressRequest, SwitchWaterPrintConfigResponse, DeleteWaterPrintKeyResponse, CreateDDoSBlackWhiteIpListResponse, DescribeListPacketFilterConfigRequest, ModifyDDoSBlackWhiteIpListRequest, DescribeListDDoSGeoIPBlockConfigRequest, CreateCcGeoIPBlockConfigResponse, ModifyDDoSGeoIPBlockConfigRequest, ModifyPortAclConfigResponse, DescribeBasicDeviceStatusRequest, DeleteCcGeoIPBlockConfigRequest, DescribeCCLevelListResponse, CreateDDoSSpeedLimitConfigRequest, CreateDDoSGeoIPBlockConfigRequest, CreateProtocolBlockConfigRequest, DeleteWaterPrintKeyRequest, AssociateDDoSEipAddressResponse, DeleteCCLevelPolicyResponse, ModifyPacketFilterConfigRequest, DescribeBlackWhiteIpListRequest, CreateCcGeoIPBlockConfigRequest, DeletePortAclConfigResponse, CreateDDoSSpeedLimitConfigResponse, DeletePacketFilterConfigRequest, ModifyL7RulesEdgeRequest, DescribeListDDoSGeoIPBlockConfigResponse, DescribeBasicDeviceStatusResponse, DeleteCCPrecisionPolicyRequest, DeleteWaterPrintConfigResponse, DeletePacketFilterConfigResponse, CreateProtocolBlockConfigResponse, CreateIPAlarmThresholdConfigResponse, CreatePortAclConfigListResponse, DeleteWaterPrintConfigRequest, DescribeDDoSBlackWhiteIpListRequest, DescribeListBlackWhiteIpListResponse, DescribeCCReqLimitPolicyListRequest, DescribeListDDoSSpeedLimitConfigResponse, ModifyDDoSThresholdResponse, CreateDDoSGeoIPBlockConfigResponse, DeleteDDoSBlackWhiteIpListRequest, CreateDDoSConnectLimitResponse, DescribeCcBlackWhiteIpListRequest, DescribeListListenerResponse, DeletePortAclConfigRequest, CreatePortAclConfigResponse, ModifyDDoSLevelResponse, CreateL7RuleCertsResponse, CreateCCPrecisionPolicyRequest, AssociateDDoSEipLoadBalancerRequest, DescribeListProtectThresholdConfigResponse, CreateDefaultAlarmThresholdResponse, ModifyDDoSThresholdRequest, ModifyDDoSLevelRequest, DescribeListIPAlarmConfigResponse, ModifyDDoSBlackWhiteIpListResponse, DescribeCCPrecisionPlyListRequest, ModifyL7RulesEdgeResponse, DescribeCCLevelListRequest, ModifyCCThresholdPolicyRequest, DeleteDDoSGeoIPBlockConfigResponse, DescribeListDDoSAIRequest, DescribeListIPAlarmConfigRequest, ModifyCCReqLimitPolicyResponse, ModifyDomainUsrNameRequest, CreateDDoSConnectLimitRequest, CreateWaterPrintKeyRequest, DescribeCCReqLimitPolicyListResponse, DescribeListDDoSAIResponse, ModifyCCPrecisionPolicyResponse, ModifyDDoSSpeedLimitConfigRequest, AssociateDDoSEipAddressRequest, AssociateDDoSEipLoadBalancerResponse, DescribeCCThresholdListRequest, CreateBlackWhiteIpListRequest, DescribeBizTrendResponse, DeleteCcBlackWhiteIpListResponse, CreateBoundIPResponse, DescribeListDDoSSpeedLimitConfigRequest, SwitchWaterPrintConfigRequest, DescribeListSchedulingDomainResponse, ModifyCCPrecisionPolicyRequest, DeleteDDoSBlackWhiteIpListResponse, ModifyDomainUsrNameResponse, DescribeCCTrendResponse, CreateSchedulingDomainResponse, DeleteCcBlackWhiteIpListRequest, DescribeCcGeoIPBlockConfigListResponse, CreateDDoSAIResponse, DescribeListProtocolBlockConfigRequest, DescribeListBGPInstancesResponse, DescribeDDoSTrendRequest, DeleteCCRequestLimitPolicyResponse, CreateCcBlackWhiteIpListRequest, DescribeListPortAclListResponse, DescribeCCPrecisionPlyListResponse, DescribeBizTrendRequest, DescribeListPortAclListRequest, DescribeCCLevelPolicyResponse, DescribeListWaterPrintConfigResponse, DeleteDDoSSpeedLimitConfigResponse, DeleteCCThresholdPolicyRequest, DescribeListListenerRequest, ModifyCCThresholdPolicyResponse, CreateWaterPrintKeyResponse, DeleteCCPrecisionPolicyResponse, DescribeDDoSTrendResponse, DescribeListBlackWhiteIpListRequest, CreateCCReqLimitPolicyRequest, ModifyDDoSSpeedLimitConfigResponse, DescribeDefaultAlarmThresholdRequest, ModifyCCLevelPolicyRequest, DescribeCcGeoIPBlockConfigListRequest, CreatePacketFilterConfigRequest, DescribeCCTrendRequest } from "./antiddos_models";
/**
 * antiddos client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改CC防护等级
     */
    ModifyCCLevelPolicy(req: ModifyCCLevelPolicyRequest, cb?: (error: string, rep: ModifyCCLevelPolicyResponse) => void): Promise<ModifyCCLevelPolicyResponse>;
    /**
     * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
     */
    AssociateDDoSEipAddress(req: AssociateDDoSEipAddressRequest, cb?: (error: string, rep: AssociateDDoSEipAddressResponse) => void): Promise<AssociateDDoSEipAddressResponse>;
    /**
     * 修改DDoS清洗阈值
     */
    ModifyDDoSThreshold(req: ModifyDDoSThresholdRequest, cb?: (error: string, rep: ModifyDDoSThresholdResponse) => void): Promise<ModifyDDoSThresholdResponse>;
    /**
     * 获取DDoS防护的水印防护配置列表
     */
    DescribeListWaterPrintConfig(req: DescribeListWaterPrintConfigRequest, cb?: (error: string, rep: DescribeListWaterPrintConfigResponse) => void): Promise<DescribeListWaterPrintConfigResponse>;
    /**
     * 修改7层转发规则
     */
    ModifyNewDomainRules(req: ModifyNewDomainRulesRequest, cb?: (error: string, rep: ModifyNewDomainRulesResponse) => void): Promise<ModifyNewDomainRulesResponse>;
    /**
     * 新建CC四层黑白名单
     */
    CreateCcBlackWhiteIpList(req: CreateCcBlackWhiteIpListRequest, cb?: (error: string, rep: CreateCcBlackWhiteIpListResponse) => void): Promise<CreateCcBlackWhiteIpListResponse>;
    /**
     * 删除DDoS防护的访问限速配置
     */
    DeleteDDoSSpeedLimitConfig(req: DeleteDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: DeleteDDoSSpeedLimitConfigResponse) => void): Promise<DeleteDDoSSpeedLimitConfigResponse>;
    /**
     * 修改DDoS防护的访问限速配置
     */
    ModifyDDoSSpeedLimitConfig(req: ModifyDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: ModifyDDoSSpeedLimitConfigResponse) => void): Promise<ModifyDDoSSpeedLimitConfigResponse>;
    /**
     * 获取业务流量曲线
     */
    DescribeBizTrend(req: DescribeBizTrendRequest, cb?: (error: string, rep: DescribeBizTrendResponse) => void): Promise<DescribeBizTrendResponse>;
    /**
     * 删除DDoS防护的区域封禁配置
     */
    DeleteDDoSGeoIPBlockConfig(req: DeleteDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: DeleteDDoSGeoIPBlockConfigResponse) => void): Promise<DeleteDDoSGeoIPBlockConfigResponse>;
    /**
     * 修改智能解析域名名称
     */
    ModifyDomainUsrName(req: ModifyDomainUsrNameRequest, cb?: (error: string, rep: ModifyDomainUsrNameResponse) => void): Promise<ModifyDomainUsrNameResponse>;
    /**
     * 获取CC精准防护列表
     */
    DescribeCCPrecisionPlyList(req: DescribeCCPrecisionPlyListRequest, cb?: (error: string, rep: DescribeCCPrecisionPlyListResponse) => void): Promise<DescribeCCPrecisionPlyListResponse>;
    /**
     * 获取智能调度域名列表
     */
    DescribeListSchedulingDomain(req: DescribeListSchedulingDomainRequest, cb?: (error: string, rep: DescribeListSchedulingDomainResponse) => void): Promise<DescribeListSchedulingDomainResponse>;
    /**
     * 添加DDoS防护的特征过滤规则
     */
    CreatePacketFilterConfig(req: CreatePacketFilterConfigRequest, cb?: (error: string, rep: CreatePacketFilterConfigResponse) => void): Promise<CreatePacketFilterConfigResponse>;
    /**
     * 删除CC精准防护策略
     */
    DeleteCCPrecisionPolicy(req: DeleteCCPrecisionPolicyRequest, cb?: (error: string, rep: DeleteCCPrecisionPolicyResponse) => void): Promise<DeleteCCPrecisionPolicyResponse>;
    /**
     * 获取高防IP资产实例列表

     */
    DescribeListBGPIPInstances(req: DescribeListBGPIPInstancesRequest, cb?: (error: string, rep: DescribeListBGPIPInstancesResponse) => void): Promise<DescribeListBGPIPInstancesResponse>;
    /**
     * 获取单IP告警阈值配置列表
     */
    DescribeListIPAlarmConfig(req: DescribeListIPAlarmConfigRequest, cb?: (error: string, rep: DescribeListIPAlarmConfigResponse) => void): Promise<DescribeListIPAlarmConfigResponse>;
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     */
    DescribeDDoSTrend(req: DescribeDDoSTrendRequest, cb?: (error: string, rep: DescribeDDoSTrendResponse) => void): Promise<DescribeDDoSTrendResponse>;
    /**
     * 删除DDoS防护的IP网段黑白名单
     */
    DeleteDDoSBlackWhiteIpList(req: DeleteDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: DeleteDDoSBlackWhiteIpListResponse) => void): Promise<DeleteDDoSBlackWhiteIpListResponse>;
    /**
     * 获取单IP默认告警阈值配置
     */
    DescribeDefaultAlarmThreshold(req: DescribeDefaultAlarmThresholdRequest, cb?: (error: string, rep: DescribeDefaultAlarmThresholdResponse) => void): Promise<DescribeDefaultAlarmThresholdResponse>;
    /**
     * 获取DDoS防护的IP黑白名单列表
     */
    DescribeListBlackWhiteIpList(req: DescribeListBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeListBlackWhiteIpListResponse) => void): Promise<DescribeListBlackWhiteIpListResponse>;
    /**
     * 删除CC清洗阈值策略
     */
    DeleteCCThresholdPolicy(req: DeleteCCThresholdPolicyRequest, cb?: (error: string, rep: DeleteCCThresholdPolicyResponse) => void): Promise<DeleteCCThresholdPolicyResponse>;
    /**
     * 修改CC频率限制策略
     */
    ModifyCCReqLimitPolicy(req: ModifyCCReqLimitPolicyRequest, cb?: (error: string, rep: ModifyCCReqLimitPolicyResponse) => void): Promise<ModifyCCReqLimitPolicyResponse>;
    /**
     * 获取CC四层黑白名单列表
     */
    DescribeCcBlackWhiteIpList(req: DescribeCcBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeCcBlackWhiteIpListResponse) => void): Promise<DescribeCcBlackWhiteIpListResponse>;
    /**
     * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
     */
    DisassociateDDoSEipAddress(req: DisassociateDDoSEipAddressRequest, cb?: (error: string, rep: DisassociateDDoSEipAddressResponse) => void): Promise<DisassociateDDoSEipAddressResponse>;
    /**
     * 获取CC分级策略
     */
    DescribeCCLevelPolicy(req: DescribeCCLevelPolicyRequest, cb?: (error: string, rep: DescribeCCLevelPolicyResponse) => void): Promise<DescribeCCLevelPolicyResponse>;
    /**
     * 读取或修改DDoS的防护等级
     */
    ModifyDDoSLevel(req: ModifyDDoSLevelRequest, cb?: (error: string, rep: ModifyDDoSLevelResponse) => void): Promise<ModifyDDoSLevelResponse>;
    /**
     * 修改CC清洗阈值
     */
    ModifyCCThresholdPolicy(req: ModifyCCThresholdPolicyRequest, cb?: (error: string, rep: ModifyCCThresholdPolicyResponse) => void): Promise<ModifyCCThresholdPolicyResponse>;
    /**
     * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     */
    CreateBoundIP(req: CreateBoundIPRequest, cb?: (error: string, rep: CreateBoundIPResponse) => void): Promise<CreateBoundIPResponse>;
    /**
     * 修改CC四层黑白名单
     */
    ModifyCcBlackWhiteIpList(req: ModifyCcBlackWhiteIpListRequest, cb?: (error: string, rep: ModifyCcBlackWhiteIpListResponse) => void): Promise<ModifyCcBlackWhiteIpListResponse>;
    /**
     * 删除CC防护的区域封禁配置
     */
    DeleteCcGeoIPBlockConfig(req: DeleteCcGeoIPBlockConfigRequest, cb?: (error: string, rep: DeleteCcGeoIPBlockConfigResponse) => void): Promise<DeleteCcGeoIPBlockConfigResponse>;
    /**
     * 删除DDoS防护的水印防护密钥
     */
    DeleteWaterPrintKey(req: DeleteWaterPrintKeyRequest, cb?: (error: string, rep: DeleteWaterPrintKeyResponse) => void): Promise<DeleteWaterPrintKeyResponse>;
    /**
     * 设置单IP默认告警阈值配置
     */
    CreateDefaultAlarmThreshold(req: CreateDefaultAlarmThresholdRequest, cb?: (error: string, rep: CreateDefaultAlarmThresholdResponse) => void): Promise<CreateDefaultAlarmThresholdResponse>;
    /**
     * 添加DDoS防护的水印防护配置
     */
    CreateWaterPrintConfig(req: CreateWaterPrintConfigRequest, cb?: (error: string, rep: CreateWaterPrintConfigResponse) => void): Promise<CreateWaterPrintConfigResponse>;
    /**
     * 获取DDoS防护的IP黑白名单
     */
    DescribeBlackWhiteIpList(req: DescribeBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeBlackWhiteIpListResponse) => void): Promise<DescribeBlackWhiteIpListResponse>;
    /**
     * 获取CC防护等级列表
     */
    DescribeCCLevelList(req: DescribeCCLevelListRequest, cb?: (error: string, rep: DescribeCCLevelListResponse) => void): Promise<DescribeCCLevelListResponse>;
    /**
     * 修改DDoS黑白名单列表
     */
    ModifyDDoSBlackWhiteIpList(req: ModifyDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: ModifyDDoSBlackWhiteIpListResponse) => void): Promise<ModifyDDoSBlackWhiteIpListResponse>;
    /**
     * 获取DDoS防护的AI防护开关列表
     */
    DescribeListDDoSAI(req: DescribeListDDoSAIRequest, cb?: (error: string, rep: DescribeListDDoSAIResponse) => void): Promise<DescribeListDDoSAIResponse>;
    /**
     * 获取CC频率限制策略列表
     */
    DescribeCCReqLimitPolicyList(req: DescribeCCReqLimitPolicyListRequest, cb?: (error: string, rep: DescribeCCReqLimitPolicyListResponse) => void): Promise<DescribeCCReqLimitPolicyListResponse>;
    /**
     * 添加DDoS防护的IP网段黑白名单
     */
    CreateDDoSBlackWhiteIpList(req: CreateDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: CreateDDoSBlackWhiteIpListResponse) => void): Promise<CreateDDoSBlackWhiteIpListResponse>;
    /**
     * 获取CC清洗阈值列表
     */
    DescribeCCThresholdList(req: DescribeCCThresholdListRequest, cb?: (error: string, rep: DescribeCCThresholdListResponse) => void): Promise<DescribeCCThresholdListResponse>;
    /**
     * 修改CC精准防护策略
     */
    ModifyCCPrecisionPolicy(req: ModifyCCPrecisionPolicyRequest, cb?: (error: string, rep: ModifyCCPrecisionPolicyResponse) => void): Promise<ModifyCCPrecisionPolicyResponse>;
    /**
     * 修改边界防护L7转发规则
     */
    ModifyL7RulesEdge(req: ModifyL7RulesEdgeRequest, cb?: (error: string, rep: ModifyL7RulesEdgeResponse) => void): Promise<ModifyL7RulesEdgeResponse>;
    /**
     * 设置单IP告警阈值配置
     */
    CreateIPAlarmThresholdConfig(req: CreateIPAlarmThresholdConfigRequest, cb?: (error: string, rep: CreateIPAlarmThresholdConfigResponse) => void): Promise<CreateIPAlarmThresholdConfigResponse>;
    /**
     * 删除CC分级策略
     */
    DeleteCCLevelPolicy(req: DeleteCCLevelPolicyRequest, cb?: (error: string, rep: DeleteCCLevelPolicyResponse) => void): Promise<DeleteCCLevelPolicyResponse>;
    /**
     * 查询与证书ID对于域名匹配的七层规则
     */
    DescribeL7RulesBySSLCertId(req: DescribeL7RulesBySSLCertIdRequest, cb?: (error: string, rep: DescribeL7RulesBySSLCertIdResponse) => void): Promise<DescribeL7RulesBySSLCertIdResponse>;
    /**
     * 获取DDoS防护的特征过滤规则列表
     */
    DescribeListPacketFilterConfig(req: DescribeListPacketFilterConfigRequest, cb?: (error: string, rep: DescribeListPacketFilterConfigResponse) => void): Promise<DescribeListPacketFilterConfigResponse>;
    /**
     * 删除DDoS防护的端口acl策略
     */
    DeletePortAclConfig(req: DeletePortAclConfigRequest, cb?: (error: string, rep: DeletePortAclConfigResponse) => void): Promise<DeletePortAclConfigResponse>;
    /**
     * 删除CC四层黑白名单
     */
    DeleteCcBlackWhiteIpList(req: DeleteCcBlackWhiteIpListRequest, cb?: (error: string, rep: DeleteCcBlackWhiteIpListResponse) => void): Promise<DeleteCcBlackWhiteIpListResponse>;
    /**
     * 获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
     */
    DescribeListProtectThresholdConfig(req: DescribeListProtectThresholdConfigRequest, cb?: (error: string, rep: DescribeListProtectThresholdConfigResponse) => void): Promise<DescribeListProtectThresholdConfigResponse>;
    /**
     * 添加DDoS防护的端口acl策略
     */
    CreatePortAclConfig(req: CreatePortAclConfigRequest, cb?: (error: string, rep: CreatePortAclConfigResponse) => void): Promise<CreatePortAclConfigResponse>;
    /**
     * 添加DDoS防护的访问限速配置
     */
    CreateDDoSSpeedLimitConfig(req: CreateDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: CreateDDoSSpeedLimitConfigResponse) => void): Promise<CreateDDoSSpeedLimitConfigResponse>;
    /**
     * 获取基础防护攻击状态
     */
    DescribeBasicDeviceStatus(req: DescribeBasicDeviceStatusRequest, cb?: (error: string, rep: DescribeBasicDeviceStatusResponse) => void): Promise<DescribeBasicDeviceStatusResponse>;
    /**
     * 配置DDoS连接抑制选项
     */
    CreateDDoSConnectLimit(req: CreateDDoSConnectLimitRequest, cb?: (error: string, rep: CreateDDoSConnectLimitResponse) => void): Promise<CreateDDoSConnectLimitResponse>;
    /**
     * 获取高防包资产实例列表

     */
    DescribeListBGPInstances(req: DescribeListBGPInstancesRequest, cb?: (error: string, rep: DescribeListBGPInstancesResponse) => void): Promise<DescribeListBGPInstancesResponse>;
    /**
     * 本接口 (AssociateDDoSEipLoadBalancer) 用于将高防弹性公网IP绑定到负载均衡指定内网 IP 上。
     */
    AssociateDDoSEipLoadBalancer(req: AssociateDDoSEipLoadBalancerRequest, cb?: (error: string, rep: AssociateDDoSEipLoadBalancerResponse) => void): Promise<AssociateDDoSEipLoadBalancerResponse>;
    /**
     * 添加DDoS防护的IP黑白名单
     */
    CreateBlackWhiteIpList(req: CreateBlackWhiteIpListRequest, cb?: (error: string, rep: CreateBlackWhiteIpListResponse) => void): Promise<CreateBlackWhiteIpListResponse>;
    /**
     * 修改DDoS防护的特征过滤规则
     */
    ModifyPacketFilterConfig(req: ModifyPacketFilterConfigRequest, cb?: (error: string, rep: ModifyPacketFilterConfigResponse) => void): Promise<ModifyPacketFilterConfigResponse>;
    /**
     * 获取DDoS防护的访问限速配置列表
     */
    DescribeListDDoSSpeedLimitConfig(req: DescribeListDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: DescribeListDDoSSpeedLimitConfigResponse) => void): Promise<DescribeListDDoSSpeedLimitConfigResponse>;
    /**
     * 获取DDoS防护的区域封禁配置列表
     */
    DescribeListDDoSGeoIPBlockConfig(req: DescribeListDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: DescribeListDDoSGeoIPBlockConfigResponse) => void): Promise<DescribeListDDoSGeoIPBlockConfigResponse>;
    /**
     * 新增CC精准防护策略
     */
    CreateCCPrecisionPolicy(req: CreateCCPrecisionPolicyRequest, cb?: (error: string, rep: CreateCCPrecisionPolicyResponse) => void): Promise<CreateCCPrecisionPolicyResponse>;
    /**
     * 删除DDoS防护的IP黑白名单
     */
    DeleteBlackWhiteIpList(req: DeleteBlackWhiteIpListRequest, cb?: (error: string, rep: DeleteBlackWhiteIpListResponse) => void): Promise<DeleteBlackWhiteIpListResponse>;
    /**
     * 添加DDoS防护的区域封禁配置
     */
    CreateDDoSGeoIPBlockConfig(req: CreateDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: CreateDDoSGeoIPBlockConfigResponse) => void): Promise<CreateDDoSGeoIPBlockConfigResponse>;
    /**
     * 删除DDoS防护的水印防护配置
     */
    DeleteWaterPrintConfig(req: DeleteWaterPrintConfigRequest, cb?: (error: string, rep: DeleteWaterPrintConfigResponse) => void): Promise<DeleteWaterPrintConfigResponse>;
    /**
     * 获取CC防护的区域封禁配置列表
     */
    DescribeCcGeoIPBlockConfigList(req: DescribeCcGeoIPBlockConfigListRequest, cb?: (error: string, rep: DescribeCcGeoIPBlockConfigListResponse) => void): Promise<DescribeCcGeoIPBlockConfigListResponse>;
    /**
     * 新增CC频率限制策略
     */
    CreateCCReqLimitPolicy(req: CreateCCReqLimitPolicyRequest, cb?: (error: string, rep: CreateCCReqLimitPolicyResponse) => void): Promise<CreateCCReqLimitPolicyResponse>;
    /**
     * 设置DDoS防护的AI防护开关
     */
    CreateDDoSAI(req: CreateDDoSAIRequest, cb?: (error: string, rep: CreateDDoSAIResponse) => void): Promise<CreateDDoSAIResponse>;
    /**
     * 删除DDoS防护的特征过滤规则
     */
    DeletePacketFilterConfig(req: DeletePacketFilterConfigRequest, cb?: (error: string, rep: DeletePacketFilterConfigResponse) => void): Promise<DeletePacketFilterConfigResponse>;
    /**
     * 开启或关闭DDoS防护的水印防护配置
     */
    SwitchWaterPrintConfig(req: SwitchWaterPrintConfigRequest, cb?: (error: string, rep: SwitchWaterPrintConfigResponse) => void): Promise<SwitchWaterPrintConfigResponse>;
    /**
     * 获取DDoS防护的协议封禁配置列表
     */
    DescribeListProtocolBlockConfig(req: DescribeListProtocolBlockConfigRequest, cb?: (error: string, rep: DescribeListProtocolBlockConfigResponse) => void): Promise<DescribeListProtocolBlockConfigResponse>;
    /**
     * 创建一个域名，可用于在封堵时调度切换IP
     */
    CreateSchedulingDomain(req: CreateSchedulingDomainRequest, cb?: (error: string, rep: CreateSchedulingDomainResponse) => void): Promise<CreateSchedulingDomainResponse>;
    /**
     * 获取DDoS防护的IP网段黑白名单
     */
    DescribeDDoSBlackWhiteIpList(req: DescribeDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeDDoSBlackWhiteIpListResponse) => void): Promise<DescribeDDoSBlackWhiteIpListResponse>;
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     */
    DescribeCCTrend(req: DescribeCCTrendRequest, cb?: (error: string, rep: DescribeCCTrendResponse) => void): Promise<DescribeCCTrendResponse>;
    /**
     * 添加DDoS防护的水印防护密钥
     */
    CreateWaterPrintKey(req: CreateWaterPrintKeyRequest, cb?: (error: string, rep: CreateWaterPrintKeyResponse) => void): Promise<CreateWaterPrintKeyResponse>;
    /**
     * 设置DDoS防护的协议封禁配置
     */
    CreateProtocolBlockConfig(req: CreateProtocolBlockConfigRequest, cb?: (error: string, rep: CreateProtocolBlockConfigResponse) => void): Promise<CreateProtocolBlockConfigResponse>;
    /**
     * 批量添加DDoS防护的端口acl策略
     */
    CreatePortAclConfigList(req: CreatePortAclConfigListRequest, cb?: (error: string, rep: CreatePortAclConfigListResponse) => void): Promise<CreatePortAclConfigListResponse>;
    /**
     * 批量配置L7转发规则的证书供SSL测调用
     */
    CreateL7RuleCerts(req: CreateL7RuleCertsRequest, cb?: (error: string, rep: CreateL7RuleCertsResponse) => void): Promise<CreateL7RuleCertsResponse>;
    /**
     * 获取DDoS防护的端口acl策略列表
     */
    DescribeListPortAclList(req: DescribeListPortAclListRequest, cb?: (error: string, rep: DescribeListPortAclListResponse) => void): Promise<DescribeListPortAclListResponse>;
    /**
     * 获取DDoS连接抑制配置列表
     */
    DescribeDDoSConnectLimitList(req: DescribeDDoSConnectLimitListRequest, cb?: (error: string, rep: DescribeDDoSConnectLimitListResponse) => void): Promise<DescribeDDoSConnectLimitListResponse>;
    /**
     * 新建cc防护的地域封禁配置
     */
    CreateCcGeoIPBlockConfig(req: CreateCcGeoIPBlockConfigRequest, cb?: (error: string, rep: CreateCcGeoIPBlockConfigResponse) => void): Promise<CreateCcGeoIPBlockConfigResponse>;
    /**
     * 修改DDoS防护的区域封禁配置
     */
    ModifyDDoSGeoIPBlockConfig(req: ModifyDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: ModifyDDoSGeoIPBlockConfigResponse) => void): Promise<ModifyDDoSGeoIPBlockConfigResponse>;
    /**
     * 修改DDoS防护的端口acl策略
     */
    ModifyPortAclConfig(req: ModifyPortAclConfigRequest, cb?: (error: string, rep: ModifyPortAclConfigResponse) => void): Promise<ModifyPortAclConfigResponse>;
    /**
     * 获取转发监听器列表
     */
    DescribeListListener(req?: DescribeListListenerRequest, cb?: (error: string, rep: DescribeListListenerResponse) => void): Promise<DescribeListListenerResponse>;
    /**
     * 删除CC频率限制策略
     */
    DeleteCCRequestLimitPolicy(req: DeleteCCRequestLimitPolicyRequest, cb?: (error: string, rep: DeleteCCRequestLimitPolicyResponse) => void): Promise<DeleteCCRequestLimitPolicyResponse>;
}
