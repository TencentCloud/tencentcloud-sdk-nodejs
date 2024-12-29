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
 * tem client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tem.tencentcloudapi.com", "2021-07-01", clientConfig);
    }
    /**
     * 编辑配置
     */
    async ModifyConfigData(req, cb) {
        return this.request("ModifyConfigData", req, cb);
    }
    /**
     * 单环境下所有应用状态查看
     */
    async DescribeApplicationsStatus(req, cb) {
        return this.request("DescribeApplicationsStatus", req, cb);
    }
    /**
     * 查询应用访问方式列表
     */
    async DescribeApplicationServiceList(req, cb) {
        return this.request("DescribeApplicationServiceList", req, cb);
    }
    /**
     * 查询分页的日志收集配置列表
     */
    async DescribePagedLogConfigList(req, cb) {
        return this.request("DescribePagedLogConfigList", req, cb);
    }
    /**
     * 此接口没有被使用了

创建或者更新 Ingress 规则
     */
    async ModifyIngress(req, cb) {
        return this.request("ModifyIngress", req, cb);
    }
    /**
     * 启用应用弹性策略组合
     */
    async EnableApplicationAutoscaler(req, cb) {
        return this.request("EnableApplicationAutoscaler", req, cb);
    }
    /**
     * 修改应用实例数量
     */
    async ModifyApplicationReplicas(req, cb) {
        return this.request("ModifyApplicationReplicas", req, cb);
    }
    /**
     * 创建弹性伸缩策略组合
     */
    async CreateApplicationAutoscaler(req, cb) {
        return this.request("CreateApplicationAutoscaler", req, cb);
    }
    /**
     * 重启应用实例
     */
    async RestartApplicationPod(req, cb) {
        return this.request("RestartApplicationPod", req, cb);
    }
    /**
     * 编辑日志收集配置
     */
    async ModifyLogConfig(req, cb) {
        return this.request("ModifyLogConfig", req, cb);
    }
    /**
     * 服务删除
  - 停止当前运行服务
  - 删除服务相关资源
  - 删除服务
     */
    async DeleteApplication(req, cb) {
        return this.request("DeleteApplication", req, cb);
    }
    /**
     * 获取环境状态
     */
    async DescribeEnvironmentStatus(req, cb) {
        return this.request("DescribeEnvironmentStatus", req, cb);
    }
    /**
     * 开始下一批次发布
     */
    async ResumeDeployApplication(req, cb) {
        return this.request("ResumeDeployApplication", req, cb);
    }
    /**
     * 删除 Ingress 规则
     */
    async DeleteIngress(req, cb) {
        return this.request("DeleteIngress", req, cb);
    }
    /**
     * 应用部署
     */
    async DeployApplication(req, cb) {
        return this.request("DeployApplication", req, cb);
    }
    /**
     * 修改弹性伸缩策略组合
     */
    async ModifyApplicationAutoscaler(req, cb) {
        return this.request("ModifyApplicationAutoscaler", req, cb);
    }
    /**
     * 获取分批发布详情
     */
    async DescribeDeployApplicationDetail(req, cb) {
        return this.request("DescribeDeployApplicationDetail", req, cb);
    }
    /**
     * 修改服务访问方式列表
     */
    async ModifyApplicationService(req, cb) {
        return this.request("ModifyApplicationService", req, cb);
    }
    /**
     * 编辑环境
     */
    async ModifyEnvironment(req, cb) {
        return this.request("ModifyEnvironment", req, cb);
    }
    /**
     * 获取环境基础信息
     */
    async DescribeEnvironment(req, cb) {
        return this.request("DescribeEnvironment", req, cb);
    }
    /**
     * 查询日志收集配置详情
     */
    async DescribeLogConfig(req, cb) {
        return this.request("DescribeLogConfig", req, cb);
    }
    /**
     * 服务停止
     */
    async StopApplication(req, cb) {
        return this.request("StopApplication", req, cb);
    }
    /**
     * 创建日志收集配置
     */
    async CreateLogConfig(req, cb) {
        return this.request("CreateLogConfig", req, cb);
    }
    /**
     * 新增访问方式
     */
    async CreateApplicationService(req, cb) {
        return this.request("CreateApplicationService", req, cb);
    }
    /**
     * 服务基本信息查看
     */
    async DescribeApplicationInfo(req, cb) {
        return this.request("DescribeApplicationInfo", req, cb);
    }
    /**
     * 创建配置
     */
    async CreateConfigData(req, cb) {
        return this.request("CreateConfigData", req, cb);
    }
    /**
     * 获取应用实例列表
     */
    async DescribeApplicationPods(req, cb) {
        return this.request("DescribeApplicationPods", req, cb);
    }
    /**
     * 删除应用弹性策略组合
     */
    async DeleteApplicationAutoscaler(req, cb) {
        return this.request("DeleteApplicationAutoscaler", req, cb);
    }
    /**
     * 修改应用基本信息
     */
    async ModifyApplicationInfo(req, cb) {
        return this.request("ModifyApplicationInfo", req, cb);
    }
    /**
     * 销毁配置
     */
    async DestroyConfigData(req, cb) {
        return this.request("DestroyConfigData", req, cb);
    }
    /**
     * 获取环境列表
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 生成Cos临时密钥
     */
    async CreateCosToken(req, cb) {
        return this.request("CreateCosToken", req, cb);
    }
    /**
     * 查询 Ingress 规则
     */
    async DescribeIngress(req, cb) {
        return this.request("DescribeIngress", req, cb);
    }
    /**
     * 删除一条访问方式
     */
    async DeleteApplicationService(req, cb) {
        return this.request("DeleteApplicationService", req, cb);
    }
    /**
     * 生成应用程序包预签名下载链接
     */
    async GenerateApplicationPackageDownloadUrl(req, cb) {
        return this.request("GenerateApplicationPackageDownloadUrl", req, cb);
    }
    /**
     * 创建环境
     */
    async CreateEnvironment(req, cb) {
        return this.request("CreateEnvironment", req, cb);
    }
    /**
     * 关闭应用弹性策略组合
     */
    async DisableApplicationAutoscaler(req, cb) {
        return this.request("DisableApplicationAutoscaler", req, cb);
    }
    /**
     * 查询 Ingress 规则列表
     */
    async DescribeIngresses(req, cb) {
        return this.request("DescribeIngresses", req, cb);
    }
    /**
     * 创建应用
     */
    async CreateApplication(req, cb) {
        return this.request("CreateApplication", req, cb);
    }
    /**
     * 服务重启
     */
    async RestartApplication(req, cb) {
        return this.request("RestartApplication", req, cb);
    }
    /**
     * 更新应用部署版本
     */
    async RollingUpdateApplicationByVersion(req, cb) {
        return this.request("RollingUpdateApplicationByVersion", req, cb);
    }
    /**
     * 获取运行服务列表
     */
    async DescribeApplications(req, cb) {
        return this.request("DescribeApplications", req, cb);
    }
    /**
     * 回滚分批发布
     */
    async RevertDeployApplication(req, cb) {
        return this.request("RevertDeployApplication", req, cb);
    }
    /**
     * 销毁日志收集配置
     */
    async DestroyLogConfig(req, cb) {
        return this.request("DestroyLogConfig", req, cb);
    }
    /**
     * 查询应用关联的 Ingress 规则列表
     */
    async DescribeRelatedIngresses(req, cb) {
        return this.request("DescribeRelatedIngresses", req, cb);
    }
    /**
     * 查询配置详情
     */
    async DescribeConfigData(req, cb) {
        return this.request("DescribeConfigData", req, cb);
    }
    /**
     * 绑定云资源
     */
    async CreateResource(req, cb) {
        return this.request("CreateResource", req, cb);
    }
    /**
     * 获取应用弹性策略组合
     */
    async DescribeApplicationAutoscalerList(req, cb) {
        return this.request("DescribeApplicationAutoscalerList", req, cb);
    }
    /**
     * 销毁环境
     */
    async DestroyEnvironment(req, cb) {
        return this.request("DestroyEnvironment", req, cb);
    }
    /**
     * 查询配置列表
     */
    async DescribeConfigDataList(req, cb) {
        return this.request("DescribeConfigDataList", req, cb);
    }
}
exports.Client = Client;
