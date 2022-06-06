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
 * 主题详情
 * @class
 */
class TopicDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 副本数
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 是否开启ip鉴权白名单，true表示开启，false表示不开启
         * @type {boolean || null}
         */
        this.EnableWhiteList = null;

        /**
         * ip白名单中ip个数
         * @type {number || null}
         */
        this.IpWhiteListCount = null;

        /**
         * 数据备份cos bucket: 转存到cos 的bucket地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ForwardCosBucket = null;

        /**
         * 数据备份cos 状态： 1 不开启数据备份，0 开启数据备份
         * @type {number || null}
         */
        this.ForwardStatus = null;

        /**
         * 数据备份到cos的周期频率
         * @type {number || null}
         */
        this.ForwardInterval = null;

        /**
         * 高级配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * 消息保留时间配置(用于动态配置变更记录)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TopicRetentionTimeConfigRsp || null}
         */
        this.RetentionTimeConfig = null;

        /**
         * 0:正常，1：已删除，2：删除中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteListCount = 'IpWhiteListCount' in params ? params.IpWhiteListCount : null;
        this.ForwardCosBucket = 'ForwardCosBucket' in params ? params.ForwardCosBucket : null;
        this.ForwardStatus = 'ForwardStatus' in params ? params.ForwardStatus : null;
        this.ForwardInterval = 'ForwardInterval' in params ? params.ForwardInterval : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.RetentionTimeConfig) {
            let obj = new TopicRetentionTimeConfigRsp();
            obj.deserialize(params.RetentionTimeConfig)
            this.RetentionTimeConfig = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteAcl请求参数结构体
 * @class
 */
class DeleteAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id信息
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE)
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * consumer信息
 * @class
 */
class GroupInfoMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * coordinator 为消费分组中的消费者生成的唯一 ID
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * 客户消费者 SDK 自己设置的 client.id 信息
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * 一般存储客户的 IP 地址
         * @type {string || null}
         */
        this.ClientHost = null;

        /**
         * 存储着分配给该消费者的 partition 信息
         * @type {Assignment || null}
         */
        this.Assignment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.ClientHost = 'ClientHost' in params ? params.ClientHost : null;

        if (params.Assignment) {
            let obj = new Assignment();
            obj.deserialize(params.Assignment)
            this.Assignment = obj;
        }

    }
}

/**
 * BatchCreateAcl请求参数结构体
 * @class
 */
class BatchCreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(2:TOPIC）
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源列表数组
         * @type {Array.<string> || null}
         */
        this.ResourceNames = null;

        /**
         * 设置的ACL规则列表
         * @type {Array.<AclRuleInfo> || null}
         */
        this.RuleList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceNames = 'ResourceNames' in params ? params.ResourceNames : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new AclRuleInfo();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }

    }
}

/**
 * DeleteUser请求参数结构体
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 分区和位移
 * @class
 */
class PartitionOffset extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition,例如"0"或"1"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Offset,例如100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeACL请求参数结构体
 * @class
 */
class DescribeACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 个数限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 关键字匹配
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * 批量修改topic属性结果
 * @class
 */
class BatchModifyTopicResultDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * topic名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 状态码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * 状态消息
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeTopicAttributes请求参数结构体
 * @class
 */
class DescribeTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstanceAttributes请求参数结构体
 * @class
 */
class DescribeInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 用户组实体
 * @class
 */
class ConsumerGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组名称
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * 订阅信息实体
         * @type {Array.<SubscribedInfo> || null}
         */
        this.SubscribedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.SubscribedInfo) {
            this.SubscribedInfo = new Array();
            for (let z in params.SubscribedInfo) {
                let obj = new SubscribedInfo();
                obj.deserialize(params.SubscribedInfo[z]);
                this.SubscribedInfo.push(obj);
            }
        }

    }
}

/**
 * 存储着分配给该消费者的 partition 信息
 * @class
 */
class Assignment extends  AbstractModel {
    constructor(){
        super();

        /**
         * assingment版本信息
         * @type {number || null}
         */
        this.Version = null;

        /**
         * topic信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfoTopics> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new GroupInfoTopics();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }

    }
}

/**
 * AuthorizeToken返回参数结构体
 * @class
 */
class AuthorizeTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0 成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerGroup返回参数结构体
 * @class
 */
class DescribeConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的消费分组信息
         * @type {ConsumerGroupResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ConsumerGroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelAuthorizationToken返回参数结构体
 * @class
 */
class CancelAuthorizationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0 成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoute请求参数结构体
 * @class
 */
class CreateRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 路由网络类型(3:vpc路由;4:标准版支撑路由;7:专业版支撑路由)
         * @type {number || null}
         */
        this.VipType = null;

        /**
         * vpc网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vpc子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 访问类型
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 是否需要权限管理
         * @type {number || null}
         */
        this.AuthFlag = null;

        /**
         * 调用方appId
         * @type {number || null}
         */
        this.CallerAppid = null;

        /**
         * 公网带宽
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * vip地址
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VipType = 'VipType' in params ? params.VipType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.AuthFlag = 'AuthFlag' in params ? params.AuthFlag : null;
        this.CallerAppid = 'CallerAppid' in params ? params.CallerAppid : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

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
         * ckafka 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ckafka 主题名称
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
         * @type {InstanceResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new InstanceResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FetchMessageByOffset返回参数结构体
 * @class
 */
class FetchMessageByOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {ConsumerRecord || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ConsumerRecord();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchModifyTopicAttributes返回参数结构体
 * @class
 */
class BatchModifyTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {Array.<BatchModifyTopicResultDTO> || null}
         */
        this.Result = null;

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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new BatchModifyTopicResultDTO();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建预付费实例返回结构
 * @class
 */
class CreateInstancePreResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的code，0为正常，非0为错误
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * 成功消息
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * 操作型返回的Data数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateInstancePreData || null}
         */
        this.Data = null;

        /**
         * 删除是时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeleteRouteTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new CreateInstancePreData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.DeleteRouteTimestamp = 'DeleteRouteTimestamp' in params ? params.DeleteRouteTimestamp : null;

    }
}

/**
 * GroupInfo内部topic对象
 * @class
 */
class GroupInfoTopics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配的 topic 名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 分配的 partition 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * 统一返回的TopicResponse
 * @class
 */
class TopicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的主题信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Topic> || null}
         */
        this.TopicList = null;

        /**
         * 符合条件的 topic 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new Topic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 地域实体对象
 * @class
 */
class Region extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.AreaName = null;

        /**
         * 地域代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * 地域代码（V3版本）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionCodeV3 = null;

        /**
         * NONE:默认值不支持任何特殊机型\nCVM:支持CVM类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Support = null;

        /**
         * 是否支持ipv6, 0：表示不支持，1：表示支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv6 = null;

        /**
         * 是否支持跨可用区, 0：表示不支持，1：表示支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MultiZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.RegionCodeV3 = 'RegionCodeV3' in params ? params.RegionCodeV3 : null;
        this.Support = 'Support' in params ? params.Support : null;
        this.Ipv6 = 'Ipv6' in params ? params.Ipv6 : null;
        this.MultiZone = 'MultiZone' in params ? params.MultiZone : null;

    }
}

/**
 * ModifyInstancePre请求参数结构体
 * @class
 */
class ModifyInstancePreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 预计磁盘，根据磁盘步长，规格向上调整。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 预计带宽，根据带宽步长，规格向上调整。
         * @type {number || null}
         */
        this.BandWidth = null;

        /**
         * 预计分区，根据带宽步长，规格向上调整。
         * @type {number || null}
         */
        this.Partition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

    }
}

/**
 * CreateToken返回参数结构体
 * @class
 */
class CreateTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * token串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesDetail返回参数结构体
 * @class
 */
class DescribeInstancesDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例详情结果对象
         * @type {InstanceDetailResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new InstanceDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建预付费接口返回的Data
 * @class
 */
class CreateInstancePreData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 订单号列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * AclRule列表接口出参
 * @class
 */
class AclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acl规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 匹配类型，目前只支持前缀匹配，枚举值列表：PREFIXED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PatternType = null;

        /**
         * 表示前缀匹配的前缀的值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * Acl资源类型,目前只支持Topic,枚举值列表：Topic
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 该规则所包含的ACL信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AclList = null;

        /**
         * 规则所创建的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTimeStamp = null;

        /**
         * 预设ACL规则是否应用到新增的topic中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsApplied = null;

        /**
         * 规则更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTimeStamp = null;

        /**
         * 规则的备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 其中一个显示的对应的TopicName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 应用该ACL规则的Topic数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicCount = null;

        /**
         * patternType的中文显示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PatternTypeTitle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PatternType = 'PatternType' in params ? params.PatternType : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.AclList = 'AclList' in params ? params.AclList : null;
        this.CreateTimeStamp = 'CreateTimeStamp' in params ? params.CreateTimeStamp : null;
        this.IsApplied = 'IsApplied' in params ? params.IsApplied : null;
        this.UpdateTimeStamp = 'UpdateTimeStamp' in params ? params.UpdateTimeStamp : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicCount = 'TopicCount' in params ? params.TopicCount : null;
        this.PatternTypeTitle = 'PatternTypeTitle' in params ? params.PatternTypeTitle : null;

    }
}

/**
 * DescribeACL返回参数结构体
 * @class
 */
class DescribeACLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的ACL结果集对象
         * @type {AclResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new AclResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 动态硬盘扩容配置
 * @class
 */
class DynamicDiskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动态硬盘扩容配置开关（0: 关闭，1: 开启）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 每次磁盘动态扩容大小百分比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepForwardPercentage = null;

        /**
         * 磁盘配额百分比触发条件，即消息达到此值触发硬盘自动扩容事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskQuotaPercentage = null;

        /**
         * 最大扩容硬盘大小，以 GB 为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDiskSpace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.StepForwardPercentage = 'StepForwardPercentage' in params ? params.StepForwardPercentage : null;
        this.DiskQuotaPercentage = 'DiskQuotaPercentage' in params ? params.DiskQuotaPercentage : null;
        this.MaxDiskSpace = 'MaxDiskSpace' in params ? params.MaxDiskSpace : null;

    }
}

/**
 * 操作型结果返回值
 * @class
 */
class JgwOperateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的code，0为正常，非0为错误
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * 成功消息
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * 操作型返回的Data数据,可能有flowId等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OperateResponseData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new OperateResponseData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * zone信息实体
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * zone的id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 是否内部APP
         * @type {number || null}
         */
        this.IsInternalApp = null;

        /**
         * app id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 标识
         * @type {boolean || null}
         */
        this.Flag = null;

        /**
         * zone名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * zone状态
         * @type {number || null}
         */
        this.ZoneStatus = null;

        /**
         * 额外标识
         * @type {string || null}
         */
        this.Exflag = null;

        /**
         * json对象，key为机型，value true为售罄，false为未售罄
         * @type {string || null}
         */
        this.SoldOut = null;

        /**
         * 标准版售罄信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SaleInfo> || null}
         */
        this.SalesInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.IsInternalApp = 'IsInternalApp' in params ? params.IsInternalApp : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneStatus = 'ZoneStatus' in params ? params.ZoneStatus : null;
        this.Exflag = 'Exflag' in params ? params.Exflag : null;
        this.SoldOut = 'SoldOut' in params ? params.SoldOut : null;

        if (params.SalesInfo) {
            this.SalesInfo = new Array();
            for (let z in params.SalesInfo) {
                let obj = new SaleInfo();
                obj.deserialize(params.SalesInfo[z]);
                this.SalesInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeTopicSubscribeGroup返回参数结构体
 * @class
 */
class DescribeTopicSubscribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {TopicSubscribeGroup || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new TopicSubscribeGroup();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCkafkaZone请求参数结构体
 * @class
 */
class DescribeCkafkaZoneRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 标准版销售信息
 * @class
 */
class SaleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手动设置的flag标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Flag = null;

        /**
         * ckakfa版本号(1.1.1/2.4.2/0.10.2)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 专业版、标准版标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 售罄标志：true售罄
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SoldOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.SoldOut = 'SoldOut' in params ? params.SoldOut : null;

    }
}

/**
 * 返回的topic对象
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题的ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题的名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

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
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * 实例详情中的标签对象
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签的值
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
 * BatchModifyGroupOffsets返回参数结构体
 * @class
 */
class BatchModifyGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGroup的返回
 * @class
 */
class GroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * GroupList
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeGroup> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribeGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }

    }
}

/**
 * CreateToken请求参数结构体
 * @class
 */
class CreateTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.User = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;

    }
}

/**
 * DeleteAclRule请求参数结构体
 * @class
 */
class DeleteAclRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id信息
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * acl规则名称
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * CreateConsumer返回参数结构体
 * @class
 */
class CreateConsumerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建group描述
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 路由信息返回对象
 * @class
 */
class RouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Route> || null}
         */
        this.Routers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Routers) {
            this.Routers = new Array();
            for (let z in params.Routers) {
                let obj = new Route();
                obj.deserialize(params.Routers[z]);
                this.Routers.push(obj);
            }
        }

    }
}

/**
 * DescribeGroup返回参数结构体
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果集列表
         * @type {GroupResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new GroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 修改实例属性的配置对象
 * @class
 */
class ModifyInstanceAttributesConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动创建 true 表示开启，false 表示不开启
         * @type {boolean || null}
         */
        this.AutoCreateTopicEnable = null;

        /**
         * 可选，如果auto.create.topic.enable设置为true没有设置该值时，默认设置为3
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * 如歌auto.create.topic.enable设置为true没有指定该值时默认设置为2
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicEnable = 'AutoCreateTopicEnable' in params ? params.AutoCreateTopicEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * AuthorizeToken请求参数结构体
 * @class
 */
class AuthorizeTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * token串
         * @type {string || null}
         */
        this.Tokens = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.Tokens = 'Tokens' in params ? params.Tokens : null;

    }
}

/**
 * 操作类型返回的Data结构
 * @class
 */
class OperateResponseData extends  AbstractModel {
    constructor(){
        super();

        /**
         * FlowId11
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateUser返回参数结构体
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAttributes返回参数结构体
 * @class
 */
class ModifyInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePartition返回参数结构体
 * @class
 */
class CreatePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果集
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群信息实体
 * @class
 */
class ClusterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群最大磁盘 单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDiskSize = null;

        /**
         * 集群最大带宽 单位MB/s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * 集群当前可用磁盘  单位GB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AvailableDiskSize = null;

        /**
         * 集群当前可用带宽 单位MB/s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AvailableBandWidth = null;

        /**
         * 集群所属可用区，表明集群归属的可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 集群节点所在的可用区，若该集群为跨可用区集群，则包含该集群节点所在的多个可用区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.MaxDiskSize = 'MaxDiskSize' in params ? params.MaxDiskSize : null;
        this.MaxBandWidth = 'MaxBandWidth' in params ? params.MaxBandWidth : null;
        this.AvailableDiskSize = 'AvailableDiskSize' in params ? params.AvailableDiskSize : null;
        this.AvailableBandWidth = 'AvailableBandWidth' in params ? params.AvailableBandWidth : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

    }
}

/**
 * DeleteGroup请求参数结构体
 * @class
 */
class DeleteGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 消费分组
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * DeleteUser返回参数结构体
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAcl请求参数结构体
 * @class
 */
class CreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id信息
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE)
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入时需要加 User: 前缀,如用户A则传入User:A。
         * @type {string || null}
         */
        this.Principal = null;

        /**
         * 资源名称列表,Json字符串格式。ResourceName和resourceNameList只能指定其中一个。
         * @type {string || null}
         */
        this.ResourceNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;
        this.ResourceNameList = 'ResourceNameList' in params ? params.ResourceNameList : null;

    }
}

/**
 * DescribeTopicSyncReplica返回参数结构体
 * @class
 */
class DescribeTopicSyncReplicaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回topic 副本详情
         * @type {TopicInSyncReplicaResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new TopicInSyncReplicaResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAppInfo请求参数结构体
 * @class
 */
class DescribeAppInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次查询用户数目最大数量限制，最大值为50，默认50
         * @type {number || null}
         */
        this.Limit = null;

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

    }
}

/**
 * DeleteRoute返回参数结构体
 * @class
 */
class DeleteRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * partition信息
 * @class
 */
class Partitions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * partition 消费位移
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTopic返回参数结构体
 * @class
 */
class DescribeTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TopicResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new TopicResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消费组返回结果实体
 * @class
 */
class ConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的消费组数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicList = null;

        /**
         * 消费分组List
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumerGroup> || null}
         */
        this.GroupList = null;

        /**
         * 所有分区数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalPartition = null;

        /**
         * 监控的分区列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Partition> || null}
         */
        this.PartitionListForMonitor = null;

        /**
         * 主题总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalTopic = null;

        /**
         * 监控的主题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicListForMonitor = null;

        /**
         * 监控的组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Group> || null}
         */
        this.GroupListForMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new ConsumerGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.TotalPartition = 'TotalPartition' in params ? params.TotalPartition : null;

        if (params.PartitionListForMonitor) {
            this.PartitionListForMonitor = new Array();
            for (let z in params.PartitionListForMonitor) {
                let obj = new Partition();
                obj.deserialize(params.PartitionListForMonitor[z]);
                this.PartitionListForMonitor.push(obj);
            }
        }
        this.TotalTopic = 'TotalTopic' in params ? params.TotalTopic : null;

        if (params.TopicListForMonitor) {
            this.TopicListForMonitor = new Array();
            for (let z in params.TopicListForMonitor) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicListForMonitor[z]);
                this.TopicListForMonitor.push(obj);
            }
        }

        if (params.GroupListForMonitor) {
            this.GroupListForMonitor = new Array();
            for (let z in params.GroupListForMonitor) {
                let obj = new Group();
                obj.deserialize(params.GroupListForMonitor[z]);
                this.GroupListForMonitor.push(obj);
            }
        }

    }
}

/**
 * CreateTopicIpWhiteList返回参数结构体
 * @class
 */
class CreateTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除主题IP白名单结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消费分组主题对象
 * @class
 */
class GroupOffsetTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 该主题分区数组，其中每个元素为一个 json object
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupOffsetPartition> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new GroupOffsetPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

    }
}

/**
 * ModifyGroupOffsets返回参数结构体
 * @class
 */
class ModifyGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分区实体
 * @class
 */
class Partition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区ID
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * CreateAcl返回参数结构体
 * @class
 */
class CreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称，是一个不超过 128 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Partition个数，大于0
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 副本个数，不能多于 broker 数，最大为3
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * ip白名单开关, 1:打开  0:关闭，默认不打开
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * Ip白名单列表，配额限制，enableWhileList=1时必选
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * 清理日志策略，日志清理模式，默认为"delete"。"delete"：日志按保存时间删除，"compact"：日志按 key 压缩，"compact, delete"：日志按 key 压缩且会按保存时间删除。
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 默认为1
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 是否允许未同步的副本选为leader，false:不允许，true:允许，默认不允许
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * 可选参数。消息保留时间，单位ms，当前最小值为60000ms
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment分片滚动的时长，单位ms，当前最小为3600000ms
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 主题消息最大值，单位为 Byte，最小值1024Byte(即1KB)，最大值为8388608Byte（即8MB）。
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * 预设ACL规则, 1:打开  0:关闭，默认不打开
         * @type {number || null}
         */
        this.EnableAclRule = null;

        /**
         * 预设ACL规则的名称
         * @type {string || null}
         */
        this.AclRuleName = null;

        /**
         * 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B
         * @type {number || null}
         */
        this.RetentionBytes = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.EnableAclRule = 'EnableAclRule' in params ? params.EnableAclRule : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteAcl返回参数结构体
 * @class
 */
class DeleteAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 动态消息保留时间配置
 * @class
 */
class DynamicRetentionTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动态消息保留时间配置开关（0: 关闭，1: 开启）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 磁盘配额百分比触发条件，即消息达到此值触发消息保留时间变更事件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskQuotaPercentage = null;

        /**
         * 每次向前调整消息保留时间百分比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StepForwardPercentage = null;

        /**
         * 保底时长，单位分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BottomRetention = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.DiskQuotaPercentage = 'DiskQuotaPercentage' in params ? params.DiskQuotaPercentage : null;
        this.StepForwardPercentage = 'StepForwardPercentage' in params ? params.StepForwardPercentage : null;
        this.BottomRetention = 'BottomRetention' in params ? params.BottomRetention : null;

    }
}

/**
 * DescribeTopicSubscribeGroup请求参数结构体
 * @class
 */
class DescribeTopicSubscribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 分页时的起始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时的个数
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteInstancePre返回参数结构体
 * @class
 */
class DeleteInstancePreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {CreateInstancePreResp || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateInstancePreResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FetchMessageByOffset请求参数结构体
 * @class
 */
class FetchMessageByOffsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 分区id
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * 位点信息，必填
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * topic副本及详细信息
 * @class
 */
class TopicInSyncReplicaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区名称
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Leader Id
         * @type {number || null}
         */
        this.Leader = null;

        /**
         * 副本集
         * @type {string || null}
         */
        this.Replica = null;

        /**
         * ISR
         * @type {string || null}
         */
        this.InSyncReplica = null;

        /**
         * 起始Offset
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * 末端Offset
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndOffset = null;

        /**
         * 消息数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MessageCount = null;

        /**
         * 未同步副本集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutOfSyncReplica = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Leader = 'Leader' in params ? params.Leader : null;
        this.Replica = 'Replica' in params ? params.Replica : null;
        this.InSyncReplica = 'InSyncReplica' in params ? params.InSyncReplica : null;
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.EndOffset = 'EndOffset' in params ? params.EndOffset : null;
        this.MessageCount = 'MessageCount' in params ? params.MessageCount : null;
        this.OutOfSyncReplica = 'OutOfSyncReplica' in params ? params.OutOfSyncReplica : null;

    }
}

/**
 * DescribeRegion请求参数结构体
 * @class
 */
class DescribeRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大结果数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 业务字段，可忽略
         * @type {string || null}
         */
        this.Business = null;

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
        this.Business = 'Business' in params ? params.Business : null;

    }
}

/**
 * 实例配置实体
 * @class
 */
class InstanceConfigDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否自动创建主题
         * @type {boolean || null}
         */
        this.AutoCreateTopicsEnable = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * 默认的复制Factor
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicsEnable = 'AutoCreateTopicsEnable' in params ? params.AutoCreateTopicsEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * DeleteAclRule返回参数结构体
 * @class
 */
class DeleteAclRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回被删除的规则的ID
         * @type {number || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户返回实体
 * @class
 */
class UserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * 符合条件的总用户数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeGroupInfo请求参数结构体
 * @class
 */
class DescribeGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例 ID 过滤。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka 消费分组，Consumer-group，这里是数组形式，格式：GroupList.0=xxx&GroupList.1=yyy。
         * @type {Array.<string> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupList = 'GroupList' in params ? params.GroupList : null;

    }
}

/**
 * DescribeGroupInfo返回参数结构体
 * @class
 */
class DescribeGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfoResponse> || null}
         */
        this.Result = null;

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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new GroupInfoResponse();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTopicAttributes返回参数结构体
 * @class
 */
class ModifyTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果集
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量发送消息内容
 * @class
 */
class BatchContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送的消息体
         * @type {string || null}
         */
        this.Body = null;

        /**
         * 发送消息的键名
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * DeleteRouteTriggerTime返回参数结构体
 * @class
 */
class DeleteRouteTriggerTimeResponse extends  AbstractModel {
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
 * DescribeUser返回参数结构体
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果列表
         * @type {UserResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new UserResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppId的查询结果
 * @class
 */
class AppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的所有AppId数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合要求的App Id列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AppIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AppIdList = 'AppIdList' in params ? params.AppIdList : null;

    }
}

/**
 * DescribeTopic请求参数结构体
 * @class
 */
class DescribeTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 过滤条件，按照 topicName 过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Acl预设策略名称
         * @type {string || null}
         */
        this.AclRuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;

    }
}

/**
 * CreatePartition请求参数结构体
 * @class
 */
class CreatePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题分区个数
         * @type {number || null}
         */
        this.PartitionNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * 组实体
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组名称
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * GroupInfo返回数据的实体
 * @class
 */
class GroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码，正常为0
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * group 状态描述（常见的为 Empty、Stable、Dead 三种状态）：
Dead：消费分组不存在
Empty：消费分组，当前没有任何消费者订阅
PreparingRebalance：消费分组处于 rebalance 状态
CompletingRebalance：消费分组处于 rebalance 状态
Stable：消费分组中各个消费者已经加入，处于稳定状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 消费分组选择的协议类型正常的消费者一般为 consumer 但有些系统采用了自己的协议如 kafka-connect 用的就是 connect。只有标准的 consumer 协议，本接口才知道具体的分配方式的格式，才能解析到具体的 partition 的分配情况
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 消费者 partition 分配算法常见的有如下几种(Kafka 消费者 SDK 默认的选择项为 range)：range、 roundrobin、 sticky
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 仅当 state 为 Stable 且 protocol_type 为 consumer 时， 该数组才包含信息
         * @type {Array.<GroupInfoMember> || null}
         */
        this.Members = null;

        /**
         * Kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.State = 'State' in params ? params.State : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new GroupInfoMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * DescribeAppInfo返回参数结构体
 * @class
 */
class DescribeAppInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的符合要求的App Id列表
         * @type {AppIdResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new AppIdResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ACL返回结果集
 * @class
 */
class AclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总数据条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * ACL列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Acl> || null}
         */
        this.AclList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AclList) {
            this.AclList = new Array();
            for (let z in params.AclList) {
                let obj = new Acl();
                obj.deserialize(params.AclList[z]);
                this.AclList.push(obj);
            }
        }

    }
}

/**
 * 查询kafka的zone信息返回的实体
 * @class
 */
class ZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * zone列表
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneList = null;

        /**
         * 最大购买实例个数
         * @type {number || null}
         */
        this.MaxBuyInstanceNum = null;

        /**
         * 最大购买带宽 单位Mb/s
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 后付费单位价格
         * @type {Price || null}
         */
        this.UnitPrice = null;

        /**
         * 后付费消息单价
         * @type {Price || null}
         */
        this.MessagePrice = null;

        /**
         * 用户独占集群信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterInfo> || null}
         */
        this.ClusterInfo = null;

        /**
         * 购买标准版配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Standard = null;

        /**
         * 购买标准版S2配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StandardS2 = null;

        /**
         * 购买专业版配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Profession = null;

        /**
         * 购买物理独占版配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Physical = null;

        /**
         * 公网带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicNetwork = null;

        /**
         * 公网带宽配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicNetworkLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }
        this.MaxBuyInstanceNum = 'MaxBuyInstanceNum' in params ? params.MaxBuyInstanceNum : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.UnitPrice) {
            let obj = new Price();
            obj.deserialize(params.UnitPrice)
            this.UnitPrice = obj;
        }

        if (params.MessagePrice) {
            let obj = new Price();
            obj.deserialize(params.MessagePrice)
            this.MessagePrice = obj;
        }

        if (params.ClusterInfo) {
            this.ClusterInfo = new Array();
            for (let z in params.ClusterInfo) {
                let obj = new ClusterInfo();
                obj.deserialize(params.ClusterInfo[z]);
                this.ClusterInfo.push(obj);
            }
        }
        this.Standard = 'Standard' in params ? params.Standard : null;
        this.StandardS2 = 'StandardS2' in params ? params.StandardS2 : null;
        this.Profession = 'Profession' in params ? params.Profession : null;
        this.Physical = 'Physical' in params ? params.Physical : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;
        this.PublicNetworkLimit = 'PublicNetworkLimit' in params ? params.PublicNetworkLimit : null;

    }
}

/**
 * 实例对象
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例的状态。0：创建中，1：运行中，2：删除中 ， 5 隔离中，-1 创建失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否开源实例。开源：true，不开源：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IfCommunity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IfCommunity = 'IfCommunity' in params ? params.IfCommunity : null;

    }
}

/**
 * DescribeInstanceAttributes返回参数结构体
 * @class
 */
class DescribeInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例属性返回结果对象。
         * @type {InstanceAttributesResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new InstanceAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPassword返回参数结构体
 * @class
 */
class ModifyPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 主题详情返回实体
 * @class
 */
class TopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的主题详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopicDetail> || null}
         */
        this.TopicList = null;

        /**
         * 符合条件的所有主题详情数量
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new TopicDetail();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DeleteInstancePre请求参数结构体
 * @class
 */
class DeleteInstancePreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeTopicSubscribeGroup接口出参
 * @class
 */
class TopicSubscribeGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 消费分组状态数量信息
         * @type {string || null}
         */
        this.StatusCountInfo = null;

        /**
         * 消费分组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfoResponse> || null}
         */
        this.GroupsInfo = null;

        /**
         * 此次请求是否异步的状态。实例里分组较少的会直接返回结果,Status为1。当分组较多时,会异步更新缓存，Status为0时不会返回分组信息，直至Status为1更新完毕返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.StatusCountInfo = 'StatusCountInfo' in params ? params.StatusCountInfo : null;

        if (params.GroupsInfo) {
            this.GroupsInfo = new Array();
            for (let z in params.GroupsInfo) {
                let obj = new GroupInfoResponse();
                obj.deserialize(params.GroupsInfo[z]);
                this.GroupsInfo.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 高级配置对象
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息保留时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Retention = null;

        /**
         * 最小同步复制数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 日志清理模式，默认 delete。
delete：日志按保存时间删除；compact：日志按 key 压缩；compact, delete：日志按 key 压缩且会保存时间删除。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Segment 分片滚动的时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 0表示 false。 1表示 true。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Segment 分片滚动的字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SegmentBytes = null;

        /**
         * 最大消息字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * 消息保留文件大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetentionBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Retention = 'Retention' in params ? params.Retention : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.SegmentBytes = 'SegmentBytes' in params ? params.SegmentBytes : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;

    }
}

/**
 * ModifyPassword请求参数结构体
 * @class
 */
class ModifyPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户当前密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 用户新密码
         * @type {string || null}
         */
        this.PasswordNew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordNew = 'PasswordNew' in params ? params.PasswordNew : null;

    }
}

/**
 * ModifyInstanceAttributes请求参数结构体
 * @class
 */
class ModifyInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例日志的最长保留时间，单位分钟，最大30天，0代表不开启日志保留时间回收策略
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例配置
         * @type {ModifyInstanceAttributesConfig || null}
         */
        this.Config = null;

        /**
         * 动态消息保留策略配置
         * @type {DynamicRetentionTime || null}
         */
        this.DynamicRetentionConfig = null;

        /**
         * 修改升配置rebalance时间
         * @type {number || null}
         */
        this.RebalanceTime = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * 动态硬盘扩容策略配置
         * @type {DynamicDiskConfig || null}
         */
        this.DynamicDiskConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.Config) {
            let obj = new ModifyInstanceAttributesConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.DynamicRetentionConfig) {
            let obj = new DynamicRetentionTime();
            obj.deserialize(params.DynamicRetentionConfig)
            this.DynamicRetentionConfig = obj;
        }
        this.RebalanceTime = 'RebalanceTime' in params ? params.RebalanceTime : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;

        if (params.DynamicDiskConfig) {
            let obj = new DynamicDiskConfig();
            obj.deserialize(params.DynamicDiskConfig)
            this.DynamicDiskConfig = obj;
        }

    }
}

/**
 * DescribeRegion返回参数结构体
 * @class
 */
class DescribeRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回地域枚举结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Region> || null}
         */
        this.Result = null;

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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new Region();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerGroup请求参数结构体
 * @class
 */
class DescribeConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ckafka实例id。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 可选，用户需要查询的group名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 可选，用户需要查询的group中的对应的topic名称，如果指定了该参数，而group又未指定则忽略该参数。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 本次返回个数限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移位置
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 虚拟IP实体
 * @class
 */
class VipEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 虚拟端口
         * @type {string || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * 消费组主题对象
 * @class
 */
class ConsumerGroupTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题名称
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 用户实体
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户id
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 组偏移量分区对象
 * @class
 */
class GroupOffsetPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * topic 的 partitionId
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * consumer 提交的 offset 位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 支持消费者提交消息时，传入 metadata 作为它用，当前一般为空字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 当前 partition 最新的 offset
         * @type {number || null}
         */
        this.LogEndOffset = null;

        /**
         * 未消费的消息个数
         * @type {number || null}
         */
        this.Lag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.LogEndOffset = 'LogEndOffset' in params ? params.LogEndOffset : null;
        this.Lag = 'Lag' in params ? params.Lag : null;

    }
}

/**
 * DescribeTopicAttributes返回参数结构体
 * @class
 */
class DescribeTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果对象
         * @type {TopicAttributesResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new TopicAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelAuthorizationToken请求参数结构体
 * @class
 */
class CancelAuthorizationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户
         * @type {string || null}
         */
        this.User = null;

        /**
         * token串
         * @type {string || null}
         */
        this.Tokens = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.User = 'User' in params ? params.User : null;
        this.Tokens = 'Tokens' in params ? params.Tokens : null;

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
         * 返回的结果集
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRouteTriggerTime请求参数结构体
 * @class
 */
class DeleteRouteTriggerTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改时间
         * @type {string || null}
         */
        this.DelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DelayTime = 'DelayTime' in params ? params.DelayTime : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例ID过滤
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * （过滤条件）按照实例名称过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认10，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 已废弃。匹配标签key值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 私有网络Id
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * 实例属性返回结果对象
 * @class
 */
class InstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 接入点 VIP 列表信息
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * 虚拟IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 虚拟端口
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * 实例的状态。0：创建中，1：运行中，2：删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例带宽，单位：Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 实例的存储大小，单位：GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 可用区
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC 的 ID，为空表示是基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID， 为空表示基础网络
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例健康状态， 1：健康，2：告警，3：异常
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * 实例健康信息，当前会展示磁盘利用率，最大长度为256
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 消息保存时间,单位为分钟
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * 自动创建 Topic 配置， 若该字段为空，则表示未开启自动创建
         * @type {InstanceConfigDO || null}
         */
        this.Config = null;

        /**
         * 剩余创建分区数
         * @type {number || null}
         */
        this.RemainderPartitions = null;

        /**
         * 剩余创建主题数
         * @type {number || null}
         */
        this.RemainderTopics = null;

        /**
         * 当前创建分区数
         * @type {number || null}
         */
        this.CreatedPartitions = null;

        /**
         * 当前创建主题数
         * @type {number || null}
         */
        this.CreatedTopics = null;

        /**
         * 标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 跨可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * kafka版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 最大分组数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * 售卖类型,0:标准版,1:专业版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cvm = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 表示该实例支持的特性。FEATURE_SUBNET_ACL:表示acl策略支持设置子网。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * 动态消息保留策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DynamicRetentionTime || null}
         */
        this.RetentionTimeConfig = null;

        /**
         * 最大连接数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxConnection = null;

        /**
         * 公网带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeleteRouteTimestamp = null;

        /**
         * 剩余创建分区数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainingPartitions = null;

        /**
         * 剩余创建主题数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainingTopics = null;

        /**
         * 动态硬盘扩容策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DynamicDiskConfig || null}
         */
        this.DynamicDiskConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;

        if (params.Config) {
            let obj = new InstanceConfigDO();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.RemainderPartitions = 'RemainderPartitions' in params ? params.RemainderPartitions : null;
        this.RemainderTopics = 'RemainderTopics' in params ? params.RemainderTopics : null;
        this.CreatedPartitions = 'CreatedPartitions' in params ? params.CreatedPartitions : null;
        this.CreatedTopics = 'CreatedTopics' in params ? params.CreatedTopics : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Features = 'Features' in params ? params.Features : null;

        if (params.RetentionTimeConfig) {
            let obj = new DynamicRetentionTime();
            obj.deserialize(params.RetentionTimeConfig)
            this.RetentionTimeConfig = obj;
        }
        this.MaxConnection = 'MaxConnection' in params ? params.MaxConnection : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;
        this.DeleteRouteTimestamp = 'DeleteRouteTimestamp' in params ? params.DeleteRouteTimestamp : null;
        this.RemainingPartitions = 'RemainingPartitions' in params ? params.RemainingPartitions : null;
        this.RemainingTopics = 'RemainingTopics' in params ? params.RemainingTopics : null;

        if (params.DynamicDiskConfig) {
            let obj = new DynamicDiskConfig();
            obj.deserialize(params.DynamicDiskConfig)
            this.DynamicDiskConfig = obj;
        }

    }
}

/**
 * DescribeGroup请求参数结构体
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回数量
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 查询过滤器
>描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
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
 * 消费组偏移量返回结果
 * @class
 */
class GroupOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合调节的总结果数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 该主题分区数组，其中每个元素为一个 json object
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupOffsetTopic> || null}
         */
        this.TopicList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new GroupOffsetTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

    }
}

/**
 * BatchCreateAcl返回参数结构体
 * @class
 */
class BatchCreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码
         * @type {number || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancePre返回参数结构体
 * @class
 */
class ModifyInstancePreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变更预付费实例配置返回结构
         * @type {CreateInstancePreResp || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateInstancePreResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUser请求参数结构体
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 实例详情返回结果
 * @class
 */
class InstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的实例详情列表
         * @type {Array.<InstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

    }
}

/**
 * DeleteRoute请求参数结构体
 * @class
 */
class DeleteRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 路由id
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * 调用方appId
         * @type {number || null}
         */
        this.CallerAppid = null;

        /**
         * 删除路由时间
         * @type {string || null}
         */
        this.DeleteRouteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.CallerAppid = 'CallerAppid' in params ? params.CallerAppid : null;
        this.DeleteRouteTime = 'DeleteRouteTime' in params ? params.DeleteRouteTime : null;

    }
}

/**
 * DeleteTopicIpWhiteList返回参数结构体
 * @class
 */
class DeleteTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除主题IP白名单结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstancePre返回参数结构体
 * @class
 */
class CreateInstancePreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {CreateInstancePreResp || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateInstancePreResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesDetail请求参数结构体
 * @class
 */
class DescribeInstancesDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例ID过滤
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * （过滤条件）按照实例名称过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认10，最大值20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 匹配标签key值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 过滤器。filter.Name 支持('Ip', 'VpcId', 'SubNetId', 'InstanceType','InstanceId') ,filter.Values最多传递10个值.
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 已经废弃， 使用InstanceIdList
         * @type {string || null}
         */
        this.InstanceIds = null;

        /**
         * 按照实例ID过滤
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

    }
}

/**
 * CreateConsumer请求参数结构体
 * @class
 */
class CreateConsumerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * group名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * topic名称，TopicName、TopicNameList 需要显示指定一个存在的topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * topic名称数组
         * @type {Array.<string> || null}
         */
        this.TopicNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicNameList = 'TopicNameList' in params ? params.TopicNameList : null;

    }
}

/**
 * DescribeRoute请求参数结构体
 * @class
 */
class DescribeRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Topic 副本及详情数据集合
 * @class
 */
class TopicInSyncReplicaResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic详情及副本合集
         * @type {Array.<TopicInSyncReplicaInfo> || null}
         */
        this.TopicInSyncReplicaList = null;

        /**
         * 总计个数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicInSyncReplicaList) {
            this.TopicInSyncReplicaList = new Array();
            for (let z in params.TopicInSyncReplicaList) {
                let obj = new TopicInSyncReplicaInfo();
                obj.deserialize(params.TopicInSyncReplicaList[z]);
                this.TopicInSyncReplicaList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * SendMessage返回参数结构体
 * @class
 */
class SendMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息ID列表
         * @type {Array.<string> || null}
         */
        this.MessageId = null;

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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCkafkaZone返回参数结构体
 * @class
 */
class DescribeCkafkaZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果复杂对象实体
         * @type {ZoneResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ZoneResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchModifyGroupOffsets请求参数结构体
 * @class
 */
class BatchModifyGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消费分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * partition信息
         * @type {Array.<Partitions> || null}
         */
        this.Partitions = null;

        /**
         * 指定topic，默认所有topic
         * @type {Array.<string> || null}
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new Partitions();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 主题属性返回结果实体
 * @class
 */
class TopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题 ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 主题备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 分区个数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * IP 白名单开关，1：打开； 0：关闭
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * IP 白名单列表
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * topic 配置数组
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * 分区详情
         * @type {Array.<TopicPartitionDO> || null}
         */
        this.Partitions = null;

        /**
         * ACL预设策略开关，1：打开； 0：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableAclRule = null;

        /**
         * 预设策略列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AclRule> || null}
         */
        this.AclRuleList = null;

        /**
         * topic 限流策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceQuotaConfigResp || null}
         */
        this.QuotaConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TopicPartitionDO();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }
        this.EnableAclRule = 'EnableAclRule' in params ? params.EnableAclRule : null;

        if (params.AclRuleList) {
            this.AclRuleList = new Array();
            for (let z in params.AclRuleList) {
                let obj = new AclRule();
                obj.deserialize(params.AclRuleList[z]);
                this.AclRuleList.push(obj);
            }
        }

        if (params.QuotaConfig) {
            let obj = new InstanceQuotaConfigResp();
            obj.deserialize(params.QuotaConfig)
            this.QuotaConfig = obj;
        }

    }
}

