/**
 * PublishMessage请求参数结构体
 */
export interface PublishMessageRequest {
    /**
     * 消息发往的主题。命名规则：${ProductId}/${DeviceName}/[a-zA-Z0-9:_-]{1,128}
     */
    Topic: string;
    /**
     * 消息内容
     */
    Payload: string;
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 服务质量等级，取值为0或1
     */
    Qos?: number;
    /**
     * Payload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备
     */
    PayloadEncoding?: string;
}
/**
 * UpdateDevicesEnableState返回参数结构体
 */
export interface UpdateDevicesEnableStateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductCA返回参数结构体
 */
export interface DescribeProductCAResponse {
    /**
     * CA证书列表
     */
    CAs: Array<CertInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDeviceShadow返回参数结构体
 */
export interface DeleteDeviceShadowResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateProductPrivateCA请求参数结构体
 */
export interface UpdateProductPrivateCARequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 私有CA证书名称
     */
    CertName: string;
}
/**
 * UnbindDevices请求参数结构体
 */
export interface UnbindDevicesRequest {
    /**
     * 网关设备的产品ID
     */
    GatewayProductId: string;
    /**
     * 网关设备的设备名
     */
    GatewayDeviceName: string;
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 多个设备名
     */
    DeviceNames: Array<string>;
    /**
     * 中兴CLAA设备的解绑需要Skey，普通设备不需要
     */
    Skey?: string;
}
/**
 * DescribeDeviceResources请求参数结构体
 */
export interface DescribeDeviceResourcesRequest {
    /**
     * 偏移量，Offset从0开始
     */
    Offset: number;
    /**
     * 分页的大小，数值范围 10-250
     */
    Limit: number;
    /**
     * 产品ID
     */
    ProductID?: string;
    /**
     * 需要过滤的设备名称
     */
    DeviceName?: string;
    /**
     * 资源搜索开始时间
     */
    StartTime?: string;
    /**
     * 资源搜索结束时间
     */
    EndTime?: string;
}
/**
 * DeletePrivateCA返回参数结构体
 */
export interface DeletePrivateCAResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdatePrivateCA请求参数结构体
 */
export interface UpdatePrivateCARequest {
    /**
     * CA证书名称
     */
    CertName: string;
    /**
     * CA证书内容
     */
    CertText: string;
    /**
     * 校验CA证书的证书内容
     */
    VerifyCertText: string;
}
/**
 * BindDevices请求参数结构体
 */
export interface BindDevicesRequest {
    /**
     * 网关设备的产品ID
     */
    GatewayProductId: string;
    /**
     * 网关设备的设备名
     */
    GatewayDeviceName: string;
    /**
     * 被绑定设备的产品ID
     */
    ProductId: string;
    /**
     * 被绑定的多个设备名
     */
    DeviceNames: Array<string>;
    /**
     * 中兴CLAA设备的绑定需要skey，普通的设备不需要
     */
    Skey?: string;
}
/**
 * CreatePrivateCA返回参数结构体
 */
export interface CreatePrivateCAResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProducts请求参数结构体
 */
export interface DescribeProductsRequest {
    /**
     * 偏移量，Offset从0开始
     */
    Offset: number;
    /**
     * 分页大小，当前页面中显示的最大数量，值范围 10-250。
     */
    Limit: number;
}
/**
 * 创建规则请求包体
 */
export interface TopicRulePayload {
    /**
     * 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw==
     */
    Sql: string;
    /**
     * 行为的JSON字符串，大部分种类举例如下：
  [
      {
          "republish": {
              "topic": "TEST/test"
          }
      },
      {
          "forward": {
              "api": "http://127.0.0.1:8080",
              "token":"xxx"
          }
      },
      {
          "ckafka": {
              "instance": {
                  "id": "ckafka-test",
                  "name": ""
              },
              "topic": {
                  "id": "topic-test",
                  "name": "test"
              },
              "region": "gz"
          }
      },
      {
          "cmqqueue": {
              "queuename": "queue-test-TEST",
              "region": "gz"
          }
      },
      {
          "mysql": {
              "instanceid": "cdb-test",
              "region": "gz",
              "username": "test",
              "userpwd": "*****",
              "dbname": "d_mqtt",
              "tablename": "t_test",
              "fieldpairs": [
                  {
                      "field": "test",
                      "value": "test"
                  }
              ],
              "devicetype": "CUSTOM"
          }
      }
  ]
     */
    Actions?: string;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 是否禁用规则
     */
    RuleDisabled?: boolean;
}
/**
 * 内容日志项
 */
export interface PayloadLogItem {
    /**
     * 账号id
     */
    Uin: string;
    /**
     * 产品id
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 来源类型
     */
    SrcType: string;
    /**
     * 来源名称
     */
    SrcName: string;
    /**
     * 消息topic
     */
    Topic: string;
    /**
     * 内容格式类型
     */
    PayloadFormatType: string;
    /**
     * 内容信息
     */
    Payload: string;
    /**
     * 请求ID
     */
    RequestId: string;
    /**
     * 日期时间
     */
    DateTime: string;
}
/**
 * 子产品信息
 */
export interface BindProductInfo {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 产品名
     */
    ProductName: string;
}
/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
    /**
     * 设备总数
     */
    TotalCount: number;
    /**
     * 设备详细信息列表
     */
    Devices: Array<DeviceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDeviceShadow请求参数结构体
 */
export interface DeleteDeviceShadowRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
}
/**
 * DeleteTopicRule返回参数结构体
 */
export interface DeleteTopicRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductCA请求参数结构体
 */
export interface DescribeProductCARequest {
    /**
     * 产品ID
     */
    ProductId: string;
}
/**
 * 设备标签
 */
export interface DeviceLabel {
    /**
     * 标签标识
     */
    Key: string;
    /**
     * 标签值
     */
    Value: string;
}
/**
 * DescribeProductTasks请求参数结构体
 */
export interface DescribeProductTasksRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 产品级别任务列表偏移量
     */
    Offset: number;
    /**
     * 产品级别任务列表拉取个数
     */
    Limit: number;
}
/**
 * UpdateProductPrivateCA返回参数结构体
 */
export interface UpdateProductPrivateCAResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOtaTaskStatus请求参数结构体
 */
export interface UpdateOtaTaskStatusRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件升级任务ID
     */
    TaskId: number;
    /**
     * 固件任务取消状态
     */
    Status: number;
}
/**
 * UpdateDeviceShadow请求参数结构体
 */
