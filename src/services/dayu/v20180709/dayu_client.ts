/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ModifyDDoSPolicyCaseRequest,
  DescribeIpUnBlockListRequest,
  DeleteDDoSPolicyCaseRequest,
  CreateDDoSPolicyResponse,
  DeleteL7RulesRequest,
  CreateBoundIPRequest,
  DescribeNewL4RulesErrHealthResponse,
  DescribeCCEvListRequest,
  DescribeTransmitStatisResponse,
  DDosPolicy,
  ProtocolPort,
  DescribeDDoSNetTrendRequest,
  DescribePolicyCaseRequest,
  DescribeUnBlockStatisRequest,
  ModifyCCUrlAllowResponse,
  DescribeBasicDeviceThresholdResponse,
  DescribeCCAlarmThresholdResponse,
  DescribeDDoSNetEvListRequest,
  DeleteNewL4RulesRequest,
  ModifyNewDomainRulesRequest,
  DDoSAlarmThreshold,
  DescribePolicyCaseResponse,
  DescribeResIpListRequest,
  DescribeNewL4RulesErrHealthRequest,
  ModifyCCLevelRequest,
  DeleteCCSelfDefinePolicyRequest,
  DescribeCCUrlAllowRequest,
  KeyValue,
  IpBlackWhite,
  ModifyDDoSAlarmThresholdRequest,
  DescribeNewL4RulesRequest,
  CreateDDoSPolicyRequest,
  ModifyCCThresholdResponse,
  ModifyNetReturnSwitchResponse,
  DescribeActionLogRequest,
  CreateL7RuleCertRequest,
  DescribeBGPIPL7RuleMaxCntResponse,
  DescribePcapResponse,
  DescribePackIndexResponse,
  DescribeDDoSAttackSourceRequest,
  DescribeDDoSCountRequest,
  RegionInstanceCount,
  WaterPrintKey,
  CreateNewL7RulesResponse,
  ModifyNewL4RuleResponse,
  ModifyNewDomainRulesResponse,
  CreateNewL4RulesResponse,
  DescribeDDoSUsedStatisResponse,
  DescribeBasicCCThresholdRequest,
  CreateDDoSPolicyCaseResponse,
  DescribeIPProductInfoResponse,
  ModifyDDoSSwitchResponse,
  IpBlockData,
  DescribeCCSelfDefinePolicyRequest,
  ModifyDDoSDefendStatusRequest,
  DescribeRuleSetsResponse,
  DescribeBaradDataResponse,
  DescribeDDoSEvInfoRequest,
  DescribeDDoSAttackIPRegionMapResponse,
  ModifyL4KeepTimeResponse,
  ModifyL7RulesResponse,
  DescribeL7HealthConfigRequest,
  BoundIpInfo,
  DescribePcapRequest,
  DescribeDDoSAlarmThresholdResponse,
  KeyValueRecord,
  DescribeBasicDeviceThresholdRequest,
  ModifyDDoSWaterKeyResponse,
  DescribleNewL7RulesResponse,
  ModifyResBindDDoSPolicyResponse,
  ModifyDDoSWaterKeyRequest,
  ModifyCCLevelResponse,
  DescribeBaradDataRequest,
  DescribeDDoSDefendStatusResponse,
  DescribeBizHttpStatusRequest,
  CCPolicy,
  ModifyDDoSAIStatusResponse,
  DescribeDDoSNetEvInfoRequest,
  ModifyResourceRenewFlagRequest,
  DescribeCCEvListResponse,
  DescribeCCFrequencyRulesRequest,
  CreateL4HealthConfigRequest,
  DescribeBGPIPL7RuleMaxCntRequest,
  ModifyDDoSPolicyNameResponse,
  DescribeCCAlarmThresholdRequest,
  ModifyCCUrlAllowRequest,
  ModifyDDoSAlarmThresholdResponse,
  ModifyDDoSLevelResponse,
  DescribeIpBlockListResponse,
  DescribeCCIpAllowDenyResponse,
  DescribeDDoSIpLogResponse,
  CCRule,
  DescribeResIpListResponse,
  ModifyCCIpAllowDenyRequest,
  CreateInstanceNameResponse,
  DescribeDDoSDefendStatusRequest,
  HttpStatusMap,
  ModifyL4HealthRequest,
  ModifyCCHostProtectionResponse,
  CreateL4RulesResponse,
  DescribeInsurePacksRequest,
  DescribeDDoSNetCountRequest,
  Paging,
  ModifyCCSelfDefinePolicyRequest,
  L4HealthConfig,
  CreateCCSelfDefinePolicyRequest,
  SuccessCode,
  DescribleL4RulesRequest,
  L4RuleEntry,
  DescribeL4HealthConfigRequest,
  CreateL7CCRuleResponse,
  ModifyCCFrequencyRulesStatusResponse,
  ModifyNetReturnSwitchRequest,
  CreateL7CCRuleRequest,
  CreateL7RulesRequest,
  DescribeBizHttpStatusResponse,
  DescribeNewL7RulesErrHealthResponse,
  DescribeDDoSNetEvListResponse,
  CreateL4RulesRequest,
  ModifyNewL4RuleRequest,
  DescribeL4RulesErrHealthRequest,
  L4RuleSource,
  CreateBasicDDoSAlarmThresholdResponse,
  CreateNetReturnResponse,
  DeleteL4RulesRequest,
  DescribeResourceListRequest,
  DeleteL4RulesResponse,
  DescribleNewL7RulesRequest,
  DescribeIPProductInfoRequest,
  CreateL7HealthConfigRequest,
  CreateL7RuleCertResponse,
  DescribeDDoSAttackIPRegionMapRequest,
  ModifyDDoSPolicyRequest,
  DescribeSourceIpSegmentRequest,
  DescribeSourceIpSegmentResponse,
  ModifyResBindDDoSPolicyRequest,
  L7RuleHealth,
  CreateL7RulesUploadRequest,
  L4RuleHealth,
  ModifyCCFrequencyRulesRequest,
  ModifyCCPolicySwitchResponse,
  ModifyDDoSThresholdResponse,
  CreateDDoSPolicyCaseRequest,
  ModifyCCIpAllowDenyResponse,
  ModifyCCAlarmThresholdRequest,
  DescribeCCFrequencyRulesResponse,
  DescribeBizTrendResponse,
  DescribeDDoSEvListRequest,
  DescribeBasicCCThresholdResponse,
  ModifyDDoSPolicyNameRequest,
  DescribeIpUnBlockListResponse,
  ModifyCCPolicySwitchRequest,
  ModifyCCFrequencyRulesResponse,
  ModifyL4KeepTimeRequest,
  SchedulingDomain,
  ModifyCCHostProtectionRequest,
  DescribeIpBlockListRequest,
  DescribeDDoSNetCountResponse,
  CreateL7RulesResponse,
  BaradData,
  ModifyDDoSSwitchRequest,
  CreateNetReturnRequest,
  ModifyDDoSAIStatusRequest,
  DescribeDDoSAttackSourceResponse,
  DescribeResourceListResponse,
  DescribeNewL4RulesResponse,
  ModifyCCThresholdRequest,
  ModifyDDoSDefendStatusResponse,
  CreateBasicDDoSAlarmThresholdRequest,
  CCRuleConfig,
  DescribeDDoSEvInfoResponse,
  DescribleRegionCountRequest,
  ModifyCCSelfDefinePolicyResponse,
  DescribeDDoSIpLogRequest,
  DescribeDDoSAlarmThresholdRequest,
  DeleteNewL4RulesResponse,
  WaterPrintPolicy,
  CreateNewL7RulesUploadRequest,
  DeleteNewL7RulesResponse,
  DeleteCCSelfDefinePolicyResponse,
  DescribeDDoSPolicyResponse,
  DeleteCCFrequencyRulesResponse,
  DeleteDDoSPolicyCaseResponse,
  CreateL4HealthConfigResponse,
  CreateNewL7RulesRequest,
  ModifyL7RulesRequest,
  ModifyElasticLimitResponse,
  CreateNewL7RulesUploadResponse,
  DDoSAttackSourceRecord,
  CreateUnblockIpResponse,
  DescribePackIndexRequest,
  DescribeNewL7RulesErrHealthRequest,
  ModifyL4RulesRequest,
  DescribeDDoSEvListResponse,
  DescribeDDoSPolicyRequest,
  NewL4RuleEntry,
  DescribeL7HealthConfigResponse,
  CCFrequencyRule,
  CreateCCSelfDefinePolicyResponse,
  NewL7RuleEntry,
  L4DelRule,
  DescribeCCSelfDefinePolicyResponse,
  CreateBoundIPResponse,
  DescribeDDoSUsedStatisRequest,
  DDoSPolicyDropOption,
  ModifyElasticLimitRequest,
  ModifyL4HealthResponse,
  CCEventRecord,
  DescribeTransmitStatisRequest,
  DescribeInsurePacksResponse,
  CreateUnblockIpRequest,
  ModifyResourceRenewFlagResponse,
  OrderBy,
  DescribeActionLogResponse,
  DescribeCCTrendResponse,
  ModifyDDoSPolicyCaseResponse,
  DescribeCCUrlAllowResponse,
  DescribeSecIndexRequest,
  ModifyCCFrequencyRulesStatusRequest,
  DescribeDDoSCountResponse,
  DescribeL4RulesErrHealthResponse,
  DeleteDDoSPolicyResponse,
  DescribeDDoSTrendRequest,
  ModifyDDoSPolicyResponse,
  ResourceIp,
  CCAlarmThreshold,
  DescribeDDoSNetIpLogRequest,
  L7HealthConfig,
  DescribeDDoSNetEvInfoResponse,
  ModifyCCAlarmThresholdResponse,
  DescribeRuleSetsRequest,
  DescribeSchedulingDomainListRequest,
  DescribleL7RulesResponse,
  DescribeBizTrendRequest,
  CreateCCFrequencyRulesResponse,
  CreateNewL4RulesRequest,
  DDoSPolicyPortLimit,
  DescribeSchedulingDomainListResponse,
  DescribeDDoSNetTrendResponse,
  DescribeUnBlockStatisResponse,
  DescribleL7RulesRequest,
  DescribeCCIpAllowDenyRequest,
  DescribeSecIndexResponse,
  L7RuleEntry,
  IpUnBlockData,
  DescribeL4HealthConfigResponse,
  ModifyDDoSLevelRequest,
  DDoSPolicyPacketFilter,
  DeleteCCFrequencyRulesRequest,
  DescribeDDoSNetIpLogResponse,
  CreateCCFrequencyRulesRequest,
  DeleteL7RulesResponse,
  CreateL7HealthConfigResponse,
  DescribeDDoSTrendResponse,
  CreateL7RulesUploadResponse,
  DescribleRegionCountResponse,
  ModifyDDoSThresholdRequest,
  DDoSEventRecord,
  DescribleL4RulesResponse,
  ModifyL4RulesResponse,
  DescribeCCTrendRequest,
  DeleteNewL7RulesRequest,
  CreateInstanceNameRequest,
  DeleteDDoSPolicyRequest,
} from "./dayu_models"

