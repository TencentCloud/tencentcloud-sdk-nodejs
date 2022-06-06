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
const Compression = models.Compression;
const HostCertSetting = models.HostCertSetting;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const DescribeZoneDetailsResponse = models.DescribeZoneDetailsResponse;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const ScanDnsRecordsResponse = models.ScanDnsRecordsResponse;
const ZoneFilter = models.ZoneFilter;
const ModifyLoadBalancingStatusResponse = models.ModifyLoadBalancingStatusResponse;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const ModifyDnsRecordRequest = models.ModifyDnsRecordRequest;
const CreateApplicationProxyRulesRequest = models.CreateApplicationProxyRulesRequest;
const LoadBalancing = models.LoadBalancing;
const ModifyDnssecRequest = models.ModifyDnssecRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const DescribeApplicationProxyDetailRequest = models.DescribeApplicationProxyDetailRequest;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const ImportDnsRecordsRequest = models.ImportDnsRecordsRequest;
const CacheConfigNoCache = models.CacheConfigNoCache;
const Origin = models.Origin;
const Task = models.Task;
const CertSort = models.CertSort;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const ModifyZoneRequest = models.ModifyZoneRequest;
const DeleteZoneResponse = models.DeleteZoneResponse;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const DescribeIdentificationRequest = models.DescribeIdentificationRequest;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const L7OfflineLog = models.L7OfflineLog;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const Zone = models.Zone;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const CacheConfigCache = models.CacheConfigCache;
const CertFilter = models.CertFilter;
const ModifyLoadBalancingStatusRequest = models.ModifyLoadBalancingStatusRequest;
const Quic = models.Quic;
const DescribeCnameStatusResponse = models.DescribeCnameStatusResponse;
const DescribeLoadBalancingRequest = models.DescribeLoadBalancingRequest;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const CnameStatus = models.CnameStatus;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const ServerCertInfo = models.ServerCertInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const OriginRecord = models.OriginRecord;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const CacheConfigFollowOrigin = models.CacheConfigFollowOrigin;
const VanityNameServers = models.VanityNameServers;
const DescribeApplicationProxyResponse = models.DescribeApplicationProxyResponse;
const CreateLoadBalancingResponse = models.CreateLoadBalancingResponse;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DataItem = models.DataItem;
const ModifyLoadBalancingRequest = models.ModifyLoadBalancingRequest;
const CreateLoadBalancingRequest = models.CreateLoadBalancingRequest;
const DescribeDnssecRequest = models.DescribeDnssecRequest;
const DescribeLoadBalancingDetailResponse = models.DescribeLoadBalancingDetailResponse;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const DnsRecord = models.DnsRecord;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const FailReason = models.FailReason;
const CreateZoneRequest = models.CreateZoneRequest;
const OriginRecordPrivateParameter = models.OriginRecordPrivateParameter;
const CheckCertificateResponse = models.CheckCertificateResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DeleteLoadBalancingResponse = models.DeleteLoadBalancingResponse;
const CheckCertificateRequest = models.CheckCertificateRequest;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const ForceRedirect = models.ForceRedirect;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const DetailHost = models.DetailHost;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const DescribeApplicationProxyDetailResponse = models.DescribeApplicationProxyDetailResponse;
const ModifyZoneCnameSpeedUpRequest = models.ModifyZoneCnameSpeedUpRequest;
const DescribeHostsCertificateRequest = models.DescribeHostsCertificateRequest;
const Hsts = models.Hsts;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const ModifyLoadBalancingResponse = models.ModifyLoadBalancingResponse;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const ModifyDnsRecordResponse = models.ModifyDnsRecordResponse;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const PostMaxSize = models.PostMaxSize;
const DescribeCnameStatusRequest = models.DescribeCnameStatusRequest;
const DescribeDnssecResponse = models.DescribeDnssecResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const DnsDataFilter = models.DnsDataFilter;
const DeleteLoadBalancingRequest = models.DeleteLoadBalancingRequest;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const CacheKey = models.CacheKey;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const Header = models.Header;
const DescribeZoneDetailsRequest = models.DescribeZoneDetailsRequest;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const DescribeApplicationProxyRequest = models.DescribeApplicationProxyRequest;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const QueryString = models.QueryString;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const DeleteZoneRequest = models.DeleteZoneRequest;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const ClientIp = models.ClientIp;
const DescribeHostsCertificateResponse = models.DescribeHostsCertificateResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const CacheConfig = models.CacheConfig;
const ModifyZoneCnameSpeedUpResponse = models.ModifyZoneCnameSpeedUpResponse;
const MaxAge = models.MaxAge;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const CreateApplicationProxyRulesResponse = models.CreateApplicationProxyRulesResponse;
const DescribeIdentificationResponse = models.DescribeIdentificationResponse;
const OriginGroup = models.OriginGroup;
const DescribeLoadBalancingResponse = models.DescribeLoadBalancingResponse;
const ModifyDnssecResponse = models.ModifyDnssecResponse;
const ScanDnsRecordsRequest = models.ScanDnsRecordsRequest;
const ImportDnsRecordsResponse = models.ImportDnsRecordsResponse;
const DescribeLoadBalancingDetailRequest = models.DescribeLoadBalancingDetailRequest;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const DnssecInfo = models.DnssecInfo;
const DnsRecordFilter = models.DnsRecordFilter;
const UpstreamHttp2 = models.UpstreamHttp2;
const OfflineCache = models.OfflineCache;
const VanityNameServersIps = models.VanityNameServersIps;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-01-06", credential, region, profile);
    }
    
    /**
     * 创建 DNS 记录
     * @param {CreateDnsRecordRequest} req
     * @param {function(string, CreateDnsRecordResponse):void} cb
     * @public
     */
    CreateDnsRecord(req, cb) {
        let resp = new CreateDnsRecordResponse();
        this.request("CreateDnsRecord", req, resp, cb);
    }

    /**
     * 查询验证结果
     * @param {DescribeIdentificationRequest} req
     * @param {function(string, DescribeIdentificationResponse):void} cb
     * @public
     */
    DescribeIdentification(req, cb) {
        let resp = new DescribeIdentificationResponse();
        this.request("DescribeIdentification", req, resp, cb);
    }

    /**
     * 修改应用代理规则
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * 删除应用代理
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * 批量创建应用代理规则
     * @param {CreateApplicationProxyRulesRequest} req
     * @param {function(string, CreateApplicationProxyRulesResponse):void} cb
     * @public
     */
    CreateApplicationProxyRules(req, cb) {
        let resp = new CreateApplicationProxyRulesResponse();
        this.request("CreateApplicationProxyRules", req, resp, cb);
    }

    /**
     * 创建清除缓存任务
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * 查询清除缓存历史记录
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * 用于修改域名证书
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * 查询预热任务状态
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * 开启，关闭 CNAME 加速
     * @param {ModifyZoneCnameSpeedUpRequest} req
     * @param {function(string, ModifyZoneCnameSpeedUpResponse):void} cb
     * @public
     */
    ModifyZoneCnameSpeedUp(req, cb) {
        let resp = new ModifyZoneCnameSpeedUpResponse();
        this.request("ModifyZoneCnameSpeedUp", req, resp, cb);
    }

    /**
     * 修改 DNS 记录
     * @param {ModifyDnsRecordRequest} req
     * @param {function(string, ModifyDnsRecordResponse):void} cb
     * @public
     */
    ModifyDnsRecord(req, cb) {
        let resp = new ModifyDnsRecordResponse();
        this.request("ModifyDnsRecord", req, resp, cb);
    }

    /**
     * 修改应用代理
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * 用于用户接入新的站点
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * 用于查询域名配置信息
     * @param {DescribeHostsSettingRequest} req
     * @param {function(string, DescribeHostsSettingResponse):void} cb
     * @public
     */
    DescribeHostsSetting(req, cb) {
        let resp = new DescribeHostsSettingResponse();
        this.request("DescribeHostsSetting", req, resp, cb);
    }

    /**
     * 修改负载均衡
     * @param {ModifyLoadBalancingRequest} req
     * @param {function(string, ModifyLoadBalancingResponse):void} cb
     * @public
     */
    ModifyLoadBalancing(req, cb) {
        let resp = new ModifyLoadBalancingResponse();
        this.request("ModifyLoadBalancing", req, resp, cb);
    }

    /**
     * 创建负载均衡
     * @param {CreateLoadBalancingRequest} req
     * @param {function(string, CreateLoadBalancingResponse):void} cb
     * @public
     */
    CreateLoadBalancing(req, cb) {
        let resp = new CreateLoadBalancingResponse();
        this.request("CreateLoadBalancing", req, resp, cb);
    }

    /**
     * 用于验证站点所有权
     * @param {IdentifyZoneRequest} req
     * @param {function(string, IdentifyZoneResponse):void} cb
     * @public
     */
    IdentifyZone(req, cb) {
        let resp = new IdentifyZoneResponse();
        this.request("IdentifyZone", req, resp, cb);
    }

    /**
     * 查询默认证书列表
     * @param {DescribeDefaultCertificatesRequest} req
     * @param {function(string, DescribeDefaultCertificatesResponse):void} cb
     * @public
     */
    DescribeDefaultCertificates(req, cb) {
        let resp = new DescribeDefaultCertificatesResponse();
        this.request("DescribeDefaultCertificates", req, resp, cb);
    }

    /**
     * 获取DNS请求数统计曲线
     * @param {DescribeDnsDataRequest} req
     * @param {function(string, DescribeDnsDataResponse):void} cb
     * @public
     */
    DescribeDnsData(req, cb) {
        let resp = new DescribeDnsDataResponse();
        this.request("DescribeDnsData", req, resp, cb);
    }

    /**
     * 用于查询站点的所有配置信息。
     * @param {DescribeZoneSettingRequest} req
     * @param {function(string, DescribeZoneSettingResponse):void} cb
     * @public
     */
    DescribeZoneSetting(req, cb) {
        let resp = new DescribeZoneSettingResponse();
        this.request("DescribeZoneSetting", req, resp, cb);
    }

    /**
     * 获取负载均衡列表
     * @param {DescribeLoadBalancingRequest} req
     * @param {function(string, DescribeLoadBalancingResponse):void} cb
     * @public
     */
    DescribeLoadBalancing(req, cb) {
        let resp = new DescribeLoadBalancingResponse();
        this.request("DescribeLoadBalancing", req, resp, cb);
    }

    /**
     * 查询域名证书列表，支持搜索、分页、排序、过滤。
     * @param {DescribeHostsCertificateRequest} req
     * @param {function(string, DescribeHostsCertificateResponse):void} cb
     * @public
     */
    DescribeHostsCertificate(req, cb) {
        let resp = new DescribeHostsCertificateResponse();
        this.request("DescribeHostsCertificate", req, resp, cb);
    }

    /**
     * 创建应用代理规则
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * 获取应用代理详细信息
     * @param {DescribeApplicationProxyDetailRequest} req
     * @param {function(string, DescribeApplicationProxyDetailResponse):void} cb
     * @public
     */
    DescribeApplicationProxyDetail(req, cb) {
        let resp = new DescribeApplicationProxyDetailResponse();
        this.request("DescribeApplicationProxyDetail", req, resp, cb);
    }

    /**
     * 删除负载均衡
     * @param {DeleteLoadBalancingRequest} req
     * @param {function(string, DeleteLoadBalancingResponse):void} cb
     * @public
     */
    DeleteLoadBalancing(req, cb) {
        let resp = new DeleteLoadBalancingResponse();
        this.request("DeleteLoadBalancing", req, resp, cb);
    }

    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点
     * @param {ReclaimZoneRequest} req
     * @param {function(string, ReclaimZoneResponse):void} cb
     * @public
     */
    ReclaimZone(req, cb) {
        let resp = new ReclaimZoneResponse();
        this.request("ReclaimZone", req, resp, cb);
    }

    /**
     * 删除站点
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * 用于开启，关闭站点
     * @param {ModifyZoneStatusRequest} req
     * @param {function(string, ModifyZoneStatusResponse):void} cb
     * @public
     */
    ModifyZoneStatus(req, cb) {
        let resp = new ModifyZoneStatusResponse();
        this.request("ModifyZoneStatus", req, resp, cb);
    }

    /**
     * 查询七层离线日志
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * 修改负载均衡状态
     * @param {ModifyLoadBalancingStatusRequest} req
     * @param {function(string, ModifyLoadBalancingStatusResponse):void} cb
     * @public
     */
    ModifyLoadBalancingStatus(req, cb) {
        let resp = new ModifyLoadBalancingStatusResponse();
        this.request("ModifyLoadBalancingStatus", req, resp, cb);
    }

    /**
     * 删除应用代理规则
     * @param {DeleteApplicationProxyRuleRequest} req
     * @param {function(string, DeleteApplicationProxyRuleResponse):void} cb
     * @public
     */
    DeleteApplicationProxyRule(req, cb) {
        let resp = new DeleteApplicationProxyRuleResponse();
        this.request("DeleteApplicationProxyRule", req, resp, cb);
    }

    /**
     * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
     * @param {DescribeDnsRecordsRequest} req
     * @param {function(string, DescribeDnsRecordsResponse):void} cb
     * @public
     */
    DescribeDnsRecords(req, cb) {
        let resp = new DescribeDnsRecordsResponse();
        this.request("DescribeDnsRecords", req, resp, cb);
    }

    /**
     * 扫描站点历史解析记录
     * @param {ScanDnsRecordsRequest} req
     * @param {function(string, ScanDnsRecordsResponse):void} cb
     * @public
     */
    ScanDnsRecords(req, cb) {
        let resp = new ScanDnsRecordsResponse();
        this.request("ScanDnsRecords", req, resp, cb);
    }

    /**
     * 获取应用代理列表
     * @param {DescribeApplicationProxyRequest} req
     * @param {function(string, DescribeApplicationProxyResponse):void} cb
     * @public
     */
    DescribeApplicationProxy(req, cb) {
        let resp = new DescribeApplicationProxyResponse();
        this.request("DescribeApplicationProxy", req, resp, cb);
    }

    /**
     * 批量删除 DNS 记录
     * @param {DeleteDnsRecordsRequest} req
     * @param {function(string, DeleteDnsRecordsResponse):void} cb
     * @public
     */
    DeleteDnsRecords(req, cb) {
        let resp = new DeleteDnsRecordsResponse();
        this.request("DeleteDnsRecords", req, resp, cb);
    }

    /**
     * 用该站点信息
     * @param {ModifyZoneRequest} req
     * @param {function(string, ModifyZoneResponse):void} cb
     * @public
     */
    ModifyZone(req, cb) {
        let resp = new ModifyZoneResponse();
        this.request("ModifyZone", req, resp, cb);
    }

    /**
     * 创建预热任务
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * 修改默认证书状态
     * @param {ModifyDefaultCertificateRequest} req
     * @param {function(string, ModifyDefaultCertificateResponse):void} cb
     * @public
     */
    ModifyDefaultCertificate(req, cb) {
        let resp = new ModifyDefaultCertificateResponse();
        this.request("ModifyDefaultCertificate", req, resp, cb);
    }

    /**
     * 导入 DNS 记录
     * @param {ImportDnsRecordsRequest} req
     * @param {function(string, ImportDnsRecordsResponse):void} cb
     * @public
     */
    ImportDnsRecords(req, cb) {
        let resp = new ImportDnsRecordsResponse();
        this.request("ImportDnsRecords", req, resp, cb);
    }

    /**
     * 获取负载均衡详细信息
     * @param {DescribeLoadBalancingDetailRequest} req
     * @param {function(string, DescribeLoadBalancingDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancingDetail(req, cb) {
        let resp = new DescribeLoadBalancingDetailResponse();
        this.request("DescribeLoadBalancingDetail", req, resp, cb);
    }

    /**
     * 校验证书
     * @param {CheckCertificateRequest} req
     * @param {function(string, CheckCertificateResponse):void} cb
     * @public
     */
    CheckCertificate(req, cb) {
        let resp = new CheckCertificateResponse();
        this.request("CheckCertificate", req, resp, cb);
    }

    /**
     * 查询域名 CNAME 状态
     * @param {DescribeCnameStatusRequest} req
     * @param {function(string, DescribeCnameStatusResponse):void} cb
     * @public
     */
    DescribeCnameStatus(req, cb) {
        let resp = new DescribeCnameStatusResponse();
        this.request("DescribeCnameStatus", req, resp, cb);
    }

    /**
     * 用户查询用户站点信息列表，支持分页
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 用于查询 DNSSEC 相关信息
     * @param {DescribeDnssecRequest} req
     * @param {function(string, DescribeDnssecResponse):void} cb
     * @public
     */
    DescribeDnssec(req, cb) {
        let resp = new DescribeDnssecResponse();
        this.request("DescribeDnssec", req, resp, cb);
    }

    /**
     * 根据站点 ID 查询站点的详细信息
     * @param {DescribeZoneDetailsRequest} req
     * @param {function(string, DescribeZoneDetailsResponse):void} cb
     * @public
     */
    DescribeZoneDetails(req, cb) {
        let resp = new DescribeZoneDetailsResponse();
        this.request("DescribeZoneDetails", req, resp, cb);
    }

    /**
     * 创建应用代理
     * @param {CreateApplicationProxyRequest} req
     * @param {function(string, CreateApplicationProxyResponse):void} cb
     * @public
     */
    CreateApplicationProxy(req, cb) {
        let resp = new CreateApplicationProxyResponse();
        this.request("CreateApplicationProxy", req, resp, cb);
    }

    /**
     * 用于修改站点配置
     * @param {ModifyZoneSettingRequest} req
     * @param {function(string, ModifyZoneSettingResponse):void} cb
     * @public
     */
    ModifyZoneSetting(req, cb) {
        let resp = new ModifyZoneSettingResponse();
        this.request("ModifyZoneSetting", req, resp, cb);
    }

    /**
     * 修改应用代理的状态
     * @param {ModifyApplicationProxyStatusRequest} req
     * @param {function(string, ModifyApplicationProxyStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyStatus(req, cb) {
        let resp = new ModifyApplicationProxyStatusResponse();
        this.request("ModifyApplicationProxyStatus", req, resp, cb);
    }

    /**
     * 修改应用代理规则的状态
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
    }

    /**
     * 修改 DNSSEC 状态
     * @param {ModifyDnssecRequest} req
     * @param {function(string, ModifyDnssecResponse):void} cb
     * @public
     */
    ModifyDnssec(req, cb) {
        let resp = new ModifyDnssecResponse();
        this.request("ModifyDnssec", req, resp, cb);
    }


}
module.exports = TeoClient;