/**
 * CreateRoute返回参数结构体
 * @class
 */
class CreateRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 聚合的实例状态返回结果
 * @class
 */
class InstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
         */
        this.InstanceList = null;

        /**
         * 符合条件的结果总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new Instance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeGroup返回实体
 * @class
 */
class DescribeGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * groupId
         * @type {string || null}
         */
        this.Group = null;

        /**
         * 该 group 使用的协议。
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Group = 'Group' in params ? params.Group : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 分区详情
 * @class
 */
class TopicPartitionDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Leader 运行状态
         * @type {number || null}
         */
        this.LeaderStatus = null;

        /**
         * ISR 个数
         * @type {number || null}
         */
        this.IsrNum = null;

        /**
         * 副本个数
         * @type {number || null}
         */
        this.ReplicaNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.LeaderStatus = 'LeaderStatus' in params ? params.LeaderStatus : null;
        this.IsrNum = 'IsrNum' in params ? params.IsrNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

    }
}

/**
 * 创建主题返回
 * @class
 */
class CreateTopicResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题Id
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * 批量修改topic参数
 * @class
 */
class BatchModifyTopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 副本数
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * 消息删除策略，可以选择delete 或者compact
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * 当producer设置request.required.acks为-1时，min.insync.replicas指定replicas的最小数目
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 是否允许非ISR的副本成为Leader
         * @type {boolean || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * topic维度的消息保留时间（毫秒）范围1 分钟到90 天
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * topic维度的消息保留大小，范围1 MB到1024 GB
         * @type {number || null}
         */
        this.RetentionBytes = null;

        /**
         * Segment分片滚动的时长（毫秒），范围1 到90 天
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 批次的消息大小，范围1 KB到12 MB
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;

    }
}

/**
 * DescribeRoute返回参数结构体
 * @class
 */
class DescribeRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的路由信息结果集
         * @type {RouteResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new RouteResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * （过滤条件）按照topicName过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认 10，最大值20，取值要大于0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Acl预设策略名称
         * @type {string || null}
         */
        this.AclRuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;

    }
}

/**
 * DescribeGroupOffsets返回参数结构体
 * @class
 */
class DescribeGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果对象
         * @type {GroupOffsetResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new GroupOffsetResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMessage请求参数结构体
 * @class
 */
class SendMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DataHub接入ID
         * @type {string || null}
         */
        this.DataHubId = null;

        /**
         * 发送消息内容(单次请求最多500条)
         * @type {Array.<BatchContent> || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataHubId = 'DataHubId' in params ? params.DataHubId : null;

        if (params.Message) {
            this.Message = new Array();
            for (let z in params.Message) {
                let obj = new BatchContent();
                obj.deserialize(params.Message[z]);
                this.Message.push(obj);
            }
        }

    }
}

/**
 * 消息记录
 * @class
 */
class ConsumerRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 分区id
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * 位点
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 消息key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 消息value
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 消息时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * ModifyGroupOffsets请求参数结构体
 * @class
 */
class ModifyGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * kafka实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * 重置offset的策略，入参含义 0. 对齐shift-by参数，代表把offset向前或向后移动shift条 1. 对齐参考(by-duration,to-datetime,to-earliest,to-latest),代表把offset移动到指定timestamp的位置 2. 对齐参考(to-offset)，代表把offset移动到指定的offset位置
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 表示需要重置的topics， 不填表示全部
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * 当strategy为0时，必须包含该字段，可以大于零代表会把offset向后移动shift条，小于零则将offset向前回溯shift条数。正确重置后新的offset应该是(old_offset + shift)，需要注意的是如果新的offset小于partition的earliest则会设置为earliest，如果大于partition 的latest则会设置为latest
         * @type {number || null}
         */
        this.Shift = null;

        /**
         * 单位ms。当strategy为1时，必须包含该字段，其中-2表示重置offset到最开始的位置，-1表示重置到最新的位置(相当于清空)，其它值则代表指定的时间，会获取topic中指定时间的offset然后进行重置，需要注意的时，如果指定的时间不存在消息，则获取最末尾的offset。
         * @type {number || null}
         */
        this.ShiftTimestamp = null;

        /**
         * 需要重新设置的offset位置。当strategy为2，必须包含该字段。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 需要重新设置的partition的列表，如果没有指定Topics参数。则重置全部topics的对应的Partition列表里的partition。指定Topics时则重置指定的topic列表的对应的Partitions列表的partition。
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.Shift = 'Shift' in params ? params.Shift : null;
        this.ShiftTimestamp = 'ShiftTimestamp' in params ? params.ShiftTimestamp : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * BatchModifyTopicAttributes请求参数结构体
 * @class
 */
class BatchModifyTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题属性列表
         * @type {Array.<BatchModifyTopicInfo> || null}
         */
        this.Topic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Topic) {
            this.Topic = new Array();
            for (let z in params.Topic) {
                let obj = new BatchModifyTopicInfo();
                obj.deserialize(params.Topic[z]);
                this.Topic.push(obj);
            }
        }

    }
}

/**
 * DeleteGroup返回参数结构体
 * @class
 */
class DeleteGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopicIpWhiteList请求参数结构体
 * @class
 */
class CreateTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * ip白名单列表
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * 路由实体对象
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例接入方式
0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)
1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）
3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 路由ID
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * vip网络类型（1:外网TGW  2:基础网络 3:VPC网络 4:支撑网络(idc 环境) 5:SSL外网访问方式访问 6:黑石环境vpc 7:支撑网络(cvm 环境）
         * @type {number || null}
         */
        this.VipType = null;

        /**
         * 虚拟IP列表
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DomainPort = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeleteTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.VipType = 'VipType' in params ? params.VipType : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainPort = 'DomainPort' in params ? params.DomainPort : null;
        this.DeleteTimestamp = 'DeleteTimestamp' in params ? params.DeleteTimestamp : null;

    }
}

/**
 * 表示ACL 规则的四元组信息
 * @class
 */
class AclRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acl操作方式，枚举值(所有操作: All, 读：Read，写：Write)
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 权限类型，(Deny，Allow)
         * @type {string || null}
         */
        this.PermissionType = null;

        /**
         * 默认为*，表示任何host都可以访问，当前ckafka不支持host为*和ip网段
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入格式需要带【User:】前缀。例如用户A，传入为User:A。
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * ACL对象实体
 * @class
 */
class Acl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acl资源类型，（0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID）当前只有TOPIC，
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Principal = null;

        /**
         * 默认为*，表示任何host都可以访问，当前ckafka不支持host为*，但是后面开源kafka的产品化会直接支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Acl操作方式(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE)
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * 权限类型(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)
         * @type {number || null}
         */
        this.PermissionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Principal = 'Principal' in params ? params.Principal : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;

    }
}

/**
 * Topic消息保留时间配置返回信息
 * @class
 */
class TopicRetentionTimeConfigRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 期望值，即用户配置的Topic消息保留时间(单位分钟)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Expect = null;

        /**
         * 当前值，即当前生效值(可能存在动态调整，单位分钟)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Current = null;

        /**
         * 最近变更时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ModTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Expect = 'Expect' in params ? params.Expect : null;
        this.Current = 'Current' in params ? params.Current : null;
        this.ModTimeStamp = 'ModTimeStamp' in params ? params.ModTimeStamp : null;

    }
}

/**
 * ModifyTopicAttributes请求参数结构体
 * @class
 */
class ModifyTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * IP 白名单开关，1：打开；0：关闭。
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * 默认为1。
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 默认为 0，0：false；1：true。
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * 消息保留时间，单位：ms，当前最小值为60000ms。
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment 分片滚动的时长，单位：ms，当前最小为86400000ms。
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 主题消息最大值，单位为 Byte，最大值为12582912Byte（即12MB）。
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * 消息删除策略，可以选择delete 或者compact
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Ip白名单列表，配额限制，enableWhileList=1时必选
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * 预设ACL规则, 1:打开  0:关闭，默认不打开
         * @type {number || null}
         */
        this.EnableAclRule = null;

        /**
         * 预设ACL规则的名称
         * @type {string || null}
         */
        this.AclRuleName = null;

        /**
         * 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B
         * @type {number || null}
         */
        this.RetentionBytes = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 生产限流，单位 MB/s
         * @type {number || null}
         */
        this.QuotaProducerByteRate = null;

        /**
         * 消费限流，单位 MB/s
         * @type {number || null}
         */
        this.QuotaConsumerByteRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;
        this.EnableAclRule = 'EnableAclRule' in params ? params.EnableAclRule : null;
        this.AclRuleName = 'AclRuleName' in params ? params.AclRuleName : null;
        this.RetentionBytes = 'RetentionBytes' in params ? params.RetentionBytes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.QuotaProducerByteRate = 'QuotaProducerByteRate' in params ? params.QuotaProducerByteRate : null;
        this.QuotaConsumerByteRate = 'QuotaConsumerByteRate' in params ? params.QuotaConsumerByteRate : null;

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
         * 返回创建结果
         * @type {CreateTopicResp || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateTopicResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstancePre请求参数结构体
 * @class
 */
class CreateInstancePreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 可用区
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 预付费购买时长，例如 "1m",就是一个月
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 实例规格说明 专业版实例[所有规格]填写1.
标准版实例 ([入门型]填写1，[标准型]填写2，[进阶型]填写3，[容量型]填写4，[高阶型1]填写5，[高阶性2]填写6,[高阶型3]填写7,[高阶型4]填写8，[独占型]填写9。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * vpcId，不填默认基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id，vpc网络需要传该参数，基础网络可以不传
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 可选。实例日志的最长保留时间，单位分钟，默认为10080（7天），最大30天，不填默认0，代表不开启日志保留时间回收策略
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * 创建实例时可以选择集群Id, 该入参表示集群Id
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * 预付费自动续费标记，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * CKafka版本号[0.10.2、1.1.1、2.4.1], 默认是1.1.1
         * @type {string || null}
         */
        this.KafkaVersion = null;

        /**
         * 实例类型: [标准版实例]填写 standard(默认), [专业版实例]填写 profession
         * @type {string || null}
         */
        this.SpecificationsType = null;

        /**
         * 磁盘大小,专业版不填写默认最小磁盘,填写后根据磁盘带宽分区数弹性计算
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 带宽,专业版不填写默认最小带宽,填写后根据磁盘带宽分区数弹性计算
         * @type {number || null}
         */
        this.BandWidth = null;

        /**
         * 分区大小,专业版不填写默认最小分区数,填写后根据磁盘带宽分区数弹性计算
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * 标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 磁盘类型（ssd填写CLOUD_SSD，sata填写CLOUD_BASIC）
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 跨可用区，zoneIds必填
         * @type {boolean || null}
         */
        this.MultiZoneFlag = null;

        /**
         * 可用区列表
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.KafkaVersion = 'KafkaVersion' in params ? params.KafkaVersion : null;
        this.SpecificationsType = 'SpecificationsType' in params ? params.SpecificationsType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.MultiZoneFlag = 'MultiZoneFlag' in params ? params.MultiZoneFlag : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

    }
}

/**
 * DeleteTopicIpWhiteList请求参数结构体
 * @class
 */
class DeleteTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * ip白名单列表
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * DescribeGroupOffsets请求参数结构体
 * @class
 */
class DescribeGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例 ID 过滤
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * group 订阅的主题名称数组，如果没有该数组，则表示指定的 group 下所有 topic 信息
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * 模糊匹配 topicName
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 本次查询的偏移位置，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次返回结果的最大个数，默认为50，最大值为50
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUser请求参数结构体
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 按照名称过滤
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次返回个数
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeTopicSyncReplica请求参数结构体
 * @class
 */
class DescribeTopicSyncReplicaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认10，最大值20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 仅筛选未同步副本
         * @type {boolean || null}
         */
        this.OutOfSyncReplicaOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OutOfSyncReplicaOnly = 'OutOfSyncReplicaOnly' in params ? params.OutOfSyncReplicaOnly : null;

    }
}

/**
 * 实例详情
 * @class
 */
class InstanceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 访问实例的vip 信息
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 访问实例的端口信息
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * 虚拟IP列表
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * 实例的状态。0：创建中，1：运行中，2：删除中：5隔离中， -1 创建失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例带宽，单位Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 实例的存储大小，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 可用区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpcId，如果为空，说明是基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例是否续费，int  枚举值：1表示自动续费，2表示明确不自动续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 实例状态 int：1表示健康，2表示告警，3 表示实例状态异常
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * 实例状态信息
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * 实例创建时间时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 实例过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 是否为内部客户。值为1 表示内部客户
         * @type {number || null}
         */
        this.IsInternal = null;

        /**
         * Topic个数
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * 标识tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * kafka版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 跨可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * ckafka售卖类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cvm = null;

        /**
         * ckafka实例类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 当前规格最大Topic数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxTopicNumber = null;

        /**
         * 当前规格最大Partition数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxPartitionNumber = null;

        /**
         * 计划升级配置时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RebalanceTime = null;

        /**
         * 实例当前partition数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PartitionNumber = null;

        /**
         * 公网带宽类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicNetworkChargeType = null;

        /**
         * 公网带宽值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublicNetwork = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsInternal = 'IsInternal' in params ? params.IsInternal : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.MaxTopicNumber = 'MaxTopicNumber' in params ? params.MaxTopicNumber : null;
        this.MaxPartitionNumber = 'MaxPartitionNumber' in params ? params.MaxPartitionNumber : null;
        this.RebalanceTime = 'RebalanceTime' in params ? params.RebalanceTime : null;
        this.PartitionNumber = 'PartitionNumber' in params ? params.PartitionNumber : null;
        this.PublicNetworkChargeType = 'PublicNetworkChargeType' in params ? params.PublicNetworkChargeType : null;
        this.PublicNetwork = 'PublicNetwork' in params ? params.PublicNetwork : null;

    }
}

/**
 * 实例 / topic 维度限流策略
 * @class
 */
class InstanceQuotaConfigResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产限流大小，单位 MB/s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QuotaProducerByteRate = null;

        /**
         * 消费限流大小，单位 MB/s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QuotaConsumerByteRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaProducerByteRate = 'QuotaProducerByteRate' in params ? params.QuotaProducerByteRate : null;
        this.QuotaConsumerByteRate = 'QuotaConsumerByteRate' in params ? params.QuotaConsumerByteRate : null;

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
         * 返回的主题详情实体
         * @type {TopicDetailResponse || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new TopicDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订阅信息实体
 * @class
 */
class SubscribedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅的主题名
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅的分区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Partition = null;

        /**
         * 分区offset信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PartitionOffset> || null}
         */
        this.PartitionOffset = null;

        /**
         * 订阅的主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.PartitionOffset) {
            this.PartitionOffset = new Array();
            for (let z in params.PartitionOffset) {
                let obj = new PartitionOffset();
                obj.deserialize(params.PartitionOffset[z]);
                this.PartitionOffset.push(obj);
            }
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * 消息价格实体
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 折扣价
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 原价
         * @type {number || null}
         */
        this.TotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;

    }
}