/**
 * dayu client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dayu.tencentcloudapi.com", "2018-07-09", clientConfig)
  }

  /**
   * 添加或删除CC的IP黑白名单
   */
  async ModifyCCIpAllowDeny(
    req: ModifyCCIpAllowDenyRequest,
    cb?: (error: string, rep: ModifyCCIpAllowDenyResponse) => void
  ): Promise<ModifyCCIpAllowDenyResponse> {
    return this.request("ModifyCCIpAllowDeny", req, cb)
  }

  /**
   * 获取DDoS攻击占比分析
   */
  async DescribeDDoSCount(
    req: DescribeDDoSCountRequest,
    cb?: (error: string, rep: DescribeDDoSCountResponse) => void
  ): Promise<DescribeDDoSCountResponse> {
    return this.request("DescribeDDoSCount", req, cb)
  }

  /**
   * 删除L4转发规则
   */
  async DeleteNewL4Rules(
    req: DeleteNewL4RulesRequest,
    cb?: (error: string, rep: DeleteNewL4RulesResponse) => void
  ): Promise<DeleteNewL4RulesResponse> {
    return this.request("DeleteNewL4Rules", req, cb)
  }

  /**
   * 获取资源的规则数
   */
  async DescribeRuleSets(
    req: DescribeRuleSetsRequest,
    cb?: (error: string, rep: DescribeRuleSetsResponse) => void
  ): Promise<DescribeRuleSetsResponse> {
    return this.request("DescribeRuleSets", req, cb)
  }

  /**
   * 批量上传7层转发规则
   */
  async CreateNewL7RulesUpload(
    req: CreateNewL7RulesUploadRequest,
    cb?: (error: string, rep: CreateNewL7RulesUploadResponse) => void
  ): Promise<CreateNewL7RulesUploadResponse> {
    return this.request("CreateNewL7RulesUpload", req, cb)
  }

  /**
   * 此接口是7层CC的访问频控自定义规则（IP+Host维度，不支持具体的URI），此接口已弃用，请调用新接口CreateCCFrequencyRules，新接口同时支持IP+Host维度以及具体的URI；
   */
  async CreateL7CCRule(
    req: CreateL7CCRuleRequest,
    cb?: (error: string, rep: CreateL7CCRuleResponse) => void
  ): Promise<CreateL7CCRuleResponse> {
    return this.request("CreateL7CCRule", req, cb)
  }

  /**
   * 创建CC自定义策略
   */
  async CreateCCSelfDefinePolicy(
    req: CreateCCSelfDefinePolicyRequest,
    cb?: (error: string, rep: CreateCCSelfDefinePolicyResponse) => void
  ): Promise<CreateCCSelfDefinePolicyResponse> {
    return this.request("CreateCCSelfDefinePolicy", req, cb)
  }

  /**
   * 添加7层转发规则
   */
  async CreateNewL7Rules(
    req: CreateNewL7RulesRequest,
    cb?: (error: string, rep: CreateNewL7RulesResponse) => void
  ): Promise<CreateNewL7RulesResponse> {
    return this.request("CreateNewL7Rules", req, cb)
  }

  /**
   * 修改CC自定义策略开关
   */
  async ModifyCCPolicySwitch(
    req: ModifyCCPolicySwitchRequest,
    cb?: (error: string, rep: ModifyCCPolicySwitchResponse) => void
  ): Promise<ModifyCCPolicySwitchResponse> {
    return this.request("ModifyCCPolicySwitch", req, cb)
  }

  /**
   * 获取L7转发规则健康检查异常结果
   */
  async DescribeNewL7RulesErrHealth(
    req: DescribeNewL7RulesErrHealthRequest,
    cb?: (error: string, rep: DescribeNewL7RulesErrHealthResponse) => void
  ): Promise<DescribeNewL7RulesErrHealthResponse> {
    return this.request("DescribeNewL7RulesErrHealth", req, cb)
  }

  /**
   * 添加策略场景
   */
  async CreateDDoSPolicyCase(
    req: CreateDDoSPolicyCaseRequest,
    cb?: (error: string, rep: CreateDDoSPolicyCaseResponse) => void
  ): Promise<CreateDDoSPolicyCaseResponse> {
    return this.request("CreateDDoSPolicyCase", req, cb)
  }

  /**
   * 获取高防IP专业版资源的DDoS攻击指标数据
   */
  async DescribeDDoSNetTrend(
    req: DescribeDDoSNetTrendRequest,
    cb?: (error: string, rep: DescribeDDoSNetTrendResponse) => void
  ): Promise<DescribeDDoSNetTrendResponse> {
    return this.request("DescribeDDoSNetTrend", req, cb)
  }

  /**
   * 修改DDoS高级策略名称
   */
  async ModifyDDoSPolicyName(
    req: ModifyDDoSPolicyNameRequest,
    cb?: (error: string, rep: ModifyDDoSPolicyNameResponse) => void
  ): Promise<ModifyDDoSPolicyNameResponse> {
    return this.request("ModifyDDoSPolicyName", req, cb)
  }

  /**
   * 修改L4转发规则健康检查参数，支持的子产品：高防IP、高防IP专业版
   */
  async ModifyL4Health(
    req: ModifyL4HealthRequest,
    cb?: (error: string, rep: ModifyL4HealthResponse) => void
  ): Promise<ModifyL4HealthResponse> {
    return this.request("ModifyL4Health", req, cb)
  }

  /**
   * 统计用户的高防资源的使用天数和DDoS攻击防护次数
   */
  async DescribeDDoSUsedStatis(
    req: DescribeDDoSUsedStatisRequest,
    cb?: (error: string, rep: DescribeDDoSUsedStatisResponse) => void
  ): Promise<DescribeDDoSUsedStatisResponse> {
    return this.request("DescribeDDoSUsedStatis", req, cb)
  }

  /**
   * 获取DDoS防护状态（临时关闭状态），支持产品：基础防护，独享包，共享包，高防IP，高防IP专业版；调用此接口是获取当前是否有设置临时关闭DDoS防护状态，如果有设置会返回临时关闭的时长等参数。
   */
  async DescribeDDoSDefendStatus(
    req: DescribeDDoSDefendStatusRequest,
    cb?: (error: string, rep: DescribeDDoSDefendStatusResponse) => void
  ): Promise<DescribeDDoSDefendStatusResponse> {
    return this.request("DescribeDDoSDefendStatus", req, cb)
  }

  /**
   * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
   */
  async DescribeCCAlarmThreshold(
    req: DescribeCCAlarmThresholdRequest,
    cb?: (error: string, rep: DescribeCCAlarmThresholdResponse) => void
  ): Promise<DescribeCCAlarmThresholdResponse> {
    return this.request("DescribeCCAlarmThreshold", req, cb)
  }

  /**
   * 下载攻击事件的pcap包
   */
  async DescribePcap(
    req: DescribePcapRequest,
    cb?: (error: string, rep: DescribePcapResponse) => void
  ): Promise<DescribePcapResponse> {
    return this.request("DescribePcap", req, cb)
  }

  /**
   * 获取L4转发规则
   */
  async DescribeNewL4Rules(
    req: DescribeNewL4RulesRequest,
    cb?: (error: string, rep: DescribeNewL4RulesResponse) => void
  ): Promise<DescribeNewL4RulesResponse> {
    return this.request("DescribeNewL4Rules", req, cb)
  }

  /**
   * 修改弹性防护阈值
   */
  async ModifyElasticLimit(
    req: ModifyElasticLimitRequest,
    cb?: (error: string, rep: ModifyElasticLimitResponse) => void
  ): Promise<ModifyElasticLimitResponse> {
    return this.request("ModifyElasticLimit", req, cb)
  }

  /**
   * 获取高防IP专业版资源的DDoSIP攻击日志
   */
  async DescribeDDoSNetIpLog(
    req: DescribeDDoSNetIpLogRequest,
    cb?: (error: string, rep: DescribeDDoSNetIpLogResponse) => void
  ): Promise<DescribeDDoSNetIpLogResponse> {
    return this.request("DescribeDDoSNetIpLog", req, cb)
  }

  /**
   * 为高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
   */
  async ModifyCCAlarmThreshold(
    req: ModifyCCAlarmThresholdRequest,
    cb?: (error: string, rep: ModifyCCAlarmThresholdResponse) => void
  ): Promise<ModifyCCAlarmThresholdResponse> {
    return this.request("ModifyCCAlarmThreshold", req, cb)
  }

  /**
   * 获取DDoS攻击事件列表
   */
  async DescribeDDoSEvList(
    req: DescribeDDoSEvListRequest,
    cb?: (error: string, rep: DescribeDDoSEvListResponse) => void
  ): Promise<DescribeDDoSEvListResponse> {
    return this.request("DescribeDDoSEvList", req, cb)
  }

  /**
   * 获取IP封堵列表
   */
  async DescribeIpBlockList(
    req?: DescribeIpBlockListRequest,
    cb?: (error: string, rep: DescribeIpBlockListResponse) => void
  ): Promise<DescribeIpBlockListResponse> {
    return this.request("DescribeIpBlockList", req, cb)
  }

  /**
   * 导出四层健康检查配置
   */
  async DescribeL4HealthConfig(
    req: DescribeL4HealthConfigRequest,
    cb?: (error: string, rep: DescribeL4HealthConfigResponse) => void
  ): Promise<DescribeL4HealthConfigResponse> {
    return this.request("DescribeL4HealthConfig", req, cb)
  }

  /**
   * 获取本月安全统计
   */
  async DescribeSecIndex(
    req?: DescribeSecIndexRequest,
    cb?: (error: string, rep: DescribeSecIndexResponse) => void
  ): Promise<DescribeSecIndexResponse> {
    return this.request("DescribeSecIndex", req, cb)
  }

  /**
   * 获取调度域名列表
   */
  async DescribeSchedulingDomainList(
    req: DescribeSchedulingDomainListRequest,
    cb?: (error: string, rep: DescribeSchedulingDomainListResponse) => void
  ): Promise<DescribeSchedulingDomainListResponse> {
    return this.request("DescribeSchedulingDomainList", req, cb)
  }

  /**
   * 获取CC防护的访问频率控制规则
   */
  async DescribeCCFrequencyRules(
    req: DescribeCCFrequencyRulesRequest,
    cb?: (error: string, rep: DescribeCCFrequencyRulesResponse) => void
  ): Promise<DescribeCCFrequencyRulesResponse> {
    return this.request("DescribeCCFrequencyRules", req, cb)
  }

  /**
   * 删除策略场景
   */
  async DeleteDDoSPolicyCase(
    req: DeleteDDoSPolicyCaseRequest,
    cb?: (error: string, rep: DeleteDDoSPolicyCaseResponse) => void
  ): Promise<DeleteDDoSPolicyCaseResponse> {
    return this.request("DeleteDDoSPolicyCase", req, cb)
  }

  /**
   * 删除七层转发规则
   */
  async DeleteL7Rules(
    req: DeleteL7RulesRequest,
    cb?: (error: string, rep: DeleteL7RulesResponse) => void
  ): Promise<DeleteL7RulesResponse> {
    return this.request("DeleteL7Rules", req, cb)
  }

  /**
   * 添加L4转发规则
   */
  async CreateNewL4Rules(
    req: CreateNewL4RulesRequest,
    cb?: (error: string, rep: CreateNewL4RulesResponse) => void
  ): Promise<CreateNewL4RulesResponse> {
    return this.request("CreateNewL4Rules", req, cb)
  }

  /**
   * 添加L4转发规则
   */
  async CreateL4Rules(
    req: CreateL4RulesRequest,
    cb?: (error: string, rep: CreateL4RulesResponse) => void
  ): Promise<CreateL4RulesResponse> {
    return this.request("CreateL4Rules", req, cb)
  }

  /**
   * 为大禹子产品提供业务转发指标数据的接口
   */
  async DescribeBaradData(
    req: DescribeBaradDataRequest,
    cb?: (error: string, rep: DescribeBaradDataResponse) => void
  ): Promise<DescribeBaradDataResponse> {
    return this.request("DescribeBaradData", req, cb)
  }

  /**
   * 修改CC防护的访问频率控制规则
   */
  async ModifyCCFrequencyRules(
    req: ModifyCCFrequencyRulesRequest,
    cb?: (error: string, rep: ModifyCCFrequencyRulesResponse) => void
  ): Promise<ModifyCCFrequencyRulesResponse> {
    return this.request("ModifyCCFrequencyRules", req, cb)
  }

  /**
   * 获取七层转发规则
   */
  async DescribleL7Rules(
    req: DescribleL7RulesRequest,
    cb?: (error: string, rep: DescribleL7RulesResponse) => void
  ): Promise<DescribleL7RulesResponse> {
    return this.request("DescribleL7Rules", req, cb)
  }

  /**
   * 添加DDoS高级策略
   */
  async CreateDDoSPolicy(
    req: CreateDDoSPolicyRequest,
    cb?: (error: string, rep: CreateDDoSPolicyResponse) => void
  ): Promise<CreateDDoSPolicyResponse> {
    return this.request("CreateDDoSPolicy", req, cb)
  }

  /**
   * 资源实例绑定DDoS高级策略
   */
  async ModifyResBindDDoSPolicy(
    req: ModifyResBindDDoSPolicyRequest,
    cb?: (error: string, rep: ModifyResBindDDoSPolicyResponse) => void
  ): Promise<ModifyResBindDDoSPolicyResponse> {
    return this.request("ModifyResBindDDoSPolicy", req, cb)
  }

  /**
   * 在客户收攻击或者被封堵时，切回到源站，并设置回切的时长
   */
  async ModifyNetReturnSwitch(
    req: ModifyNetReturnSwitchRequest,
    cb?: (error: string, rep: ModifyNetReturnSwitchResponse) => void
  ): Promise<ModifyNetReturnSwitchResponse> {
    return this.request("ModifyNetReturnSwitch", req, cb)
  }

  /**
   * 获取L4转发规则健康检查异常结果
   */
  async DescribeNewL4RulesErrHealth(
    req: DescribeNewL4RulesErrHealthRequest,
    cb?: (error: string, rep: DescribeNewL4RulesErrHealthResponse) => void
  ): Promise<DescribeNewL4RulesErrHealthResponse> {
    return this.request("DescribeNewL4RulesErrHealth", req, cb)
  }

  /**
   * 获取回源IP段，支持的产品：高防IP，高防IP专业版；
   */
  async DescribeSourceIpSegment(
    req: DescribeSourceIpSegmentRequest,
    cb?: (error: string, rep: DescribeSourceIpSegmentResponse) => void
  ): Promise<DescribeSourceIpSegmentResponse> {
    return this.request("DescribeSourceIpSegment", req, cb)
  }

  /**
   * 添加或删除CC的URL白名单
   */
  async ModifyCCUrlAllow(
    req: ModifyCCUrlAllowRequest,
    cb?: (error: string, rep: ModifyCCUrlAllowResponse) => void
  ): Promise<ModifyCCUrlAllowResponse> {
    return this.request("ModifyCCUrlAllow", req, cb)
  }

  /**
   * 获取基础防护黑洞阈值
   */
  async DescribeBasicDeviceThreshold(
    req: DescribeBasicDeviceThresholdRequest,
    cb?: (error: string, rep: DescribeBasicDeviceThresholdResponse) => void
  ): Promise<DescribeBasicDeviceThresholdResponse> {
    return this.request("DescribeBasicDeviceThreshold", req, cb)
  }

  /**
   * IP解封操作
   */
  async CreateUnblockIp(
    req: CreateUnblockIpRequest,
    cb?: (error: string, rep: CreateUnblockIpResponse) => void
  ): Promise<CreateUnblockIpResponse> {
    return this.request("CreateUnblockIp", req, cb)
  }

  /**
   * 删除DDoS高级策略
   */
  async DeleteDDoSPolicy(
    req: DeleteDDoSPolicyRequest,
    cb?: (error: string, rep: DeleteDDoSPolicyResponse) => void
  ): Promise<DeleteDDoSPolicyResponse> {
    return this.request("DeleteDDoSPolicy", req, cb)
  }

  /**
   * 修改4层转发规则
   */
  async ModifyNewL4Rule(
    req: ModifyNewL4RuleRequest,
    cb?: (error: string, rep: ModifyNewL4RuleResponse) => void
  ): Promise<ModifyNewL4RuleResponse> {
    return this.request("ModifyNewL4Rule", req, cb)
  }

  /**
   * 获取资源列表
   */
  async DescribeResourceList(
    req: DescribeResourceListRequest,
    cb?: (error: string, rep: DescribeResourceListResponse) => void
  ): Promise<DescribeResourceListResponse> {
    return this.request("DescribeResourceList", req, cb)
  }

  /**
   * 获取业务流量状态码统计
   */
  async DescribeBizHttpStatus(
    req: DescribeBizHttpStatusRequest,
    cb?: (error: string, rep: DescribeBizHttpStatusResponse) => void
  ): Promise<DescribeBizHttpStatusResponse> {
    return this.request("DescribeBizHttpStatus", req, cb)
  }

  /**
   * 删除CC自定义策略
   */
  async DeleteCCSelfDefinePolicy(
    req: DeleteCCSelfDefinePolicyRequest,
    cb?: (error: string, rep: DeleteCCSelfDefinePolicyResponse) => void
  ): Promise<DeleteCCSelfDefinePolicyResponse> {
    return this.request("DeleteCCSelfDefinePolicy", req, cb)
  }

  /**
   * 获取策略场景
   */
  async DescribePolicyCase(
    req: DescribePolicyCaseRequest,
    cb?: (error: string, rep: DescribePolicyCaseResponse) => void
  ): Promise<DescribePolicyCaseResponse> {
    return this.request("DescribePolicyCase", req, cb)
  }

  /**
   * 获取操作日志
   */
  async DescribeActionLog(
    req: DescribeActionLogRequest,
    cb?: (error: string, rep: DescribeActionLogResponse) => void
  ): Promise<DescribeActionLogResponse> {
    return this.request("DescribeActionLog", req, cb)
  }

  /**
   * 修改L4转发规则
   */
  async ModifyL4Rules(
    req: ModifyL4RulesRequest,
    cb?: (error: string, rep: ModifyL4RulesResponse) => void
  ): Promise<ModifyL4RulesResponse> {
    return this.request("ModifyL4Rules", req, cb)
  }

  /**
   * 获取DDoSIP攻击日志
   */
  async DescribeDDoSIpLog(
    req: DescribeDDoSIpLogRequest,
    cb?: (error: string, rep: DescribeDDoSIpLogResponse) => void
  ): Promise<DescribeDDoSIpLogResponse> {
    return this.request("DescribeDDoSIpLog", req, cb)
  }

  /**
   * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置DDoS攻击的告警通知阈值
   */
  async DescribeDDoSAlarmThreshold(
    req: DescribeDDoSAlarmThresholdRequest,
    cb?: (error: string, rep: DescribeDDoSAlarmThresholdResponse) => void
  ): Promise<DescribeDDoSAlarmThresholdResponse> {
    return this.request("DescribeDDoSAlarmThreshold", req, cb)
  }

  /**
   * 获取产品总览统计，支持高防包、高防IP、高防IP专业版；
   */
  async DescribePackIndex(
    req: DescribePackIndexRequest,
    cb?: (error: string, rep: DescribePackIndexResponse) => void
  ): Promise<DescribePackIndexResponse> {
    return this.request("DescribePackIndex", req, cb)
  }

  /**
   * 获取7层规则
   */
  async DescribleNewL7Rules(
    req: DescribleNewL7RulesRequest,
    cb?: (error: string, rep: DescribleNewL7RulesResponse) => void
  ): Promise<DescribleNewL7RulesResponse> {
    return this.request("DescribleNewL7Rules", req, cb)
  }

  /**
   * 设置基础防护的DDoS告警阈值，只支持基础防护产品
   */
  async CreateBasicDDoSAlarmThreshold(
    req: CreateBasicDDoSAlarmThresholdRequest,
    cb?: (error: string, rep: CreateBasicDDoSAlarmThresholdResponse) => void
  ): Promise<CreateBasicDDoSAlarmThresholdResponse> {
    return this.request("CreateBasicDDoSAlarmThreshold", req, cb)
  }

  /**
   * 修改DDoS清洗阈值
   */
  async ModifyDDoSThreshold(
    req: ModifyDDoSThresholdRequest,
    cb?: (error: string, rep: ModifyDDoSThresholdResponse) => void
  ): Promise<ModifyDDoSThresholdResponse> {
    return this.request("ModifyDDoSThreshold", req, cb)
  }

  /**
   * 配置7层转发规则的证书
   */
  async CreateL7RuleCert(
    req: CreateL7RuleCertRequest,
    cb?: (error: string, rep: CreateL7RuleCertResponse) => void
  ): Promise<CreateL7RuleCertResponse> {
    return this.request("CreateL7RuleCert", req, cb)
  }

  /**
   * 读取或修改DDoS的AI防护状态
   */
  async ModifyDDoSAIStatus(
    req: ModifyDDoSAIStatusRequest,
    cb?: (error: string, rep: ModifyDDoSAIStatusResponse) => void
  ): Promise<ModifyDDoSAIStatusResponse> {
    return this.request("ModifyDDoSAIStatus", req, cb)
  }

  /**
   * 获取CC的IP黑白名单
   */
  async DescribeCCIpAllowDeny(
    req: DescribeCCIpAllowDenyRequest,
    cb?: (error: string, rep: DescribeCCIpAllowDenyResponse) => void
  ): Promise<DescribeCCIpAllowDenyResponse> {
    return this.request("DescribeCCIpAllowDeny", req, cb)
  }

  /**
   * 上传四层健康检查配置
   */
  async CreateL4HealthConfig(
    req: CreateL4HealthConfigRequest,
    cb?: (error: string, rep: CreateL4HealthConfigResponse) => void
  ): Promise<CreateL4HealthConfigResponse> {
    return this.request("CreateL4HealthConfig", req, cb)
  }

  /**
   * 获取高防IP专业版资源的DDoS攻击占比分析
   */
  async DescribeDDoSNetCount(
    req: DescribeDDoSNetCountRequest,
    cb?: (error: string, rep: DescribeDDoSNetCountResponse) => void
  ): Promise<DescribeDDoSNetCountResponse> {
    return this.request("DescribeDDoSNetCount", req, cb)
  }

  /**
   * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
   */
  async CreateBoundIP(
    req: CreateBoundIPRequest,
    cb?: (error: string, rep: CreateBoundIPResponse) => void
  ): Promise<CreateBoundIPResponse> {
    return this.request("CreateBoundIP", req, cb)
  }

  /**
   * 修改DDoS高级策略
   */
  async ModifyDDoSPolicy(
    req: ModifyDDoSPolicyRequest,
    cb?: (error: string, rep: ModifyDDoSPolicyResponse) => void
  ): Promise<ModifyDDoSPolicyResponse> {
    return this.request("ModifyDDoSPolicy", req, cb)
  }

  /**
   * 修改策略场景
   */
  async ModifyDDoSPolicyCase(
    req: ModifyDDoSPolicyCaseRequest,
    cb?: (error: string, rep: ModifyDDoSPolicyCaseResponse) => void
  ): Promise<ModifyDDoSPolicyCaseResponse> {
    return this.request("ModifyDDoSPolicyCase", req, cb)
  }

  /**
   * 为高防包、高防IP、高防IP专业版、棋牌盾等产品设置DDoS攻击的告警通知阈值
   */
  async ModifyDDoSAlarmThreshold(
    req: ModifyDDoSAlarmThresholdRequest,
    cb?: (error: string, rep: ModifyDDoSAlarmThresholdResponse) => void
  ): Promise<ModifyDDoSAlarmThresholdResponse> {
    return this.request("ModifyDDoSAlarmThreshold", req, cb)
  }

  /**
   * 获取高防IP专业版资源的DDoS攻击事件详情
   */
  async DescribeDDoSNetEvInfo(
    req: DescribeDDoSNetEvInfoRequest,
    cb?: (error: string, rep: DescribeDDoSNetEvInfoResponse) => void
  ): Promise<DescribeDDoSNetEvInfoResponse> {
    return this.request("DescribeDDoSNetEvInfo", req, cb)
  }

  /**
   * 删除CC防护的访问频率控制规则
   */
  async DeleteCCFrequencyRules(
    req: DeleteCCFrequencyRulesRequest,
    cb?: (error: string, rep: DeleteCCFrequencyRulesResponse) => void
  ): Promise<DeleteCCFrequencyRulesResponse> {
    return this.request("DeleteCCFrequencyRules", req, cb)
  }

  /**
   * 修改L4转发规则的会话保持，支持的子产品：高防IP、高防IP专业版
   */
  async ModifyL4KeepTime(
    req: ModifyL4KeepTimeRequest,
    cb?: (error: string, rep: ModifyL4KeepTimeResponse) => void
  ): Promise<ModifyL4KeepTimeResponse> {
    return this.request("ModifyL4KeepTime", req, cb)
  }

  /**
   * 获取L4转发规则健康检查异常结果
   */
  async DescribeL4RulesErrHealth(
    req: DescribeL4RulesErrHealthRequest,
    cb?: (error: string, rep: DescribeL4RulesErrHealthResponse) => void
  ): Promise<DescribeL4RulesErrHealthResponse> {
    return this.request("DescribeL4RulesErrHealth", req, cb)
  }

  /**
   * 批量上传7层转发规则
   */
  async CreateL7RulesUpload(
    req: CreateL7RulesUploadRequest,
    cb?: (error: string, rep: CreateL7RulesUploadResponse) => void
  ): Promise<CreateL7RulesUploadResponse> {
    return this.request("CreateL7RulesUpload", req, cb)
  }

  /**
   * 获取DDoS高级策略
   */
  async DescribeDDoSPolicy(
    req: DescribeDDoSPolicyRequest,
    cb?: (error: string, rep: DescribeDDoSPolicyResponse) => void
  ): Promise<DescribeDDoSPolicyResponse> {
    return this.request("DescribeDDoSPolicy", req, cb)
  }

  /**
   * 获取业务转发统计数据，支持转发流量和转发包速率
   */
  async DescribeTransmitStatis(
    req: DescribeTransmitStatisRequest,
    cb?: (error: string, rep: DescribeTransmitStatisResponse) => void
  ): Promise<DescribeTransmitStatisResponse> {
    return this.request("DescribeTransmitStatis", req, cb)
  }

  /**
   * 修改CC防护等级
   */
  async ModifyCCLevel(
    req: ModifyCCLevelRequest,
    cb?: (error: string, rep: ModifyCCLevelResponse) => void
  ): Promise<ModifyCCLevelResponse> {
    return this.request("ModifyCCLevel", req, cb)
  }

  /**
   * 开启或关闭DDoS防护状态，调用此接口允许临时关闭DDoS防护一段时间，等时间到了会自动开启DDoS防护；
   */
  async ModifyDDoSDefendStatus(
    req: ModifyDDoSDefendStatusRequest,
    cb?: (error: string, rep: ModifyDDoSDefendStatusResponse) => void
  ): Promise<ModifyDDoSDefendStatusResponse> {
    return this.request("ModifyDDoSDefendStatus", req, cb)
  }

  /**
   * 获取黑洞解封次数
   */
  async DescribeUnBlockStatis(
    req?: DescribeUnBlockStatisRequest,
    cb?: (error: string, rep: DescribeUnBlockStatisResponse) => void
  ): Promise<DescribeUnBlockStatisResponse> {
    return this.request("DescribeUnBlockStatis", req, cb)
  }

  /**
   * 获取DDoS攻击流量带宽和攻击包速率数据
   */
  async DescribeDDoSTrend(
    req: DescribeDDoSTrendRequest,
    cb?: (error: string, rep: DescribeDDoSTrendResponse) => void
  ): Promise<DescribeDDoSTrendResponse> {
    return this.request("DescribeDDoSTrend", req, cb)
  }

  /**
   * 高防IP专业版一键切回源站
   */
  async CreateNetReturn(
    req: CreateNetReturnRequest,
    cb?: (error: string, rep: CreateNetReturnResponse) => void
  ): Promise<CreateNetReturnResponse> {
    return this.request("CreateNetReturn", req, cb)
  }

  /**
   * 开启或关闭DDoS防护，只支持基础防护产品；
   */
  async ModifyDDoSSwitch(
    req: ModifyDDoSSwitchRequest,
    cb?: (error: string, rep: ModifyDDoSSwitchResponse) => void
  ): Promise<ModifyDDoSSwitchResponse> {
    return this.request("ModifyDDoSSwitch", req, cb)
  }

  /**
   * 读取或修改DDoS的防护等级
   */
  async ModifyDDoSLevel(
    req: ModifyDDoSLevelRequest,
    cb?: (error: string, rep: ModifyDDoSLevelResponse) => void
  ): Promise<ModifyDDoSLevelResponse> {
    return this.request("ModifyDDoSLevel", req, cb)
  }

  /**
   * 获取DDoS攻击源列表
   */
  async DescribeDDoSAttackSource(
    req: DescribeDDoSAttackSourceRequest,
    cb?: (error: string, rep: DescribeDDoSAttackSourceResponse) => void
  ): Promise<DescribeDDoSAttackSourceResponse> {
    return this.request("DescribeDDoSAttackSource", req, cb)
  }

  /**
   * 删除L7转发规则
   */
  async DeleteNewL7Rules(
    req: DeleteNewL7RulesRequest,
    cb?: (error: string, rep: DeleteNewL7RulesResponse) => void
  ): Promise<DeleteNewL7RulesResponse> {
    return this.request("DeleteNewL7Rules", req, cb)
  }

  /**
   * 获取CC攻击事件列表
   */
  async DescribeCCEvList(
    req: DescribeCCEvListRequest,
    cb?: (error: string, rep: DescribeCCEvListResponse) => void
  ): Promise<DescribeCCEvListResponse> {
    return this.request("DescribeCCEvList", req, cb)
  }

  /**
   * 支持水印密钥的添加，删除，开启，关闭
   */
  async ModifyDDoSWaterKey(
    req: ModifyDDoSWaterKeyRequest,
    cb?: (error: string, rep: ModifyDDoSWaterKeyResponse) => void
  ): Promise<ModifyDDoSWaterKeyResponse> {
    return this.request("ModifyDDoSWaterKey", req, cb)
  }

  /**
   * 获取保险包套餐列表
   */
  async DescribeInsurePacks(
    req: DescribeInsurePacksRequest,
    cb?: (error: string, rep: DescribeInsurePacksResponse) => void
  ): Promise<DescribeInsurePacksResponse> {
    return this.request("DescribeInsurePacks", req, cb)
  }

  /**
   * 删除四层转发规则
   */
  async DeleteL4Rules(
    req: DeleteL4RulesRequest,
    cb?: (error: string, rep: DeleteL4RulesResponse) => void
  ): Promise<DeleteL4RulesResponse> {
    return this.request("DeleteL4Rules", req, cb)
  }

  /**
   * 获取高防IP专业版资源的DDoS攻击事件列表
   */
  async DescribeDDoSNetEvList(
    req: DescribeDDoSNetEvListRequest,
    cb?: (error: string, rep: DescribeDDoSNetEvListResponse) => void
  ): Promise<DescribeDDoSNetEvListResponse> {
    return this.request("DescribeDDoSNetEvList", req, cb)
  }

  /**
   * 开启或关闭CC域名防护
   */
  async ModifyCCHostProtection(
    req: ModifyCCHostProtectionRequest,
    cb?: (error: string, rep: ModifyCCHostProtectionResponse) => void
  ): Promise<ModifyCCHostProtectionResponse> {
    return this.request("ModifyCCHostProtection", req, cb)
  }

  /**
   * 获取业务流量曲线
   */
  async DescribeBizTrend(
    req: DescribeBizTrendRequest,
    cb?: (error: string, rep: DescribeBizTrendResponse) => void
  ): Promise<DescribeBizTrendResponse> {
    return this.request("DescribeBizTrend", req, cb)
  }

  /**
   * 获取地域的资源实例数
   */
  async DescribleRegionCount(
    req: DescribleRegionCountRequest,
    cb?: (error: string, rep: DescribleRegionCountResponse) => void
  ): Promise<DescribleRegionCountResponse> {
    return this.request("DescribleRegionCount", req, cb)
  }

  /**
   * 添加7层(网站)转发规则
   */
  async CreateL7Rules(
    req: CreateL7RulesRequest,
    cb?: (error: string, rep: CreateL7RulesResponse) => void
  ): Promise<CreateL7RulesResponse> {
    return this.request("CreateL7Rules", req, cb)
  }

  /**
   * 获取IP解封记录
   */
  async DescribeIpUnBlockList(
    req: DescribeIpUnBlockListRequest,
    cb?: (error: string, rep: DescribeIpUnBlockListResponse) => void
  ): Promise<DescribeIpUnBlockListResponse> {
    return this.request("DescribeIpUnBlockList", req, cb)
  }

  /**
   * 获取独享包或共享包IP对应的云资产信息，只支持独享包和共享包的IP
   */
  async DescribeIPProductInfo(
    req: DescribeIPProductInfoRequest,
    cb?: (error: string, rep: DescribeIPProductInfoResponse) => void
  ): Promise<DescribeIPProductInfoResponse> {
    return this.request("DescribeIPProductInfo", req, cb)
  }

  /**
   * 获取CC自定义策略
   */
  async DescribeCCSelfDefinePolicy(
    req: DescribeCCSelfDefinePolicyRequest,
    cb?: (error: string, rep: DescribeCCSelfDefinePolicyResponse) => void
  ): Promise<DescribeCCSelfDefinePolicyResponse> {
    return this.request("DescribeCCSelfDefinePolicy", req, cb)
  }

  /**
   * 开启或关闭CC防护的访问频率控制规则
   */
  async ModifyCCFrequencyRulesStatus(
    req: ModifyCCFrequencyRulesStatusRequest,
    cb?: (error: string, rep: ModifyCCFrequencyRulesStatusResponse) => void
  ): Promise<ModifyCCFrequencyRulesStatusResponse> {
    return this.request("ModifyCCFrequencyRulesStatus", req, cb)
  }

  /**
   * 修改CC的防护阈值
   */
  async ModifyCCThreshold(
    req: ModifyCCThresholdRequest,
    cb?: (error: string, rep: ModifyCCThresholdResponse) => void
  ): Promise<ModifyCCThresholdResponse> {
    return this.request("ModifyCCThreshold", req, cb)
  }

  /**
   * 获取四层转发规则
   */
  async DescribleL4Rules(
    req: DescribleL4RulesRequest,
    cb?: (error: string, rep: DescribleL4RulesResponse) => void
  ): Promise<DescribleL4RulesResponse> {
    return this.request("DescribleL4Rules", req, cb)
  }

  /**
   * 修改7层转发规则
   */
  async ModifyNewDomainRules(
    req: ModifyNewDomainRulesRequest,
    cb?: (error: string, rep: ModifyNewDomainRulesResponse) => void
  ): Promise<ModifyNewDomainRulesResponse> {
    return this.request("ModifyNewDomainRules", req, cb)
  }

  /**
   * 获取CC的Url白名单
   */
  async DescribeCCUrlAllow(
    req: DescribeCCUrlAllowRequest,
    cb?: (error: string, rep: DescribeCCUrlAllowResponse) => void
  ): Promise<DescribeCCUrlAllowResponse> {
    return this.request("DescribeCCUrlAllow", req, cb)
  }

  /**
   * 导出七层健康检查配置
   */
  async DescribeL7HealthConfig(
    req: DescribeL7HealthConfigRequest,
    cb?: (error: string, rep: DescribeL7HealthConfigResponse) => void
  ): Promise<DescribeL7HealthConfigResponse> {
    return this.request("DescribeL7HealthConfig", req, cb)
  }

  /**
   * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)
   */
  async DescribeCCTrend(
    req: DescribeCCTrendRequest,
    cb?: (error: string, rep: DescribeCCTrendResponse) => void
  ): Promise<DescribeCCTrendResponse> {
    return this.request("DescribeCCTrend", req, cb)
  }

  /**
   * 添加CC防护的访问频率控制规则
   */
  async CreateCCFrequencyRules(
    req: CreateCCFrequencyRulesRequest,
    cb?: (error: string, rep: CreateCCFrequencyRulesResponse) => void
  ): Promise<CreateCCFrequencyRulesResponse> {
    return this.request("CreateCCFrequencyRules", req, cb)
  }

  /**
   * 修改L7转发规则
   */
  async ModifyL7Rules(
    req: ModifyL7RulesRequest,
    cb?: (error: string, rep: ModifyL7RulesResponse) => void
  ): Promise<ModifyL7RulesResponse> {
    return this.request("ModifyL7Rules", req, cb)
  }

  /**
   * 获取基础防护CC防护阈值
   */
  async DescribeBasicCCThreshold(
    req: DescribeBasicCCThresholdRequest,
    cb?: (error: string, rep: DescribeBasicCCThresholdResponse) => void
  ): Promise<DescribeBasicCCThresholdResponse> {
    return this.request("DescribeBasicCCThreshold", req, cb)
  }

  /**
   * 上传七层健康检查配置
   */
  async CreateL7HealthConfig(
    req: CreateL7HealthConfigRequest,
    cb?: (error: string, rep: CreateL7HealthConfigResponse) => void
  ): Promise<CreateL7HealthConfigResponse> {
    return this.request("CreateL7HealthConfig", req, cb)
  }

  /**
   * 获取资源的IP列表
   */
  async DescribeResIpList(
    req: DescribeResIpListRequest,
    cb?: (error: string, rep: DescribeResIpListResponse) => void
  ): Promise<DescribeResIpListResponse> {
    return this.request("DescribeResIpList", req, cb)
  }

  /**
   * 资源实例重命名，支持独享包、共享包、高防IP、高防IP专业版；
   */
  async CreateInstanceName(
    req: CreateInstanceNameRequest,
    cb?: (error: string, rep: CreateInstanceNameResponse) => void
  ): Promise<CreateInstanceNameResponse> {
    return this.request("CreateInstanceName", req, cb)
  }

  /**
     * 获取高防IP可添加的最多7层规则数量

     */
  async DescribeBGPIPL7RuleMaxCnt(
    req: DescribeBGPIPL7RuleMaxCntRequest,
    cb?: (error: string, rep: DescribeBGPIPL7RuleMaxCntResponse) => void
  ): Promise<DescribeBGPIPL7RuleMaxCntResponse> {
    return this.request("DescribeBGPIPL7RuleMaxCnt", req, cb)
  }

  /**
   * 修改资源自动续费标记
   */
  async ModifyResourceRenewFlag(
    req: ModifyResourceRenewFlagRequest,
    cb?: (error: string, rep: ModifyResourceRenewFlagResponse) => void
  ): Promise<ModifyResourceRenewFlagResponse> {
    return this.request("ModifyResourceRenewFlag", req, cb)
  }

  /**
   * 修改CC自定义策略
   */
  async ModifyCCSelfDefinePolicy(
    req: ModifyCCSelfDefinePolicyRequest,
    cb?: (error: string, rep: ModifyCCSelfDefinePolicyResponse) => void
  ): Promise<ModifyCCSelfDefinePolicyResponse> {
    return this.request("ModifyCCSelfDefinePolicy", req, cb)
  }

  /**
   * 获取DDoS攻击事件详情
   */
  async DescribeDDoSEvInfo(
    req: DescribeDDoSEvInfoRequest,
    cb?: (error: string, rep: DescribeDDoSEvInfoResponse) => void
  ): Promise<DescribeDDoSEvInfoResponse> {
    return this.request("DescribeDDoSEvInfo", req, cb)
  }

  /**
   * 获取DDoS攻击源IP地域分布图，支持全球攻击分布和国内省份攻击分布；
   */
  async DescribeDDoSAttackIPRegionMap(
    req: DescribeDDoSAttackIPRegionMapRequest,
    cb?: (error: string, rep: DescribeDDoSAttackIPRegionMapResponse) => void
  ): Promise<DescribeDDoSAttackIPRegionMapResponse> {
    return this.request("DescribeDDoSAttackIPRegionMap", req, cb)
  }
}
