/**
 * topic返回信息展示字段
 */
export interface TopicSet {
    /**
      * 当前该主题中消息数目（消息堆积数）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgCount: number;
    /**
      * 主题的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicId: string;
    /**
      * 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxMsgSize: number;
    /**
      * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trace: boolean;
    /**
      * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateUin: number;
    /**
      * 描述用户创建订阅时选择的过滤策略：
FilterType = 1表示用户使用 FilterTag 标签过滤;
FilterType = 2表示用户使用 BindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterType: number;
    /**
      * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName: string;
    /**
      * 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: number;
    /**
      * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRetentionSeconds: number;
    /**
      * 每秒钟发布消息的条数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Qps: number;
    /**
      * 主题的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 是否迁移到新版本。0 表示未迁移，1 表示迁移中，2 表示已经迁移完毕，3 表示回切状态，曾经迁移过，4 未知状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Migrate: number;
}
/**
 * RewindQueue请求参数结构体
 */
export interface RewindQueueRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
    /**
      * 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。
      */
    StartConsumeTime: number;
}
/**
 * DescribeSubscriptionDetail请求参数结构体
 */
export interface DescribeSubscriptionDetailRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
      */
    TopicName: string;
    /**
      * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
      */
    Offset?: number;
    /**
      * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
      */
    Limit?: number;
    /**
      * 筛选参数，目前只支持SubscriptionName，且仅支持一个关键字。
      */
    Filters?: Array<Filter>;
}
/**
 * ModifyQueueAttribute返回参数结构体
 */
export interface ModifyQueueAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateQueue请求参数结构体
 */
export interface CreateQueueRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
    /**
      * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
      */
    MaxMsgHeapNum?: number;
    /**
      * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
      */
    PollingWaitSeconds?: number;
    /**
      * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
      */
    VisibilityTimeout?: number;
    /**
      * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
      */
    MaxMsgSize?: number;
    /**
      * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
      */
    MsgRetentionSeconds?: number;
    /**
      * 队列是否开启回溯消息能力，该参数取值范围0-msgRetentionSeconds,即最大的回溯时间为消息在队列中的保留周期，0表示不开启。
      */
    RewindSeconds?: number;
    /**
      * 1 表示事务队列，0 表示普通队列
      */
    Transaction?: number;
    /**
      * 第一次回查间隔
      */
    FirstQueryInterval?: number;
    /**
      * 最大回查次数
      */
    MaxQueryCount?: number;
    /**
      * 死信队列名称
      */
    DeadLetterQueueName?: string;
    /**
      * 死信策略。0为消息被多次消费未删除，1为Time-To-Live过期
      */
    Policy?: number;
    /**
      * 最大接收次数 1-1000
      */
    MaxReceiveCount?: number;
    /**
      * policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间msgRetentionSeconds
      */
    MaxTimeToLive?: number;
    /**
      * 是否开启消息轨迹追踪，当不设置字段时，默认为不开启，该字段为true表示开启，为false表示不开启
      */
    Trace?: boolean;
}
/**
 * ModifySubscriptionAttribute返回参数结构体
 */
export interface ModifySubscriptionAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 死信队列策略
 */
export interface DeadLetterPolicy {
    /**
      * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterQueue: string;
    /**
      * 死信队列名字。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterQueueName: string;
    /**
      * 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxTimeToLive: number;
    /**
      * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Policy: number;
    /**
      * 最大接收次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxReceiveCount: number;
}
/**
 * ModifyTopicAttribute返回参数结构体
 */
export interface ModifyTopicAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSubscribe请求参数结构体
 */
export interface DeleteSubscribeRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    TopicName: string;
    /**
      * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    SubscriptionName: string;
}
/**
 * DescribeSubscriptionDetail返回参数结构体
 */
export interface DescribeSubscriptionDetailResponse {
    /**
      * 总数
      */
    TotalCount?: number;
    /**
      * Subscription属性集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubscriptionSet?: Array<Subscription>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSubscribe请求参数结构体
 */
export interface CreateSubscribeRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
      */
    TopicName: string;
    /**
      * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    SubscriptionName: string;
    /**
      * 订阅的协议，目前支持两种协议：http、queue。使用http协议，用户需自己搭建接受消息的web server。使用queue，消息会自动推送到CMQ queue，用户可以并发地拉取消息。
      */
    Protocol: string;
    /**
      * 接收通知的Endpoint，根据协议Protocol区分：对于http，Endpoint必须以“`http://`”开头，host可以是域名或IP；对于Queue，则填QueueName。 请注意，目前推送服务不能推送到私有网络中，因此Endpoint填写为私有网络域名或地址将接收不到推送的消息，目前支持推送到公网和基础网络。
      */
    Endpoint: string;
    /**
      * 向Endpoint推送消息出现错误时，CMQ推送服务器的重试策略。取值有：1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s...由于Topic消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是EXPONENTIAL_DECAY_RETRY。
      */
    NotifyStrategy?: string;
    /**
      * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
      */
    FilterTag?: Array<string>;
    /**
      * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
      */
    BindingKey?: Array<string>;
    /**
      * 推送内容的格式。取值：1）JSON；2）SIMPLIFIED，即raw格式。如果Protocol是queue，则取值必须为SIMPLIFIED。如果Protocol是http，两个值均可以，默认值是JSON。
      */
    NotifyContentFormat?: string;
}
/**
 * ClearQueue请求参数结构体
 */
export interface ClearQueueRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
}
/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
    /**
      * TopicName
      */
    TopicId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ClearSubscriptionFilterTags返回参数结构体
 */
export interface ClearSubscriptionFilterTagsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnbindDeadLetter返回参数结构体
 */
export interface UnbindDeadLetterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 事务消息策略
 */
export interface TransactionPolicy {
    /**
      * 最大查询次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxQueryCount: number;
    /**
      * 第一次回查时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstQueryInterval: number;
}
/**
 * DescribeTopicDetail请求参数结构体
 */
export interface DescribeTopicDetailRequest {
    /**
      * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。
      */
    Offset?: number;
    /**
      * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
      */
    Limit?: number;
    /**
      * 目前只支持过滤TopicName ， 且只能填一个过滤值。
      */
    Filters?: Array<Filter>;
    /**
      * 标签匹配。
      */
    TagKey?: string;
    /**
      * 精确匹配TopicName。
      */
    TopicName?: string;
}
/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    TopicName: string;
}
/**
 * DescribeTopicDetail返回参数结构体
 */
export interface DescribeTopicDetailResponse {
    /**
      * 主题列表总数。
      */
    TotalCount?: number;
    /**
      * 主题详情列表。
      */
    TopicSet?: Array<TopicSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeQueueDetail返回参数结构体
 */
export interface DescribeQueueDetailResponse {
    /**
      * 总队列数。
      */
    TotalCount?: number;
    /**
      * 队列详情列表。
      */
    QueueSet?: Array<QueueSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnbindDeadLetter请求参数结构体
 */
export interface UnbindDeadLetterRequest {
    /**
      * 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。
      */
    QueueName: string;
}
/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
      */
    TopicName: string;
    /**
      * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
      */
    MaxMsgSize?: number;
    /**
      * 用于指定主题的消息匹配策略。1：表示标签匹配策略；2：表示路由匹配策略，默认值为标签匹配策略。
      */
    FilterType?: number;
    /**
      * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
      */
    MsgRetentionSeconds?: number;
    /**
      * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
      */
    Trace?: boolean;
}
/**
 * DeleteQueue请求参数结构体
 */
export interface DeleteQueueRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
}
/**
 * 过滤参数
 */
export interface Filter {
    /**
      * 过滤参数的名字
      */
    Name?: string;
    /**
      * 数值
      */
    Values?: Array<string>;
}
/**
 * DescribeDeadLetterSourceQueues返回参数结构体
 */
export interface DescribeDeadLetterSourceQueuesResponse {
    /**
      * 满足本次条件的队列个数
      */
    TotalCount?: number;
    /**
      * 死信队列源队列
      */
    QueueSet?: Array<DeadLetterSource>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RewindQueue返回参数结构体
 */
export interface RewindQueueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTopicAttribute请求参数结构体
 */
export interface ModifyTopicAttributeRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    TopicName: string;
    /**
      * 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。
      */
    MaxMsgSize?: number;
    /**
      * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
      */
    MsgRetentionSeconds?: number;
    /**
      * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
      */
    Trace?: boolean;
}
/**
 * DescribeQueueDetail请求参数结构体
 */
export interface DescribeQueueDetailRequest {
    /**
      * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
      */
    Offset?: number;
    /**
      * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
      */
    Limit?: number;
    /**
      * 筛选参数，目前支持QueueName筛选，且仅支持一个关键字
      */
    Filters?: Array<Filter>;
    /**
      * 标签搜索
      */
    TagKey?: string;
    /**
      * 精确匹配QueueName
      */
    QueueName?: string;
}
/**
 * 批量queue属性信息
 */
