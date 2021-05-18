/**
 * DescribeCloudStorageDate请求参数结构体
 */
export interface DescribeCloudStorageDateRequest {
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
 * 云存时间轴接口返回数据
 */
export interface CloudStorageTimeData {
    /**
      * 云存时间轴信息列表
      */
    TimeList: Array<CloudStorageTimeInfo>;
    /**
      * 播放地址
      */
    VideoURL: string;
}
/**
 * CreateCloudStorage请求参数结构体
 */
export interface CreateCloudStorageRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 云存套餐ID：
yc1m3d ： 全时3天存储月套餐。
yc1m7d ： 全时7天存储月套餐。
yc1m30d ：全时30天存储月套餐。
yc1y3d ：全时3天存储年套餐。
yc1y7d ：全时7天存储年套餐。
yc1y30d ：全时30天存储年套餐。
ye1m3d ：事件3天存储月套餐。
ye1m7d ：事件7天存储月套餐。
ye1m30d ：事件30天存储月套餐 。
ye1y3d ：事件3天存储年套餐。
ye1y7d ：事件7天存储年套餐。
ye1y30d ：事件30天存储年套餐。
yc1w7d : 全时7天存储周套餐。
ye1w7d : 事件7天存储周套餐。
      */
    PackageId: string;
}
/**
 * 批次元数据
 */
export interface VideoBatch {
    /**
      * 批次ID
      */
    Id: number;
    /**
      * 用户ID
      */
    UserId: string;
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 状态：1：待创建设备 2：创建中 3：已完成
      */
    Status: number;
    /**
      * 设备前缀
      */
    DevPre: string;
    /**
      * 设备数量
      */
    DevNum: number;
    /**
      * 已创建设备数量
      */
    DevNumCreated: number;
    /**
      * 批次下载地址
      */
    BatchURL: string;
    /**
      * 创建时间。unix时间戳
      */
    CreateTime: number;
    /**
      * 修改时间。unix时间戳
      */
    UpdateTime: number;
}
/**
 * ImportModelDefinition返回参数结构体
 */
export interface ImportModelDefinitionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeModelDefinition返回参数结构体
 */
export interface DescribeModelDefinitionResponse {
    /**
      * 产品数据模板
      */
    Model: ProductModelDefinition;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBatch请求参数结构体
 */
export interface CreateBatchRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 批次创建的设备数量
      */
    DevNum: number;
    /**
      * 批次创建的设备前缀。不超过24个字符
      */
    DevPre: string;
}
/**
 * DescribeCloudStorageTime返回参数结构体
 */
