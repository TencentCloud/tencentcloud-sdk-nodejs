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
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
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
 * ImportModelDefinition返回参数结构体
 */
export interface ImportModelDefinitionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeCategory请求参数结构体
 */
export interface DescribeCategoryRequest {
    /**
      * Category ID。
      */
    Id: number;
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
 * DescribeModelDefinition请求参数结构体
 */
export interface DescribeModelDefinitionRequest {
    /**
      * 产品ID
      */
    ProductId: string;
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
 * ModifyDevice返回参数结构体
 */
export interface ModifyDeviceResponse {
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
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
