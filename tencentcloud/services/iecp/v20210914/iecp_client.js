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
 * iecp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iecp.tencentcloudapi.com", "2021-09-14", clientConfig);
    }
    /**
     * 查询边缘集群监控状态
     */
    async DescribeEdgeUnitMonitorStatus(req, cb) {
        return this.request("DescribeEdgeUnitMonitorStatus", req, cb);
    }
    /**
     * 删除边缘单元NodeGroup
     */
    async DeleteEdgeNodeGroup(req, cb) {
        return this.request("DeleteEdgeNodeGroup", req, cb);
    }
    /**
     * 创建子设备
     */
    async CreateIotDevice(req, cb) {
        return this.request("CreateIotDevice", req, cb);
    }
    /**
     * 删除设备
     */
    async DeleteIotDevice(req, cb) {
        return this.request("DeleteIotDevice", req, cb);
    }
    /**
     * 获取节点安装信息
     */
    async DescribeEdgeAgentNodeInstaller(req, cb) {
        return this.request("DescribeEdgeAgentNodeInstaller", req, cb);
    }
    /**
     * 查询边缘单元额外信息
     */
    async DescribeEdgeUnitExtra(req, cb) {
        return this.request("DescribeEdgeUnitExtra", req, cb);
    }
    /**
     * 获取命名空间下的资源信息
     */
    async DescribeNamespaceResources(req, cb) {
        return this.request("DescribeNamespaceResources", req, cb);
    }
    /**
     * 创建token
     */
    async CreateUserToken(req, cb) {
        return this.request("CreateUserToken", req, cb);
    }
    /**
     * 批量删除边缘节点
     */
    async DeleteEdgeNodes(req, cb) {
        return this.request("DeleteEdgeNodes", req, cb);
    }
    /**
     * 创建或更新边缘单元NodeUnit
     */
    async CreateUpdateNodeUnit(req, cb) {
        return this.request("CreateUpdateNodeUnit", req, cb);
    }
    /**
     * 修改边缘单元NodeUnit模板
     */
    async ModifyNodeUnitTemplate(req, cb) {
        return this.request("ModifyNodeUnitTemplate", req, cb);
    }
    /**
     * 查询边缘单元EdgeUnit模板列表
     */
    async DescribeEdgeUnitNodeUnitTemplates(req, cb) {
        return this.request("DescribeEdgeUnitNodeUnitTemplates", req, cb);
    }
    /**
     * 创建命名空间
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
    /**
     * 自动获取Draco设备的安装包
     */
    async DescribeDracoEdgeNodeInstaller(req, cb) {
        return this.request("DescribeDracoEdgeNodeInstaller", req, cb);
    }
    /**
     * 单元应用重部署
     */
    async RedeployEdgeUnitApplication(req, cb) {
        return this.request("RedeployEdgeUnitApplication", req, cb);
    }
    /**
     * 获取边缘节点信息
     */
    async DescribeEdgeNode(req, cb) {
        return this.request("DescribeEdgeNode", req, cb);
    }
    /**
     * 获取节点备注信息列表
     */
    async DescribeEdgeNodeRemarkList(req, cb) {
        return this.request("DescribeEdgeNodeRemarkList", req, cb);
    }
    /**
     * 创建边缘单元
     */
    async CreateEdgeUnitCloud(req, cb) {
        return this.request("CreateEdgeUnitCloud", req, cb);
    }
    /**
     * 查询边缘单元监控数据
     */
    async DescribeMonitorMetrics(req, cb) {
        return this.request("DescribeMonitorMetrics", req, cb);
    }
    /**
     * 删除命名空间
     */
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    /**
     * 建立消息路由
     */
    async BuildMessageRoute(req, cb) {
        return this.request("BuildMessageRoute", req, cb);
    }
    /**
     * 获取Secrets列表
     */
    async DescribeSecrets(req, cb) {
        return this.request("DescribeSecrets", req, cb);
    }
    /**
     * 开关消息路由
     */
    async SetRouteOnOff(req, cb) {
        return this.request("SetRouteOnOff", req, cb);
    }
    /**
     * 创建ConfigMap
     */
    async CreateConfigMap(req, cb) {
        return this.request("CreateConfigMap", req, cb);
    }
    /**
     * 创建边缘节点
     */
    async CreateEdgeNode(req, cb) {
        return this.request("CreateEdgeNode", req, cb);
    }
    /**
     * 删除边缘单元NodeUnit模板
     */
    async DeleteEdgeNodeUnitTemplates(req, cb) {
        return this.request("DeleteEdgeNodeUnitTemplates", req, cb);
    }
    /**
     * 编辑边缘节点标签
     */
    async ModifyEdgeNodeLabels(req, cb) {
        return this.request("ModifyEdgeNodeLabels", req, cb);
    }
    /**
     * 查询指定Grid下应用的Yaml
     */
    async DescribeEdgeUnitDeployGridItemYaml(req, cb) {
        return this.request("DescribeEdgeUnitDeployGridItemYaml", req, cb);
    }
    /**
     * 获取ConfigMap列表
     */
    async DescribeConfigMaps(req, cb) {
        return this.request("DescribeConfigMaps", req, cb);
    }
    /**
     * 获取组件市场组件列表
     */
    async GetMarketComponentList(req, cb) {
        return this.request("GetMarketComponentList", req, cb);
    }
    /**
     * 重新部署边缘单元指定Grid下应用
     */
    async DeleteEdgeUnitDeployGridItem(req, cb) {
        return this.request("DeleteEdgeUnitDeployGridItem", req, cb);
    }
    /**
     * 获取ConfigMap详情
     */
    async DescribeConfigMap(req, cb) {
        return this.request("DescribeConfigMap", req, cb);
    }
    /**
     * 删除消息路由
     */
    async DeleteMessageRoute(req, cb) {
        return this.request("DeleteMessageRoute", req, cb);
    }
    /**
     * 修改边缘集群
     */
    async ModifyEdgeUnit(req, cb) {
        return this.request("ModifyEdgeUnit", req, cb);
    }
    /**
     * 修改ConfigMap
     */
    async ModifyConfigMap(req, cb) {
        return this.request("ModifyConfigMap", req, cb);
    }
    /**
     * 查询边缘单元NodeUnit列表
     */
    async DescribeNodeUnit(req, cb) {
        return this.request("DescribeNodeUnit", req, cb);
    }
    /**
     * 查询边缘单元指定Grid下的部署应用列表
     */
    async DescribeEdgeUnitDeployGridItem(req, cb) {
        return this.request("DescribeEdgeUnitDeployGridItem", req, cb);
    }
    /**
     * 编辑draco设备信息
     */
    async ModifyEdgeDracoNode(req, cb) {
        return this.request("ModifyEdgeDracoNode", req, cb);
    }
    /**
     * 修改设备信息
     */
    async ModifyIotDevice(req, cb) {
        return this.request("ModifyIotDevice", req, cb);
    }
    /**
     * 修改单元应用基本信息
     */
    async ModifyEdgeUnitApplicationBasicInfo(req, cb) {
        return this.request("ModifyEdgeUnitApplicationBasicInfo", req, cb);
    }
    /**
     * 获取组件市场的组件信息
     */
    async GetMarketComponent(req, cb) {
        return this.request("GetMarketComponent", req, cb);
    }
    /**
     * 查询边缘单元Grid的Pod列表
     */
    async DescribeEdgeUnitGridPods(req, cb) {
        return this.request("DescribeEdgeUnitGridPods", req, cb);
    }
    /**
     * 批量删除设备
     */
    async DeleteIotDeviceBatch(req, cb) {
        return this.request("DeleteIotDeviceBatch", req, cb);
    }
    /**
     * 获取命名空间
     */
    async DescribeNamespace(req, cb) {
        return this.request("DescribeNamespace", req, cb);
    }
    /**
     * 获取边缘集群默认VPC信息
     */
    async DescribeEdgeDefaultVpc(req, cb) {
        return this.request("DescribeEdgeDefaultVpc", req, cb);
    }
    /**
     * 校验Secret的Yaml语法
     */
    async DescribeSecretYamlError(req, cb) {
        return this.request("DescribeSecretYamlError", req, cb);
    }
    /**
     * 删除ConfigMap
     */
    async DeleteConfigMap(req, cb) {
        return this.request("DeleteConfigMap", req, cb);
    }
    /**
     * 创建边缘单元NodeUnit模板
     */
    async CreateEdgeNodeUnitTemplate(req, cb) {
        return this.request("CreateEdgeNodeUnitTemplate", req, cb);
    }
    /**
     * 批量解绑单元设备
     */
    async DeleteEdgeUnitDevices(req, cb) {
        return this.request("DeleteEdgeUnitDevices", req, cb);
    }
    /**
     * 修改Secret
     */
    async ModifySecret(req, cb) {
        return this.request("ModifySecret", req, cb);
    }
    /**
     * 批量绑定设备到单元
     */
    async CreateEdgeUnitDevices(req, cb) {
        return this.request("CreateEdgeUnitDevices", req, cb);
    }
    /**
     * 获取设备列表信息
     */
    async DescribeIotDevices(req, cb) {
        return this.request("DescribeIotDevices", req, cb);
    }
    /**
     * 删除边缘单元
     */
    async DeleteEdgeUnitCloud(req, cb) {
        return this.request("DeleteEdgeUnitCloud", req, cb);
    }
    /**
     * 查询指定NodeGroup下NodeUnit模板列表
     */
    async DescribeNodeUnitTemplateOnNodeGroup(req, cb) {
        return this.request("DescribeNodeUnitTemplateOnNodeGroup", req, cb);
    }
    /**
     * 查询节点Pod内的容器列表
     */
    async DescribeEdgeNodePodContainers(req, cb) {
        return this.request("DescribeEdgeNodePodContainers", req, cb);
    }
    /**
     * 获取消息路由列表
     */
    async DescribeMessageRouteList(req, cb) {
        return this.request("DescribeMessageRouteList", req, cb);
    }
    /**
     * 校验ConfigMap的Yaml语法
     */
    async DescribeConfigMapYamlError(req, cb) {
        return this.request("DescribeConfigMapYamlError", req, cb);
    }
    /**
     * 获取单元下应用列表
     */
    async DescribeEdgeUnitApplications(req, cb) {
        return this.request("DescribeEdgeUnitApplications", req, cb);
    }
    /**
     * 获取命名空间列表信息
     */
    async DescribeNamespaces(req, cb) {
        return this.request("DescribeNamespaces", req, cb);
    }
    /**
     * 查询边缘节点列表
     */
    async DescribeEdgeNodes(req, cb) {
        return this.request("DescribeEdgeNodes", req, cb);
    }
    /**
     * 查询边缘操作日志
     */
    async DescribeEdgeOperationLogs(req, cb) {
        return this.request("DescribeEdgeOperationLogs", req, cb);
    }
    /**
     * 创建Secret
     */
    async CreateSecret(req, cb) {
        return this.request("CreateSecret", req, cb);
    }
    /**
     * 查询边缘集群NodeGroup
     */
    async DescribeEdgeUnitNodeGroup(req, cb) {
        return this.request("DescribeEdgeUnitNodeGroup", req, cb);
    }
    /**
     * 查询边缘单元Pod
     */
    async DescribeEdgePod(req, cb) {
        return this.request("DescribeEdgePod", req, cb);
    }
    /**
     * 获取Secret详情
     */
    async DescribeSecret(req, cb) {
        return this.request("DescribeSecret", req, cb);
    }
    /**
     * 更新边缘单元信息
     */
    async ModifyEdgeUnitCloudApi(req, cb) {
        return this.request("ModifyEdgeUnitCloudApi", req, cb);
    }
    /**
     * 获取设备信息
     */
    async DescribeIotDevice(req, cb) {
        return this.request("DescribeIotDevice", req, cb);
    }
    /**
     * 创建边缘单元NodeGroup
     */
    async CreateEdgeNodeGroup(req, cb) {
        return this.request("CreateEdgeNodeGroup", req, cb);
    }
    /**
     * 查询节点Pod列表
     */
    async DescribeEdgeNodePods(req, cb) {
        return this.request("DescribeEdgeNodePods", req, cb);
    }
    /**
     * 批量预注册节点
     */
    async CreateEdgeNodeBatch(req, cb) {
        return this.request("CreateEdgeNodeBatch", req, cb);
    }
    /**
     * 修改边缘单元Grid部署应用副本数
     */
    async ModifyEdgeUnitDeployGridItem(req, cb) {
        return this.request("ModifyEdgeUnitDeployGridItem", req, cb);
    }
    /**
     * 创建消息路由
     */
    async CreateMessageRoute(req, cb) {
        return this.request("CreateMessageRoute", req, cb);
    }
    /**
     * 查询用户的资源限制
     */
    async DescribeYeheResourceLimit(req, cb) {
        return this.request("DescribeYeheResourceLimit", req, cb);
    }
    /**
     * 删除边缘单元NodeUnit
     */
    async DeleteNodeUnit(req, cb) {
        return this.request("DeleteNodeUnit", req, cb);
    }
    /**
     * Yaml方式修改应用配置
     */
    async ModifyEdgeUnitApplicationYaml(req, cb) {
        return this.request("ModifyEdgeUnitApplicationYaml", req, cb);
    }
    /**
     * 删除指定pod
     */
    async DeleteEdgeUnitPod(req, cb) {
        return this.request("DeleteEdgeUnitPod", req, cb);
    }
    /**
     * 查询边缘单元Grid列表
     */
    async DescribeEdgeUnitDeployGrid(req, cb) {
        return this.request("DescribeEdgeUnitDeployGrid", req, cb);
    }
    /**
     * 查询边缘单元Grid事件列表
     */
    async DescribeEdgeUnitGridEvents(req, cb) {
        return this.request("DescribeEdgeUnitGridEvents", req, cb);
    }
    /**
     * 可视化修改应用配置
     */
    async ModifyEdgeUnitApplicationVisualization(req, cb) {
        return this.request("ModifyEdgeUnitApplicationVisualization", req, cb);
    }
    /**
     * 查询预注册节点列表
     */
    async DescribeEdgeSnNodes(req, cb) {
        return this.request("DescribeEdgeSnNodes", req, cb);
    }
    /**
     * 删除Secret
     */
    async DeleteSecret(req, cb) {
        return this.request("DeleteSecret", req, cb);
    }
    /**
     * 查询边缘单元列表
     */
    async DescribeEdgeUnitsCloud(req, cb) {
        return this.request("DescribeEdgeUnitsCloud", req, cb);
    }
}
exports.Client = Client;
