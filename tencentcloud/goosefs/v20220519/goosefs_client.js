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
const CreateDataRepositoryTaskRequest = models.CreateDataRepositoryTaskRequest;
const CreateDataRepositoryTaskResponse = models.CreateDataRepositoryTaskResponse;
const DescribeDataRepositoryTaskStatusRequest = models.DescribeDataRepositoryTaskStatusRequest;
const DescribeDataRepositoryTaskStatusResponse = models.DescribeDataRepositoryTaskStatusResponse;


/**
 * goosefs client
 * @class
 */
class GoosefsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("goosefs.tencentcloudapi.com", "2022-05-19", credential, region, profile);
    }
    
    /**
     * 获取数据流通任务实时状态，用作客户端控制
     * @param {DescribeDataRepositoryTaskStatusRequest} req
     * @param {function(string, DescribeDataRepositoryTaskStatusResponse):void} cb
     * @public
     */
    DescribeDataRepositoryTaskStatus(req, cb) {
        let resp = new DescribeDataRepositoryTaskStatusResponse();
        this.request("DescribeDataRepositoryTaskStatus", req, resp, cb);
    }

    /**
     * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
     * @param {CreateDataRepositoryTaskRequest} req
     * @param {function(string, CreateDataRepositoryTaskResponse):void} cb
     * @public
     */
    CreateDataRepositoryTask(req, cb) {
        let resp = new CreateDataRepositoryTaskResponse();
        this.request("CreateDataRepositoryTask", req, resp, cb);
    }


}
module.exports = GoosefsClient;
