import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDefaultAlarmThresholdRequest, DescribeDDoSConnectLimitListRequest, DescribeListBGPIPInstancesResponse, DescribeBlackWhiteIpListResponse, DescribeOverviewCCTrendRequest, DeleteCCLevelPolicyRequest, CreateBoundIPRequest, DescribeListSchedulingDomainRequest, CreateWaterPrintConfigRequest, CreateBlackWhiteIpListResponse, DeleteCCRequestLimitPolicyRequest, DescribeL7RulesBySSLCertIdResponse, DescribeDDoSBlackWhiteIpListResponse, ModifyNewDomainRulesRequest, DescribeListProtocolBlockConfigResponse, DescribeListBGPInstancesRequest, DescribeBGPIPL7RulesRequest, ModifyCcBlackWhiteIpListRequest, DeleteDDoSSpeedLimitConfigRequest, CreatePacketFilterConfigResponse, CreateCCReqLimitPolicyResponse, DescribeListWaterPrintConfigRequest, CreateL7RuleCertsRequest, CreateCCPrecisionPolicyResponse, DeleteCcGeoIPBlockConfigResponse, DeleteDDoSGeoIPBlockConfigRequest, ModifyDDoSGeoIPBlockConfigResponse, DescribeCcBlackWhiteIpListResponse, ModifyCCLevelPolicyResponse, CreateIPAlarmThresholdConfigRequest, CreateCcBlackWhiteIpListResponse, DescribeDefaultAlarmThresholdResponse, CreateNewL7RulesResponse, CreateDDoSAIRequest, DescribeListProtectThresholdConfigRequest, DescribeListWaterPrintConfigResponse, ModifyNewDomainRulesResponse, DescribeDDoSConnectLimitListResponse, ModifyPacketFilterConfigResponse, DescribeCCLevelPolicyRequest, CreateWaterPrintConfigResponse, DescribeOverviewAttackTrendRequest, DescribeListBGPIPInstancesRequest, DescribeNewL7RulesResponse, CreatePortAclConfigRequest, DescribeCCThresholdListResponse, DescribeL7RulesBySSLCertIdRequest, DescribeListPacketFilterConfigResponse, CreateSchedulingDomainRequest, ModifyPortAclConfigRequest, CreateDDoSBlackWhiteIpListRequest, ModifyCCReqLimitPolicyRequest, DescribeOverviewDDoSTrendRequest, DisassociateDDoSEipAddressResponse, DescribeBgpBizTrendRequest, DeleteCCThresholdPolicyResponse, DescribeBizHttpStatusRequest, DescribeOverviewIndexResponse, CreatePortAclConfigListRequest, DisassociateDDoSEipAddressRequest, SwitchWaterPrintConfigResponse, DeleteWaterPrintKeyResponse, CreateDDoSBlackWhiteIpListResponse, ModifyCcBlackWhiteIpListResponse, DescribeNewL7RulesRequest, DescribeListPacketFilterConfigRequest, DescribeOverviewIndexRequest, ModifyDDoSBlackWhiteIpListRequest, DescribeListDDoSGeoIPBlockConfigRequest, DescribeOverviewDDoSEventListResponse, CreateCcGeoIPBlockConfigResponse, DescribeOverviewAttackTrendResponse, ModifyPortAclConfigResponse, DescribeBasicDeviceStatusRequest, DeleteCcGeoIPBlockConfigRequest, DescribeCCLevelListResponse, CreateDDoSSpeedLimitConfigRequest, CreateDDoSGeoIPBlockConfigRequest, CreateProtocolBlockConfigRequest, DeleteWaterPrintKeyRequest, AssociateDDoSEipAddressResponse, DeleteCCLevelPolicyResponse, ModifyPacketFilterConfigRequest, DescribeBlackWhiteIpListRequest, CreateCcGeoIPBlockConfigRequest, DeletePortAclConfigResponse, CreateDDoSSpeedLimitConfigResponse, DescribeNewL7RulesErrHealthResponse, DeletePacketFilterConfigRequest, DescribeListDDoSGeoIPBlockConfigResponse, DescribeBasicDeviceStatusResponse, DescribeBgpBizTrendResponse, DescribePendingRiskInfoResponse, DeleteCCPrecisionPolicyRequest, DeleteWaterPrintConfigResponse, DeletePacketFilterConfigResponse, CreateProtocolBlockConfigResponse, CreateIPAlarmThresholdConfigResponse, CreatePortAclConfigListResponse, DeleteWaterPrintConfigRequest, DescribeDDoSBlackWhiteIpListRequest, DescribeListBlackWhiteIpListResponse, CreateBlackWhiteIpListRequest, DescribeCCReqLimitPolicyListRequest, DescribeListDDoSSpeedLimitConfigResponse, ModifyDDoSThresholdResponse, CreateDDoSGeoIPBlockConfigResponse, DescribeOverviewDDoSEventListRequest, DeleteDDoSBlackWhiteIpListRequest, DescribeBGPIPL7RulesResponse, CreateDDoSConnectLimitResponse, DescribeCcBlackWhiteIpListRequest, DescribeListListenerResponse, DeletePortAclConfigRequest, DescribeIpBlockListRequest, DescribePendingRiskInfoRequest, CreatePortAclConfigResponse, ModifyDDoSLevelResponse, CreateL7RuleCertsResponse, CreateCCPrecisionPolicyRequest, DescribeListProtectThresholdConfigResponse, CreateDefaultAlarmThresholdResponse, ModifyDDoSThresholdRequest, ModifyDDoSLevelRequest, DescribeListSchedulingDomainResponse, DescribeListIPAlarmConfigResponse, ModifyDDoSBlackWhiteIpListResponse, DescribeCCPrecisionPlyListRequest, DescribeCCLevelListRequest, ModifyCCThresholdPolicyRequest, DeleteDDoSGeoIPBlockConfigResponse, DescribeListDDoSAIRequest, DescribeListIPAlarmConfigRequest, CreateNewL7RulesRequest, DescribeOverviewCCTrendResponse, ModifyCCReqLimitPolicyResponse, ModifyDomainUsrNameRequest, CreateDDoSConnectLimitRequest, CreateWaterPrintKeyRequest, DescribeBizHttpStatusResponse, DescribeCCReqLimitPolicyListResponse, DescribeListDDoSAIResponse, DescribeNewL7RulesErrHealthRequest, ModifyCCPrecisionPolicyResponse, ModifyDDoSSpeedLimitConfigRequest, AssociateDDoSEipAddressRequest, AssociateDDoSEipLoadBalancerResponse, DescribeCCThresholdListRequest, ModifyDDoSGeoIPBlockConfigRequest, DescribeBizTrendResponse, DeleteCcBlackWhiteIpListResponse, CreateBoundIPResponse, DescribeListDDoSSpeedLimitConfigRequest, SwitchWaterPrintConfigRequest, AssociateDDoSEipLoadBalancerRequest, ModifyCCPrecisionPolicyRequest, DeleteDDoSBlackWhiteIpListResponse, ModifyDomainUsrNameResponse, DescribeCCTrendResponse, CreateSchedulingDomainResponse, DeleteCcBlackWhiteIpListRequest, DescribeCcGeoIPBlockConfigListResponse, CreateDDoSAIResponse, DescribeListProtocolBlockConfigRequest, DescribeListBGPInstancesResponse, DescribeDDoSTrendRequest, DeleteCCRequestLimitPolicyResponse, CreateCcBlackWhiteIpListRequest, DescribeBizMonitorTrendResponse, DescribeListPortAclListResponse, DescribeCCPrecisionPlyListResponse, DescribeBizTrendRequest, DescribeListPortAclListRequest, DescribeIpBlockListResponse, DescribeCCLevelPolicyResponse, DescribeBizMonitorTrendRequest, DescribeOverviewDDoSTrendResponse, DeleteDDoSSpeedLimitConfigResponse, DeleteCCThresholdPolicyRequest, DescribeListListenerRequest, ModifyCCThresholdPolicyResponse, CreateWaterPrintKeyResponse, DeleteCCPrecisionPolicyResponse, DescribeDDoSTrendResponse, DescribeListBlackWhiteIpListRequest, CreateCCReqLimitPolicyRequest, ModifyDDoSSpeedLimitConfigResponse, DescribeDefaultAlarmThresholdRequest, ModifyCCLevelPolicyRequest, DescribeCcGeoIPBlockConfigListRequest, CreatePacketFilterConfigRequest, DescribeCCTrendRequest } from "./antiddos_models";
/**
 * antiddos client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改CC频率限制策略
     */
    ModifyCCReqLimitPolicy(req: ModifyCCReqLimitPolicyRequest, cb?: (error: string, rep: ModifyCCReqLimitPolicyResponse) => void): Promise<ModifyCCReqLimitPolicyResponse>;
    /**
     * 修改DDoS黑白名单列表
     */
    ModifyDDoSBlackWhiteIpList(req: ModifyDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: ModifyDDoSBlackWhiteIpListResponse) => void): Promise<ModifyDDoSBlackWhiteIpListResponse>;
    /**
     * 查询账号维度待处理风险信息，包括是否为付费用户，查询攻击中、封堵中、过期资源数量等
     */
    DescribePendingRiskInfo(req?: DescribePendingRiskInfoRequest, cb?: (error: string, rep: DescribePendingRiskInfoResponse) => void): Promise<DescribePendingRiskInfoResponse>;
    /**
     * 查询与证书ID对于域名匹配的七层规则
     */
    DescribeL7RulesBySSLCertId(req: DescribeL7RulesBySSLCertIdRequest, cb?: (error: string, rep: DescribeL7RulesBySSLCertIdResponse) => void): Promise<DescribeL7RulesBySSLCertIdResponse>;
    /**
     * 高防IP获取7层规则
     */
    DescribeBGPIPL7Rules(req: DescribeBGPIPL7RulesRequest, cb?: (error: string, rep: DescribeBGPIPL7RulesResponse) => void): Promise<DescribeBGPIPL7RulesResponse>;
    /**
     * 获取单IP告警阈值配置列表
     */
    DescribeListIPAlarmConfig(req: DescribeListIPAlarmConfigRequest, cb?: (error: string, rep: DescribeListIPAlarmConfigResponse) => void): Promise<DescribeListIPAlarmConfigResponse>;
    /**
     * 获取单IP默认告警阈值配置
     */
    DescribeDefaultAlarmThreshold(req: DescribeDefaultAlarmThresholdRequest, cb?: (error: string, rep: DescribeDefaultAlarmThresholdResponse) => void): Promise<DescribeDefaultAlarmThresholdResponse>;
    /**
     * 获取DDoS连接抑制配置列表
     */
    DescribeDDoSConnectLimitList(req: DescribeDDoSConnectLimitListRequest, cb?: (error: string, rep: DescribeDDoSConnectLimitListResponse) => void): Promise<DescribeDDoSConnectLimitListResponse>;
    /**
     * 获取L7转发规则健康检查异常结果列表
     */
    DescribeNewL7RulesErrHealth(req: DescribeNewL7RulesErrHealthRequest, cb?: (error: string, rep: DescribeNewL7RulesErrHealthResponse) => void): Promise<DescribeNewL7RulesErrHealthResponse>;
    /**
     * 获取CC四层黑白名单列表
     */
    DescribeCcBlackWhiteIpList(req: DescribeCcBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeCcBlackWhiteIpListResponse) => void): Promise<DescribeCcBlackWhiteIpListResponse>;
    /**
     * 接口变更

获取DDoS防护的IP黑白名单
     */
    DescribeBlackWhiteIpList(req: DescribeBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeBlackWhiteIpListResponse) => void): Promise<DescribeBlackWhiteIpListResponse>;
    /**
     * 获取边界防护CC防护等级列表
     */
    DescribeCCLevelList(req: DescribeCCLevelListRequest, cb?: (error: string, rep: DescribeCCLevelListResponse) => void): Promise<DescribeCCLevelListResponse>;
    /**
     * 新增CC精准防护策略
     */
    CreateCCPrecisionPolicy(req: CreateCCPrecisionPolicyRequest, cb?: (error: string, rep: CreateCCPrecisionPolicyResponse) => void): Promise<CreateCCPrecisionPolicyResponse>;
    /**
     * 获取CC清洗阈值列表
     */
    DescribeCCThresholdList(req: DescribeCCThresholdListRequest, cb?: (error: string, rep: DescribeCCThresholdListResponse) => void): Promise<DescribeCCThresholdListResponse>;
    /**
     * 设置单IP告警阈值配置
     */
    CreateIPAlarmThresholdConfig(req: CreateIPAlarmThresholdConfigRequest, cb?: (error: string, rep: CreateIPAlarmThresholdConfigResponse) => void): Promise<CreateIPAlarmThresholdConfigResponse>;
    /**
     * 获取DDoS防护的特征过滤规则列表
     */
    DescribeListPacketFilterConfig(req: DescribeListPacketFilterConfigRequest, cb?: (error: string, rep: DescribeListPacketFilterConfigResponse) => void): Promise<DescribeListPacketFilterConfigResponse>;
    /**
     * 添加DDoS防护的端口acl策略
     */
    CreatePortAclConfig(req: CreatePortAclConfigRequest, cb?: (error: string, rep: CreatePortAclConfigResponse) => void): Promise<CreatePortAclConfigResponse>;
    /**
     * 获取基础防护攻击状态
     */
    DescribeBasicDeviceStatus(req: DescribeBasicDeviceStatusRequest, cb?: (error: string, rep: DescribeBasicDeviceStatusResponse) => void): Promise<DescribeBasicDeviceStatusResponse>;
    /**
     * 本接口 (AssociateDDoSEipLoadBalancer) 用于将高防弹性公网IP绑定到负载均衡指定内网 IP 上。
     */
    AssociateDDoSEipLoadBalancer(req: AssociateDDoSEipLoadBalancerRequest, cb?: (error: string, rep: AssociateDDoSEipLoadBalancerResponse) => void): Promise<AssociateDDoSEipLoadBalancerResponse>;
    /**
     * 添加7层转发规则
     */
    CreateNewL7Rules(req: CreateNewL7RulesRequest, cb?: (error: string, rep: CreateNewL7RulesResponse) => void): Promise<CreateNewL7RulesResponse>;
    /**
     * 删除DDoS防护的水印防护配置
     */
    DeleteWaterPrintConfig(req: DeleteWaterPrintConfigRequest, cb?: (error: string, rep: DeleteWaterPrintConfigResponse) => void): Promise<DeleteWaterPrintConfigResponse>;
    /**
     * 新增CC频率限制策略
     */
    CreateCCReqLimitPolicy(req: CreateCCReqLimitPolicyRequest, cb?: (error: string, rep: CreateCCReqLimitPolicyResponse) => void): Promise<CreateCCReqLimitPolicyResponse>;
    /**
     * 开启或关闭DDoS防护的水印防护配置，此功能为付费增值服务，有需求请联系售后
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
     * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
     */
    DisassociateDDoSEipAddress(req: DisassociateDDoSEipAddressRequest, cb?: (error: string, rep: DisassociateDDoSEipAddressResponse) => void): Promise<DisassociateDDoSEipAddressResponse>;
    /**
     * 设置DDoS防护的协议封禁配置
     */
    CreateProtocolBlockConfig(req: CreateProtocolBlockConfigRequest, cb?: (error: string, rep: CreateProtocolBlockConfigResponse) => void): Promise<CreateProtocolBlockConfigResponse>;
    /**
     * 删除DDoS防护的IP网段黑白名单
     */
    DeleteDDoSBlackWhiteIpList(req: DeleteDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: DeleteDDoSBlackWhiteIpListResponse) => void): Promise<DeleteDDoSBlackWhiteIpListResponse>;
    /**
     * 批量配置L7转发规则的证书供SSL测调用
     */
    CreateL7RuleCerts(req: CreateL7RuleCertsRequest, cb?: (error: string, rep: CreateL7RuleCertsResponse) => void): Promise<CreateL7RuleCertsResponse>;
    /**
     * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
     */
    AssociateDDoSEipAddress(req: AssociateDDoSEipAddressRequest, cb?: (error: string, rep: AssociateDDoSEipAddressResponse) => void): Promise<AssociateDDoSEipAddressResponse>;
    /**
     * 修改智能解析域名名称
     */
    ModifyDomainUsrName(req: ModifyDomainUsrNameRequest, cb?: (error: string, rep: ModifyDomainUsrNameResponse) => void): Promise<ModifyDomainUsrNameResponse>;
    /**
     * 获取防护概览DDoS攻击流量带宽和攻击包速率数据
     */
    DescribeOverviewDDoSTrend(req: DescribeOverviewDDoSTrendRequest, cb?: (error: string, rep: DescribeOverviewDDoSTrendResponse) => void): Promise<DescribeOverviewDDoSTrendResponse>;
    /**
     * 删除DDoS防护的访问限速配置
     */
    DeleteDDoSSpeedLimitConfig(req: DeleteDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: DeleteDDoSSpeedLimitConfigResponse) => void): Promise<DeleteDDoSSpeedLimitConfigResponse>;
    /**
     * 高防IP获取7层规则
     */
    DescribeNewL7Rules(req: DescribeNewL7RulesRequest, cb?: (error: string, rep: DescribeNewL7RulesResponse) => void): Promise<DescribeNewL7RulesResponse>;
    /**
     * 获取IP封堵列表
     */
    DescribeIpBlockList(req?: DescribeIpBlockListRequest, cb?: (error: string, rep: DescribeIpBlockListResponse) => void): Promise<DescribeIpBlockListResponse>;
    /**
     * 修改CC防护等级
     */
    ModifyCCLevelPolicy(req: ModifyCCLevelPolicyRequest, cb?: (error: string, rep: ModifyCCLevelPolicyResponse) => void): Promise<ModifyCCLevelPolicyResponse>;
    /**
     * 获取高防IP资产实例列表
     */
    DescribeListBGPIPInstances(req: DescribeListBGPIPInstancesRequest, cb?: (error: string, rep: DescribeListBGPIPInstancesResponse) => void): Promise<DescribeListBGPIPInstancesResponse>;
    /**
     * 修改7层转发规则
     */
    ModifyNewDomainRules(req: ModifyNewDomainRulesRequest, cb?: (error: string, rep: ModifyNewDomainRulesResponse) => void): Promise<ModifyNewDomainRulesResponse>;
    /**
     * 获取防护概览总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     */
    DescribeOverviewCCTrend(req: DescribeOverviewCCTrendRequest, cb?: (error: string, rep: DescribeOverviewCCTrendResponse) => void): Promise<DescribeOverviewCCTrendResponse>;
    /**
     * 获取CC分级策略
     */
    DescribeCCLevelPolicy(req: DescribeCCLevelPolicyRequest, cb?: (error: string, rep: DescribeCCLevelPolicyResponse) => void): Promise<DescribeCCLevelPolicyResponse>;
    /**
     * 获取智能调度域名列表
     */
    DescribeListSchedulingDomain(req: DescribeListSchedulingDomainRequest, cb?: (error: string, rep: DescribeListSchedulingDomainResponse) => void): Promise<DescribeListSchedulingDomainResponse>;
    /**
     * 添加DDoS防护的区域封禁配置
     */
    CreateDDoSGeoIPBlockConfig(req: CreateDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: CreateDDoSGeoIPBlockConfigResponse) => void): Promise<CreateDDoSGeoIPBlockConfigResponse>;
    /**
     * 获取高防包流量折线图
     */
    DescribeBgpBizTrend(req: DescribeBgpBizTrendRequest, cb?: (error: string, rep: DescribeBgpBizTrendResponse) => void): Promise<DescribeBgpBizTrendResponse>;
    /**
     * 获取CC频率限制策略列表
     */
    DescribeCCReqLimitPolicyList(req: DescribeCCReqLimitPolicyListRequest, cb?: (error: string, rep: DescribeCCReqLimitPolicyListResponse) => void): Promise<DescribeCCReqLimitPolicyListResponse>;
    /**
     * 删除CC分级策略
     */
    DeleteCCLevelPolicy(req: DeleteCCLevelPolicyRequest, cb?: (error: string, rep: DeleteCCLevelPolicyResponse) => void): Promise<DeleteCCLevelPolicyResponse>;
    /**
     * 拉取防护概览指标
     */
    DescribeOverviewIndex(req: DescribeOverviewIndexRequest, cb?: (error: string, rep: DescribeOverviewIndexResponse) => void): Promise<DescribeOverviewIndexResponse>;
    /**
     * 添加DDoS防护的访问限速配置
     */
    CreateDDoSSpeedLimitConfig(req: CreateDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: CreateDDoSSpeedLimitConfigResponse) => void): Promise<CreateDDoSSpeedLimitConfigResponse>;
    /**
     * 获取业务流量状态码统计列表
     */
    DescribeBizHttpStatus(req: DescribeBizHttpStatusRequest, cb?: (error: string, rep: DescribeBizHttpStatusResponse) => void): Promise<DescribeBizHttpStatusResponse>;
    /**
     * 获取高防包资产实例列表
     */
    DescribeListBGPInstances(req: DescribeListBGPInstancesRequest, cb?: (error: string, rep: DescribeListBGPInstancesResponse) => void): Promise<DescribeListBGPInstancesResponse>;
    /**
     * 删除DDoS防护的端口acl策略
     */
    DeletePortAclConfig(req: DeletePortAclConfigRequest, cb?: (error: string, rep: DeletePortAclConfigResponse) => void): Promise<DeletePortAclConfigResponse>;
    /**
     * 获取DDoS防护的水印防护配置列表
     */
    DescribeListWaterPrintConfig(req: DescribeListWaterPrintConfigRequest, cb?: (error: string, rep: DescribeListWaterPrintConfigResponse) => void): Promise<DescribeListWaterPrintConfigResponse>;
    /**
     * 获取DDoS防护的区域封禁配置列表
     */
    DescribeListDDoSGeoIPBlockConfig(req: DescribeListDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: DescribeListDDoSGeoIPBlockConfigResponse) => void): Promise<DescribeListDDoSGeoIPBlockConfigResponse>;
    /**
     * 删除CC防护的区域封禁配置
     */
    DeleteCcGeoIPBlockConfig(req: DeleteCcGeoIPBlockConfigRequest, cb?: (error: string, rep: DeleteCcGeoIPBlockConfigResponse) => void): Promise<DeleteCcGeoIPBlockConfigResponse>;
    /**
     * 获取DDoS防护的端口acl策略列表
     */
    DescribeListPortAclList(req: DescribeListPortAclListRequest, cb?: (error: string, rep: DescribeListPortAclListResponse) => void): Promise<DescribeListPortAclListResponse>;
    /**
     * 获取转发监听器列表
     */
    DescribeListListener(req?: DescribeListListenerRequest, cb?: (error: string, rep: DescribeListListenerResponse) => void): Promise<DescribeListListenerResponse>;
    /**
     * 修改DDoS清洗阈值
     */
    ModifyDDoSThreshold(req: ModifyDDoSThresholdRequest, cb?: (error: string, rep: ModifyDDoSThresholdResponse) => void): Promise<ModifyDDoSThresholdResponse>;
    /**
     * 修改DDoS防护的特征过滤规则
     */
    ModifyPacketFilterConfig(req: ModifyPacketFilterConfigRequest, cb?: (error: string, rep: ModifyPacketFilterConfigResponse) => void): Promise<ModifyPacketFilterConfigResponse>;
    /**
     * 添加DDoS防护的特征过滤规则
     */
    CreatePacketFilterConfig(req: CreatePacketFilterConfigRequest, cb?: (error: string, rep: CreatePacketFilterConfigResponse) => void): Promise<CreatePacketFilterConfigResponse>;
    /**
     * 获取DDoS防护的IP黑白名单列表
     */
    DescribeListBlackWhiteIpList(req: DescribeListBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeListBlackWhiteIpListResponse) => void): Promise<DescribeListBlackWhiteIpListResponse>;
    /**
     * 修改CC四层黑白名单
     */
    ModifyCcBlackWhiteIpList(req: ModifyCcBlackWhiteIpListRequest, cb?: (error: string, rep: ModifyCcBlackWhiteIpListResponse) => void): Promise<ModifyCcBlackWhiteIpListResponse>;
    /**
     * 获取高防IP业务监控流量曲线
     */
    DescribeBizMonitorTrend(req: DescribeBizMonitorTrendRequest, cb?: (error: string, rep: DescribeBizMonitorTrendResponse) => void): Promise<DescribeBizMonitorTrendResponse>;
    /**
     * 绑定IP到高防包实例，支持独享包、共享包（新版）；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     */
    CreateBoundIP(req: CreateBoundIPRequest, cb?: (error: string, rep: CreateBoundIPResponse) => void): Promise<CreateBoundIPResponse>;
    /**
     * 获取防护概览的ddos攻击事件
     */
    DescribeOverviewDDoSEventList(req: DescribeOverviewDDoSEventListRequest, cb?: (error: string, rep: DescribeOverviewDDoSEventListResponse) => void): Promise<DescribeOverviewDDoSEventListResponse>;
    /**
     * 设置单IP默认告警阈值配置
     */
    CreateDefaultAlarmThreshold(req: CreateDefaultAlarmThresholdRequest, cb?: (error: string, rep: CreateDefaultAlarmThresholdResponse) => void): Promise<CreateDefaultAlarmThresholdResponse>;
    /**
     * 添加DDoS防护的水印防护配置
     */
    CreateWaterPrintConfig(req: CreateWaterPrintConfigRequest, cb?: (error: string, rep: CreateWaterPrintConfigResponse) => void): Promise<CreateWaterPrintConfigResponse>;
    /**
     * 获取DDoS防护的AI防护开关列表
     */
    DescribeListDDoSAI(req: DescribeListDDoSAIRequest, cb?: (error: string, rep: DescribeListDDoSAIResponse) => void): Promise<DescribeListDDoSAIResponse>;
    /**
     * 获取DDoS防护的访问限速配置列表
     */
    DescribeListDDoSSpeedLimitConfig(req: DescribeListDDoSSpeedLimitConfigRequest, cb?: (error: string, rep: DescribeListDDoSSpeedLimitConfigResponse) => void): Promise<DescribeListDDoSSpeedLimitConfigResponse>;
    /**
     * 拉取防护概览攻击趋势
     */
    DescribeOverviewAttackTrend(req: DescribeOverviewAttackTrendRequest, cb?: (error: string, rep: DescribeOverviewAttackTrendResponse) => void): Promise<DescribeOverviewAttackTrendResponse>;
    /**
     * 添加DDoS防护的IP黑白名单
     */
    CreateBlackWhiteIpList(req: CreateBlackWhiteIpListRequest, cb?: (error: string, rep: CreateBlackWhiteIpListResponse) => void): Promise<CreateBlackWhiteIpListResponse>;
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     */
    DescribeDDoSTrend(req: DescribeDDoSTrendRequest, cb?: (error: string, rep: DescribeDDoSTrendResponse) => void): Promise<DescribeDDoSTrendResponse>;
    /**
     * 设置DDoS防护的AI防护开关
     */
    CreateDDoSAI(req: CreateDDoSAIRequest, cb?: (error: string, rep: CreateDDoSAIResponse) => void): Promise<CreateDDoSAIResponse>;
    /**
     * 删除DDoS防护的特征过滤规则
     */
    DeletePacketFilterConfig(req: DeletePacketFilterConfigRequest, cb?: (error: string, rep: DeletePacketFilterConfigResponse) => void): Promise<DeletePacketFilterConfigResponse>;
    /**
     * 读取或修改DDoS的防护等级
     */
    ModifyDDoSLevel(req: ModifyDDoSLevelRequest, cb?: (error: string, rep: ModifyDDoSLevelResponse) => void): Promise<ModifyDDoSLevelResponse>;
    /**
     * 批量添加DDoS防护的端口acl策略
     */
    CreatePortAclConfigList(req: CreatePortAclConfigListRequest, cb?: (error: string, rep: CreatePortAclConfigListResponse) => void): Promise<CreatePortAclConfigListResponse>;
    /**
     * 新建CC防护的地域封禁配置
     */
    CreateCcGeoIPBlockConfig(req: CreateCcGeoIPBlockConfigRequest, cb?: (error: string, rep: CreateCcGeoIPBlockConfigResponse) => void): Promise<CreateCcGeoIPBlockConfigResponse>;
    /**
     * 新建CC四层黑白名单
     */
    CreateCcBlackWhiteIpList(req: CreateCcBlackWhiteIpListRequest, cb?: (error: string, rep: CreateCcBlackWhiteIpListResponse) => void): Promise<CreateCcBlackWhiteIpListResponse>;
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
     * 获取CC精准防护列表
     */
    DescribeCCPrecisionPlyList(req: DescribeCCPrecisionPlyListRequest, cb?: (error: string, rep: DescribeCCPrecisionPlyListResponse) => void): Promise<DescribeCCPrecisionPlyListResponse>;
    /**
     * 修改DDoS防护的端口acl策略
     */
    ModifyPortAclConfig(req: ModifyPortAclConfigRequest, cb?: (error: string, rep: ModifyPortAclConfigResponse) => void): Promise<ModifyPortAclConfigResponse>;
    /**
     * 修改CC清洗阈值
     */
    ModifyCCThresholdPolicy(req: ModifyCCThresholdPolicyRequest, cb?: (error: string, rep: ModifyCCThresholdPolicyResponse) => void): Promise<ModifyCCThresholdPolicyResponse>;
    /**
     * 删除CC清洗阈值策略
     */
    DeleteCCThresholdPolicy(req: DeleteCCThresholdPolicyRequest, cb?: (error: string, rep: DeleteCCThresholdPolicyResponse) => void): Promise<DeleteCCThresholdPolicyResponse>;
    /**
     * 删除DDoS防护的水印防护密钥
     */
    DeleteWaterPrintKey(req: DeleteWaterPrintKeyRequest, cb?: (error: string, rep: DeleteWaterPrintKeyResponse) => void): Promise<DeleteWaterPrintKeyResponse>;
    /**
     * 添加DDoS防护的IP网段黑白名单
     */
    CreateDDoSBlackWhiteIpList(req: CreateDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: CreateDDoSBlackWhiteIpListResponse) => void): Promise<CreateDDoSBlackWhiteIpListResponse>;
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     */
    DescribeCCTrend(req: DescribeCCTrendRequest, cb?: (error: string, rep: DescribeCCTrendResponse) => void): Promise<DescribeCCTrendResponse>;
    /**
     * 删除CC四层黑白名单
     */
    DeleteCcBlackWhiteIpList(req: DeleteCcBlackWhiteIpListRequest, cb?: (error: string, rep: DeleteCcBlackWhiteIpListResponse) => void): Promise<DeleteCcBlackWhiteIpListResponse>;
    /**
     * 接口变更

获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
     */
    DescribeListProtectThresholdConfig(req: DescribeListProtectThresholdConfigRequest, cb?: (error: string, rep: DescribeListProtectThresholdConfigResponse) => void): Promise<DescribeListProtectThresholdConfigResponse>;
    /**
     * 删除CC精准防护策略
     */
    DeleteCCPrecisionPolicy(req: DeleteCCPrecisionPolicyRequest, cb?: (error: string, rep: DeleteCCPrecisionPolicyResponse) => void): Promise<DeleteCCPrecisionPolicyResponse>;
    /**
     * 获取DDoS防护的IP网段黑白名单
     */
    DescribeDDoSBlackWhiteIpList(req: DescribeDDoSBlackWhiteIpListRequest, cb?: (error: string, rep: DescribeDDoSBlackWhiteIpListResponse) => void): Promise<DescribeDDoSBlackWhiteIpListResponse>;
    /**
     * 配置DDoS连接抑制选项
     */
    CreateDDoSConnectLimit(req: CreateDDoSConnectLimitRequest, cb?: (error: string, rep: CreateDDoSConnectLimitResponse) => void): Promise<CreateDDoSConnectLimitResponse>;
    /**
     * 修改CC精准防护策略
     */
    ModifyCCPrecisionPolicy(req: ModifyCCPrecisionPolicyRequest, cb?: (error: string, rep: ModifyCCPrecisionPolicyResponse) => void): Promise<ModifyCCPrecisionPolicyResponse>;
    /**
     * 获取CC防护的区域封禁配置列表
     */
    DescribeCcGeoIPBlockConfigList(req: DescribeCcGeoIPBlockConfigListRequest, cb?: (error: string, rep: DescribeCcGeoIPBlockConfigListResponse) => void): Promise<DescribeCcGeoIPBlockConfigListResponse>;
    /**
     * 添加DDoS防护的水印防护密钥
     */
    CreateWaterPrintKey(req: CreateWaterPrintKeyRequest, cb?: (error: string, rep: CreateWaterPrintKeyResponse) => void): Promise<CreateWaterPrintKeyResponse>;
    /**
     * 修改DDoS防护的区域封禁配置
     */
    ModifyDDoSGeoIPBlockConfig(req: ModifyDDoSGeoIPBlockConfigRequest, cb?: (error: string, rep: ModifyDDoSGeoIPBlockConfigResponse) => void): Promise<ModifyDDoSGeoIPBlockConfigResponse>;
    /**
     * 删除CC频率限制策略
     */
    DeleteCCRequestLimitPolicy(req: DeleteCCRequestLimitPolicyRequest, cb?: (error: string, rep: DeleteCCRequestLimitPolicyResponse) => void): Promise<DeleteCCRequestLimitPolicyResponse>;
}
