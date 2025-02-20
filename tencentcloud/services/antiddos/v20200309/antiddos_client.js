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
 * antiddos client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("antiddos.tencentcloudapi.com", "2020-03-09", clientConfig);
    }
    /**
     * 修改CC频率限制策略
     */
    async ModifyCCReqLimitPolicy(req, cb) {
        return this.request("ModifyCCReqLimitPolicy", req, cb);
    }
    /**
     * 修改DDoS黑白名单列表
     */
    async ModifyDDoSBlackWhiteIpList(req, cb) {
        return this.request("ModifyDDoSBlackWhiteIpList", req, cb);
    }
    /**
     * 查询账号维度待处理风险信息，包括是否为付费用户，查询攻击中、封堵中、过期资源数量等
     */
    async DescribePendingRiskInfo(req, cb) {
        return this.request("DescribePendingRiskInfo", req, cb);
    }
    /**
     * 查询与证书ID对于域名匹配的七层规则
     */
    async DescribeL7RulesBySSLCertId(req, cb) {
        return this.request("DescribeL7RulesBySSLCertId", req, cb);
    }
    /**
     * 高防IP获取7层规则
     */
    async DescribeBGPIPL7Rules(req, cb) {
        return this.request("DescribeBGPIPL7Rules", req, cb);
    }
    /**
     * 获取单IP告警阈值配置列表
     */
    async DescribeListIPAlarmConfig(req, cb) {
        return this.request("DescribeListIPAlarmConfig", req, cb);
    }
    /**
     * 获取单IP默认告警阈值配置
     */
    async DescribeDefaultAlarmThreshold(req, cb) {
        return this.request("DescribeDefaultAlarmThreshold", req, cb);
    }
    /**
     * 获取DDoS连接抑制配置列表
     */
    async DescribeDDoSConnectLimitList(req, cb) {
        return this.request("DescribeDDoSConnectLimitList", req, cb);
    }
    /**
     * 获取L7转发规则健康检查异常结果列表
     */
    async DescribeNewL7RulesErrHealth(req, cb) {
        return this.request("DescribeNewL7RulesErrHealth", req, cb);
    }
    /**
     * 获取CC四层黑白名单列表
     */
    async DescribeCcBlackWhiteIpList(req, cb) {
        return this.request("DescribeCcBlackWhiteIpList", req, cb);
    }
    /**
     * 接口变更

获取DDoS防护的IP黑白名单
     */
    async DescribeBlackWhiteIpList(req, cb) {
        return this.request("DescribeBlackWhiteIpList", req, cb);
    }
    /**
     * 获取边界防护CC防护等级列表
     */
    async DescribeCCLevelList(req, cb) {
        return this.request("DescribeCCLevelList", req, cb);
    }
    /**
     * 新增CC精准防护策略
     */
    async CreateCCPrecisionPolicy(req, cb) {
        return this.request("CreateCCPrecisionPolicy", req, cb);
    }
    /**
     * 获取CC清洗阈值列表
     */
    async DescribeCCThresholdList(req, cb) {
        return this.request("DescribeCCThresholdList", req, cb);
    }
    /**
     * 设置单IP告警阈值配置
     */
    async CreateIPAlarmThresholdConfig(req, cb) {
        return this.request("CreateIPAlarmThresholdConfig", req, cb);
    }
    /**
     * 获取DDoS防护的特征过滤规则列表
     */
    async DescribeListPacketFilterConfig(req, cb) {
        return this.request("DescribeListPacketFilterConfig", req, cb);
    }
    /**
     * 添加DDoS防护的端口acl策略
     */
    async CreatePortAclConfig(req, cb) {
        return this.request("CreatePortAclConfig", req, cb);
    }
    /**
     * 获取基础防护攻击状态
     */
    async DescribeBasicDeviceStatus(req, cb) {
        return this.request("DescribeBasicDeviceStatus", req, cb);
    }
    /**
     * 本接口 (AssociateDDoSEipLoadBalancer) 用于将高防弹性公网IP绑定到负载均衡指定内网 IP 上。
     */
    async AssociateDDoSEipLoadBalancer(req, cb) {
        return this.request("AssociateDDoSEipLoadBalancer", req, cb);
    }
    /**
     * 添加7层转发规则
     */
    async CreateNewL7Rules(req, cb) {
        return this.request("CreateNewL7Rules", req, cb);
    }
    /**
     * 删除DDoS防护的水印防护配置
     */
    async DeleteWaterPrintConfig(req, cb) {
        return this.request("DeleteWaterPrintConfig", req, cb);
    }
    /**
     * 新增CC频率限制策略
     */
    async CreateCCReqLimitPolicy(req, cb) {
        return this.request("CreateCCReqLimitPolicy", req, cb);
    }
    /**
     * 开启或关闭DDoS防护的水印防护配置，此功能为付费增值服务，有需求请联系售后
     */
    async SwitchWaterPrintConfig(req, cb) {
        return this.request("SwitchWaterPrintConfig", req, cb);
    }
    /**
     * 获取DDoS防护的协议封禁配置列表
     */
    async DescribeListProtocolBlockConfig(req, cb) {
        return this.request("DescribeListProtocolBlockConfig", req, cb);
    }
    /**
     * 创建一个域名，可用于在封堵时调度切换IP
     */
    async CreateSchedulingDomain(req, cb) {
        return this.request("CreateSchedulingDomain", req, cb);
    }
    /**
     * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
     */
    async DisassociateDDoSEipAddress(req, cb) {
        return this.request("DisassociateDDoSEipAddress", req, cb);
    }
    /**
     * 设置DDoS防护的协议封禁配置
     */
    async CreateProtocolBlockConfig(req, cb) {
        return this.request("CreateProtocolBlockConfig", req, cb);
    }
    /**
     * 删除DDoS防护的IP网段黑白名单
     */
    async DeleteDDoSBlackWhiteIpList(req, cb) {
        return this.request("DeleteDDoSBlackWhiteIpList", req, cb);
    }
    /**
     * 批量配置L7转发规则的证书供SSL测调用
     */
    async CreateL7RuleCerts(req, cb) {
        return this.request("CreateL7RuleCerts", req, cb);
    }
    /**
     * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
     */
    async AssociateDDoSEipAddress(req, cb) {
        return this.request("AssociateDDoSEipAddress", req, cb);
    }
    /**
     * 修改智能解析域名名称
     */
    async ModifyDomainUsrName(req, cb) {
        return this.request("ModifyDomainUsrName", req, cb);
    }
    /**
     * 获取防护概览DDoS攻击流量带宽和攻击包速率数据
     */
    async DescribeOverviewDDoSTrend(req, cb) {
        return this.request("DescribeOverviewDDoSTrend", req, cb);
    }
    /**
     * 删除DDoS防护的访问限速配置
     */
    async DeleteDDoSSpeedLimitConfig(req, cb) {
        return this.request("DeleteDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 高防IP获取7层规则
     */
    async DescribeNewL7Rules(req, cb) {
        return this.request("DescribeNewL7Rules", req, cb);
    }
    /**
     * 获取IP封堵列表
     */
    async DescribeIpBlockList(req, cb) {
        return this.request("DescribeIpBlockList", req, cb);
    }
    /**
     * 修改CC防护等级
     */
    async ModifyCCLevelPolicy(req, cb) {
        return this.request("ModifyCCLevelPolicy", req, cb);
    }
    /**
     * 获取高防IP资产实例列表
     */
    async DescribeListBGPIPInstances(req, cb) {
        return this.request("DescribeListBGPIPInstances", req, cb);
    }
    /**
     * 修改7层转发规则
     */
    async ModifyNewDomainRules(req, cb) {
        return this.request("ModifyNewDomainRules", req, cb);
    }
    /**
     * 获取防护概览总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     */
    async DescribeOverviewCCTrend(req, cb) {
        return this.request("DescribeOverviewCCTrend", req, cb);
    }
    /**
     * 获取CC分级策略
     */
    async DescribeCCLevelPolicy(req, cb) {
        return this.request("DescribeCCLevelPolicy", req, cb);
    }
    /**
     * 获取智能调度域名列表
     */
    async DescribeListSchedulingDomain(req, cb) {
        return this.request("DescribeListSchedulingDomain", req, cb);
    }
    /**
     * 添加DDoS防护的区域封禁配置
     */
    async CreateDDoSGeoIPBlockConfig(req, cb) {
        return this.request("CreateDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 获取高防包流量折线图
     */
    async DescribeBgpBizTrend(req, cb) {
        return this.request("DescribeBgpBizTrend", req, cb);
    }
    /**
     * 获取CC频率限制策略列表
     */
    async DescribeCCReqLimitPolicyList(req, cb) {
        return this.request("DescribeCCReqLimitPolicyList", req, cb);
    }
    /**
     * 删除CC分级策略
     */
    async DeleteCCLevelPolicy(req, cb) {
        return this.request("DeleteCCLevelPolicy", req, cb);
    }
    /**
     * 拉取防护概览指标
     */
    async DescribeOverviewIndex(req, cb) {
        return this.request("DescribeOverviewIndex", req, cb);
    }
    /**
     * 添加DDoS防护的访问限速配置
     */
    async CreateDDoSSpeedLimitConfig(req, cb) {
        return this.request("CreateDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 获取业务流量状态码统计列表
     */
    async DescribeBizHttpStatus(req, cb) {
        return this.request("DescribeBizHttpStatus", req, cb);
    }
    /**
     * 获取高防包资产实例列表
     */
    async DescribeListBGPInstances(req, cb) {
        return this.request("DescribeListBGPInstances", req, cb);
    }
    /**
     * 删除DDoS防护的端口acl策略
     */
    async DeletePortAclConfig(req, cb) {
        return this.request("DeletePortAclConfig", req, cb);
    }
    /**
     * 获取DDoS防护的水印防护配置列表
     */
    async DescribeListWaterPrintConfig(req, cb) {
        return this.request("DescribeListWaterPrintConfig", req, cb);
    }
    /**
     * 获取DDoS防护的区域封禁配置列表
     */
    async DescribeListDDoSGeoIPBlockConfig(req, cb) {
        return this.request("DescribeListDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 删除CC防护的区域封禁配置
     */
    async DeleteCcGeoIPBlockConfig(req, cb) {
        return this.request("DeleteCcGeoIPBlockConfig", req, cb);
    }
    /**
     * 获取DDoS防护的端口acl策略列表
     */
    async DescribeListPortAclList(req, cb) {
        return this.request("DescribeListPortAclList", req, cb);
    }
    /**
     * 获取转发监听器列表
     */
    async DescribeListListener(req, cb) {
        return this.request("DescribeListListener", req, cb);
    }
    /**
     * 修改DDoS清洗阈值
     */
    async ModifyDDoSThreshold(req, cb) {
        return this.request("ModifyDDoSThreshold", req, cb);
    }
    /**
     * 修改DDoS防护的特征过滤规则
     */
    async ModifyPacketFilterConfig(req, cb) {
        return this.request("ModifyPacketFilterConfig", req, cb);
    }
    /**
     * 添加DDoS防护的特征过滤规则
     */
    async CreatePacketFilterConfig(req, cb) {
        return this.request("CreatePacketFilterConfig", req, cb);
    }
    /**
     * 获取DDoS防护的IP黑白名单列表
     */
    async DescribeListBlackWhiteIpList(req, cb) {
        return this.request("DescribeListBlackWhiteIpList", req, cb);
    }
    /**
     * 修改CC四层黑白名单
     */
    async ModifyCcBlackWhiteIpList(req, cb) {
        return this.request("ModifyCcBlackWhiteIpList", req, cb);
    }
    /**
     * 获取高防IP业务监控流量曲线
     */
    async DescribeBizMonitorTrend(req, cb) {
        return this.request("DescribeBizMonitorTrend", req, cb);
    }
    /**
     * 绑定IP到高防包实例，支持独享包、共享包（新版）；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     */
    async CreateBoundIP(req, cb) {
        return this.request("CreateBoundIP", req, cb);
    }
    /**
     * 获取防护概览的ddos攻击事件
     */
    async DescribeOverviewDDoSEventList(req, cb) {
        return this.request("DescribeOverviewDDoSEventList", req, cb);
    }
    /**
     * 设置单IP默认告警阈值配置
     */
    async CreateDefaultAlarmThreshold(req, cb) {
        return this.request("CreateDefaultAlarmThreshold", req, cb);
    }
    /**
     * 添加DDoS防护的水印防护配置
     */
    async CreateWaterPrintConfig(req, cb) {
        return this.request("CreateWaterPrintConfig", req, cb);
    }
    /**
     * 获取DDoS防护的AI防护开关列表
     */
    async DescribeListDDoSAI(req, cb) {
        return this.request("DescribeListDDoSAI", req, cb);
    }
    /**
     * 获取DDoS防护的访问限速配置列表
     */
    async DescribeListDDoSSpeedLimitConfig(req, cb) {
        return this.request("DescribeListDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 拉取防护概览攻击趋势
     */
    async DescribeOverviewAttackTrend(req, cb) {
        return this.request("DescribeOverviewAttackTrend", req, cb);
    }
    /**
     * 添加DDoS防护的IP黑白名单
     */
    async CreateBlackWhiteIpList(req, cb) {
        return this.request("CreateBlackWhiteIpList", req, cb);
    }
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     */
    async DescribeDDoSTrend(req, cb) {
        return this.request("DescribeDDoSTrend", req, cb);
    }
    /**
     * 设置DDoS防护的AI防护开关
     */
    async CreateDDoSAI(req, cb) {
        return this.request("CreateDDoSAI", req, cb);
    }
    /**
     * 删除DDoS防护的特征过滤规则
     */
    async DeletePacketFilterConfig(req, cb) {
        return this.request("DeletePacketFilterConfig", req, cb);
    }
    /**
     * 读取或修改DDoS的防护等级
     */
    async ModifyDDoSLevel(req, cb) {
        return this.request("ModifyDDoSLevel", req, cb);
    }
    /**
     * 批量添加DDoS防护的端口acl策略
     */
    async CreatePortAclConfigList(req, cb) {
        return this.request("CreatePortAclConfigList", req, cb);
    }
    /**
     * 新建CC防护的地域封禁配置
     */
    async CreateCcGeoIPBlockConfig(req, cb) {
        return this.request("CreateCcGeoIPBlockConfig", req, cb);
    }
    /**
     * 新建CC四层黑白名单
     */
    async CreateCcBlackWhiteIpList(req, cb) {
        return this.request("CreateCcBlackWhiteIpList", req, cb);
    }
    /**
     * 修改DDoS防护的访问限速配置
     */
    async ModifyDDoSSpeedLimitConfig(req, cb) {
        return this.request("ModifyDDoSSpeedLimitConfig", req, cb);
    }
    /**
     * 获取业务流量曲线
     */
    async DescribeBizTrend(req, cb) {
        return this.request("DescribeBizTrend", req, cb);
    }
    /**
     * 删除DDoS防护的区域封禁配置
     */
    async DeleteDDoSGeoIPBlockConfig(req, cb) {
        return this.request("DeleteDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 获取CC精准防护列表
     */
    async DescribeCCPrecisionPlyList(req, cb) {
        return this.request("DescribeCCPrecisionPlyList", req, cb);
    }
    /**
     * 修改DDoS防护的端口acl策略
     */
    async ModifyPortAclConfig(req, cb) {
        return this.request("ModifyPortAclConfig", req, cb);
    }
    /**
     * 修改CC清洗阈值
     */
    async ModifyCCThresholdPolicy(req, cb) {
        return this.request("ModifyCCThresholdPolicy", req, cb);
    }
    /**
     * 删除CC清洗阈值策略
     */
    async DeleteCCThresholdPolicy(req, cb) {
        return this.request("DeleteCCThresholdPolicy", req, cb);
    }
    /**
     * 删除DDoS防护的水印防护密钥
     */
    async DeleteWaterPrintKey(req, cb) {
        return this.request("DeleteWaterPrintKey", req, cb);
    }
    /**
     * 添加DDoS防护的IP网段黑白名单
     */
    async CreateDDoSBlackWhiteIpList(req, cb) {
        return this.request("CreateDDoSBlackWhiteIpList", req, cb);
    }
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     */
    async DescribeCCTrend(req, cb) {
        return this.request("DescribeCCTrend", req, cb);
    }
    /**
     * 删除CC四层黑白名单
     */
    async DeleteCcBlackWhiteIpList(req, cb) {
        return this.request("DeleteCcBlackWhiteIpList", req, cb);
    }
    /**
     * 接口变更

获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
     */
    async DescribeListProtectThresholdConfig(req, cb) {
        return this.request("DescribeListProtectThresholdConfig", req, cb);
    }
    /**
     * 删除CC精准防护策略
     */
    async DeleteCCPrecisionPolicy(req, cb) {
        return this.request("DeleteCCPrecisionPolicy", req, cb);
    }
    /**
     * 获取DDoS防护的IP网段黑白名单
     */
    async DescribeDDoSBlackWhiteIpList(req, cb) {
        return this.request("DescribeDDoSBlackWhiteIpList", req, cb);
    }
    /**
     * 配置DDoS连接抑制选项
     */
    async CreateDDoSConnectLimit(req, cb) {
        return this.request("CreateDDoSConnectLimit", req, cb);
    }
    /**
     * 修改CC精准防护策略
     */
    async ModifyCCPrecisionPolicy(req, cb) {
        return this.request("ModifyCCPrecisionPolicy", req, cb);
    }
    /**
     * 获取CC防护的区域封禁配置列表
     */
    async DescribeCcGeoIPBlockConfigList(req, cb) {
        return this.request("DescribeCcGeoIPBlockConfigList", req, cb);
    }
    /**
     * 添加DDoS防护的水印防护密钥
     */
    async CreateWaterPrintKey(req, cb) {
        return this.request("CreateWaterPrintKey", req, cb);
    }
    /**
     * 修改DDoS防护的区域封禁配置
     */
    async ModifyDDoSGeoIPBlockConfig(req, cb) {
        return this.request("ModifyDDoSGeoIPBlockConfig", req, cb);
    }
    /**
     * 删除CC频率限制策略
     */
    async DeleteCCRequestLimitPolicy(req, cb) {
        return this.request("DeleteCCRequestLimitPolicy", req, cb);
    }
}
exports.Client = Client;
