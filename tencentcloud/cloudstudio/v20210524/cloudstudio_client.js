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
const UserDefinedTemplatePatchedParams = models.UserDefinedTemplatePatchedParams;
const WorkspaceInfoDTO = models.WorkspaceInfoDTO;
const RecoverWorkspaceResponse = models.RecoverWorkspaceResponse;
const DescribeWorkspaceStatusRequest = models.DescribeWorkspaceStatusRequest;
const CreateCustomizeTemplatesRequest = models.CreateCustomizeTemplatesRequest;
const RecoverWorkspaceRequest = models.RecoverWorkspaceRequest;
const DescribeCustomizeTemplatesByIdRequest = models.DescribeCustomizeTemplatesByIdRequest;
const CreateWorkspaceByVersionControlRequest = models.CreateWorkspaceByVersionControlRequest;
const ModifyCustomizeTemplateVersionControlRequest = models.ModifyCustomizeTemplateVersionControlRequest;
const WorkspaceResourceDTO = models.WorkspaceResourceDTO;
const CreateCustomizeTemplatesResponse = models.CreateCustomizeTemplatesResponse;
const WorkspaceTokenInfoV0 = models.WorkspaceTokenInfoV0;
const ImageUserDTO = models.ImageUserDTO;
const RunWorkspaceRequest = models.RunWorkspaceRequest;
const DescribeWorkspaceStatusResponse = models.DescribeWorkspaceStatusResponse;
const CreateWorkspaceByAgentRequest = models.CreateWorkspaceByAgentRequest;
const DeleteCustomizeTemplatesByIdRequest = models.DeleteCustomizeTemplatesByIdRequest;
const StopWorkspaceRequest = models.StopWorkspaceRequest;
const DescribeWorkspaceEnvListResponse = models.DescribeWorkspaceEnvListResponse;
const WorkspaceShareInfo = models.WorkspaceShareInfo;
const WorkspaceTemplateInfo = models.WorkspaceTemplateInfo;
const UserSubInfo = models.UserSubInfo;
const DescribeWorkspaceStatusListResponse = models.DescribeWorkspaceStatusListResponse;
const ModifyCustomizeTemplatesFullByIdRequest = models.ModifyCustomizeTemplatesFullByIdRequest;
const ModifyCustomizeTemplateVersionControlResponse = models.ModifyCustomizeTemplateVersionControlResponse;
const UserInfoRsp = models.UserInfoRsp;
const DescribeWorkspaceEnvListRequest = models.DescribeWorkspaceEnvListRequest;
const ModifyWorkspaceAttributesResponse = models.ModifyWorkspaceAttributesResponse;
const WorkspaceStatusInfo = models.WorkspaceStatusInfo;
const DescribeCustomizeTemplatesPresetsRequest = models.DescribeCustomizeTemplatesPresetsRequest;
const StopWorkspaceResponse = models.StopWorkspaceResponse;
const DescribeWorkspaceNameExistRequest = models.DescribeWorkspaceNameExistRequest;
const DescribeWorkspaceStatusListRequest = models.DescribeWorkspaceStatusListRequest;
const RemoveWorkspaceRequest = models.RemoveWorkspaceRequest;
const DescribeCustomizeTemplatesRequest = models.DescribeCustomizeTemplatesRequest;
const CustomizeTemplatesPresetsInfo = models.CustomizeTemplatesPresetsInfo;
const RunWorkspaceResponse = models.RunWorkspaceResponse;
const DescribeCustomizeTemplatesByIdResponse = models.DescribeCustomizeTemplatesByIdResponse;
const DescribeWorkspaceNameExistResponse = models.DescribeWorkspaceNameExistResponse;
const CreateWorkspaceByTemplateResponse = models.CreateWorkspaceByTemplateResponse;
const CreateWorkspaceByAgentResponse = models.CreateWorkspaceByAgentResponse;
const RemoveWorkspaceResponse = models.RemoveWorkspaceResponse;
const CreateWorkspaceTemporaryTokenRequest = models.CreateWorkspaceTemporaryTokenRequest;
const WorkspaceDTO = models.WorkspaceDTO;
const ModifyCustomizeTemplatesFullByIdResponse = models.ModifyCustomizeTemplatesFullByIdResponse;
const DescribeCustomizeTemplatesResponse = models.DescribeCustomizeTemplatesResponse;
const CreateWorkspaceByVersionControlResponse = models.CreateWorkspaceByVersionControlResponse;
const ModifyCustomizeTemplatesPartByIdRequest = models.ModifyCustomizeTemplatesPartByIdRequest;
const WorkspaceTokenDTO = models.WorkspaceTokenDTO;
const UserDefinedTemplateParams = models.UserDefinedTemplateParams;
const DeleteCustomizeTemplatesByIdResponse = models.DeleteCustomizeTemplatesByIdResponse;
const WorkspaceInfo = models.WorkspaceInfo;
const CreateWorkspaceTemporaryTokenResponse = models.CreateWorkspaceTemporaryTokenResponse;
const AgentSpaceDTO = models.AgentSpaceDTO;
const DescribeCustomizeTemplatesPresetsResponse = models.DescribeCustomizeTemplatesPresetsResponse;
const CreateWorkspaceByTemplateRequest = models.CreateWorkspaceByTemplateRequest;
const ModifyCustomizeTemplatesPartByIdResponse = models.ModifyCustomizeTemplatesPartByIdResponse;
const ModifyWorkspaceAttributesRequest = models.ModifyWorkspaceAttributesRequest;


