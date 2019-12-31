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
 * UnBindingAllPolicyObject请求参数结构体
 * @class
 */
class UnBindingAllPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组id
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DeletePolicyGroup返回参数结构体
 * @class
 */
class DeletePolicyGroupResponse extends  AbstractModel {
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
 * DescribeAccidentEventList接口的出参类型
 * @class
 */
class DescribeAccidentEventListAlarms extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessTypeDesc = null;

        /**
         * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccidentTypeDesc = null;

        /**
         * 事件分类的ID，1表示服务问题，2表示其他订阅
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BusinessID = null;

        /**
         * 事件状态的ID，0表示已恢复，1表示未恢复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventStatus = null;

        /**
         * 影响的对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AffectResource = null;

        /**
         * 事件的地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 事件发生的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OccurTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.BusinessTypeDesc = 'BusinessTypeDesc' in params ? params.BusinessTypeDesc : null;
        this.AccidentTypeDesc = 'AccidentTypeDesc' in params ? params.AccidentTypeDesc : null;
        this.BusinessID = 'BusinessID' in params ? params.BusinessID : null;
        this.EventStatus = 'EventStatus' in params ? params.EventStatus : null;
        this.AffectResource = 'AffectResource' in params ? params.AffectResource : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.OccurTime = 'OccurTime' in params ? params.OccurTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 创建策略传入的事件告警条件
 * @class
 */
class CreatePolicyGroupEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警事件的Id
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 如果通过模版创建，需要传入模版中该指标的对应RuleId
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeProductEventList请求参数结构体
 * @class
 */
class DescribeProductEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口模块名，固定值"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 产品类型过滤，比如"cvm"表示云服务器
         * @type {Array.<string> || null}
         */
        this.ProductName = null;

        /**
         * 事件名称过滤，比如"guest_reboot"表示机器重启
         * @type {Array.<string> || null}
         */
        this.EventName = null;

        /**
         * 影响对象，比如ins-19708ino
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * 维度过滤，比如外网IP:10.0.0.1
         * @type {Array.<DescribeProductEventListDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * 地域过滤，比如gz
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * 事件类型过滤，取值范围["status_change","abnormal"]，分别表示状态变更、异常事件
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 事件状态过滤，取值范围["recover","alarm","-"]，分别表示已恢复、未恢复、无状态
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 项目ID过滤
         * @type {Array.<string> || null}
         */
        this.Project = null;

        /**
         * 告警状态配置过滤，1表示已配置，0表示未配置
         * @type {number || null}
         */
        this.IsAlarmConfig = null;

        /**
         * 按更新时间排序，ASC表示升序，DESC表示降序，默认DESC
         * @type {string || null}
         */
        this.TimeOrder = null;

        /**
         * 起始时间，默认一天前的时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认当前时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 页偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页返回的数量，默认20
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
        this.Module = 'Module' in params ? params.Module : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeProductEventListDimensions();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.IsAlarmConfig = 'IsAlarmConfig' in params ? params.IsAlarmConfig : null;
        this.TimeOrder = 'TimeOrder' in params ? params.TimeOrder : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 实例维度组合数组
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的维度组合
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * 维度信息
 * @class
 */
class DimensionsDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度名数组
         * @type {Array.<string> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * 策略绑定实例维度信息
 * @class
 */
class BindingPolicyObjectDimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 维度信息
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * 事件维度信息
         * @type {string || null}
         */
        this.EventDimensions = null;

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
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.EventDimensions = 'EventDimensions' in params ? params.EventDimensions : null;

    }
}

/**
 * CreatePolicyGroup请求参数结构体
 * @class
 */
class CreatePolicyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组策略名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组所属视图的名称，若通过模版创建，可不传入
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 策略组所属项目Id，会进行鉴权操作
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 模版策略组Id, 通过模版创建时才需要传
         * @type {number || null}
         */
        this.ConditionTempGroupId = null;

        /**
         * 是否屏蔽策略组，0表示不屏蔽，1表示屏蔽。不填默认为0
         * @type {number || null}
         */
        this.IsShielded = null;

        /**
         * 策略组的备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 插入时间，戳格式为Unix时间戳，不填则按后台处理时间填充
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 策略组中的阈值告警规则
         * @type {Array.<CreatePolicyGroupCondition> || null}
         */
        this.Conditions = null;

        /**
         * 策略组中的时间告警规则
         * @type {Array.<CreatePolicyGroupEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * 是否为后端调用。当且仅当值为1时，后台拉取策略模版中的规则填充入Conditions以及EventConditions字段
         * @type {number || null}
         */
        this.BackEndCall = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;
        this.IsShielded = 'IsShielded' in params ? params.IsShielded : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new CreatePolicyGroupCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new CreatePolicyGroupEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }
        this.BackEndCall = 'BackEndCall' in params ? params.BackEndCall : null;

    }
}

/**
 * 创建策略传入的阈值告警条件
 * @class
 */
class CreatePolicyGroupCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标Id
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等。如果指标有配置默认比较类型值可以不填。
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * 比较的值，如果指标不必须CalcValue可不填
         * @type {number || null}
         */
        this.CalcValue = null;

        /**
         * 数据聚合周期(单位秒)，若指标有默认值可不填
         * @type {number || null}
         */
        this.CalcPeriod = null;

        /**
         * 持续几个检测周期触发规则会告警
         * @type {number || null}
         */
        this.ContinuePeriod = null;

        /**
         * 如果通过模版创建，需要传入模版中该指标的对应RuleId
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.CalcPeriod = 'CalcPeriod' in params ? params.CalcPeriod : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 查询策略输出的告警接收人信息
 * @class
 */
class DescribePolicyGroupInfoReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警接收组id列表
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * 告警接收人id列表
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

        /**
         * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 告警时间段结束时间。含义同StartTime
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 接收类型。“group”(接收组)或“user”(接收人)
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UidList = null;

        /**
         * 电话告警轮数
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * 电话告警每轮间隔（秒）
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * 电话告警对个人间隔（秒）
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * 是否需要电话告警触达提示。0不需要，1需要
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * 恢复通知方式。可选"SMS"
         * @type {Array.<string> || null}
         */
        this.RecoverNotify = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.UidList = 'UidList' in params ? params.UidList : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;

    }
}

/**
 * BindingPolicyObject请求参数结构体
 * @class
 */
class BindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略分组Id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 必填。固定值"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 实例分组ID
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 需要绑定的对象维度信息
         * @type {Array.<BindingPolicyObjectDimension> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new BindingPolicyObjectDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * PutMonitorData返回参数结构体
 * @class
 */
class PutMonitorDataResponse extends  AbstractModel {
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
 * DescribePolicyGroupInfo请求参数结构体
 * @class
 */
class DescribePolicyGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组id
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 接收人信息
 * @class
 */
class ReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 告警时间段结束时间。含义同StartTime
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 接收人类型。“group” 或 “user”
         * @type {Array.<string> || null}
         */
        this.ReceiverType = null;

        /**
         * Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * 电话告警接收者uid
         * @type {Array.<number> || null}
         */
        this.UidList = null;

        /**
         * 电话告警轮数
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * 电话告警对个人间隔（秒）
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * 电话告警每轮间隔（秒）
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * 恢复通知方式。可选"SMS"
         * @type {Array.<string> || null}
         */
        this.RecoverNotify = null;

        /**
         * 是否需要电话告警触达提示。0不需要，1需要
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * 接收组列表。通过平台接口查询到的接收组id列表
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * 接收人列表。通过平台接口查询到的接收人id列表
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.UidList = 'UidList' in params ? params.UidList : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;

    }
}

/**
 * DescribeProductEventList返回的Events
 * @class
 */
class DescribeProductEventListEvents extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 事件中文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventCName = null;

        /**
         * 事件英文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventEName = null;

        /**
         * 事件简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 产品中文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductCName = null;

        /**
         * 产品英文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductEName = null;

        /**
         * 产品简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 是否支持告警
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SupportAlarm = null;

        /**
         * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 实例对象信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeProductEventListEventsDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * 实例对象附加信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeProductEventListEventsDimensions> || null}
         */
        this.AdditionMsg = null;

        /**
         * 是否配置告警
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAlarmConfig = null;

        /**
         * 策略信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeProductEventListEventsGroupInfo> || null}
         */
        this.GroupInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventCName = 'EventCName' in params ? params.EventCName : null;
        this.EventEName = 'EventEName' in params ? params.EventEName : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.ProductCName = 'ProductCName' in params ? params.ProductCName : null;
        this.ProductEName = 'ProductEName' in params ? params.ProductEName : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SupportAlarm = 'SupportAlarm' in params ? params.SupportAlarm : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeProductEventListEventsDimensions();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

        if (params.AdditionMsg) {
            this.AdditionMsg = new Array();
            for (let z in params.AdditionMsg) {
                let obj = new DescribeProductEventListEventsDimensions();
                obj.deserialize(params.AdditionMsg[z]);
                this.AdditionMsg.push(obj);
            }
        }
        this.IsAlarmConfig = 'IsAlarmConfig' in params ? params.IsAlarmConfig : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new DescribeProductEventListEventsGroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }

    }
}

