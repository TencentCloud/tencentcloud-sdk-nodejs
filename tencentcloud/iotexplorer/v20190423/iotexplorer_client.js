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
const DescribeProjectResponse = models.DescribeProjectResponse;
const ControlDeviceDataResponse = models.ControlDeviceDataResponse;
const DescribeDeviceDataHistoryRequest = models.DescribeDeviceDataHistoryRequest;
const SearchStudioProductResponse = models.SearchStudioProductResponse;
const DeviceData = models.DeviceData;
const DescribeStudioProductRequest = models.DescribeStudioProductRequest;
const DeleteProjectRequest = models.DeleteProjectRequest;
const ListEventHistoryRequest = models.ListEventHistoryRequest;
const ListEventHistoryResponse = models.ListEventHistoryResponse;
const DeviceDataHistoryItem = models.DeviceDataHistoryItem;
const ProductEntry = models.ProductEntry;
const GetStudioProductListResponse = models.GetStudioProductListResponse;
const DescribeModelDefinitionResponse = models.DescribeModelDefinitionResponse;
const ModifyModelDefinitionResponse = models.ModifyModelDefinitionResponse;
const GetLoRaGatewayListResponse = models.GetLoRaGatewayListResponse;
const ProjectEntry = models.ProjectEntry;
const GetProjectListRequest = models.GetProjectListRequest;
const DeleteStudioProductResponse = models.DeleteStudioProductResponse;
const EventHistoryItem = models.EventHistoryItem;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const GetDeviceListResponse = models.GetDeviceListResponse;
const ModifyStudioProductResponse = models.ModifyStudioProductResponse;
const ControlDeviceDataRequest = models.ControlDeviceDataRequest;
const SearchStudioProductRequest = models.SearchStudioProductRequest;
const ReleaseStudioProductResponse = models.ReleaseStudioProductResponse;
const DescribeStudioProductResponse = models.DescribeStudioProductResponse;
const DeleteLoRaGatewayRequest = models.DeleteLoRaGatewayRequest;
const ModifyProjectResponse = models.ModifyProjectResponse;
const ModifyModelDefinitionRequest = models.ModifyModelDefinitionRequest;
const LoRaGatewayLocation = models.LoRaGatewayLocation;
const CreateStudioProductResponse = models.CreateStudioProductResponse;
const CallDeviceActionSyncRequest = models.CallDeviceActionSyncRequest;
const DeleteStudioProductRequest = models.DeleteStudioProductRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const ModifyLoRaGatewayResponse = models.ModifyLoRaGatewayResponse;
const CallDeviceActionSyncResponse = models.CallDeviceActionSyncResponse;
const CreateLoRaGatewayRequest = models.CreateLoRaGatewayRequest;
const ModifyStudioProductRequest = models.ModifyStudioProductRequest;
const DescribeDeviceDataHistoryResponse = models.DescribeDeviceDataHistoryResponse;
const CreateStudioProductRequest = models.CreateStudioProductRequest;
const ProductModelDefinition = models.ProductModelDefinition;
const CreateProjectResponse = models.CreateProjectResponse;
const ReleaseStudioProductRequest = models.ReleaseStudioProductRequest;
const DescribeModelDefinitionRequest = models.DescribeModelDefinitionRequest;
const DeleteProjectResponse = models.DeleteProjectResponse;
const CallDeviceActionAsyncResponse = models.CallDeviceActionAsyncResponse;
const CallDeviceActionAsyncRequest = models.CallDeviceActionAsyncRequest;
const ProjectEntryEx = models.ProjectEntryEx;
const DescribeDeviceDataResponse = models.DescribeDeviceDataResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const GetLoRaGatewayListRequest = models.GetLoRaGatewayListRequest;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeProjectRequest = models.DescribeProjectRequest;
const GetStudioProductListRequest = models.GetStudioProductListRequest;
const DescribeDeviceDataRequest = models.DescribeDeviceDataRequest;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const CreateLoRaGatewayResponse = models.CreateLoRaGatewayResponse;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const GetDeviceListRequest = models.GetDeviceListRequest;
const ModifyLoRaGatewayRequest = models.ModifyLoRaGatewayRequest;
const DeleteLoRaGatewayResponse = models.DeleteLoRaGatewayResponse;
const LoRaGatewayItem = models.LoRaGatewayItem;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const GetProjectListResponse = models.GetProjectListResponse;
const CreateProjectRequest = models.CreateProjectRequest;


