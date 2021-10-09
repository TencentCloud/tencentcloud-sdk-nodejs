/**
 * DescribeRoles返回参数结构体
 */
export interface DescribeRolesResponse {
    /**
      * 记录数。
      */
    TotalCount: number;
    /**
      * 角色数组。
      */
    RoleSets: Array<Role>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBindClusters返回参数结构体
 */
export interface DescribeBindClustersResponse {
    /**
      * 专享集群的数量
      */
    TotalCount: number;
    /**
      * 专享集群的列表
      */
    ClusterSet: Array<BindCluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * cmq DeadLetterPolicy
 */
export interface CmqDeadLetterPolicy {
    /**
      * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterQueue: string;
    /**
      * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Policy: number;
    /**
      * 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxTimeToLive: number;
    /**
      * 最大接收次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxReceiveCount: number;
}
/**
 * 运营端命名空间bundle实体
 */
export declare type BundleSetOpt = null;
/**
 * DescribeSubscriptions请求参数结构体
 */
export interface DescribeSubscriptionsRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
      */
    TopicName: string;
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * 订阅者名称，模糊匹配。
      */
    SubscriptionName?: string;
    /**
      * 数据过滤条件。
      */
    Filters?: Array<FilterSubscription>;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * 角色实例
 */
export interface Role {
    /**
      * 角色名称。
      */
    RoleName: string;
    /**
      * 角色token值。
      */
    Token: string;
    /**
      * 备注说明。
      */
    Remark: string;
    /**
      * 创建时间。
      */
    CreateTime: string;
    /**
      * 更新时间。
      */
    UpdateTime: string;
}
/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
    /**
      * 集群的ID
      */
    ClusterId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendBatchMessages返回参数结构体
 */
export interface SendBatchMessagesResponse {
    /**
      * 消息的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    MessageId: string;
    /**
      * 错误消息，返回为 ""，代表没有错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCmqSubscriptionAttribute返回参数结构体
 */
export interface ModifyCmqSubscriptionAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCmqTopic请求参数结构体
 */
export interface CreateCmqTopicRequest {
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
 * ReceiveMessage请求参数结构体
 */
export interface ReceiveMessageRequest {
    /**
      * 接收消息的topic的名字, 这里尽量需要使用topic的全路径，如果不指定，即：tenant/namespace/topic。默认使用的是：public/default
      */
    Topic: string;
    /**
      * 订阅者的名字
      */
    SubscriptionName: string;
    /**
      * 默认值为1000，consumer接收的消息会首先存储到receiverQueueSize这个队列中，用作调优接收消息的速率
      */
    ReceiverQueueSize?: number;
    /**
      * 默认值为：Latest。用作判定consumer初始接收消息的位置，可选参数为：Earliest, Latest
      */
    SubInitialPosition?: string;
}
/**
 * 用户专享集群信息
 */
export interface BindCluster {
    /**
      * 物理集群的名称
      */
    ClusterName: string;
}
/**
 * ModifyCluster返回参数结构体
 */
export interface ModifyClusterResponse {
    /**
      * Pulsar 集群的ID
      */
    ClusterId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCmqQueues返回参数结构体
 */
export interface DescribeCmqQueuesResponse {
    /**
      * 数量
      */
    TotalCount: number;
    /**
      * 队列列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    QueueList: Array<CmqQueue>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCmqQueue返回参数结构体
 */
export interface DeleteCmqQueueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCmqSubscribe请求参数结构体
 */
export interface CreateCmqSubscribeRequest {
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
 * RewindCmqQueue返回参数结构体
 */
export interface RewindCmqQueueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
    /**
      * 集群Id，传入需要删除的集群Id。
      */
    ClusterId: string;
}
/**
 * cmq订阅返回参数
 */
export interface CmqSubscription {
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
      * 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: number;
    /**
      * 订阅的创建时间。返回 Unix 时间戳，精确到毫秒。
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
 * DeleteCmqTopic返回参数结构体
 */
export interface DeleteCmqTopicResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSubscription请求参数结构体
 */
export interface CreateSubscriptionRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
      */
    TopicName: string;
    /**
      * 订阅者名称，不支持中字以及除了短线和下划线外的特殊字符且不超过150个字符。
      */
    SubscriptionName: string;
    /**
      * 是否幂等创建，若否不允许创建同名的订阅关系。
      */
    IsIdempotent: boolean;
    /**
      * 备注，128个字符以内。
      */
    Remark?: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
    /**
      * 是否自动创建死信和重试主题，True 表示创建，False表示不创建，默认自动创建死信和重试主题。
      */
    AutoCreatePolicyTopic?: boolean;
    /**
      * 指定死信和重试主题名称规范，LEGACY表示历史命名规则，COMMUNITY表示Pulsar社区命名规范
      */
    PostFixPattern?: string;
}
/**
 * DescribeCmqTopicDetail返回参数结构体
 */
export interface DescribeCmqTopicDetailResponse {
    /**
      * 主题详情
      */
    TopicDescribe: CmqTopic;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * cmq 批量queue属性信息
 */
export interface CmqQueue {
    /**
      * 消息队列ID。
      */
    QueueId: string;
    /**
      * 消息队列名字。
      */
    QueueName: string;
    /**
      * 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Qps: number;
    /**
      * 带宽限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bps: number;
    /**
      * 飞行消息最大保留时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxDelaySeconds: number;
    /**
      * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
      */
    MaxMsgHeapNum: number;
    /**
      * 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PollingWaitSeconds: number;
    /**
      * 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRetentionSeconds: number;
    /**
      * 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VisibilityTimeout: number;
    /**
      * 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxMsgSize: number;
    /**
      * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RewindSeconds: number;
    /**
      * 队列的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: number;
    /**
      * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActiveMsgNum: number;
    /**
      * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InactiveMsgNum: number;
    /**
      * 延迟消息数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DelayMsgNum: number;
    /**
      * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RewindMsgNum: number;
    /**
      * 消息最小未消费时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinMsgTime: number;
    /**
      * 事务消息队列。true表示是事务消息，false表示不是事务消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Transaction: boolean;
    /**
      * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterSource: Array<CmqDeadLetterSource>;
    /**
      * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeadLetterPolicy: CmqDeadLetterPolicy;
    /**
      * 事务消息策略。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransactionPolicy: CmqTransactionPolicy;
    /**
      * 创建者Uin。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateUin: number;
    /**
      * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trace: boolean;
    /**
      * 租户id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TenantId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
}
/**
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 未消费消息过期时间，单位：秒。
      */
    MsgTTL: number;
    /**
      * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 命名空间ID
      */
    NamespaceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 生产者
 */
export interface Producer {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
      */
    TopicName: string;
    /**
      * 连接数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CountConnect: number;
    /**
      * 连接集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConnectionSets: Array<Connection>;
}
/**
 * CreateSubscription返回参数结构体
 */
export interface CreateSubscriptionResponse {
    /**
      * 创建结果。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendMsg返回参数结构体
 */
export interface SendMsgResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCmqTopicAttribute返回参数结构体
 */
export interface ModifyCmqTopicAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCmqSubscriptionDetail请求参数结构体
 */
export interface DescribeCmqSubscriptionDetailRequest {
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
      * 根据SubscriptionName进行模糊搜索
      */
    SubscriptionName?: string;
}
/**
 * 主题实例
 */
export interface Topic {
    /**
      * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AverageMsgSize: string;
    /**
      * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerCount: string;
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfirmedEntry: string;
    /**
      * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastLedgerCreatedTimestamp: string;
    /**
      * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateIn: string;
    /**
      * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateOut: string;
    /**
      * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputIn: string;
    /**
      * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputOut: string;
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberOfEntries: string;
    /**
      * 分区数<=0：topic下无子分区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
    /**
      * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerCount: string;
    /**
      * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSize: string;
    /**
      * 分区topic里面的子分区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubTopicSets: Array<PartitionsTopic>;
    /**
      * topic类型描述：
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicType: number;
    /**
      * 环境（命名空间）名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName: string;
    /**
      * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 生产者上限。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerLimit: string;
    /**
      * 消费者上限。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerLimit: string;
}
/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
    /**
      * 命名空间名称，模糊搜索。
      */
    EnvironmentId?: string;
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
    /**
      * * EnvironmentId
按照名称空间进行过滤，精确查询。
类型：String
必选：否
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeCmqQueueDetail返回参数结构体
 */
export interface DescribeCmqQueueDetailResponse {
    /**
      * 队列详情列表。
      */
    QueueDescribe: CmqQueue;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEnvironment请求参数结构体
 */
export interface CreateEnvironmentRequest {
    /**
      * 环境（命名空间）名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。
      */
    EnvironmentId: string;
    /**
      * 未消费消息过期时间，单位：秒，最小60，最大1296000，（15天）。
      */
    MsgTTL: number;
    /**
      * 说明，128个字符以内。
      */
    Remark?: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
    /**
      * 消息保留策略
      */
    RetentionPolicy?: RetentionPolicy;
}
/**
 * DeleteTopics返回参数结构体
 */
export interface DeleteTopicsResponse {
    /**
      * 被删除的主题数组。
      */
    TopicSets: Array<TopicRecord>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * 集群ID列表过滤
      */
    ClusterIdList?: Array<string>;
}
/**
 * ModifyEnvironmentAttributes请求参数结构体
 */
export interface ModifyEnvironmentAttributesRequest {
    /**
      * 命名空间名称。
      */
    EnvironmentId: string;
    /**
      * 未消费消息过期时间，单位：秒，最大1296000。
      */
    MsgTTL: number;
    /**
      * 备注，字符串最长不超过128。
      */
    Remark?: string;
    /**
      * 集群ID
      */
    ClusterId?: string;
    /**
      * 消息保留策略
      */
    RetentionPolicy?: RetentionPolicy;
}
/**
 * DescribeCmqSubscriptionDetail返回参数结构体
 */
export interface DescribeCmqSubscriptionDetailResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * Subscription属性集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubscriptionSet: Array<CmqSubscription>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * vcp绑定记录
 */
export interface VpcBindRecord {
    /**
      * 租户Vpc Id
      */
    UniqueVpcId: string;
    /**
      * 租户Vpc子网Id
      */
    UniqueSubnetId: string;
    /**
      * 路由Id
      */
    RouterId: string;
    /**
      * Vpc的Id
      */
    Ip: string;
    /**
      * Vpc的Port
      */
    Port: number;
    /**
      * 说明，128个字符以内
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
}
/**
 * RewindCmqQueue请求参数结构体
 */
export interface RewindCmqQueueRequest {
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
 * ModifyCluster请求参数结构体
 */
export interface ModifyClusterRequest {
    /**
      * Pulsar 集群的ID，需要更新的集群Id。
      */
    ClusterId: string;
    /**
      * 更新后的集群名称。
      */
    ClusterName?: string;
    /**
      * 说明信息。
      */
    Remark?: string;
}
/**
 * DescribeEnvironmentAttributes请求参数结构体
 */
export interface DescribeEnvironmentAttributesRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * AcknowledgeMessage请求参数结构体
 */
export interface AcknowledgeMessageRequest {
    /**
      * 用作标识消息的唯一的ID（可从 receiveMessage 的返回值中获得）
      */
    MessageId: string;
    /**
      * Topic 名字（可从 receiveMessage 的返回值中获得）这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
      */
    AckTopic: string;
    /**
      * 订阅者的名字，可以从receiveMessage的返回值中获取到。这里尽量与receiveMessage中的订阅者保持一致，否则没办法正确ack 接收回来的消息。
      */
    SubName: string;
}
/**
 * DescribeTopics返回参数结构体
 */
export interface DescribeTopicsResponse {
    /**
      * 主题集合数组。
      */
    TopicSets: Array<Topic>;
    /**
      * 主题数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PublishCmqMsg返回参数结构体
 */
export interface PublishCmqMsgResponse {
    /**
      * true表示发送成功
      */
    Result: boolean;
    /**
      * 消息id
      */
    MsgId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendCmqMsg请求参数结构体
 */
export interface SendCmqMsgRequest {
    /**
      * 队列名
      */
    QueueName: string;
    /**
      * 消息内容
      */
    MsgContent: string;
    /**
      * 延迟时间
      */
    DelaySeconds: number;
}
/**
 * AcknowledgeMessage返回参数结构体
 */
export interface AcknowledgeMessageResponse {
    /**
      * 如果为“”，则说明没有错误返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEnvironmentRoles返回参数结构体
 */
export interface DeleteEnvironmentRolesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
    /**
      * 集群的ID
      */
    ClusterId: string;
}
/**
 * ModifyRole返回参数结构体
 */
export interface ModifyRoleResponse {
    /**
      * 角色名称
      */
    RoleName: string;
    /**
      * 备注说明
      */
    Remark: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签的key/value的类型
 */
export interface Tag {
    /**
      * 标签的key的值
      */
    TagKey: string;
    /**
      * 标签的Value的值
      */
    TagValue: string;
}
/**
 * DescribeNamespaceBundlesOpt返回参数结构体
 */
export interface DescribeNamespaceBundlesOptResponse {
    /**
      * 记录条数
      */
    TotalCount: number;
    /**
      * bundle列表
      */
    BundleSet: Array<BundleSetOpt>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendMessages请求参数结构体
 */
export interface SendMessagesRequest {
    /**
      * 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
      */
    Topic: string;
    /**
      * 要发送的消息的内容
      */
    Payload: string;
    /**
      * Token 是用来做鉴权使用的，可以不填，系统会自动获取
      */
    StringToken?: string;
    /**
      * 设置 producer 的名字，要求全局唯一，用户不配置，系统会随机生成
      */
    ProducerName?: string;
    /**
      * 设置消息发送的超时时间，默认为30s
      */
    SendTimeout?: number;
    /**
      * 内存中缓存的最大的生产消息的数量，默认为1000条
      */
    MaxPendingMessages?: number;
}
/**
 * ModifyCmqTopicAttribute请求参数结构体
 */
export interface ModifyCmqTopicAttributeRequest {
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
 * DeleteRoles请求参数结构体
 */
export interface DeleteRolesRequest {
    /**
      * 角色名称数组。
      */
    RoleNames: Array<string>;
    /**
      * 必填字段，集群Id
      */
    ClusterId?: string;
}
/**
 * 订阅者
 */
export interface Subscription {
    /**
      * 主题名称。
      */
    TopicName: string;
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConnectedSince: string;
    /**
      * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerAddr: string;
    /**
      * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerCount: string;
    /**
      * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerName: string;
    /**
      * 堆积的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgBacklog: string;
    /**
      * 于TTL，此订阅下没有被发送而是被丢弃的比例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateExpired: string;
    /**
      * 消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateOut: string;
    /**
      * 消费者每秒消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputOut: string;
    /**
      * 订阅名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubscriptionName: string;
    /**
      * 消费者集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerSets: Array<Consumer>;
    /**
      * 是否在线。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsOnline: boolean;
    /**
      * 消费进度集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumersScheduleSets: Array<ConsumersSchedule>;
    /**
      * 备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
}
/**
 * CreateCmqSubscribe返回参数结构体
 */
export interface CreateCmqSubscribeResponse {
    /**
      * 订阅id
      */
    SubscriptionId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSubscriptions返回参数结构体
 */
export interface DescribeSubscriptionsResponse {
    /**
      * 订阅者集合数组。
      */
    SubscriptionSets: Array<Subscription>;
    /**
      * 数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRole请求参数结构体
 */
export interface ModifyRoleRequest {
    /**
      * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
      */
    RoleName: string;
    /**
      * 备注说明，长度必须大等于0且小等于128。
      */
    Remark?: string;
    /**
      * 必填字段，集群Id
      */
    ClusterId?: string;
}
/**
 * SendMessages返回参数结构体
 */
export interface SendMessagesResponse {
    /**
      * 消息的messageID, 是全局唯一的，用来标识消息的元数据信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MessageId: string;
    /**
      * 返回的错误消息，如果返回为 “”，说明没有错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。
      */
    TopicName: string;
    /**
      * 0：非分区topic，无分区；非0：具体分区topic的分区数，最大不允许超过128。
      */
    Partitions: number;
    /**
      * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列。
      */
    TopicType: number;
    /**
      * 备注，128字符以内。
      */
    Remark?: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * DescribeTopics请求参数结构体
 */
export interface DescribeTopicsRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名模糊匹配。
      */
    TopicName?: string;
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * topic类型描述：
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
      */
    TopicType?: number;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
    /**
      * * TopicName
按照主题名字查询，精确查询。
类型：String
必选：否
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteEnvironments返回参数结构体
 */
export interface DeleteEnvironmentsResponse {
    /**
      * 成功删除的环境（命名空间）数组。
      */
    EnvironmentIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnvironmentRoles返回参数结构体
 */
export interface DescribeEnvironmentRolesResponse {
    /**
      * 记录数。
      */
    TotalCount: number;
    /**
      * 命名空间角色集合。
      */
    EnvironmentRoleSets: Array<EnvironmentRole>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ClearCmqQueue请求参数结构体
 */
export interface ClearCmqQueueRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
}
/**
 * 过滤订阅列表
 */
export interface FilterSubscription {
    /**
      * 是否仅展示包含真实消费者的订阅。
      */
    ConsumerHasCount?: boolean;
    /**
      * 是否仅展示消息堆积的订阅。
      */
    ConsumerHasBacklog?: boolean;
    /**
      * 是否仅展示存在消息超期丢弃的订阅。
      */
    ConsumerHasExpired?: boolean;
    /**
      * 按照订阅名过滤，精确查询。
      */
    SubscriptionNames?: Array<string>;
}
/**
 * DescribeCmqTopics返回参数结构体
 */
export interface DescribeCmqTopicsResponse {
    /**
      * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicList: Array<CmqTopic>;
    /**
      * 全量主题数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCmqTopicDetail请求参数结构体
 */
export interface DescribeCmqTopicDetailRequest {
    /**
      * 精确匹配TopicName。
      */
    TopicName?: string;
}
/**
 * cmq topic返回信息展示字段
 */
export interface CmqTopic {
    /**
      * 主题的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicId: string;
    /**
      * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName: string;
    /**
      * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRetentionSeconds: number;
    /**
      * 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxMsgSize: number;
    /**
      * 每秒钟发布消息的条数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Qps: number;
    /**
      * 描述用户创建订阅时选择的过滤策略：
FilterType = 1表示用户使用 FilterTag 标签过滤;
FilterType = 2表示用户使用 BindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterType: number;
    /**
      * 主题的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTime: number;
    /**
      * 当前该主题中消息数目（消息堆积数）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgCount: number;
    /**
      * 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateUin: number;
    /**
      * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trace: boolean;
    /**
      * 租户id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TenantId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
}
/**
 * UnbindCmqDeadLetter返回参数结构体
 */
export interface UnbindCmqDeadLetterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNodeHealthOpt请求参数结构体
 */
export interface DescribeNodeHealthOptRequest {
    /**
      * 节点实例ID
      */
    InstanceId: string;
}
/**
 * DescribeBindVpcs请求参数结构体
 */
export interface DescribeBindVpcsRequest {
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
      * 集群列表数量
      */
    TotalCount: number;
    /**
      * 集群信息列表
      */
    ClusterSet: Array<Cluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ClearCmqSubscriptionFilterTags请求参数结构体
 */
export interface ClearCmqSubscriptionFilterTagsRequest {
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
 * 主题关键信息
 */
export interface TopicRecord {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
      */
    TopicName: string;
}
/**
 * DescribeEnvironmentRoles请求参数结构体
 */
export interface DescribeEnvironmentRolesRequest {
    /**
      * 必填字段，环境（命名空间）名称。
      */
    EnvironmentId?: string;
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * 必填字段，Pulsar 集群的ID
      */
    ClusterId?: string;
    /**
      * 角色名称
      */
    RoleName?: string;
    /**
      * * RoleName
按照角色名进行过滤，精确查询。
类型：String
必选：否
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteRoles返回参数结构体
 */
export interface DeleteRolesResponse {
    /**
      * 成功删除的角色名称数组。
      */
    RoleNames: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 命名空间信息
 */
export interface Environment {
    /**
      * 命名空间名称
      */
    EnvironmentId: string;
    /**
      * 说明
      */
    Remark: string;
    /**
      * 未消费消息过期时间，单位：秒，最大1296000（15天）
      */
    MsgTTL: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 最近修改时间
      */
    UpdateTime: string;
    /**
      * 命名空间ID
      */
    NamespaceId: string;
    /**
      * 命名空间名称
      */
    NamespaceName: string;
    /**
      * Topic数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicNum: number;
}
/**
 * CreateCmqQueue返回参数结构体
 */
export interface CreateCmqQueueResponse {
    /**
      * 创建成功的queueId
      */
    QueueId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 分区topic
 */
export interface PartitionsTopic {
    /**
      * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AverageMsgSize: string;
    /**
      * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerCount: string;
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfirmedEntry: string;
    /**
      * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastLedgerCreatedTimestamp: string;
    /**
      * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateIn: string;
    /**
      * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateOut: string;
    /**
      * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputIn: string;
    /**
      * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputOut: string;
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberOfEntries: string;
    /**
      * 子分区id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
    /**
      * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerCount: string;
    /**
      * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSize: string;
    /**
      * topic类型描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicType: number;
}
/**
 * ResetMsgSubOffsetByTimestamp返回参数结构体
 */
export interface ResetMsgSubOffsetByTimestampResponse {
    /**
      * 结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCmqDeadLetterSourceQueues请求参数结构体
 */
export interface DescribeCmqDeadLetterSourceQueuesRequest {
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
      * 根据SourceQueueName过滤
      */
    SourceQueueName?: string;
}
/**
 * DescribeNodeHealthOpt返回参数结构体
 */
export interface DescribeNodeHealthOptResponse {
    /**
      * 0-异常；1-正常
      */
    NodeState: number;
    /**
      * 最近一次健康检查的时间
      */
    LatestHealthCheckTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
    /**
      * 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。
      */
    ClusterName: string;
    /**
      * 用户专享物理集群ID，如果不传，则默认在公共集群上创建用户集群资源。
      */
    BindClusterId?: number;
    /**
      * 说明，128个字符以内。
      */
    Remark?: string;
    /**
      * 集群的标签列表
      */
    Tags?: Array<Tag>;
}
/**
 * ModifyCmqQueueAttribute返回参数结构体
 */
export interface ModifyCmqQueueAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名。
      */
    TopicName: string;
    /**
      * 0：非分区topic，无分区；非0：具体分区topic的分区数。
      */
    Partitions: number;
    /**
      * 备注，128字符以内。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列；
5 ：事务消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicType: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCmqQueues请求参数结构体
 */
export interface DescribeCmqQueuesRequest {
    /**
      * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
      */
    Offset?: number;
    /**
      * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
      */
    Limit?: number;
    /**
      * 根据QueueName进行过滤
      */
    QueueName?: string;
    /**
      * CMQ 队列名称列表过滤
      */
    QueueNameList?: Array<string>;
    /**
      * 标签过滤查找时，需要设置为 true
      */
    IsTagFilter?: boolean;
}
/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
    /**
      * 命名空间记录数。
      */
    TotalCount: number;
    /**
      * 命名空间集合数组。
      */
    EnvironmentSet: Array<Environment>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCmqSubscriptionAttribute请求参数结构体
 */
export interface ModifyCmqSubscriptionAttributeRequest {
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
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
    /**
      * 分区数
      */
    Partitions: number;
    /**
      * 备注，128字符以内。
      */
    Remark: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReceiveMessage返回参数结构体
 */
export interface ReceiveMessageResponse {
    /**
      * 用作标识消息的唯一主键
      */
    MessageID: string;
    /**
      * 接收消息的内容
      */
    MessagePayload: string;
    /**
      * 提供给 Ack 接口，用来Ack哪一个topic中的消息
      */
    AckTopic: string;
    /**
      * 返回的错误信息，如果为空，说明没有错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 返回订阅者的名字，用来创建 ack consumer时使用
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCmqTopic返回参数结构体
 */
export interface CreateCmqTopicResponse {
    /**
      * 主题id
      */
    TopicId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Cmq DeadLetterSource
 */
export interface CmqDeadLetterSource {
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
 * ClearCmqSubscriptionFilterTags返回参数结构体
 */
export interface ClearCmqSubscriptionFilterTagsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCmqTopics请求参数结构体
 */
export interface DescribeCmqTopicsRequest {
    /**
      * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
      */
    Offset?: number;
    /**
      * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
      */
    Limit?: number;
    /**
      * 根据TopicName进行模糊搜索
      */
    TopicName?: string;
    /**
      * CMQ 主题名称列表过滤
      */
    TopicNameList?: Array<string>;
    /**
      * 标签过滤查找时，需要设置为 true
      */
    IsTagFilter?: boolean;
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
 * 生产者连接实例
 */
export interface Connection {
    /**
      * 生产者地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * 主题分区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
    /**
      * 生产者版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientVersion: string;
    /**
      * 生产者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerName: string;
    /**
      * 生产者ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerId: string;
    /**
      * 消息平均大小(byte)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AverageMsgSize: string;
    /**
      * 生成速率(byte/秒)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputIn: string;
}
/**
 * DeleteTopics请求参数结构体
 */
export interface DeleteTopicsRequest {
    /**
      * 主题集合，每次最多删除20个。
      */
    TopicSets: Array<TopicRecord>;
    /**
      * pulsar集群Id。
      */
    ClusterId?: string;
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId?: string;
    /**
      * 是否强制删除，默认为false
      */
    Force?: boolean;
}
/**
 * cmq TransactionPolicy
 */
export interface CmqTransactionPolicy {
    /**
      * 第一次回查时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstQueryInterval: number;
    /**
      * 最大查询次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxQueryCount: number;
}
/**
 * DescribeNamespaceBundlesOpt请求参数结构体
 */
export interface DescribeNamespaceBundlesOptRequest {
    /**
      * 物理集群名
      */
    ClusterName: string;
    /**
      * 虚拟集群（租户）ID
      */
    TenantId: string;
    /**
      * 命名空间名
      */
    NamespaceName: string;
    /**
      * 是否需要监控指标，若传false，则不需要传Limit和Offset分页参数
      */
    NeedMetrics: boolean;
    /**
      * 查询限制条数
      */
    Limit?: number;
    /**
      * 查询偏移量
      */
    Offset?: number;
}
/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名。
      */
    TopicName: string;
    /**
      * 分区数，必须大于或者等于原分区数，若想维持原分区数请输入原数目，修改分区数仅对非全局顺序消息起效果，不允许超过128个分区。
      */
    Partitions: number;
    /**
      * 备注，128字符以内。
      */
    Remark?: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * ResetMsgSubOffsetByTimestamp请求参数结构体
 */
export interface ResetMsgSubOffsetByTimestampRequest {
    /**
      * 命名空间名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
      */
    TopicName: string;
    /**
      * 订阅者名称。
      */
    Subscription: string;
    /**
      * 时间戳，精确到毫秒。
      */
    ToTimestamp: number;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * CreateEnvironmentRole返回参数结构体
 */
export interface CreateEnvironmentRoleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 *  消费者
 */
export interface Consumer {
    /**
      * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConnectedSince: string;
    /**
      * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerAddr: string;
    /**
      * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerName: string;
    /**
      * 消费者版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientVersion: string;
}
/**
 * DescribeBindVpcs返回参数结构体
 */
export interface DescribeBindVpcsResponse {
    /**
      * 记录数。
      */
    TotalCount?: number;
    /**
      * Vpc集合。
      */
    VpcSets?: Array<VpcBindRecord>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCmqSubscribe请求参数结构体
 */
export interface DeleteCmqSubscribeRequest {
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
 * DescribeCmqDeadLetterSourceQueues返回参数结构体
 */
export interface DescribeCmqDeadLetterSourceQueuesResponse {
    /**
      * 满足本次条件的队列个数
      */
    TotalCount: number;
    /**
      * 死信队列源队列
      */
    QueueSet: Array<CmqDeadLetterSource>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSubscriptions返回参数结构体
 */
export interface DeleteSubscriptionsResponse {
    /**
      * 成功删除的订阅关系数组。
      */
    SubscriptionTopicSets: Array<SubscriptionTopic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 消费进度详情
 */
export interface ConsumersSchedule {
    /**
      * 当前分区id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
    /**
      * 消息数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberOfEntries: number;
    /**
      * 消息积压数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgBacklog: number;
    /**
      * 消费者每秒分发消息的数量之和。
      */
    MsgRateOut: string;
    /**
      * 消费者每秒消息的byte。
      */
    MsgThroughputOut: string;
    /**
      * 超时丢弃比例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateExpired: string;
}
/**
 * 集群信息集合
 */
export interface Cluster {
    /**
      * 集群Id。
      */
    ClusterId: string;
    /**
      * 集群名称。
      */
    ClusterName: string;
    /**
      * 说明信息。
      */
    Remark: string;
    /**
      * 接入点数量
      */
    EndPointNum: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 集群是否健康，1表示健康，0表示异常
      */
    Healthy: number;
    /**
      * 集群健康信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthyInfo: string;
    /**
      * 集群状态，0:创建中，1:正常，2:删除中，3:已删除，5:创建失败，6: 删除失败
      */
    Status: number;
    /**
      * 最大命名空间数量
      */
    MaxNamespaceNum: number;
    /**
      * 最大Topic数量
      */
    MaxTopicNum: number;
    /**
      * 最大QPS
      */
    MaxQps: number;
    /**
      * 消息保留时间
      */
    MessageRetentionTime: number;
    /**
      * 最大存储容量
      */
    MaxStorageCapacity: number;
    /**
      * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
    /**
      * 公网访问接入点
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicEndPoint: string;
    /**
      * VPC访问接入点
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcEndPoint: string;
    /**
      * 命名空间数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceNum: number;
    /**
      * 已使用存储限制，MB为单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsedStorageBudget: number;
}
/**
 * 消息保留策略
 */
export interface RetentionPolicy {
    /**
      * 消息保留时长
      */
    TimeInMinutes: number;
    /**
      * 消息保留大小
      */
    SizeInMB: number;
}
/**
 * SendMsg请求参数结构体
 */
export interface SendMsgRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称，如果是分区topic需要指定具体分区，如果没有指定则默认发到0分区，例如：my_topic-partition-0。
      */
    TopicName: string;
    /**
      * 消息内容，不能为空且大小不得大于5242880个byte。
      */
    MsgContent: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * DescribeCmqQueueDetail请求参数结构体
 */
export interface DescribeCmqQueueDetailRequest {
    /**
      * 精确匹配QueueName
      */
    QueueName: string;
}
/**
 * CreateRole返回参数结构体
 */
export interface CreateRoleResponse {
    /**
      * 角色名称
      */
    RoleName: string;
    /**
      * 角色token
      */
    Token: string;
    /**
      * 备注说明
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEnvironmentRoles请求参数结构体
 */
export interface DeleteEnvironmentRolesRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 角色名称数组。
      */
    RoleNames: Array<string>;
    /**
      * 必填字段，集群的ID
      */
    ClusterId?: string;
}
/**
 * ClearCmqQueue返回参数结构体
 */
export interface ClearCmqQueueResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEnvironments请求参数结构体
 */
export interface DeleteEnvironmentsRequest {
    /**
      * 环境（命名空间）数组，每次最多删除20个。
      */
    EnvironmentIds: Array<string>;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * DescribeBindClusters请求参数结构体
 */
export declare type DescribeBindClustersRequest = null;
/**
 * ModifyEnvironmentAttributes返回参数结构体
 */
export interface ModifyEnvironmentAttributesResponse {
    /**
      * 命名空间名称。
      */
    EnvironmentId: string;
    /**
      * 未消费消息过期时间，单位：秒。
      */
    MsgTTL: number;
    /**
      * 备注，字符串最长不超过128。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 环境角色集合
 */
export interface EnvironmentRole {
    /**
      * 环境（命名空间）。
      */
    EnvironmentId: string;
    /**
      * 角色名称。
      */
    RoleName: string;
    /**
      * 授权项，最多只能包含produce、consume两项的非空字符串数组。
      */
    Permissions: Array<string>;
    /**
      * 角色描述。
      */
    RoleDescribe: string;
    /**
      * 创建时间。
      */
    CreateTime: string;
    /**
      * 更新时间。
      */
    UpdateTime: string;
}
/**
 * CreateCmqQueue请求参数结构体
 */
export interface CreateCmqQueueRequest {
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
 * ModifyEnvironmentRole返回参数结构体
 */
export interface ModifyEnvironmentRoleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCmqQueue请求参数结构体
 */
export interface DeleteCmqQueueRequest {
    /**
      * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    QueueName: string;
}
/**
 * CreateRole请求参数结构体
 */
export interface CreateRoleRequest {
    /**
      * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
      */
    RoleName: string;
    /**
      * 备注说明，长度必须大等于0且小等于128。
      */
    Remark?: string;
    /**
      * 必填字段，集群Id
      */
    ClusterId?: string;
}
/**
 * DescribeProducers请求参数结构体
 */
export interface DescribeProducersRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名。
      */
    TopicName: string;
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * 生产者名称，模糊匹配。
      */
    ProducerName?: string;
    /**
      * Pulsar 集群的ID
      */
    ClusterId?: string;
}
/**
 * ModifyEnvironmentRole请求参数结构体
 */
export interface ModifyEnvironmentRoleRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 角色名称。
      */
    RoleName: string;
    /**
      * 授权项，最多只能包含produce、consume两项的非空字符串数组。
      */
    Permissions: Array<string>;
    /**
      * 必填字段，集群的ID
      */
    ClusterId?: string;
}
/**
 * DescribeEnvironmentAttributes返回参数结构体
 */
export interface DescribeEnvironmentAttributesResponse {
    /**
      * 未消费消息过期时间，单位：秒，最大1296000（15天）。
      */
    MsgTTL: number;
    /**
      * 消费速率限制，单位：byte/秒，0：不限速。
      */
    RateInByte: number;
    /**
      * 消费速率限制，单位：个数/秒，0：不限速。
      */
    RateInSize: number;
    /**
      * 已消费消息保存策略，单位：小时，0：消费完马上删除。
      */
    RetentionHours: number;
    /**
      * 已消费消息保存策略，单位：G，0：消费完马上删除。
      */
    RetentionSize: number;
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 副本数。
      */
    Replicas: number;
    /**
      * 备注。
      */
    Remark: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 订阅关系
 */
export interface SubscriptionTopic {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 主题名称。
      */
    TopicName: string;
    /**
      * 订阅名称。
      */
    SubscriptionName: string;
}
/**
 * DescribeProducers返回参数结构体
 */
export interface DescribeProducersResponse {
    /**
      * 生产者集合数组。
      */
    ProducerSets: Array<Producer>;
    /**
      * 记录总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendBatchMessages请求参数结构体
 */
export interface SendBatchMessagesRequest {
    /**
      * 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
      */
    Topic: string;
    /**
      * 需要发送消息的内容
      */
    Payload: string;
    /**
      * String 类型的 token，可以不填，系统会自动获取
      */
    StringToken?: string;
    /**
      * producer 的名字，要求全局是唯一的，如果不设置，系统会自动生成
      */
    ProducerName?: string;
    /**
      * 单位：s。消息发送的超时时间。默认值为：30s
      */
    SendTimeout?: number;
    /**
      * 内存中允许缓存的生产消息的最大数量，默认值：1000条
      */
    MaxPendingMessages?: number;
    /**
      * 每一个batch中消息的最大数量，默认值：1000条/batch
      */
    BatchingMaxMessages?: number;
    /**
      * 每一个batch最大等待的时间，超过这个时间，不管是否达到指定的batch中消息的数量和大小，都会将该batch发送出去，默认：10ms
      */
    BatchingMaxPublishDelay?: number;
    /**
      * 每一个batch中最大允许的消息的大小，默认：128KB
      */
    BatchingMaxBytes?: number;
}
/**
 * DeleteCmqTopic请求参数结构体
 */
export interface DeleteCmqTopicRequest {
    /**
      * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
      */
    TopicName: string;
}
/**
 * SendCmqMsg返回参数结构体
 */
export interface SendCmqMsgResponse {
    /**
      * true表示发送成功
      */
    Result: boolean;
    /**
      * 消息id
      */
    MsgId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PublishCmqMsg请求参数结构体
 */
export interface PublishCmqMsgRequest {
    /**
      * 主题名
      */
    TopicName: string;
    /**
      * 消息内容
      */
    MsgContent: string;
    /**
      * 消息标签
      */
    MsgTag?: Array<string>;
}
/**
 * UnbindCmqDeadLetter请求参数结构体
 */
export interface UnbindCmqDeadLetterRequest {
    /**
      * 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。
      */
    SourceQueueName: string;
}
/**
 * ModifyCmqQueueAttribute请求参数结构体
 */
export interface ModifyCmqQueueAttributeRequest {
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
    /**
      * 是否开启事务，1开启，0不开启
      */
    Transaction?: number;
}
/**
 * DeleteCmqSubscribe返回参数结构体
 */
export interface DeleteCmqSubscribeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRoles请求参数结构体
 */
export interface DescribeRolesRequest {
    /**
      * 角色名称，模糊查询
      */
    RoleName?: string;
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
    /**
      * 必填字段，集群Id
      */
    ClusterId?: string;
    /**
      * * RoleName
按照角色名进行过滤，精确查询。
类型：String
必选：否
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteSubscriptions请求参数结构体
 */
export interface DeleteSubscriptionsRequest {
    /**
      * 订阅关系集合，每次最多删除20个。
      */
    SubscriptionTopicSets: Array<SubscriptionTopic>;
    /**
      * pulsar集群Id。
      */
    ClusterId?: string;
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId?: string;
    /**
      * 是否强制删除，默认为false
      */
    Force?: boolean;
}
/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
    /**
      * 集群的详细信息
      */
    ClusterSet: Cluster;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEnvironmentRole请求参数结构体
 */
export interface CreateEnvironmentRoleRequest {
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
    /**
      * 角色名称。
      */
    RoleName: string;
    /**
      * 授权项，最多只能包含produce、consume两项的非空字符串数组。
      */
    Permissions: Array<string>;
    /**
      * 必填字段，集群的ID
      */
    ClusterId?: string;
}
