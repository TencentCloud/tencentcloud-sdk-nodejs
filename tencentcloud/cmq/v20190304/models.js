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
const AbstractModel = require("../../common/abstract_model");

/**
 * topic返回信息展示字段
 * @class
 */
class TopicSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 每秒钟发布消息的条数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 描述用户创建订阅时选择的过滤策略：
FilterType = 1表示用户使用 FilterTag 标签过滤;
FilterType = 2表示用户使用 BindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * 主题的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * 当前该主题中消息数目（消息堆积数）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * RewindQueue请求参数结构体
 * @class
 */
class RewindQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。
         * @type {number || null}
         */
        this.StartConsumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.StartConsumeTime = 'StartConsumeTime' in params ? params.StartConsumeTime : null;

    }
}

/**
 * DescribeSubscriptionDetail请求参数结构体
 * @class
 */
class DescribeSubscriptionDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选参数，目前只支持SubscriptionName，且仅支持一个关键字。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyQueueAttribute返回参数结构体
 * @class
 */
class ModifyQueueAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateQueue请求参数结构体
 * @class
 */
class CreateQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 队列是否开启回溯消息能力，该参数取值范围0-msgRetentionSeconds,即最大的回溯时间为消息在队列中的保留周期，0表示不开启。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 1 表示事务队列，0 表示普通队列
         * @type {number || null}
         */
        this.Transaction = null;

        /**
         * 第一次回查间隔
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大回查次数
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * 死信策略。0为消息被多次消费未删除，1为Time-To-Live过期
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 最大接收次数 1-1000
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间msgRetentionSeconds
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 是否开启消息轨迹追踪，当不设置字段时，默认为不开启，该字段为true表示开启，为false表示不开启
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * ModifySubscriptionAttribute返回参数结构体
 * @class
 */
class ModifySubscriptionAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeadLetterPolicy
 * @class
 */
class DeadLetterPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信队列名字。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterQueue = null;

        /**
         * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 最大接收次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.DeadLetterQueue = 'DeadLetterQueue' in params ? params.DeadLetterQueue : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;

    }
}

/**
 * ModifyTopicAttribute返回参数结构体
 * @class
 */
class ModifyTopicAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscribe请求参数结构体
 * @class
 */
class DeleteSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * DescribeSubscriptionDetail返回参数结构体
 * @class
 */
class DescribeSubscriptionDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Subscription属性集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Subscription> || null}
         */
        this.SubscriptionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SubscriptionSet) {
            this.SubscriptionSet = new Array();
            for (let z in params.SubscriptionSet) {
                let obj = new Subscription();
                obj.deserialize(params.SubscriptionSet[z]);
                this.SubscriptionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubscribe请求参数结构体
 * @class
 */
class CreateSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 订阅的协议，目前支持两种协议：http、queue。使用http协议，用户需自己搭建接受消息的web server。使用queue，消息会自动推送到CMQ queue，用户可以并发地拉取消息。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 接收通知的Endpoint，根据协议Protocol区分：对于http，Endpoint必须以“`http://`”开头，host可以是域名或IP；对于Queue，则填QueueName。 请注意，目前推送服务不能推送到私有网络中，因此Endpoint填写为私有网络域名或地址将接收不到推送的消息，目前支持推送到公网和基础网络。
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 向Endpoint推送消息出现错误时，CMQ推送服务器的重试策略。取值有：1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s...由于Topic消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是EXPONENTIAL_DECAY_RETRY。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
         * @type {Array.<string> || null}
         */
        this.FilterTag = null;

        /**
         * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * 推送内容的格式。取值：1）JSON；2）SIMPLIFIED，即raw格式。如果Protocol是queue，则取值必须为SIMPLIFIED。如果Protocol是http，两个值均可以，默认值是JSON。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.FilterTag = 'FilterTag' in params ? params.FilterTag : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * ClearQueue请求参数结构体
 * @class
 */
class ClearQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTopic返回参数结构体
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicName
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearSubscriptionFilterTags返回参数结构体
 * @class
 */
class ClearSubscriptionFilterTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDeadLetter返回参数结构体
 * @class
 */
class UnbindDeadLetterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransactionPolicy
 * @class
 */
class TransactionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第一次回查时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大查询次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxQueryCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;

    }
}

/**
 * DescribeTopicDetail请求参数结构体
 * @class
 */
class DescribeTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 目前只支持过滤TopicName ， 且只能填一个过滤值。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签匹配。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 精确匹配TopicName。
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DeleteTopic请求参数结构体
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeTopicDetail返回参数结构体
 * @class
 */
class DescribeTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题列表总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主题详情列表。
         * @type {Array.<TopicSet> || null}
         */
        this.TopicSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicSet) {
            this.TopicSet = new Array();
            for (let z in params.TopicSet) {
                let obj = new TopicSet();
                obj.deserialize(params.TopicSet[z]);
                this.TopicSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQueueDetail返回参数结构体
 * @class
 */
class DescribeQueueDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总队列数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 队列详情列表。
         * @type {Array.<QueueSet> || null}
         */
        this.QueueSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new QueueSet();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDeadLetter请求参数结构体
 * @class
 */
class UnbindDeadLetterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTopic请求参数结构体
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 用于指定主题的消息匹配策略。1：表示标签匹配策略；2：表示路由匹配策略，默认值为标签匹配策略。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DeleteQueue请求参数结构体
 * @class
 */
class DeleteQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * 过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数的名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数值
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeDeadLetterSourceQueues返回参数结构体
 * @class
 */
class DescribeDeadLetterSourceQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足本次条件的队列个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 死信队列源队列
         * @type {Array.<DeadLetterSource> || null}
         */
        this.QueueSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new DeadLetterSource();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RewindQueue返回参数结构体
 * @class
 */
class RewindQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopicAttribute请求参数结构体
 * @class
 */
class ModifyTopicAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DescribeQueueDetail请求参数结构体
 * @class
 */
class DescribeQueueDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选参数，目前支持QueueName筛选，且仅支持一个关键字
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 标签搜索
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 精确匹配QueueName
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * 批量queue属性信息
 * @class
 */
class QueueSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息队列ID。
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 消息队列名字。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 带宽限制。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bps = null;

        /**
         * 飞行消息最大保留时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDelaySeconds = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 队列的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveMsgNum = null;

        /**
         * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InactiveMsgNum = null;

        /**
         * 延迟消息数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayMsgNum = null;

        /**
         * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewindMsgNum = null;

        /**
         * 消息最小未消费时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinMsgTime = null;

        /**
         * 事务消息队列。true表示是事务消息，false表示不是事务消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Transaction = null;

        /**
         * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeadLetterSource> || null}
         */
        this.DeadLetterSource = null;

        /**
         * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeadLetterPolicy || null}
         */
        this.DeadLetterPolicy = null;

        /**
         * 事务消息策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TransactionPolicy || null}
         */
        this.TransactionPolicy = null;

        /**
         * 创建者Uin。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Bps = 'Bps' in params ? params.Bps : null;
        this.MaxDelaySeconds = 'MaxDelaySeconds' in params ? params.MaxDelaySeconds : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.ActiveMsgNum = 'ActiveMsgNum' in params ? params.ActiveMsgNum : null;
        this.InactiveMsgNum = 'InactiveMsgNum' in params ? params.InactiveMsgNum : null;
        this.DelayMsgNum = 'DelayMsgNum' in params ? params.DelayMsgNum : null;
        this.RewindMsgNum = 'RewindMsgNum' in params ? params.RewindMsgNum : null;
        this.MinMsgTime = 'MinMsgTime' in params ? params.MinMsgTime : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;

        if (params.DeadLetterSource) {
            this.DeadLetterSource = new Array();
            for (let z in params.DeadLetterSource) {
                let obj = new DeadLetterSource();
                obj.deserialize(params.DeadLetterSource[z]);
                this.DeadLetterSource.push(obj);
            }
        }

        if (params.DeadLetterPolicy) {
            let obj = new DeadLetterPolicy();
            obj.deserialize(params.DeadLetterPolicy)
            this.DeadLetterPolicy = obj;
        }

        if (params.TransactionPolicy) {
            let obj = new TransactionPolicy();
            obj.deserialize(params.TransactionPolicy)
            this.TransactionPolicy = obj;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DeleteTopic返回参数结构体
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearSubscriptionFilterTags请求参数结构体
 * @class
 */
class ClearSubscriptionFilterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * CreateQueue返回参数结构体
 * @class
 */
class CreateQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的queueId
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscribe返回参数结构体
 * @class
 */
class DeleteSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeadLetterSourceQueues请求参数结构体
 * @class
 */
class DescribeDeadLetterSourceQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤死信队列源队列名称，目前仅支持SourceQueueName过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DeadLetterSource
 * @class
 */
class DeadLetterSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息队列ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 消息队列名字。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateSubscribe返回参数结构体
 * @class
 */
class CreateSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * SubscriptionId
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearQueue返回参数结构体
 * @class
 */
class ClearQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubscriptionAttribute请求参数结构体
 * @class
 */
class ModifySubscriptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 向 Endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值如下：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息。
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s···由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 Protocol 是 queue，则取值必须为 SIMPLIFIED。如果 Protocol 是 HTTP，两个值均可以，默认值是 JSON。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

        /**
         * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;

    }
}

/**
 * 订阅返回参数
 * @class
 */
class Subscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 订阅 ID。订阅 ID 在拉取监控数据时会用到。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * 订阅拥有者的 APPID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicOwner = null;

        /**
         * 该订阅待投递的消息数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * 订阅的创建时间。返回 Unix 时间戳，精确到秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 表示订阅接收消息的过滤策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * 接收通知的 endpoint，根据协议 protocol 区分：对于 HTTP，endpoint 必须以http://开头，host 可以是域名或 IP；对于 queue，则填 queueName。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 描述用户创建订阅时选择的过滤策略：
filterType = 1表示用户使用 filterTag 标签过滤
filterType = 2表示用户使用 bindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * 订阅的协议，目前支持两种协议：HTTP、queue。使用 HTTP 协议，用户需自己搭建接受消息的 Web Server。使用 queue，消息会自动推送到 CMQ queue，用户可以并发地拉取消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值有：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始 1s，后面是 2s，4s，8s...由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 protocol 是 queue，则取值必须为 SIMPLIFIED。如果 protocol 是 HTTP，两个值均可以，默认值是 JSON。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.TopicOwner = 'TopicOwner' in params ? params.TopicOwner : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * DeleteQueue返回参数结构体
 * @class
 */
class DeleteQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyQueueAttribute请求参数结构体
 * @class
 */
class ModifyQueueAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 消息最长回溯时间，取值范围0-msgRetentionSeconds，消息的最大回溯之间为消息在队列中的保存周期，0表示不开启消息回溯。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 第一次查询时间
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大查询次数
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * MaxTimeToLivepolicy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 最大接收次数
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * 死信队列策略
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

module.exports = {
    TopicSet: TopicSet,
    RewindQueueRequest: RewindQueueRequest,
    DescribeSubscriptionDetailRequest: DescribeSubscriptionDetailRequest,
    ModifyQueueAttributeResponse: ModifyQueueAttributeResponse,
    CreateQueueRequest: CreateQueueRequest,
    ModifySubscriptionAttributeResponse: ModifySubscriptionAttributeResponse,
    DeadLetterPolicy: DeadLetterPolicy,
    ModifyTopicAttributeResponse: ModifyTopicAttributeResponse,
    DeleteSubscribeRequest: DeleteSubscribeRequest,
    DescribeSubscriptionDetailResponse: DescribeSubscriptionDetailResponse,
    CreateSubscribeRequest: CreateSubscribeRequest,
    ClearQueueRequest: ClearQueueRequest,
    CreateTopicResponse: CreateTopicResponse,
    ClearSubscriptionFilterTagsResponse: ClearSubscriptionFilterTagsResponse,
    UnbindDeadLetterResponse: UnbindDeadLetterResponse,
    TransactionPolicy: TransactionPolicy,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    DescribeQueueDetailResponse: DescribeQueueDetailResponse,
    UnbindDeadLetterRequest: UnbindDeadLetterRequest,
    CreateTopicRequest: CreateTopicRequest,
    DeleteQueueRequest: DeleteQueueRequest,
    Filter: Filter,
    DescribeDeadLetterSourceQueuesResponse: DescribeDeadLetterSourceQueuesResponse,
    RewindQueueResponse: RewindQueueResponse,
    ModifyTopicAttributeRequest: ModifyTopicAttributeRequest,
    DescribeQueueDetailRequest: DescribeQueueDetailRequest,
    QueueSet: QueueSet,
    DeleteTopicResponse: DeleteTopicResponse,
    ClearSubscriptionFilterTagsRequest: ClearSubscriptionFilterTagsRequest,
    CreateQueueResponse: CreateQueueResponse,
    DeleteSubscribeResponse: DeleteSubscribeResponse,
    DescribeDeadLetterSourceQueuesRequest: DescribeDeadLetterSourceQueuesRequest,
    Tag: Tag,
    DeadLetterSource: DeadLetterSource,
    CreateSubscribeResponse: CreateSubscribeResponse,
    ClearQueueResponse: ClearQueueResponse,
    ModifySubscriptionAttributeRequest: ModifySubscriptionAttributeRequest,
    Subscription: Subscription,
    DeleteQueueResponse: DeleteQueueResponse,
    ModifyQueueAttributeRequest: ModifyQueueAttributeRequest,

}
