/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifyDDoSPolicyCaseRequest = models.ModifyDDoSPolicyCaseRequest;
const DescribeIpUnBlockListRequest = models.DescribeIpUnBlockListRequest;
const DeleteDDoSPolicyCaseRequest = models.DeleteDDoSPolicyCaseRequest;
const CreateDDoSPolicyResponse = models.CreateDDoSPolicyResponse;
const DeleteL7RulesRequest = models.DeleteL7RulesRequest;
const CreateBoundIPRequest = models.CreateBoundIPRequest;
const DescribeNewL4RulesErrHealthResponse = models.DescribeNewL4RulesErrHealthResponse;
const DescribeCCEvListRequest = models.DescribeCCEvListRequest;
const DescribeTransmitStatisResponse = models.DescribeTransmitStatisResponse;
const DDosPolicy = models.DDosPolicy;
const ProtocolPort = models.ProtocolPort;
const DescribeDDoSNetTrendRequest = models.DescribeDDoSNetTrendRequest;
const DescribePolicyCaseRequest = models.DescribePolicyCaseRequest;
const DescribeUnBlockStatisRequest = models.DescribeUnBlockStatisRequest;
const ModifyCCUrlAllowResponse = models.ModifyCCUrlAllowResponse;
const DescribeBasicDeviceThresholdResponse = models.DescribeBasicDeviceThresholdResponse;
const DescribeCCAlarmThresholdResponse = models.DescribeCCAlarmThresholdResponse;
const DescribeDDoSNetEvListRequest = models.DescribeDDoSNetEvListRequest;
const DeleteNewL4RulesRequest = models.DeleteNewL4RulesRequest;
const ModifyNewDomainRulesRequest = models.ModifyNewDomainRulesRequest;
const DDoSAlarmThreshold = models.DDoSAlarmThreshold;
const DescribePolicyCaseResponse = models.DescribePolicyCaseResponse;
const DescribeResIpListRequest = models.DescribeResIpListRequest;
const DescribeNewL4RulesErrHealthRequest = models.DescribeNewL4RulesErrHealthRequest;
const ModifyCCLevelRequest = models.ModifyCCLevelRequest;
const DeleteCCSelfDefinePolicyRequest = models.DeleteCCSelfDefinePolicyRequest;
const DescribeCCUrlAllowRequest = models.DescribeCCUrlAllowRequest;
const KeyValue = models.KeyValue;
const IpBlackWhite = models.IpBlackWhite;
const ModifyDDoSAlarmThresholdRequest = models.ModifyDDoSAlarmThresholdRequest;
const DescribeNewL4RulesRequest = models.DescribeNewL4RulesRequest;
const CreateDDoSPolicyRequest = models.CreateDDoSPolicyRequest;
const ModifyCCThresholdResponse = models.ModifyCCThresholdResponse;
const ModifyNetReturnSwitchResponse = models.ModifyNetReturnSwitchResponse;
const DescribeActionLogRequest = models.DescribeActionLogRequest;
const CreateL7RuleCertRequest = models.CreateL7RuleCertRequest;
const DescribeBGPIPL7RuleMaxCntResponse = models.DescribeBGPIPL7RuleMaxCntResponse;
const DescribePcapResponse = models.DescribePcapResponse;
const DescribePackIndexResponse = models.DescribePackIndexResponse;
const DescribeDDoSAttackSourceRequest = models.DescribeDDoSAttackSourceRequest;
const DescribeDDoSCountRequest = models.DescribeDDoSCountRequest;
const RegionInstanceCount = models.RegionInstanceCount;
const WaterPrintKey = models.WaterPrintKey;
const CreateNewL7RulesResponse = models.CreateNewL7RulesResponse;
const ModifyNewL4RuleResponse = models.ModifyNewL4RuleResponse;
const ModifyNewDomainRulesResponse = models.ModifyNewDomainRulesResponse;
const CreateNewL4RulesResponse = models.CreateNewL4RulesResponse;
const DescribeDDoSUsedStatisResponse = models.DescribeDDoSUsedStatisResponse;
const DescribeBasicCCThresholdRequest = models.DescribeBasicCCThresholdRequest;
const CreateDDoSPolicyCaseResponse = models.CreateDDoSPolicyCaseResponse;
const DescribeIPProductInfoResponse = models.DescribeIPProductInfoResponse;
const ModifyDDoSSwitchResponse = models.ModifyDDoSSwitchResponse;
const IpBlockData = models.IpBlockData;
const DescribeCCSelfDefinePolicyRequest = models.DescribeCCSelfDefinePolicyRequest;
const ModifyDDoSDefendStatusRequest = models.ModifyDDoSDefendStatusRequest;
const DescribeRuleSetsResponse = models.DescribeRuleSetsResponse;
const DescribeBaradDataResponse = models.DescribeBaradDataResponse;
const DescribeDDoSEvInfoRequest = models.DescribeDDoSEvInfoRequest;
const DescribeDDoSAttackIPRegionMapResponse = models.DescribeDDoSAttackIPRegionMapResponse;
const ModifyL4KeepTimeResponse = models.ModifyL4KeepTimeResponse;
const ModifyL7RulesResponse = models.ModifyL7RulesResponse;
const DescribeL7HealthConfigRequest = models.DescribeL7HealthConfigRequest;
const BoundIpInfo = models.BoundIpInfo;
const DescribePcapRequest = models.DescribePcapRequest;
const DescribeDDoSAlarmThresholdResponse = models.DescribeDDoSAlarmThresholdResponse;
const KeyValueRecord = models.KeyValueRecord;
const DescribeBasicDeviceThresholdRequest = models.DescribeBasicDeviceThresholdRequest;
const DescribleNewL7RulesResponse = models.DescribleNewL7RulesResponse;
const ModifyResBindDDoSPolicyResponse = models.ModifyResBindDDoSPolicyResponse;
const ModifyDDoSWaterKeyRequest = models.ModifyDDoSWaterKeyRequest;
const ModifyCCLevelResponse = models.ModifyCCLevelResponse;
const DescribeBaradDataRequest = models.DescribeBaradDataRequest;
const DescribeDDoSDefendStatusResponse = models.DescribeDDoSDefendStatusResponse;
const DescribeCCSelfDefinePolicyResponse = models.DescribeCCSelfDefinePolicyResponse;
const CCPolicy = models.CCPolicy;
const ModifyDDoSAIStatusResponse = models.ModifyDDoSAIStatusResponse;
const DescribeDDoSNetEvInfoRequest = models.DescribeDDoSNetEvInfoRequest;
const ModifyResourceRenewFlagRequest = models.ModifyResourceRenewFlagRequest;
const DescribeCCEvListResponse = models.DescribeCCEvListResponse;
const DescribeCCFrequencyRulesRequest = models.DescribeCCFrequencyRulesRequest;
const CreateL4HealthConfigRequest = models.CreateL4HealthConfigRequest;
const DescribeBGPIPL7RuleMaxCntRequest = models.DescribeBGPIPL7RuleMaxCntRequest;
const ModifyDDoSPolicyNameResponse = models.ModifyDDoSPolicyNameResponse;
const DescribeCCAlarmThresholdRequest = models.DescribeCCAlarmThresholdRequest;
const ModifyCCUrlAllowRequest = models.ModifyCCUrlAllowRequest;
const ModifyDDoSAlarmThresholdResponse = models.ModifyDDoSAlarmThresholdResponse;
const ModifyDDoSLevelResponse = models.ModifyDDoSLevelResponse;
const DescribeIpBlockListResponse = models.DescribeIpBlockListResponse;
const DescribeCCIpAllowDenyResponse = models.DescribeCCIpAllowDenyResponse;
const DescribeDDoSIpLogResponse = models.DescribeDDoSIpLogResponse;
const CCRule = models.CCRule;
const DescribeResIpListResponse = models.DescribeResIpListResponse;
const ModifyCCIpAllowDenyRequest = models.ModifyCCIpAllowDenyRequest;
const CreateInstanceNameResponse = models.CreateInstanceNameResponse;
const DescribeDDoSDefendStatusRequest = models.DescribeDDoSDefendStatusRequest;
const ModifyDDoSWaterKeyResponse = models.ModifyDDoSWaterKeyResponse;
const ModifyL4HealthRequest = models.ModifyL4HealthRequest;
const ModifyCCHostProtectionResponse = models.ModifyCCHostProtectionResponse;
const CreateL4RulesResponse = models.CreateL4RulesResponse;
const DescribeInsurePacksRequest = models.DescribeInsurePacksRequest;
const DescribeDDoSNetCountRequest = models.DescribeDDoSNetCountRequest;
const Paging = models.Paging;
const ModifyCCSelfDefinePolicyRequest = models.ModifyCCSelfDefinePolicyRequest;
const L4HealthConfig = models.L4HealthConfig;
const CreateCCSelfDefinePolicyRequest = models.CreateCCSelfDefinePolicyRequest;
const SuccessCode = models.SuccessCode;
const DescribleL4RulesRequest = models.DescribleL4RulesRequest;
const L4RuleEntry = models.L4RuleEntry;
const DescribeL4HealthConfigRequest = models.DescribeL4HealthConfigRequest;
const CreateL7CCRuleResponse = models.CreateL7CCRuleResponse;
const ModifyNetReturnSwitchRequest = models.ModifyNetReturnSwitchRequest;
const CreateL7CCRuleRequest = models.CreateL7CCRuleRequest;
const CreateL7RulesRequest = models.CreateL7RulesRequest;
const CreateL4RulesRequest = models.CreateL4RulesRequest;
const DescribeNewL7RulesErrHealthResponse = models.DescribeNewL7RulesErrHealthResponse;
const DescribeDDoSNetEvListResponse = models.DescribeDDoSNetEvListResponse;
const ModifyCCFrequencyRulesStatusResponse = models.ModifyCCFrequencyRulesStatusResponse;
const ModifyNewL4RuleRequest = models.ModifyNewL4RuleRequest;
const DescribeL4RulesErrHealthRequest = models.DescribeL4RulesErrHealthRequest;
const L4RuleSource = models.L4RuleSource;
const CreateBasicDDoSAlarmThresholdResponse = models.CreateBasicDDoSAlarmThresholdResponse;
const CreateNetReturnResponse = models.CreateNetReturnResponse;
const DeleteL4RulesRequest = models.DeleteL4RulesRequest;
const DescribeResourceListRequest = models.DescribeResourceListRequest;
const DeleteL4RulesResponse = models.DeleteL4RulesResponse;
const DescribleNewL7RulesRequest = models.DescribleNewL7RulesRequest;
const DescribeIPProductInfoRequest = models.DescribeIPProductInfoRequest;
const CreateL7HealthConfigRequest = models.CreateL7HealthConfigRequest;
const CreateL7RuleCertResponse = models.CreateL7RuleCertResponse;
const DescribeDDoSAttackIPRegionMapRequest = models.DescribeDDoSAttackIPRegionMapRequest;
const ModifyDDoSPolicyRequest = models.ModifyDDoSPolicyRequest;
const DescribeSourceIpSegmentRequest = models.DescribeSourceIpSegmentRequest;
const DescribeSourceIpSegmentResponse = models.DescribeSourceIpSegmentResponse;
const ModifyResBindDDoSPolicyRequest = models.ModifyResBindDDoSPolicyRequest;
const L7RuleHealth = models.L7RuleHealth;
const CreateL7RulesUploadRequest = models.CreateL7RulesUploadRequest;
const L4RuleHealth = models.L4RuleHealth;
const ModifyCCFrequencyRulesRequest = models.ModifyCCFrequencyRulesRequest;
const ModifyCCPolicySwitchResponse = models.ModifyCCPolicySwitchResponse;
const ModifyDDoSThresholdResponse = models.ModifyDDoSThresholdResponse;
const CreateDDoSPolicyCaseRequest = models.CreateDDoSPolicyCaseRequest;
const ModifyCCIpAllowDenyResponse = models.ModifyCCIpAllowDenyResponse;
const ModifyCCAlarmThresholdRequest = models.ModifyCCAlarmThresholdRequest;
const DescribeCCFrequencyRulesResponse = models.DescribeCCFrequencyRulesResponse;
const DescribeDDoSEvListRequest = models.DescribeDDoSEvListRequest;
const DescribeBasicCCThresholdResponse = models.DescribeBasicCCThresholdResponse;
const ModifyDDoSPolicyNameRequest = models.ModifyDDoSPolicyNameRequest;
const DescribeIpUnBlockListResponse = models.DescribeIpUnBlockListResponse;
const ModifyCCPolicySwitchRequest = models.ModifyCCPolicySwitchRequest;
const ModifyCCFrequencyRulesResponse = models.ModifyCCFrequencyRulesResponse;
const ModifyL4KeepTimeRequest = models.ModifyL4KeepTimeRequest;
const SchedulingDomain = models.SchedulingDomain;
const ModifyCCHostProtectionRequest = models.ModifyCCHostProtectionRequest;
const DescribeIpBlockListRequest = models.DescribeIpBlockListRequest;
const DescribeDDoSNetCountResponse = models.DescribeDDoSNetCountResponse;
const CreateL7RulesResponse = models.CreateL7RulesResponse;
const BaradData = models.BaradData;
const ModifyDDoSSwitchRequest = models.ModifyDDoSSwitchRequest;
const CreateNetReturnRequest = models.CreateNetReturnRequest;
const ModifyDDoSAIStatusRequest = models.ModifyDDoSAIStatusRequest;
const DescribeResourceListResponse = models.DescribeResourceListResponse;
const DescribeNewL4RulesResponse = models.DescribeNewL4RulesResponse;
const ModifyCCThresholdRequest = models.ModifyCCThresholdRequest;
const ModifyDDoSDefendStatusResponse = models.ModifyDDoSDefendStatusResponse;
const CreateBasicDDoSAlarmThresholdRequest = models.CreateBasicDDoSAlarmThresholdRequest;
const CCRuleConfig = models.CCRuleConfig;
const DescribeDDoSEvInfoResponse = models.DescribeDDoSEvInfoResponse;
const DescribleRegionCountRequest = models.DescribleRegionCountRequest;
const ModifyCCSelfDefinePolicyResponse = models.ModifyCCSelfDefinePolicyResponse;
const DescribeDDoSIpLogRequest = models.DescribeDDoSIpLogRequest;
const DescribeDDoSAlarmThresholdRequest = models.DescribeDDoSAlarmThresholdRequest;
const DeleteNewL4RulesResponse = models.DeleteNewL4RulesResponse;
const WaterPrintPolicy = models.WaterPrintPolicy;
const CreateNewL7RulesUploadRequest = models.CreateNewL7RulesUploadRequest;
const DeleteNewL7RulesResponse = models.DeleteNewL7RulesResponse;
const DeleteCCSelfDefinePolicyResponse = models.DeleteCCSelfDefinePolicyResponse;
const DescribeDDoSPolicyResponse = models.DescribeDDoSPolicyResponse;
const DeleteCCFrequencyRulesResponse = models.DeleteCCFrequencyRulesResponse;
const DeleteDDoSPolicyCaseResponse = models.DeleteDDoSPolicyCaseResponse;
const CreateL4HealthConfigResponse = models.CreateL4HealthConfigResponse;
const CreateNewL7RulesRequest = models.CreateNewL7RulesRequest;
const ModifyL7RulesRequest = models.ModifyL7RulesRequest;
const ModifyElasticLimitResponse = models.ModifyElasticLimitResponse;
const CreateNewL7RulesUploadResponse = models.CreateNewL7RulesUploadResponse;
const DDoSAttackSourceRecord = models.DDoSAttackSourceRecord;
const CreateUnblockIpResponse = models.CreateUnblockIpResponse;
const DescribePackIndexRequest = models.DescribePackIndexRequest;
const DescribeNewL7RulesErrHealthRequest = models.DescribeNewL7RulesErrHealthRequest;
const ModifyL4RulesRequest = models.ModifyL4RulesRequest;
const DescribeDDoSEvListResponse = models.DescribeDDoSEvListResponse;
const DescribeDDoSPolicyRequest = models.DescribeDDoSPolicyRequest;
const NewL4RuleEntry = models.NewL4RuleEntry;
const DescribeL7HealthConfigResponse = models.DescribeL7HealthConfigResponse;
const CCFrequencyRule = models.CCFrequencyRule;
const CreateCCSelfDefinePolicyResponse = models.CreateCCSelfDefinePolicyResponse;
const NewL7RuleEntry = models.NewL7RuleEntry;
const L4DelRule = models.L4DelRule;
const DescribeDDoSAttackSourceResponse = models.DescribeDDoSAttackSourceResponse;
const CreateBoundIPResponse = models.CreateBoundIPResponse;
const DescribeDDoSUsedStatisRequest = models.DescribeDDoSUsedStatisRequest;
const DDoSPolicyDropOption = models.DDoSPolicyDropOption;
const ModifyElasticLimitRequest = models.ModifyElasticLimitRequest;
const ModifyL4HealthResponse = models.ModifyL4HealthResponse;
const CCEventRecord = models.CCEventRecord;
const DescribeTransmitStatisRequest = models.DescribeTransmitStatisRequest;
const DescribeInsurePacksResponse = models.DescribeInsurePacksResponse;
const CreateUnblockIpRequest = models.CreateUnblockIpRequest;
const ModifyResourceRenewFlagResponse = models.ModifyResourceRenewFlagResponse;
const OrderBy = models.OrderBy;
const DescribeActionLogResponse = models.DescribeActionLogResponse;
const DescribeCCTrendResponse = models.DescribeCCTrendResponse;
const ModifyDDoSPolicyCaseResponse = models.ModifyDDoSPolicyCaseResponse;
const DescribeCCUrlAllowResponse = models.DescribeCCUrlAllowResponse;
const DescribeSecIndexRequest = models.DescribeSecIndexRequest;
const ModifyCCFrequencyRulesStatusRequest = models.ModifyCCFrequencyRulesStatusRequest;
const DescribeDDoSCountResponse = models.DescribeDDoSCountResponse;
const DescribeL4RulesErrHealthResponse = models.DescribeL4RulesErrHealthResponse;
const DeleteDDoSPolicyResponse = models.DeleteDDoSPolicyResponse;
const DescribeDDoSTrendRequest = models.DescribeDDoSTrendRequest;
const ModifyDDoSPolicyResponse = models.ModifyDDoSPolicyResponse;
const ResourceIp = models.ResourceIp;
const CCAlarmThreshold = models.CCAlarmThreshold;
const DescribeDDoSNetIpLogRequest = models.DescribeDDoSNetIpLogRequest;
const L7HealthConfig = models.L7HealthConfig;
const DescribeDDoSNetEvInfoResponse = models.DescribeDDoSNetEvInfoResponse;
const ModifyCCAlarmThresholdResponse = models.ModifyCCAlarmThresholdResponse;
const DescribeRuleSetsRequest = models.DescribeRuleSetsRequest;
const DescribeSchedulingDomainListRequest = models.DescribeSchedulingDomainListRequest;
const DescribleL7RulesResponse = models.DescribleL7RulesResponse;
const CreateCCFrequencyRulesResponse = models.CreateCCFrequencyRulesResponse;
const CreateNewL4RulesRequest = models.CreateNewL4RulesRequest;
const DDoSPolicyPortLimit = models.DDoSPolicyPortLimit;
const DescribeSchedulingDomainListResponse = models.DescribeSchedulingDomainListResponse;
const DescribeDDoSNetTrendResponse = models.DescribeDDoSNetTrendResponse;
const DescribeUnBlockStatisResponse = models.DescribeUnBlockStatisResponse;
const DescribleL7RulesRequest = models.DescribleL7RulesRequest;
const DescribeCCIpAllowDenyRequest = models.DescribeCCIpAllowDenyRequest;
const DescribeSecIndexResponse = models.DescribeSecIndexResponse;
const L7RuleEntry = models.L7RuleEntry;
const IpUnBlockData = models.IpUnBlockData;
const DescribeL4HealthConfigResponse = models.DescribeL4HealthConfigResponse;
const ModifyDDoSLevelRequest = models.ModifyDDoSLevelRequest;
const DDoSPolicyPacketFilter = models.DDoSPolicyPacketFilter;
const DeleteCCFrequencyRulesRequest = models.DeleteCCFrequencyRulesRequest;
const DescribeDDoSNetIpLogResponse = models.DescribeDDoSNetIpLogResponse;
const CreateCCFrequencyRulesRequest = models.CreateCCFrequencyRulesRequest;
const DeleteL7RulesResponse = models.DeleteL7RulesResponse;
const CreateL7HealthConfigResponse = models.CreateL7HealthConfigResponse;
const DescribeDDoSTrendResponse = models.DescribeDDoSTrendResponse;
const CreateL7RulesUploadResponse = models.CreateL7RulesUploadResponse;
const DescribleRegionCountResponse = models.DescribleRegionCountResponse;
const ModifyDDoSThresholdRequest = models.ModifyDDoSThresholdRequest;
const DDoSEventRecord = models.DDoSEventRecord;
const DescribleL4RulesResponse = models.DescribleL4RulesResponse;
const ModifyL4RulesResponse = models.ModifyL4RulesResponse;
const DescribeCCTrendRequest = models.DescribeCCTrendRequest;
const DeleteNewL7RulesRequest = models.DeleteNewL7RulesRequest;
const CreateInstanceNameRequest = models.CreateInstanceNameRequest;
const DeleteDDoSPolicyRequest = models.DeleteDDoSPolicyRequest;


