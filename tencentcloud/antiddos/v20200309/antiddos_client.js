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
const CreateDefaultAlarmThresholdRequest = models.CreateDefaultAlarmThresholdRequest;
const DescribeDDoSConnectLimitListRequest = models.DescribeDDoSConnectLimitListRequest;
const DescribeListBGPIPInstancesResponse = models.DescribeListBGPIPInstancesResponse;
const DescribeBlackWhiteIpListResponse = models.DescribeBlackWhiteIpListResponse;
const PacketFilterConfig = models.PacketFilterConfig;
const DescribeOverviewCCTrendRequest = models.DescribeOverviewCCTrendRequest;
const DeleteCCLevelPolicyRequest = models.DeleteCCLevelPolicyRequest;
const ProxyTypeInfo = models.ProxyTypeInfo;
const CreateBoundIPRequest = models.CreateBoundIPRequest;
const CCReqLimitPolicyRecord = models.CCReqLimitPolicyRecord;
const DescribeListSchedulingDomainRequest = models.DescribeListSchedulingDomainRequest;
const CreateWaterPrintConfigRequest = models.CreateWaterPrintConfigRequest;
const DDoSGeoIPBlockConfig = models.DDoSGeoIPBlockConfig;
const CreateBlackWhiteIpListResponse = models.CreateBlackWhiteIpListResponse;
const IPAlarmThresholdRelation = models.IPAlarmThresholdRelation;
const DeleteCCRequestLimitPolicyRequest = models.DeleteCCRequestLimitPolicyRequest;
const DescribeL7RulesBySSLCertIdResponse = models.DescribeL7RulesBySSLCertIdResponse;
const DescribeDDoSBlackWhiteIpListResponse = models.DescribeDDoSBlackWhiteIpListResponse;
const InstanceRelation = models.InstanceRelation;
const ModifyNewDomainRulesRequest = models.ModifyNewDomainRulesRequest;
const RegionInfo = models.RegionInfo;
const DescribeListProtocolBlockConfigResponse = models.DescribeListProtocolBlockConfigResponse;
const DescribeListBGPInstancesRequest = models.DescribeListBGPInstancesRequest;
const KeyValue = models.KeyValue;
const ModifyCcBlackWhiteIpListRequest = models.ModifyCcBlackWhiteIpListRequest;
const DeleteDDoSSpeedLimitConfigRequest = models.DeleteDDoSSpeedLimitConfigRequest;
const CreatePacketFilterConfigResponse = models.CreatePacketFilterConfigResponse;
const CreateCCReqLimitPolicyResponse = models.CreateCCReqLimitPolicyResponse;
const DescribeListWaterPrintConfigRequest = models.DescribeListWaterPrintConfigRequest;
const CreateL7RuleCertsRequest = models.CreateL7RuleCertsRequest;
const CreateCCPrecisionPolicyResponse = models.CreateCCPrecisionPolicyResponse;
const DeleteCcGeoIPBlockConfigResponse = models.DeleteCcGeoIPBlockConfigResponse;
const DeleteDDoSGeoIPBlockConfigRequest = models.DeleteDDoSGeoIPBlockConfigRequest;
const ModifyDDoSGeoIPBlockConfigResponse = models.ModifyDDoSGeoIPBlockConfigResponse;
const DescribeCcBlackWhiteIpListResponse = models.DescribeCcBlackWhiteIpListResponse;
const ModifyCCLevelPolicyResponse = models.ModifyCCLevelPolicyResponse;
const CreateIPAlarmThresholdConfigRequest = models.CreateIPAlarmThresholdConfigRequest;
const CreateCcBlackWhiteIpListResponse = models.CreateCcBlackWhiteIpListResponse;
const DescribeDefaultAlarmThresholdResponse = models.DescribeDefaultAlarmThresholdResponse;
const CreateDDoSAIRequest = models.CreateDDoSAIRequest;
const DescribeListProtectThresholdConfigRequest = models.DescribeListProtectThresholdConfigRequest;
const ModifyNewDomainRulesResponse = models.ModifyNewDomainRulesResponse;
const CcBlackWhiteIpPolicy = models.CcBlackWhiteIpPolicy;
const DescribeDDoSConnectLimitListResponse = models.DescribeDDoSConnectLimitListResponse;
const ModifyPacketFilterConfigResponse = models.ModifyPacketFilterConfigResponse;
const DescribeCCLevelPolicyRequest = models.DescribeCCLevelPolicyRequest;
const CreateWaterPrintConfigResponse = models.CreateWaterPrintConfigResponse;
const DescribeOverviewAttackTrendRequest = models.DescribeOverviewAttackTrendRequest;
const DescribeListBGPIPInstancesRequest = models.DescribeListBGPIPInstancesRequest;
const StaticPackRelation = models.StaticPackRelation;
const CreatePortAclConfigRequest = models.CreatePortAclConfigRequest;
const DescribeCCThresholdListResponse = models.DescribeCCThresholdListResponse;
const DescribeL7RulesBySSLCertIdRequest = models.DescribeL7RulesBySSLCertIdRequest;
const DescribeListPacketFilterConfigResponse = models.DescribeListPacketFilterConfigResponse;
const DeleteBlackWhiteIpListResponse = models.DeleteBlackWhiteIpListResponse;
const CreateSchedulingDomainRequest = models.CreateSchedulingDomainRequest;
const ModifyPortAclConfigRequest = models.ModifyPortAclConfigRequest;
const BoundIpInfo = models.BoundIpInfo;
const CreateDDoSBlackWhiteIpListRequest = models.CreateDDoSBlackWhiteIpListRequest;
const ModifyCCReqLimitPolicyRequest = models.ModifyCCReqLimitPolicyRequest;
const DescribeOverviewDDoSTrendRequest = models.DescribeOverviewDDoSTrendRequest;
const DisassociateDDoSEipAddressResponse = models.DisassociateDDoSEipAddressResponse;
const DeleteCCThresholdPolicyResponse = models.DeleteCCThresholdPolicyResponse;
const DeleteBlackWhiteIpListRequest = models.DeleteBlackWhiteIpListRequest;
const SourceServer = models.SourceServer;
const CCLevelPolicy = models.CCLevelPolicy;
const DescribeOverviewIndexResponse = models.DescribeOverviewIndexResponse;
const CreatePortAclConfigListRequest = models.CreatePortAclConfigListRequest;
const AclConfig = models.AclConfig;
const DisassociateDDoSEipAddressRequest = models.DisassociateDDoSEipAddressRequest;
const SwitchWaterPrintConfigResponse = models.SwitchWaterPrintConfigResponse;
const BlackWhiteIpRelation = models.BlackWhiteIpRelation;
const DeleteWaterPrintKeyResponse = models.DeleteWaterPrintKeyResponse;
const EipAddressPackRelation = models.EipAddressPackRelation;
const CreateDDoSBlackWhiteIpListResponse = models.CreateDDoSBlackWhiteIpListResponse;
const ModifyCcBlackWhiteIpListResponse = models.ModifyCcBlackWhiteIpListResponse;
const ProtocolBlockRelation = models.ProtocolBlockRelation;
const DescribeListPacketFilterConfigRequest = models.DescribeListPacketFilterConfigRequest;
const DescribeOverviewIndexRequest = models.DescribeOverviewIndexRequest;
const BGPIPInstanceUsages = models.BGPIPInstanceUsages;
const ModifyDDoSBlackWhiteIpListRequest = models.ModifyDDoSBlackWhiteIpListRequest;
const DescribeListDDoSGeoIPBlockConfigRequest = models.DescribeListDDoSGeoIPBlockConfigRequest;
const DescribeOverviewDDoSEventListResponse = models.DescribeOverviewDDoSEventListResponse;
const CreateCcGeoIPBlockConfigResponse = models.CreateCcGeoIPBlockConfigResponse;
const DescribeOverviewAttackTrendResponse = models.DescribeOverviewAttackTrendResponse;
const Layer7Rule = models.Layer7Rule;
const ModifyPortAclConfigResponse = models.ModifyPortAclConfigResponse;
const DescribeBasicDeviceStatusRequest = models.DescribeBasicDeviceStatusRequest;
const DeleteCcGeoIPBlockConfigRequest = models.DeleteCcGeoIPBlockConfigRequest;
const DescribeCCLevelListResponse = models.DescribeCCLevelListResponse;
const CreateDDoSSpeedLimitConfigRequest = models.CreateDDoSSpeedLimitConfigRequest;
const CreateDDoSGeoIPBlockConfigRequest = models.CreateDDoSGeoIPBlockConfigRequest;
const CreateProtocolBlockConfigRequest = models.CreateProtocolBlockConfigRequest;
const DeleteWaterPrintKeyRequest = models.DeleteWaterPrintKeyRequest;
const SuccessCode = models.SuccessCode;
const AssociateDDoSEipAddressResponse = models.AssociateDDoSEipAddressResponse;
const DDoSSpeedLimitConfigRelation = models.DDoSSpeedLimitConfigRelation;
const DeleteCCLevelPolicyResponse = models.DeleteCCLevelPolicyResponse;
const ModifyPacketFilterConfigRequest = models.ModifyPacketFilterConfigRequest;
const DescribeBlackWhiteIpListRequest = models.DescribeBlackWhiteIpListRequest;
const CreateCcGeoIPBlockConfigRequest = models.CreateCcGeoIPBlockConfigRequest;
const DeletePortAclConfigResponse = models.DeletePortAclConfigResponse;
const CreateDDoSSpeedLimitConfigResponse = models.CreateDDoSSpeedLimitConfigResponse;
const DeletePacketFilterConfigRequest = models.DeletePacketFilterConfigRequest;
const ModifyL7RulesEdgeRequest = models.ModifyL7RulesEdgeRequest;
const DescribeListDDoSGeoIPBlockConfigResponse = models.DescribeListDDoSGeoIPBlockConfigResponse;
const DescribeBasicDeviceStatusResponse = models.DescribeBasicDeviceStatusResponse;
const WaterPrintConfig = models.WaterPrintConfig;
const L4RuleSource = models.L4RuleSource;
const ProtocolBlockConfig = models.ProtocolBlockConfig;
const DeleteCCPrecisionPolicyRequest = models.DeleteCCPrecisionPolicyRequest;
const BGPIPInstance = models.BGPIPInstance;
const DeleteWaterPrintConfigResponse = models.DeleteWaterPrintConfigResponse;
const Layer4Rule = models.Layer4Rule;
const DeletePacketFilterConfigResponse = models.DeletePacketFilterConfigResponse;
const CreateProtocolBlockConfigResponse = models.CreateProtocolBlockConfigResponse;
const BGPIPInstanceSpecification = models.BGPIPInstanceSpecification;
const CreateIPAlarmThresholdConfigResponse = models.CreateIPAlarmThresholdConfigResponse;
const CreatePortAclConfigListResponse = models.CreatePortAclConfigListResponse;
const DeleteWaterPrintConfigRequest = models.DeleteWaterPrintConfigRequest;
const DescribeDDoSBlackWhiteIpListRequest = models.DescribeDDoSBlackWhiteIpListRequest;
const ConnectLimitRelation = models.ConnectLimitRelation;
const DescribeListBlackWhiteIpListResponse = models.DescribeListBlackWhiteIpListResponse;
const DDoSAIRelation = models.DDoSAIRelation;
const DescribeCCReqLimitPolicyListRequest = models.DescribeCCReqLimitPolicyListRequest;
const AclConfigRelation = models.AclConfigRelation;
const DescribeListDDoSSpeedLimitConfigResponse = models.DescribeListDDoSSpeedLimitConfigResponse;
const ModifyDDoSThresholdResponse = models.ModifyDDoSThresholdResponse;
const CreateDDoSGeoIPBlockConfigResponse = models.CreateDDoSGeoIPBlockConfigResponse;
const CCPrecisionPolicy = models.CCPrecisionPolicy;
const DescribeOverviewDDoSEventListRequest = models.DescribeOverviewDDoSEventListRequest;
const ListenerCcThreholdConfig = models.ListenerCcThreholdConfig;
const EipAddressRelation = models.EipAddressRelation;
const DeleteDDoSBlackWhiteIpListRequest = models.DeleteDDoSBlackWhiteIpListRequest;
const PackInfo = models.PackInfo;
const CreateDDoSConnectLimitResponse = models.CreateDDoSConnectLimitResponse;
const IPLineInfo = models.IPLineInfo;
const DescribeCcBlackWhiteIpListRequest = models.DescribeCcBlackWhiteIpListRequest;
const DescribeListListenerResponse = models.DescribeListListenerResponse;
const DeletePortAclConfigRequest = models.DeletePortAclConfigRequest;
const ProtectThresholdRelation = models.ProtectThresholdRelation;
const CreatePortAclConfigResponse = models.CreatePortAclConfigResponse;
const ModifyDDoSLevelResponse = models.ModifyDDoSLevelResponse;
const CreateL7RuleCertsResponse = models.CreateL7RuleCertsResponse;
const CreateCCPrecisionPolicyRequest = models.CreateCCPrecisionPolicyRequest;
const ConnectLimitConfig = models.ConnectLimitConfig;
const DDoSSpeedLimitConfig = models.DDoSSpeedLimitConfig;
const AssociateDDoSEipLoadBalancerRequest = models.AssociateDDoSEipLoadBalancerRequest;
const DescribeListProtectThresholdConfigResponse = models.DescribeListProtectThresholdConfigResponse;
const CertIdInsL7Rules = models.CertIdInsL7Rules;
const IpSegment = models.IpSegment;
const CreateDefaultAlarmThresholdResponse = models.CreateDefaultAlarmThresholdResponse;
const ModifyDDoSThresholdRequest = models.ModifyDDoSThresholdRequest;
const ModifyDDoSLevelRequest = models.ModifyDDoSLevelRequest;
const DescribeListIPAlarmConfigResponse = models.DescribeListIPAlarmConfigResponse;
const CcGeoIpPolicyNew = models.CcGeoIpPolicyNew;
const ModifyDDoSBlackWhiteIpListResponse = models.ModifyDDoSBlackWhiteIpListResponse;
const CCReqLimitPolicy = models.CCReqLimitPolicy;
const DescribeCCPrecisionPlyListRequest = models.DescribeCCPrecisionPlyListRequest;
const ModifyL7RulesEdgeResponse = models.ModifyL7RulesEdgeResponse;
const ProtocolPort = models.ProtocolPort;
const DescribeCCLevelListRequest = models.DescribeCCLevelListRequest;
const ModifyCCThresholdPolicyRequest = models.ModifyCCThresholdPolicyRequest;
const DeleteDDoSGeoIPBlockConfigResponse = models.DeleteDDoSGeoIPBlockConfigResponse;
const DescribeListDDoSAIRequest = models.DescribeListDDoSAIRequest;
const DescribeListIPAlarmConfigRequest = models.DescribeListIPAlarmConfigRequest;
const PortSegment = models.PortSegment;
const DescribeOverviewCCTrendResponse = models.DescribeOverviewCCTrendResponse;
const ModifyCCReqLimitPolicyResponse = models.ModifyCCReqLimitPolicyResponse;
const DefaultAlarmThreshold = models.DefaultAlarmThreshold;
const ForwardListener = models.ForwardListener;
const BGPInstanceSpecification = models.BGPInstanceSpecification;
const ModifyDomainUsrNameRequest = models.ModifyDomainUsrNameRequest;
const CreateDDoSConnectLimitRequest = models.CreateDDoSConnectLimitRequest;
const CreateWaterPrintKeyRequest = models.CreateWaterPrintKeyRequest;
const WaterPrintRelation = models.WaterPrintRelation;
const InsL7Rules = models.InsL7Rules;
const DescribeCCReqLimitPolicyListResponse = models.DescribeCCReqLimitPolicyListResponse;
const DescribeListDDoSAIResponse = models.DescribeListDDoSAIResponse;
const ModifyCCPrecisionPolicyResponse = models.ModifyCCPrecisionPolicyResponse;
const CcGeoIPBlockConfig = models.CcGeoIPBlockConfig;
const ModifyDDoSSpeedLimitConfigRequest = models.ModifyDDoSSpeedLimitConfigRequest;
const AssociateDDoSEipAddressRequest = models.AssociateDDoSEipAddressRequest;
const AssociateDDoSEipLoadBalancerResponse = models.AssociateDDoSEipLoadBalancerResponse;
const DescribeCCThresholdListRequest = models.DescribeCCThresholdListRequest;
const CreateBlackWhiteIpListRequest = models.CreateBlackWhiteIpListRequest;
const ModifyDDoSGeoIPBlockConfigRequest = models.ModifyDDoSGeoIPBlockConfigRequest;
const DescribeBizTrendResponse = models.DescribeBizTrendResponse;
const NewL7RuleEntry = models.NewL7RuleEntry;
const DeleteCcBlackWhiteIpListResponse = models.DeleteCcBlackWhiteIpListResponse;
const CreateBoundIPResponse = models.CreateBoundIPResponse;
const DescribeListDDoSSpeedLimitConfigRequest = models.DescribeListDDoSSpeedLimitConfigRequest;
const SpeedValue = models.SpeedValue;
const SwitchWaterPrintConfigRequest = models.SwitchWaterPrintConfigRequest;
const DescribeListSchedulingDomainResponse = models.DescribeListSchedulingDomainResponse;
const ModifyCCPrecisionPolicyRequest = models.ModifyCCPrecisionPolicyRequest;
const DeleteDDoSBlackWhiteIpListResponse = models.DeleteDDoSBlackWhiteIpListResponse;
const CCThresholdPolicy = models.CCThresholdPolicy;
const ModifyDomainUsrNameResponse = models.ModifyDomainUsrNameResponse;
const DescribeCCTrendResponse = models.DescribeCCTrendResponse;
const CreateSchedulingDomainResponse = models.CreateSchedulingDomainResponse;
const EipProductInfo = models.EipProductInfo;
const DeleteCcBlackWhiteIpListRequest = models.DeleteCcBlackWhiteIpListRequest;
const DescribeCcGeoIPBlockConfigListResponse = models.DescribeCcGeoIPBlockConfigListResponse;
const CreateDDoSAIResponse = models.CreateDDoSAIResponse;
const DDoSGeoIPBlockConfigRelation = models.DDoSGeoIPBlockConfigRelation;
const DescribeListProtocolBlockConfigRequest = models.DescribeListProtocolBlockConfigRequest;
const DescribeListBGPInstancesResponse = models.DescribeListBGPInstancesResponse;
const DescribeDDoSTrendRequest = models.DescribeDDoSTrendRequest;
const DeleteCCRequestLimitPolicyResponse = models.DeleteCCRequestLimitPolicyResponse;
const CreateCcBlackWhiteIpListRequest = models.CreateCcBlackWhiteIpListRequest;
const BGPInstance = models.BGPInstance;
const DescribeListPortAclListResponse = models.DescribeListPortAclListResponse;
const CCPrecisionPlyRecord = models.CCPrecisionPlyRecord;
const DescribeCCPrecisionPlyListResponse = models.DescribeCCPrecisionPlyListResponse;
const DescribeBizTrendRequest = models.DescribeBizTrendRequest;
const DescribeListPortAclListRequest = models.DescribeListPortAclListRequest;
const OverviewDDoSEvent = models.OverviewDDoSEvent;
const DescribeCCLevelPolicyResponse = models.DescribeCCLevelPolicyResponse;
const DescribeListWaterPrintConfigResponse = models.DescribeListWaterPrintConfigResponse;
const DescribeOverviewDDoSTrendResponse = models.DescribeOverviewDDoSTrendResponse;
const BGPInstanceUsages = models.BGPInstanceUsages;
const DeleteDDoSSpeedLimitConfigResponse = models.DeleteDDoSSpeedLimitConfigResponse;
const DeleteCCThresholdPolicyRequest = models.DeleteCCThresholdPolicyRequest;
const DescribeListListenerRequest = models.DescribeListListenerRequest;
const L7RuleEntry = models.L7RuleEntry;
const ModifyCCThresholdPolicyResponse = models.ModifyCCThresholdPolicyResponse;
const CreateWaterPrintKeyResponse = models.CreateWaterPrintKeyResponse;
const DeleteCCPrecisionPolicyResponse = models.DeleteCCPrecisionPolicyResponse;
const DescribeDDoSTrendResponse = models.DescribeDDoSTrendResponse;
const DescribeListBlackWhiteIpListRequest = models.DescribeListBlackWhiteIpListRequest;
const CreateCCReqLimitPolicyRequest = models.CreateCCReqLimitPolicyRequest;
const ModifyDDoSSpeedLimitConfigResponse = models.ModifyDDoSSpeedLimitConfigResponse;
const SchedulingDomainInfo = models.SchedulingDomainInfo;
const DescribeDefaultAlarmThresholdRequest = models.DescribeDefaultAlarmThresholdRequest;
const WaterPrintKey = models.WaterPrintKey;
const ModifyCCLevelPolicyRequest = models.ModifyCCLevelPolicyRequest;
const DescribeCcGeoIPBlockConfigListRequest = models.DescribeCcGeoIPBlockConfigListRequest;
const PacketFilterRelation = models.PacketFilterRelation;
const RuleInstanceRelation = models.RuleInstanceRelation;
const CreatePacketFilterConfigRequest = models.CreatePacketFilterConfigRequest;
const DescribeCCTrendRequest = models.DescribeCCTrendRequest;


