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
const ModifyTargetPortRequest = models.ModifyTargetPortRequest;
const SetLoadBalancerSecurityGroupsResponse = models.SetLoadBalancerSecurityGroupsResponse;
const RsWeightRule = models.RsWeightRule;
const BatchModifyTargetWeightResponse = models.BatchModifyTargetWeightResponse;
const CreateLoadBalancerRequest = models.CreateLoadBalancerRequest;
const DeleteRuleRequest = models.DeleteRuleRequest;
const ModifyLoadBalancerAttributesRequest = models.ModifyLoadBalancerAttributesRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DescribeClassicalLBByInstanceIdResponse = models.DescribeClassicalLBByInstanceIdResponse;
const DescribeRewriteRequest = models.DescribeRewriteRequest;
const ClassicalTarget = models.ClassicalTarget;
const DeregisterTargetsFromClassicalLBRequest = models.DeregisterTargetsFromClassicalLBRequest;
const ModifyTargetWeightResponse = models.ModifyTargetWeightResponse;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const DescribeRewriteResponse = models.DescribeRewriteResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const ClassicalTargetInfo = models.ClassicalTargetInfo;
const DescribeTargetsRequest = models.DescribeTargetsRequest;
const RegisterTargetsWithClassicalLBResponse = models.RegisterTargetsWithClassicalLBResponse;
const LoadBalancerHealth = models.LoadBalancerHealth;
const ModifyRuleResponse = models.ModifyRuleResponse;
const DescribeClassicalLBTargetsRequest = models.DescribeClassicalLBTargetsRequest;
const DescribeListenersResponse = models.DescribeListenersResponse;
const AutoRewriteRequest = models.AutoRewriteRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const DescribeTargetHealthRequest = models.DescribeTargetHealthRequest;
const TargetHealth = models.TargetHealth;
const DescribeClassicalLBHealthStatusResponse = models.DescribeClassicalLBHealthStatusResponse;
const RuleHealth = models.RuleHealth;
const Listener = models.Listener;
const ModifyLoadBalancerAttributesResponse = models.ModifyLoadBalancerAttributesResponse;
const RegisterTargetsWithClassicalLBRequest = models.RegisterTargetsWithClassicalLBRequest;
const ModifyListenerRequest = models.ModifyListenerRequest;
const Target = models.Target;
const RegisterTargetsRequest = models.RegisterTargetsRequest;
const HealthCheck = models.HealthCheck;
const DeleteListenerRequest = models.DeleteListenerRequest;
const ClassicalHealth = models.ClassicalHealth;
const ModifyTargetPortResponse = models.ModifyTargetPortResponse;
const DescribeClassicalLBByInstanceIdRequest = models.DescribeClassicalLBByInstanceIdRequest;
const ManualRewriteResponse = models.ManualRewriteResponse;
const ModifyTargetWeightRequest = models.ModifyTargetWeightRequest;
const ModifyDomainRequest = models.ModifyDomainRequest;
const Backend = models.Backend;
const ClassicalListener = models.ClassicalListener;
const CertificateInput = models.CertificateInput;
const CreateListenerResponse = models.CreateListenerResponse;
const ClassicalLoadBalancerInfo = models.ClassicalLoadBalancerInfo;
const RuleOutput = models.RuleOutput;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const CreateRuleRequest = models.CreateRuleRequest;
const RuleTargets = models.RuleTargets;
const ManualRewriteRequest = models.ManualRewriteRequest;
const ModifyListenerResponse = models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models.DescribeTargetHealthResponse;
const CreateListenerRequest = models.CreateListenerRequest;
const RewriteLocationMap = models.RewriteLocationMap;
const ModifyDomainResponse = models.ModifyDomainResponse;
const RegisterTargetsResponse = models.RegisterTargetsResponse;
const DeregisterTargetsFromClassicalLBResponse = models.DeregisterTargetsFromClassicalLBResponse;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const AutoRewriteResponse = models.AutoRewriteResponse;
const DeregisterTargetsResponse = models.DeregisterTargetsResponse;
const RewriteTarget = models.RewriteTarget;
const DescribeTargetsResponse = models.DescribeTargetsResponse;
const BatchModifyTargetWeightRequest = models.BatchModifyTargetWeightRequest;
const DeleteRewriteResponse = models.DeleteRewriteResponse;
const TargetRegionInfo = models.TargetRegionInfo;
const DeleteRuleResponse = models.DeleteRuleResponse;
const DeregisterTargetsRequest = models.DeregisterTargetsRequest;
const ListenerBackend = models.ListenerBackend;
const TagInfo = models.TagInfo;
const DescribeClassicalLBListenersResponse = models.DescribeClassicalLBListenersResponse;
const DescribeClassicalLBHealthStatusRequest = models.DescribeClassicalLBHealthStatusRequest;
const CreateLoadBalancerResponse = models.CreateLoadBalancerResponse;
const DescribeListenersRequest = models.DescribeListenersRequest;
const SetLoadBalancerSecurityGroupsRequest = models.SetLoadBalancerSecurityGroupsRequest;
const DescribeClassicalLBTargetsResponse = models.DescribeClassicalLBTargetsResponse;
const RuleInput = models.RuleInput;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const DeleteListenerResponse = models.DeleteListenerResponse;
const CertificateOutput = models.CertificateOutput;
const DescribeClassicalLBListenersRequest = models.DescribeClassicalLBListenersRequest;
const ListenerHealth = models.ListenerHealth;
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
     * RegisterTargets 接口用来将一台或多台后端机器注册到应用型负载均衡的监听器，对于四层监听器（TCP、UDP），只需指定监听器ID即可，对于七层监听器（HTTP、HTTPS），还需通过LocationId或者Domain+Url指定转发规则。
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
     * SetLoadBalancerSecurityGroups 接口支持对一个负载均衡实例执行设置（绑定、解绑）安全组操作，查询一个负载均衡实例目前已绑定的安全组，可使用 DescribeLoadBalancers 接口。
