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
 * tke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tke.tencentcloudapi.com", "2018-05-25", clientConfig);
    }
    /**
     * 解除TMP实例的集群关联
     */
    async DeletePrometheusClusterAgent(req, cb) {
        return this.request("DeletePrometheusClusterAgent", req, cb);
    }
    /**
     * 创建边缘计算ECM机器
     */
    async CreateECMInstances(req, cb) {
        return this.request("CreateECMInstances", req, cb);
    }
    /**
     * 查看超级节点列表
     */
    async DescribeClusterVirtualNode(req, cb) {
        return this.request("DescribeClusterVirtualNode", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 根据K8S版本获取可选运行时版本
     */
    async DescribeSupportedRuntime(req, cb) {
        return this.request("DescribeSupportedRuntime", req, cb);
    }
    /**
     * 在tke@edge集群的边缘节点上安装日志采集组件
     */
    async InstallEdgeLogAgent(req, cb) {
        return this.request("InstallEdgeLogAgent", req, cb);
    }
    /**
     * 查询opa策略列表
     */
    async DescribeOpenPolicyList(req, cb) {
        return this.request("DescribeOpenPolicyList", req, cb);
    }
    /**
     * 创建超级节点池
     */
    async CreateClusterVirtualNodePool(req, cb) {
        return this.request("CreateClusterVirtualNodePool", req, cb);
    }
    /**
     * 修改集群弹性伸缩属性
     */
    async ModifyClusterAsGroupOptionAttribute(req, cb) {
        return this.request("ModifyClusterAsGroupOptionAttribute", req, cb);
    }
    /**
     * GR集群可以通过本接口附加vpc-cni容器网络插件，开启vpc-cni容器网络能力
     */
    async EnableVpcCniNetworkType(req, cb) {
        return this.request("EnableVpcCniNetworkType", req, cb);
    }
    /**
     * 删除集群(YUNAPI V3版本)
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 升级边缘集群组件到指定版本，此版本为TKEEdge专用版本。
     */
    async UpdateEdgeClusterVersion(req, cb) {
        return this.request("UpdateEdgeClusterVersion", req, cb);
    }
    /**
     * 从tke@edge集群边缘节点上卸载日志采集组件
     */
    async UninstallEdgeLogAgent(req, cb) {
        return this.request("UninstallEdgeLogAgent", req, cb);
    }
    /**
     * 查看开启第三方节点池配置信息
     */
    async DescribeExternalNodeSupportConfig(req, cb) {
        return this.request("DescribeExternalNodeSupportConfig", req, cb);
    }
    /**
     * 删除边缘计算实例
     */
    async DeleteEdgeClusterInstances(req, cb) {
        return this.request("DeleteEdgeClusterInstances", req, cb);
    }
    /**
     * 包括 Pod 资源统计和绑定的预留券资源统计。
     */
    async DescribePostNodeResources(req, cb) {
        return this.request("DescribePostNodeResources", req, cb);
    }
    /**
     * 仅能设置节点池中处于伸缩组的节点
     */
    async SetNodePoolNodeProtection(req, cb) {
        return this.request("SetNodePoolNodeProtection", req, cb);
    }
    /**
     * 查询容器实例的事件
     */
    async DescribeEKSContainerInstanceEvent(req, cb) {
        return this.request("DescribeEKSContainerInstanceEvent", req, cb);
    }
    /**
     * 查询边缘容器集群可用的自定义参数
     */
    async DescribeEdgeAvailableExtraArgs(req, cb) {
        return this.request("DescribeEdgeAvailableExtraArgs", req, cb);
    }
    /**
     * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
     */
    async DescribeClusterCommonNames(req, cb) {
        return this.request("DescribeClusterCommonNames", req, cb);
    }
    /**
     * 获取2.0实例初始化任务状态
     */
    async DescribePrometheusInstanceInitStatus(req, cb) {
        return this.request("DescribePrometheusInstanceInitStatus", req, cb);
    }
    /**
     * 开启事件持久化功能
     */
    async EnableEventPersistence(req, cb) {
        return this.request("EnableEventPersistence", req, cb);
    }
    /**
     * 获取告警历史
     */
    async DescribePrometheusAlertHistory(req, cb) {
        return this.request("DescribePrometheusAlertHistory", req, cb);
    }
    /**
     * 获取eniipamd组件信息
     */
    async DescribeIPAMD(req, cb) {
        return this.request("DescribeIPAMD", req, cb);
    }
    /**
     * 创建集群路由表
     */
    async CreateClusterRouteTable(req, cb) {
        return this.request("CreateClusterRouteTable", req, cb);
    }
    /**
     * 获得节点升级当前的进度，若集群未处于节点升级状态，则接口会报错：任务未找到。
     */
    async GetUpgradeInstanceProgress(req, cb) {
        return this.request("GetUpgradeInstanceProgress", req, cb);
    }
    /**
     * 创建一个云原生Prometheus模板实例
     */
    async CreatePrometheusTemplate(req, cb) {
        return this.request("CreatePrometheusTemplate", req, cb);
    }
    /**
     * 查询可以用预留券抵扣的 Pod 信息。
     */
    async DescribePodsBySpec(req, cb) {
        return this.request("DescribePodsBySpec", req, cb);
    }
    /**
     * 查询预留实例列表
     */
    async DescribeReservedInstances(req, cb) {
        return this.request("DescribeReservedInstances", req, cb);
    }
    /**
     * 删除超级节点
     */
    async DeleteClusterVirtualNode(req, cb) {
        return this.request("DeleteClusterVirtualNode", req, cb);
    }
    /**
     * 删除备份仓库
     */
    async DeleteBackupStorageLocation(req, cb) {
        return this.request("DeleteBackupStorageLocation", req, cb);
    }
    /**
     * 边缘计算支持版本和k8s版本
     */
    async DescribeAvailableTKEEdgeVersion(req, cb) {
        return this.request("DescribeAvailableTKEEdgeVersion", req, cb);
    }
    /**
     * 查询边缘集群列表
     */
    async DescribeTKEEdgeClusters(req, cb) {
        return this.request("DescribeTKEEdgeClusters", req, cb);
    }
    /**
     * 从TKE集群中卸载CLS日志采集组件
     */
    async UninstallLogAgent(req, cb) {
        return this.request("UninstallLogAgent", req, cb);
    }
    /**
     * 查询正在运行中Pod的计费信息。可以通过 Namespace 和 Name 来查询某个 Pod 的信息，也可以通过 Pod 的 Uid 批量查询。
     */
    async DescribePodChargeInfo(req, cb) {
        return this.request("DescribePodChargeInfo", req, cb);
    }
    /**
     * 获取集群版本信息
     */
    async DescribeVersions(req, cb) {
        return this.request("DescribeVersions", req, cb);
    }
    /**
     * 操作TKE集群的addon
     */
    async ForwardApplicationRequestV3(req, cb) {
        return this.request("ForwardApplicationRequestV3", req, cb);
    }
    /**
     * 修改被关联集群的external labels
     */
    async ModifyPrometheusAgentExternalLabels(req, cb) {
        return this.request("ModifyPrometheusAgentExternalLabels", req, cb);
    }
    /**
     * 查询边缘集群自定义参数
     */
    async DescribeEdgeClusterExtraArgs(req, cb) {
        return this.request("DescribeEdgeClusterExtraArgs", req, cb);
    }
    /**
     * 删除弹性集群(yunapiv3)
     */
    async DeleteEKSCluster(req, cb) {
        return this.request("DeleteEKSCluster", req, cb);
    }
    /**
     * 获取事件、审计和日志的状态
     */
    async DescribeEdgeLogSwitches(req, cb) {
        return this.request("DescribeEdgeLogSwitches", req, cb);
    }
    /**
     * 修改预留券的抵扣范围，抵扣范围取值：Region、Zone 和 Node。
     */
    async ModifyReservedInstanceScope(req, cb) {
        return this.request("ModifyReservedInstanceScope", req, cb);
    }
    /**
     * 获取边缘计算外部访问的kubeconfig
     */
    async DescribeTKEEdgeExternalKubeconfig(req, cb) {
        return this.request("DescribeTKEEdgeExternalKubeconfig", req, cb);
    }
    /**
     * 修改集群标签
     */
    async ModifyClusterTags(req, cb) {
        return this.request("ModifyClusterTags", req, cb);
    }
    /**
     * 创建日志采集配置
     */
    async CreateCLSLogConfig(req, cb) {
        return this.request("CreateCLSLogConfig", req, cb);
    }
    /**
     * 开启集群审计
     */
    async EnableClusterAudit(req, cb) {
        return this.request("EnableClusterAudit", req, cb);
    }
    /**
     * 创建备份仓库，指定了存储仓库类型（如COS）、COS桶地区、名称等信息，当前最多允许创建100个仓库， 注意此接口当前是全局接口，多个地域的TKE集群如果要备份到相同的备份仓库中，不需要重复创建备份仓库
     */
    async CreateBackupStorageLocation(req, cb) {
        return this.request("CreateBackupStorageLocation", req, cb);
    }
    /**
     * 修改超级节点池
     */
    async ModifyClusterVirtualNodePool(req, cb) {
        return this.request("ModifyClusterVirtualNodePool", req, cb);
    }
    /**
     * 获取集群可以升级的所有版本
     */
    async DescribeAvailableClusterVersion(req, cb) {
        return this.request("DescribeAvailableClusterVersion", req, cb);
    }
    /**
     * 修改集群采集配置
     */
    async ModifyPrometheusConfig(req, cb) {
        return this.request("ModifyPrometheusConfig", req, cb);
    }
    /**
     * 本接口查询当前用户和地域在指定可用区下的机型可支持的最大 TKE VPC-CNI 网络模式的 Pod 数量
     */
    async DescribeVpcCniPodLimits(req, cb) {
        return this.request("DescribeVpcCniPodLimits", req, cb);
    }
    /**
     * 升级集群 Master 组件到指定版本
     */
    async UpdateClusterVersion(req, cb) {
        return this.request("UpdateClusterVersion", req, cb);
    }
    /**
     * 在应用市场中查询正在安装中的应用列表
     */
    async DescribeClusterPendingReleases(req, cb) {
        return this.request("DescribeClusterPendingReleases", req, cb);
    }
    /**
     * 创建聚合规则yaml方式
     */
    async CreatePrometheusRecordRuleYaml(req, cb) {
        return this.request("CreatePrometheusRecordRuleYaml", req, cb);
    }
    /**
     * 批量删除镜像缓存
     */
    async DeleteImageCaches(req, cb) {
        return this.request("DeleteImageCaches", req, cb);
    }
    /**
     * 删除集群路由表
     */
    async DeleteClusterRouteTable(req, cb) {
        return this.request("DeleteClusterRouteTable", req, cb);
    }
    /**
     * 获取边缘脚本链接，此接口用于添加第三方节点，通过下载脚本从而将节点添加到边缘集群。
     */
    async DescribeTKEEdgeScript(req, cb) {
        return this.request("DescribeTKEEdgeScript", req, cb);
    }
    /**
     * 修改2.0实例告警策略
     */
    async ModifyPrometheusAlertPolicy(req, cb) {
        return this.request("ModifyPrometheusAlertPolicy", req, cb);
    }
    /**
     * 更新一个addon的参数和版本
     */
    async UpdateAddon(req, cb) {
        return this.request("UpdateAddon", req, cb);
    }
    /**
     * 查看集群认证配置
     */
    async DescribeClusterAuthenticationOptions(req, cb) {
        return this.request("DescribeClusterAuthenticationOptions", req, cb);
    }
    /**
     * 修改集群伸缩组属性
     */
    async ModifyClusterAsGroupAttribute(req, cb) {
        return this.request("ModifyClusterAsGroupAttribute", req, cb);
    }
    /**
     * 为目标集群安装一个addon
     */
    async InstallAddon(req, cb) {
        return this.request("InstallAddon", req, cb);
    }
    /**
     * 删除ECM实例
     */
    async DeleteECMInstances(req, cb) {
        return this.request("DeleteECMInstances", req, cb);
    }
    /**
     * 查询节点池详情
     */
    async DescribeClusterNodePoolDetail(req, cb) {
        return this.request("DescribeClusterNodePoolDetail", req, cb);
    }
    /**
     * 取消模板同步，这将会删除目标中该模板所生产的配置
     */
    async DeletePrometheusTemplateSync(req, cb) {
        return this.request("DeletePrometheusTemplateSync", req, cb);
    }
    /**
     * 扩展(新建)集群节点
     */
    async CreateClusterInstances(req, cb) {
        return this.request("CreateClusterInstances", req, cb);
    }
    /**
     * 修改集群属性
     */
    async ModifyClusterAttribute(req, cb) {
        return this.request("ModifyClusterAttribute", req, cb);
    }
    /**
     * 删除集群伸缩组
     */
    async DeleteClusterAsGroups(req, cb) {
        return this.request("DeleteClusterAsGroups", req, cb);
    }
    /**
     * 删除集群路由
     */
    async DeleteClusterRoute(req, cb) {
        return this.request("DeleteClusterRoute", req, cb);
    }
    /**
     * 在应用市场中集群删除某个应用
     */
    async UninstallClusterRelease(req, cb) {
        return this.request("UninstallClusterRelease", req, cb);
    }
    /**
     * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
     */
    async AddVpcCniSubnets(req, cb) {
        return this.request("AddVpcCniSubnets", req, cb);
    }
    /**
     * 获取镜像信息
     */
    async DescribeImages(req, cb) {
        return this.request("DescribeImages", req, cb);
    }
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     */
    async DescribeExistedInstances(req, cb) {
        return this.request("DescribeExistedInstances", req, cb);
    }
    /**
     * 查询指定集群的巡检结果信息
     */
    async ListClusterInspectionResults(req, cb) {
        return this.request("ListClusterInspectionResults", req, cb);
    }
    /**
     * 查询节点池列表
     */
    async DescribeClusterNodePools(req, cb) {
        return this.request("DescribeClusterNodePools", req, cb);
    }
    /**
     * 获取边缘计算集群的认证信息
     */
    async DescribeTKEEdgeClusterCredential(req, cb) {
        return this.request("DescribeTKEEdgeClusterCredential", req, cb);
    }
    /**
     * 给集群的一批work节点进行升级
     */
    async UpgradeClusterInstances(req, cb) {
        return this.request("UpgradeClusterInstances", req, cb);
    }
    /**
     * 查询集群路由表
     */
    async DescribeClusterRouteTables(req, cb) {
        return this.request("DescribeClusterRouteTables", req, cb);
    }
    /**
     * 删除边缘容器CVM实例
     */
    async DeleteEdgeCVMInstances(req, cb) {
        return this.request("DeleteEdgeCVMInstances", req, cb);
    }
    /**
     * 将集群内节点移入节点池
     */
    async AddNodeToNodePool(req, cb) {
        return this.request("AddNodeToNodePool", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     */
    async DescribeClusterEndpointStatus(req, cb) {
        return this.request("DescribeClusterEndpointStatus", req, cb);
    }
    /**
     * 预留券实例的购买会预先扣除本次实例购买所需金额，在调用本接口前请确保账户余额充足。
     */
    async CreateReservedInstances(req, cb) {
        return this.request("CreateReservedInstances", req, cb);
    }
    /**
     * 更新镜像缓存接口
     */
    async UpdateImageCache(req, cb) {
        return this.request("UpdateImageCache", req, cb);
    }
    /**
     * 查询批量修改标签状态
     */
    async DescribeBatchModifyTagsStatus(req, cb) {
        return this.request("DescribeBatchModifyTagsStatus", req, cb);
    }
    /**
     * 获取容器服务支持的所有地域
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 查询各种规格类型的预留券使用率
     */
    async DescribeReservedInstanceUtilizationRate(req, cb) {
        return this.request("DescribeReservedInstanceUtilizationRate", req, cb);
    }
    /**
     * 添加已经存在的实例到集群
     */
    async AddExistedInstances(req, cb) {
        return this.request("AddExistedInstances", req, cb);
    }
    /**
     * 修改告警规则
     */
    async ModifyPrometheusAlertRule(req, cb) {
        return this.request("ModifyPrometheusAlertRule", req, cb);
    }
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     */
    async ModifyClusterEndpointSP(req, cb) {
        return this.request("ModifyClusterEndpointSP", req, cb);
    }
    /**
     * 关闭集群删除保护
     */
    async DisableClusterDeletionProtection(req, cb) {
        return this.request("DisableClusterDeletionProtection", req, cb);
    }
    /**
     * 获取targets信息
     */
    async DescribePrometheusTargets(req, cb) {
        return this.request("DescribePrometheusTargets", req, cb);
    }
    /**
     * 删除容器实例，可批量删除
     */
    async DeleteEKSContainerInstances(req, cb) {
        return this.request("DeleteEKSContainerInstances", req, cb);
    }
    /**
     * 查询集群下节点实例信息
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
    /**
     * 获取边缘容器CVM实例相关信息
     */
    async DescribeEdgeCVMInstances(req, cb) {
        return this.request("DescribeEdgeCVMInstances", req, cb);
    }
    /**
     * 用于查询Kubernetes的各个原生控制器是否开启
     */
    async DescribeClusterControllers(req, cb) {
        return this.request("DescribeClusterControllers", req, cb);
    }
    /**
     * 获取一个addon的参数
     */
    async DescribeAddonValues(req, cb) {
        return this.request("DescribeAddonValues", req, cb);
    }
    /**
     * 给GR集群增加可用的ClusterCIDR（开白才能使用此功能，如需要请联系我们）
     */
    async AddClusterCIDR(req, cb) {
        return this.request("AddClusterCIDR", req, cb);
    }
    /**
     * 创建镜像缓存的接口。创建过程中，请勿删除EKSCI实例和云盘，否则镜像缓存将创建失败。
     */
    async CreateImageCache(req, cb) {
        return this.request("CreateImageCache", req, cb);
    }
    /**
     * 删除超级节点池
     */
    async DeleteClusterVirtualNodePool(req, cb) {
        return this.request("DeleteClusterVirtualNodePool", req, cb);
    }
    /**
     * 关闭加密信息保护
     */
    async DisableEncryptionProtection(req, cb) {
        return this.request("DisableEncryptionProtection", req, cb);
    }
    /**
     * 更新容器实例
     */
    async UpdateEKSContainerInstance(req, cb) {
        return this.request("UpdateEKSContainerInstance", req, cb);
    }
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    async DescribePrometheusTemp(req, cb) {
        return this.request("DescribePrometheusTemp", req, cb);
    }
    /**
     * 删除一个addon
     */
    async DeleteAddon(req, cb) {
        return this.request("DeleteAddon", req, cb);
    }
    /**
     * 为弹性集群创建日志采集配置
     */
    async CreateEksLogConfig(req, cb) {
        return this.request("CreateEksLogConfig", req, cb);
    }
    /**
     * 驱逐超级节点
     */
    async DrainClusterVirtualNode(req, cb) {
        return this.request("DrainClusterVirtualNode", req, cb);
    }
    /**
     * 重启弹性容器实例，支持批量操作
     */
    async RestartEKSContainerInstances(req, cb) {
        return this.request("RestartEKSContainerInstances", req, cb);
    }
    /**
     * 删除集群采集配置
     */
    async DeletePrometheusConfig(req, cb) {
        return this.request("DeletePrometheusConfig", req, cb);
    }
    /**
     * 修改节点池关联伸缩组的期望实例数
     */
    async ModifyNodePoolDesiredCapacityAboutAsg(req, cb) {
        return this.request("ModifyNodePoolDesiredCapacityAboutAsg", req, cb);
    }
    /**
     * 修改集群认证配置
     */
    async ModifyClusterAuthenticationOptions(req, cb) {
        return this.request("ModifyClusterAuthenticationOptions", req, cb);
    }
    /**
     * 创建弹性集群
     */
    async CreateEKSCluster(req, cb) {
        return this.request("CreateEKSCluster", req, cb);
    }
    /**
     * 查询集群自定义参数
     */
    async DescribeClusterExtraArgs(req, cb) {
        return this.request("DescribeClusterExtraArgs", req, cb);
    }
    /**
     * 对集群的Kubeconfig信息进行更新
     */
    async UpdateClusterKubeconfig(req, cb) {
        return this.request("UpdateClusterKubeconfig", req, cb);
    }
    /**
     * 查看集群状态列表
     */
    async DescribeClusterStatus(req, cb) {
        return this.request("DescribeClusterStatus", req, cb);
    }
    /**
     * 修改节点池的机型配置
     */
    async ModifyNodePoolInstanceTypes(req, cb) {
        return this.request("ModifyNodePoolInstanceTypes", req, cb);
    }
    /**
     * 修改集群镜像
     */
    async ModifyClusterImage(req, cb) {
        return this.request("ModifyClusterImage", req, cb);
    }
    /**
     * 查询日志采集规则
     */
    async DescribeLogConfigs(req, cb) {
        return this.request("DescribeLogConfigs", req, cb);
    }
    /**
     * 创建一个云原生Prometheus模板
     */
    async CreatePrometheusTemp(req, cb) {
        return this.request("CreatePrometheusTemp", req, cb);
    }
    /**
     * 查询集群巡检结果历史列表
     */
    async ListClusterInspectionResultsItems(req, cb) {
        return this.request("ListClusterInspectionResultsItems", req, cb);
    }
    /**
     * 开启加密数据保护，需要先开启KMS能力，完成KMS授权
     */
    async EnableEncryptionProtection(req, cb) {
        return this.request("EnableEncryptionProtection", req, cb);
    }
    /**
     * 获取模板同步信息
     */
    async DescribePrometheusTemplateSync(req, cb) {
        return this.request("DescribePrometheusTemplateSync", req, cb);
    }
    /**
     * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
     */
    async DisableVpcCniNetworkType(req, cb) {
        return this.request("DisableVpcCniNetworkType", req, cb);
    }
    /**
     * 获取实例详细信息
     */
    async DescribePrometheusInstance(req, cb) {
        return this.request("DescribePrometheusInstance", req, cb);
    }
    /**
     * 创建全局告警通知渠道
     */
    async CreatePrometheusGlobalNotification(req, cb) {
        return this.request("CreatePrometheusGlobalNotification", req, cb);
    }
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     */
    async DescribeClusterEndpointVipStatus(req, cb) {
        return this.request("DescribeClusterEndpointVipStatus", req, cb);
    }
    /**
     * 查询容器实例
     */
    async DescribeEKSContainerInstances(req, cb) {
        return this.request("DescribeEKSContainerInstances", req, cb);
    }
    /**
     * 查询集群日志（审计、事件、普通日志）开关列表
     */
    async DescribeLogSwitches(req, cb) {
        return this.request("DescribeLogSwitches", req, cb);
    }
    /**
     * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
     */
    async AcquireClusterAdminRole(req, cb) {
        return this.request("AcquireClusterAdminRole", req, cb);
    }
    /**
     * 创建集群路由
     */
    async CreateClusterRoute(req, cb) {
        return this.request("CreateClusterRoute", req, cb);
    }
    /**
     * 查询集群在应用市场中某个已安装应用的版本历史
     */
    async DescribeClusterReleaseHistory(req, cb) {
        return this.request("DescribeClusterReleaseHistory", req, cb);
    }
    /**
     * 在应用市场中集群回滚应用至某个历史版本
     */
    async RollbackClusterRelease(req, cb) {
        return this.request("RollbackClusterRelease", req, cb);
    }
    /**
     * 编辑节点池
     */
    async ModifyClusterNodePool(req, cb) {
        return this.request("ModifyClusterNodePool", req, cb);
    }
    /**
     * 查询etcd数据是否进行加密
     */
    async DescribeEncryptionStatus(req, cb) {
        return this.request("DescribeEncryptionStatus", req, cb);
    }
    /**
     * 创建容器实例
     */
    async CreateEKSContainerInstances(req, cb) {
        return this.request("CreateEKSContainerInstances", req, cb);
    }
    /**
     * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
     */
    async DescribePrometheusRecordRules(req, cb) {
        return this.request("DescribePrometheusRecordRules", req, cb);
    }
    /**
     * 删除告警规则
     */
    async DeletePrometheusAlertRule(req, cb) {
        return this.request("DeletePrometheusAlertRule", req, cb);
    }
    /**
     * 查询全局告警通知渠道
     */
    async DescribePrometheusGlobalNotification(req, cb) {
        return this.request("DescribePrometheusGlobalNotification", req, cb);
    }
    /**
     * 缩容独立集群master节点，本功能为内测能力，使用之前请先提单联系我们。
     */
    async ScaleInClusterMaster(req, cb) {
        return this.request("ScaleInClusterMaster", req, cb);
    }
    /**
     * 查询集群变配记录
     */
    async DescribeClusterLevelChangeRecords(req, cb) {
        return this.request("DescribeClusterLevelChangeRecords", req, cb);
    }
    /**
     * 创建集群访问端口
     */
    async CreateClusterEndpoint(req, cb) {
        return this.request("CreateClusterEndpoint", req, cb);
    }
    /**
     * 查询各个规格的 Pod 的抵扣率
     */
    async DescribePodDeductionRate(req, cb) {
        return this.request("DescribePodDeductionRate", req, cb);
    }
    /**
     * 修改全局告警通知渠道
     */
    async ModifyPrometheusGlobalNotification(req, cb) {
        return this.request("ModifyPrometheusGlobalNotification", req, cb);
    }
    /**
     * 预留券实例如符合退还规则，可通过本接口主动退还。
     */
    async DeleteReservedInstances(req, cb) {
        return this.request("DeleteReservedInstances", req, cb);
    }
    /**
     * 获取关联目标集群的实例列表
     */
    async DescribePrometheusAgentInstances(req, cb) {
        return this.request("DescribePrometheusAgentInstances", req, cb);
    }
    /**
     * 扩容独立集群master节点
     */
    async ScaleOutClusterMaster(req, cb) {
        return this.request("ScaleOutClusterMaster", req, cb);
    }
    /**
     * 创建告警规则
     */
    async CreatePrometheusAlertRule(req, cb) {
        return this.request("CreatePrometheusAlertRule", req, cb);
    }
    /**
     * 删除聚合规则
     */
    async DeletePrometheusRecordRuleYaml(req, cb) {
        return this.request("DeletePrometheusRecordRuleYaml", req, cb);
    }
    /**
     * 查询备份仓库信息
     */
    async DescribeBackupStorageLocations(req, cb) {
        return this.request("DescribeBackupStorageLocations", req, cb);
    }
    /**
     * 修改模板内容
     */
    async ModifyPrometheusTemp(req, cb) {
        return this.request("ModifyPrometheusTemp", req, cb);
    }
    /**
     * 修改聚合规则yaml方式
     */
    async ModifyPrometheusRecordRuleYaml(req, cb) {
        return this.request("ModifyPrometheusRecordRuleYaml", req, cb);
    }
    /**
     * 获取集群规模
     */
    async DescribeClusterLevelAttribute(req, cb) {
        return this.request("DescribeClusterLevelAttribute", req, cb);
    }
    /**
     * 集群的密钥信息
     */
    async DescribeClusterSecurity(req, cb) {
        return this.request("DescribeClusterSecurity", req, cb);
    }
    /**
     * 续费时请确保账户余额充足。
     */
    async RenewReservedInstances(req, cb) {
        return this.request("RenewReservedInstances", req, cb);
    }
    /**
     * 获取TMP实例关联集群列表
     */
    async DescribePrometheusClusterAgents(req, cb) {
        return this.request("DescribePrometheusClusterAgents", req, cb);
    }
    /**
     * 删除节点池
     */
    async DeleteClusterNodePool(req, cb) {
        return this.request("DeleteClusterNodePool", req, cb);
    }
    /**
     * 创建边缘计算集群
     */
    async CreateTKEEdgeCluster(req, cb) {
        return this.request("CreateTKEEdgeCluster", req, cb);
    }
    /**
     * 获取集群资源使用量
     */
    async DescribeResourceUsage(req, cb) {
        return this.request("DescribeResourceUsage", req, cb);
    }
    /**
     * 获取模板关联实例信息，针对V2版本实例
     */
    async DescribePrometheusTempSync(req, cb) {
        return this.request("DescribePrometheusTempSync", req, cb);
    }
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     */
    async DeleteClusterEndpointVip(req, cb) {
        return this.request("DeleteClusterEndpointVip", req, cb);
    }
    /**
     * 获取ECM实例相关信息
     */
    async DescribeECMInstances(req, cb) {
        return this.request("DescribeECMInstances", req, cb);
    }
    /**
     * 删除边缘计算集群
     */
    async DeleteTKEEdgeCluster(req, cb) {
        return this.request("DeleteTKEEdgeCluster", req, cb);
    }
    /**
     * 根据镜像列表，查询匹配的镜像缓存
     */
    async GetMostSuitableImageCache(req, cb) {
        return this.request("GetMostSuitableImageCache", req, cb);
    }
    /**
     * 获取集群的访问地址，包括内网地址，外网地址，外网域名，外网访问安全策略
     */
    async DescribeClusterEndpoints(req, cb) {
        return this.request("DescribeClusterEndpoints", req, cb);
    }
    /**
     * 与云监控融合的2.0实例关联集群
     */
    async CreatePrometheusClusterAgent(req, cb) {
        return this.request("CreatePrometheusClusterAgent", req, cb);
    }
    /**
     * 删除2.0实例告警策略
     */
    async DeletePrometheusAlertPolicy(req, cb) {
        return this.request("DeletePrometheusAlertPolicy", req, cb);
    }
    /**
     * 获取弹性容器集群的接入认证信息
     */
    async DescribeEKSClusterCredential(req, cb) {
        return this.request("DescribeEKSClusterCredential", req, cb);
    }
    /**
     * 查询通过应用市场安装的某个应用详情
     */
    async DescribeClusterReleaseDetails(req, cb) {
        return this.request("DescribeClusterReleaseDetails", req, cb);
    }
    /**
     * 关闭集群审计
     */
    async DisableClusterAudit(req, cb) {
        return this.request("DisableClusterAudit", req, cb);
    }
    /**
     * 创建边缘容器CVM机器
     */
    async CreateEdgeCVMInstances(req, cb) {
        return this.request("CreateEdgeCVMInstances", req, cb);
    }
    /**
     * 查询集群路由
     */
    async DescribeClusterRoutes(req, cb) {
        return this.request("DescribeClusterRoutes", req, cb);
    }
    /**
     * 获得实例级别抓取配置
     */
    async DescribePrometheusGlobalConfig(req, cb) {
        return this.request("DescribePrometheusGlobalConfig", req, cb);
    }
    /**
     * 同步模板到实例或者集群，针对V2版本实例
     */
    async SyncPrometheusTemp(req, cb) {
        return this.request("SyncPrometheusTemp", req, cb);
    }
    /**
     * 批量修改opa策略
     */
    async ModifyOpenPolicyList(req, cb) {
        return this.request("ModifyOpenPolicyList", req, cb);
    }
    /**
     * 查询容器实例中容器日志
     */
    async DescribeEksContainerInstanceLog(req, cb) {
        return this.request("DescribeEksContainerInstanceLog", req, cb);
    }
    /**
     * 检查给定节点列表中哪些是可升级的
     */
    async CheckInstancesUpgradeAble(req, cb) {
        return this.request("CheckInstancesUpgradeAble", req, cb);
    }
    /**
     * 创建grafana监控面板
     */
    async CreatePrometheusDashboard(req, cb) {
        return this.request("CreatePrometheusDashboard", req, cb);
    }
    /**
     * 获取实例列表
     */
    async DescribePrometheusOverviews(req, cb) {
        return this.request("DescribePrometheusOverviews", req, cb);
    }
    /**
     * 移出节点池节点，但保留在集群内
     */
    async RemoveNodeFromNodePool(req, cb) {
        return this.request("RemoveNodeFromNodePool", req, cb);
    }
    /**
     * 获取边缘计算集群的当前状态以及过程信息
     */
    async DescribeTKEEdgeClusterStatus(req, cb) {
        return this.request("DescribeTKEEdgeClusterStatus", req, cb);
    }
    /**
     * 创建告警策略
     */
    async CreatePrometheusAlertPolicy(req, cb) {
        return this.request("CreatePrometheusAlertPolicy", req, cb);
    }
    /**
     * 删除一个云原生Prometheus配置模板
     */
    async DeletePrometheusTemplate(req, cb) {
        return this.request("DeletePrometheusTemplate", req, cb);
    }
    /**
     * 获取2.0实例告警策略列表
     */
    async DescribePrometheusAlertPolicy(req, cb) {
        return this.request("DescribePrometheusAlertPolicy", req, cb);
    }
    /**
     * 获取被关联集群列表
     */
    async DescribePrometheusAgents(req, cb) {
        return this.request("DescribePrometheusAgents", req, cb);
    }
    /**
     * 关闭事件持久化功能
     */
    async DisableEventPersistence(req, cb) {
        return this.request("DisableEventPersistence", req, cb);
    }
    /**
     * 删除集群访问端口
     */
    async DeleteClusterEndpoint(req, cb) {
        return this.request("DeleteClusterEndpoint", req, cb);
    }
    /**
     * 集群创建应用
     */
    async CreateClusterRelease(req, cb) {
        return this.request("CreateClusterRelease", req, cb);
    }
    /**
     * 同步模板到实例或者集群
     */
    async SyncPrometheusTemplate(req, cb) {
        return this.request("SyncPrometheusTemplate", req, cb);
    }
    /**
     * 查看超级节点池列表
     */
    async DescribeClusterVirtualNodePools(req, cb) {
        return this.request("DescribeClusterVirtualNodePools", req, cb);
    }
    /**
     * 获取集群规模价格
     */
    async GetClusterLevelPrice(req, cb) {
        return this.request("GetClusterLevelPrice", req, cb);
    }
    /**
     * 预留实例用量查询
     */
    async DescribeRIUtilizationDetail(req, cb) {
        return this.request("DescribeRIUtilizationDetail", req, cb);
    }
    /**
     * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
     */
    async DescribeClusterKubeconfig(req, cb) {
        return this.request("DescribeClusterKubeconfig", req, cb);
    }
    /**
     * 可以查询边缘集群升级信息，包含可以升级的组件，当前升级状态和升级错误信息
     */
    async DescribeEdgeClusterUpgradeInfo(req, cb) {
        return this.request("DescribeEdgeClusterUpgradeInfo", req, cb);
    }
    /**
     * 删除集群内采集规则
     */
    async DeleteLogConfigs(req, cb) {
        return this.request("DeleteLogConfigs", req, cb);
    }
    /**
     * 获取集群采集配置
     */
    async DescribePrometheusConfig(req, cb) {
        return this.request("DescribePrometheusConfig", req, cb);
    }
    /**
     * 在应用市场中取消安装失败的应用
     */
    async CancelClusterRelease(req, cb) {
        return this.request("CancelClusterRelease", req, cb);
    }
    /**
     * 查询边缘计算集群的节点信息
     */
    async DescribeEdgeClusterInstances(req, cb) {
        return this.request("DescribeEdgeClusterInstances", req, cb);
    }
    /**
     * 集群弹性伸缩配置
     */
    async DescribeClusterAsGroupOption(req, cb) {
        return this.request("DescribeClusterAsGroupOption", req, cb);
    }
    /**
     * 查询弹性集群列表
     */
    async DescribeEKSClusters(req, cb) {
        return this.request("DescribeEKSClusters", req, cb);
    }
    /**
     * 集群关联的伸缩组列表
     */
    async DescribeClusterAsGroups(req, cb) {
        return this.request("DescribeClusterAsGroups", req, cb);
    }
    /**
     * 创建节点池
     */
    async CreateClusterNodePool(req, cb) {
        return this.request("CreateClusterNodePool", req, cb);
    }
    /**
     * 创建边缘集群日志采集配置
     */
    async CreateEdgeLogConfig(req, cb) {
        return this.request("CreateEdgeLogConfig", req, cb);
    }
    /**
     * 查询用户单个Region下的所有集群巡检结果概览信息
     */
    async DescribeClusterInspectionResultsOverview(req, cb) {
        return this.request("DescribeClusterInspectionResultsOverview", req, cb);
    }
    /**
     * 删除一个云原生Prometheus配置模板
     */
    async DeletePrometheusTemp(req, cb) {
        return this.request("DeletePrometheusTemp", req, cb);
    }
    /**
     * 本接口用于查询开启vpc-cni模式的任务进度
     */
    async DescribeEnableVpcCniProgress(req, cb) {
        return this.request("DescribeEnableVpcCniProgress", req, cb);
    }
    /**
     * 获取告警规则列表
     */
    async DescribePrometheusAlertRule(req, cb) {
        return this.request("DescribePrometheusAlertRule", req, cb);
    }
    /**
     * 启用集群删除保护
     */
    async EnableClusterDeletionProtection(req, cb) {
        return this.request("EnableClusterDeletionProtection", req, cb);
    }
    /**
     * 操作TKEEdge集群的addon
     */
    async ForwardTKEEdgeApplicationRequestV3(req, cb) {
        return this.request("ForwardTKEEdgeApplicationRequestV3", req, cb);
    }
    /**
     * 查询镜像缓存信息接口
     */
    async DescribeImageCaches(req, cb) {
        return this.request("DescribeImageCaches", req, cb);
    }
    /**
     * 查询集群在应用市场中已安装应用列表
     */
    async DescribeClusterReleases(req, cb) {
        return this.request("DescribeClusterReleases", req, cb);
    }
    /**
     * 升级集群中已安装的应用
     */
    async UpgradeClusterRelease(req, cb) {
        return this.request("UpgradeClusterRelease", req, cb);
    }
    /**
     * 查询容器实例支持的地域
     */
    async DescribeEKSContainerInstanceRegions(req, cb) {
        return this.request("DescribeEKSContainerInstanceRegions", req, cb);
    }
    /**
     * 修改边缘计算集群名称等属性
     */
    async UpdateTKEEdgeCluster(req, cb) {
        return this.request("UpdateTKEEdgeCluster", req, cb);
    }
    /**
     * 修改模板内容
     */
    async ModifyPrometheusTemplate(req, cb) {
        return this.request("ModifyPrometheusTemplate", req, cb);
    }
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    async DescribePrometheusTemplates(req, cb) {
        return this.request("DescribePrometheusTemplates", req, cb);
    }
    /**
     * 获取addon列表
     */
    async DescribeAddon(req, cb) {
        return this.request("DescribeAddon", req, cb);
    }
    /**
     * 获取与云监控融合实例列表
     */
    async DescribePrometheusInstancesOverview(req, cb) {
        return this.request("DescribePrometheusInstancesOverview", req, cb);
    }
    /**
     * 删除集群中的实例
     */
    async DeleteClusterInstances(req, cb) {
        return this.request("DeleteClusterInstances", req, cb);
    }
    /**
     * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
     */
    async DeletePrometheusTempSync(req, cb) {
        return this.request("DeletePrometheusTempSync", req, cb);
    }
    /**
     * 创建集群采集配置
     */
    async CreatePrometheusConfig(req, cb) {
        return this.request("CreatePrometheusConfig", req, cb);
    }
    /**
     * 初始化TMP实例，开启集成中心时调用
     */
    async RunPrometheusInstance(req, cb) {
        return this.request("RunPrometheusInstance", req, cb);
    }
    /**
     * 修改弹性集群名称等属性
     */
    async UpdateEKSCluster(req, cb) {
        return this.request("UpdateEKSCluster", req, cb);
    }
    /**
     * 获取TKE支持的App列表
     */
    async GetTkeAppChartList(req, cb) {
        return this.request("GetTkeAppChartList", req, cb);
    }
    /**
     * 创建按量计费超级节点
     */
    async CreateClusterVirtualNode(req, cb) {
        return this.request("CreateClusterVirtualNode", req, cb);
    }
    /**
     * 在TKE集群中安装CLS日志采集组件
     */
    async InstallLogAgent(req, cb) {
        return this.request("InstallLogAgent", req, cb);
    }
    /**
     * 检查边缘计算集群的CIDR是否冲突
     */
    async CheckEdgeClusterCIDR(req, cb) {
        return this.request("CheckEdgeClusterCIDR", req, cb);
    }
    /**
     * 创建托管集群外网访问端口（不再维护，准备下线）请使用新接口：CreateClusterEndpoint
     */
    async CreateClusterEndpointVip(req, cb) {
        return this.request("CreateClusterEndpointVip", req, cb);
    }
    /**
     * 修改集群及节点池纬度运行时配置
     */
    async ModifyClusterRuntimeConfig(req, cb) {
        return this.request("ModifyClusterRuntimeConfig", req, cb);
    }
    /**
     * 查询路由表冲突列表
     */
    async DescribeRouteTableConflicts(req, cb) {
        return this.request("DescribeRouteTableConflicts", req, cb);
    }
}
exports.Client = Client;
