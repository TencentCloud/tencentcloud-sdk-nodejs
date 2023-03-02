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
const DescribeCloudRunServersResponse = models.DescribeCloudRunServersResponse;
const RepositoryInfo = models.RepositoryInfo;
const ReleaseGrayRequest = models.ReleaseGrayRequest;
const StorageInfo = models.StorageInfo;
const DescribeEnvBaseInfoResponse = models.DescribeEnvBaseInfoResponse;
const CreateCloudRunServerRequest = models.CreateCloudRunServerRequest;
const FunctionInfo = models.FunctionInfo;
const DescribeServerManageTaskResponse = models.DescribeServerManageTaskResponse;
const TaskStepInfo = models.TaskStepInfo;
const DescribeCloudRunEnvsResponse = models.DescribeCloudRunEnvsResponse;
const DescribeCloudRunEnvsRequest = models.DescribeCloudRunEnvsRequest;
const ReleaseGrayResponse = models.ReleaseGrayResponse;
const DeployParam = models.DeployParam;
const OperateServerManageRequest = models.OperateServerManageRequest;
const StaticStorageInfo = models.StaticStorageInfo;
const UpdateCloudRunServerRequest = models.UpdateCloudRunServerRequest;
const LogServiceInfo = models.LogServiceInfo;
const OperateServerManageResponse = models.OperateServerManageResponse;
const DescribeCloudRunServerDetailRequest = models.DescribeCloudRunServerDetailRequest;
const DatabasesInfo = models.DatabasesInfo;
const DescribeCloudRunServersRequest = models.DescribeCloudRunServersRequest;
const ClsInfo = models.ClsInfo;
const DescribeServerManageTaskRequest = models.DescribeServerManageTaskRequest;
const HpaPolicy = models.HpaPolicy;
const OnlineVersionInfo = models.OnlineVersionInfo;
const ServerBaseConfig = models.ServerBaseConfig;
const DescribeCloudRunServerDetailResponse = models.DescribeCloudRunServerDetailResponse;
const CreateCloudRunEnvResponse = models.CreateCloudRunEnvResponse;
const EnvBaseInfo = models.EnvBaseInfo;
const ServerBaseInfo = models.ServerBaseInfo;
const EnvInfo = models.EnvInfo;
const Tag = models.Tag;
const DescribeEnvBaseInfoRequest = models.DescribeEnvBaseInfoRequest;
const CreateCloudRunServerResponse = models.CreateCloudRunServerResponse;
const VersionFlowInfo = models.VersionFlowInfo;
const UpdateCloudRunServerResponse = models.UpdateCloudRunServerResponse;
const ObjectKV = models.ObjectKV;
const BuildPacksInfo = models.BuildPacksInfo;
const CreateCloudRunEnvRequest = models.CreateCloudRunEnvRequest;
const ServerManageTaskInfo = models.ServerManageTaskInfo;


/**
 * tcbr client
 * @class
 */
class TcbrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcbr.tencentcloudapi.com", "2022-02-17", credential, region, profile);
    }
    
    /**
     * 创建云托管服务接口
     * @param {CreateCloudRunServerRequest} req
     * @param {function(string, CreateCloudRunServerResponse):void} cb
     * @public
     */
    CreateCloudRunServer(req, cb) {
        let resp = new CreateCloudRunServerResponse();
        this.request("CreateCloudRunServer", req, resp, cb);
    }

    /**
     * 查询服务管理任务信息
     * @param {DescribeServerManageTaskRequest} req
     * @param {function(string, DescribeServerManageTaskResponse):void} cb
     * @public
     */
    DescribeServerManageTask(req, cb) {
        let resp = new DescribeServerManageTaskResponse();
        this.request("DescribeServerManageTask", req, resp, cb);
    }

    /**
     * 查询环境基础信息
     * @param {DescribeEnvBaseInfoRequest} req
     * @param {function(string, DescribeEnvBaseInfoResponse):void} cb
     * @public
     */
    DescribeEnvBaseInfo(req, cb) {
        let resp = new DescribeEnvBaseInfoResponse();
        this.request("DescribeEnvBaseInfo", req, resp, cb);
    }

    /**
     * 查询云托管服务列表接口
     * @param {DescribeCloudRunServersRequest} req
     * @param {function(string, DescribeCloudRunServersResponse):void} cb
     * @public
     */
    DescribeCloudRunServers(req, cb) {
        let resp = new DescribeCloudRunServersResponse();
        this.request("DescribeCloudRunServers", req, resp, cb);
    }

    /**
     * 灰度发布
     * @param {ReleaseGrayRequest} req
     * @param {function(string, ReleaseGrayResponse):void} cb
     * @public
     */
    ReleaseGray(req, cb) {
        let resp = new ReleaseGrayResponse();
        this.request("ReleaseGray", req, resp, cb);
    }

    /**
     * 更新云托管服务
     * @param {UpdateCloudRunServerRequest} req
     * @param {function(string, UpdateCloudRunServerResponse):void} cb
     * @public
     */
    UpdateCloudRunServer(req, cb) {
        let resp = new UpdateCloudRunServerResponse();
        this.request("UpdateCloudRunServer", req, resp, cb);
    }

    /**
     * 创建云托管环境，并开通资源。	
     * @param {CreateCloudRunEnvRequest} req
     * @param {function(string, CreateCloudRunEnvResponse):void} cb
     * @public
     */
    CreateCloudRunEnv(req, cb) {
        let resp = new CreateCloudRunEnvResponse();
        this.request("CreateCloudRunEnv", req, resp, cb);
    }

    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @param {DescribeCloudRunEnvsRequest} req
     * @param {function(string, DescribeCloudRunEnvsResponse):void} cb
     * @public
     */
    DescribeCloudRunEnvs(req, cb) {
        let resp = new DescribeCloudRunEnvsResponse();
        this.request("DescribeCloudRunEnvs", req, resp, cb);
    }

    /**
     * 操作发布单
     * @param {OperateServerManageRequest} req
     * @param {function(string, OperateServerManageResponse):void} cb
     * @public
     */
    OperateServerManage(req, cb) {
        let resp = new OperateServerManageResponse();
        this.request("OperateServerManage", req, resp, cb);
    }

    /**
     * 查询云托管服务详情
     * @param {DescribeCloudRunServerDetailRequest} req
     * @param {function(string, DescribeCloudRunServerDetailResponse):void} cb
     * @public
     */
    DescribeCloudRunServerDetail(req, cb) {
        let resp = new DescribeCloudRunServerDetailResponse();
        this.request("DescribeCloudRunServerDetail", req, resp, cb);
    }


}
module.exports = TcbrClient;
