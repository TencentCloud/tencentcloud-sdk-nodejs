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
 * DescribePolicyConditionList.ConfigManual
 * @class
 */
class DescribePolicyConditionListConfigManual extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManualCalcType || null}
         */
        this.CalcType = null;

        /**
         * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManualCalcValue || null}
         */
        this.CalcValue = null;

        /**
         * 持续时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManualContinueTime || null}
         */
        this.ContinueTime = null;

        /**
         * 数据周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManualPeriod || null}
         */
        this.Period = null;

        /**
         * 持续周期个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManualPeriodNum || null}
         */
        this.PeriodNum = null;

        /**
         * 聚合方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManualStatType || null}
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

        if (params.CalcType) {
            let obj = new DescribePolicyConditionListConfigManualCalcType();
            obj.deserialize(params.CalcType)
            this.CalcType = obj;
        }

        if (params.CalcValue) {
            let obj = new DescribePolicyConditionListConfigManualCalcValue();
            obj.deserialize(params.CalcValue)
            this.CalcValue = obj;
        }

        if (params.ContinueTime) {
            let obj = new DescribePolicyConditionListConfigManualContinueTime();
            obj.deserialize(params.ContinueTime)
            this.ContinueTime = obj;
        }

        if (params.Period) {
            let obj = new DescribePolicyConditionListConfigManualPeriod();
            obj.deserialize(params.Period)
            this.Period = obj;
        }

        if (params.PeriodNum) {
            let obj = new DescribePolicyConditionListConfigManualPeriodNum();
            obj.deserialize(params.PeriodNum)
            this.PeriodNum = obj;
        }

        if (params.StatType) {
            let obj = new DescribePolicyConditionListConfigManualStatType();
            obj.deserialize(params.StatType)
            this.StatType = obj;
        }

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

        /**
         * 实例分组id, 如果按实例分组删除的话UniqueId参数是无效的
         * @type {number || null}
         */
        this.InstanceGroupId = null;

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
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

    }
}

/**
 * DescribePolicyConditionList请求参数结构体
 * @class
 */
class DescribePolicyConditionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;

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
 * DescribeProductList返回参数结构体
 * @class
 */
class DescribeProductListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProductSimple> || null}
         */
        this.ProductList = null;

        /**
         * 产品总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ProductList) {
            this.ProductList = new Array();
            for (let z in params.ProductList) {
                let obj = new ProductSimple();
                obj.deserialize(params.ProductList[z]);
                this.ProductList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * 指标告警配置
 * @class
 */
class DescribePolicyConditionListMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListConfigManual || null}
         */
        this.ConfigManual = null;

        /**
         * 指标id
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricShowName = null;

        /**
         * 指标单位
         * @type {string || null}
         */
        this.MetricUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConfigManual) {
            let obj = new DescribePolicyConditionListConfigManual();
            obj.deserialize(params.ConfigManual)
            this.ConfigManual = obj;
        }
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.MetricShowName = 'MetricShowName' in params ? params.MetricShowName : null;
        this.MetricUnit = 'MetricUnit' in params ? params.MetricUnit : null;

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
         * 策略组中的事件告警规则
         * @type {Array.<CreatePolicyGroupEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * 是否为后端调用。当且仅当值为1时，后台拉取策略模版中的规则填充入Conditions以及EventConditions字段
         * @type {number || null}
         */
        this.BackEndCall = null;

        /**
         * 指标告警规则的且或关系，0表示或规则(满足任意规则就告警)，1表示且规则(满足所有规则才告警)
         * @type {number || null}
         */
        this.IsUnionRule = null;

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
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

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

        /**
         * 告警发送语言
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReceiveLanguage = null;

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
        this.ReceiveLanguage = 'ReceiveLanguage' in params ? params.ReceiveLanguage : null;

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
 * ModifyPolicyGroup请求参数结构体
 * @class
 */
class ModifyPolicyGroupRequest extends  AbstractModel {
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
         * 告警类型
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 策略组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 指标告警条件的且或关系，1表示且告警，所有指标告警条件都达到才告警，0表示或告警，任意指标告警条件达到都告警
         * @type {number || null}
         */
        this.IsUnionRule = null;

        /**
         * 指标告警条件规则，不填表示删除已有的所有指标告警条件规则
         * @type {Array.<ModifyPolicyGroupCondition> || null}
         */
        this.Conditions = null;

        /**
         * 事件告警条件，不填表示删除已有的事件告警条件
         * @type {Array.<ModifyPolicyGroupEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * 模板策略组id
         * @type {number || null}
         */
        this.ConditionTempGroupId = null;

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
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ModifyPolicyGroupCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new ModifyPolicyGroupEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.Period
 * @class
 */
class DescribePolicyConditionListConfigManualPeriod extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Default = null;

        /**
         * 可选周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * 是否必须
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * DescribePolicyConditionList.EventMetric
 * @class
 */
class DescribePolicyConditionListEventMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件id
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 事件名称
         * @type {string || null}
         */
        this.EventShowName = null;

        /**
         * 是否需要恢复
         * @type {boolean || null}
         */
        this.NeedRecovered = null;

        /**
         * 事件类型，预留字段，当前固定取值为2
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventShowName = 'EventShowName' in params ? params.EventShowName : null;
        this.NeedRecovered = 'NeedRecovered' in params ? params.NeedRecovered : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribePolicyConditionList策略条件
 * @class
 */
class DescribePolicyConditionListCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略视图名称
         * @type {string || null}
         */
        this.PolicyViewName = null;

        /**
         * 事件告警条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyConditionListEventMetric> || null}
         */
        this.EventMetrics = null;

        /**
         * 是否支持多地域
         * @type {boolean || null}
         */
        this.IsSupportMultiRegion = null;

        /**
         * 指标告警条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyConditionListMetric> || null}
         */
        this.Metrics = null;

        /**
         * 策略类型名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 排序id
         * @type {number || null}
         */
        this.SortId = null;

        /**
         * 是否支持默认策略
         * @type {boolean || null}
         */
        this.SupportDefault = null;

        /**
         * 支持该策略类型的地域列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SupportRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyViewName = 'PolicyViewName' in params ? params.PolicyViewName : null;

        if (params.EventMetrics) {
            this.EventMetrics = new Array();
            for (let z in params.EventMetrics) {
                let obj = new DescribePolicyConditionListEventMetric();
                obj.deserialize(params.EventMetrics[z]);
                this.EventMetrics.push(obj);
            }
        }
        this.IsSupportMultiRegion = 'IsSupportMultiRegion' in params ? params.IsSupportMultiRegion : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new DescribePolicyConditionListMetric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.SupportDefault = 'SupportDefault' in params ? params.SupportDefault : null;
        this.SupportRegions = 'SupportRegions' in params ? params.SupportRegions : null;

    }
}

/**
 * DescribeBasicAlarmList请求参数结构体
 * @class
 */
class DescribeBasicAlarmListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口模块名，当前取值monitor
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
         * 分页参数，每页返回的数量，取值1~100，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 根据发生时间排序，取值ASC或DESC
         * @type {string || null}
         */
        this.OccurTimeOrder = null;

        /**
         * 根据项目ID过滤
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 根据策略类型过滤
         * @type {Array.<string> || null}
         */
        this.ViewNames = null;

        /**
         * 根据告警状态过滤
         * @type {Array.<number> || null}
         */
        this.AlarmStatus = null;

        /**
         * 根据告警对象过滤
         * @type {string || null}
         */
        this.ObjLike = null;

        /**
         * 根据实例组ID过滤
         * @type {Array.<number> || null}
         */
        this.InstanceGroupIds = null;

        /**
         * 根据指标名过滤
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

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
        this.OccurTimeOrder = 'OccurTimeOrder' in params ? params.OccurTimeOrder : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ViewNames = 'ViewNames' in params ? params.ViewNames : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.ObjLike = 'ObjLike' in params ? params.ObjLike : null;
        this.InstanceGroupIds = 'InstanceGroupIds' in params ? params.InstanceGroupIds : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;

    }
}

/**
 * DescribePolicyGroupList返回参数结构体
 * @class
 */
class DescribePolicyGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupListGroup> || null}
         */
        this.GroupList = null;

        /**
         * 策略组总数
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

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribePolicyGroupListGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
 * DescribePolicyGroupList.Group
 * @class
 */
class DescribePolicyGroupListGroup extends  AbstractModel {
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
         * 是否开启
         * @type {boolean || null}
         */
        this.IsOpen = null;

        /**
         * 策略视图名称
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 最近编辑的用户uin
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * 最后修改时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 策略组绑定的实例数
         * @type {number || null}
         */
        this.UseSum = null;

        /**
         * 策略组绑定的未屏蔽实例数
         * @type {number || null}
         */
        this.NoShieldedSum = null;

        /**
         * 是否为默认策略，0表示非默认策略，1表示默认策略
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 是否可以设置成默认策略
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

        /**
         * 父策略组id
         * @type {number || null}
         */
        this.ParentGroupId = null;

        /**
         * 策略组备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 策略组所属项目id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupInfoCondition> || null}
         */
        this.Conditions = null;

        /**
         * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupInfoEventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribePolicyGroupInfoReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

        /**
         * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyGroupInfoConditionTpl || null}
         */
        this.ConditionsTemp = null;

        /**
         * 策略组绑定的实例组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyGroupListGroupInstanceGroup || null}
         */
        this.InstanceGroup = null;

        /**
         * 且或规则标识, 0表示或规则(任意一条规则满足阈值条件就告警), 1表示且规则(所有规则都满足阈值条件才告警)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsUnionRule = null;

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
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.UseSum = 'UseSum' in params ? params.UseSum : null;
        this.NoShieldedSum = 'NoShieldedSum' in params ? params.NoShieldedSum : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.ParentGroupId = 'ParentGroupId' in params ? params.ParentGroupId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribePolicyGroupInfoCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new DescribePolicyGroupInfoEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
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

        if (params.ConditionsTemp) {
            let obj = new DescribePolicyGroupInfoConditionTpl();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }

        if (params.InstanceGroup) {
            let obj = new DescribePolicyGroupListGroupInstanceGroup();
            obj.deserialize(params.InstanceGroup)
            this.InstanceGroup = obj;
        }
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * DescribeBasicAlarmList返回的Alarms
 * @class
 */
class DescribeBasicAlarmListAlarms extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该条告警的ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 告警状态ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 告警状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmStatus = null;

        /**
         * 策略组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 策略组名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 发生时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstOccurTime = null;

        /**
         * 持续时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastOccurTime = null;

        /**
         * 告警内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 告警对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObjName = null;

        /**
         * 告警对象ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObjId = null;

        /**
         * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * VPC，只有CVM有
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vpc = null;

        /**
         * 指标ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * 指标名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 告警类型，0表示指标告警，2表示产品事件告警，3表示平台事件告警
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 告警对象维度信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * 通知方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 所属实例组信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceGroup> || null}
         */
        this.InstanceGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.FirstOccurTime = 'FirstOccurTime' in params ? params.FirstOccurTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.LastOccurTime = 'LastOccurTime' in params ? params.LastOccurTime : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ObjName = 'ObjName' in params ? params.ObjName : null;
        this.ObjId = 'ObjId' in params ? params.ObjId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;

        if (params.InstanceGroup) {
            this.InstanceGroup = new Array();
            for (let z in params.InstanceGroup) {
                let obj = new InstanceGroup();
                obj.deserialize(params.InstanceGroup[z]);
                this.InstanceGroup.push(obj);
            }
        }

    }
}

