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
 * DescribeUserTasks返回参数结构体
 * @class
 */
class DescribeUserTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务列表
         * @type {Array.<UserTaskInfo> || null}
         */
        this.FlowSet = null;

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

        if (params.FlowSet) {
            this.FlowSet = new Array();
            for (let z in params.FlowSet) {
                let obj = new UserTaskInfo();
                obj.deserialize(params.FlowSet[z]);
                this.FlowSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitDCDBInstances返回参数结构体
 * @class
 */
class InitDCDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可通过 DescribeFlow 查询任务状态。
         * @type {Array.<number> || null}
         */
        this.FlowIds = null;

        /**
         * 透传入参。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDCDBInstance返回参数结构体
 * @class
 */
class UpgradeDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges返回参数结构体
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权限列表。
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 数据库账号用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库账号Host
         * @type {string || null}
         */
        this.Host = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases请求参数结构体
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
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
 * DB参数描述
 * @class
 */
class ParamDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名字
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 当前参数值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 设置过的值，参数生效后，该值和value一样。未设置过就不返回该字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SetValue = null;

        /**
         * 系统默认值
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 参数限制
         * @type {ParamConstraint || null}
         */
        this.Constraint = null;

        /**
         * 是否有设置过值，false:没有设置过值，true:有设置过值。
         * @type {boolean || null}
         */
        this.HaveSetValue = null;

        /**
         * 是否需要重启生效，false:不需要重启，
true:需要重启
         * @type {boolean || null}
         */
        this.NeedRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SetValue = 'SetValue' in params ? params.SetValue : null;
        this.Default = 'Default' in params ? params.Default : null;

        if (params.Constraint) {
            let obj = new ParamConstraint();
            obj.deserialize(params.Constraint)
            this.Constraint = obj;
        }
        this.HaveSetValue = 'HaveSetValue' in params ? params.HaveSetValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;

    }
}

/**
 * DestroyDCDBInstance返回参数结构体
 * @class
 */
class DestroyDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，与入参InstanceId一致。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/557/56485)。
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBParameters请求参数结构体
 * @class
 */
class DescribeDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
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
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：dcdbt-ow728lmc。
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
 * 按机型分类的规格配置
 * @class
 */
class SpecConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格机型
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 规格列表
         * @type {Array.<SpecConfigInfo> || null}
         */
        this.SpecConfigInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Machine = 'Machine' in params ? params.Machine : null;

        if (params.SpecConfigInfos) {
            this.SpecConfigInfos = new Array();
            for (let z in params.SpecConfigInfos) {
                let obj = new SpecConfigInfo();
                obj.deserialize(params.SpecConfigInfos[z]);
                this.SpecConfigInfos.push(obj);
            }
        }

    }
}

/**
 * ModifyRealServerAccessStrategy返回参数结构体
 * @class
 */
class ModifyRealServerAccessStrategyResponse extends  AbstractModel {
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
 * ActiveHourDCDBInstance返回参数结构体
 * @class
 */
class ActiveHourDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解隔离成功的实例id列表
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * 解隔离失败的实例id列表
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

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
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDCDBPrice返回参数结构体
 * @class
 */
class DescribeDCDBPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
         * @type {number || null}
         */
        this.Price = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：dcdb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要绑定的安全组ID，类似sg-efil73jd。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 被绑定的实例ID，类似tdsqlshard-lesecurk，支持指定多个实例。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * TerminateDedicatedDBInstance返回参数结构体
 * @class
 */
class TerminateDedicatedDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程Id
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlushBinlog返回参数结构体
 * @class
 */
class FlushBinlogResponse extends  AbstractModel {
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
 * DescribeDBSecurityGroups返回参数结构体
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 实例VIP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * 实例端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VPort = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelDcnJob返回参数结构体
 * @class
 */
class CancelDcnJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileDownloadUrl请求参数结构体
 * @class
 */
class DescribeFileDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例分片ID
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * 不带签名的文件路径
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

    }
}

/**
 * DescribeDBSyncMode返回参数结构体
 * @class
 */
class DescribeDBSyncModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步模式：0 异步，1 强同步， 2 强同步可退化
         * @type {number || null}
         */
        this.SyncMode = null;

        /**
         * 是否有修改流程在执行中：1 是， 0 否。
         * @type {number || null}
         */
        this.IsModifying = null;

        /**
         * 当前复制方式，0 异步，1 同步
         * @type {number || null}
         */
        this.CurrentSyncMode = null;

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
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;
        this.IsModifying = 'IsModifying' in params ? params.IsModifying : null;
        this.CurrentSyncMode = 'CurrentSyncMode' in params ? params.CurrentSyncMode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：dcdb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDCDBUpgradePrice返回参数结构体
 * @class
 */
class DescribeDCDBUpgradePriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 变配明细计算公式
         * @type {string || null}
         */
        this.Formula = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowLogs请求参数结构体
 * @class
 */
class DescribeDBSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-hw0qj6m1
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 从结果的第几条数据开始返回
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的起始时间，形如2016-07-23 14:55:20
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 实例的分片ID，形如shard-53ima8ln
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * 查询的结束时间，形如2016-08-22 14:55:20。如果不填，那么查询结束时间就是当前时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 要查询的具体数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 排序指标，取值为query_time_sum或者query_count。不填默认按照query_time_sum排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型，desc（降序）或者asc（升序）。不填默认desc排序
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 是否查询从机的慢查询，0-主机; 1-从机。不填默认查询主机慢查询
         * @type {number || null}
         */
        this.Slave = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Slave = 'Slave' in params ? params.Slave : null;

    }
}

/**
 * CreateAccount请求参数结构体
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * AccountName
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 可以登录的主机，与mysql 账号的 host 格式一致，可以支持通配符，例如 %，10.%，10.20.%。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 账号密码，密码需要 8-32 个字符，不能以 '/' 开头，并且必须包含小写字母、大写字母、数字和符号()~!@#$%^&*-+=_|{}[]:<>,.?/。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否创建为只读账号，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败，3：只从备机读取。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 账号备注，可以包含中文、英文字符、常见符号和数字，长度为0~256字符
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 如果备机延迟超过本参数设置值，系统将认为备机发生故障
建议该参数值大于10。当ReadOnly选择1、2时该参数生效。
         * @type {number || null}
         */
        this.DelayThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;

    }
}

/**
 * DescribeDBParameters返回参数结构体
 * @class
 */
class DescribeDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求DB的当前参数值
         * @type {Array.<ParamDesc> || null}
         */
        this.Params = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new ParamDesc();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateHourDCDBInstance请求参数结构体
 * @class
 */
class IsolateHourDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例uuid列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ModifyDBInstanceName返回参数结构体
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlow返回参数结构体
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程状态，0：成功，1：失败，2：运行中
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloneAccount返回参数结构体
 * @class
 */
class CloneAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription返回参数结构体
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
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
 * DestroyDCDBInstance请求参数结构体
 * @class
 */
class DestroyDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * OpenDBExtranetAccess返回参数结构体
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDCDBInstance返回参数结构体
 * @class
 */
class CreateDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述分片DB节点信息
 * @class
 */
class BriefNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DB节点ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * DB节点角色，取值为master或者slave
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 节点所属分片的分片ID
         * @type {string || null}
         */
        this.ShardId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;

    }
}

/**
 * ModifyDBInstancesProject返回参数结构体
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
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
 * DescribeDCDBInstanceNodeInfo请求参数结构体
 * @class
 */
class DescribeDCDBInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 单次最多返回多少条，取值范围为(0-100]，默认为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回数据的偏移值，默认为0
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 数据库视图信息
 * @class
 */
class DatabaseView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图名称
         * @type {string || null}
         */
        this.View = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.View = 'View' in params ? params.View : null;

    }
}

/**
 * DescribeDBLogFiles请求参数结构体
 * @class
 */
class DescribeDBLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分片 ID，形如：shard-7noic7tv
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeOrders返回参数结构体
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的订单数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 订单信息列表。
         * @type {Array.<Deal> || null}
         */
        this.Deals = null;

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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDedicatedClusterDCDBInstance请求参数结构体
 * @class
 */
class CreateDedicatedClusterDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配实例个数
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 分片数量
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * 分片內存大小, 单位GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片磁盘大小, 单位GB
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * 独享集群集群uuid
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * （废弃）可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * （废弃）cpu大小，单位：核
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * （废弃）分片机型
         * @type {string || null}
         */
        this.ShardMachine = null;

        /**
         * 分片的节点个数
         * @type {number || null}
         */
        this.ShardNodeNum = null;

        /**
         * （废弃）节点cpu核数，单位：1/100核
         * @type {number || null}
         */
        this.ShardNodeCpu = null;

        /**
         * （废弃）节点內存大小，单位：GB
         * @type {number || null}
         */
        this.ShardNodeMemory = null;

        /**
         * （废弃）节点磁盘大小，单位：GB
         * @type {number || null}
         */
        this.ShardNodeStorage = null;

        /**
         * db版本
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * DCN源实例ID
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * DCN源实例地域名
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * 自定义实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 标签
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 支持IPv6标志：1 支持， 0 不支持
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * （废弃）Pid，可通过获取独享集群售卖配置接口得到
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
         * @type {DBParamValue || null}
         */
        this.InitParams = null;

        /**
         * 指定主节点uuid，不填随机分配
         * @type {string || null}
         */
        this.MasterHostId = null;

        /**
         * 指定从节点uuid，不填随机分配
         * @type {Array.<string> || null}
         */
        this.SlaveHostIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ShardMachine = 'ShardMachine' in params ? params.ShardMachine : null;
        this.ShardNodeNum = 'ShardNodeNum' in params ? params.ShardNodeNum : null;
        this.ShardNodeCpu = 'ShardNodeCpu' in params ? params.ShardNodeCpu : null;
        this.ShardNodeMemory = 'ShardNodeMemory' in params ? params.ShardNodeMemory : null;
        this.ShardNodeStorage = 'ShardNodeStorage' in params ? params.ShardNodeStorage : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

        if (params.InitParams) {
            let obj = new DBParamValue();
            obj.deserialize(params.InitParams)
            this.InitParams = obj;
        }
        this.MasterHostId = 'MasterHostId' in params ? params.MasterHostId : null;
        this.SlaveHostIds = 'SlaveHostIds' in params ? params.SlaveHostIds : null;

    }
}

/**
 * CreateHourDCDBInstance请求参数结构体
 * @class
 */
class CreateHourDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * 单个分片节点个数，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardNodeCount = null;

        /**
         * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 欲购买实例的数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 虚拟私有网络 ID，不传或传空表示创建为基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 虚拟私有网络子网 ID，VpcId不为空时必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 分片cpu大小，单位：核，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardCpu = null;

        /**
         * 数据库引擎版本，当前可选：10.0.10，10.1.9，5.7.17。
10.0.10 - Mariadb 10.0.10；
10.1.9 - Mariadb 10.1.9；
5.7.17 - Percona 5.7.17。
如果不填的话，默认为10.1.9，表示Mariadb 10.1.9。
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * 分片节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 安全组id
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例名称， 可以通过该字段自主的设置实例的名字
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 是否支持IPv6
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 标签键值对数组
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * DCN源地域
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * DCN源实例ID
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * 需要回档的源实例ID
         * @type {string || null}
         */
        this.RollbackInstanceId = null;

        /**
         * 回档时间
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * 安全组ids，安全组可以传数组形式，兼容之前SecurityGroupId参数
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;
        this.ShardNodeCount = 'ShardNodeCount' in params ? params.ShardNodeCount : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ShardCpu = 'ShardCpu' in params ? params.ShardCpu : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new DBParamValue();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.RollbackInstanceId = 'RollbackInstanceId' in params ? params.RollbackInstanceId : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * ResetAccountPassword请求参数结构体
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 新密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CopyAccountPrivileges返回参数结构体
 * @class
 */
class CopyAccountPrivilegesResponse extends  AbstractModel {
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
 * CloneAccount请求参数结构体
 * @class
 */
class CloneAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 源用户账户名
         * @type {string || null}
         */
        this.SrcUser = null;

        /**
         * 源用户HOST
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * 目的用户账户名
         * @type {string || null}
         */
        this.DstUser = null;

        /**
         * 目的用户HOST
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * 目的用户账户描述
         * @type {string || null}
         */
        this.DstDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUser = 'SrcUser' in params ? params.SrcUser : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUser = 'DstUser' in params ? params.DstUser : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.DstDesc = 'DstDesc' in params ? params.DstDesc : null;

    }
}

/**
 * DescribeDCDBRenewalPrice请求参数结构体
 * @class
 */
class DescribeDCDBRenewalPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。不传则默认为1个月。
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * 修改参数结果
 * @class
 */
class ParamModifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改参数名字
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 参数修改结果。0表示修改成功；-1表示修改失败；-2表示该参数值非法
         * @type {number || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：dcdb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例ID。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 数据库存储过程信息
 * @class
 */
class DatabaseProcedure extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储过程名称
         * @type {string || null}
         */
        this.Proc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proc = 'Proc' in params ? params.Proc : null;

    }
}

/**
 * DescribeDCDBPrice请求参数结构体
 * @class
 */
class DescribeDCDBPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 欲新购实例的可用区ID。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 欲购买实例的数量，目前支持购买1-10个实例
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 单个分片节点个数大小，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardNodeCount = null;

        /**
         * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 付费类型。postpaid：按量付费   prepaid：预付费
         * @type {string || null}
         */
        this.Paymode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ShardNodeCount = 'ShardNodeCount' in params ? params.ShardNodeCount : null;
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;

    }
}

/**
 * SwitchDBInstanceHA返回参数结构体
 * @class
 */
class SwitchDBInstanceHAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程Id
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 安全组个数。
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库函数信息
 * @class
 */
class DatabaseFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.Func = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Func = 'Func' in params ? params.Func : null;

    }
}

/**
 * DescribeSqlLogs请求参数结构体
 * @class
 */
class DescribeSqlLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * SQL日志偏移。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取数量（0-10000，为0时拉取总数信息）。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 参数约束
 * @class
 */
class ParamConstraint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约束类型,如枚举enum，区间section
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 约束类型为enum时的可选值列表
         * @type {string || null}
         */
        this.Enum = null;

        /**
         * 约束类型为section时的范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConstraintRange || null}
         */
        this.Range = null;

        /**
         * 约束类型为string时的可选值列表
         * @type {string || null}
         */
        this.String = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Enum = 'Enum' in params ? params.Enum : null;

        if (params.Range) {
            let obj = new ConstraintRange();
            obj.deserialize(params.Range)
            this.Range = obj;
        }
        this.String = 'String' in params ? params.String : null;

    }
}

/**
 * ResetAccountPassword返回参数结构体
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * DescribeDCDBSaleInfo请求参数结构体
 * @class
 */
class DescribeDCDBSaleInfoRequest extends  AbstractModel {
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
 * ModifyRealServerAccessStrategy请求参数结构体
 * @class
 */
class ModifyRealServerAccessStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * RS就近模式, 0-无策略, 1-可用区就近访问。
         * @type {number || null}
         */
        this.RsAccessStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RsAccessStrategy = 'RsAccessStrategy' in params ? params.RsAccessStrategy : null;

    }
}

/**
 * 升级实例 -- 扩容分片类型
 * @class
 */
class ExpandShardConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片ID数组
         * @type {Array.<string> || null}
         */
        this.ShardInstanceIds = null;

        /**
         * 分片内存大小，单位 GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储大小，单位 GB
         * @type {number || null}
         */
        this.ShardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceIds = 'ShardInstanceIds' in params ? params.ShardInstanceIds : null;
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;

    }
}

/**
 * RenewDCDBInstance请求参数结构体
 * @class
 */
class RenewDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * 分片节点可用区选择
 * @class
 */
class ShardZoneChooseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主可用区
         * @type {ZonesInfo || null}
         */
        this.MasterZone = null;

        /**
         * 可选的从可用区
         * @type {Array.<ZonesInfo> || null}
         */
        this.SlaveZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterZone) {
            let obj = new ZonesInfo();
            obj.deserialize(params.MasterZone)
            this.MasterZone = obj;
        }

        if (params.SlaveZones) {
            this.SlaveZones = new Array();
            for (let z in params.SlaveZones) {
                let obj = new ZonesInfo();
                obj.deserialize(params.SlaveZones[z]);
                this.SlaveZones.push(obj);
            }
        }

    }
}

/**
 * 数据库表信息
 * @class
 */
class DatabaseTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * 订单信息
 * @class
 */
class Deal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 所属账号
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 关联的流程 Id，可用于查询流程执行状态
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 只有创建实例的订单会填充该字段，表示该订单创建的实例的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 付费模式，0后付费/1预付费
         * @type {number || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * GrantAccountPrivileges请求参数结构体
 * @class
 */
class GrantAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 全局权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER，SHOW DATABASES，REPLICATION CLIENT，REPLICATION SLAVE
库权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER 
表权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE VIEW，SHOW VIEW，TRIGGER  
字段权限： INSERT，REFERENCES，SELECT，UPDATE
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 类型,可以填入 table 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示设置该数据库权限（即db.\*），此时忽略 Object 参数
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
         * @type {string || null}
         */
        this.Object = null;

        /**
         * 当 Type=table 时，ColName 为 \* 表示对表授权，如果为具体字段名，表示对字段授权
         * @type {string || null}
         */
        this.ColName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * DescribeShardSpec请求参数结构体
 * @class
 */
class DescribeShardSpecRequest extends  AbstractModel {
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
 * DescribeDCDBShards请求参数结构体
 * @class
 */
class DescribeDCDBShardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分片ID列表。
         * @type {Array.<string> || null}
         */
        this.ShardInstanceIds = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段， 目前仅支持 createtime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型， desc 或者 asc
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardInstanceIds = 'ShardInstanceIds' in params ? params.ShardInstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * SwitchDBInstanceHA请求参数结构体
 * @class
 */
class SwitchDBInstanceHARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id，形如 tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 切换的目标区域，会自动选择该可用区中延迟最低的节点。
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 云数据库参数信息。
 * @class
 */
class DBParamValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 参数值
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
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 实例可售卖规格详细信息，创建实例和扩容实例时 NodeCount、Memory 确定售卖规格，硬盘大小可用区间为[MinStorage,MaxStorage]
 * @class
 */
class SpecConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点个数，2 表示一主一从，3 表示一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 数据盘规格最小值，单位 GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 数据盘规格最大值，单位 GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 推荐的使用场景
         * @type {string || null}
         */
        this.SuitInfo = null;

        /**
         * 产品类型 Id
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 最大 Qps 值
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.SuitInfo = 'SuitInfo' in params ? params.SuitInfo : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * ModifyDBParameters请求参数结构体
 * @class
 */
class ModifyDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 参数列表，每一个元素是Param和Value的组合
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * 分布式数据库实例信息
 * @class
 */
class DCDBInstanceInfo extends  AbstractModel {
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
         * 应用ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC数字ID
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet数字ID
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 状态中文描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 实例状态：0 创建中，1 流程处理中， 2 运行中，3 实例未初始化，-1 实例已隔离，4 实例初始化中，5 实例删除中，6 实例重启中，7 数据迁移中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 自动续费标志
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 分片个数
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 隔离时间
         * @type {string || null}
         */
        this.IsolatedTimestamp = null;

        /**
         * 账号ID
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 分片详情
         * @type {Array.<ShardInfo> || null}
         */
        this.ShardDetail = null;

        /**
         * 节点数，2 为一主一从， 3 为一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 临时实例标记，0 为非临时实例
         * @type {number || null}
         */
        this.IsTmp = null;

        /**
         * 独享集群ID，为空表示非独享集群实例
         * @type {string || null}
         */
        this.ExclusterId = null;

        /**
         * 字符串型的私有网络ID
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * 字符串型的私有网络子网ID
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * 数字实例ID（过时字段，请勿依赖该值）
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 外网访问的域名，公网可解析
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网 IP 地址，公网可访问
         * @type {string || null}
         */
        this.WanVip = null;

        /**
         * 外网端口
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 产品类型 ID（过时字段，请勿依赖该值）
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 实例最后更新时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 数据库引擎
         * @type {string || null}
         */
        this.DbEngine = null;

        /**
         * 数据库引擎版本
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * 付费模式
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * 实例处于异步任务状态时，表示异步任务流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Locker = null;

        /**
         * 外网状态，0-未开通；1-已开通；2-关闭；3-开通中
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * 该实例是否支持审计。1-支持；0-不支持
         * @type {number || null}
         */
        this.IsAuditSupported = null;

        /**
         * Cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例IPv6标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 内网IPv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * 外网IPv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanVipv6 = null;

        /**
         * 外网IPv6端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WanPortIpv6 = null;

        /**
         * 外网IPv6状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WanStatusIpv6 = null;

        /**
         * DCN标志，0-无，1-主实例，2-灾备实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnFlag = null;

        /**
         * DCN状态，0-无，1-创建中，2-同步中，3-已断开
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnStatus = null;

        /**
         * DCN灾备实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnDstNum = null;

        /**
         * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 实例标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.IsolatedTimestamp = 'IsolatedTimestamp' in params ? params.IsolatedTimestamp : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

        if (params.ShardDetail) {
            this.ShardDetail = new Array();
            for (let z in params.ShardDetail) {
                let obj = new ShardInfo();
                obj.deserialize(params.ShardDetail[z]);
                this.ShardDetail.push(obj);
            }
        }
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.IsTmp = 'IsTmp' in params ? params.IsTmp : null;
        this.ExclusterId = 'ExclusterId' in params ? params.ExclusterId : null;
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanVip = 'WanVip' in params ? params.WanVip : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DbEngine = 'DbEngine' in params ? params.DbEngine : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.Locker = 'Locker' in params ? params.Locker : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.IsAuditSupported = 'IsAuditSupported' in params ? params.IsAuditSupported : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.WanVipv6 = 'WanVipv6' in params ? params.WanVipv6 : null;
        this.WanPortIpv6 = 'WanPortIpv6' in params ? params.WanPortIpv6 : null;
        this.WanStatusIpv6 = 'WanStatusIpv6' in params ? params.WanStatusIpv6 : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.DcnDstNum = 'DcnDstNum' in params ? params.DcnDstNum : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：dcdb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeDcnDetail请求参数结构体
 * @class
 */
class DescribeDcnDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
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
 * DescribeFileDownloadUrl返回参数结构体
 * @class
 */
class DescribeFileDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带签名的下载连接
         * @type {string || null}
         */
        this.PreSignedUrl = null;

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
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBParameters返回参数结构体
 * @class
 */
class ModifyDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 各参数修改结果
         * @type {Array.<ParamModifyResult> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ParamModifyResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述分布式数据库分片信息。
 * @class
 */
class DCDBShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分片SQL透传Id，用于将sql透传到指定分片执行
         * @type {string || null}
         */
        this.ShardSerialId = null;

        /**
         * 全局唯一的分片Id
         * @type {string || null}
         */
        this.ShardInstanceId = null;

        /**
         * 状态：0 创建中，1 流程处理中， 2 运行中，3 分片未初始化
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态中文描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 字符串格式的私有网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 字符串格式的私有网络子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 节点数，2 为一主一从， 3 为一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 存储使用率，单位为 %
         * @type {number || null}
         */
        this.StorageUsage = null;

        /**
         * 内存使用率，单位为 %
         * @type {number || null}
         */
        this.MemoryUsage = null;

        /**
         * 数字分片Id（过时字段，请勿依赖该值）
         * @type {number || null}
         */
        this.ShardId = null;

        /**
         * 产品ProductID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Proxy版本
         * @type {string || null}
         */
        this.ProxyVersion = null;

        /**
         * 付费模型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * 分片的主可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardMasterZone = null;

        /**
         * 分片的从可用区列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ShardSlaveZones = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 分片ShardKey的范围（总共64个哈希值），例如： 0-31，32-63
         * @type {string || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ShardSerialId = 'ShardSerialId' in params ? params.ShardSerialId : null;
        this.ShardInstanceId = 'ShardInstanceId' in params ? params.ShardInstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.StorageUsage = 'StorageUsage' in params ? params.StorageUsage : null;
        this.MemoryUsage = 'MemoryUsage' in params ? params.MemoryUsage : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.ProxyVersion = 'ProxyVersion' in params ? params.ProxyVersion : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.ShardMasterZone = 'ShardMasterZone' in params ? params.ShardMasterZone : null;
        this.ShardSlaveZones = 'ShardSlaveZones' in params ? params.ShardSlaveZones : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Range = 'Range' in params ? params.Range : null;

    }
}

/**
 * CopyAccountPrivileges请求参数结构体
 * @class
 */
class CopyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 源用户名
         * @type {string || null}
         */
        this.SrcUserName = null;

        /**
         * 源用户允许的访问 host
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * 目的用户名
         * @type {string || null}
         */
        this.DstUserName = null;

        /**
         * 目的用户允许的访问 host
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * 源账号的 ReadOnly 属性
         * @type {string || null}
         */
        this.SrcReadOnly = null;

        /**
         * 目的账号的 ReadOnly 属性
         * @type {string || null}
         */
        this.DstReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUserName = 'SrcUserName' in params ? params.SrcUserName : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUserName = 'DstUserName' in params ? params.DstUserName : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.SrcReadOnly = 'SrcReadOnly' in params ? params.SrcReadOnly : null;
        this.DstReadOnly = 'DstReadOnly' in params ? params.DstReadOnly : null;

    }
}

/**
 * 安全组详情
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * 入站规则
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * 出站规则
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Outbound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

    }
}

/**
 * DescribeDatabaseTable请求参数结构体
 * @class
 */
class DescribeDatabaseTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称，通过 DescribeDatabases 接口获取。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表名称，通过 DescribeDatabaseObjects 接口获取。
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * DescribeDCDBInstanceNodeInfo返回参数结构体
 * @class
 */
class DescribeDCDBInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 节点信息
         * @type {Array.<BriefNodeInfo> || null}
         */
        this.NodesInfo = null;

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

        if (params.NodesInfo) {
            this.NodesInfo = new Array();
            for (let z in params.NodesInfo) {
                let obj = new BriefNodeInfo();
                obj.deserialize(params.NodesInfo[z]);
                this.NodesInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KillSession请求参数结构体
 * @class
 */
class KillSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 会话ID列表
         * @type {Array.<number> || null}
         */
        this.SessionId = null;

        /**
         * 分片ID，与ShardSerialId设置一个
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * 分片序列ID，与ShardId设置一个
         * @type {string || null}
         */
        this.ShardSerialId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.ShardSerialId = 'ShardSerialId' in params ? params.ShardSerialId : null;

    }
}

/**
 * TerminateDedicatedDBInstance请求参数结构体
 * @class
 */
class TerminateDedicatedDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id，形如：dcdbt-ow728lmc。
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
 * DescribeDatabaseObjects返回参数结构体
 * @class
 */
class DescribeDatabaseObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表列表。
         * @type {Array.<DatabaseTable> || null}
         */
        this.Tables = null;

        /**
         * 视图列表。
         * @type {Array.<DatabaseView> || null}
         */
        this.Views = null;

        /**
         * 存储过程列表。
         * @type {Array.<DatabaseProcedure> || null}
         */
        this.Procs = null;

        /**
         * 函数列表。
         * @type {Array.<DatabaseFunction> || null}
         */
        this.Funcs = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new DatabaseTable();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new DatabaseView();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }

        if (params.Procs) {
            this.Procs = new Array();
            for (let z in params.Procs) {
                let obj = new DatabaseProcedure();
                obj.deserialize(params.Procs[z]);
                this.Procs.push(obj);
            }
        }

        if (params.Funcs) {
            this.Funcs = new Array();
            for (let z in params.Funcs) {
                let obj = new DatabaseFunction();
                obj.deserialize(params.Funcs[z]);
                this.Funcs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如tdsql-hdaprz0v
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

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

    }
}

/**
 * DescribeDcnDetail返回参数结构体
 * @class
 */
class DescribeDcnDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DCN同步详情
         * @type {Array.<DcnDetailItem> || null}
         */
        this.DcnDetails = null;

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

        if (params.DcnDetails) {
            this.DcnDetails = new Array();
            for (let z in params.DcnDetails) {
                let obj = new DcnDetailItem();
                obj.deserialize(params.DcnDetails[z]);
                this.DcnDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库列信息
 * @class
 */
class TableColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列名称
         * @type {string || null}
         */
        this.Col = null;

        /**
         * 列类型
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
        this.Col = 'Col' in params ? params.Col : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 安全出入口规则
 * @class
 */
class SecurityGroupBound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源 IP 或 IP 段，例如192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 策略，ACCEPT 或者 DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持 UDP、TCP 等
         * @type {string || null}
         */
        this.IpProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;

    }
}

/**
 * 升级实例 -- 切分分片类型
 * @class
 */
class SplitShardConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片ID数组
         * @type {Array.<string> || null}
         */
        this.ShardInstanceIds = null;

        /**
         * 数据切分比例，固定50%
         * @type {number || null}
         */
        this.SplitRate = null;

        /**
         * 分片内存大小，单位 GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储大小，单位 GB
         * @type {number || null}
         */
        this.ShardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceIds = 'ShardInstanceIds' in params ? params.ShardInstanceIds : null;
        this.SplitRate = 'SplitRate' in params ? params.SplitRate : null;
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;

    }
}