/**
 * GetMonitorData请求参数结构体
 * @class
 */
class GetMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间，每个云产品会有一个命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名称，各个云产品的详细指标说明请参阅各个产品[监控接口](https://cloud.tencent.com/document/product/248/30384)文档
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 实例对象的维度组合
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

        /**
         * 监控统计周期。默认为取值为300，单位为s
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 起始时间，如2018-09-22T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认为当前时间。 EndTime不能小于StartTime
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 周期内的统计方式
 * @class
 */
class PeriodsSt extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周期
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 统计方式
         * @type {Array.<string> || null}
         */
        this.StatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StatType = 'StatType' in params ? params.StatType : null;

    }
}

/**
 * DescribeAccidentEventList请求参数结构体
 * @class
 */
class DescribeAccidentEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口模块名，当前接口取值monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 起始时间，默认一天前的时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认当前时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 每页返回的数量，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 根据UpdateTime排序的规则，取值asc或desc
         * @type {string || null}
         */
        this.UpdateTimeOrder = null;

        /**
         * 根据OccurTime排序的规则，取值asc或desc（优先根据UpdateTimeOrder排序）
         * @type {string || null}
         */
        this.OccurTimeOrder = null;

        /**
         * 根据事件类型过滤，1表示服务问题，2表示其他订阅
         * @type {Array.<number> || null}
         */
        this.AccidentType = null;

        /**
         * 根据事件过滤，1表示云服务器存储问题，2表示云服务器网络连接问题，3表示云服务器运行异常，202表示运营商网络抖动
         * @type {Array.<number> || null}
         */
        this.AccidentEvent = null;

        /**
         * 根据事件状态过滤，0表示已恢复，1表示未恢复
         * @type {Array.<number> || null}
         */
        this.AccidentStatus = null;

        /**
         * 根据事件地域过滤，gz表示广州，sh表示上海等
         * @type {Array.<string> || null}
         */
        this.AccidentRegion = null;

        /**
         * 根据影响资源过滤，比如ins-19a06bka
         * @type {string || null}
         */
        this.AffectResource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.OccurTimeOrder = 'OccurTimeOrder' in params ? params.OccurTimeOrder : null;
        this.AccidentType = 'AccidentType' in params ? params.AccidentType : null;
        this.AccidentEvent = 'AccidentEvent' in params ? params.AccidentEvent : null;
        this.AccidentStatus = 'AccidentStatus' in params ? params.AccidentStatus : null;
        this.AccidentRegion = 'AccidentRegion' in params ? params.AccidentRegion : null;
        this.AffectResource = 'AffectResource' in params ? params.AffectResource : null;

    }
}

/**
 * DescribeProductEventList返回的OverView对象
 * @class
 */