绑定操作时，入参需要传入负载均衡实例要绑定的所有安全组（已绑定的+新增绑定的）。
解绑操作时，入参需要传入负载均衡实例执行解绑后所绑定的所有安全组；如果要解绑所有安全组，可传入空数组。
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        let resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }

    /**
     * DescribeClassicalLBListeners用于获取传统型负载均衡信息
     * @param {DescribeClassicalLBListenersRequest} req
     * @param {function(string, DescribeClassicalLBListenersResponse):void} cb
     * @public
     */
    DescribeClassicalLBListeners(req, cb) {
        let resp = new DescribeClassicalLBListenersResponse();
        this.request("DescribeClassicalLBListeners", req, resp, cb);
    }

    /**
     * 本接口用来删除应用型（四层和七层）负载均衡实例下的监听器。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        let resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }

    /**
     * CreateRule 接口用于在一个已存在的应用型负载均衡七层监听器下创建转发规则，七层监听器中，后端机器必须绑定到规则上而非监听器上。
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
     * 系统自动为已存在的HTTPS:443监听器创建HTTP监听器进行转发，默认使用80端口。创建成功后可以通过HTTP:80地址自动跳转为HTTPS:443地址进行访问。
     * @param {AutoRewriteRequest} req
     * @param {function(string, AutoRewriteResponse):void} cb
     * @public
     */
    AutoRewrite(req, cb) {
        let resp = new AutoRewriteResponse();
        this.request("AutoRewrite", req, resp, cb);
    }

    /**
     * ModifyDomain接口用来修改应用型负载均衡七层监听器下的域名。
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
     * DescribeClassicalLBTargets用于获取传统型负载均衡绑定的后端服务
     * @param {DescribeClassicalLBTargetsRequest} req
     * @param {function(string, DescribeClassicalLBTargetsResponse):void} cb
     * @public
     */
    DescribeClassicalLBTargets(req, cb) {
        let resp = new DescribeClassicalLBTargetsResponse();
        this.request("DescribeClassicalLBTargets", req, resp, cb);
    }

    /**
     * DeregisterTargetsFromClassicalLB用于解绑后端服务器
     * @param {DeregisterTargetsFromClassicalLBRequest} req
     * @param {function(string, DeregisterTargetsFromClassicalLBResponse):void} cb
     * @public
     */
    DeregisterTargetsFromClassicalLB(req, cb) {
        let resp = new DeregisterTargetsFromClassicalLBResponse();
        this.request("DeregisterTargetsFromClassicalLB", req, resp, cb);
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
     * ModifyListener接口用来修改应用型负载均衡监听器的属性，包括监听器名称、健康检查参数、证书信息、转发策略等。
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
     * DeleteLoadBalancer 接口用来删除用户指定的一个负载均衡实例。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * DeleteRule 接口用来删除应用型负载均衡实例七层监听器下的转发规则。
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
     * 查询负载均衡实例列表

     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * DescribeListeners 接口可根据负载均衡器 ID，监听器的协议或者端口作为过滤条件获取监听器列表。如果不指定任何过滤条件，默认返该负载均衡器下的默认数据长度（20 个）的监听器。
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        let resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }

    /**
     * 在一个负载均衡实例下创建监听器。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        let resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }

    /**
     * ModifyTargetWeight 接口用于修改监听器绑定的后端机器的转发权重。
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
     * 本接口用于查询异步执行任务的状态，对于非查询类的接口（创建/删除负载均衡实例、监听器、规则以及绑定或解绑后端机器等），在调用成功后都需要使用本接口查询任务是否最终执行成功。
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * ModifyRule 接口用来修改应用型负载均衡七层监听器下的转发规则的各项属性，包括转发路径、健康检查属性、转发策略等。
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
     * DeleteRewrite 接口支持删除指定转发规则之间的重定向关系。
     * @param {DeleteRewriteRequest} req
     * @param {function(string, DeleteRewriteResponse):void} cb
     * @public
     */
    DeleteRewrite(req, cb) {
        let resp = new DeleteRewriteResponse();
        this.request("DeleteRewrite", req, resp, cb);
    }

    /**
     * DescribeTargets 接口用来查询应用型负载均衡实例的某些监听器后端绑定的机器列表。
     * @param {DescribeTargetsRequest} req
     * @param {function(string, DescribeTargetsResponse):void} cb
     * @public
     */
    DescribeTargets(req, cb) {
        let resp = new DescribeTargetsResponse();
        this.request("DescribeTargets", req, resp, cb);
    }

    /**
     * RegisterTargetsWithClassicalLB用于绑定后端服务到传统型负载均衡
     * @param {RegisterTargetsWithClassicalLBRequest} req
     * @param {function(string, RegisterTargetsWithClassicalLBResponse):void} cb
     * @public
     */
    RegisterTargetsWithClassicalLB(req, cb) {
        let resp = new RegisterTargetsWithClassicalLBResponse();
        this.request("RegisterTargetsWithClassicalLB", req, resp, cb);
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
     * ModifyTargetPort接口用于修改监听器绑定的后端云服务器的端口。
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
     * DeregisterTargets 接口用来将一台或多台后端机器从应用型负载均衡的监听器上解绑，对于四层监听器（TCP、UDP），只需指定监听器ID即可，对于七层监听器（HTTP、HTTPS），还需通过LocationId或者Domain+Url指定转发规则。
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
     * 修改负载均衡实例的属性，支持修改负载均衡实例的名称、设置负载均衡的跨域属性。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        let resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }

    /**
     * DescribeClassicalLBByInstanceId用于通过后端实例ID获取传统型负载均衡ID列表
     * @param {DescribeClassicalLBByInstanceIdRequest} req
     * @param {function(string, DescribeClassicalLBByInstanceIdResponse):void} cb
     * @public
     */
    DescribeClassicalLBByInstanceId(req, cb) {
        let resp = new DescribeClassicalLBByInstanceIdResponse();
        this.request("DescribeClassicalLBByInstanceId", req, resp, cb);
    }

    /**
     * BatchModifyTargetWeight接口用于批量修改监听器绑定的后端机器的转发权重，当前接口只支持应用型HTTP/HTTPS监听器。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        let resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }

    /**
     * DescribeTargetHealth 接口用来获取应用型负载均衡后端的健康检查结果。
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        let resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }

    /**
     * CreateLoadBalancer 接口用来创建负载均衡实例。为了使用负载均衡服务，您必须要购买一个或者多个负载均衡实例。通过成功调用该接口，会返回负载均衡实例的唯一 ID。用户可以购买的负载均衡实例类型分为：公网（应用型）、内网（应用型）。可以参考产品说明的产品类型。
本接口成功返回后，可使用查询负载均衡实例列表接口DescribeLoadBalancers查询负载均衡实例的状态，以确定是否创建成功。
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        let resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }

    /**
     * 用户手动配置原访问地址和重定向地址，系统自动将原访问地址的请求重定向至对应路径的目的地址。同一域名下可以配置多条路径作为重定向策略，实现http/https之间请求的自动跳转。
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