/**
 * RenewDCDBInstance返回参数结构体
 * @class
 */
class RenewDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeShardSpec返回参数结构体
 * @class
 */
class DescribeShardSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按机型分类的可售卖规格列表
         * @type {Array.<SpecConfig> || null}
         */
        this.SpecConfig = null;

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

        if (params.SpecConfig) {
            this.SpecConfig = new Array();
            for (let z in params.SpecConfig) {
                let obj = new SpecConfig();
                obj.deserialize(params.SpecConfig[z]);
                this.SpecConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeDCDBRenewalPrice返回参数结构体
 * @class
 */
class DescribeDCDBRenewalPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
         * @type {number || null}
         */
        this.Price = null;

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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDCDBShards返回参数结构体
 * @class
 */
class DescribeDCDBShardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的分片数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 分片信息列表
         * @type {Array.<DCDBShardInfo> || null}
         */
        this.Shards = null;

        /**
         * 灾备标志，0-无，1-主实例，2-灾备实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnFlag = null;

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

        if (params.Shards) {
            this.Shards = new Array();
            for (let z in params.Shards) {
                let obj = new DCDBShardInfo();
                obj.deserialize(params.Shards[z]);
                this.Shards.push(obj);
            }
        }
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 可用区信息
 * @class
 */
class ZonesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区数字ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区中文名
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * CreateHourDCDBInstance返回参数结构体
 * @class
 */
class CreateHourDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 流程id，可以根据流程id查询创建进度
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库信息
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * GrantAccountPrivileges返回参数结构体
 * @class
 */
class GrantAccountPrivilegesResponse extends  AbstractModel {
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
 * CancelDcnJob请求参数结构体
 * @class
 */
class CancelDcnJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备实例ID
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
 * IsolateHourDCDBInstance返回参数结构体
 * @class
 */
class IsolateHourDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 隔离成功的实例id列表
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * 隔离失败的实例id列表
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

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
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分片信息
 * @class
 */
class ShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片ID
         * @type {string || null}
         */
        this.ShardInstanceId = null;

        /**
         * 分片Set ID
         * @type {string || null}
         */
        this.ShardSerialId = null;

        /**
         * 状态：0 创建中，1 流程处理中， 2 运行中，3 分片未初始化，-2 分片已删除
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 分片数字ID
         * @type {number || null}
         */
        this.ShardId = null;

        /**
         * 节点数，2 为一主一从， 3 为一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 产品类型 Id（过时字段，请勿依赖该值）
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * Cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceId = 'ShardInstanceId' in params ? params.ShardInstanceId : null;
        this.ShardSerialId = 'ShardSerialId' in params ? params.ShardSerialId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * OpenDBExtranetAccess请求参数结构体
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待开放外网访问的实例ID。形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否IPv6，默认0
         * @type {number || null}
         */
        this.Ipv6Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

    }
}

/**
 * DescribeDCDBSaleInfo返回参数结构体
 * @class
 */
class DescribeDCDBSaleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域信息列表
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionList = null;

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

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstancesProject请求参数结构体
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例ID列表。实例 ID 形如：dcdbt-ow728lmc。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 要分配的项目 ID，可以通过 DescribeProjects 查询项目列表接口获取。
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DCN详情条目
 * @class
 */
class DcnDetailItem extends  AbstractModel {
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
         * 实例地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例IP地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例IPv6地址
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * 实例端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 实例DCN标志，1-主，2-备
         * @type {number || null}
         */
        this.DcnFlag = null;

        /**
         * 实例DCN状态，0-无，1-创建中，2-同步中，3-已断开
         * @type {number || null}
         */
        this.DcnStatus = null;

        /**
         * 实例CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 付费模式
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例创建时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例到期时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
         * @type {number || null}
         */
        this.InstanceType = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeDBSyncMode请求参数结构体
 * @class
 */
class DescribeDBSyncModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改同步模式的实例ID。形如：dcdbt-ow728lmc。
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
 * CloseDBExtranetAccess返回参数结构体
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccountDescription请求参数结构体
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 新的账号备注，长度 0~256。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * KillSession返回参数结构体
 * @class
 */
class KillSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 慢查询条目信息
 * @class
 */
class SlowLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语句校验和，用于查询详情
         * @type {string || null}
         */
        this.CheckSum = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 抽象的SQL语句
         * @type {string || null}
         */
        this.FingerPrint = null;

        /**
         * 平均的锁时间
         * @type {string || null}
         */
        this.LockTimeAvg = null;

        /**
         * 最大锁时间
         * @type {string || null}
         */
        this.LockTimeMax = null;

        /**
         * 最小锁时间
         * @type {string || null}
         */
        this.LockTimeMin = null;

        /**
         * 锁时间总和
         * @type {string || null}
         */
        this.LockTimeSum = null;

        /**
         * 查询次数
         * @type {string || null}
         */
        this.QueryCount = null;

        /**
         * 平均查询时间
         * @type {string || null}
         */
        this.QueryTimeAvg = null;

        /**
         * 最大查询时间
         * @type {string || null}
         */
        this.QueryTimeMax = null;

        /**
         * 最小查询时间
         * @type {string || null}
         */
        this.QueryTimeMin = null;

        /**
         * 查询时间总和
         * @type {string || null}
         */
        this.QueryTimeSum = null;

        /**
         * 扫描行数
         * @type {string || null}
         */
        this.RowsExaminedSum = null;

        /**
         * 发送行数
         * @type {string || null}
         */
        this.RowsSentSum = null;

        /**
         * 最后执行时间
         * @type {string || null}
         */
        this.TsMax = null;

        /**
         * 首次执行时间
         * @type {string || null}
         */
        this.TsMin = null;

        /**
         * 帐号
         * @type {string || null}
         */
        this.User = null;

        /**
         * 样例Sql
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExampleSql = null;

        /**
         * 账户的域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckSum = 'CheckSum' in params ? params.CheckSum : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.FingerPrint = 'FingerPrint' in params ? params.FingerPrint : null;
        this.LockTimeAvg = 'LockTimeAvg' in params ? params.LockTimeAvg : null;
        this.LockTimeMax = 'LockTimeMax' in params ? params.LockTimeMax : null;
        this.LockTimeMin = 'LockTimeMin' in params ? params.LockTimeMin : null;
        this.LockTimeSum = 'LockTimeSum' in params ? params.LockTimeSum : null;
        this.QueryCount = 'QueryCount' in params ? params.QueryCount : null;
        this.QueryTimeAvg = 'QueryTimeAvg' in params ? params.QueryTimeAvg : null;
        this.QueryTimeMax = 'QueryTimeMax' in params ? params.QueryTimeMax : null;
        this.QueryTimeMin = 'QueryTimeMin' in params ? params.QueryTimeMin : null;
        this.QueryTimeSum = 'QueryTimeSum' in params ? params.QueryTimeSum : null;
        this.RowsExaminedSum = 'RowsExaminedSum' in params ? params.RowsExaminedSum : null;
        this.RowsSentSum = 'RowsSentSum' in params ? params.RowsSentSum : null;
        this.TsMax = 'TsMax' in params ? params.TsMax : null;
        this.TsMin = 'TsMin' in params ? params.TsMin : null;
        this.User = 'User' in params ? params.User : null;
        this.ExampleSql = 'ExampleSql' in params ? params.ExampleSql : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeDatabases返回参数结构体
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该实例上的数据库列表。
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * 透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

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

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrders请求参数结构体
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的长订单号列表，创建实例、续费实例、扩容实例接口返回。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DescribeDBLogFiles返回参数结构体
 * @class
 */
class DescribeDBLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求日志类型。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 请求日志总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 日志文件列表
         * @type {Array.<LogFileInfo> || null}
         */
        this.Files = null;

        /**
         * 如果是VPC网络的实例，做用本前缀加上URI为下载地址
         * @type {string || null}
         */
        this.VpcPrefix = null;

        /**
         * 如果是普通网络的实例，做用本前缀加上URI为下载地址
         * @type {string || null}
         */
        this.NormalPrefix = null;

        /**
         * 分片 ID，形如：shard-7noic7tv
         * @type {string || null}
         */
        this.ShardId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new LogFileInfo();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.VpcPrefix = 'VpcPrefix' in params ? params.VpcPrefix : null;
        this.NormalPrefix = 'NormalPrefix' in params ? params.NormalPrefix : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseDBExtranetAccess请求参数结构体
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待关闭外网访问的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否IPv6，默认0
         * @type {number || null}
         */
        this.Ipv6Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

    }
}