class DescribeProductEventListOverView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态变更的事件数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StatusChangeAmount = null;

        /**
         * 告警状态未配置的事件数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnConfigAlarmAmount = null;

        /**
         * 异常事件数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnNormalEventAmount = null;

        /**
         * 未恢复的事件数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnRecoverAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusChangeAmount = 'StatusChangeAmount' in params ? params.StatusChangeAmount : null;
        this.UnConfigAlarmAmount = 'UnConfigAlarmAmount' in params ? params.UnConfigAlarmAmount : null;
        this.UnNormalEventAmount = 'UnNormalEventAmount' in params ? params.UnNormalEventAmount : null;
        this.UnRecoverAmount = 'UnRecoverAmount' in params ? params.UnRecoverAmount : null;

    }
}

/**
 * 指标数据的解释
 * @class
 */
class MetricObjectMeaning extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标英文解释
         * @type {string || null}
         */
        this.En = null;

        /**
         * 指标中文解释
         * @type {string || null}
         */
        this.Zh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.En = 'En' in params ? params.En : null;
        this.Zh = 'Zh' in params ? params.Zh : null;

    }
}

/**
 * 指标名称和值的封装
 * @class
 */
class MetricDatum extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标的值
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeletePolicyGroup请求参数结构体
 * @class
 */
class DeletePolicyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组id
         * @type {Array.<number> || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 查询策略输出的用户回调信息
 * @class
 */
class DescribePolicyGroupInfoCallback extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户回调接口地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 用户回调接口状态，0表示未验证，1表示已验证，2表示存在url但没有通过验证
         * @type {number || null}
         */
        this.ValidFlag = null;

        /**
         * 用户回调接口验证码
         * @type {string || null}
         */
        this.VerifyCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ValidFlag = 'ValidFlag' in params ? params.ValidFlag : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;

    }
}

/**
 * DescribeProductEventList返回的Events里的GroupInfo
 * @class
 */
class DescribeProductEventListEventsGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * UnBindingPolicyObject返回参数结构体
 * @class
 */
class UnBindingPolicyObjectResponse extends  AbstractModel {
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
 * DescribeProductEventList的入参Dimensions
 * @class
 */
class DescribeProductEventListDimensions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 维度值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePolicyGroupInfo返回参数结构体
 * @class
 */
class DescribePolicyGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 策略组所属的项目id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 是否为默认策略，0表示非默认策略，1表示默认策略
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 策略类型
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 策略说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 策略类型名称
         * @type {string || null}
         */
        this.ShowName = null;

        /**
         * 最近编辑的用户uin
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * 最近编辑时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 该策略支持的地域
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * 策略类型的维度列表
         * @type {Array.<string> || null}
         */
        this.DimensionGroup = null;

        /**
         * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupInfoCondition> || null}
         */
        this.ConditionsConfig = null;

        /**
         * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupInfoEventCondition> || null}
         */
        this.EventConfig = null;

        /**
         * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupInfoReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

        /**
         * 用户回调信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyGroupInfoCallback || null}
         */
        this.Callback = null;

        /**
         * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyGroupInfoConditionTpl || null}
         */
        this.ConditionsTemp = null;

        /**
         * 是否可以设置成默认策略
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ShowName = 'ShowName' in params ? params.ShowName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DimensionGroup = 'DimensionGroup' in params ? params.DimensionGroup : null;

        if (params.ConditionsConfig) {
            this.ConditionsConfig = new Array();
            for (let z in params.ConditionsConfig) {
                let obj = new DescribePolicyGroupInfoCondition();
                obj.deserialize(params.ConditionsConfig[z]);
                this.ConditionsConfig.push(obj);
            }
        }

        if (params.EventConfig) {
            this.EventConfig = new Array();
            for (let z in params.EventConfig) {
                let obj = new DescribePolicyGroupInfoEventCondition();
                obj.deserialize(params.EventConfig[z]);
                this.EventConfig.push(obj);
            }
        }

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new DescribePolicyGroupInfoReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

        if (params.Callback) {
            let obj = new DescribePolicyGroupInfoCallback();
            obj.deserialize(params.Callback)
            this.Callback = obj;
        }

        if (params.ConditionsTemp) {
            let obj = new DescribePolicyGroupInfoConditionTpl();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarmReceivers请求参数结构体
 * @class
 */
class ModifyAlarmReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改接收人的策略组Id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 必填。固定为“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 新接收人信息, 没有填写则删除所有接收人
         * @type {Array.<ReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Module = 'Module' in params ? params.Module : null;

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new ReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

    }
}

