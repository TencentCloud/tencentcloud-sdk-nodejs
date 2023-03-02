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
const FlowDetails = models.FlowDetails;
const GetDeviceResponse = models.GetDeviceResponse;
const GetFlowStatisticResponse = models.GetFlowStatisticResponse;
const Capacity = models.Capacity;
const GetFlowStatisticRequest = models.GetFlowStatisticRequest;
const DestAddressInfo = models.DestAddressInfo;
const DeleteQosRequest = models.DeleteQosRequest;
const NetDetails = models.NetDetails;
const DeviceNetInfo = models.DeviceNetInfo;
const GetMultiFlowStatisticResponse = models.GetMultiFlowStatisticResponse;
const SrcAddressInfo = models.SrcAddressInfo;
const UpdateNetInfo = models.UpdateNetInfo;
const CreateQosResponse = models.CreateQosResponse;
const DescribeQosResponse = models.DescribeQosResponse;
const CreateEncryptedKeyRequest = models.CreateEncryptedKeyRequest;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const CreateEncryptedKeyResponse = models.CreateEncryptedKeyResponse;
const UpdateDeviceResponse = models.UpdateDeviceResponse;
const DeviceDetails = models.DeviceDetails;
const CreateQosRequest = models.CreateQosRequest;
const GetStatisticDataRequest = models.GetStatisticDataRequest;
const UpdateDeviceRequest = models.UpdateDeviceRequest;
const GetPublicKeyResponse = models.GetPublicKeyResponse;
const GetMultiFlowStatisticRequest = models.GetMultiFlowStatisticRequest;
const DeviceBaseInfo = models.DeviceBaseInfo;
const ExpectedThreshold = models.ExpectedThreshold;
const DeleteQosResponse = models.DeleteQosResponse;
const Context = models.Context;
const AddDeviceResponse = models.AddDeviceResponse;
const GetDeviceRequest = models.GetDeviceRequest;
const GetDevicesResponse = models.GetDevicesResponse;
const DescribeQosRequest = models.DescribeQosRequest;
const NetworkData = models.NetworkData;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const GetStatisticDataResponse = models.GetStatisticDataResponse;
const DeviceInfo = models.DeviceInfo;
const GetDevicesRequest = models.GetDevicesRequest;
const AddDeviceRequest = models.AddDeviceRequest;
const GetPublicKeyRequest = models.GetPublicKeyRequest;


/**
 * mna client
 * @class
 */
class MnaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mna.tencentcloudapi.com", "2021-01-19", credential, region, profile);
    }
    
    /**
     * 在用量统计页面下载流量数据
     * @param {GetStatisticDataRequest} req
     * @param {function(string, GetStatisticDataResponse):void} cb
     * @public
     */
    GetStatisticData(req, cb) {
        let resp = new GetStatisticDataResponse();
        this.request("GetStatisticData", req, resp, cb);
    }

    /**
     * 更新设备信息
     * @param {UpdateDeviceRequest} req
     * @param {function(string, UpdateDeviceResponse):void} cb
     * @public
     */
    UpdateDevice(req, cb) {
        let resp = new UpdateDeviceResponse();
        this.request("UpdateDevice", req, resp, cb);
    }

    /**
     * 新建设备记录
     * @param {AddDeviceRequest} req
     * @param {function(string, AddDeviceResponse):void} cb
     * @public
     */
    AddDevice(req, cb) {
        let resp = new AddDeviceResponse();
        this.request("AddDevice", req, resp, cb);
    }

    /**
     * 获取Qos加速状态
     * @param {DescribeQosRequest} req
     * @param {function(string, DescribeQosResponse):void} cb
     * @public
     */
    DescribeQos(req, cb) {
        let resp = new DescribeQosResponse();
        this.request("DescribeQos", req, resp, cb);
    }

    /**
     * 获取指定设备Id，指定时间点数据流量使用情况
     * @param {GetFlowStatisticRequest} req
     * @param {function(string, GetFlowStatisticResponse):void} cb
     * @public
     */
    GetFlowStatistic(req, cb) {
        let resp = new GetFlowStatisticResponse();
        this.request("GetFlowStatistic", req, resp, cb);
    }

    /**
     * 获取设备信息列表
     * @param {GetDevicesRequest} req
     * @param {function(string, GetDevicesResponse):void} cb
     * @public
     */
    GetDevices(req, cb) {
        let resp = new GetDevicesResponse();
        this.request("GetDevices", req, resp, cb);
    }

    /**
     * 获取公钥用于验签
     * @param {GetPublicKeyRequest} req
     * @param {function(string, GetPublicKeyResponse):void} cb
     * @public
     */
    GetPublicKey(req, cb) {
        let resp = new GetPublicKeyResponse();
        this.request("GetPublicKey", req, resp, cb);
    }

    /**
     * 通过此接口设置和更新预置密钥
     * @param {CreateEncryptedKeyRequest} req
     * @param {function(string, CreateEncryptedKeyResponse):void} cb
     * @public
     */
    CreateEncryptedKey(req, cb) {
        let resp = new CreateEncryptedKeyResponse();
        this.request("CreateEncryptedKey", req, resp, cb);
    }

    /**
     * 批量获取设备流量统计曲线
     * @param {GetMultiFlowStatisticRequest} req
     * @param {function(string, GetMultiFlowStatisticResponse):void} cb
     * @public
     */
    GetMultiFlowStatistic(req, cb) {
        let resp = new GetMultiFlowStatisticResponse();
        this.request("GetMultiFlowStatistic", req, resp, cb);
    }

    /**
     * 删除设备信息
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
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
     * 通过指定设备的ID查找设备详细信息
     * @param {GetDeviceRequest} req
     * @param {function(string, GetDeviceResponse):void} cb
     * @public
     */
    GetDevice(req, cb) {
        let resp = new GetDeviceResponse();
        this.request("GetDevice", req, resp, cb);
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