/**
 * InitDCDBInstances请求参数结构体
 * @class
 */
class InitDCDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待初始化的实例ID列表，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步）。
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * 标签对象，包含tagKey & tagValue
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值value
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
 * DescribeSqlLogs返回参数结构体
 * @class
 */
class DescribeSqlLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前消息队列中的sql日志条目数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 消息队列中的sql日志起始偏移。
         * @type {number || null}
         */
        this.StartOffset = null;

        /**
         * 消息队列中的sql日志结束偏移。
         * @type {number || null}
         */
        this.EndOffset = null;

        /**
         * 返回的第一条sql日志的偏移。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的sql日志数量。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Sql日志列表。
         * @type {Array.<SqlLogItem> || null}
         */
        this.SqlItems = null;

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
        this.StartOffset = 'StartOffset' in params ? params.StartOffset : null;
        this.EndOffset = 'EndOffset' in params ? params.EndOffset : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Count = 'Count' in params ? params.Count : null;

        if (params.SqlItems) {
            this.SqlItems = new Array();
            for (let z in params.SqlItems) {
                let obj = new SqlLogItem();
                obj.deserialize(params.SqlItems[z]);
                this.SqlItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccount请求参数结构体
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeDCDBInstances返回参数结构体
 * @class
 */
class DescribeDCDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<DCDBInstanceInfo> || null}
         */
        this.Instances = null;

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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DCDBInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlow请求参数结构体
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步请求接口返回的任务流程号。
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
 * CreateDCDBInstance请求参数结构体
 * @class
 */
class CreateDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。
注意当前可售卖的可用区需要通过DescribeDCDBSaleInfo接口拉取。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * 单个分片节点个数，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardNodeCount = null;

        /**
         * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 欲购买实例的数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 虚拟私有网络 ID，不传或传空表示创建为基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 虚拟私有网络子网 ID，VpcId不为空时必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据库引擎版本，当前可选：8.0.18，10.1.9，5.7.17。
8.0.18 - MySQL 8.0.18；
10.1.9 - Mariadb 10.1.9；
5.7.17 - Percona 5.7.17。
如果不填的话，默认为5.7.17，表示Percona 5.7.17。
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 安全组id
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例名称， 可以通过该字段自主的设置实例的名字
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 是否支持IPv6
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 标签键值对数组
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * DCN源地域
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * DCN源实例ID
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费，用户开通了预付费不停服特权也会进行自动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 安全组ids，安全组可以传数组形式，兼容之前SecurityGroupId参数
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;
        this.ShardNodeCount = 'ShardNodeCount' in params ? params.ShardNodeCount : null;
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new DBParamValue();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeDCDBUpgradePrice请求参数结构体
 * @class
 */
class DescribeDCDBUpgradePriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级类型，取值范围: 
<li> ADD: 新增分片 </li> 
 <li> EXPAND: 升级实例中的已有分片 </li> 
 <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 新增分片配置，当UpgradeType为ADD时生效。
         * @type {AddShardConfig || null}
         */
        this.AddShardConfig = null;

        /**
         * 扩容分片配置，当UpgradeType为EXPAND时生效。
         * @type {ExpandShardConfig || null}
         */
        this.ExpandShardConfig = null;

        /**
         * 切分分片配置，当UpgradeType为SPLIT时生效。
         * @type {SplitShardConfig || null}
         */
        this.SplitShardConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;

        if (params.AddShardConfig) {
            let obj = new AddShardConfig();
            obj.deserialize(params.AddShardConfig)
            this.AddShardConfig = obj;
        }

        if (params.ExpandShardConfig) {
            let obj = new ExpandShardConfig();
            obj.deserialize(params.ExpandShardConfig)
            this.ExpandShardConfig = obj;
        }

        if (params.SplitShardConfig) {
            let obj = new SplitShardConfig();
            obj.deserialize(params.SplitShardConfig)
            this.SplitShardConfig = obj;
        }

    }
}

