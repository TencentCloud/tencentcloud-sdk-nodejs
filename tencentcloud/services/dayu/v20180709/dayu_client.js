"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * dayu client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dayu.tencentcloudapi.com", "2018-07-09", clientConfig);
    }
    /**
     * 添加或删除CC的IP黑白名单
     */
    async ModifyCCIpAllowDeny(req, cb) {
        return this.request("ModifyCCIpAllowDeny", req, cb);
    }
    /**
     * 获取DDoS攻击占比分析
     */
    async DescribeDDoSCount(req, cb) {
        return this.request("DescribeDDoSCount", req, cb);
    }
    /**
     * 删除L4转发规则
     */
    async DeleteNewL4Rules(req, cb) {
        return this.request("DeleteNewL4Rules", req, cb);
    }
    /**
     * 获取资源的规则数
     */
    async DescribeRuleSets(req, cb) {
        return this.request("DescribeRuleSets", req, cb);
    }
    /**
     * 批量上传7层转发规则
     */
    async CreateNewL7RulesUpload(req, cb) {
        return this.request("CreateNewL7RulesUpload", req, cb);
    }
    /**
     * 此接口是7层CC的访问频控自定义规则（IP+Host维度，不支持具体的URI），此接口已弃用，请调用新接口CreateCCFrequencyRules，新接口同时支持IP+Host维度以及具体的URI；
     */
    async CreateL7CCRule(req, cb) {
        return this.request("CreateL7CCRule", req, cb);
    }
    /**
     * 创建CC自定义策略
     */
    async CreateCCSelfDefinePolicy(req, cb) {
        return this.request("CreateCCSelfDefinePolicy", req, cb);
    }
    /**
     * 添加7层转发规则
     */
    async CreateNewL7Rules(req, cb) {
        return this.request("CreateNewL7Rules", req, cb);
    }
    /**
     * 修改CC自定义策略开关
     */
    async ModifyCCPolicySwitch(req, cb) {
        return this.request("ModifyCCPolicySwitch", req, cb);
    }
    /**
     * 获取L7转发规则健康检查异常结果
     */
    async DescribeNewL7RulesErrHealth(req, cb) {
        return this.request("DescribeNewL7RulesErrHealth", req, cb);
    }
    /**
     * 添加策略场景
     */
    async CreateDDoSPolicyCase(req, cb) {
        return this.request("CreateDDoSPolicyCase", req, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击指标数据
     */
    async DescribeDDoSNetTrend(req, cb) {
        return this.request("DescribeDDoSNetTrend", req, cb);
    }
    /**
     * 修改DDoS高级策略名称
     */
    async ModifyDDoSPolicyName(req, cb) {
        return this.request("ModifyDDoSPolicyName", req, cb);
    }
    /**
     * 修改L4转发规则健康检查参数，支持的子产品：高防IP、高防IP专业版
     */
    async ModifyL4Health(req, cb) {
        return this.request("ModifyL4Health", req, cb);
    }
    /**
     * 统计用户的高防资源的使用天数和DDoS攻击防护次数
     */
    async DescribeDDoSUsedStatis(req, cb) {
        return this.request("DescribeDDoSUsedStatis", req, cb);
    }
    /**
     * 获取DDoS防护状态（临时关闭状态），支持产品：基础防护，独享包，共享包，高防IP，高防IP专业版；调用此接口是获取当前是否有设置临时关闭DDoS防护状态，如果有设置会返回临时关闭的时长等参数。
     */
    async DescribeDDoSDefendStatus(req, cb) {
        return this.request("DescribeDDoSDefendStatus", req, cb);
    }
    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     */
    async DescribeCCAlarmThreshold(req, cb) {
        return this.request("DescribeCCAlarmThreshold", req, cb);
    }
    /**
     * 下载攻击事件的pcap包
     */
    async DescribePcap(req, cb) {
        return this.request("DescribePcap", req, cb);
    }
    /**
     * 获取L4转发规则
     */
    async DescribeNewL4Rules(req, cb) {
        return this.request("DescribeNewL4Rules", req, cb);
    }
    /**
     * 修改弹性防护阈值
     */
    async ModifyElasticLimit(req, cb) {
        return this.request("ModifyElasticLimit", req, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoSIP攻击日志
     */
    async DescribeDDoSNetIpLog(req, cb) {
        return this.request("DescribeDDoSNetIpLog", req, cb);
    }
    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     */
    async ModifyCCAlarmThreshold(req, cb) {
        return this.request("ModifyCCAlarmThreshold", req, cb);
    }
    /**
     * 获取DDoS攻击事件列表
     */
    async DescribeDDoSEvList(req, cb) {
        return this.request("DescribeDDoSEvList", req, cb);
    }
    /**
     * 获取IP封堵列表
     */
    async DescribeIpBlockList(req, cb) {
        return this.request("DescribeIpBlockList", req, cb);
    }
    /**
     * 导出四层健康检查配置
     */
    async DescribeL4HealthConfig(req, cb) {
        return this.request("DescribeL4HealthConfig", req, cb);
    }
    /**
     * 获取本月安全统计
     */
    async DescribeSecIndex(req, cb) {
        return this.request("DescribeSecIndex", req, cb);
    }
    /**
     * 获取调度域名列表
     */
    async DescribeSchedulingDomainList(req, cb) {
        return this.request("DescribeSchedulingDomainList", req, cb);
    }
    /**
     * 获取CC防护的访问频率控制规则
     */
    async DescribeCCFrequencyRules(req, cb) {
        return this.request("DescribeCCFrequencyRules", req, cb);
    }
    /**
     * 删除策略场景
     */
    async DeleteDDoSPolicyCase(req, cb) {
        return this.request("DeleteDDoSPolicyCase", req, cb);
    }
    /**
     * 删除七层转发规则
     */
    async DeleteL7Rules(req, cb) {
        return this.request("DeleteL7Rules", req, cb);
    }
    /**
     * 添加L4转发规则
     */
    async CreateNewL4Rules(req, cb) {
        return this.request("CreateNewL4Rules", req, cb);
    }
    /**
     * 添加L4转发规则
     */
    async CreateL4Rules(req, cb) {
        return this.request("CreateL4Rules", req, cb);
    }
    /**
     * 为大禹子产品提供业务转发指标数据的接口
     */
    async DescribeBaradData(req, cb) {
        return this.request("DescribeBaradData", req, cb);
    }
    /**
     * 修改CC防护的访问频率控制规则
     */
    async ModifyCCFrequencyRules(req, cb) {
        return this.request("ModifyCCFrequencyRules", req, cb);
    }
    /**
     * 获取七层转发规则
     */
    async DescribleL7Rules(req, cb) {
        return this.request("DescribleL7Rules", req, cb);
    }
    /**
     * 添加DDoS高级策略
     */
    async CreateDDoSPolicy(req, cb) {
        return this.request("CreateDDoSPolicy", req, cb);
    }
    /**
     * 资源实例绑定DDoS高级策略
     */
    async ModifyResBindDDoSPolicy(req, cb) {
        return this.request("ModifyResBindDDoSPolicy", req, cb);
    }
    /**
     * 在客户收攻击或者被封堵时，切回到源站，并设置回切的时长
     */
    async ModifyNetReturnSwitch(req, cb) {
        return this.request("ModifyNetReturnSwitch", req, cb);
    }
    /**
     * 获取L4转发规则健康检查异常结果
     */
    async DescribeNewL4RulesErrHealth(req, cb) {
        return this.request("DescribeNewL4RulesErrHealth", req, cb);
    }
    /**
     * 获取回源IP段，支持的产品：高防IP，高防IP专业版；
     */
    async DescribeSourceIpSegment(req, cb) {
        return this.request("DescribeSourceIpSegment", req, cb);
    }
    /**
     * 添加或删除CC的URL白名单
     */
    async ModifyCCUrlAllow(req, cb) {
        return this.request("ModifyCCUrlAllow", req, cb);
    }
    /**
     * 获取基础防护黑洞阈值
     */
    async DescribeBasicDeviceThreshold(req, cb) {
        return this.request("DescribeBasicDeviceThreshold", req, cb);
    }
    /**
     * IP解封操作
     */
    async CreateUnblockIp(req, cb) {
        return this.request("CreateUnblockIp", req, cb);
    }
    /**
     * 删除DDoS高级策略
     */
    async DeleteDDoSPolicy(req, cb) {
        return this.request("DeleteDDoSPolicy", req, cb);
    }
    /**
     * 修改4层转发规则
     */
    async ModifyNewL4Rule(req, cb) {
        return this.request("ModifyNewL4Rule", req, cb);
    }
    /**
     * 获取资源列表
     */
    async DescribeResourceList(req, cb) {
        return this.request("DescribeResourceList", req, cb);
    }
    /**
     * 获取业务流量状态码统计
     */
    async DescribeBizHttpStatus(req, cb) {
        return this.request("DescribeBizHttpStatus", req, cb);
    }
    /**
     * 删除CC自定义策略
     */
    async DeleteCCSelfDefinePolicy(req, cb) {
        return this.request("DeleteCCSelfDefinePolicy", req, cb);
    }
    /**
     * 获取策略场景
     */
    async DescribePolicyCase(req, cb) {
        return this.request("DescribePolicyCase", req, cb);
    }
    /**
     * 获取操作日志
     */
    async DescribeActionLog(req, cb) {
        return this.request("DescribeActionLog", req, cb);
    }
    /**
     * 修改L4转发规则
     */
    async ModifyL4Rules(req, cb) {
        return this.request("ModifyL4Rules", req, cb);
    }
    /**
     * 获取DDoSIP攻击日志
     */
    async DescribeDDoSIpLog(req, cb) {
        return this.request("DescribeDDoSIpLog", req, cb);
    }
    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置DDoS攻击的告警通知阈值
     */
    async DescribeDDoSAlarmThreshold(req, cb) {
        return this.request("DescribeDDoSAlarmThreshold", req, cb);
    }
    /**
     * 获取产品总览统计，支持高防包、高防IP、高防IP专业版；
     */
    async DescribePackIndex(req, cb) {
        return this.request("DescribePackIndex", req, cb);
    }
    /**
     * 获取7层规则
     */
    async DescribleNewL7Rules(req, cb) {
        return this.request("DescribleNewL7Rules", req, cb);
    }
    /**
     * 设置基础防护的DDoS告警阈值，只支持基础防护产品
     */
    async CreateBasicDDoSAlarmThreshold(req, cb) {
        return this.request("CreateBasicDDoSAlarmThreshold", req, cb);
    }
    /**
     * 修改DDoS清洗阈值
     */
    async ModifyDDoSThreshold(req, cb) {
        return this.request("ModifyDDoSThreshold", req, cb);
    }
    /**
     * 配置7层转发规则的证书
     */
    async CreateL7RuleCert(req, cb) {
        return this.request("CreateL7RuleCert", req, cb);
    }
    /**
     * 读取或修改DDoS的AI防护状态
     */
    async ModifyDDoSAIStatus(req, cb) {
        return this.request("ModifyDDoSAIStatus", req, cb);
    }
    /**
     * 获取CC的IP黑白名单
     */
    async DescribeCCIpAllowDeny(req, cb) {
        return this.request("DescribeCCIpAllowDeny", req, cb);
    }
    /**
     * 上传四层健康检查配置
     */
    async CreateL4HealthConfig(req, cb) {
        return this.request("CreateL4HealthConfig", req, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击占比分析
     */
    async DescribeDDoSNetCount(req, cb) {
        return this.request("DescribeDDoSNetCount", req, cb);
    }
    /**
     * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     */
    async CreateBoundIP(req, cb) {
        return this.request("CreateBoundIP", req, cb);
    }
    /**
     * 修改DDoS高级策略
     */
    async ModifyDDoSPolicy(req, cb) {
        return this.request("ModifyDDoSPolicy", req, cb);
    }
    /**
     * 修改策略场景
     */
    async ModifyDDoSPolicyCase(req, cb) {
        return this.request("ModifyDDoSPolicyCase", req, cb);
    }
    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾等产品设置DDoS攻击的告警通知阈值
     */
    async ModifyDDoSAlarmThreshold(req, cb) {
        return this.request("ModifyDDoSAlarmThreshold", req, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击事件详情
     */
    async DescribeDDoSNetEvInfo(req, cb) {
        return this.request("DescribeDDoSNetEvInfo", req, cb);
    }
    /**
     * 删除CC防护的访问频率控制规则
     */
    async DeleteCCFrequencyRules(req, cb) {
        return this.request("DeleteCCFrequencyRules", req, cb);
    }
    /**
     * 修改L4转发规则的会话保持，支持的子产品：高防IP、高防IP专业版
     */
    async ModifyL4KeepTime(req, cb) {
        return this.request("ModifyL4KeepTime", req, cb);
    }
    /**
     * 获取L4转发规则健康检查异常结果
     */
    async DescribeL4RulesErrHealth(req, cb) {
        return this.request("DescribeL4RulesErrHealth", req, cb);
    }
    /**
     * 批量上传7层转发规则
     */
    async CreateL7RulesUpload(req, cb) {
        return this.request("CreateL7RulesUpload", req, cb);
    }
    /**
     * 获取DDoS高级策略
     */
    async DescribeDDoSPolicy(req, cb) {
        return this.request("DescribeDDoSPolicy", req, cb);
    }
    /**
     * 获取业务转发统计数据，支持转发流量和转发包速率
     */
    async DescribeTransmitStatis(req, cb) {
        return this.request("DescribeTransmitStatis", req, cb);
    }
    /**
     * 修改CC防护等级
     */
    async ModifyCCLevel(req, cb) {
        return this.request("ModifyCCLevel", req, cb);
    }
    /**
     * 开启或关闭DDoS防护状态，调用此接口允许临时关闭DDoS防护一段时间，等时间到了会自动开启DDoS防护；
     */
    async ModifyDDoSDefendStatus(req, cb) {
        return this.request("ModifyDDoSDefendStatus", req, cb);
    }
    /**
     * 获取黑洞解封次数
     */
    async DescribeUnBlockStatis(req, cb) {
        return this.request("DescribeUnBlockStatis", req, cb);
    }
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     */
    async DescribeDDoSTrend(req, cb) {
        return this.request("DescribeDDoSTrend", req, cb);
    }
    /**
     * 高防IP专业版一键切回源站
     */
    async CreateNetReturn(req, cb) {
        return this.request("CreateNetReturn", req, cb);
    }
    /**
     * 开启或关闭DDoS防护，只支持基础防护产品；
     */
    async ModifyDDoSSwitch(req, cb) {
        return this.request("ModifyDDoSSwitch", req, cb);
    }
    /**
     * 读取或修改DDoS的防护等级
     */
    async ModifyDDoSLevel(req, cb) {
        return this.request("ModifyDDoSLevel", req, cb);
    }
    /**
     * 获取DDoS攻击源列表
     */
    async DescribeDDoSAttackSource(req, cb) {
        return this.request("DescribeDDoSAttackSource", req, cb);
    }
    /**
     * 删除L7转发规则
     */
    async DeleteNewL7Rules(req, cb) {
        return this.request("DeleteNewL7Rules", req, cb);
    }
    /**
     * 获取CC攻击事件列表
     */
    async DescribeCCEvList(req, cb) {
        return this.request("DescribeCCEvList", req, cb);
    }
    /**
     * 支持水印密钥的添加，删除，开启，关闭
     */
    async ModifyDDoSWaterKey(req, cb) {
        return this.request("ModifyDDoSWaterKey", req, cb);
    }
    /**
     * 获取保险包套餐列表
     */
    async DescribeInsurePacks(req, cb) {
        return this.request("DescribeInsurePacks", req, cb);
    }
    /**
     * 删除四层转发规则
     */
    async DeleteL4Rules(req, cb) {
        return this.request("DeleteL4Rules", req, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击事件列表
     */
    async DescribeDDoSNetEvList(req, cb) {
        return this.request("DescribeDDoSNetEvList", req, cb);
    }
    /**
     * 开启或关闭CC域名防护
     */
    async ModifyCCHostProtection(req, cb) {
        return this.request("ModifyCCHostProtection", req, cb);
    }
    /**
     * 获取业务流量曲线
     */
    async DescribeBizTrend(req, cb) {
        return this.request("DescribeBizTrend", req, cb);
    }
    /**
     * 获取地域的资源实例数
     */
    async DescribleRegionCount(req, cb) {
        return this.request("DescribleRegionCount", req, cb);
    }
    /**
     * 添加7层(网站)转发规则
     */
    async CreateL7Rules(req, cb) {
        return this.request("CreateL7Rules", req, cb);
    }
    /**
     * 获取IP解封记录
     */
    async DescribeIpUnBlockList(req, cb) {
        return this.request("DescribeIpUnBlockList", req, cb);
    }
    /**
     * 获取独享包或共享包IP对应的云资产信息，只支持独享包和共享包的IP
     */
    async DescribeIPProductInfo(req, cb) {
        return this.request("DescribeIPProductInfo", req, cb);
    }
    /**
     * 获取CC自定义策略
     */
    async DescribeCCSelfDefinePolicy(req, cb) {
        return this.request("DescribeCCSelfDefinePolicy", req, cb);
    }
    /**
     * 开启或关闭CC防护的访问频率控制规则
     */
    async ModifyCCFrequencyRulesStatus(req, cb) {
        return this.request("ModifyCCFrequencyRulesStatus", req, cb);
    }
    /**
     * 修改CC的防护阈值
     */
    async ModifyCCThreshold(req, cb) {
        return this.request("ModifyCCThreshold", req, cb);
    }
    /**
     * 获取四层转发规则
     */
    async DescribleL4Rules(req, cb) {
        return this.request("DescribleL4Rules", req, cb);
    }
    /**
     * 修改7层转发规则
     */
    async ModifyNewDomainRules(req, cb) {
        return this.request("ModifyNewDomainRules", req, cb);
    }
    /**
     * 获取CC的Url白名单
     */
    async DescribeCCUrlAllow(req, cb) {
        return this.request("DescribeCCUrlAllow", req, cb);
    }
    /**
     * 导出七层健康检查配置
     */
    async DescribeL7HealthConfig(req, cb) {
        return this.request("DescribeL7HealthConfig", req, cb);
    }
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)
     */
    async DescribeCCTrend(req, cb) {
        return this.request("DescribeCCTrend", req, cb);
    }
    /**
     * 添加CC防护的访问频率控制规则
     */
    async CreateCCFrequencyRules(req, cb) {
        return this.request("CreateCCFrequencyRules", req, cb);
    }
    /**
     * 修改L7转发规则
     */
    async ModifyL7Rules(req, cb) {
        return this.request("ModifyL7Rules", req, cb);
    }
    /**
     * 获取基础防护CC防护阈值
     */
    async DescribeBasicCCThreshold(req, cb) {
        return this.request("DescribeBasicCCThreshold", req, cb);
    }
    /**
     * 上传七层健康检查配置
     */
    async CreateL7HealthConfig(req, cb) {
        return this.request("CreateL7HealthConfig", req, cb);
    }
    /**
     * 获取资源的IP列表
     */
    async DescribeResIpList(req, cb) {
        return this.request("DescribeResIpList", req, cb);
    }
    /**
     * 资源实例重命名，支持独享包、共享包、高防IP、高防IP专业版；
     */
    async CreateInstanceName(req, cb) {
        return this.request("CreateInstanceName", req, cb);
    }
    /**
     * 获取高防IP可添加的最多7层规则数量

     */
    async DescribeBGPIPL7RuleMaxCnt(req, cb) {
        return this.request("DescribeBGPIPL7RuleMaxCnt", req, cb);
    }
    /**
     * 修改资源自动续费标记
     */
    async ModifyResourceRenewFlag(req, cb) {
        return this.request("ModifyResourceRenewFlag", req, cb);
    }
    /**
     * 修改CC自定义策略
     */
    async ModifyCCSelfDefinePolicy(req, cb) {
        return this.request("ModifyCCSelfDefinePolicy", req, cb);
    }
    /**
     * 获取DDoS攻击事件详情
     */
    async DescribeDDoSEvInfo(req, cb) {
        return this.request("DescribeDDoSEvInfo", req, cb);
    }
    /**
     * 获取DDoS攻击源IP地域分布图，支持全球攻击分布和国内省份攻击分布；
     */
    async DescribeDDoSAttackIPRegionMap(req, cb) {
        return this.request("DescribeDDoSAttackIPRegionMap", req, cb);
    }
}
exports.Client = Client;
