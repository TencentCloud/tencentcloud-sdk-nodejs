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
const DescribeImagePersonalResponse = models.DescribeImagePersonalResponse;
const DescribeUserQuotaPersonalRequest = models.DescribeUserQuotaPersonalRequest;
const TriggerInvokePara = models.TriggerInvokePara;
const TriggerLogResp = models.TriggerLogResp;
const TagInfoResp = models.TagInfoResp;
const CreateInstanceResponse = models.CreateInstanceResponse;
const ValidateRepositoryExistPersonalRequest = models.ValidateRepositoryExistPersonalRequest;
const CreateApplicationTriggerPersonalRequest = models.CreateApplicationTriggerPersonalRequest;
const AutoDelStrategyInfo = models.AutoDelStrategyInfo;
const ValidateNamespaceExistPersonalRequest = models.ValidateNamespaceExistPersonalRequest;
const Registry = models.Registry;
const ModifyApplicationTriggerPersonalRequest = models.ModifyApplicationTriggerPersonalRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const DescribeApplicationTriggerPersonalRequest = models.DescribeApplicationTriggerPersonalRequest;
const FavorResp = models.FavorResp;
const DeleteNamespacePersonalRequest = models.DeleteNamespacePersonalRequest;
const Limit = models.Limit;
const DeleteImagePersonalResponse = models.DeleteImagePersonalResponse;
const RegistryCondition = models.RegistryCondition;
const DuplicateImagePersonalResponse = models.DuplicateImagePersonalResponse;
const DupImageTagResp = models.DupImageTagResp;
const DeleteApplicationTriggerPersonalResponse = models.DeleteApplicationTriggerPersonalResponse;
const DescribeRepositoryFilterPersonalRequest = models.DescribeRepositoryFilterPersonalRequest;
const DescribeRepositoryPersonalRequest = models.DescribeRepositoryPersonalRequest;
const AutoDelStrategyInfoResp = models.AutoDelStrategyInfoResp;
const DeleteApplicationTriggerPersonalRequest = models.DeleteApplicationTriggerPersonalRequest;
const SearchUserRepositoryResp = models.SearchUserRepositoryResp;
const DescribeImageLifecyclePersonalResponse = models.DescribeImageLifecyclePersonalResponse;
const DeleteImageLifecyclePersonalResponse = models.DeleteImageLifecyclePersonalResponse;
const DescribeRepositoryOwnerPersonalResponse = models.DescribeRepositoryOwnerPersonalResponse;
const CreateImageLifecyclePersonalResponse = models.CreateImageLifecyclePersonalResponse;
const RepoIsExistResp = models.RepoIsExistResp;
const CreateNamespacePersonalResponse = models.CreateNamespacePersonalResponse;
const DescribeInstanceStatusRequest = models.DescribeInstanceStatusRequest;
const DescribeInstanceStatusResponse = models.DescribeInstanceStatusResponse;
const Favors = models.Favors;
const DescribeRepositoryPersonalResponse = models.DescribeRepositoryPersonalResponse;
const CreateUserPersonalRequest = models.CreateUserPersonalRequest;
const ModifyUserPasswordPersonalResponse = models.ModifyUserPasswordPersonalResponse;
const ModifyRepositoryInfoPersonalResponse = models.ModifyRepositoryInfoPersonalResponse;
const DescribeImageFilterPersonalRequest = models.DescribeImageFilterPersonalRequest;
const CreateNamespacePersonalRequest = models.CreateNamespacePersonalRequest;
const RegistryStatus = models.RegistryStatus;
const DescribeNamespacePersonalRequest = models.DescribeNamespacePersonalRequest;
const NamespaceInfo = models.NamespaceInfo;
const CreateInstanceTokenResponse = models.CreateInstanceTokenResponse;
const DescribeApplicationTriggerLogPersonalResp = models.DescribeApplicationTriggerLogPersonalResp;
const DeleteImagePersonalRequest = models.DeleteImagePersonalRequest;
const DescribeApplicationTriggerPersonalResponse = models.DescribeApplicationTriggerPersonalResponse;
const NamespaceInfoResp = models.NamespaceInfoResp;
const CreateRepositoryPersonalRequest = models.CreateRepositoryPersonalRequest;
const DescribeImageFilterPersonalResponse = models.DescribeImageFilterPersonalResponse;
const CreateImageLifecyclePersonalRequest = models.CreateImageLifecyclePersonalRequest;
const TriggerInvokeResult = models.TriggerInvokeResult;
const CreateUserPersonalResponse = models.CreateUserPersonalResponse;
const ModifyRepositoryAccessPersonalRequest = models.ModifyRepositoryAccessPersonalRequest;
const DescribeImageLifecyclePersonalRequest = models.DescribeImageLifecyclePersonalRequest;
const RepositoryInfoResp = models.RepositoryInfoResp;
const CreateInstanceRequest = models.CreateInstanceRequest;
const BatchDeleteRepositoryPersonalResponse = models.BatchDeleteRepositoryPersonalResponse;
const BatchDeleteRepositoryPersonalRequest = models.BatchDeleteRepositoryPersonalRequest;
const TriggerInvokeCondition = models.TriggerInvokeCondition;
const NamespaceIsExistsResp = models.NamespaceIsExistsResp;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const Filter = models.Filter;
const RepoInfo = models.RepoInfo;
const DescribeUserQuotaPersonalResponse = models.DescribeUserQuotaPersonalResponse;
const DescribeImagePersonalRequest = models.DescribeImagePersonalRequest;
const DeleteImageLifecyclePersonalRequest = models.DeleteImageLifecyclePersonalRequest;
const ModifyApplicationTriggerPersonalResponse = models.ModifyApplicationTriggerPersonalResponse;
const DescribeNamespacePersonalResponse = models.DescribeNamespacePersonalResponse;
const DeleteNamespacePersonalResponse = models.DeleteNamespacePersonalResponse;
const DescribeRepositoryOwnerPersonalRequest = models.DescribeRepositoryOwnerPersonalRequest;
const ModifyRepositoryInfoPersonalRequest = models.ModifyRepositoryInfoPersonalRequest;
const DescribeApplicationTriggerLogPersonalRequest = models.DescribeApplicationTriggerLogPersonalRequest;
const DescribeFavorRepositoryPersonalRequest = models.DescribeFavorRepositoryPersonalRequest;
const DescribeApplicationTriggerLogPersonalResponse = models.DescribeApplicationTriggerLogPersonalResponse;
const DescribeRepositoryFilterPersonalResponse = models.DescribeRepositoryFilterPersonalResponse;
const DescribeFavorRepositoryPersonalResponse = models.DescribeFavorRepositoryPersonalResponse;
const ModifyRepositoryAccessPersonalResponse = models.ModifyRepositoryAccessPersonalResponse;
const CreateInstanceTokenRequest = models.CreateInstanceTokenRequest;
const ModifyUserPasswordPersonalRequest = models.ModifyUserPasswordPersonalRequest;
const ValidateNamespaceExistPersonalResponse = models.ValidateNamespaceExistPersonalResponse;
const DescribeApplicationTriggerPersonalResp = models.DescribeApplicationTriggerPersonalResp;
const TagInfo = models.TagInfo;
const DuplicateImagePersonalRequest = models.DuplicateImagePersonalRequest;
const BatchDeleteImagePersonalRequest = models.BatchDeleteImagePersonalRequest;
const TriggerResp = models.TriggerResp;
const RespLimit = models.RespLimit;
const SameImagesResp = models.SameImagesResp;
const RepoInfoResp = models.RepoInfoResp;
const DeleteRepositoryPersonalResponse = models.DeleteRepositoryPersonalResponse;
const ValidateRepositoryExistPersonalResponse = models.ValidateRepositoryExistPersonalResponse;
const CreateRepositoryPersonalResponse = models.CreateRepositoryPersonalResponse;
const CreateApplicationTriggerPersonalResponse = models.CreateApplicationTriggerPersonalResponse;
const BatchDeleteImagePersonalResponse = models.BatchDeleteImagePersonalResponse;
const DeleteRepositoryPersonalRequest = models.DeleteRepositoryPersonalRequest;


