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
const DeleteRewriteRequest = models.DeleteRewriteRequest;
const DescribeTargetGroupListResponse = models.DescribeTargetGroupListResponse;
const DescribeQuotaRequest = models.DescribeQuotaRequest;
const DescribeTargetGroupListRequest = models.DescribeTargetGroupListRequest;
const BatchDeregisterTargetsResponse = models.BatchDeregisterTargetsResponse;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const RulesItems = models.RulesItems;
const ExtraInfo = models.ExtraInfo;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const SetSecurityGroupForLoadbalancersRequest = models.SetSecurityGroupForLoadbalancersRequest;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const DescribeLoadBalancerOverviewResponse = models.DescribeLoadBalancerOverviewResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const CloneLoadBalancerRequest = models.CloneLoadBalancerRequest;
const DisassociateTargetGroupsResponse = models.DisassociateTargetGroupsResponse;
const SetLoadBalancerClsLogResponse = models.SetLoadBalancerClsLogResponse;
const DescribeLoadBalancerTrafficResponse = models.DescribeLoadBalancerTrafficResponse;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribeCustomizedConfigListResponse = models.DescribeCustomizedConfigListResponse;
const DescribeBlockIPListResponse = models.DescribeBlockIPListResponse;
const DescribeRewriteRequest = models.DescribeRewriteRequest;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const DescribeTargetGroupInstancesRequest = models.DescribeTargetGroupInstancesRequest;
const SetCustomizedConfigForLoadBalancerResponse = models.SetCustomizedConfigForLoadBalancerResponse;
const AssociateTargetGroupsRequest = models.AssociateTargetGroupsRequest;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const ClassicalTarget = models.ClassicalTarget;
const ListenerItem = models.ListenerItem;
const RsWeightRule = models.RsWeightRule;
const DeregisterTargetsFromClassicalLBRequest = models.DeregisterTargetsFromClassicalLBRequest;
const SetSecurityGroupForLoadbalancersResponse = models.SetSecurityGroupForLoadbalancersResponse;
const BasicTargetGroupInfo = models.BasicTargetGroupInfo;
const ModifyTargetWeightResponse = models.ModifyTargetWeightResponse;
const ZoneResource = models.ZoneResource;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const TargetGroupInstance = models.TargetGroupInstance;
const DescribeClassicalLBByInstanceIdResponse = models.DescribeClassicalLBByInstanceIdResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const CrossTargets = models.CrossTargets;
const RuleHealth = models.RuleHealth;
const DescribeExclusiveClustersResponse = models.DescribeExclusiveClustersResponse;
const RegisterTargetGroupInstancesResponse = models.RegisterTargetGroupInstancesResponse;
const ClassicalTargetInfo = models.ClassicalTargetInfo;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const ZoneInfo = models.ZoneInfo;
const RegisterTargetsWithClassicalLBResponse = models.RegisterTargetsWithClassicalLBResponse;
const DescribeTargetGroupsResponse = models.DescribeTargetGroupsResponse;
const LoadBalancerHealth = models.LoadBalancerHealth;
const ModifyLoadBalancerSlaResponse = models.ModifyLoadBalancerSlaResponse;
const DeleteLoadBalancerListenersRequest = models.DeleteLoadBalancerListenersRequest;
const BlockedIP = models.BlockedIP;
const ModifyRuleResponse = models.ModifyRuleResponse;
const DescribeClassicalLBTargetsRequest = models.DescribeClassicalLBTargetsRequest;
const DescribeCustomizedConfigListRequest = models.DescribeCustomizedConfigListRequest;
const AutoRewriteRequest = models.AutoRewriteRequest;
const DescribeCrossTargetsResponse = models.DescribeCrossTargetsResponse;
const DescribeLoadBalancerListByCertIdResponse = models.DescribeLoadBalancerListByCertIdResponse;
const ModifyTargetGroupInstancesWeightResponse = models.ModifyTargetGroupInstancesWeightResponse;
const DescribeTargetGroupsRequest = models.DescribeTargetGroupsRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const BatchRegisterTargetsResponse = models.BatchRegisterTargetsResponse;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const DescribeLBListenersRequest = models.DescribeLBListenersRequest;
const SlaUpdateParam = models.SlaUpdateParam;
const Target = models.Target;
const DescribeLoadBalancerTrafficRequest = models.DescribeLoadBalancerTrafficRequest;
const DescribeBlockIPListRequest = models.DescribeBlockIPListRequest;
const CertIdRelatedWithLoadBalancers = models.CertIdRelatedWithLoadBalancers;
const DescribeClassicalLBHealthStatusResponse = models.DescribeClassicalLBHealthStatusResponse;
const DescribeClsLogSetRequest = models.DescribeClsLogSetRequest;
const Listener = models.Listener;
const LoadBalancerTraffic = models.LoadBalancerTraffic;
const ConfigListItem = models.ConfigListItem;
const RegisterTargetsWithClassicalLBRequest = models.RegisterTargetsWithClassicalLBRequest;
const ModifyDomainAttributesResponse = models.ModifyDomainAttributesResponse;
const ReplaceCertForLoadBalancersResponse = models.ReplaceCertForLoadBalancersResponse;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const ModifyListenerRequest = models.ModifyListenerRequest;
const DeregisterTargetGroupInstancesResponse = models.DeregisterTargetGroupInstancesResponse;
const RegisterTargetsRequest = models.RegisterTargetsRequest;
const HealthCheck = models.HealthCheck;
const AssociateTargetGroupsResponse = models.AssociateTargetGroupsResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteListenerRequest = models.DeleteListenerRequest;
const ClassicalHealth = models.ClassicalHealth;
const DescribeCustomizedConfigAssociateListRequest = models.DescribeCustomizedConfigAssociateListRequest;
const ModifyTargetPortResponse = models.ModifyTargetPortResponse;
const MigrateClassicalLoadBalancersRequest = models.MigrateClassicalLoadBalancersRequest;
const DescribeLoadBalancersDetailRequest = models.DescribeLoadBalancersDetailRequest;
const TargetGroupBackend = models.TargetGroupBackend;
const DescribeClassicalLBByInstanceIdRequest = models.DescribeClassicalLBByInstanceIdRequest;
const DescribeResourcesResponse = models.DescribeResourcesResponse;
const ManualRewriteResponse = models.ManualRewriteResponse;
const ModifyBlockIPListRequest = models.ModifyBlockIPListRequest;
const DescribeClusterResourcesResponse = models.DescribeClusterResourcesResponse;
const ModifyBlockIPListResponse = models.ModifyBlockIPListResponse;
const DescribeClusterResourcesRequest = models.DescribeClusterResourcesRequest;
const ModifyDomainAttributesRequest = models.ModifyDomainAttributesRequest;
const DescribeClassicalLBHealthStatusRequest = models.DescribeClassicalLBHealthStatusRequest;
const ModifyDomainRequest = models.ModifyDomainRequest;
const CreateClsLogSetResponse = models.CreateClsLogSetResponse;
const DescribeCrossTargetsRequest = models.DescribeCrossTargetsRequest;
const LBChargePrepaid = models.LBChargePrepaid;
const ClassicalListener = models.ClassicalListener;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const CertificateInput = models.CertificateInput;
const DescribeCustomizedConfigAssociateListResponse = models.DescribeCustomizedConfigAssociateListResponse;
const SetCustomizedConfigForLoadBalancerRequest = models.SetCustomizedConfigForLoadBalancerRequest;
const CreateListenerResponse = models.CreateListenerResponse;
const CreateTargetGroupResponse = models.CreateTargetGroupResponse;
const MigrateClassicalLoadBalancersResponse = models.MigrateClassicalLoadBalancersResponse;
const CreateLoadBalancerSnatIpsResponse = models.CreateLoadBalancerSnatIpsResponse;
const ClassicalLoadBalancerInfo = models.ClassicalLoadBalancerInfo;
const DescribeListenersResponse = models.DescribeListenersResponse;
const RuleOutput = models.RuleOutput;
const CreateTopicResponse = models.CreateTopicResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyTargetGroupInstancesPortResponse = models.ModifyTargetGroupInstancesPortResponse;
const LbRsItem = models.LbRsItem;
const RuleTargets = models.RuleTargets;
const BatchDeregisterTargetsRequest = models.BatchDeregisterTargetsRequest;
const DeregisterTargetGroupInstancesRequest = models.DeregisterTargetGroupInstancesRequest;
const ManualRewriteRequest = models.ManualRewriteRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const DescribeTargetGroupInstancesResponse = models.DescribeTargetGroupInstancesResponse;
const CreateTargetGroupRequest = models.CreateTargetGroupRequest;
const ClusterItem = models.ClusterItem;
const BindDetailItem = models.BindDetailItem;
const CreateListenerRequest = models.CreateListenerRequest;
const CreateClsLogSetRequest = models.CreateClsLogSetRequest;
const DisassociateTargetGroupsRequest = models.DisassociateTargetGroupsRequest;
const Filter = models.Filter;
const ClusterResource = models.ClusterResource;
const ModifyDomainResponse = models.ModifyDomainResponse;
const RegisterTargetsResponse = models.RegisterTargetsResponse;
const DeregisterTargetsFromClassicalLBResponse = models.DeregisterTargetsFromClassicalLBResponse;
const ClustersZone = models.ClustersZone;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const AutoRewriteResponse = models.AutoRewriteResponse;
const DeregisterTargetsResponse = models.DeregisterTargetsResponse;
const DescribeLoadBalancerOverviewRequest = models.DescribeLoadBalancerOverviewRequest;
const RewriteTarget = models.RewriteTarget;
const Cluster = models.Cluster;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const DescribeLoadBalancersDetailResponse = models.DescribeLoadBalancersDetailResponse;
const LoadBalancerDetail = models.LoadBalancerDetail;
const LbRsTargets = models.LbRsTargets;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const DeleteRewriteResponse = models.DeleteRewriteResponse;
const BatchTarget = models.BatchTarget;
const DescribeLoadBalancerListByCertIdRequest = models.DescribeLoadBalancerListByCertIdRequest;
const TargetRegionInfo = models.TargetRegionInfo;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const ReplaceCertForLoadBalancersRequest = models.ReplaceCertForLoadBalancersRequest;
const DeleteRuleResponse = models.DeleteRuleResponse;
const CloneLoadBalancerResponse = models.CloneLoadBalancerResponse;
const DescribeClsLogSetResponse = models.DescribeClsLogSetResponse;
const ModifyTargetGroupAttributeRequest = models.ModifyTargetGroupAttributeRequest;
const ExclusiveCluster = models.ExclusiveCluster;
const DeregisterTargetsRequest = models.DeregisterTargetsRequest;
const ModifyLoadBalancerMixIpTargetResponse = models.ModifyLoadBalancerMixIpTargetResponse;
const InternetAccessible = models.InternetAccessible;
const CreateLoadBalancerSnatIpsRequest = models.CreateLoadBalancerSnatIpsRequest;
const ModifyTargetGroupInstancesWeightRequest = models.ModifyTargetGroupInstancesWeightRequest;
const DescribeQuotaResponse = models.DescribeQuotaResponse;
const DeleteTargetGroupsResponse = models.DeleteTargetGroupsResponse;
const ModifyTargetGroupInstancesPortRequest = models.ModifyTargetGroupInstancesPortRequest;
const BatchRegisterTargetsRequest = models.BatchRegisterTargetsRequest;
const ListenerBackend = models.ListenerBackend;
const RuleInput = models.RuleInput;
const TagInfo = models.TagInfo;
const SnatIp = models.SnatIp;
const ModifyLoadBalancerMixIpTargetRequest = models.ModifyLoadBalancerMixIpTargetRequest;
const DescribeBlockIPTaskResponse = models.DescribeBlockIPTaskResponse;
const DescribeResourcesRequest = models.DescribeResourcesRequest;
const DescribeClassicalLBListenersResponse = models.DescribeClassicalLBListenersResponse;
const DescribeExclusiveClustersRequest = models.DescribeExclusiveClustersRequest;
const ModifyLoadBalancerSlaRequest = models.ModifyLoadBalancerSlaRequest;
const DescribeBlockIPTaskRequest = models.DescribeBlockIPTaskRequest;
const Resource = models.Resource;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const DescribeRewriteResponse = models.DescribeRewriteResponse;
const Quota = models.Quota;
const SetLoadBalancerClsLogRequest = models.SetLoadBalancerClsLogRequest;
const LBItem = models.LBItem;
const ModifyTargetGroupAttributeResponse = models.ModifyTargetGroupAttributeResponse;
const DeleteLoadBalancerListenersResponse = models.DeleteLoadBalancerListenersResponse;
const DescribeListenersRequest = models.DescribeListenersRequest;
const DeleteLoadBalancerSnatIpsRequest = models.DeleteLoadBalancerSnatIpsRequest;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeClassicalLBTargetsResponse = models.DescribeClassicalLBTargetsResponse;
const RewriteLocationMap = models.RewriteLocationMap;
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const DescribeLBListenersResponse = models.DescribeLBListenersResponse;
const TargetGroupInfo = models.TargetGroupInfo;
const DeleteListenerResponse = models.DeleteListenerResponse;
const DeleteLoadBalancerSnatIpsResponse = models.DeleteLoadBalancerSnatIpsResponse;
const CertificateOutput = models.CertificateOutput;
const DeleteTargetGroupsRequest = models.DeleteTargetGroupsRequest;
const DescribeClassicalLBListenersRequest = models.DescribeClassicalLBListenersRequest;
const TargetHealth = models.TargetHealth;
const TargetGroupAssociation = models.TargetGroupAssociation;
const ListenerHealth = models.ListenerHealth;
const AssociationItem = models.AssociationItem;
const Backend = models.Backend;
const RegisterTargetGroupInstancesRequest = models.RegisterTargetGroupInstancesRequest;
const LoadBalancer = models.LoadBalancer;


