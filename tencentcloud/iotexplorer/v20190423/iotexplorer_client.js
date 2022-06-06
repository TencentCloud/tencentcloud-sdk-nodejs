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
const UpdateDevicesEnableStateResponse = models.UpdateDevicesEnableStateResponse;
const DeleteProjectRequest = models.DeleteProjectRequest;
const DevicesItem = models.DevicesItem;
const DeleteFenceBindRequest = models.DeleteFenceBindRequest;
const DescribeModelDefinitionResponse = models.DescribeModelDefinitionResponse;
const UnbindDevicesRequest = models.UnbindDevicesRequest;
const DeleteDevicesResponse = models.DeleteDevicesResponse;
const ModifyStudioProductResponse = models.ModifyStudioProductResponse;
const GetGatewaySubDeviceListResponse = models.GetGatewaySubDeviceListResponse;
const DeleteStudioProductResponse = models.DeleteStudioProductResponse;
const BindDevicesRequest = models.BindDevicesRequest;
const DescribeGatewaySubProductsResponse = models.DescribeGatewaySubProductsResponse;
const GetDeviceListResponse = models.GetDeviceListResponse;
const TopicRulePayload = models.TopicRulePayload;
const DeleteLoRaFrequencyResponse = models.DeleteLoRaFrequencyResponse;
const DescribeTopicPolicyRequest = models.DescribeTopicPolicyRequest;
const BindProductInfo = models.BindProductInfo;
const ModifyPositionFenceRequest = models.ModifyPositionFenceRequest;
const PositionFenceItem = models.PositionFenceItem;
const DeleteTopicRuleResponse = models.DeleteTopicRuleResponse;
const PositionItem = models.PositionItem;
const ModifyModelDefinitionRequest = models.ModifyModelDefinitionRequest;
const CreateStudioProductResponse = models.CreateStudioProductResponse;
const CallDeviceActionSyncRequest = models.CallDeviceActionSyncRequest;
const ProductDevicesPositionItem = models.ProductDevicesPositionItem;
const DescribeDevicePositionListRequest = models.DescribeDevicePositionListRequest;
const GetDeviceLocationHistoryResponse = models.GetDeviceLocationHistoryResponse;
const UpdateFirmwareResponse = models.UpdateFirmwareResponse;
const ModifyPositionFenceResponse = models.ModifyPositionFenceResponse;
const ModifyStudioProductRequest = models.ModifyStudioProductRequest;
const ModifyPositionSpaceResponse = models.ModifyPositionSpaceResponse;
const CreateStudioProductRequest = models.CreateStudioProductRequest;
const ProductModelDefinition = models.ProductModelDefinition;
const ModifyFenceBindResponse = models.ModifyFenceBindResponse;
const CreateBatchProductionRequest = models.CreateBatchProductionRequest;
const DeletePositionFenceResponse = models.DeletePositionFenceResponse;
const FenceAlarmPoint = models.FenceAlarmPoint;
const UploadFirmwareRequest = models.UploadFirmwareRequest;
const ListEventHistoryRequest = models.ListEventHistoryRequest;
const SearchTopicRuleRequest = models.SearchTopicRuleRequest;
const DescribeDeviceDataRequest = models.DescribeDeviceDataRequest;
const FenceBindProductItem = models.FenceBindProductItem;
const PublishRRPCMessageRequest = models.PublishRRPCMessageRequest;
const DevicePositionItem = models.DevicePositionItem;
const ListTopicPolicyResponse = models.ListTopicPolicyResponse;
const SearchPositionSpaceResponse = models.SearchPositionSpaceResponse;
const DescribePositionFenceListResponse = models.DescribePositionFenceListResponse;
const GenSingleDeviceSignatureOfPublicResponse = models.GenSingleDeviceSignatureOfPublicResponse;
const DescribeDevicePositionListResponse = models.DescribeDevicePositionListResponse;
const GetProjectListResponse = models.GetProjectListResponse;
const CreateProjectRequest = models.CreateProjectRequest;
const DescribeProjectResponse = models.DescribeProjectResponse;
const UnbindProductsRequest = models.UnbindProductsRequest;
const SearchStudioProductResponse = models.SearchStudioProductResponse;
const DeviceData = models.DeviceData;
const GetTopicRuleListRequest = models.GetTopicRuleListRequest;
const FenceBindDeviceItem = models.FenceBindDeviceItem;
const DeviceDataHistoryItem = models.DeviceDataHistoryItem;
const GetFamilyDeviceUserListResponse = models.GetFamilyDeviceUserListResponse;
const BindDeviceInfo = models.BindDeviceInfo;
const ProjectEntryEx = models.ProjectEntryEx;
const DescribeBatchProductionResponse = models.DescribeBatchProductionResponse;
const ListTopicPolicyRequest = models.ListTopicPolicyRequest;
const DescribeLoRaFrequencyRequest = models.DescribeLoRaFrequencyRequest;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteLoRaFrequencyRequest = models.DeleteLoRaFrequencyRequest;
const ControlDeviceDataRequest = models.ControlDeviceDataRequest;
const ListFirmwaresResponse = models.ListFirmwaresResponse;
const ReleaseStudioProductResponse = models.ReleaseStudioProductResponse;
const DescribeSpaceFenceEventListResponse = models.DescribeSpaceFenceEventListResponse;
const PositionFenceInfo = models.PositionFenceInfo;
const DeleteLoRaGatewayRequest = models.DeleteLoRaGatewayRequest;
const UnbindProductsResponse = models.UnbindProductsResponse;
const DescribeTopicPolicyResponse = models.DescribeTopicPolicyResponse;
const SearchPositionSpaceRequest = models.SearchPositionSpaceRequest;
const LoRaFrequencyEntry = models.LoRaFrequencyEntry;
const ModifyTopicPolicyResponse = models.ModifyTopicPolicyResponse;
const GetPositionSpaceListRequest = models.GetPositionSpaceListRequest;
const SearchTopicRuleResponse = models.SearchTopicRuleResponse;
const DescribeFenceEventListResponse = models.DescribeFenceEventListResponse;
const UpdateDevicesEnableStateRequest = models.UpdateDevicesEnableStateRequest;
const DescribeTopicRuleRequest = models.DescribeTopicRuleRequest;
const GetDeviceLocationHistoryRequest = models.GetDeviceLocationHistoryRequest;
const CallDeviceActionSyncResponse = models.CallDeviceActionSyncResponse;
const CreateLoRaGatewayRequest = models.CreateLoRaGatewayRequest;
const ReleaseStudioProductRequest = models.ReleaseStudioProductRequest;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeDeviceDataHistoryResponse = models.DescribeDeviceDataHistoryResponse;
const DeleteProjectResponse = models.DeleteProjectResponse;
const CreateTopicPolicyResponse = models.CreateTopicPolicyResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DeletePositionSpaceRequest = models.DeletePositionSpaceRequest;
const GetStudioProductListRequest = models.GetStudioProductListRequest;
const DescribeFirmwareTaskResponse = models.DescribeFirmwareTaskResponse;
const FirmwareInfo = models.FirmwareInfo;
const DisableTopicRuleResponse = models.DisableTopicRuleResponse;
const TopicRuleInfo = models.TopicRuleInfo;
const GetCOSURLRequest = models.GetCOSURLRequest;
const DescribeStudioProductResponse = models.DescribeStudioProductResponse;
const CreateFenceBindRequest = models.CreateFenceBindRequest;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const PublishBroadcastMessageRequest = models.PublishBroadcastMessageRequest;
const ListFirmwaresRequest = models.ListFirmwaresRequest;
const GetStudioProductListResponse = models.GetStudioProductListResponse;
const PublishMessageRequest = models.PublishMessageRequest;
const FamilySubDevice = models.FamilySubDevice;
const ModifyTopicRuleRequest = models.ModifyTopicRuleRequest;
const GetDeviceListRequest = models.GetDeviceListRequest;
const ModifySpacePropertyRequest = models.ModifySpacePropertyRequest;
const GetPositionSpaceListResponse = models.GetPositionSpaceListResponse;
const GetCOSURLResponse = models.GetCOSURLResponse;
const ModifyFenceBindRequest = models.ModifyFenceBindRequest;
const GetTopicRuleListResponse = models.GetTopicRuleListResponse;
const DescribeFenceEventListRequest = models.DescribeFenceEventListRequest;
const ModifyPositionSpaceRequest = models.ModifyPositionSpaceRequest;
const GetLoRaGatewayListResponse = models.GetLoRaGatewayListResponse;
const ProjectEntry = models.ProjectEntry;
const ModifyLoRaGatewayResponse = models.ModifyLoRaGatewayResponse;
const EventHistoryItem = models.EventHistoryItem;
const DirectBindDeviceInFamilyResponse = models.DirectBindDeviceInFamilyResponse;
const TopicRule = models.TopicRule;
const CallDeviceActionAsyncRequest = models.CallDeviceActionAsyncRequest;
const CallDeviceActionAsyncResponse = models.CallDeviceActionAsyncResponse;
const DeleteFenceBindResponse = models.DeleteFenceBindResponse;
const DeleteTopicPolicyRequest = models.DeleteTopicPolicyRequest;
const CreateFenceBindResponse = models.CreateFenceBindResponse;
const DescribeTopicRuleResponse = models.DescribeTopicRuleResponse;
const CreatePositionFenceResponse = models.CreatePositionFenceResponse;
const PublishBroadcastMessageResponse = models.PublishBroadcastMessageResponse;
const DescribeFenceBindListRequest = models.DescribeFenceBindListRequest;
const DescribeBindedProductsResponse = models.DescribeBindedProductsResponse;
const DeviceSignatureInfo = models.DeviceSignatureInfo;
const PositionSpaceInfo = models.PositionSpaceInfo;
const LoRaGatewayLocation = models.LoRaGatewayLocation;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const DescribePositionFenceListRequest = models.DescribePositionFenceListRequest;
const ModifyTopicRuleResponse = models.ModifyTopicRuleResponse;
const DescribeBatchProductionRequest = models.DescribeBatchProductionRequest;
const CreateTopicPolicyRequest = models.CreateTopicPolicyRequest;
const DirectBindDeviceInFamilyRequest = models.DirectBindDeviceInFamilyRequest;
const TopicItem = models.TopicItem;
const GetFamilyDeviceUserListRequest = models.GetFamilyDeviceUserListRequest;
const DescribeBindedProductsRequest = models.DescribeBindedProductsRequest;
const DescribeLoRaFrequencyResponse = models.DescribeLoRaFrequencyResponse;
const ProductEntry = models.ProductEntry;
const DescribeGatewaySubDeviceListResponse = models.DescribeGatewaySubDeviceListResponse;
const DescribeSpaceFenceEventListRequest = models.DescribeSpaceFenceEventListRequest;
const GetLoRaGatewayListRequest = models.GetLoRaGatewayListRequest;
const FenceEventItem = models.FenceEventItem;
const DescribeProjectRequest = models.DescribeProjectRequest;
const UnbindDevicesResponse = models.UnbindDevicesResponse;
const ModifyLoRaFrequencyRequest = models.ModifyLoRaFrequencyRequest;
const UploadFirmwareResponse = models.UploadFirmwareResponse;
const ModifyTopicPolicyRequest = models.ModifyTopicPolicyRequest;
const DeleteTopicRuleRequest = models.DeleteTopicRuleRequest;
const CreateLoRaGatewayResponse = models.CreateLoRaGatewayResponse;
const DeleteTopicPolicyResponse = models.DeleteTopicPolicyResponse;
const DeleteLoRaGatewayResponse = models.DeleteLoRaGatewayResponse;
const CreateLoRaFrequencyRequest = models.CreateLoRaFrequencyRequest;
const LoRaGatewayItem = models.LoRaGatewayItem;
const DescribeDeviceBindGatewayResponse = models.DescribeDeviceBindGatewayResponse;
const DescribeGatewaySubDeviceListRequest = models.DescribeGatewaySubDeviceListRequest;
const ControlDeviceDataResponse = models.ControlDeviceDataResponse;
const DescribeDeviceDataHistoryRequest = models.DescribeDeviceDataHistoryRequest;
const UpdateFirmwareRequest = models.UpdateFirmwareRequest;
const DescribeStudioProductRequest = models.DescribeStudioProductRequest;
const CreatePositionSpaceResponse = models.CreatePositionSpaceResponse;
const CreateBatchProductionResponse = models.CreateBatchProductionResponse;
const ModifyModelDefinitionResponse = models.ModifyModelDefinitionResponse;
const DeletePositionFenceRequest = models.DeletePositionFenceRequest;
const GetProjectListRequest = models.GetProjectListRequest;
const DeletePositionSpaceResponse = models.DeletePositionSpaceResponse;
const DescribeDeviceBindGatewayRequest = models.DescribeDeviceBindGatewayRequest;
const CreateLoRaFrequencyResponse = models.CreateLoRaFrequencyResponse;
const EnableTopicRuleResponse = models.EnableTopicRuleResponse;
const GetGatewaySubDeviceListRequest = models.GetGatewaySubDeviceListRequest;
const SearchStudioProductRequest = models.SearchStudioProductRequest;
const GenSingleDeviceSignatureOfPublicRequest = models.GenSingleDeviceSignatureOfPublicRequest;
const DeleteDevicesRequest = models.DeleteDevicesRequest;
const AppDeviceInfo = models.AppDeviceInfo;
const BindProductsResponse = models.BindProductsResponse;
const ModifyProjectResponse = models.ModifyProjectResponse;
const BatchProductionInfo = models.BatchProductionInfo;
const DescribeGatewayBindDevicesRequest = models.DescribeGatewayBindDevicesRequest;
const DescribeGatewaySubProductsRequest = models.DescribeGatewaySubProductsRequest;
const DeleteStudioProductRequest = models.DeleteStudioProductRequest;
const BindProductsRequest = models.BindProductsRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const ModifySpacePropertyResponse = models.ModifySpacePropertyResponse;
const PublishMessageResponse = models.PublishMessageResponse;
const BindDevicesResponse = models.BindDevicesResponse;
const DescribeFenceBindListResponse = models.DescribeFenceBindListResponse;
const SearchKeyword = models.SearchKeyword;
const CreatePositionFenceRequest = models.CreatePositionFenceRequest;
const DescribeModelDefinitionRequest = models.DescribeModelDefinitionRequest;
const EnableTopicRuleRequest = models.EnableTopicRuleRequest;
const DisableTopicRuleRequest = models.DisableTopicRuleRequest;
const CreateTopicRuleResponse = models.CreateTopicRuleResponse;
const DescribeDeviceDataResponse = models.DescribeDeviceDataResponse;
const CreateTopicRuleRequest = models.CreateTopicRuleRequest;
const PublishRRPCMessageResponse = models.PublishRRPCMessageResponse;
const DeviceUser = models.DeviceUser;
const GetBatchProductionsListRequest = models.GetBatchProductionsListRequest;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const ModifyLoRaFrequencyResponse = models.ModifyLoRaFrequencyResponse;
const ModifyLoRaGatewayRequest = models.ModifyLoRaGatewayRequest;
const ListEventHistoryResponse = models.ListEventHistoryResponse;
const GetBatchProductionsListResponse = models.GetBatchProductionsListResponse;
const DescribeGatewayBindDevicesResponse = models.DescribeGatewayBindDevicesResponse;
const DescribeFirmwareTaskRequest = models.DescribeFirmwareTaskRequest;
const CreatePositionSpaceRequest = models.CreatePositionSpaceRequest;


