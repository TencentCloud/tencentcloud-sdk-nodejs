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

/**
 * DescribeQueueDetail返回参数结构体
 */
export interface DescribeQueueDetailResponse {
  /**
   * 总队列数。
   */
  TotalCount?: number
  /**
   * 队列详情列表。
   */
  QueueSet?: Array<QueueSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 死信队列策略
 */
export interface DeadLetterPolicy {
  /**
   * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterQueue?: string
  /**
   * 死信队列名字。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterQueueName?: string
  /**
   * 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxTimeToLive?: number
  /**
   * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: number
  /**
   * 最大接收次数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxReceiveCount?: number
}

/**
 * 过滤参数
 */
export interface Filter {
  /**
   * 数值
   */
  Values?: Array<string>
  /**
   * 过滤参数的名字
   */
  Name?: string
}

/**
 * topic返回信息展示字段
 */
export interface TopicSet {
  /**
   * 当前该主题中消息数目（消息堆积数）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgCount?: number
  /**
   * 主题的 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMsgSize?: number
  /**
   * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trace?: boolean
  /**
   * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin?: number
  /**
   * 描述用户创建订阅时选择的过滤策略：
FilterType = 1表示用户使用 FilterTag 标签过滤;
FilterType = 2表示用户使用 BindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterType?: number
  /**
   * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyTime?: number
  /**
   * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRetentionSeconds?: number
  /**
   * 每秒钟发布消息的条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qps?: number
  /**
   * 主题的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 是否迁移到新版本。0 表示未迁移，1 表示迁移中，2 表示已经迁移完毕，3 表示回切状态，曾经迁移过，4 未知状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Migrate?: number
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * DescribeTopicDetail返回参数结构体
 */
export interface DescribeTopicDetailResponse {
  /**
   * 主题列表总数。
   */
  TotalCount?: number
  /**
   * 主题详情列表。
   */
  TopicSet?: Array<TopicSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事务消息策略
 */
export interface TransactionPolicy {
  /**
   * 最大查询次数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxQueryCount: number
  /**
   * 第一次回查时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstQueryInterval: number
}

/**
 * DescribeTopicDetail请求参数结构体
 */
export interface DescribeTopicDetailRequest {
  /**
   * 标签匹配。
   */
  TagKey?: string
  /**
   * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
   */
  Limit?: number
  /**
   * 精确匹配TopicName。
   */
  TopicName?: string
  /**
   * 目前只支持过滤TopicName ， 且只能填一个过滤值。
   */
  Filters?: Array<Filter>
  /**
   * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。
   */
  Offset?: number
}

/**
 * 批量queue属性信息
 */
export interface QueueSet {
  /**
   * 消息队列ID。
   */
  QueueId?: string
  /**
   * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewindSeconds?: number
  /**
   * 创建者Uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin?: number
  /**
   * 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyTime?: number
  /**
   * 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VisibilityTimeout?: number
  /**
   * 消息队列名字。
   */
  QueueName?: string
  /**
   * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trace?: boolean
  /**
   * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewindMsgNum?: number
  /**
   * 飞行消息最大保留时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDelaySeconds?: number
  /**
   * 事务消息策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransactionPolicy?: TransactionPolicy
  /**
   * 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRetentionSeconds?: number
  /**
   * 延迟消息数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayMsgNum?: number
  /**
   * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMsgHeapNum?: number
  /**
   * 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PollingWaitSeconds?: number
  /**
   * 带宽限制。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bps?: number
  /**
   * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InactiveMsgNum?: number
  /**
   * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterPolicy?: DeadLetterPolicy
  /**
   * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveMsgNum?: number
  /**
   * 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMsgSize?: number
  /**
   * 消息最小未消费时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinMsgTime?: number
  /**
   * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterSource?: Array<DeadLetterSource>
  /**
   * 事务消息队列。true表示是事务消息，false表示不是事务消息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Transaction?: boolean
  /**
   * 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qps?: number
  /**
   * 队列的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 是否迁移到新版本。0 表示仅同步元数据，1 表示迁移中，2 表示已经迁移完毕，3 表示回切状态，曾经迁移过，4 未迁移。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Migrate?: number
}

/**
 * DescribeQueueDetail请求参数结构体
 */
export interface DescribeQueueDetailRequest {
  /**
   * 标签搜索
   */
  TagKey?: string
  /**
   * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
   */
  Limit?: number
  /**
   * 精确匹配QueueName
   */
  QueueName?: string
  /**
   * 筛选参数，目前支持QueueName筛选，且仅支持一个关键字
   */
  Filters?: Array<Filter>
  /**
   * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
   */
  Offset?: number
}

/**
 * 死信源队列信息
 */
export interface DeadLetterSource {
  /**
   * 消息队列ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueId?: string
  /**
   * 消息队列名字。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueName?: string
}