/**
 * clb client
 * @class
 */
class ClbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("clb.tencentcloudapi.com", "2018-03-17", credential, region, profile);
    }
    
    /**
     * RegisterTargets 接口用来将一台或多台后端服务绑定到负载均衡的监听器（或7层转发规则），在此之前您需要先行创建相关的4层监听器或7层转发规则。对于四层监听器（TCP、UDP），只需指定监听器ID即可，对于七层监听器（HTTP、HTTPS），还需通过LocationId或者Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {RegisterTargetsRequest} req
     * @param {function(string, RegisterTargetsResponse):void} cb
     * @public
     */
    RegisterTargets(req, cb) {
        let resp = new RegisterTargetsResponse();
        this.request("RegisterTargets", req, resp, cb);
    }

    /**
     * ModifyDomainAttributes接口用于修改负载均衡7层监听器转发规则的域名级别属性，如修改域名、修改DefaultServer、开启/关闭Http2、修改证书。
本接口为异步接口，本接口返回成功后，需以返回的RequestId为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyDomainAttributesRequest} req
     * @param {function(string, ModifyDomainAttributesResponse):void} cb
     * @public
     */
    ModifyDomainAttributes(req, cb) {
        let resp = new ModifyDomainAttributesResponse();
        this.request("ModifyDomainAttributes", req, resp, cb);
    }

    /**
     * 根据证书ID查询其在一个地域中所关联到负载均衡实例列表
     * @param {DescribeLoadBalancerListByCertIdRequest} req
     * @param {function(string, DescribeLoadBalancerListByCertIdResponse):void} cb
     * @public
     */
    DescribeLoadBalancerListByCertId(req, cb) {
        let resp = new DescribeLoadBalancerListByCertIdResponse();
        this.request("DescribeLoadBalancerListByCertId", req, resp, cb);
    }

    /**
     * DescribeClassicalLBListeners 接口用于获取传统型负载均衡的监听器信息。
     * @param {DescribeClassicalLBListenersRequest} req
     * @param {function(string, DescribeClassicalLBListenersResponse):void} cb
     * @public
     */
    DescribeClassicalLBListeners(req, cb) {
        let resp = new DescribeClassicalLBListenersResponse();
        this.request("DescribeClassicalLBListeners", req, resp, cb);
    }

    /**
     * RegisterTargetsWithClassicalLB 接口用于绑定后端服务到传统型负载均衡。本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {RegisterTargetsWithClassicalLBRequest} req
     * @param {function(string, RegisterTargetsWithClassicalLBResponse):void} cb
     * @public
     */
    RegisterTargetsWithClassicalLB(req, cb) {
        let resp = new RegisterTargetsWithClassicalLBResponse();
        this.request("RegisterTargetsWithClassicalLB", req, resp, cb);
    }

    /**
     * 拉取配置绑定的 server 或 location，如果 domain 存在，结果将根据 domain 过滤。或拉取配置绑定的 loadbalancer。
     * @param {DescribeCustomizedConfigAssociateListRequest} req
     * @param {function(string, DescribeCustomizedConfigAssociateListResponse):void} cb
     * @public
     */
    DescribeCustomizedConfigAssociateList(req, cb) {
        let resp = new DescribeCustomizedConfigAssociateListResponse();
        this.request("DescribeCustomizedConfigAssociateList", req, resp, cb);
    }

    /**
     * 创建主题，默认开启全文索引和键值索引。如果不存在CLB专有日志集，则创建失败。
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * 这个接口用于删除SnatPro的负载均衡的SnatIp。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteLoadBalancerSnatIpsRequest} req
     * @param {function(string, DeleteLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    DeleteLoadBalancerSnatIps(req, cb) {
        let resp = new DeleteLoadBalancerSnatIpsResponse();
        this.request("DeleteLoadBalancerSnatIps", req, resp, cb);
    }

    /**
     * 本接口用来删除负载均衡实例下的监听器（四层和七层）。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * 绑定或解绑一个安全组到多个公网负载均衡实例。注意：内网负载均衡不支持绑定安全组。
     * @param {SetSecurityGroupForLoadbalancersRequest} req
     * @param {function(string, SetSecurityGroupForLoadbalancersResponse):void} cb
     * @public
     */
    SetSecurityGroupForLoadbalancers(req, cb) {
        let resp = new SetSecurityGroupForLoadbalancersResponse();
        this.request("SetSecurityGroupForLoadbalancers", req, resp, cb);
    }

    /**
     * 批量解绑四七层后端服务。批量解绑的资源数量上限为500。
     * @param {BatchDeregisterTargetsRequest} req
     * @param {function(string, BatchDeregisterTargetsResponse):void} cb
     * @public
     */
    BatchDeregisterTargets(req, cb) {
        let resp = new BatchDeregisterTargetsResponse();
        this.request("BatchDeregisterTargets", req, resp, cb);
    }

    /**
     * 修改IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标特性。
     * @param {ModifyLoadBalancerMixIpTargetRequest} req
     * @param {function(string, ModifyLoadBalancerMixIpTargetResponse):void} cb
     * @public
     */
    ModifyLoadBalancerMixIpTarget(req, cb) {
        let resp = new ModifyLoadBalancerMixIpTargetResponse();
        this.request("ModifyLoadBalancerMixIpTarget", req, resp, cb);
    }

    /**
     * CreateRule 接口用于在一个已存在的负载均衡七层监听器下创建转发规则，七层监听器中，后端服务必须绑定到规则上而非监听器上。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * 查询集群信息列表，支持以集群类型、集群唯一ID、集群名字、集群标签、集群内vip、集群内负载均衡唯一id、集群网络类型、可用区等条件进行检索
     * @param {DescribeExclusiveClustersRequest} req
     * @param {function(string, DescribeExclusiveClustersResponse):void} cb
     * @public
     */
    DescribeExclusiveClusters(req, cb) {
        let resp = new DescribeExclusiveClustersResponse();
        this.request("DescribeExclusiveClusters", req, resp, cb);
    }

    /**
     * 增加、删除、更新负载均衡的日志服务(CLS)主题。
     * @param {SetLoadBalancerClsLogRequest} req
     * @param {function(string, SetLoadBalancerClsLogResponse):void} cb
     * @public
     */
    SetLoadBalancerClsLog(req, cb) {
        let resp = new SetLoadBalancerClsLogResponse();
        this.request("SetLoadBalancerClsLog", req, resp, cb);
    }

    /**
     * 用户需要先创建出一个HTTPS:443监听器，并在其下创建转发规则。通过调用本接口，系统会自动创建出一个HTTP:80监听器（如果之前不存在），并在其下创建转发规则，与HTTPS:443监听器下的Domains（在入参中指定）对应。创建成功后可以通过HTTP:80地址自动跳转为HTTPS:443地址进行访问。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {AutoRewriteRequest} req
     * @param {function(string, AutoRewriteResponse):void} cb
     * @public
     */
    AutoRewrite(req, cb) {
        let resp = new AutoRewriteResponse();
        this.request("AutoRewrite", req, resp, cb);
    }

    /**
     * 解除规则的目标组关联关系。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DisassociateTargetGroupsRequest} req
     * @param {function(string, DisassociateTargetGroupsResponse):void} cb
     * @public
     */
    DisassociateTargetGroups(req, cb) {
        let resp = new DisassociateTargetGroupsResponse();
        this.request("DisassociateTargetGroups", req, resp, cb);
    }

    /**
     * ModifyListener接口用来修改负载均衡监听器的属性，包括监听器名称、健康检查参数、证书信息、转发策略等。本接口不支持传统型负载均衡。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        let resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }

    /**
     * 该接口支持删除负载均衡的多个监听器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteLoadBalancerListenersRequest} req
     * @param {function(string, DeleteLoadBalancerListenersResponse):void} cb
     * @public
     */
    DeleteLoadBalancerListeners(req, cb) {
        let resp = new DeleteLoadBalancerListenersResponse();
        this.request("DeleteLoadBalancerListeners", req, resp, cb);
    }

    /**
     * SetLoadBalancerSecurityGroups 接口支持对一个公网负载均衡实例执行设置（绑定、解绑）安全组操作。查询一个负载均衡实例目前已绑定的安全组，可使用 DescribeLoadBalancers 接口。本接口是set语义，
绑定操作时，入参需要传入负载均衡实例要绑定的所有安全组（已绑定的+新增绑定的）。
解绑操作时，入参需要传入负载均衡实例执行解绑后所绑定的所有安全组；如果要解绑所有安全组，可不传此参数，或传入空数组。注意：内网负载均衡不支持绑定安全组。
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * 删除目标组
     * @param {DeleteTargetGroupsRequest} req
     * @param {function(string, DeleteTargetGroupsResponse):void} cb
     * @public
     */
    DeleteTargetGroups(req, cb) {
        let resp = new DeleteTargetGroupsResponse();
        this.request("DeleteTargetGroups", req, resp, cb);
    }

    /**
     * 支持共享型clb升级到性能容量型clb（不支持性能保障降级到共享型）。
     * @param {ModifyLoadBalancerSlaRequest} req
     * @param {function(string, ModifyLoadBalancerSlaResponse):void} cb
     * @public
     */
    ModifyLoadBalancerSla(req, cb) {
        let resp = new ModifyLoadBalancerSlaResponse();
        this.request("ModifyLoadBalancerSla", req, resp, cb);
    }

    /**
     * 修改负载均衡的IP（client IP）封禁黑名单列表，一个转发规则最多支持封禁 2000000 个IP，及黑名单容量为 2000000。
（接口灰度中，如需使用请提工单）
     * @param {ModifyBlockIPListRequest} req
     * @param {function(string, ModifyBlockIPListResponse):void} cb
     * @public
     */
    ModifyBlockIPList(req, cb) {
        let resp = new ModifyBlockIPListResponse();
        this.request("ModifyBlockIPList", req, resp, cb);
    }

    /**
     * 注册服务器到目标组。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {RegisterTargetGroupInstancesRequest} req
     * @param {function(string, RegisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    RegisterTargetGroupInstances(req, cb) {
        let resp = new RegisterTargetGroupInstancesResponse();
        this.request("RegisterTargetGroupInstances", req, resp, cb);
    }

    /**
     * DeregisterTargetsFromClassicalLB 接口用于解绑负载均衡后端服务。本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeregisterTargetsFromClassicalLBRequest} req
     * @param {function(string, DeregisterTargetsFromClassicalLBResponse):void} cb
     * @public
     */
    DeregisterTargetsFromClassicalLB(req, cb) {
        let resp = new DeregisterTargetsFromClassicalLBResponse();
        this.request("DeregisterTargetsFromClassicalLB", req, resp, cb);
    }

    /**
     * 创建CLB专有日志集，此日志集用于存储CLB的日志。
     * @param {CreateClsLogSetRequest} req
     * @param {function(string, CreateClsLogSetResponse):void} cb
     * @public
     */
    CreateClsLogSet(req, cb) {
        let resp = new CreateClsLogSetResponse();
        this.request("CreateClsLogSet", req, resp, cb);
    }

    /**
     * 查询负载均衡的详细信息，包括监听器，规则及后端目标。
     * @param {DescribeLoadBalancersDetailRequest} req
     * @param {function(string, DescribeLoadBalancersDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancersDetail(req, cb) {
        let resp = new DescribeLoadBalancersDetailResponse();
        this.request("DescribeLoadBalancersDetail", req, resp, cb);
    }

    /**
     * DeleteLoadBalancer 接口用以删除指定的一个或多个负载均衡实例。成功删除后，会把负载均衡实例下的监听器、转发规则一起删除，并把后端服务解绑。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * 查询用户在当前地域支持可用区列表和资源列表。
     * @param {DescribeResourcesRequest} req
     * @param {function(string, DescribeResourcesResponse):void} cb
     * @public
     */
    DescribeResources(req, cb) {
        let resp = new DescribeResourcesResponse();
        this.request("DescribeResources", req, resp, cb);
    }

    /**
     * ModifyTargetPort接口用于修改监听器绑定的后端服务的端口。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyTargetPortRequest} req
     * @param {function(string, ModifyTargetPortResponse):void} cb
     * @public
     */
    ModifyTargetPort(req, cb) {
        let resp = new ModifyTargetPortResponse();
        this.request("ModifyTargetPort", req, resp, cb);
    }

    /**
     * DeleteRule 接口用来删除负载均衡实例七层监听器下的转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * ReplaceCertForLoadBalancers 接口用以替换负载均衡实例所关联的证书，对于各个地域的负载均衡，如果指定的老的证书ID与其有关联关系，则会先解除关联，再建立新证书与该负载均衡的关联关系。
此接口支持替换服务端证书或客户端证书。
需要使用的新证书，可以通过传入证书ID来指定，如果不指定证书ID，则必须传入证书内容等相关信息，用以新建证书并绑定至负载均衡。
注：本接口仅可从广州地域调用。
     * @param {ReplaceCertForLoadBalancersRequest} req
     * @param {function(string, ReplaceCertForLoadBalancersResponse):void} cb
     * @public
     */
    ReplaceCertForLoadBalancers(req, cb) {
        let resp = new ReplaceCertForLoadBalancersResponse();
        this.request("ReplaceCertForLoadBalancers", req, resp, cb);
    }

    /**
     * 获取目标组绑定的服务器信息
     * @param {DescribeTargetGroupInstancesRequest} req
     * @param {function(string, DescribeTargetGroupInstancesResponse):void} cb
     * @public
     */
    DescribeTargetGroupInstances(req, cb) {
        let resp = new DescribeTargetGroupInstancesResponse();
        this.request("DescribeTargetGroupInstances", req, resp, cb);
    }

    /**
     * 本接口(AssociateTargetGroups)用来将目标组绑定到负载均衡的监听器（四层协议）或转发规则（七层协议）上。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {AssociateTargetGroupsRequest} req
     * @param {function(string, AssociateTargetGroupsResponse):void} cb
     * @public
     */
    AssociateTargetGroups(req, cb) {
        let resp = new AssociateTargetGroupsResponse();
        this.request("AssociateTargetGroups", req, resp, cb);
    }

    /**
     * 查询后端云主机或弹性网卡绑定的负载均衡，支持弹性网卡和cvm查询。
     * @param {DescribeLBListenersRequest} req
     * @param {function(string, DescribeLBListenersResponse):void} cb
     * @public
     */
    DescribeLBListeners(req, cb) {
        let resp = new DescribeLBListenersResponse();
        this.request("DescribeLBListeners", req, resp, cb);
    }

    /**
     * 批量修改目标组服务器端口。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {ModifyTargetGroupInstancesPortRequest} req
     * @param {function(string, ModifyTargetGroupInstancesPortResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesPort(req, cb) {
        let resp = new ModifyTargetGroupInstancesPortResponse();
        this.request("ModifyTargetGroupInstancesPort", req, resp, cb);
    }

    /**
     * 从目标组中解绑服务器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeregisterTargetGroupInstancesRequest} req
     * @param {function(string, DeregisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    DeregisterTargetGroupInstances(req, cb) {
        let resp = new DeregisterTargetGroupInstancesResponse();
        this.request("DeregisterTargetGroupInstances", req, resp, cb);
    }

    /**
     * 查询一个地域的负载均衡实例列表。

     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * 查询一个负载均衡所封禁的IP列表（黑名单）。（接口灰度中，如需使用请提工单）
     * @param {DescribeBlockIPListRequest} req
     * @param {function(string, DescribeBlockIPListResponse):void} cb
     * @public
     */
    DescribeBlockIPList(req, cb) {
        let resp = new DescribeBlockIPListResponse();
        this.request("DescribeBlockIPList", req, resp, cb);
    }

    /**
     * DescribeListeners 接口可根据负载均衡器 ID、监听器的协议或端口作为过滤条件获取监听器列表。如果不指定任何过滤条件，则返回该负载均衡实例下的所有监听器。
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * DescribeClassicalLBTargets用于获取传统型负载均衡绑定的后端服务。
     * @param {DescribeClassicalLBTargetsRequest} req
     * @param {function(string, DescribeClassicalLBTargetsResponse):void} cb
     * @public
     */
    DescribeClassicalLBTargets(req, cb) {
        let resp = new DescribeClassicalLBTargetsResponse();
        this.request("DescribeClassicalLBTargets", req, resp, cb);
    }

    /**
     * 在一个负载均衡实例下创建监听器。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * 批量绑定虚拟主机或弹性网卡，支持跨域绑定，支持四层、七层（TCP、UDP、HTTP、HTTPS）协议绑定。批量绑定的资源数量上限为500。
     * @param {BatchRegisterTargetsRequest} req
     * @param {function(string, BatchRegisterTargetsResponse):void} cb
     * @public
     */
    BatchRegisterTargets(req, cb) {
        let resp = new BatchRegisterTargetsResponse();
        this.request("BatchRegisterTargets", req, resp, cb);
    }

    /**
     * ModifyRule 接口用来修改负载均衡七层监听器下的转发规则的各项属性，包括转发路径、健康检查属性、转发策略等。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * 获取用户的CLB专有日志集。
     * @param {DescribeClsLogSetRequest} req
     * @param {function(string, DescribeClsLogSetResponse):void} cb
     * @public
     */
    DescribeClsLogSet(req, cb) {
        let resp = new DescribeClsLogSetResponse();
        this.request("DescribeClsLogSet", req, resp, cb);
    }

    /**
     * 拉取个性化配置列表，返回用户 AppId 下指定类型的配置。
     * @param {DescribeCustomizedConfigListRequest} req
     * @param {function(string, DescribeCustomizedConfigListResponse):void} cb
     * @public
     */
    DescribeCustomizedConfigList(req, cb) {
        let resp = new DescribeCustomizedConfigListResponse();
        this.request("DescribeCustomizedConfigList", req, resp, cb);
    }

    /**
     * ModifyTargetWeight 接口用于修改负载均衡绑定的后端服务的转发权重。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyTargetWeightRequest} req
     * @param {function(string, ModifyTargetWeightResponse):void} cb
     * @public
     */
    ModifyTargetWeight(req, cb) {
        let resp = new ModifyTargetWeightResponse();
        this.request("ModifyTargetWeight", req, resp, cb);
    }

    /**
     * 本接口用于查询异步任务的执行状态，对于非查询类的接口（创建/删除负载均衡实例、监听器、规则以及绑定或解绑后端服务等），在接口调用成功后，都需要使用本接口查询任务最终是否执行成功。
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * 负载均衡维度的个性化配置相关操作：创建、删除、修改、绑定、解绑
     * @param {SetCustomizedConfigForLoadBalancerRequest} req
     * @param {function(string, SetCustomizedConfigForLoadBalancerResponse):void} cb
     * @public
     */
    SetCustomizedConfigForLoadBalancer(req, cb) {
        let resp = new SetCustomizedConfigForLoadBalancerResponse();
        this.request("SetCustomizedConfigForLoadBalancer", req, resp, cb);
    }

    /**
     * 查询独占集群中的资源列表，支持按集群ID、VIP、负载均衡ID、是否闲置为过滤条件检索。
     * @param {DescribeClusterResourcesRequest} req
     * @param {function(string, DescribeClusterResourcesResponse):void} cb
     * @public
     */
    DescribeClusterResources(req, cb) {
        let resp = new DescribeClusterResourcesResponse();
        this.request("DescribeClusterResources", req, resp, cb);
    }

    /**
     * DescribeTargetHealth 接口用来获取负载均衡后端服务的健康检查结果，不支持传统型负载均衡。
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        let resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }

    /**
     * 获取目标组列表
     * @param {DescribeTargetGroupListRequest} req
     * @param {function(string, DescribeTargetGroupListResponse):void} cb
     * @public
     */
    DescribeTargetGroupList(req, cb) {
        let resp = new DescribeTargetGroupListResponse();
        this.request("DescribeTargetGroupList", req, resp, cb);
    }

    /**
     * 根据 ModifyBlockIPList 接口返回的异步任务的ID，查询封禁IP（黑名单）异步任务的执行状态。（接口灰度中，如需使用请提工单）
     * @param {DescribeBlockIPTaskRequest} req
     * @param {function(string, DescribeBlockIPTaskResponse):void} cb
     * @public
     */
    DescribeBlockIPTask(req, cb) {
        let resp = new DescribeBlockIPTaskResponse();
        this.request("DescribeBlockIPTask", req, resp, cb);
    }

    /**
     * 创建目标组。该功能正在内测中，如需使用，请通过[工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1)。
     * @param {CreateTargetGroupRequest} req
     * @param {function(string, CreateTargetGroupResponse):void} cb
     * @public
     */
    CreateTargetGroup(req, cb) {
        let resp = new CreateTargetGroupResponse();
        this.request("CreateTargetGroup", req, resp, cb);
    }

    /**
     * 查询运行中、隔离中、即将到期和负载均衡总数。
     * @param {DescribeLoadBalancerOverviewRequest} req
     * @param {function(string, DescribeLoadBalancerOverviewResponse):void} cb
     * @public
     */
    DescribeLoadBalancerOverview(req, cb) {
        let resp = new DescribeLoadBalancerOverviewResponse();
        this.request("DescribeLoadBalancerOverview", req, resp, cb);
    }

    /**
     * DescribeTargets 接口用来查询负载均衡实例的某些监听器绑定的后端服务列表。
     * @param {DescribeTargetsRequest} req
     * @param {function(string, DescribeTargetsResponse):void} cb
     * @public
     */
    DescribeTargets(req, cb) {
        let resp = new DescribeTargetsResponse();
        this.request("DescribeTargets", req, resp, cb);
    }

    /**
     * ModifyDomain接口用来修改负载均衡七层监听器下的域名。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        let resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }

    /**
     * 本接口将传统型负载均衡迁移成(原应用型)负载均衡
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     * @param {MigrateClassicalLoadBalancersRequest} req
     * @param {function(string, MigrateClassicalLoadBalancersResponse):void} cb
     * @public
     */
    MigrateClassicalLoadBalancers(req, cb) {
        let resp = new MigrateClassicalLoadBalancersResponse();
        this.request("MigrateClassicalLoadBalancers", req, resp, cb);
    }

    /**
     * DescribeRewrite 接口可根据负载均衡实例ID，查询一个负载均衡实例下转发规则的重定向关系。如果不指定监听器ID或转发规则ID，则返回该负载均衡实例下的所有重定向关系。
     * @param {DescribeRewriteRequest} req
     * @param {function(string, DescribeRewriteResponse):void} cb
     * @public
     */
    DescribeRewrite(req, cb) {
        let resp = new DescribeRewriteResponse();
        this.request("DescribeRewrite", req, resp, cb);
    }

    /**
     * 查询目标组信息
     * @param {DescribeTargetGroupsRequest} req
     * @param {function(string, DescribeTargetGroupsResponse):void} cb
     * @public
     */
    DescribeTargetGroups(req, cb) {
        let resp = new DescribeTargetGroupsResponse();
        this.request("DescribeTargetGroups", req, resp, cb);
    }

    /**
     * 修改目标组的名称或者默认端口属性
     * @param {ModifyTargetGroupAttributeRequest} req
     * @param {function(string, ModifyTargetGroupAttributeResponse):void} cb
     * @public
     */
    ModifyTargetGroupAttribute(req, cb) {
        let resp = new ModifyTargetGroupAttributeResponse();
        this.request("ModifyTargetGroupAttribute", req, resp, cb);
    }

    /**
     * DescribeClassicalLBHealthStatus用于获取传统型负载均衡后端的健康状态
     * @param {DescribeClassicalLBHealthStatusRequest} req
     * @param {function(string, DescribeClassicalLBHealthStatusResponse):void} cb
     * @public
     */
    DescribeClassicalLBHealthStatus(req, cb) {
        let resp = new DescribeClassicalLBHealthStatusResponse();
        this.request("DescribeClassicalLBHealthStatus", req, resp, cb);
    }

    /**
     * DeregisterTargets 接口用来将一台或多台后端服务从负载均衡的监听器或转发规则上解绑，对于四层监听器，只需指定监听器ID即可，对于七层监听器，还需通过LocationId或Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeregisterTargetsRequest} req
     * @param {function(string, DeregisterTargetsResponse):void} cb
     * @public
     */
    DeregisterTargets(req, cb) {
        let resp = new DeregisterTargetsResponse();
        this.request("DeregisterTargets", req, resp, cb);
    }

    /**
     * 修改负载均衡实例的属性。支持修改负载均衡实例的名称、设置负载均衡的跨域属性。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }

    /**
     * 批量修改目标组的服务器权重。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {ModifyTargetGroupInstancesWeightRequest} req
     * @param {function(string, ModifyTargetGroupInstancesWeightResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesWeight(req, cb) {
        let resp = new ModifyTargetGroupInstancesWeightResponse();
        this.request("ModifyTargetGroupInstancesWeight", req, resp, cb);
    }

    /**
     * 针对SnatPro负载均衡，这个接口用于添加SnatIp，如果负载均衡没有开启SnatPro，添加SnatIp后会自动开启。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {CreateLoadBalancerSnatIpsRequest} req
     * @param {function(string, CreateLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    CreateLoadBalancerSnatIps(req, cb) {
        let resp = new CreateLoadBalancerSnatIpsResponse();
        this.request("CreateLoadBalancerSnatIps", req, resp, cb);
    }

    /**
     * DescribeClassicalLBByInstanceId用于通过后端实例ID获取传统型负载均衡ID列表。
     * @param {DescribeClassicalLBByInstanceIdRequest} req
     * @param {function(string, DescribeClassicalLBByInstanceIdResponse):void} cb
     * @public
     */
    DescribeClassicalLBByInstanceId(req, cb) {
        let resp = new DescribeClassicalLBByInstanceIdResponse();
        this.request("DescribeClassicalLBByInstanceId", req, resp, cb);
    }

    /**
     * 查询账号下的高流量负载均衡，返回前10个负载均衡。如果是子账号登录，只返回子账号有权限的负载均衡。
     * @param {DescribeLoadBalancerTrafficRequest} req
     * @param {function(string, DescribeLoadBalancerTrafficResponse):void} cb
     * @public
     */
    DescribeLoadBalancerTraffic(req, cb) {
        let resp = new DescribeLoadBalancerTrafficResponse();
        this.request("DescribeLoadBalancerTraffic", req, resp, cb);
    }

    /**
     * 克隆负载均衡实例，根据指定的负载均衡实例，复制出相同规则和绑定关系的负载均衡实例。克隆接口为异步操作，克隆的数据以调用CloneLoadBalancer时为准，如果调用CloneLoadBalancer后克隆CLB发生变化，变化规则不会克隆。

限制说明：
不支持基础网络和传统型负载均衡、IPv6和NAT64
不支持包年包月CLB
不支持监听器为 QUIC、端口段
不支持后端类型为 目标组、SCF云函数
个性化配置、重定向配置、安全组默认放通开关 将不会被克隆，须手工配置

通过接口调用：
BGP带宽包必须传带宽包id
独占集群克隆必须传对应的参数，否则按共享型创建
功能内测中，[申请开通](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20CLB&step=1)。
     * @param {CloneLoadBalancerRequest} req
     * @param {function(string, CloneLoadBalancerResponse):void} cb
     * @public
     */
    CloneLoadBalancer(req, cb) {
        let resp = new CloneLoadBalancerResponse();
        this.request("CloneLoadBalancer", req, resp, cb);
    }

    /**
     * 查询跨域2.0版本云联网后端子机和网卡信息。
     * @param {DescribeCrossTargetsRequest} req
     * @param {function(string, DescribeCrossTargetsResponse):void} cb
     * @public
     */
    DescribeCrossTargets(req, cb) {
        let resp = new DescribeCrossTargetsResponse();
        this.request("DescribeCrossTargets", req, resp, cb);
    }

    /**
     * BatchModifyTargetWeight 接口用于批量修改负载均衡监听器绑定的后端机器的转发权重。批量修改的资源数量上限为500。本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。<br/>负载均衡的4层和7层监听器支持此接口，传统型负载均衡不支持。

     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }

    /**
     * 查询用户当前地域下的各项配额
     * @param {DescribeQuotaRequest} req
     * @param {function(string, DescribeQuotaResponse):void} cb
     * @public
     */
    DescribeQuota(req, cb) {
        let resp = new DescribeQuotaResponse();
        this.request("DescribeQuota", req, resp, cb);
    }

    /**
     * DeleteRewrite 接口支持删除指定转发规则之间的重定向关系。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeleteRewriteRequest} req
     * @param {function(string, DeleteRewriteResponse):void} cb
     * @public
     */
    DeleteRewrite(req, cb) {
        let resp = new DeleteRewriteResponse();
        this.request("DeleteRewrite", req, resp, cb);
    }

    /**
     * 本接口(CreateLoadBalancer)用来创建负载均衡实例（本接口只支持购买按量计费的负载均衡，包年包月的负载均衡请通过控制台购买）。为了使用负载均衡服务，您必须购买一个或多个负载均衡实例。成功调用该接口后，会返回负载均衡实例的唯一 ID。负载均衡实例的类型分为：公网、内网。详情可参考产品说明中的产品类型。
注意：(1)指定可用区申请负载均衡、跨zone容灾(仅香港支持)【如果您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)】；(2)目前只有北京、上海、广州支持IPv6；(3)一个账号在每个地域的默认购买配额为：公网100个，内网100个。
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * 用户手动配置原访问地址和重定向地址，系统自动将原访问地址的请求重定向至对应路径的目的地址。同一域名下可以配置多条路径作为重定向策略，实现http/https之间请求的自动跳转。设置重定向时，需满足如下约束条件：若A已经重定向至B，则A不能再重定向至C（除非先删除老的重定向关系，再建立新的重定向关系），B不能重定向至任何其它地址。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ManualRewriteRequest} req
     * @param {function(string, ManualRewriteResponse):void} cb
     * @public
     */
    ManualRewrite(req, cb) {
        let resp = new ManualRewriteResponse();
        this.request("ManualRewrite", req, resp, cb);
    }


}
module.exports = ClbClient;