export interface UpdateDeviceShadowRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 虚拟设备的状态，JSON字符串格式，由desired结构组成
     */
    State: string;
    /**
     * 当前版本号，需要和后台的version保持一致，才能更新成功
     */
    ShadowVersion: number;
}
/**
 * DescribeGatewayBindDevices返回参数结构体
 */
export interface DescribeGatewayBindDevicesResponse {
    /**
     * 子设备总数
     */
    TotalCount: number;
    /**
     * 子设备信息
     */
    Devices: Array<BindDeviceInfo>;
    /**
     * 子设备所属的产品名
     */
    ProductName: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 产品资源详细信息
 */
export interface ProductResourceInfo {
    /**
     * 产品ID
     */
    ProductID: string;
    /**
     * 产品名
     */
    ProductName: string;
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 资源文件md5
     */
    Md5: string;
    /**
     * 资源文件大小
     */
    Size: number;
    /**
     * 资源文件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 资源创建时间
     */
    CreateTime: string;
}
/**
 * DescribeFirmware请求参数结构体
 */
export interface DescribeFirmwareRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
}
/**
 * DescribeDeviceResource返回参数结构体
 */
export interface DescribeDeviceResourceResponse {
    /**
     * 设备资源详情
     */
    Result: DeviceResourceInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductResources请求参数结构体
 */
export interface DescribeProductResourcesRequest {
    /**
     * 偏移量，Offset从0开始
     */
    Offset: number;
    /**
     * 分页的大小，数值范围 10-250
     */
    Limit: number;
    /**
     * 需要查看资源列表的产品 ID
     */
    ProductID?: string;
    /**
     * 需要过滤的资源名称
     */
    Name?: string;
}
/**
 * DescribeProduct请求参数结构体
 */
export interface DescribeProductRequest {
    /**
     * 产品ID
     */
    ProductId: string;
}
/**
 * DescribeProducts返回参数结构体
 */
export interface DescribeProductsResponse {
    /**
     * 产品总数
     */
    TotalCount: number;
    /**
     * 产品详细信息列表
     */
    Products: Array<ProductInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceShadow返回参数结构体
 */
export interface DescribeDeviceShadowResponse {
    /**
     * 设备影子数据
     */
    Data: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnableTopicRule返回参数结构体
 */
export interface EnableTopicRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePushResourceTaskStatistics返回参数结构体
 */
export interface DescribePushResourceTaskStatisticsResponse {
    /**
     * 推送成功的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessTotal: number;
    /**
     * 推送失败的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailureTotal: number;
    /**
     * 正在推送的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpgradingTotal: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDeviceLogLevel请求参数结构体
 */
export interface UpdateDeviceLogLevelRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 日志级别，0：关闭，1：错误，2：告警，3：信息，4：调试
     */
    LogLevel: number;
}
/**
 * UpdateOtaTaskStatus返回参数结构体
 */
export interface UpdateOtaTaskStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PublishRRPCMessage请求参数结构体
 */
export interface PublishRRPCMessageRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 消息内容，utf8编码
     */
    Payload: string;
}
/**
 * 产品属性
 */
export interface ProductProperties {
    /**
     * 产品描述
     */
    ProductDescription?: string;
    /**
     * 加密类型，1表示证书认证，2表示签名认证。如不填写，默认值是1
     */
    EncryptionType?: string;
    /**
     * 产品所属区域，目前只支持广州（gz）
     */
    Region?: string;
    /**
     * 产品类型，各个类型值代表的节点-类型如下：
  0 普通产品，2 NB-IoT产品，4 LoRa产品，3 LoRa网关产品，5 普通网关产品   默认值是0
     */
    ProductType?: number;
    /**
     * 数据格式，取值为json或者custom，默认值是json
     */
    Format?: string;
    /**
     * 产品所属平台，默认值是0
     */
    Platform?: string;
    /**
     * LoRa产品运营侧APPEUI，只有LoRa产品需要填写
     * @deprecated
     */
    Appeui?: string;
    /**
     * 产品绑定的物模型ID，-1表示不绑定
     */
    ModelId?: string;
    /**
     * 产品绑定的物模型名称
     */
    ModelName?: string;
    /**
     * 产品密钥，suite产品才会有
     */
    ProductKey?: string;
    /**
     * 动态注册类型 0-关闭, 1-预定义设备名 2-动态定义设备名
     */
    RegisterType?: number;
    /**
     * 动态注册产品密钥
     */
    ProductSecret?: string;
    /**
     * RegisterType为2时，设备动态创建的限制数量
     */
    RegisterLimit?: number;
    /**
     * 划归的产品，展示为源产品ID，其余为空
     */
    OriginProductId?: string;
    /**
     * 私有CA名称
     */
    PrivateCAName?: string;
    /**
     * 划归的产品，展示为源用户ID，其余为空
     */
    OriginUserId?: number;
    /**
     * 设备限制
     */
    DeviceLimit?: number;
    /**
     * 产品禁用状态
     */
    ForbiddenStatus?: number;
    /**
     * LoRa产品运营侧APPEUI，只有LoRa产品需要填写
     */
    AppEUI?: string;
}
/**
 * 设备固件更新状态
 */
export interface DeviceUpdateStatus {
    /**
     * 设备名
     */
    DeviceName: string;
    /**
     * 最后处理时间
     */
    LastProcessTime: number;
    /**
     * 状态
     */
    Status: number;
    /**
     * 错误消息
     */
    ErrMsg: string;
    /**
     * 返回码
     */
    Retcode: number;
    /**
     * 目标更新版本
     */
    DstVersion: string;
    /**
     * 下载中状态时的下载进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Percent: number;
    /**
     * 原版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriVersion: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: number;
}
/**
 * ListLog请求参数结构体
 */
export interface ListLogRequest {
    /**
     * 日志开始时间，毫秒级时间戳
     */
    MinTime: number;
    /**
     * 日志结束时间，毫秒级时间戳
     */
    MaxTime: number;
    /**
     * 查询关键字，可以同时支持键值查询和文本查询，例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。键值或文本可以包含多个，以空格隔开。其中可以索引的key包括：requestid、productid、devicename、scene、content。
  一个典型的查询示例：productid:ABCDE12345 devicename:test scene:SHADOW content:Device%20connect publish
     */
    Keywords?: string;
    /**
     * 日志检索上下文
     */
    Context?: string;
    /**
     * 查询条数
     */
    MaxNum?: number;
}
/**
 * BatchUpdateFirmware返回参数结构体
 */
export interface BatchUpdateFirmwareResponse {
    /**
     * 任务ID
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
    /**
     * 需要删除的产品 ID
     */
    ProductId: string;
    /**
     * 删除LoRa产品需要skey
     */
    Skey?: string;
}
/**
 * 状态统计信息
 */
export interface StatusStatistic {
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 统计总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
}
/**
 * DeleteProductPrivateCA返回参数结构体
 */
export interface DeleteProductPrivateCAResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadDeviceResource请求参数结构体
 */
export interface DownloadDeviceResourceRequest {
    /**
     * 产品ID
     */
    ProductID: string;
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 设备名称
     */
    DeviceName: string;
}
/**
 * DescribeDeviceResource请求参数结构体
 */
export interface DescribeDeviceResourceRequest {
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 产品ID
     */
    ProductID?: string;
    /**
     * 具体的设备资源名称
     */
    Name?: string;
}
/**
 * EditFirmware请求参数结构体
 */
export interface EditFirmwareRequest {
    /**
     * 产品ID。
     */
    ProductId: string;
    /**
     * 固件版本号。
     */
    FirmwareVersion: string;
    /**
     * 固件名称。
     */
    FirmwareName: string;
    /**
     * 固件描述
     */
    FirmwareDescription?: string;
    /**
     * 固件用户自定义配置信息
     */
    FirmwareUserDefined?: string;
}
/**
 * 子设备信息
 */
export interface BindDeviceInfo {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名
     */
    DeviceName: string;
    /**
     * 设备Tag
     */
    Tags: Array<DeviceTag>;
    /**
     * 子设备绑定时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindTime: number;
}
/**
 * ResetDeviceState请求参数结构体
 */
export interface ResetDeviceStateRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceNames: Array<string>;
}
/**
 * DescribeDeviceClientKey请求参数结构体
 */
export interface DescribeDeviceClientKeyRequest {
    /**
     * 所属产品的Id
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
}
/**
 * CLS日志
 */
export interface CLSLogItem {
    /**
     * 日志内容
     */
    Content?: string;
    /**
     * 设备名称
     */
    DeviceName?: string;
    /**
     * 产品ID
     */
    ProductId?: string;
    /**
     * 请求ID
     */
    RequestId?: string;
    /**
     * 结果
     */
    Result?: string;
    /**
     * 模块
     */
    Scene?: string;
    /**
     * 日志时间
     */
    Time?: string;
    /**
     * 腾讯云账号
     * @deprecated
     */
    Userid?: string;
    /**
     * 腾讯云账号
     */
    UserId?: string;
}
/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
    /**
     * 设备所属的产品 ID
     */
    ProductId: string;
    /**
     * 需要删除的设备名称
     */
    DeviceName: string;
    /**
     * 删除LoRa设备以及LoRa网关设备需要skey
     */
    Skey?: string;
}
/**
 * DescribeFirmwareTaskDistribution请求参数结构体
 */
export interface DescribeFirmwareTaskDistributionRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
    /**
     * 固件升级任务ID
     */
    TaskId: number;
}
/**
 * ListFirmwares返回参数结构体
 */
export interface ListFirmwaresResponse {
    /**
     * 固件总数
     */
    TotalCount?: number;
    /**
     * 固件列表
     */
    Firmwares?: Array<FirmwareInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFirmwareTaskDevices请求参数结构体
 */
export interface DescribeFirmwareTaskDevicesRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本
     */
    FirmwareVersion?: string;
    /**
     * 筛选条件
     */
    Filters?: Array<SearchKeyword>;
    /**
     * 查询偏移量
     */
    Offset?: number;
    /**
     * 查询的数量
     */
    Limit?: number;
}
/**
 * DescribeFirmware返回参数结构体
 */
export interface DescribeFirmwareResponse {
    /**
     * 固件版本号
     */
    Version?: string;
    /**
     * 产品ID
     */
    ProductId?: string;
    /**
     * 固件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 固件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 固件Md5值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5sum?: string;
    /**
     * 固件上传的秒级时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Createtime?: number;
    /**
     * 产品名称
     */
    ProductName?: string;
    /**
     * 固件类型。选项：mcu、module
     */
    FwType?: string;
    /**
     * 固件用户自定义配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserDefined?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResourceTasks请求参数结构体
 */
export interface DescribeResourceTasksRequest {
    /**
     * 产品ID
     */
    ProductID: string;
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 查询偏移量
     */
    Offset: number;
    /**
     * 返回查询结果条数
     */
    Limit: number;
    /**
     * 搜索过滤条件
     */
    Filters?: Array<SearchKeyword>;
}
/**
 * CreateMultiDevicesTask请求参数结构体
 */
export interface CreateMultiDevicesTaskRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 参数类型 cosfile-文件上传 random-随机创建
     */
    ParametersType: string;
    /**
     * 文件上传类型时文件名
     */
    FileName?: string;
    /**
     * 文件上传类型时文件大小
     */
    FileSize?: number;
    /**
     * 随机创建时设备创建个数
     */
    BatchCount?: number;
    /**
     * 文件上传类型时文件md5值
     */
    Hash?: string;
}
/**
 * DeleteDeviceResource返回参数结构体
 */
export interface DeleteDeviceResourceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFirmwareTaskStatistics返回参数结构体
 */
export interface DescribeFirmwareTaskStatisticsResponse {
    /**
     * 升级成功的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessTotal: number;
    /**
     * 升级失败的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailureTotal: number;
    /**
     * 正在升级的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpgradingTotal: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePushResourceTaskStatistics请求参数结构体
 */
export interface DescribePushResourceTaskStatisticsRequest {
    /**
     * 产品ID
     */
    ProductID: string;
    /**
     * 资源名称
     */
    Name: string;
}
/**
 * UpdateDevicesEnableState请求参数结构体
 */
export interface UpdateDevicesEnableStateRequest {
    /**
     * 设备所属产品id
     */
    ProductId: string;
    /**
     * 设备名称集合
     */
    DeviceNames: Array<string>;
    /**
     * 要设置的设备状态，1为启用，0为禁用
     */
    Status: number;
}
/**
 * ListTopicRules请求参数结构体
 */
export interface ListTopicRulesRequest {
    /**
     * 请求的页数
     */
    PageNum: number;
    /**
     * 分页的大小
     */
    PageSize: number;
}
/**
 * ListSDKLog请求参数结构体
 */
export interface ListSDKLogRequest {
    /**
     * 日志开始时间
     */
    MinTime: number;
    /**
     * 日志结束时间
     */
    MaxTime: number;
    /**
     * 查询关键字，可以同时支持键值查询和文本查询，
  例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。
  键值或文本可以包含多个，以空格隔开。
  其中可以索引的key包括：productid、devicename、loglevel
  一个典型的查询示例：productid:7JK1G72JNE devicename:name publish loglevel:WARN一个典型的查询示例：productid:ABCDE12345 devicename:test scene:SHADOW publish
     */
    Keywords: string;
    /**
     * 日志检索上下文
     */
    Context?: string;
    /**
     * 查询条数
     */
    MaxNum?: number;
}
/**
 * SetProductsForbiddenStatus返回参数结构体
 */
export interface SetProductsForbiddenStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateProduct返回参数结构体
 */
export interface CreateProductResponse {
    /**
     * 产品名称
     */
    ProductName: string;
    /**
     * 产品 ID，腾讯云生成全局唯一 ID
     */
    ProductId: string;
    /**
     * 产品属性
     */
    ProductProperties: ProductProperties;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 代理订阅信息
 */
export interface BrokerSubscribe {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名
     */
    DeviceName: string;
}
/**
 * DescribeProductResource返回参数结构体
 */
export interface DescribeProductResourceResponse {
    /**
     * 资源详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: ProductResourceInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelDeviceFirmwareTask返回参数结构体
 */
export interface CancelDeviceFirmwareTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTopicPolicy返回参数结构体
 */
export interface CreateTopicPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RetryDeviceFirmwareTask返回参数结构体
 */
export interface RetryDeviceFirmwareTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 对称加密密钥，base64编码。采用对称加密时返回该参数
     */
    DevicePsk: string;
    /**
     * 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数
     */
    DeviceCert: string;
    /**
     * 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数
     */
    DevicePrivateKey: string;
    /**
     * LoRa设备的DevEui，当设备是LoRa设备时，会返回该字段
     */
    LoraDevEui: string;
    /**
     * LoRa设备的MoteType，当设备是LoRa设备时，会返回该字段
     */
    LoraMoteType: number;
    /**
     * LoRa设备的AppKey，当设备是LoRa设备时，会返回该字段
     */
    LoraAppKey: string;
    /**
     * LoRa设备的NwkKey，当设备是LoRa设备时，会返回该字段
     */
    LoraNwkKey: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDevice请求参数结构体
 */
export interface CreateDeviceRequest {
    /**
     * 产品 ID 。创建产品时腾讯云为用户分配全局唯一的 ID
     */
    ProductId: string;
    /**
     * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。
     */
    DeviceName: string;
    /**
     * 设备属性
     */
    Attribute?: Attribute;
    /**
     * 是否使用自定义PSK，默认不使用
     */
    DefinedPsk?: string;
    /**
     * 运营商类型，当产品是NB-IoT产品时，此字段必填。1表示中国电信，2表示中国移动，3表示中国联通
     */
    Isp?: number;
    /**
     * IMEI，当产品是NB-IoT产品时，此字段必填
     */
    Imei?: string;
    /**
     * LoRa设备的DevEui，当创建LoRa时，此字段必填
     */
    LoraDevEui?: string;
    /**
     * LoRa设备的MoteType
     */
    LoraMoteType?: number;
    /**
     * 创建LoRa设备需要skey
     */
    Skey?: string;
    /**
     * LoRa设备的AppKey
     */
    LoraAppKey?: string;
    /**
     * 私有CA创建的设备证书
     */
    TlsCrt?: string;
}
/**
 * DescribeProductTask请求参数结构体
 */
export interface DescribeProductTaskRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * DescribeFirmwareTask返回参数结构体
 */
export interface DescribeFirmwareTaskResponse {
    /**
     * 固件任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: number;
    /**
     * 固件任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 固件任务创建时间，单位:秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: number;
    /**
     * 固件任务升级类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: number;
    /**
     * 产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName: string;
    /**
     * 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpgradeMode: string;
    /**
     * 产品ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductId: string;
    /**
     * 升级前版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalVersion: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备固件详细信息
 */
export interface FirmwareInfo {
    /**
     * 固件版本
     */
    Version?: string;
    /**
     * 固件MD5值
     */
    Md5sum?: string;
    /**
     * 固件创建时间
     */
    CreateTime?: number;
    /**
     * 产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName?: string;
    /**
     * 固件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 固件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 产品ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductId?: string;
    /**
     * 固件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FwType?: string;
    /**
     * 创建者 Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUserId?: number;
    /**
     * 固件用户自定义配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserDefined?: string;
}
/**
 * CreateProduct请求参数结构体
 */
export interface CreateProductRequest {
    /**
     * 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32}
     */
    ProductName: string;
    /**
     * 产品属性
     */
    ProductProperties?: ProductProperties;
    /**
     * 创建CLAA产品时，需要Skey
     */
    Skey?: string;
}
/**
 * DescribeFirmwareTasks请求参数结构体
 */
export interface DescribeFirmwareTasksRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
    /**
     * 查询偏移量
     */
    Offset: number;
    /**
     * 返回查询结果条数
     */
    Limit: number;
    /**
     * 搜索过滤条件
     */
    Filters?: Array<SearchKeyword>;
}
/**
 * DisableTopicRule返回参数结构体
 */
export interface DisableTopicRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则详细信息
 */
export interface TopicRuleInfo {
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 规则描述
     */
    Description: string;
    /**
     * 创建时间
     */
    CreatedAt: number;
    /**
     * 不生效
     */
    RuleDisabled: boolean;
    /**
     * 规则模式
     */
    TopicPattern: string;
}
/**
 * GetAllVersion返回参数结构体
 */
export interface GetAllVersionResponse {
    /**
     * 版本号列表
     */
    Version: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateTopicPolicy返回参数结构体
 */
export interface UpdateTopicPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductTask返回参数结构体
 */
export interface DescribeProductTaskResponse {
    /**
     * 产品任务详细信息
     */
    TaskInfo: ProductTaskInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDevice返回参数结构体
 */
export interface DescribeDeviceResponse {
    /**
     * 设备名
     */
    DeviceName?: string;
    /**
     * 设备是否在线，0不在线，1在线，3未激活
     */
    Online?: number;
    /**
     * 设备登录时间
     */
    LoginTime?: number;
    /**
     * 设备固件版本
     */
    Version?: string;
    /**
     * 设备最后更新时间
     */
    LastUpdateTime?: number;
    /**
     * 设备证书
     */
    DeviceCert?: string;
    /**
     * 设备密钥
     */
    DevicePsk?: string;
    /**
     * 设备属性
     */
    Tags?: Array<DeviceTag>;
    /**
     * 设备类型
     */
    DeviceType?: number;
    /**
     * 国际移动设备识别码 IMEI
     */
    Imei?: string;
    /**
     * 运营商类型
     */
    Isp?: number;
    /**
     * IP地址
     */
    ConnIP?: number;
    /**
     * NB IoT运营商处的DeviceID
     * @deprecated
     */
    NbiotDeviceID?: string;
    /**
     * Lora设备的dev eui
     */
    LoraDevEui?: string;
    /**
     * Lora设备的mote type
     */
    LoraMoteType?: number;
    /**
     * 设备的sdk日志等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogLevel?: number;
    /**
     * 首次上线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstOnlineTime?: number;
    /**
     * 最近下线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOfflineTime?: number;
    /**
     * 设备创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 设备证书获取状态，0 未获取过设备密钥, 1 已获取过设备密钥
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertState?: number;
    /**
     * 设备启用状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableState?: number;
    /**
     * 设备标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<DeviceLabel>;
    /**
     * MQTT客户端IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIP?: string;
    /**
     * 设备固件更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirmwareUpdateTime?: number;
    /**
     * 创建者账号ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUserId?: number;
    /**
     * NB IoT运营商处的DeviceID
     */
    NBIoTDeviceID?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PublishBroadcastMessage请求参数结构体
 */
export interface PublishBroadcastMessageRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 消息内容
     */
    Payload: string;
    /**
     * 消息质量等级
     */
    Qos: number;
    /**
     * Payload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备
     */
    PayloadEncoding?: string;
}
/**
 * ListFirmwares请求参数结构体
 */
export interface ListFirmwaresRequest {
    /**
     * 获取的页数
     */
    PageNum: number;
    /**
     * 分页的大小
     */
    PageSize: number;
    /**
     * 产品ID
     */
    ProductId?: string;
    /**
     * 搜索过滤条件
     */
    Filters?: Array<SearchKeyword>;
}
/**
 * ListLog返回参数结构体
 */
export interface ListLogResponse {
    /**
     * 日志上下文
     */
    Context: string;
    /**
     * 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context
     */
    Listover: boolean;
    /**
     * 日志列表
     */
    Results: Array<CLSLogItem>;
    /**
     * 日志总条数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RetryDeviceFirmwareTask请求参数结构体
 */
export interface RetryDeviceFirmwareTaskRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
    /**
     * 固件升级任务ID
     */
    TaskId: number;
}
/**
 * DescribeFirmwareTaskDevices返回参数结构体
 */
export interface DescribeFirmwareTaskDevicesResponse {
    /**
     * 固件升级任务的设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 固件升级任务的设备列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Devices: Array<DeviceUpdateStatus>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFirmwareTasks返回参数结构体
 */
export interface DescribeFirmwareTasksResponse {
    /**
     * 固件升级任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfos: Array<FirmwareTaskInfo>;
    /**
     * 固件升级任务总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePrivateCA请求参数结构体
 */
export interface DescribePrivateCARequest {
    /**
     * 私有化CA名称
     */
    CertName: string;
}
/**
 * GetCOSURL返回参数结构体
 */
export interface GetCOSURLResponse {
    /**
     * 固件URL
     */
    Url: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDeviceAvailableState返回参数结构体
 */
export interface UpdateDeviceAvailableStateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EditFirmware返回参数结构体
 */
export interface EditFirmwareResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListSDKLog返回参数结构体
 */
export interface ListSDKLogResponse {
    /**
     * 日志检索上下文
     */
    Context: string;
    /**
     * 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context
     */
    Listover: boolean;
    /**
     * 日志列表
     */
    Results: Array<SDKLogItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateDevicePSK请求参数结构体
 */
export interface UpdateDevicePSKRequest {
    /**
     * 产品名
     */
    ProductId: string;
    /**
     * 设备名
     */
    DeviceName: string;
    /**
     * 设备的psk
     */
    Psk: string;
}
/**
 * DeleteProductPrivateCA请求参数结构体
 */
export interface DeleteProductPrivateCARequest {
    /**
     * 产品ID
     */
    ProductId: string;
}
/**
 * UpdateDeviceAvailableState请求参数结构体
 */
export interface UpdateDeviceAvailableStateRequest {
    /**
     * 设备所属产品id
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 要设置的设备状态，1为启用，0为禁用
     */
    EnableState: number;
}
/**
 * GetUserResourceInfo返回参数结构体
 */
export interface GetUserResourceInfoResponse {
    /**
     * 已使用的资源字节数
     */
    UsedSize: number;
    /**
     * 可以使用资源的总大小
     */
    Limit: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePrivateCABindedProducts返回参数结构体
 */
export interface DescribePrivateCABindedProductsResponse {
    /**
     * 私有CA绑定的产品列表
     */
    Products: Array<BindProductInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListLogPayload返回参数结构体
 */
export interface ListLogPayloadResponse {
    /**
     * 日志上下文
     */
    Context: string;
    /**
     * 是否还有日志，如有仍有日志，下次查询的请求带上当前请求返回的Context
     */
    Listover: boolean;
    /**
     * 日志列表
     */
    Results: Array<PayloadLogItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetProductsForbiddenStatus请求参数结构体
 */
export interface SetProductsForbiddenStatusRequest {
    /**
     * 要设置禁用状态的产品列表
     */
    ProductId: Array<string>;
    /**
     * 0启用，1禁用
     */
    Status: number;
}
/**
 * DownloadDeviceResource返回参数结构体
 */
export interface DownloadDeviceResourceResponse {
    /**
     * 设备资源的cos链接
     */
    Url: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 产品详细信息
 */
export interface ProductInfo {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 产品名
     */
    ProductName: string;
    /**
     * 产品元数据
     */
    ProductMetadata: ProductMetadata;
    /**
     * 产品属性
     */
    ProductProperties: ProductProperties;
}
/**
 * DescribeFirmwareTaskDistribution返回参数结构体
 */
export interface DescribeFirmwareTaskDistributionResponse {
    /**
     * 固件升级任务状态分布信息
     */
    StatusInfos: Array<StatusStatistic>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PublishBroadcastMessage返回参数结构体
 */
export interface PublishBroadcastMessageResponse {
    /**
     * 广播消息任务ID
     */
    TaskId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePrivateCA请求参数结构体
 */
export interface CreatePrivateCARequest {
    /**
     * CA证书名称
     */
    CertName: string;
    /**
     * CA证书内容
     */
    CertText: string;
    /**
     * 校验CA证书的证书内容
     */
    VerifyCertText: string;
}
/**
 * UpdateDevicePSK返回参数结构体
 */
export interface UpdateDevicePSKResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDevice请求参数结构体
 */
export interface DescribeDeviceRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名
     */
    DeviceName: string;
}
/**
 * CreateMultiDevicesTask返回参数结构体
 */
export interface CreateMultiDevicesTaskResponse {
    /**
     * 任务ID
     */
    Id: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductResources返回参数结构体
 */
export interface DescribeProductResourcesResponse {
    /**
     * 资源总数
     */
    TotalCount: number;
    /**
     * 资源详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: Array<ProductResourceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateProductDynamicRegister请求参数结构体
 */
export interface UpdateProductDynamicRegisterRequest {
    /**
     * 产品Id
     */
    ProductId: string;
    /**
     * 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备
     */
    RegisterType: number;
    /**
     * 动态注册设备上限
     */
    RegisterLimit: number;
}
/**
 * CreateTopicPolicy请求参数结构体
 */
export interface CreateTopicPolicyRequest {
    /**
     * 产品自身ID
     */
    ProductId: string;
    /**
     * Topic名称
     */
    TopicName: string;
    /**
     * Topic权限，1发布，2订阅，3订阅和发布
     */
    Privilege: number;
    /**
     * 代理订阅信息，网关产品为绑定的子产品创建topic时需要填写，内容为子产品的ID和设备信息。
     */
    BrokerSubscribe?: BrokerSubscribe;
}
/**
 * DescribeProductResource请求参数结构体
 */
export interface DescribeProductResourceRequest {
    /**
     * 需要查看资源列表的产品 ID
     */
    ProductID?: string;
    /**
     * 需要过滤的资源名称
     */
    Name?: string;
}
/**
 * 产品级任务详细信息
 */
export interface ProductTaskInfo {
    /**
     * 任务ID
     */
    Id: number;
    /**
     * 任务类型 0-批量创建设备类型
     */
    Type: number;
    /**
     * 任务状态 0-创建中 1-待执行 2-执行中 3-执行失败 4-子任务部分失败 5-执行成功
     */
    State: number;
    /**
     * 任务参数类型 cosfile-文件输入 random-随机生成
     */
    ParametersType: string;
    /**
     * 任务参数
     */
    Parameters: string;
    /**
     * 任务执行结果类型 cosfile-文件输出 errmsg-错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultType: string;
    /**
     * 任务执行结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: string;
    /**
     * 子任务总个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchCount: number;
    /**
     * 子任务已执行个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchOffset: number;
    /**
     * 任务创建时间
     */
    CreateTime: number;
    /**
     * 任务更新时间
     */
    UpdateTime: number;
    /**
     * 任务完成时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompleteTime: number;
}
/**
 * ReplaceTopicRule请求参数结构体
 */
export interface ReplaceTopicRuleRequest {
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 替换的规则包体
     */
    TopicRulePayload: TopicRulePayload;
}
/**
 * PublishRRPCMessage返回参数结构体
 */
export interface PublishRRPCMessageResponse {
    /**
     * RRPC消息ID
     */
    MessageId: number;
    /**
     * 设备回复的消息内容，采用base64编码
     */
    PayloadBase64: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateTopicPolicy请求参数结构体
 */
export interface UpdateTopicPolicyRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 更新前Topic名
     */
    TopicName: string;
    /**
     * 更新后Topic名
     */
    NewTopicName: string;
    /**
     * Topic权限
     */
    Privilege: number;
    /**
     * 代理订阅信息
     */
    BrokerSubscribe?: BrokerSubscribe;
}
/**
 * UpdatePrivateCA返回参数结构体
 */
export interface UpdatePrivateCAResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备属性
 */
export interface Attribute {
    /**
     * 属性列表
     */
    Tags?: Array<DeviceTag>;
}
/**
 * DescribeDeviceResources返回参数结构体
 */
export interface DescribeDeviceResourcesResponse {
    /**
     * 资源总数
     */
    TotalCount: number;
    /**
     * 资源列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: Array<DeviceResourceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadFirmware返回参数结构体
 */
export interface UploadFirmwareResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTopicRule请求参数结构体
 */
export interface DeleteTopicRuleRequest {
    /**
     * 规则名
     */
    RuleName: string;
}
/**
 * ReplaceTopicRule返回参数结构体
 */
export interface ReplaceTopicRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListTopicRules返回参数结构体
 */
export interface ListTopicRulesResponse {
    /**
     * 规则总数量
     */
    TotalCnt: number;
    /**
     * 规则列表
     */
    Rules: Array<TopicRuleInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelDeviceFirmwareTask请求参数结构体
 */
export interface CancelDeviceFirmwareTaskRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
    /**
     * 固件升级任务ID
     */
    TaskId: number;
}
/**
 * DeleteDeviceResource请求参数结构体
 */
export interface DeleteDeviceResourceRequest {
    /**
     * 产品ID
     */
    ProductID: string;
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 设备名称
     */
    DeviceName: string;
}
/**
 * DescribeDeviceShadow请求参数结构体
 */
export interface DescribeDeviceShadowRequest {
    /**
     * 产品 ID
     */
    ProductId: string;
    /**
     * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,60}
     */
    DeviceName: string;
}
/**
 * UpdateProductDynamicRegister返回参数结构体
 */
export interface UpdateProductDynamicRegisterResponse {
    /**
     * 动态注册类型，0-关闭 1-预创建设备 2-自动创建设备
     */
    RegisterType: number;
    /**
     * 动态注册产品密钥
     */
    ProductSecret: string;
    /**
     * 动态注册设备上限
     */
    RegisterLimit: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAllVersion请求参数结构体
 */
export interface GetAllVersionRequest {
    /**
     * 产品ID
     */
    ProductId: string;
}
/**
 * UnbindDevices返回参数结构体
 */
export interface UnbindDevicesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePrivateCABindedProducts请求参数结构体
 */
export interface DescribePrivateCABindedProductsRequest {
    /**
     * 证书名称
     */
    CertName: string;
    /**
     * 查询偏移量
     */
    Offset: number;
    /**
     * 查询的数据量，默认为20， 最大为200
     */
    Limit: number;
}
/**
 * DescribePrivateCAs返回参数结构体
 */
export interface DescribePrivateCAsResponse {
    /**
     * 私有CA证书列表
     */
    CAs: Array<CertInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备详细信息
 */
export interface DeviceInfo {
    /**
     * 设备名
     */
    DeviceName?: string;
    /**
     * 设备是否在线，0不在线，1在线
     */
    Online?: number;
    /**
     * 设备登录时间
     */
    LoginTime?: number;
    /**
     * 设备版本
     */
    Version?: string;
    /**
     * 设备证书，证书加密的设备返回
     */
    DeviceCert?: string;
    /**
     * 设备密钥，密钥加密的设备返回
     */
    DevicePsk?: string;
    /**
     * 设备属性
     */
    Tags?: Array<DeviceTag>;
    /**
     * 设备类型
     */
    DeviceType?: number;
    /**
     * 国际移动设备识别码 IMEI
     */
    Imei?: string;
    /**
     * 运营商类型
     */
    Isp?: number;
    /**
     * NB IOT运营商处的DeviceID
     * @deprecated
     */
    NbiotDeviceID?: string;
    /**
     * IP地址
     */
    ConnIP?: number;
    /**
     * 设备最后更新时间
     */
    LastUpdateTime?: number;
    /**
     * LoRa设备的dev eui
     */
    LoraDevEui?: string;
    /**
     * LoRa设备的Mote type
     */
    LoraMoteType?: number;
    /**
     * 首次上线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstOnlineTime?: number;
    /**
     * 最近下线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOfflineTime?: number;
    /**
     * 设备创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 设备日志级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogLevel?: number;
    /**
     * 设备证书获取状态, 1 已获取过设备密钥，0 未获取过设备密钥
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertState?: number;
    /**
     * 设备可用状态，0禁用，1启用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableState?: number;
    /**
     * 设备标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<DeviceLabel>;
    /**
     * MQTT客户端IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClientIP?: string;
    /**
     * ota最后更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirmwareUpdateTime?: number;
    /**
     * 创建者 Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateUserId?: number;
    /**
     * NB IOT运营商处的DeviceID
     */
    NBIoTDeviceID?: string;
}
/**
 * CreateTaskFileUrl请求参数结构体
 */
export interface CreateTaskFileUrlRequest {
    /**
     * 产品ID
     */
    ProductId: string;
}
/**
 * UpdateDeviceShadow返回参数结构体
 */
export interface UpdateDeviceShadowResponse {
    /**
     * 设备影子数据，JSON字符串格式
     */
    Data: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchUpdateFirmware请求参数结构体
 */
export interface BatchUpdateFirmwareRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件新版本号
     */
    FirmwareVersion: string;
    /**
     * 固件原版本号，根据文件列表升级固件不需要填写此参数
     */
    FirmwareOriVersion?: string;
    /**
     * 升级方式，0 静默升级  1 用户确认升级。 不填默认为静默升级方式
     */
    UpgradeMethod?: number;
    /**
     * 设备列表文件名称，根据文件列表升级固件需要填写此参数
     */
    FileName?: string;
    /**
     * 设备列表的文件md5值
     */
    FileMd5?: string;
    /**
     * 设备列表的文件大小值
     */
    FileSize?: number;
    /**
     * 需要升级的设备名称列表
     */
    DeviceNames?: Array<string>;
    /**
     * 固件升级任务，默认超时时间。 最小取值60秒，最大为3600秒
     */
    TimeoutInterval?: number;
    /**
     * 固件升级任务类型，默认静态升级值为空或1，动态升级值为7。
     */
    Type?: number;
}
/**
 * X509证书信息
 */
export interface CertInfo {
    /**
     * 证书名称
     */
    CertName: string;
    /**
     * 证书的序列号，16进制编码
     */
    CertSN: string;
    /**
     * 证书颁发着名称
     */
    IssuerName: string;
    /**
     * 证书主题
     */
    Subject: string;
    /**
     * 证书创建时间，秒级时间戳
     */
    CreateTime: number;
    /**
     * 证书生效时间，秒级时间戳
     */
    EffectiveTime: number;
    /**
     * 证书失效时间，秒级时间戳
     */
    ExpireTime: number;
    /**
     * X509证书内容
     */
    CertText: string;
}
/**
 * GetUserResourceInfo请求参数结构体
 */
export declare type GetUserResourceInfoRequest = null;
/**
 * 设备属性
 */
export interface DeviceTag {
    /**
     * 属性名称
     */
    Tag: string;
    /**
     * 属性值的类型，1 int，2 string
     */
    Type: number;
    /**
     * 属性的值
     */
    Value: string;
    /**
     * 属性描述名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
}
/**
 * GetCOSURL请求参数结构体
 */
export interface GetCOSURLRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本
     */
    FirmwareVersion: string;
    /**
     * 固件版本大小
     */
    FileSize?: number;
}
/**
 * 产品元数据
 */
export interface ProductMetadata {
    /**
     * 产品创建时间
     */
    CreationDate: number;
    /**
     * 创建者 Uin
     */
    CreateUserId: number;
    /**
     * 账号 Uin
     */
    UserId: number;
}
/**
 * DescribeProduct返回参数结构体
 */
export interface DescribeProductResponse {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 产品名
     */
    ProductName: string;
    /**
     * 产品元数据
     */
    ProductMetadata: ProductMetadata;
    /**
     * 产品属性
     */
    ProductProperties: ProductProperties;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGatewayBindDevices请求参数结构体
 */
export interface DescribeGatewayBindDevicesRequest {
    /**
     * 网关设备的产品ID
     */
    GatewayProductId: string;
    /**
     * 网关设备的设备名
     */
    GatewayDeviceName: string;
    /**
     * 偏移量，Offset从0开始
     */
    Offset: number;
    /**
     * 分页的页大小
     */
    Limit: number;
    /**
     * LoRa产品的ID
     */
    ProductId?: string;
}
/**
 * SDK日志项
 */
export interface SDKLogItem {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 日志等级
     */
    Level: string;
    /**
     * 日志时间
     */
    DateTime: string;
    /**
     * 日志内容
     */
    Content: string;
}
/**
 * PublishMessage返回参数结构体
 */
export interface PublishMessageResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePrivateCAs请求参数结构体
 */
export declare type DescribePrivateCAsRequest = null;
/**
 * BindDevices返回参数结构体
 */
export interface BindDevicesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 重置设备状态结果
 */
export interface ResetDeviceResult {
    /**
     * 设备名
     */
    DeviceName: string;
    /**
     * 是否成功
     */
    Success: boolean;
    /**
     * 失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason: string;
}
/**
 * 搜索关键词
 */
export interface SearchKeyword {
    /**
     * 搜索条件的Key
     */
    Key: string;
    /**
     * 搜索条件的值
     */
    Value?: string;
}
/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
    /**
     * 需要查看设备列表的产品 ID
     */
    ProductId: string;
    /**
     * 偏移量，Offset从0开始
     */
    Offset: number;
    /**
     * 分页的大小，数值范围 10-250
     */
    Limit: number;
    /**
     * 设备固件版本号，若不带此参数会返回所有固件版本的设备。传"None-FirmwareVersion"查询无版本号的设备
     */
    FirmwareVersion?: string;
    /**
     * 需要过滤的设备名称
     */
    DeviceName?: string;
    /**
     * 设备是否启用，0禁用状态1启用状态，默认不区分
     */
    EnableState?: number;
}
/**
 * DescribeDeviceClientKey返回参数结构体
 */
export interface DescribeDeviceClientKeyResponse {
    /**
     * 设备的私钥
     */
    ClientKey: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePrivateCA返回参数结构体
 */
export interface DescribePrivateCAResponse {
    /**
     * 私有化CA详情
     */
    CA: CertInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadFirmware请求参数结构体
 */
export interface UploadFirmwareRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
    /**
     * 固件的MD5值
     */
    Md5sum: string;
    /**
     * 固件的大小
     */
    FileSize: number;
    /**
     * 固件名称
     */
    FirmwareName?: string;
    /**
     * 固件描述
     */
    FirmwareDescription?: string;
    /**
     * 固件用户自定义配置信息
     */
    FirmwareUserDefined?: string;
}
/**
 * UpdateDeviceLogLevel返回参数结构体
 */
export interface UpdateDeviceLogLevelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisableTopicRule请求参数结构体
 */
export interface DisableTopicRuleRequest {
    /**
     * 规则名称
     */
    RuleName: string;
}
/**
 * ResetDeviceState返回参数结构体
 */
export interface ResetDeviceStateResponse {
    /**
     * 批量重置设备成功数
     */
    SuccessCount: number;
    /**
     * 批量重置设备结果
     */
    ResetDeviceResults: Array<ResetDeviceResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 固件升级任务信息
 */
export interface FirmwareTaskInfo {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: number;
    /**
     * 任务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 任务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: number;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: number;
}
/**
 * CreateTopicRule返回参数结构体
 */
export interface CreateTopicRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListLogPayload请求参数结构体
 */
export interface ListLogPayloadRequest {
    /**
     * 日志开始时间，毫秒级时间戳
     */
    MinTime: number;
    /**
     * 日志结束时间，毫秒级时间戳
     */
    MaxTime: number;
    /**
     * 查询关键字，可以同时支持键值查询和文本查询，例如，查询某key的值为value，并且包含某word的日志，该参数为：key:value word。键值或文本可以包含多个，以空格隔开。其中可以索引的key比如：RequestID、ProductID、DeviceName等。
  一个典型的查询示例：ProductID:ABCDE12345 DeviceName:test publish
     */
    Keywords: string;
    /**
     * 日志检索上下文
     */
    Context?: string;
    /**
     * 日志最大条数
     */
    MaxNum?: number;
}
/**
 * CreateTopicRule请求参数结构体
 */
export interface CreateTopicRuleRequest {
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 规则内容
     */
    TopicRulePayload: TopicRulePayload;
}
/**
 * DescribeResourceTasks返回参数结构体
 */
export interface DescribeResourceTasksResponse {
    /**
     * 资源任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskInfos: Array<FirmwareTaskInfo>;
    /**
     * 资源任务总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFirmwareTaskStatistics请求参数结构体
 */
export interface DescribeFirmwareTaskStatisticsRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
}
/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePrivateCA请求参数结构体
 */
export interface DeletePrivateCARequest {
    /**
     * 私有CA证书名称
     */
    CertName: string;
}
/**
 * CreateTaskFileUrl返回参数结构体
 */
export interface CreateTaskFileUrlResponse {
    /**
     * 任务文件上传链接
     */
    Url: string;
    /**
     * 任务文件名
     */
    FileName: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProductTasks返回参数结构体
 */
export interface DescribeProductTasksResponse {
    /**
     * 符合条件的任务总个数
     */
    TotalCount: number;
    /**
     * 任务详细信息列表
     */
    TaskInfos: Array<ProductTaskInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnableTopicRule请求参数结构体
 */
export interface EnableTopicRuleRequest {
    /**
     * 规则名称
     */
    RuleName: string;
}
/**
 * 设备资源详细信息
 */
export interface DeviceResourceInfo {
    /**
     * 产品ID
     */
    ProductID: string;
    /**
     * 产品名
     */
    ProductName: string;
    /**
     * 资源名称
     */
    Name: string;
    /**
     * 资源文件md5
     */
    Md5: string;
    /**
     * 资源文件大小
     */
    Size: number;
    /**
     * 资源更新时间
     */
    UpdateTime: string;
    /**
     * 设备名称
     */
    DeviceName: string;
    /**
     * 设备资源上传状态
     */
    Status: number;
    /**
     * 设备资源上传百分比
     */
    Percent: number;
}
/**
 * DescribeFirmwareTask请求参数结构体
 */
export interface DescribeFirmwareTaskRequest {
    /**
     * 产品ID
     */
    ProductId: string;
    /**
     * 固件版本号
     */
    FirmwareVersion: string;
    /**
     * 固件任务ID
     */
    TaskId: number;
}
