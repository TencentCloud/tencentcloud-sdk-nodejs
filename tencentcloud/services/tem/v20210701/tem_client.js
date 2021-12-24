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
     * 修改应用实例数量
     */
    async ModifyApplicationReplicas(req, cb) {
        return this.request("ModifyApplicationReplicas", req, cb);
    }
    /**
     * 创建或者更新 Ingress 规则
     */
    async ModifyIngress(req, cb) {
        return this.request("ModifyIngress", req, cb);
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
     * 获取分批发布详情
     */
    async DescribeDeployApplicationDetail(req, cb) {
        return this.request("DescribeDeployApplicationDetail", req, cb);
    }
    /**
     * 开始下一批次发布
     */
    async ResumeDeployApplication(req, cb) {
        return this.request("ResumeDeployApplication", req, cb);
    }
    /**
     * 编辑环境
     */
    async ModifyEnvironment(req, cb) {
        return this.request("ModifyEnvironment", req, cb);
    }
    /**
     * 服务停止
     */
    async StopApplication(req, cb) {
        return this.request("StopApplication", req, cb);
    }
    /**
     * 获取应用实例列表
     */
    async DescribeApplicationPods(req, cb) {
        return this.request("DescribeApplicationPods", req, cb);
    }
    /**
     * 服务重启
     */
    async RestartApplication(req, cb) {
        return this.request("RestartApplication", req, cb);
    }
    /**
     * 修改应用基本信息
     */
    async ModifyApplicationInfo(req, cb) {
        return this.request("ModifyApplicationInfo", req, cb);
    }
    /**
     * 获取租户环境列表
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 生成Cos临时秘钥
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
     * 重启应用实例
     */
    async RestartApplicationPod(req, cb) {
        return this.request("RestartApplicationPod", req, cb);
    }
    /**
     * 更新应用部署版本
     */
    async RollingUpdateApplicationByVersion(req, cb) {
        return this.request("RollingUpdateApplicationByVersion", req, cb);
    }
    /**
     * 回滚分批发布
     */
    async RevertDeployApplication(req, cb) {
        return this.request("RevertDeployApplication", req, cb);
    }
    /**
     * 查询应用关联的 Ingress 规则列表
     */
    async DescribeRelatedIngresses(req, cb) {
        return this.request("DescribeRelatedIngresses", req, cb);
    }
    /**
     * 绑定云资源
     */
    async CreateResource(req, cb) {
        return this.request("CreateResource", req, cb);
    }
}
exports.Client = Client;