module.exports = {
    TopicDetail: TopicDetail,
    DeleteAclRequest: DeleteAclRequest,
    GroupInfoMember: GroupInfoMember,
    BatchCreateAclRequest: BatchCreateAclRequest,
    DeleteUserRequest: DeleteUserRequest,
    PartitionOffset: PartitionOffset,
    DescribeACLRequest: DescribeACLRequest,
    BatchModifyTopicResultDTO: BatchModifyTopicResultDTO,
    DescribeTopicAttributesRequest: DescribeTopicAttributesRequest,
    DescribeInstanceAttributesRequest: DescribeInstanceAttributesRequest,
    ConsumerGroup: ConsumerGroup,
    Assignment: Assignment,
    AuthorizeTokenResponse: AuthorizeTokenResponse,
    DescribeConsumerGroupResponse: DescribeConsumerGroupResponse,
    CancelAuthorizationTokenResponse: CancelAuthorizationTokenResponse,
    CreateRouteRequest: CreateRouteRequest,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    FetchMessageByOffsetResponse: FetchMessageByOffsetResponse,
    BatchModifyTopicAttributesResponse: BatchModifyTopicAttributesResponse,
    CreateInstancePreResp: CreateInstancePreResp,
    GroupInfoTopics: GroupInfoTopics,
    TopicResult: TopicResult,
    Region: Region,
    ModifyInstancePreRequest: ModifyInstancePreRequest,
    CreateTokenResponse: CreateTokenResponse,
    DescribeInstancesDetailResponse: DescribeInstancesDetailResponse,
    CreateInstancePreData: CreateInstancePreData,
    AclRule: AclRule,
    DescribeACLResponse: DescribeACLResponse,
    DynamicDiskConfig: DynamicDiskConfig,
    JgwOperateResponse: JgwOperateResponse,
    ZoneInfo: ZoneInfo,
    DescribeTopicSubscribeGroupResponse: DescribeTopicSubscribeGroupResponse,
    DescribeCkafkaZoneRequest: DescribeCkafkaZoneRequest,
    SaleInfo: SaleInfo,
    Topic: Topic,
    Tag: Tag,
    BatchModifyGroupOffsetsResponse: BatchModifyGroupOffsetsResponse,
    GroupResponse: GroupResponse,
    CreateTokenRequest: CreateTokenRequest,
    DeleteAclRuleRequest: DeleteAclRuleRequest,
    CreateConsumerResponse: CreateConsumerResponse,
    RouteResponse: RouteResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    ModifyInstanceAttributesConfig: ModifyInstanceAttributesConfig,
    AuthorizeTokenRequest: AuthorizeTokenRequest,
    OperateResponseData: OperateResponseData,
    CreateUserResponse: CreateUserResponse,
    ModifyInstanceAttributesResponse: ModifyInstanceAttributesResponse,
    CreatePartitionResponse: CreatePartitionResponse,
    ClusterInfo: ClusterInfo,
    DeleteGroupRequest: DeleteGroupRequest,
    DeleteUserResponse: DeleteUserResponse,
    CreateAclRequest: CreateAclRequest,
    DescribeTopicSyncReplicaResponse: DescribeTopicSyncReplicaResponse,
    DescribeAppInfoRequest: DescribeAppInfoRequest,
    DeleteRouteResponse: DeleteRouteResponse,
    Partitions: Partitions,
    DescribeTopicResponse: DescribeTopicResponse,
    ConsumerGroupResponse: ConsumerGroupResponse,
    CreateTopicIpWhiteListResponse: CreateTopicIpWhiteListResponse,
    GroupOffsetTopic: GroupOffsetTopic,
    ModifyGroupOffsetsResponse: ModifyGroupOffsetsResponse,
    Partition: Partition,
    CreateAclResponse: CreateAclResponse,
    CreateTopicRequest: CreateTopicRequest,
    DeleteAclResponse: DeleteAclResponse,
    DynamicRetentionTime: DynamicRetentionTime,
    DescribeTopicSubscribeGroupRequest: DescribeTopicSubscribeGroupRequest,
    DeleteInstancePreResponse: DeleteInstancePreResponse,
    FetchMessageByOffsetRequest: FetchMessageByOffsetRequest,
    TopicInSyncReplicaInfo: TopicInSyncReplicaInfo,
    DescribeRegionRequest: DescribeRegionRequest,
    InstanceConfigDO: InstanceConfigDO,
    DeleteAclRuleResponse: DeleteAclRuleResponse,
    UserResponse: UserResponse,
    DescribeGroupInfoRequest: DescribeGroupInfoRequest,
    DescribeGroupInfoResponse: DescribeGroupInfoResponse,
    ModifyTopicAttributesResponse: ModifyTopicAttributesResponse,
    BatchContent: BatchContent,
    DeleteRouteTriggerTimeResponse: DeleteRouteTriggerTimeResponse,
    DescribeUserResponse: DescribeUserResponse,
    AppIdResponse: AppIdResponse,
    DescribeTopicRequest: DescribeTopicRequest,
    CreatePartitionRequest: CreatePartitionRequest,
    Group: Group,
    GroupInfoResponse: GroupInfoResponse,
    DescribeAppInfoResponse: DescribeAppInfoResponse,
    AclResponse: AclResponse,
    ZoneResponse: ZoneResponse,
    Instance: Instance,
    DescribeInstanceAttributesResponse: DescribeInstanceAttributesResponse,
    ModifyPasswordResponse: ModifyPasswordResponse,
    TopicDetailResponse: TopicDetailResponse,
    DeleteInstancePreRequest: DeleteInstancePreRequest,
    TopicSubscribeGroup: TopicSubscribeGroup,
    Config: Config,
    ModifyPasswordRequest: ModifyPasswordRequest,
    ModifyInstanceAttributesRequest: ModifyInstanceAttributesRequest,
    DescribeRegionResponse: DescribeRegionResponse,
    DescribeConsumerGroupRequest: DescribeConsumerGroupRequest,
    VipEntity: VipEntity,
    ConsumerGroupTopic: ConsumerGroupTopic,
    User: User,
    GroupOffsetPartition: GroupOffsetPartition,
    DescribeTopicAttributesResponse: DescribeTopicAttributesResponse,
    CancelAuthorizationTokenRequest: CancelAuthorizationTokenRequest,
    DeleteTopicResponse: DeleteTopicResponse,
    DeleteRouteTriggerTimeRequest: DeleteRouteTriggerTimeRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InstanceAttributesResponse: InstanceAttributesResponse,
    DescribeGroupRequest: DescribeGroupRequest,
    Filter: Filter,
    GroupOffsetResponse: GroupOffsetResponse,
    BatchCreateAclResponse: BatchCreateAclResponse,
    ModifyInstancePreResponse: ModifyInstancePreResponse,
    CreateUserRequest: CreateUserRequest,
    InstanceDetailResponse: InstanceDetailResponse,
    DeleteRouteRequest: DeleteRouteRequest,
    DeleteTopicIpWhiteListResponse: DeleteTopicIpWhiteListResponse,
    CreateInstancePreResponse: CreateInstancePreResponse,
    DescribeInstancesDetailRequest: DescribeInstancesDetailRequest,
    CreateConsumerRequest: CreateConsumerRequest,
    DescribeRouteRequest: DescribeRouteRequest,
    TopicInSyncReplicaResult: TopicInSyncReplicaResult,
    SendMessageResponse: SendMessageResponse,
    DescribeCkafkaZoneResponse: DescribeCkafkaZoneResponse,
    BatchModifyGroupOffsetsRequest: BatchModifyGroupOffsetsRequest,
    TopicAttributesResponse: TopicAttributesResponse,
    CreateRouteResponse: CreateRouteResponse,
    InstanceResponse: InstanceResponse,
    DescribeGroup: DescribeGroup,
    TopicPartitionDO: TopicPartitionDO,
    CreateTopicResp: CreateTopicResp,
    BatchModifyTopicInfo: BatchModifyTopicInfo,
    DescribeRouteResponse: DescribeRouteResponse,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DescribeGroupOffsetsResponse: DescribeGroupOffsetsResponse,
    SendMessageRequest: SendMessageRequest,
    ConsumerRecord: ConsumerRecord,
    ModifyGroupOffsetsRequest: ModifyGroupOffsetsRequest,
    BatchModifyTopicAttributesRequest: BatchModifyTopicAttributesRequest,
    DeleteGroupResponse: DeleteGroupResponse,
    CreateTopicIpWhiteListRequest: CreateTopicIpWhiteListRequest,
    Route: Route,
    AclRuleInfo: AclRuleInfo,
    Acl: Acl,
    TopicRetentionTimeConfigRsp: TopicRetentionTimeConfigRsp,
    ModifyTopicAttributesRequest: ModifyTopicAttributesRequest,
    CreateTopicResponse: CreateTopicResponse,
    CreateInstancePreRequest: CreateInstancePreRequest,
    DeleteTopicIpWhiteListRequest: DeleteTopicIpWhiteListRequest,
    DescribeGroupOffsetsRequest: DescribeGroupOffsetsRequest,
    DescribeUserRequest: DescribeUserRequest,
    DescribeTopicSyncReplicaRequest: DescribeTopicSyncReplicaRequest,
    InstanceDetail: InstanceDetail,
    InstanceQuotaConfigResp: InstanceQuotaConfigResp,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    SubscribedInfo: SubscribedInfo,
    Price: Price,

}