/**
 * DescribeProductList请求参数结构体
 * @class
 */
class DescribeProductListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定传值monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 排序方式：DESC/ASC（区分大小写），默认值DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 分页查询的偏移量，默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询的每页数据量，默认值20
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
        this.Order = 'Order' in params ? params.Order : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 分页参数，每页返回的数量，取值1~100，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数，默认0
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
 * DescribeBindingPolicyObjectList返回的是实例分组信息
 * @class
 */
class DescribeBindingPolicyObjectListInstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例分组id
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 告警策略类型名称
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 最后编辑uin
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * 实例分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 实例所在的地域集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * DescribePolicyConditionList返回参数结构体
 * @class
 */
class DescribePolicyConditionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略条件列表
         * @type {Array.<DescribePolicyConditionListCondition> || null}
         */
        this.Conditions = null;

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

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribePolicyConditionListCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.CalcType
 * @class
 */
class DescribePolicyConditionListConfigManualCalcType extends  AbstractModel {
    constructor(){
        super();

        /**
         * CalcType 取值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * 是否必须
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * ModifyPolicyGroup返回参数结构体
 * @class
 */
class ModifyPolicyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略组id
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
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * ReceiverId
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

        /**
         * 告警接收语言，枚举值（zh-CN，en-US）
         * @type {string || null}
         */
        this.ReceiveLanguage = null;

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
        this.ReceiveLanguage = 'ReceiveLanguage' in params ? params.ReceiveLanguage : null;

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
         * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsUnionRule = null;

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
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBasicAlarmList返回参数结构体
 * @class
 */
class DescribeBasicAlarmListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeBasicAlarmListAlarms> || null}
         */
        this.Alarms = null;

