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
 * 策略列表详情标签返回体
 * @class
 */
class TagInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签Value
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 实例个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * 产品类型，如：cvm
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 绑定状态，2：绑定成功，1：绑定中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BindingStatus = null;

        /**
         * 标签状态，2：标签存在，1：标签不存在
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.BindingStatus = 'BindingStatus' in params ? params.BindingStatus : null;
        this.TagStatus = 'TagStatus' in params ? params.TagStatus : null;

    }
}

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
 * ModifyAlarmPolicyNotice返回参数结构体
 * @class
 */
class ModifyAlarmPolicyNoticeResponse extends  AbstractModel {
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
 * ModifyAlarmPolicyInfo请求参数结构体
 * @class
 */
class ModifyAlarmPolicyInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 要修改的字段 NAME=策略名称 REMARK=策略备注
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 修改后的值
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
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

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
         * 影响对象，比如"ins-19708ino"
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * 维度过滤，比如外网IP:10.0.0.1
         * @type {Array.<DescribeProductEventListDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * 产品事件地域过滤参数，比如gz，各地域缩写可参见[地域列表](https://cloud.tencent.com/document/product/248/50863)
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
 * 告警策略触发任务
 * @class
 */
class AlarmPolicyTriggerTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发任务类型 AS=弹性伸缩
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 用 json 表示配置信息 {"Key1":"Value1","Key2":"Value2"}
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TaskConfig = 'TaskConfig' in params ? params.TaskConfig : null;

    }
}

/**
 * DescribeServiceDiscovery返回参数结构体
 * @class
 */
class DescribeServiceDiscoveryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回服务发现列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceDiscoveryItem> || null}
         */
        this.ServiceDiscoverySet = null;

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

        if (params.ServiceDiscoverySet) {
            this.ServiceDiscoverySet = new Array();
            for (let z in params.ServiceDiscoverySet) {
                let obj = new ServiceDiscoveryItem();
                obj.deserialize(params.ServiceDiscoverySet[z]);
                this.ServiceDiscoverySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeAlertRules请求参数结构体
 * @class
 */
class DescribeAlertRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 返回数量，默认为 20，最大值为 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 报警策略模板分类
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * BindingPolicyObject请求参数结构体
 * @class
 */
class BindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略组id，如传入 PolicyId 则该字段会被忽略可传入任意值如 0
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

        /**
         * 告警策略ID，使用此字段时 GroupId 会被忽略
         * @type {string || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * CreateServiceDiscovery返回参数结构体
 * @class
 */
class CreateServiceDiscoveryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功之后，返回对应服务发现信息
         * @type {ServiceDiscoveryItem || null}
         */
        this.ServiceDiscovery = null;

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

        if (params.ServiceDiscovery) {
            let obj = new ServiceDiscoveryItem();
            obj.deserialize(params.ServiceDiscovery)
            this.ServiceDiscovery = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * prometheus 报警规则 KV 参数
 * @class
 */
class PrometheusRuleKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
         * @type {string || null}
         */
        this.Key = null;

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
        this.Value = 'Value' in params ? params.Value : null;

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
 * UpdateAlertRuleState返回参数结构体
 * @class
 */
class UpdateAlertRuleStateResponse extends  AbstractModel {
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
 * DeleteServiceDiscovery返回参数结构体
 * @class
 */
class DeleteServiceDiscoveryResponse extends  AbstractModel {
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
 * 告警历史的指标信息
 * @class
 */
class AlarmHistoryMetric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云产品监控类型查询数据使用的命名空间
         * @type {string || null}
         */
        this.QceNamespace = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 统计周期
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 触发告警的数值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 指标的展示名
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
        this.QceNamespace = 'QceNamespace' in params ? params.QceNamespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateAlarmPolicy请求参数结构体
 * @class
 */
class CreateAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略名称，不超过20字符
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 监控类型 MT_QCE=云产品监控
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * 告警策略类型，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得，例如 cvm_device
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 备注，不超过100字符，仅支持中英文、数字、下划线、-
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否启用 0=停用 1=启用，可不传 默认为1
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 项目 Id，对于区分项目的产品必须传入非 -1 的值。 -1=无项目 0=默认项目，如不传 默认为 -1。支持的项目 Id 可以在控制台 [账号中心-项目管理](https://console.cloud.tencent.com/project) 中查看。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 触发条件模板 Id ，可不传
         * @type {number || null}
         */
        this.ConditionTemplateId = null;

        /**
         * 指标触发条件，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * 事件触发条件，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询。
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

        /**
         * 通知规则 Id 列表，由 [DescribeAlarmNotices](https://cloud.tencent.com/document/product/248/51280) 获得
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 触发任务列表
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ConditionTemplateId = 'ConditionTemplateId' in params ? params.ConditionTemplateId : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }

    }
}

/**
 * DescribeAlarmEvents返回参数结构体
 * @class
 */
class DescribeAlarmEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警事件列表
         * @type {Array.<AlarmEvent> || null}
         */
        this.Events = null;

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
                let obj = new AlarmEvent();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
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
 * ModifyAlarmPolicyNotice请求参数结构体
 * @class
 */
class ModifyAlarmPolicyNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 告警通知模板 ID 列表
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

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
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

    }
}

/**
 * DeleteAlarmPolicy请求参数结构体
 * @class
 */
class DeleteAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定值 monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID 列表
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

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
 * CreateAlertRule返回参数结构体
 * @class
 */
class CreateAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyAlarmPolicyTasks返回参数结构体
 * @class
 */
class ModifyAlarmPolicyTasksResponse extends  AbstractModel {
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
 * DescribeMetricData出参
 * @class
 */
class MetricDataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例对象维度组合
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

        /**
         * 数据点列表
         * @type {Array.<Point> || null}
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

        if (params.Values) {
            this.Values = new Array();
            for (let z in params.Values) {
                let obj = new Point();
                obj.deserialize(params.Values[z]);
                this.Values.push(obj);
            }
        }

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
 * DeleteAlertRules返回参数结构体
 * @class
 */
class DeleteAlertRulesResponse extends  AbstractModel {
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
         * 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名称，如CPUUsage，仅支持单指标拉取。各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的指标英文名即为MetricName
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 实例对象的维度组合，格式为key-value键值对形式的集合。如[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key,value为key对应的值
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

        /**
         * 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 起始时间，如2018-09-22T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间。 EndTime不能小于StartTime
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
 * DescribeAlarmPolicies返回参数结构体
 * @class
 */
class DescribeAlarmPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 策略数组
         * @type {Array.<AlarmPolicy> || null}
         */
        this.Policies = null;

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

        if (params.Policies) {
            this.Policies = new Array();
            for (let z in params.Policies) {
                let obj = new AlarmPolicy();
                obj.deserialize(params.Policies[z]);
                this.Policies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStatisticData请求参数结构体
 * @class
 */
class DescribeStatisticDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属模块，固定值，为monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 命名空间，目前只支持QCE/TKE
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名列表
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 维度条件，操作符支持=、in
         * @type {Array.<MidQueryCondition> || null}
         */
        this.Conditions = null;

        /**
         * 统计粒度。默认取值为300，单位为s
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 起始时间，默认为当前时间，如2020-12-08T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认为当前时间，如2020-12-08T19:51:23+08:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 按指定维度groupBy
         * @type {Array.<string> || null}
         */
        this.GroupBys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new MidQueryCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.GroupBys = 'GroupBys' in params ? params.GroupBys : null;

    }
}

/**
 * 告警条件模版
 * @class
 */
class ConditionsTemp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 指标触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * 事件触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }

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
         * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 待删除对象实例的唯一id列表，UniqueId从调用[获取已绑定对象列表接口](https://cloud.tencent.com/document/api/248/40570)的出参的List中得到
         * @type {Array.<string> || null}
         */
        this.UniqueId = null;

        /**
         * 实例分组id，如果按实例分组删除的话UniqueId参数是无效的
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 告警策略ID，使用此字段时 GroupId 会被忽略
         * @type {string || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DescribeServiceDiscovery请求参数结构体
 * @class
 */
class DescribeServiceDiscoveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
         * @type {string || null}
         */
        this.KubeClusterId = null;

        /**
         * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
         * @type {number || null}
         */
        this.KubeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeClusterId = 'KubeClusterId' in params ? params.KubeClusterId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;

    }
}

/**
 * 统一的命名空间信息
 * @class
 */
class CommonNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间标示
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 配置信息
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 支持地域列表
         * @type {Array.<string> || null}
         */
        this.AvailableRegions = null;

        /**
         * 排序Id
         * @type {number || null}
         */
        this.SortId = null;

        /**
         * Dashboard中的唯一表示
         * @type {string || null}
         */
        this.DashboardId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.AvailableRegions = 'AvailableRegions' in params ? params.AvailableRegions : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.DashboardId = 'DashboardId' in params ? params.DashboardId : null;

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
 * DescribeMonitorTypes请求参数结构体
 * @class
 */
class DescribeMonitorTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定值 monitor
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
 * DescribeAlarmNotices返回参数结构体
 * @class
 */
class DescribeAlarmNoticesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 告警通知模板列表
         * @type {Array.<AlarmNotice> || null}
         */
        this.Notices = null;

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

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarmPolicyTasks请求参数结构体
 * @class
 */
class ModifyAlarmPolicyTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 告警策略触发任务列表，空数据代表解绑
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

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

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
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
 * Prometheus 服务发现信息
 * @class
 */
class ServiceDiscoveryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务发现名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 服务发现属于的 Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 服务发现类型: ServiceMonitor/PodMonitor
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * Namespace 选取方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceSelector = null;

        /**
         * Label 选取方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Selector = null;

        /**
         * Endpoints 信息（PodMonitor 不含该参数）
         * @type {string || null}
         */
        this.Endpoints = null;

        /**
         * 服务发现对应的配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.NamespaceSelector = 'NamespaceSelector' in params ? params.NamespaceSelector : null;
        this.Selector = 'Selector' in params ? params.Selector : null;
        this.Endpoints = 'Endpoints' in params ? params.Endpoints : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * SetDefaultAlarmPolicy请求参数结构体
 * @class
 */
class SetDefaultAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定值 monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

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

    }
}

/**
 * ModifyAlarmNotice请求参数结构体
 * @class
 */
class ModifyAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警通知规则名称 60字符以内
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知
         * @type {string || null}
         */
        this.NoticeType = null;

        /**
         * 通知语言 zh-CN=中文 en-US=英文
         * @type {string || null}
         */
        this.NoticeLanguage = null;

        /**
         * 告警通知模板 ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * 用户通知 最多5个
         * @type {Array.<UserNotice> || null}
         */
        this.UserNotices = null;

        /**
         * 回调通知 最多3个
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;
        this.NoticeLanguage = 'NoticeLanguage' in params ? params.NoticeLanguage : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;

        if (params.UserNotices) {
            this.UserNotices = new Array();
            for (let z in params.UserNotices) {
                let obj = new UserNotice();
                obj.deserialize(params.UserNotices[z]);
                this.UserNotices.push(obj);
            }
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }

    }
}

/**
 * CreateServiceDiscovery请求参数结构体
 * @class
 */
class CreateServiceDiscoveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <li>类型为TKE：对应集成的腾讯云容器服务集群 ID</li>
         * @type {string || null}
         */
        this.KubeClusterId = null;

        /**
         * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 服务发现配置信息
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeClusterId = 'KubeClusterId' in params ? params.KubeClusterId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * DescribeAlertRules返回参数结构体
 * @class
 */
class DescribeAlertRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报警规则数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 报警规则详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusRuleSet> || null}
         */
        this.AlertRuleSet = null;

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

        if (params.AlertRuleSet) {
            this.AlertRuleSet = new Array();
            for (let z in params.AlertRuleSet) {
                let obj = new PrometheusRuleSet();
                obj.deserialize(params.AlertRuleSet[z]);
                this.AlertRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 告警策略详情
 * @class
 */
class AlarmPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 告警策略名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 监控类型 MT_QCE=云产品监控
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * 启停状态 0=停用 1=启用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 策略组绑定的实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UseSum = null;

        /**
         * 项目 Id -1=无项目 0=默认项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 告警策略类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 触发条件模板 Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionTemplateId = null;

        /**
         * 指标触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * 事件触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

        /**
         * 通知规则 id 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 通知规则 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmNotice> || null}
         */
        this.Notices = null;

        /**
         * 触发任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

        /**
         * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConditionsTemp || null}
         */
        this.ConditionsTemp = null;

        /**
         * 最后编辑的用户uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastEditUin = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * namespace显示名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceShowName = null;

        /**
         * 是否默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 能否设置默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CanSetDefault = null;

        /**
         * 实例分组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 实例分组总实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceSum = null;

        /**
         * 实例分组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceGroupName = null;

        /**
         * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInstance> || null}
         */
        this.TagInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.UseSum = 'UseSum' in params ? params.UseSum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ConditionTemplateId = 'ConditionTemplateId' in params ? params.ConditionTemplateId : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

        if (params.Notices) {
            this.Notices = new Array();
            for (let z in params.Notices) {
                let obj = new AlarmNotice();
                obj.deserialize(params.Notices[z]);
                this.Notices.push(obj);
            }
        }

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }

        if (params.ConditionsTemp) {
            let obj = new ConditionsTemp();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.NamespaceShowName = 'NamespaceShowName' in params ? params.NamespaceShowName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.InstanceGroupName = 'InstanceGroupName' in params ? params.InstanceGroupName : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.TagInstances) {
            this.TagInstances = new Array();
            for (let z in params.TagInstances) {
                let obj = new TagInstance();
                obj.deserialize(params.TagInstances[z]);
                this.TagInstances.push(obj);
            }
        }

    }
}

/**
 * CreateAlarmPolicy返回参数结构体
 * @class
 */
class CreateAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID
         * @type {string || null}
         */
        this.OriginId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * prometheus 报警规则集
 * @class
 */
class PrometheusRuleSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则状态码
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * 规则类别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 规则标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Labels = null;

        /**
         * 规则注释列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Annotations = null;

        /**
         * 规则表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Expr = null;

        /**
         * 规则报警持续时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 报警接收组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 规则运行健康状态，取值如下：
<li>unknown 未知状态</li>
<li>pending 加载中</li>
<li>ok 运行正常</li>
<li>err 运行错误</li>
         * @type {string || null}
         */
        this.Health = null;

        /**
         * 规则创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 规则更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.Expr = 'Expr' in params ? params.Expr : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.Health = 'Health' in params ? params.Health : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * DescribeAllNamespaces返回参数结构体
 * @class
 */
class DescribeAllNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云产品的告警策略类型，已废弃
         * @type {CommonNamespace || null}
         */
        this.QceNamespaces = null;

        /**
         * 其他告警策略类型，已废弃
         * @type {CommonNamespace || null}
         */
        this.CustomNamespaces = null;

        /**
         * 云产品的告警策略类型
         * @type {Array.<CommonNamespace> || null}
         */
        this.QceNamespacesNew = null;

        /**
         * 其他告警策略类型，暂不支持
         * @type {Array.<CommonNamespace> || null}
         */
        this.CustomNamespacesNew = null;

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

        if (params.QceNamespaces) {
            let obj = new CommonNamespace();
            obj.deserialize(params.QceNamespaces)
            this.QceNamespaces = obj;
        }

        if (params.CustomNamespaces) {
            let obj = new CommonNamespace();
            obj.deserialize(params.CustomNamespaces)
            this.CustomNamespaces = obj;
        }

        if (params.QceNamespacesNew) {
            this.QceNamespacesNew = new Array();
            for (let z in params.QceNamespacesNew) {
                let obj = new CommonNamespace();
                obj.deserialize(params.QceNamespacesNew[z]);
                this.QceNamespacesNew.push(obj);
            }
        }

        if (params.CustomNamespacesNew) {
            this.CustomNamespacesNew = new Array();
            for (let z in params.CustomNamespacesNew) {
                let obj = new CommonNamespace();
                obj.deserialize(params.CustomNamespacesNew[z]);
                this.CustomNamespacesNew.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAlarmNotices返回参数结构体
 * @class
 */
class DeleteAlarmNoticesResponse extends  AbstractModel {
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
 * 告警策略触发条件
 * @class
 */
class AlarmPolicyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名或事件名，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 秒数 统计周期，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 英文运算符
intelligent=无阈值智能检测
eq=等于
ge=大于等于
gt=大于
le=小于等于
lt=小于
ne=不等于
day_increase=天同比增长
day_decrease=天同比下降
day_wave=天同比波动
week_increase=周同比增长
week_decrease=周同比下降
week_wave=周同比波动
cycle_increase=环比增长
cycle_decrease=环比下降
cycle_wave=环比波动
re=正则匹配
支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 阈值，支持的范围可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 周期数 持续通知周期 1=持续1个周期 2=持续2个周期...，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ContinuePeriod = null;

        /**
         * 秒数 告警间隔  0=不重复 300=每5分钟告警一次 600=每10分钟告警一次 900=每15分钟告警一次 1800=每30分钟告警一次 3600=每1小时告警一次 7200=每2小时告警一次 10800=每3小时告警一次 21600=每6小时告警一次 43200=每12小时告警一次 86400=每1天告警一次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NoticeFrequency = null;

        /**
         * 告警频率是否指数增长 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsPowerNotice = null;

        /**
         * 对于单个触发规则的过滤条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlarmPolicyFilter || null}
         */
        this.Filter = null;

        /**
         * 指标展示名，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 单位，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态阈值。创建或编辑策略时，如不填则默认为 STATIC。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.NoticeFrequency = 'NoticeFrequency' in params ? params.NoticeFrequency : null;
        this.IsPowerNotice = 'IsPowerNotice' in params ? params.IsPowerNotice : null;

        if (params.Filter) {
            let obj = new AlarmPolicyFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

    }
}

/**
 * DescribeAlarmNoticeCallbacks请求参数结构体
 * @class
 */
class DescribeAlarmNoticeCallbacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
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
 * ModifyAlarmPolicyCondition返回参数结构体
 * @class
 */
class ModifyAlarmPolicyConditionResponse extends  AbstractModel {
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
 * 监控数据点
 * @class
 */
class Point extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该监控数据点生成的时间点
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 监控数据点的值
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * UpdateAlertRuleState请求参数结构体
 * @class
 */
class UpdateAlertRuleStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID 列表
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
         * @type {number || null}
         */
        this.RuleState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

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
 * 指标，可用于设置告警、查询数据
 * @class
 */
class Metric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警策略类型
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标展示名
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 最小值
         * @type {number || null}
         */
        this.Min = null;

        /**
         * 最大值
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 维度列表
         * @type {Array.<string> || null}
         */
        this.Dimensions = null;

        /**
         * 单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MetricConfig || null}
         */
        this.MetricConfig = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.MetricConfig) {
            let obj = new MetricConfig();
            obj.deserialize(params.MetricConfig)
            this.MetricConfig = obj;
        }

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
 * DescribeAlarmHistories返回参数结构体
 * @class
 */
class DescribeAlarmHistoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 告警历史列表
         * @type {Array.<AlarmHistory> || null}
         */
        this.Histories = null;

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

        if (params.Histories) {
            this.Histories = new Array();
            for (let z in params.Histories) {
                let obj = new AlarmHistory();
                obj.deserialize(params.Histories[z]);
                this.Histories.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmMetrics请求参数结构体
 * @class
 */
class DescribeAlarmMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 监控类型过滤 "MT_QCE"=云产品监控
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
 * 云监控告警通知模板 - 用户通知详情
 * @class
 */
class UserNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收者类型 USER=用户 GROUP=用户组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * 通知开始时间 00:00:00 开始的秒数（取值范围0-86399）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 通知结束时间 00:00:00 开始的秒数（取值范围0-86399）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 通知渠道列表 EMAIL=邮件 SMS=短信 CALL=电话 WECHAT=微信
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NoticeWay = null;

        /**
         * 用户 uid 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UserIds = null;

        /**
         * 用户组 group id 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.GroupIds = null;

        /**
         * 电话轮询列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.PhoneOrder = null;

        /**
         * 电话轮询次数 （取值范围1-5）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * 单次轮询内拨打间隔 秒数 （取值范围60-900）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * 两次轮询间隔 秒数（取值范围60-900）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * 是否需要触达通知 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NeedPhoneArriveNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NoticeWay = 'NoticeWay' in params ? params.NoticeWay : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.PhoneOrder = 'PhoneOrder' in params ? params.PhoneOrder : null;
        this.PhoneCircleTimes = 'PhoneCircleTimes' in params ? params.PhoneCircleTimes : null;
        this.PhoneInnerInterval = 'PhoneInnerInterval' in params ? params.PhoneInnerInterval : null;
        this.PhoneCircleInterval = 'PhoneCircleInterval' in params ? params.PhoneCircleInterval : null;
        this.NeedPhoneArriveNotice = 'NeedPhoneArriveNotice' in params ? params.NeedPhoneArriveNotice : null;

    }
}

/**
 * 告警策略过滤条件
 * @class
 */
class AlarmPolicyFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件类型 DIMENSION=使用 Dimensions 做过滤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * AlarmPolicyDimension 二维数组序列化后的json字符串，一维数组之间互为或关系，一维数组内的元素互为与关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * DescribeAlarmNoticeCallbacks返回参数结构体
 * @class
 */
class DescribeAlarmNoticeCallbacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警回调通知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

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

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAlarmPolicyCondition请求参数结构体
 * @class
 */
class ModifyAlarmPolicyConditionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定值 monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 触发条件模板 Id，可不传
         * @type {number || null}
         */
        this.ConditionTemplateId = null;

        /**
         * 指标触发条件
         * @type {AlarmPolicyCondition || null}
         */
        this.Condition = null;

        /**
         * 事件触发条件
         * @type {AlarmPolicyEventCondition || null}
         */
        this.EventCondition = null;

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
        this.ConditionTemplateId = 'ConditionTemplateId' in params ? params.ConditionTemplateId : null;

        if (params.Condition) {
            let obj = new AlarmPolicyCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

        if (params.EventCondition) {
            let obj = new AlarmPolicyEventCondition();
            obj.deserialize(params.EventCondition)
            this.EventCondition = obj;
        }

    }
}

/**
 * ModifyAlarmPolicyStatus返回参数结构体
 * @class
 */
class ModifyAlarmPolicyStatusResponse extends  AbstractModel {
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
         * 实例的维度信息，格式为
{"unInstanceId":"ins-00jvv9mo"}。不同云产品的维度信息不同，详见
[指标维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)
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
 * DescribeAlarmPolicy返回参数结构体
 * @class
 */
class DescribeAlarmPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略详情
         * @type {AlarmPolicy || null}
         */
        this.Policy = null;

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

        if (params.Policy) {
            let obj = new AlarmPolicy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateServiceDiscovery返回参数结构体
 * @class
 */
class UpdateServiceDiscoveryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新成功之后，返回对应服务发现的信息
         * @type {ServiceDiscoveryItem || null}
         */
        this.ServiceDiscovery = null;

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

        if (params.ServiceDiscovery) {
            let obj = new ServiceDiscoveryItem();
            obj.deserialize(params.ServiceDiscovery)
            this.ServiceDiscovery = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonitorTypes返回参数结构体
 * @class
 */
class DescribeMonitorTypesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控类型，云产品监控为 MT_QCE
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

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
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
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
         * 告警状态ID，0表示未恢复；1表示已恢复；2,3,5表示数据不足；4表示已失效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 告警状态，ALARM表示未恢复；OK表示已恢复；NO_DATA表示数据不足；NO_CONF表示已失效
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
 * UpdateServiceDiscovery请求参数结构体
 * @class
 */
class UpdateServiceDiscoveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
         * @type {string || null}
         */
        this.KubeClusterId = null;

        /**
         * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 服务发现配置信息
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeClusterId = 'KubeClusterId' in params ? params.KubeClusterId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * CreateAlarmNotice返回参数结构体
 * @class
 */
class CreateAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板ID
         * @type {string || null}
         */
        this.NoticeId = null;

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
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmHistories请求参数结构体
 * @class
 */
class DescribeAlarmHistoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 页数，从 1 开始计数，默认 1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页的数量，取值1~100，默认20
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 默认按首次出现时间倒序排列 "ASC"=正序 "DESC"=逆序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 起始时间，默认一天前的时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 晚于 `StartTime` 才可能被搜索到。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认当前时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 早于 `EndTime` 才可能被搜索到。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * 根据告警对象过滤 字符串模糊搜索
         * @type {string || null}
         */
        this.AlarmObject = null;

        /**
         * 根据告警状态过滤 ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足，不选默认查所有
         * @type {Array.<string> || null}
         */
        this.AlarmStatus = null;

        /**
         * 根据项目ID过滤，-1=无项目 0=默认项目
可在此页面查询 [项目管理](https://console.cloud.tencent.com/project)
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 根据实例组ID过滤
         * @type {Array.<number> || null}
         */
        this.InstanceGroupIds = null;

        /**
         * 根据策略类型过滤，策略类型是监控类型之下的概念，在这里两者都需要传入，例如 `[{"MonitorType": "MT_QCE", "Namespace": "cvm_device"}]`
可使用 [查询所有名字空间 DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 接口查询
         * @type {Array.<MonitorTypeNamespace> || null}
         */
        this.Namespaces = null;

        /**
         * 根据指标名过滤
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 根据策略名称模糊搜索
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 根据告警内容模糊搜索
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段
         * @type {Array.<number> || null}
         */
        this.ReceiverUids = null;

        /**
         * 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * 根据告警策略 Id 列表搜索
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.AlarmObject = 'AlarmObject' in params ? params.AlarmObject : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.InstanceGroupIds = 'InstanceGroupIds' in params ? params.InstanceGroupIds : null;

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new MonitorTypeNamespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ReceiverUids = 'ReceiverUids' in params ? params.ReceiverUids : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

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
 * ModifyAlarmPolicyStatus请求参数结构体
 * @class
 */
class ModifyAlarmPolicyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定值 monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 启停状态 0=停用 1=启用
         * @type {number || null}
         */
        this.Enable = null;

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
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DescribeMetricData接口出参
 * @class
 */
class MetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 监控数据点
         * @type {Array.<MetricDataPoint> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new MetricDataPoint();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

    }
}

/**
 * 告警事件
 * @class
 */
class AlarmEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件名
         * @type {string || null}
         */
        this.EventName = null;

        /**
         * 展示的事件名
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 告警策略类型
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
 * UpdateAlertRule请求参数结构体
 * @class
 */
class UpdateAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 报警规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * 报警规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 报警规则表达式
         * @type {string || null}
         */
        this.Expr = null;

        /**
         * 报警规则持续时间
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 报警规则接收组列表
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 报警规则标签列表
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Labels = null;

        /**
         * 报警规则注释列表
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Annotations = null;

        /**
         * 报警策略模板分类
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Expr = 'Expr' in params ? params.Expr : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

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

        /**
         * 显示名称ViewName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewName = null;

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
        this.ViewName = 'ViewName' in params ? params.ViewName : null;

    }
}

/**
 * DeleteAlarmNotices请求参数结构体
 * @class
 */
class DeleteAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警通知模板id列表
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

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
 * DescribeAllNamespaces请求参数结构体
 * @class
 */
class DescribeAllNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据使用场景过滤 "ST_DASHBOARD"=Dashboard类型 或 "ST_ALARM"=告警类型
         * @type {string || null}
         */
        this.SceneType = null;

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 根据监控类型过滤 不填默认查所有类型 "MT_QCE"=云产品监控
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * 根据namespace的Id过滤 不填默认查询所有
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * UpdateAlertRule返回参数结构体
 * @class
 */
class UpdateAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAlarmMetrics返回参数结构体
 * @class
 */
class DescribeAlarmMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警指标列表
         * @type {Array.<Metric> || null}
         */
        this.Metrics = null;

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

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new Metric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
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
 * DescribeAlarmPolicies请求参数结构体
 * @class
 */
class DescribeAlarmPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 页数，从 1 开始计数，默认 1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页的数量，取值1~100，默认20
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 按策略名称模糊搜索
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控
         * @type {Array.<string> || null}
         */
        this.MonitorTypes = null;

        /**
         * 根据命名空间过滤，不同策略类型的值详见
[策略类型列表](https://cloud.tencent.com/document/product/248/50397)
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * 告警对象列表，JSON 字符串。外层数组，对应多个实例，内层为对象的维度。例如“云服务器-基础监控”可写为：
`[ {"Dimensions": {"unInstanceId": "ins-qr8d555g"}}, {"Dimensions": {"unInstanceId": "ins-qr8d555h"}} ]`
具体也可以参考下方的示例 2。

不同云产品参数示例详见 [维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)
         * @type {string || null}
         */
        this.Dimensions = null;

        /**
         * 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段
         * @type {Array.<number> || null}
         */
        this.ReceiverUids = null;

        /**
         * 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * 根据默认策略筛选 不传展示全部策略 DEFAULT=展示默认策略 NOT_DEFAULT=展示非默认策略
         * @type {Array.<string> || null}
         */
        this.PolicyType = null;

        /**
         * 排序字段，例如按照最后修改时间排序，Field: "UpdateTime"
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 排序顺序：升序：ASC  降序：DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 策略所属项目的id数组，可在此页面查看
[项目管理](https://console.cloud.tencent.com/project)
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 通知模版的id列表，可查询通知模版列表获取。
可使用 [查询通知模板列表](https://cloud.tencent.com/document/product/248/51280) 接口查询。
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 根据触发条件筛选 不传展示全部策略 STATIC=展示静态阈值策略 DYNAMIC=展示动态阈值策略
         * @type {Array.<string> || null}
         */
        this.RuleTypes = null;

        /**
         * 告警启停筛选，[1]：启用   [0]：停止，全部[0, 1]
         * @type {Array.<number> || null}
         */
        this.Enable = null;

        /**
         * 传 1 查询未配置通知规则的告警策略；不传或传其他数值，查询所有策略。
         * @type {number || null}
         */
        this.NotBindingNoticeRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.MonitorTypes = 'MonitorTypes' in params ? params.MonitorTypes : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.ReceiverUids = 'ReceiverUids' in params ? params.ReceiverUids : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.RuleTypes = 'RuleTypes' in params ? params.RuleTypes : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.NotBindingNoticeRule = 'NotBindingNoticeRule' in params ? params.NotBindingNoticeRule : null;

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
 * ModifyAlarmPolicyInfo返回参数结构体
 * @class
 */
class ModifyAlarmPolicyInfoResponse extends  AbstractModel {
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
 * 告警通知模板详情
 * @class
 */
class AlarmNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 告警通知模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 上次修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 上次修改人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedBy = null;

        /**
         * 告警通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=全部通知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NoticeType = null;

        /**
         * 用户通知列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserNotice> || null}
         */
        this.UserNotices = null;

        /**
         * 回调通知列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

        /**
         * 是否是系统预设通知模板 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsPreset = null;

        /**
         * 通知语言 zh-CN=中文 en-US=英文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NoticeLanguage = null;

        /**
         * 告警通知模板绑定的告警策略ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PolicyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.UpdatedBy = 'UpdatedBy' in params ? params.UpdatedBy : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;

        if (params.UserNotices) {
            this.UserNotices = new Array();
            for (let z in params.UserNotices) {
                let obj = new UserNotice();
                obj.deserialize(params.UserNotices[z]);
                this.UserNotices.push(obj);
            }
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }
        this.IsPreset = 'IsPreset' in params ? params.IsPreset : null;
        this.NoticeLanguage = 'NoticeLanguage' in params ? params.NoticeLanguage : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

    }
}

/**
 * 指标配置
 * @class
 */
class MetricConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 允许使用的运算符
         * @type {Array.<string> || null}
         */
        this.Operator = null;

        /**
         * 允许配置的数据周期，以秒为单位
         * @type {Array.<number> || null}
         */
        this.Period = null;

        /**
         * 允许配置的持续周期个数
         * @type {Array.<number> || null}
         */
        this.ContinuePeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;

    }
}

/**
 * DescribeAlarmEvents请求参数结构体
 * @class
 */
class DescribeAlarmEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，固定值 monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeMidDimensionValueList的查询条件
 * @class
 */
class MidQueryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 操作符，支持等于(eq)、不等于(ne)，以及in
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 维度值，当Op是eq、ne时，只使用第一个元素
         * @type {Array.<string> || null}
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ModifyAlarmNotice返回参数结构体
 * @class
 */
class ModifyAlarmNoticeResponse extends  AbstractModel {
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
 * CreateAlertRule请求参数结构体
 * @class
 */
class CreateAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则表达式
         * @type {string || null}
         */
        this.Expr = null;

        /**
         * 告警通知模板 ID 列表
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * 规则报警持续时间
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 标签列表
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Labels = null;

        /**
         * 注释列表
         * @type {Array.<PrometheusRuleKV> || null}
         */
        this.Annotations = null;

        /**
         * 报警策略模板分类
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Expr = 'Expr' in params ? params.Expr : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new PrometheusRuleKV();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

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
 * 告警历史数据
 * @class
 */
class AlarmHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警历史Id
         * @type {string || null}
         */
        this.AlarmId = null;

        /**
         * 监控类型
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * 策略类型
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 告警对象
         * @type {string || null}
         */
        this.AlarmObject = null;

        /**
         * 告警内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 时间戳，首次出现时间
         * @type {number || null}
         */
        this.FirstOccurTime = null;

        /**
         * 时间戳，最后出现时间
         * @type {number || null}
         */
        this.LastOccurTime = null;

        /**
         * 告警状态，ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足
         * @type {string || null}
         */
        this.AlarmStatus = null;

        /**
         * 告警策略 Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 基础产品告警的告警对象所属网络
         * @type {string || null}
         */
        this.VPC = null;

        /**
         * 项目 Id
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 项目名字
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 告警对象所属实例组
         * @type {Array.<InstanceGroups> || null}
         */
        this.InstanceGroup = null;

        /**
         * 接收人列表
         * @type {Array.<number> || null}
         */
        this.ReceiverUids = null;

        /**
         * 接收组列表
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * 告警渠道列表 SMS=短信 EMAIL=邮件 CALL=电话 WECHAT=微信
         * @type {Array.<string> || null}
         */
        this.NoticeWays = null;

        /**
         * 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 告警类型
         * @type {string || null}
         */
        this.AlarmType = null;

        /**
         * 事件Id
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 策略是否存在 0=不存在 1=存在
         * @type {number || null}
         */
        this.PolicyExists = null;

        /**
         * 指标信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmHistoryMetric> || null}
         */
        this.MetricsInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmId = 'AlarmId' in params ? params.AlarmId : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.AlarmObject = 'AlarmObject' in params ? params.AlarmObject : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.FirstOccurTime = 'FirstOccurTime' in params ? params.FirstOccurTime : null;
        this.LastOccurTime = 'LastOccurTime' in params ? params.LastOccurTime : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.VPC = 'VPC' in params ? params.VPC : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

        if (params.InstanceGroup) {
            this.InstanceGroup = new Array();
            for (let z in params.InstanceGroup) {
                let obj = new InstanceGroups();
                obj.deserialize(params.InstanceGroup[z]);
                this.InstanceGroup.push(obj);
            }
        }
        this.ReceiverUids = 'ReceiverUids' in params ? params.ReceiverUids : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.NoticeWays = 'NoticeWays' in params ? params.NoticeWays : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PolicyExists = 'PolicyExists' in params ? params.PolicyExists : null;

        if (params.MetricsInfo) {
            this.MetricsInfo = new Array();
            for (let z in params.MetricsInfo) {
                let obj = new AlarmHistoryMetric();
                obj.deserialize(params.MetricsInfo[z]);
                this.MetricsInfo.push(obj);
            }
        }

    }
}

/**
 * 策略类型
 * @class
 */
class MonitorTypeNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控类型
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * 策略类型值
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteAlarmPolicy返回参数结构体
 * @class
 */
class DeleteAlarmPolicyResponse extends  AbstractModel {
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
 * 云监控告警通知模板 - 回调通知详情
 * @class
 */
class URLNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调 url（限长256字符）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.URL = null;

        /**
         * 是否通过验证 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsValid = null;

        /**
         * 验证码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValidationCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.URL = 'URL' in params ? params.URL : null;
        this.IsValid = 'IsValid' in params ? params.IsValid : null;
        this.ValidationCode = 'ValidationCode' in params ? params.ValidationCode : null;

    }
}

/**
 * DescribeAlarmPolicy请求参数结构体
 * @class
 */
class DescribeAlarmPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

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
 * DescribeStatisticData返回参数结构体
 * @class
 */
class DescribeStatisticDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期
         * @type {number || null}
         */
        this.Period = null;

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
         * 监控数据
         * @type {Array.<MetricData> || null}
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
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new MetricData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 过滤条件，告警策略是否已启动或停止
         * @type {boolean || null}
         */
        this.IsOpen = null;

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
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;

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
 * DescribeAlarmNotices请求参数结构体
 * @class
 */
class DescribeAlarmNoticesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 页码 最小为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小 1～200
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 按更新时间排序方式 ASC=正序 DESC=倒序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 主账号 uid 用于创建预设通知
         * @type {number || null}
         */
        this.OwnerUid = null;

        /**
         * 告警通知模板名称 用来模糊搜索
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 根据接收人过滤告警通知模板需要选定通知用户类型 USER=用户 GROUP=用户组 传空=不按接收人过滤
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * 接收对象列表
         * @type {Array.<number> || null}
         */
        this.UserIds = null;

        /**
         * 接收组列表
         * @type {Array.<number> || null}
         */
        this.GroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OwnerUid = 'OwnerUid' in params ? params.OwnerUid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;

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
 * DescribeAlarmNotice返回参数结构体
 * @class
 */
class DescribeAlarmNoticeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板详细信息
         * @type {AlarmNotice || null}
         */
        this.Notice = null;

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

        if (params.Notice) {
            let obj = new AlarmNotice();
            obj.deserialize(params.Notice)
            this.Notice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteAlertRules请求参数结构体
 * @class
 */
class DeleteAlertRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID 列表
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

        /**
         * Prometheus 实例 ID
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeAlarmNotice请求参数结构体
 * @class
 */
class DescribeAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警通知模板 id
         * @type {string || null}
         */
        this.NoticeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;

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
 * CreateAlarmNotice请求参数结构体
 * @class
 */
class CreateAlarmNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 通知模板名称 60字符以内
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知
         * @type {string || null}
         */
        this.NoticeType = null;

        /**
         * 通知语言 zh-CN=中文 en-US=英文
         * @type {string || null}
         */
        this.NoticeLanguage = null;

        /**
         * 用户通知 最多5个
         * @type {Array.<UserNotice> || null}
         */
        this.UserNotices = null;

        /**
         * 回调通知 最多3个
         * @type {Array.<URLNotice> || null}
         */
        this.URLNotices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;
        this.NoticeLanguage = 'NoticeLanguage' in params ? params.NoticeLanguage : null;

        if (params.UserNotices) {
            this.UserNotices = new Array();
            for (let z in params.UserNotices) {
                let obj = new UserNotice();
                obj.deserialize(params.UserNotices[z]);
                this.UserNotices.push(obj);
            }
        }

        if (params.URLNotices) {
            this.URLNotices = new Array();
            for (let z in params.URLNotices) {
                let obj = new URLNotice();
                obj.deserialize(params.URLNotices[z]);
                this.URLNotices.push(obj);
            }
        }

    }
}

/**
 * 告警对象所属实例组
 * @class
 */
class InstanceGroups extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例组 Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 实例组名称
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 告警策略ID，使用此字段时 GroupId 会被忽略
         * @type {string || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

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
 * 告警策略指标触发条件
 * @class
 */
class AlarmPolicyCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标触发与或条件，0=或，1=与
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsUnionRule = null;

        /**
         * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmPolicyRule> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new AlarmPolicyRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

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
 * DeleteServiceDiscovery请求参数结构体
 * @class
 */
class DeleteServiceDiscoveryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
         * @type {string || null}
         */
        this.KubeClusterId = null;

        /**
         * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = PodMonitor</li>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 服务发现配置信息
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KubeClusterId = 'KubeClusterId' in params ? params.KubeClusterId : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * 告警策略事件触发条件
 * @class
 */
class AlarmPolicyEventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AlarmPolicyRule> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new AlarmPolicyRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

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
 * SetDefaultAlarmPolicy返回参数结构体
 * @class
 */
class SetDefaultAlarmPolicyResponse extends  AbstractModel {
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
    TagInstance: TagInstance,
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    ModifyAlarmPolicyNoticeResponse: ModifyAlarmPolicyNoticeResponse,
    ModifyAlarmPolicyInfoRequest: ModifyAlarmPolicyInfoRequest,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    AlarmPolicyTriggerTask: AlarmPolicyTriggerTask,
    DescribeServiceDiscoveryResponse: DescribeServiceDiscoveryResponse,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    DescribeAlertRulesRequest: DescribeAlertRulesRequest,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    CreateServiceDiscoveryResponse: CreateServiceDiscoveryResponse,
    PrometheusRuleKV: PrometheusRuleKV,
    PutMonitorDataResponse: PutMonitorDataResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    UpdateAlertRuleStateResponse: UpdateAlertRuleStateResponse,
    DeleteServiceDiscoveryResponse: DeleteServiceDiscoveryResponse,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    AlarmHistoryMetric: AlarmHistoryMetric,
    CreateAlarmPolicyRequest: CreateAlarmPolicyRequest,
    DescribeAlarmEventsResponse: DescribeAlarmEventsResponse,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    ModifyAlarmPolicyNoticeRequest: ModifyAlarmPolicyNoticeRequest,
    DeleteAlarmPolicyRequest: DeleteAlarmPolicyRequest,
    PutMonitorDataRequest: PutMonitorDataRequest,
    CreateAlertRuleResponse: CreateAlertRuleResponse,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    ModifyAlarmPolicyTasksResponse: ModifyAlarmPolicyTasksResponse,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    MetricDataPoint: MetricDataPoint,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    DeleteAlertRulesResponse: DeleteAlertRulesResponse,
    GetMonitorDataRequest: GetMonitorDataRequest,
    DataPoint: DataPoint,
    DescribeAlarmPoliciesResponse: DescribeAlarmPoliciesResponse,
    DescribeStatisticDataRequest: DescribeStatisticDataRequest,
    ConditionsTemp: ConditionsTemp,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    DescribeServiceDiscoveryRequest: DescribeServiceDiscoveryRequest,
    CommonNamespace: CommonNamespace,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DescribeMonitorTypesRequest: DescribeMonitorTypesRequest,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    ModifyAlarmPolicyTasksRequest: ModifyAlarmPolicyTasksRequest,
    DimensionsDesc: DimensionsDesc,
    ServiceDiscoveryItem: ServiceDiscoveryItem,
    SetDefaultAlarmPolicyRequest: SetDefaultAlarmPolicyRequest,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    CreateServiceDiscoveryRequest: CreateServiceDiscoveryRequest,
    DescribeAlertRulesResponse: DescribeAlertRulesResponse,
    DescribeProductListRequest: DescribeProductListRequest,
    PeriodsSt: PeriodsSt,
    AlarmPolicy: AlarmPolicy,
    CreateAlarmPolicyResponse: CreateAlarmPolicyResponse,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    PrometheusRuleSet: PrometheusRuleSet,
    DescribeAllNamespacesResponse: DescribeAllNamespacesResponse,
    DeleteAlarmNoticesResponse: DeleteAlarmNoticesResponse,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    ProductSimple: ProductSimple,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    AlarmPolicyRule: AlarmPolicyRule,
    DescribeAlarmNoticeCallbacksRequest: DescribeAlarmNoticeCallbacksRequest,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    ModifyAlarmPolicyConditionResponse: ModifyAlarmPolicyConditionResponse,
    Dimension: Dimension,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    Point: Point,
    UpdateAlertRuleStateRequest: UpdateAlertRuleStateRequest,
    ModifyPolicyGroupEventCondition: ModifyPolicyGroupEventCondition,
    Metric: Metric,
    ModifyPolicyGroupRequest: ModifyPolicyGroupRequest,
    DescribeAlarmHistoriesResponse: DescribeAlarmHistoriesResponse,
    DescribeAlarmMetricsRequest: DescribeAlarmMetricsRequest,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    UserNotice: UserNotice,
    AlarmPolicyFilter: AlarmPolicyFilter,
    DescribeAlarmNoticeCallbacksResponse: DescribeAlarmNoticeCallbacksResponse,
    ModifyAlarmPolicyConditionRequest: ModifyAlarmPolicyConditionRequest,
    ModifyAlarmPolicyStatusResponse: ModifyAlarmPolicyStatusResponse,
    Instance: Instance,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    DescribeAlarmPolicyResponse: DescribeAlarmPolicyResponse,
    UpdateServiceDiscoveryResponse: UpdateServiceDiscoveryResponse,
    DescribeMonitorTypesResponse: DescribeMonitorTypesResponse,
    MetricSet: MetricSet,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    UpdateServiceDiscoveryRequest: UpdateServiceDiscoveryRequest,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    DescribeAlarmHistoriesRequest: DescribeAlarmHistoriesRequest,
    MetricObjectMeaning: MetricObjectMeaning,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    ModifyPolicyGroupResponse: ModifyPolicyGroupResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    ModifyAlarmPolicyStatusRequest: ModifyAlarmPolicyStatusRequest,
    MetricData: MetricData,
    AlarmEvent: AlarmEvent,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    UpdateAlertRuleRequest: UpdateAlertRuleRequest,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    InstanceGroup: InstanceGroup,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    DeleteAlarmNoticesRequest: DeleteAlarmNoticesRequest,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    DescribeAllNamespacesRequest: DescribeAllNamespacesRequest,
    UpdateAlertRuleResponse: UpdateAlertRuleResponse,
    DescribeAlarmMetricsResponse: DescribeAlarmMetricsResponse,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    DescribeAlarmPoliciesRequest: DescribeAlarmPoliciesRequest,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    ModifyAlarmPolicyInfoResponse: ModifyAlarmPolicyInfoResponse,
    AlarmNotice: AlarmNotice,
    MetricConfig: MetricConfig,
    DescribeAlarmEventsRequest: DescribeAlarmEventsRequest,
    MidQueryCondition: MidQueryCondition,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    CreateAlertRuleRequest: CreateAlertRuleRequest,
    DescribeProductListResponse: DescribeProductListResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    AlarmHistory: AlarmHistory,
    MonitorTypeNamespace: MonitorTypeNamespace,
    DeleteAlarmPolicyResponse: DeleteAlarmPolicyResponse,
    URLNotice: URLNotice,
    DescribeAlarmPolicyRequest: DescribeAlarmPolicyRequest,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    DescribeStatisticDataResponse: DescribeStatisticDataResponse,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    MetricDatum: MetricDatum,
    DescribeAlarmNoticeResponse: DescribeAlarmNoticeResponse,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    DeleteAlertRulesRequest: DeleteAlertRulesRequest,
    DescribeAlarmNoticeRequest: DescribeAlarmNoticeRequest,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    InstanceGroups: InstanceGroups,
    GetMonitorDataResponse: GetMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    AlarmPolicyCondition: AlarmPolicyCondition,
    ModifyPolicyGroupCondition: ModifyPolicyGroupCondition,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    DeleteServiceDiscoveryRequest: DeleteServiceDiscoveryRequest,
    AlarmPolicyEventCondition: AlarmPolicyEventCondition,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    SetDefaultAlarmPolicyResponse: SetDefaultAlarmPolicyResponse,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
