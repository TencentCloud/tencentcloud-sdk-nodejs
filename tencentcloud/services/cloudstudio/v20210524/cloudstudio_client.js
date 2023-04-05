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
 * cloudstudio client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cloudstudio.tencentcloudapi.com", "2021-05-24", clientConfig);
    }
    /**
     * 获取特定模板信息
     */
    async DescribeCustomizeTemplatesById(req, cb) {
        return this.request("DescribeCustomizeTemplatesById", req, cb);
    }
    /**
     * 为工作空间创建临时访问凭证，重复调用会创建新的 Token，旧的 Token 将会自动失效
     */
    async CreateWorkspaceTemporaryToken(req, cb) {
        return this.request("CreateWorkspaceTemporaryToken", req, cb);
    }
    /**
     * 全量修改自定义模板，忽略空
     */
    async ModifyCustomizeTemplatesPartById(req, cb) {
        return this.request("ModifyCustomizeTemplatesPartById", req, cb);
    }
    /**
     * 获取工作空间是否已经启动就绪
     */
    async DescribeWorkspaceIsReady(req, cb) {
        return this.request("DescribeWorkspaceIsReady", req, cb);
    }
    /**
     * 运行空间
     */
    async RunWorkspace(req, cb) {
        return this.request("RunWorkspace", req, cb);
    }
    /**
     * 获取所有模板列表
     */
    async DescribeCustomizeTemplates(req, cb) {
        return this.request("DescribeCustomizeTemplates", req, cb);
    }
    /**
     * 恢复工作空间

     */
    async RecoverWorkspace(req, cb) {
        return this.request("RecoverWorkspace", req, cb);
    }
    /**
     * 根据模板创建工作空间
     */
    async CreateWorkspaceByVersionControl(req, cb) {
        return this.request("CreateWorkspaceByVersionControl", req, cb);
    }
    /**
     * 修改模板默认代码仓库
     */
    async ModifyCustomizeTemplateVersionControl(req, cb) {
        return this.request("ModifyCustomizeTemplateVersionControl", req, cb);
    }
    /**
     * 云服务器方式创建工作空间
     */
    async CreateWorkspaceByAgent(req, cb) {
        return this.request("CreateWorkspaceByAgent", req, cb);
    }
    /**
     * 删除工作空间
     */
    async RemoveWorkspace(req, cb) {
        return this.request("RemoveWorkspace", req, cb);
    }
    /**
     * 环境列表接口返回信息
     */
    async DescribeWorkspaceEnvList(req, cb) {
        return this.request("DescribeWorkspaceEnvList", req, cb);
    }
    /**
     * 删除自定义模板
     */
    async DeleteCustomizeTemplatesById(req, cb) {
        return this.request("DeleteCustomizeTemplatesById", req, cb);
    }
    /**
     * 停止运行空间
     */
    async StopWorkspace(req, cb) {
        return this.request("StopWorkspace", req, cb);
    }
    /**
     * 获取工作空间元信息
     */
    async DescribeWorkspaceStatus(req, cb) {
        return this.request("DescribeWorkspaceStatus", req, cb);
    }
    /**
     * 获取创建模板的预置参数
     */
    async DescribeCustomizeTemplatesPresets(req, cb) {
        return this.request("DescribeCustomizeTemplatesPresets", req, cb);
    }
    /**
     * 添加自定义模板
     */
    async CreateCustomizeTemplates(req, cb) {
        return this.request("CreateCustomizeTemplates", req, cb);
    }
    /**
     * 全量修改自定义模板，不忽略空
     */
    async ModifyCustomizeTemplatesFullById(req, cb) {
        return this.request("ModifyCustomizeTemplatesFullById", req, cb);
    }
    /**
     * 快速开始, 基于模板创建工作空间
     */
    async CreateWorkspaceByTemplate(req, cb) {
        return this.request("CreateWorkspaceByTemplate", req, cb);
    }
    /**
     * 获取用户工作空间列表
     */
    async DescribeWorkspaceStatusList(req, cb) {
        return this.request("DescribeWorkspaceStatusList", req, cb);
    }
    /**
     * 检查工作空间是否存在
     */
    async DescribeWorkspaceNameExist(req, cb) {
        return this.request("DescribeWorkspaceNameExist", req, cb);
    }
    /**
     * 修改工作空间的名称和描述
     */
    async ModifyWorkspaceAttributes(req, cb) {
        return this.request("ModifyWorkspaceAttributes", req, cb);
    }
}
exports.Client = Client;