/**
 * antiddos client
 * @class
 */
class AntiddosClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("antiddos.tencentcloudapi.com", "2020-03-09", credential, region, profile);
    }
    
    /**
     * 修改CC频率限制策略
     * @param {ModifyCCReqLimitPolicyRequest} req
     * @param {function(string, ModifyCCReqLimitPolicyResponse):void} cb
     * @public
     */
    ModifyCCReqLimitPolicy(req, cb) {
        let resp = new ModifyCCReqLimitPolicyResponse();
        this.request("ModifyCCReqLimitPolicy", req, resp, cb);
    }

    /**
     * 修改DDoS黑白名单列表
     * @param {ModifyDDoSBlackWhiteIpListRequest} req
     * @param {function(string, ModifyDDoSBlackWhiteIpListResponse):void} cb
     * @public
     */
    ModifyDDoSBlackWhiteIpList(req, cb) {
        let resp = new ModifyDDoSBlackWhiteIpListResponse();
        this.request("ModifyDDoSBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 查询与证书ID对于域名匹配的七层规则
     * @param {DescribeL7RulesBySSLCertIdRequest} req
     * @param {function(string, DescribeL7RulesBySSLCertIdResponse):void} cb
     * @public
     */
    DescribeL7RulesBySSLCertId(req, cb) {
        let resp = new DescribeL7RulesBySSLCertIdResponse();
        this.request("DescribeL7RulesBySSLCertId", req, resp, cb);
    }

    /**
     * 获取单IP告警阈值配置列表
     * @param {DescribeListIPAlarmConfigRequest} req
     * @param {function(string, DescribeListIPAlarmConfigResponse):void} cb
     * @public
     */
    DescribeListIPAlarmConfig(req, cb) {
        let resp = new DescribeListIPAlarmConfigResponse();
        this.request("DescribeListIPAlarmConfig", req, resp, cb);
    }

    /**
     * 获取单IP默认告警阈值配置
     * @param {DescribeDefaultAlarmThresholdRequest} req
     * @param {function(string, DescribeDefaultAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeDefaultAlarmThreshold(req, cb) {
        let resp = new DescribeDefaultAlarmThresholdResponse();
        this.request("DescribeDefaultAlarmThreshold", req, resp, cb);
    }

    /**
     * 获取DDoS连接抑制配置列表
     * @param {DescribeDDoSConnectLimitListRequest} req
     * @param {function(string, DescribeDDoSConnectLimitListResponse):void} cb
     * @public
     */
    DescribeDDoSConnectLimitList(req, cb) {
        let resp = new DescribeDDoSConnectLimitListResponse();
        this.request("DescribeDDoSConnectLimitList", req, resp, cb);
    }

    /**
     * 获取CC四层黑白名单列表
     * @param {DescribeCcBlackWhiteIpListRequest} req
     * @param {function(string, DescribeCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeCcBlackWhiteIpList(req, cb) {
        let resp = new DescribeCcBlackWhiteIpListResponse();
        this.request("DescribeCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 获取DDoS防护的IP黑白名单
     * @param {DescribeBlackWhiteIpListRequest} req
     * @param {function(string, DescribeBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeBlackWhiteIpList(req, cb) {
        let resp = new DescribeBlackWhiteIpListResponse();
        this.request("DescribeBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 获取CC防护等级列表
     * @param {DescribeCCLevelListRequest} req
     * @param {function(string, DescribeCCLevelListResponse):void} cb
     * @public
     */
    DescribeCCLevelList(req, cb) {
        let resp = new DescribeCCLevelListResponse();
        this.request("DescribeCCLevelList", req, resp, cb);
    }

    /**
     * 新增CC精准防护策略
     * @param {CreateCCPrecisionPolicyRequest} req
     * @param {function(string, CreateCCPrecisionPolicyResponse):void} cb
     * @public
     */
    CreateCCPrecisionPolicy(req, cb) {
        let resp = new CreateCCPrecisionPolicyResponse();
        this.request("CreateCCPrecisionPolicy", req, resp, cb);
    }

    /**
     * 获取CC清洗阈值列表
     * @param {DescribeCCThresholdListRequest} req
     * @param {function(string, DescribeCCThresholdListResponse):void} cb
     * @public
     */
    DescribeCCThresholdList(req, cb) {
        let resp = new DescribeCCThresholdListResponse();
        this.request("DescribeCCThresholdList", req, resp, cb);
    }

    /**
     * 设置单IP告警阈值配置
     * @param {CreateIPAlarmThresholdConfigRequest} req
     * @param {function(string, CreateIPAlarmThresholdConfigResponse):void} cb
     * @public
     */
    CreateIPAlarmThresholdConfig(req, cb) {
        let resp = new CreateIPAlarmThresholdConfigResponse();
        this.request("CreateIPAlarmThresholdConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的特征过滤规则列表
     * @param {DescribeListPacketFilterConfigRequest} req
     * @param {function(string, DescribeListPacketFilterConfigResponse):void} cb
     * @public
     */
    DescribeListPacketFilterConfig(req, cb) {
        let resp = new DescribeListPacketFilterConfigResponse();
        this.request("DescribeListPacketFilterConfig", req, resp, cb);
    }

    /**
     * 添加DDoS防护的端口acl策略
     * @param {CreatePortAclConfigRequest} req
     * @param {function(string, CreatePortAclConfigResponse):void} cb
     * @public
     */
    CreatePortAclConfig(req, cb) {
        let resp = new CreatePortAclConfigResponse();
        this.request("CreatePortAclConfig", req, resp, cb);
    }

    /**
     * 获取基础防护攻击状态
     * @param {DescribeBasicDeviceStatusRequest} req
     * @param {function(string, DescribeBasicDeviceStatusResponse):void} cb
     * @public
     */
    DescribeBasicDeviceStatus(req, cb) {
        let resp = new DescribeBasicDeviceStatusResponse();
        this.request("DescribeBasicDeviceStatus", req, resp, cb);
    }

    /**
     * 本接口 (AssociateDDoSEipLoadBalancer) 用于将高防弹性公网IP绑定到负载均衡指定内网 IP 上。
     * @param {AssociateDDoSEipLoadBalancerRequest} req
     * @param {function(string, AssociateDDoSEipLoadBalancerResponse):void} cb
     * @public
     */
    AssociateDDoSEipLoadBalancer(req, cb) {
        let resp = new AssociateDDoSEipLoadBalancerResponse();
        this.request("AssociateDDoSEipLoadBalancer", req, resp, cb);
    }

    /**
     * 删除DDoS防护的水印防护配置
     * @param {DeleteWaterPrintConfigRequest} req
     * @param {function(string, DeleteWaterPrintConfigResponse):void} cb
     * @public
     */
    DeleteWaterPrintConfig(req, cb) {
        let resp = new DeleteWaterPrintConfigResponse();
        this.request("DeleteWaterPrintConfig", req, resp, cb);
    }

    /**
     * 新增CC频率限制策略
     * @param {CreateCCReqLimitPolicyRequest} req
     * @param {function(string, CreateCCReqLimitPolicyResponse):void} cb
     * @public
     */
    CreateCCReqLimitPolicy(req, cb) {
        let resp = new CreateCCReqLimitPolicyResponse();
        this.request("CreateCCReqLimitPolicy", req, resp, cb);
    }

    /**
     * 开启或关闭DDoS防护的水印防护配置
     * @param {SwitchWaterPrintConfigRequest} req
     * @param {function(string, SwitchWaterPrintConfigResponse):void} cb
     * @public
     */
    SwitchWaterPrintConfig(req, cb) {
        let resp = new SwitchWaterPrintConfigResponse();
        this.request("SwitchWaterPrintConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的协议封禁配置列表
     * @param {DescribeListProtocolBlockConfigRequest} req
     * @param {function(string, DescribeListProtocolBlockConfigResponse):void} cb
     * @public
     */
    DescribeListProtocolBlockConfig(req, cb) {
        let resp = new DescribeListProtocolBlockConfigResponse();
        this.request("DescribeListProtocolBlockConfig", req, resp, cb);
    }

    /**
     * 创建一个域名，可用于在封堵时调度切换IP
     * @param {CreateSchedulingDomainRequest} req
     * @param {function(string, CreateSchedulingDomainResponse):void} cb
     * @public
     */
    CreateSchedulingDomain(req, cb) {
        let resp = new CreateSchedulingDomainResponse();
        this.request("CreateSchedulingDomain", req, resp, cb);
    }

    /**
     * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
     * @param {DisassociateDDoSEipAddressRequest} req
     * @param {function(string, DisassociateDDoSEipAddressResponse):void} cb
     * @public
     */
    DisassociateDDoSEipAddress(req, cb) {
        let resp = new DisassociateDDoSEipAddressResponse();
        this.request("DisassociateDDoSEipAddress", req, resp, cb);
    }

    /**
     * 设置DDoS防护的协议封禁配置
     * @param {CreateProtocolBlockConfigRequest} req
     * @param {function(string, CreateProtocolBlockConfigResponse):void} cb
     * @public
     */
    CreateProtocolBlockConfig(req, cb) {
        let resp = new CreateProtocolBlockConfigResponse();
        this.request("CreateProtocolBlockConfig", req, resp, cb);
    }

    /**
     * 删除DDoS防护的IP网段黑白名单
     * @param {DeleteDDoSBlackWhiteIpListRequest} req
     * @param {function(string, DeleteDDoSBlackWhiteIpListResponse):void} cb
     * @public
     */
    DeleteDDoSBlackWhiteIpList(req, cb) {
        let resp = new DeleteDDoSBlackWhiteIpListResponse();
        this.request("DeleteDDoSBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 批量配置L7转发规则的证书供SSL测调用
     * @param {CreateL7RuleCertsRequest} req
     * @param {function(string, CreateL7RuleCertsResponse):void} cb
     * @public
     */
    CreateL7RuleCerts(req, cb) {
        let resp = new CreateL7RuleCertsResponse();
        this.request("CreateL7RuleCerts", req, resp, cb);
    }

    /**
     * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
     * @param {AssociateDDoSEipAddressRequest} req
     * @param {function(string, AssociateDDoSEipAddressResponse):void} cb
     * @public
     */
    AssociateDDoSEipAddress(req, cb) {
        let resp = new AssociateDDoSEipAddressResponse();
        this.request("AssociateDDoSEipAddress", req, resp, cb);
    }

    /**
     * 修改智能解析域名名称
     * @param {ModifyDomainUsrNameRequest} req
     * @param {function(string, ModifyDomainUsrNameResponse):void} cb
     * @public
     */
    ModifyDomainUsrName(req, cb) {
        let resp = new ModifyDomainUsrNameResponse();
        this.request("ModifyDomainUsrName", req, resp, cb);
    }

    /**
     * 获取防护概览DDoS攻击流量带宽和攻击包速率数据
     * @param {DescribeOverviewDDoSTrendRequest} req
     * @param {function(string, DescribeOverviewDDoSTrendResponse):void} cb
     * @public
     */
    DescribeOverviewDDoSTrend(req, cb) {
        let resp = new DescribeOverviewDDoSTrendResponse();
        this.request("DescribeOverviewDDoSTrend", req, resp, cb);
    }

    /**
     * 删除DDoS防护的访问限速配置
     * @param {DeleteDDoSSpeedLimitConfigRequest} req
     * @param {function(string, DeleteDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    DeleteDDoSSpeedLimitConfig(req, cb) {
        let resp = new DeleteDDoSSpeedLimitConfigResponse();
        this.request("DeleteDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * 修改CC防护等级
     * @param {ModifyCCLevelPolicyRequest} req
     * @param {function(string, ModifyCCLevelPolicyResponse):void} cb
     * @public
     */
    ModifyCCLevelPolicy(req, cb) {
        let resp = new ModifyCCLevelPolicyResponse();
        this.request("ModifyCCLevelPolicy", req, resp, cb);
    }

    /**
     * 获取高防IP资产实例列表

     * @param {DescribeListBGPIPInstancesRequest} req
     * @param {function(string, DescribeListBGPIPInstancesResponse):void} cb
     * @public
     */
    DescribeListBGPIPInstances(req, cb) {
        let resp = new DescribeListBGPIPInstancesResponse();
        this.request("DescribeListBGPIPInstances", req, resp, cb);
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
     * 获取防护概览总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     * @param {DescribeOverviewCCTrendRequest} req
     * @param {function(string, DescribeOverviewCCTrendResponse):void} cb
     * @public
     */
    DescribeOverviewCCTrend(req, cb) {
        let resp = new DescribeOverviewCCTrendResponse();
        this.request("DescribeOverviewCCTrend", req, resp, cb);
    }

    /**
     * 获取CC分级策略
     * @param {DescribeCCLevelPolicyRequest} req
     * @param {function(string, DescribeCCLevelPolicyResponse):void} cb
     * @public
     */
    DescribeCCLevelPolicy(req, cb) {
        let resp = new DescribeCCLevelPolicyResponse();
        this.request("DescribeCCLevelPolicy", req, resp, cb);
    }

    /**
     * 获取智能调度域名列表
     * @param {DescribeListSchedulingDomainRequest} req
     * @param {function(string, DescribeListSchedulingDomainResponse):void} cb
     * @public
     */
    DescribeListSchedulingDomain(req, cb) {
        let resp = new DescribeListSchedulingDomainResponse();
        this.request("DescribeListSchedulingDomain", req, resp, cb);
    }

    /**
     * 添加DDoS防护的区域封禁配置
     * @param {CreateDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, CreateDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    CreateDDoSGeoIPBlockConfig(req, cb) {
        let resp = new CreateDDoSGeoIPBlockConfigResponse();
        this.request("CreateDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * 获取CC频率限制策略列表
     * @param {DescribeCCReqLimitPolicyListRequest} req
     * @param {function(string, DescribeCCReqLimitPolicyListResponse):void} cb
     * @public
     */
    DescribeCCReqLimitPolicyList(req, cb) {
        let resp = new DescribeCCReqLimitPolicyListResponse();
        this.request("DescribeCCReqLimitPolicyList", req, resp, cb);
    }

    /**
     * 删除CC分级策略
     * @param {DeleteCCLevelPolicyRequest} req
     * @param {function(string, DeleteCCLevelPolicyResponse):void} cb
     * @public
     */
    DeleteCCLevelPolicy(req, cb) {
        let resp = new DeleteCCLevelPolicyResponse();
        this.request("DeleteCCLevelPolicy", req, resp, cb);
    }

    /**
     * 拉取防护概览指标
     * @param {DescribeOverviewIndexRequest} req
     * @param {function(string, DescribeOverviewIndexResponse):void} cb
     * @public
     */
    DescribeOverviewIndex(req, cb) {
        let resp = new DescribeOverviewIndexResponse();
        this.request("DescribeOverviewIndex", req, resp, cb);
    }

    /**
     * 添加DDoS防护的访问限速配置
     * @param {CreateDDoSSpeedLimitConfigRequest} req
     * @param {function(string, CreateDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    CreateDDoSSpeedLimitConfig(req, cb) {
        let resp = new CreateDDoSSpeedLimitConfigResponse();
        this.request("CreateDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * 获取高防包资产实例列表

     * @param {DescribeListBGPInstancesRequest} req
     * @param {function(string, DescribeListBGPInstancesResponse):void} cb
     * @public
     */
    DescribeListBGPInstances(req, cb) {
        let resp = new DescribeListBGPInstancesResponse();
        this.request("DescribeListBGPInstances", req, resp, cb);
    }

    /**
     * 删除DDoS防护的IP黑白名单
     * @param {DeleteBlackWhiteIpListRequest} req
     * @param {function(string, DeleteBlackWhiteIpListResponse):void} cb
     * @public
     */
    DeleteBlackWhiteIpList(req, cb) {
        let resp = new DeleteBlackWhiteIpListResponse();
        this.request("DeleteBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 删除DDoS防护的端口acl策略
     * @param {DeletePortAclConfigRequest} req
     * @param {function(string, DeletePortAclConfigResponse):void} cb
     * @public
     */
    DeletePortAclConfig(req, cb) {
        let resp = new DeletePortAclConfigResponse();
        this.request("DeletePortAclConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的水印防护配置列表
     * @param {DescribeListWaterPrintConfigRequest} req
     * @param {function(string, DescribeListWaterPrintConfigResponse):void} cb
     * @public
     */
    DescribeListWaterPrintConfig(req, cb) {
        let resp = new DescribeListWaterPrintConfigResponse();
        this.request("DescribeListWaterPrintConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的区域封禁配置列表
     * @param {DescribeListDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, DescribeListDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DescribeListDDoSGeoIPBlockConfig(req, cb) {
        let resp = new DescribeListDDoSGeoIPBlockConfigResponse();
        this.request("DescribeListDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * 删除CC防护的区域封禁配置
     * @param {DeleteCcGeoIPBlockConfigRequest} req
     * @param {function(string, DeleteCcGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DeleteCcGeoIPBlockConfig(req, cb) {
        let resp = new DeleteCcGeoIPBlockConfigResponse();
        this.request("DeleteCcGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的端口acl策略列表
     * @param {DescribeListPortAclListRequest} req
     * @param {function(string, DescribeListPortAclListResponse):void} cb
     * @public
     */
    DescribeListPortAclList(req, cb) {
        let resp = new DescribeListPortAclListResponse();
        this.request("DescribeListPortAclList", req, resp, cb);
    }

    /**
     * 获取转发监听器列表
     * @param {DescribeListListenerRequest} req
     * @param {function(string, DescribeListListenerResponse):void} cb
     * @public
     */
    DescribeListListener(req, cb) {
        let resp = new DescribeListListenerResponse();
        this.request("DescribeListListener", req, resp, cb);
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
     * 修改DDoS防护的特征过滤规则
     * @param {ModifyPacketFilterConfigRequest} req
     * @param {function(string, ModifyPacketFilterConfigResponse):void} cb
     * @public
     */
    ModifyPacketFilterConfig(req, cb) {
        let resp = new ModifyPacketFilterConfigResponse();
        this.request("ModifyPacketFilterConfig", req, resp, cb);
    }

    /**
     * 添加DDoS防护的特征过滤规则
     * @param {CreatePacketFilterConfigRequest} req
     * @param {function(string, CreatePacketFilterConfigResponse):void} cb
     * @public
     */
    CreatePacketFilterConfig(req, cb) {
        let resp = new CreatePacketFilterConfigResponse();
        this.request("CreatePacketFilterConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的IP黑白名单列表
     * @param {DescribeListBlackWhiteIpListRequest} req
     * @param {function(string, DescribeListBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeListBlackWhiteIpList(req, cb) {
        let resp = new DescribeListBlackWhiteIpListResponse();
        this.request("DescribeListBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 修改CC四层黑白名单
     * @param {ModifyCcBlackWhiteIpListRequest} req
     * @param {function(string, ModifyCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    ModifyCcBlackWhiteIpList(req, cb) {
        let resp = new ModifyCcBlackWhiteIpListResponse();
        this.request("ModifyCcBlackWhiteIpList", req, resp, cb);
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
     * 获取防护概览的ddos攻击事件
     * @param {DescribeOverviewDDoSEventListRequest} req
     * @param {function(string, DescribeOverviewDDoSEventListResponse):void} cb
     * @public
     */
    DescribeOverviewDDoSEventList(req, cb) {
        let resp = new DescribeOverviewDDoSEventListResponse();
        this.request("DescribeOverviewDDoSEventList", req, resp, cb);
    }

    /**
     * 设置单IP默认告警阈值配置
     * @param {CreateDefaultAlarmThresholdRequest} req
     * @param {function(string, CreateDefaultAlarmThresholdResponse):void} cb
     * @public
     */
    CreateDefaultAlarmThreshold(req, cb) {
        let resp = new CreateDefaultAlarmThresholdResponse();
        this.request("CreateDefaultAlarmThreshold", req, resp, cb);
    }

    /**
     * 添加DDoS防护的水印防护配置
     * @param {CreateWaterPrintConfigRequest} req
     * @param {function(string, CreateWaterPrintConfigResponse):void} cb
     * @public
     */
    CreateWaterPrintConfig(req, cb) {
        let resp = new CreateWaterPrintConfigResponse();
        this.request("CreateWaterPrintConfig", req, resp, cb);
    }

    /**
     * 获取DDoS防护的AI防护开关列表
     * @param {DescribeListDDoSAIRequest} req
     * @param {function(string, DescribeListDDoSAIResponse):void} cb
     * @public
     */
    DescribeListDDoSAI(req, cb) {
        let resp = new DescribeListDDoSAIResponse();
        this.request("DescribeListDDoSAI", req, resp, cb);
    }

    /**
     * 获取DDoS防护的访问限速配置列表
     * @param {DescribeListDDoSSpeedLimitConfigRequest} req
     * @param {function(string, DescribeListDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    DescribeListDDoSSpeedLimitConfig(req, cb) {
        let resp = new DescribeListDDoSSpeedLimitConfigResponse();
        this.request("DescribeListDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * 拉取防护概览攻击趋势
     * @param {DescribeOverviewAttackTrendRequest} req
     * @param {function(string, DescribeOverviewAttackTrendResponse):void} cb
     * @public
     */
    DescribeOverviewAttackTrend(req, cb) {
        let resp = new DescribeOverviewAttackTrendResponse();
        this.request("DescribeOverviewAttackTrend", req, resp, cb);
    }

    /**
     * 添加DDoS防护的IP黑白名单
     * @param {CreateBlackWhiteIpListRequest} req
     * @param {function(string, CreateBlackWhiteIpListResponse):void} cb
     * @public
     */
    CreateBlackWhiteIpList(req, cb) {
        let resp = new CreateBlackWhiteIpListResponse();
        this.request("CreateBlackWhiteIpList", req, resp, cb);
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
     * 修改边界防护L7转发规则
     * @param {ModifyL7RulesEdgeRequest} req
     * @param {function(string, ModifyL7RulesEdgeResponse):void} cb
     * @public
     */
    ModifyL7RulesEdge(req, cb) {
        let resp = new ModifyL7RulesEdgeResponse();
        this.request("ModifyL7RulesEdge", req, resp, cb);
    }

    /**
     * 设置DDoS防护的AI防护开关
     * @param {CreateDDoSAIRequest} req
     * @param {function(string, CreateDDoSAIResponse):void} cb
     * @public
     */
    CreateDDoSAI(req, cb) {
        let resp = new CreateDDoSAIResponse();
        this.request("CreateDDoSAI", req, resp, cb);
    }

    /**
     * 删除DDoS防护的特征过滤规则
     * @param {DeletePacketFilterConfigRequest} req
     * @param {function(string, DeletePacketFilterConfigResponse):void} cb
     * @public
     */
    DeletePacketFilterConfig(req, cb) {
        let resp = new DeletePacketFilterConfigResponse();
        this.request("DeletePacketFilterConfig", req, resp, cb);
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
     * 批量添加DDoS防护的端口acl策略
     * @param {CreatePortAclConfigListRequest} req
     * @param {function(string, CreatePortAclConfigListResponse):void} cb
     * @public
     */
    CreatePortAclConfigList(req, cb) {
        let resp = new CreatePortAclConfigListResponse();
        this.request("CreatePortAclConfigList", req, resp, cb);
    }

    /**
     * 新建cc防护的地域封禁配置
     * @param {CreateCcGeoIPBlockConfigRequest} req
     * @param {function(string, CreateCcGeoIPBlockConfigResponse):void} cb
     * @public
     */
    CreateCcGeoIPBlockConfig(req, cb) {
        let resp = new CreateCcGeoIPBlockConfigResponse();
        this.request("CreateCcGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * 新建CC四层黑白名单
     * @param {CreateCcBlackWhiteIpListRequest} req
     * @param {function(string, CreateCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    CreateCcBlackWhiteIpList(req, cb) {
        let resp = new CreateCcBlackWhiteIpListResponse();
        this.request("CreateCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 修改DDoS防护的访问限速配置
     * @param {ModifyDDoSSpeedLimitConfigRequest} req
     * @param {function(string, ModifyDDoSSpeedLimitConfigResponse):void} cb
     * @public
     */
    ModifyDDoSSpeedLimitConfig(req, cb) {
        let resp = new ModifyDDoSSpeedLimitConfigResponse();
        this.request("ModifyDDoSSpeedLimitConfig", req, resp, cb);
    }

    /**
     * 获取业务流量曲线
     * @param {DescribeBizTrendRequest} req
     * @param {function(string, DescribeBizTrendResponse):void} cb
     * @public
     */
    DescribeBizTrend(req, cb) {
        let resp = new DescribeBizTrendResponse();
        this.request("DescribeBizTrend", req, resp, cb);
    }

    /**
     * 删除DDoS防护的区域封禁配置
     * @param {DeleteDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, DeleteDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    DeleteDDoSGeoIPBlockConfig(req, cb) {
        let resp = new DeleteDDoSGeoIPBlockConfigResponse();
        this.request("DeleteDDoSGeoIPBlockConfig", req, resp, cb);
    }

    /**
     * 获取CC精准防护列表
     * @param {DescribeCCPrecisionPlyListRequest} req
     * @param {function(string, DescribeCCPrecisionPlyListResponse):void} cb
     * @public
     */
    DescribeCCPrecisionPlyList(req, cb) {
        let resp = new DescribeCCPrecisionPlyListResponse();
        this.request("DescribeCCPrecisionPlyList", req, resp, cb);
    }

    /**
     * 修改DDoS防护的端口acl策略
     * @param {ModifyPortAclConfigRequest} req
     * @param {function(string, ModifyPortAclConfigResponse):void} cb
     * @public
     */
    ModifyPortAclConfig(req, cb) {
        let resp = new ModifyPortAclConfigResponse();
        this.request("ModifyPortAclConfig", req, resp, cb);
    }

    /**
     * 修改CC清洗阈值
     * @param {ModifyCCThresholdPolicyRequest} req
     * @param {function(string, ModifyCCThresholdPolicyResponse):void} cb
     * @public
     */
    ModifyCCThresholdPolicy(req, cb) {
        let resp = new ModifyCCThresholdPolicyResponse();
        this.request("ModifyCCThresholdPolicy", req, resp, cb);
    }

    /**
     * 删除CC清洗阈值策略
     * @param {DeleteCCThresholdPolicyRequest} req
     * @param {function(string, DeleteCCThresholdPolicyResponse):void} cb
     * @public
     */
    DeleteCCThresholdPolicy(req, cb) {
        let resp = new DeleteCCThresholdPolicyResponse();
        this.request("DeleteCCThresholdPolicy", req, resp, cb);
    }

    /**
     * 删除DDoS防护的水印防护密钥
     * @param {DeleteWaterPrintKeyRequest} req
     * @param {function(string, DeleteWaterPrintKeyResponse):void} cb
     * @public
     */
    DeleteWaterPrintKey(req, cb) {
        let resp = new DeleteWaterPrintKeyResponse();
        this.request("DeleteWaterPrintKey", req, resp, cb);
    }

    /**
     * 添加DDoS防护的IP网段黑白名单
     * @param {CreateDDoSBlackWhiteIpListRequest} req
     * @param {function(string, CreateDDoSBlackWhiteIpListResponse):void} cb
     * @public
     */
    CreateDDoSBlackWhiteIpList(req, cb) {
        let resp = new CreateDDoSBlackWhiteIpListResponse();
        this.request("CreateDDoSBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
     * @param {DescribeCCTrendRequest} req
     * @param {function(string, DescribeCCTrendResponse):void} cb
     * @public
     */
    DescribeCCTrend(req, cb) {
        let resp = new DescribeCCTrendResponse();
        this.request("DescribeCCTrend", req, resp, cb);
    }

    /**
     * 删除CC四层黑白名单
     * @param {DeleteCcBlackWhiteIpListRequest} req
     * @param {function(string, DeleteCcBlackWhiteIpListResponse):void} cb
     * @public
     */
    DeleteCcBlackWhiteIpList(req, cb) {
        let resp = new DeleteCcBlackWhiteIpListResponse();
        this.request("DeleteCcBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
     * @param {DescribeListProtectThresholdConfigRequest} req
     * @param {function(string, DescribeListProtectThresholdConfigResponse):void} cb
     * @public
     */
    DescribeListProtectThresholdConfig(req, cb) {
        let resp = new DescribeListProtectThresholdConfigResponse();
        this.request("DescribeListProtectThresholdConfig", req, resp, cb);
    }

    /**
     * 删除CC精准防护策略
     * @param {DeleteCCPrecisionPolicyRequest} req
     * @param {function(string, DeleteCCPrecisionPolicyResponse):void} cb
     * @public
     */
    DeleteCCPrecisionPolicy(req, cb) {
        let resp = new DeleteCCPrecisionPolicyResponse();
        this.request("DeleteCCPrecisionPolicy", req, resp, cb);
    }

    /**
     * 获取DDoS防护的IP网段黑白名单
     * @param {DescribeDDoSBlackWhiteIpListRequest} req
     * @param {function(string, DescribeDDoSBlackWhiteIpListResponse):void} cb
     * @public
     */
    DescribeDDoSBlackWhiteIpList(req, cb) {
        let resp = new DescribeDDoSBlackWhiteIpListResponse();
        this.request("DescribeDDoSBlackWhiteIpList", req, resp, cb);
    }

    /**
     * 配置DDoS连接抑制选项
     * @param {CreateDDoSConnectLimitRequest} req
     * @param {function(string, CreateDDoSConnectLimitResponse):void} cb
     * @public
     */
    CreateDDoSConnectLimit(req, cb) {
        let resp = new CreateDDoSConnectLimitResponse();
        this.request("CreateDDoSConnectLimit", req, resp, cb);
    }

    /**
     * 修改CC精准防护策略
     * @param {ModifyCCPrecisionPolicyRequest} req
     * @param {function(string, ModifyCCPrecisionPolicyResponse):void} cb
     * @public
     */
    ModifyCCPrecisionPolicy(req, cb) {
        let resp = new ModifyCCPrecisionPolicyResponse();
        this.request("ModifyCCPrecisionPolicy", req, resp, cb);
    }

    /**
     * 获取CC防护的区域封禁配置列表
     * @param {DescribeCcGeoIPBlockConfigListRequest} req
     * @param {function(string, DescribeCcGeoIPBlockConfigListResponse):void} cb
     * @public
     */
    DescribeCcGeoIPBlockConfigList(req, cb) {
        let resp = new DescribeCcGeoIPBlockConfigListResponse();
        this.request("DescribeCcGeoIPBlockConfigList", req, resp, cb);
    }

    /**
     * 添加DDoS防护的水印防护密钥
     * @param {CreateWaterPrintKeyRequest} req
     * @param {function(string, CreateWaterPrintKeyResponse):void} cb
     * @public
     */
    CreateWaterPrintKey(req, cb) {
        let resp = new CreateWaterPrintKeyResponse();
        this.request("CreateWaterPrintKey", req, resp, cb);
    }

    /**
     * 删除CC频率限制策略
     * @param {DeleteCCRequestLimitPolicyRequest} req
     * @param {function(string, DeleteCCRequestLimitPolicyResponse):void} cb
     * @public
     */
    DeleteCCRequestLimitPolicy(req, cb) {
        let resp = new DeleteCCRequestLimitPolicyResponse();
        this.request("DeleteCCRequestLimitPolicy", req, resp, cb);
    }

    /**
     * 修改DDoS防护的区域封禁配置
     * @param {ModifyDDoSGeoIPBlockConfigRequest} req
     * @param {function(string, ModifyDDoSGeoIPBlockConfigResponse):void} cb
     * @public
     */
    ModifyDDoSGeoIPBlockConfig(req, cb) {
        let resp = new ModifyDDoSGeoIPBlockConfigResponse();
        this.request("ModifyDDoSGeoIPBlockConfig", req, resp, cb);
    }


}
module.exports = AntiddosClient;