export interface QueueSet {
    /**
      * 消息队列ID。
      */
    QueueId: string;
    /**
      * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RewindSeconds: number;
    /**
      * 创建者Uin。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateUin: number;
    /**
      * 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: number;
    /**
      * 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VisibilityTimeout: number;
    /**
      * 消息队列名字。
      */
    QueueName: string;
    /**
      * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trace: boolean;
    /**
      * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RewindMsgNum: number;
    /**
      * 飞行消息最大保留时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxDelaySeconds: number;
    /**
      * 事务消息策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionPolicy: TransactionPolicy;
    /**
      * 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRetentionSeconds: number;
    /**
      * 延迟消息数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DelayMsgNum: number;
    /**
      * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxMsgHeapNum: number;
    /**
      * 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PollingWaitSeconds: number;
    /**
      * 带宽限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bps: number;
    /**
      * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InactiveMsgNum: number;
    /**
      * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterPolicy: DeadLetterPolicy;
    /**
      * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActiveMsgNum: number;
    /**
      * 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxMsgSize: number;
    /**
      * 消息最小未消费时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinMsgTime: number;
    /**
      * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterSource: Array<DeadLetterSource>;
    /**
      * 事务消息队列。true表示是事务消息，false表示不是事务消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Transaction: boolean;
    /**
      * 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Qps: number;
    /**
      * 队列的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 是否迁移到新版本。0 表示仅同步元数据，1 表示迁移中，2 表示已经迁移完毕，3 表示回切状态，曾经迁移过，4 未迁移。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Migrate: number;
}
/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ClearSubscriptionFilterTags请求参数结构体
 */
export interface ClearSubscriptionFilterTagsRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
      */
    TopicName: string;
    /**
      * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    SubscriptionName: string;
}
/**
 * CreateQueue返回参数结构体
 */
export interface CreateQueueResponse {
    /**
      * 创建成功的queueId
      */
    QueueId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSubscribe返回参数结构体
 */
export interface DeleteSubscribeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeadLetterSourceQueues请求参数结构体
 */
export interface DescribeDeadLetterSourceQueuesRequest {
    /**
      * 死信队列名称
      */
    DeadLetterQueueName: string;
    /**
      * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。
      */
    Limit?: number;
    /**
      * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
      */
    Offset?: number;
    /**
      * 过滤死信队列源队列名称，目前仅支持SourceQueueName过滤
      */
    Filters?: Array<Filter>;
}
/**
 * 标签
 */
export interface Tag {
    /**
      * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagKey: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagValue: string;
}
/**
 * 死信源队列信息
 */
export interface DeadLetterSource {
    /**
      * 消息队列ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    QueueId: string;
    /**
      * 消息队列名字。
注意：此字段可能返回 null，表示取不到有效值。
      */
    QueueName: string;
}
/**
 * CreateSubscribe返回参数结构体
 */
export interface CreateSubscribeResponse {
    /**
      * SubscriptionId
      */
    SubscriptionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ClearQueue返回参数结构体
 */
export interface ClearQueueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySubscriptionAttribute请求参数结构体
 */
export interface ModifySubscriptionAttributeRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
      */
    TopicName: string;
    /**
      * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    SubscriptionName: string;
    /**
      * 向 Endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值如下：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息。
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s···由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
      */
    NotifyStrategy?: string;
    /**
      * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 Protocol 是 queue，则取值必须为 SIMPLIFIED。如果 Protocol 是 HTTP，两个值均可以，默认值是 JSON。
      */
    NotifyContentFormat?: string;
    /**
      * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
      */
    FilterTags?: Array<string>;
    /**
      * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
      */
    BindingKey?: Array<string>;
}
/**
 * 订阅返回参数
 */
export interface Subscription {
    /**
      * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubscriptionName: string;
    /**
      * 订阅 ID。订阅 ID 在拉取监控数据时会用到。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubscriptionId: string;
    /**
      * 订阅拥有者的 APPID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicOwner: number;
    /**
      * 该订阅待投递的消息数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgCount: number;
    /**
      * 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: number;
    /**
      * 订阅的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 表示订阅接收消息的过滤策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindingKey: Array<string>;
    /**
      * 接收通知的 endpoint，根据协议 protocol 区分：对于 HTTP，endpoint 必须以http://开头，host 可以是域名或 IP；对于 queue，则填 queueName。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Endpoint: string;
    /**
      * 描述用户创建订阅时选择的过滤策略：
filterType = 1表示用户使用 filterTag 标签过滤
filterType = 2表示用户使用 bindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterTags: Array<string>;
    /**
      * 订阅的协议，目前支持两种协议：HTTP、queue。使用 HTTP 协议，用户需自己搭建接受消息的 Web Server。使用 queue，消息会自动推送到 CMQ queue，用户可以并发地拉取消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值有：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始 1s，后面是 2s，4s，8s...由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotifyStrategy: string;
    /**
      * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 protocol 是 queue，则取值必须为 SIMPLIFIED。如果 protocol 是 HTTP，两个值均可以，默认值是 JSON。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotifyContentFormat: string;
}
/**
 * DeleteQueue返回参数结构体
 */
export interface DeleteQueueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyQueueAttribute请求参数结构体
 */
export interface ModifyQueueAttributeRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
    /**
      * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
      */
    MaxMsgHeapNum?: number;
    /**
      * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
      */
    PollingWaitSeconds?: number;
    /**
      * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
      */
    VisibilityTimeout?: number;
    /**
      * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
      */
    MaxMsgSize?: number;
    /**
      * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
      */
    MsgRetentionSeconds?: number;
    /**
      * 消息最长回溯时间，取值范围0-msgRetentionSeconds，消息的最大回溯之间为消息在队列中的保存周期，0表示不开启消息回溯。
      */
    RewindSeconds?: number;
    /**
      * 第一次查询时间
      */
    FirstQueryInterval?: number;
    /**
      * 最大查询次数
      */
    MaxQueryCount?: number;
    /**
      * 死信队列名称
      */
    DeadLetterQueueName?: string;
    /**
      * MaxTimeToLivepolicy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds
      */
    MaxTimeToLive?: number;
    /**
      * 最大接收次数
      */
    MaxReceiveCount?: number;
    /**
      * 死信队列策略
      */
    Policy?: number;
    /**
      * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
      */
    Trace?: boolean;
}