/**
 * iotexplorer client
 * @class
 */
class IotexplorerClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotexplorer.tencentcloudapi.com", "2019-04-23", credential, region, profile);
    }
    
    /**
     * 本接口（GetCOSURL）用于获取固件COS存储的上传请求URL地址
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
     * 列出量产数据列表信息。
     * @param {GetBatchProductionsListRequest} req
     * @param {function(string, GetBatchProductionsListResponse):void} cb
     * @public
     */
    GetBatchProductionsList(req, cb) {
        let resp = new GetBatchProductionsListResponse();
        this.request("GetBatchProductionsList", req, resp, cb);
    }

    /**
     * 本接口（DescribeTopicPolicy）用于查看Topic详细信息 
     * @param {DescribeTopicPolicyRequest} req
     * @param {function(string, DescribeTopicPolicyResponse):void} cb
     * @public
     */
    DescribeTopicPolicy(req, cb) {
        let resp = new DescribeTopicPolicyResponse();
        this.request("DescribeTopicPolicy", req, resp, cb);
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
     * 直接绑定设备和家庭
     * @param {DirectBindDeviceInFamilyRequest} req
     * @param {function(string, DirectBindDeviceInFamilyResponse):void} cb
     * @public
     */
    DirectBindDeviceInFamily(req, cb) {
        let resp = new DirectBindDeviceInFamilyResponse();
        this.request("DirectBindDeviceInFamily", req, resp, cb);
    }

    /**
     * 查询设备绑定的网关设备
     * @param {DescribeDeviceBindGatewayRequest} req
     * @param {function(string, DescribeDeviceBindGatewayResponse):void} cb
     * @public
     */
    DescribeDeviceBindGateway(req, cb) {
        let resp = new DescribeDeviceBindGatewayResponse();
        this.request("DescribeDeviceBindGateway", req, resp, cb);
    }

    /**
     * 获取设备历史位置
     * @param {GetDeviceLocationHistoryRequest} req
     * @param {function(string, GetDeviceLocationHistoryResponse):void} cb
     * @public
     */
    GetDeviceLocationHistory(req, cb) {
        let resp = new GetDeviceLocationHistoryResponse();
        this.request("GetDeviceLocationHistory", req, resp, cb);
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
     * 更新围栏绑定信息
     * @param {ModifyFenceBindRequest} req
     * @param {function(string, ModifyFenceBindResponse):void} cb
     * @public
     */
    ModifyFenceBind(req, cb) {
        let resp = new ModifyFenceBindResponse();
        this.request("ModifyFenceBind", req, resp, cb);
    }

    /**
     * 删除位置空间
     * @param {DeletePositionSpaceRequest} req
     * @param {function(string, DeletePositionSpaceResponse):void} cb
     * @public
     */
    DeletePositionSpace(req, cb) {
        let resp = new DeletePositionSpaceResponse();
        this.request("DeletePositionSpace", req, resp, cb);
    }

    /**
     * 获取网关产品已经绑定的子产品
     * @param {DescribeBindedProductsRequest} req
     * @param {function(string, DescribeBindedProductsResponse):void} cb
     * @public
     */
    DescribeBindedProducts(req, cb) {
        let resp = new DescribeBindedProductsResponse();
        this.request("DescribeBindedProducts", req, resp, cb);
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
     * 获取围栏告警事件列表
     * @param {DescribeFenceEventListRequest} req
     * @param {function(string, DescribeFenceEventListResponse):void} cb
     * @public
     */
    DescribeFenceEventList(req, cb) {
        let resp = new DescribeFenceEventListResponse();
        this.request("DescribeFenceEventList", req, resp, cb);
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

    /**
     * 下发RRPC消息
     * @param {PublishRRPCMessageRequest} req
     * @param {function(string, PublishRRPCMessageResponse):void} cb
     * @public
     */
    PublishRRPCMessage(req, cb) {
        let resp = new PublishRRPCMessageResponse();
        this.request("PublishRRPCMessage", req, resp, cb);
    }

    /**
     * 搜索位置空间
     * @param {SearchPositionSpaceRequest} req
     * @param {function(string, SearchPositionSpaceResponse):void} cb
     * @public
     */
    SearchPositionSpace(req, cb) {
        let resp = new SearchPositionSpaceResponse();
        this.request("SearchPositionSpace", req, resp, cb);
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
     * 查询绑定到家庭的网关设备的子设备列表
     * @param {DescribeGatewaySubDeviceListRequest} req
     * @param {function(string, DescribeGatewaySubDeviceListResponse):void} cb
     * @public
     */
    DescribeGatewaySubDeviceList(req, cb) {
        let resp = new DescribeGatewaySubDeviceListResponse();
        this.request("DescribeGatewaySubDeviceList", req, resp, cb);
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
     * 删除围栏绑定信息
     * @param {DeleteFenceBindRequest} req
     * @param {function(string, DeleteFenceBindResponse):void} cb
     * @public
     */
    DeleteFenceBind(req, cb) {
        let resp = new DeleteFenceBindResponse();
        this.request("DeleteFenceBind", req, resp, cb);
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
     * 获取位置空间列表
     * @param {GetPositionSpaceListRequest} req
     * @param {function(string, GetPositionSpaceListResponse):void} cb
     * @public
     */
    GetPositionSpaceList(req, cb) {
        let resp = new GetPositionSpaceListResponse();
        this.request("GetPositionSpaceList", req, resp, cb);
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
     * 本接口（UpdateTopicPolicy）用于更新Topic信息 
     * @param {ModifyTopicPolicyRequest} req
     * @param {function(string, ModifyTopicPolicyResponse):void} cb
     * @public
     */
    ModifyTopicPolicy(req, cb) {
        let resp = new ModifyTopicPolicyResponse();
        this.request("ModifyTopicPolicy", req, resp, cb);
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
     * 发布广播消息
     * @param {PublishBroadcastMessageRequest} req
     * @param {function(string, PublishBroadcastMessageResponse):void} cb
     * @public
     */
    PublishBroadcastMessage(req, cb) {
        let resp = new PublishBroadcastMessageResponse();
        this.request("PublishBroadcastMessage", req, resp, cb);
    }

    /**
     * 批量解绑子产品
     * @param {UnbindProductsRequest} req
     * @param {function(string, UnbindProductsResponse):void} cb
     * @public
     */
    UnbindProducts(req, cb) {
        let resp = new UnbindProductsResponse();
        this.request("UnbindProducts", req, resp, cb);
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
     * 获取网关绑定的子设备列表
     * @param {DescribeGatewayBindDevicesRequest} req
     * @param {function(string, DescribeGatewayBindDevicesResponse):void} cb
     * @public
     */
    DescribeGatewayBindDevices(req, cb) {
        let resp = new DescribeGatewayBindDevicesResponse();
        this.request("DescribeGatewayBindDevices", req, resp, cb);
    }

    /**
     * 创建围栏
     * @param {CreatePositionFenceRequest} req
     * @param {function(string, CreatePositionFenceResponse):void} cb
     * @public
     */
    CreatePositionFence(req, cb) {
        let resp = new CreatePositionFenceResponse();
        this.request("CreatePositionFence", req, resp, cb);
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
     * 本接口（CreateTopicPolicy）用于创建一个Topic 
     * @param {CreateTopicPolicyRequest} req
     * @param {function(string, CreateTopicPolicyResponse):void} cb
     * @public
     */
    CreateTopicPolicy(req, cb) {
        let resp = new CreateTopicPolicyResponse();
        this.request("CreateTopicPolicy", req, resp, cb);
    }

    /**
     * 本接口（UploadFirmware）用于创建设备固件版本信息，在平台用于固件版本升级、固件资源下发等。
     * @param {UploadFirmwareRequest} req
     * @param {function(string, UploadFirmwareResponse):void} cb
     * @public
     */
    UploadFirmware(req, cb) {
        let resp = new UploadFirmwareResponse();
        this.request("UploadFirmware", req, resp, cb);
    }

    /**
     * 批量禁用启用设备
     * @param {UpdateDevicesEnableStateRequest} req
     * @param {function(string, UpdateDevicesEnableStateResponse):void} cb
     * @public
     */
    UpdateDevicesEnableState(req, cb) {
        let resp = new UpdateDevicesEnableStateResponse();
        this.request("UpdateDevicesEnableState", req, resp, cb);
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
     * 批量绑定子产品
     * @param {BindProductsRequest} req
     * @param {function(string, BindProductsResponse):void} cb
     * @public
     */
    BindProducts(req, cb) {
        let resp = new BindProductsResponse();
        this.request("BindProducts", req, resp, cb);
    }

    /**
     * 获取围栏绑定信息列表
     * @param {DescribeFenceBindListRequest} req
     * @param {function(string, DescribeFenceBindListResponse):void} cb
     * @public
     */
    DescribeFenceBindList(req, cb) {
        let resp = new DescribeFenceBindListResponse();
        this.request("DescribeFenceBindList", req, resp, cb);
    }

    /**
     * 更新位置空间
     * @param {ModifyPositionSpaceRequest} req
     * @param {function(string, ModifyPositionSpaceResponse):void} cb
     * @public
     */
    ModifyPositionSpace(req, cb) {
        let resp = new ModifyPositionSpaceResponse();
        this.request("ModifyPositionSpace", req, resp, cb);
    }

    /**
     * 获取位置空间中围栏告警事件列表
     * @param {DescribeSpaceFenceEventListRequest} req
     * @param {function(string, DescribeSpaceFenceEventListResponse):void} cb
     * @public
     */
    DescribeSpaceFenceEventList(req, cb) {
        let resp = new DescribeSpaceFenceEventListResponse();
        this.request("DescribeSpaceFenceEventList", req, resp, cb);
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
     * 用于获取网关可绑定或解绑的子产品
     * @param {DescribeGatewaySubProductsRequest} req
     * @param {function(string, DescribeGatewaySubProductsResponse):void} cb
     * @public
     */
    DescribeGatewaySubProducts(req, cb) {
        let resp = new DescribeGatewaySubProductsResponse();
        this.request("DescribeGatewaySubProducts", req, resp, cb);
    }

    /**
     * 获取设备位置列表
     * @param {DescribeDevicePositionListRequest} req
     * @param {function(string, DescribeDevicePositionListResponse):void} cb
     * @public
     */
    DescribeDevicePositionList(req, cb) {
        let resp = new DescribeDevicePositionListResponse();
        this.request("DescribeDevicePositionList", req, resp, cb);
    }

    /**
     * 批量绑定子设备
     * @param {BindDevicesRequest} req
     * @param {function(string, BindDevicesResponse):void} cb
     * @public
     */
    BindDevices(req, cb) {
        let resp = new BindDevicesResponse();
        this.request("BindDevices", req, resp, cb);
    }

    /**
     * 用于新建批量生产设备
     * @param {CreateBatchProductionRequest} req
     * @param {function(string, CreateBatchProductionResponse):void} cb
     * @public
     */
    CreateBatchProduction(req, cb) {
        let resp = new CreateBatchProductionResponse();
        this.request("CreateBatchProduction", req, resp, cb);
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
     * 批量解绑子设备
     * @param {UnbindDevicesRequest} req
     * @param {function(string, UnbindDevicesResponse):void} cb
     * @public
     */
    UnbindDevices(req, cb) {
        let resp = new UnbindDevicesResponse();
        this.request("UnbindDevices", req, resp, cb);
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
     * 获取量产详情信息。
     * @param {DescribeBatchProductionRequest} req
     * @param {function(string, DescribeBatchProductionResponse):void} cb
     * @public
     */
    DescribeBatchProduction(req, cb) {
        let resp = new DescribeBatchProductionResponse();
        this.request("DescribeBatchProduction", req, resp, cb);
    }

    /**
     * 批量删除设备
     * @param {DeleteDevicesRequest} req
     * @param {function(string, DeleteDevicesResponse):void} cb
     * @public
     */
    DeleteDevices(req, cb) {
        let resp = new DeleteDevicesResponse();
        this.request("DeleteDevices", req, resp, cb);
    }

    /**
     * 获取指定网关设备的子设备列表
     * @param {GetGatewaySubDeviceListRequest} req
     * @param {function(string, GetGatewaySubDeviceListResponse):void} cb
     * @public
     */
    GetGatewaySubDeviceList(req, cb) {
        let resp = new GetGatewaySubDeviceListResponse();
        this.request("GetGatewaySubDeviceList", req, resp, cb);
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
     * 更新围栏
     * @param {ModifyPositionFenceRequest} req
     * @param {function(string, ModifyPositionFenceResponse):void} cb
     * @public
     */
    ModifyPositionFence(req, cb) {
        let resp = new ModifyPositionFenceResponse();
        this.request("ModifyPositionFence", req, resp, cb);
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
     * 获取围栏列表
     * @param {DescribePositionFenceListRequest} req
     * @param {function(string, DescribePositionFenceListResponse):void} cb
     * @public
     */
    DescribePositionFenceList(req, cb) {
        let resp = new DescribePositionFenceListResponse();
        this.request("DescribePositionFenceList", req, resp, cb);
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
     * 更新位置空间产品属性
     * @param {ModifySpacePropertyRequest} req
     * @param {function(string, ModifySpacePropertyResponse):void} cb
     * @public
     */
    ModifySpaceProperty(req, cb) {
        let resp = new ModifySpacePropertyResponse();
        this.request("ModifySpaceProperty", req, resp, cb);
    }

    /**
     * 本接口（DeleteTopicPolicy）用于删除Topic 
     * @param {DeleteTopicPolicyRequest} req
     * @param {function(string, DeleteTopicPolicyResponse):void} cb
     * @public
     */
    DeleteTopicPolicy(req, cb) {
        let resp = new DeleteTopicPolicyResponse();
        this.request("DeleteTopicPolicy", req, resp, cb);
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
     * 本接口（ListTopicPolicy）用于获取Topic列表
     * @param {ListTopicPolicyRequest} req
     * @param {function(string, ListTopicPolicyResponse):void} cb
     * @public
     */
    ListTopicPolicy(req, cb) {
        let resp = new ListTopicPolicyResponse();
        this.request("ListTopicPolicy", req, resp, cb);
    }

    /**
     * 无
     * @param {GenSingleDeviceSignatureOfPublicRequest} req
     * @param {function(string, GenSingleDeviceSignatureOfPublicResponse):void} cb
     * @public
     */
    GenSingleDeviceSignatureOfPublic(req, cb) {
        let resp = new GenSingleDeviceSignatureOfPublicResponse();
        this.request("GenSingleDeviceSignatureOfPublic", req, resp, cb);
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
     * 删除围栏
     * @param {DeletePositionFenceRequest} req
     * @param {function(string, DeletePositionFenceResponse):void} cb
     * @public
     */
    DeletePositionFence(req, cb) {
        let resp = new DeletePositionFenceResponse();
        this.request("DeletePositionFence", req, resp, cb);
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
     * 用于获取设备绑定的用户列表
     * @param {GetFamilyDeviceUserListRequest} req
     * @param {function(string, GetFamilyDeviceUserListResponse):void} cb
     * @public
     */
    GetFamilyDeviceUserList(req, cb) {
        let resp = new GetFamilyDeviceUserListResponse();
        this.request("GetFamilyDeviceUserList", req, resp, cb);
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
     * 创建位置空间
     * @param {CreatePositionSpaceRequest} req
     * @param {function(string, CreatePositionSpaceResponse):void} cb
     * @public
     */
    CreatePositionSpace(req, cb) {
        let resp = new CreatePositionSpaceResponse();
        this.request("CreatePositionSpace", req, resp, cb);
    }

    /**
     * 创建围栏绑定信息
     * @param {CreateFenceBindRequest} req
     * @param {function(string, CreateFenceBindResponse):void} cb
     * @public
     */
    CreateFenceBind(req, cb) {
        let resp = new CreateFenceBindResponse();
        this.request("CreateFenceBind", req, resp, cb);
    }


}
module.exports = IotexplorerClient;
