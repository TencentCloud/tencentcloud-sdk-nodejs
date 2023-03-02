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
const DescribeNatFwInstanceRequest = models.DescribeNatFwInstanceRequest;
const ModifyNatFwVpcDnsSwitchResponse = models.ModifyNatFwVpcDnsSwitchResponse;
const DescribeNatFwInstanceWithRegionRequest = models.DescribeNatFwInstanceWithRegionRequest;
const ModifyNatAcRuleResponse = models.ModifyNatAcRuleResponse;
const DescribeRuleOverviewResponse = models.DescribeRuleOverviewResponse;
const CfwNatDnatRule = models.CfwNatDnatRule;
const FwCidrInfo = models.FwCidrInfo;
const StaticInfo = models.StaticInfo;
const DescribeNatAcRuleResponse = models.DescribeNatAcRuleResponse;
const ModifyPublicIPSwitchStatusResponse = models.ModifyPublicIPSwitchStatusResponse;
const ModifyNatAcRuleRequest = models.ModifyNatAcRuleRequest;
const ModifyAcRuleResponse = models.ModifyAcRuleResponse;
const ModifyNatSequenceRulesRequest = models.ModifyNatSequenceRulesRequest;
const DescribeTableStatusResponse = models.DescribeTableStatusResponse;
const AddAcRuleRequest = models.AddAcRuleRequest;
const IPDefendStatus = models.IPDefendStatus;
const BlockIgnoreRule = models.BlockIgnoreRule;
const ModifyNatFwVpcDnsSwitchRequest = models.ModifyNatFwVpcDnsSwitchRequest;
const DeleteNatFwInstanceResponse = models.DeleteNatFwInstanceResponse;
const DeleteAllAccessControlRuleRequest = models.DeleteAllAccessControlRuleRequest;
const ModifySecurityGroupRuleRequest = models.ModifySecurityGroupRuleRequest;
const ModifyAllVPCSwitchStatusResponse = models.ModifyAllVPCSwitchStatusResponse;
const VpcZoneData = models.VpcZoneData;
const CreateChooseVpcsRequest = models.CreateChooseVpcsRequest;
const DescribeNatFwVpcDnsLstRequest = models.DescribeNatFwVpcDnsLstRequest;
const DescribeCfwEipsRequest = models.DescribeCfwEipsRequest;
const DescribeTLogInfoResponse = models.DescribeTLogInfoResponse;
const DescribeUnHandleEventTabListRequest = models.DescribeUnHandleEventTabListRequest;
const DescribeAssociatedInstanceListResponse = models.DescribeAssociatedInstanceListResponse;
const AssociatedInstanceInfo = models.AssociatedInstanceInfo;
const ModifyStorageSettingResponse = models.ModifyStorageSettingResponse;
const RemoveAcRuleResponse = models.RemoveAcRuleResponse;
const NatFwInstance = models.NatFwInstance;
const ExpandCfwVerticalRequest = models.ExpandCfwVerticalRequest;
const ModifyAllPublicIPSwitchStatusResponse = models.ModifyAllPublicIPSwitchStatusResponse;
const DeleteVpcInstanceResponse = models.DeleteVpcInstanceResponse;
const ModifyAssetScanRequest = models.ModifyAssetScanRequest;
const ModifyBlockIgnoreListRequest = models.ModifyBlockIgnoreListRequest;
const AddEnterpriseSecurityGroupRulesRequest = models.AddEnterpriseSecurityGroupRulesRequest;
const SecurityGroupRule = models.SecurityGroupRule;
const DeleteSecurityGroupRuleResponse = models.DeleteSecurityGroupRuleResponse;
const ModifySequenceRulesRequest = models.ModifySequenceRulesRequest;
const SequenceData = models.SequenceData;
const CreateNatFwInstanceRequest = models.CreateNatFwInstanceRequest;
const ModifySecurityGroupItemRuleStatusResponse = models.ModifySecurityGroupItemRuleStatusResponse;
const DescribeEnterpriseSecurityGroupRuleResponse = models.DescribeEnterpriseSecurityGroupRuleResponse;
const VpcDnsInfo = models.VpcDnsInfo;
const DescribeEnterpriseSecurityGroupRuleRequest = models.DescribeEnterpriseSecurityGroupRuleRequest;
const ModifyNatFwReSelectResponse = models.ModifyNatFwReSelectResponse;
const DeleteSecurityGroupRuleRequest = models.DeleteSecurityGroupRuleRequest;
const SetNatFwEipRequest = models.SetNatFwEipRequest;
const SetNatFwEipResponse = models.SetNatFwEipResponse;
const AcListsData = models.AcListsData;
const ModifyPublicIPSwitchStatusRequest = models.ModifyPublicIPSwitchStatusRequest;
const CreateNatRuleItem = models.CreateNatRuleItem;
const ModifySecurityGroupItemRuleStatusRequest = models.ModifySecurityGroupItemRuleStatusRequest;
const DescribeSourceAssetRequest = models.DescribeSourceAssetRequest;
const SecurityGroupOrderIndexData = models.SecurityGroupOrderIndexData;
const DescribeSourceAssetResponse = models.DescribeSourceAssetResponse;
const DescribeTLogInfoRequest = models.DescribeTLogInfoRequest;
const DescribeSecurityGroupListResponse = models.DescribeSecurityGroupListResponse;
const AssetZone = models.AssetZone;
const RuleChangeItem = models.RuleChangeItem;
const DescribeTLogIpListRequest = models.DescribeTLogIpListRequest;
const CommonFilter = models.CommonFilter;
const DescribeNatFwInstancesInfoRequest = models.DescribeNatFwInstancesInfoRequest;
const ModifyNatSequenceRulesResponse = models.ModifyNatSequenceRulesResponse;
const DescribeTableStatusRequest = models.DescribeTableStatusRequest;
const DescribeSecurityGroupListRequest = models.DescribeSecurityGroupListRequest;
const ModifyResourceGroupRequest = models.ModifyResourceGroupRequest;
const CreateNatFwInstanceResponse = models.CreateNatFwInstanceResponse;
const NewModeItems = models.NewModeItems;
const DescribeNatFwInfoCountResponse = models.DescribeNatFwInfoCountResponse;
const DescribeDefenseSwitchRequest = models.DescribeDefenseSwitchRequest;
const ModifyEnterpriseSecurityDispatchStatusResponse = models.ModifyEnterpriseSecurityDispatchStatusResponse;
const SecurityGroupListData = models.SecurityGroupListData;
const RemoveNatAcRuleResponse = models.RemoveNatAcRuleResponse;
const CreateNatFwInstanceWithDomainResponse = models.CreateNatFwInstanceWithDomainResponse;
const RemoveAcRuleRequest = models.RemoveAcRuleRequest;
const DatabaseWhiteListRuleData = models.DatabaseWhiteListRuleData;
const RemoveNatAcRuleRequest = models.RemoveNatAcRuleRequest;
const ModifyAllRuleStatusRequest = models.ModifyAllRuleStatusRequest;
const RuleInfoData = models.RuleInfoData;
const DescribeAcListsResponse = models.DescribeAcListsResponse;
const ModifyAllPublicIPSwitchStatusRequest = models.ModifyAllPublicIPSwitchStatusRequest;
const DescribeBlockStaticListResponse = models.DescribeBlockStaticListResponse;
const AddNatAcRuleRequest = models.AddNatAcRuleRequest;
const ModifySecurityGroupSequenceRulesRequest = models.ModifySecurityGroupSequenceRulesRequest;
const CreateDatabaseWhiteListRulesResponse = models.CreateDatabaseWhiteListRulesResponse;
const ScanInfo = models.ScanInfo;
const CreateChooseVpcsResponse = models.CreateChooseVpcsResponse;
const DescribeUnHandleEventTabListResponse = models.DescribeUnHandleEventTabListResponse;
const NatFwFilter = models.NatFwFilter;
const ScanResultInfo = models.ScanResultInfo;
const ModifyRunSyncAssetResponse = models.ModifyRunSyncAssetResponse;
const ModifyEnterpriseSecurityGroupRuleResponse = models.ModifyEnterpriseSecurityGroupRuleResponse;
const ModifySecurityGroupSequenceRulesResponse = models.ModifySecurityGroupSequenceRulesResponse;
const IpStatic = models.IpStatic;
const AddEnterpriseSecurityGroupRulesResponse = models.AddEnterpriseSecurityGroupRulesResponse;
const UnHandleEventDetail = models.UnHandleEventDetail;
const RemoveEnterpriseSecurityGroupRuleRequest = models.RemoveEnterpriseSecurityGroupRuleRequest;
const DeleteResourceGroupRequest = models.DeleteResourceGroupRequest;
const DescribeBlockByIpTimesListRequest = models.DescribeBlockByIpTimesListRequest;
const RemoveEnterpriseSecurityGroupRuleResponse = models.RemoveEnterpriseSecurityGroupRuleResponse;
const ModifyEnterpriseSecurityGroupRuleRequest = models.ModifyEnterpriseSecurityGroupRuleRequest;
const ModifySequenceRulesResponse = models.ModifySequenceRulesResponse;
const DescribeResourceGroupNewResponse = models.DescribeResourceGroupNewResponse;
const DescribeNatFwInstanceWithRegionResponse = models.DescribeNatFwInstanceWithRegionResponse;
const DescribeResourceGroupNewRequest = models.DescribeResourceGroupNewRequest;
const ModifyBlockTopRequest = models.ModifyBlockTopRequest;
const DeleteAcRuleResponse = models.DeleteAcRuleResponse;
const IocListData = models.IocListData;
const InstanceInfo = models.InstanceInfo;
const DescribeIPStatusListRequest = models.DescribeIPStatusListRequest;
const ModifyNatFwSwitchResponse = models.ModifyNatFwSwitchResponse;
const DescribeBlockByIpTimesListResponse = models.DescribeBlockByIpTimesListResponse;
const SetNatFwDnatRuleResponse = models.SetNatFwDnatRuleResponse;
const DescribeRuleOverviewRequest = models.DescribeRuleOverviewRequest;
const DescribeDefenseSwitchResponse = models.DescribeDefenseSwitchResponse;
const DescribeAcListsRequest = models.DescribeAcListsRequest;
const DescribeGuideScanInfoRequest = models.DescribeGuideScanInfoRequest;
const UnHandleEvent = models.UnHandleEvent;
const DescribeAssociatedInstanceListRequest = models.DescribeAssociatedInstanceListRequest;
const DeleteAcRuleRequest = models.DeleteAcRuleRequest;
const DeleteAllAccessControlRuleResponse = models.DeleteAllAccessControlRuleResponse;
const ModifyNatFwSwitchRequest = models.ModifyNatFwSwitchRequest;
const DescribeIPStatusListResponse = models.DescribeIPStatusListResponse;
const CreateDatabaseWhiteListRulesRequest = models.CreateDatabaseWhiteListRulesRequest;
const NatInstanceInfo = models.NatInstanceInfo;
const NatFwEipsInfo = models.NatFwEipsInfo;
const DescribeResourceGroupResponse = models.DescribeResourceGroupResponse;
const DescribeTLogIpListResponse = models.DescribeTLogIpListResponse;
const StopSecurityGroupRuleDispatchResponse = models.StopSecurityGroupRuleDispatchResponse;
const DescribeNatFwInfoCountRequest = models.DescribeNatFwInfoCountRequest;
const AddAcRuleResponse = models.AddAcRuleResponse;
const ModifyNatFwReSelectRequest = models.ModifyNatFwReSelectRequest;
const SetNatFwDnatRuleRequest = models.SetNatFwDnatRuleRequest;
const ModifyAllVPCSwitchStatusRequest = models.ModifyAllVPCSwitchStatusRequest;
const SecurityGroupBothWayInfo = models.SecurityGroupBothWayInfo;
const ModifyAllRuleStatusResponse = models.ModifyAllRuleStatusResponse;
const StopSecurityGroupRuleDispatchRequest = models.StopSecurityGroupRuleDispatchRequest;
const DescribeBlockIgnoreListRequest = models.DescribeBlockIgnoreListRequest;
const ModifyBlockTopResponse = models.ModifyBlockTopResponse;
const DeleteNatFwInstanceRequest = models.DeleteNatFwInstanceRequest;
const ModifyStorageSettingRequest = models.ModifyStorageSettingRequest;
const DescribeNatFwVpcDnsLstResponse = models.DescribeNatFwVpcDnsLstResponse;
const DescAcItem = models.DescAcItem;
const CreateSecurityGroupRulesResponse = models.CreateSecurityGroupRulesResponse;
const ExpandCfwVerticalResponse = models.ExpandCfwVerticalResponse;
const DescribeNatAcRuleRequest = models.DescribeNatAcRuleRequest;
const TLogInfo = models.TLogInfo;
const CreateSecurityGroupRulesRequest = models.CreateSecurityGroupRulesRequest;
const DeleteVpcInstanceRequest = models.DeleteVpcInstanceRequest;
const SwitchListsData = models.SwitchListsData;
const CreateNatFwInstanceWithDomainRequest = models.CreateNatFwInstanceWithDomainRequest;
const DescribeSwitchListsResponse = models.DescribeSwitchListsResponse;
const DescribeCfwEipsResponse = models.DescribeCfwEipsResponse;
const ModifyResourceGroupResponse = models.ModifyResourceGroupResponse;
const DeleteResourceGroupResponse = models.DeleteResourceGroupResponse;
const DescribeSwitchListsRequest = models.DescribeSwitchListsRequest;
const DescribeBlockStaticListRequest = models.DescribeBlockStaticListRequest;
const FwVpcCidr = models.FwVpcCidr;
const ModifyRunSyncAssetRequest = models.ModifyRunSyncAssetRequest;
const CreateAcRulesResponse = models.CreateAcRulesResponse;
const ModifyAssetScanResponse = models.ModifyAssetScanResponse;
const ModifyAcRuleRequest = models.ModifyAcRuleRequest;
const DescribeNatFwInstancesInfoResponse = models.DescribeNatFwInstancesInfoResponse;
const AddNatAcRuleResponse = models.AddNatAcRuleResponse;
const ModifyBlockIgnoreListResponse = models.ModifyBlockIgnoreListResponse;
const DescribeNatFwInstanceResponse = models.DescribeNatFwInstanceResponse;
const ModifySecurityGroupRuleResponse = models.ModifySecurityGroupRuleResponse;
const DnsVpcSwitch = models.DnsVpcSwitch;
const DescribeResourceGroupRequest = models.DescribeResourceGroupRequest;
const CreateAcRulesRequest = models.CreateAcRulesRequest;
const ModifyEnterpriseSecurityDispatchStatusRequest = models.ModifyEnterpriseSecurityDispatchStatusRequest;
const DescribeBlockIgnoreListResponse = models.DescribeBlockIgnoreListResponse;
const ModifyTableStatusRequest = models.ModifyTableStatusRequest;
const ModifyTableStatusResponse = models.ModifyTableStatusResponse;
const DescribeGuideScanInfoResponse = models.DescribeGuideScanInfoResponse;


