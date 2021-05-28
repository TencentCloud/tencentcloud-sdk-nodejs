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
const DeleteProjectRequest = models.DeleteProjectRequest;
const ProjectEntry = models.ProjectEntry;
const DescribeModelDefinitionResponse = models.DescribeModelDefinitionResponse;
const ModifyStudioProductResponse = models.ModifyStudioProductResponse;
const DeleteStudioProductResponse = models.DeleteStudioProductResponse;
const GetDeviceListResponse = models.GetDeviceListResponse;
const ControlDeviceDataRequest = models.ControlDeviceDataRequest;
const DeleteLoRaFrequencyResponse = models.DeleteLoRaFrequencyResponse;
const DeleteTopicRuleResponse = models.DeleteTopicRuleResponse;
const ModifyModelDefinitionRequest = models.ModifyModelDefinitionRequest;
const CreateStudioProductResponse = models.CreateStudioProductResponse;
const CallDeviceActionSyncRequest = models.CallDeviceActionSyncRequest;
const EnableTopicRuleResponse = models.EnableTopicRuleResponse;
const UpdateFirmwareResponse = models.UpdateFirmwareResponse;
const ModifyStudioProductRequest = models.ModifyStudioProductRequest;
const CreateStudioProductRequest = models.CreateStudioProductRequest;
const ProductModelDefinition = models.ProductModelDefinition;
const ReleaseStudioProductRequest = models.ReleaseStudioProductRequest;
const SearchTopicRuleRequest = models.SearchTopicRuleRequest;
const DescribeDeviceDataRequest = models.DescribeDeviceDataRequest;
const DescribeStudioProductResponse = models.DescribeStudioProductResponse;
const DescribeProjectResponse = models.DescribeProjectResponse;
const DeviceData = models.DeviceData;
const DeviceDataHistoryItem = models.DeviceDataHistoryItem;
const ProductEntry = models.ProductEntry;
const ProjectEntryEx = models.ProjectEntryEx;
const DescribeLoRaFrequencyRequest = models.DescribeLoRaFrequencyRequest;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteLoRaFrequencyRequest = models.DeleteLoRaFrequencyRequest;
const ListEventHistoryRequest = models.ListEventHistoryRequest;
const ListFirmwaresResponse = models.ListFirmwaresResponse;
const ReleaseStudioProductResponse = models.ReleaseStudioProductResponse;
const DeleteLoRaGatewayRequest = models.DeleteLoRaGatewayRequest;
const LoRaFrequencyEntry = models.LoRaFrequencyEntry;
const SearchTopicRuleResponse = models.SearchTopicRuleResponse;
const DescribeTopicRuleRequest = models.DescribeTopicRuleRequest;
const CallDeviceActionSyncResponse = models.CallDeviceActionSyncResponse;
const CreateLoRaGatewayRequest = models.CreateLoRaGatewayRequest;
const CreateProjectResponse = models.CreateProjectResponse;
const ModifyTopicRuleRequest = models.ModifyTopicRuleRequest;
const DeleteProjectResponse = models.DeleteProjectResponse;
const CallDeviceActionAsyncRequest = models.CallDeviceActionAsyncRequest;
const CreateDeviceResponse = models.CreateDeviceResponse;
const CreateDeviceRequest = models.CreateDeviceRequest;
const GetProjectListResponse = models.GetProjectListResponse;
const GetStudioProductListRequest = models.GetStudioProductListRequest;
const DescribeFirmwareTaskResponse = models.DescribeFirmwareTaskResponse;
const FirmwareInfo = models.FirmwareInfo;
const DisableTopicRuleResponse = models.DisableTopicRuleResponse;
const TopicRuleInfo = models.TopicRuleInfo;
const GetCOSURLRequest = models.GetCOSURLRequest;
const CreateProjectRequest = models.CreateProjectRequest;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const ListFirmwaresRequest = models.ListFirmwaresRequest;
const GetStudioProductListResponse = models.GetStudioProductListResponse;
const PublishMessageRequest = models.PublishMessageRequest;
const UploadFirmwareRequest = models.UploadFirmwareRequest;
const GetDeviceListRequest = models.GetDeviceListRequest;
const GetCOSURLResponse = models.GetCOSURLResponse;
const GetTopicRuleListResponse = models.GetTopicRuleListResponse;
const DisableTopicRuleRequest = models.DisableTopicRuleRequest;
const EventHistoryItem = models.EventHistoryItem;
const TopicRule = models.TopicRule;
const TopicRulePayload = models.TopicRulePayload;
const CallDeviceActionAsyncResponse = models.CallDeviceActionAsyncResponse;
const DescribeTopicRuleResponse = models.DescribeTopicRuleResponse;
const UpdateFirmwareRequest = models.UpdateFirmwareRequest;
const LoRaGatewayLocation = models.LoRaGatewayLocation;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const ModifyTopicRuleResponse = models.ModifyTopicRuleResponse;
const DescribeLoRaFrequencyResponse = models.DescribeLoRaFrequencyResponse;
const SearchStudioProductResponse = models.SearchStudioProductResponse;
const GetLoRaGatewayListRequest = models.GetLoRaGatewayListRequest;
const DescribeProjectRequest = models.DescribeProjectRequest;
const UploadFirmwareResponse = models.UploadFirmwareResponse;
const DeleteTopicRuleRequest = models.DeleteTopicRuleRequest;
const CreateLoRaGatewayResponse = models.CreateLoRaGatewayResponse;
const DeleteLoRaGatewayResponse = models.DeleteLoRaGatewayResponse;
const CreateLoRaFrequencyRequest = models.CreateLoRaFrequencyRequest;
const LoRaGatewayItem = models.LoRaGatewayItem;
const ControlDeviceDataResponse = models.ControlDeviceDataResponse;
const DescribeDeviceDataHistoryRequest = models.DescribeDeviceDataHistoryRequest;
const DescribeStudioProductRequest = models.DescribeStudioProductRequest;
const ModifyLoRaFrequencyRequest = models.ModifyLoRaFrequencyRequest;
const ModifyModelDefinitionResponse = models.ModifyModelDefinitionResponse;
const GetProjectListRequest = models.GetProjectListRequest;
const CreateLoRaFrequencyResponse = models.CreateLoRaFrequencyResponse;
const SearchStudioProductRequest = models.SearchStudioProductRequest;
const GetTopicRuleListRequest = models.GetTopicRuleListRequest;
const ModifyProjectResponse = models.ModifyProjectResponse;
const DeleteStudioProductRequest = models.DeleteStudioProductRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const PublishMessageResponse = models.PublishMessageResponse;
const ModifyLoRaGatewayResponse = models.ModifyLoRaGatewayResponse;
const DescribeDeviceDataHistoryResponse = models.DescribeDeviceDataHistoryResponse;
const SearchKeyword = models.SearchKeyword;
const DescribeModelDefinitionRequest = models.DescribeModelDefinitionRequest;
const GetLoRaGatewayListResponse = models.GetLoRaGatewayListResponse;
const CreateTopicRuleResponse = models.CreateTopicRuleResponse;
const DescribeDeviceDataResponse = models.DescribeDeviceDataResponse;
const CreateTopicRuleRequest = models.CreateTopicRuleRequest;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const ModifyLoRaFrequencyResponse = models.ModifyLoRaFrequencyResponse;
const ModifyLoRaGatewayRequest = models.ModifyLoRaGatewayRequest;
const ListEventHistoryResponse = models.ListEventHistoryResponse;
const EnableTopicRuleRequest = models.EnableTopicRuleRequest;
const DescribeFirmwareTaskRequest = models.DescribeFirmwareTaskRequest;


