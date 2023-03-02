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
 * CreateInstancePost返回参数结构体
 * @class
 */
class CreateInstancePostResponse extends  AbstractModel {
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
 * dip失败消息写入cls的配置
 * @class
 */
class DropCls extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否投递到cls
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DropInvalidMessageToCls = null;

        /**
         * 投递cls的地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DropClsRegion = null;

        /**
         * 投递cls的账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DropClsOwneruin = null;

        /**
         * 投递cls的主题
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DropClsTopicId = null;

        /**
         * 投递cls的日志集id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DropClsLogSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DropInvalidMessageToCls = 'DropInvalidMessageToCls' in params ? params.DropInvalidMessageToCls : null;
        this.DropClsRegion = 'DropClsRegion' in params ? params.DropClsRegion : null;
        this.DropClsOwneruin = 'DropClsOwneruin' in params ? params.DropClsOwneruin : null;
        this.DropClsTopicId = 'DropClsTopicId' in params ? params.DropClsTopicId : null;
        this.DropClsLogSet = 'DropClsLogSet' in params ? params.DropClsLogSet : null;

    }
}

/**
 * PostgreSQL修改连接源参数
 * @class
 */
class PostgreSQLModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * PostgreSQL连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * PostgreSQL的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * PostgreSQL连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * PostgreSQL连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * PostgreSQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * PostgreSQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 当type为TDSQL_C_POSTGRESQL时，该参数才有值【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * 是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;

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
 * 数据处理ROW输出格式配置
 * @class
 */
class RowParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行内容，KEY_VALUE，VALUE
         * @type {string || null}
         */
        this.RowContent = null;

        /**
         * key和value间的分隔符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyValueDelimiter = null;

        /**
         * 元素建的分隔符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntryDelimiter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RowContent = 'RowContent' in params ? params.RowContent : null;
        this.KeyValueDelimiter = 'KeyValueDelimiter' in params ? params.KeyValueDelimiter : null;
        this.EntryDelimiter = 'EntryDelimiter' in params ? params.EntryDelimiter : null;

    }
}

/**
 * Es连接源参数
 * @class
 */
class EsConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Es的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Es连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Es连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Es连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Es连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * Es连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * Es连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

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
 * DescribeDatahubTask返回参数结构体
 * @class
 */
class DescribeDatahubTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {DescribeDatahubTaskRes || null}
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
            let obj = new DescribeDatahubTaskRes();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * SQLServer连接源参数
 * @class
 */
class SQLServerConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQLServer的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * SQLServer连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * SQLServer连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * SQLServer连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * SQLServer连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * SQLServer连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Dip任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

    }
}

/**
 * CreateConnectResource返回参数结构体
 * @class
 */
class CreateConnectResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
         * @type {ConnectResourceResourceIdResp || null}
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
            let obj = new ConnectResourceResourceIdResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeDatahubGroupOffsets返回参数结构体
 * @class
 */
class DescribeDatahubGroupOffsetsResponse extends  AbstractModel {
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
 * 值支持一拆多，即将一个值拆为一个数组
 * @class
 */
class SplitParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分隔符
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regex = 'Regex' in params ? params.Regex : null;

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
 * 查询连接源具体数据的返参
 * @class
 */
class DescribeConnectResourceResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 连接源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 连接源描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 连接源的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 连接源的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 连接源的异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 连接源的当前所处步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrentStep = null;

        /**
         * 步骤列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.StepList = null;

        /**
         * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MySQLConnectParam || null}
         */
        this.MySQLConnectParam = null;

        /**
         * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PostgreSQLConnectParam || null}
         */
        this.PostgreSQLConnectParam = null;

        /**
         * Dts配置，Type为DTS时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DtsConnectParam || null}
         */
        this.DtsConnectParam = null;

        /**
         * MongoDB配置，Type为MONGODB时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MongoDBConnectParam || null}
         */
        this.MongoDBConnectParam = null;

        /**
         * Es配置，Type为ES时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EsConnectParam || null}
         */
        this.EsConnectParam = null;

        /**
         * ClickHouse配置，Type为CLICKHOUSE时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClickHouseConnectParam || null}
         */
        this.ClickHouseConnectParam = null;

        /**
         * MariaDB配置，Type为MARIADB时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MariaDBConnectParam || null}
         */
        this.MariaDBConnectParam = null;

        /**
         * SQLServer配置，Type为SQLSERVER时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SQLServerConnectParam || null}
         */
        this.SQLServerConnectParam = null;

        /**
         * Ctsdb配置，Type为CTSDB时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CtsdbConnectParam || null}
         */
        this.CtsdbConnectParam = null;

        /**
         * Doris 配置，Type 为 DORIS 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DorisConnectParam || null}
         */
        this.DorisConnectParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.CurrentStep = 'CurrentStep' in params ? params.CurrentStep : null;
        this.StepList = 'StepList' in params ? params.StepList : null;

        if (params.MySQLConnectParam) {
            let obj = new MySQLConnectParam();
            obj.deserialize(params.MySQLConnectParam)
            this.MySQLConnectParam = obj;
        }

        if (params.PostgreSQLConnectParam) {
            let obj = new PostgreSQLConnectParam();
            obj.deserialize(params.PostgreSQLConnectParam)
            this.PostgreSQLConnectParam = obj;
        }

        if (params.DtsConnectParam) {
            let obj = new DtsConnectParam();
            obj.deserialize(params.DtsConnectParam)
            this.DtsConnectParam = obj;
        }

        if (params.MongoDBConnectParam) {
            let obj = new MongoDBConnectParam();
            obj.deserialize(params.MongoDBConnectParam)
            this.MongoDBConnectParam = obj;
        }

        if (params.EsConnectParam) {
            let obj = new EsConnectParam();
            obj.deserialize(params.EsConnectParam)
            this.EsConnectParam = obj;
        }

        if (params.ClickHouseConnectParam) {
            let obj = new ClickHouseConnectParam();
            obj.deserialize(params.ClickHouseConnectParam)
            this.ClickHouseConnectParam = obj;
        }

        if (params.MariaDBConnectParam) {
            let obj = new MariaDBConnectParam();
            obj.deserialize(params.MariaDBConnectParam)
            this.MariaDBConnectParam = obj;
        }

        if (params.SQLServerConnectParam) {
            let obj = new SQLServerConnectParam();
            obj.deserialize(params.SQLServerConnectParam)
            this.SQLServerConnectParam = obj;
        }

        if (params.CtsdbConnectParam) {
            let obj = new CtsdbConnectParam();
            obj.deserialize(params.CtsdbConnectParam)
            this.CtsdbConnectParam = obj;
        }

        if (params.DorisConnectParam) {
            let obj = new DorisConnectParam();
            obj.deserialize(params.DorisConnectParam)
            this.DorisConnectParam = obj;
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
 * DescribeDatahubTask请求参数结构体
 * @class
 */
class DescribeDatahubTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * Url解析
 * @class
 */
class UrlDecodeParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CharsetName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CharsetName = 'CharsetName' in params ? params.CharsetName : null;

    }
}

/**
 * FetchLatestDatahubMessageList返回参数结构体
 * @class
 */
class FetchLatestDatahubMessageListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果。
         * @type {Array.<ConsumerRecord> || null}
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
                let obj = new ConsumerRecord();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Es类型入参
 * @class
 */
class EsParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例资源
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Es的连接port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Es用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Es密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否为自建集群
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * 实例vip
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * 实例的vpcId
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Es是否抛弃解析失败的消息
         * @type {boolean || null}
         */
        this.DropInvalidMessage = null;

        /**
         * Es自定义index名称
         * @type {string || null}
         */
        this.Index = null;

        /**
         * Es自定义日期后缀
         * @type {string || null}
         */
        this.DateFormat = null;

        /**
         * 非json格式数据的自定义key
         * @type {string || null}
         */
        this.ContentKey = null;

        /**
         * Es是否抛弃非json格式的消息
         * @type {boolean || null}
         */
        this.DropInvalidJsonMessage = null;

        /**
         * 转储到Es中的文档ID取值字段名
         * @type {string || null}
         */
        this.DocumentIdField = null;

        /**
         * Es自定义index名称的类型，STRING，JSONPATH，默认为STRING
         * @type {string || null}
         */
        this.IndexType = null;

        /**
         * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
         * @type {DropCls || null}
         */
        this.DropCls = null;

        /**
         * 转储到ES的消息为Database的binlog时，如果需要同步数据库操作，即增删改的操作到ES时填写数据库表主键
         * @type {string || null}
         */
        this.DatabasePrimaryKey = null;

        /**
         * 死信队列
         * @type {FailureParam || null}
         */
        this.DropDlq = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.DropInvalidMessage = 'DropInvalidMessage' in params ? params.DropInvalidMessage : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.DateFormat = 'DateFormat' in params ? params.DateFormat : null;
        this.ContentKey = 'ContentKey' in params ? params.ContentKey : null;
        this.DropInvalidJsonMessage = 'DropInvalidJsonMessage' in params ? params.DropInvalidJsonMessage : null;
        this.DocumentIdField = 'DocumentIdField' in params ? params.DocumentIdField : null;
        this.IndexType = 'IndexType' in params ? params.IndexType : null;

        if (params.DropCls) {
            let obj = new DropCls();
            obj.deserialize(params.DropCls)
            this.DropCls = obj;
        }
        this.DatabasePrimaryKey = 'DatabasePrimaryKey' in params ? params.DatabasePrimaryKey : null;

        if (params.DropDlq) {
            let obj = new FailureParam();
            obj.deserialize(params.DropDlq)
            this.DropDlq = obj;
        }

    }
}

/**
 * 查询连接源具体数据的返参
 * @class
 */
class DescribeConnectResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 连接源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 连接源描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 连接源的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 连接源的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 连接源的异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 连接源的当前所处步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrentStep = null;

        /**
         * 该连接源关联的Datahub任务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DatahubTaskCount = null;

        /**
         * Dts配置，Type为DTS时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DtsConnectParam || null}
         */
        this.DtsConnectParam = null;

        /**
         * MongoDB配置，Type为MONGODB时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MongoDBConnectParam || null}
         */
        this.MongoDBConnectParam = null;

        /**
         * Es配置，Type为ES时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EsConnectParam || null}
         */
        this.EsConnectParam = null;

        /**
         * ClickHouse配置，Type为CLICKHOUSE时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClickHouseConnectParam || null}
         */
        this.ClickHouseConnectParam = null;

        /**
         * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MySQLConnectParam || null}
         */
        this.MySQLConnectParam = null;

        /**
         * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PostgreSQLConnectParam || null}
         */
        this.PostgreSQLConnectParam = null;

        /**
         * MariaDB配置，Type为MARIADB时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MariaDBConnectParam || null}
         */
        this.MariaDBConnectParam = null;

        /**
         * SQLServer配置，Type为SQLSERVER时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SQLServerConnectParam || null}
         */
        this.SQLServerConnectParam = null;

        /**
         * Ctsdb配置，Type为CTSDB时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CtsdbConnectParam || null}
         */
        this.CtsdbConnectParam = null;

        /**
         * Doris 配置，Type 为 DORIS 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DorisConnectParam || null}
         */
        this.DorisConnectParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.CurrentStep = 'CurrentStep' in params ? params.CurrentStep : null;
        this.DatahubTaskCount = 'DatahubTaskCount' in params ? params.DatahubTaskCount : null;

        if (params.DtsConnectParam) {
            let obj = new DtsConnectParam();
            obj.deserialize(params.DtsConnectParam)
            this.DtsConnectParam = obj;
        }

        if (params.MongoDBConnectParam) {
            let obj = new MongoDBConnectParam();
            obj.deserialize(params.MongoDBConnectParam)
            this.MongoDBConnectParam = obj;
        }

        if (params.EsConnectParam) {
            let obj = new EsConnectParam();
            obj.deserialize(params.EsConnectParam)
            this.EsConnectParam = obj;
        }

        if (params.ClickHouseConnectParam) {
            let obj = new ClickHouseConnectParam();
            obj.deserialize(params.ClickHouseConnectParam)
            this.ClickHouseConnectParam = obj;
        }

        if (params.MySQLConnectParam) {
            let obj = new MySQLConnectParam();
            obj.deserialize(params.MySQLConnectParam)
            this.MySQLConnectParam = obj;
        }

        if (params.PostgreSQLConnectParam) {
            let obj = new PostgreSQLConnectParam();
            obj.deserialize(params.PostgreSQLConnectParam)
            this.PostgreSQLConnectParam = obj;
        }

        if (params.MariaDBConnectParam) {
            let obj = new MariaDBConnectParam();
            obj.deserialize(params.MariaDBConnectParam)
            this.MariaDBConnectParam = obj;
        }

        if (params.SQLServerConnectParam) {
            let obj = new SQLServerConnectParam();
            obj.deserialize(params.SQLServerConnectParam)
            this.SQLServerConnectParam = obj;
        }

        if (params.CtsdbConnectParam) {
            let obj = new CtsdbConnectParam();
            obj.deserialize(params.CtsdbConnectParam)
            this.CtsdbConnectParam = obj;
        }

        if (params.DorisConnectParam) {
            let obj = new DorisConnectParam();
            obj.deserialize(params.DorisConnectParam)
            this.DorisConnectParam = obj;
        }

    }
}