/**
 * cfw client
 * @class
 */
class CfwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cfw.tencentcloudapi.com", "2019-09-04", credential, region, profile);
    }
    
    /**
     * 获取当前用户接入nat防火墙的所有子网数及natfw实例个数
     * @param {DescribeNatFwInfoCountRequest} req
     * @param {function(string, DescribeNatFwInfoCountResponse):void} cb
     * @public
     */
    DescribeNatFwInfoCount(req, cb) {
        let resp = new DescribeNatFwInfoCountResponse();
        this.request("DescribeNatFwInfoCount", req, resp, cb);
    }

    /**
     * 中止安全组规则下发
     * @param {StopSecurityGroupRuleDispatchRequest} req
     * @param {function(string, StopSecurityGroupRuleDispatchResponse):void} cb
     * @public
     */
    StopSecurityGroupRuleDispatch(req, cb) {
        let resp = new StopSecurityGroupRuleDispatchResponse();
        this.request("StopSecurityGroupRuleDispatch", req, resp, cb);
    }

    /**
     * 修改规则表状态
     * @param {ModifyTableStatusRequest} req
     * @param {function(string, ModifyTableStatusResponse):void} cb
     * @public
     */
    ModifyTableStatus(req, cb) {
        let resp = new ModifyTableStatusResponse();
        this.request("ModifyTableStatus", req, resp, cb);
    }

    /**
     * 展示当前natfw 实例对应的vpc dns开关
     * @param {DescribeNatFwVpcDnsLstRequest} req
     * @param {function(string, DescribeNatFwVpcDnsLstResponse):void} cb
     * @public
     */
    DescribeNatFwVpcDnsLst(req, cb) {
        let resp = new DescribeNatFwVpcDnsLstResponse();
        this.request("DescribeNatFwVpcDnsLst", req, resp, cb);
    }

    /**
     * 互联网边界防火墙一键开关
     * @param {ModifyAllPublicIPSwitchStatusRequest} req
     * @param {function(string, ModifyAllPublicIPSwitchStatusResponse):void} cb
     * @public
     */
    ModifyAllPublicIPSwitchStatus(req, cb) {
        let resp = new ModifyAllPublicIPSwitchStatusResponse();
        this.request("ModifyAllPublicIPSwitchStatus", req, resp, cb);
    }

    /**
     * 获取安全组关联实例列表
     * @param {DescribeAssociatedInstanceListRequest} req
     * @param {function(string, DescribeAssociatedInstanceListResponse):void} cb
     * @public
     */
    DescribeAssociatedInstanceList(req, cb) {
        let resp = new DescribeAssociatedInstanceListResponse();
        this.request("DescribeAssociatedInstanceList", req, resp, cb);
    }

    /**
     * 创建、选择vpc
     * @param {CreateChooseVpcsRequest} req
     * @param {function(string, CreateChooseVpcsResponse):void} cb
     * @public
     */
    CreateChooseVpcs(req, cb) {
        let resp = new CreateChooseVpcsResponse();
        this.request("CreateChooseVpcs", req, resp, cb);
    }

    /**
     * GetNatFwInstanceWithRegion 获取租户新增运维的NAT实例，带上地域
     * @param {DescribeNatFwInstanceWithRegionRequest} req
     * @param {function(string, DescribeNatFwInstanceWithRegionResponse):void} cb
     * @public
     */
    DescribeNatFwInstanceWithRegion(req, cb) {
        let resp = new DescribeNatFwInstanceWithRegionResponse();
        this.request("DescribeNatFwInstanceWithRegion", req, resp, cb);
    }

    /**
     * 删除规则
     * @param {DeleteAcRuleRequest} req
     * @param {function(string, DeleteAcRuleResponse):void} cb
     * @public
     */
    DeleteAcRule(req, cb) {
        let resp = new DeleteAcRuleResponse();
        this.request("DeleteAcRule", req, resp, cb);
    }

    /**
     * ModifyResourceGroup-资产中心资产组信息修改


     * @param {ModifyResourceGroupRequest} req
     * @param {function(string, ModifyResourceGroupResponse):void} cb
     * @public
     */
    ModifyResourceGroup(req, cb) {
        let resp = new ModifyResourceGroupResponse();
        this.request("ModifyResourceGroup", req, resp, cb);
    }

    /**
     * 启用停用单条企业安全组规则
     * @param {ModifySecurityGroupItemRuleStatusRequest} req
     * @param {function(string, ModifySecurityGroupItemRuleStatusResponse):void} cb
     * @public
     */
    ModifySecurityGroupItemRuleStatus(req, cb) {
        let resp = new ModifySecurityGroupItemRuleStatusResponse();
        this.request("ModifySecurityGroupItemRuleStatus", req, resp, cb);
    }

    /**
     * DescribeResourceGroupNew资产中心资产树信息
     * @param {DescribeResourceGroupNewRequest} req
     * @param {function(string, DescribeResourceGroupNewResponse):void} cb
     * @public
     */
    DescribeResourceGroupNew(req, cb) {
        let resp = new DescribeResourceGroupNewResponse();
        this.request("DescribeResourceGroupNew", req, resp, cb);
    }

    /**
     * 全部删除规则
     * @param {DeleteAllAccessControlRuleRequest} req
     * @param {function(string, DeleteAllAccessControlRuleResponse):void} cb
     * @public
     */
    DeleteAllAccessControlRule(req, cb) {
        let resp = new DeleteAllAccessControlRuleResponse();
        this.request("DeleteAllAccessControlRule", req, resp, cb);
    }

    /**
     * 查询安全组规则列表
     * @param {DescribeSecurityGroupListRequest} req
     * @param {function(string, DescribeSecurityGroupListResponse):void} cb
     * @public
     */
    DescribeSecurityGroupList(req, cb) {
        let resp = new DescribeSecurityGroupListResponse();
        this.request("DescribeSecurityGroupList", req, resp, cb);
    }

    /**
     * 编辑单条安全组规则
     * @param {ModifySecurityGroupRuleRequest} req
     * @param {function(string, ModifySecurityGroupRuleResponse):void} cb
     * @public
     */
    ModifySecurityGroupRule(req, cb) {
        let resp = new ModifySecurityGroupRuleResponse();
        this.request("ModifySecurityGroupRule", req, resp, cb);
    }

    /**
     * DescribeNatFwInstance 获取租户所有NAT实例
     * @param {DescribeNatFwInstanceRequest} req
     * @param {function(string, DescribeNatFwInstanceResponse):void} cb
     * @public
     */
    DescribeNatFwInstance(req, cb) {
        let resp = new DescribeNatFwInstanceResponse();
        this.request("DescribeNatFwInstance", req, resp, cb);
    }

    /**
     * 资产扫描
     * @param {ModifyAssetScanRequest} req
     * @param {function(string, ModifyAssetScanResponse):void} cb
     * @public
     */
    ModifyAssetScan(req, cb) {
        let resp = new ModifyAssetScanResponse();
        this.request("ModifyAssetScan", req, resp, cb);
    }

    /**
     * 防火墙开关列表
     * @param {DescribeSwitchListsRequest} req
     * @param {function(string, DescribeSwitchListsResponse):void} cb
     * @public
     */
    DescribeSwitchLists(req, cb) {
        let resp = new DescribeSwitchListsResponse();
        this.request("DescribeSwitchLists", req, resp, cb);
    }

    /**
     * 创建暴露数据库白名单规则
     * @param {CreateDatabaseWhiteListRulesRequest} req
     * @param {function(string, CreateDatabaseWhiteListRulesResponse):void} cb
     * @public
     */
    CreateDatabaseWhiteListRules(req, cb) {
        let resp = new CreateDatabaseWhiteListRulesResponse();
        this.request("CreateDatabaseWhiteListRules", req, resp, cb);
    }

    /**
     * 创建防火墙实例和接入域名（Region参数必填）
     * @param {CreateNatFwInstanceWithDomainRequest} req
     * @param {function(string, CreateNatFwInstanceWithDomainResponse):void} cb
     * @public
     */
    CreateNatFwInstanceWithDomain(req, cb) {
        let resp = new CreateNatFwInstanceWithDomainResponse();
        this.request("CreateNatFwInstanceWithDomain", req, resp, cb);
    }

    /**
     * 修改规则执行顺序
     * @param {ModifySequenceRulesRequest} req
     * @param {function(string, ModifySequenceRulesResponse):void} cb
     * @public
     */
    ModifySequenceRules(req, cb) {
        let resp = new ModifySequenceRulesResponse();
        this.request("ModifySequenceRules", req, resp, cb);
    }

    /**
     * 添加互联网边界规则
     * @param {AddAcRuleRequest} req
     * @param {function(string, AddAcRuleResponse):void} cb
     * @public
     */
    AddAcRule(req, cb) {
        let resp = new AddAcRuleResponse();
        this.request("AddAcRule", req, resp, cb);
    }

    /**
     * 创建新企业安全组规则
     * @param {AddEnterpriseSecurityGroupRulesRequest} req
     * @param {function(string, AddEnterpriseSecurityGroupRulesResponse):void} cb
     * @public
     */
    AddEnterpriseSecurityGroupRules(req, cb) {
        let resp = new AddEnterpriseSecurityGroupRulesResponse();
        this.request("AddEnterpriseSecurityGroupRules", req, resp, cb);
    }

    /**
     * 创建访问控制规则
     * @param {CreateAcRulesRequest} req
     * @param {function(string, CreateAcRulesResponse):void} cb
     * @public
     */
    CreateAcRules(req, cb) {
        let resp = new CreateAcRulesResponse();
        this.request("CreateAcRules", req, resp, cb);
    }

    /**
     * 销毁防火墙实例
     * @param {DeleteNatFwInstanceRequest} req
     * @param {function(string, DeleteNatFwInstanceResponse):void} cb
     * @public
     */
    DeleteNatFwInstance(req, cb) {
        let resp = new DeleteNatFwInstanceResponse();
        this.request("DeleteNatFwInstance", req, resp, cb);
    }

    /**
     * 创建企业安全组规则
     * @param {CreateSecurityGroupRulesRequest} req
     * @param {function(string, CreateSecurityGroupRulesResponse):void} cb
     * @public
     */
    CreateSecurityGroupRules(req, cb) {
        let resp = new CreateSecurityGroupRulesResponse();
        this.request("CreateSecurityGroupRules", req, resp, cb);
    }

    /**
     * 删除新企业安全组规则
     * @param {RemoveEnterpriseSecurityGroupRuleRequest} req
     * @param {function(string, RemoveEnterpriseSecurityGroupRuleResponse):void} cb
     * @public
     */
    RemoveEnterpriseSecurityGroupRule(req, cb) {
        let resp = new RemoveEnterpriseSecurityGroupRuleResponse();
        this.request("RemoveEnterpriseSecurityGroupRule", req, resp, cb);
    }

    /**
     * 查询规则列表概况
     * @param {DescribeRuleOverviewRequest} req
     * @param {function(string, DescribeRuleOverviewResponse):void} cb
     * @public
     */
    DescribeRuleOverview(req, cb) {
        let resp = new DescribeRuleOverviewResponse();
        this.request("DescribeRuleOverview", req, resp, cb);
    }

    /**
     * ip防护状态查询
     * @param {DescribeIPStatusListRequest} req
     * @param {function(string, DescribeIPStatusListResponse):void} cb
     * @public
     */
    DescribeIPStatusList(req, cb) {
        let resp = new DescribeIPStatusListResponse();
        this.request("DescribeIPStatusList", req, resp, cb);
    }

    /**
     * 编辑新企业安全组规则
     * @param {ModifyEnterpriseSecurityGroupRuleRequest} req
     * @param {function(string, ModifyEnterpriseSecurityGroupRuleResponse):void} cb
     * @public
     */
    ModifyEnterpriseSecurityGroupRule(req, cb) {
        let resp = new ModifyEnterpriseSecurityGroupRuleResponse();
        this.request("ModifyEnterpriseSecurityGroupRule", req, resp, cb);
    }

    /**
     * 获取入侵防御按钮列表
     * @param {DescribeDefenseSwitchRequest} req
     * @param {function(string, DescribeDefenseSwitchResponse):void} cb
     * @public
     */
    DescribeDefenseSwitch(req, cb) {
        let resp = new DescribeDefenseSwitchResponse();
        this.request("DescribeDefenseSwitch", req, resp, cb);
    }

    /**
     * DescribeTLogInfo告警中心概况

     * @param {DescribeTLogInfoRequest} req
     * @param {function(string, DescribeTLogInfoResponse):void} cb
     * @public
     */
    DescribeTLogInfo(req, cb) {
        let resp = new DescribeTLogInfoResponse();
        this.request("DescribeTLogInfo", req, resp, cb);
    }

    /**
     * 同步资产-互联网&VPC（新）
     * @param {ModifyRunSyncAssetRequest} req
     * @param {function(string, ModifyRunSyncAssetResponse):void} cb
     * @public
     */
    ModifyRunSyncAsset(req, cb) {
        let resp = new ModifyRunSyncAssetResponse();
        this.request("ModifyRunSyncAsset", req, resp, cb);
    }

    /**
     * NAT防火墙规则快速排序
     * @param {ModifyNatSequenceRulesRequest} req
     * @param {function(string, ModifyNatSequenceRulesResponse):void} cb
     * @public
     */
    ModifyNatSequenceRules(req, cb) {
        let resp = new ModifyNatSequenceRulesResponse();
        this.request("ModifyNatSequenceRules", req, resp, cb);
    }

    /**
     * nat 防火墙VPC DNS 开关切换
     * @param {ModifyNatFwVpcDnsSwitchRequest} req
     * @param {function(string, ModifyNatFwVpcDnsSwitchResponse):void} cb
     * @public
     */
    ModifyNatFwVpcDnsSwitch(req, cb) {
        let resp = new ModifyNatFwVpcDnsSwitchResponse();
        this.request("ModifyNatFwVpcDnsSwitch", req, resp, cb);
    }

    /**
     * VPC防火墙一键开关
     * @param {ModifyAllVPCSwitchStatusRequest} req
     * @param {function(string, ModifyAllVPCSwitchStatusResponse):void} cb
     * @public
     */
    ModifyAllVPCSwitchStatus(req, cb) {
        let resp = new ModifyAllVPCSwitchStatusResponse();
        this.request("ModifyAllVPCSwitchStatus", req, resp, cb);
    }

    /**
     * 日志存储设置，可以修改存储时间和清空日志
     * @param {ModifyStorageSettingRequest} req
     * @param {function(string, ModifyStorageSettingResponse):void} cb
     * @public
     */
    ModifyStorageSetting(req, cb) {
        let resp = new ModifyStorageSettingResponse();
        this.request("ModifyStorageSetting", req, resp, cb);
    }

    /**
     * 查询新企业安全组规则
     * @param {DescribeEnterpriseSecurityGroupRuleRequest} req
     * @param {function(string, DescribeEnterpriseSecurityGroupRuleResponse):void} cb
     * @public
     */
    DescribeEnterpriseSecurityGroupRule(req, cb) {
        let resp = new DescribeEnterpriseSecurityGroupRuleResponse();
        this.request("DescribeEnterpriseSecurityGroupRule", req, resp, cb);
    }

    /**
     * 支持对封禁列表、放通列表如下操作：
批量增加封禁IP、放通IP/域名
批量删除封禁IP、放通IP/域名
批量修改封禁IP、放通IP/域名生效事件
     * @param {ModifyBlockIgnoreListRequest} req
     * @param {function(string, ModifyBlockIgnoreListResponse):void} cb
     * @public
     */
    ModifyBlockIgnoreList(req, cb) {
        let resp = new ModifyBlockIgnoreListResponse();
        this.request("ModifyBlockIgnoreList", req, resp, cb);
    }

    /**
     * 删除防火墙实例
     * @param {DeleteVpcInstanceRequest} req
     * @param {function(string, DeleteVpcInstanceResponse):void} cb
     * @public
     */
    DeleteVpcInstance(req, cb) {
        let resp = new DeleteVpcInstanceResponse();
        this.request("DeleteVpcInstance", req, resp, cb);
    }

    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     * @param {DescribeGuideScanInfoRequest} req
     * @param {function(string, DescribeGuideScanInfoResponse):void} cb
     * @public
     */
    DescribeGuideScanInfo(req, cb) {
        let resp = new DescribeGuideScanInfoResponse();
        this.request("DescribeGuideScanInfo", req, resp, cb);
    }

    /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口

     * @param {DescribeUnHandleEventTabListRequest} req
     * @param {function(string, DescribeUnHandleEventTabListResponse):void} cb
     * @public
     */
    DescribeUnHandleEventTabList(req, cb) {
        let resp = new DescribeUnHandleEventTabListResponse();
        this.request("DescribeUnHandleEventTabList", req, resp, cb);
    }

    /**
     * 修改NAT防火墙开关
     * @param {ModifyNatFwSwitchRequest} req
     * @param {function(string, ModifyNatFwSwitchResponse):void} cb
     * @public
     */
    ModifyNatFwSwitch(req, cb) {
        let resp = new ModifyNatFwSwitchResponse();
        this.request("ModifyNatFwSwitch", req, resp, cb);
    }

    /**
     * DescribeSourceAsset-查询资产组全部资产信息

     * @param {DescribeSourceAssetRequest} req
     * @param {function(string, DescribeSourceAssetResponse):void} cb
     * @public
     */
    DescribeSourceAsset(req, cb) {
        let resp = new DescribeSourceAssetResponse();
        this.request("DescribeSourceAsset", req, resp, cb);
    }

    /**
     * DeleteResourceGroup-资产中心资产组删除
     * @param {DeleteResourceGroupRequest} req
     * @param {function(string, DeleteResourceGroupResponse):void} cb
     * @public
     */
    DeleteResourceGroup(req, cb) {
        let resp = new DeleteResourceGroupResponse();
        this.request("DeleteResourceGroup", req, resp, cb);
    }

    /**
     * 创建NAT防火墙实例（Region参数必填）
     * @param {CreateNatFwInstanceRequest} req
     * @param {function(string, CreateNatFwInstanceResponse):void} cb
     * @public
     */
    CreateNatFwInstance(req, cb) {
        let resp = new CreateNatFwInstanceResponse();
        this.request("CreateNatFwInstance", req, resp, cb);
    }

    /**
     * 配置防火墙Dnat规则
     * @param {SetNatFwDnatRuleRequest} req
     * @param {function(string, SetNatFwDnatRuleResponse):void} cb
     * @public
     */
    SetNatFwDnatRule(req, cb) {
        let resp = new SetNatFwDnatRuleResponse();
        this.request("SetNatFwDnatRule", req, resp, cb);
    }

    /**
     * 启用停用全部规则
     * @param {ModifyAllRuleStatusRequest} req
     * @param {function(string, ModifyAllRuleStatusResponse):void} cb
     * @public
     */
    ModifyAllRuleStatus(req, cb) {
        let resp = new ModifyAllRuleStatusResponse();
        this.request("ModifyAllRuleStatus", req, resp, cb);
    }

    /**
     * 删除互联网边界规则
     * @param {RemoveAcRuleRequest} req
     * @param {function(string, RemoveAcRuleResponse):void} cb
     * @public
     */
    RemoveAcRule(req, cb) {
        let resp = new RemoveAcRuleResponse();
        this.request("RemoveAcRule", req, resp, cb);
    }

    /**
     * 设置防火墙实例弹性公网ip，目前仅支持新增模式的防火墙实例
     * @param {SetNatFwEipRequest} req
     * @param {function(string, SetNatFwEipResponse):void} cb
     * @public
     */
    SetNatFwEip(req, cb) {
        let resp = new SetNatFwEipResponse();
        this.request("SetNatFwEip", req, resp, cb);
    }

    /**
     * ModifyBlockTop取消置顶接口
     * @param {ModifyBlockTopRequest} req
     * @param {function(string, ModifyBlockTopResponse):void} cb
     * @public
     */
    ModifyBlockTop(req, cb) {
        let resp = new ModifyBlockTopResponse();
        this.request("ModifyBlockTop", req, resp, cb);
    }

    /**
     * 查询规则表状态
     * @param {DescribeTableStatusRequest} req
     * @param {function(string, DescribeTableStatusResponse):void} cb
     * @public
     */
    DescribeTableStatus(req, cb) {
        let resp = new DescribeTableStatusResponse();
        this.request("DescribeTableStatus", req, resp, cb);
    }

    /**
     * GetNatInstance 获取租户所有NAT实例及实例卡片信息
     * @param {DescribeNatFwInstancesInfoRequest} req
     * @param {function(string, DescribeNatFwInstancesInfoResponse):void} cb
     * @public
     */
    DescribeNatFwInstancesInfo(req, cb) {
        let resp = new DescribeNatFwInstancesInfoResponse();
        this.request("DescribeNatFwInstancesInfo", req, resp, cb);
    }

    /**
     * 防火墙实例重新选择vpc或nat
     * @param {ModifyNatFwReSelectRequest} req
     * @param {function(string, ModifyNatFwReSelectResponse):void} cb
     * @public
     */
    ModifyNatFwReSelect(req, cb) {
        let resp = new ModifyNatFwReSelectResponse();
        this.request("ModifyNatFwReSelect", req, resp, cb);
    }

    /**
     * DescribeResourceGroup资产中心资产树信息
     * @param {DescribeResourceGroupRequest} req
     * @param {function(string, DescribeResourceGroupResponse):void} cb
     * @public
     */
    DescribeResourceGroup(req, cb) {
        let resp = new DescribeResourceGroupResponse();
        this.request("DescribeResourceGroup", req, resp, cb);
    }

    /**
     * 查询防火墙弹性公网IP
     * @param {DescribeCfwEipsRequest} req
     * @param {function(string, DescribeCfwEipsResponse):void} cb
     * @public
     */
    DescribeCfwEips(req, cb) {
        let resp = new DescribeCfwEipsResponse();
        this.request("DescribeCfwEips", req, resp, cb);
    }

    /**
     * 修改NAT访问控制规则
     * @param {ModifyNatAcRuleRequest} req
     * @param {function(string, ModifyNatAcRuleResponse):void} cb
     * @public
     */
    ModifyNatAcRule(req, cb) {
        let resp = new ModifyNatAcRuleResponse();
        this.request("ModifyNatAcRule", req, resp, cb);
    }

    /**
     * 修改规则
     * @param {ModifyAcRuleRequest} req
     * @param {function(string, ModifyAcRuleResponse):void} cb
     * @public
     */
    ModifyAcRule(req, cb) {
        let resp = new ModifyAcRuleResponse();
        this.request("ModifyAcRule", req, resp, cb);
    }

    /**
     * 删除规则
     * @param {DeleteSecurityGroupRuleRequest} req
     * @param {function(string, DeleteSecurityGroupRuleResponse):void} cb
     * @public
     */
    DeleteSecurityGroupRule(req, cb) {
        let resp = new DeleteSecurityGroupRuleResponse();
        this.request("DeleteSecurityGroupRule", req, resp, cb);
    }

    /**
     * 企业安全组规则快速排序
     * @param {ModifySecurityGroupSequenceRulesRequest} req
     * @param {function(string, ModifySecurityGroupSequenceRulesResponse):void} cb
     * @public
     */
    ModifySecurityGroupSequenceRules(req, cb) {
        let resp = new ModifySecurityGroupSequenceRulesResponse();
        this.request("ModifySecurityGroupSequenceRules", req, resp, cb);
    }

    /**
     * 修改企业安全组下发状态
     * @param {ModifyEnterpriseSecurityDispatchStatusRequest} req
     * @param {function(string, ModifyEnterpriseSecurityDispatchStatusResponse):void} cb
     * @public
     */
    ModifyEnterpriseSecurityDispatchStatus(req, cb) {
        let resp = new ModifyEnterpriseSecurityDispatchStatusResponse();
        this.request("ModifyEnterpriseSecurityDispatchStatus", req, resp, cb);
    }

    /**
     * DescribeTLogIpList告警中心IP柱形图

     * @param {DescribeTLogIpListRequest} req
     * @param {function(string, DescribeTLogIpListResponse):void} cb
     * @public
     */
    DescribeTLogIpList(req, cb) {
        let resp = new DescribeTLogIpListResponse();
        this.request("DescribeTLogIpList", req, resp, cb);
    }

    /**
     * 查询入侵防御放通封禁列表
     * @param {DescribeBlockIgnoreListRequest} req
     * @param {function(string, DescribeBlockIgnoreListResponse):void} cb
     * @public
     */
    DescribeBlockIgnoreList(req, cb) {
        let resp = new DescribeBlockIgnoreListResponse();
        this.request("DescribeBlockIgnoreList", req, resp, cb);
    }

    /**
     * 删除NAT访问控制规则
     * @param {RemoveNatAcRuleRequest} req
     * @param {function(string, RemoveNatAcRuleResponse):void} cb
     * @public
     */
    RemoveNatAcRule(req, cb) {
        let resp = new RemoveNatAcRuleResponse();
        this.request("RemoveNatAcRule", req, resp, cb);
    }

    /**
     * 访问控制列表
     * @param {DescribeAcListsRequest} req
     * @param {function(string, DescribeAcListsResponse):void} cb
     * @public
     */
    DescribeAcLists(req, cb) {
        let resp = new DescribeAcListsResponse();
        this.request("DescribeAcLists", req, resp, cb);
    }

    /**
     * 单个修改互联网边界防火墙开关
     * @param {ModifyPublicIPSwitchStatusRequest} req
     * @param {function(string, ModifyPublicIPSwitchStatusResponse):void} cb
     * @public
     */
    ModifyPublicIPSwitchStatus(req, cb) {
        let resp = new ModifyPublicIPSwitchStatusResponse();
        this.request("ModifyPublicIPSwitchStatus", req, resp, cb);
    }

    /**
     * 查询NAT访问控制列表
     * @param {DescribeNatAcRuleRequest} req
     * @param {function(string, DescribeNatAcRuleResponse):void} cb
     * @public
     */
    DescribeNatAcRule(req, cb) {
        let resp = new DescribeNatAcRuleResponse();
        this.request("DescribeNatAcRule", req, resp, cb);
    }

    /**
     * 添加nat访问控制规则
     * @param {AddNatAcRuleRequest} req
     * @param {function(string, AddNatAcRuleResponse):void} cb
     * @public
     */
    AddNatAcRule(req, cb) {
        let resp = new AddNatAcRuleResponse();
        this.request("AddNatAcRule", req, resp, cb);
    }

    /**
     * 防火墙垂直扩容
     * @param {ExpandCfwVerticalRequest} req
     * @param {function(string, ExpandCfwVerticalResponse):void} cb
     * @public
     */
    ExpandCfwVertical(req, cb) {
        let resp = new ExpandCfwVerticalResponse();
        this.request("ExpandCfwVertical", req, resp, cb);
    }

    /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图

     * @param {DescribeBlockByIpTimesListRequest} req
     * @param {function(string, DescribeBlockByIpTimesListResponse):void} cb
     * @public
     */
    DescribeBlockByIpTimesList(req, cb) {
        let resp = new DescribeBlockByIpTimesListResponse();
        this.request("DescribeBlockByIpTimesList", req, resp, cb);
    }

    /**
     * DescribeBlockStaticList 告警中心柱形图

     * @param {DescribeBlockStaticListRequest} req
     * @param {function(string, DescribeBlockStaticListResponse):void} cb
     * @public
     */
    DescribeBlockStaticList(req, cb) {
        let resp = new DescribeBlockStaticListResponse();
        this.request("DescribeBlockStaticList", req, resp, cb);
    }


}
module.exports = CfwClient;