        /**
         * 总数
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
                let obj = new DescribeBasicAlarmListAlarms();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云监控支持的产品简要信息
 * @class
 */
class ProductSimple extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 产品中文名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品英文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductEnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductEnName = 'ProductEnName' in params ? params.ProductEnName : null;

    }
}

/**
 * DescribeBindingPolicyObjectList接口的Dimension
 * @class
 */
class DescribeBindingPolicyObjectListDimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域id
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域简称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 维度组合json字符串
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * 事件维度组合json字符串
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.EventDimensions = 'EventDimensions' in params ? params.EventDimensions : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * 持续多长时间触发规则会告警(单位秒)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContinueTime = null;

        /**
         * 告警指标名
注意：此字段可能返回 null，表示取不到有效值。
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

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
         * 绑定的实例分组信息，没有绑定实例分组则为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeBindingPolicyObjectListInstanceGroup || null}
         */
        this.InstanceGroup = null;

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

        if (params.InstanceGroup) {
            let obj = new DescribeBindingPolicyObjectListInstanceGroup();
            obj.deserialize(params.InstanceGroup)
            this.InstanceGroup = obj;
        }
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

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsUnionRule = null;

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
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

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

        /**
         * 分页参数，每页返回的数量，取值1~100，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 筛选对象的维度信息
         * @type {Array.<DescribeBindingPolicyObjectListDimension> || null}
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
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeBindingPolicyObjectListDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

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
 * DescribeBasicAlarmList返回的Alarms里的InstanceGroup
 * @class
 */
class InstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 实例组名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.InstanceGroupName = 'InstanceGroupName' in params ? params.InstanceGroupName : null;

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
 * SendCustomAlarmMsg返回参数结构体
 * @class
 */
class SendCustomAlarmMsgResponse extends  AbstractModel {
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
 * GetMonitorData请求参数结构体
 * @class
 */
class GetMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间，各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名称，各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
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
 * DescribePolicyConditionList.ConfigManual.PeriodNum
 * @class
 */
class DescribePolicyConditionListConfigManualPeriodNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认周期数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Default = null;

        /**
         * 可选周期数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * 是否必须
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

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
 * 修改告警策略组传入的指标阈值条件
 * @class
 */
class ModifyPolicyGroupCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标id
         * @type {number || null}
         */
        this.MetricId = null;

        /**
         * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等
         * @type {number || null}
         */
        this.CalcType = null;

        /**
         * 检测阈值
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * 检测指标的数据周期
         * @type {number || null}
         */
        this.CalcPeriod = null;

        /**
         * 持续周期个数
         * @type {number || null}
         */
        this.ContinuePeriod = null;

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
         * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
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
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.CalcPeriod = 'CalcPeriod' in params ? params.CalcPeriod : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 修改告警策略组传入的事件告警条件
 * @class
 */
class ModifyPolicyGroupEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件id
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
         * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
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
 * DescribePolicyConditionList.ConfigManual.ContinueTime
 * @class
 */
class DescribePolicyConditionListConfigManualContinueTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Default = null;

        /**
         * 可选持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Keys = null;

        /**
         * 是否必须
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * DescribePolicyGroupList请求参数结构体
 * @class
 */
class DescribePolicyGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 分页参数，每页返回的数量，取值1~100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 按策略名搜索
         * @type {string || null}
         */
        this.Like = null;

        /**
         * 实例分组id
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 按更新时间排序, asc 或者 desc
         * @type {string || null}
         */
        this.UpdateTimeOrder = null;

        /**
         * 项目id列表
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 告警策略类型列表
         * @type {Array.<string> || null}
         */
        this.ViewNames = null;

        /**
         * 是否过滤无接收人策略组, 1表示过滤, 0表示不过滤
         * @type {number || null}
         */
        this.FilterUnuseReceiver = null;