/**
 * iotexplorer client
 * @class
 */
class IotexplorerClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotexplorer.tencentcloudapi.com", "2019-04-23", credential, region, profile);
    }
    
    /**
     * 获取规则列表
     * @param {GetTopicRuleListRequest} req
     * @param {function(string, GetTopicRuleListResponse):void} cb
     * @public
     */
    GetTopicRuleList(req, cb) {
        let resp = new GetTopicRuleListResponse();
        this.request("GetTopicRuleList", req, resp, cb);
    }

    /**
     * 本接口（GetCOSURL）用于获取固件存储在COS的URL 
     * @param {GetCOSURLRequest} req
     * @param {function(string, GetCOSURLResponse):void} cb
     * @public
     */
    GetCOSURL(req, cb) {
        let resp = new GetCOSURLResponse();
        this.request("GetCOSURL", req, resp, cb);
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
     * 修改LoRa自定义频点
     * @param {ModifyLoRaFrequencyRequest} req
     * @param {function(string, ModifyLoRaFrequencyResponse):void} cb
     * @public
     */
    ModifyLoRaFrequency(req, cb) {
        let resp = new ModifyLoRaFrequencyResponse();
        this.request("ModifyLoRaFrequency", req, resp, cb);
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
     * 创建规则
     * @param {CreateTopicRuleRequest} req
     * @param {function(string, CreateTopicRuleResponse):void} cb
     * @public
     */
    CreateTopicRule(req, cb) {
        let resp = new CreateTopicRuleResponse();
        this.request("CreateTopicRule", req, resp, cb);
    }

    /**
     * 创建 LoRa 自定义频点
     * @param {CreateLoRaFrequencyRequest} req
     * @param {function(string, CreateLoRaFrequencyResponse):void} cb
     * @public
     */
    CreateLoRaFrequency(req, cb) {
        let resp = new CreateLoRaFrequencyResponse();
        this.request("CreateLoRaFrequency", req, resp, cb);
    }

    /**
     * 本接口（UpdateFirmware）用于对指定设备发起固件升级请求 
     * @param {UpdateFirmwareRequest} req
     * @param {function(string, UpdateFirmwareResponse):void} cb
     * @public
     */
    UpdateFirmware(req, cb) {
        let resp = new UpdateFirmwareResponse();
        this.request("UpdateFirmware", req, resp, cb);
    }

    /**
     * 本接口（UploadFirmware）用于上传设备固件至平台
     * @param {UploadFirmwareRequest} req
     * @param {function(string, UploadFirmwareResponse):void} cb
     * @public
     */
    UploadFirmware(req, cb) {
        let resp = new UploadFirmwareResponse();
        this.request("UploadFirmware", req, resp, cb);
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
     * 修改规则
     * @param {ModifyTopicRuleRequest} req
     * @param {function(string, ModifyTopicRuleResponse):void} cb
     * @public
     */
    ModifyTopicRule(req, cb) {
        let resp = new ModifyTopicRuleResponse();
        this.request("ModifyTopicRule", req, resp, cb);
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
     * 提供删除LoRa自定义频点的能力
     * @param {DeleteLoRaFrequencyRequest} req
     * @param {function(string, DeleteLoRaFrequencyResponse):void} cb
     * @public
     */
    DeleteLoRaFrequency(req, cb) {
        let resp = new DeleteLoRaFrequencyResponse();
        this.request("DeleteLoRaFrequency", req, resp, cb);
    }

    /**
     * 本接口（ListFirmwares）用于获取固件列表 
     * @param {ListFirmwaresRequest} req
     * @param {function(string, ListFirmwaresResponse):void} cb
     * @public
     */
    ListFirmwares(req, cb) {
        let resp = new ListFirmwaresResponse();
        this.request("ListFirmwares", req, resp, cb);
    }

    /**
     * 本接口（PublishMessage）用于使用自定义透传协议进行设备远控
     * @param {PublishMessageRequest} req
     * @param {function(string, PublishMessageResponse):void} cb
     * @public
     */
    PublishMessage(req, cb) {
        let resp = new PublishMessageResponse();
        this.request("PublishMessage", req, resp, cb);
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
     * 查询固件升级任务列表
     * @param {DescribeFirmwareTaskRequest} req
     * @param {function(string, DescribeFirmwareTaskResponse):void} cb
     * @public
     */
    DescribeFirmwareTask(req, cb) {
        let resp = new DescribeFirmwareTaskResponse();
        this.request("DescribeFirmwareTask", req, resp, cb);
    }

    /**
     * 提供查询LoRa自定义频点详情的能力
     * @param {DescribeLoRaFrequencyRequest} req
     * @param {function(string, DescribeLoRaFrequencyResponse):void} cb
     * @public
     */
    DescribeLoRaFrequency(req, cb) {
        let resp = new DescribeLoRaFrequencyResponse();
        this.request("DescribeLoRaFrequency", req, resp, cb);
    }

    /**
     * 搜索规则
     * @param {SearchTopicRuleRequest} req
     * @param {function(string, SearchTopicRuleResponse):void} cb
     * @public
     */
    SearchTopicRule(req, cb) {
        let resp = new SearchTopicRuleResponse();
        this.request("SearchTopicRule", req, resp, cb);
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
     * 禁用规则
     * @param {DisableTopicRuleRequest} req
     * @param {function(string, DisableTopicRuleResponse):void} cb
     * @public
     */
    DisableTopicRule(req, cb) {
        let resp = new DisableTopicRuleResponse();
        this.request("DisableTopicRule", req, resp, cb);
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
     * 启用规则
     * @param {EnableTopicRuleRequest} req
     * @param {function(string, EnableTopicRuleResponse):void} cb
     * @public
     */
    EnableTopicRule(req, cb) {
        let resp = new EnableTopicRuleResponse();
        this.request("EnableTopicRule", req, resp, cb);
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
     * 获取规则信息
     * @param {DescribeTopicRuleRequest} req
     * @param {function(string, DescribeTopicRuleResponse):void} cb
     * @public
     */
    DescribeTopicRule(req, cb) {
        let resp = new DescribeTopicRuleResponse();
        this.request("DescribeTopicRule", req, resp, cb);
    }

    /**
     * 删除规则
     * @param {DeleteTopicRuleRequest} req
     * @param {function(string, DeleteTopicRuleResponse):void} cb
     * @public
     */
    DeleteTopicRule(req, cb) {
        let resp = new DeleteTopicRuleResponse();
        this.request("DeleteTopicRule", req, resp, cb);
    }


}
module.exports = IotexplorerClient;