/**
 * dayu client
 * @class
 */
class DayuClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dayu.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * 添加或删除CC的IP黑白名单
     * @param {ModifyCCIpAllowDenyRequest} req
     * @param {function(string, ModifyCCIpAllowDenyResponse):void} cb
     * @public
     */
    ModifyCCIpAllowDeny(req, cb) {
        let resp = new ModifyCCIpAllowDenyResponse();
        this.request("ModifyCCIpAllowDeny", req, resp, cb);
    }

    /**
     * 获取DDoS攻击占比分析
     * @param {DescribeDDoSCountRequest} req
     * @param {function(string, DescribeDDoSCountResponse):void} cb
     * @public
     */
    DescribeDDoSCount(req, cb) {
        let resp = new DescribeDDoSCountResponse();
        this.request("DescribeDDoSCount", req, resp, cb);
    }

    /**
     * 删除L4转发规则
     * @param {DeleteNewL4RulesRequest} req
     * @param {function(string, DeleteNewL4RulesResponse):void} cb
     * @public
     */
    DeleteNewL4Rules(req, cb) {
        let resp = new DeleteNewL4RulesResponse();
        this.request("DeleteNewL4Rules", req, resp, cb);
    }

    /**
     * 获取资源的规则数
     * @param {DescribeRuleSetsRequest} req
     * @param {function(string, DescribeRuleSetsResponse):void} cb
     * @public
     */
    DescribeRuleSets(req, cb) {
        let resp = new DescribeRuleSetsResponse();
        this.request("DescribeRuleSets", req, resp, cb);
    }

    /**
     * 批量上传7层转发规则
     * @param {CreateNewL7RulesUploadRequest} req
     * @param {function(string, CreateNewL7RulesUploadResponse):void} cb
     * @public
     */
    CreateNewL7RulesUpload(req, cb) {
        let resp = new CreateNewL7RulesUploadResponse();
        this.request("CreateNewL7RulesUpload", req, resp, cb);
    }

    /**
     * 此接口是7层CC的访问频控自定义规则（IP+Host维度，不支持具体的URI），此接口已弃用，请调用新接口CreateCCFrequencyRules，新接口同时支持IP+Host维度以及具体的URI；
     * @param {CreateL7CCRuleRequest} req
     * @param {function(string, CreateL7CCRuleResponse):void} cb
     * @public
     */
    CreateL7CCRule(req, cb) {
        let resp = new CreateL7CCRuleResponse();
        this.request("CreateL7CCRule", req, resp, cb);
    }

    /**
     * 创建CC自定义策略
     * @param {CreateCCSelfDefinePolicyRequest} req
     * @param {function(string, CreateCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    CreateCCSelfDefinePolicy(req, cb) {
        let resp = new CreateCCSelfDefinePolicyResponse();
        this.request("CreateCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * 添加7层转发规则
     * @param {CreateNewL7RulesRequest} req
     * @param {function(string, CreateNewL7RulesResponse):void} cb
     * @public
     */
    CreateNewL7Rules(req, cb) {
        let resp = new CreateNewL7RulesResponse();
        this.request("CreateNewL7Rules", req, resp, cb);
    }

    /**
     * 修改CC自定义策略开关
     * @param {ModifyCCPolicySwitchRequest} req
     * @param {function(string, ModifyCCPolicySwitchResponse):void} cb
     * @public
     */
    ModifyCCPolicySwitch(req, cb) {
        let resp = new ModifyCCPolicySwitchResponse();
        this.request("ModifyCCPolicySwitch", req, resp, cb);
    }

    /**
     * 获取L7转发规则健康检查异常结果
     * @param {DescribeNewL7RulesErrHealthRequest} req
     * @param {function(string, DescribeNewL7RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeNewL7RulesErrHealth(req, cb) {
        let resp = new DescribeNewL7RulesErrHealthResponse();
        this.request("DescribeNewL7RulesErrHealth", req, resp, cb);
    }

    /**
     * 添加策略场景
     * @param {CreateDDoSPolicyCaseRequest} req
     * @param {function(string, CreateDDoSPolicyCaseResponse):void} cb
     * @public
     */
    CreateDDoSPolicyCase(req, cb) {
        let resp = new CreateDDoSPolicyCaseResponse();
        this.request("CreateDDoSPolicyCase", req, resp, cb);
    }

    /**
     * 获取高防IP专业版资源的DDoS攻击指标数据
     * @param {DescribeDDoSNetTrendRequest} req
     * @param {function(string, DescribeDDoSNetTrendResponse):void} cb
     * @public
     */
    DescribeDDoSNetTrend(req, cb) {
        let resp = new DescribeDDoSNetTrendResponse();
        this.request("DescribeDDoSNetTrend", req, resp, cb);
    }

    /**
     * 修改DDoS高级策略名称
     * @param {ModifyDDoSPolicyNameRequest} req
     * @param {function(string, ModifyDDoSPolicyNameResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyName(req, cb) {
        let resp = new ModifyDDoSPolicyNameResponse();
        this.request("ModifyDDoSPolicyName", req, resp, cb);
    }

    /**
     * 修改L4转发规则健康检查参数，支持的子产品：高防IP、高防IP专业版
     * @param {ModifyL4HealthRequest} req
     * @param {function(string, ModifyL4HealthResponse):void} cb
     * @public
     */
    ModifyL4Health(req, cb) {
        let resp = new ModifyL4HealthResponse();
        this.request("ModifyL4Health", req, resp, cb);
    }

    /**
     * 统计用户的高防资源的使用天数和DDoS攻击防护次数
     * @param {DescribeDDoSUsedStatisRequest} req
     * @param {function(string, DescribeDDoSUsedStatisResponse):void} cb
     * @public
     */
    DescribeDDoSUsedStatis(req, cb) {
        let resp = new DescribeDDoSUsedStatisResponse();
        this.request("DescribeDDoSUsedStatis", req, resp, cb);
    }

    /**
     * 获取DDoS防护状态（临时关闭状态），支持产品：基础防护，独享包，共享包，高防IP，高防IP专业版；调用此接口是获取当前是否有设置临时关闭DDoS防护状态，如果有设置会返回临时关闭的时长等参数。
     * @param {DescribeDDoSDefendStatusRequest} req
     * @param {function(string, DescribeDDoSDefendStatusResponse):void} cb
     * @public
     */
    DescribeDDoSDefendStatus(req, cb) {
        let resp = new DescribeDDoSDefendStatusResponse();
        this.request("DescribeDDoSDefendStatus", req, resp, cb);
    }

    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     * @param {DescribeCCAlarmThresholdRequest} req
     * @param {function(string, DescribeCCAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeCCAlarmThreshold(req, cb) {
        let resp = new DescribeCCAlarmThresholdResponse();
        this.request("DescribeCCAlarmThreshold", req, resp, cb);
    }

    /**
     * 下载攻击事件的pcap包
     * @param {DescribePcapRequest} req
     * @param {function(string, DescribePcapResponse):void} cb
     * @public
     */
    DescribePcap(req, cb) {
        let resp = new DescribePcapResponse();
        this.request("DescribePcap", req, resp, cb);
    }

    /**
     * 获取L4转发规则
     * @param {DescribeNewL4RulesRequest} req
     * @param {function(string, DescribeNewL4RulesResponse):void} cb
     * @public
     */
    DescribeNewL4Rules(req, cb) {
        let resp = new DescribeNewL4RulesResponse();
        this.request("DescribeNewL4Rules", req, resp, cb);
    }

    /**
     * 修改弹性防护阈值
     * @param {ModifyElasticLimitRequest} req
     * @param {function(string, ModifyElasticLimitResponse):void} cb
     * @public
     */
    ModifyElasticLimit(req, cb) {
        let resp = new ModifyElasticLimitResponse();
        this.request("ModifyElasticLimit", req, resp, cb);
    }

    /**
     * 获取高防IP专业版资源的DDoSIP攻击日志
     * @param {DescribeDDoSNetIpLogRequest} req
     * @param {function(string, DescribeDDoSNetIpLogResponse):void} cb
     * @public
     */
    DescribeDDoSNetIpLog(req, cb) {
        let resp = new DescribeDDoSNetIpLogResponse();
        this.request("DescribeDDoSNetIpLog", req, resp, cb);
    }

    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     * @param {ModifyCCAlarmThresholdRequest} req
     * @param {function(string, ModifyCCAlarmThresholdResponse):void} cb
     * @public
     */
    ModifyCCAlarmThreshold(req, cb) {
        let resp = new ModifyCCAlarmThresholdResponse();
        this.request("ModifyCCAlarmThreshold", req, resp, cb);
    }

    /**
     * 获取DDoS攻击事件列表
     * @param {DescribeDDoSEvListRequest} req
     * @param {function(string, DescribeDDoSEvListResponse):void} cb
     * @public
     */
    DescribeDDoSEvList(req, cb) {
        let resp = new DescribeDDoSEvListResponse();
        this.request("DescribeDDoSEvList", req, resp, cb);
    }

    /**
     * 获取IP封堵列表
     * @param {DescribeIpBlockListRequest} req
     * @param {function(string, DescribeIpBlockListResponse):void} cb
     * @public
     */
    DescribeIpBlockList(req, cb) {
        let resp = new DescribeIpBlockListResponse();
        this.request("DescribeIpBlockList", req, resp, cb);
    }

    /**
     * 导出四层健康检查配置
     * @param {DescribeL4HealthConfigRequest} req
     * @param {function(string, DescribeL4HealthConfigResponse):void} cb
     * @public
     */
    DescribeL4HealthConfig(req, cb) {
        let resp = new DescribeL4HealthConfigResponse();
        this.request("DescribeL4HealthConfig", req, resp, cb);
    }

    /**
     * 获取本月安全统计
     * @param {DescribeSecIndexRequest} req
     * @param {function(string, DescribeSecIndexResponse):void} cb
     * @public
     */
    DescribeSecIndex(req, cb) {
        let resp = new DescribeSecIndexResponse();
        this.request("DescribeSecIndex", req, resp, cb);
    }

    /**
     * 获取调度域名列表
     * @param {DescribeSchedulingDomainListRequest} req
     * @param {function(string, DescribeSchedulingDomainListResponse):void} cb
     * @public
     */
    DescribeSchedulingDomainList(req, cb) {
        let resp = new DescribeSchedulingDomainListResponse();
        this.request("DescribeSchedulingDomainList", req, resp, cb);
    }

    /**
     * 获取CC防护的访问频率控制规则
     * @param {DescribeCCFrequencyRulesRequest} req
     * @param {function(string, DescribeCCFrequencyRulesResponse):void} cb
     * @public
     */
    DescribeCCFrequencyRules(req, cb) {
        let resp = new DescribeCCFrequencyRulesResponse();
        this.request("DescribeCCFrequencyRules", req, resp, cb);
    }

    /**
     * 删除策略场景
     * @param {DeleteDDoSPolicyCaseRequest} req
     * @param {function(string, DeleteDDoSPolicyCaseResponse):void} cb
     * @public
     */
    DeleteDDoSPolicyCase(req, cb) {
        let resp = new DeleteDDoSPolicyCaseResponse();
        this.request("DeleteDDoSPolicyCase", req, resp, cb);
    }

    /**
     * 删除七层转发规则
     * @param {DeleteL7RulesRequest} req
     * @param {function(string, DeleteL7RulesResponse):void} cb
     * @public
     */
    DeleteL7Rules(req, cb) {
        let resp = new DeleteL7RulesResponse();
        this.request("DeleteL7Rules", req, resp, cb);
    }

    /**
     * 添加L4转发规则
     * @param {CreateNewL4RulesRequest} req
     * @param {function(string, CreateNewL4RulesResponse):void} cb
     * @public
     */
    CreateNewL4Rules(req, cb) {
        let resp = new CreateNewL4RulesResponse();
        this.request("CreateNewL4Rules", req, resp, cb);
    }

    /**
     * 添加L4转发规则
     * @param {CreateL4RulesRequest} req
     * @param {function(string, CreateL4RulesResponse):void} cb
     * @public
     */
    CreateL4Rules(req, cb) {
        let resp = new CreateL4RulesResponse();
        this.request("CreateL4Rules", req, resp, cb);
    }

    /**
     * 为大禹子产品提供业务转发指标数据的接口
     * @param {DescribeBaradDataRequest} req
     * @param {function(string, DescribeBaradDataResponse):void} cb
     * @public
     */
    DescribeBaradData(req, cb) {
        let resp = new DescribeBaradDataResponse();
        this.request("DescribeBaradData", req, resp, cb);
    }

    /**
     * 修改CC防护的访问频率控制规则
     * @param {ModifyCCFrequencyRulesRequest} req
     * @param {function(string, ModifyCCFrequencyRulesResponse):void} cb
     * @public
     */
    ModifyCCFrequencyRules(req, cb) {
        let resp = new ModifyCCFrequencyRulesResponse();
        this.request("ModifyCCFrequencyRules", req, resp, cb);
    }

    /**
     * 获取七层转发规则
     * @param {DescribleL7RulesRequest} req
     * @param {function(string, DescribleL7RulesResponse):void} cb
     * @public
     */
    DescribleL7Rules(req, cb) {
        let resp = new DescribleL7RulesResponse();
        this.request("DescribleL7Rules", req, resp, cb);
    }

    /**
     * 添加DDoS高级策略
     * @param {CreateDDoSPolicyRequest} req
     * @param {function(string, CreateDDoSPolicyResponse):void} cb
     * @public
     */
    CreateDDoSPolicy(req, cb) {
        let resp = new CreateDDoSPolicyResponse();
        this.request("CreateDDoSPolicy", req, resp, cb);
    }

    /**
     * 资源实例绑定DDoS高级策略
     * @param {ModifyResBindDDoSPolicyRequest} req
     * @param {function(string, ModifyResBindDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyResBindDDoSPolicy(req, cb) {
        let resp = new ModifyResBindDDoSPolicyResponse();
        this.request("ModifyResBindDDoSPolicy", req, resp, cb);
    }

    /**
     * 在客户收攻击或者被封堵时，切回到源站，并设置回切的时长
     * @param {ModifyNetReturnSwitchRequest} req
     * @param {function(string, ModifyNetReturnSwitchResponse):void} cb
     * @public
     */
    ModifyNetReturnSwitch(req, cb) {
        let resp = new ModifyNetReturnSwitchResponse();
        this.request("ModifyNetReturnSwitch", req, resp, cb);
    }

    /**
     * 获取L4转发规则健康检查异常结果
     * @param {DescribeNewL4RulesErrHealthRequest} req
     * @param {function(string, DescribeNewL4RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeNewL4RulesErrHealth(req, cb) {
        let resp = new DescribeNewL4RulesErrHealthResponse();
        this.request("DescribeNewL4RulesErrHealth", req, resp, cb);
    }

    /**
     * 获取回源IP段，支持的产品：高防IP，高防IP专业版；
     * @param {DescribeSourceIpSegmentRequest} req
     * @param {function(string, DescribeSourceIpSegmentResponse):void} cb
     * @public
     */
    DescribeSourceIpSegment(req, cb) {
        let resp = new DescribeSourceIpSegmentResponse();
        this.request("DescribeSourceIpSegment", req, resp, cb);
    }

    /**
     * 添加或删除CC的URL白名单
     * @param {ModifyCCUrlAllowRequest} req
     * @param {function(string, ModifyCCUrlAllowResponse):void} cb
     * @public
     */
    ModifyCCUrlAllow(req, cb) {
        let resp = new ModifyCCUrlAllowResponse();
        this.request("ModifyCCUrlAllow", req, resp, cb);
    }

    /**
     * 获取基础防护黑洞阈值
     * @param {DescribeBasicDeviceThresholdRequest} req
     * @param {function(string, DescribeBasicDeviceThresholdResponse):void} cb
     * @public
     */
    DescribeBasicDeviceThreshold(req, cb) {
        let resp = new DescribeBasicDeviceThresholdResponse();
        this.request("DescribeBasicDeviceThreshold", req, resp, cb);
    }

    /**
     * IP解封操作
     * @param {CreateUnblockIpRequest} req
     * @param {function(string, CreateUnblockIpResponse):void} cb
     * @public
     */
    CreateUnblockIp(req, cb) {
        let resp = new CreateUnblockIpResponse();
        this.request("CreateUnblockIp", req, resp, cb);
    }

    /**
     * 删除DDoS高级策略
     * @param {DeleteDDoSPolicyRequest} req
     * @param {function(string, DeleteDDoSPolicyResponse):void} cb
     * @public
     */
    DeleteDDoSPolicy(req, cb) {
        let resp = new DeleteDDoSPolicyResponse();
        this.request("DeleteDDoSPolicy", req, resp, cb);
    }

    /**
     * 修改4层转发规则
     * @param {ModifyNewL4RuleRequest} req
     * @param {function(string, ModifyNewL4RuleResponse):void} cb
     * @public
     */
    ModifyNewL4Rule(req, cb) {
        let resp = new ModifyNewL4RuleResponse();
        this.request("ModifyNewL4Rule", req, resp, cb);
    }

    /**
     * 获取资源列表
     * @param {DescribeResourceListRequest} req
     * @param {function(string, DescribeResourceListResponse):void} cb
     * @public
     */
    DescribeResourceList(req, cb) {
        let resp = new DescribeResourceListResponse();
        this.request("DescribeResourceList", req, resp, cb);
    }

    /**
     * 删除CC自定义策略
     * @param {DeleteCCSelfDefinePolicyRequest} req
     * @param {function(string, DeleteCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    DeleteCCSelfDefinePolicy(req, cb) {
        let resp = new DeleteCCSelfDefinePolicyResponse();
        this.request("DeleteCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * 获取策略场景
     * @param {DescribePolicyCaseRequest} req
     * @param {function(string, DescribePolicyCaseResponse):void} cb
     * @public
     */
    DescribePolicyCase(req, cb) {
        let resp = new DescribePolicyCaseResponse();
        this.request("DescribePolicyCase", req, resp, cb);
    }

    /**
     * 获取操作日志
     * @param {DescribeActionLogRequest} req
     * @param {function(string, DescribeActionLogResponse):void} cb
     * @public
     */
    DescribeActionLog(req, cb) {
        let resp = new DescribeActionLogResponse();
        this.request("DescribeActionLog", req, resp, cb);
    }

    /**
     * 修改L4转发规则
     * @param {ModifyL4RulesRequest} req
     * @param {function(string, ModifyL4RulesResponse):void} cb
     * @public
     */
    ModifyL4Rules(req, cb) {
        let resp = new ModifyL4RulesResponse();
        this.request("ModifyL4Rules", req, resp, cb);
    }

    /**
     * 获取DDoSIP攻击日志
     * @param {DescribeDDoSIpLogRequest} req
     * @param {function(string, DescribeDDoSIpLogResponse):void} cb
     * @public
     */
    DescribeDDoSIpLog(req, cb) {
        let resp = new DescribeDDoSIpLogResponse();
        this.request("DescribeDDoSIpLog", req, resp, cb);
    }

    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置DDoS攻击的告警通知阈值
     * @param {DescribeDDoSAlarmThresholdRequest} req
     * @param {function(string, DescribeDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeDDoSAlarmThreshold(req, cb) {
        let resp = new DescribeDDoSAlarmThresholdResponse();
        this.request("DescribeDDoSAlarmThreshold", req, resp, cb);
    }

    /**
     * 获取产品总览统计，支持高防包、高防IP、高防IP专业版；
     * @param {DescribePackIndexRequest} req
     * @param {function(string, DescribePackIndexResponse):void} cb
     * @public
     */
    DescribePackIndex(req, cb) {
        let resp = new DescribePackIndexResponse();
        this.request("DescribePackIndex", req, resp, cb);
    }

    /**
     * 获取7层规则
     * @param {DescribleNewL7RulesRequest} req
     * @param {function(string, DescribleNewL7RulesResponse):void} cb
     * @public
     */
    DescribleNewL7Rules(req, cb) {
        let resp = new DescribleNewL7RulesResponse();
        this.request("DescribleNewL7Rules", req, resp, cb);
    }

    /**
     * 设置基础防护的DDoS告警阈值，只支持基础防护产品
     * @param {CreateBasicDDoSAlarmThresholdRequest} req
     * @param {function(string, CreateBasicDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    CreateBasicDDoSAlarmThreshold(req, cb) {
        let resp = new CreateBasicDDoSAlarmThresholdResponse();
        this.request("CreateBasicDDoSAlarmThreshold", req, resp, cb);
    }

    /**
     * 修改DDoS清洗阈值
     * @param {ModifyDDoSThresholdRequest} req
     * @param {function(string, ModifyDDoSThresholdResponse):void} cb
     * @public
     */
    ModifyDDoSThreshold(req, cb) {
        let resp = new ModifyDDoSThresholdResponse();
        this.request("ModifyDDoSThreshold", req, resp, cb);
    }

    /**
     * 配置7层转发规则的证书
     * @param {CreateL7RuleCertRequest} req
     * @param {function(string, CreateL7RuleCertResponse):void} cb
     * @public
     */
    CreateL7RuleCert(req, cb) {
        let resp = new CreateL7RuleCertResponse();
        this.request("CreateL7RuleCert", req, resp, cb);
    }

    /**
     * 读取或修改DDoS的AI防护状态
     * @param {ModifyDDoSAIStatusRequest} req
     * @param {function(string, ModifyDDoSAIStatusResponse):void} cb
     * @public
     */
    ModifyDDoSAIStatus(req, cb) {
        let resp = new ModifyDDoSAIStatusResponse();
        this.request("ModifyDDoSAIStatus", req, resp, cb);
    }

    /**
     * 获取CC的IP黑白名单
     * @param {DescribeCCIpAllowDenyRequest} req
     * @param {function(string, DescribeCCIpAllowDenyResponse):void} cb
     * @public
     */
    DescribeCCIpAllowDeny(req, cb) {
        let resp = new DescribeCCIpAllowDenyResponse();
        this.request("DescribeCCIpAllowDeny", req, resp, cb);
    }

    /**
     * 上传四层健康检查配置
     * @param {CreateL4HealthConfigRequest} req
     * @param {function(string, CreateL4HealthConfigResponse):void} cb
     * @public
     */
    CreateL4HealthConfig(req, cb) {
        let resp = new CreateL4HealthConfigResponse();
        this.request("CreateL4HealthConfig", req, resp, cb);
    }

    /**
     * 获取高防IP专业版资源的DDoS攻击占比分析
     * @param {DescribeDDoSNetCountRequest} req
     * @param {function(string, DescribeDDoSNetCountResponse):void} cb
     * @public
     */
    DescribeDDoSNetCount(req, cb) {
        let resp = new DescribeDDoSNetCountResponse();
        this.request("DescribeDDoSNetCount", req, resp, cb);
    }

    /**
     * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     * @param {CreateBoundIPRequest} req
     * @param {function(string, CreateBoundIPResponse):void} cb
     * @public
     */
    CreateBoundIP(req, cb) {
        let resp = new CreateBoundIPResponse();
        this.request("CreateBoundIP", req, resp, cb);
    }

    /**
     * 修改DDoS高级策略
     * @param {ModifyDDoSPolicyRequest} req
     * @param {function(string, ModifyDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyDDoSPolicy(req, cb) {
        let resp = new ModifyDDoSPolicyResponse();
        this.request("ModifyDDoSPolicy", req, resp, cb);
    }

    /**
     * 修改策略场景
     * @param {ModifyDDoSPolicyCaseRequest} req
     * @param {function(string, ModifyDDoSPolicyCaseResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyCase(req, cb) {
        let resp = new ModifyDDoSPolicyCaseResponse();
        this.request("ModifyDDoSPolicyCase", req, resp, cb);
    }

    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾等产品设置DDoS攻击的告警通知阈值
     * @param {ModifyDDoSAlarmThresholdRequest} req
     * @param {function(string, ModifyDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    ModifyDDoSAlarmThreshold(req, cb) {
        let resp = new ModifyDDoSAlarmThresholdResponse();
        this.request("ModifyDDoSAlarmThreshold", req, resp, cb);
    }

    /**
     * 获取高防IP专业版资源的DDoS攻击事件详情
     * @param {DescribeDDoSNetEvInfoRequest} req
     * @param {function(string, DescribeDDoSNetEvInfoResponse):void} cb
     * @public
     */
    DescribeDDoSNetEvInfo(req, cb) {
        let resp = new DescribeDDoSNetEvInfoResponse();
        this.request("DescribeDDoSNetEvInfo", req, resp, cb);
    }

    /**
     * 删除CC防护的访问频率控制规则
     * @param {DeleteCCFrequencyRulesRequest} req
     * @param {function(string, DeleteCCFrequencyRulesResponse):void} cb
     * @public
     */
    DeleteCCFrequencyRules(req, cb) {
        let resp = new DeleteCCFrequencyRulesResponse();
        this.request("DeleteCCFrequencyRules", req, resp, cb);
    }

    /**
     * 修改L4转发规则的会话保持，支持的子产品：高防IP、高防IP专业版
     * @param {ModifyL4KeepTimeRequest} req
     * @param {function(string, ModifyL4KeepTimeResponse):void} cb
     * @public
     */
    ModifyL4KeepTime(req, cb) {
        let resp = new ModifyL4KeepTimeResponse();
        this.request("ModifyL4KeepTime", req, resp, cb);
    }

    /**
     * 获取L4转发规则健康检查异常结果
     * @param {DescribeL4RulesErrHealthRequest} req
     * @param {function(string, DescribeL4RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeL4RulesErrHealth(req, cb) {
        let resp = new DescribeL4RulesErrHealthResponse();
        this.request("DescribeL4RulesErrHealth", req, resp, cb);
    }

    /**
     * 批量上传7层转发规则
     * @param {CreateL7RulesUploadRequest} req
     * @param {function(string, CreateL7RulesUploadResponse):void} cb
     * @public
     */
    CreateL7RulesUpload(req, cb) {
        let resp = new CreateL7RulesUploadResponse();
        this.request("CreateL7RulesUpload", req, resp, cb);
    }

    /**
     * 获取DDoS攻击源IP地域分布图，支持全球攻击分布和国内省份攻击分布；
     * @param {DescribeDDoSAttackIPRegionMapRequest} req
     * @param {function(string, DescribeDDoSAttackIPRegionMapResponse):void} cb
     * @public
     */
    DescribeDDoSAttackIPRegionMap(req, cb) {
        let resp = new DescribeDDoSAttackIPRegionMapResponse();
        this.request("DescribeDDoSAttackIPRegionMap", req, resp, cb);
    }

    /**
     * 获取业务转发统计数据，支持转发流量和转发包速率
     * @param {DescribeTransmitStatisRequest} req
     * @param {function(string, DescribeTransmitStatisResponse):void} cb
     * @public
     */
    DescribeTransmitStatis(req, cb) {
        let resp = new DescribeTransmitStatisResponse();
        this.request("DescribeTransmitStatis", req, resp, cb);
    }

    /**
     * 修改CC防护等级
     * @param {ModifyCCLevelRequest} req
     * @param {function(string, ModifyCCLevelResponse):void} cb
     * @public
     */
    ModifyCCLevel(req, cb) {
        let resp = new ModifyCCLevelResponse();
        this.request("ModifyCCLevel", req, resp, cb);
    }

    /**
     * 开启或关闭DDoS防护状态，调用此接口允许临时关闭DDoS防护一段时间，等时间到了会自动开启DDoS防护；
     * @param {ModifyDDoSDefendStatusRequest} req
     * @param {function(string, ModifyDDoSDefendStatusResponse):void} cb
     * @public
     */
    ModifyDDoSDefendStatus(req, cb) {
        let resp = new ModifyDDoSDefendStatusResponse();
        this.request("ModifyDDoSDefendStatus", req, resp, cb);
    }

    /**
     * 获取黑洞解封次数
     * @param {DescribeUnBlockStatisRequest} req
     * @param {function(string, DescribeUnBlockStatisResponse):void} cb
     * @public
     */
    DescribeUnBlockStatis(req, cb) {
        let resp = new DescribeUnBlockStatisResponse();
        this.request("DescribeUnBlockStatis", req, resp, cb);
    }

    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     * @param {DescribeDDoSTrendRequest} req
     * @param {function(string, DescribeDDoSTrendResponse):void} cb
     * @public
     */
    DescribeDDoSTrend(req, cb) {
        let resp = new DescribeDDoSTrendResponse();
        this.request("DescribeDDoSTrend", req, resp, cb);
    }

    /**
     * 高防IP专业版一键切回源站
     * @param {CreateNetReturnRequest} req
     * @param {function(string, CreateNetReturnResponse):void} cb
     * @public
     */
    CreateNetReturn(req, cb) {
        let resp = new CreateNetReturnResponse();
        this.request("CreateNetReturn", req, resp, cb);
    }

    /**
     * 开启或关闭DDoS防护，只支持基础防护产品；
     * @param {ModifyDDoSSwitchRequest} req
     * @param {function(string, ModifyDDoSSwitchResponse):void} cb
     * @public
     */
    ModifyDDoSSwitch(req, cb) {
        let resp = new ModifyDDoSSwitchResponse();
        this.request("ModifyDDoSSwitch", req, resp, cb);
    }

    /**
     * 读取或修改DDoS的防护等级
     * @param {ModifyDDoSLevelRequest} req
     * @param {function(string, ModifyDDoSLevelResponse):void} cb
     * @public
     */
    ModifyDDoSLevel(req, cb) {
        let resp = new ModifyDDoSLevelResponse();
        this.request("ModifyDDoSLevel", req, resp, cb);
    }

    /**
     * 获取DDoS攻击源列表
     * @param {DescribeDDoSAttackSourceRequest} req
     * @param {function(string, DescribeDDoSAttackSourceResponse):void} cb
     * @public
     */
    DescribeDDoSAttackSource(req, cb) {
        let resp = new DescribeDDoSAttackSourceResponse();
        this.request("DescribeDDoSAttackSource", req, resp, cb);
    }

    /**
     * 删除L7转发规则
     * @param {DeleteNewL7RulesRequest} req
     * @param {function(string, DeleteNewL7RulesResponse):void} cb
     * @public
     */
    DeleteNewL7Rules(req, cb) {
        let resp = new DeleteNewL7RulesResponse();
        this.request("DeleteNewL7Rules", req, resp, cb);
    }

    /**
     * 获取CC攻击事件列表
     * @param {DescribeCCEvListRequest} req
     * @param {function(string, DescribeCCEvListResponse):void} cb
     * @public
     */
    DescribeCCEvList(req, cb) {
        let resp = new DescribeCCEvListResponse();
        this.request("DescribeCCEvList", req, resp, cb);
    }

    /**
     * 支持水印密钥的添加，删除，开启，关闭
     * @param {ModifyDDoSWaterKeyRequest} req
     * @param {function(string, ModifyDDoSWaterKeyResponse):void} cb
     * @public
     */
    ModifyDDoSWaterKey(req, cb) {
        let resp = new ModifyDDoSWaterKeyResponse();
        this.request("ModifyDDoSWaterKey", req, resp, cb);
    }

    /**
     * 获取保险包套餐列表
     * @param {DescribeInsurePacksRequest} req
     * @param {function(string, DescribeInsurePacksResponse):void} cb
     * @public
     */
    DescribeInsurePacks(req, cb) {
        let resp = new DescribeInsurePacksResponse();
        this.request("DescribeInsurePacks", req, resp, cb);
    }

    /**
     * 删除四层转发规则
     * @param {DeleteL4RulesRequest} req
     * @param {function(string, DeleteL4RulesResponse):void} cb
     * @public
     */
    DeleteL4Rules(req, cb) {
        let resp = new DeleteL4RulesResponse();
        this.request("DeleteL4Rules", req, resp, cb);
    }

    /**
     * 获取高防IP专业版资源的DDoS攻击事件列表
     * @param {DescribeDDoSNetEvListRequest} req
     * @param {function(string, DescribeDDoSNetEvListResponse):void} cb
     * @public
     */
    DescribeDDoSNetEvList(req, cb) {
        let resp = new DescribeDDoSNetEvListResponse();
        this.request("DescribeDDoSNetEvList", req, resp, cb);
    }

    /**
     * 开启或关闭CC域名防护
     * @param {ModifyCCHostProtectionRequest} req
     * @param {function(string, ModifyCCHostProtectionResponse):void} cb
     * @public
     */
    ModifyCCHostProtection(req, cb) {
        let resp = new ModifyCCHostProtectionResponse();
        this.request("ModifyCCHostProtection", req, resp, cb);
    }

    /**
     * 获取地域的资源实例数
     * @param {DescribleRegionCountRequest} req
     * @param {function(string, DescribleRegionCountResponse):void} cb
     * @public
     */
    DescribleRegionCount(req, cb) {
        let resp = new DescribleRegionCountResponse();
        this.request("DescribleRegionCount", req, resp, cb);
    }

    /**
     * 添加7层(网站)转发规则
     * @param {CreateL7RulesRequest} req
     * @param {function(string, CreateL7RulesResponse):void} cb
     * @public
     */
    CreateL7Rules(req, cb) {
        let resp = new CreateL7RulesResponse();
        this.request("CreateL7Rules", req, resp, cb);
    }

    /**
     * 获取IP解封记录
     * @param {DescribeIpUnBlockListRequest} req
     * @param {function(string, DescribeIpUnBlockListResponse):void} cb
     * @public
     */
    DescribeIpUnBlockList(req, cb) {
        let resp = new DescribeIpUnBlockListResponse();
        this.request("DescribeIpUnBlockList", req, resp, cb);
    }

    /**
     * 获取独享包或共享包IP对应的云资产信息，只支持独享包和共享包的IP
     * @param {DescribeIPProductInfoRequest} req
     * @param {function(string, DescribeIPProductInfoResponse):void} cb
     * @public
     */
    DescribeIPProductInfo(req, cb) {
        let resp = new DescribeIPProductInfoResponse();
        this.request("DescribeIPProductInfo", req, resp, cb);
    }

    /**
     * 获取CC自定义策略
     * @param {DescribeCCSelfDefinePolicyRequest} req
     * @param {function(string, DescribeCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    DescribeCCSelfDefinePolicy(req, cb) {
        let resp = new DescribeCCSelfDefinePolicyResponse();
        this.request("DescribeCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * 开启或关闭CC防护的访问频率控制规则
     * @param {ModifyCCFrequencyRulesStatusRequest} req
     * @param {function(string, ModifyCCFrequencyRulesStatusResponse):void} cb
     * @public
     */
    ModifyCCFrequencyRulesStatus(req, cb) {
        let resp = new ModifyCCFrequencyRulesStatusResponse();
        this.request("ModifyCCFrequencyRulesStatus", req, resp, cb);
    }

    /**
     * 修改CC的防护阈值
     * @param {ModifyCCThresholdRequest} req
     * @param {function(string, ModifyCCThresholdResponse):void} cb
     * @public
     */
    ModifyCCThreshold(req, cb) {
        let resp = new ModifyCCThresholdResponse();
        this.request("ModifyCCThreshold", req, resp, cb);
    }

    /**
     * 获取四层转发规则
     * @param {DescribleL4RulesRequest} req
     * @param {function(string, DescribleL4RulesResponse):void} cb
     * @public
     */
    DescribleL4Rules(req, cb) {
        let resp = new DescribleL4RulesResponse();
        this.request("DescribleL4Rules", req, resp, cb);
    }

    /**
     * 修改7层转发规则
     * @param {ModifyNewDomainRulesRequest} req
     * @param {function(string, ModifyNewDomainRulesResponse):void} cb
     * @public
     */
    ModifyNewDomainRules(req, cb) {
        let resp = new ModifyNewDomainRulesResponse();
        this.request("ModifyNewDomainRules", req, resp, cb);
    }

    /**
     * 获取CC的Url白名单
     * @param {DescribeCCUrlAllowRequest} req
     * @param {function(string, DescribeCCUrlAllowResponse):void} cb
     * @public
     */
    DescribeCCUrlAllow(req, cb) {
        let resp = new DescribeCCUrlAllowResponse();
        this.request("DescribeCCUrlAllow", req, resp, cb);
    }

    /**
     * 导出七层健康检查配置
     * @param {DescribeL7HealthConfigRequest} req
     * @param {function(string, DescribeL7HealthConfigResponse):void} cb
     * @public
     */
    DescribeL7HealthConfig(req, cb) {
        let resp = new DescribeL7HealthConfigResponse();
        this.request("DescribeL7HealthConfig", req, resp, cb);
    }

    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)
     * @param {DescribeCCTrendRequest} req
     * @param {function(string, DescribeCCTrendResponse):void} cb
     * @public
     */
    DescribeCCTrend(req, cb) {
        let resp = new DescribeCCTrendResponse();
        this.request("DescribeCCTrend", req, resp, cb);
    }

    /**
     * 添加CC防护的访问频率控制规则
     * @param {CreateCCFrequencyRulesRequest} req
     * @param {function(string, CreateCCFrequencyRulesResponse):void} cb
     * @public
     */
    CreateCCFrequencyRules(req, cb) {
        let resp = new CreateCCFrequencyRulesResponse();
        this.request("CreateCCFrequencyRules", req, resp, cb);
    }

    /**
     * 修改L7转发规则
     * @param {ModifyL7RulesRequest} req
     * @param {function(string, ModifyL7RulesResponse):void} cb
     * @public
     */
    ModifyL7Rules(req, cb) {
        let resp = new ModifyL7RulesResponse();
        this.request("ModifyL7Rules", req, resp, cb);
    }

    /**
     * 获取基础防护CC防护阈值
     * @param {DescribeBasicCCThresholdRequest} req
     * @param {function(string, DescribeBasicCCThresholdResponse):void} cb
     * @public
     */
    DescribeBasicCCThreshold(req, cb) {
        let resp = new DescribeBasicCCThresholdResponse();
        this.request("DescribeBasicCCThreshold", req, resp, cb);
    }

    /**
     * 上传七层健康检查配置
     * @param {CreateL7HealthConfigRequest} req
     * @param {function(string, CreateL7HealthConfigResponse):void} cb
     * @public
     */
    CreateL7HealthConfig(req, cb) {
        let resp = new CreateL7HealthConfigResponse();
        this.request("CreateL7HealthConfig", req, resp, cb);
    }

    /**
     * 获取资源的IP列表
     * @param {DescribeResIpListRequest} req
     * @param {function(string, DescribeResIpListResponse):void} cb
     * @public
     */
    DescribeResIpList(req, cb) {
        let resp = new DescribeResIpListResponse();
        this.request("DescribeResIpList", req, resp, cb);
    }

    /**
     * 资源实例重命名，支持独享包、共享包、高防IP、高防IP专业版；
     * @param {CreateInstanceNameRequest} req
     * @param {function(string, CreateInstanceNameResponse):void} cb
     * @public
     */
    CreateInstanceName(req, cb) {
        let resp = new CreateInstanceNameResponse();
        this.request("CreateInstanceName", req, resp, cb);
    }

    /**
     * 获取高防IP可添加的最多7层规则数量

     * @param {DescribeBGPIPL7RuleMaxCntRequest} req
     * @param {function(string, DescribeBGPIPL7RuleMaxCntResponse):void} cb
     * @public
     */
    DescribeBGPIPL7RuleMaxCnt(req, cb) {
        let resp = new DescribeBGPIPL7RuleMaxCntResponse();
        this.request("DescribeBGPIPL7RuleMaxCnt", req, resp, cb);
    }

    /**
     * 修改资源自动续费标记
     * @param {ModifyResourceRenewFlagRequest} req
     * @param {function(string, ModifyResourceRenewFlagResponse):void} cb
     * @public
     */
    ModifyResourceRenewFlag(req, cb) {
        let resp = new ModifyResourceRenewFlagResponse();
        this.request("ModifyResourceRenewFlag", req, resp, cb);
    }

    /**
     * 修改CC自定义策略
     * @param {ModifyCCSelfDefinePolicyRequest} req
     * @param {function(string, ModifyCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    ModifyCCSelfDefinePolicy(req, cb) {
        let resp = new ModifyCCSelfDefinePolicyResponse();
        this.request("ModifyCCSelfDefinePolicy", req, resp, cb);
    }

    /**
     * 获取DDoS攻击事件详情
     * @param {DescribeDDoSEvInfoRequest} req
     * @param {function(string, DescribeDDoSEvInfoResponse):void} cb
     * @public
     */
    DescribeDDoSEvInfo(req, cb) {
        let resp = new DescribeDDoSEvInfoResponse();
        this.request("DescribeDDoSEvInfo", req, resp, cb);
    }

    /**
     * 获取DDoS高级策略
     * @param {DescribeDDoSPolicyRequest} req
     * @param {function(string, DescribeDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeDDoSPolicy(req, cb) {
        let resp = new DescribeDDoSPolicyResponse();
        this.request("DescribeDDoSPolicy", req, resp, cb);
    }


}
module.exports = DayuClient;
