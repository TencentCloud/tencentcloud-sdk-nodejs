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
const ModifyLibraryResponse = models.ModifyLibraryResponse;
const DescribeLibrariesResponse = models.DescribeLibrariesResponse;
const SendSmsCodeResponse = models.SendSmsCodeResponse;
const Instance = models.Instance;
const TrafficPackage = models.TrafficPackage;
const DeleteLibraryRequest = models.DeleteLibraryRequest;
const DescribeTrafficPackagesRequest = models.DescribeTrafficPackagesRequest;
const DescribeTrafficPackagesResponse = models.DescribeTrafficPackagesResponse;
const DescribeLibrarySecretRequest = models.DescribeLibrarySecretRequest;
const DescribeLibrarySecretResponse = models.DescribeLibrarySecretResponse;
const SendSmsCodeRequest = models.SendSmsCodeRequest;
const DescribeOfficialInstancesRequest = models.DescribeOfficialInstancesRequest;
const DescribeLibrariesRequest = models.DescribeLibrariesRequest;
const LibraryExtension = models.LibraryExtension;
const VerifySmsCodeResponse = models.VerifySmsCodeResponse;
const ModifyLibraryRequest = models.ModifyLibraryRequest;
const DescribeOfficialOverviewRequest = models.DescribeOfficialOverviewRequest;
const DeleteLibraryResponse = models.DeleteLibraryResponse;
const DescribeOfficialInstancesResponse = models.DescribeOfficialInstancesResponse;
const VerifySmsCodeRequest = models.VerifySmsCodeRequest;
const CreateLibraryResponse = models.CreateLibraryResponse;
const Library = models.Library;
const CreateLibraryRequest = models.CreateLibraryRequest;
const DescribeOfficialOverviewResponse = models.DescribeOfficialOverviewResponse;


/**
 * smh client
 * @class
 */
class SmhClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("smh.tencentcloudapi.com", "2021-07-12", credential, region, profile);
    }
    
    /**
     * 查询官方云盘实例
     * @param {DescribeOfficialInstancesRequest} req
     * @param {function(string, DescribeOfficialInstancesResponse):void} cb
     * @public
     */
    DescribeOfficialInstances(req, cb) {
        let resp = new DescribeOfficialInstancesResponse();
        this.request("DescribeOfficialInstances", req, resp, cb);
    }

    /**
     * 创建 PaaS 服务媒体库
     * @param {CreateLibraryRequest} req
     * @param {function(string, CreateLibraryResponse):void} cb
     * @public
     */
    CreateLibrary(req, cb) {
        let resp = new CreateLibraryResponse();
        this.request("CreateLibrary", req, resp, cb);
    }

    /**
     * 发送用于换绑官方云盘实例的超级管理员账号的短信验证码
     * @param {SendSmsCodeRequest} req
     * @param {function(string, SendSmsCodeResponse):void} cb
     * @public
     */
    SendSmsCode(req, cb) {
        let resp = new SendSmsCodeResponse();
        this.request("SendSmsCode", req, resp, cb);
    }

    /**
     * 验证短信验证码以换绑官方云盘实例的超级管理员账号
     * @param {VerifySmsCodeRequest} req
     * @param {function(string, VerifySmsCodeResponse):void} cb
     * @public
     */
    VerifySmsCode(req, cb) {
        let resp = new VerifySmsCodeResponse();
        this.request("VerifySmsCode", req, resp, cb);
    }

    /**
     * 查询 PaaS 服务媒体库列表
     * @param {DescribeLibrariesRequest} req
     * @param {function(string, DescribeLibrariesResponse):void} cb
     * @public
     */
    DescribeLibraries(req, cb) {
        let resp = new DescribeLibrariesResponse();
        this.request("DescribeLibraries", req, resp, cb);
    }

    /**
     * 修改 PaaS 服务媒体库配置项
     * @param {ModifyLibraryRequest} req
     * @param {function(string, ModifyLibraryResponse):void} cb
     * @public
     */
    ModifyLibrary(req, cb) {
        let resp = new ModifyLibraryResponse();
        this.request("ModifyLibrary", req, resp, cb);
    }

    /**
     * 查询官方云盘实例概览数据
     * @param {DescribeOfficialOverviewRequest} req
     * @param {function(string, DescribeOfficialOverviewResponse):void} cb
     * @public
     */
    DescribeOfficialOverview(req, cb) {
        let resp = new DescribeOfficialOverviewResponse();
        this.request("DescribeOfficialOverview", req, resp, cb);
    }

    /**
     * 查询流量资源包
     * @param {DescribeTrafficPackagesRequest} req
     * @param {function(string, DescribeTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeTrafficPackages(req, cb) {
        let resp = new DescribeTrafficPackagesResponse();
        this.request("DescribeTrafficPackages", req, resp, cb);
    }

    /**
     * 删除 PaaS 服务媒体库
     * @param {DeleteLibraryRequest} req
     * @param {function(string, DeleteLibraryResponse):void} cb
     * @public
     */
    DeleteLibrary(req, cb) {
        let resp = new DeleteLibraryResponse();
        this.request("DeleteLibrary", req, resp, cb);
    }

    /**
     * 查询 PaaS 服务媒体库密钥
     * @param {DescribeLibrarySecretRequest} req
     * @param {function(string, DescribeLibrarySecretResponse):void} cb
     * @public
     */
    DescribeLibrarySecret(req, cb) {
        let resp = new DescribeLibrarySecretResponse();
        this.request("DescribeLibrarySecret", req, resp, cb);
    }


}
module.exports = SmhClient;
