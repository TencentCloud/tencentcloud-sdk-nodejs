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
 * clb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("clb.tencentcloudapi.com", "2018-03-17", clientConfig);
    }
    /**
     * RegisterTargets 接口用来将一台或多台后端服务绑定到负载均衡的监听器（或7层转发规则），在此之前您需要先行创建相关的4层监听器或7层转发规则。对于四层监听器（TCP、UDP），只需指定监听器ID即可，对于七层监听器（HTTP、HTTPS），还需通过LocationId或者Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async RegisterTargets(req, cb) {
        return this.request("RegisterTargets", req, cb);
    }
    /**
     * ModifyDomainAttributes接口用于修改负载均衡7层监听器转发规则的域名级别属性，如修改域名、修改DefaultServer、开启/关闭Http2、修改证书。
本接口为异步接口，本接口返回成功后，需以返回的RequestId为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ModifyDomainAttributes(req, cb) {
        return this.request("ModifyDomainAttributes", req, cb);
    }
    /**
     * 根据证书ID查询其在一个地域中所关联到负载均衡实例列表
     */
    async DescribeLoadBalancerListByCertId(req, cb) {
        return this.request("DescribeLoadBalancerListByCertId", req, cb);
    }
    /**
     * DescribeClassicalLBListeners 接口用于获取传统型负载均衡的监听器信息。
     */
    async DescribeClassicalLBListeners(req, cb) {
        return this.request("DescribeClassicalLBListeners", req, cb);
    }
    /**
     * RegisterTargetsWithClassicalLB 接口用于绑定后端服务到传统型负载均衡。本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async RegisterTargetsWithClassicalLB(req, cb) {
        return this.request("RegisterTargetsWithClassicalLB", req, cb);
    }
    /**
     * 拉取配置绑定的 server 或 location，如果 domain 存在，结果将根据 domain 过滤。或拉取配置绑定的 loadbalancer。
     */
    async DescribeCustomizedConfigAssociateList(req, cb) {
        return this.request("DescribeCustomizedConfigAssociateList", req, cb);
    }
    /**
     * 创建主题，默认开启全文索引和键值索引。如果不存在CLB专有日志集，则创建失败。
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 这个接口用于删除SnatPro的负载均衡的SnatIp。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DeleteLoadBalancerSnatIps(req, cb) {
        return this.request("DeleteLoadBalancerSnatIps", req, cb);
    }
    /**
     * 本接口用来删除负载均衡实例下的监听器（四层和七层）。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DeleteListener(req, cb) {
        return this.request("DeleteListener", req, cb);
    }
    /**
     * 绑定或解绑一个安全组到多个公网负载均衡实例。注意：内网负载均衡不支持绑定安全组。
     */
    async SetSecurityGroupForLoadbalancers(req, cb) {
        return this.request("SetSecurityGroupForLoadbalancers", req, cb);
    }
    /**
     * 批量解绑四七层后端服务。批量解绑的资源数量上限为500。
     */
    async BatchDeregisterTargets(req, cb) {
        return this.request("BatchDeregisterTargets", req, cb);
    }
    /**
     * 修改IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标特性。
     */
    async ModifyLoadBalancerMixIpTarget(req, cb) {
        return this.request("ModifyLoadBalancerMixIpTarget", req, cb);
    }
    /**
     * CreateRule 接口用于在一个已存在的负载均衡七层监听器下创建转发规则，七层监听器中，后端服务必须绑定到规则上而非监听器上。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 查询集群信息列表，支持以集群类型、集群唯一ID、集群名字、集群标签、集群内vip、集群内负载均衡唯一id、集群网络类型、可用区等条件进行检索
     */
    async DescribeExclusiveClusters(req, cb) {
        return this.request("DescribeExclusiveClusters", req, cb);
    }
    /**
     * 增加、删除、更新负载均衡的日志服务(CLS)主题。
     */
    async SetLoadBalancerClsLog(req, cb) {
        return this.request("SetLoadBalancerClsLog", req, cb);
    }
    /**
     * 用户需要先创建出一个HTTPS:443监听器，并在其下创建转发规则。通过调用本接口，系统会自动创建出一个HTTP:80监听器（如果之前不存在），并在其下创建转发规则，与HTTPS:443监听器下的Domains（在入参中指定）对应。创建成功后可以通过HTTP:80地址自动跳转为HTTPS:443地址进行访问。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async AutoRewrite(req, cb) {
        return this.request("AutoRewrite", req, cb);
    }
    /**
     * 解除规则的目标组关联关系。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DisassociateTargetGroups(req, cb) {
        return this.request("DisassociateTargetGroups", req, cb);
    }
    /**
     * ModifyListener接口用来修改负载均衡监听器的属性，包括监听器名称、健康检查参数、证书信息、转发策略等。本接口不支持传统型负载均衡。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ModifyListener(req, cb) {
        return this.request("ModifyListener", req, cb);
    }
    /**
     * 该接口支持删除负载均衡的多个监听器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DeleteLoadBalancerListeners(req, cb) {
        return this.request("DeleteLoadBalancerListeners", req, cb);
    }
    /**
     * SetLoadBalancerSecurityGroups 接口支持对一个公网负载均衡实例执行设置（绑定、解绑）安全组操作。查询一个负载均衡实例目前已绑定的安全组，可使用 DescribeLoadBalancers 接口。本接口是set语义，
绑定操作时，入参需要传入负载均衡实例要绑定的所有安全组（已绑定的+新增绑定的）。
解绑操作时，入参需要传入负载均衡实例执行解绑后所绑定的所有安全组；如果要解绑所有安全组，可不传此参数，或传入空数组。注意：内网负载均衡不支持绑定安全组。
     */
    async SetLoadBalancerSecurityGroups(req, cb) {
        return this.request("SetLoadBalancerSecurityGroups", req, cb);
    }
    /**
     * 删除目标组
     */
    async DeleteTargetGroups(req, cb) {
        return this.request("DeleteTargetGroups", req, cb);
    }
    /**
     * 支持共享型clb升级到性能容量型clb（不支持性能保障降级到共享型）。
     */
    async ModifyLoadBalancerSla(req, cb) {
        return this.request("ModifyLoadBalancerSla", req, cb);
    }
    /**
     * 修改负载均衡的IP（client IP）封禁黑名单列表，一个转发规则最多支持封禁 2000000 个IP，及黑名单容量为 2000000。
（接口灰度中，如需使用请提工单）
     */
    async ModifyBlockIPList(req, cb) {
        return this.request("ModifyBlockIPList", req, cb);
    }
    /**
     * 注册服务器到目标组。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async RegisterTargetGroupInstances(req, cb) {
        return this.request("RegisterTargetGroupInstances", req, cb);
    }
    /**
     * DeregisterTargetsFromClassicalLB 接口用于解绑负载均衡后端服务。本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DeregisterTargetsFromClassicalLB(req, cb) {
        return this.request("DeregisterTargetsFromClassicalLB", req, cb);
    }
    /**
     * 创建CLB专有日志集，此日志集用于存储CLB的日志。
     */
    async CreateClsLogSet(req, cb) {
        return this.request("CreateClsLogSet", req, cb);
    }
    /**
     * 查询负载均衡的详细信息，包括监听器，规则及后端目标。
     */
    async DescribeLoadBalancersDetail(req, cb) {
        return this.request("DescribeLoadBalancersDetail", req, cb);
    }
    /**
     * DeleteLoadBalancer 接口用以删除指定的一个或多个负载均衡实例。成功删除后，会把负载均衡实例下的监听器、转发规则一起删除，并把后端服务解绑。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DeleteLoadBalancer(req, cb) {
        return this.request("DeleteLoadBalancer", req, cb);
    }
    /**
     * 查询用户在当前地域支持可用区列表和资源列表。
     */
    async DescribeResources(req, cb) {
        return this.request("DescribeResources", req, cb);
    }
    /**
     * ModifyTargetPort接口用于修改监听器绑定的后端服务的端口。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ModifyTargetPort(req, cb) {
        return this.request("ModifyTargetPort", req, cb);
    }
    /**
     * DeleteRule 接口用来删除负载均衡实例七层监听器下的转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async DeleteRule(req, cb) {
        return this.request("DeleteRule", req, cb);
    }
    /**
     * ReplaceCertForLoadBalancers 接口用以替换负载均衡实例所关联的证书，对于各个地域的负载均衡，如果指定的老的证书ID与其有关联关系，则会先解除关联，再建立新证书与该负载均衡的关联关系。
此接口支持替换服务端证书或客户端证书。
需要使用的新证书，可以通过传入证书ID来指定，如果不指定证书ID，则必须传入证书内容等相关信息，用以新建证书并绑定至负载均衡。
注：本接口仅可从广州地域调用。
     */
    async ReplaceCertForLoadBalancers(req, cb) {
        return this.request("ReplaceCertForLoadBalancers", req, cb);
    }
    /**
     * 获取目标组绑定的服务器信息
     */
    async DescribeTargetGroupInstances(req, cb) {
        return this.request("DescribeTargetGroupInstances", req, cb);
    }
    /**
     * 本接口(AssociateTargetGroups)用来将目标组绑定到负载均衡的监听器（四层协议）或转发规则（七层协议）上。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async AssociateTargetGroups(req, cb) {
        return this.request("AssociateTargetGroups", req, cb);
    }
    /**
     * 查询后端云主机或弹性网卡绑定的负载均衡，支持弹性网卡和cvm查询。
     */
    async DescribeLBListeners(req, cb) {
        return this.request("DescribeLBListeners", req, cb);
    }
    /**
     * 批量修改目标组服务器端口。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async ModifyTargetGroupInstancesPort(req, cb) {
        return this.request("ModifyTargetGroupInstancesPort", req, cb);
    }
    /**
     * 从目标组中解绑服务器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async DeregisterTargetGroupInstances(req, cb) {
        return this.request("DeregisterTargetGroupInstances", req, cb);
    }
    /**
     * 查询一个地域的负载均衡实例列表。

     */
    async DescribeLoadBalancers(req, cb) {
        return this.request("DescribeLoadBalancers", req, cb);
    }
    /**
     * 查询一个负载均衡所封禁的IP列表（黑名单）。（接口灰度中，如需使用请提工单）
     */
    async DescribeBlockIPList(req, cb) {
        return this.request("DescribeBlockIPList", req, cb);
    }
    /**
     * DescribeListeners 接口可根据负载均衡器 ID、监听器的协议或端口作为过滤条件获取监听器列表。如果不指定任何过滤条件，则返回该负载均衡实例下的所有监听器。
     */
    async DescribeListeners(req, cb) {
        return this.request("DescribeListeners", req, cb);
    }
    /**
     * DescribeClassicalLBTargets用于获取传统型负载均衡绑定的后端服务。
     */
    async DescribeClassicalLBTargets(req, cb) {
        return this.request("DescribeClassicalLBTargets", req, cb);
    }
    /**
     * 在一个负载均衡实例下创建监听器。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async CreateListener(req, cb) {
        return this.request("CreateListener", req, cb);
    }
    /**
     * 批量绑定虚拟主机或弹性网卡，支持跨域绑定，支持四层、七层（TCP、UDP、HTTP、HTTPS）协议绑定。批量绑定的资源数量上限为500。
     */
    async BatchRegisterTargets(req, cb) {
        return this.request("BatchRegisterTargets", req, cb);
    }
    /**
     * ModifyRule 接口用来修改负载均衡七层监听器下的转发规则的各项属性，包括转发路径、健康检查属性、转发策略等。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 获取用户的CLB专有日志集。
     */
    async DescribeClsLogSet(req, cb) {
        return this.request("DescribeClsLogSet", req, cb);
    }
    /**
     * 拉取个性化配置列表，返回用户 AppId 下指定类型的配置。
     */
    async DescribeCustomizedConfigList(req, cb) {
        return this.request("DescribeCustomizedConfigList", req, cb);
    }
    /**
     * ModifyTargetWeight 接口用于修改负载均衡绑定的后端服务的转发权重。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ModifyTargetWeight(req, cb) {
        return this.request("ModifyTargetWeight", req, cb);
    }
    /**
     * 本接口用于查询异步任务的执行状态，对于非查询类的接口（创建/删除负载均衡实例、监听器、规则以及绑定或解绑后端服务等），在接口调用成功后，都需要使用本接口查询任务最终是否执行成功。
     */
    async DescribeTaskStatus(req, cb) {
        return this.request("DescribeTaskStatus", req, cb);
    }
    /**
     * 负载均衡维度的个性化配置相关操作：创建、删除、修改、绑定、解绑
     */
    async SetCustomizedConfigForLoadBalancer(req, cb) {
        return this.request("SetCustomizedConfigForLoadBalancer", req, cb);
    }
    /**
     * 查询独占集群中的资源列表，支持按集群ID、VIP、负载均衡ID、是否闲置为过滤条件检索。
     */
    async DescribeClusterResources(req, cb) {
        return this.request("DescribeClusterResources", req, cb);
    }
    /**
     * DescribeTargetHealth 接口用来获取负载均衡后端服务的健康检查结果，不支持传统型负载均衡。
     */
    async DescribeTargetHealth(req, cb) {
        return this.request("DescribeTargetHealth", req, cb);
    }
    /**
     * 获取目标组列表
     */
    async DescribeTargetGroupList(req, cb) {
        return this.request("DescribeTargetGroupList", req, cb);
    }
    /**
     * 根据 ModifyBlockIPList 接口返回的异步任务的ID，查询封禁IP（黑名单）异步任务的执行状态。（接口灰度中，如需使用请提工单）
     */
    async DescribeBlockIPTask(req, cb) {
        return this.request("DescribeBlockIPTask", req, cb);
    }
    /**
     * 创建目标组。该功能正在内测中，如需使用，请通过[工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1)。
     */
    async CreateTargetGroup(req, cb) {
        return this.request("CreateTargetGroup", req, cb);
    }
    /**
     * 查询运行中、隔离中、即将到期和负载均衡总数。
     */
    async DescribeLoadBalancerOverview(req, cb) {
        return this.request("DescribeLoadBalancerOverview", req, cb);
    }
    /**
     * DescribeTargets 接口用来查询负载均衡实例的某些监听器绑定的后端服务列表。
     */
    async DescribeTargets(req, cb) {
        return this.request("DescribeTargets", req, cb);
    }
    /**
     * ModifyDomain接口用来修改负载均衡七层监听器下的域名。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ModifyDomain(req, cb) {
        return this.request("ModifyDomain", req, cb);
    }
    /**
     * 本接口将传统型负载均衡迁移成(原应用型)负载均衡
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     */
    async MigrateClassicalLoadBalancers(req, cb) {
        return this.request("MigrateClassicalLoadBalancers", req, cb);
    }
    /**
     * DescribeRewrite 接口可根据负载均衡实例ID，查询一个负载均衡实例下转发规则的重定向关系。如果不指定监听器ID或转发规则ID，则返回该负载均衡实例下的所有重定向关系。
     */
    async DescribeRewrite(req, cb) {
        return this.request("DescribeRewrite", req, cb);
    }
    /**
     * 查询目标组信息
     */
    async DescribeTargetGroups(req, cb) {
        return this.request("DescribeTargetGroups", req, cb);
    }
    /**
     * 修改目标组的名称或者默认端口属性
     */
    async ModifyTargetGroupAttribute(req, cb) {
        return this.request("ModifyTargetGroupAttribute", req, cb);
    }
    /**
     * DescribeClassicalLBHealthStatus用于获取传统型负载均衡后端的健康状态
     */
    async DescribeClassicalLBHealthStatus(req, cb) {
        return this.request("DescribeClassicalLBHealthStatus", req, cb);
    }
    /**
     * DeregisterTargets 接口用来将一台或多台后端服务从负载均衡的监听器或转发规则上解绑，对于四层监听器，只需指定监听器ID即可，对于七层监听器，还需通过LocationId或Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async DeregisterTargets(req, cb) {
        return this.request("DeregisterTargets", req, cb);
    }
    /**
     * 修改负载均衡实例的属性。支持修改负载均衡实例的名称、设置负载均衡的跨域属性。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async ModifyLoadBalancerAttributes(req, cb) {
        return this.request("ModifyLoadBalancerAttributes", req, cb);
    }
    /**
     * 批量修改目标组的服务器权重。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async ModifyTargetGroupInstancesWeight(req, cb) {
        return this.request("ModifyTargetGroupInstancesWeight", req, cb);
    }
    /**
     * 针对SnatPro负载均衡，这个接口用于添加SnatIp，如果负载均衡没有开启SnatPro，添加SnatIp后会自动开启。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     */
    async CreateLoadBalancerSnatIps(req, cb) {
        return this.request("CreateLoadBalancerSnatIps", req, cb);
    }
    /**
     * DescribeClassicalLBByInstanceId用于通过后端实例ID获取传统型负载均衡ID列表。
     */
    async DescribeClassicalLBByInstanceId(req, cb) {
        return this.request("DescribeClassicalLBByInstanceId", req, cb);
    }
    /**
     * 查询账号下的高流量负载均衡，返回前10个负载均衡。如果是子账号登录，只返回子账号有权限的负载均衡。
     */
    async DescribeLoadBalancerTraffic(req, cb) {
        return this.request("DescribeLoadBalancerTraffic", req, cb);
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
     */
    async CloneLoadBalancer(req, cb) {
        return this.request("CloneLoadBalancer", req, cb);
    }
    /**
     * 查询跨域2.0版本云联网后端子机和网卡信息。
     */
    async DescribeCrossTargets(req, cb) {
        return this.request("DescribeCrossTargets", req, cb);
    }
    /**
     * BatchModifyTargetWeight 接口用于批量修改负载均衡监听器绑定的后端机器的转发权重。批量修改的资源数量上限为500。本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。<br/>负载均衡的4层和7层监听器支持此接口，传统型负载均衡不支持。

     */
    async BatchModifyTargetWeight(req, cb) {
        return this.request("BatchModifyTargetWeight", req, cb);
    }
    /**
     * 查询用户当前地域下的各项配额
     */
    async DescribeQuota(req, cb) {
        return this.request("DescribeQuota", req, cb);
    }
    /**
     * DeleteRewrite 接口支持删除指定转发规则之间的重定向关系。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async DeleteRewrite(req, cb) {
        return this.request("DeleteRewrite", req, cb);
    }
    /**
     * 本接口(CreateLoadBalancer)用来创建负载均衡实例（本接口只支持购买按量计费的负载均衡，包年包月的负载均衡请通过控制台购买）。为了使用负载均衡服务，您必须购买一个或多个负载均衡实例。成功调用该接口后，会返回负载均衡实例的唯一 ID。负载均衡实例的类型分为：公网、内网。详情可参考产品说明中的产品类型。
注意：(1)指定可用区申请负载均衡、跨zone容灾(仅香港支持)【如果您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)】；(2)目前只有北京、上海、广州支持IPv6；(3)一个账号在每个地域的默认购买配额为：公网100个，内网100个。
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     */
    async CreateLoadBalancer(req, cb) {
        return this.request("CreateLoadBalancer", req, cb);
    }
    /**
     * 用户手动配置原访问地址和重定向地址，系统自动将原访问地址的请求重定向至对应路径的目的地址。同一域名下可以配置多条路径作为重定向策略，实现http/https之间请求的自动跳转。设置重定向时，需满足如下约束条件：若A已经重定向至B，则A不能再重定向至C（除非先删除老的重定向关系，再建立新的重定向关系），B不能重定向至任何其它地址。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     */
    async ManualRewrite(req, cb) {
        return this.request("ManualRewrite", req, cb);
    }
}
exports.Client = Client;
