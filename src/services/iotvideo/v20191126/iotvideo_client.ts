/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeRechargeRecordsResponse,
  UploadOtaVersionResponse,
  CreateGencodeResponse,
  DescribeLogsRequest,
  CreateIotDataTypeRequest,
  DescribePubVersionsRequest,
  RefundStorageServiceResponse,
  DescribeIotModelResponse,
  DisableDeviceResponse,
  DescribeRunLogRequest,
  DescribeProductsRequest,
  DeleteTraceIdsRequest,
  IotModelData,
  CreateStorageServiceRequest,
  DescribeDevicesResponse,
  ModifyProductResponse,
  ModifyProductRequest,
  DisableDeviceStreamRequest,
  CreateIotModelRequest,
  DescribeTraceStatusResponse,
  CreateUploadPathRequest,
  CreateDevTokenRequest,
  DescribeStorageServiceResponse,
  DeleteIotDataTypeRequest,
  DescribeRechargeRecordsRequest,
  ModifyVerContentResponse,
  DescribeMessageQueueRequest,
  DeleteAppUsrResponse,
  DescribeRegistrationStatusResponse,
  DescribeProductRequest,
  DescribeProductsResponse,
  OsData,
  DeviceCertificate,
  UpgradeDeviceRequest,
  LogData,
  DescribeModelDataRetResponse,
  CreateDevTokenResponse,
  RunIotModelResponse,
  RunIotModelRequest,
  OtaPubHistory,
  DeleteProductRequest,
  DescribeBindUsrResponse,
  DeviceData,
  DescribeStreamRequest,
  BindUsrInfo,
  DeleteOtaVersionRequest,
  DescribeIotDataTypeResponse,
  ProductData,
  CreateBindingRequest,
  DeleteDeviceRequest,
  TraceStatus,
  CreateAppUsrRequest,
  ModifyDevicePropertyRequest,
  RunDeviceStreamRequest,
  RunDeviceResponse,
  DeleteIotDataTypeResponse,
  DescribeTraceStatusRequest,
  CreateUsrTokenResponse,
  DevTokenInfo,
  CreateTraceIdsRequest,
  DeleteMessageQueueResponse,
  DescribeOtaVersionsRequest,
  DescribeTraceIdsResponse,
  ClearDeviceActiveCodeResponse,
  CreateProductResponse,
  DescribeRegistrationStatusRequest,
  CreateStorageRequest,
  UpgradeDeviceResponse,
  DisableOtaVersionResponse,
  DescribeBindDevResponse,
  CreateProductRequest,
  SystemType,
  RunTestOtaVersionResponse,
  RunTestOtaVersionRequest,
  DescribeDeviceResponse,
  SetMessageQueueResponse,
  RenewUploadTestResponse,
  Contents,
  RenewCertificate,
  DeleteOtaVersionResponse,
  UploadOtaVersionRequest,
  DescribeIotModelsRequest,
  DescribeModelDataRetRequest,
  CreateTraceIdsResponse,
  DescribeOsListResponse,
  CosCertificate,
  ModifyVerContentRequest,
  DeleteBindingRequest,
  DescribeOtaVersionsResponse,
  DeleteProductResponse,
  RunOtaVersionRequest,
  CreateDevicesResponse,
  DeviceModelData,
  SetMessageQueueRequest,
  CreateStorageServiceResponse,
  DescribeIotDataTypeRequest,
  SendOnlineMsgRequest,
  Data,
  DescribeDeviceRequest,
  CertificateInfo,
  DescribeRunLogResponse,
  DeliverStorageServiceResponse,
  DescribeIotModelRequest,
  DescribeTraceIdsRequest,
  CreateAppUsrResponse,
  DeleteTraceIdsResponse,
  DeleteMessageQueueRequest,
  CreateUsrTokenRequest,
  RunDeviceRequest,
  RunOtaVersionResponse,
  ModifyDeviceRequest,
  DescribeDeviceModelResponse,
  DescribeStorageServiceRequest,
  ProductBase,
  CreateGencodeRequest,
  DescribePubVersionsResponse,
  ClearDeviceActiveCodeRequest,
  ModifyDeviceActionRequest,
  CreateIotModelResponse,
  BindDevInfo,
  DescribeBindDevRequest,
  StorageOrder,
  RenewUploadTestRequest,
  MsgQueueData,
  RegisteredStatus,
  CreateAnonymousAccessTokenRequest,
  DeliverStorageServiceRequest,
  RunDeviceStreamResponse,
  ModifyDeviceResponse,
  DescribeDeviceModelRequest,
  DescribeLogsResponse,
  ModifyDeviceActionResponse,
  CreateBindingResponse,
  DescribeAccountBalanceRequest,
  CreateDevicesRequest,
  DisableDeviceRequest,
  DescribeStreamResponse,
  DescribeAccountBalanceResponse,
  DisableOtaVersionRequest,
  DescribeProductResponse,
  CreateAnonymousAccessTokenResponse,
  DescribeBindUsrRequest,
  SendOnlineMsgResponse,
  DeleteAppUsrRequest,
  DescribeIotModelsResponse,
  DescribeMessageQueueResponse,
  DescribeOsListRequest,
  DescribeDevicesRequest,
  CreateUploadTestResponse,
  CreateIotDataTypeResponse,
  ModifyDevicePropertyResponse,
  CreateUploadTestRequest,
  DeleteBindingResponse,
  RefundStorageServiceRequest,
  CreateStorageResponse,
  DisableDeviceStreamResponse,
  DeleteDeviceResponse,
  CreateUploadPathResponse,
  RechargeRecord,
  VersionData,
  DevicesData,
} from "./iotvideo_models"