export interface DescribeCloudStorageTimeResponse {
    /**
      * 接口返回数据
      */
    Data: CloudStorageTimeData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProducts请求参数结构体
 */
export interface DescribeProductsRequest {
    /**
      * 分页的大小，最大100
      */
    Limit: number;
    /**
      * 偏移量，Offset从0开始
      */
    Offset: number;
}
/**
 * DescribeDeviceEventHistory返回参数结构体
 */
export interface DescribeDeviceEventHistoryResponse {
    /**
      * 搜索上下文, 用作查询游标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Context: string;
    /**
      * 搜索结果数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 搜索结果是否已经结束
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listover: boolean;
    /**
      * 搜集结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventHistory: Array<EventHistoryItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeviceActionHistory请求参数结构体
 */
export interface DescribeDeviceActionHistoryRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 开始范围的 unix 毫秒时间戳
      */
    MinTime: number;
    /**
      * 结束范围的 unix 毫秒时间戳
      */
    MaxTime: number;
    /**
      * 动作Id
      */
    ActionId?: string;
    /**
      * 查询条数
      */
    Limit?: number;
    /**
      * 游标，标识查询位置。
      */
    Context?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProduct返回参数结构体
 */
export interface ModifyProductResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyProduct请求参数结构体
 */
export interface ModifyProductRequest {
    /**
      * 产品id
      */
    ProductId: string;
    /**
      * 修改的产品名称
      */
    ProductName?: string;
    /**
      * 修改的产品描述
      */
    ProductDescription?: string;
}
/**
 * ModifyModelDefinition请求参数结构体
 */
export interface ModifyModelDefinitionRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 数据模板定义
      */
    ModelSchema: string;
}
/**
 * DescribeBatchs返回参数结构体
 */
export interface DescribeBatchsResponse {
    /**
      * 批次数量
      */
    TotalCount: number;
    /**
      * 批次列表详情
      */
    Data: Array<VideoBatch>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TransferCloudStorage返回参数结构体
 */
export interface TransferCloudStorageResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeForwardRule返回参数结构体
 */
export interface DescribeForwardRuleResponse {
    /**
      * 腾讯云账号
      */
    Endpoint: string;
    /**
      * 队列名称
      */
    QueueName: string;
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 消息类型
      */
    MsgType: number;
    /**
      * 结果
      */
    Result: number;
    /**
      * 角色名
      */
    RoleName: string;
    /**
      * 角色ID
      */
    RoleID: number;
    /**
      * 队列区域
      */
    QueueRegion: string;
    /**
      * 队列类型，0：CMQ，1：Ckafka
      */
    QueueType: number;
    /**
      * 实例id， 目前只有Ckafaka会用到
      */
    InstanceId: string;
    /**
      * 实例名称，目前只有Ckafaka会用到
      */
    InstanceName: string;
    /**
      * 错误消息
      */
    ErrMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBatch请求参数结构体
 */
export interface DescribeBatchRequest {
    /**
      * 批次ID
      */
    BatchId: number;
}
/**
 * 云存时间轴信息
 */
export interface CloudStorageTimeInfo {
    /**
      * 开始时间
      */
    StartTime: number;
    /**
      * 结束时间
      */
    EndTime: number;
}
/**
 * ModifyDevice请求参数结构体
 */
export interface ModifyDeviceRequest {
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
    EnableState?: number;
}
/**
 * 产品模型定义
 */
export interface ProductModelDefinition {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 模型定义
      */
    ModelDefine: string;
    /**
      * 更新时间，秒级时间戳
      */
    UpdateTime: number;
    /**
      * 创建时间，秒级时间戳
      */
    CreateTime: number;
    /**
      * 产品所属分类的模型快照（产品创建时刻的）
注意：此字段可能返回 null，表示取不到有效值。
      */
    CategoryModel: string;
    /**
      * 产品的连接类型的模型
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetTypeModel: string;
}
/**
 * 查询设备历史
 */
export interface ActionHistory {
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 动作Id
      */
    ActionId: string;
    /**
      * 动作名称
      */
    ActionName: string;
    /**
      * 请求时间
      */
    ReqTime: number;
    /**
      * 响应时间
      */
    RspTime: number;
    /**
      * 输入参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputParams: string;
    /**
      * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutputParams: string;
    /**
      * 调用方式
      */
    Calling: string;
    /**
      * 调用Id
      */
    ClientToken: string;
    /**
      * 调用状态
      */
    Status: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFirmware请求参数结构体
 */
export interface DescribeFirmwareRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 固件版本号
      */
    FirmwareVersion: string;
}
/**
 * DescribeProduct请求参数结构体
 */
export interface DescribeProductRequest {
    /**
      * 产品id
      */
    ProductId: string;
}
/**
 * DescribeProducts返回参数结构体
 */
export interface DescribeProductsResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 产品详情列表
      */
    Data: Array<VideoProduct>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckForwardAuth请求参数结构体
 */
export interface CheckForwardAuthRequest {
    /**
      * 控制台Skey
      */
    Skey: string;
    /**
      * 队列类型
      */
    QueueType: number;
}
/**
 * DescribeDeviceData请求参数结构体
 */
export interface DescribeDeviceDataRequest {
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
 * CreateBatch返回参数结构体
 */
export interface CreateBatchResponse {
    /**
      * 批次ID
      */
    BatchId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeviceActionHistory返回参数结构体
 */
export interface DescribeDeviceActionHistoryResponse {
    /**
      * 总条数
      */
    TotalCounts: number;
    /**
      * 动作历史
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActionHistories: Array<ActionHistory>;
    /**
      * 用于标识查询结果的上下文，翻页用。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Context: string;
    /**
      * 搜索结果是否已经结束。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listover: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetAllFirmwareVersion请求参数结构体
 */
export interface GetAllFirmwareVersionRequest {
    /**
      * 产品ID
      */
    ProductID: string;
}
/**
 * 设备通讯日志查询返回条目
 */
export interface DeviceCommLogItem {
    /**
      * 时间
      */
    Time: string;
    /**
      * 日志类型，device 设备上行，shadow 服务端下行。
      */
    Type: string;
    /**
      * 通讯数据。
      */
    Data: string;
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
 * DeleteFirmware返回参数结构体
 */
export interface DeleteFirmwareResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateForwardRule返回参数结构体
 */
export interface CreateForwardRuleResponse {
    /**
      * 腾讯云账号
      */
    Endpoint: string;
    /**
      * 队列名
      */
    QueueName: string;
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 消息类型
      */
    MsgType: number;
    /**
      * 结果
      */
    Result: number;
    /**
      * 角色名称
      */
    RoleName: string;
    /**
      * 角色ID
      */
    RoleID: number;
    /**
      * 队列区
      */
    QueueRegion: string;
    /**
      * 消息队列的类型。 0：CMQ，1：CKafaka
      */
    QueueType: number;
    /**
      * 实例id， 目前只有Ckafaka会用到
      */
    InstanceId: string;
    /**
      * 实例名称，目前只有Ckafaka会用到
      */
    InstanceName: string;
    /**
      * 错误消息
      */
    ErrMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchUpdateFirmware返回参数结构体
 */
export interface BatchUpdateFirmwareResponse {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
    /**
      * 产品ID
      */
    ProductId: string;
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
 * SetForwardAuth返回参数结构体
 */
export interface SetForwardAuthResponse {
    /**
      * 腾讯云账号
      */
    Endpoint: string;
    /**
      * 结果
      */
    Result: number;
    /**
      * 角色名
      */
    RoleName: string;
    /**
      * 角色ID
      */
    RoleID: number;
    /**
      * 消息队列类型
      */
    QueueType: number;
    /**
      * 错误消息
      */
    ErrMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EditFirmware请求参数结构体
 */
export interface EditFirmwareRequest {
    /**
      * 产品ID。
      */
    ProductID: string;
    /**
      * 固件版本号。
      */
    FirmwareVersion: string;
    /**
      * 固件名称。
      */
    FirmwareName: string;
    /**
      * 固件描述。
      */
    FirmwareDescription?: string;
}
/**
 * 设备历史数据结构
 */
export interface DeviceDataHistoryItem {
    /**
      * 时间点，毫秒时间戳
      */
    Time: string;
    /**
      * 字段取值
      */
    Value: string;
}
/**
 * DescribeDeviceEventHistory请求参数结构体
 */
export interface DescribeDeviceEventHistoryRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 搜索的事件类型：alert 表示告警，fault 表示故障，info 表示信息，为空则表示查询上述所有类型事件
      */
    Type?: string;
    /**
      * 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h
      */
    StartTime?: number;
    /**
      * 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间
      */
    EndTime?: number;
    /**
      * 搜索上下文, 用作查询游标
      */
    Context?: string;
    /**
      * 单次获取的历史数据项目的最大数量, 缺省10
      */
    Size?: number;
    /**
      * 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。
      */
    EventId?: string;
}
/**
 * DescribeCategory返回参数结构体
 */
export interface DescribeCategoryResponse {
    /**
      * Category详情
      */
    Data: ProductTemplate;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBalance请求参数结构体
 */
export interface DescribeBalanceRequest {
    /**
      * 账户类型：1-设备接入；2-云存。
      */
    AccountType: number;
}
/**
 * ImportModelDefinition请求参数结构体
 */
export interface ImportModelDefinitionRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 数据模板定义
      */
    ModelSchema: string;
}
/**
 * DescribeDeviceCommLog返回参数结构体
 */
export interface DescribeDeviceCommLogResponse {
    /**
      * 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。
      */
    Listover: boolean;
    /**
      * 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据
      */
    Context: string;
    /**
      * 日志数据结果数组，返回对应时间点及取值。
      */
    Results: Array<DeviceCommLogItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
    /**
      * 产品ID。
      */
    ProductId: string;
    /**
      * 设备名称。
      */
    DeviceName: string;
}
/**
 * GenerateSignedVideoURL返回参数结构体
 */
export interface GenerateSignedVideoURLResponse {
    /**
      * 视频防盗链播放URL
      */
    SignedVideoURL: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListFirmwares返回参数结构体
 */
export interface ListFirmwaresResponse {
    /**
      * 固件总数
      */
    TotalCount: number;
    /**
      * 固件列表
      */
    Firmwares: Array<FirmwareInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    ProductID: string;
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
    Version: string;
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 固件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 固件描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 固件Md5值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Md5sum: string;
    /**
      * 固件上传的秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Createtime: number;
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeviceCommLog请求参数结构体
 */
export interface DescribeDeviceCommLogRequest {
    /**
      * 开始时间
      */
    MinTime: number;
    /**
      * 结束时间
      */
    MaxTime: number;
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 返回条数
      */
    Limit?: number;
    /**
      * 检索上下文
      */
    Context?: string;
    /**
      * 类型：shadow 下行，device 上行
      */
    Type?: string;
}
/**
 * DeleteForwardRule请求参数结构体
 */
export interface DeleteForwardRuleRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 控制台Skey
      */
    Skey: string;
    /**
      * 队列类型
      */
    QueueType: number;
    /**
      * 队列名称
      */
    QueueName: string;
}
/**
 * DescribeBalanceTransactions请求参数结构体
 */
export interface DescribeBalanceTransactionsRequest {
    /**
      * 账户类型：1-设备接入；2-云存。
      */
    AccountType: number;
    /**
      * 分页游标开始，默认为0开始拉取第一条。
      */
    Offset: number;
    /**
      * 分页每页数量。
      */
    Limit: number;
    /**
      * 流水类型：All-全部类型；Recharge-充值；CreateOrder-新购。
      */
    Operation?: string;
}
/**
 * CreateProduct返回参数结构体
 */
export interface CreateProductResponse {
    /**
      * 产品详情
      */
    Data: VideoProduct;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      */
    Devices: Array<DeviceUpdateStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudStorageThumbnail返回参数结构体
 */
export interface DescribeCloudStorageThumbnailResponse {
    /**
      * 缩略图访问地址
      */
    ThumbnailURL: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RetryDeviceFirmwareTask返回参数结构体
 */
export interface RetryDeviceFirmwareTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GenerateSignedVideoURL请求参数结构体
 */
export interface GenerateSignedVideoURLRequest {
    /**
      * 视频播放原始URL地址
      */
    VideoURL: string;
    /**
      * 播放链接过期时间
      */
    ExpireTime: number;
}
/**
 * ResetCloudStorage返回参数结构体
 */
export interface ResetCloudStorageResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalVersion: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Version: string;
    /**
      * 固件MD5值
      */
    Md5sum: string;
    /**
      * 固件创建时间
      */
    CreateTime: number;
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 固件名称
      */
    Name: string;
    /**
      * 固件描述
      */
    Description: string;
    /**
      * 产品ID
      */
    ProductId: string;
}
/**
 * CreateProduct请求参数结构体
 */
export interface CreateProductRequest {
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 产品设备类型
      */
    DeviceType: number;
    /**
      * 产品有效期
      */
    ProductVaildYears: number;
    /**
      * 设备功能码
      */
    Features: Array<string>;
    /**
      * 设备操作系统
      */
    ChipOs: string;
    /**
      * 芯片厂商id
      */
    ChipManufactureId: string;
    /**
      * 芯片id
      */
    ChipId: string;
    /**
      * 产品描述信息
      */
    ProductDescription: string;
    /**
      * 认证方式。2 PSK
      */
    EncryptionType?: number;
}
/**
 * DescribeFirmwareTasks请求参数结构体
 */
export interface DescribeFirmwareTasksRequest {
    /**
      * 产品ID
      */
    ProductID: string;
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
 * GetFirmwareURL返回参数结构体
 */
export interface GetFirmwareURLResponse {
    /**
      * 固件URL
      */
    Url: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    DeviceName: string;
    /**
      * 设备是否在线，0不在线，1在线，2获取失败，3未激活
      */
    Online: number;
    /**
      * 设备最后上线时间
      */
    LoginTime: number;
    /**
      * 设备密钥
      */
    DevicePsk: string;
    /**
      * 设备启用状态
      */
    EnableState: number;
    /**
      * 设备过期时间
      */
    ExpireTime: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudStorageEvents请求参数结构体
 */
export interface DescribeCloudStorageEventsRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h
      */
    StartTime?: number;
    /**
      * 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间
      */
    EndTime?: number;
    /**
      * 请求上下文, 用作查询游标
      */
    Context?: string;
    /**
      * 单次获取的历史数据项目的最大数量, 缺省10
      */
    Size?: number;
    /**
      * 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。
      */
    EventId?: string;
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
    ProductID?: string;
    /**
      * 搜索过滤条件
      */
    Filters?: Array<SearchKeyword>;
}
/**
 * RetryDeviceFirmwareTask请求参数结构体
 */
export interface RetryDeviceFirmwareTaskRequest {
    /**
      * 产品ID
      */
    ProductID: string;
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
 * DescribeBalance返回参数结构体
 */
export interface DescribeBalanceResponse {
    /**
      * 账户余额，单位：分（人民币）。
      */
    Balance: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    ProductID: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EditFirmware返回参数结构体
 */
export interface EditFirmwareResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFirmwareTaskDistribution请求参数结构体
 */
export interface DescribeFirmwareTaskDistributionRequest {
    /**
      * 产品ID
      */
    ProductID: string;
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
 * 产品分类实体
 */
export interface ProductTemplate {
    /**
      * 实体ID
      */
    Id: number;
    /**
      * 分类字段
      */
    CategoryKey: string;
    /**
      * 分类名称
      */
    CategoryName: string;
    /**
      * 上层实体ID
      */
    ParentId: number;
    /**
      * 物模型
      */
    ModelTemplate: string;
    /**
      * 排列顺序
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListOrder: number;
    /**
      * 分类图标地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    IconUrl: string;
    /**
      * 九宫格图片地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    IconUrlGrid: string;
}
/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyForwardRule返回参数结构体
 */
export interface ModifyForwardRuleResponse {
    /**
      * 腾讯云账号
      */
    Endpoint: string;
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 结果
      */
    Result: number;
    /**
      * 错误信息
      */
    ErrMsg: string;
    /**
      * 队列类型
      */
    QueueType: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 账户流水
 */
export interface BalanceTransaction {
    /**
      * 账户类型：1-设备接入 2-云存。
      */
    AccountType: number;
    /**
      * 账户变更类型：Rechareg-充值；CreateOrder-新购。
      */
    Operation: string;
    /**
      * 流水ID。
      */
    DealId: string;
    /**
      * 变更金额，单位：分（人民币）。
      */
    Amount: number;
    /**
      * 变更后账户余额，单位：分（人民币）。
      */
    Balance: number;
    /**
      * 变更时间。
      */
    OperationTime: number;
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
 * DescribeFirmwareTaskDistribution返回参数结构体
 */
export interface DescribeFirmwareTaskDistributionResponse {
    /**
      * 固件升级任务状态分布信息
      */
    StatusInfos: Array<StatusStatistic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBatch返回参数结构体
 */
export interface DescribeBatchResponse {
    /**
      * 批次详情
      */
    Data: VideoBatch;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyForwardRule请求参数结构体
 */
export interface ModifyForwardRuleRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 消息类型
      */
    MsgType: number;
    /**
      * 控制台Skey
      */
    Skey: string;
    /**
      * 队列区域
      */
    QueueRegion: string;
    /**
      * 队列类型
      */
    QueueType: number;
    /**
      * 临时密钥
      */
    Consecretid?: string;
    /**
      * 实例ID
      */
    InstanceId?: string;
    /**
      * 实例名称
      */
    InstanceName?: string;
    /**
      * 队列或主题ID
      */
    QueueID?: string;
    /**
      * 队列或主题名称
      */
    QueueName?: string;
}
/**
 * DescribeCloudStorageEvents返回参数结构体
 */
export interface DescribeCloudStorageEventsResponse {
    /**
      * 云存事件列表
      */
    Events: Array<CloudStorageEvent>;
    /**
      * 请求上下文, 用作查询游标
      */
    Context: string;
    /**
      * 拉取结果是否已经结束
      */
    Listover: boolean;
    /**
      * 拉取结果数量
      */
    Total: number;
    /**
      * 视频播放URL
      */
    VideoURL: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * video产品元数据
 */
export interface VideoProduct {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 产品设备类型（普通设备)	1.普通设备
      */
    DeviceType: number;
    /**
      * 认证方式：2：PSK
      */
    EncryptionType: number;
    /**
      * 设备功能码
      */
    Features: Array<string>;
    /**
      * 操作系统
      */
    ChipOs: string;
    /**
      * 芯片厂商id
      */
    ChipManufactureId: string;
    /**
      * 芯片id
      */
    ChipId: string;
    /**
      * 产品描述信息
      */
    ProductDescription: string;
    /**
      * 创建时间unix时间戳
      */
    CreateTime: number;
    /**
      * 修改时间unix时间戳
      */
    UpdateTime: number;
}
/**
 * 云存事件
 */
export interface CloudStorageEvent {
    /**
      * 事件起始时间（Unix 时间戳，秒级
      */
    StartTime: number;
    /**
      * 事件结束时间（Unix 时间戳，秒级
      */
    EndTime: number;
    /**
      * 事件缩略图
      */
    Thumbnail: string;
    /**
      * 事件ID
      */
    EventId: string;
}
/**
 * DescribeCloudStorageDate返回参数结构体
 */
export interface DescribeCloudStorageDateResponse {
    /**
      * 云存日期数组，["2021-01-05","2021-01-06"]
      */
    Data: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeForwardRule请求参数结构体
 */
export interface DescribeForwardRuleRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 控制台Skey
      */
    Skey: string;
    /**
      * 队列类型，0：CMQ，1：Ckafka
      */
    QueueType: number;
    /**
      * 临时密钥
      */
    Consecretid?: string;
}
/**
 * UploadFirmware返回参数结构体
 */
export interface UploadFirmwareResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCloudStorage返回参数结构体
 */
export interface CreateCloudStorageResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    ProductID: string;
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
 * CancelDeviceFirmwareTask返回参数结构体
 */
export interface CancelDeviceFirmwareTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeviceDataHistory请求参数结构体
 */
export interface DescribeDeviceDataHistoryRequest {
    /**
      * 区间开始时间（Unix 时间戳，毫秒级）
      */
    MinTime: number;
    /**
      * 区间结束时间（Unix 时间戳，毫秒级）
      */
    MaxTime: number;
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 属性字段名称，对应数据模板中功能属性的标识符
      */
    FieldName: string;
    /**
      * 返回条数
      */
    Limit?: Array<number>;
    /**
      * 检索上下文
      */
    Context?: string;
}
/**
 * 设备事件的搜索结果项
 */
export interface EventHistoryItem {
    /**
      * 事件的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeStamp: number;
    /**
      * 事件的产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId: string;
    /**
      * 事件的设备名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeviceName: string;
    /**
      * 事件的标识符ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventId: string;
    /**
      * 事件的类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 事件的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: string;
}
/**
 * CreateForwardRule请求参数结构体
 */
export interface CreateForwardRuleRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 消息类型
      */
    MsgType: number;
    /**
      * 控制台Skey
      */
    Skey: string;
    /**
      * 队列区域
      */
    QueueRegion: string;
    /**
      * 队列类型
      */
    QueueType: number;
    /**
      * 临时密钥
      */
    Consecretid?: string;
    /**
      * 实例ID
      */
    InstanceId?: string;
    /**
      * 实例名称
      */
    InstanceName?: string;
    /**
      * 队列或主题ID
      */
    QueueID?: string;
    /**
      * 队列或主题名称
      */
    QueueName?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetForwardAuth请求参数结构体
 */
export interface SetForwardAuthRequest {
    /**
      * 控制台Skey
      */
    Skey: string;
    /**
      * 消息队列类型
      */
    QueueType: number;
}
/**
 * DescribeBalanceTransactions返回参数结构体
 */
export interface DescribeBalanceTransactionsResponse {
    /**
      * 账户流水总数。
      */
    TotalCount: number;
    /**
      * 账户流水详情数组。
      */
    Transactions: Array<BalanceTransaction>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDevice返回参数结构体
 */
export interface ModifyDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * BatchUpdateFirmware请求参数结构体
 */
export interface BatchUpdateFirmwareRequest {
    /**
      * 产品ID
      */
    ProductID: string;
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
}
/**
 * DescribeCloudStorageThumbnail请求参数结构体
 */
export interface DescribeCloudStorageThumbnailRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 缩略图文件名
      */
    Thumbnail: string;
}
/**
 * GetFirmwareURL请求参数结构体
 */
export interface GetFirmwareURLRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 固件版本
      */
    FirmwareVersion: string;
}
/**
 * DescribeCloudStorage返回参数结构体
 */
export interface DescribeCloudStorageResponse {
    /**
      * 云存开启状态，1为开启，0为未开启或已过期
      */
    Status: number;
    /**
      * 云存类型，1为全时云存，2为事件云存
      */
    Type: number;
    /**
      * 云存套餐过期时间
      */
    ExpireTime: number;
    /**
      * 云存回看时长
      */
    ShiftDuration: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProduct返回参数结构体
 */
export interface DescribeProductResponse {
    /**
      * 产品详情
      */
    Data: VideoProduct;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCategory请求参数结构体
 */
export interface DescribeCategoryRequest {
    /**
      * Category ID。
      */
    Id: number;
}
/**
 * DeleteFirmware请求参数结构体
 */
export interface DeleteFirmwareRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 固件版本
      */
    FirmwareVersion: string;
}
/**
 * DescribeCloudStorage请求参数结构体
 */
export interface DescribeCloudStorageRequest {
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
 * GetAllFirmwareVersion返回参数结构体
 */
export interface GetAllFirmwareVersionResponse {
    /**
      * 无
      */
    Version: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeviceDataHistory返回参数结构体
 */
export interface DescribeDeviceDataHistoryResponse {
    /**
      * 属性字段名称，对应数据模板中功能属性的标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
    FieldName: string;
    /**
      * 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listover: boolean;
    /**
      * 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Context: string;
    /**
      * 历史数据结果数组，返回对应时间点及取值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<DeviceDataHistoryItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 分页的大小，最大100
      */
    Limit: number;
    /**
      * 需要过滤的设备名称
      */
    DeviceName?: string;
}
/**
 * DescribeModelDefinition请求参数结构体
 */
export interface DescribeModelDefinitionRequest {
    /**
      * 产品ID
      */
    ProductId: string;
}
/**
 * CheckForwardAuth返回参数结构体
 */
export interface CheckForwardAuthResponse {
    /**
      * 腾讯云账号
      */
    Endpoint: string;
    /**
      * 结果
      */
    Result: number;
    /**
      * 产品ID
      */
    Productid: string;
    /**
      * 错误消息
      */
    ErrMsg: string;
    /**
      * 队列类型
      */
    QueueType: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeviceData返回参数结构体
 */
export interface DescribeDeviceDataResponse {
    /**
      * 设备数据
      */
    Data: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteForwardRule返回参数结构体
 */
export interface DeleteForwardRuleResponse {
    /**
      * 腾讯云账号
      */
    Endpoint: string;
    /**
      * 队列名称
      */
    QueueName: string;
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 删除结果
      */
    Result: number;
    /**
      * 错误消息
      */
    ErrMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TransferCloudStorage请求参数结构体
 */
export interface TransferCloudStorageRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 已开通云存的设备名称
      */
    DeviceName: string;
    /**
      * 未开通云存的设备名称
      */
    ToDeviceName: string;
}
/**
 * DescribeFirmwareTaskStatistics请求参数结构体
 */
export interface DescribeFirmwareTaskStatisticsRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 固件版本号
      */
    FirmwareVersion: string;
}
/**
 * DescribeBatchs请求参数结构体
 */
export interface DescribeBatchsRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 分页的大小，最大100
      */
    Limit: number;
    /**
      * 偏移量，Offset从0开始
      */
    Offset: number;
}
/**
 * 设备详细信息
 */
export interface DeviceInfo {
    /**
      * 设备名
      */
    DeviceName: string;
    /**
      * 设备是否在线，0不在线，1在线，2获取失败，3未激活
      */
    Online: number;
    /**
      * 设备最后上线时间
      */
    LoginTime: number;
    /**
      * 设备密钥
      */
    DevicePsk: string;
    /**
      * 设备启用状态
      */
    EnableState: number;
    /**
      * 设备过期时间
      */
    ExpireTime: number;
}
/**
 * ModifyModelDefinition返回参数结构体
 */
export interface ModifyModelDefinitionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ResetCloudStorage请求参数结构体
 */
export interface ResetCloudStorageRequest {
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
 * DescribeFirmwareTask请求参数结构体
 */
export interface DescribeFirmwareTaskRequest {
    /**
      * 产品ID
      */
    ProductID: string;
    /**
      * 固件版本号
      */
    FirmwareVersion: string;
    /**
      * 固件任务ID
      */
    TaskId: number;
}
/**
 * DescribeCloudStorageTime请求参数结构体
 */
export interface DescribeCloudStorageTimeRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 云存日期，例如"2020-01-05"
      */
    Date: string;
}
