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
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Warning = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Warning = 'Warning' in params ? params.Warning : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusInstancesOverview请求参数结构体
 * @class
 */
class DescribePrometheusInstancesOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤实例，目前支持：
ID: 通过实例ID来过滤 
Name: 通过实例名称来过滤
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
 * ModifyGrafanaInstance返回参数结构体
 * @class
 */
class ModifyGrafanaInstanceResponse extends  AbstractModel {
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
 * ModifyGrafanaInstance请求参数结构体
 * @class
 */
class ModifyGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Grafana 实例名称，例如：test
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
 * EnableGrafanaSSO返回参数结构体
 * @class
 */
class EnableGrafanaSSOResponse extends  AbstractModel {
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
 * 策略标签
 * @class
 */
class PolicyTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签Value
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
 * DeletePrometheusClusterAgent请求参数结构体
 * @class
 */
class DeletePrometheusClusterAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * agent列表
         * @type {Array.<PrometheusAgentInfo> || null}
         */
        this.Agents = null;

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

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentInfo();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribePrometheusScrapeJobs请求参数结构体
 * @class
 */
class DescribePrometheusScrapeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务 ID 列表
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

        /**
         * 偏移量，默认为0
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * CreatePrometheusMultiTenantInstancePostPayMode请求参数结构体
 * @class
 */
class CreatePrometheusMultiTenantInstancePostPayModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据存储时间（单位天），限制值为15，30，45之一
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例的标签
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

        /**
         * 需要关联的 Grafana 实例
         * @type {string || null}
         */
        this.GrafanaInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.GrafanaInstanceId = 'GrafanaInstanceId' in params ? params.GrafanaInstanceId : null;

    }
}

/**
 * DescribePolicyConditionListResponseDeprecatingInfo
 * @class
 */
class DescribePolicyConditionListResponseDeprecatingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否隐藏
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Hidden = null;

        /**
         * 新视图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NewViewNames = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Hidden = 'Hidden' in params ? params.Hidden : null;
        this.NewViewNames = 'NewViewNames' in params ? params.NewViewNames : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 云原生Prometheus模板可修改项
 * @class
 */
class PrometheusTempModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertDetailRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
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

        /**
         * 事件配置的告警
         * @type {string || null}
         */
        this.EbSubject = null;

        /**
         * 是否配置了事件告警
         * @type {number || null}
         */
        this.EbEventFlag = null;

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
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;
        this.EbEventFlag = 'EbEventFlag' in params ? params.EbEventFlag : null;

    }
}

/**
 * 策略类型信息
 * @class
 */
class CommonNamespaceNew extends  AbstractModel {
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
         * 监控类型
         * @type {string || null}
         */
        this.MonitorType = null;

        /**
         * 维度信息
         * @type {Array.<DimensionNew> || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DimensionNew();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
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
         * 标签key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签value
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
 * DescribePrometheusAgentInstances请求参数结构体
 * @class
 */
class DescribePrometheusAgentInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
可以是tke, eks, edge的集群id
         * @type {string || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * prometheus聚合规则实例详情，包含所属集群ID
 * @class
 */
class PrometheusRecordRuleYamlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 最近更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Yaml内容
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 如果该聚合规则来至模板，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * k8s中标签，一般以数组的方式存在
 * @class
 */
class Label extends  AbstractModel {
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
 * DescribeGrafanaIntegrations返回参数结构体
 * @class
 */
class DescribeGrafanaIntegrationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成数组
         * @type {Array.<GrafanaIntegrationConfig> || null}
         */
        this.IntegrationSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IntegrationSet) {
            this.IntegrationSet = new Array();
            for (let z in params.IntegrationSet) {
                let obj = new GrafanaIntegrationConfig();
                obj.deserialize(params.IntegrationSet[z]);
                this.IntegrationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusMultiTenantInstancePostPayMode返回参数结构体
 * @class
 */
class CreatePrometheusMultiTenantInstancePostPayModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
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
 * UpdatePrometheusAgentStatus返回参数结构体
 * @class
 */
class UpdatePrometheusAgentStatusResponse extends  AbstractModel {
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
 * SyncPrometheusTemp返回参数结构体
 * @class
 */
class SyncPrometheusTempResponse extends  AbstractModel {
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
 * UpdateGrafanaWhiteList返回参数结构体
 * @class
 */
class UpdateGrafanaWhiteListResponse extends  AbstractModel {
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
 * DescribeGrafanaEnvironments请求参数结构体
 * @class
 */
class DescribeGrafanaEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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
 * prometheus配置
 * @class
 */
class PrometheusConfigItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 配置内容
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 用于出参，如果该配置来至模板，则为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

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

        /**
         * 策略关联的过滤维度信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilterDimensionsParam = null;

        /**
         * 是否为一键告警策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsOneClick = null;

        /**
         * 一键告警策略是否开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OneClickStatus = null;

        /**
         * 高级指标数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AdvancedMetricNumber = null;

        /**
         * 策略是否是全部对象策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsBindAll = null;

        /**
         * 策略标签
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
        this.FilterDimensionsParam = 'FilterDimensionsParam' in params ? params.FilterDimensionsParam : null;
        this.IsOneClick = 'IsOneClick' in params ? params.IsOneClick : null;
        this.OneClickStatus = 'OneClickStatus' in params ? params.OneClickStatus : null;
        this.AdvancedMetricNumber = 'AdvancedMetricNumber' in params ? params.AdvancedMetricNumber : null;
        this.IsBindAll = 'IsBindAll' in params ? params.IsBindAll : null;

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
 * DeleteExporterIntegration请求参数结构体
 * @class
 */
class DeleteExporterIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Kubernetes 集群类型，取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群<EKS> </li>
<li> 3= Prometheus管理的弹性集群<MEKS> </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 集群 ID
         * @type {string || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
         * 通用告警策略类型(包括：应用性能监控，前端性能监控，云拨测)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CommonNamespaceNew> || null}
         */
        this.CommonNamespaces = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CommonNamespaces) {
            this.CommonNamespaces = new Array();
            for (let z in params.CommonNamespaces) {
                let obj = new CommonNamespaceNew();
                obj.deserialize(params.CommonNamespaces[z]);
                this.CommonNamespaces.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminatePrometheusInstances请求参数结构体
 * @class
 */
class TerminatePrometheusInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表
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
 * InstallPlugins返回参数结构体
 * @class
 */
class InstallPluginsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已安装插件 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PluginIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginIds = 'PluginIds' in params ? params.PluginIds : null;
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

        /**
         * 是否为高级指标，0否，1是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAdvanced = null;

        /**
         * 高级指标是否开通，0否，1是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsOpen = null;

        /**
         * 集成中心产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 最大值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ValueMax = null;

        /**
         * 最小值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ValueMin = null;

        /**
         * 告警分级阈值配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AlarmHierarchicalValue || null}
         */
        this.HierarchicalValue = null;

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
        this.IsAdvanced = 'IsAdvanced' in params ? params.IsAdvanced : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ValueMax = 'ValueMax' in params ? params.ValueMax : null;
        this.ValueMin = 'ValueMin' in params ? params.ValueMin : null;

        if (params.HierarchicalValue) {
            let obj = new AlarmHierarchicalValue();
            obj.deserialize(params.HierarchicalValue)
            this.HierarchicalValue = obj;
        }

    }
}

/**
 * CreateGrafanaIntegration请求参数结构体
 * @class
 */
class CreateGrafanaIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集成类型，可在实例详情-云产品集成-集成列表查看。例如：tencent-cloud-prometheus
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 集成配置
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * 托管prometheusV2实例概览
 * @class
 */
class PrometheusInstancesOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除）
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * 是否开启 Grafana（0:不开启，1:开启）
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * 实例付费类型（1:试用版；2:预付费）
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 绑定集群总数
         * @type {number || null}
         */
        this.BoundTotal = null;

        /**
         * 绑定集群正常状态总数
         * @type {number || null}
         */
        this.BoundNormal = null;

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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.BoundTotal = 'BoundTotal' in params ? params.BoundTotal : null;
        this.BoundNormal = 'BoundNormal' in params ? params.BoundNormal : null;

    }
}

/**
 * DescribePrometheusInstanceInitStatus返回参数结构体
 * @class
 */
class DescribePrometheusInstanceInitStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例初始化状态，取值：
uninitialized 未初始化 
initializing 初始化中
running 初始化完成，运行中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 初始化任务步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskStepInfo> || null}
         */
        this.Steps = null;

        /**
         * 实例eks集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EksClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new TaskStepInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }
        this.EksClusterId = 'EksClusterId' in params ? params.EksClusterId : null;
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
 * DescribePrometheusInstanceUsage请求参数结构体
 * @class
 */
class DescribePrometheusInstanceUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartCalcDate = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndCalcDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.StartCalcDate = 'StartCalcDate' in params ? params.StartCalcDate : null;
        this.EndCalcDate = 'EndCalcDate' in params ? params.EndCalcDate : null;

    }
}

/**
 * DeletePrometheusScrapeJobs请求参数结构体
 * @class
 */
class DeletePrometheusScrapeJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 任务 ID 列表
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

    }
}

/**
 * CreatePrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class CreatePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * yaml的内容
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * 关联集群时在集群内部署组件的pod额外配置
 * @class
 */
class PrometheusClusterAgentPodConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否使用HostNetWork
         * @type {boolean || null}
         */
        this.HostNet = null;

        /**
         * 指定pod运行节点
         * @type {Array.<Label> || null}
         */
        this.NodeSelector = null;

        /**
         * 容忍污点
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostNet = 'HostNet' in params ? params.HostNet : null;

        if (params.NodeSelector) {
            this.NodeSelector = new Array();
            for (let z in params.NodeSelector) {
                let obj = new Label();
                obj.deserialize(params.NodeSelector[z]);
                this.NodeSelector.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

    }
}

/**
 * 查询 Grafana 实例时的实例类型
 * @class
 */
class GrafanaInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID 数组
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Grafana 内网地址
         * @type {string || null}
         */
        this.InternetUrl = null;

        /**
         * Grafana 公网地址
         * @type {string || null}
         */
        this.InternalUrl = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:停机中； 6:已停机； 7: 已删除）
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * 实例的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

        /**
         * 实例的可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 计费模式（1:包年包月）
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * VPC 名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 子网名称
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 地域 ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可访问此实例的完整 URL
         * @type {string || null}
         */
        this.RootUrl = null;

        /**
         * 是否开启 SSO
         * @type {boolean || null}
         */
        this.EnableSSO = null;

        /**
         * 版本号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * SSO登录时是否开启cam鉴权
         * @type {boolean || null}
         */
        this.EnableSSOCamCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.InternetUrl = 'InternetUrl' in params ? params.InternetUrl : null;
        this.InternalUrl = 'InternalUrl' in params ? params.InternalUrl : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RootUrl = 'RootUrl' in params ? params.RootUrl : null;
        this.EnableSSO = 'EnableSSO' in params ? params.EnableSSO : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.EnableSSOCamCheck = 'EnableSSOCamCheck' in params ? params.EnableSSOCamCheck : null;

    }
}

/**
 * DeletePrometheusConfig返回参数结构体
 * @class
 */
class DeletePrometheusConfigResponse extends  AbstractModel {
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
 * CreatePrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class CreatePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * UninstallGrafanaPlugins返回参数结构体
 * @class
 */
class UninstallGrafanaPluginsResponse extends  AbstractModel {
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
 * ModifyPrometheusTemp请求参数结构体
 * @class
 */
class ModifyPrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 修改内容
         * @type {PrometheusTempModify || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Template) {
            let obj = new PrometheusTempModify();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

    }
}

/**
 * UpgradeGrafanaInstance返回参数结构体
 * @class
 */
class UpgradeGrafanaInstanceResponse extends  AbstractModel {
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
 * BindingPolicyTag请求参数结构体
 * @class
 */
class BindingPolicyTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定取值 monitor
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 产品类型
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 策略标签
         * @type {PolicyTag || null}
         */
        this.Tag = null;

        /**
         * 实例分组ID
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 批量绑定标签
         * @type {Array.<PolicyTag> || null}
         */
        this.BatchTag = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.Tag) {
            let obj = new PolicyTag();
            obj.deserialize(params.Tag)
            this.Tag = obj;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

        if (params.BatchTag) {
            this.BatchTag = new Array();
            for (let z in params.BatchTag) {
                let obj = new PolicyTag();
                obj.deserialize(params.BatchTag[z]);
                this.BatchTag.push(obj);
            }
        }

    }
}

/**
 * DeletePrometheusTempSync返回参数结构体
 * @class
 */
class DeletePrometheusTempSyncResponse extends  AbstractModel {
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
 * DescribeDNSConfig请求参数结构体
 * @class
 */
class DescribeDNSConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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
 * DescribePrometheusRecordRules请求参数结构体
 * @class
 */
class DescribePrometheusRecordRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DescribeExporterIntegrations返回参数结构体
 * @class
 */
class DescribeExporterIntegrationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成配置列表
         * @type {Array.<IntegrationConfiguration> || null}
         */
        this.IntegrationSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IntegrationSet) {
            this.IntegrationSet = new Array();
            for (let z in params.IntegrationSet) {
                let obj = new IntegrationConfiguration();
                obj.deserialize(params.IntegrationSet[z]);
                this.IntegrationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * EnableGrafanaSSO请求参数结构体
 * @class
 */
class EnableGrafanaSSORequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启 SSO，true为开启，false 为不开启
         * @type {boolean || null}
         */
        this.EnableSSO = null;

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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
        this.EnableSSO = 'EnableSSO' in params ? params.EnableSSO : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribePrometheusScrapeJobs返回参数结构体
 * @class
 */
class DescribePrometheusScrapeJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusScrapeJob> || null}
         */
        this.ScrapeJobSet = null;

        /**
         * 任务总量
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

        if (params.ScrapeJobSet) {
            this.ScrapeJobSet = new Array();
            for (let z in params.ScrapeJobSet) {
                let obj = new PrometheusScrapeJob();
                obj.deserialize(params.ScrapeJobSet[z]);
                this.ScrapeJobSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableGrafanaInternet请求参数结构体
 * @class
 */
class EnableGrafanaInternetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-kleu3gt0
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 开启或关闭公网访问，true为开启，false 为不开启
         * @type {boolean || null}
         */
        this.EnableInternet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.EnableInternet = 'EnableInternet' in params ? params.EnableInternet : null;

    }
}

/**
 * DescribePluginOverviews返回参数结构体
 * @class
 */
class DescribePluginOverviewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件列表
         * @type {Array.<GrafanaPlugin> || null}
         */
        this.PluginSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PluginSet) {
            this.PluginSet = new Array();
            for (let z in params.PluginSet) {
                let obj = new GrafanaPlugin();
                obj.deserialize(params.PluginSet[z]);
                this.PluginSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Grafana可视化服务 账号权限
 * @class
 */
class GrafanaAccountRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组织
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * 权限
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DestroyPrometheusInstance请求参数结构体
 * @class
 */
class DestroyPrometheusInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，该实例必须先被 terminate
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
 * 2018版策略模板列表接收人信息
 * @class
 */
class PolicyGroupReceiverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 有效时段结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 是否需要发送通知
         * @type {number || null}
         */
        this.NeedSendNotice = null;

        /**
         * 告警接收渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 电话告警对个人间隔（秒）
         * @type {number || null}
         */
        this.PersonInterval = null;

        /**
         * 消息接收组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * 接受者类型
         * @type {string || null}
         */
        this.ReceiverType = null;

        /**
         * 接收人列表。通过平台接口查询到的接收人id列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ReceiverUserList = null;

        /**
         * 告警恢复通知方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RecoverNotify = null;

        /**
         * 电话告警每轮间隔（秒）
         * @type {number || null}
         */
        this.RoundInterval = null;

        /**
         * 电话告警轮数
         * @type {number || null}
         */
        this.RoundNumber = null;

        /**
         * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SendFor = null;

        /**
         * 有效时段开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UIDList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UIDList = 'UIDList' in params ? params.UIDList : null;

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

        /**
         * 是否为高级指标。1是 0否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAdvanced = null;

        /**
         * 高级指标是否开通。1是 0否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsOpen = null;

        /**
         * 集成中心产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductId = null;

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
        this.IsAdvanced = 'IsAdvanced' in params ? params.IsAdvanced : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

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
 * DeleteSSOAccount请求参数结构体
 * @class
 */
class DeleteSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户账号 ID ，例如：10000000
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribePrometheusAgentInstances返回参数结构体
 * @class
 */
class DescribePrometheusAgentInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联该集群的实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.Instances = 'Instances' in params ? params.Instances : null;
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

        /**
         * 通知开始时间 一天开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 通知结束时间 一天开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 通知周期 1-7表示周一到周日
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Weekday = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Weekday = 'Weekday' in params ? params.Weekday : null;

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
 * DeletePrometheusTemp返回参数结构体
 * @class
 */
class DeletePrometheusTempResponse extends  AbstractModel {
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
         * 如果通过模板创建，需要传入模板中该指标的对应RuleId
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
         * 告警时间段开始时间。范围[0,86400)，作为 UNIX 时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
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
 * Prometheus 聚合规则响应结构体内信息
 * @class
 */
class RecordingRuleSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则状态码
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则内容组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * 规则数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 规则创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 规则最近更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

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
 * DescribeGrafanaInstances请求参数结构体
 * @class
 */
class DescribeGrafanaInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Grafana 实例 ID 数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * Grafana 实例名，支持前缀模糊搜索
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 查询状态
         * @type {Array.<number> || null}
         */
        this.InstanceStatus = null;

        /**
         * 标签过滤数组
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagFilters = null;

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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }

    }
}

/**
 * DescribePrometheusTempSync请求参数结构体
 * @class
 */
class DescribePrometheusTempSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribePrometheusGlobalConfig返回参数结构体
 * @class
 */
class DescribePrometheusGlobalConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置内容
         * @type {string || null}
         */
        this.Config = null;

        /**
         * ServiceMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * RawJobs列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRecordingRule返回参数结构体
 * @class
 */
class CreateRecordingRuleResponse extends  AbstractModel {
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
 * CreateGrafanaNotificationChannel返回参数结构体
 * @class
 */
class CreateGrafanaNotificationChannelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGrafanaNotificationChannels请求参数结构体
 * @class
 */
class DescribeGrafanaNotificationChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 告警通道名称，例如：test
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 告警通道 ID，例如：nchannel-abcd1234
         * @type {Array.<string> || null}
         */
        this.ChannelIDs = null;

        /**
         * 告警通道状态
         * @type {number || null}
         */
        this.ChannelState = null;

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
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ChannelIDs = 'ChannelIDs' in params ? params.ChannelIDs : null;
        this.ChannelState = 'ChannelState' in params ? params.ChannelState : null;

    }
}

/**
 * CleanGrafanaInstance请求参数结构体
 * @class
 */
class CleanGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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
 * DescribeSSOAccount请求参数结构体
 * @class
 */
class DescribeSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 填写对应的账号 ID，将会按账号 ID 进行过滤，例如：10000
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * UpdateExporterIntegration返回参数结构体
 * @class
 */
class UpdateExporterIntegrationResponse extends  AbstractModel {
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

        /**
         * 推送CLS日志服务的操作 最多1个
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

        /**
         * 模板绑定的标签
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

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
            }
        }

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
 * UpdateGrafanaNotificationChannel返回参数结构体
 * @class
 */
class UpdateGrafanaNotificationChannelResponse extends  AbstractModel {
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
 * CreateExporterIntegration返回参数结构体
 * @class
 */
class CreateExporterIntegrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回创建成功的集成名称列表
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
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
         * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 告警策略ID，使用此字段时 GroupId 会被忽略
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 事件配置的告警
         * @type {string || null}
         */
        this.EbSubject = null;

        /**
         * 是否配置了事件告警
         * @type {number || null}
         */
        this.EbEventFlag = null;

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
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;
        this.EbEventFlag = 'EbEventFlag' in params ? params.EbEventFlag : null;

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
         * 告警触发条件的判断方式. 0: 任意; 1: 全部; 2: 复合. 当取值为2的时候为复合告警，与参数 ComplexExpression 配合使用.
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

        /**
         * 复合告警触发条件的判断表达式，当 IsUnionRule 取值为2的时候有效. 其作用是描述多个触发条件需要满足表达式求值为True时才算是满足告警条件.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComplexExpression = null;

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
        this.ComplexExpression = 'ComplexExpression' in params ? params.ComplexExpression : null;

    }
}

/**
 * DescribeGrafanaChannels请求参数结构体
 * @class
 */
class DescribeGrafanaChannelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 告警通道名称，例如：test
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 告警通道 ID，例如：nchannel-abcd1234
         * @type {Array.<string> || null}
         */
        this.ChannelIds = null;

        /**
         * 告警通道状态
         * @type {number || null}
         */
        this.ChannelState = null;

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
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ChannelIds = 'ChannelIds' in params ? params.ChannelIds : null;
        this.ChannelState = 'ChannelState' in params ? params.ChannelState : null;

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
 * DescribeGrafanaConfig请求参数结构体
 * @class
 */
class DescribeGrafanaConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
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
 * UpdateRecordingRule请求参数结构体
 * @class
 */
class UpdateRecordingRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚合规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 聚合规则组内容，格式为 yaml，通过 base64 进行编码。
         * @type {string || null}
         */
        this.Group = null;

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus 聚合规则 ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

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
 * DescribePrometheusInstances请求参数结构体
 * @class
 */
class DescribePrometheusInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 按照【实例状态】进行过滤。
<ul>
<li>1：正在创建</li>
<li>2：运行中</li>
<li>3：异常</li>
<li>4：重建中</li>
<li>5：销毁中</li>
<li>6：已停服</li>
<li>8：欠费停服中</li>
<li>9：欠费已停服</li>
</ul>
         * @type {Array.<number> || null}
         */
        this.InstanceStatus = null;

        /**
         * 按照【实例名称】进行过滤。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagFilters = null;

        /**
         * 按照【实例的IPv4地址】进行过滤。
         * @type {Array.<string> || null}
         */
        this.IPv4Address = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 按照【计费类型】进行过滤。
<li>2：包年包月</li>
<li>3：按量</li>
         * @type {number || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.IPv4Address = 'IPv4Address' in params ? params.IPv4Address : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * kubernetes Taint
 * @class
 */
class Toleration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容忍应用到的 taint key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 键与值的关系
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 要匹配的污点效果
         * @type {string || null}
         */
        this.Effect = null;

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
        this.Effect = 'Effect' in params ? params.Effect : null;

    }
}

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
         * @type {number || null}
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
 * InstallPlugins请求参数结构体
 * @class
 */
class InstallPluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件信息
         * @type {Array.<GrafanaPlugin> || null}
         */
        this.Plugins = null;

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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

        if (params.Plugins) {
            this.Plugins = new Array();
            for (let z in params.Plugins) {
                let obj = new GrafanaPlugin();
                obj.deserialize(params.Plugins[z]);
                this.Plugins.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
 * Prometheus 托管服务标签
 * @class
 */
class PrometheusTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的健值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签对应的值
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
        this.Value = 'Value' in params ? params.Value : null;

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
 * BindingPolicyObject请求参数结构体
 * @class
 */
class BindingPolicyObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 必填。固定值"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 策略组id，例如 4739573。逐渐弃用，建议使用 PolicyId 参数
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 告警策略ID，例如“policy-gh892hg0”。PolicyId 参数与 GroupId 参数至少要填一个，否则会报参数错误，建议使用该参数。若两者同时存在则以该参数为准
         * @type {string || null}
         */
        this.PolicyId = null;

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
         * 事件配置的告警
         * @type {string || null}
         */
        this.EbSubject = null;

        /**
         * 是否配置了事件告警
         * @type {number || null}
         */
        this.EbEventFlag = null;

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
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new BindingPolicyObjectDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;
        this.EbEventFlag = 'EbEventFlag' in params ? params.EbEventFlag : null;

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
 * EnableSSOCamCheck返回参数结构体
 * @class
 */
class EnableSSOCamCheckResponse extends  AbstractModel {
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
 * CreatePrometheusScrapeJob返回参数结构体
 * @class
 */
class CreatePrometheusScrapeJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功创建抓取任务 Id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 告警策略类型，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device
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
         * 触发条件模板 Id，该参数与 Condition 参数二选一。如果策略绑定触发条件模板，则传该参数；否则不传该参数，而是传 Condition 参数。触发条件模板 Id 可以从 [DescribeConditionsTemplateList](https://cloud.tencent.com/document/api/248/70250) 接口获取。
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

        /**
         * 全局过滤条件
         * @type {AlarmPolicyFilter || null}
         */
        this.Filter = null;

        /**
         * 聚合维度列表，指定按哪些维度 key 来做 group by
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * 模板绑定的标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 日志告警信息
         * @type {LogAlarmReq || null}
         */
        this.LogAlarmReqInfo = null;

        /**
         * 告警分级通知规则配置
         * @type {Array.<AlarmHierarchicalNotice> || null}
         */
        this.HierarchicalNotices = null;

        /**
         * 迁移策略专用字段，0-走鉴权逻辑，1-跳过鉴权逻辑
         * @type {number || null}
         */
        this.MigrateFlag = null;

        /**
         * 事件配置的告警
         * @type {string || null}
         */
        this.EbSubject = null;

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

        if (params.Filter) {
            let obj = new AlarmPolicyFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.LogAlarmReqInfo) {
            let obj = new LogAlarmReq();
            obj.deserialize(params.LogAlarmReqInfo)
            this.LogAlarmReqInfo = obj;
        }

        if (params.HierarchicalNotices) {
            this.HierarchicalNotices = new Array();
            for (let z in params.HierarchicalNotices) {
                let obj = new AlarmHierarchicalNotice();
                obj.deserialize(params.HierarchicalNotices[z]);
                this.HierarchicalNotices.push(obj);
            }
        }
        this.MigrateFlag = 'MigrateFlag' in params ? params.MigrateFlag : null;
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;

    }
}

/**
 * PrometheusZoneItem 响应结构体内的地域信息
 * @class
 */
class PrometheusZoneItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区 ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区状态( 0: 不可用；1: 可用)
         * @type {number || null}
         */
        this.ZoneState = null;

        /**
         * 地域 ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可用区名（目前为中文）
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
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyPrometheusAlertPolicy请求参数结构体
 * @class
 */
class ModifyPrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警配置
         * @type {PrometheusAlertPolicyItem || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertPolicyItem();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * ModifyPrometheusInstanceAttributes返回参数结构体
 * @class
 */
class ModifyPrometheusInstanceAttributesResponse extends  AbstractModel {
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
 * 云原生Prometheus模板同步目标
 * @class
 */
class PrometheusTemplateSyncTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 目标实例
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群id，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 最后一次同步时间， 用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SyncTime = null;

        /**
         * 当前使用的模板版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 集群类型，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 用于出参，实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 用于出参，集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SyncTime = 'SyncTime' in params ? params.SyncTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * DescribePrometheusAlertPolicy返回参数结构体
 * @class
 */
class DescribePrometheusAlertPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertRules = null;

        /**
         * 总数
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

        if (params.AlertRules) {
            this.AlertRules = new Array();
            for (let z in params.AlertRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertRules[z]);
                this.AlertRules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGrafanaEnvironments请求参数结构体
 * @class
 */
class UpdateGrafanaEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 环境变量字符串
         * @type {string || null}
         */
        this.Envs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Envs = 'Envs' in params ? params.Envs : null;

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
 * DeleteGrafanaNotificationChannel返回参数结构体
 * @class
 */
class DeleteGrafanaNotificationChannelResponse extends  AbstractModel {
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
 * ModifyPrometheusGlobalNotification请求参数结构体
 * @class
 */
class ModifyPrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警通知渠道
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }

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
 * DescribePrometheusRecordRules返回参数结构体
 * @class
 */
class DescribePrometheusRecordRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚合规则
         * @type {Array.<PrometheusRecordRuleYamlItem> || null}
         */
        this.Records = null;

        /**
         * 总数
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new PrometheusRecordRuleYamlItem();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusGlobalNotification返回参数结构体
 * @class
 */
class DescribePrometheusGlobalNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局告警通知渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
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
 * DeletePrometheusAlertPolicy请求参数结构体
 * @class
 */
class DeletePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警策略id列表
         * @type {Array.<string> || null}
         */
        this.AlertIds = null;

        /**
         * 告警策略名称
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AlertIds = 'AlertIds' in params ? params.AlertIds : null;
        this.Names = 'Names' in params ? params.Names : null;

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
 * ModifyPrometheusAgentExternalLabels返回参数结构体
 * @class
 */
class ModifyPrometheusAgentExternalLabelsResponse extends  AbstractModel {
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

        /**
         * 告警通知推送到CLS服务 最多1个
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

        /**
         * 告警通知模板绑定的告警策略ID列表
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

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
            }
        }
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

    }
}

/**
 * DescribeGrafanaWhiteList返回参数结构体
 * @class
 */
class DescribeGrafanaWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数组
         * @type {Array.<string> || null}
         */
        this.WhiteList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteList = 'WhiteList' in params ? params.WhiteList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ResumeGrafanaInstance请求参数结构体
 * @class
 */
class ResumeGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
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
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Warning = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Warning = 'Warning' in params ? params.Warning : null;
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
 * DescribeExporterIntegrations请求参数结构体
 * @class
 */
class DescribeExporterIntegrationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kubernetes 集群类型，取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群<EKS> </li>
<li> 3= Prometheus管理的弹性集群<MEKS> </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 集群 ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 名字
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
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribePrometheusInstanceDetail返回参数结构体
 * @class
 */
class DescribePrometheusInstanceDetailResponse extends  AbstractModel {
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
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例业务状态。取值范围：

1：正在创建
2：运行中
3：异常
4：重建中
5：销毁中
6：已停服
8：欠费停服中
9：欠费已停服
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * 计费状态

1：正常
2：过期
3：销毁
4：分配中
5：分配失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * 是否开启 Grafana
0：不开启
1：开启
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * 实例计费模式。取值范围：

2：包年包月
3：按量
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 自动续费标记

0：不自动续费
1：开启自动续费
2：禁止自动续费
-1：无效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateGrafanaNotificationChannel请求参数结构体
 * @class
 */
class CreateGrafanaNotificationChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警通道名称，例如：test
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 默认为1，已废弃，请使用 OrganizationIds
         * @type {number || null}
         */
        this.OrgId = null;

        /**
         * 接受告警通道 ID 数组
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 额外组织 ID 数组，已废弃，请使用 OrganizationIds
         * @type {Array.<string> || null}
         */
        this.ExtraOrgIds = null;

        /**
         * 生效的所有组织 ID 数组，默认为 ["1"]
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ExtraOrgIds = 'ExtraOrgIds' in params ? params.ExtraOrgIds : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

    }
}

/**
 * DescribePrometheusTargetsTMP返回参数结构体
 * @class
 */
class DescribePrometheusTargetsTMPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所有Job的targets信息
         * @type {Array.<PrometheusJobTargets> || null}
         */
        this.Jobs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new PrometheusJobTargets();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusClusterAgents返回参数结构体
 * @class
 */
class DescribePrometheusClusterAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被关联集群信息
         * @type {Array.<PrometheusAgentOverview> || null}
         */
        this.Agents = null;

        /**
         * 被关联集群总量
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

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentOverview();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdatePrometheusScrapeJob请求参数结构体
 * @class
 */
class UpdatePrometheusScrapeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID，例如：prom-abcd1234
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID，例如：agent-abcd1234，可在控制台 Agent 管理中获取
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 抓取任务 ID，例如：job-abcd1234，可在控制台 Agent 管理-抓取任务配置中获取
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 抓取任务配置，格式：job_name:xx
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * 托管Prometheus agent信息
 * @class
 */
class PrometheusAgentInfo extends  AbstractModel {
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
 * CreatePrometheusClusterAgent返回参数结构体
 * @class
 */
class CreatePrometheusClusterAgentResponse extends  AbstractModel {
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
 * CreateGrafanaIntegration返回参数结构体
 * @class
 */
class CreateGrafanaIntegrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindPrometheusManagedGrafana请求参数结构体
 * @class
 */
class BindPrometheusManagedGrafanaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Grafana 可视化服务实例 ID
         * @type {string || null}
         */
        this.GrafanaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GrafanaId = 'GrafanaId' in params ? params.GrafanaId : null;

    }
}

/**
 * 告警渠道使用自建alertmanager的配置
 * @class
 */
class PrometheusAlertManagerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * alertmanager url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * alertmanager部署所在集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * alertmanager部署所在集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Url = 'Url' in params ? params.Url : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreateGrafanaInstance请求参数结构体
 * @class
 */
class CreateGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID 数组
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Grafana 初始密码
         * @type {string || null}
         */
        this.GrafanaInitPassword = null;

        /**
         * 是否启用外网
         * @type {boolean || null}
         */
        this.EnableInternet = null;

        /**
         * 标签
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.GrafanaInitPassword = 'GrafanaInitPassword' in params ? params.GrafanaInitPassword : null;
        this.EnableInternet = 'EnableInternet' in params ? params.EnableInternet : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

    }
}

/**
 * DescribePrometheusInstanceUsage返回参数结构体
 * @class
 */
class DescribePrometheusInstanceUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用量列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusInstanceTenantUsage> || null}
         */
        this.UsageSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UsageSet) {
            this.UsageSet = new Array();
            for (let z in params.UsageSet) {
                let obj = new PrometheusInstanceTenantUsage();
                obj.deserialize(params.UsageSet[z]);
                this.UsageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusGlobalNotification请求参数结构体
 * @class
 */
class DescribePrometheusGlobalNotificationRequest extends  AbstractModel {
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
 * DeleteExporterIntegration返回参数结构体
 * @class
 */
class DeleteExporterIntegrationResponse extends  AbstractModel {
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
 * UpdateRecordingRule返回参数结构体
 * @class
 */
class UpdateRecordingRuleResponse extends  AbstractModel {
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
 * CreatePrometheusAgent返回参数结构体
 * @class
 */
class CreatePrometheusAgentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的 Agent Id
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusAlertPolicy请求参数结构体
 * @class
 */
class DescribePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤
支持ID，Name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DescribePrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class DescribePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤，当前支持
Name = Name
Values = 目标名称列表
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DescribeGrafanaWhiteList请求参数结构体
 * @class
 */
class DescribeGrafanaWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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
 * DescribePrometheusConfig请求参数结构体
 * @class
 */
class DescribePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * CreateGrafanaInstance返回参数结构体
 * @class
 */
class CreateGrafanaInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名
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
         * 报警规则注释列表。

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
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

        /**
         * 通知模版与策略绑定关系
         * @type {Array.<NoticeBindPolicys> || null}
         */
        this.NoticeBindPolicys = null;

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

        if (params.NoticeBindPolicys) {
            this.NoticeBindPolicys = new Array();
            for (let z in params.NoticeBindPolicys) {
                let obj = new NoticeBindPolicys();
                obj.deserialize(params.NoticeBindPolicys[z]);
                this.NoticeBindPolicys.push(obj);
            }
        }

    }
}

/**
 * DescribeGrafanaNotificationChannels返回参数结构体
 * @class
 */
class DescribeGrafanaNotificationChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通道数组
         * @type {Array.<GrafanaNotificationChannel> || null}
         */
        this.NotificationChannelSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NotificationChannelSet) {
            this.NotificationChannelSet = new Array();
            for (let z in params.NotificationChannelSet) {
                let obj = new GrafanaNotificationChannel();
                obj.deserialize(params.NotificationChannelSet[z]);
                this.NotificationChannelSet.push(obj);
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
 * ResumeGrafanaInstance返回参数结构体
 * @class
 */
class ResumeGrafanaInstanceResponse extends  AbstractModel {
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
 * DescribePrometheusTempSync返回参数结构体
 * @class
 */
class DescribePrometheusTempSyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步目标详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
         */
        this.Targets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusConfig返回参数结构体
 * @class
 */
class CreatePrometheusConfigResponse extends  AbstractModel {
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
 * UpdateDNSConfig请求参数结构体
 * @class
 */
class UpdateDNSConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * DNS 数组
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;

    }
}

/**
 * DeletePrometheusClusterAgent返回参数结构体
 * @class
 */
class DeletePrometheusClusterAgentResponse extends  AbstractModel {
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
 * DescribeDNSConfig返回参数结构体
 * @class
 */
class DescribeDNSConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS 服务器数组
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecordingRules请求参数结构体
 * @class
 */
class DeleteRecordingRulesRequest extends  AbstractModel {
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
 * UninstallGrafanaPlugins请求参数结构体
 * @class
 */
class UninstallGrafanaPluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件 ID 数组，例如"PluginIds": [ "grafana-clock-panel" ]，可通过 DescribePluginOverviews 获取 PluginId
         * @type {Array.<string> || null}
         */
        this.PluginIds = null;

        /**
         * Grafana 实例 ID，例如：grafana-abcdefg
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
        this.PluginIds = 'PluginIds' in params ? params.PluginIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteSSOAccount返回参数结构体
 * @class
 */
class DeleteSSOAccountResponse extends  AbstractModel {
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
 * Grafana可视化服务 授权账户信息
 * @class
 */
class GrafanaAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户权限
         * @type {Array.<GrafanaAccountRole> || null}
         */
        this.Role = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateAt = null;

        /**
         * 实例 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户主账号 UIN
         * @type {string || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Role) {
            this.Role = new Array();
            for (let z in params.Role) {
                let obj = new GrafanaAccountRole();
                obj.deserialize(params.Role[z]);
                this.Role.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.CreateAt = 'CreateAt' in params ? params.CreateAt : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

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
 * GetPrometheusAgentManagementCommand请求参数结构体
 * @class
 */
class GetPrometheusAgentManagementCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;

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
 * GetPrometheusAgentManagementCommand返回参数结构体
 * @class
 */
class GetPrometheusAgentManagementCommandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent 管理命令
         * @type {ManagementCommand || null}
         */
        this.Command = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Command) {
            let obj = new ManagementCommand();
            obj.deserialize(params.Command)
            this.Command = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateDNSConfig返回参数结构体
 * @class
 */
class UpdateDNSConfigResponse extends  AbstractModel {
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
 * UninstallGrafanaDashboard返回参数结构体
 * @class
 */
class UninstallGrafanaDashboardResponse extends  AbstractModel {
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
 * 告警分级阈值配置
 * @class
 */
class AlarmHierarchicalValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提醒等级阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remind = null;

        /**
         * 警告等级阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Warn = null;

        /**
         * 严重等级阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Serious = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Remind = 'Remind' in params ? params.Remind : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Serious = 'Serious' in params ? params.Serious : null;

    }
}

/**
 * UpdateGrafanaNotificationChannel请求参数结构体
 * @class
 */
class UpdateGrafanaNotificationChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道 ID，例如：nchannel-abcd1234
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警通道名称，例如：test
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 接受告警通道 ID 数组
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 已废弃，请使用 OrganizationIds
         * @type {Array.<string> || null}
         */
        this.ExtraOrgIds = null;

        /**
         * 生效的组织 ID 数组
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ExtraOrgIds = 'ExtraOrgIds' in params ? params.ExtraOrgIds : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

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
         * 如果通过模板创建，需要传入模板中该指标的对应RuleId
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
 * Grafana 插件
 * @class
 */
class GrafanaPlugin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 插件 ID
         * @type {string || null}
         */
        this.PluginId = null;

        /**
         * Grafana 插件版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginId = 'PluginId' in params ? params.PluginId : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * DestroyPrometheusInstance返回参数结构体
 * @class
 */
class DestroyPrometheusInstanceResponse extends  AbstractModel {
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
 * DescribePrometheusInstances返回参数结构体
 * @class
 */
class DescribePrometheusInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusInstancesItem> || null}
         */
        this.InstanceSet = null;

        /**
         * 符合条件的实例数量。
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new PrometheusInstancesItem();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志告警检索条件结构体
 * @class
 */
class LogFilterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 比较符号
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 字段值
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * BindingPolicyTag返回参数结构体
 * @class
 */
class BindingPolicyTagResponse extends  AbstractModel {
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
 * CreateExporterIntegration请求参数结构体
 * @class
 */
class CreateExporterIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 集成配置
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Kubernetes 集群类型，取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群<EKS> </li>
<li> 3= Prometheus管理的弹性集群<MEKS> </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 集群 ID
         * @type {string || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyPrometheusConfig返回参数结构体
 * @class
 */
class ModifyPrometheusConfigResponse extends  AbstractModel {
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
 * prometheus agent
 * @class
 */
class PrometheusAgent extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent 名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ipv4 = null;

        /**
         * 心跳时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeartbeatTime = null;

        /**
         * 最近一次错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastError = null;

        /**
         * Agent 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentVersion = null;

        /**
         * Agent 状态
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
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv4 = 'Ipv4' in params ? params.Ipv4 : null;
        this.HeartbeatTime = 'HeartbeatTime' in params ? params.HeartbeatTime : null;
        this.LastError = 'LastError' in params ? params.LastError : null;
        this.AgentVersion = 'AgentVersion' in params ? params.AgentVersion : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreatePrometheusAlertPolicy返回参数结构体
 * @class
 */
class CreatePrometheusAlertPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusInstanceDetail请求参数结构体
 * @class
 */
class DescribePrometheusInstanceDetailRequest extends  AbstractModel {
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
         * 通知渠道列表 EMAIL=邮件 SMS=短信 CALL=电话 WECHAT=微信 RTX=企业微信
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

        /**
         * 电话拨打类型 SYNC=同时拨打 CIRCLE=轮询拨打 不指定时默认是轮询
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhoneCallType = null;

        /**
         * 通知周期 1-7表示周一到周日
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Weekday = null;

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
        this.PhoneCallType = 'PhoneCallType' in params ? params.PhoneCallType : null;
        this.Weekday = 'Weekday' in params ? params.Weekday : null;

    }
}

/**
 * Prometheus 服务响应体
 * @class
 */
class PrometheusInstancesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例计费模式。取值范围：
<ul>
<li>2：包年包月</li>
<li>3：按量</li>
</ul>
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * 地域 ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * 实例业务状态。取值范围：
<ul>
<li>1：正在创建</li>
<li>2：运行中</li>
<li>3：异常</li>
<li>4：重建中</li>
<li>5：销毁中</li>
<li>6：已停服</li>
<li>8：欠费停服中</li>
<li>9：欠费已停服</li>
</ul>
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 是否开启 Grafana
<li>0：不开启</li>
<li>1：开启</li>
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * 实例IPV4地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IPv4Address = null;

        /**
         * 实例关联的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusTag> || null}
         */
        this.TagSpecification = null;

        /**
         * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 计费状态
<ul>
<li>1：正常</li>
<li>2：过期</li>
<li>3：销毁</li>
<li>4：分配中</li>
<li>5：分配失败</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 自动续费标记
<ul>
<li>0：不自动续费</li>
<li>1：开启自动续费</li>
<li>2：禁止自动续费</li>
<li>-1：无效</ii>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 是否快过期
<ul>
<li>0：否</li>
<li>1：快过期</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsNearExpire = null;

        /**
         * 数据写入需要的 Token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthToken = null;

        /**
         * Prometheus Remote Write 的地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RemoteWrite = null;

        /**
         * Prometheus HTTP Api 根地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiRootPath = null;

        /**
         * Proxy 的地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyAddress = null;

        /**
         * Grafana 运行状态
<ul>
<li>1：正在创建</li>
<li>2：运行中</li>
<li>3：异常</li>
<li>4：重启中</li>
<li>5：销毁中</li>
<li>6：已停机</li>
<li>7：已删除</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GrafanaStatus = null;

        /**
         * Grafana IP 白名单列表，使用英文分号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaIpWhiteList = null;

        /**
         * 实例的授权信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusInstanceGrantInfo || null}
         */
        this.Grant = null;

        /**
         * 绑定的 Grafana 实例 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaInstanceId = null;

        /**
         * 告警规则限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AlertRuleLimit = null;

        /**
         * 预聚合规则限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordingRuleLimit = null;

        /**
         * 迁移状态，0-不在迁移中，1-迁移中、原实例，2-迁移中、目标实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MigrationType = null;

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
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.IPv4Address = 'IPv4Address' in params ? params.IPv4Address : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new PrometheusTag();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.IsNearExpire = 'IsNearExpire' in params ? params.IsNearExpire : null;
        this.AuthToken = 'AuthToken' in params ? params.AuthToken : null;
        this.RemoteWrite = 'RemoteWrite' in params ? params.RemoteWrite : null;
        this.ApiRootPath = 'ApiRootPath' in params ? params.ApiRootPath : null;
        this.ProxyAddress = 'ProxyAddress' in params ? params.ProxyAddress : null;
        this.GrafanaStatus = 'GrafanaStatus' in params ? params.GrafanaStatus : null;
        this.GrafanaIpWhiteList = 'GrafanaIpWhiteList' in params ? params.GrafanaIpWhiteList : null;

        if (params.Grant) {
            let obj = new PrometheusInstanceGrantInfo();
            obj.deserialize(params.Grant)
            this.Grant = obj;
        }
        this.GrafanaInstanceId = 'GrafanaInstanceId' in params ? params.GrafanaInstanceId : null;
        this.AlertRuleLimit = 'AlertRuleLimit' in params ? params.AlertRuleLimit : null;
        this.RecordingRuleLimit = 'RecordingRuleLimit' in params ? params.RecordingRuleLimit : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;

    }
}

/**
 * DescribeConditionsTemplateList请求参数结构体
 * @class
 */
class DescribeConditionsTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 视图名，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 根据触发条件模板名称过滤查询
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 根据触发条件模板ID过滤查询
         * @type {string || null}
         */
        this.GroupID = null;

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
         * 指定按更新时间的排序方式，asc=升序, desc=降序
         * @type {string || null}
         */
        this.UpdateTimeOrder = null;

        /**
         * 指定按绑定策略数目的排序方式，asc=升序, desc=降序
         * @type {string || null}
         */
        this.PolicyCountOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupID = 'GroupID' in params ? params.GroupID : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.PolicyCountOrder = 'PolicyCountOrder' in params ? params.PolicyCountOrder : null;

    }
}

/**
 * DeletePrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class DeletePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
         * 实例对象的维度组合，格式为key-value键值对形式的集合。不同类型的实例字段完全不同，如CVM为[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]，Ckafka为[{"Name":"instanceId","Value":"ckafka-l49k54dd"}]，COS为[{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key，value为key对应的值。单请求最多支持批量拉取10个实例的监控数据。
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

        /**
         * 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期。单请求的数据点数限制为1440个。
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
 * CreateRecordingRule请求参数结构体
 * @class
 */
class CreateRecordingRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚合规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 聚合规则组内容，格式为 yaml
         * @type {string || null}
         */
        this.Group = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * ModifyPrometheusConfig请求参数结构体
 * @class
 */
class ModifyPrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ServiceMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * prometheus原生Job配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

    }
}

/**
 * DescribeGrafanaEnvironments返回参数结构体
 * @class
 */
class DescribeGrafanaEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境变量字符串
         * @type {string || null}
         */
        this.Envs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Envs = 'Envs' in params ? params.Envs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteGrafanaInstance请求参数结构体
 * @class
 */
class DeleteGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名数组
         * @type {Array.<string> || null}
         */
        this.InstanceIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIDs = 'InstanceIDs' in params ? params.InstanceIDs : null;

    }
}

/**
 * Grafana 集成实例配置
 * @class
 */
class GrafanaIntegrationConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成 ID
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * 集成类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 集成内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 集成描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Grafana 跳转地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;

    }
}

/**
 * DeleteGrafanaIntegration请求参数结构体
 * @class
 */
class DeleteGrafanaIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234
         * @type {string || null}
         */
        this.IntegrationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;

    }
}

/**
 * ModifyPrometheusAlertPolicy返回参数结构体
 * @class
 */
class ModifyPrometheusAlertPolicyResponse extends  AbstractModel {
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
 * DescribePrometheusTargetsTMP请求参数结构体
 * @class
 */
class DescribePrometheusTargetsTMPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 过滤条件，当前支持
Name=state
Value=up, down, unknown
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * Grafana 告警渠道
 * @class
 */
class GrafanaChannel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道 ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 渠道名
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 告警通道模板 ID 数组
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 告警渠道的所有生效组织
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

    }
}

/**
 * CreatePrometheusConfig请求参数结构体
 * @class
 */
class CreatePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ServiceMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * prometheus原生Job配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

    }
}

/**
 * DescribeSSOAccount返回参数结构体
 * @class
 */
class DescribeSSOAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权账号列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GrafanaAccountInfo> || null}
         */
        this.AccountSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccountSet) {
            this.AccountSet = new Array();
            for (let z in params.AccountSet) {
                let obj = new GrafanaAccountInfo();
                obj.deserialize(params.AccountSet[z]);
                this.AccountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteGrafanaNotificationChannel请求参数结构体
 * @class
 */
class DeleteGrafanaNotificationChannelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道 ID 数组。例如：nchannel-abcd1234
         * @type {Array.<string> || null}
         */
        this.ChannelIDs = null;

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
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
        this.ChannelIDs = 'ChannelIDs' in params ? params.ChannelIDs : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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

        /**
         * 后台 amp consumer id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AMPConsumerId = null;

        /**
         * 推送cls渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CLSNotice> || null}
         */
        this.CLSNotices = null;

        /**
         * 通知模板绑定的标签
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
        this.AMPConsumerId = 'AMPConsumerId' in params ? params.AMPConsumerId : null;

        if (params.CLSNotices) {
            this.CLSNotices = new Array();
            for (let z in params.CLSNotices) {
                let obj = new CLSNotice();
                obj.deserialize(params.CLSNotices[z]);
                this.CLSNotices.push(obj);
            }
        }

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
 * CreatePrometheusClusterAgent请求参数结构体
 * @class
 */
class CreatePrometheusClusterAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * agent列表
         * @type {Array.<PrometheusClusterAgentBasic> || null}
         */
        this.Agents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusClusterAgentBasic();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }

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
 * DescribePrometheusInstancesOverview返回参数结构体
 * @class
 */
class DescribePrometheusInstancesOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
         * @type {Array.<PrometheusInstancesOverview> || null}
         */
        this.Instances = null;

        /**
         * 实例总数
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new PrometheusInstancesOverview();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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

        /**
         * 指标中文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricCName = null;

        /**
         * 指标英文名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricEName = null;

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
        this.MetricCName = 'MetricCName' in params ? params.MetricCName : null;
        this.MetricEName = 'MetricEName' in params ? params.MetricEName : null;

    }
}

/**
 * 实例的授权信息
 * @class
 */
class PrometheusInstanceGrantInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否有计费操作权限(1=有，2=无)
         * @type {number || null}
         */
        this.HasChargeOperation = null;

        /**
         * 是否显示VPC信息的权限(1=有，2=无)
         * @type {number || null}
         */
        this.HasVpcDisplay = null;

        /**
         * 是否可修改Grafana的状态(1=有，2=无)
         * @type {number || null}
         */
        this.HasGrafanaStatusChange = null;

        /**
         * 是否有管理agent的权限(1=有，2=无)
         * @type {number || null}
         */
        this.HasAgentManage = null;

        /**
         * 是否有管理TKE集成的权限(1=有，2=无)
         * @type {number || null}
         */
        this.HasTkeManage = null;

        /**
         * 是否显示API等信息(1=有, 2=无)
         * @type {number || null}
         */
        this.HasApiOperation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HasChargeOperation = 'HasChargeOperation' in params ? params.HasChargeOperation : null;
        this.HasVpcDisplay = 'HasVpcDisplay' in params ? params.HasVpcDisplay : null;
        this.HasGrafanaStatusChange = 'HasGrafanaStatusChange' in params ? params.HasGrafanaStatusChange : null;
        this.HasAgentManage = 'HasAgentManage' in params ? params.HasAgentManage : null;
        this.HasTkeManage = 'HasTkeManage' in params ? params.HasTkeManage : null;
        this.HasApiOperation = 'HasApiOperation' in params ? params.HasApiOperation : null;

    }
}

/**
 * 模板列表
 * @class
 */
class TemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标告警规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Condition> || null}
         */
        this.Conditions = null;

        /**
         * 事件告警规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EventCondition> || null}
         */
        this.EventConditions = null;

        /**
         * 关联告警策略组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PolicyGroup> || null}
         */
        this.PolicyGroups = null;

        /**
         * 模板策略组ID
         * @type {number || null}
         */
        this.GroupID = null;

        /**
         * 模板策略组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 最后修改人UIN
         * @type {number || null}
         */
        this.LastEditUin = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 视图
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 是否为与关系
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

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new Condition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new EventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }

        if (params.PolicyGroups) {
            this.PolicyGroups = new Array();
            for (let z in params.PolicyGroups) {
                let obj = new PolicyGroup();
                obj.deserialize(params.PolicyGroups[z]);
                this.PolicyGroups.push(obj);
            }
        }
        this.GroupID = 'GroupID' in params ? params.GroupID : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

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
 * UpdateGrafanaIntegration返回参数结构体
 * @class
 */
class UpdateGrafanaIntegrationResponse extends  AbstractModel {
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
 * CreateSSOAccount请求参数结构体
 * @class
 */
class CreateSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户账号 ID ，例如：10000000
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 权限
         * @type {Array.<GrafanaAccountRole> || null}
         */
        this.Role = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Notes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Role) {
            this.Role = new Array();
            for (let z in params.Role) {
                let obj = new GrafanaAccountRole();
                obj.deserialize(params.Role[z]);
                this.Role.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;

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
 * Prometheus告警规则
 * @class
 */
class PrometheusAlertRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * prometheus语句
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * 额外标签
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 告警发送模板
         * @type {string || null}
         */
        this.Template = null;

        /**
         * 持续时间
         * @type {string || null}
         */
        this.For = null;

        /**
         * 该条规则的描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 参考prometheus rule中的annotations
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Annotations = null;

        /**
         * 告警规则状态
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Rule = 'Rule' in params ? params.Rule : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.For = 'For' in params ? params.For : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new Label();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * UnbindPrometheusManagedGrafana返回参数结构体
 * @class
 */
class UnbindPrometheusManagedGrafanaResponse extends  AbstractModel {
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
 * DescribeGrafanaChannels返回参数结构体
 * @class
 */
class DescribeGrafanaChannelsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通道数组
         * @type {Array.<GrafanaChannel> || null}
         */
        this.NotificationChannelSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NotificationChannelSet) {
            this.NotificationChannelSet = new Array();
            for (let z in params.NotificationChannelSet) {
                let obj = new GrafanaChannel();
                obj.deserialize(params.NotificationChannelSet[z]);
                this.NotificationChannelSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 告警通知渠道配置
 * @class
 */
class PrometheusNotificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 通道类型，默认为amp，支持以下
amp
webhook
alertmanager
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebHook = null;

        /**
         * 如果Type为alertmanager, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusAlertManagerConfig || null}
         */
        this.AlertManager = null;

        /**
         * 收敛时间
         * @type {string || null}
         */
        this.RepeatInterval = null;

        /**
         * 生效起始时间
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * 生效结束时间
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ReceiverGroups = null;

        /**
         * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.PhoneNotifyOrder = null;

        /**
         * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PhoneArriveNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.WebHook = 'WebHook' in params ? params.WebHook : null;

        if (params.AlertManager) {
            let obj = new PrometheusAlertManagerConfig();
            obj.deserialize(params.AlertManager)
            this.AlertManager = obj;
        }
        this.RepeatInterval = 'RepeatInterval' in params ? params.RepeatInterval : null;
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PhoneNotifyOrder = 'PhoneNotifyOrder' in params ? params.PhoneNotifyOrder : null;
        this.PhoneCircleTimes = 'PhoneCircleTimes' in params ? params.PhoneCircleTimes : null;
        this.PhoneInnerInterval = 'PhoneInnerInterval' in params ? params.PhoneInnerInterval : null;
        this.PhoneCircleInterval = 'PhoneCircleInterval' in params ? params.PhoneCircleInterval : null;
        this.PhoneArriveNotice = 'PhoneArriveNotice' in params ? params.PhoneArriveNotice : null;

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
         * 监控类型详情
         * @type {Array.<MonitorTypeInfo> || null}
         */
        this.MonitorTypeInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.MonitorTypeInfos) {
            this.MonitorTypeInfos = new Array();
            for (let z in params.MonitorTypeInfos) {
                let obj = new MonitorTypeInfo();
                obj.deserialize(params.MonitorTypeInfos[z]);
                this.MonitorTypeInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeGrafanaInstance请求参数结构体
 * @class
 */
class UpgradeGrafanaInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 版本别名，例如：v7.4.2
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

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
 * CreatePrometheusGlobalNotification返回参数结构体
 * @class
 */
class CreatePrometheusGlobalNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局告警通知渠道ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
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
         * 根据监控类型过滤，不选默认查所有类型。"MT_QCE"=云产品监控，支持的枚举值有："MT_QCE"=云产品监控；"MT_TAW"=应用性能观测；"MT_RUM"=前端性能监控；"MT_PROBE"=云拨测
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
 * DescribePrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class DescribePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * EnableSSOCamCheck请求参数结构体
 * @class
 */
class EnableSSOCamCheckRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否开启 cam 鉴权，true为开启，false 为不开启
         * @type {boolean || null}
         */
        this.EnableSSOCamCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EnableSSOCamCheck = 'EnableSSOCamCheck' in params ? params.EnableSSOCamCheck : null;

    }
}

/**
 * DeleteGrafanaIntegration返回参数结构体
 * @class
 */
class DeleteGrafanaIntegrationResponse extends  AbstractModel {
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
 * DescribeInstalledPlugins请求参数结构体
 * @class
 */
class DescribeInstalledPluginsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-kleu3gt0
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 按插件 ID 过滤，例如：grafana-piechart-panel，可通过接口 DescribeInstalledPlugins 查看已安装的插件 ID
         * @type {string || null}
         */
        this.PluginId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PluginId = 'PluginId' in params ? params.PluginId : null;

    }
}

/**
 * DescribePrometheusZones返回参数结构体
 * @class
 */
class DescribePrometheusZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusZoneItem> || null}
         */
        this.ZoneSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new PrometheusZoneItem();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusAgents请求参数结构体
 * @class
 */
class DescribePrometheusAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent ID 列表
         * @type {Array.<string> || null}
         */
        this.AgentIds = null;

        /**
         * 偏移量，默认为0
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AgentIds = 'AgentIds' in params ? params.AgentIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * DescribePrometheusInstanceInitStatus请求参数结构体
 * @class
 */
class DescribePrometheusInstanceInitStatusRequest extends  AbstractModel {
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
 * CreatePrometheusAlertPolicy请求参数结构体
 * @class
 */
class CreatePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警配置
         * @type {PrometheusAlertPolicyItem || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertPolicyItem();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

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
         * 策略组id，如果有形如 policy-xxxx 的 id，请填到 PolicyId 字段中，本字段填 0
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 告警策略id，形如 policy-xxxx，如果填入，则GroupId可以填0
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 每次返回的数量，取值1~100，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，从0开始计数，默认0。举例来说，参数 Offset=0&Limit=20 返回第 0 到 19 项，Offset=20&Limit=20 返回第 20 到 39 项，以此类推
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
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
 * UpgradeGrafanaDashboard返回参数结构体
 * @class
 */
class UpgradeGrafanaDashboardResponse extends  AbstractModel {
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
 * DescribeAllNamespaces请求参数结构体
 * @class
 */
class DescribeAllNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据使用场景过滤 目前仅有"ST_ALARM"=告警类型
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
 * 策略组信息
 * @class
 */
class PolicyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否可设为默认告警策略
         * @type {boolean || null}
         */
        this.CanSetDefault = null;

        /**
         * 告警策略组ID
         * @type {number || null}
         */
        this.GroupID = null;

        /**
         * 告警策略组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.InsertTime = null;

        /**
         * 是否为默认告警策略
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 告警策略启用状态
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 最后修改人UIN
         * @type {number || null}
         */
        this.LastEditUin = null;

        /**
         * 未屏蔽的实例数
         * @type {number || null}
         */
        this.NoShieldedInstanceCount = null;

        /**
         * 父策略组ID
         * @type {number || null}
         */
        this.ParentGroupID = null;

        /**
         * 所属项目ID
         * @type {number || null}
         */
        this.ProjectID = null;

        /**
         * 告警接收对象信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PolicyGroupReceiverInfo> || null}
         */
        this.ReceiverInfos = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 修改时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 总绑定实例数
         * @type {number || null}
         */
        this.TotalInstanceCount = null;

        /**
         * 视图
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 是否为与关系规则
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
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.GroupID = 'GroupID' in params ? params.GroupID : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.NoShieldedInstanceCount = 'NoShieldedInstanceCount' in params ? params.NoShieldedInstanceCount : null;
        this.ParentGroupID = 'ParentGroupID' in params ? params.ParentGroupID : null;
        this.ProjectID = 'ProjectID' in params ? params.ProjectID : null;

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new PolicyGroupReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TotalInstanceCount = 'TotalInstanceCount' in params ? params.TotalInstanceCount : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * DescribePrometheusClusterAgents请求参数结构体
 * @class
 */
class DescribePrometheusClusterAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用于分页
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
 * UnbindPrometheusManagedGrafana请求参数结构体
 * @class
 */
class UnbindPrometheusManagedGrafanaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Grafana 实例 ID
         * @type {string || null}
         */
        this.GrafanaId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GrafanaId = 'GrafanaId' in params ? params.GrafanaId : null;

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
 * DescribeConditionsTemplateList返回参数结构体
 * @class
 */
class DescribeConditionsTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TemplateGroup> || null}
         */
        this.TemplateGroupList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.TemplateGroupList) {
            this.TemplateGroupList = new Array();
            for (let z in params.TemplateGroupList) {
                let obj = new TemplateGroup();
                obj.deserialize(params.TemplateGroupList[z]);
                this.TemplateGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusTemp请求参数结构体
 * @class
 */
class CreatePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板设置
         * @type {PrometheusTemp || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new PrometheusTemp();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

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

        /**
         * 监控类型，如 MT_QCE。如果不填默认为 MT_QCE。
         * @type {string || null}
         */
        this.MonitorType = null;

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
        this.MonitorType = 'MonitorType' in params ? params.MonitorType : null;

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

        /**
         * 全局过滤条件
         * @type {AlarmPolicyFilter || null}
         */
        this.Filter = null;

        /**
         * 聚合维度列表，指定按哪些维度 key 来做 group by
         * @type {Array.<string> || null}
         */
        this.GroupBy = null;

        /**
         * 日志告警创建请求参数信息
         * @type {LogAlarmReq || null}
         */
        this.LogAlarmReqInfo = null;

        /**
         * 模版id，专供prom使用
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 启停状态，0=停用，1=启用
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 专供prom策略名称
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 事件配置的告警
         * @type {string || null}
         */
        this.EbSubject = null;

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

        if (params.Filter) {
            let obj = new AlarmPolicyFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;

        if (params.LogAlarmReqInfo) {
            let obj = new LogAlarmReq();
            obj.deserialize(params.LogAlarmReqInfo)
            this.LogAlarmReqInfo = obj;
        }
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.EbSubject = 'EbSubject' in params ? params.EbSubject : null;

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
 * prometheus一个job的targets
 * @class
 */
class PrometheusJobTargets extends  AbstractModel {
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
 * UpdateGrafanaConfig请求参数结构体
 * @class
 */
class UpdateGrafanaConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * JSON 编码后的字符串
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * DescribeGrafanaIntegrations请求参数结构体
 * @class
 */
class DescribeGrafanaIntegrationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集成 ID
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Kind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

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

        /**
         * 告警实例的维度信息
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
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * 与云监控融合托管prometheus实例，关联集群基础信息
 * @class
 */
class PrometheusClusterAgentBasic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否开启公网CLB
         * @type {boolean || null}
         */
        this.EnableExternal = null;

        /**
         * 集群内部署组件的pod配置
         * @type {PrometheusClusterAgentPodConfig || null}
         */
        this.InClusterPodConfig = null;

        /**
         * 该集群采集的所有指标都会带上这些labels
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

        /**
         * 是否安装默认采集配置
         * @type {boolean || null}
         */
        this.NotInstallBasicScrape = null;

        /**
         * 是否采集指标，true代表drop所有指标，false代表采集默认指标
         * @type {boolean || null}
         */
        this.NotScrape = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnableExternal = 'EnableExternal' in params ? params.EnableExternal : null;

        if (params.InClusterPodConfig) {
            let obj = new PrometheusClusterAgentPodConfig();
            obj.deserialize(params.InClusterPodConfig)
            this.InClusterPodConfig = obj;
        }

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }
        this.NotInstallBasicScrape = 'NotInstallBasicScrape' in params ? params.NotInstallBasicScrape : null;
        this.NotScrape = 'NotScrape' in params ? params.NotScrape : null;

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
         * 策略组所属视图的名称，若通过模板创建，可不传入
         * @type {string || null}
         */
        this.ViewName = null;

        /**
         * 策略组所属项目Id，会进行鉴权操作
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 模板策略组Id, 通过模板创建时才需要传
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
         * 是否为后端调用。当且仅当值为1时，后台拉取策略模板中的规则填充入Conditions以及EventConditions字段
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
 * CreatePrometheusScrapeJob请求参数结构体
 * @class
 */
class CreatePrometheusScrapeJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID，例如：prom-abcd1234
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID，例如：agent-abcd1234，可在控制台 Agent 管理中获取
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 抓取任务配置，格式：job_name:xx
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * CreatePrometheusTemp返回参数结构体
 * @class
 */
class CreatePrometheusTempResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
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
 * 通知模板与策略绑定关系
 * @class
 */
class NoticeBindPolicys extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知模板 ID
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * 告警通知模板绑定的告警策略ID列表
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
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

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

        /**
         * 根据通知模板 id 过滤，空数组/不传则不过滤
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 模板根据标签过滤
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
        this.Module = 'Module' in params ? params.Module : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OwnerUid = 'OwnerUid' in params ? params.OwnerUid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.GroupIds = 'GroupIds' in params ? params.GroupIds : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;

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
 * RunPrometheusInstance返回参数结构体
 * @class
 */
class RunPrometheusInstanceResponse extends  AbstractModel {
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
 * UpdateExporterIntegration请求参数结构体
 * @class
 */
class UpdateExporterIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 配置内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * Kubernetes 集群类型，取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群<EKS> </li>
<li> 3= Prometheus管理的弹性集群<MEKS> </li>
         * @type {number || null}
         */
        this.KubeType = null;

        /**
         * 集群 ID
         * @type {string || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.KubeType = 'KubeType' in params ? params.KubeType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CheckIsPrometheusNewUser请求参数结构体
 * @class
 */
class CheckIsPrometheusNewUserRequest extends  AbstractModel {
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
 * SyncPrometheusTemp请求参数结构体
 * @class
 */
class SyncPrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 同步目标
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

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
         * 返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Msg = 'Msg' in params ? params.Msg : null;
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
         * 告警时间段开始时间。范围[0,86400)，作为 UNIX 时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
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
         * 电话告警接收者 UID
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
         * 接收组列表。通过平台接口查询到的接收组 ID 列表
         * @type {Array.<number> || null}
         */
        this.ReceiverGroupList = null;

        /**
         * 接收人列表。通过平台接口查询到的接收人 ID 列表
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
 * DescribeRecordingRules请求参数结构体
 * @class
 */
class DescribeRecordingRulesRequest extends  AbstractModel {
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
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
         * @type {number || null}
         */
        this.RuleState = null;

        /**
         * 规则名称
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleState = 'RuleState' in params ? params.RuleState : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * UpgradeGrafanaDashboard请求参数结构体
 * @class
 */
class UpgradeGrafanaDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus 集成项 Code，升级对应的 Dashboard，取值如下：
<li>spring_mvc</li>
<li>mysql</li>
<li>go</li>
<li>redis</li>
<li>jvm</li>
<li>pgsql</li>
<li>mongo</li>
<li>kafka</li>
<li>es</li>
<li>flink</li>
<li>blackbox</li>
<li>consule</li>
<li>memcached</li>
<li>zk</li>
<li>tps</li>
<li>istio</li>
<li>etcd</li>
         * @type {Array.<string> || null}
         */
        this.IntegrationCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationCodes = 'IntegrationCodes' in params ? params.IntegrationCodes : null;

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
         * Prometheus 实例 ID，例如：prom-sdfk2342a
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
 * DescribeInstalledPlugins返回参数结构体
 * @class
 */
class DescribeInstalledPluginsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件列表
         * @type {Array.<GrafanaPlugin> || null}
         */
        this.PluginSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PluginSet) {
            this.PluginSet = new Array();
            for (let z in params.PluginSet) {
                let obj = new GrafanaPlugin();
                obj.deserialize(params.PluginSet[z]);
                this.PluginSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateGrafanaConfig返回参数结构体
 * @class
 */
class UpdateGrafanaConfigResponse extends  AbstractModel {
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
 * ModifyPrometheusInstanceAttributes请求参数结构体
 * @class
 */
class ModifyPrometheusInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 存储时长（取值为 15、30、45。此参数不适用于包年包月实例）
         * @type {number || null}
         */
        this.DataRetentionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;

    }
}

/**
 * DescribePrometheusConfig返回参数结构体
 * @class
 */
class DescribePrometheusConfigResponse extends  AbstractModel {
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
 * UpdateGrafanaEnvironments返回参数结构体
 * @class
 */
class UpdateGrafanaEnvironmentsResponse extends  AbstractModel {
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
         * 产品类型过滤，例如"cvm"表示云服务器
         * @type {Array.<string> || null}
         */
        this.ProductName = null;

        /**
         * 事件名称过滤，例如"guest_reboot"表示机器重启
         * @type {Array.<string> || null}
         */
        this.EventName = null;

        /**
         * 影响对象，例如"ins-19708ino"
         * @type {Array.<string> || null}
         */
        this.InstanceId = null;

        /**
         * 维度过滤，例如外网IP:10.0.0.1
         * @type {Array.<DescribeProductEventListDimensions> || null}
         */
        this.Dimensions = null;

        /**
         * 产品事件地域过滤参数，例如gz，各地域缩写可参见[地域列表](https://cloud.tencent.com/document/product/248/50863)
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
 * CreatePrometheusGlobalNotification请求参数结构体
 * @class
 */
class CreatePrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警通知渠道
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }

    }
}

/**
 * ModifyPrometheusTemp返回参数结构体
 * @class
 */
class ModifyPrometheusTempResponse extends  AbstractModel {
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
 * DescribeRecordingRules返回参数结构体
 * @class
 */
class DescribeRecordingRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则组数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 规则组详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecordingRuleSet> || null}
         */
        this.RecordingRuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RecordingRuleSet) {
            this.RecordingRuleSet = new Array();
            for (let z in params.RecordingRuleSet) {
                let obj = new RecordingRuleSet();
                obj.deserialize(params.RecordingRuleSet[z]);
                this.RecordingRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRecordingRules返回参数结构体
 * @class
 */
class DeleteRecordingRulesResponse extends  AbstractModel {
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
 * UpdateGrafanaWhiteList请求参数结构体
 * @class
 */
class UpdateGrafanaWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 白名单数组，输入公网域名 IP ，例如：127.0.0.1，可通过接口 DescribeGrafanaWhiteList 查看
         * @type {Array.<string> || null}
         */
        this.Whitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Whitelist = 'Whitelist' in params ? params.Whitelist : null;

    }
}

/**
 * UpdatePrometheusAgentStatus请求参数结构体
 * @class
 */
class UpdatePrometheusAgentStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 实例 ID，例如：prom-abcd1234
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent ID 列表，例如：agent-abcd1234，可在控制台 Agent 管理中获取
         * @type {Array.<string> || null}
         */
        this.AgentIds = null;

        /**
         * 要更新的状态
<li> 1= 开启 </li>
<li> 2= 关闭 </li>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AgentIds = 'AgentIds' in params ? params.AgentIds : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * CheckIsPrometheusNewUser返回参数结构体
 * @class
 */
class CheckIsPrometheusNewUserResponse extends  AbstractModel {
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
 * ModifyPrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class ModifyPrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 聚合实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 新的内容
         * @type {string || null}
         */
        this.Content = null;

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
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DeletePrometheusAlertPolicy返回参数结构体
 * @class
 */
class DeletePrometheusAlertPolicyResponse extends  AbstractModel {
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
 * ModifyAlarmPolicyNotice请求参数结构体
 * @class
 */
class ModifyAlarmPolicyNoticeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名，这里填“monitor”。
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 告警策略 ID，如果该参数与PolicyIds参数同时存在，则以PolicyIds为准。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 告警通知模板 ID 列表。
         * @type {Array.<string> || null}
         */
        this.NoticeIds = null;

        /**
         * 告警策略ID数组，支持给多个告警策略批量绑定通知模板。最多30个。
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.NoticeIds = 'NoticeIds' in params ? params.NoticeIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;

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
 * 事件告警条件
 * @class
 */
class EventCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知频率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmNotifyType = null;

        /**
         * 事件ID
         * @type {string || null}
         */
        this.EventID = null;

        /**
         * 事件展示名称（对外）
         * @type {string || null}
         */
        this.EventDisplayName = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.EventID = 'EventID' in params ? params.EventID : null;
        this.EventDisplayName = 'EventDisplayName' in params ? params.EventDisplayName : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;

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
 * 监控类型详细信息
 * @class
 */
class MonitorTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控类型ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 监控类型
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 排列顺序
         * @type {number || null}
         */
        this.SortId = null;

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
        this.SortId = 'SortId' in params ? params.SortId : null;

    }
}

/**
 * 策略类型的维度信息
 * @class
 */
class DimensionNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度 key 标示，后台英文名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 维度 key 名称，中英文前台展示名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否必选
         * @type {boolean || null}
         */
        this.IsRequired = null;

        /**
         * 支持的操作符列表
         * @type {Array.<Operator> || null}
         */
        this.Operators = null;

        /**
         * 是否支持多选
         * @type {boolean || null}
         */
        this.IsMultiple = null;

        /**
         * 创建后是否可以修改
         * @type {boolean || null}
         */
        this.IsMutable = null;

        /**
         * 是否展示给用户
         * @type {boolean || null}
         */
        this.IsVisible = null;

        /**
         * 能否用来过滤策略列表
         * @type {boolean || null}
         */
        this.CanFilterPolicy = null;

        /**
         * 能否用来过滤告警历史
         * @type {boolean || null}
         */
        this.CanFilterHistory = null;

        /**
         * 能否作为聚合维度
         * @type {boolean || null}
         */
        this.CanGroupBy = null;

        /**
         * 是否必须作为聚合维度
         * @type {boolean || null}
         */
        this.MustGroupBy = null;

        /**
         * 前端翻译要替换的 key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShowValueReplace = null;

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
        this.IsRequired = 'IsRequired' in params ? params.IsRequired : null;

        if (params.Operators) {
            this.Operators = new Array();
            for (let z in params.Operators) {
                let obj = new Operator();
                obj.deserialize(params.Operators[z]);
                this.Operators.push(obj);
            }
        }
        this.IsMultiple = 'IsMultiple' in params ? params.IsMultiple : null;
        this.IsMutable = 'IsMutable' in params ? params.IsMutable : null;
        this.IsVisible = 'IsVisible' in params ? params.IsVisible : null;
        this.CanFilterPolicy = 'CanFilterPolicy' in params ? params.CanFilterPolicy : null;
        this.CanFilterHistory = 'CanFilterHistory' in params ? params.CanFilterHistory : null;
        this.CanGroupBy = 'CanGroupBy' in params ? params.CanGroupBy : null;
        this.MustGroupBy = 'MustGroupBy' in params ? params.MustGroupBy : null;
        this.ShowValueReplace = 'ShowValueReplace' in params ? params.ShowValueReplace : null;

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
 * 维度支持的操作符信息
 * @class
 */
class Operator extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运算符标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 运算符展示名
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
 * 任务步骤信息
 * @class
 */
class TaskStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤名称
         * @type {string || null}
         */
        this.Step = null;

        /**
         * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Step = 'Step' in params ? params.Step : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;
        this.FailedMsg = 'FailedMsg' in params ? params.FailedMsg : null;

    }
}

/**
 * DescribePrometheusTemp返回参数结构体
 * @class
 */
class DescribePrometheusTempResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板列表
         * @type {Array.<PrometheusTemp> || null}
         */
        this.Templates = null;

        /**
         * 总数
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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new PrometheusTemp();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGrafanaConfig返回参数结构体
 * @class
 */
class DescribeGrafanaConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * JSON 编码后的字符串
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 模板实例
 * @class
 */
class PrometheusTemp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertDetailRules = null;

        /**
         * 关联实例数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetsTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
        }
        this.TargetsTotal = 'TargetsTotal' in params ? params.TargetsTotal : null;

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

        /**
         * 弃用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicyConditionListResponseDeprecatingInfo || null}
         */
        this.DeprecatingInfo = null;

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

        if (params.DeprecatingInfo) {
            let obj = new DescribePolicyConditionListResponseDeprecatingInfo();
            obj.deserialize(params.DeprecatingInfo)
            this.DeprecatingInfo = obj;
        }

    }
}

/**
 * DeletePrometheusTemp请求参数结构体
 * @class
 */
class DeletePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * EnableGrafanaInternet返回参数结构体
 * @class
 */
class EnableGrafanaInternetResponse extends  AbstractModel {
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
 * BindPrometheusManagedGrafana返回参数结构体
 * @class
 */
class BindPrometheusManagedGrafanaResponse extends  AbstractModel {
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
 * Prometheus Agent 管理命令行
 * @class
 */
class ManagementCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent 安装命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Install = null;

        /**
         * Agent 重启命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Restart = null;

        /**
         * Agent 停止命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Stop = null;

        /**
         * Agent 状态检测命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusCheck = null;

        /**
         * Agent 日志检测命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Install = 'Install' in params ? params.Install : null;
        this.Restart = 'Restart' in params ? params.Restart : null;
        this.Stop = 'Stop' in params ? params.Stop : null;
        this.StatusCheck = 'StatusCheck' in params ? params.StatusCheck : null;
        this.LogCheck = 'LogCheck' in params ? params.LogCheck : null;

    }
}

/**
 * CreatePrometheusAgent请求参数结构体
 * @class
 */
class CreatePrometheusAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Agent 名称
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
 * DeletePrometheusTempSync请求参数结构体
 * @class
 */
class DeletePrometheusTempSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 取消同步的对象列表
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DescribePluginOverviews请求参数结构体
 * @class
 */
class DescribePluginOverviewsRequest extends  AbstractModel {
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
 * DescribePrometheusGlobalConfig请求参数结构体
 * @class
 */
class DescribePrometheusGlobalConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例级别抓取配置
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否禁用统计
         * @type {boolean || null}
         */
        this.DisableStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DisableStatistics = 'DisableStatistics' in params ? params.DisableStatistics : null;

    }
}

/**
 * Prometheus用量信息
 * @class
 */
class PrometheusInstanceTenantUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 计费周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CalcDate = null;

        /**
         * 总用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 基础指标用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Basic = null;

        /**
         * 付费指标用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Fee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CalcDate = 'CalcDate' in params ? params.CalcDate : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Basic = 'Basic' in params ? params.Basic : null;
        this.Fee = 'Fee' in params ? params.Fee : null;

    }
}

/**
 * DescribePrometheusZones请求参数结构体
 * @class
 */
class DescribePrometheusZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域 ID（RegionId 和 RegionName 只需要填一个）
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域名（RegionId 和 RegionName 只需要填一个）
         * @type {string || null}
         */
        this.RegionName = null;

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

        /**
         * 可选参数，按照维度过滤
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * DeletePrometheusConfig请求参数结构体
 * @class
 */
class DeletePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 要删除的ServiceMonitor名字列表
         * @type {Array.<string> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 要删除的PodMonitor名字列表
         * @type {Array.<string> || null}
         */
        this.PodMonitors = null;

        /**
         * 要删除的RawJobs名字列表
         * @type {Array.<string> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ServiceMonitors = 'ServiceMonitors' in params ? params.ServiceMonitors : null;
        this.PodMonitors = 'PodMonitors' in params ? params.PodMonitors : null;
        this.RawJobs = 'RawJobs' in params ? params.RawJobs : null;

    }
}

/**
 * 托管prometheus告警策略实例
 * @class
 */
class PrometheusAlertPolicyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则列表
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.Rules = null;

        /**
         * 告警策略 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 如果该告警来自模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 告警渠道，模板中使用可能返回null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

        /**
         * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 如果告警策略来源于用户集群CRD资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyPrometheusAgentExternalLabels请求参数结构体
 * @class
 */
class ModifyPrometheusAgentExternalLabelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 新的external_labels
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }

    }
}

/**
 * Prometheus 抓取任务
 * @class
 */
class PrometheusScrapeJob extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Agent ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * 通知模板ID及通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警
 * @class
 */
class AlarmHierarchicalNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NoticeId = null;

        /**
         * 通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Classification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeId = 'NoticeId' in params ? params.NoticeId : null;
        this.Classification = 'Classification' in params ? params.Classification : null;

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
 * DescribePrometheusTemp请求参数结构体
 * @class
 */
class DescribePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊过滤条件，支持
Level 按模板级别过滤
Name 按名称过滤
Describe 按描述过滤
ID 按templateId过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 总数限制
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 告警条件
 * @class
 */
class Condition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警通知频率
         * @type {number || null}
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警）
         * @type {number || null}
         */
        this.AlarmNotifyType = null;

        /**
         * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CalcType = null;

        /**
         * 检测值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CalcValue = null;

        /**
         * 持续时间，单位秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContinueTime = null;

        /**
         * 指标ID
         * @type {number || null}
         */
        this.MetricID = null;

        /**
         * 指标展示名称（对外）
         * @type {string || null}
         */
        this.MetricDisplayName = null;

        /**
         * 周期
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 指标单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 是否为高级指标，0：否；1：是
         * @type {number || null}
         */
        this.IsAdvanced = null;

        /**
         * 是否开通高级指标，0：否；1：是
         * @type {number || null}
         */
        this.IsOpen = null;

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.ContinueTime = 'ContinueTime' in params ? params.ContinueTime : null;
        this.MetricID = 'MetricID' in params ? params.MetricID : null;
        this.MetricDisplayName = 'MetricDisplayName' in params ? params.MetricDisplayName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.IsAdvanced = 'IsAdvanced' in params ? params.IsAdvanced : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DeleteGrafanaInstance返回参数结构体
 * @class
 */
class DeleteGrafanaInstanceResponse extends  AbstractModel {
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
 * 托管prometheus agent概览
 * @class
 */
class PrometheusAgentOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * agent状态
normal = 正常
abnormal = 异常
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 额外labels
本集群的所有指标都会带上这几个label
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

        /**
         * 集群所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群所在VPC ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 记录关联等操作的失败信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;

    }
}

/**
 * 查询过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤方式（=, !=, in）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 过滤维度名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 过滤值，in过滤方式用逗号分割多个值
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * UpdateSSOAccount请求参数结构体
 * @class
 */
class UpdateSSOAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grafana 实例 ID，例如：grafana-abcdefgh
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户账号 ID ，例如：10000000
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 权限
         * @type {Array.<GrafanaAccountRole> || null}
         */
        this.Role = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Notes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Role) {
            this.Role = new Array();
            for (let z in params.Role) {
                let obj = new GrafanaAccountRole();
                obj.deserialize(params.Role[z]);
                this.Role.push(obj);
            }
        }
        this.Notes = 'Notes' in params ? params.Notes : null;

    }
}

/**
 * CreateSSOAccount返回参数结构体
 * @class
 */
class CreateSSOAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已添加的用户 UIN
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
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
 * UpdatePrometheusScrapeJob返回参数结构体
 * @class
 */
class UpdatePrometheusScrapeJobResponse extends  AbstractModel {
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

注意：如果NeedCorrespondence传入1，即需要返回策略与实例对应关系，请传入不多于20个告警对象维度，否则容易请求超时
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

        /**
         * 实例分组id
         * @type {number || null}
         */
        this.InstanceGroupId = null;

        /**
         * 是否需要策略与入参过滤维度参数的对应关系，1：是  0：否，默认为0
         * @type {number || null}
         */
        this.NeedCorrespondence = null;

        /**
         * 按照触发任务（例如弹性伸缩）过滤策略。最多10个
         * @type {Array.<AlarmPolicyTriggerTask> || null}
         */
        this.TriggerTasks = null;

        /**
         * 根据一键告警策略筛选 不传展示全部策略 ONECLICK=展示一键告警策略 NOT_ONECLICK=展示非一键告警策略
         * @type {Array.<string> || null}
         */
        this.OneClickPolicyType = null;

        /**
         * 根据全部对象过滤，1代表需要过滤掉全部对象，0则无需过滤
         * @type {number || null}
         */
        this.NotBindAll = null;

        /**
         * 根据实例对象过滤，1代表需要过滤掉有实例对象，0则无需过滤
         * @type {number || null}
         */
        this.NotInstanceGroup = null;

        /**
         * 策略根据标签过滤
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
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.NeedCorrespondence = 'NeedCorrespondence' in params ? params.NeedCorrespondence : null;

        if (params.TriggerTasks) {
            this.TriggerTasks = new Array();
            for (let z in params.TriggerTasks) {
                let obj = new AlarmPolicyTriggerTask();
                obj.deserialize(params.TriggerTasks[z]);
                this.TriggerTasks.push(obj);
            }
        }
        this.OneClickPolicyType = 'OneClickPolicyType' in params ? params.OneClickPolicyType : null;
        this.NotBindAll = 'NotBindAll' in params ? params.NotBindAll : null;
        this.NotInstanceGroup = 'NotInstanceGroup' in params ? params.NotInstanceGroup : null;

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
 * export 集成配置
 * @class
 */
class IntegrationConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例类型
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 实例描述
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * dashboard 的 URL
         * @type {string || null}
         */
        this.GrafanaDashboardURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.GrafanaDashboardURL = 'GrafanaDashboardURL' in params ? params.GrafanaDashboardURL : null;

    }
}

/**
 * DescribePrometheusAgents返回参数结构体
 * @class
 */
class DescribePrometheusAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Agent 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAgent> || null}
         */
        this.AgentSet = null;

        /**
         * Agent 总量
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

        if (params.AgentSet) {
            this.AgentSet = new Array();
            for (let z in params.AgentSet) {
                let obj = new PrometheusAgent();
                obj.deserialize(params.AgentSet[z]);
                this.AgentSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrometheusGlobalNotification返回参数结构体
 * @class
 */
class ModifyPrometheusGlobalNotificationResponse extends  AbstractModel {
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
 * CleanGrafanaInstance返回参数结构体
 * @class
 */
class CleanGrafanaInstanceResponse extends  AbstractModel {
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
         * Prometheus 实例 ID，例如：prom-abcd1234
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则表达式，可参考<a href="https://cloud.tencent.com/document/product/1416/56008">告警规则说明</a>
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
         * 注释列表。

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
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
 * ModifyPrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class ModifyPrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * DeletePrometheusScrapeJobs返回参数结构体
 * @class
 */
class DeletePrometheusScrapeJobsResponse extends  AbstractModel {
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
 * UninstallGrafanaDashboard请求参数结构体
 * @class
 */
class UninstallGrafanaDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Prometheus 集成项 Code，删除对应的 Dashboard，Code 如下：
<li>spring_mvc</li>
<li>mysql</li>
<li>go</li>
<li>redis</li>
<li>jvm</li>
<li>pgsql</li>
<li>mongo</li>
<li>kafka</li>
<li>es</li>
<li>flink</li>
<li>blackbox</li>
<li>consule</li>
<li>memcached</li>
<li>zk</li>
<li>tps</li>
<li>istio</li>
<li>etcd</li>
         * @type {Array.<string> || null}
         */
        this.IntegrationCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IntegrationCodes = 'IntegrationCodes' in params ? params.IntegrationCodes : null;

    }
}

/**
 * UpdateGrafanaIntegration请求参数结构体
 * @class
 */
class UpdateGrafanaIntegrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234
         * @type {string || null}
         */
        this.IntegrationId = null;

        /**
         * Grafana 实例 ID，例如：grafana-12345678
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集成类型，可在实例详情-云产品集成-集成列表查看。例如：tencent-cloud-prometheus
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 集成内容
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntegrationId = 'IntegrationId' in params ? params.IntegrationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DeletePrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class DeletePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 聚合规则列表
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Names = 'Names' in params ? params.Names : null;

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
         * 统计粒度。默认取值为300，单位为s；可选的值为60、300、3600、86400
受存储时长限制，统计粒度与统计的时间范围有关：
60s：EndTime-StartTime<12小时，且StartTime距当前时间不能超过15天；
300s：EndTime-StartTime<3天，且StartTime距当前时间不能超过31天；
3600s：EndTime-StartTime<30天，且StartTime距当前时间不能超过93天；
86400s：EndTime-StartTime<186天，且StartTime距当前时间不能超过186天。
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
 * Grafana 告警渠道
 * @class
 */
class GrafanaNotificationChannel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道 ID
         * @type {string || null}
         */
        this.ChannelId = null;

        /**
         * 渠道名
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 告警通道模板 ID 数组
         * @type {Array.<string> || null}
         */
        this.Receivers = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 默认生效组织，已废弃，请使用 OrganizationIds
         * @type {string || null}
         */
        this.OrgId = null;

        /**
         * 额外生效组织，已废弃，请使用 OrganizationIds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExtraOrgIds = null;

        /**
         * 生效组织，已废弃，请使用 OrganizationIds
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OrgIds = null;

        /**
         * 告警渠道的所有生效组织
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OrganizationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.ExtraOrgIds = 'ExtraOrgIds' in params ? params.ExtraOrgIds : null;
        this.OrgIds = 'OrgIds' in params ? params.OrgIds : null;
        this.OrganizationIds = 'OrganizationIds' in params ? params.OrganizationIds : null;

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
 * 告警通知中的推送CLS操作
 * @class
 */
class CLSNotice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 日志集Id
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * 主题Id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 启停状态，可不传，默认启用。0=停用，1=启用
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
        this.Region = 'Region' in params ? params.Region : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * 日志告警请求信息
 * @class
 */
class LogAlarmReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * apm实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 检索条件信息
         * @type {Array.<LogFilterInfo> || null}
         */
        this.Filter = null;

        /**
         * 告警合并开启/暂停
         * @type {string || null}
         */
        this.AlarmMerge = null;

        /**
         * 告警合并时间
         * @type {string || null}
         */
        this.AlarmMergeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new LogFilterInfo();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.AlarmMerge = 'AlarmMerge' in params ? params.AlarmMerge : null;
        this.AlarmMergeTime = 'AlarmMergeTime' in params ? params.AlarmMergeTime : null;

    }
}

/**
 * TerminatePrometheusInstances返回参数结构体
 * @class
 */
class TerminatePrometheusInstancesResponse extends  AbstractModel {
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
 * UpdateSSOAccount返回参数结构体
 * @class
 */
class UpdateSSOAccountResponse extends  AbstractModel {
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
 * DescribeGrafanaInstances返回参数结构体
 * @class
 */
class DescribeGrafanaInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已废弃，请使用 Instances
         * @type {Array.<GrafanaInstanceInfo> || null}
         */
        this.InstanceSet = null;

        /**
         * 符合查询条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例列表
         * @type {Array.<GrafanaInstanceInfo> || null}
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new GrafanaInstanceInfo();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new GrafanaInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunPrometheusInstance请求参数结构体
 * @class
 */
class RunPrometheusInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

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
    ModifyAlarmPolicyInfoRequest: ModifyAlarmPolicyInfoRequest,
    AlarmPolicyTriggerTask: AlarmPolicyTriggerTask,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    DescribePrometheusInstancesOverviewRequest: DescribePrometheusInstancesOverviewRequest,
    ModifyGrafanaInstanceResponse: ModifyGrafanaInstanceResponse,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    ModifyGrafanaInstanceRequest: ModifyGrafanaInstanceRequest,
    AlarmHistoryMetric: AlarmHistoryMetric,
    EnableGrafanaSSOResponse: EnableGrafanaSSOResponse,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    PolicyTag: PolicyTag,
    DeletePrometheusClusterAgentRequest: DeletePrometheusClusterAgentRequest,
    DescribePrometheusScrapeJobsRequest: DescribePrometheusScrapeJobsRequest,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    CreatePrometheusMultiTenantInstancePostPayModeRequest: CreatePrometheusMultiTenantInstancePostPayModeRequest,
    DescribePolicyConditionListResponseDeprecatingInfo: DescribePolicyConditionListResponseDeprecatingInfo,
    PrometheusTempModify: PrometheusTempModify,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    CommonNamespaceNew: CommonNamespaceNew,
    Tag: Tag,
    DescribePrometheusAgentInstancesRequest: DescribePrometheusAgentInstancesRequest,
    UpdateServiceDiscoveryRequest: UpdateServiceDiscoveryRequest,
    PrometheusRecordRuleYamlItem: PrometheusRecordRuleYamlItem,
    Label: Label,
    DescribeGrafanaIntegrationsResponse: DescribeGrafanaIntegrationsResponse,
    CreatePrometheusMultiTenantInstancePostPayModeResponse: CreatePrometheusMultiTenantInstancePostPayModeResponse,
    UpdatePrometheusAgentStatusResponse: UpdatePrometheusAgentStatusResponse,
    SyncPrometheusTempResponse: SyncPrometheusTempResponse,
    UpdateGrafanaWhiteListResponse: UpdateGrafanaWhiteListResponse,
    DescribeGrafanaEnvironmentsRequest: DescribeGrafanaEnvironmentsRequest,
    PrometheusConfigItem: PrometheusConfigItem,
    AlarmPolicy: AlarmPolicy,
    DeleteExporterIntegrationRequest: DeleteExporterIntegrationRequest,
    PrometheusRuleKV: PrometheusRuleKV,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    PrometheusRuleSet: PrometheusRuleSet,
    DescribeAllNamespacesResponse: DescribeAllNamespacesResponse,
    TerminatePrometheusInstancesRequest: TerminatePrometheusInstancesRequest,
    InstallPluginsResponse: InstallPluginsResponse,
    ProductSimple: ProductSimple,
    AlarmPolicyRule: AlarmPolicyRule,
    CreateGrafanaIntegrationRequest: CreateGrafanaIntegrationRequest,
    Dimension: Dimension,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    PrometheusInstancesOverview: PrometheusInstancesOverview,
    DescribePrometheusInstanceInitStatusResponse: DescribePrometheusInstanceInitStatusResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    DescribeAlarmNoticeCallbacksResponse: DescribeAlarmNoticeCallbacksResponse,
    DescribePrometheusInstanceUsageRequest: DescribePrometheusInstanceUsageRequest,
    DeletePrometheusScrapeJobsRequest: DeletePrometheusScrapeJobsRequest,
    CreatePrometheusRecordRuleYamlRequest: CreatePrometheusRecordRuleYamlRequest,
    Instance: Instance,
    DescribeAlarmNoticesResponse: DescribeAlarmNoticesResponse,
    PrometheusClusterAgentPodConfig: PrometheusClusterAgentPodConfig,
    GrafanaInstanceInfo: GrafanaInstanceInfo,
    DeletePrometheusConfigResponse: DeletePrometheusConfigResponse,
    CreatePrometheusRecordRuleYamlResponse: CreatePrometheusRecordRuleYamlResponse,
    MetricObjectMeaning: MetricObjectMeaning,
    AlarmEvent: AlarmEvent,
    ModifyPolicyGroupResponse: ModifyPolicyGroupResponse,
    UninstallGrafanaPluginsResponse: UninstallGrafanaPluginsResponse,
    ModifyPrometheusTempRequest: ModifyPrometheusTempRequest,
    UpgradeGrafanaInstanceResponse: UpgradeGrafanaInstanceResponse,
    BindingPolicyTagRequest: BindingPolicyTagRequest,
    DeletePrometheusTempSyncResponse: DeletePrometheusTempSyncResponse,
    DescribeDNSConfigRequest: DescribeDNSConfigRequest,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    DescribePrometheusRecordRulesRequest: DescribePrometheusRecordRulesRequest,
    DescribeExporterIntegrationsResponse: DescribeExporterIntegrationsResponse,
    UpdateAlertRuleResponse: UpdateAlertRuleResponse,
    InstanceGroup: InstanceGroup,
    EnableGrafanaSSORequest: EnableGrafanaSSORequest,
    DescribePrometheusScrapeJobsResponse: DescribePrometheusScrapeJobsResponse,
    EnableGrafanaInternetRequest: EnableGrafanaInternetRequest,
    DescribePluginOverviewsResponse: DescribePluginOverviewsResponse,
    GrafanaAccountRole: GrafanaAccountRole,
    DestroyPrometheusInstanceRequest: DestroyPrometheusInstanceRequest,
    PolicyGroupReceiverInfo: PolicyGroupReceiverInfo,
    Metric: Metric,
    MidQueryCondition: MidQueryCondition,
    DeleteSSOAccountRequest: DeleteSSOAccountRequest,
    DescribePrometheusAgentInstancesResponse: DescribePrometheusAgentInstancesResponse,
    URLNotice: URLNotice,
    DescribeProductListResponse: DescribeProductListResponse,
    DeletePrometheusTempResponse: DeletePrometheusTempResponse,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    RecordingRuleSet: RecordingRuleSet,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    ModifyAlarmPolicyStatusResponse: ModifyAlarmPolicyStatusResponse,
    DescribeGrafanaInstancesRequest: DescribeGrafanaInstancesRequest,
    DescribePrometheusTempSyncRequest: DescribePrometheusTempSyncRequest,
    DescribePrometheusGlobalConfigResponse: DescribePrometheusGlobalConfigResponse,
    CreateRecordingRuleResponse: CreateRecordingRuleResponse,
    CreateGrafanaNotificationChannelResponse: CreateGrafanaNotificationChannelResponse,
    DescribeGrafanaNotificationChannelsRequest: DescribeGrafanaNotificationChannelsRequest,
    CleanGrafanaInstanceRequest: CleanGrafanaInstanceRequest,
    DescribeSSOAccountRequest: DescribeSSOAccountRequest,
    UpdateExporterIntegrationResponse: UpdateExporterIntegrationResponse,
    CreateAlarmNoticeRequest: CreateAlarmNoticeRequest,
    InstanceGroups: InstanceGroups,
    UpdateGrafanaNotificationChannelResponse: UpdateGrafanaNotificationChannelResponse,
    CreateExporterIntegrationResponse: CreateExporterIntegrationResponse,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    AlarmPolicyCondition: AlarmPolicyCondition,
    DescribeGrafanaChannelsRequest: DescribeGrafanaChannelsRequest,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeGrafanaConfigRequest: DescribeGrafanaConfigRequest,
    UpdateRecordingRuleRequest: UpdateRecordingRuleRequest,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    DescribePrometheusInstancesRequest: DescribePrometheusInstancesRequest,
    Toleration: Toleration,
    TagInstance: TagInstance,
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    InstallPluginsRequest: InstallPluginsRequest,
    DescribeAlarmEventsResponse: DescribeAlarmEventsResponse,
    DescribeServiceDiscoveryResponse: DescribeServiceDiscoveryResponse,
    PrometheusTag: PrometheusTag,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    CreateServiceDiscoveryResponse: CreateServiceDiscoveryResponse,
    EnableSSOCamCheckResponse: EnableSSOCamCheckResponse,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    CreatePrometheusScrapeJobResponse: CreatePrometheusScrapeJobResponse,
    CreateAlarmPolicyRequest: CreateAlarmPolicyRequest,
    PrometheusZoneItem: PrometheusZoneItem,
    ModifyPrometheusAlertPolicyRequest: ModifyPrometheusAlertPolicyRequest,
    ModifyPrometheusInstanceAttributesResponse: ModifyPrometheusInstanceAttributesResponse,
    PrometheusTemplateSyncTarget: PrometheusTemplateSyncTarget,
    DescribePrometheusAlertPolicyResponse: DescribePrometheusAlertPolicyResponse,
    UpdateGrafanaEnvironmentsRequest: UpdateGrafanaEnvironmentsRequest,
    CommonNamespace: CommonNamespace,
    DeleteGrafanaNotificationChannelResponse: DeleteGrafanaNotificationChannelResponse,
    DataPoint: DataPoint,
    DescribeAlarmPoliciesResponse: DescribeAlarmPoliciesResponse,
    ModifyPrometheusGlobalNotificationRequest: ModifyPrometheusGlobalNotificationRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    DescribePrometheusRecordRulesResponse: DescribePrometheusRecordRulesResponse,
    DescribePrometheusGlobalNotificationResponse: DescribePrometheusGlobalNotificationResponse,
    DescribeMonitorTypesRequest: DescribeMonitorTypesRequest,
    DimensionsDesc: DimensionsDesc,
    DeletePrometheusAlertPolicyRequest: DeletePrometheusAlertPolicyRequest,
    ServiceDiscoveryItem: ServiceDiscoveryItem,
    ModifyPrometheusAgentExternalLabelsResponse: ModifyPrometheusAgentExternalLabelsResponse,
    ModifyAlarmNoticeRequest: ModifyAlarmNoticeRequest,
    DescribeGrafanaWhiteListResponse: DescribeGrafanaWhiteListResponse,
    DescribeAlertRulesResponse: DescribeAlertRulesResponse,
    ResumeGrafanaInstanceRequest: ResumeGrafanaInstanceRequest,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    DescribeExporterIntegrationsRequest: DescribeExporterIntegrationsRequest,
    DescribePrometheusInstanceDetailResponse: DescribePrometheusInstanceDetailResponse,
    Point: Point,
    ModifyPolicyGroupEventCondition: ModifyPolicyGroupEventCondition,
    CreateGrafanaNotificationChannelRequest: CreateGrafanaNotificationChannelRequest,
    DescribePrometheusTargetsTMPResponse: DescribePrometheusTargetsTMPResponse,
    DescribePrometheusClusterAgentsResponse: DescribePrometheusClusterAgentsResponse,
    UpdatePrometheusScrapeJobRequest: UpdatePrometheusScrapeJobRequest,
    PrometheusAgentInfo: PrometheusAgentInfo,
    CreatePrometheusClusterAgentResponse: CreatePrometheusClusterAgentResponse,
    CreateGrafanaIntegrationResponse: CreateGrafanaIntegrationResponse,
    BindPrometheusManagedGrafanaRequest: BindPrometheusManagedGrafanaRequest,
    PrometheusAlertManagerConfig: PrometheusAlertManagerConfig,
    CreateGrafanaInstanceRequest: CreateGrafanaInstanceRequest,
    DescribePrometheusInstanceUsageResponse: DescribePrometheusInstanceUsageResponse,
    DescribePrometheusGlobalNotificationRequest: DescribePrometheusGlobalNotificationRequest,
    DeleteExporterIntegrationResponse: DeleteExporterIntegrationResponse,
    UpdateRecordingRuleResponse: UpdateRecordingRuleResponse,
    CreatePrometheusAgentResponse: CreatePrometheusAgentResponse,
    DescribePrometheusAlertPolicyRequest: DescribePrometheusAlertPolicyRequest,
    DescribeAlarmMetricsResponse: DescribeAlarmMetricsResponse,
    DescribePrometheusRecordRuleYamlRequest: DescribePrometheusRecordRuleYamlRequest,
    DescribeGrafanaWhiteListRequest: DescribeGrafanaWhiteListRequest,
    DescribePrometheusConfigRequest: DescribePrometheusConfigRequest,
    CreateGrafanaInstanceResponse: CreateGrafanaInstanceResponse,
    UpdateAlertRuleRequest: UpdateAlertRuleRequest,
    AlarmPolicyEventCondition: AlarmPolicyEventCondition,
    DeleteAlarmNoticesRequest: DeleteAlarmNoticesRequest,
    DescribeGrafanaNotificationChannelsResponse: DescribeGrafanaNotificationChannelsResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    ResumeGrafanaInstanceResponse: ResumeGrafanaInstanceResponse,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribePrometheusTempSyncResponse: DescribePrometheusTempSyncResponse,
    CreatePrometheusConfigResponse: CreatePrometheusConfigResponse,
    UpdateDNSConfigRequest: UpdateDNSConfigRequest,
    DeletePrometheusClusterAgentResponse: DeletePrometheusClusterAgentResponse,
    DescribeDNSConfigResponse: DescribeDNSConfigResponse,
    DeleteRecordingRulesRequest: DeleteRecordingRulesRequest,
    MonitorTypeNamespace: MonitorTypeNamespace,
    DeleteAlarmPolicyResponse: DeleteAlarmPolicyResponse,
    UninstallGrafanaPluginsRequest: UninstallGrafanaPluginsRequest,
    DeleteSSOAccountResponse: DeleteSSOAccountResponse,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    GrafanaAccountInfo: GrafanaAccountInfo,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    ModifyAlarmPolicyTasksRequest: ModifyAlarmPolicyTasksRequest,
    GetPrometheusAgentManagementCommandRequest: GetPrometheusAgentManagementCommandRequest,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    GetPrometheusAgentManagementCommandResponse: GetPrometheusAgentManagementCommandResponse,
    MetricData: MetricData,
    DescribeStatisticDataResponse: DescribeStatisticDataResponse,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    UpdateDNSConfigResponse: UpdateDNSConfigResponse,
    UninstallGrafanaDashboardResponse: UninstallGrafanaDashboardResponse,
    AlarmHierarchicalValue: AlarmHierarchicalValue,
    UpdateGrafanaNotificationChannelRequest: UpdateGrafanaNotificationChannelRequest,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    GrafanaPlugin: GrafanaPlugin,
    DestroyPrometheusInstanceResponse: DestroyPrometheusInstanceResponse,
    DescribeAlertRulesRequest: DescribeAlertRulesRequest,
    DescribePrometheusInstancesResponse: DescribePrometheusInstancesResponse,
    LogFilterInfo: LogFilterInfo,
    BindingPolicyTagResponse: BindingPolicyTagResponse,
    DeleteServiceDiscoveryResponse: DeleteServiceDiscoveryResponse,
    CreateExporterIntegrationRequest: CreateExporterIntegrationRequest,
    ModifyPrometheusConfigResponse: ModifyPrometheusConfigResponse,
    PrometheusAgent: PrometheusAgent,
    CreatePrometheusAlertPolicyResponse: CreatePrometheusAlertPolicyResponse,
    DescribePrometheusInstanceDetailRequest: DescribePrometheusInstanceDetailRequest,
    UserNotice: UserNotice,
    PrometheusInstancesItem: PrometheusInstancesItem,
    DescribeConditionsTemplateListRequest: DescribeConditionsTemplateListRequest,
    DeletePrometheusRecordRuleYamlResponse: DeletePrometheusRecordRuleYamlResponse,
    MetricDataPoint: MetricDataPoint,
    GetMonitorDataRequest: GetMonitorDataRequest,
    CreateRecordingRuleRequest: CreateRecordingRuleRequest,
    ModifyPrometheusConfigRequest: ModifyPrometheusConfigRequest,
    DescribeGrafanaEnvironmentsResponse: DescribeGrafanaEnvironmentsResponse,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DeleteGrafanaInstanceRequest: DeleteGrafanaInstanceRequest,
    GrafanaIntegrationConfig: GrafanaIntegrationConfig,
    DeleteGrafanaIntegrationRequest: DeleteGrafanaIntegrationRequest,
    ModifyPrometheusAlertPolicyResponse: ModifyPrometheusAlertPolicyResponse,
    DescribePrometheusTargetsTMPRequest: DescribePrometheusTargetsTMPRequest,
    CreateServiceDiscoveryRequest: CreateServiceDiscoveryRequest,
    PeriodsSt: PeriodsSt,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    GrafanaChannel: GrafanaChannel,
    CreatePrometheusConfigRequest: CreatePrometheusConfigRequest,
    DescribeSSOAccountResponse: DescribeSSOAccountResponse,
    CreateAlarmPolicyResponse: CreateAlarmPolicyResponse,
    DeleteGrafanaNotificationChannelRequest: DeleteGrafanaNotificationChannelRequest,
    AlarmNotice: AlarmNotice,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    CreatePrometheusClusterAgentRequest: CreatePrometheusClusterAgentRequest,
    ModifyAlarmPolicyConditionResponse: ModifyAlarmPolicyConditionResponse,
    DescribePrometheusInstancesOverviewResponse: DescribePrometheusInstancesOverviewResponse,
    MetricSet: MetricSet,
    PrometheusInstanceGrantInfo: PrometheusInstanceGrantInfo,
    TemplateGroup: TemplateGroup,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    UpdateGrafanaIntegrationResponse: UpdateGrafanaIntegrationResponse,
    DescribeAlarmHistoriesResponse: DescribeAlarmHistoriesResponse,
    DescribeAlarmMetricsRequest: DescribeAlarmMetricsRequest,
    CreateSSOAccountRequest: CreateSSOAccountRequest,
    AlarmPolicyFilter: AlarmPolicyFilter,
    ModifyAlarmPolicyNoticeResponse: ModifyAlarmPolicyNoticeResponse,
    PrometheusAlertRule: PrometheusAlertRule,
    UnbindPrometheusManagedGrafanaResponse: UnbindPrometheusManagedGrafanaResponse,
    DescribeGrafanaChannelsResponse: DescribeGrafanaChannelsResponse,
    DescribeAlarmPolicyResponse: DescribeAlarmPolicyResponse,
    PrometheusNotificationItem: PrometheusNotificationItem,
    DescribeMonitorTypesResponse: DescribeMonitorTypesResponse,
    UpgradeGrafanaInstanceRequest: UpgradeGrafanaInstanceRequest,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    CreatePrometheusGlobalNotificationResponse: CreatePrometheusGlobalNotificationResponse,
    DescribeAlarmHistoriesRequest: DescribeAlarmHistoriesRequest,
    DescribePrometheusRecordRuleYamlResponse: DescribePrometheusRecordRuleYamlResponse,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    EnableSSOCamCheckRequest: EnableSSOCamCheckRequest,
    DeleteGrafanaIntegrationResponse: DeleteGrafanaIntegrationResponse,
    DescribeInstalledPluginsRequest: DescribeInstalledPluginsRequest,
    DescribePrometheusZonesResponse: DescribePrometheusZonesResponse,
    DescribePrometheusAgentsRequest: DescribePrometheusAgentsRequest,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    DescribePrometheusInstanceInitStatusRequest: DescribePrometheusInstanceInitStatusRequest,
    CreatePrometheusAlertPolicyRequest: CreatePrometheusAlertPolicyRequest,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    UpgradeGrafanaDashboardResponse: UpgradeGrafanaDashboardResponse,
    DescribeAllNamespacesRequest: DescribeAllNamespacesRequest,
    PolicyGroup: PolicyGroup,
    DescribePrometheusClusterAgentsRequest: DescribePrometheusClusterAgentsRequest,
    UnbindPrometheusManagedGrafanaRequest: UnbindPrometheusManagedGrafanaRequest,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    DescribeConditionsTemplateListResponse: DescribeConditionsTemplateListResponse,
    CreatePrometheusTempRequest: CreatePrometheusTempRequest,
    ModifyAlarmPolicyInfoResponse: ModifyAlarmPolicyInfoResponse,
    MetricConfig: MetricConfig,
    DescribeAlarmEventsRequest: DescribeAlarmEventsRequest,
    ModifyAlarmPolicyConditionRequest: ModifyAlarmPolicyConditionRequest,
    ModifyAlarmNoticeResponse: ModifyAlarmNoticeResponse,
    PrometheusJobTargets: PrometheusJobTargets,
    UpdateGrafanaConfigRequest: UpdateGrafanaConfigRequest,
    DescribeGrafanaIntegrationsRequest: DescribeGrafanaIntegrationsRequest,
    AlarmHistory: AlarmHistory,
    PrometheusClusterAgentBasic: PrometheusClusterAgentBasic,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePrometheusScrapeJobRequest: CreatePrometheusScrapeJobRequest,
    CreatePrometheusTempResponse: CreatePrometheusTempResponse,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    NoticeBindPolicys: NoticeBindPolicys,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribeAlarmNoticesRequest: DescribeAlarmNoticesRequest,
    RunPrometheusInstanceResponse: RunPrometheusInstanceResponse,
    UpdateExporterIntegrationRequest: UpdateExporterIntegrationRequest,
    CheckIsPrometheusNewUserRequest: CheckIsPrometheusNewUserRequest,
    DescribeAlarmNoticeResponse: DescribeAlarmNoticeResponse,
    DeleteAlertRulesRequest: DeleteAlertRulesRequest,
    SyncPrometheusTempRequest: SyncPrometheusTempRequest,
    GetMonitorDataResponse: GetMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    DescribeRecordingRulesRequest: DescribeRecordingRulesRequest,
    UpgradeGrafanaDashboardRequest: UpgradeGrafanaDashboardRequest,
    DeleteServiceDiscoveryRequest: DeleteServiceDiscoveryRequest,
    DescribeInstalledPluginsResponse: DescribeInstalledPluginsResponse,
    UpdateGrafanaConfigResponse: UpdateGrafanaConfigResponse,
    ModifyPrometheusInstanceAttributesRequest: ModifyPrometheusInstanceAttributesRequest,
    DescribePrometheusConfigResponse: DescribePrometheusConfigResponse,
    UpdateGrafanaEnvironmentsResponse: UpdateGrafanaEnvironmentsResponse,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    CreatePrometheusGlobalNotificationRequest: CreatePrometheusGlobalNotificationRequest,
    ModifyPrometheusTempResponse: ModifyPrometheusTempResponse,
    DescribeRecordingRulesResponse: DescribeRecordingRulesResponse,
    DeleteRecordingRulesResponse: DeleteRecordingRulesResponse,
    UpdateGrafanaWhiteListRequest: UpdateGrafanaWhiteListRequest,
    UpdatePrometheusAgentStatusRequest: UpdatePrometheusAgentStatusRequest,
    DescribeAlarmNoticeCallbacksRequest: DescribeAlarmNoticeCallbacksRequest,
    CheckIsPrometheusNewUserResponse: CheckIsPrometheusNewUserResponse,
    PutMonitorDataResponse: PutMonitorDataResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    UpdateAlertRuleStateResponse: UpdateAlertRuleStateResponse,
    ModifyPrometheusRecordRuleYamlRequest: ModifyPrometheusRecordRuleYamlRequest,
    DeletePrometheusAlertPolicyResponse: DeletePrometheusAlertPolicyResponse,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    ModifyAlarmPolicyNoticeRequest: ModifyAlarmPolicyNoticeRequest,
    DeleteAlarmPolicyRequest: DeleteAlarmPolicyRequest,
    EventCondition: EventCondition,
    CreateAlertRuleResponse: CreateAlertRuleResponse,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    ModifyAlarmPolicyTasksResponse: ModifyAlarmPolicyTasksResponse,
    MonitorTypeInfo: MonitorTypeInfo,
    DimensionNew: DimensionNew,
    DeleteAlertRulesResponse: DeleteAlertRulesResponse,
    ModifyAlarmPolicyStatusRequest: ModifyAlarmPolicyStatusRequest,
    ConditionsTemp: ConditionsTemp,
    Operator: Operator,
    DescribeServiceDiscoveryRequest: DescribeServiceDiscoveryRequest,
    TaskStepInfo: TaskStepInfo,
    DescribePrometheusTempResponse: DescribePrometheusTempResponse,
    DescribeGrafanaConfigResponse: DescribeGrafanaConfigResponse,
    DescribeAlarmNoticeRequest: DescribeAlarmNoticeRequest,
    PrometheusTemp: PrometheusTemp,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    DeletePrometheusTempRequest: DeletePrometheusTempRequest,
    EnableGrafanaInternetResponse: EnableGrafanaInternetResponse,
    DescribeProductListRequest: DescribeProductListRequest,
    BindPrometheusManagedGrafanaResponse: BindPrometheusManagedGrafanaResponse,
    ManagementCommand: ManagementCommand,
    CreatePrometheusAgentRequest: CreatePrometheusAgentRequest,
    DeleteAlarmNoticesResponse: DeleteAlarmNoticesResponse,
    DeletePrometheusTempSyncRequest: DeletePrometheusTempSyncRequest,
    DescribePluginOverviewsRequest: DescribePluginOverviewsRequest,
    DescribePrometheusGlobalConfigRequest: DescribePrometheusGlobalConfigRequest,
    PrometheusInstanceTenantUsage: PrometheusInstanceTenantUsage,
    DescribePrometheusZonesRequest: DescribePrometheusZonesRequest,
    ModifyPolicyGroupCondition: ModifyPolicyGroupCondition,
    ModifyPolicyGroupRequest: ModifyPolicyGroupRequest,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    DeletePrometheusConfigRequest: DeletePrometheusConfigRequest,
    PrometheusAlertPolicyItem: PrometheusAlertPolicyItem,
    ModifyPrometheusAgentExternalLabelsRequest: ModifyPrometheusAgentExternalLabelsRequest,
    PrometheusScrapeJob: PrometheusScrapeJob,
    AlarmHierarchicalNotice: AlarmHierarchicalNotice,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DescribePrometheusTempRequest: DescribePrometheusTempRequest,
    UpdateServiceDiscoveryResponse: UpdateServiceDiscoveryResponse,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    CreateAlarmNoticeResponse: CreateAlarmNoticeResponse,
    Condition: Condition,
    DeleteGrafanaInstanceResponse: DeleteGrafanaInstanceResponse,
    PrometheusAgentOverview: PrometheusAgentOverview,
    Filter: Filter,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    UpdateSSOAccountRequest: UpdateSSOAccountRequest,
    CreateSSOAccountResponse: CreateSSOAccountResponse,
    PutMonitorDataRequest: PutMonitorDataRequest,
    UpdatePrometheusScrapeJobResponse: UpdatePrometheusScrapeJobResponse,
    DescribeAlarmPoliciesRequest: DescribeAlarmPoliciesRequest,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    IntegrationConfiguration: IntegrationConfiguration,
    DescribePrometheusAgentsResponse: DescribePrometheusAgentsResponse,
    ModifyPrometheusGlobalNotificationResponse: ModifyPrometheusGlobalNotificationResponse,
    CleanGrafanaInstanceResponse: CleanGrafanaInstanceResponse,
    CreateAlertRuleRequest: CreateAlertRuleRequest,
    ModifyPrometheusRecordRuleYamlResponse: ModifyPrometheusRecordRuleYamlResponse,
    DeletePrometheusScrapeJobsResponse: DeletePrometheusScrapeJobsResponse,
    DescribeAlarmPolicyRequest: DescribeAlarmPolicyRequest,
    UninstallGrafanaDashboardRequest: UninstallGrafanaDashboardRequest,
    UpdateGrafanaIntegrationRequest: UpdateGrafanaIntegrationRequest,
    DeletePrometheusRecordRuleYamlRequest: DeletePrometheusRecordRuleYamlRequest,
    MetricDatum: MetricDatum,
    DescribeStatisticDataRequest: DescribeStatisticDataRequest,
    GrafanaNotificationChannel: GrafanaNotificationChannel,
    SetDefaultAlarmPolicyRequest: SetDefaultAlarmPolicyRequest,
    CLSNotice: CLSNotice,
    LogAlarmReq: LogAlarmReq,
    TerminatePrometheusInstancesResponse: TerminatePrometheusInstancesResponse,
    UpdateSSOAccountResponse: UpdateSSOAccountResponse,
    DescribeGrafanaInstancesResponse: DescribeGrafanaInstancesResponse,
    RunPrometheusInstanceRequest: RunPrometheusInstanceRequest,
    UpdateAlertRuleStateRequest: UpdateAlertRuleStateRequest,
    SetDefaultAlarmPolicyResponse: SetDefaultAlarmPolicyResponse,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
