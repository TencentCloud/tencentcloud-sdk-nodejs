/**
 * InquireAuditCredit返回参数结构体
 */
export interface InquireAuditCreditResponse {
    /**
     * 可创建跟踪集的数量
     */
    AuditAmount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopLogging请求参数结构体
 */
export interface StopLoggingRequest {
    /**
     * 跟踪集名称
     */
    AuditName: string;
}
/**
 * cmq地域信息
 */
export interface CmqRegionInfo {
    /**
     * 地域描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CmqRegionName?: string;
    /**
     * cmq地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CmqRegion?: string;
}
/**
 * GetAttributeKey请求参数结构体
 */
export interface GetAttributeKeyRequest {
    /**
     * 网站类型，取值范围是zh和en。如果不传值默认zh
     */
    WebsiteType?: string;
}
/**
 * 跟踪集存储信息
 */
export interface Storage {
    /**
     * 存储类型（目前支持 cos、cls）
     */
    StorageType: string;
    /**
     * 存储所在地域
     */
    StorageRegion: string;
    /**
     * 存储名称(cos：存储名称为用户自定义的存储桶名称，不包含"-APPID"，仅支持小写字母、数字以及中划线"-"的组合，不能超过50字符，且不支持中划线"-"开头或结尾； cls：存储名称为日志主题id，字符长度为1-50个字符)
     */
    StorageName: string;
    /**
     * 存储目录前缀，cos日志文件前缀仅支持字母和数字的组合，3-40个字符
     */
    StoragePrefix: string;
    /**
     * 被指定存储用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageAccountId?: string;
    /**
     * 被指定存储用户appid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageAppId?: string;
}
/**
 * DescribeAuditTracks返回参数结构体
 */
export interface DescribeAuditTracksResponse {
    /**
     * 跟踪集列表
     */
    Tracks?: Array<Tracks>;
    /**
     * 总数目
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartLogging请求参数结构体
 */
export interface StartLoggingRequest {
    /**
     * 跟踪集名称
     */
    AuditName: string;
}
/**
 * ModifyAuditTrack返回参数结构体
 */
export interface ModifyAuditTrackResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquireAuditCredit请求参数结构体
 */
export declare type InquireAuditCreditRequest = null;
/**
 * DescribeEvents返回参数结构体
 */
export interface DescribeEventsResponse {
    /**
     * 日志集合是否结束。true表示结束，无需进行翻页。
     */
    ListOver?: boolean;
    /**
     * 查看更多日志的凭证
     */
    NextToken?: number;
    /**
     * 日志集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Events?: Array<Event>;
    /**
     * 此字段已经废弃。翻页请使用ListOver配合NextToken，在ListOver为false进行下一页数据读取。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListCosEnableRegion返回参数结构体
 */
export interface ListCosEnableRegionResponse {
    /**
     * 操作审计支持的cos可用区
     */
    EnableRegions?: Array<CosRegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LookUpEvents请求参数结构体
 */
export interface LookUpEventsRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 检索条件
     */
    LookupAttributes?: Array<LookupAttribute>;
    /**
     * 查看更多日志的凭证
     */
    NextToken?: string;
    /**
     * 返回日志的最大条数
     */
    MaxResults?: number;
    /**
     * 操作审计模式，有效值：standard | quick，其中standard是标准模式，quick是极速模式。默认为标准模式
     */
    Mode?: string;
}
/**
 * DescribeAuditTrack请求参数结构体
 */
export interface DescribeAuditTrackRequest {
    /**
     * 跟踪集 ID
     */
    TrackId: number;
}
/**
 * UpdateAudit请求参数结构体
 */
export interface UpdateAuditRequest {
    /**
     * 跟踪集名称
     */
    AuditName: string;
    /**
     * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，操作审计会将您的日志内容实时投递到您指定地域的指定队列中。
     */
    IsEnableCmqNotify?: number;
    /**
     * 管理事件的读写属性。1：只读，2：只写，3：全部。
     */
    ReadWriteAttribute?: number;
    /**
     * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。操作审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
     */
    KeyId?: string;
    /**
     * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
     */
    CosRegion?: string;
    /**
     * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，操作审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
     */
    CmqQueueName?: string;
    /**
     * 是否创建新的cos存储桶。1：是，0：否。
     */
    IsCreateNewBucket?: number;
    /**
     * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
     */
    KmsRegion?: string;
    /**
     * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
     */
    IsEnableKmsEncry?: number;
    /**
     * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，操作审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
     */
    CosBucketName?: string;
    /**
     * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
     */
    CmqRegion?: string;
    /**
     * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。
     */
    LogFilePrefix?: string;
    /**
     * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
     */
    IsCreateNewQueue?: number;
}
/**
 * DescribeAuditTracks请求参数结构体
 */
export interface DescribeAuditTracksRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数目
     */
    PageSize: number;
}
/**
 * CreateEventsAuditTrack返回参数结构体
 */
export interface CreateEventsAuditTrackResponse {
    /**
     * 跟踪集 ID
     */
    TrackId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAuditTrack请求参数结构体
 */
export interface DeleteAuditTrackRequest {
    /**
     * 跟踪集 ID
     */
    TrackId: number;
}
/**
 * StartLogging返回参数结构体
 */
export interface StartLoggingResponse {
    /**
     * 是否开启成功
     */
    IsSuccess?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttributeKey值详情
 */
export interface AttributeKeyDetail {
    /**
     * 输入框类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelType: string;
    /**
     * 初始化展示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Starter: string;
    /**
     * 展示排序
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Order: number;
    /**
     * AttributeKey值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
    /**
     * 中文标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
}
/**
 * ListCosEnableRegion请求参数结构体
 */
export interface ListCosEnableRegionRequest {
    /**
     * 站点类型。zh表示中国区，en表示国际区。默认中国区。
     */
    WebsiteType?: string;
}
/**
 * ListKeyAliasByRegion返回参数结构体
 */
export interface ListKeyAliasByRegionResponse {
    /**
     * CMK的总数量
     */
    TotalCount?: number;
    /**
     * 密钥别名
     */
    KeyMetadatas?: Array<KeyMetadata>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAuditTrack返回参数结构体
 */
export interface CreateAuditTrackResponse {
    /**
     * 跟踪集 ID
     */
    TrackId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 跟踪集列表
 */
export interface Tracks {
    /**
     * 跟踪集名称
     */
    Name: string;
    /**
     * 跟踪事件类型（读：Read；写：Write；全部：*）
     */
    ActionType: string;
    /**
     * 跟踪事件所属产品（如：cos，全部：*）
     */
    ResourceType: string;
    /**
     * 跟踪集状态（未开启：0；开启：1）
     */
    Status: number;
    /**
     * 跟踪事件接口名列表（全部：[*]）
     */
    EventNames: Array<string>;
    /**
     * 数据投递存储（目前支持 cos、cls）
     */
    Storage: Storage;
    /**
     * 跟踪集创建时间
     */
    CreateTime: string;
    /**
     * 跟踪集 ID
     */
    TrackId: number;
}
/**
 * 资源类型
 */
export interface Resource {
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
}
/**
 * ListAudits请求参数结构体
 */
export declare type ListAuditsRequest = null;
/**
 * ModifyAuditTrack请求参数结构体
 */
export interface ModifyAuditTrackRequest {
    /**
     * 跟踪集 ID
     */
    TrackId: number;
    /**
     * 跟踪集名称，仅支持大小写字母、数字、-以及_的组合，3-48个字符
     */
    Name?: string;
    /**
     * 跟踪事件类型（读：Read；写：Write；全部：*）
     */
    ActionType?: string;
    /**
     * 跟踪事件所属产品（支持全部产品或单个产品，如：cos，全部：*）
     */
    ResourceType?: string;
    /**
     * 跟踪集状态（未开启：0；开启：1）
     */
    Status?: number;
    /**
     * 跟踪事件接口名列表（ResourceType为 * 时，EventNames必须为全部：["*"]；指定ResourceType时，支持全部接口：["*"]；支持部分接口：["cos", "cls"]，接口列表上限10个）
     */
    EventNames?: Array<string>;
    /**
     * 数据投递存储（目前支持 cos、cls）
     */
    Storage?: Storage;
    /**
     * 是否开启将集团成员操作日志投递到集团管理账号或者可信服务管理账号(0：未开启，1：开启，只能集团管理账号或者可信服务管理账号开启此项功能)
     */
    TrackForAllMembers?: number;
}
/**
 * StopLogging返回参数结构体
 */
export interface StopLoggingResponse {
    /**
     * 是否关闭成功
     */
    IsSuccess?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 跟踪集数据投递筛选条件
 */
export interface Filter {
    /**
     * 资源筛选条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceFields?: Array<ResourceField>;
}
/**
 * 资源筛选条件
 */
export interface ResourceField {
    /**
     * 跟踪事件所属产品（支持全部产品或单个产品，如：cam，全部：*）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType: string;
    /**
     * 跟踪事件类型（读：Read；写：Write；全部：*）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType: string;
    /**
     * 跟踪事件接口名列表（ResourceType为 * 时，EventNames必须为全部：[""]；指定ResourceType时，支持全部接口：[""]；支持部分接口：["cos", "cls"]，接口列表上限10个）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventNames: Array<string>;
}
/**
 * CreateAuditTrack请求参数结构体
 */
export interface CreateAuditTrackRequest {
    /**
     * 跟踪集名称，仅支持大小写字母、数字、-以及_的组合，3-48个字符
     */
    Name: string;
    /**
     * 跟踪集状态（未开启：0；开启：1）
     */
    Status: number;
    /**
     * 数据投递存储（目前支持 cos、cls）
     */
    Storage: Storage;
    /**
     * 跟踪事件类型（读：Read；写：Write；全部：*）
     */
    ActionType: string;
    /**
     * 跟踪事件所属产品（支持全部产品或单个产品，如：cos，全部：*）
     */
    ResourceType: string;
    /**
     * 跟踪事件接口名列表（ResourceType为 * 时，EventNames必须为全部：["*"]；指定ResourceType时，支持全部接口：["*"]；支持部分接口：["cos", "cls"]，接口列表上限10个）
     */
    EventNames: Array<string>;
    /**
     * 是否开启将集团成员操作日志投递到集团管理账号或者可信服务管理账号(0：未开启，1：开启，只能集团管理账号或者可信服务管理账号开启此项功能)
     */
    TrackForAllMembers?: number;
}
/**
 * 检索条件
 */
export interface LookupAttribute {
    /**
     * AttributeKey的有效取值范围是:RequestId、EventName、ReadOnly、Username、ResourceType、ResourceName和AccessKeyId，EventId
     */
    AttributeKey: string;
    /**
     * AttributeValue的值
     */
    AttributeValue?: string;
}
/**
 * ListAudits返回参数结构体
 */
export interface ListAuditsResponse {
    /**
     * 查询跟踪集概要集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuditSummarys?: Array<AuditSummary>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CMK属性
 */
export interface KeyMetadata {
    /**
     * 作为密钥更容易辨识，更容易被人看懂的别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * CMK的全局唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyId?: string;
}
/**
 * DescribeEvents请求参数结构体
 */
export interface DescribeEventsRequest {
    /**
     * 起始时间戳（单位秒，不超过当前时间 90 天）
     */
    StartTime: number;
    /**
     * 结束时间戳（单位秒，查询时间跨度小于 30 天）
     */
    EndTime: number;
    /**
     * 查看更多日志的凭证
     */
    NextToken?: number;
    /**
     * 返回日志的最大条数（最大 50 条）
     */
    MaxResults?: number;
    /**
     * 检索条件（目前支持 RequestId：请求 ID、EventName：事件名称、ActionType：操作类型（Write：写；Read：读）、PrincipalId：子账号、ResourceType：资源类型、ResourceId：资源Id、ResourceName：资源名称、AccessKeyId：密钥 ID、SensitiveAction：是否敏感操作、ApiErrorCode：API 错误码、CamErrorCode：CAM 错误码、Tags：标签（AttributeValue格式：[{"key":"*","value":"*"}]）备注:检索的各个条件间是与的关系,EventName传多个值内部是或的关系）
     */
    LookupAttributes?: Array<LookupAttribute>;
    /**
     * 是否返回 IP 归属地（1 返回，0 不返回）
     */
    IsReturnLocation?: number;
}
/**
 * UpdateAudit返回参数结构体
 */
export interface UpdateAuditResponse {
    /**
     * 是否更新成功
     */
    IsSuccess?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAudit请求参数结构体
 */
export interface DescribeAuditRequest {
    /**
     * 跟踪集名称
     */
    AuditName: string;
}
/**
 * ListKeyAliasByRegion请求参数结构体
 */
export interface ListKeyAliasByRegionRequest {
    /**
     * Kms地域
     */
    KmsRegion: string;
    /**
     * 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200
     */
    Limit?: number;
    /**
     * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
     */
    Offset?: number;
}
/**
 * ListCmqEnableRegion请求参数结构体
 */
export interface ListCmqEnableRegionRequest {
    /**
     * 站点类型。zh表示中国区，en表示国际区。默认中国区。
     */
    WebsiteType?: string;
}
/**
 * GetAttributeKey返回参数结构体
 */
export interface GetAttributeKeyResponse {
    /**
     * AttributeKey的有效取值范围
     */
    AttributeKeyDetails?: Array<AttributeKeyDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEventsAuditTrack返回参数结构体
 */
export interface ModifyEventsAuditTrackResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListCmqEnableRegion返回参数结构体
 */
export interface ListCmqEnableRegionResponse {
    /**
     * 操作审计支持的cmq的可用区
     */
    EnableRegions?: Array<CmqRegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LookUpEvents返回参数结构体
 */
export interface LookUpEventsResponse {
    /**
     * 查看更多日志的凭证
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 日志集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Events?: Array<Event>;
    /**
     * 日志集合是否结束
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListOver?: boolean;
    /**
     * 数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEventsAuditTrack请求参数结构体
 */
export interface CreateEventsAuditTrackRequest {
    /**
     * 跟踪集名称，仅支持大小写字母、数字、-以及_的组合，3-48个字符
     */
    Name: string;
    /**
     * 跟踪集状态（未开启：0；开启：1）
     */
    Status: number;
    /**
     * 数据投递存储（目前支持 cos、cls）
     */
    Storage: Storage;
    /**
     * 数据过滤条件
     */
    Filters: Filter;
    /**
     * 是否开启将集团成员操作日志投递到集团管理账号或者可信服务管理账号(0：未开启，1：开启，只能集团管理账号或者可信服务管理账号开启此项功能)
     */
    TrackForAllMembers?: number;
}
/**
 * DeleteAuditTrack返回参数结构体
 */
export interface DeleteAuditTrackResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * cos地域信息
 */
export interface CosRegionInfo {
    /**
     * cos地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosRegion?: string;
    /**
     * 地域描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosRegionName?: string;
}
/**
 * DescribeAuditTrack返回参数结构体
 */
export interface DescribeAuditTrackResponse {
    /**
     * 跟踪集名称
     */
    Name?: string;
    /**
     * 跟踪事件类型（读：Read；写：Write；全部：*）
     */
    ActionType?: string;
    /**
     * 跟踪事件所属产品（如：cos，全部：*）
     */
    ResourceType?: string;
    /**
     * 跟踪集状态（未开启：0；开启：1）
     */
    Status?: number;
    /**
     * 跟踪事件接口名列表（全部：[*]）
     */
    EventNames?: Array<string>;
    /**
     * 数据投递存储（目前支持 cos、cls）
     */
    Storage?: Storage;
    /**
     * 跟踪集创建时间
     */
    CreateTime?: string;
    /**
     * 是否开启将集团成员操作日志投递到集团管理账号或者可信服务管理账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrackForAllMembers?: number;
    /**
     * 数据投递过滤条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Filters?: Filter;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEventsAuditTrack请求参数结构体
 */
export interface ModifyEventsAuditTrackRequest {
    /**
     * 跟踪集 ID
     */
    TrackId: number;
    /**
     * 跟踪集名称，仅支持大小写字母、数字、-以及_的组合，3-48个字符
     */
    Name?: string;
    /**
     * 跟踪集状态（未开启：0；开启：1）
     */
    Status?: number;
    /**
     * 数据投递存储（目前支持 cos、cls）
     */
    Storage?: Storage;
    /**
     * 是否开启将集团成员操作日志投递到集团管理账号或者可信服务管理账号(0：未开启，1：开启，只能集团管理账号或者可信服务管理账号开启此项功能)
     */
    TrackForAllMembers?: number;
    /**
     * 多产品筛选过滤条件
     */
    Filters?: Filter;
}
/**
 * DescribeAudit返回参数结构体
 */
export interface DescribeAuditResponse {
    /**
     * 是否开启cmq消息通知。1：是，0：否。
     */
    IsEnableCmqNotify?: number;
    /**
     * 管理事件读写属性，1：只读，2：只写，3：全部
     */
    ReadWriteAttribute?: number;
    /**
     * CMK的全局唯一标识符。
     */
    KeyId?: string;
    /**
     * 跟踪集状态，1：开启，0：停止。
     */
    AuditStatus?: number;
    /**
     * 跟踪集名称。
     */
    AuditName?: string;
    /**
     * cos存储桶所在地域。
     */
    CosRegion?: string;
    /**
     * 队列名称。
     */
    CmqQueueName?: string;
    /**
     * CMK别名。
     */
    KmsAlias?: string;
    /**
     * kms地域。
     */
    KmsRegion?: string;
    /**
     * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
     */
    IsEnableKmsEncry?: number;
    /**
     * cos存储桶名称。
     */
    CosBucketName?: string;
    /**
     * 队列所在地域。
     */
    CmqRegion?: string;
    /**
     * 日志前缀。
     */
    LogFilePrefix?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 日志详情
 */
export interface Event {
    /**
     * 日志ID
     */
    EventId?: string;
    /**
     * 用户名
     */
    Username?: string;
    /**
     * 事件时间
     */
    EventTime?: string;
    /**
     * 日志详情
     */
    CloudAuditEvent?: string;
    /**
     * 资源类型中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
     */
    ResourceTypeCn?: string;
    /**
     * 鉴权错误码
     */
    ErrorCode?: number;
    /**
     * 事件名称
     */
    EventName?: string;
    /**
     * 证书ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretId?: string;
    /**
     * 请求来源
     */
    EventSource?: string;
    /**
     * 请求ID
     */
    RequestID?: string;
    /**
     * 资源地域
     */
    ResourceRegion?: string;
    /**
     * 主账号ID
     */
    AccountID?: number;
    /**
     * 源IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceIPAddress?: string;
    /**
     * 事件名称中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
     */
    EventNameCn?: string;
    /**
     * 资源对
     */
    Resources?: Resource;
    /**
     * 事件地域
     */
    EventRegion?: string;
    /**
     * IP 归属地
     */
    Location?: string;
}
/**
 * 跟踪集概览
 */
export interface AuditSummary {
    /**
     * 跟踪集状态，1：开启，0：关闭
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuditStatus?: number;
    /**
     * COS存储桶名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucketName?: string;
    /**
     * 跟踪集名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuditName?: string;
    /**
     * 日志前缀
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogFilePrefix?: string;
}
