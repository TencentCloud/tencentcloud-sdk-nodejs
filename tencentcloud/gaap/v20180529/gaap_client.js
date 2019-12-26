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
const RegionDetail = models.RegionDetail;
const DescribeUDPListenersRequest = models.DescribeUDPListenersRequest;
const DeleteProxyGroupRequest = models.DeleteProxyGroupRequest;
const DescribeResourcesByTagRequest = models.DescribeResourcesByTagRequest;
const DescribeListenerStatisticsRequest = models.DescribeListenerStatisticsRequest;
const DescribeProxyAndStatisticsListenersResponse = models.DescribeProxyAndStatisticsListenersResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const BindRuleRealServersRequest = models.BindRuleRealServersRequest;
const DescribeHTTPSListenersResponse = models.DescribeHTTPSListenersResponse;
const ModifyProxiesProjectRequest = models.ModifyProxiesProjectRequest;
const DomainErrorPageInfo = models.DomainErrorPageInfo;
const DescribeCertificateDetailRequest = models.DescribeCertificateDetailRequest;
const TagResourceInfo = models.TagResourceInfo;
const SetAuthenticationResponse = models.SetAuthenticationResponse;
const DescribeProxyGroupStatisticsResponse = models.DescribeProxyGroupStatisticsResponse;
const DescribeResourcesByTagResponse = models.DescribeResourcesByTagResponse;
const ModifyGroupDomainConfigRequest = models.ModifyGroupDomainConfigRequest;
const BandwidthPriceGradient = models.BandwidthPriceGradient;
const DescribeHTTPListenersRequest = models.DescribeHTTPListenersRequest;
const ModifyRealServerNameResponse = models.ModifyRealServerNameResponse;
const DescribeGroupDomainConfigResponse = models.DescribeGroupDomainConfigResponse;
const ModifyCertificateResponse = models.ModifyCertificateResponse;
const OpenSecurityPolicyRequest = models.OpenSecurityPolicyRequest;
const DeleteDomainErrorPageInfoRequest = models.DeleteDomainErrorPageInfoRequest;
const DescribeListenerRealServersRequest = models.DescribeListenerRealServersRequest;
const DescribeProxyGroupStatisticsRequest = models.DescribeProxyGroupStatisticsRequest;
const DescribeHTTPSListenersRequest = models.DescribeHTTPSListenersRequest;
const DescribeAccessRegionsByDestRegionResponse = models.DescribeAccessRegionsByDestRegionResponse;
const DescribeCountryAreaMappingRequest = models.DescribeCountryAreaMappingRequest;
const CheckProxyCreateResponse = models.CheckProxyCreateResponse;
const ModifyCertificateRequest = models.ModifyCertificateRequest;
const DestroyProxiesRequest = models.DestroyProxiesRequest;
const DescribeRulesResponse = models.DescribeRulesResponse;
const DescribeProxiesResponse = models.DescribeProxiesResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const ModifyRealServerNameRequest = models.ModifyRealServerNameRequest;
const DeleteProxyGroupResponse = models.DeleteProxyGroupResponse;
const CreateDomainErrorPageInfoResponse = models.CreateDomainErrorPageInfoResponse;
const BindListenerRealServersRequest = models.BindListenerRealServersRequest;
const ModifyProxyConfigurationRequest = models.ModifyProxyConfigurationRequest;
const DescribeRuleRealServersRequest = models.DescribeRuleRealServersRequest;
const DescribeGroupDomainConfigRequest = models.DescribeGroupDomainConfigRequest;
const CreateProxyGroupDomainRequest = models.CreateProxyGroupDomainRequest;
const CreateTCPListenersRequest = models.CreateTCPListenersRequest;
const CertificateDetail = models.CertificateDetail;
const DescribeListenerStatisticsResponse = models.DescribeListenerStatisticsResponse;
const DescribeProxyGroupDetailsRequest = models.DescribeProxyGroupDetailsRequest;
const CloseProxiesRequest = models.CloseProxiesRequest;
const DescribeListenerRealServersResponse = models.DescribeListenerRealServersResponse;
const DescribeProxyDetailRequest = models.DescribeProxyDetailRequest;
const ModifyTCPListenerAttributeRequest = models.ModifyTCPListenerAttributeRequest;
const DeleteDomainRequest = models.DeleteDomainRequest;
const OpenSecurityPolicyResponse = models.OpenSecurityPolicyResponse;
const ModifyCertificateAttributesResponse = models.ModifyCertificateAttributesResponse;
const DescribeSecurityPolicyDetailResponse = models.DescribeSecurityPolicyDetailResponse;
const CreateHTTPListenerResponse = models.CreateHTTPListenerResponse;
const ModifyUDPListenerAttributeResponse = models.ModifyUDPListenerAttributeResponse;
const CreateProxyGroupRequest = models.CreateProxyGroupRequest;
const RuleInfo = models.RuleInfo;
const RealServerStatus = models.RealServerStatus;
const DescribeTCPListenersResponse = models.DescribeTCPListenersResponse;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeCountryAreaMappingResponse = models.DescribeCountryAreaMappingResponse;
const DescribeRealServersResponse = models.DescribeRealServersResponse;
const ModifyHTTPListenerAttributeResponse = models.ModifyHTTPListenerAttributeResponse;
const DescribeRealServerStatisticsRequest = models.DescribeRealServerStatisticsRequest;
const BindRealServerInfo = models.BindRealServerInfo;
const DescribeProxyAndStatisticsListenersRequest = models.DescribeProxyAndStatisticsListenersRequest;
const DescribeAccessRegionsResponse = models.DescribeAccessRegionsResponse;
const DeleteListenersRequest = models.DeleteListenersRequest;
const DescribeSecurityRulesRequest = models.DescribeSecurityRulesRequest;
const DescribeDestRegionsResponse = models.DescribeDestRegionsResponse;
const DescribeDomainErrorPageInfoByIdsResponse = models.DescribeDomainErrorPageInfoByIdsResponse;
const DescribeProxiesRequest = models.DescribeProxiesRequest;
const BindListenerRealServersResponse = models.BindListenerRealServersResponse;
const ModifyProxyGroupAttributeResponse = models.ModifyProxyGroupAttributeResponse;
const ListenerInfo = models.ListenerInfo;
const DescribeUDPListenersResponse = models.DescribeUDPListenersResponse;
const CreateUDPListenersRequest = models.CreateUDPListenersRequest;
const ModifyRuleAttributeRequest = models.ModifyRuleAttributeRequest;
const CreateSecurityPolicyResponse = models.CreateSecurityPolicyResponse;
const TCPListener = models.TCPListener;
const CreateSecurityRulesResponse = models.CreateSecurityRulesResponse;
const DescribeAccessRegionsRequest = models.DescribeAccessRegionsRequest;
const CreateCertificateRequest = models.CreateCertificateRequest;
const DescribeCertificatesResponse = models.DescribeCertificatesResponse;
const DescribeProxyGroupListResponse = models.DescribeProxyGroupListResponse;
const DescribeDomainErrorPageInfoRequest = models.DescribeDomainErrorPageInfoRequest;
const HTTPSListener = models.HTTPSListener;
const DomainAccessRegionDict = models.DomainAccessRegionDict;
const CloseSecurityPolicyRequest = models.CloseSecurityPolicyRequest;
const ModifyCertificateAttributesRequest = models.ModifyCertificateAttributesRequest;
const TagPair = models.TagPair;
const CreateSecurityRulesRequest = models.CreateSecurityRulesRequest;
const DescribeCertificatesRequest = models.DescribeCertificatesRequest;
const DescribeProxiesStatusRequest = models.DescribeProxiesStatusRequest;
const ProxyStatus = models.ProxyStatus;
const DescribeGroupAndStatisticsProxyResponse = models.DescribeGroupAndStatisticsProxyResponse;
const CreateDomainResponse = models.CreateDomainResponse;
const ModifyProxiesProjectResponse = models.ModifyProxiesProjectResponse;
const ModifyDomainRequest = models.ModifyDomainRequest;
const ModifySecurityRuleRequest = models.ModifySecurityRuleRequest;
const NationCountryInnerInfo = models.NationCountryInnerInfo;
const DescribeAccessRegionsByDestRegionRequest = models.DescribeAccessRegionsByDestRegionRequest;
const RealServer = models.RealServer;
const DescribeRealServersRequest = models.DescribeRealServersRequest;
const StatisticsDataInfo = models.StatisticsDataInfo;
const ProxyGroupInfo = models.ProxyGroupInfo;
const CreateProxyGroupDomainResponse = models.CreateProxyGroupDomainResponse;
const Certificate = models.Certificate;
const DescribeDomainErrorPageInfoResponse = models.DescribeDomainErrorPageInfoResponse;
const DestroyProxiesResponse = models.DestroyProxiesResponse;
const DescribeRuleRealServersResponse = models.DescribeRuleRealServersResponse;
const DescribeRealServersStatusRequest = models.DescribeRealServersStatusRequest;
const ModifyHTTPListenerAttributeRequest = models.ModifyHTTPListenerAttributeRequest;
const CreateProxyRequest = models.CreateProxyRequest;
const DeleteCertificateRequest = models.DeleteCertificateRequest;
const ModifySecurityRuleResponse = models.ModifySecurityRuleResponse;
const DescribeProxiesStatusResponse = models.DescribeProxiesStatusResponse;
const RemoveRealServersRequest = models.RemoveRealServersRequest;
const CreateDomainRequest = models.CreateDomainRequest;
const CreateRuleRequest = models.CreateRuleRequest;
const DeleteSecurityPolicyRequest = models.DeleteSecurityPolicyRequest;
const HTTPListener = models.HTTPListener;
const ProxyGroupDetail = models.ProxyGroupDetail;
const CreateHTTPListenerRequest = models.CreateHTTPListenerRequest;
const CloseSecurityPolicyResponse = models.CloseSecurityPolicyResponse;
const DescribeRegionAndPriceResponse = models.DescribeRegionAndPriceResponse;
const AddRealServersResponse = models.AddRealServersResponse;
const CloseProxiesResponse = models.CloseProxiesResponse;
const DeleteCertificateResponse = models.DeleteCertificateResponse;
const SecurityPolicyRuleIn = models.SecurityPolicyRuleIn;
const ProxySimpleInfo = models.ProxySimpleInfo;
const DescribeDestRegionsRequest = models.DescribeDestRegionsRequest;
const ModifyRuleAttributeResponse = models.ModifyRuleAttributeResponse;
const CreateTCPListenersResponse = models.CreateTCPListenersResponse;
const DescribeSecurityPolicyDetailRequest = models.DescribeSecurityPolicyDetailRequest;
const ModifyDomainResponse = models.ModifyDomainResponse;
const DescribeRulesByRuleIdsResponse = models.DescribeRulesByRuleIdsResponse;
const SetAuthenticationRequest = models.SetAuthenticationRequest;
const InquiryPriceCreateProxyResponse = models.InquiryPriceCreateProxyResponse;
const NewRealServer = models.NewRealServer;
const DescribeHTTPListenersResponse = models.DescribeHTTPListenersResponse;
const HttpHeaderParam = models.HttpHeaderParam;
const DescribeRealServerStatisticsResponse = models.DescribeRealServerStatisticsResponse;
const AccessRegionDomainConf = models.AccessRegionDomainConf;
const DeleteDomainResponse = models.DeleteDomainResponse;
const DeleteListenersResponse = models.DeleteListenersResponse;
const RuleCheckParams = models.RuleCheckParams;
const CreateSecurityPolicyRequest = models.CreateSecurityPolicyRequest;
const ModifyHTTPSListenerAttributeResponse = models.ModifyHTTPSListenerAttributeResponse;
const AccessRegionDetial = models.AccessRegionDetial;
const DescribeProxyGroupListRequest = models.DescribeProxyGroupListRequest;
const SecurityPolicyRuleOut = models.SecurityPolicyRuleOut;
const BindRealServer = models.BindRealServer;
const GroupStatisticsInfo = models.GroupStatisticsInfo;
const CreateProxyGroupResponse = models.CreateProxyGroupResponse;
const CreateHTTPSListenerResponse = models.CreateHTTPSListenerResponse;
const DeleteRuleResponse = models.DeleteRuleResponse;
const BindRuleRealServersResponse = models.BindRuleRealServersResponse;
const DescribeGroupAndStatisticsProxyRequest = models.DescribeGroupAndStatisticsProxyRequest;
const ModifyUDPListenerAttributeRequest = models.ModifyUDPListenerAttributeRequest;
const DeleteSecurityRulesResponse = models.DeleteSecurityRulesResponse;
const ModifyTCPListenerAttributeResponse = models.ModifyTCPListenerAttributeResponse;
const CountryAreaMap = models.CountryAreaMap;
const MetricStatisticsInfo = models.MetricStatisticsInfo;
const DescribeProxyDetailResponse = models.DescribeProxyDetailResponse;
const DeleteSecurityPolicyResponse = models.DeleteSecurityPolicyResponse;
const CreateUDPListenersResponse = models.CreateUDPListenersResponse;
const ModifyHTTPSListenerAttributeRequest = models.ModifyHTTPSListenerAttributeRequest;
const DescribeProxyStatisticsRequest = models.DescribeProxyStatisticsRequest;
const DomainRuleSet = models.DomainRuleSet;
const DescribeTCPListenersRequest = models.DescribeTCPListenersRequest;
const CreateCertificateResponse = models.CreateCertificateResponse;
const ModifyGroupDomainConfigResponse = models.ModifyGroupDomainConfigResponse;
const DescribeProxyStatisticsResponse = models.DescribeProxyStatisticsResponse;
const DescribeRealServersStatusResponse = models.DescribeRealServersStatusResponse;
const ModifyProxyGroupAttributeRequest = models.ModifyProxyGroupAttributeRequest;
const DescribeCertificateDetailResponse = models.DescribeCertificateDetailResponse;
const DeleteDomainErrorPageInfoResponse = models.DeleteDomainErrorPageInfoResponse;
const ModifyProxiesAttributeResponse = models.ModifyProxiesAttributeResponse;
const DescribeDomainErrorPageInfoByIdsRequest = models.DescribeDomainErrorPageInfoByIdsRequest;
const CheckProxyCreateRequest = models.CheckProxyCreateRequest;
const DescribeRegionAndPriceRequest = models.DescribeRegionAndPriceRequest;
const AddRealServersRequest = models.AddRealServersRequest;
const ModifyProxiesAttributeRequest = models.ModifyProxiesAttributeRequest;
const DescribeSecurityRulesResponse = models.DescribeSecurityRulesResponse;
const CertificateAliasInfo = models.CertificateAliasInfo;
const CreateHTTPSListenerRequest = models.CreateHTTPSListenerRequest;
const DeleteSecurityRulesRequest = models.DeleteSecurityRulesRequest;
const ProxyIdDict = models.ProxyIdDict;
const Filter = models.Filter;
const CreateProxyResponse = models.CreateProxyResponse;
const OpenProxiesRequest = models.OpenProxiesRequest;
const InquiryPriceCreateProxyRequest = models.InquiryPriceCreateProxyRequest;
const DescribeProxyGroupDetailsResponse = models.DescribeProxyGroupDetailsResponse;
const UDPListener = models.UDPListener;
const ProxyInfo = models.ProxyInfo;
const RemoveRealServersResponse = models.RemoveRealServersResponse;
const DescribeRulesByRuleIdsRequest = models.DescribeRulesByRuleIdsRequest;
const RealServerBindSetReq = models.RealServerBindSetReq;
const OpenProxiesResponse = models.OpenProxiesResponse;
const ModifyProxyConfigurationResponse = models.ModifyProxyConfigurationResponse;
const CreateDomainErrorPageInfoRequest = models.CreateDomainErrorPageInfoRequest;