/**
 * Dts类型入参
 * @class
 */
class DtsParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dts实例Id
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Dts的连接ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Dts的连接port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Dts订阅的topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Dts消费分组的Id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Dts消费分组的账号
         * @type {string || null}
         */
        this.GroupUser = null;

        /**
         * Dts消费分组的密码
         * @type {string || null}
         */
        this.GroupPassword = null;

        /**
         * false同步原始数据，true同步解析后的json格式数据,默认true
         * @type {boolean || null}
         */
        this.TranSql = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupUser = 'GroupUser' in params ? params.GroupUser : null;
        this.GroupPassword = 'GroupPassword' in params ? params.GroupPassword : null;
        this.TranSql = 'TranSql' in params ? params.TranSql : null;

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
 * MySQL连接源参数
 * @class
 */
class MySQLConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MySQL的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MySQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MySQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * MySQL连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MySQL连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * MySQL连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * 当type为TDSQL_C_MYSQL时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Mysql 连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;

    }
}

/**
 * InquireCkafkaPrice接口询价返回值
 * @class
 */
class InquireCkafkaPriceResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryPrice || null}
         */
        this.InstancePrice = null;

        /**
         * 公网带宽价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryPrice || null}
         */
        this.PublicNetworkBandwidthPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new InquiryPrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

        if (params.PublicNetworkBandwidthPrice) {
            let obj = new InquiryPrice();
            obj.deserialize(params.PublicNetworkBandwidthPrice)
            this.PublicNetworkBandwidthPrice = obj;
        }

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
 * SQLServer修改连接源参数
 * @class
 */
class SQLServerModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQLServer连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * SQLServer的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * SQLServer连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * SQLServer连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * SQLServer连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * SQLServer连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否更新到关联的Dip任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

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
 * DescribeDatahubTasks请求参数结构体
 * @class
 */
class DescribeDatahubTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，按照 TaskName 过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 转储的目标类型
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 任务类型，SOURCE数据接入，SINK数据流出
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 转储的源类型
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 转储的资源
         * @type {string || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

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
 * Datahub资源配置
 * @class
 */
class DatahubResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ckafka配置，Type为KAFKA时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KafkaParam || null}
         */
        this.KafkaParam = null;

        /**
         * EB配置，Type为EB时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EventBusParam || null}
         */
        this.EventBusParam = null;

        /**
         * MongoDB配置，Type为MONGODB时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MongoDBParam || null}
         */
        this.MongoDBParam = null;

        /**
         * Es配置，Type为ES时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EsParam || null}
         */
        this.EsParam = null;

        /**
         * Tdw配置，Type为TDW时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TdwParam || null}
         */
        this.TdwParam = null;

        /**
         * Dts配置，Type为DTS时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DtsParam || null}
         */
        this.DtsParam = null;

        /**
         * ClickHouse配置，Type为CLICKHOUSE时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClickHouseParam || null}
         */
        this.ClickHouseParam = null;

        /**
         * Cls配置，Type为CLS时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClsParam || null}
         */
        this.ClsParam = null;

        /**
         * Cos配置，Type为COS时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosParam || null}
         */
        this.CosParam = null;

        /**
         * MySQL配置，Type为MYSQL时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MySQLParam || null}
         */
        this.MySQLParam = null;

        /**
         * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PostgreSQLParam || null}
         */
        this.PostgreSQLParam = null;

        /**
         * Topic配置，Type为Topic时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TopicParam || null}
         */
        this.TopicParam = null;

        /**
         * MariaDB配置，Type为MARIADB时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MariaDBParam || null}
         */
        this.MariaDBParam = null;

        /**
         * SQLServer配置，Type为SQLSERVER时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SQLServerParam || null}
         */
        this.SQLServerParam = null;

        /**
         * Ctsdb配置，Type为CTSDB时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CtsdbParam || null}
         */
        this.CtsdbParam = null;

        /**
         * Scf配置，Type为SCF时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScfParam || null}
         */
        this.ScfParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.KafkaParam) {
            let obj = new KafkaParam();
            obj.deserialize(params.KafkaParam)
            this.KafkaParam = obj;
        }

        if (params.EventBusParam) {
            let obj = new EventBusParam();
            obj.deserialize(params.EventBusParam)
            this.EventBusParam = obj;
        }

        if (params.MongoDBParam) {
            let obj = new MongoDBParam();
            obj.deserialize(params.MongoDBParam)
            this.MongoDBParam = obj;
        }

        if (params.EsParam) {
            let obj = new EsParam();
            obj.deserialize(params.EsParam)
            this.EsParam = obj;
        }

        if (params.TdwParam) {
            let obj = new TdwParam();
            obj.deserialize(params.TdwParam)
            this.TdwParam = obj;
        }

        if (params.DtsParam) {
            let obj = new DtsParam();
            obj.deserialize(params.DtsParam)
            this.DtsParam = obj;
        }

        if (params.ClickHouseParam) {
            let obj = new ClickHouseParam();
            obj.deserialize(params.ClickHouseParam)
            this.ClickHouseParam = obj;
        }

        if (params.ClsParam) {
            let obj = new ClsParam();
            obj.deserialize(params.ClsParam)
            this.ClsParam = obj;
        }

        if (params.CosParam) {
            let obj = new CosParam();
            obj.deserialize(params.CosParam)
            this.CosParam = obj;
        }

        if (params.MySQLParam) {
            let obj = new MySQLParam();
            obj.deserialize(params.MySQLParam)
            this.MySQLParam = obj;
        }

        if (params.PostgreSQLParam) {
            let obj = new PostgreSQLParam();
            obj.deserialize(params.PostgreSQLParam)
            this.PostgreSQLParam = obj;
        }

        if (params.TopicParam) {
            let obj = new TopicParam();
            obj.deserialize(params.TopicParam)
            this.TopicParam = obj;
        }

        if (params.MariaDBParam) {
            let obj = new MariaDBParam();
            obj.deserialize(params.MariaDBParam)
            this.MariaDBParam = obj;
        }

        if (params.SQLServerParam) {
            let obj = new SQLServerParam();
            obj.deserialize(params.SQLServerParam)
            this.SQLServerParam = obj;
        }

        if (params.CtsdbParam) {
            let obj = new CtsdbParam();
            obj.deserialize(params.CtsdbParam)
            this.CtsdbParam = obj;
        }

        if (params.ScfParam) {
            let obj = new ScfParam();
            obj.deserialize(params.ScfParam)
            this.ScfParam = obj;
        }

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
 * ClickHouse类型入参
 * @class
 */
class ClickHouseParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClickHouse的集群
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * ClickHouse的数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * ClickHouse的数据表名
         * @type {string || null}
         */
        this.Table = null;

        /**
         * ClickHouse的schema
         * @type {Array.<ClickHouseSchema> || null}
         */
        this.Schema = null;

        /**
         * 实例资源
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * ClickHouse的连接ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * ClickHouse的连接port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * ClickHouse的用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * ClickHouse的密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 实例vip
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * 实例的vpcId
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否为自建集群
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * ClickHouse是否抛弃解析失败的消息，默认为true
         * @type {boolean || null}
         */
        this.DropInvalidMessage = null;

        /**
         * ClickHouse 类型，emr-clickhouse : "emr";cdw-clickhouse : "cdwch";自建 : ""
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
         * @type {DropCls || null}
         */
        this.DropCls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;

        if (params.Schema) {
            this.Schema = new Array();
            for (let z in params.Schema) {
                let obj = new ClickHouseSchema();
                obj.deserialize(params.Schema[z]);
                this.Schema.push(obj);
            }
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.DropInvalidMessage = 'DropInvalidMessage' in params ? params.DropInvalidMessage : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.DropCls) {
            let obj = new DropCls();
            obj.deserialize(params.DropCls)
            this.DropCls = obj;
        }

    }
}

/**
 * 过滤器参数
 * @class
 */
class FilterMapParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 匹配模式，前缀匹配PREFIX，后缀匹配SUFFIX，包含匹配CONTAINS，EXCEPT除外匹配，数值匹配NUMBER，IP匹配IP
         * @type {string || null}
         */
        this.MatchMode = null;

        /**
         * Value值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 固定REGULAR
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.MatchMode = 'MatchMode' in params ? params.MatchMode : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * ModifyDatahubTask返回参数结构体
 * @class
 */
class ModifyDatahubTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatahubTaskIdRes || null}
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
            let obj = new DatahubTaskIdRes();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * FetchMessageListByOffset请求参数结构体
 * @class
 */
class FetchMessageListByOffsetRequest extends  AbstractModel {
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
         * 位点信息
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大查询条数，默认20，最大20
         * @type {number || null}
         */
        this.SinglePartitionRecordNumber = null;

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
        this.SinglePartitionRecordNumber = 'SinglePartitionRecordNumber' in params ? params.SinglePartitionRecordNumber : null;

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
 * 数据处理参数
 * @class
 */
class TransformsParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始数据
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 处理链
         * @type {Array.<FieldParam> || null}
         */
        this.FieldChain = null;

        /**
         * 过滤器
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FilterMapParam> || null}
         */
        this.FilterParam = null;

        /**
         * 失败处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FailureParam || null}
         */
        this.FailureParam = null;

        /**
         * 测试结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 数据来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 输出格式，JSON，ROW，默认为JSON
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * 输出格式为ROW必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RowParam || null}
         */
        this.RowParam = null;

        /**
         * 是否保留数据源Topic元数据信息（源Topic、Partition、Offset），默认为false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.KeepMetadata = null;

        /**
         * 数组解析
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BatchAnalyseParam || null}
         */
        this.BatchAnalyse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

        if (params.FieldChain) {
            this.FieldChain = new Array();
            for (let z in params.FieldChain) {
                let obj = new FieldParam();
                obj.deserialize(params.FieldChain[z]);
                this.FieldChain.push(obj);
            }
        }

        if (params.FilterParam) {
            this.FilterParam = new Array();
            for (let z in params.FilterParam) {
                let obj = new FilterMapParam();
                obj.deserialize(params.FilterParam[z]);
                this.FilterParam.push(obj);
            }
        }

        if (params.FailureParam) {
            let obj = new FailureParam();
            obj.deserialize(params.FailureParam)
            this.FailureParam = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;

        if (params.RowParam) {
            let obj = new RowParam();
            obj.deserialize(params.RowParam)
            this.RowParam = obj;
        }
        this.KeepMetadata = 'KeepMetadata' in params ? params.KeepMetadata : null;

        if (params.BatchAnalyse) {
            let obj = new BatchAnalyseParam();
            obj.deserialize(params.BatchAnalyse)
            this.BatchAnalyse = obj;
        }

    }
}

/**
 * ClickHouse修改连接源参数
 * @class
 */
class ClickHouseModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClickHouse连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * ClickHouse的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * ClickHouse连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * ClickHouse连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * ClickHouse连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * ClickHouse连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * ClickHouse连接源是否为自建集群【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * 是否更新到关联的Datahub任务，默认为true
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

    }
}

/**
 * 查询Datahub任务列表
 * @class
 */
class DescribeDatahubTasksRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Datahub任务信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatahubTaskInfo> || null}
         */
        this.TaskList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new DatahubTaskInfo();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }

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
 * 数据处理——数据处理参数
 * @class
 */
class SMTParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据处理KEY
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 操作，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射，JSONPATH
         * @type {string || null}
         */
        this.Operate = null;

        /**
         * 数据类型，ORIGINAL原始，STRING，INT64，FLOAT64，BOOLEAN，MAP，ARRAY
         * @type {string || null}
         */
        this.SchemeType = null;

        /**
         * 数据处理VALUE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * VALUE处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ValueParam || null}
         */
        this.ValueOperate = null;

        /**
         * 原始VALUE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalValue = null;

        /**
         * VALUE处理链
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ValueParam> || null}
         */
        this.ValueOperates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Operate = 'Operate' in params ? params.Operate : null;
        this.SchemeType = 'SchemeType' in params ? params.SchemeType : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.ValueOperate) {
            let obj = new ValueParam();
            obj.deserialize(params.ValueOperate)
            this.ValueOperate = obj;
        }
        this.OriginalValue = 'OriginalValue' in params ? params.OriginalValue : null;

        if (params.ValueOperates) {
            this.ValueOperates = new Array();
            for (let z in params.ValueOperates) {
                let obj = new ValueParam();
                obj.deserialize(params.ValueOperates[z]);
                this.ValueOperates.push(obj);
            }
        }

    }
}

/**
 * CheckCdcCluster返回参数结构体
 * @class
 */
class CheckCdcClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果状态Success
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
 * Ctsdb连接源参数(更新)
 * @class
 */
class CtsdbModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ctsdb的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Ctsdb连接源的实例vip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * Ctsdb连接源的vpcId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Ctsdb连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Ctsdb连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Ctsdb连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

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
 * Doris 连接源参数
 * @class
 */
class DorisConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Doris 连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Doris 连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Doris 连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Doris 连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * Doris 连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * Doris 连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.BePort = 'BePort' in params ? params.BePort : null;

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
 * DescribeConnectResources请求参数结构体
 * @class
 */
class DescribeConnectResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 连接源名称的关键字查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 分页偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
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
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * ModifyConnectResource请求参数结构体
 * @class
 */
class ModifyConnectResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 连接源名称，为空时不修改
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 连接源描述，为空时不修改
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接源类型，修改数据源参数时，需要与原Type相同，否则编辑数据源无效
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Dts配置，Type为DTS时必填
         * @type {DtsModifyConnectParam || null}
         */
        this.DtsConnectParam = null;

        /**
         * MongoDB配置，Type为MONGODB时必填
         * @type {MongoDBModifyConnectParam || null}
         */
        this.MongoDBConnectParam = null;

        /**
         * Es配置，Type为ES时必填
         * @type {EsModifyConnectParam || null}
         */
        this.EsConnectParam = null;

        /**
         * ClickHouse配置，Type为CLICKHOUSE时必填
         * @type {ClickHouseModifyConnectParam || null}
         */
        this.ClickHouseConnectParam = null;

        /**
         * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填
         * @type {MySQLModifyConnectParam || null}
         */
        this.MySQLConnectParam = null;

        /**
         * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
         * @type {PostgreSQLModifyConnectParam || null}
         */
        this.PostgreSQLConnectParam = null;

        /**
         * MariaDB配置，Type为MARIADB时必填
         * @type {MariaDBModifyConnectParam || null}
         */
        this.MariaDBConnectParam = null;

        /**
         * SQLServer配置，Type为SQLSERVER时必填
         * @type {SQLServerModifyConnectParam || null}
         */
        this.SQLServerConnectParam = null;

        /**
         * Ctsdb配置，Type为CTSDB
         * @type {CtsdbModifyConnectParam || null}
         */
        this.CtsdbConnectParam = null;

        /**
         * Doris配置，Type为DORIS
         * @type {DorisModifyConnectParam || null}
         */
        this.DorisConnectParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.DtsConnectParam) {
            let obj = new DtsModifyConnectParam();
            obj.deserialize(params.DtsConnectParam)
            this.DtsConnectParam = obj;
        }

        if (params.MongoDBConnectParam) {
            let obj = new MongoDBModifyConnectParam();
            obj.deserialize(params.MongoDBConnectParam)
            this.MongoDBConnectParam = obj;
        }

        if (params.EsConnectParam) {
            let obj = new EsModifyConnectParam();
            obj.deserialize(params.EsConnectParam)
            this.EsConnectParam = obj;
        }

        if (params.ClickHouseConnectParam) {
            let obj = new ClickHouseModifyConnectParam();
            obj.deserialize(params.ClickHouseConnectParam)
            this.ClickHouseConnectParam = obj;
        }

        if (params.MySQLConnectParam) {
            let obj = new MySQLModifyConnectParam();
            obj.deserialize(params.MySQLConnectParam)
            this.MySQLConnectParam = obj;
        }

        if (params.PostgreSQLConnectParam) {
            let obj = new PostgreSQLModifyConnectParam();
            obj.deserialize(params.PostgreSQLConnectParam)
            this.PostgreSQLConnectParam = obj;
        }

        if (params.MariaDBConnectParam) {
            let obj = new MariaDBModifyConnectParam();
            obj.deserialize(params.MariaDBConnectParam)
            this.MariaDBConnectParam = obj;
        }

        if (params.SQLServerConnectParam) {
            let obj = new SQLServerModifyConnectParam();
            obj.deserialize(params.SQLServerConnectParam)
            this.SQLServerConnectParam = obj;
        }

        if (params.CtsdbConnectParam) {
            let obj = new CtsdbModifyConnectParam();
            obj.deserialize(params.CtsdbConnectParam)
            this.CtsdbConnectParam = obj;
        }

        if (params.DorisConnectParam) {
            let obj = new DorisModifyConnectParam();
            obj.deserialize(params.DorisConnectParam)
            this.DorisConnectParam = obj;
        }

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
 * record 与数据库表的映射关系
 * @class
 */
class RecordMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息的 key 名称
         * @type {string || null}
         */
        this.JsonKey = null;

        /**
         * 消息类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 消息是否允许为空
         * @type {boolean || null}
         */
        this.AllowNull = null;

        /**
         * 对应映射列名称
         * @type {string || null}
         */
        this.ColumnName = null;

        /**
         * 数据库表额外字段
         * @type {string || null}
         */
        this.ExtraInfo = null;

        /**
         * 当前列大小
         * @type {string || null}
         */
        this.ColumnSize = null;

        /**
         * 当前列精度
         * @type {string || null}
         */
        this.DecimalDigits = null;

        /**
         * 是否为自增列
         * @type {boolean || null}
         */
        this.AutoIncrement = null;

        /**
         * 数据库表默认参数
         * @type {string || null}
         */
        this.DefaultValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JsonKey = 'JsonKey' in params ? params.JsonKey : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AllowNull = 'AllowNull' in params ? params.AllowNull : null;
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;
        this.ExtraInfo = 'ExtraInfo' in params ? params.ExtraInfo : null;
        this.ColumnSize = 'ColumnSize' in params ? params.ColumnSize : null;
        this.DecimalDigits = 'DecimalDigits' in params ? params.DecimalDigits : null;
        this.AutoIncrement = 'AutoIncrement' in params ? params.AutoIncrement : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;

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

        /**
         * 消费分组配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupCountQuota = null;

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
        this.GroupCountQuota = 'GroupCountQuota' in params ? params.GroupCountQuota : null;

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
 * MongoDB修改连接源参数
 * @class
 */
class MongoDBModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MongoDB连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MongoDB的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MongoDB连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * MongoDB连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * MongoDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MongoDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * MongoDB连接源是否为自建集群【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

    }
}

/**
 * Tdw类型入参
 * @class
 */
class TdwParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tdw的bid
         * @type {string || null}
         */
        this.Bid = null;

        /**
         * Tdw的tid
         * @type {string || null}
         */
        this.Tid = null;

        /**
         * 默认true
         * @type {boolean || null}
         */
        this.IsDomestic = null;

        /**
         * TDW地址，默认tl-tdbank-tdmanager.tencent-distribute.com
         * @type {string || null}
         */
        this.TdwHost = null;

        /**
         * TDW端口，默认8099
         * @type {number || null}
         */
        this.TdwPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bid = 'Bid' in params ? params.Bid : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.IsDomestic = 'IsDomestic' in params ? params.IsDomestic : null;
        this.TdwHost = 'TdwHost' in params ? params.TdwHost : null;
        this.TdwPort = 'TdwPort' in params ? params.TdwPort : null;

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
 * DescribeDatahubTopic返回参数结构体
 * @class
 */
class DescribeDatahubTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果对象
         * @type {DescribeDatahubTopicResp || null}
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
            let obj = new DescribeDatahubTopicResp();
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

        /**
         * cdc专业集群业务参数
         * @type {string || null}
         */
        this.CdcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

    }
}

/**
 * FetchDatahubMessageByOffset返回参数结构体
 * @class
 */
class FetchDatahubMessageByOffsetResponse extends  AbstractModel {
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
 * CreateCdcCluster返回参数结构体
 * @class
 */
class CreateCdcClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {CdcClusterResponse || null}
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
            let obj = new CdcClusterResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 创建CDC 标准版共享集群出参
 * @class
 */
class CdcClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * FetchDatahubMessageByOffset请求参数结构体
 * @class
 */
class FetchDatahubMessageByOffsetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 查询Datahub任务信息
 * @class
 */
class DescribeDatahubTaskRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务类型，SOURCE数据接入，SINK数据流出
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatahubResource || null}
         */
        this.SourceResource = null;

        /**
         * 数据目标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatahubResource || null}
         */
        this.TargetResource = null;

        /**
         * Connection列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Connection> || null}
         */
        this.Connections = null;

        /**
         * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 消息处理规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TransformParam || null}
         */
        this.TransformParam = null;

        /**
         * 数据接入ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatahubId = null;

        /**
         * 绑定的SchemaId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaId = null;

        /**
         * 绑定的Schema名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaName = null;

        /**
         * 数据处理规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TransformsParam || null}
         */
        this.TransformsParam = null;

        /**
         * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 任务标签列表
注意：此字段可能返回 null，表示取不到有效值。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.SourceResource) {
            let obj = new DatahubResource();
            obj.deserialize(params.SourceResource)
            this.SourceResource = obj;
        }

        if (params.TargetResource) {
            let obj = new DatahubResource();
            obj.deserialize(params.TargetResource)
            this.TargetResource = obj;
        }

        if (params.Connections) {
            this.Connections = new Array();
            for (let z in params.Connections) {
                let obj = new Connection();
                obj.deserialize(params.Connections[z]);
                this.Connections.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.TransformParam) {
            let obj = new TransformParam();
            obj.deserialize(params.TransformParam)
            this.TransformParam = obj;
        }
        this.DatahubId = 'DatahubId' in params ? params.DatahubId : null;
        this.SchemaId = 'SchemaId' in params ? params.SchemaId : null;
        this.SchemaName = 'SchemaName' in params ? params.SchemaName : null;

        if (params.TransformsParam) {
            let obj = new TransformsParam();
            obj.deserialize(params.TransformsParam)
            this.TransformsParam = obj;
        }
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;

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
 * MongoDB连接源参数
 * @class
 */
class MongoDBConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MongoDB的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MongoDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MongoDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * MongoDB连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MongoDB连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * MongoDB连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * MongoDB连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

    }
}

/**
 * MySQL类型入参
 * @class
 */
class MySQLParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MySQL的数据库名称，"*"为全数据库
         * @type {string || null}
         */
        this.Database = null;

        /**
         * MySQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"数据库名\\.数据表名"
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 该MySQL在连接管理内的Id
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 复制存量信息(schema_only不复制, initial全量)，默认位initial
         * @type {string || null}
         */
        this.SnapshotMode = null;

        /**
         * 存放MySQL的Ddl信息的Topic，为空则默认不存放
         * @type {string || null}
         */
        this.DdlTopic = null;

        /**
         * "TABLE" 表示读取项为 table，"QUERY" 表示读取项为 query
         * @type {string || null}
         */
        this.DataSourceMonitorMode = null;

        /**
         * 当 "DataMonitorMode"="TABLE" 时，传入需要读取的 Table；当 "DataMonitorMode"="QUERY" 时，传入需要读取的查询 sql 语句
         * @type {string || null}
         */
        this.DataSourceMonitorResource = null;

        /**
         * "TIMESTAMP" 表示增量列为时间戳类型，"INCREMENT" 表示增量列为自增 id 类型
         * @type {string || null}
         */
        this.DataSourceIncrementMode = null;

        /**
         * 传入需要监听的列名称
         * @type {string || null}
         */
        this.DataSourceIncrementColumn = null;

        /**
         * "HEAD" 表示复制存量 + 增量数据，"TAIL" 表示只复制增量数据
         * @type {string || null}
         */
        this.DataSourceStartFrom = null;

        /**
         * "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入
         * @type {string || null}
         */
        this.DataTargetInsertMode = null;

        /**
         * 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键
         * @type {string || null}
         */
        this.DataTargetPrimaryKeyField = null;

        /**
         * 表与消息间的映射关系
         * @type {Array.<RecordMapping> || null}
         */
        this.DataTargetRecordMapping = null;

        /**
         * 事件路由到特定主题的正则表达式，默认为(.*)
         * @type {string || null}
         */
        this.TopicRegex = null;

        /**
         * TopicRegex的引用组，指定$1、$2等
         * @type {string || null}
         */
        this.TopicReplacement = null;

        /**
         * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
         * @type {string || null}
         */
        this.KeyColumns = null;

        /**
         * Mysql 是否抛弃解析失败的消息，默认为true
         * @type {boolean || null}
         */
        this.DropInvalidMessage = null;

        /**
         * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
         * @type {DropCls || null}
         */
        this.DropCls = null;

        /**
         * 输出格式，DEFAULT、CANAL_1、CANAL_2
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * 当Table输入的是前缀时，该项值为true，否则为false
         * @type {boolean || null}
         */
        this.IsTablePrefix = null;

        /**
         * 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic
         * @type {string || null}
         */
        this.IncludeContentChanges = null;

        /**
         * 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句
         * @type {boolean || null}
         */
        this.IncludeQuery = null;

        /**
         * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
         * @type {boolean || null}
         */
        this.RecordWithSchema = null;

        /**
         * 存放信令表的数据库名称
         * @type {string || null}
         */
        this.SignalDatabase = null;

        /**
         * 输入的table是否为正则表达式，如果该选项以及IsTablePrefix同时为true，该选项的判断优先级高于IsTablePrefix
         * @type {boolean || null}
         */
        this.IsTableRegular = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.SnapshotMode = 'SnapshotMode' in params ? params.SnapshotMode : null;
        this.DdlTopic = 'DdlTopic' in params ? params.DdlTopic : null;
        this.DataSourceMonitorMode = 'DataSourceMonitorMode' in params ? params.DataSourceMonitorMode : null;
        this.DataSourceMonitorResource = 'DataSourceMonitorResource' in params ? params.DataSourceMonitorResource : null;
        this.DataSourceIncrementMode = 'DataSourceIncrementMode' in params ? params.DataSourceIncrementMode : null;
        this.DataSourceIncrementColumn = 'DataSourceIncrementColumn' in params ? params.DataSourceIncrementColumn : null;
        this.DataSourceStartFrom = 'DataSourceStartFrom' in params ? params.DataSourceStartFrom : null;
        this.DataTargetInsertMode = 'DataTargetInsertMode' in params ? params.DataTargetInsertMode : null;
        this.DataTargetPrimaryKeyField = 'DataTargetPrimaryKeyField' in params ? params.DataTargetPrimaryKeyField : null;

        if (params.DataTargetRecordMapping) {
            this.DataTargetRecordMapping = new Array();
            for (let z in params.DataTargetRecordMapping) {
                let obj = new RecordMapping();
                obj.deserialize(params.DataTargetRecordMapping[z]);
                this.DataTargetRecordMapping.push(obj);
            }
        }
        this.TopicRegex = 'TopicRegex' in params ? params.TopicRegex : null;
        this.TopicReplacement = 'TopicReplacement' in params ? params.TopicReplacement : null;
        this.KeyColumns = 'KeyColumns' in params ? params.KeyColumns : null;
        this.DropInvalidMessage = 'DropInvalidMessage' in params ? params.DropInvalidMessage : null;

        if (params.DropCls) {
            let obj = new DropCls();
            obj.deserialize(params.DropCls)
            this.DropCls = obj;
        }
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;
        this.IsTablePrefix = 'IsTablePrefix' in params ? params.IsTablePrefix : null;
        this.IncludeContentChanges = 'IncludeContentChanges' in params ? params.IncludeContentChanges : null;
        this.IncludeQuery = 'IncludeQuery' in params ? params.IncludeQuery : null;
        this.RecordWithSchema = 'RecordWithSchema' in params ? params.RecordWithSchema : null;
        this.SignalDatabase = 'SignalDatabase' in params ? params.SignalDatabase : null;
        this.IsTableRegular = 'IsTableRegular' in params ? params.IsTableRegular : null;

    }
}

