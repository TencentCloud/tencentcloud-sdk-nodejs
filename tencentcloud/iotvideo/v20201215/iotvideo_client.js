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
const DescribeCloudStorageDateRequest = models.DescribeCloudStorageDateRequest;
const CloudStorageTimeData = models.CloudStorageTimeData;
const CreateCloudStorageRequest = models.CreateCloudStorageRequest;
const VideoBatch = models.VideoBatch;
const ImportModelDefinitionResponse = models.ImportModelDefinitionResponse;
const DescribeModelDefinitionResponse = models.DescribeModelDefinitionResponse;
const CreateBatchRequest = models.CreateBatchRequest;
const DescribeCloudStorageTimeResponse = models.DescribeCloudStorageTimeResponse;
const DescribeProductsRequest = models.DescribeProductsRequest;
const DescribeDeviceEventHistoryResponse = models.DescribeDeviceEventHistoryResponse;
const DescribeDeviceActionHistoryRequest = models.DescribeDeviceActionHistoryRequest;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const ModifyProductResponse = models.ModifyProductResponse;
const ModifyProductRequest = models.ModifyProductRequest;
const ModifyModelDefinitionRequest = models.ModifyModelDefinitionRequest;
const DescribeBatchsResponse = models.DescribeBatchsResponse;
const TransferCloudStorageResponse = models.TransferCloudStorageResponse;
const DescribeForwardRuleResponse = models.DescribeForwardRuleResponse;
const DescribeBatchRequest = models.DescribeBatchRequest;
const CloudStorageTimeInfo = models.CloudStorageTimeInfo;
const ModifyDeviceRequest = models.ModifyDeviceRequest;
const ProductModelDefinition = models.ProductModelDefinition;
const ActionHistory = models.ActionHistory;
const DescribeFirmwareTaskStatisticsResponse = models.DescribeFirmwareTaskStatisticsResponse;
const DescribeFirmwareRequest = models.DescribeFirmwareRequest;
const DescribeProductRequest = models.DescribeProductRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const CheckForwardAuthRequest = models.CheckForwardAuthRequest;
const DescribeDeviceDataRequest = models.DescribeDeviceDataRequest;
const CreateBatchResponse = models.CreateBatchResponse;
const DescribeDeviceActionHistoryResponse = models.DescribeDeviceActionHistoryResponse;
const GetAllFirmwareVersionRequest = models.GetAllFirmwareVersionRequest;
const DeviceCommLogItem = models.DeviceCommLogItem;
const DeviceUpdateStatus = models.DeviceUpdateStatus;
const DeleteFirmwareResponse = models.DeleteFirmwareResponse;
const CreateForwardRuleResponse = models.CreateForwardRuleResponse;
const BatchUpdateFirmwareResponse = models.BatchUpdateFirmwareResponse;
const DeleteProductRequest = models.DeleteProductRequest;
const StatusStatistic = models.StatusStatistic;
const SetForwardAuthResponse = models.SetForwardAuthResponse;
const EditFirmwareRequest = models.EditFirmwareRequest;
const DeviceDataHistoryItem = models.DeviceDataHistoryItem;
const DescribeDeviceEventHistoryRequest = models.DescribeDeviceEventHistoryRequest;
const DescribeCategoryResponse = models.DescribeCategoryResponse;
const DescribeBalanceRequest = models.DescribeBalanceRequest;
const ImportModelDefinitionRequest = models.ImportModelDefinitionRequest;
const DescribeDeviceCommLogResponse = models.DescribeDeviceCommLogResponse;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const GenerateSignedVideoURLResponse = models.GenerateSignedVideoURLResponse;
const ListFirmwaresResponse = models.ListFirmwaresResponse;
const DescribeFirmwareTaskDevicesRequest = models.DescribeFirmwareTaskDevicesRequest;
const DescribeFirmwareResponse = models.DescribeFirmwareResponse;
const DescribeDeviceCommLogRequest = models.DescribeDeviceCommLogRequest;
const DeleteForwardRuleRequest = models.DeleteForwardRuleRequest;
const DescribeBalanceTransactionsRequest = models.DescribeBalanceTransactionsRequest;
const CreateProductResponse = models.CreateProductResponse;
const DescribeFirmwareTaskDevicesResponse = models.DescribeFirmwareTaskDevicesResponse;
const DescribeCloudStorageThumbnailResponse = models.DescribeCloudStorageThumbnailResponse;
const RetryDeviceFirmwareTaskResponse = models.RetryDeviceFirmwareTaskResponse;
const GenerateSignedVideoURLRequest = models.GenerateSignedVideoURLRequest;
const ResetCloudStorageResponse = models.ResetCloudStorageResponse;
const DescribeFirmwareTaskResponse = models.DescribeFirmwareTaskResponse;
const FirmwareInfo = models.FirmwareInfo;
const CreateProductRequest = models.CreateProductRequest;
const DescribeFirmwareTasksRequest = models.DescribeFirmwareTasksRequest;
const GetFirmwareURLResponse = models.GetFirmwareURLResponse;
const DescribeDeviceResponse = models.DescribeDeviceResponse;
const DescribeCloudStorageEventsRequest = models.DescribeCloudStorageEventsRequest;
const ListFirmwaresRequest = models.ListFirmwaresRequest;
const RetryDeviceFirmwareTaskRequest = models.RetryDeviceFirmwareTaskRequest;
const DescribeBalanceResponse = models.DescribeBalanceResponse;
const UploadFirmwareRequest = models.UploadFirmwareRequest;
const DescribeFirmwareTasksResponse = models.DescribeFirmwareTasksResponse;
const EditFirmwareResponse = models.EditFirmwareResponse;
const DescribeFirmwareTaskDistributionRequest = models.DescribeFirmwareTaskDistributionRequest;
const ProductTemplate = models.ProductTemplate;
const DeleteProductResponse = models.DeleteProductResponse;
const ModifyForwardRuleResponse = models.ModifyForwardRuleResponse;
const BalanceTransaction = models.BalanceTransaction;
const FirmwareTaskInfo = models.FirmwareTaskInfo;
const DescribeFirmwareTaskDistributionResponse = models.DescribeFirmwareTaskDistributionResponse;
const DescribeBatchResponse = models.DescribeBatchResponse;
const DescribeDeviceRequest = models.DescribeDeviceRequest;
const ModifyForwardRuleRequest = models.ModifyForwardRuleRequest;
const DescribeCloudStorageEventsResponse = models.DescribeCloudStorageEventsResponse;
const VideoProduct = models.VideoProduct;
const CloudStorageEvent = models.CloudStorageEvent;
const DescribeCloudStorageDateResponse = models.DescribeCloudStorageDateResponse;
const DescribeForwardRuleRequest = models.DescribeForwardRuleRequest;
const UploadFirmwareResponse = models.UploadFirmwareResponse;
const CreateCloudStorageResponse = models.CreateCloudStorageResponse;
const CancelDeviceFirmwareTaskRequest = models.CancelDeviceFirmwareTaskRequest;
const CancelDeviceFirmwareTaskResponse = models.CancelDeviceFirmwareTaskResponse;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DescribeDeviceDataHistoryRequest = models.DescribeDeviceDataHistoryRequest;
const EventHistoryItem = models.EventHistoryItem;
const CreateForwardRuleRequest = models.CreateForwardRuleRequest;
const CreateTaskFileUrlResponse = models.CreateTaskFileUrlResponse;
const SetForwardAuthRequest = models.SetForwardAuthRequest;
const DescribeBalanceTransactionsResponse = models.DescribeBalanceTransactionsResponse;
const ModifyDeviceResponse = models.ModifyDeviceResponse;
const CreateTaskFileUrlRequest = models.CreateTaskFileUrlRequest;
const BatchUpdateFirmwareRequest = models.BatchUpdateFirmwareRequest;
const DescribeCloudStorageThumbnailRequest = models.DescribeCloudStorageThumbnailRequest;
const GetFirmwareURLRequest = models.GetFirmwareURLRequest;
const DescribeCloudStorageResponse = models.DescribeCloudStorageResponse;
const DescribeProductResponse = models.DescribeProductResponse;
const DescribeCategoryRequest = models.DescribeCategoryRequest;
const DeleteFirmwareRequest = models.DeleteFirmwareRequest;
const DescribeCloudStorageRequest = models.DescribeCloudStorageRequest;
const GetAllFirmwareVersionResponse = models.GetAllFirmwareVersionResponse;
const DescribeDeviceDataHistoryResponse = models.DescribeDeviceDataHistoryResponse;
const SearchKeyword = models.SearchKeyword;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const DescribeModelDefinitionRequest = models.DescribeModelDefinitionRequest;
const CheckForwardAuthResponse = models.CheckForwardAuthResponse;
const DescribeDeviceDataResponse = models.DescribeDeviceDataResponse;
const DeleteForwardRuleResponse = models.DeleteForwardRuleResponse;
const TransferCloudStorageRequest = models.TransferCloudStorageRequest;
const DescribeFirmwareTaskStatisticsRequest = models.DescribeFirmwareTaskStatisticsRequest;
const DescribeBatchsRequest = models.DescribeBatchsRequest;
const DeviceInfo = models.DeviceInfo;
const ModifyModelDefinitionResponse = models.ModifyModelDefinitionResponse;
const ResetCloudStorageRequest = models.ResetCloudStorageRequest;
const DescribeFirmwareTaskRequest = models.DescribeFirmwareTaskRequest;
const DescribeCloudStorageTimeRequest = models.DescribeCloudStorageTimeRequest;