/**
 * iotexplorer client
 * @class
 */
class IotexplorerClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotexplorer.tencentcloudapi.com", "2019-04-23", credential, region, profile);
    }
    
    /**
     * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
     * @param {ModifyStudioProductRequest} req
     * @param {function(string, ModifyStudioProductResponse):void} cb
     * @public
     */
    ModifyStudioProduct(req, cb) {
        let resp = new ModifyStudioProductResponse();
        this.request("ModifyStudioProduct", req, resp, cb);
    }

    /**
     * 提供删除某个项目下产品的能力
     * @param {DeleteStudioProductRequest} req
     * @param {function(string, DeleteStudioProductResponse):void} cb
     * @public
     */
    DeleteStudioProduct(req, cb) {
        let resp = new DeleteStudioProductResponse();
        this.request("DeleteStudioProduct", req, resp, cb);
    }

    /**
     * 根据设备产品ID、设备名称，获取设备上报的属性数据。
     * @param {DescribeDeviceDataRequest} req
     * @param {function(string, DescribeDeviceDataResponse):void} cb
     * @public
     */
    DescribeDeviceData(req, cb) {
        let resp = new DescribeDeviceDataResponse();
        this.request("DescribeDeviceData", req, resp, cb);
    }

    /**
     * 删除  LoRa 网关的接口
     * @param {DeleteLoRaGatewayRequest} req
     * @param {function(string, DeleteLoRaGatewayResponse):void} cb
     * @public
     */
    DeleteLoRaGateway(req, cb) {
        let resp = new DeleteLoRaGatewayResponse();
        this.request("DeleteLoRaGateway", req, resp, cb);
    }

    /**
     * 为用户提供新建产品的能力，用于管理用户的设备
     * @param {CreateStudioProductRequest} req
     * @param {function(string, CreateStudioProductResponse):void} cb
     * @public
     */
    CreateStudioProduct(req, cb) {
        let resp = new CreateStudioProductResponse();
        this.request("CreateStudioProduct", req, resp, cb);
    }

    /**
     * 用于查看某个设备的详细信息
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        let resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }

    /**
     * 创建新 LoRa 网关设备接口
     * @param {CreateLoRaGatewayRequest} req
     * @param {function(string, CreateLoRaGatewayResponse):void} cb
     * @public
     */
    CreateLoRaGateway(req, cb) {
        let resp = new CreateLoRaGatewayResponse();
        this.request("CreateLoRaGateway", req, resp, cb);
    }

    /**
     * 修改 LoRa 网关信息
     * @param {ModifyLoRaGatewayRequest} req
     * @param {function(string, ModifyLoRaGatewayResponse):void} cb
     * @public
     */
    ModifyLoRaGateway(req, cb) {
        let resp = new ModifyLoRaGatewayResponse();
        this.request("ModifyLoRaGateway", req, resp, cb);
    }

    /**
     * 提供根据产品名称查找产品的能力
     * @param {SearchStudioProductRequest} req
     * @param {function(string, SearchStudioProductResponse):void} cb
     * @public
     */
    SearchStudioProduct(req, cb) {
        let resp = new SearchStudioProductResponse();
        this.request("SearchStudioProduct", req, resp, cb);
    }

    /**
     * 提供查询用户所创建的项目列表查询功能。
     * @param {GetProjectListRequest} req
     * @param {function(string, GetProjectListResponse):void} cb
     * @public
     */
    GetProjectList(req, cb) {
        let resp = new GetProjectListResponse();
        this.request("GetProjectList", req, resp, cb);
    }

    /**
     * 获取设备在指定时间范围内上报的历史数据。
     * @param {DescribeDeviceDataHistoryRequest} req
     * @param {function(string, DescribeDeviceDataHistoryResponse):void} cb
     * @public
     */
    DescribeDeviceDataHistory(req, cb) {
        let resp = new DescribeDeviceDataHistoryResponse();
        this.request("DescribeDeviceDataHistory", req, resp, cb);
    }

    /**
     * 为用户提供同步调用设备行为的能力。
     * @param {CallDeviceActionSyncRequest} req
     * @param {function(string, CallDeviceActionSyncResponse):void} cb
     * @public
     */
    CallDeviceActionSync(req, cb) {
        let resp = new CallDeviceActionSyncResponse();
        this.request("CallDeviceActionSync", req, resp, cb);
    }

    /**
     * 提供查看产品详细信息的能力，包括产品的ID、数据协议、认证类型等重要参数
     * @param {DescribeStudioProductRequest} req
     * @param {function(string, DescribeStudioProductResponse):void} cb
     * @public
     */
    DescribeStudioProduct(req, cb) {
        let resp = new DescribeStudioProductResponse();
        this.request("DescribeStudioProduct", req, resp, cb);
    }

    /**
     * 修改项目
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * 用于查询某个产品下的设备列表
     * @param {GetDeviceListRequest} req
     * @param {function(string, GetDeviceListResponse):void} cb
     * @public
     */
    GetDeviceList(req, cb) {
        let resp = new GetDeviceListResponse();
        this.request("GetDeviceList", req, resp, cb);
    }

    /**
     * 创建设备
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * 获取设备的历史事件
     * @param {ListEventHistoryRequest} req
     * @param {function(string, ListEventHistoryResponse):void} cb
     * @public
     */
    ListEventHistory(req, cb) {
        let resp = new ListEventHistoryResponse();
        this.request("ListEventHistory", req, resp, cb);
    }

    /**
     * 删除设备
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * 获取 LoRa 网关列表接口
     * @param {GetLoRaGatewayListRequest} req
     * @param {function(string, GetLoRaGatewayListResponse):void} cb
     * @public
     */
    GetLoRaGatewayList(req, cb) {
        let resp = new GetLoRaGatewayListResponse();
        this.request("GetLoRaGatewayList", req, resp, cb);
    }

    /**
     * 产品开发完成并测试通过后，通过发布产品将产品设置为发布状态
     * @param {ReleaseStudioProductRequest} req
     * @param {function(string, ReleaseStudioProductResponse):void} cb
     * @public
     */
    ReleaseStudioProduct(req, cb) {
        let resp = new ReleaseStudioProductResponse();
        this.request("ReleaseStudioProduct", req, resp, cb);
    }

    /**
     * 提供修改产品的数据模板的能力
     * @param {ModifyModelDefinitionRequest} req
     * @param {function(string, ModifyModelDefinitionResponse):void} cb
     * @public
     */
    ModifyModelDefinition(req, cb) {
        let resp = new ModifyModelDefinitionResponse();
        this.request("ModifyModelDefinition", req, resp, cb);
    }

    /**
     * 查询项目详情
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
    DescribeProject(req, cb) {
        let resp = new DescribeProjectResponse();
        this.request("DescribeProject", req, resp, cb);
    }

    /**
     * 查询产品配置的数据模板信息
     * @param {DescribeModelDefinitionRequest} req
     * @param {function(string, DescribeModelDefinitionResponse):void} cb
     * @public
     */
    DescribeModelDefinition(req, cb) {
        let resp = new DescribeModelDefinitionResponse();
        this.request("DescribeModelDefinition", req, resp, cb);
    }

    /**
     * 为用户提供新建项目的能力，用于集中管理产品和应用。
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * 提供给用户异步调用设备行为的能力
     * @param {CallDeviceActionAsyncRequest} req
     * @param {function(string, CallDeviceActionAsyncResponse):void} cb
     * @public
     */
    CallDeviceActionAsync(req, cb) {
        let resp = new CallDeviceActionAsyncResponse();
        this.request("CallDeviceActionAsync", req, resp, cb);
    }

    /**
     * 提供删除某个项目的能力
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     * @param {ControlDeviceDataRequest} req
     * @param {function(string, ControlDeviceDataResponse):void} cb
     * @public
     */
    ControlDeviceData(req, cb) {
        let resp = new ControlDeviceDataResponse();
        this.request("ControlDeviceData", req, resp, cb);
    }

    /**
     * 提供查询某个项目下所有产品信息的能力。
     * @param {GetStudioProductListRequest} req
     * @param {function(string, GetStudioProductListResponse):void} cb
     * @public
     */
    GetStudioProductList(req, cb) {
        let resp = new GetStudioProductListResponse();
        this.request("GetStudioProductList", req, resp, cb);
    }


}
module.exports = IotexplorerClient;