/**
 * 批量解析
 * @class
 */
class BatchAnalyseParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * ONE_BY_ONE单条输出，MERGE合并输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

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
 * DescribeConnectResource请求参数结构体
 * @class
 */
class DescribeConnectResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DescribeTopicProduceConnection请求参数结构体
 * @class
 */
class DescribeTopicProduceConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * topic名称
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
 * CreateConnectResource请求参数结构体
 * @class
 */
class CreateConnectResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 连接源类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 连接源描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Dts配置，Type为DTS时必填
         * @type {DtsConnectParam || null}
         */
        this.DtsConnectParam = null;

        /**
         * MongoDB配置，Type为MONGODB时必填
         * @type {MongoDBConnectParam || null}
         */
        this.MongoDBConnectParam = null;

        /**
         * Es配置，Type为ES时必填
         * @type {EsConnectParam || null}
         */
        this.EsConnectParam = null;

        /**
         * ClickHouse配置，Type为CLICKHOUSE时必填
         * @type {ClickHouseConnectParam || null}
         */
        this.ClickHouseConnectParam = null;

        /**
         * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填
         * @type {MySQLConnectParam || null}
         */
        this.MySQLConnectParam = null;

        /**
         * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
         * @type {PostgreSQLConnectParam || null}
         */
        this.PostgreSQLConnectParam = null;

        /**
         * MariaDB配置，Type为MARIADB时必填
         * @type {MariaDBConnectParam || null}
         */
        this.MariaDBConnectParam = null;

        /**
         * SQLServer配置，Type为SQLSERVER时必填
         * @type {SQLServerConnectParam || null}
         */
        this.SQLServerConnectParam = null;

        /**
         * Doris 配置，Type为 DORIS 时必填
         * @type {DorisConnectParam || null}
         */
        this.DorisConnectParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.DtsConnectParam) {
            let obj = new DtsConnectParam();
            obj.deserialize(params.DtsConnectParam)
            this.DtsConnectParam = obj;
        }

        if (params.MongoDBConnectParam) {
            let obj = new MongoDBConnectParam();
            obj.deserialize(params.MongoDBConnectParam)
            this.MongoDBConnectParam = obj;
        }

        if (params.EsConnectParam) {
            let obj = new EsConnectParam();
            obj.deserialize(params.EsConnectParam)
            this.EsConnectParam = obj;
        }

        if (params.ClickHouseConnectParam) {
            let obj = new ClickHouseConnectParam();
            obj.deserialize(params.ClickHouseConnectParam)
            this.ClickHouseConnectParam = obj;
        }

        if (params.MySQLConnectParam) {
            let obj = new MySQLConnectParam();
            obj.deserialize(params.MySQLConnectParam)
            this.MySQLConnectParam = obj;
        }

        if (params.PostgreSQLConnectParam) {
            let obj = new PostgreSQLConnectParam();
            obj.deserialize(params.PostgreSQLConnectParam)
            this.PostgreSQLConnectParam = obj;
        }

        if (params.MariaDBConnectParam) {
            let obj = new MariaDBConnectParam();
            obj.deserialize(params.MariaDBConnectParam)
            this.MariaDBConnectParam = obj;
        }

        if (params.SQLServerConnectParam) {
            let obj = new SQLServerConnectParam();
            obj.deserialize(params.SQLServerConnectParam)
            this.SQLServerConnectParam = obj;
        }

        if (params.DorisConnectParam) {
            let obj = new DorisConnectParam();
            obj.deserialize(params.DorisConnectParam)
            this.DorisConnectParam = obj;
        }

    }
}

/**
 * MariaDB类型入参
 * @class
 */
class MariaDBParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MariaDB的数据库名称，"*"为全数据库
         * @type {string || null}
         */
        this.Database = null;

        /**
         * MariaDB的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 该MariaDB在连接管理内的Id
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 复制存量信息(schema_only不复制, initial全量)，默认位initial
         * @type {string || null}
         */
        this.SnapshotMode = null;

        /**
         * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
         * @type {string || null}
         */
        this.KeyColumns = null;

        /**
         * 当Table输入的是前缀时，该项值为true，否则为false
         * @type {boolean || null}
         */
        this.IsTablePrefix = null;

        /**
         * 输出格式，DEFAULT、CANAL_1、CANAL_2
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic
         * @type {string || null}
         */
        this.IncludeContentChanges = null;

        /**
         * 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句
         * @type {boolean || null}
         */
        this.IncludeQuery = null;

        /**
         * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
         * @type {boolean || null}
         */
        this.RecordWithSchema = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.SnapshotMode = 'SnapshotMode' in params ? params.SnapshotMode : null;
        this.KeyColumns = 'KeyColumns' in params ? params.KeyColumns : null;
        this.IsTablePrefix = 'IsTablePrefix' in params ? params.IsTablePrefix : null;
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;
        this.IncludeContentChanges = 'IncludeContentChanges' in params ? params.IncludeContentChanges : null;
        this.IncludeQuery = 'IncludeQuery' in params ? params.IncludeQuery : null;
        this.RecordWithSchema = 'RecordWithSchema' in params ? params.RecordWithSchema : null;

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
 * 创建数据转储返回值
 * @class
 */
class CreateDatahubTaskRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转储任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 数据转储Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatahubId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DatahubId = 'DatahubId' in params ? params.DatahubId : null;

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
 * topic链接信息
 * @class
 */
class DescribeConnectInfoResultDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * ip地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpAddr = null;

        /**
         * 连结时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 是否支持的版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUnSupportVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IpAddr = 'IpAddr' in params ? params.IpAddr : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.IsUnSupportVersion = 'IsUnSupportVersion' in params ? params.IsUnSupportVersion : null;

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
 * 数据处理规则失败处理
 * @class
 */
class FailureParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，DLQ死信队列，IGNORE_ERROR保留，DROP废弃
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Ckafka类型死信队列
         * @type {KafkaParam || null}
         */
        this.KafkaParam = null;

        /**
         * 重试间隔
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * 重试次数
         * @type {number || null}
         */
        this.MaxRetryAttempts = null;

        /**
         * DIP Topic类型死信队列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TopicParam || null}
         */
        this.TopicParam = null;

        /**
         * 死信队列类型，CKAFKA，TOPIC
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DlqType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.KafkaParam) {
            let obj = new KafkaParam();
            obj.deserialize(params.KafkaParam)
            this.KafkaParam = obj;
        }
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.MaxRetryAttempts = 'MaxRetryAttempts' in params ? params.MaxRetryAttempts : null;

        if (params.TopicParam) {
            let obj = new TopicParam();
            obj.deserialize(params.TopicParam)
            this.TopicParam = obj;
        }
        this.DlqType = 'DlqType' in params ? params.DlqType : null;

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
 * 数据处理参数
 * @class
 */
class TransformParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取
         * @type {string || null}
         */
        this.AnalysisFormat = null;

        /**
         * 输出格式
         * @type {string || null}
         */
        this.OutputFormat = null;

        /**
         * 是否保留解析失败数据
         * @type {FailureParam || null}
         */
        this.FailureParam = null;

        /**
         * 原始数据
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 数据来源，TOPIC从源topic拉取，CUSTOMIZE自定义
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 分隔符、正则表达式
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * Map
         * @type {Array.<MapParam> || null}
         */
        this.MapParam = null;

        /**
         * 过滤器
         * @type {Array.<FilterMapParam> || null}
         */
        this.FilterParam = null;

        /**
         * 测试结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 解析结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MapParam> || null}
         */
        this.AnalyseResult = null;

        /**
         * 底层引擎是否使用eb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.UseEventBus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnalysisFormat = 'AnalysisFormat' in params ? params.AnalysisFormat : null;
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;

        if (params.FailureParam) {
            let obj = new FailureParam();
            obj.deserialize(params.FailureParam)
            this.FailureParam = obj;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

        if (params.MapParam) {
            this.MapParam = new Array();
            for (let z in params.MapParam) {
                let obj = new MapParam();
                obj.deserialize(params.MapParam[z]);
                this.MapParam.push(obj);
            }
        }

        if (params.FilterParam) {
            this.FilterParam = new Array();
            for (let z in params.FilterParam) {
                let obj = new FilterMapParam();
                obj.deserialize(params.FilterParam[z]);
                this.FilterParam.push(obj);
            }
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.AnalyseResult) {
            this.AnalyseResult = new Array();
            for (let z in params.AnalyseResult) {
                let obj = new MapParam();
                obj.deserialize(params.AnalyseResult[z]);
                this.AnalyseResult.push(obj);
            }
        }
        this.UseEventBus = 'UseEventBus' in params ? params.UseEventBus : null;

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
 * Table、Topic路由
 * @class
 */
class TableMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 表名，多个表,（逗号）隔开
         * @type {string || null}
         */
        this.Table = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Topic ID
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
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * 公网带宽参数
 * @class
 */
class InquiryPublicNetworkParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公网计费模式: BANDWIDTH_PREPAID(包年包月), BANDWIDTH_POSTPAID_BY_HOUR(带宽按小时计费)
         * @type {string || null}
         */
        this.PublicNetworkChargeType = null;

        /**
         * 公网带宽, 单位MB
         * @type {number || null}
         */
        this.PublicNetworkMonthly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicNetworkChargeType = 'PublicNetworkChargeType' in params ? params.PublicNetworkChargeType : null;
        this.PublicNetworkMonthly = 'PublicNetworkMonthly' in params ? params.PublicNetworkMonthly : null;

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
 * DeleteConnectResource返回参数结构体
 * @class
 */
class DeleteConnectResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
         * @type {ConnectResourceResourceIdResp || null}
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
            let obj = new ConnectResourceResourceIdResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * cdc专有集群业务字段，可忽略
         * @type {string || null}
         */
        this.CdcId = null;

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
        this.CdcId = 'CdcId' in params ? params.CdcId : null;

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
 * 查询连接源列表的返参
 * @class
 */
class DescribeConnectResourcesResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 连接源数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeConnectResource> || null}
         */
        this.ConnectResourceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ConnectResourceList) {
            this.ConnectResourceList = new Array();
            for (let z in params.ConnectResourceList) {
                let obj = new DescribeConnectResource();
                obj.deserialize(params.ConnectResourceList[z]);
                this.ConnectResourceList.push(obj);
            }
        }

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
 * Dts连接源参数
 * @class
 */
class DtsConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dts的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Dts消费分组的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Dts消费分组的账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Dts消费分组的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Dts实例Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Dts订阅的topic
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

    }
}

/**
 * Doris 连接源修改参数
 * @class
 */
class DorisModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Doris 连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Doris 连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * Doris 连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Doris 连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Doris 连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * Doris 连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.BePort = 'BePort' in params ? params.BePort : null;

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
         * 返回数量，不填则默认为20，最大值为50
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
 * DeleteConnectResource请求参数结构体
 * @class
 */
class DeleteConnectResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

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
 * Cos Datahub 任务接入参数
 * @class
 */
class CosParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos 存储桶名称
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 地域代码
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 对象名称
         * @type {string || null}
         */
        this.ObjectKey = null;

        /**
         * 汇聚消息量的大小（单位：MB)
         * @type {number || null}
         */
        this.AggregateBatchSize = null;

        /**
         * 汇聚的时间间隔（单位：小时）
         * @type {number || null}
         */
        this.AggregateInterval = null;

        /**
         * 消息汇聚后的文件格式（支持csv, json）
         * @type {string || null}
         */
        this.FormatOutputType = null;

        /**
         * 转储的对象目录前缀
         * @type {string || null}
         */
        this.ObjectKeyPrefix = null;

        /**
         * 根据strptime 时间格式化的分区格式
         * @type {string || null}
         */
        this.DirectoryTimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = 'BucketName' in params ? params.BucketName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ObjectKey = 'ObjectKey' in params ? params.ObjectKey : null;
        this.AggregateBatchSize = 'AggregateBatchSize' in params ? params.AggregateBatchSize : null;
        this.AggregateInterval = 'AggregateInterval' in params ? params.AggregateInterval : null;
        this.FormatOutputType = 'FormatOutputType' in params ? params.FormatOutputType : null;
        this.ObjectKeyPrefix = 'ObjectKeyPrefix' in params ? params.ObjectKeyPrefix : null;
        this.DirectoryTimeFormat = 'DirectoryTimeFormat' in params ? params.DirectoryTimeFormat : null;

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
 * Map参数
 * @class
 */
class MapParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * key值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 类型，DEFAULT默认，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * DescribeDatahubTopic请求参数结构体
 * @class
 */
class DescribeDatahubTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
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
        this.Name = 'Name' in params ? params.Name : null;

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
 * ClickHouse的Schema
 * @class
 */
class ClickHouseSchema extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表的列名
         * @type {string || null}
         */
        this.ColumnName = null;

        /**
         * 该列对应的jsonKey名
         * @type {string || null}
         */
        this.JsonKey = null;

        /**
         * 表列项的类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 列项是否允许为空
         * @type {boolean || null}
         */
        this.AllowNull = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;
        this.JsonKey = 'JsonKey' in params ? params.JsonKey : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AllowNull = 'AllowNull' in params ? params.AllowNull : null;

    }
}

/**
 * Ctsdb连接源参数
 * @class
 */
class CtsdbConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ctsdb的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Ctsdb连接源的实例vip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * Ctsdb连接源的vpcId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Ctsdb连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Ctsdb连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Ctsdb连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;

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
 * MariaDB连接源参数
 * @class
 */
class MariaDBModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MariaDB连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MariaDB的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MariaDB连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * MariaDB连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * MariaDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MariaDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

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
         * 公网带宽
         * @type {number || null}
         */
        this.PublicNetwork = null;

        /**
         * 动态硬盘扩容策略配置
         * @type {DynamicDiskConfig || null}
         */
        this.DynamicDiskConfig = null;

        /**
         * 实例级别单条消息大小（单位byte)
         * @type {number || null}
         */
        this.MaxMessageByte = null;

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
        this.MaxMessageByte = 'MaxMessageByte' in params ? params.MaxMessageByte : null;

    }
}

/**
 * DeleteDatahubTopic请求参数结构体
 * @class
 */
class DeleteDatahubTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic名称
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
        this.Name = 'Name' in params ? params.Name : null;

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
 * DescribeTopicProduceConnection返回参数结构体
 * @class
 */
class DescribeTopicProduceConnectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 链接信息返回结果集
         * @type {Array.<DescribeConnectInfoResultDTO> || null}
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
                let obj = new DescribeConnectInfoResultDTO();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FetchLatestDatahubMessageList请求参数结构体
 * @class
 */
class FetchLatestDatahubMessageListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分区id
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * 位点信息
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大查询条数，最小1，最大100
         * @type {number || null}
         */
        this.MessageCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.MessageCount = 'MessageCount' in params ? params.MessageCount : null;

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
 * Datahub任务信息
 * @class
 */
class DatahubTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务类型，SOURCE数据接入，SINK数据流出
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatahubResource || null}
         */
        this.SourceResource = null;

        /**
         * 数据目标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatahubResource || null}
         */
        this.TargetResource = null;

        /**
         * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 创建进度百分比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskProgress = null;

        /**
         * 任务当前处于的步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskCurrentStep = null;

        /**
         * Datahub转储Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DatahubId = null;

        /**
         * 步骤列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.StepList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.SourceResource) {
            let obj = new DatahubResource();
            obj.deserialize(params.SourceResource)
            this.SourceResource = obj;
        }

        if (params.TargetResource) {
            let obj = new DatahubResource();
            obj.deserialize(params.TargetResource)
            this.TargetResource = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.TaskProgress = 'TaskProgress' in params ? params.TaskProgress : null;
        this.TaskCurrentStep = 'TaskCurrentStep' in params ? params.TaskCurrentStep : null;
        this.DatahubId = 'DatahubId' in params ? params.DatahubId : null;
        this.StepList = 'StepList' in params ? params.StepList : null;

    }
}

/**
 * 数据处理——处理链
 * @class
 */
class FieldParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解析
         * @type {AnalyseParam || null}
         */
        this.Analyse = null;

        /**
         * 二次解析
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecondaryAnalyseParam || null}
         */
        this.SecondaryAnalyse = null;

        /**
         * 数据处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SMTParam> || null}
         */
        this.SMT = null;

        /**
         * 测试结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 解析结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SMTParam> || null}
         */
        this.AnalyseResult = null;

        /**
         * 二次解析结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SMTParam> || null}
         */
        this.SecondaryAnalyseResult = null;

        /**
         * JSON格式解析结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnalyseJsonResult = null;

        /**
         * JSON格式二次解析结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecondaryAnalyseJsonResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Analyse) {
            let obj = new AnalyseParam();
            obj.deserialize(params.Analyse)
            this.Analyse = obj;
        }

        if (params.SecondaryAnalyse) {
            let obj = new SecondaryAnalyseParam();
            obj.deserialize(params.SecondaryAnalyse)
            this.SecondaryAnalyse = obj;
        }

        if (params.SMT) {
            this.SMT = new Array();
            for (let z in params.SMT) {
                let obj = new SMTParam();
                obj.deserialize(params.SMT[z]);
                this.SMT.push(obj);
            }
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.AnalyseResult) {
            this.AnalyseResult = new Array();
            for (let z in params.AnalyseResult) {
                let obj = new SMTParam();
                obj.deserialize(params.AnalyseResult[z]);
                this.AnalyseResult.push(obj);
            }
        }

        if (params.SecondaryAnalyseResult) {
            this.SecondaryAnalyseResult = new Array();
            for (let z in params.SecondaryAnalyseResult) {
                let obj = new SMTParam();
                obj.deserialize(params.SecondaryAnalyseResult[z]);
                this.SecondaryAnalyseResult.push(obj);
            }
        }
        this.AnalyseJsonResult = 'AnalyseJsonResult' in params ? params.AnalyseJsonResult : null;
        this.SecondaryAnalyseJsonResult = 'SecondaryAnalyseJsonResult' in params ? params.SecondaryAnalyseJsonResult : null;

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
 * DeleteDatahubTopic返回参数结构体
 * @class
 */
class DeleteDatahubTopicResponse extends  AbstractModel {
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
 * FetchMessageListByOffset返回参数结构体
 * @class
 */
class FetchMessageListByOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果。注意，列表中不返回具体的消息内容（key、value），如果需要查询具体消息内容，请使用FetchMessageByOffset接口
         * @type {Array.<ConsumerRecord> || null}
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
                let obj = new ConsumerRecord();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 详细类别的价格
 * @class
 */
class InquiryDetailPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 额外内网带宽价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryBasePrice || null}
         */
        this.BandwidthPrice = null;

        /**
         * 硬盘价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryBasePrice || null}
         */
        this.DiskPrice = null;

        /**
         * 额外分区价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryBasePrice || null}
         */
        this.PartitionPrice = null;

        /**
         * 额外Topic价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryBasePrice || null}
         */
        this.TopicPrice = null;

        /**
         * 实例套餐价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryBasePrice || null}
         */
        this.InstanceTypePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BandwidthPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.BandwidthPrice)
            this.BandwidthPrice = obj;
        }

        if (params.DiskPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }

        if (params.PartitionPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.PartitionPrice)
            this.PartitionPrice = obj;
        }

        if (params.TopicPrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.TopicPrice)
            this.TopicPrice = obj;
        }

        if (params.InstanceTypePrice) {
            let obj = new InquiryBasePrice();
            obj.deserialize(params.InstanceTypePrice)
            this.InstanceTypePrice = obj;
        }

    }
}

/**
 * DeleteDatahubTask请求参数结构体
 * @class
 */
class DeleteDatahubTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * DeleteDatahubTask返回参数结构体
 * @class
 */
class DeleteDatahubTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DatahubTaskIdRes || null}
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
            let obj = new DatahubTaskIdRes();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateInstancePost请求参数结构体
 * @class
 */
class CreateInstancePostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例带宽
         * @type {number || null}
         */
        this.BandWidth = null;

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
         * 可用区
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 创建实例时可以选择集群Id, 该入参表示集群Id
         * @type {number || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.BandWidth = 'BandWidth' in params ? params.BandWidth : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeDatahubTopics返回参数结构体
 * @class
 */
class DescribeDatahubTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeDatahubTopicsResp || null}
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
            let obj = new DescribeDatahubTopicsResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConnectResource返回参数结构体
 * @class
 */
class DescribeConnectResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeConnectResourceResp || null}
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
            let obj = new DescribeConnectResourceResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * Connection信息
 * @class
 */
class Connection extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消费组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Topic的Id
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

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
 * Dts修改连接源参数
 * @class
 */
class DtsModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Dts实例Id【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Dts的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Dts消费分组的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Dts消费分组的账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Dts消费分组的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否更新到关联的Datahub任务，默认为true
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * Dts订阅的topic【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.Topic = 'Topic' in params ? params.Topic : null;

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
 * CreateCdcCluster请求参数结构体
 * @class
 */
class CreateCdcClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * cdc的id
         * @type {string || null}
         */
        this.CdcId = null;

        /**
         * vpcId,一个地域只有唯一一个vpcid用于CDC
         * @type {string || null}
         */
        this.CdcVpcId = null;

        /**
         * 每个CDC集群有唯一一个子网ID
         * @type {string || null}
         */
        this.CdcSubnetId = null;

        /**
         * 所在可用区ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * cdc集群的总带宽
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * cdc集群的总磁盘
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 数据盘类型
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘类型
         * @type {string || null}
         */
        this.SystemDiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CdcId = 'CdcId' in params ? params.CdcId : null;
        this.CdcVpcId = 'CdcVpcId' in params ? params.CdcVpcId : null;
        this.CdcSubnetId = 'CdcSubnetId' in params ? params.CdcSubnetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.SystemDiskType = 'SystemDiskType' in params ? params.SystemDiskType : null;

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
 * 返回连接源的Id
 * @class
 */
class ConnectResourceResourceIdResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * CheckCdcCluster请求参数结构体
 * @class
 */
class CheckCdcClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * Datahub Topic详情
 * @class
 */
class DescribeDatahubTopicResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic Id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 状态，1使用中，2删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 服务路由地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Address = 'Address' in params ? params.Address : null;

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
         * （过滤条件）按照实例名,实例Id,可用区,私有网络id,子网id 过滤，支持模糊查询
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

        /**
         * 根据标签列表过滤实例（取交集）
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

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

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * 数据处理——Value处理参数——Jsonpath替换参数
 * @class
 */
class JsonPathReplaceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被替换值，Jsonpath表达式
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * 替换值，Jsonpath表达式或字符串
         * @type {string || null}
         */
        this.NewValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;

    }
}

/**
 * 数据处理——Value处理参数——截取参数
 * @class
 */
class SubstrParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 截取起始位置
         * @type {number || null}
         */
        this.Start = null;

        /**
         * 截取截止位置
         * @type {number || null}
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

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
 * InquireCkafkaPrice返回参数结构体
 * @class
 */
class InquireCkafkaPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出参
         * @type {InquireCkafkaPriceResp || null}
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
            let obj = new InquireCkafkaPriceResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * InquireCkafkaPrice请求参数结构体
 * @class
 */
class InquireCkafkaPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国内站标准版填写standards2, 专业版填写profession
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 购买/续费付费类型(购买时不填的话, 默认获取购买包年包月一个月的费用)
         * @type {InstanceChargeParam || null}
         */
        this.InstanceChargeParam = null;

        /**
         * 购买/续费时购买的实例数量(不填时, 默认为1个)
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 实例内网带宽大小, 单位MB/s (购买时必填)
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 实例的硬盘购买类型以及大小 (购买时必填)
         * @type {InquiryDiskParam || null}
         */
        this.InquiryDiskParam = null;

        /**
         * 实例消息保留时间大小, 单位小时 (购买时必填)
         * @type {number || null}
         */
        this.MessageRetention = null;

        /**
         * 购买实例topic数, 单位个 (购买时必填)
         * @type {number || null}
         */
        this.Topic = null;

        /**
         * 购买实例分区数, 单位个 (购买时必填)
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * 购买地域, 可通过查看DescribeCkafkaZone这个接口获取ZoneId
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * 标记操作, 新购填写purchase, 续费填写renew, (不填时, 默认为purchase)
         * @type {string || null}
         */
        this.CategoryAction = null;

        /**
         * 国内站购买的版本, sv_ckafka_instance_s2_1(入门型), sv_ckafka_instance_s2_2(标准版), sv_ckafka_instance_s2_3(进阶型), 如果instanceType为standards2, 但该参数为空, 则默认值为sv_ckafka_instance_s2_1
         * @type {string || null}
         */
        this.BillType = null;

        /**
         * 公网带宽计费模式, 目前只有专业版支持公网带宽 (购买公网带宽时必填)
         * @type {InquiryPublicNetworkParam || null}
         */
        this.PublicNetworkParam = null;

        /**
         * 续费时的实例id, 续费时填写
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
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.InstanceChargeParam) {
            let obj = new InstanceChargeParam();
            obj.deserialize(params.InstanceChargeParam)
            this.InstanceChargeParam = obj;
        }
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

        if (params.InquiryDiskParam) {
            let obj = new InquiryDiskParam();
            obj.deserialize(params.InquiryDiskParam)
            this.InquiryDiskParam = obj;
        }
        this.MessageRetention = 'MessageRetention' in params ? params.MessageRetention : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.CategoryAction = 'CategoryAction' in params ? params.CategoryAction : null;
        this.BillType = 'BillType' in params ? params.BillType : null;

        if (params.PublicNetworkParam) {
            let obj = new InquiryPublicNetworkParam();
            obj.deserialize(params.PublicNetworkParam)
            this.PublicNetworkParam = obj;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 数据处理——Value处理参数——转换时间格式参数
 * @class
 */
class DateParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 输入类型，string，unix时间戳，默认string
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 时区，默认GMT+8
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TimeZone = 'TimeZone' in params ? params.TimeZone : null;

    }
}

/**
 * 数据处理——Value处理参数
 * @class
 */
class ValueParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理模式，REPLACE替换，SUBSTR截取，DATE日期转换，TRIM去除前后空格，REGEX_REPLACE正则替换，URL_DECODE，LOWERCASE转换为小写
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 替换，TYPE=REPLACE时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReplaceParam || null}
         */
        this.Replace = null;

        /**
         * 截取，TYPE=SUBSTR时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SubstrParam || null}
         */
        this.Substr = null;

        /**
         * 时间转换，TYPE=DATE时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DateParam || null}
         */
        this.Date = null;

        /**
         * 正则替换，TYPE=REGEX_REPLACE时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RegexReplaceParam || null}
         */
        this.RegexReplace = null;

        /**
         * 值支持一拆多，TYPE=SPLIT时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SplitParam || null}
         */
        this.Split = null;

        /**
         * key-value二次解析，TYPE=KV时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KVParam || null}
         */
        this.KV = null;

        /**
         * 处理结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * JsonPath替换，TYPE=JSON_PATH_REPLACE时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {JsonPathReplaceParam || null}
         */
        this.JsonPathReplace = null;

        /**
         * Url解析
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UrlDecodeParam || null}
         */
        this.UrlDecode = null;

        /**
         * 小写字符解析
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LowercaseParam || null}
         */
        this.Lowercase = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Replace) {
            let obj = new ReplaceParam();
            obj.deserialize(params.Replace)
            this.Replace = obj;
        }

        if (params.Substr) {
            let obj = new SubstrParam();
            obj.deserialize(params.Substr)
            this.Substr = obj;
        }

        if (params.Date) {
            let obj = new DateParam();
            obj.deserialize(params.Date)
            this.Date = obj;
        }

        if (params.RegexReplace) {
            let obj = new RegexReplaceParam();
            obj.deserialize(params.RegexReplace)
            this.RegexReplace = obj;
        }

        if (params.Split) {
            let obj = new SplitParam();
            obj.deserialize(params.Split)
            this.Split = obj;
        }

        if (params.KV) {
            let obj = new KVParam();
            obj.deserialize(params.KV)
            this.KV = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;

        if (params.JsonPathReplace) {
            let obj = new JsonPathReplaceParam();
            obj.deserialize(params.JsonPathReplace)
            this.JsonPathReplace = obj;
        }

        if (params.UrlDecode) {
            let obj = new UrlDecodeParam();
            obj.deserialize(params.UrlDecode)
            this.UrlDecode = obj;
        }

        if (params.Lowercase) {
            let obj = new LowercaseParam();
            obj.deserialize(params.Lowercase)
            this.Lowercase = obj;
        }

    }
}

/**
 * DescribeDatahubTasks返回参数结构体
 * @class
 */
class DescribeDatahubTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回任务查询结果
         * @type {DescribeDatahubTasksRes || null}
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
            let obj = new DescribeDatahubTasksRes();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 购买硬盘参数
 * @class
 */
class InquiryDiskParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买硬盘类型: SSD(SSD), CLOUD_SSD(SSD云硬盘), CLOUD_PREMIUM(高性能云硬盘), CLOUD_BASIC(云盘)
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 购买硬盘大小: 单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * 小写字符解析
 * @class
 */
class LowercaseParam extends  AbstractModel {
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
 * DescribeDatahubGroupOffsets请求参数结构体
 * @class
 */
class DescribeDatahubGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例 ID 过滤
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 询价返回参数
 * @class
 */
class InquiryBasePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单位原价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 折扣单位价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * 合计原价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折扣合计价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * 折扣(单位是%)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 付费货币
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 硬盘专用返回参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 购买时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 购买时长单位("m"按月, "h"按小时)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * Ckafka配置
 * @class
 */
class KafkaParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否为自建集群
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * 实例资源
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Topic名称，多个以“,”分隔
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OffsetType = null;

        /**
         * Offset类型为timestamp时必传，传时间戳，精确到秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 实例资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Zone ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Topic的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic的分区数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 启用容错实例/开启死信队列
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableToleration = null;

        /**
         * Qps 限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QpsLimit = null;

        /**
         * Table到Topic的路由，「分发到多个topic」开关打开时必传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableMapping> || null}
         */
        this.TableMappings = null;

        /**
         * 「分发到多个topic」开关，默认为false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.UseTableMapping = null;

        /**
         * 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务，如果不使用分发到多个topic，需要在Topic字段填写需要自动创建的topic名）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.UseAutoCreateTopic = null;

        /**
         * 写入Topic时是否进行压缩，不开启填"none"，开启的话，填写"open"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompressionType = null;

        /**
         * 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgMultiple = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.OffsetType = 'OffsetType' in params ? params.OffsetType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.EnableToleration = 'EnableToleration' in params ? params.EnableToleration : null;
        this.QpsLimit = 'QpsLimit' in params ? params.QpsLimit : null;

        if (params.TableMappings) {
            this.TableMappings = new Array();
            for (let z in params.TableMappings) {
                let obj = new TableMapping();
                obj.deserialize(params.TableMappings[z]);
                this.TableMappings.push(obj);
            }
        }
        this.UseTableMapping = 'UseTableMapping' in params ? params.UseTableMapping : null;
        this.UseAutoCreateTopic = 'UseAutoCreateTopic' in params ? params.UseAutoCreateTopic : null;
        this.CompressionType = 'CompressionType' in params ? params.CompressionType : null;
        this.MsgMultiple = 'MsgMultiple' in params ? params.MsgMultiple : null;

    }
}

/**
 * 数据处理——Value处理参数——正则替换参数
 * @class
 */
class RegexReplaceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正则表达式
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 替换新值
         * @type {string || null}
         */
        this.NewValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;

    }
}

/**
 * 建立私有连接的参数
 * @class
 */
class PrivateLinkParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户实例的vip
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * 客户实例的vpcId
         * @type {string || null}
         */
        this.UniqVpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;

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
 * Datahub主题
 * @class
 */
class DatahubTopicDTO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic Id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 状态，1使用中，2删除中
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
        this.Name = 'Name' in params ? params.Name : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * Cls类型入参
 * @class
 */
class ClsParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产的信息是否为json格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DecodeJson = null;

        /**
         * cls日志主题id
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * cls日志集id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogSet = null;

        /**
         * 当DecodeJson为false时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContentKey = null;

        /**
         * 指定消息中的某字段内容作为cls日志的时间。
字段内容格式需要是秒级时间戳
         * @type {string || null}
         */
        this.TimeField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DecodeJson = 'DecodeJson' in params ? params.DecodeJson : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.ContentKey = 'ContentKey' in params ? params.ContentKey : null;
        this.TimeField = 'TimeField' in params ? params.TimeField : null;

    }
}

/**
 * EventBus配置
 * @class
 */
class EventBusParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型。EB_COS/EB_ES/EB_CLS
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否为自建集群
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * 实例资源
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * SCF云函数命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * SCF云函数函数名
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * SCF云函数版本及别名
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * Datahub请求的taskid
 * @class
 */
class DatahubTaskIdRes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * 数据处理-解析参数
 * @class
 */
class AnalyseParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取，SOURCE处理上层所有结果
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 分隔符、正则表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 需再次处理的KEY——模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputValueType = null;

        /**
         * 需再次处理的KEY——KEY表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.InputValueType = 'InputValueType' in params ? params.InputValueType : null;
        this.InputValue = 'InputValue' in params ? params.InputValue : null;

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
 * Es修改连接源参数
 * @class
 */
class EsModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Es连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Es的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Es连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * Es连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Es连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * Es连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Es连接源是否为自建集群【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

    }
}

/**
 * ModifyConnectResource返回参数结构体
 * @class
 */
class ModifyConnectResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源的Id
         * @type {ConnectResourceResourceIdResp || null}
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
            let obj = new ConnectResourceResourceIdResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例购买付费参数
 * @class
 */
class InstanceChargeParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例付费类型: PREPAID(包年包月), POSTPAID_BY_HOUR(按量付费)
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 购买时长: 包年包月时需要填写, 按量计费无需填写
         * @type {number || null}
         */
        this.InstanceChargePeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.InstanceChargePeriod = 'InstanceChargePeriod' in params ? params.InstanceChargePeriod : null;

    }
}

/**
 * DescribeDatahubTopics请求参数结构体
 * @class
 */
class DescribeDatahubTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询值
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDatahubTask请求参数结构体
 * @class
 */
class CreateDatahubTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务类型，SOURCE数据接入，SINK数据流出
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 数据源
         * @type {DatahubResource || null}
         */
        this.SourceResource = null;

        /**
         * 数据目标
         * @type {DatahubResource || null}
         */
        this.TargetResource = null;

        /**
         * 数据处理规则
         * @type {TransformParam || null}
         */
        this.TransformParam = null;

        /**
         * 实例连接参数【已废弃】
         * @type {PrivateLinkParam || null}
         */
        this.PrivateLinkParam = null;

        /**
         * 选择所要绑定的SchemaId
         * @type {string || null}
         */
        this.SchemaId = null;

        /**
         * 数据处理规则
         * @type {TransformsParam || null}
         */
        this.TransformsParam = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.SourceResource) {
            let obj = new DatahubResource();
            obj.deserialize(params.SourceResource)
            this.SourceResource = obj;
        }

        if (params.TargetResource) {
            let obj = new DatahubResource();
            obj.deserialize(params.TargetResource)
            this.TargetResource = obj;
        }

        if (params.TransformParam) {
            let obj = new TransformParam();
            obj.deserialize(params.TransformParam)
            this.TransformParam = obj;
        }

        if (params.PrivateLinkParam) {
            let obj = new PrivateLinkParam();
            obj.deserialize(params.PrivateLinkParam)
            this.PrivateLinkParam = obj;
        }
        this.SchemaId = 'SchemaId' in params ? params.SchemaId : null;

        if (params.TransformsParam) {
            let obj = new TransformsParam();
            obj.deserialize(params.TransformsParam)
            this.TransformsParam = obj;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
 * 询价返回参数
 * @class
 */
class InquiryPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单位原价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 折扣单位价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitPriceDiscount = null;

        /**
         * 合计原价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折扣合计价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * 折扣(单位是%)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 付费货币
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 硬盘专用返回参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 购买时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 购买时长单位("m"按月, "h"按小时)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 详细类别的价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InquiryDetailPrice || null}
         */
        this.DetailPrices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.UnitPriceDiscount = 'UnitPriceDiscount' in params ? params.UnitPriceDiscount : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.DetailPrices) {
            let obj = new InquiryDetailPrice();
            obj.deserialize(params.DetailPrices)
            this.DetailPrices = obj;
        }

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
 * Ctsdb类型入参
 * @class
 */
class CtsdbParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接管理实例资源
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Ctsdb的metric
         * @type {string || null}
         */
        this.CtsdbMetric = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.CtsdbMetric = 'CtsdbMetric' in params ? params.CtsdbMetric : null;

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

        /**
         * 消息headers
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Headers = null;

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
        this.Headers = 'Headers' in params ? params.Headers : null;

    }
}

/**
 * PostgreSQL连接源参数
 * @class
 */
class PostgreSQLConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * PostgreSQL的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * PostgreSQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * PostgreSQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * PostgreSQL连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * PostgreSQL连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * PostgreSQL连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 当type为TDSQL_C_POSTGRESQL时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * PostgreSQL连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;

    }
}

/**
 * key-value二次解析
 * @class
 */
class KVParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分隔符
         * @type {string || null}
         */
        this.Delimiter = null;

        /**
         * key-value二次解析分隔符
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * 保留源Key，默认为false不保留
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeepOriginalKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Delimiter = 'Delimiter' in params ? params.Delimiter : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.KeepOriginalKey = 'KeepOriginalKey' in params ? params.KeepOriginalKey : null;

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
 * PostgreSQL类型入参
 * @class
 */
class PostgreSQLParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * PostgreSQL的数据库名称
         * @type {string || null}
         */
        this.Database = null;

        /**
         * PostgreSQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"Schema名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"Schema名\\.数据表名"
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 该PostgreSQL在连接管理内的Id
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 插件名(decoderbufs/pgoutput)，默认为decoderbufs
         * @type {string || null}
         */
        this.PluginName = null;

        /**
         * 复制存量信息(never增量, initial全量)，默认为initial
         * @type {string || null}
         */
        this.SnapshotMode = null;

        /**
         * 上游数据格式(JSON/Debezium), 当数据库同步模式为默认字段匹配时,必填
         * @type {string || null}
         */
        this.DataFormat = null;

        /**
         * "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入
         * @type {string || null}
         */
        this.DataTargetInsertMode = null;

        /**
         * 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键
         * @type {string || null}
         */
        this.DataTargetPrimaryKeyField = null;

        /**
         * 表与消息间的映射关系
         * @type {Array.<RecordMapping> || null}
         */
        this.DataTargetRecordMapping = null;

        /**
         * 是否抛弃解析失败的消息，默认为true
         * @type {boolean || null}
         */
        this.DropInvalidMessage = null;

        /**
         * 输入的table是否为正则表达式
         * @type {boolean || null}
         */
        this.IsTableRegular = null;

        /**
         * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
         * @type {string || null}
         */
        this.KeyColumns = null;

        /**
         * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
         * @type {boolean || null}
         */
        this.RecordWithSchema = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.PluginName = 'PluginName' in params ? params.PluginName : null;
        this.SnapshotMode = 'SnapshotMode' in params ? params.SnapshotMode : null;
        this.DataFormat = 'DataFormat' in params ? params.DataFormat : null;
        this.DataTargetInsertMode = 'DataTargetInsertMode' in params ? params.DataTargetInsertMode : null;
        this.DataTargetPrimaryKeyField = 'DataTargetPrimaryKeyField' in params ? params.DataTargetPrimaryKeyField : null;

        if (params.DataTargetRecordMapping) {
            this.DataTargetRecordMapping = new Array();
            for (let z in params.DataTargetRecordMapping) {
                let obj = new RecordMapping();
                obj.deserialize(params.DataTargetRecordMapping[z]);
                this.DataTargetRecordMapping.push(obj);
            }
        }
        this.DropInvalidMessage = 'DropInvalidMessage' in params ? params.DropInvalidMessage : null;
        this.IsTableRegular = 'IsTableRegular' in params ? params.IsTableRegular : null;
        this.KeyColumns = 'KeyColumns' in params ? params.KeyColumns : null;
        this.RecordWithSchema = 'RecordWithSchema' in params ? params.RecordWithSchema : null;

    }
}

/**
 * MariaDB连接源参数
 * @class
 */
class MariaDBConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MariaDB的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MariaDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MariaDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * MariaDB连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MariaDB连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * MariaDB连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

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
 * MongoDB类型入参
 * @class
 */
class MongoDBParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MongoDB的数据库名称
         * @type {string || null}
         */
        this.Database = null;

        /**
         * MongoDB的集群
         * @type {string || null}
         */
        this.Collection = null;

        /**
         * 是否复制存量数据，默认传参true
         * @type {boolean || null}
         */
        this.CopyExisting = null;

        /**
         * 实例资源
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MongoDB的连接ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * MongoDB的连接port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MongoDB数据库用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MongoDB数据库密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 监听事件类型，为空时表示全选。取值包括insert,update,replace,delete,invalidate,drop,dropdatabase,rename，多个类型间使用,逗号分隔
         * @type {string || null}
         */
        this.ListeningEvent = null;

        /**
         * 主从优先级，默认主节点
         * @type {string || null}
         */
        this.ReadPreference = null;

        /**
         * 聚合管道
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * 是否为自建集群
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Collection = 'Collection' in params ? params.Collection : null;
        this.CopyExisting = 'CopyExisting' in params ? params.CopyExisting : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ListeningEvent = 'ListeningEvent' in params ? params.ListeningEvent : null;
        this.ReadPreference = 'ReadPreference' in params ? params.ReadPreference : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;

    }
}

/**
 * Topic配置
 * @class
 */
class TopicParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单独售卖Topic的Topic名称
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OffsetType = null;

        /**
         * Offset类型为timestamp时必传，传时间戳，精确到秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Topic的TopicId【出参】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 写入Topic时是否进行压缩，不开启填"none"，开启的话，可选择"gzip", "snappy", "lz4"中的一个进行填写。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompressionType = null;

        /**
         * 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.UseAutoCreateTopic = null;

        /**
         * 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgMultiple = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.OffsetType = 'OffsetType' in params ? params.OffsetType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CompressionType = 'CompressionType' in params ? params.CompressionType : null;
        this.UseAutoCreateTopic = 'UseAutoCreateTopic' in params ? params.UseAutoCreateTopic : null;
        this.MsgMultiple = 'MsgMultiple' in params ? params.MsgMultiple : null;

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

        /**
         * 调整topic副本数
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
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

    }
}

/**
 * 数据处理——二次解析参数
 * @class
 */
class SecondaryAnalyseParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分隔符
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regex = 'Regex' in params ? params.Regex : null;

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
         * 可用区，购买多可用区实例时，填写ZoneIds.N字段中的任意一个值
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
         * 可用区列表，购买多可用区实例时为必填项
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
 * Scf类型入参
 * @class
 */
class ScfParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * SCF云函数函数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * SCF云函数命名空间, 默认为default
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * SCF云函数版本及别名, 默认为$DEFAULT
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 每批最大发送消息数, 默认为1000
         * @type {number || null}
         */
        this.BatchSize = null;

        /**
         * SCF调用失败后重试次数, 默认为5
         * @type {number || null}
         */
        this.MaxRetries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.BatchSize = 'BatchSize' in params ? params.BatchSize : null;
        this.MaxRetries = 'MaxRetries' in params ? params.MaxRetries : null;

    }
}

/**
 * CreateDatahubTask返回参数结构体
 * @class
 */
class CreateDatahubTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {CreateDatahubTaskRes || null}
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
            let obj = new CreateDatahubTaskRes();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClickHouse连接源参数
 * @class
 */
class ClickHouseConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClickHouse的连接port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * ClickHouse连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * ClickHouse连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * ClickHouse连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * ClickHouse连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

        /**
         * ClickHouse连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * ClickHouse连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;

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
 * Datahub主题列表
 * @class
 */
class DescribeDatahubTopicsResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Topic列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DatahubTopicDTO> || null}
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
                let obj = new DatahubTopicDTO();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

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
 * ModifyDatahubTask请求参数结构体
 * @class
 */
class ModifyDatahubTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

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

        /**
         * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 实例功能列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Features = null;

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
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Features = 'Features' in params ? params.Features : null;

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
 * MySQL修改连接源参数
 * @class
 */
class MySQLModifyConnectParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * MySQL连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * MySQL的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * MySQL连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceVip = null;

        /**
         * MySQL连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * MySQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * MySQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUpdate = null;

        /**
         * 当type为TDSQL_C_MYSQL时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否是自建的集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SelfBuilt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceVip = 'ServiceVip' in params ? params.ServiceVip : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.IsUpdate = 'IsUpdate' in params ? params.IsUpdate : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SelfBuilt = 'SelfBuilt' in params ? params.SelfBuilt : null;

    }
}

/**
 * SQLServer类型入参
 * @class
 */
class SQLServerParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * SQLServer的数据库名称
         * @type {string || null}
         */
        this.Database = null;

        /**
         * SQLServer的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 该SQLServer在连接管理内的Id
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 复制存量信息(schema_only增量, initial全量)，默认为initial
         * @type {string || null}
         */
        this.SnapshotMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.SnapshotMode = 'SnapshotMode' in params ? params.SnapshotMode : null;

    }
}

/**
 * 数据处理——Value处理参数——替换参数
 * @class
 */
class ReplaceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被替换值
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * 替换值
         * @type {string || null}
         */
        this.NewValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;

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

/**
 * DescribeConnectResources返回参数结构体
 * @class
 */
class DescribeConnectResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接源列表
         * @type {DescribeConnectResourcesResp || null}
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
            let obj = new DescribeConnectResourcesResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    TopicDetail: TopicDetail,
    DeleteAclRequest: DeleteAclRequest,
    CreateInstancePostResponse: CreateInstancePostResponse,
    DropCls: DropCls,
    PostgreSQLModifyConnectParam: PostgreSQLModifyConnectParam,
    GroupInfoMember: GroupInfoMember,
    RowParam: RowParam,
    EsConnectParam: EsConnectParam,
    BatchCreateAclRequest: BatchCreateAclRequest,
    DescribeDatahubTaskResponse: DescribeDatahubTaskResponse,
    DeleteUserRequest: DeleteUserRequest,
    PartitionOffset: PartitionOffset,
    SQLServerConnectParam: SQLServerConnectParam,
    CreateConnectResourceResponse: CreateConnectResourceResponse,
    TopicRetentionTimeConfigRsp: TopicRetentionTimeConfigRsp,
    BatchModifyTopicResultDTO: BatchModifyTopicResultDTO,
    SubscribedInfo: SubscribedInfo,
    DescribeTopicAttributesRequest: DescribeTopicAttributesRequest,
    DescribeDatahubGroupOffsetsResponse: DescribeDatahubGroupOffsetsResponse,
    SplitParam: SplitParam,
    ConsumerGroup: ConsumerGroup,
    Assignment: Assignment,
    DescribeConnectResourceResp: DescribeConnectResourceResp,
    AuthorizeTokenResponse: AuthorizeTokenResponse,
    DescribeDatahubTaskRequest: DescribeDatahubTaskRequest,
    UrlDecodeParam: UrlDecodeParam,
    FetchLatestDatahubMessageListResponse: FetchLatestDatahubMessageListResponse,
    EsParam: EsParam,
    DescribeConnectResource: DescribeConnectResource,
    DtsParam: DtsParam,
    GroupOffsetPartition: GroupOffsetPartition,
    CancelAuthorizationTokenRequest: CancelAuthorizationTokenRequest,
    CancelAuthorizationTokenResponse: CancelAuthorizationTokenResponse,
    MySQLConnectParam: MySQLConnectParam,
    InquireCkafkaPriceResp: InquireCkafkaPriceResp,
    CreateRouteRequest: CreateRouteRequest,
    SQLServerModifyConnectParam: SQLServerModifyConnectParam,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeDatahubTasksRequest: DescribeDatahubTasksRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DatahubResource: DatahubResource,
    BatchModifyTopicAttributesResponse: BatchModifyTopicAttributesResponse,
    ClickHouseParam: ClickHouseParam,
    FilterMapParam: FilterMapParam,
    CreateInstancePreResp: CreateInstancePreResp,
    ModifyDatahubTaskResponse: ModifyDatahubTaskResponse,
    GroupInfoTopics: GroupInfoTopics,
    FetchMessageListByOffsetRequest: FetchMessageListByOffsetRequest,
    Region: Region,
    ModifyInstancePreRequest: ModifyInstancePreRequest,
    CreateTokenResponse: CreateTokenResponse,
    TransformsParam: TransformsParam,
    ClickHouseModifyConnectParam: ClickHouseModifyConnectParam,
    DescribeDatahubTasksRes: DescribeDatahubTasksRes,
    DescribeInstancesDetailResponse: DescribeInstancesDetailResponse,
    CreateInstancePreData: CreateInstancePreData,
    DescribeAppInfoRequest: DescribeAppInfoRequest,
    AclRule: AclRule,
    SMTParam: SMTParam,
    CheckCdcClusterResponse: CheckCdcClusterResponse,
    CtsdbModifyConnectParam: CtsdbModifyConnectParam,
    DescribeACLResponse: DescribeACLResponse,
    DynamicDiskConfig: DynamicDiskConfig,
    DorisConnectParam: DorisConnectParam,
    ZoneInfo: ZoneInfo,
    DescribeTopicSubscribeGroupResponse: DescribeTopicSubscribeGroupResponse,
    DeleteAclRuleRequest: DeleteAclRuleRequest,
    DescribeConnectResourcesRequest: DescribeConnectResourcesRequest,
    Topic: Topic,
    Tag: Tag,
    ModifyConnectResourceRequest: ModifyConnectResourceRequest,
    ModifyInstanceAttributesResponse: ModifyInstanceAttributesResponse,
    RecordMapping: RecordMapping,
    BatchModifyGroupOffsetsResponse: BatchModifyGroupOffsetsResponse,
    GroupResponse: GroupResponse,
    InstanceDetailResponse: InstanceDetailResponse,
    GroupOffsetResponse: GroupOffsetResponse,
    CreateTokenRequest: CreateTokenRequest,
    DescribeTopicResponse: DescribeTopicResponse,
    MongoDBModifyConnectParam: MongoDBModifyConnectParam,
    TdwParam: TdwParam,
    ModifyGroupOffsetsRequest: ModifyGroupOffsetsRequest,
    DescribeDatahubTopicResponse: DescribeDatahubTopicResponse,
    DescribeCkafkaZoneRequest: DescribeCkafkaZoneRequest,
    FetchDatahubMessageByOffsetResponse: FetchDatahubMessageByOffsetResponse,
    CreateConsumerResponse: CreateConsumerResponse,
    CreateCdcClusterResponse: CreateCdcClusterResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    CdcClusterResponse: CdcClusterResponse,
    ModifyPasswordResponse: ModifyPasswordResponse,
    ModifyInstanceAttributesConfig: ModifyInstanceAttributesConfig,
    FetchDatahubMessageByOffsetRequest: FetchDatahubMessageByOffsetRequest,
    AuthorizeTokenRequest: AuthorizeTokenRequest,
    OperateResponseData: OperateResponseData,
    DescribeACLRequest: DescribeACLRequest,
    CreateUserResponse: CreateUserResponse,
    DescribeDatahubTaskRes: DescribeDatahubTaskRes,
    CreatePartitionResponse: CreatePartitionResponse,
    MongoDBConnectParam: MongoDBConnectParam,
    MySQLParam: MySQLParam,
    BatchAnalyseParam: BatchAnalyseParam,
    ClusterInfo: ClusterInfo,
    DeleteGroupRequest: DeleteGroupRequest,
    DescribeConsumerGroupRequest: DescribeConsumerGroupRequest,
    DeleteUserResponse: DeleteUserResponse,
    DescribeConnectResourceRequest: DescribeConnectResourceRequest,
    DescribeTopicProduceConnectionRequest: DescribeTopicProduceConnectionRequest,
    CreateAclRequest: CreateAclRequest,
    DescribeTopicSyncReplicaResponse: DescribeTopicSyncReplicaResponse,
    CreateConnectResourceRequest: CreateConnectResourceRequest,
    MariaDBParam: MariaDBParam,
    Route: Route,
    DeleteRouteResponse: DeleteRouteResponse,
    Partitions: Partitions,
    CreateDatahubTaskRes: CreateDatahubTaskRes,
    ConsumerGroupResponse: ConsumerGroupResponse,
    CreateTopicIpWhiteListResponse: CreateTopicIpWhiteListResponse,
    GroupOffsetTopic: GroupOffsetTopic,
    ModifyGroupOffsetsResponse: ModifyGroupOffsetsResponse,
    DescribeConnectInfoResultDTO: DescribeConnectInfoResultDTO,
    Partition: Partition,
    CreateAclResponse: CreateAclResponse,
    FailureParam: FailureParam,
    CreateTopicRequest: CreateTopicRequest,
    DeleteAclResponse: DeleteAclResponse,
    DynamicRetentionTime: DynamicRetentionTime,
    TransformParam: TransformParam,
    DescribeTopicSubscribeGroupRequest: DescribeTopicSubscribeGroupRequest,
    DeleteInstancePreResponse: DeleteInstancePreResponse,
    TableMapping: TableMapping,
    DescribeInstanceAttributesRequest: DescribeInstanceAttributesRequest,
    InquiryPublicNetworkParam: InquiryPublicNetworkParam,
    TopicInSyncReplicaInfo: TopicInSyncReplicaInfo,
    DeleteConnectResourceResponse: DeleteConnectResourceResponse,
    DescribeRegionRequest: DescribeRegionRequest,
    InstanceConfigDO: InstanceConfigDO,
    DeleteAclRuleResponse: DeleteAclRuleResponse,
    UserResponse: UserResponse,
    DescribeGroupInfoRequest: DescribeGroupInfoRequest,
    DescribeConnectResourcesResp: DescribeConnectResourcesResp,
    ModifyTopicAttributesResponse: ModifyTopicAttributesResponse,
    BatchContent: BatchContent,
    DeleteRouteTriggerTimeResponse: DeleteRouteTriggerTimeResponse,
    User: User,
    TopicSubscribeGroup: TopicSubscribeGroup,
    DescribeUserResponse: DescribeUserResponse,
    DtsConnectParam: DtsConnectParam,
    DorisModifyConnectParam: DorisModifyConnectParam,
    DescribeGroupInfoResponse: DescribeGroupInfoResponse,
    AppIdResponse: AppIdResponse,
    DescribeTopicRequest: DescribeTopicRequest,
    DeleteConnectResourceRequest: DeleteConnectResourceRequest,
    CreatePartitionRequest: CreatePartitionRequest,
    Group: Group,
    GroupInfoResponse: GroupInfoResponse,
    DescribeAppInfoResponse: DescribeAppInfoResponse,
    CosParam: CosParam,
    AclResponse: AclResponse,
    ZoneResponse: ZoneResponse,
    Instance: Instance,
    DescribeInstanceAttributesResponse: DescribeInstanceAttributesResponse,
    MapParam: MapParam,
    TopicDetailResponse: TopicDetailResponse,
    TopicInSyncReplicaResult: TopicInSyncReplicaResult,
    DeleteInstancePreRequest: DeleteInstancePreRequest,
    DescribeDatahubTopicRequest: DescribeDatahubTopicRequest,
    Config: Config,
    ClickHouseSchema: ClickHouseSchema,
    CtsdbConnectParam: CtsdbConnectParam,
    ModifyPasswordRequest: ModifyPasswordRequest,
    MariaDBModifyConnectParam: MariaDBModifyConnectParam,
    ModifyInstanceAttributesRequest: ModifyInstanceAttributesRequest,
    DeleteDatahubTopicRequest: DeleteDatahubTopicRequest,
    DescribeRegionResponse: DescribeRegionResponse,
    CreateTopicResponse: CreateTopicResponse,
    VipEntity: VipEntity,
    DescribeTopicProduceConnectionResponse: DescribeTopicProduceConnectionResponse,
    FetchLatestDatahubMessageListRequest: FetchLatestDatahubMessageListRequest,
    ConsumerGroupTopic: ConsumerGroupTopic,
    DatahubTaskInfo: DatahubTaskInfo,
    FieldParam: FieldParam,
    DescribeTopicAttributesResponse: DescribeTopicAttributesResponse,
    DeleteDatahubTopicResponse: DeleteDatahubTopicResponse,
    DescribeConsumerGroupResponse: DescribeConsumerGroupResponse,
    FetchMessageListByOffsetResponse: FetchMessageListByOffsetResponse,
    InquiryDetailPrice: InquiryDetailPrice,
    DeleteDatahubTaskRequest: DeleteDatahubTaskRequest,
    DescribeGroupOffsetsRequest: DescribeGroupOffsetsRequest,
    DeleteRouteTriggerTimeRequest: DeleteRouteTriggerTimeRequest,
    DeleteDatahubTaskResponse: DeleteDatahubTaskResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InstanceAttributesResponse: InstanceAttributesResponse,
    CreateInstancePostRequest: CreateInstancePostRequest,
    DescribeDatahubTopicsResponse: DescribeDatahubTopicsResponse,
    DescribeConnectResourceResponse: DescribeConnectResourceResponse,
    DescribeGroupRequest: DescribeGroupRequest,
    Filter: Filter,
    Connection: Connection,
    BatchCreateAclResponse: BatchCreateAclResponse,
    ModifyInstancePreResponse: ModifyInstancePreResponse,
    CreateUserRequest: CreateUserRequest,
    RouteResponse: RouteResponse,
    DtsModifyConnectParam: DtsModifyConnectParam,
    DeleteRouteRequest: DeleteRouteRequest,
    CreateCdcClusterRequest: CreateCdcClusterRequest,
    DeleteTopicIpWhiteListResponse: DeleteTopicIpWhiteListResponse,
    CreateInstancePreResponse: CreateInstancePreResponse,
    ConnectResourceResourceIdResp: ConnectResourceResourceIdResp,
    CheckCdcClusterRequest: CheckCdcClusterRequest,
    FetchMessageByOffsetRequest: FetchMessageByOffsetRequest,
    DescribeDatahubTopicResp: DescribeDatahubTopicResp,
    DescribeInstancesDetailRequest: DescribeInstancesDetailRequest,
    JsonPathReplaceParam: JsonPathReplaceParam,
    SubstrParam: SubstrParam,
    FetchMessageByOffsetResponse: FetchMessageByOffsetResponse,
    CreateConsumerRequest: CreateConsumerRequest,
    InquireCkafkaPriceResponse: InquireCkafkaPriceResponse,
    DescribeRouteRequest: DescribeRouteRequest,
    InquireCkafkaPriceRequest: InquireCkafkaPriceRequest,
    DateParam: DateParam,
    ValueParam: ValueParam,
    DescribeDatahubTasksResponse: DescribeDatahubTasksResponse,
    InquiryDiskParam: InquiryDiskParam,
    LowercaseParam: LowercaseParam,
    SendMessageResponse: SendMessageResponse,
    DescribeDatahubGroupOffsetsRequest: DescribeDatahubGroupOffsetsRequest,
    InquiryBasePrice: InquiryBasePrice,
    DescribeCkafkaZoneResponse: DescribeCkafkaZoneResponse,
    BatchModifyGroupOffsetsRequest: BatchModifyGroupOffsetsRequest,
    TopicAttributesResponse: TopicAttributesResponse,
    KafkaParam: KafkaParam,
    RegexReplaceParam: RegexReplaceParam,
    PrivateLinkParam: PrivateLinkParam,
    CreateRouteResponse: CreateRouteResponse,
    InstanceResponse: InstanceResponse,
    DatahubTopicDTO: DatahubTopicDTO,
    JgwOperateResponse: JgwOperateResponse,
    DescribeGroup: DescribeGroup,
    ClsParam: ClsParam,
    EventBusParam: EventBusParam,
    DatahubTaskIdRes: DatahubTaskIdRes,
    TopicPartitionDO: TopicPartitionDO,
    CreateTopicResp: CreateTopicResp,
    AnalyseParam: AnalyseParam,
    BatchModifyTopicInfo: BatchModifyTopicInfo,
    DescribeRouteResponse: DescribeRouteResponse,
    EsModifyConnectParam: EsModifyConnectParam,
    ModifyConnectResourceResponse: ModifyConnectResourceResponse,
    InstanceChargeParam: InstanceChargeParam,
    DescribeDatahubTopicsRequest: DescribeDatahubTopicsRequest,
    CreateDatahubTaskRequest: CreateDatahubTaskRequest,
    InquiryPrice: InquiryPrice,
    TopicResult: TopicResult,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DescribeGroupOffsetsResponse: DescribeGroupOffsetsResponse,
    CtsdbParam: CtsdbParam,
    SendMessageRequest: SendMessageRequest,
    ConsumerRecord: ConsumerRecord,
    PostgreSQLConnectParam: PostgreSQLConnectParam,
    KVParam: KVParam,
    BatchModifyTopicAttributesRequest: BatchModifyTopicAttributesRequest,
    DeleteGroupResponse: DeleteGroupResponse,
    CreateTopicIpWhiteListRequest: CreateTopicIpWhiteListRequest,
    PostgreSQLParam: PostgreSQLParam,
    MariaDBConnectParam: MariaDBConnectParam,
    AclRuleInfo: AclRuleInfo,
    Acl: Acl,
    MongoDBParam: MongoDBParam,
    TopicParam: TopicParam,
    ModifyTopicAttributesRequest: ModifyTopicAttributesRequest,
    SecondaryAnalyseParam: SecondaryAnalyseParam,
    CreateInstancePreRequest: CreateInstancePreRequest,
    DeleteTopicIpWhiteListRequest: DeleteTopicIpWhiteListRequest,
    SaleInfo: SaleInfo,
    DeleteTopicResponse: DeleteTopicResponse,
    ScfParam: ScfParam,
    CreateDatahubTaskResponse: CreateDatahubTaskResponse,
    ClickHouseConnectParam: ClickHouseConnectParam,
    DescribeUserRequest: DescribeUserRequest,
    DescribeDatahubTopicsResp: DescribeDatahubTopicsResp,
    DescribeTopicSyncReplicaRequest: DescribeTopicSyncReplicaRequest,
    ModifyDatahubTaskRequest: ModifyDatahubTaskRequest,
    InstanceDetail: InstanceDetail,
    InstanceQuotaConfigResp: InstanceQuotaConfigResp,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    MySQLModifyConnectParam: MySQLModifyConnectParam,
    SQLServerParam: SQLServerParam,
    ReplaceParam: ReplaceParam,
    Price: Price,
    DescribeConnectResourcesResponse: DescribeConnectResourcesResponse,

}