/**
 * iotvideo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotvideo.tencentcloudapi.com", "2019-11-26", clientConfig)
  }

  /**
   * 本接口（DescribeOtaVersions）用于查询固件版本信息列表。
   */
  async DescribeOtaVersions(
    req: DescribeOtaVersionsRequest,
    cb?: (error: string, rep: DescribeOtaVersionsResponse) => void
  ): Promise<DescribeOtaVersionsResponse> {
    return this.request("DescribeOtaVersions", req, cb)
  }

  /**
   * 本接口（DisableOtaVersion）用于禁用固件版本。
   */
  async DisableOtaVersion(
    req: DisableOtaVersionRequest,
    cb?: (error: string, rep: DisableOtaVersionResponse) => void
  ): Promise<DisableOtaVersionResponse> {
    return this.request("DisableOtaVersion", req, cb)
  }

  /**
   * 设备申请cos上传证书
   */
  async CreateUploadTest(
    req: CreateUploadTestRequest,
    cb?: (error: string, rep: CreateUploadTestResponse) => void
  ): Promise<CreateUploadTestResponse> {
    return this.request("CreateUploadTest", req, cb)
  }

  /**
   * 清除设备激活码
   */
  async ClearDeviceActiveCode(
    req: ClearDeviceActiveCodeRequest,
    cb?: (error: string, rep: ClearDeviceActiveCodeResponse) => void
  ): Promise<ClearDeviceActiveCodeResponse> {
    return this.request("ClearDeviceActiveCode", req, cb)
  }

  /**
   * 本接口（DescribeIotDataType）用于查询自定义的物模型数据类型。
   */
  async DescribeIotDataType(
    req: DescribeIotDataTypeRequest,
    cb?: (error: string, rep: DescribeIotDataTypeResponse) => void
  ): Promise<DescribeIotDataTypeResponse> {
    return this.request("DescribeIotDataType", req, cb)
  }

  /**
   * 本接口（DisableDevice）用于禁用设备，可进行批量操作，每次操作最多100台设备。
   */
  async DisableDevice(
    req: DisableDeviceRequest,
    cb?: (error: string, rep: DisableDeviceResponse) => void
  ): Promise<DisableDeviceResponse> {
    return this.request("DisableDevice", req, cb)
  }

  /**
   * 本接口（DeleteTraceIds）用于将设备从日志跟踪白名单中删除，该接口可批量操作，最多支持同时操作100台设备。
   */
  async DeleteTraceIds(
    req: DeleteTraceIdsRequest,
    cb?: (error: string, rep: DeleteTraceIdsResponse) => void
  ): Promise<DeleteTraceIdsResponse> {
    return this.request("DeleteTraceIds", req, cb)
  }

  /**
   * 本接口（RunOtaVersion）用于固件版本正式发布。
   */
  async RunOtaVersion(
    req: RunOtaVersionRequest,
    cb?: (error: string, rep: RunOtaVersionResponse) => void
  ): Promise<RunOtaVersionResponse> {
    return this.request("RunOtaVersion", req, cb)
  }

  /**
   * 本接口（DescribeDevice）获取设备信息。
   */
  async DescribeDevice(
    req: DescribeDeviceRequest,
    cb?: (error: string, rep: DescribeDeviceResponse) => void
  ): Promise<DescribeDeviceResponse> {
    return this.request("DescribeDevice", req, cb)
  }

  /**
   * 本接口（RunTestOtaVersion）用于固件版本测试发布。
   */
  async RunTestOtaVersion(
    req: RunTestOtaVersionRequest,
    cb?: (error: string, rep: RunTestOtaVersionResponse) => void
  ): Promise<RunTestOtaVersionResponse> {
    return this.request("RunTestOtaVersion", req, cb)
  }

  /**
   * 本接口（DescribeProduct）用于获取单个产品的详细信息。
   */
  async DescribeProduct(
    req: DescribeProductRequest,
    cb?: (error: string, rep: DescribeProductResponse) => void
  ): Promise<DescribeProductResponse> {
    return this.request("DescribeProduct", req, cb)
  }

  /**
     * 本接口（SendOnlineMsg）用于向设备发送在线消息。
注意：
若设备当前不在线,会直接返回错误;
若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒.waitresp非0情况下,会导致本接口阻塞3秒。
     */
  async SendOnlineMsg(
    req: SendOnlineMsgRequest,
    cb?: (error: string, rep: SendOnlineMsgResponse) => void
  ): Promise<SendOnlineMsgResponse> {
    return this.request("SendOnlineMsg", req, cb)
  }

  /**
   * 本接口（RunIotModel）用于对定义的物模型进行发布。
   */
  async RunIotModel(
    req: RunIotModelRequest,
    cb?: (error: string, rep: RunIotModelResponse) => void
  ): Promise<RunIotModelResponse> {
    return this.request("RunIotModel", req, cb)
  }

  /**
   * 修改设备信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 本接口（CreateIotDataType）用于创建自定义物模型数据类型。
   */
  async CreateIotDataType(
    req: CreateIotDataTypeRequest,
    cb?: (error: string, rep: CreateIotDataTypeResponse) => void
  ): Promise<CreateIotDataTypeResponse> {
    return this.request("CreateIotDataType", req, cb)
  }

  /**
   * 创建匿名访问Token
   */
  async CreateAnonymousAccessToken(
    req: CreateAnonymousAccessTokenRequest,
    cb?: (error: string, rep: CreateAnonymousAccessTokenResponse) => void
  ): Promise<CreateAnonymousAccessTokenResponse> {
    return this.request("CreateAnonymousAccessToken", req, cb)
  }

  /**
     * 本接口（CreateDevices）用于批量创建新的物联网视频通信设备。
注意：腾讯云不会对设备私钥进行保存，请自行保管好您的设备私钥。
     */
  async CreateDevices(
    req: CreateDevicesRequest,
    cb?: (error: string, rep: CreateDevicesResponse) => void
  ): Promise<CreateDevicesResponse> {
    return this.request("CreateDevices", req, cb)
  }

  /**
   * 本接口（CreateProduct）用于创建一个新的物联网智能视频产品。
   */
  async CreateProduct(
    req: CreateProductRequest,
    cb?: (error: string, rep: CreateProductResponse) => void
  ): Promise<CreateProductResponse> {
    return this.request("CreateProduct", req, cb)
  }

  /**
     * 本接口（CreateIotModel）用于定义的物模型提交。
该接口实现了物模型草稿箱的功能，保存用户最后一次编辑的物模型数据。
     */
  async CreateIotModel(
    req: CreateIotModelRequest,
    cb?: (error: string, rep: CreateIotModelResponse) => void
  ): Promise<CreateIotModelResponse> {
    return this.request("CreateIotModel", req, cb)
  }

  /**
   * 本接口（DeleteIotDataType）用于删除自定义物模型数据类型。
   */
  async DeleteIotDataType(
    req: DeleteIotDataTypeRequest,
    cb?: (error: string, rep: DeleteIotDataTypeResponse) => void
  ): Promise<DeleteIotDataTypeResponse> {
    return this.request("DeleteIotDataType", req, cb)
  }

  /**
   * 本接口（DescribeMessageQueue）用于查询物联网智能视频产品转发消息配置。
   */
  async DescribeMessageQueue(
    req: DescribeMessageQueueRequest,
    cb?: (error: string, rep: DescribeMessageQueueResponse) => void
  ): Promise<DescribeMessageQueueResponse> {
    return this.request("DescribeMessageQueue", req, cb)
  }

  /**
   * 本接口（DescribeIotModel）用于获取物模型定义详情。
   */
  async DescribeIotModel(
    req: DescribeIotModelRequest,
    cb?: (error: string, rep: DescribeIotModelResponse) => void
  ): Promise<DescribeIotModelResponse> {
    return this.request("DescribeIotModel", req, cb)
  }

  /**
     * 本接口（ModifyDeviceAction）用于修改设备物模型的行为（Action）。

可对ctlVal数据属性进行写入,如:Action.takePhoto.ctlVal,设备在线且成功发送到设备才返回,物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
注意:
  1.若设备当前不在线,会直接返回错误
  2.若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒
  3.value的内容必须与实际物模型的定义一致
     */
  async ModifyDeviceAction(
    req: ModifyDeviceActionRequest,
    cb?: (error: string, rep: ModifyDeviceActionResponse) => void
  ): Promise<ModifyDeviceActionResponse> {
    return this.request("ModifyDeviceAction", req, cb)
  }

  /**
   * 本接口（DescribeProducts）用于列出用户账号下的物联网智能视频产品列表。
   */
  async DescribeProducts(
    req: DescribeProductsRequest,
    cb?: (error: string, rep: DescribeProductsResponse) => void
  ): Promise<DescribeProductsResponse> {
    return this.request("DescribeProducts", req, cb)
  }

  /**
   * 本接口（CreateTraceIds）用于将设备加到日志跟踪白名单。
   */
  async CreateTraceIds(
    req: CreateTraceIdsRequest,
    cb?: (error: string, rep: CreateTraceIdsResponse) => void
  ): Promise<CreateTraceIdsResponse> {
    return this.request("CreateTraceIds", req, cb)
  }

  /**
   * 本接口（DescribeBindUsr）用于查询设备被分享的所有用户列表。
   */
  async DescribeBindUsr(
    req: DescribeBindUsrRequest,
    cb?: (error: string, rep: DescribeBindUsrResponse) => void
  ): Promise<DescribeBindUsrResponse> {
    return this.request("DescribeBindUsr", req, cb)
  }

  /**
   * 本接口（CreateAppUsr）用于接收由厂商云发送过来的注册请求,建立厂商云终端用户与IoT Video终端用户的映射关系。
   */
  async CreateAppUsr(
    req: CreateAppUsrRequest,
    cb?: (error: string, rep: CreateAppUsrResponse) => void
  ): Promise<CreateAppUsrResponse> {
    return this.request("CreateAppUsr", req, cb)
  }

  /**
     * 本接口（CreateBinding）用于终端用户和设备进行绑定，具体的应用场景如下：
    终端用户与设备具有“强关联”关系。用户与设备绑定之后，用户终端即具备了该设备的访问权限,访问或操作设备时，无需获取设备访问Token。
     */
  async CreateBinding(
    req: CreateBindingRequest,
    cb?: (error: string, rep: CreateBindingResponse) => void
  ): Promise<CreateBindingResponse> {
    return this.request("CreateBinding", req, cb)
  }

  /**
     * 本接口（CreateDevToken）用于以下场景：
终端用户与设备没有强绑定关联关系;
允许终端用户短时或一次性临时访问设备;
当终端用户与设备有强绑定关系时，可以不用调用此接口
     */
  async CreateDevToken(
    req: CreateDevTokenRequest,
    cb?: (error: string, rep: CreateDevTokenResponse) => void
  ): Promise<CreateDevTokenResponse> {
    return this.request("CreateDevToken", req, cb)
  }

  /**
   * 本接口（DeleteDevice）用于删除设备，可进行批量操作，每次操作最多100台设备。
   */
  async DeleteDevice(
    req: DeleteDeviceRequest,
    cb?: (error: string, rep: DeleteDeviceResponse) => void
  ): Promise<DeleteDeviceResponse> {
    return this.request("DeleteDevice", req, cb)
  }

  /**
   * 本接口（DeleteAppUsr）用于删除终端用户。
   */
  async DeleteAppUsr(
    req: DeleteAppUsrRequest,
    cb?: (error: string, rep: DeleteAppUsrResponse) => void
  ): Promise<DeleteAppUsrResponse> {
    return this.request("DeleteAppUsr", req, cb)
  }

  /**
   * 客户可通过本接口获取充值记录信息, 一次最多返回50条记录。
   */
  async DescribeRechargeRecords(
    req: DescribeRechargeRecordsRequest,
    cb?: (error: string, rep: DescribeRechargeRecordsResponse) => void
  ): Promise<DescribeRechargeRecordsResponse> {
    return this.request("DescribeRechargeRecords", req, cb)
  }

  /**
   * 本接口（ModifyProduct）用于编辑物联网智能视频产品的相关信息。
   */
  async ModifyProduct(
    req: ModifyProductRequest,
    cb?: (error: string, rep: ModifyProductResponse) => void
  ): Promise<ModifyProductResponse> {
    return this.request("ModifyProduct", req, cb)
  }

  /**
     * 本接口（DescribeLogs）用于查询设备日志列表。
设备日志最长保留时长为15天,超期自动清除。
     */
  async DescribeLogs(
    req: DescribeLogsRequest,
    cb?: (error: string, rep: DescribeLogsResponse) => void
  ): Promise<DescribeLogsResponse> {
    return this.request("DescribeLogs", req, cb)
  }

  /**
     * 本接口（RefundStorageService）用于退订已购买的云存服务。
退订时，云存服务对应订单的处理方式 : 
1. 未开始的订单自动回到已付费订单池
2. 已开始的订单自动失效
3. 购买云存接口,优先从已付费订单池中分配订单
     */
  async RefundStorageService(
    req: RefundStorageServiceRequest,
    cb?: (error: string, rep: RefundStorageServiceResponse) => void
  ): Promise<RefundStorageServiceResponse> {
    return this.request("RefundStorageService", req, cb)
  }

  /**
   * 购买云存服务
   */
  async CreateStorageService(
    req: CreateStorageServiceRequest,
    cb?: (error: string, rep: CreateStorageServiceResponse) => void
  ): Promise<CreateStorageServiceResponse> {
    return this.request("CreateStorageService", req, cb)
  }

  /**
   * 本接口（SetMessageQueue）用于配置物联网智能视频产品的转发消息队列。
   */
  async SetMessageQueue(
    req: SetMessageQueueRequest,
    cb?: (error: string, rep: SetMessageQueueResponse) => void
  ): Promise<SetMessageQueueResponse> {
    return this.request("SetMessageQueue", req, cb)
  }

  /**
   * 客户可通过本接口获取账户余额信息, 默认接口请求频率限制：1次/秒
   */
  async DescribeAccountBalance(
    req: DescribeAccountBalanceRequest,
    cb?: (error: string, rep: DescribeAccountBalanceResponse) => void
  ): Promise<DescribeAccountBalanceResponse> {
    return this.request("DescribeAccountBalance", req, cb)
  }

  /**
   * 本接口（DeleteProduct）用于删除一个物联网智能视频产品。
   */
  async DeleteProduct(
    req: DeleteProductRequest,
    cb?: (error: string, rep: DeleteProductResponse) => void
  ): Promise<DeleteProductResponse> {
    return this.request("DeleteProduct", req, cb)
  }

  /**
   * 查看操作系统支持的芯片列表
   */
  async DescribeOsList(
    req?: DescribeOsListRequest,
    cb?: (error: string, rep: DescribeOsListResponse) => void
  ): Promise<DescribeOsListResponse> {
    return this.request("DescribeOsList", req, cb)
  }

  /**
   * 本接口（DescribeIotModels）用于列出物模型历史版本列表。
   */
  async DescribeIotModels(
    req: DescribeIotModelsRequest,
    cb?: (error: string, rep: DescribeIotModelsResponse) => void
  ): Promise<DescribeIotModelsResponse> {
    return this.request("DescribeIotModels", req, cb)
  }

  /**
   * 本接口（DeleteOtaVersion）用于删除固件版本信息。
   */
  async DeleteOtaVersion(
    req: DeleteOtaVersionRequest,
    cb?: (error: string, rep: DeleteOtaVersionResponse) => void
  ): Promise<DeleteOtaVersionResponse> {
    return this.request("DeleteOtaVersion", req, cb)
  }

  /**
   * 将已购买的云存服务转移到另一设备
   */
  async DeliverStorageService(
    req: DeliverStorageServiceRequest,
    cb?: (error: string, rep: DeliverStorageServiceResponse) => void
  ): Promise<DeliverStorageServiceResponse> {
    return this.request("DeliverStorageService", req, cb)
  }

  /**
   * 本接口（DescribeTraceStatus）用于查询指定设备是否在白名单中。
   */
  async DescribeTraceStatus(
    req: DescribeTraceStatusRequest,
    cb?: (error: string, rep: DescribeTraceStatusResponse) => void
  ): Promise<DescribeTraceStatusResponse> {
    return this.request("DescribeTraceStatus", req, cb)
  }

  /**
   * 请求设备直播流地址
   */
  async DescribeStream(
    req: DescribeStreamRequest,
    cb?: (error: string, rep: DescribeStreamResponse) => void
  ): Promise<DescribeStreamResponse> {
    return this.request("DescribeStream", req, cb)
  }

  /**
   * 本接口（DescribeRegistrationStatus）用于查询终端用户的注册状态。
   */
  async DescribeRegistrationStatus(
    req: DescribeRegistrationStatusRequest,
    cb?: (error: string, rep: DescribeRegistrationStatusResponse) => void
  ): Promise<DescribeRegistrationStatusResponse> {
    return this.request("DescribeRegistrationStatus", req, cb)
  }

  /**
   * 本接口（DescribeRunLog）用于获取设备运行日志。
   */
  async DescribeRunLog(
    req: DescribeRunLogRequest,
    cb?: (error: string, rep: DescribeRunLogResponse) => void
  ): Promise<DescribeRunLogResponse> {
    return this.request("DescribeRunLog", req, cb)
  }

  /**
   * 本接口（DescribeBindDev）用于查询终端用户绑定的设备列表。
   */
  async DescribeBindDev(
    req: DescribeBindDevRequest,
    cb?: (error: string, rep: DescribeBindDevResponse) => void
  ): Promise<DescribeBindDevResponse> {
    return this.request("DescribeBindDev", req, cb)
  }

  /**
   * 查询云存服务
   */
  async DescribeStorageService(
    req: DescribeStorageServiceRequest,
    cb?: (error: string, rep: DescribeStorageServiceResponse) => void
  ): Promise<DescribeStorageServiceResponse> {
    return this.request("DescribeStorageService", req, cb)
  }

  /**
   * 本接口（DisableDeviceStream）用于停止设备推流，可进行批量操作，每次操作最多100台设备。
   */
  async DisableDeviceStream(
    req: DisableDeviceStreamRequest,
    cb?: (error: string, rep: DisableDeviceStreamResponse) => void
  ): Promise<DisableDeviceStreamResponse> {
    return this.request("DisableDeviceStream", req, cb)
  }

  /**
   * 本接口（CreateUploadPath）用于获取固件上传路径。
   */
  async CreateUploadPath(
    req: CreateUploadPathRequest,
    cb?: (error: string, rep: CreateUploadPathResponse) => void
  ): Promise<CreateUploadPathResponse> {
    return this.request("CreateUploadPath", req, cb)
  }

  /**
   * 本接口（DescribeModelDataRet）用于根据TaskId获取对设备物模型操作最终响应的结果。
   */
  async DescribeModelDataRet(
    req: DescribeModelDataRetRequest,
    cb?: (error: string, rep: DescribeModelDataRetResponse) => void
  ): Promise<DescribeModelDataRetResponse> {
    return this.request("DescribeModelDataRet", req, cb)
  }

  /**
   * 本接口（DescribePubVersions）用于获取某一产品发布过的全部固件版本。
   */
  async DescribePubVersions(
    req: DescribePubVersionsRequest,
    cb?: (error: string, rep: DescribePubVersionsResponse) => void
  ): Promise<DescribePubVersionsResponse> {
    return this.request("DescribePubVersions", req, cb)
  }

  /**
   * 本接口（RunDeviceStream）用于开启设备推流，可进行批量操作，每次操作最多100台设备。
   */
  async RunDeviceStream(
    req: RunDeviceStreamRequest,
    cb?: (error: string, rep: RunDeviceStreamResponse) => void
  ): Promise<RunDeviceStreamResponse> {
    return this.request("RunDeviceStream", req, cb)
  }

  /**
   * 设备刷新cos上传证书
   */
  async RenewUploadTest(
    req: RenewUploadTestRequest,
    cb?: (error: string, rep: RenewUploadTestResponse) => void
  ): Promise<RenewUploadTestResponse> {
    return this.request("RenewUploadTest", req, cb)
  }

  /**
   * 编辑版本描述信息
   */
  async ModifyVerContent(
    req: ModifyVerContentRequest,
    cb?: (error: string, rep: ModifyVerContentResponse) => void
  ): Promise<ModifyVerContentResponse> {
    return this.request("ModifyVerContent", req, cb)
  }

  /**
   * 本接口（DescribeDevices）用于获取设备信息列表。
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 本接口（CreateGencode）用于生成设备物模型源代码
   */
  async CreateGencode(
    req: CreateGencodeRequest,
    cb?: (error: string, rep: CreateGencodeResponse) => void
  ): Promise<CreateGencodeResponse> {
    return this.request("CreateGencode", req, cb)
  }

  /**
   * 本接口（DescribeDeviceModel）用于获取设备物模型。
   */
  async DescribeDeviceModel(
    req: DescribeDeviceModelRequest,
    cb?: (error: string, rep: DescribeDeviceModelResponse) => void
  ): Promise<DescribeDeviceModelResponse> {
    return this.request("DescribeDeviceModel", req, cb)
  }

  /**
   * 本接口（DeleteBinding）用于终端用户和设备进行解绑定。
   */
  async DeleteBinding(
    req: DeleteBindingRequest,
    cb?: (error: string, rep: DeleteBindingResponse) => void
  ): Promise<DeleteBindingResponse> {
    return this.request("DeleteBinding", req, cb)
  }

  /**
   * 该接口已经停止维护，请勿使用
   */
  async CreateStorage(
    req: CreateStorageRequest,
    cb?: (error: string, rep: CreateStorageResponse) => void
  ): Promise<CreateStorageResponse> {
    return this.request("CreateStorage", req, cb)
  }

  /**
   * 本接口（DescribeTraceIds）用于查询设备日志跟踪白名单。
   */
  async DescribeTraceIds(
    req?: DescribeTraceIdsRequest,
    cb?: (error: string, rep: DescribeTraceIdsResponse) => void
  ): Promise<DescribeTraceIdsResponse> {
    return this.request("DescribeTraceIds", req, cb)
  }

  /**
   * 本接口（DeleteMessageQueue）用于删除物联网智能视频产品的转发消息配置信息。
   */
  async DeleteMessageQueue(
    req: DeleteMessageQueueRequest,
    cb?: (error: string, rep: DeleteMessageQueueResponse) => void
  ): Promise<DeleteMessageQueueResponse> {
    return this.request("DeleteMessageQueue", req, cb)
  }

  /**
     * 本接口（ModifyDeviceProperty）用于修改设备物模型的属性（ProWritable）。
可对setVal数据属性进行写入,如:
ProWritable.Pos.setVal
对于嵌套类型的可写属性，可以仅对其部分数据内容进行写入，如:
ProWritable.Pos.setVal.x;
可写属性云端写入成功即返回;云端向设备端发布属性变更参数;若当前设备不在线,在设备下次上线时会自动更新这些属性参数;
物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
     */
  async ModifyDeviceProperty(
    req: ModifyDevicePropertyRequest,
    cb?: (error: string, rep: ModifyDevicePropertyResponse) => void
  ): Promise<ModifyDevicePropertyResponse> {
    return this.request("ModifyDeviceProperty", req, cb)
  }

  /**
   * 本接口（RunDevice）用于启用设备，可进行批量操作，每次操作最多100台设备。
   */
  async RunDevice(
    req: RunDeviceRequest,
    cb?: (error: string, rep: RunDeviceResponse) => void
  ): Promise<RunDeviceResponse> {
    return this.request("RunDevice", req, cb)
  }

  /**
   * 本接口（UploadOtaVersion）接收上传到控制台的固件版本信息。
   */
  async UploadOtaVersion(
    req: UploadOtaVersionRequest,
    cb?: (error: string, rep: UploadOtaVersionResponse) => void
  ): Promise<UploadOtaVersionResponse> {
    return this.request("UploadOtaVersion", req, cb)
  }

  /**
     * 本接口（UpgradeDevice）用于对设备进行固件升级。
该接口向指定的设备下发固件更新指令,可将固件升级到任意版本(可实现固件降级)。
警告:使能UpgradeNow参数存在一定的风险性！建议仅在debug场景下使用!
     */
  async UpgradeDevice(
    req: UpgradeDeviceRequest,
    cb?: (error: string, rep: UpgradeDeviceResponse) => void
  ): Promise<UpgradeDeviceResponse> {
    return this.request("UpgradeDevice", req, cb)
  }

  /**
   * 本接口（CreateUsrToken）用于终端用户获取IoT Video平台的accessToken，初始化SDK,连接到IoT Video接入服务器。
   */
  async CreateUsrToken(
    req: CreateUsrTokenRequest,
    cb?: (error: string, rep: CreateUsrTokenResponse) => void
  ): Promise<CreateUsrTokenResponse> {
    return this.request("CreateUsrToken", req, cb)
  }
}