/**
 * 查询策略输出的阈值告警条件
 * @class
 */
class DescribePolicyGroupInfoCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricShowName = null;

        /**
         * 数据聚合周期(单位秒)
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 指标id
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * 阈值规则id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 指标单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等，7表示日同比上涨，8表示日同比下降，9表示周同比上涨，10表示周同比下降，11表示周期环比上涨，12表示周期环比下降
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * 检测阈值
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * 持续多长时间触发规则会告警(单位秒)
         * @type {number || null}
         */
        this.ContinueTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricShowName = 'MetricShowName' in params ? params.MetricShowName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.ContinueTime = 'ContinueTime' in params ? params.ContinueTime : null;

    }
}

/**
 * GetMonitorData返回参数结构体
 * @class
 */
class GetMonitorDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 数据点数组
         * @type {Array.<DataPoint> || null}
         */
        this.DataPoints = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

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
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.DataPoints) {
            this.DataPoints = new Array();
            for (let z in params.DataPoints) {
                let obj = new DataPoint();
                obj.deserialize(params.DataPoints[z]);
                this.DataPoints.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对业务指标的单位及支持统计周期的描述
 * @class
 */
class MetricSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间，每个云产品会有一个命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标使用的单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标使用的单位
         * @type {string || null}
         */
        this.UnitCname = null;

        /**
         * 指标支持的统计周期，单位是秒，如60、300
         * @type {Array.<number> || null}
         */
        this.Period = null;

        /**
         * 统计周期内指标方式
         * @type {Array.<PeriodsSt> || null}
         */
        this.Periods = null;

        /**
         * 统计指标含义解释
         * @type {MetricObjectMeaning || null}
         */
        this.Meaning = null;

        /**
         * 维度描述信息
         * @type {Array.<DimensionsDesc> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.UnitCname = 'UnitCname' in params ? params.UnitCname : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Periods) {
            this.Periods = new Array();
            for (let z in params.Periods) {
                let obj = new PeriodsSt();
                obj.deserialize(params.Periods[z]);
                this.Periods.push(obj);
            }
        }

        if (params.Meaning) {
            let obj = new MetricObjectMeaning();
            obj.deserialize(params.Meaning)
            this.Meaning = obj;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DimensionsDesc();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * DescribeBindingPolicyObjectList返回参数结构体
 * @class
 */
class DescribeBindingPolicyObjectListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的对象实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeBindingPolicyObjectListInstance> || null}
         */
        this.List = null;

        /**
         * 绑定的对象实例总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 未屏蔽的对象实例数
         * @type {number || null}
         */
        this.NoShieldedSum = null;

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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DescribeBindingPolicyObjectListInstance();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.NoShieldedSum = 'NoShieldedSum' in params ? params.NoShieldedSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询策略输出的模板策略组信息
 * @class
 */
class DescribePolicyGroupInfoConditionTpl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略组id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 策略组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 策略类型
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 策略组说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 最后编辑的用户uin
         * @type {string || null}
         */
        this.LastEditUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;

    }
}

/**
 * DescribeBindingPolicyObjectList请求参数结构体
 * @class
 */
class DescribeBindingPolicyObjectListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组id
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreatePolicyGroup返回参数结构体
 * @class
 */
class CreatePolicyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的策略组Id
         * @type {number || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutMonitorData请求参数结构体
 * @class
 */
class PutMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一组指标和数据
         * @type {Array.<MetricDatum> || null}
         */
        this.Metrics = null;

        /**
         * 上报时自行指定的 IP
         * @type {string || null}
         */
        this.AnnounceIp = null;

        /**
         * 上报时自行指定的时间戳
         * @type {number || null}
         */
        this.AnnounceTimestamp = null;

        /**
         * 上报时自行指定的 IP 或 产品实例ID
         * @type {string || null}
         */
        this.AnnounceInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricDatum();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.AnnounceIp = 'AnnounceIp' in params ? params.AnnounceIp : null;
        this.AnnounceTimestamp = 'AnnounceTimestamp' in params ? params.AnnounceTimestamp : null;
        this.AnnounceInstance = 'AnnounceInstance' in params ? params.AnnounceInstance : null;

    }
}

