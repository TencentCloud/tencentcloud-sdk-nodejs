import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyDDoSPolicyCaseRequest, DescribeIpUnBlockListRequest, DeleteDDoSPolicyCaseRequest, CreateDDoSPolicyResponse, DeleteL7RulesRequest, CreateBoundIPRequest, DescribeNewL4RulesErrHealthResponse, DescribeCCEvListRequest, DescribeTransmitStatisResponse, DescribeDDoSNetTrendRequest, DescribePolicyCaseRequest, DescribeUnBlockStatisRequest, ModifyCCUrlAllowResponse, DescribeBasicDeviceThresholdResponse, DescribeCCAlarmThresholdResponse, DescribeDDoSNetEvListRequest, DeleteNewL4RulesRequest, ModifyNewDomainRulesRequest, DescribePolicyCaseResponse, DescribeResIpListRequest, DescribeNewL4RulesErrHealthRequest, ModifyCCLevelRequest, DeleteCCSelfDefinePolicyRequest, DescribeCCUrlAllowRequest, ModifyDDoSAlarmThresholdRequest, DescribeNewL4RulesRequest, CreateDDoSPolicyRequest, ModifyCCThresholdResponse, ModifyNetReturnSwitchResponse, DescribeActionLogRequest, CreateL7RuleCertRequest, DescribeBGPIPL7RuleMaxCntResponse, DescribePcapResponse, DescribePackIndexResponse, DescribeDDoSAttackSourceRequest, DescribeDDoSCountRequest, CreateNewL7RulesResponse, ModifyNewL4RuleResponse, ModifyNewDomainRulesResponse, CreateNewL4RulesResponse, DescribeDDoSUsedStatisResponse, DescribeBasicCCThresholdRequest, CreateDDoSPolicyCaseResponse, DescribeIPProductInfoResponse, ModifyDDoSSwitchResponse, DescribeCCSelfDefinePolicyRequest, ModifyDDoSDefendStatusRequest, DescribeRuleSetsResponse, DescribeBaradDataResponse, DescribeDDoSEvInfoRequest, DescribeDDoSAttackIPRegionMapResponse, ModifyL4KeepTimeResponse, ModifyL7RulesResponse, DescribeL7HealthConfigRequest, DescribePcapRequest, DescribeDDoSAlarmThresholdResponse, DescribeBasicDeviceThresholdRequest, ModifyDDoSWaterKeyResponse, DescribleNewL7RulesResponse, ModifyResBindDDoSPolicyResponse, ModifyDDoSWaterKeyRequest, ModifyCCLevelResponse, DescribeBaradDataRequest, DescribeDDoSDefendStatusResponse, DescribeBizHttpStatusRequest, ModifyDDoSAIStatusResponse, DescribeDDoSNetEvInfoRequest, ModifyResourceRenewFlagRequest, DescribeCCEvListResponse, DescribeCCFrequencyRulesRequest, CreateL4HealthConfigRequest, DescribeBGPIPL7RuleMaxCntRequest, ModifyDDoSPolicyNameResponse, DescribeCCAlarmThresholdRequest, ModifyCCUrlAllowRequest, ModifyDDoSAlarmThresholdResponse, ModifyDDoSLevelResponse, DescribeIpBlockListResponse, DescribeCCIpAllowDenyResponse, DescribeDDoSIpLogResponse, DescribeResIpListResponse, ModifyCCIpAllowDenyRequest, CreateInstanceNameResponse, DescribeDDoSDefendStatusRequest, ModifyL4HealthRequest, ModifyCCHostProtectionResponse, CreateL4RulesResponse, DescribeInsurePacksRequest, DescribeDDoSNetCountRequest, ModifyCCSelfDefinePolicyRequest, CreateCCSelfDefinePolicyRequest, DescribleL4RulesRequest, DescribeL4HealthConfigRequest, CreateL7CCRuleResponse, ModifyCCFrequencyRulesStatusResponse, ModifyNetReturnSwitchRequest, CreateL7CCRuleRequest, CreateL7RulesRequest, DescribeBizHttpStatusResponse, DescribeNewL7RulesErrHealthResponse, DescribeDDoSNetEvListResponse, CreateL4RulesRequest, ModifyNewL4RuleRequest, DescribeL4RulesErrHealthRequest, CreateBasicDDoSAlarmThresholdResponse, CreateNetReturnResponse, DeleteL4RulesRequest, DescribeResourceListRequest, DeleteL4RulesResponse, DescribleNewL7RulesRequest, DescribeIPProductInfoRequest, CreateL7HealthConfigRequest, CreateL7RuleCertResponse, DescribeDDoSAttackIPRegionMapRequest, ModifyDDoSPolicyRequest, DescribeSourceIpSegmentRequest, DescribeSourceIpSegmentResponse, ModifyResBindDDoSPolicyRequest, CreateL7RulesUploadRequest, ModifyCCFrequencyRulesRequest, ModifyCCPolicySwitchResponse, ModifyDDoSThresholdResponse, CreateDDoSPolicyCaseRequest, ModifyCCIpAllowDenyResponse, ModifyCCAlarmThresholdRequest, DescribeCCFrequencyRulesResponse, DescribeBizTrendResponse, DescribeDDoSEvListRequest, DescribeBasicCCThresholdResponse, ModifyDDoSPolicyNameRequest, DescribeIpUnBlockListResponse, ModifyCCPolicySwitchRequest, ModifyCCFrequencyRulesResponse, ModifyL4KeepTimeRequest, ModifyCCHostProtectionRequest, DescribeIpBlockListRequest, DescribeDDoSNetCountResponse, CreateL7RulesResponse, ModifyDDoSSwitchRequest, CreateNetReturnRequest, ModifyDDoSAIStatusRequest, DescribeDDoSAttackSourceResponse, DescribeResourceListResponse, DescribeNewL4RulesResponse, ModifyCCThresholdRequest, ModifyDDoSDefendStatusResponse, CreateBasicDDoSAlarmThresholdRequest, DescribeDDoSEvInfoResponse, DescribleRegionCountRequest, ModifyCCSelfDefinePolicyResponse, DescribeDDoSIpLogRequest, DescribeDDoSAlarmThresholdRequest, DeleteNewL4RulesResponse, CreateNewL7RulesUploadRequest, DeleteNewL7RulesResponse, DeleteCCSelfDefinePolicyResponse, DescribeDDoSPolicyResponse, DeleteCCFrequencyRulesResponse, DeleteDDoSPolicyCaseResponse, CreateL4HealthConfigResponse, CreateNewL7RulesRequest, ModifyL7RulesRequest, ModifyElasticLimitResponse, CreateNewL7RulesUploadResponse, CreateUnblockIpResponse, DescribePackIndexRequest, DescribeNewL7RulesErrHealthRequest, ModifyL4RulesRequest, DescribeDDoSEvListResponse, DescribeDDoSPolicyRequest, DescribeL7HealthConfigResponse, CreateCCSelfDefinePolicyResponse, DescribeCCSelfDefinePolicyResponse, CreateBoundIPResponse, DescribeDDoSUsedStatisRequest, ModifyElasticLimitRequest, ModifyL4HealthResponse, DescribeTransmitStatisRequest, DescribeInsurePacksResponse, CreateUnblockIpRequest, ModifyResourceRenewFlagResponse, DescribeActionLogResponse, DescribeCCTrendResponse, ModifyDDoSPolicyCaseResponse, DescribeCCUrlAllowResponse, DescribeSecIndexRequest, ModifyCCFrequencyRulesStatusRequest, DescribeDDoSCountResponse, DescribeL4RulesErrHealthResponse, DeleteDDoSPolicyResponse, DescribeDDoSTrendRequest, ModifyDDoSPolicyResponse, DescribeDDoSNetIpLogRequest, DescribeDDoSNetEvInfoResponse, ModifyCCAlarmThresholdResponse, DescribeRuleSetsRequest, DescribeSchedulingDomainListRequest, DescribleL7RulesResponse, DescribeBizTrendRequest, CreateCCFrequencyRulesResponse, CreateNewL4RulesRequest, DescribeSchedulingDomainListResponse, DescribeDDoSNetTrendResponse, DescribeUnBlockStatisResponse, DescribleL7RulesRequest, DescribeCCIpAllowDenyRequest, DescribeSecIndexResponse, DescribeL4HealthConfigResponse, ModifyDDoSLevelRequest, DeleteCCFrequencyRulesRequest, DescribeDDoSNetIpLogResponse, CreateCCFrequencyRulesRequest, DeleteL7RulesResponse, CreateL7HealthConfigResponse, DescribeDDoSTrendResponse, CreateL7RulesUploadResponse, DescribleRegionCountResponse, ModifyDDoSThresholdRequest, DescribleL4RulesResponse, ModifyL4RulesResponse, DescribeCCTrendRequest, DeleteNewL7RulesRequest, CreateInstanceNameRequest, DeleteDDoSPolicyRequest } from "./dayu_models";
/**
 * dayu client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 添加或删除CC的IP黑白名单
     */
    ModifyCCIpAllowDeny(req: ModifyCCIpAllowDenyRequest, cb?: (error: string, rep: ModifyCCIpAllowDenyResponse) => void): Promise<ModifyCCIpAllowDenyResponse>;
    /**
     * 获取DDoS攻击占比分析
     */
    DescribeDDoSCount(req: DescribeDDoSCountRequest, cb?: (error: string, rep: DescribeDDoSCountResponse) => void): Promise<DescribeDDoSCountResponse>;
    /**
     * 删除L4转发规则
     */
    DeleteNewL4Rules(req: DeleteNewL4RulesRequest, cb?: (error: string, rep: DeleteNewL4RulesResponse) => void): Promise<DeleteNewL4RulesResponse>;
    /**
     * 获取资源的规则数
     */
    DescribeRuleSets(req: DescribeRuleSetsRequest, cb?: (error: string, rep: DescribeRuleSetsResponse) => void): Promise<DescribeRuleSetsResponse>;
    /**
     * 批量上传7层转发规则
     */
    CreateNewL7RulesUpload(req: CreateNewL7RulesUploadRequest, cb?: (error: string, rep: CreateNewL7RulesUploadResponse) => void): Promise<CreateNewL7RulesUploadResponse>;
    /**
     * 此接口是7层CC的访问频控自定义规则（IP+Host维度，不支持具体的URI），此接口已弃用，请调用新接口CreateCCFrequencyRules，新接口同时支持IP+Host维度以及具体的URI；
     */
    CreateL7CCRule(req: CreateL7CCRuleRequest, cb?: (error: string, rep: CreateL7CCRuleResponse) => void): Promise<CreateL7CCRuleResponse>;
    /**
     * 创建CC自定义策略
     */
    CreateCCSelfDefinePolicy(req: CreateCCSelfDefinePolicyRequest, cb?: (error: string, rep: CreateCCSelfDefinePolicyResponse) => void): Promise<CreateCCSelfDefinePolicyResponse>;
    /**
     * 添加7层转发规则
     */
    CreateNewL7Rules(req: CreateNewL7RulesRequest, cb?: (error: string, rep: CreateNewL7RulesResponse) => void): Promise<CreateNewL7RulesResponse>;
    /**
     * 修改CC自定义策略开关
     */
    ModifyCCPolicySwitch(req: ModifyCCPolicySwitchRequest, cb?: (error: string, rep: ModifyCCPolicySwitchResponse) => void): Promise<ModifyCCPolicySwitchResponse>;
    /**
     * 获取L7转发规则健康检查异常结果
     */
    DescribeNewL7RulesErrHealth(req: DescribeNewL7RulesErrHealthRequest, cb?: (error: string, rep: DescribeNewL7RulesErrHealthResponse) => void): Promise<DescribeNewL7RulesErrHealthResponse>;
    /**
     * 添加策略场景
     */
    CreateDDoSPolicyCase(req: CreateDDoSPolicyCaseRequest, cb?: (error: string, rep: CreateDDoSPolicyCaseResponse) => void): Promise<CreateDDoSPolicyCaseResponse>;
    /**
     * 获取高防IP专业版资源的DDoS攻击指标数据
     */
    DescribeDDoSNetTrend(req: DescribeDDoSNetTrendRequest, cb?: (error: string, rep: DescribeDDoSNetTrendResponse) => void): Promise<DescribeDDoSNetTrendResponse>;
    /**
     * 修改DDoS高级策略名称
     */
    ModifyDDoSPolicyName(req: ModifyDDoSPolicyNameRequest, cb?: (error: string, rep: ModifyDDoSPolicyNameResponse) => void): Promise<ModifyDDoSPolicyNameResponse>;
    /**
     * 修改L4转发规则健康检查参数，支持的子产品：高防IP、高防IP专业版
     */
    ModifyL4Health(req: ModifyL4HealthRequest, cb?: (error: string, rep: ModifyL4HealthResponse) => void): Promise<ModifyL4HealthResponse>;
    /**
     * 统计用户的高防资源的使用天数和DDoS攻击防护次数
     */
    DescribeDDoSUsedStatis(req: DescribeDDoSUsedStatisRequest, cb?: (error: string, rep: DescribeDDoSUsedStatisResponse) => void): Promise<DescribeDDoSUsedStatisResponse>;
    /**
     * 获取DDoS防护状态（临时关闭状态），支持产品：基础防护，独享包，共享包，高防IP，高防IP专业版；调用此接口是获取当前是否有设置临时关闭DDoS防护状态，如果有设置会返回临时关闭的时长等参数。
     */
    DescribeDDoSDefendStatus(req: DescribeDDoSDefendStatusRequest, cb?: (error: string, rep: DescribeDDoSDefendStatusResponse) => void): Promise<DescribeDDoSDefendStatusResponse>;
    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     */
    DescribeCCAlarmThreshold(req: DescribeCCAlarmThresholdRequest, cb?: (error: string, rep: DescribeCCAlarmThresholdResponse) => void): Promise<DescribeCCAlarmThresholdResponse>;
    /**
     * 下载攻击事件的pcap包
     */
    DescribePcap(req: DescribePcapRequest, cb?: (error: string, rep: DescribePcapResponse) => void): Promise<DescribePcapResponse>;
    /**
     * 获取L4转发规则
     */
    DescribeNewL4Rules(req: DescribeNewL4RulesRequest, cb?: (error: string, rep: DescribeNewL4RulesResponse) => void): Promise<DescribeNewL4RulesResponse>;
    /**
     * 修改弹性防护阈值
     */
    ModifyElasticLimit(req: ModifyElasticLimitRequest, cb?: (error: string, rep: ModifyElasticLimitResponse) => void): Promise<ModifyElasticLimitResponse>;
    /**
     * 获取高防IP专业版资源的DDoSIP攻击日志
     */
    DescribeDDoSNetIpLog(req: DescribeDDoSNetIpLogRequest, cb?: (error: string, rep: DescribeDDoSNetIpLogResponse) => void): Promise<DescribeDDoSNetIpLogResponse>;
    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     */
    ModifyCCAlarmThreshold(req: ModifyCCAlarmThresholdRequest, cb?: (error: string, rep: ModifyCCAlarmThresholdResponse) => void): Promise<ModifyCCAlarmThresholdResponse>;
    /**
     * 获取DDoS攻击事件列表
     */
    DescribeDDoSEvList(req: DescribeDDoSEvListRequest, cb?: (error: string, rep: DescribeDDoSEvListResponse) => void): Promise<DescribeDDoSEvListResponse>;
    /**
     * 获取IP封堵列表
     */
    DescribeIpBlockList(req?: DescribeIpBlockListRequest, cb?: (error: string, rep: DescribeIpBlockListResponse) => void): Promise<DescribeIpBlockListResponse>;
    /**
     * 导出四层健康检查配置
     */
    DescribeL4HealthConfig(req: DescribeL4HealthConfigRequest, cb?: (error: string, rep: DescribeL4HealthConfigResponse) => void): Promise<DescribeL4HealthConfigResponse>;
    /**
     * 获取本月安全统计
     */
    DescribeSecIndex(req?: DescribeSecIndexRequest, cb?: (error: string, rep: DescribeSecIndexResponse) => void): Promise<DescribeSecIndexResponse>;
    /**
     * 获取调度域名列表
     */
    DescribeSchedulingDomainList(req: DescribeSchedulingDomainListRequest, cb?: (error: string, rep: DescribeSchedulingDomainListResponse) => void): Promise<DescribeSchedulingDomainListResponse>;
    /**
     * 获取CC防护的访问频率控制规则
     */
    DescribeCCFrequencyRules(req: DescribeCCFrequencyRulesRequest, cb?: (error: string, rep: DescribeCCFrequencyRulesResponse) => void): Promise<DescribeCCFrequencyRulesResponse>;
    /**
     * 删除策略场景
     */
    DeleteDDoSPolicyCase(req: DeleteDDoSPolicyCaseRequest, cb?: (error: string, rep: DeleteDDoSPolicyCaseResponse) => void): Promise<DeleteDDoSPolicyCaseResponse>;
    /**
     * 删除七层转发规则
     */
    DeleteL7Rules(req: DeleteL7RulesRequest, cb?: (error: string, rep: DeleteL7RulesResponse) => void): Promise<DeleteL7RulesResponse>;
    /**
     * 添加L4转发规则
     */
    CreateNewL4Rules(req: CreateNewL4RulesRequest, cb?: (error: string, rep: CreateNewL4RulesResponse) => void): Promise<CreateNewL4RulesResponse>;
    /**
     * 添加L4转发规则
     */
    CreateL4Rules(req: CreateL4RulesRequest, cb?: (error: string, rep: CreateL4RulesResponse) => void): Promise<CreateL4RulesResponse>;
    /**
     * 为大禹子产品提供业务转发指标数据的接口
     */
    DescribeBaradData(req: DescribeBaradDataRequest, cb?: (error: string, rep: DescribeBaradDataResponse) => void): Promise<DescribeBaradDataResponse>;
    /**
     * 修改CC防护的访问频率控制规则
     */
    ModifyCCFrequencyRules(req: ModifyCCFrequencyRulesRequest, cb?: (error: string, rep: ModifyCCFrequencyRulesResponse) => void): Promise<ModifyCCFrequencyRulesResponse>;
    /**
     * 获取七层转发规则
     */
    DescribleL7Rules(req: DescribleL7RulesRequest, cb?: (error: string, rep: DescribleL7RulesResponse) => void): Promise<DescribleL7RulesResponse>;
    /**
     * 添加DDoS高级策略
     */
    CreateDDoSPolicy(req: CreateDDoSPolicyRequest, cb?: (error: string, rep: CreateDDoSPolicyResponse) => void): Promise<CreateDDoSPolicyResponse>;
    /**
     * 资源实例绑定DDoS高级策略
     */
    ModifyResBindDDoSPolicy(req: ModifyResBindDDoSPolicyRequest, cb?: (error: string, rep: ModifyResBindDDoSPolicyResponse) => void): Promise<ModifyResBindDDoSPolicyResponse>;
    /**
     * 在客户收攻击或者被封堵时，切回到源站，并设置回切的时长
     */
    ModifyNetReturnSwitch(req: ModifyNetReturnSwitchRequest, cb?: (error: string, rep: ModifyNetReturnSwitchResponse) => void): Promise<ModifyNetReturnSwitchResponse>;
    /**
     * 获取L4转发规则健康检查异常结果
     */
    DescribeNewL4RulesErrHealth(req: DescribeNewL4RulesErrHealthRequest, cb?: (error: string, rep: DescribeNewL4RulesErrHealthResponse) => void): Promise<DescribeNewL4RulesErrHealthResponse>;
    /**
     * 获取回源IP段，支持的产品：高防IP，高防IP专业版；
     */
    DescribeSourceIpSegment(req: DescribeSourceIpSegmentRequest, cb?: (error: string, rep: DescribeSourceIpSegmentResponse) => void): Promise<DescribeSourceIpSegmentResponse>;
    /**
     * 添加或删除CC的URL白名单
     */
    ModifyCCUrlAllow(req: ModifyCCUrlAllowRequest, cb?: (error: string, rep: ModifyCCUrlAllowResponse) => void): Promise<ModifyCCUrlAllowResponse>;
    /**
     * 获取基础防护黑洞阈值
     */
    DescribeBasicDeviceThreshold(req: DescribeBasicDeviceThresholdRequest, cb?: (error: string, rep: DescribeBasicDeviceThresholdResponse) => void): Promise<DescribeBasicDeviceThresholdResponse>;
    /**
     * IP解封操作
     */
    CreateUnblockIp(req: CreateUnblockIpRequest, cb?: (error: string, rep: CreateUnblockIpResponse) => void): Promise<CreateUnblockIpResponse>;
    /**
     * 删除DDoS高级策略
     */
    DeleteDDoSPolicy(req: DeleteDDoSPolicyRequest, cb?: (error: string, rep: DeleteDDoSPolicyResponse) => void): Promise<DeleteDDoSPolicyResponse>;
    /**
     * 修改4层转发规则
     */
    ModifyNewL4Rule(req: ModifyNewL4RuleRequest, cb?: (error: string, rep: ModifyNewL4RuleResponse) => void): Promise<ModifyNewL4RuleResponse>;
    /**
     * 获取资源列表
     */
    DescribeResourceList(req: DescribeResourceListRequest, cb?: (error: string, rep: DescribeResourceListResponse) => void): Promise<DescribeResourceListResponse>;
    /**
     * 获取业务流量状态码统计
     */
    DescribeBizHttpStatus(req: DescribeBizHttpStatusRequest, cb?: (error: string, rep: DescribeBizHttpStatusResponse) => void): Promise<DescribeBizHttpStatusResponse>;
    /**
     * 删除CC自定义策略
     */
    DeleteCCSelfDefinePolicy(req: DeleteCCSelfDefinePolicyRequest, cb?: (error: string, rep: DeleteCCSelfDefinePolicyResponse) => void): Promise<DeleteCCSelfDefinePolicyResponse>;
    /**
     * 获取策略场景
     */
    DescribePolicyCase(req: DescribePolicyCaseRequest, cb?: (error: string, rep: DescribePolicyCaseResponse) => void): Promise<DescribePolicyCaseResponse>;
    /**
     * 获取操作日志
     */
    DescribeActionLog(req: DescribeActionLogRequest, cb?: (error: string, rep: DescribeActionLogResponse) => void): Promise<DescribeActionLogResponse>;
    /**
     * 修改L4转发规则
     */
    ModifyL4Rules(req: ModifyL4RulesRequest, cb?: (error: string, rep: ModifyL4RulesResponse) => void): Promise<ModifyL4RulesResponse>;
    /**
     * 获取DDoSIP攻击日志
     */
    DescribeDDoSIpLog(req: DescribeDDoSIpLogRequest, cb?: (error: string, rep: DescribeDDoSIpLogResponse) => void): Promise<DescribeDDoSIpLogResponse>;
    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置DDoS攻击的告警通知阈值
     */
    DescribeDDoSAlarmThreshold(req: DescribeDDoSAlarmThresholdRequest, cb?: (error: string, rep: DescribeDDoSAlarmThresholdResponse) => void): Promise<DescribeDDoSAlarmThresholdResponse>;
    /**
     * 获取产品总览统计，支持高防包、高防IP、高防IP专业版；
     */
    DescribePackIndex(req: DescribePackIndexRequest, cb?: (error: string, rep: DescribePackIndexResponse) => void): Promise<DescribePackIndexResponse>;
    /**
     * 获取7层规则
     */
    DescribleNewL7Rules(req: DescribleNewL7RulesRequest, cb?: (error: string, rep: DescribleNewL7RulesResponse) => void): Promise<DescribleNewL7RulesResponse>;
    /**
     * 设置基础防护的DDoS告警阈值，只支持基础防护产品
     */
    CreateBasicDDoSAlarmThreshold(req: CreateBasicDDoSAlarmThresholdRequest, cb?: (error: string, rep: CreateBasicDDoSAlarmThresholdResponse) => void): Promise<CreateBasicDDoSAlarmThresholdResponse>;
    /**
     * 修改DDoS清洗阈值
     */
    ModifyDDoSThreshold(req: ModifyDDoSThresholdRequest, cb?: (error: string, rep: ModifyDDoSThresholdResponse) => void): Promise<ModifyDDoSThresholdResponse>;
    /**
     * 配置7层转发规则的证书
     */
    CreateL7RuleCert(req: CreateL7RuleCertRequest, cb?: (error: string, rep: CreateL7RuleCertResponse) => void): Promise<CreateL7RuleCertResponse>;
    /**
     * 读取或修改DDoS的AI防护状态
     */
    ModifyDDoSAIStatus(req: ModifyDDoSAIStatusRequest, cb?: (error: string, rep: ModifyDDoSAIStatusResponse) => void): Promise<ModifyDDoSAIStatusResponse>;
    /**
     * 获取CC的IP黑白名单
     */
    DescribeCCIpAllowDeny(req: DescribeCCIpAllowDenyRequest, cb?: (error: string, rep: DescribeCCIpAllowDenyResponse) => void): Promise<DescribeCCIpAllowDenyResponse>;
    /**
     * 上传四层健康检查配置
     */
    CreateL4HealthConfig(req: CreateL4HealthConfigRequest, cb?: (error: string, rep: CreateL4HealthConfigResponse) => void): Promise<CreateL4HealthConfigResponse>;
    /**
     * 获取高防IP专业版资源的DDoS攻击占比分析
     */
    DescribeDDoSNetCount(req: DescribeDDoSNetCountRequest, cb?: (error: string, rep: DescribeDDoSNetCountResponse) => void): Promise<DescribeDDoSNetCountResponse>;
    /**
     * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     */
    CreateBoundIP(req: CreateBoundIPRequest, cb?: (error: string, rep: CreateBoundIPResponse) => void): Promise<CreateBoundIPResponse>;
    /**
     * 修改DDoS高级策略
     */
    ModifyDDoSPolicy(req: ModifyDDoSPolicyRequest, cb?: (error: string, rep: ModifyDDoSPolicyResponse) => void): Promise<ModifyDDoSPolicyResponse>;
    /**
     * 修改策略场景
     */
    ModifyDDoSPolicyCase(req: ModifyDDoSPolicyCaseRequest, cb?: (error: string, rep: ModifyDDoSPolicyCaseResponse) => void): Promise<ModifyDDoSPolicyCaseResponse>;
    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾等产品设置DDoS攻击的告警通知阈值
     */
    ModifyDDoSAlarmThreshold(req: ModifyDDoSAlarmThresholdRequest, cb?: (error: string, rep: ModifyDDoSAlarmThresholdResponse) => void): Promise<ModifyDDoSAlarmThresholdResponse>;
    /**
     * 获取高防IP专业版资源的DDoS攻击事件详情
     */
    DescribeDDoSNetEvInfo(req: DescribeDDoSNetEvInfoRequest, cb?: (error: string, rep: DescribeDDoSNetEvInfoResponse) => void): Promise<DescribeDDoSNetEvInfoResponse>;
    /**
     * 删除CC防护的访问频率控制规则
     */
    DeleteCCFrequencyRules(req: DeleteCCFrequencyRulesRequest, cb?: (error: string, rep: DeleteCCFrequencyRulesResponse) => void): Promise<DeleteCCFrequencyRulesResponse>;
    /**
     * 修改L4转发规则的会话保持，支持的子产品：高防IP、高防IP专业版
     */
    ModifyL4KeepTime(req: ModifyL4KeepTimeRequest, cb?: (error: string, rep: ModifyL4KeepTimeResponse) => void): Promise<ModifyL4KeepTimeResponse>;
    /**
     * 获取L4转发规则健康检查异常结果
     */
    DescribeL4RulesErrHealth(req: DescribeL4RulesErrHealthRequest, cb?: (error: string, rep: DescribeL4RulesErrHealthResponse) => void): Promise<DescribeL4RulesErrHealthResponse>;
    /**
     * 批量上传7层转发规则
     */
    CreateL7RulesUpload(req: CreateL7RulesUploadRequest, cb?: (error: string, rep: CreateL7RulesUploadResponse) => void): Promise<CreateL7RulesUploadResponse>;
    /**
     * 获取DDoS高级策略
     */
    DescribeDDoSPolicy(req: DescribeDDoSPolicyRequest, cb?: (error: string, rep: DescribeDDoSPolicyResponse) => void): Promise<DescribeDDoSPolicyResponse>;
    /**
     * 获取业务转发统计数据，支持转发流量和转发包速率
     */
    DescribeTransmitStatis(req: DescribeTransmitStatisRequest, cb?: (error: string, rep: DescribeTransmitStatisResponse) => void): Promise<DescribeTransmitStatisResponse>;
    /**
     * 修改CC防护等级
     */
    ModifyCCLevel(req: ModifyCCLevelRequest, cb?: (error: string, rep: ModifyCCLevelResponse) => void): Promise<ModifyCCLevelResponse>;
    /**
     * 开启或关闭DDoS防护状态，调用此接口允许临时关闭DDoS防护一段时间，等时间到了会自动开启DDoS防护；
     */
    ModifyDDoSDefendStatus(req: ModifyDDoSDefendStatusRequest, cb?: (error: string, rep: ModifyDDoSDefendStatusResponse) => void): Promise<ModifyDDoSDefendStatusResponse>;
    /**
     * 获取黑洞解封次数
     */
    DescribeUnBlockStatis(req?: DescribeUnBlockStatisRequest, cb?: (error: string, rep: DescribeUnBlockStatisResponse) => void): Promise<DescribeUnBlockStatisResponse>;
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     */
    DescribeDDoSTrend(req: DescribeDDoSTrendRequest, cb?: (error: string, rep: DescribeDDoSTrendResponse) => void): Promise<DescribeDDoSTrendResponse>;
    /**
     * 高防IP专业版一键切回源站
     */
    CreateNetReturn(req: CreateNetReturnRequest, cb?: (error: string, rep: CreateNetReturnResponse) => void): Promise<CreateNetReturnResponse>;
    /**
     * 开启或关闭DDoS防护，只支持基础防护产品；
     */
    ModifyDDoSSwitch(req: ModifyDDoSSwitchRequest, cb?: (error: string, rep: ModifyDDoSSwitchResponse) => void): Promise<ModifyDDoSSwitchResponse>;
    /**
     * 读取或修改DDoS的防护等级
     */
    ModifyDDoSLevel(req: ModifyDDoSLevelRequest, cb?: (error: string, rep: ModifyDDoSLevelResponse) => void): Promise<ModifyDDoSLevelResponse>;
    /**
     * 获取DDoS攻击源列表
     */
    DescribeDDoSAttackSource(req: DescribeDDoSAttackSourceRequest, cb?: (error: string, rep: DescribeDDoSAttackSourceResponse) => void): Promise<DescribeDDoSAttackSourceResponse>;
    /**
     * 删除L7转发规则
     */
    DeleteNewL7Rules(req: DeleteNewL7RulesRequest, cb?: (error: string, rep: DeleteNewL7RulesResponse) => void): Promise<DeleteNewL7RulesResponse>;
    /**
     * 获取CC攻击事件列表
     */
    DescribeCCEvList(req: DescribeCCEvListRequest, cb?: (error: string, rep: DescribeCCEvListResponse) => void): Promise<DescribeCCEvListResponse>;
    /**
     * 支持水印密钥的添加，删除，开启，关闭
     */
    ModifyDDoSWaterKey(req: ModifyDDoSWaterKeyRequest, cb?: (error: string, rep: ModifyDDoSWaterKeyResponse) => void): Promise<ModifyDDoSWaterKeyResponse>;
    /**
     * 获取保险包套餐列表
     */
    DescribeInsurePacks(req: DescribeInsurePacksRequest, cb?: (error: string, rep: DescribeInsurePacksResponse) => void): Promise<DescribeInsurePacksResponse>;
    /**
     * 删除四层转发规则
     */
    DeleteL4Rules(req: DeleteL4RulesRequest, cb?: (error: string, rep: DeleteL4RulesResponse) => void): Promise<DeleteL4RulesResponse>;
    /**
     * 获取高防IP专业版资源的DDoS攻击事件列表
     */
    DescribeDDoSNetEvList(req: DescribeDDoSNetEvListRequest, cb?: (error: string, rep: DescribeDDoSNetEvListResponse) => void): Promise<DescribeDDoSNetEvListResponse>;
    /**
     * 开启或关闭CC域名防护
     */
    ModifyCCHostProtection(req: ModifyCCHostProtectionRequest, cb?: (error: string, rep: ModifyCCHostProtectionResponse) => void): Promise<ModifyCCHostProtectionResponse>;
    /**
     * 获取业务流量曲线
     */
    DescribeBizTrend(req: DescribeBizTrendRequest, cb?: (error: string, rep: DescribeBizTrendResponse) => void): Promise<DescribeBizTrendResponse>;
    /**
     * 获取地域的资源实例数
     */
    DescribleRegionCount(req: DescribleRegionCountRequest, cb?: (error: string, rep: DescribleRegionCountResponse) => void): Promise<DescribleRegionCountResponse>;
    /**
     * 添加7层(网站)转发规则
     */
    CreateL7Rules(req: CreateL7RulesRequest, cb?: (error: string, rep: CreateL7RulesResponse) => void): Promise<CreateL7RulesResponse>;
    /**
     * 获取IP解封记录
     */
    DescribeIpUnBlockList(req: DescribeIpUnBlockListRequest, cb?: (error: string, rep: DescribeIpUnBlockListResponse) => void): Promise<DescribeIpUnBlockListResponse>;
    /**
     * 获取独享包或共享包IP对应的云资产信息，只支持独享包和共享包的IP
     */
    DescribeIPProductInfo(req: DescribeIPProductInfoRequest, cb?: (error: string, rep: DescribeIPProductInfoResponse) => void): Promise<DescribeIPProductInfoResponse>;
    /**
     * 获取CC自定义策略
     */
    DescribeCCSelfDefinePolicy(req: DescribeCCSelfDefinePolicyRequest, cb?: (error: string, rep: DescribeCCSelfDefinePolicyResponse) => void): Promise<DescribeCCSelfDefinePolicyResponse>;
    /**
     * 开启或关闭CC防护的访问频率控制规则
     */
    ModifyCCFrequencyRulesStatus(req: ModifyCCFrequencyRulesStatusRequest, cb?: (error: string, rep: ModifyCCFrequencyRulesStatusResponse) => void): Promise<ModifyCCFrequencyRulesStatusResponse>;
    /**
     * 修改CC的防护阈值
     */
    ModifyCCThreshold(req: ModifyCCThresholdRequest, cb?: (error: string, rep: ModifyCCThresholdResponse) => void): Promise<ModifyCCThresholdResponse>;
    /**
     * 获取四层转发规则
     */
    DescribleL4Rules(req: DescribleL4RulesRequest, cb?: (error: string, rep: DescribleL4RulesResponse) => void): Promise<DescribleL4RulesResponse>;
    /**
     * 修改7层转发规则
     */
    ModifyNewDomainRules(req: ModifyNewDomainRulesRequest, cb?: (error: string, rep: ModifyNewDomainRulesResponse) => void): Promise<ModifyNewDomainRulesResponse>;
    /**
     * 获取CC的Url白名单
     */
    DescribeCCUrlAllow(req: DescribeCCUrlAllowRequest, cb?: (error: string, rep: DescribeCCUrlAllowResponse) => void): Promise<DescribeCCUrlAllowResponse>;
    /**
     * 导出七层健康检查配置
     */
    DescribeL7HealthConfig(req: DescribeL7HealthConfigRequest, cb?: (error: string, rep: DescribeL7HealthConfigResponse) => void): Promise<DescribeL7HealthConfigResponse>;
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)
     */
    DescribeCCTrend(req: DescribeCCTrendRequest, cb?: (error: string, rep: DescribeCCTrendResponse) => void): Promise<DescribeCCTrendResponse>;
    /**
     * 添加CC防护的访问频率控制规则
     */
    CreateCCFrequencyRules(req: CreateCCFrequencyRulesRequest, cb?: (error: string, rep: CreateCCFrequencyRulesResponse) => void): Promise<CreateCCFrequencyRulesResponse>;
    /**
     * 修改L7转发规则
     */
    ModifyL7Rules(req: ModifyL7RulesRequest, cb?: (error: string, rep: ModifyL7RulesResponse) => void): Promise<ModifyL7RulesResponse>;
    /**
     * 获取基础防护CC防护阈值
     */
    DescribeBasicCCThreshold(req: DescribeBasicCCThresholdRequest, cb?: (error: string, rep: DescribeBasicCCThresholdResponse) => void): Promise<DescribeBasicCCThresholdResponse>;
    /**
     * 上传七层健康检查配置
     */
    CreateL7HealthConfig(req: CreateL7HealthConfigRequest, cb?: (error: string, rep: CreateL7HealthConfigResponse) => void): Promise<CreateL7HealthConfigResponse>;
    /**
     * 获取资源的IP列表
     */
    DescribeResIpList(req: DescribeResIpListRequest, cb?: (error: string, rep: DescribeResIpListResponse) => void): Promise<DescribeResIpListResponse>;
    /**
     * 资源实例重命名，支持独享包、共享包、高防IP、高防IP专业版；
     */
    CreateInstanceName(req: CreateInstanceNameRequest, cb?: (error: string, rep: CreateInstanceNameResponse) => void): Promise<CreateInstanceNameResponse>;
    /**
     * 获取高防IP可添加的最多7层规则数量

     */
    DescribeBGPIPL7RuleMaxCnt(req: DescribeBGPIPL7RuleMaxCntRequest, cb?: (error: string, rep: DescribeBGPIPL7RuleMaxCntResponse) => void): Promise<DescribeBGPIPL7RuleMaxCntResponse>;
    /**
     * 修改资源自动续费标记
     */
    ModifyResourceRenewFlag(req: ModifyResourceRenewFlagRequest, cb?: (error: string, rep: ModifyResourceRenewFlagResponse) => void): Promise<ModifyResourceRenewFlagResponse>;
    /**
     * 修改CC自定义策略
     */
    ModifyCCSelfDefinePolicy(req: ModifyCCSelfDefinePolicyRequest, cb?: (error: string, rep: ModifyCCSelfDefinePolicyResponse) => void): Promise<ModifyCCSelfDefinePolicyResponse>;
    /**
     * 获取DDoS攻击事件详情
     */
    DescribeDDoSEvInfo(req: DescribeDDoSEvInfoRequest, cb?: (error: string, rep: DescribeDDoSEvInfoResponse) => void): Promise<DescribeDDoSEvInfoResponse>;
    /**
     * 获取DDoS攻击源IP地域分布图，支持全球攻击分布和国内省份攻击分布；
     */
    DescribeDDoSAttackIPRegionMap(req: DescribeDDoSAttackIPRegionMapRequest, cb?: (error: string, rep: DescribeDDoSAttackIPRegionMapResponse) => void): Promise<DescribeDDoSAttackIPRegionMapResponse>;
}
