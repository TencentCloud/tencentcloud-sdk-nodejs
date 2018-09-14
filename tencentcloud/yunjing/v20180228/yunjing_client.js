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
const DeleteNonlocalLoginPlacesRequest = models.DeleteNonlocalLoginPlacesRequest;
const DescribeMachineInfoRequest = models.DescribeMachineInfoRequest;
const DescribeBruteAttacksResponse = models.DescribeBruteAttacksResponse;
const DescribeNonlocalLoginPlacesRequest = models.DescribeNonlocalLoginPlacesRequest;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const DescribeAlarmAttributeResponse = models.DescribeAlarmAttributeResponse;
const CreateUsualLoginPlacesResponse = models.CreateUsualLoginPlacesResponse;
const DescribeOverviewStatisticsRequest = models.DescribeOverviewStatisticsRequest;
const DescribeAgentVulsRequest = models.DescribeAgentVulsRequest;
const Machine = models.Machine;
const UsualPlace = models.UsualPlace;
const DescribeVulInfoResponse = models.DescribeVulInfoResponse;
const Malware = models.Malware;
const DescribeProVersionInfoResponse = models.DescribeProVersionInfoResponse;
const DeleteMachineResponse = models.DeleteMachineResponse;
const DeleteBruteAttacksRequest = models.DeleteBruteAttacksRequest;
const CreateUsualLoginPlacesRequest = models.CreateUsualLoginPlacesRequest;
const Vul = models.Vul;
const DescribeVulScanResultResponse = models.DescribeVulScanResultResponse;
const ModifyAlarmAttributeRequest = models.ModifyAlarmAttributeRequest;
const DescribeOverviewStatisticsResponse = models.DescribeOverviewStatisticsResponse;
const RecoverMalwaresRequest = models.RecoverMalwaresRequest;
const TrustMalwaresResponse = models.TrustMalwaresResponse;
const DescribeUsualLoginPlacesRequest = models.DescribeUsualLoginPlacesRequest;
const DeleteMachineRequest = models.DeleteMachineRequest;
const DescribeVulsRequest = models.DescribeVulsRequest;
const DescribeAgentVulsResponse = models.DescribeAgentVulsResponse;
const ModifyAutoOpenProVersionConfigRequest = models.ModifyAutoOpenProVersionConfigRequest;
const ImpactedHost = models.ImpactedHost;
const DescribeNonlocalLoginPlacesResponse = models.DescribeNonlocalLoginPlacesResponse;
const DescribeProVersionInfoRequest = models.DescribeProVersionInfoRequest;
const DescribeImpactedHostsResponse = models.DescribeImpactedHostsResponse;
const TrustMalwaresRequest = models.TrustMalwaresRequest;
const CloseProVersionResponse = models.CloseProVersionResponse;
const DescribeBruteAttacksRequest = models.DescribeBruteAttacksRequest;
const DescribeImpactedHostsRequest = models.DescribeImpactedHostsRequest;
const IgnoreImpactedHostsResponse = models.IgnoreImpactedHostsResponse;
const RescanImpactedHostRequest = models.RescanImpactedHostRequest;
const RescanImpactedHostResponse = models.RescanImpactedHostResponse;
const DescribeMachineInfoResponse = models.DescribeMachineInfoResponse;
const BruteAttack = models.BruteAttack;
const DeleteUsualLoginPlacesRequest = models.DeleteUsualLoginPlacesRequest;
const ModifyAlarmAttributeResponse = models.ModifyAlarmAttributeResponse;
const DescribeVulInfoRequest = models.DescribeVulInfoRequest;
const DescribeVulsResponse = models.DescribeVulsResponse;
const Filter = models.Filter;
const Place = models.Place;
const MisAlarmNonlocalLoginPlacesRequest = models.MisAlarmNonlocalLoginPlacesRequest;
const DeleteUsualLoginPlacesResponse = models.DeleteUsualLoginPlacesResponse;
const NonLocalLoginPlace = models.NonLocalLoginPlace;
const ModifyAutoOpenProVersionConfigResponse = models.ModifyAutoOpenProVersionConfigResponse;
const DeleteNonlocalLoginPlacesResponse = models.DeleteNonlocalLoginPlacesResponse;
const RecoverMalwaresResponse = models.RecoverMalwaresResponse;
const DeleteMalwaresResponse = models.DeleteMalwaresResponse;
const SeparateMalwaresRequest = models.SeparateMalwaresRequest;
const AgentVul = models.AgentVul;
const SeparateMalwaresResponse = models.SeparateMalwaresResponse;
const DescribeAlarmAttributeRequest = models.DescribeAlarmAttributeRequest;
const DescribeMalwaresRequest = models.DescribeMalwaresRequest;
const DescribeVulScanResultRequest = models.DescribeVulScanResultRequest;
const MisAlarmNonlocalLoginPlacesResponse = models.MisAlarmNonlocalLoginPlacesResponse;
const IgnoreImpactedHostsRequest = models.IgnoreImpactedHostsRequest;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const CloseProVersionRequest = models.CloseProVersionRequest;
const UntrustMalwaresRequest = models.UntrustMalwaresRequest;
const DescribeUsualLoginPlacesResponse = models.DescribeUsualLoginPlacesResponse;
const DeleteMalwaresRequest = models.DeleteMalwaresRequest;
const DescribeMalwaresResponse = models.DescribeMalwaresResponse;
const UntrustMalwaresResponse = models.UntrustMalwaresResponse;
const DeleteBruteAttacksResponse = models.DeleteBruteAttacksResponse;