/**
 * 查询策略输出的事件告警条件
 * @class
 */
class DescribePolicyGroupInfoEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件id
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 事件告警规则id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 事件名称
         * @type {string || null}
         */
        this.EventShowName = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventShowName = 'EventShowName' in params ? params.EventShowName : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;

    }
}

/**
 * DescribeBaseMetrics返回参数结构体
 * @class
 */
class DescribeBaseMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询得到的指标描述列表
         * @type {Array.<MetricSet> || null}
         */
        this.MetricSet = null;

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

        if (params.MetricSet) {
            this.MetricSet = new Array();
            for (let z in params.MetricSet) {
                let obj = new MetricSet();
                obj.deserialize(params.MetricSet[z]);
                this.MetricSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询策略绑定对象列表接口返回的对象实例信息
 * @class
 */
class DescribeBindingPolicyObjectListInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象唯一id
         * @type {string || null}
         */
        this.UniqueId = null;

        /**
         * 表示对象实例的维度集合，jsonObj字符串
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * 对象是否被屏蔽，0表示未屏蔽，1表示被屏蔽
         * @type {number || null}
         */
        this.IsShielded = null;

        /**
         * 对象所在的地域
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.IsShielded = 'IsShielded' in params ? params.IsShielded : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * UnBindingPolicyObject请求参数结构体
 * @class
 */
class UnBindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 待删除对象实例的唯一id列表
         * @type {Array.<string> || null}
         */
        this.UniqueId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;

    }
}

/**
 * DescribeAccidentEventList返回参数结构体
 * @class
 */
class DescribeAccidentEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeAccidentEventListAlarms> || null}
         */
        this.Alarms = null;

        /**
         * 平台事件的总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new DescribeAccidentEventListAlarms();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductEventList返回参数结构体
 * @class
 */
class DescribeProductEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeProductEventListEvents> || null}
         */
        this.Events = null;

        /**
         * 事件统计
         * @type {DescribeProductEventListOverView || null}
         */
        this.OverView = null;

        /**
         * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new DescribeProductEventListEvents();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }

        if (params.OverView) {
            let obj = new DescribeProductEventListOverView();
            obj.deserialize(params.OverView)
            this.OverView = obj;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaseMetrics请求参数结构体
 * @class
 */
class DescribeBaseMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * 实例对象的维度组合
 * @class
 */
class Dimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例维度名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例维度值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 监控数据点
 * @class
 */
class DataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例对象维度组合
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

        /**
         * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
         * @type {Array.<number> || null}
         */
        this.Timestamps = null;

        /**
         * 监控值数组，该数组和Timestamps一一对应
         * @type {Array.<number> || null}
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

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * UnBindingAllPolicyObject返回参数结构体
 * @class
 */
class UnBindingAllPolicyObjectResponse extends  AbstractModel {
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
 * DescribeProductEventList返回的Events的Dimensions
 * @class
 */
class DescribeProductEventListEventsDimensions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度名（英文）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 维度名（中文）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 维度值
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ModifyAlarmReceivers返回参数结构体
 * @class
 */
class ModifyAlarmReceiversResponse extends  AbstractModel {
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
 * BindingPolicyObject返回参数结构体
 * @class
 */
class BindingPolicyObjectResponse extends  AbstractModel {
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
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    Instance: Instance,
    DimensionsDesc: DimensionsDesc,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    PutMonitorDataResponse: PutMonitorDataResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    ReceiverInfo: ReceiverInfo,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    GetMonitorDataRequest: GetMonitorDataRequest,
    PeriodsSt: PeriodsSt,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    MetricObjectMeaning: MetricObjectMeaning,
    MetricDatum: MetricDatum,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    GetMonitorDataResponse: GetMonitorDataResponse,
    MetricSet: MetricSet,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    PutMonitorDataRequest: PutMonitorDataRequest,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    Dimension: Dimension,
    DataPoint: DataPoint,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