/**
 * iotvideo client
 * @class
 */
class IotvideoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotvideo.tencentcloudapi.com", "2020-12-15", credential, region, profile);
    }
    
    /**
     * 获取产品列表
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * 获取设备在指定时间范围内的通讯日志
     * @param {DescribeDeviceCommLogRequest} req
     * @param {function(string, DescribeDeviceCommLogResponse):void} cb
     * @public
     */
    DescribeDeviceCommLog(req, cb) {
        let resp = new DescribeDeviceCommLogResponse();
        this.request("DescribeDeviceCommLog", req, resp, cb);
    }

    /**
     * 判断是否开启的转发的权限
     * @param {CheckForwardAuthRequest} req
     * @param {function(string, CheckForwardAuthResponse):void} cb
     * @public
     */
    CheckForwardAuth(req, cb) {
        let resp = new CheckForwardAuthResponse();
        this.request("CheckForwardAuth", req, resp, cb);
    }

    /**
     * 获取设备属性数据
     * @param {DescribeDeviceDataRequest} req
     * @param {function(string, DescribeDeviceDataResponse):void} cb
     * @public
     */
    DescribeDeviceData(req, cb) {
        let resp = new DescribeDeviceDataResponse();
        this.request("DescribeDeviceData", req, resp, cb);
    }

    /**
     * 修改产品信息
     * @param {ModifyProductRequest} req
     * @param {function(string, ModifyProductResponse):void} cb
     * @public
     */
    ModifyProduct(req, cb) {
        let resp = new ModifyProductResponse();
        this.request("ModifyProduct", req, resp, cb);
    }

    /**
     * 转移云存服务
     * @param {TransferCloudStorageRequest} req
     * @param {function(string, TransferCloudStorageResponse):void} cb
     * @public
     */
    TransferCloudStorage(req, cb) {
        let resp = new TransferCloudStorageResponse();
        this.request("TransferCloudStorage", req, resp, cb);
    }

    /**
     * 本接口（DescribeFirmware）用于查询固件信息
     * @param {DescribeFirmwareRequest} req
     * @param {function(string, DescribeFirmwareResponse):void} cb
     * @public
     */
    DescribeFirmware(req, cb) {
        let resp = new DescribeFirmwareResponse();
        this.request("DescribeFirmware", req, resp, cb);
    }

    /**
     * 获取具有云存的日期
     * @param {DescribeCloudStorageDateRequest} req
     * @param {function(string, DescribeCloudStorageDateResponse):void} cb
     * @public
     */
    DescribeCloudStorageDate(req, cb) {
        let resp = new DescribeCloudStorageDateResponse();
        this.request("DescribeCloudStorageDate", req, resp, cb);
    }

    /**
     * 本接口用于重试设备升级任务
     * @param {RetryDeviceFirmwareTaskRequest} req
     * @param {function(string, RetryDeviceFirmwareTaskResponse):void} cb
     * @public
     */
    RetryDeviceFirmwareTask(req, cb) {
        let resp = new RetryDeviceFirmwareTaskResponse();
        this.request("RetryDeviceFirmwareTask", req, resp, cb);
    }

    /**
     * 查看设备详情
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        let resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }

    /**
     * 获取产品详情
     * @param {DescribeProductRequest} req
     * @param {function(string, DescribeProductResponse):void} cb
     * @public
     */
    DescribeProduct(req, cb) {
        let resp = new DescribeProductResponse();
        this.request("DescribeProduct", req, resp, cb);
    }

    /**
     * 获取批次详情
     * @param {DescribeBatchRequest} req
     * @param {function(string, DescribeBatchResponse):void} cb
     * @public
     */
    DescribeBatch(req, cb) {
        let resp = new DescribeBatchResponse();
        this.request("DescribeBatch", req, resp, cb);
    }

    /**
     * 修改设备信息
     * @param {ModifyDeviceRequest} req
     * @param {function(string, ModifyDeviceResponse):void} cb
     * @public
     */
    ModifyDevice(req, cb) {
        let resp = new ModifyDeviceResponse();
        this.request("ModifyDevice", req, resp, cb);
    }

    /**
     * 修改转发规则
     * @param {ModifyForwardRuleRequest} req
     * @param {function(string, ModifyForwardRuleResponse):void} cb
     * @public
     */
    ModifyForwardRule(req, cb) {
        let resp = new ModifyForwardRuleResponse();
        this.request("ModifyForwardRule", req, resp, cb);
    }

    /**
     * 获取设备云存服务详情
     * @param {DescribeCloudStorageRequest} req
     * @param {function(string, DescribeCloudStorageResponse):void} cb
     * @public
     */
    DescribeCloudStorage(req, cb) {
        let resp = new DescribeCloudStorageResponse();
        this.request("DescribeCloudStorage", req, resp, cb);
    }

    /**
     * 获取批次列表
     * @param {DescribeBatchsRequest} req
     * @param {function(string, DescribeBatchsResponse):void} cb
     * @public
     */
    DescribeBatchs(req, cb) {
        let resp = new DescribeBatchsResponse();
        this.request("DescribeBatchs", req, resp, cb);
    }

    /**
     * 本接口（BatchUpdateFirmware）用于批量更新设备固件 
     * @param {BatchUpdateFirmwareRequest} req
     * @param {function(string, BatchUpdateFirmwareResponse):void} cb
     * @public
     */
    BatchUpdateFirmware(req, cb) {
        let resp = new BatchUpdateFirmwareResponse();
        this.request("BatchUpdateFirmware", req, resp, cb);
    }

    /**
     * 创建产品
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        let resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }

    /**
     * 为用户提供获取动作历史的能力。
     * @param {DescribeDeviceActionHistoryRequest} req
     * @param {function(string, DescribeDeviceActionHistoryResponse):void} cb
     * @public
     */
    DescribeDeviceActionHistory(req, cb) {
        let resp = new DescribeDeviceActionHistoryResponse();
        this.request("DescribeDeviceActionHistory", req, resp, cb);
    }

    /**
     * 拉取账户流水
     * @param {DescribeBalanceTransactionsRequest} req
     * @param {function(string, DescribeBalanceTransactionsResponse):void} cb
     * @public
     */
    DescribeBalanceTransactions(req, cb) {
        let resp = new DescribeBalanceTransactionsResponse();
        this.request("DescribeBalanceTransactions", req, resp, cb);
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
     * 删除转发规则
     * @param {DeleteForwardRuleRequest} req
     * @param {function(string, DeleteForwardRuleResponse):void} cb
     * @public
     */
    DeleteForwardRule(req, cb) {
        let resp = new DeleteForwardRuleResponse();
        this.request("DeleteForwardRule", req, resp, cb);
    }

    /**
     * 创建批次
     * @param {CreateBatchRequest} req
     * @param {function(string, CreateBatchResponse):void} cb
     * @public
     */
    CreateBatch(req, cb) {
        let resp = new CreateBatchResponse();
        this.request("CreateBatch", req, resp, cb);
    }

    /**
     * 本接口用于查询固件升级任务统计信息
     * @param {DescribeFirmwareTaskStatisticsRequest} req
     * @param {function(string, DescribeFirmwareTaskStatisticsResponse):void} cb
     * @public
     */
    DescribeFirmwareTaskStatistics(req, cb) {
        let resp = new DescribeFirmwareTaskStatisticsResponse();
        this.request("DescribeFirmwareTaskStatistics", req, resp, cb);
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
     * 本接口（UploadFirmware）用于上传设备固件信息 
     * @param {UploadFirmwareRequest} req
     * @param {function(string, UploadFirmwareResponse):void} cb
     * @public
     */
    UploadFirmware(req, cb) {
        let resp = new UploadFirmwareResponse();
        this.request("UploadFirmware", req, resp, cb);
    }

    /**
     * 本接口（GetFirmwareURL）用于获取固件存储的URL 
     * @param {GetFirmwareURLRequest} req
     * @param {function(string, GetFirmwareURLResponse):void} cb
     * @public
     */
    GetFirmwareURL(req, cb) {
        let resp = new GetFirmwareURLResponse();
        this.request("GetFirmwareURL", req, resp, cb);
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
     * 开通云存服务
     * @param {CreateCloudStorageRequest} req
     * @param {function(string, CreateCloudStorageResponse):void} cb
     * @public
     */
    CreateCloudStorage(req, cb) {
        let resp = new CreateCloudStorageResponse();
        this.request("CreateCloudStorage", req, resp, cb);
    }

    /**
     * 获取视频防盗链播放URL
     * @param {GenerateSignedVideoURLRequest} req
     * @param {function(string, GenerateSignedVideoURLResponse):void} cb
     * @public
     */
    GenerateSignedVideoURL(req, cb) {
        let resp = new GenerateSignedVideoURLResponse();
        this.request("GenerateSignedVideoURL", req, resp, cb);
    }

    /**
     * 设置转发权限
     * @param {SetForwardAuthRequest} req
     * @param {function(string, SetForwardAuthResponse):void} cb
     * @public
     */
    SetForwardAuth(req, cb) {
        let resp = new SetForwardAuthResponse();
        this.request("SetForwardAuth", req, resp, cb);
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
     * 本接口用于编辑固件信息
     * @param {EditFirmwareRequest} req
     * @param {function(string, EditFirmwareResponse):void} cb
     * @public
     */
    EditFirmware(req, cb) {
        let resp = new EditFirmwareResponse();
        this.request("EditFirmware", req, resp, cb);
    }

    /**
     * 获取Category详情
     * @param {DescribeCategoryRequest} req
     * @param {function(string, DescribeCategoryResponse):void} cb
     * @public
     */
    DescribeCategory(req, cb) {
        let resp = new DescribeCategoryResponse();
        this.request("DescribeCategory", req, resp, cb);
    }

    /**
     * 本接口用于查询固件升级任务状态分布
     * @param {DescribeFirmwareTaskDistributionRequest} req
     * @param {function(string, DescribeFirmwareTaskDistributionResponse):void} cb
     * @public
     */
    DescribeFirmwareTaskDistribution(req, cb) {
        let resp = new DescribeFirmwareTaskDistributionResponse();
        this.request("DescribeFirmwareTaskDistribution", req, resp, cb);
    }

    /**
     * 删除产品
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        let resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }

    /**
     * 获取设备的历史事件
     * @param {DescribeDeviceEventHistoryRequest} req
     * @param {function(string, DescribeDeviceEventHistoryResponse):void} cb
     * @public
     */
    DescribeDeviceEventHistory(req, cb) {
        let resp = new DescribeDeviceEventHistoryResponse();
        this.request("DescribeDeviceEventHistory", req, resp, cb);
    }

    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     * @param {CreateTaskFileUrlRequest} req
     * @param {function(string, CreateTaskFileUrlResponse):void} cb
     * @public
     */
    CreateTaskFileUrl(req, cb) {
        let resp = new CreateTaskFileUrlResponse();
        this.request("CreateTaskFileUrl", req, resp, cb);
    }

    /**
     * 此接口查询固件升级任务详情
     * @param {DescribeFirmwareTaskRequest} req
     * @param {function(string, DescribeFirmwareTaskResponse):void} cb
     * @public
     */
    DescribeFirmwareTask(req, cb) {
        let resp = new DescribeFirmwareTaskResponse();
        this.request("DescribeFirmwareTask", req, resp, cb);
    }

    /**
     * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
     * @param {ImportModelDefinitionRequest} req
     * @param {function(string, ImportModelDefinitionResponse):void} cb
     * @public
     */
    ImportModelDefinition(req, cb) {
        let resp = new ImportModelDefinitionResponse();
        this.request("ImportModelDefinition", req, resp, cb);
    }

    /**
     * 重置云存服务
     * @param {ResetCloudStorageRequest} req
     * @param {function(string, ResetCloudStorageResponse):void} cb
     * @public
     */
    ResetCloudStorage(req, cb) {
        let resp = new ResetCloudStorageResponse();
        this.request("ResetCloudStorage", req, resp, cb);
    }

    /**
     * 拉取云存事件列表
     * @param {DescribeCloudStorageEventsRequest} req
     * @param {function(string, DescribeCloudStorageEventsResponse):void} cb
     * @public
     */
    DescribeCloudStorageEvents(req, cb) {
        let resp = new DescribeCloudStorageEventsResponse();
        this.request("DescribeCloudStorageEvents", req, resp, cb);
    }

    /**
     * 本接口用于查询固件升级任务的设备列表
     * @param {DescribeFirmwareTaskDevicesRequest} req
     * @param {function(string, DescribeFirmwareTaskDevicesResponse):void} cb
     * @public
     */
    DescribeFirmwareTaskDevices(req, cb) {
        let resp = new DescribeFirmwareTaskDevicesResponse();
        this.request("DescribeFirmwareTaskDevices", req, resp, cb);
    }

    /**
     * 本接口用于取消设备升级任务
     * @param {CancelDeviceFirmwareTaskRequest} req
     * @param {function(string, CancelDeviceFirmwareTaskResponse):void} cb
     * @public
     */
    CancelDeviceFirmwareTask(req, cb) {
        let resp = new CancelDeviceFirmwareTaskResponse();
        this.request("CancelDeviceFirmwareTask", req, resp, cb);
    }

    /**
     * 获取某一天云存时间轴
     * @param {DescribeCloudStorageTimeRequest} req
     * @param {function(string, DescribeCloudStorageTimeResponse):void} cb
     * @public
     */
    DescribeCloudStorageTime(req, cb) {
        let resp = new DescribeCloudStorageTimeResponse();
        this.request("DescribeCloudStorageTime", req, resp, cb);
    }

    /**
     * 获取产品转发规则
     * @param {DescribeForwardRuleRequest} req
     * @param {function(string, DescribeForwardRuleResponse):void} cb
     * @public
     */
    DescribeForwardRule(req, cb) {
        let resp = new DescribeForwardRuleResponse();
        this.request("DescribeForwardRule", req, resp, cb);
    }

    /**
     * 创建转发规则
     * @param {CreateForwardRuleRequest} req
     * @param {function(string, CreateForwardRuleResponse):void} cb
     * @public
     */
    CreateForwardRule(req, cb) {
        let resp = new CreateForwardRuleResponse();
        this.request("CreateForwardRule", req, resp, cb);
    }

    /**
     * 本接口（GetAllFirmwareVersion）用于获取所有的版本列表 
     * @param {GetAllFirmwareVersionRequest} req
     * @param {function(string, GetAllFirmwareVersionResponse):void} cb
     * @public
     */
    GetAllFirmwareVersion(req, cb) {
        let resp = new GetAllFirmwareVersionResponse();
        this.request("GetAllFirmwareVersion", req, resp, cb);
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
     * 查询账户余额
     * @param {DescribeBalanceRequest} req
     * @param {function(string, DescribeBalanceResponse):void} cb
     * @public
     */
    DescribeBalance(req, cb) {
        let resp = new DescribeBalanceResponse();
        this.request("DescribeBalance", req, resp, cb);
    }

    /**
     * 获取设备列表
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }

    /**
     * 本接口（DeleteFirmware）用于删除固件 
     * @param {DeleteFirmwareRequest} req
     * @param {function(string, DeleteFirmwareResponse):void} cb
     * @public
     */
    DeleteFirmware(req, cb) {
        let resp = new DeleteFirmwareResponse();
        this.request("DeleteFirmware", req, resp, cb);
    }

    /**
     * 本接口用于查询固件升级任务列表
     * @param {DescribeFirmwareTasksRequest} req
     * @param {function(string, DescribeFirmwareTasksResponse):void} cb
     * @public
     */
    DescribeFirmwareTasks(req, cb) {
        let resp = new DescribeFirmwareTasksResponse();
        this.request("DescribeFirmwareTasks", req, resp, cb);
    }

    /**
     * 拉取云存事件缩略图
     * @param {DescribeCloudStorageThumbnailRequest} req
     * @param {function(string, DescribeCloudStorageThumbnailResponse):void} cb
     * @public
     */
    DescribeCloudStorageThumbnail(req, cb) {
        let resp = new DescribeCloudStorageThumbnailResponse();
        this.request("DescribeCloudStorageThumbnail", req, resp, cb);
    }


}
module.exports = IotvideoClient;