        /**
         * 过滤条件, 接收组列表
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 过滤条件, 接收人列表
         * @type {Array.<string> || null}
         */
        this.ReceiverUserList = null;

        /**
         * 维度组合字段(json字符串), 例如[[{"name":"unInstanceId","value":"ins-6e4b2aaa"}]]
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * 模板策略组id, 多个id用逗号分隔
         * @type {string || null}
         */
        this.ConditionTempGroupId = null;

        /**
         * 过滤条件, 接收人或者接收组, user表示接收人, group表示接收组
         * @type {string || null}
         */
        this.ReceiverType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Like = 'Like' in params ? params.Like : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ViewNames = 'ViewNames' in params ? params.ViewNames : null;
        this.FilterUnuseReceiver = 'FilterUnuseReceiver' in params ? params.FilterUnuseReceiver : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;

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
         * 业务命名空间，各个云产品的业务命名空间不同。如需获取业务命名空间，请前往各产品监控指标文档，例如云服务器的命名空间，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名，各个云产品的指标名不同。如需获取指标名，请前往各产品监控指标文档，例如云服务器的指标名，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
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
 * DescribePolicyConditionList.ConfigManual.StatType
 * @class
 */
class DescribePolicyConditionListConfigManualStatType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据聚合方式，周期5秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P5 = null;

        /**
         * 数据聚合方式，周期10秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P10 = null;

        /**
         * 数据聚合方式，周期1分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P60 = null;

        /**
         * 数据聚合方式，周期5分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P300 = null;

        /**
         * 数据聚合方式，周期10分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P600 = null;

        /**
         * 数据聚合方式，周期30分钟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P1800 = null;

        /**
         * 数据聚合方式，周期1小时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P3600 = null;

        /**
         * 数据聚合方式，周期1天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.P86400 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.P5 = 'P5' in params ? params.P5 : null;
        this.P10 = 'P10' in params ? params.P10 : null;
        this.P60 = 'P60' in params ? params.P60 : null;
        this.P300 = 'P300' in params ? params.P300 : null;
        this.P600 = 'P600' in params ? params.P600 : null;
        this.P1800 = 'P1800' in params ? params.P1800 : null;
        this.P3600 = 'P3600' in params ? params.P3600 : null;
        this.P86400 = 'P86400' in params ? params.P86400 : null;

    }
}

/**
 * SendCustomAlarmMsg请求参数结构体
 * @class
 */
class SendCustomAlarmMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口模块名，当前取值monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 消息策略ID，在云监控自定义消息页面配置
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 用户想要发送的自定义消息内容
         * @type {string || null}
         */
        this.Msg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

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
 * DescribePolicyConditionList.ConfigManual.CalcValue
 * @class
 */
class DescribePolicyConditionListConfigManualCalcValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 固定值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Fixed = null;

        /**
         * 最大值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Max = null;

        /**
         * 最小值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 是否必须
         * @type {boolean || null}
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Fixed = 'Fixed' in params ? params.Fixed : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Need = 'Need' in params ? params.Need : null;

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
 * DescribePolicyGroupList接口策略组绑定的实例分组信息
 * @class
 */
class DescribePolicyGroupListGroupInstanceGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例分组名称id
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 策略类型视图名称
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 最近编辑的用户uin
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * 实例分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.InsertTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

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
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    DescribeProductListResponse: DescribeProductListResponse,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    Instance: Instance,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    ModifyPolicyGroupRequest: ModifyPolicyGroupRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    DimensionsDesc: DimensionsDesc,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    DescribeProductListRequest: DescribeProductListRequest,
    PeriodsSt: PeriodsSt,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    MetricObjectMeaning: MetricObjectMeaning,
    MetricDatum: MetricDatum,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    ModifyPolicyGroupResponse: ModifyPolicyGroupResponse,
    PutMonitorDataResponse: PutMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    ProductSimple: ProductSimple,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    GetMonitorDataResponse: GetMonitorDataResponse,
    MetricSet: MetricSet,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    PutMonitorDataRequest: PutMonitorDataRequest,
    InstanceGroup: InstanceGroup,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    GetMonitorDataRequest: GetMonitorDataRequest,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    ModifyPolicyGroupCondition: ModifyPolicyGroupCondition,
    ModifyPolicyGroupEventCondition: ModifyPolicyGroupEventCondition,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    Dimension: Dimension,
    DataPoint: DataPoint,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