/**
 * gaap client
 * @class
 */
class GaapClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gaap.tencentcloudapi.com", "2018-05-29", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeProxyGroupList）用于拉取通道组列表及各通道组基本信息。
     * @param {DescribeProxyGroupListRequest} req
     * @param {function(string, DescribeProxyGroupListResponse):void} cb
     * @public
     */
    DescribeProxyGroupList(req, cb) {
        let resp = new DescribeProxyGroupListResponse();
        this.request("DescribeProxyGroupList", req, resp, cb);
    }

    /**
     * 开启安全策略
     * @param {OpenSecurityPolicyRequest} req
     * @param {function(string, OpenSecurityPolicyResponse):void} cb
     * @public
     */
    OpenSecurityPolicy(req, cb) {
        let resp = new OpenSecurityPolicyResponse();
        this.request("OpenSecurityPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeCertificates）用来查询可以使用的证书列表。
     * @param {DescribeCertificatesRequest} req
     * @param {function(string, DescribeCertificatesResponse):void} cb
     * @public
     */
    DescribeCertificates(req, cb) {
        let resp = new DescribeCertificatesResponse();
        this.request("DescribeCertificates", req, resp, cb);
    }

    /**
     * 添加安全策略规则
     * @param {CreateSecurityRulesRequest} req
     * @param {function(string, CreateSecurityRulesResponse):void} cb
     * @public
     */
    CreateSecurityRules(req, cb) {
        let resp = new CreateSecurityRulesResponse();
        this.request("CreateSecurityRules", req, resp, cb);
    }

    /**
     * 修改安全策略规则名
     * @param {ModifySecurityRuleRequest} req
     * @param {function(string, ModifySecurityRuleResponse):void} cb
     * @public
     */
    ModifySecurityRule(req, cb) {
        let resp = new ModifySecurityRuleResponse();
        this.request("ModifySecurityRule", req, resp, cb);
    }

    /**
     * 本接口（DescribeHTTPSListeners）用来查询HTTPS监听器信息。
     * @param {DescribeHTTPSListenersRequest} req
     * @param {function(string, DescribeHTTPSListenersResponse):void} cb
     * @public
     */
    DescribeHTTPSListeners(req, cb) {
        let resp = new DescribeHTTPSListenersResponse();
        this.request("DescribeHTTPSListeners", req, resp, cb);
    }

    /**
     * 该接口（CreateHTTPSListener）用于在通道实例下创建HTTPS协议类型的监听器。
     * @param {CreateHTTPSListenerRequest} req
     * @param {function(string, CreateHTTPSListenerResponse):void} cb
     * @public
     */
    CreateHTTPSListener(req, cb) {
        let resp = new CreateHTTPSListenerResponse();
        this.request("CreateHTTPSListener", req, resp, cb);
    }

    /**
     * 删除安全策略
     * @param {DeleteSecurityPolicyRequest} req
     * @param {function(string, DeleteSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteSecurityPolicy(req, cb) {
        let resp = new DeleteSecurityPolicyResponse();
        this.request("DeleteSecurityPolicy", req, resp, cb);
    }

    /**
     * 该接口（DescribeRealServerStatistics）用于查询源站健康检查结果的统计数据。源站状态展示位为1：正常或者0：异常。查询的源站需要在监听器或者规则上进行了绑定，查询时需指定绑定的监听器或者规则ID。该接口支持最近1，3，6，12，24小时内1分钟细粒度的源站状态统计数据展示。
     * @param {DescribeRealServerStatisticsRequest} req
     * @param {function(string, DescribeRealServerStatisticsResponse):void} cb
     * @public
     */
    DescribeRealServerStatistics(req, cb) {
        let resp = new DescribeRealServerStatisticsResponse();
        this.request("DescribeRealServerStatistics", req, resp, cb);
    }

    /**
     * 本接口（DescribeProxyGroupDetails）用于查询通道组详情。
     * @param {DescribeProxyGroupDetailsRequest} req
     * @param {function(string, DescribeProxyGroupDetailsResponse):void} cb
     * @public
     */
    DescribeProxyGroupDetails(req, cb) {
        let resp = new DescribeProxyGroupDetailsResponse();
        this.request("DescribeProxyGroupDetails", req, resp, cb);
    }

    /**
     * 删除域名的定制错误
     * @param {DeleteDomainErrorPageInfoRequest} req
     * @param {function(string, DeleteDomainErrorPageInfoResponse):void} cb
     * @public
     */
    DeleteDomainErrorPageInfo(req, cb) {
        let resp = new DeleteDomainErrorPageInfoResponse();
        this.request("DeleteDomainErrorPageInfo", req, resp, cb);
    }

    /**
     * 本接口（ModifyCertificate）用于修改监听器下的域名对应的证书。该接口仅适用于version3.0的通道。
     * @param {ModifyCertificateRequest} req
     * @param {function(string, ModifyCertificateResponse):void} cb
     * @public
     */
    ModifyCertificate(req, cb) {
        let resp = new ModifyCertificateResponse();
        this.request("ModifyCertificate", req, resp, cb);
    }

    /**
     * 该接口（DescribeTCPListeners）用于查询单通道或者通道组下的TCP监听器信息。
     * @param {DescribeTCPListenersRequest} req
     * @param {function(string, DescribeTCPListenersResponse):void} cb
     * @public
     */
    DescribeTCPListeners(req, cb) {
        let resp = new DescribeTCPListenersResponse();
        this.request("DescribeTCPListeners", req, resp, cb);
    }

    /**
     * 该接口（CreateRule）用于创建HTTP/HTTPS监听器转发规则。
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * 定制域名指定错误码的错误响应
     * @param {CreateDomainErrorPageInfoRequest} req
     * @param {function(string, CreateDomainErrorPageInfoResponse):void} cb
     * @public
     */
    CreateDomainErrorPageInfo(req, cb) {
        let resp = new CreateDomainErrorPageInfoResponse();
        this.request("CreateDomainErrorPageInfo", req, resp, cb);
    }

    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
     * @param {DescribeProxyGroupStatisticsRequest} req
     * @param {function(string, DescribeProxyGroupStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyGroupStatistics(req, cb) {
        let resp = new DescribeProxyGroupStatisticsResponse();
        this.request("DescribeProxyGroupStatistics", req, resp, cb);
    }

    /**
     * 获取安全策略详情
     * @param {DescribeSecurityPolicyDetailRequest} req
     * @param {function(string, DescribeSecurityPolicyDetailResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyDetail(req, cb) {
        let resp = new DescribeSecurityPolicyDetailResponse();
        this.request("DescribeSecurityPolicyDetail", req, resp, cb);
    }

    /**
     * 本接口（ModifyDomain）用于监听器下的域名。当通道版本为3.0时，支持对该域名所对应的证书修改。
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        let resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }

    /**
     * 本接口（ModifyCertificateAttributes）用于修改证书，包括证明名字以及证书内容。
     * @param {ModifyCertificateAttributesRequest} req
     * @param {function(string, ModifyCertificateAttributesResponse):void} cb
     * @public
     */
    ModifyCertificateAttributes(req, cb) {
        let resp = new ModifyCertificateAttributesResponse();
        this.request("ModifyCertificateAttributes", req, resp, cb);
    }

    /**
     * 该接口（OpenProxies）用于开启一条或者多条通道。
     * @param {OpenProxiesRequest} req
     * @param {function(string, OpenProxiesResponse):void} cb
     * @public
     */
    OpenProxies(req, cb) {
        let resp = new OpenProxiesResponse();
        this.request("OpenProxies", req, resp, cb);
    }

    /**
     * 本接口（DescribeRuleRealServers）用于查询转发规则相关的源站信息， 包括该规则可绑定的源站信息和已绑定的源站信息。
     * @param {DescribeRuleRealServersRequest} req
     * @param {function(string, DescribeRuleRealServersResponse):void} cb
     * @public
     */
    DescribeRuleRealServers(req, cb) {
        let resp = new DescribeRuleRealServersResponse();
        this.request("DescribeRuleRealServers", req, resp, cb);
    }

    /**
     * 本接口（ModifyRealServerName）用于修改源站的名称
     * @param {ModifyRealServerNameRequest} req
     * @param {function(string, ModifyRealServerNameResponse):void} cb
     * @public
     */
    ModifyRealServerName(req, cb) {
        let resp = new ModifyRealServerNameResponse();
        this.request("ModifyRealServerName", req, resp, cb);
    }

    /**
     * 本接口(CheckProxyCreate)用于查询能否创建指定配置的加速通道。
     * @param {CheckProxyCreateRequest} req
     * @param {function(string, CheckProxyCreateResponse):void} cb
     * @public
     */
    CheckProxyCreate(req, cb) {
        let resp = new CheckProxyCreateResponse();
        this.request("CheckProxyCreate", req, resp, cb);
    }

    /**
     * 本接口（DescribeCountryAreaMapping）用于获取国家地区编码映射表。
     * @param {DescribeCountryAreaMappingRequest} req
     * @param {function(string, DescribeCountryAreaMappingResponse):void} cb
     * @public
     */
    DescribeCountryAreaMapping(req, cb) {
        let resp = new DescribeCountryAreaMappingResponse();
        this.request("DescribeCountryAreaMapping", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccessRegions）用于查询加速区域，即客户端接入区域。
     * @param {DescribeAccessRegionsRequest} req
     * @param {function(string, DescribeAccessRegionsResponse):void} cb
     * @public
     */
    DescribeAccessRegions(req, cb) {
        let resp = new DescribeAccessRegionsResponse();
        this.request("DescribeAccessRegions", req, resp, cb);
    }

    /**
     * 删除安全策略规则
     * @param {DeleteSecurityRulesRequest} req
     * @param {function(string, DeleteSecurityRulesResponse):void} cb
     * @public
     */
    DeleteSecurityRules(req, cb) {
        let resp = new DeleteSecurityRulesResponse();
        this.request("DeleteSecurityRules", req, resp, cb);
    }

    /**
     * 该接口（ModifyHTTPListenerAttribute）用于修改通道的HTTP监听器配置信息，目前仅支持修改监听器的名称。
注意：通道组通道暂时不支持HTTP/HTTPS监听器。
     * @param {ModifyHTTPListenerAttributeRequest} req
     * @param {function(string, ModifyHTTPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyHTTPListenerAttribute(req, cb) {
        let resp = new ModifyHTTPListenerAttributeResponse();
        this.request("ModifyHTTPListenerAttribute", req, resp, cb);
    }

    /**
     * 该接口（DeleteRule）用于删除HTTP/HTTPS监听器的转发规则。
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * 本接口（DescribeProxyDetail）用于查询通道详情。
     * @param {DescribeProxyDetailRequest} req
     * @param {function(string, DescribeProxyDetailResponse):void} cb
     * @public
     */
    DescribeProxyDetail(req, cb) {
        let resp = new DescribeProxyDetailResponse();
        this.request("DescribeProxyDetail", req, resp, cb);
    }

    /**
     * 本接口（DeleteCertificate）用于删除证书。
     * @param {DeleteCertificateRequest} req
     * @param {function(string, DeleteCertificateResponse):void} cb
     * @public
     */
    DeleteCertificate(req, cb) {
        let resp = new DeleteCertificateResponse();
        this.request("DeleteCertificate", req, resp, cb);
    }

    /**
     * 创建安全策略
     * @param {CreateSecurityPolicyRequest} req
     * @param {function(string, CreateSecurityPolicyResponse):void} cb
     * @public
     */
    CreateSecurityPolicy(req, cb) {
        let resp = new CreateSecurityPolicyResponse();
        this.request("CreateSecurityPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeProxies）用于查询通道实例列表。
     * @param {DescribeProxiesRequest} req
     * @param {function(string, DescribeProxiesResponse):void} cb
     * @public
     */
    DescribeProxies(req, cb) {
        let resp = new DescribeProxiesResponse();
        this.request("DescribeProxies", req, resp, cb);
    }

    /**
     * 本接口（DeleteProxyGroup）用于删除通道组。
     * @param {DeleteProxyGroupRequest} req
     * @param {function(string, DeleteProxyGroupResponse):void} cb
     * @public
     */
    DeleteProxyGroup(req, cb) {
        let resp = new DeleteProxyGroupResponse();
        this.request("DeleteProxyGroup", req, resp, cb);
    }

    /**
     * 本接口（ModifyProxiesProject）用于修改通道所属项目。
     * @param {ModifyProxiesProjectRequest} req
     * @param {function(string, ModifyProxiesProjectResponse):void} cb
     * @public
     */
    ModifyProxiesProject(req, cb) {
        let resp = new ModifyProxiesProjectResponse();
        this.request("ModifyProxiesProject", req, resp, cb);
    }

    /**
     * 本接口（DescribeGroupDomainConfig）用于获取通道组域名解析配置详情。
     * @param {DescribeGroupDomainConfigRequest} req
     * @param {function(string, DescribeGroupDomainConfigResponse):void} cb
     * @public
     */
    DescribeGroupDomainConfig(req, cb) {
        let resp = new DescribeGroupDomainConfigResponse();
        this.request("DescribeGroupDomainConfig", req, resp, cb);
    }

    /**
     * 该接口（DescribeUDPListeners）用于查询单通道或者通道组下的UDP监听器信息
     * @param {DescribeUDPListenersRequest} req
     * @param {function(string, DescribeUDPListenersResponse):void} cb
     * @public
     */
    DescribeUDPListeners(req, cb) {
        let resp = new DescribeUDPListenersResponse();
        this.request("DescribeUDPListeners", req, resp, cb);
    }

    /**
     * 添加源站(服务器)信息，支持IP或域名
     * @param {AddRealServersRequest} req
     * @param {function(string, AddRealServersResponse):void} cb
     * @public
     */
    AddRealServers(req, cb) {
        let resp = new AddRealServersResponse();
        this.request("AddRealServers", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccessRegionsByDestRegion）根据源站区域查询可用的加速区域列表
     * @param {DescribeAccessRegionsByDestRegionRequest} req
     * @param {function(string, DescribeAccessRegionsByDestRegionResponse):void} cb
     * @public
     */
    DescribeAccessRegionsByDestRegion(req, cb) {
        let resp = new DescribeAccessRegionsByDestRegionResponse();
        this.request("DescribeAccessRegionsByDestRegion", req, resp, cb);
    }

    /**
     * 该接口（ModifyHTTPSListenerAttribute）用于修改HTTPS监听器配置，当前不支持通道组和v1版本通道。
     * @param {ModifyHTTPSListenerAttributeRequest} req
     * @param {function(string, ModifyHTTPSListenerAttributeResponse):void} cb
     * @public
     */
    ModifyHTTPSListenerAttribute(req, cb) {
        let resp = new ModifyHTTPSListenerAttributeResponse();
        this.request("ModifyHTTPSListenerAttribute", req, resp, cb);
    }

    /**
     * 本接口（CreateDomain）用于创建HTTP/HTTPS监听器的访问域名，客户端请求通过访问该域名来请求后端业务。
该接口仅支持version3.0的通道。
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        let resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }

    /**
     * 本接口（ModifyRuleAttribute）用于修改转发规则的信息，包括健康检查的配置以及转发策略。
     * @param {ModifyRuleAttributeRequest} req
     * @param {function(string, ModifyRuleAttributeResponse):void} cb
     * @public
     */
    ModifyRuleAttribute(req, cb) {
        let resp = new ModifyRuleAttributeResponse();
        this.request("ModifyRuleAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeCertificateDetail）用于查询证书详情，包括证书ID，证书名字，证书类型，证书内容以及密钥等信息。
     * @param {DescribeCertificateDetailRequest} req
     * @param {function(string, DescribeCertificateDetailResponse):void} cb
     * @public
     */
    DescribeCertificateDetail(req, cb) {
        let resp = new DescribeCertificateDetailResponse();
        this.request("DescribeCertificateDetail", req, resp, cb);
    }

    /**
     * 关闭安全策略
     * @param {CloseSecurityPolicyRequest} req
     * @param {function(string, CloseSecurityPolicyResponse):void} cb
     * @public
     */
    CloseSecurityPolicy(req, cb) {
        let resp = new CloseSecurityPolicyResponse();
        this.request("CloseSecurityPolicy", req, resp, cb);
    }

    /**
     * 本接口（ModifyGroupDomainConfig）用于配置通道组就近接入域名。
     * @param {ModifyGroupDomainConfigRequest} req
     * @param {function(string, ModifyGroupDomainConfigResponse):void} cb
     * @public
     */
    ModifyGroupDomainConfig(req, cb) {
        let resp = new ModifyGroupDomainConfigResponse();
        this.request("ModifyGroupDomainConfig", req, resp, cb);
    }

    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发，丢包和时延数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
     * @param {DescribeProxyStatisticsRequest} req
     * @param {function(string, DescribeProxyStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyStatistics(req, cb) {
        let resp = new DescribeProxyStatisticsResponse();
        this.request("DescribeProxyStatistics", req, resp, cb);
    }

    /**
     * 删除已添加的源站(服务器)IP或域名
     * @param {RemoveRealServersRequest} req
     * @param {function(string, RemoveRealServersResponse):void} cb
     * @public
     */
    RemoveRealServers(req, cb) {
        let resp = new RemoveRealServersResponse();
        this.request("RemoveRealServers", req, resp, cb);
    }

    /**
     * 查询目前定制域名的错误响应
     * @param {DescribeDomainErrorPageInfoRequest} req
     * @param {function(string, DescribeDomainErrorPageInfoResponse):void} cb
     * @public
     */
    DescribeDomainErrorPageInfo(req, cb) {
        let resp = new DescribeDomainErrorPageInfoResponse();
        this.request("DescribeDomainErrorPageInfo", req, resp, cb);
    }

    /**
     * 本接口（DescribeRealServers）用于查询源站信息，可以根据项目名查询所有的源站信息，此外支持指定IP机或者域名的源站模糊查询。
     * @param {DescribeRealServersRequest} req
     * @param {function(string, DescribeRealServersResponse):void} cb
     * @public
     */
    DescribeRealServers(req, cb) {
        let resp = new DescribeRealServersResponse();
        this.request("DescribeRealServers", req, resp, cb);
    }

    /**
     * 本接口（SetAuthentication）用于通道的高级认证配置，包括认证方式选择，以及各种认证方式对应的证书选择。仅支持Version3.0的通道。
     * @param {SetAuthenticationRequest} req
     * @param {function(string, SetAuthenticationResponse):void} cb
     * @public
     */
    SetAuthentication(req, cb) {
        let resp = new SetAuthenticationResponse();
        this.request("SetAuthentication", req, resp, cb);
    }

    /**
     * 本接口（ModifyUDPListenerAttribute）用于修改通道实例下UDP监听器配置，包括监听器名称和调度策略的修改。
     * @param {ModifyUDPListenerAttributeRequest} req
     * @param {function(string, ModifyUDPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyUDPListenerAttribute(req, cb) {
        let resp = new ModifyUDPListenerAttributeResponse();
        this.request("ModifyUDPListenerAttribute", req, resp, cb);
    }

    /**
     * 该接口为内部接口，用于查询可以获取统计数据的通道和监听器信息
     * @param {DescribeProxyAndStatisticsListenersRequest} req
     * @param {function(string, DescribeProxyAndStatisticsListenersResponse):void} cb
     * @public
     */
    DescribeProxyAndStatisticsListeners(req, cb) {
        let resp = new DescribeProxyAndStatisticsListenersResponse();
        this.request("DescribeProxyAndStatisticsListeners", req, resp, cb);
    }

    /**
     * 该接口（CreateHTTPListener）用于在通道实例下创建HTTP协议类型的监听器。
     * @param {CreateHTTPListenerRequest} req
     * @param {function(string, CreateHTTPListenerResponse):void} cb
     * @public
     */
    CreateHTTPListener(req, cb) {
        let resp = new CreateHTTPListenerResponse();
        this.request("CreateHTTPListener", req, resp, cb);
    }

    /**
     * 本接口（CreateProxyGroupDomain）用于创建通道组域名，并开启域名解析。
     * @param {CreateProxyGroupDomainRequest} req
     * @param {function(string, CreateProxyGroupDomainResponse):void} cb
     * @public
     */
    CreateProxyGroupDomain(req, cb) {
        let resp = new CreateProxyGroupDomainResponse();
        this.request("CreateProxyGroupDomain", req, resp, cb);
    }

    /**
     * 本接口（ModifyProxyConfiguration）用于修改通道的配置。根据当前业务的容量需求，扩容或缩容相关通道的配置。仅支持Scalarable为1的通道,Scalarable可通过接口DescribeProxies获取。
     * @param {ModifyProxyConfigurationRequest} req
     * @param {function(string, ModifyProxyConfigurationResponse):void} cb
     * @public
     */
    ModifyProxyConfiguration(req, cb) {
        let resp = new ModifyProxyConfigurationResponse();
        this.request("ModifyProxyConfiguration", req, resp, cb);
    }

    /**
     * 本接口（DescribeResourcesByTag）用于根据标签来查询对应的资源信息，包括通道，通道组和源站。
     * @param {DescribeResourcesByTagRequest} req
     * @param {function(string, DescribeResourcesByTagResponse):void} cb
     * @public
     */
    DescribeResourcesByTag(req, cb) {
        let resp = new DescribeResourcesByTagResponse();
        this.request("DescribeResourcesByTag", req, resp, cb);
    }

    /**
     * 本接口（ModifyTCPListenerAttribute）用于修改通道实例下TCP监听器配置，包括健康检查的配置，调度策略。
     * @param {ModifyTCPListenerAttributeRequest} req
     * @param {function(string, ModifyTCPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyTCPListenerAttribute(req, cb) {
        let resp = new ModifyTCPListenerAttributeResponse();
        this.request("ModifyTCPListenerAttribute", req, resp, cb);
    }

    /**
     * 本接口（ModifyProxyGroupAttribute）用于修改通道组属性，目前仅支持修改通道组名称。
     * @param {ModifyProxyGroupAttributeRequest} req
     * @param {function(string, ModifyProxyGroupAttributeResponse):void} cb
     * @public
     */
    ModifyProxyGroupAttribute(req, cb) {
        let resp = new ModifyProxyGroupAttributeResponse();
        this.request("ModifyProxyGroupAttribute", req, resp, cb);
    }

    /**
     * 该接口为内部接口，用于查询可以获取统计数据的通道组和通道信息
     * @param {DescribeGroupAndStatisticsProxyRequest} req
     * @param {function(string, DescribeGroupAndStatisticsProxyResponse):void} cb
     * @public
     */
    DescribeGroupAndStatisticsProxy(req, cb) {
        let resp = new DescribeGroupAndStatisticsProxyResponse();
        this.request("DescribeGroupAndStatisticsProxy", req, resp, cb);
    }

    /**
     * 本接口（DescribeDestRegions）用于查询源站区域，即源站服务器所在区域。
     * @param {DescribeDestRegionsRequest} req
     * @param {function(string, DescribeDestRegionsResponse):void} cb
     * @public
     */
    DescribeDestRegions(req, cb) {
        let resp = new DescribeDestRegionsResponse();
        this.request("DescribeDestRegions", req, resp, cb);
    }

    /**
     * 本接口（BindListenerRealServers）用于TCP/UDP监听器绑定解绑源站。
注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。例如：原来绑定的源站为A，B，C，本次调用的选择绑定的源站为C，D，E，那么调用后所绑定的源站为C，D，E。
     * @param {BindListenerRealServersRequest} req
     * @param {function(string, BindListenerRealServersResponse):void} cb
     * @public
     */
    BindListenerRealServers(req, cb) {
        let resp = new BindListenerRealServersResponse();
        this.request("BindListenerRealServers", req, resp, cb);
    }

    /**
     * 该接口（DescribeHTTPListeners）用来查询HTTP监听器信息。
     * @param {DescribeHTTPListenersRequest} req
     * @param {function(string, DescribeHTTPListenersResponse):void} cb
     * @public
     */
    DescribeHTTPListeners(req, cb) {
        let resp = new DescribeHTTPListenersResponse();
        this.request("DescribeHTTPListeners", req, resp, cb);
    }

    /**
     * 本接口（CreateProxyGroup）用于创建通道组。
     * @param {CreateProxyGroupRequest} req
     * @param {function(string, CreateProxyGroupResponse):void} cb
     * @public
     */
    CreateProxyGroup(req, cb) {
        let resp = new CreateProxyGroupResponse();
        this.request("CreateProxyGroup", req, resp, cb);
    }

    /**
     * 该接口（CreateUDPListeners）用于批量创建单通道或者通道组的UDP协议类型的监听器。
     * @param {CreateUDPListenersRequest} req
     * @param {function(string, CreateUDPListenersResponse):void} cb
     * @public
     */
    CreateUDPListeners(req, cb) {
        let resp = new CreateUDPListenersResponse();
        this.request("CreateUDPListeners", req, resp, cb);
    }

    /**
     * 该接口（DescribeRegionAndPrice）用于获取源站区域和带宽梯度价格
     * @param {DescribeRegionAndPriceRequest} req
     * @param {function(string, DescribeRegionAndPriceResponse):void} cb
     * @public
     */
    DescribeRegionAndPrice(req, cb) {
        let resp = new DescribeRegionAndPriceResponse();
        this.request("DescribeRegionAndPrice", req, resp, cb);
    }

    /**
     * 本接口（CreateCertificate）用于创建Gaap相关证书和配置文件，包括基础认证配置文件，客户端CA证书，服务器SSL证书，Gaap SSL证书以及源站CA证书。
     * @param {CreateCertificateRequest} req
     * @param {function(string, CreateCertificateResponse):void} cb
     * @public
     */
    CreateCertificate(req, cb) {
        let resp = new CreateCertificateResponse();
        this.request("CreateCertificate", req, resp, cb);
    }

    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300秒, 3600秒和86400秒的细粒度，取值为细粒度范围内最大值。
     * @param {DescribeListenerStatisticsRequest} req
     * @param {function(string, DescribeListenerStatisticsResponse):void} cb
     * @public
     */
    DescribeListenerStatistics(req, cb) {
        let resp = new DescribeListenerStatisticsResponse();
        this.request("DescribeListenerStatistics", req, resp, cb);
    }

    /**
     * 本接口（DescribeRealServersStatus）用于查询源站是否已被规则或者监听器绑定
     * @param {DescribeRealServersStatusRequest} req
     * @param {function(string, DescribeRealServersStatusResponse):void} cb
     * @public
     */
    DescribeRealServersStatus(req, cb) {
        let resp = new DescribeRealServersStatusResponse();
        this.request("DescribeRealServersStatus", req, resp, cb);
    }

    /**
     * 本接口（CloseProxies）用于关闭通道。通道关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
     * @param {CloseProxiesRequest} req
     * @param {function(string, CloseProxiesResponse):void} cb
     * @public
     */
    CloseProxies(req, cb) {
        let resp = new CloseProxiesResponse();
        this.request("CloseProxies", req, resp, cb);
    }

    /**
     * 根据定制错误ID查询错误响应
     * @param {DescribeDomainErrorPageInfoByIdsRequest} req
     * @param {function(string, DescribeDomainErrorPageInfoByIdsResponse):void} cb
     * @public
     */
    DescribeDomainErrorPageInfoByIds(req, cb) {
        let resp = new DescribeDomainErrorPageInfoByIdsResponse();
        this.request("DescribeDomainErrorPageInfoByIds", req, resp, cb);
    }

    /**
     * 本接口（DescribeProxiesStatus）用于查询通道状态列表。
     * @param {DescribeProxiesStatusRequest} req
     * @param {function(string, DescribeProxiesStatusResponse):void} cb
     * @public
     */
    DescribeProxiesStatus(req, cb) {
        let resp = new DescribeProxiesStatusResponse();
        this.request("DescribeProxiesStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeSecurityRules）用于根据安全规则ID查询安全规则详情列表。支持一个或多个安全规则的查询。一次最多支持20个安全规则的查询。
     * @param {DescribeSecurityRulesRequest} req
     * @param {function(string, DescribeSecurityRulesResponse):void} cb
     * @public
     */
    DescribeSecurityRules(req, cb) {
        let resp = new DescribeSecurityRulesResponse();
        this.request("DescribeSecurityRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeRules）用于查询监听器下的所有规则信息，包括规则域名，路径以及该规则下所绑定的源站列表。当通道版本为3.0时，该接口会返回该域名对应的高级认证配置信息。
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * 该接口（CreateTCPListeners）用于批量创建单通道或者通道组的TCP协议类型的监听器。
     * @param {CreateTCPListenersRequest} req
     * @param {function(string, CreateTCPListenersResponse):void} cb
     * @public
     */
    CreateTCPListeners(req, cb) {
        let resp = new CreateTCPListenersResponse();
        this.request("CreateTCPListeners", req, resp, cb);
    }

    /**
     * 本接口（DestroyProxies）用于销毁。通道销毁后，不再产生任何费用。
     * @param {DestroyProxiesRequest} req
     * @param {function(string, DestroyProxiesResponse):void} cb
     * @public
     */
    DestroyProxies(req, cb) {
        let resp = new DestroyProxiesResponse();
        this.request("DestroyProxies", req, resp, cb);
    }

    /**
     * 本接口（ModifyProxiesAttribute）用于修改实例的属性（目前只支持修改通道的名称）。
     * @param {ModifyProxiesAttributeRequest} req
     * @param {function(string, ModifyProxiesAttributeResponse):void} cb
     * @public
     */
    ModifyProxiesAttribute(req, cb) {
        let resp = new ModifyProxiesAttributeResponse();
        this.request("ModifyProxiesAttribute", req, resp, cb);
    }

    /**
     * 该接口用于7层监听器的转发规则绑定源站。注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。
     * @param {BindRuleRealServersRequest} req
     * @param {function(string, BindRuleRealServersResponse):void} cb
     * @public
     */
    BindRuleRealServers(req, cb) {
        let resp = new BindRuleRealServersResponse();
        this.request("BindRuleRealServers", req, resp, cb);
    }

    /**
     * 本接口（CreateProxy）用于创建/复制一个指定配置的加速通道。当复制通道时，需要设置新通道的基本配置参数，并设置ClonedProxyId来指定被复制的通道。
     * @param {CreateProxyRequest} req
     * @param {function(string, CreateProxyResponse):void} cb
     * @public
     */
    CreateProxy(req, cb) {
        let resp = new CreateProxyResponse();
        this.request("CreateProxy", req, resp, cb);
    }

    /**
     * 本接口（DeleteDomain）仅适用于7层监听器，用于删除该监听器下对应域名及域名下的所有规则，所有已绑定源站的规则将自动解绑。
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        let resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }

    /**
     * 该接口（DescribeListenerRealServers）用于查询TCP/UDP监听器源站列表，包括该监听器已经绑定的源站列表以及可以绑定的源站列表。
     * @param {DescribeListenerRealServersRequest} req
     * @param {function(string, DescribeListenerRealServersResponse):void} cb
     * @public
     */
    DescribeListenerRealServers(req, cb) {
        let resp = new DescribeListenerRealServersResponse();
        this.request("DescribeListenerRealServers", req, resp, cb);
    }

    /**
     * 该接口（DeleteListeners）用于批量删除通道或通道组的监听器，包括4/7层监听器。
     * @param {DeleteListenersRequest} req
     * @param {function(string, DeleteListenersResponse):void} cb
     * @public
     */
    DeleteListeners(req, cb) {
        let resp = new DeleteListenersResponse();
        this.request("DeleteListeners", req, resp, cb);
    }

    /**
     * 本接口（DescribeRulesByRuleIds）用于根据规则ID拉取规则信息列表。支持一个或者多个规则信息的拉取。一次最多支持10个规则信息的拉取。
     * @param {DescribeRulesByRuleIdsRequest} req
     * @param {function(string, DescribeRulesByRuleIdsResponse):void} cb
     * @public
     */
    DescribeRulesByRuleIds(req, cb) {
        let resp = new DescribeRulesByRuleIdsResponse();
        this.request("DescribeRulesByRuleIds", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceCreateProxy）用于创建加速通道询价。
     * @param {InquiryPriceCreateProxyRequest} req
     * @param {function(string, InquiryPriceCreateProxyResponse):void} cb
     * @public
     */
    InquiryPriceCreateProxy(req, cb) {
        let resp = new InquiryPriceCreateProxyResponse();
        this.request("InquiryPriceCreateProxy", req, resp, cb);
    }


}
module.exports = GaapClient;