/**
 * yunjing client
 * @class
 */
class YunjingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    
    /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     * @param {DescribeVulScanResultRequest} req
     * @param {function(string, DescribeVulScanResultResponse):void} cb
     * @public
     */
    DescribeVulScanResult(req, cb) {
        let resp = new DescribeVulScanResultResponse();
        this.request("DescribeVulScanResult", req, resp, cb);
    }

    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     * @param {TrustMalwaresRequest} req
     * @param {function(string, TrustMalwaresResponse):void} cb
     * @public
     */
    TrustMalwares(req, cb) {
        let resp = new TrustMalwaresResponse();
        this.request("TrustMalwares", req, resp, cb);
    }

    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     * @param {RecoverMalwaresRequest} req
     * @param {function(string, RecoverMalwaresResponse):void} cb
     * @public
     */
    RecoverMalwares(req, cb) {
        let resp = new RecoverMalwaresResponse();
        this.request("RecoverMalwares", req, resp, cb);
    }

    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     * @param {DeleteMalwaresRequest} req
     * @param {function(string, DeleteMalwaresResponse):void} cb
     * @public
     */
    DeleteMalwares(req, cb) {
        let resp = new DeleteMalwaresResponse();
        this.request("DeleteMalwares", req, resp, cb);
    }

    /**
     * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
     * @param {DescribeBruteAttacksRequest} req
     * @param {function(string, DescribeBruteAttacksResponse):void} cb
     * @public
     */
    DescribeBruteAttacks(req, cb) {
        let resp = new DescribeBruteAttacksResponse();
        this.request("DescribeBruteAttacks", req, resp, cb);
    }

    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     * @param {UntrustMalwaresRequest} req
     * @param {function(string, UntrustMalwaresResponse):void} cb
     * @public
     */
    UntrustMalwares(req, cb) {
        let resp = new UntrustMalwaresResponse();
        this.request("UntrustMalwares", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
     * @param {DescribeVulInfoRequest} req
     * @param {function(string, DescribeVulInfoResponse):void} cb
     * @public
     */
    DescribeVulInfo(req, cb) {
        let resp = new DescribeVulInfoResponse();
        this.request("DescribeVulInfo", req, resp, cb);
    }

    /**
     * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
     * @param {DeleteUsualLoginPlacesRequest} req
     * @param {function(string, DeleteUsualLoginPlacesResponse):void} cb
     * @public
     */
    DeleteUsualLoginPlaces(req, cb) {
        let resp = new DeleteUsualLoginPlacesResponse();
        this.request("DeleteUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     * @param {DeleteNonlocalLoginPlacesRequest} req
     * @param {function(string, DeleteNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DeleteNonlocalLoginPlaces(req, cb) {
        let resp = new DeleteNonlocalLoginPlacesResponse();
        this.request("DeleteNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
     * @param {MisAlarmNonlocalLoginPlacesRequest} req
     * @param {function(string, MisAlarmNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    MisAlarmNonlocalLoginPlaces(req, cb) {
        let resp = new MisAlarmNonlocalLoginPlacesResponse();
        this.request("MisAlarmNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口（ModifyAlarmAttribute）用于修改告警设置。
     * @param {ModifyAlarmAttributeRequest} req
     * @param {function(string, ModifyAlarmAttributeResponse):void} cb
     * @public
     */
    ModifyAlarmAttribute(req, cb) {
        let resp = new ModifyAlarmAttributeResponse();
        this.request("ModifyAlarmAttribute", req, resp, cb);
    }

    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     * @param {SeparateMalwaresRequest} req
     * @param {function(string, SeparateMalwaresResponse):void} cb
     * @public
     */
    SeparateMalwares(req, cb) {
        let resp = new SeparateMalwaresResponse();
        this.request("SeparateMalwares", req, resp, cb);
    }

    /**
     * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
     * @param {DescribeNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeNonlocalLoginPlaces(req, cb) {
        let resp = new DescribeNonlocalLoginPlacesResponse();
        this.request("DescribeNonlocalLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     * @param {DeleteMachineRequest} req
     * @param {function(string, DeleteMachineResponse):void} cb
     * @public
     */
    DeleteMachine(req, cb) {
        let resp = new DeleteMachineResponse();
        this.request("DeleteMachine", req, resp, cb);
    }

    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     * @param {DescribeOverviewStatisticsRequest} req
     * @param {function(string, DescribeOverviewStatisticsResponse):void} cb
     * @public
     */
    DescribeOverviewStatistics(req, cb) {
        let resp = new DescribeOverviewStatisticsResponse();
        this.request("DescribeOverviewStatistics", req, resp, cb);
    }

    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     * @param {DescribeUsualLoginPlacesRequest} req
     * @param {function(string, DescribeUsualLoginPlacesResponse):void} cb
     * @public
     */
    DescribeUsualLoginPlaces(req, cb) {
        let resp = new DescribeUsualLoginPlacesResponse();
        this.request("DescribeUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口 (RescanImpactedHosts) 用于漏洞重新检测。
     * @param {RescanImpactedHostRequest} req
     * @param {function(string, RescanImpactedHostResponse):void} cb
     * @public
     */
    RescanImpactedHost(req, cb) {
        let resp = new RescanImpactedHostResponse();
        this.request("RescanImpactedHost", req, resp, cb);
    }

    /**
     * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
     * @param {DescribeImpactedHostsRequest} req
     * @param {function(string, DescribeImpactedHostsResponse):void} cb
     * @public
     */
    DescribeImpactedHosts(req, cb) {
        let resp = new DescribeImpactedHostsResponse();
        this.request("DescribeImpactedHosts", req, resp, cb);
    }

    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
     * @param {ModifyAutoOpenProVersionConfigRequest} req
     * @param {function(string, ModifyAutoOpenProVersionConfigResponse):void} cb
     * @public
     */
    ModifyAutoOpenProVersionConfig(req, cb) {
        let resp = new ModifyAutoOpenProVersionConfigResponse();
        this.request("ModifyAutoOpenProVersionConfig", req, resp, cb);
    }

    /**
     * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
     * @param {DescribeVulsRequest} req
     * @param {function(string, DescribeVulsResponse):void} cb
     * @public
     */
    DescribeVuls(req, cb) {
        let resp = new DescribeVulsResponse();
        this.request("DescribeVuls", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAgentVuls) 用于获取主机的漏洞列表。
     * @param {DescribeAgentVulsRequest} req
     * @param {function(string, DescribeAgentVulsResponse):void} cb
     * @public
     */
    DescribeAgentVuls(req, cb) {
        let resp = new DescribeAgentVulsResponse();
        this.request("DescribeAgentVuls", req, resp, cb);
    }

    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     * @param {CloseProVersionRequest} req
     * @param {function(string, CloseProVersionResponse):void} cb
     * @public
     */
    CloseProVersion(req, cb) {
        let resp = new CloseProVersionResponse();
        this.request("CloseProVersion", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     * @param {DescribeProVersionInfoRequest} req
     * @param {function(string, DescribeProVersionInfoResponse):void} cb
     * @public
     */
    DescribeProVersionInfo(req, cb) {
        let resp = new DescribeProVersionInfoResponse();
        this.request("DescribeProVersionInfo", req, resp, cb);
    }

    /**
     * 本接口 (IngoreImpactedHosts) 用于忽略漏洞。
     * @param {IgnoreImpactedHostsRequest} req
     * @param {function(string, IgnoreImpactedHostsResponse):void} cb
     * @public
     */
    IgnoreImpactedHosts(req, cb) {
        let resp = new IgnoreImpactedHostsResponse();
        this.request("IgnoreImpactedHosts", req, resp, cb);
    }

    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     * @param {DeleteBruteAttacksRequest} req
     * @param {function(string, DeleteBruteAttacksResponse):void} cb
     * @public
     */
    DeleteBruteAttacks(req, cb) {
        let resp = new DeleteBruteAttacksResponse();
        this.request("DeleteBruteAttacks", req, resp, cb);
    }

    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     * @param {DescribeMachineInfoRequest} req
     * @param {function(string, DescribeMachineInfoResponse):void} cb
     * @public
     */
    DescribeMachineInfo(req, cb) {
        let resp = new DescribeMachineInfoResponse();
        this.request("DescribeMachineInfo", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
     * @param {DescribeAlarmAttributeRequest} req
     * @param {function(string, DescribeAlarmAttributeResponse):void} cb
     * @public
     */
    DescribeAlarmAttribute(req, cb) {
        let resp = new DescribeAlarmAttributeResponse();
        this.request("DescribeAlarmAttribute", req, resp, cb);
    }

    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        let resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }

    /**
     * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
     * @param {CreateUsualLoginPlacesRequest} req
     * @param {function(string, CreateUsualLoginPlacesResponse):void} cb
     * @public
     */
    CreateUsualLoginPlaces(req, cb) {
        let resp = new CreateUsualLoginPlacesResponse();
        this.request("CreateUsualLoginPlaces", req, resp, cb);
    }

    /**
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     * @param {DescribeMalwaresRequest} req
     * @param {function(string, DescribeMalwaresResponse):void} cb
     * @public
     */
    DescribeMalwares(req, cb) {
        let resp = new DescribeMalwaresResponse();
        this.request("DescribeMalwares", req, resp, cb);
    }


}
module.exports = YunjingClient;