/**
 * tcr client
 * @class
 */
class TcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcr.tencentcloudapi.com", "2019-09-24", credential, region, profile);
    }
    
    /**
     * 用于在个人版中查询与指定tag镜像内容相同的tag列表
     * @param {DescribeImageFilterPersonalRequest} req
     * @param {function(string, DescribeImageFilterPersonalResponse):void} cb
     * @public
     */
    DescribeImageFilterPersonal(req, cb) {
        let resp = new DescribeImageFilterPersonalResponse();
        this.request("DescribeImageFilterPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版中创建清理策略
     * @param {CreateImageLifecyclePersonalRequest} req
     * @param {function(string, CreateImageLifecyclePersonalResponse):void} cb
     * @public
     */
    CreateImageLifecyclePersonal(req, cb) {
        let resp = new CreateImageLifecyclePersonalResponse();
        this.request("CreateImageLifecyclePersonal", req, resp, cb);
    }

    /**
     * 用于获取个人版镜像仓库tag列表
     * @param {DescribeImagePersonalRequest} req
     * @param {function(string, DescribeImagePersonalResponse):void} cb
     * @public
     */
    DescribeImagePersonal(req, cb) {
        let resp = new DescribeImagePersonalResponse();
        this.request("DescribeImagePersonal", req, resp, cb);
    }

    /**
     * 用于修改应用更新触发器
     * @param {ModifyApplicationTriggerPersonalRequest} req
     * @param {function(string, ModifyApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    ModifyApplicationTriggerPersonal(req, cb) {
        let resp = new ModifyApplicationTriggerPersonalResponse();
        this.request("ModifyApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 用于个人版镜像仓库中删除
     * @param {DeleteRepositoryPersonalRequest} req
     * @param {function(string, DeleteRepositoryPersonalResponse):void} cb
     * @public
     */
    DeleteRepositoryPersonal(req, cb) {
        let resp = new DeleteRepositoryPersonalResponse();
        this.request("DeleteRepositoryPersonal", req, resp, cb);
    }

    /**
     * 查询个人用户配额
     * @param {DescribeUserQuotaPersonalRequest} req
     * @param {function(string, DescribeUserQuotaPersonalResponse):void} cb
     * @public
     */
    DescribeUserQuotaPersonal(req, cb) {
        let resp = new DescribeUserQuotaPersonalResponse();
        this.request("DescribeUserQuotaPersonal", req, resp, cb);
    }

    /**
     * 查询实例信息
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中更新容器镜像描述
     * @param {ModifyRepositoryInfoPersonalRequest} req
     * @param {function(string, ModifyRepositoryInfoPersonalResponse):void} cb
     * @public
     */
    ModifyRepositoryInfoPersonal(req, cb) {
        let resp = new ModifyRepositoryInfoPersonalResponse();
        this.request("ModifyRepositoryInfoPersonal", req, resp, cb);
    }

    /**
     * 查询个人版命名空间信息
     * @param {DescribeNamespacePersonalRequest} req
     * @param {function(string, DescribeNamespacePersonalResponse):void} cb
     * @public
     */
    DescribeNamespacePersonal(req, cb) {
        let resp = new DescribeNamespacePersonalResponse();
        this.request("DescribeNamespacePersonal", req, resp, cb);
    }

    /**
     * 查询个人版仓库信息
     * @param {DescribeRepositoryPersonalRequest} req
     * @param {function(string, DescribeRepositoryPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryPersonal(req, cb) {
        let resp = new DescribeRepositoryPersonalResponse();
        this.request("DescribeRepositoryPersonal", req, resp, cb);
    }

    /**
     * 用于查询应用更新触发器触发日志
     * @param {DescribeApplicationTriggerLogPersonalRequest} req
     * @param {function(string, DescribeApplicationTriggerLogPersonalResponse):void} cb
     * @public
     */
    DescribeApplicationTriggerLogPersonal(req, cb) {
        let resp = new DescribeApplicationTriggerLogPersonalResponse();
        this.request("DescribeApplicationTriggerLogPersonal", req, resp, cb);
    }

    /**
     * 修改个人用户登录密码
     * @param {ModifyUserPasswordPersonalRequest} req
     * @param {function(string, ModifyUserPasswordPersonalResponse):void} cb
     * @public
     */
    ModifyUserPasswordPersonal(req, cb) {
        let resp = new ModifyUserPasswordPersonalResponse();
        this.request("ModifyUserPasswordPersonal", req, resp, cb);
    }

    /**
     * 用于删除应用更新触发器
     * @param {DeleteApplicationTriggerPersonalRequest} req
     * @param {function(string, DeleteApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    DeleteApplicationTriggerPersonal(req, cb) {
        let resp = new DeleteApplicationTriggerPersonalResponse();
        this.request("DeleteApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版中删除tag
     * @param {DeleteImagePersonalRequest} req
     * @param {function(string, DeleteImagePersonalResponse):void} cb
     * @public
     */
    DeleteImagePersonal(req, cb) {
        let resp = new DeleteImagePersonalResponse();
        this.request("DeleteImagePersonal", req, resp, cb);
    }

    /**
     * 创建实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * 用于创建应用更新触发器
     * @param {CreateApplicationTriggerPersonalRequest} req
     * @param {function(string, CreateApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    CreateApplicationTriggerPersonal(req, cb) {
        let resp = new CreateApplicationTriggerPersonalResponse();
        this.request("CreateApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 用于个人版镜像仓库中批量删除镜像仓库
     * @param {BatchDeleteRepositoryPersonalRequest} req
     * @param {function(string, BatchDeleteRepositoryPersonalResponse):void} cb
     * @public
     */
    BatchDeleteRepositoryPersonal(req, cb) {
        let resp = new BatchDeleteRepositoryPersonalResponse();
        this.request("BatchDeleteRepositoryPersonal", req, resp, cb);
    }

    /**
     * 用于判断个人版仓库是否存在
     * @param {ValidateRepositoryExistPersonalRequest} req
     * @param {function(string, ValidateRepositoryExistPersonalResponse):void} cb
     * @public
     */
    ValidateRepositoryExistPersonal(req, cb) {
        let resp = new ValidateRepositoryExistPersonalResponse();
        this.request("ValidateRepositoryExistPersonal", req, resp, cb);
    }

    /**
     * 用于获取个人版仓库中自动清理策略
     * @param {DescribeImageLifecyclePersonalRequest} req
     * @param {function(string, DescribeImageLifecyclePersonalResponse):void} cb
     * @public
     */
    DescribeImageLifecyclePersonal(req, cb) {
        let resp = new DescribeImageLifecyclePersonalResponse();
        this.request("DescribeImageLifecyclePersonal", req, resp, cb);
    }

    /**
     * 查询个人收藏仓库
     * @param {DescribeFavorRepositoryPersonalRequest} req
     * @param {function(string, DescribeFavorRepositoryPersonalResponse):void} cb
     * @public
     */
    DescribeFavorRepositoryPersonal(req, cb) {
        let resp = new DescribeFavorRepositoryPersonalResponse();
        this.request("DescribeFavorRepositoryPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版中获取用户全部的镜像仓库列表
     * @param {DescribeRepositoryOwnerPersonalRequest} req
     * @param {function(string, DescribeRepositoryOwnerPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryOwnerPersonal(req, cb) {
        let resp = new DescribeRepositoryOwnerPersonalResponse();
        this.request("DescribeRepositoryOwnerPersonal", req, resp, cb);
    }

    /**
     * 查询实例当前状态以及过程信息
     * @param {DescribeInstanceStatusRequest} req
     * @param {function(string, DescribeInstanceStatusResponse):void} cb
     * @public
     */
    DescribeInstanceStatus(req, cb) {
        let resp = new DescribeInstanceStatusResponse();
        this.request("DescribeInstanceStatus", req, resp, cb);
    }

    /**
     * 用于在个人版仓库中创建镜像仓库
     * @param {CreateRepositoryPersonalRequest} req
     * @param {function(string, CreateRepositoryPersonalResponse):void} cb
     * @public
     */
    CreateRepositoryPersonal(req, cb) {
        let resp = new CreateRepositoryPersonalResponse();
        this.request("CreateRepositoryPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中批量删除Tag
     * @param {BatchDeleteImagePersonalRequest} req
     * @param {function(string, BatchDeleteImagePersonalResponse):void} cb
     * @public
     */
    BatchDeleteImagePersonal(req, cb) {
        let resp = new BatchDeleteImagePersonalResponse();
        this.request("BatchDeleteImagePersonal", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中复制镜像版本
     * @param {DuplicateImagePersonalRequest} req
     * @param {function(string, DuplicateImagePersonalResponse):void} cb
     * @public
     */
    DuplicateImagePersonal(req, cb) {
        let resp = new DuplicateImagePersonalResponse();
        this.request("DuplicateImagePersonal", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
     * @param {DescribeRepositoryFilterPersonalRequest} req
     * @param {function(string, DescribeRepositoryFilterPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryFilterPersonal(req, cb) {
        let resp = new DescribeRepositoryFilterPersonalResponse();
        this.request("DescribeRepositoryFilterPersonal", req, resp, cb);
    }

    /**
     * 查询个人版用户命名空间是否存在
     * @param {ValidateNamespaceExistPersonalRequest} req
     * @param {function(string, ValidateNamespaceExistPersonalResponse):void} cb
     * @public
     */
    ValidateNamespaceExistPersonal(req, cb) {
        let resp = new ValidateNamespaceExistPersonalResponse();
        this.request("ValidateNamespaceExistPersonal", req, resp, cb);
    }

    /**
     * 创建个人版镜像仓库命名空间，此命名空间全局唯一
     * @param {CreateNamespacePersonalRequest} req
     * @param {function(string, CreateNamespacePersonalResponse):void} cb
     * @public
     */
    CreateNamespacePersonal(req, cb) {
        let resp = new CreateNamespacePersonalResponse();
        this.request("CreateNamespacePersonal", req, resp, cb);
    }

    /**
     * 创建个人用户
     * @param {CreateUserPersonalRequest} req
     * @param {function(string, CreateUserPersonalResponse):void} cb
     * @public
     */
    CreateUserPersonal(req, cb) {
        let resp = new CreateUserPersonalResponse();
        this.request("CreateUserPersonal", req, resp, cb);
    }

    /**
     * 删除共享版命名空间
     * @param {DeleteNamespacePersonalRequest} req
     * @param {function(string, DeleteNamespacePersonalResponse):void} cb
     * @public
     */
    DeleteNamespacePersonal(req, cb) {
        let resp = new DeleteNamespacePersonalResponse();
        this.request("DeleteNamespacePersonal", req, resp, cb);
    }

    /**
     * 用于更新个人版镜像仓库的访问属性
     * @param {ModifyRepositoryAccessPersonalRequest} req
     * @param {function(string, ModifyRepositoryAccessPersonalResponse):void} cb
     * @public
     */
    ModifyRepositoryAccessPersonal(req, cb) {
        let resp = new ModifyRepositoryAccessPersonalResponse();
        this.request("ModifyRepositoryAccessPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中删除仓库Tag自动清理策略
     * @param {DeleteImageLifecyclePersonalRequest} req
     * @param {function(string, DeleteImageLifecyclePersonalResponse):void} cb
     * @public
     */
    DeleteImageLifecyclePersonal(req, cb) {
        let resp = new DeleteImageLifecyclePersonalResponse();
        this.request("DeleteImageLifecyclePersonal", req, resp, cb);
    }

    /**
     * 获取临时登录密码
     * @param {CreateInstanceTokenRequest} req
     * @param {function(string, CreateInstanceTokenResponse):void} cb
     * @public
     */
    CreateInstanceToken(req, cb) {
        let resp = new CreateInstanceTokenResponse();
        this.request("CreateInstanceToken", req, resp, cb);
    }

    /**
     * 用于查询应用更新触发器
     * @param {DescribeApplicationTriggerPersonalRequest} req
     * @param {function(string, DescribeApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    DescribeApplicationTriggerPersonal(req, cb) {
        let resp = new DescribeApplicationTriggerPersonalResponse();
        this.request("DescribeApplicationTriggerPersonal", req, resp, cb);
    }


}
module.exports = TcrClient;