/**
 * CreateDedicatedClusterDCDBInstance返回参数结构体
 * @class
 */
class CreateDedicatedClusterDCDBInstanceResponse extends  AbstractModel {
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
 * 用户任务信息
 * @class
 */
class UserTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 用户账户ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 任务状态，0-任务初始化中；1-任务运行中；2-任务成功；3-任务失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务类型，0-实例回档；1-实例创建；2-实例扩容；3-实例迁移；4-实例删除；5-实例重启
         * @type {number || null}
         */
        this.UserTaskType = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 客户端参数
         * @type {string || null}
         */
        this.InputData = null;

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
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserTaskType = 'UserTaskType' in params ? params.UserTaskType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.InputData = 'InputData' in params ? params.InputData : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends  AbstractModel {
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
 * 升级实例 -- 新增分片类型
 * @class
 */
class AddShardConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增分片的数量
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 分片内存大小，单位 GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储大小，单位 GB
         * @type {number || null}
         */
        this.ShardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardCount = 'ShardCount' in params ? params.ShardCount : null;
        this.ShardMemory = 'ShardMemory' in params ? params.ShardMemory : null;
        this.ShardStorage = 'ShardStorage' in params ? params.ShardStorage : null;

    }
}

/**
 * ModifyDBSyncMode请求参数结构体
 * @class
 */
class ModifyDBSyncModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改同步模式的实例ID。形如：dcdbt-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 同步模式：0 异步，1 强同步， 2 强同步可退化
         * @type {number || null}
         */
        this.SyncMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;

    }
}

/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目列表
         * @type {Array.<Project> || null}
         */
        this.Projects = null;

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

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccount返回参数结构体
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名，透传入参。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 允许访问的 host，透传入参。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 透传入参。
         * @type {number || null}
         */
        this.ReadOnly = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 售卖可用区信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域数字ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域中文名
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区列表
         * @type {Array.<ZonesInfo> || null}
         */
        this.ZoneList = null;

        /**
         * 可选择的主可用区和从可用区
         * @type {Array.<ShardZoneChooseInfo> || null}
         */
        this.AvailableChoice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new ZonesInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.AvailableChoice) {
            this.AvailableChoice = new Array();
            for (let z in params.AvailableChoice) {
                let obj = new ShardZoneChooseInfo();
                obj.deserialize(params.AvailableChoice[z]);
                this.AvailableChoice.push(obj);
            }
        }

    }
}

/**
 * DescribeDatabaseObjects请求参数结构体
 * @class
 */
class DescribeDatabaseObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称，通过 DescribeDatabases 接口获取。
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * UpgradeDCDBInstance请求参数结构体
 * @class
 */
class UpgradeDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级类型，取值范围: 
<li> ADD: 新增分片 </li> 
 <li> EXPAND: 升级实例中的已有分片 </li> 
 <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 新增分片配置，当UpgradeType为ADD时生效。
         * @type {AddShardConfig || null}
         */
        this.AddShardConfig = null;

        /**
         * 扩容分片配置，当UpgradeType为EXPAND时生效。
         * @type {ExpandShardConfig || null}
         */
        this.ExpandShardConfig = null;

        /**
         * 切分分片配置，当UpgradeType为SPLIT时生效。
         * @type {SplitShardConfig || null}
         */
        this.SplitShardConfig = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 变更部署时指定的新可用区列表，第1个为主可用区，其余为从可用区
         * @type {Array.<string> || null}
         */
        this.Zones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;

        if (params.AddShardConfig) {
            let obj = new AddShardConfig();
            obj.deserialize(params.AddShardConfig)
            this.AddShardConfig = obj;
        }

        if (params.ExpandShardConfig) {
            let obj = new ExpandShardConfig();
            obj.deserialize(params.ExpandShardConfig)
            this.ExpandShardConfig = obj;
        }

        if (params.SplitShardConfig) {
            let obj = new SplitShardConfig();
            obj.deserialize(params.SplitShardConfig)
            this.SplitShardConfig = obj;
        }
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

    }
}

/**
 * DestroyHourDCDBInstance返回参数结构体
 * @class
 */
class DestroyHourDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/557/56485)。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 实例 ID，与入参InstanceId一致。
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 约束类型值的范围
 * @class
 */
class ConstraintRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约束类型为section时的最小值
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 约束类型为section时的最大值
         * @type {string || null}
         */
        this.Max = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;

    }
}

/**
 * 拉取的日志信息
 * @class
 */
class LogFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log最后修改时间
         * @type {number || null}
         */
        this.Mtime = null;

        /**
         * 文件长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 下载Log时用到的统一资源标识符
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mtime = 'Mtime' in params ? params.Mtime : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * ActiveHourDCDBInstance请求参数结构体
 * @class
 */
class ActiveHourDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID列表。形如：["dcdbt-ow728lmc"]，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：dcdb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 安全组Id。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID列表，一个或者多个实例Id组成的数组。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 云数据库账号信息
 * @class
 */
class DBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户可以从哪台主机登录（对应 MySQL 用户的 host 字段，UserName + Host 唯一标识一个用户，IP形式，IP段以%结尾；支持填入%；为空默认等于%）
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户备注信息
         * @type {string || null}
         */
        this.Description = null;

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

        /**
         * 只读标记，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 如果备机延迟超过本参数设置值，系统将认为备机发生故障
建议该参数值大于10。当ReadOnly选择1、2时该参数生效。
         * @type {number || null}
         */
        this.DelayThresh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;

    }
}

/**
 * DescribeDatabaseTable返回参数结构体
 * @class
 */
class DescribeDatabaseTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表名称。
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 列信息。
         * @type {Array.<TableColumn> || null}
         */
        this.Cols = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Table = 'Table' in params ? params.Table : null;

        if (params.Cols) {
            this.Cols = new Array();
            for (let z in params.Cols) {
                let obj = new TableColumn();
                obj.deserialize(params.Cols[z]);
                this.Cols.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges请求参数结构体
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
         * @type {string || null}
         */
        this.Object = null;

        /**
         * 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限
         * @type {string || null}
         */
        this.ColName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * 描述一条sql日志的详细信息。
 * @class
 */
class SqlLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本条日志在消息队列中的偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 执行本条sql的用户。
         * @type {string || null}
         */
        this.User = null;

        /**
         * 执行本条sql的客户端IP+端口。
         * @type {string || null}
         */
        this.Client = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 执行的sql语句。
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 返回的数据行数。
         * @type {number || null}
         */
        this.SelectRowNum = null;

        /**
         * 影响行数。
         * @type {number || null}
         */
        this.AffectRowNum = null;

        /**
         * Sql执行时间戳。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * Sql耗时，单位为毫秒。
         * @type {number || null}
         */
        this.TimeCostMs = null;

        /**
         * Sql返回码，0为成功。
         * @type {number || null}
         */
        this.ResultCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.User = 'User' in params ? params.User : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.SelectRowNum = 'SelectRowNum' in params ? params.SelectRowNum : null;
        this.AffectRowNum = 'AffectRowNum' in params ? params.AffectRowNum : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.TimeCostMs = 'TimeCostMs' in params ? params.TimeCostMs : null;
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例用户列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DBAccount> || null}
         */
        this.Users = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new DBAccount();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowLogs返回参数结构体
 * @class
 */
class DescribeDBSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所有语句锁时间总和
         * @type {number || null}
         */
        this.LockTimeSum = null;

        /**
         * 所有语句查询总次数
         * @type {number || null}
         */
        this.QueryCount = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 所有语句查询时间总和
         * @type {number || null}
         */
        this.QueryTimeSum = null;

        /**
         * 慢查询日志数据
         * @type {Array.<SlowLogData> || null}
         */
        this.Data = null;

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
        this.LockTimeSum = 'LockTimeSum' in params ? params.LockTimeSum : null;
        this.QueryCount = 'QueryCount' in params ? params.QueryCount : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.QueryTimeSum = 'QueryTimeSum' in params ? params.QueryTimeSum : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SlowLogData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDCDBInstances请求参数结构体
 * @class
 */
class DescribeDCDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例 ID 查询。实例 ID 形如：dcdbt-2t4cf98d
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 搜索的字段名，当前支持的值有：instancename、vip、all。传 instancename 表示按实例名进行搜索；传 vip 表示按内网IP进行搜索；传 all 将会按实例ID、实例名和内网IP进行搜索。
         * @type {string || null}
         */
        this.SearchName = null;

        /**
         * 搜索的关键字，支持模糊搜索。多个关键字使用换行符（'\n'）分割。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 按项目 ID 查询
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 是否根据 VPC 网络来搜索
         * @type {boolean || null}
         */
        this.IsFilterVpc = null;

        /**
         * 私有网络 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 排序字段， projectId， createtime， instancename 三者之一
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型， desc 或者 asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 10，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 1非独享集群，2独享集群， 0全部
         * @type {number || null}
         */
        this.ExclusterType = null;

        /**
         * 标识是否使用ExclusterType字段, false不使用，true使用
         * @type {boolean || null}
         */
        this.IsFilterExcluster = null;

        /**
         * 独享集群ID
         * @type {Array.<string> || null}
         */
        this.ExclusterIds = null;

        /**
         * 按标签key查询
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 实例类型过滤，1-独享实例，2-主实例，3-灾备实例，多个按逗号分隔
         * @type {string || null}
         */
        this.FilterInstanceType = null;

        /**
         * 按实例状态筛选
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 排除实例状态
         * @type {Array.<number> || null}
         */
        this.ExcludeStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SearchName = 'SearchName' in params ? params.SearchName : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.IsFilterVpc = 'IsFilterVpc' in params ? params.IsFilterVpc : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ExclusterType = 'ExclusterType' in params ? params.ExclusterType : null;
        this.IsFilterExcluster = 'IsFilterExcluster' in params ? params.IsFilterExcluster : null;
        this.ExclusterIds = 'ExclusterIds' in params ? params.ExclusterIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.FilterInstanceType = 'FilterInstanceType' in params ? params.FilterInstanceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExcludeStatus = 'ExcludeStatus' in params ? params.ExcludeStatus : null;

    }
}

/**
 * 项目信息描述
 * @class
 */
class Project extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 资源拥有者（主账号）uin
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * 应用Id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建者uin
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * 来源平台
         * @type {string || null}
         */
        this.SrcPlat = null;

        /**
         * 来源AppId
         * @type {number || null}
         */
        this.SrcAppId = null;

        /**
         * 项目状态,0正常，-1关闭。默认项目为3
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否默认项目，1 是，0 不是
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.SrcPlat = 'SrcPlat' in params ? params.SrcPlat : null;
        this.SrcAppId = 'SrcAppId' in params ? params.SrcAppId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * DestroyHourDCDBInstance请求参数结构体
 * @class
 */
class DestroyHourDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * FlushBinlog请求参数结构体
 * @class
 */
class FlushBinlogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
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
 * ModifyDBSyncMode返回参数结构体
 * @class
 */
class ModifyDBSyncModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务Id，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeUserTasks请求参数结构体
 * @class
 */
class DescribeUserTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的状态列表。0-任务启动中；1-任务运行中；2-任务成功；3-任务失败
         * @type {Array.<number> || null}
         */
        this.Statuses = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 任务类型列表，当前支持的任务类型有：0-回档任务；1-创建实例任务；2-扩容任务；3-迁移任务；4-删除实例任务；5-重启任务
         * @type {Array.<number> || null}
         */
        this.FlowTypes = null;

        /**
         * 任务的创建时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务ID的数组
         * @type {Array.<number> || null}
         */
        this.UTaskIds = null;

        /**
         * 每次最多返回多少条任务，取值范围为(0,100]，不传的话默认值为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回任务默认是按照创建时间降序排列，从偏移值Offset处开始返回
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
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FlowTypes = 'FlowTypes' in params ? params.FlowTypes : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UTaskIds = 'UTaskIds' in params ? params.UTaskIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteAccount返回参数结构体
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
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

module.exports = {
    DescribeUserTasksResponse: DescribeUserTasksResponse,
    InitDCDBInstancesResponse: InitDCDBInstancesResponse,
    UpgradeDCDBInstanceResponse: UpgradeDCDBInstanceResponse,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    ParamDesc: ParamDesc,
    DestroyDCDBInstanceResponse: DestroyDCDBInstanceResponse,
    DescribeDBParametersRequest: DescribeDBParametersRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    SpecConfig: SpecConfig,
    ModifyRealServerAccessStrategyResponse: ModifyRealServerAccessStrategyResponse,
    ActiveHourDCDBInstanceResponse: ActiveHourDCDBInstanceResponse,
    DescribeDCDBPriceResponse: DescribeDCDBPriceResponse,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    TerminateDedicatedDBInstanceResponse: TerminateDedicatedDBInstanceResponse,
    FlushBinlogResponse: FlushBinlogResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    CancelDcnJobResponse: CancelDcnJobResponse,
    DescribeFileDownloadUrlRequest: DescribeFileDownloadUrlRequest,
    DescribeDBSyncModeResponse: DescribeDBSyncModeResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeDCDBUpgradePriceResponse: DescribeDCDBUpgradePriceResponse,
    DescribeDBSlowLogsRequest: DescribeDBSlowLogsRequest,
    CreateAccountRequest: CreateAccountRequest,
    DescribeDBParametersResponse: DescribeDBParametersResponse,
    IsolateHourDCDBInstanceRequest: IsolateHourDCDBInstanceRequest,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    DescribeFlowResponse: DescribeFlowResponse,
    CloneAccountResponse: CloneAccountResponse,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    DestroyDCDBInstanceRequest: DestroyDCDBInstanceRequest,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    CreateDCDBInstanceResponse: CreateDCDBInstanceResponse,
    BriefNodeInfo: BriefNodeInfo,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DescribeDCDBInstanceNodeInfoRequest: DescribeDCDBInstanceNodeInfoRequest,
    DatabaseView: DatabaseView,
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    CreateDedicatedClusterDCDBInstanceRequest: CreateDedicatedClusterDCDBInstanceRequest,
    CreateHourDCDBInstanceRequest: CreateHourDCDBInstanceRequest,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    CopyAccountPrivilegesResponse: CopyAccountPrivilegesResponse,
    CloneAccountRequest: CloneAccountRequest,
    DescribeDCDBRenewalPriceRequest: DescribeDCDBRenewalPriceRequest,
    ParamModifyResult: ParamModifyResult,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    DatabaseProcedure: DatabaseProcedure,
    DescribeDCDBPriceRequest: DescribeDCDBPriceRequest,
    SwitchDBInstanceHAResponse: SwitchDBInstanceHAResponse,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DatabaseFunction: DatabaseFunction,
    DescribeSqlLogsRequest: DescribeSqlLogsRequest,
    ParamConstraint: ParamConstraint,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    DescribeDCDBSaleInfoRequest: DescribeDCDBSaleInfoRequest,
    ModifyRealServerAccessStrategyRequest: ModifyRealServerAccessStrategyRequest,
    ExpandShardConfig: ExpandShardConfig,
    RenewDCDBInstanceRequest: RenewDCDBInstanceRequest,
    ShardZoneChooseInfo: ShardZoneChooseInfo,
    DatabaseTable: DatabaseTable,
    Deal: Deal,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    DescribeShardSpecRequest: DescribeShardSpecRequest,
    DescribeDCDBShardsRequest: DescribeDCDBShardsRequest,
    SwitchDBInstanceHARequest: SwitchDBInstanceHARequest,
    DBParamValue: DBParamValue,
    SpecConfigInfo: SpecConfigInfo,
    ModifyDBParametersRequest: ModifyDBParametersRequest,
    DCDBInstanceInfo: DCDBInstanceInfo,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeDcnDetailRequest: DescribeDcnDetailRequest,
    DescribeFileDownloadUrlResponse: DescribeFileDownloadUrlResponse,
    ModifyDBParametersResponse: ModifyDBParametersResponse,
    DCDBShardInfo: DCDBShardInfo,
    CopyAccountPrivilegesRequest: CopyAccountPrivilegesRequest,
    SecurityGroup: SecurityGroup,
    DescribeDatabaseTableRequest: DescribeDatabaseTableRequest,
    DescribeDCDBInstanceNodeInfoResponse: DescribeDCDBInstanceNodeInfoResponse,
    KillSessionRequest: KillSessionRequest,
    TerminateDedicatedDBInstanceRequest: TerminateDedicatedDBInstanceRequest,
    DescribeDatabaseObjectsResponse: DescribeDatabaseObjectsResponse,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    DescribeDcnDetailResponse: DescribeDcnDetailResponse,
    TableColumn: TableColumn,
    SecurityGroupBound: SecurityGroupBound,
    SplitShardConfig: SplitShardConfig,
    RenewDCDBInstanceResponse: RenewDCDBInstanceResponse,
    DescribeShardSpecResponse: DescribeShardSpecResponse,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DescribeDCDBRenewalPriceResponse: DescribeDCDBRenewalPriceResponse,
    DescribeDCDBShardsResponse: DescribeDCDBShardsResponse,
    ZonesInfo: ZonesInfo,
    CreateHourDCDBInstanceResponse: CreateHourDCDBInstanceResponse,
    Database: Database,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    CancelDcnJobRequest: CancelDcnJobRequest,
    IsolateHourDCDBInstanceResponse: IsolateHourDCDBInstanceResponse,
    ShardInfo: ShardInfo,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    DescribeDCDBSaleInfoResponse: DescribeDCDBSaleInfoResponse,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    DcnDetailItem: DcnDetailItem,
    DescribeDBSyncModeRequest: DescribeDBSyncModeRequest,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    KillSessionResponse: KillSessionResponse,
    SlowLogData: SlowLogData,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    InitDCDBInstancesRequest: InitDCDBInstancesRequest,
    ResourceTag: ResourceTag,
    DescribeSqlLogsResponse: DescribeSqlLogsResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    DescribeDCDBInstancesResponse: DescribeDCDBInstancesResponse,
    DescribeFlowRequest: DescribeFlowRequest,
    CreateDCDBInstanceRequest: CreateDCDBInstanceRequest,
    DescribeDCDBUpgradePriceRequest: DescribeDCDBUpgradePriceRequest,
    CreateDedicatedClusterDCDBInstanceResponse: CreateDedicatedClusterDCDBInstanceResponse,
    UserTaskInfo: UserTaskInfo,
    DescribeProjectsRequest: DescribeProjectsRequest,
    AddShardConfig: AddShardConfig,
    ModifyDBSyncModeRequest: ModifyDBSyncModeRequest,
    DescribeProjectsResponse: DescribeProjectsResponse,
    CreateAccountResponse: CreateAccountResponse,
    RegionInfo: RegionInfo,
    DescribeDatabaseObjectsRequest: DescribeDatabaseObjectsRequest,
    UpgradeDCDBInstanceRequest: UpgradeDCDBInstanceRequest,
    DestroyHourDCDBInstanceResponse: DestroyHourDCDBInstanceResponse,
    ConstraintRange: ConstraintRange,
    LogFileInfo: LogFileInfo,
    ActiveHourDCDBInstanceRequest: ActiveHourDCDBInstanceRequest,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    DBAccount: DBAccount,
    DescribeDatabaseTableResponse: DescribeDatabaseTableResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    SqlLogItem: SqlLogItem,
    DescribeAccountsResponse: DescribeAccountsResponse,
    DescribeDBSlowLogsResponse: DescribeDBSlowLogsResponse,
    DescribeDCDBInstancesRequest: DescribeDCDBInstancesRequest,
    Project: Project,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DestroyHourDCDBInstanceRequest: DestroyHourDCDBInstanceRequest,
    FlushBinlogRequest: FlushBinlogRequest,
    ModifyDBSyncModeResponse: ModifyDBSyncModeResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DescribeUserTasksRequest: DescribeUserTasksRequest,
    DeleteAccountResponse: DeleteAccountResponse,

}
