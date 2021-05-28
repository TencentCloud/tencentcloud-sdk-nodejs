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
const Capacity = models.Capacity;
const DestAddressInfo = models.DestAddressInfo;
const DeleteQosRequest = models.DeleteQosRequest;
const DeviceInfo = models.DeviceInfo;
const DeleteQosResponse = models.DeleteQosResponse;
const CreateQosResponse = models.CreateQosResponse;
const SrcAddressInfo = models.SrcAddressInfo;
const CreateQosRequest = models.CreateQosRequest;


/**
 * mna client
 * @class
 */
class MnaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mna.tencentcloudapi.com", "2021-01-19", credential, region, profile);
    }
    
    /**
     * 移动网络停止Qos加速过程
     * @param {DeleteQosRequest} req
     * @param {function(string, DeleteQosResponse):void} cb
     * @public
     */
    DeleteQos(req, cb) {
        let resp = new DeleteQosResponse();
        this.request("DeleteQos", req, resp, cb);
    }

    /**
     * 移动网络发起Qos加速过程
     * @param {CreateQosRequest} req
     * @param {function(string, CreateQosResponse):void} cb
     * @public
     */
    CreateQos(req, cb) {
        let resp = new CreateQosResponse();
        this.request("CreateQos", req, resp, cb);
    }


}
module.exports = MnaClient;