/**
 * cloudstudio client
 * @class
 */
class CloudstudioClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cloudstudio.tencentcloudapi.com", "2021-05-24", credential, region, profile);
    }
    
    /**
     * 获取工作空间元信息
     * @param {DescribeWorkspaceStatusRequest} req
     * @param {function(string, DescribeWorkspaceStatusResponse):void} cb
     * @public
     */
    DescribeWorkspaceStatus(req, cb) {
        let resp = new DescribeWorkspaceStatusResponse();
        this.request("DescribeWorkspaceStatus", req, resp, cb);
    }

    /**
     * 获取特定模板信息
     * @param {DescribeCustomizeTemplatesByIdRequest} req
     * @param {function(string, DescribeCustomizeTemplatesByIdResponse):void} cb
     * @public
     */
    DescribeCustomizeTemplatesById(req, cb) {
        let resp = new DescribeCustomizeTemplatesByIdResponse();
        this.request("DescribeCustomizeTemplatesById", req, resp, cb);
    }

    /**
     * 根据模板创建工作空间
     * @param {CreateWorkspaceByVersionControlRequest} req
     * @param {function(string, CreateWorkspaceByVersionControlResponse):void} cb
     * @public
     */
    CreateWorkspaceByVersionControl(req, cb) {
        let resp = new CreateWorkspaceByVersionControlResponse();
        this.request("CreateWorkspaceByVersionControl", req, resp, cb);
    }

    /**
     * 快速开始, 基于模板创建工作空间
     * @param {CreateWorkspaceByTemplateRequest} req
     * @param {function(string, CreateWorkspaceByTemplateResponse):void} cb
     * @public
     */
    CreateWorkspaceByTemplate(req, cb) {
        let resp = new CreateWorkspaceByTemplateResponse();
        this.request("CreateWorkspaceByTemplate", req, resp, cb);
    }

    /**
     * 为工作空间创建临时访问凭证，重复调用会创建新的 Token，旧的 Token 将会自动失效
     * @param {CreateWorkspaceTemporaryTokenRequest} req
     * @param {function(string, CreateWorkspaceTemporaryTokenResponse):void} cb
     * @public
     */
    CreateWorkspaceTemporaryToken(req, cb) {
        let resp = new CreateWorkspaceTemporaryTokenResponse();
        this.request("CreateWorkspaceTemporaryToken", req, resp, cb);
    }

    /**
     * 修改模板默认代码仓库
     * @param {ModifyCustomizeTemplateVersionControlRequest} req
     * @param {function(string, ModifyCustomizeTemplateVersionControlResponse):void} cb
     * @public
     */
    ModifyCustomizeTemplateVersionControl(req, cb) {
        let resp = new ModifyCustomizeTemplateVersionControlResponse();
        this.request("ModifyCustomizeTemplateVersionControl", req, resp, cb);
    }

    /**
     * 恢复工作空间

     * @param {RecoverWorkspaceRequest} req
     * @param {function(string, RecoverWorkspaceResponse):void} cb
     * @public
     */
    RecoverWorkspace(req, cb) {
        let resp = new RecoverWorkspaceResponse();
        this.request("RecoverWorkspace", req, resp, cb);
    }

    /**
     * 获取用户工作空间列表
     * @param {DescribeWorkspaceStatusListRequest} req
     * @param {function(string, DescribeWorkspaceStatusListResponse):void} cb
     * @public
     */
    DescribeWorkspaceStatusList(req, cb) {
        let resp = new DescribeWorkspaceStatusListResponse();
        this.request("DescribeWorkspaceStatusList", req, resp, cb);
    }

    /**
     * 删除工作空间
     * @param {RemoveWorkspaceRequest} req
     * @param {function(string, RemoveWorkspaceResponse):void} cb
     * @public
     */
    RemoveWorkspace(req, cb) {
        let resp = new RemoveWorkspaceResponse();
        this.request("RemoveWorkspace", req, resp, cb);
    }

    /**
     * 检查工作空间是否存在
     * @param {DescribeWorkspaceNameExistRequest} req
     * @param {function(string, DescribeWorkspaceNameExistResponse):void} cb
     * @public
     */
    DescribeWorkspaceNameExist(req, cb) {
        let resp = new DescribeWorkspaceNameExistResponse();
        this.request("DescribeWorkspaceNameExist", req, resp, cb);
    }

    /**
     * 全量修改自定义模板，不忽略空
     * @param {ModifyCustomizeTemplatesFullByIdRequest} req
     * @param {function(string, ModifyCustomizeTemplatesFullByIdResponse):void} cb
     * @public
     */
    ModifyCustomizeTemplatesFullById(req, cb) {
        let resp = new ModifyCustomizeTemplatesFullByIdResponse();
        this.request("ModifyCustomizeTemplatesFullById", req, resp, cb);
    }

    /**
     * 运行空间
     * @param {RunWorkspaceRequest} req
     * @param {function(string, RunWorkspaceResponse):void} cb
     * @public
     */
    RunWorkspace(req, cb) {
        let resp = new RunWorkspaceResponse();
        this.request("RunWorkspace", req, resp, cb);
    }

    /**
     * 删除自定义模板
     * @param {DeleteCustomizeTemplatesByIdRequest} req
     * @param {function(string, DeleteCustomizeTemplatesByIdResponse):void} cb
     * @public
     */
    DeleteCustomizeTemplatesById(req, cb) {
        let resp = new DeleteCustomizeTemplatesByIdResponse();
        this.request("DeleteCustomizeTemplatesById", req, resp, cb);
    }

    /**
     * 全量修改自定义模板，忽略空
     * @param {ModifyCustomizeTemplatesPartByIdRequest} req
     * @param {function(string, ModifyCustomizeTemplatesPartByIdResponse):void} cb
     * @public
     */
    ModifyCustomizeTemplatesPartById(req, cb) {
        let resp = new ModifyCustomizeTemplatesPartByIdResponse();
        this.request("ModifyCustomizeTemplatesPartById", req, resp, cb);
    }

    /**
     * 停止运行空间
     * @param {StopWorkspaceRequest} req
     * @param {function(string, StopWorkspaceResponse):void} cb
     * @public
     */
    StopWorkspace(req, cb) {
        let resp = new StopWorkspaceResponse();
        this.request("StopWorkspace", req, resp, cb);
    }

    /**
     * 获取创建模板的预置参数
     * @param {DescribeCustomizeTemplatesPresetsRequest} req
     * @param {function(string, DescribeCustomizeTemplatesPresetsResponse):void} cb
     * @public
     */
    DescribeCustomizeTemplatesPresets(req, cb) {
        let resp = new DescribeCustomizeTemplatesPresetsResponse();
        this.request("DescribeCustomizeTemplatesPresets", req, resp, cb);
    }

    /**
     * 环境列表接口返回信息
     * @param {DescribeWorkspaceEnvListRequest} req
     * @param {function(string, DescribeWorkspaceEnvListResponse):void} cb
     * @public
     */
    DescribeWorkspaceEnvList(req, cb) {
        let resp = new DescribeWorkspaceEnvListResponse();
        this.request("DescribeWorkspaceEnvList", req, resp, cb);
    }

    /**
     * 修改工作空间的名称和描述
     * @param {ModifyWorkspaceAttributesRequest} req
     * @param {function(string, ModifyWorkspaceAttributesResponse):void} cb
     * @public
     */
    ModifyWorkspaceAttributes(req, cb) {
        let resp = new ModifyWorkspaceAttributesResponse();
        this.request("ModifyWorkspaceAttributes", req, resp, cb);
    }

    /**
     * 云服务器方式创建工作空间
     * @param {CreateWorkspaceByAgentRequest} req
     * @param {function(string, CreateWorkspaceByAgentResponse):void} cb
     * @public
     */
    CreateWorkspaceByAgent(req, cb) {
        let resp = new CreateWorkspaceByAgentResponse();
        this.request("CreateWorkspaceByAgent", req, resp, cb);
    }

    /**
     * 添加自定义模板
     * @param {CreateCustomizeTemplatesRequest} req
     * @param {function(string, CreateCustomizeTemplatesResponse):void} cb
     * @public
     */
    CreateCustomizeTemplates(req, cb) {
        let resp = new CreateCustomizeTemplatesResponse();
        this.request("CreateCustomizeTemplates", req, resp, cb);
    }

    /**
     * 获取所有模板列表
     * @param {DescribeCustomizeTemplatesRequest} req
     * @param {function(string, DescribeCustomizeTemplatesResponse):void} cb
     * @public
     */
    DescribeCustomizeTemplates(req, cb) {
        let resp = new DescribeCustomizeTemplatesResponse();
        this.request("DescribeCustomizeTemplates", req, resp, cb);
    }


}
module.exports = CloudstudioClient;
