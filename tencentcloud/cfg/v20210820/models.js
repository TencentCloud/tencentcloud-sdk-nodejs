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
 * ModifyTaskRunStatus返回参数结构体
 * @class
 */
class ModifyTaskRunStatusResponse extends  AbstractModel {
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
 * 任务分组动作
 * @class
 */
class TaskGroupAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务分组动作ID
         * @type {number || null}
         */
        this.TaskGroupActionId = null;

        /**
         * 任务分组动作实例列表
         * @type {Array.<TaskGroupInstance> || null}
         */
        this.TaskGroupInstances = null;

        /**
         * 动作ID
         * @type {number || null}
         */
        this.ActionId = null;

        /**
         * 分组动作顺序
         * @type {number || null}
         */
        this.TaskGroupActionOrder = null;

        /**
         * 分组动作通用配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupActionGeneralConfiguration = null;

        /**
         * 分组动作自定义配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupActionCustomConfiguration = null;

        /**
         * 分组动作状态
         * @type {number || null}
         */
        this.TaskGroupActionStatus = null;

        /**
         * 动作分组创建时间
         * @type {string || null}
         */
        this.TaskGroupActionCreateTime = null;

        /**
         * 动作分组更新时间
         * @type {string || null}
         */
        this.TaskGroupActionUpdateTime = null;

        /**
         * 动作名称
         * @type {string || null}
         */
        this.ActionTitle = null;

        /**
         * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过
         * @type {number || null}
         */
        this.TaskGroupActionStatusType = null;

        /**
         * RandomId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskGroupActionRandomId = null;

        /**
         * RecoverId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskGroupActionRecoverId = null;

        /**
         * ExecuteId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskGroupActionExecuteId = null;

        /**
         * 调用api类型，0:tat, 1:云api
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActionApiType = null;

        /**
         * 1:故障，2:恢复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActionAttribute = null;

        /**
         * 动作类型：平台、自定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupActionId = 'TaskGroupActionId' in params ? params.TaskGroupActionId : null;

        if (params.TaskGroupInstances) {
            this.TaskGroupInstances = new Array();
            for (let z in params.TaskGroupInstances) {
                let obj = new TaskGroupInstance();
                obj.deserialize(params.TaskGroupInstances[z]);
                this.TaskGroupInstances.push(obj);
            }
        }
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.TaskGroupActionOrder = 'TaskGroupActionOrder' in params ? params.TaskGroupActionOrder : null;
        this.TaskGroupActionGeneralConfiguration = 'TaskGroupActionGeneralConfiguration' in params ? params.TaskGroupActionGeneralConfiguration : null;
        this.TaskGroupActionCustomConfiguration = 'TaskGroupActionCustomConfiguration' in params ? params.TaskGroupActionCustomConfiguration : null;
        this.TaskGroupActionStatus = 'TaskGroupActionStatus' in params ? params.TaskGroupActionStatus : null;
        this.TaskGroupActionCreateTime = 'TaskGroupActionCreateTime' in params ? params.TaskGroupActionCreateTime : null;
        this.TaskGroupActionUpdateTime = 'TaskGroupActionUpdateTime' in params ? params.TaskGroupActionUpdateTime : null;
        this.ActionTitle = 'ActionTitle' in params ? params.ActionTitle : null;
        this.TaskGroupActionStatusType = 'TaskGroupActionStatusType' in params ? params.TaskGroupActionStatusType : null;
        this.TaskGroupActionRandomId = 'TaskGroupActionRandomId' in params ? params.TaskGroupActionRandomId : null;
        this.TaskGroupActionRecoverId = 'TaskGroupActionRecoverId' in params ? params.TaskGroupActionRecoverId : null;
        this.TaskGroupActionExecuteId = 'TaskGroupActionExecuteId' in params ? params.TaskGroupActionExecuteId : null;
        this.ActionApiType = 'ActionApiType' in params ? params.ActionApiType : null;
        this.ActionAttribute = 'ActionAttribute' in params ? params.ActionAttribute : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * 监控指标
 * @class
 */
class TaskMonitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控指标ID
         * @type {number || null}
         */
        this.TaskMonitorId = null;

        /**
         * 监控指标对象类型ID
         * @type {number || null}
         */
        this.TaskMonitorObjectTypeId = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstancesIds = null;

        /**
         * 中文指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricChineseName = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskMonitorId = 'TaskMonitorId' in params ? params.TaskMonitorId : null;
        this.TaskMonitorObjectTypeId = 'TaskMonitorObjectTypeId' in params ? params.TaskMonitorObjectTypeId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.InstancesIds = 'InstancesIds' in params ? params.InstancesIds : null;
        this.MetricChineseName = 'MetricChineseName' in params ? params.MetricChineseName : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * 从经验模版创建演练时需要配置的任务参数
 * @class
 */
class TaskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作组配置，需要保证配置个数和经验中的动作组个数一致
         * @type {Array.<TaskGroupConfig> || null}
         */
        this.TaskGroupsConfig = null;

        /**
         * 更改后的演练名称，不填则默认取经验名称
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * 更改后的演练描述，不填则默认取经验描述
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * 演练执行模式：1----手工执行/ 2 ---自动执行，不填则默认取经验执行模式
         * @type {number || null}
         */
        this.TaskMode = null;

        /**
         * 演练自动暂停时间，单位分钟, 不填则默认取经验自动暂停时间
         * @type {number || null}
         */
        this.TaskPauseDuration = null;

        /**
         * 演练标签信息，不填则默认取经验标签
         * @type {Array.<TagWithCreate> || null}
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

        if (params.TaskGroupsConfig) {
            this.TaskGroupsConfig = new Array();
            for (let z in params.TaskGroupsConfig) {
                let obj = new TaskGroupConfig();
                obj.deserialize(params.TaskGroupsConfig[z]);
                this.TaskGroupsConfig.push(obj);
            }
        }
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;
        this.TaskPauseDuration = 'TaskPauseDuration' in params ? params.TaskPauseDuration : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithCreate();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteTask请求参数结构体
 * @class
 */
class DeleteTaskRequest extends  AbstractModel {
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
 * 任务分组
 * @class
 */
class TaskGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务动作ID
         * @type {number || null}
         */
        this.TaskGroupId = null;

        /**
         * 分组标题
         * @type {string || null}
         */
        this.TaskGroupTitle = null;

        /**
         * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupDescription = null;

        /**
         * 任务分组顺序
         * @type {number || null}
         */
        this.TaskGroupOrder = null;

        /**
         * 对象类型ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * 任务分组创建时间
         * @type {string || null}
         */
        this.TaskGroupCreateTime = null;

        /**
         * 任务分组更新时间
         * @type {string || null}
         */
        this.TaskGroupUpdateTime = null;

        /**
         * 动作分组动作列表
         * @type {Array.<TaskGroupAction> || null}
         */
        this.TaskGroupActions = null;

        /**
         * 实例列表
         * @type {Array.<string> || null}
         */
        this.TaskGroupInstanceList = null;

        /**
         * 执行模式。1 --- 顺序执行，2 --- 阶段执行
         * @type {number || null}
         */
        this.TaskGroupMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupId = 'TaskGroupId' in params ? params.TaskGroupId : null;
        this.TaskGroupTitle = 'TaskGroupTitle' in params ? params.TaskGroupTitle : null;
        this.TaskGroupDescription = 'TaskGroupDescription' in params ? params.TaskGroupDescription : null;
        this.TaskGroupOrder = 'TaskGroupOrder' in params ? params.TaskGroupOrder : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.TaskGroupCreateTime = 'TaskGroupCreateTime' in params ? params.TaskGroupCreateTime : null;
        this.TaskGroupUpdateTime = 'TaskGroupUpdateTime' in params ? params.TaskGroupUpdateTime : null;

        if (params.TaskGroupActions) {
            this.TaskGroupActions = new Array();
            for (let z in params.TaskGroupActions) {
                let obj = new TaskGroupAction();
                obj.deserialize(params.TaskGroupActions[z]);
                this.TaskGroupActions.push(obj);
            }
        }
        this.TaskGroupInstanceList = 'TaskGroupInstanceList' in params ? params.TaskGroupInstanceList : null;
        this.TaskGroupMode = 'TaskGroupMode' in params ? params.TaskGroupMode : null;

    }
}

/**
 * ExecuteTask返回参数结构体
 * @class
 */
class ExecuteTaskResponse extends  AbstractModel {
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
 * 动作组的配置项
 * @class
 */
class TaskGroupConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作组所关联的实例对象
         * @type {Array.<string> || null}
         */
        this.TaskGroupInstances = null;

        /**
         * 动作组标题，不填默认取经验中的动作组名称
         * @type {string || null}
         */
        this.TaskGroupTitle = null;

        /**
         * 动作组描述，不填默认取经验中的动作组描述
         * @type {string || null}
         */
        this.TaskGroupDescription = null;

        /**
         * 动作执行模式。1 --- 顺序执行，2 --- 阶段执行, 不填默认取经验中的动作组执行模式
         * @type {number || null}
         */
        this.TaskGroupMode = null;

        /**
         * 动作组中的动作参数，不填默认使用经验中的动作参数，配置时可以只指定想要修改参数的动作
         * @type {Array.<TaskGroupActionConfig> || null}
         */
        this.TaskGroupActionsConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupInstances = 'TaskGroupInstances' in params ? params.TaskGroupInstances : null;
        this.TaskGroupTitle = 'TaskGroupTitle' in params ? params.TaskGroupTitle : null;
        this.TaskGroupDescription = 'TaskGroupDescription' in params ? params.TaskGroupDescription : null;
        this.TaskGroupMode = 'TaskGroupMode' in params ? params.TaskGroupMode : null;

        if (params.TaskGroupActionsConfig) {
            this.TaskGroupActionsConfig = new Array();
            for (let z in params.TaskGroupActionsConfig) {
                let obj = new TaskGroupActionConfig();
                obj.deserialize(params.TaskGroupActionsConfig[z]);
                this.TaskGroupActionsConfig.push(obj);
            }
        }

    }
}

/**
 * 经验库
 * @class
 */
class Template extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 经验库标题
         * @type {string || null}
         */
        this.TemplateTitle = null;

        /**
         * 经验库描述
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * 自定义标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateTag = null;

        /**
         * 使用状态。1 ---- 使用中，2 --- 停用
         * @type {number || null}
         */
        this.TemplateIsUsed = null;

        /**
         * 经验库创建时间
         * @type {string || null}
         */
        this.TemplateCreateTime = null;

        /**
         * 经验库更新时间
         * @type {string || null}
         */
        this.TemplateUpdateTime = null;

        /**
         * 经验库模式。1:手工执行，2:自动执行
         * @type {number || null}
         */
        this.TemplateMode = null;

        /**
         * 自动暂停时长。单位分钟
         * @type {number || null}
         */
        this.TemplatePauseDuration = null;

        /**
         * 演练创建者Uin
         * @type {string || null}
         */
        this.TemplateOwnerUin = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.TemplateRegionId = null;

        /**
         * 动作组
         * @type {Array.<TemplateGroup> || null}
         */
        this.TemplateGroups = null;

        /**
         * 监控指标
         * @type {Array.<TemplateMonitor> || null}
         */
        this.TemplateMonitors = null;

        /**
         * 护栏监控
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TemplatePolicy || null}
         */
        this.TemplatePolicy = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagWithDescribe> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateTitle = 'TemplateTitle' in params ? params.TemplateTitle : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.TemplateTag = 'TemplateTag' in params ? params.TemplateTag : null;
        this.TemplateIsUsed = 'TemplateIsUsed' in params ? params.TemplateIsUsed : null;
        this.TemplateCreateTime = 'TemplateCreateTime' in params ? params.TemplateCreateTime : null;
        this.TemplateUpdateTime = 'TemplateUpdateTime' in params ? params.TemplateUpdateTime : null;
        this.TemplateMode = 'TemplateMode' in params ? params.TemplateMode : null;
        this.TemplatePauseDuration = 'TemplatePauseDuration' in params ? params.TemplatePauseDuration : null;
        this.TemplateOwnerUin = 'TemplateOwnerUin' in params ? params.TemplateOwnerUin : null;
        this.TemplateRegionId = 'TemplateRegionId' in params ? params.TemplateRegionId : null;

        if (params.TemplateGroups) {
            this.TemplateGroups = new Array();
            for (let z in params.TemplateGroups) {
                let obj = new TemplateGroup();
                obj.deserialize(params.TemplateGroups[z]);
                this.TemplateGroups.push(obj);
            }
        }

        if (params.TemplateMonitors) {
            this.TemplateMonitors = new Array();
            for (let z in params.TemplateMonitors) {
                let obj = new TemplateMonitor();
                obj.deserialize(params.TemplateMonitors[z]);
                this.TemplateMonitors.push(obj);
            }
        }

        if (params.TemplatePolicy) {
            let obj = new TemplatePolicy();
            obj.deserialize(params.TemplatePolicy)
            this.TemplatePolicy = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskExecuteLogs请求参数结构体
 * @class
 */
class DescribeTaskExecuteLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 返回的内容行数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 日志起始的行数。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTask返回参数结构体
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
         * @type {Task || null}
         */
        this.Task = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Task) {
            let obj = new Task();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTaskRunStatus请求参数结构体
 * @class
 */
class ModifyTaskRunStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务状态, 1001--未开始 1002--进行中（执行）1003--进行中（暂停）1004--执行结束
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 执行结果是否符合预期（当前扭转状态为执行结束时，需要必传此字段）
         * @type {boolean || null}
         */
        this.IsExpect = null;

        /**
         * 演习结论（当演习状态转变为执行结束时，需要填写此字段）
         * @type {string || null}
         */
        this.Summary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsExpect = 'IsExpect' in params ? params.IsExpect : null;
        this.Summary = 'Summary' in params ? params.Summary : null;

    }
}

/**
 * DescribeTemplate返回参数结构体
 * @class
 */
class DescribeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库详情
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询-保护策略
 * @class
 */
class DescribePolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保护策略ID列表
         * @type {Array.<string> || null}
         */
        this.TaskPolicyIdList = null;

        /**
         * 保护策略状态
         * @type {string || null}
         */
        this.TaskPolicyStatus = null;

        /**
         * 策略规则
         * @type {string || null}
         */
        this.TaskPolicyRule = null;

        /**
         * 护栏策略生效处理策略 1:顺序执行，2:暂停
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskPolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskPolicyIdList = 'TaskPolicyIdList' in params ? params.TaskPolicyIdList : null;
        this.TaskPolicyStatus = 'TaskPolicyStatus' in params ? params.TaskPolicyStatus : null;
        this.TaskPolicyRule = 'TaskPolicyRule' in params ? params.TaskPolicyRule : null;
        this.TaskPolicyDealType = 'TaskPolicyDealType' in params ? params.TaskPolicyDealType : null;

    }
}

/**
 * DescribeTemplate请求参数结构体
 * @class
 */
class DescribeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库ID
         * @type {number || null}
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
 * ExecuteTaskInstance请求参数结构体
 * @class
 */
class ExecuteTaskInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务动作ID
         * @type {number || null}
         */
        this.TaskActionId = null;

        /**
         * 任务动作实例ID
         * @type {Array.<number> || null}
         */
        this.TaskInstanceIds = null;

        /**
         * 是否操作整个任务
         * @type {boolean || null}
         */
        this.IsOperateAll = null;

        /**
         * 操作类型：（1--启动   2--执行  3--跳过   5--重试）
         * @type {number || null}
         */
        this.ActionType = null;

        /**
         * 动作组ID
         * @type {number || null}
         */
        this.TaskGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskActionId = 'TaskActionId' in params ? params.TaskActionId : null;
        this.TaskInstanceIds = 'TaskInstanceIds' in params ? params.TaskInstanceIds : null;
        this.IsOperateAll = 'IsOperateAll' in params ? params.IsOperateAll : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.TaskGroupId = 'TaskGroupId' in params ? params.TaskGroupId : null;

    }
}

/**
 * 任务分组动作实例
 * @class
 */
class TaskGroupInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {number || null}
         */
        this.TaskGroupInstanceId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupInstanceObjectId = null;

        /**
         * 实例动作执行状态
         * @type {number || null}
         */
        this.TaskGroupInstanceStatus = null;

        /**
         * 实例动作执行日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupInstanceExecuteLog = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.TaskGroupInstanceCreateTime = null;

        /**
         * 实例更新时间
         * @type {string || null}
         */
        this.TaskGroupInstanceUpdateTime = null;

        /**
         * 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过
         * @type {number || null}
         */
        this.TaskGroupInstanceStatusType = null;

        /**
         * 执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupInstanceStartTime = null;

        /**
         * 执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskGroupInstanceEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupInstanceId = 'TaskGroupInstanceId' in params ? params.TaskGroupInstanceId : null;
        this.TaskGroupInstanceObjectId = 'TaskGroupInstanceObjectId' in params ? params.TaskGroupInstanceObjectId : null;
        this.TaskGroupInstanceStatus = 'TaskGroupInstanceStatus' in params ? params.TaskGroupInstanceStatus : null;
        this.TaskGroupInstanceExecuteLog = 'TaskGroupInstanceExecuteLog' in params ? params.TaskGroupInstanceExecuteLog : null;
        this.TaskGroupInstanceCreateTime = 'TaskGroupInstanceCreateTime' in params ? params.TaskGroupInstanceCreateTime : null;
        this.TaskGroupInstanceUpdateTime = 'TaskGroupInstanceUpdateTime' in params ? params.TaskGroupInstanceUpdateTime : null;
        this.TaskGroupInstanceStatusType = 'TaskGroupInstanceStatusType' in params ? params.TaskGroupInstanceStatusType : null;
        this.TaskGroupInstanceStartTime = 'TaskGroupInstanceStartTime' in params ? params.TaskGroupInstanceStartTime : null;
        this.TaskGroupInstanceEndTime = 'TaskGroupInstanceEndTime' in params ? params.TaskGroupInstanceEndTime : null;

    }
}

/**
 * ExecuteTask请求参数结构体
 * @class
 */
class ExecuteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要执行的任务ID
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
 * DescribeTaskList返回参数结构体
 * @class
 */
class DescribeTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<TaskListItem> || null}
         */
        this.TaskList = null;

        /**
         * 列表数量
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

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new TaskListItem();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务分组动作
 * @class
 */
class TemplateGroupAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库分组动作ID
         * @type {number || null}
         */
        this.TemplateGroupActionId = null;

        /**
         * 动作ID
         * @type {number || null}
         */
        this.ActionId = null;

        /**
         * 分组动作顺序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 分组动作通用配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GeneralConfiguration = null;

        /**
         * 分组动作自定义配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomConfiguration = null;

        /**
         * 动作分组创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 动作分组更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 动作名称
         * @type {string || null}
         */
        this.ActionTitle = null;

        /**
         * 自身随机id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RandomId = null;

        /**
         * 恢复动作id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecoverId = null;

        /**
         * 执行动作id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExecuteId = null;

        /**
         * 调用api类型，0:tat, 1:云api
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActionApiType = null;

        /**
         * 1:故障，2:恢复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActionAttribute = null;

        /**
         * 动作类型：平台和自定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateGroupActionId = 'TemplateGroupActionId' in params ? params.TemplateGroupActionId : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.GeneralConfiguration = 'GeneralConfiguration' in params ? params.GeneralConfiguration : null;
        this.CustomConfiguration = 'CustomConfiguration' in params ? params.CustomConfiguration : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ActionTitle = 'ActionTitle' in params ? params.ActionTitle : null;
        this.RandomId = 'RandomId' in params ? params.RandomId : null;
        this.RecoverId = 'RecoverId' in params ? params.RecoverId : null;
        this.ExecuteId = 'ExecuteId' in params ? params.ExecuteId : null;
        this.ActionApiType = 'ActionApiType' in params ? params.ActionApiType : null;
        this.ActionAttribute = 'ActionAttribute' in params ? params.ActionAttribute : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * DescribeTemplateList返回参数结构体
 * @class
 */
class DescribeTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库列表
         * @type {Array.<TemplateListItem> || null}
         */
        this.TemplateList = null;

        /**
         * 列表数量
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

        if (params.TemplateList) {
            this.TemplateList = new Array();
            for (let z in params.TemplateList) {
                let obj = new TemplateListItem();
                obj.deserialize(params.TemplateList[z]);
                this.TemplateList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 展示标签列表
 * @class
 */
class TagWithDescribe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
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
 * CreateTaskFromTemplate返回参数结构体
 * @class
 */
class CreateTaskFromTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的演练ID
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
 * DeleteTask返回参数结构体
 * @class
 */
class DeleteTaskResponse extends  AbstractModel {
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
 * DescribeTask请求参数结构体
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
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
 * 任务
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务标题
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * 任务描述
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * 自定义标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskTag = null;

        /**
         * 任务状态，1001--未开始  1002--进行中（执行）1003--进行中（暂停）1004--执行结束
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 任务结束状态，表明任务以何种状态结束: 0 -- 尚未结束，1 -- 成功，2-- 失败，3--终止
         * @type {number || null}
         */
        this.TaskStatusType = null;

        /**
         * 保护策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskProtectStrategy = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.TaskCreateTime = null;

        /**
         * 任务更新时间
         * @type {string || null}
         */
        this.TaskUpdateTime = null;

        /**
         * 任务动作组
         * @type {Array.<TaskGroup> || null}
         */
        this.TaskGroups = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskStartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskEndTime = null;

        /**
         * 是否符合预期。1：符合预期，2：不符合预期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskExpect = null;

        /**
         * 演习记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskSummary = null;

        /**
         * 任务模式。1:手工执行，2:自动执行
         * @type {number || null}
         */
        this.TaskMode = null;

        /**
         * 自动暂停时长。单位分钟
         * @type {number || null}
         */
        this.TaskPauseDuration = null;

        /**
         * 演练创建者Uin
         * @type {string || null}
         */
        this.TaskOwnerUin = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.TaskRegionId = null;

        /**
         * 监控指标列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskMonitor> || null}
         */
        this.TaskMonitors = null;

        /**
         * 保护策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribePolicy || null}
         */
        this.TaskPolicy = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagWithDescribe> || null}
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
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskTag = 'TaskTag' in params ? params.TaskTag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskStatusType = 'TaskStatusType' in params ? params.TaskStatusType : null;
        this.TaskProtectStrategy = 'TaskProtectStrategy' in params ? params.TaskProtectStrategy : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;
        this.TaskUpdateTime = 'TaskUpdateTime' in params ? params.TaskUpdateTime : null;

        if (params.TaskGroups) {
            this.TaskGroups = new Array();
            for (let z in params.TaskGroups) {
                let obj = new TaskGroup();
                obj.deserialize(params.TaskGroups[z]);
                this.TaskGroups.push(obj);
            }
        }
        this.TaskStartTime = 'TaskStartTime' in params ? params.TaskStartTime : null;
        this.TaskEndTime = 'TaskEndTime' in params ? params.TaskEndTime : null;
        this.TaskExpect = 'TaskExpect' in params ? params.TaskExpect : null;
        this.TaskSummary = 'TaskSummary' in params ? params.TaskSummary : null;
        this.TaskMode = 'TaskMode' in params ? params.TaskMode : null;
        this.TaskPauseDuration = 'TaskPauseDuration' in params ? params.TaskPauseDuration : null;
        this.TaskOwnerUin = 'TaskOwnerUin' in params ? params.TaskOwnerUin : null;
        this.TaskRegionId = 'TaskRegionId' in params ? params.TaskRegionId : null;

        if (params.TaskMonitors) {
            this.TaskMonitors = new Array();
            for (let z in params.TaskMonitors) {
                let obj = new TaskMonitor();
                obj.deserialize(params.TaskMonitors[z]);
                this.TaskMonitors.push(obj);
            }
        }

        if (params.TaskPolicy) {
            let obj = new DescribePolicy();
            obj.deserialize(params.TaskPolicy)
            this.TaskPolicy = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreateTaskFromTemplate请求参数结构体
 * @class
 */
class CreateTaskFromTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从经验库中查询到的经验模版ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 演练的配置参数
         * @type {TaskConfig || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.TaskConfig) {
            let obj = new TaskConfig();
            obj.deserialize(params.TaskConfig)
            this.TaskConfig = obj;
        }

    }
}

/**
 * DescribeTaskList请求参数结构体
 * @class
 */
class DescribeTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 演练名称
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * 标签键
         * @type {Array.<string> || null}
         */
        this.TaskTag = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 开始时间，固定格式%Y-%m-%d %H:%M:%S
         * @type {string || null}
         */
        this.TaskStartTime = null;

        /**
         * 结束时间，固定格式%Y-%m-%d %H:%M:%S
         * @type {string || null}
         */
        this.TaskEndTime = null;

        /**
         * 标签对
         * @type {Array.<TagWithDescribe> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskTag = 'TaskTag' in params ? params.TaskTag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskStartTime = 'TaskStartTime' in params ? params.TaskStartTime : null;
        this.TaskEndTime = 'TaskEndTime' in params ? params.TaskEndTime : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 任务列表信息
 * @class
 */
class TaskListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务标题
         * @type {string || null}
         */
        this.TaskTitle = null;

        /**
         * 任务描述
         * @type {string || null}
         */
        this.TaskDescription = null;

        /**
         * 任务标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskTag = null;

        /**
         * 任务状态(1001 -- 未开始   1002 -- 进行中  1003 -- 暂停中   1004 -- 任务结束)
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.TaskCreateTime = null;

        /**
         * 任务更新时间
         * @type {string || null}
         */
        this.TaskUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskTitle = 'TaskTitle' in params ? params.TaskTitle : null;
        this.TaskDescription = 'TaskDescription' in params ? params.TaskDescription : null;
        this.TaskTag = 'TaskTag' in params ? params.TaskTag : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskCreateTime = 'TaskCreateTime' in params ? params.TaskCreateTime : null;
        this.TaskUpdateTime = 'TaskUpdateTime' in params ? params.TaskUpdateTime : null;

    }
}

/**
 * ExecuteTaskInstance返回参数结构体
 * @class
 */
class ExecuteTaskInstanceResponse extends  AbstractModel {
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
 * DescribeTaskExecuteLogs返回参数结构体
 * @class
 */
class DescribeTaskExecuteLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志数据
         * @type {Array.<string> || null}
         */
        this.LogMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogMessage = 'LogMessage' in params ? params.LogMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监控指标
 * @class
 */
class TemplateMonitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控指标ID
         * @type {number || null}
         */
        this.MonitorId = null;

        /**
         * 监控指标对象类型ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 中文指标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricChineseName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MetricChineseName = 'MetricChineseName' in params ? params.MetricChineseName : null;

    }
}

/**
 * 任务分组
 * @class
 */
class TemplateGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库动作ID
         * @type {number || null}
         */
        this.TemplateGroupId = null;

        /**
         * 经验库动作分组动作列表
         * @type {Array.<TemplateGroupAction> || null}
         */
        this.TemplateGroupActions = null;

        /**
         * 分组标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 分组描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 分组顺序
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 执行模式。1 --- 顺序执行，2 --- 阶段执行
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 对象类型ID
         * @type {number || null}
         */
        this.ObjectTypeId = null;

        /**
         * 分组创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 分组更新时间
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
        this.TemplateGroupId = 'TemplateGroupId' in params ? params.TemplateGroupId : null;

        if (params.TemplateGroupActions) {
            this.TemplateGroupActions = new Array();
            for (let z in params.TemplateGroupActions) {
                let obj = new TemplateGroupAction();
                obj.deserialize(params.TemplateGroupActions[z]);
                this.TemplateGroupActions.push(obj);
            }
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ObjectTypeId = 'ObjectTypeId' in params ? params.ObjectTypeId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 保护策略
 * @class
 */
class TemplatePolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保护策略ID列表
         * @type {Array.<string> || null}
         */
        this.TemplatePolicyIdList = null;

        /**
         * 策略规则
         * @type {string || null}
         */
        this.TemplatePolicyRule = null;

        /**
         * 护栏策略生效处理策略 1:顺序执行，2:暂停
         * @type {number || null}
         */
        this.TemplatePolicyDealType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplatePolicyIdList = 'TemplatePolicyIdList' in params ? params.TemplatePolicyIdList : null;
        this.TemplatePolicyRule = 'TemplatePolicyRule' in params ? params.TemplatePolicyRule : null;
        this.TemplatePolicyDealType = 'TemplatePolicyDealType' in params ? params.TemplatePolicyDealType : null;

    }
}

/**
 * 动作组中的动作参数
 * @class
 */
class TaskGroupActionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该动作在动作组中的顺序，从1开始，不填或填错将匹配不到经验中要修改参数的动作
         * @type {number || null}
         */
        this.TaskGroupActionOrder = null;

        /**
         * 动作通用参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数
         * @type {string || null}
         */
        this.TaskGroupActionGeneralConfiguration = null;

        /**
         * 动作自定义参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数
         * @type {string || null}
         */
        this.TaskGroupActionCustomConfiguration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskGroupActionOrder = 'TaskGroupActionOrder' in params ? params.TaskGroupActionOrder : null;
        this.TaskGroupActionGeneralConfiguration = 'TaskGroupActionGeneralConfiguration' in params ? params.TaskGroupActionGeneralConfiguration : null;
        this.TaskGroupActionCustomConfiguration = 'TaskGroupActionCustomConfiguration' in params ? params.TaskGroupActionCustomConfiguration : null;

    }
}

/**
 * DescribeTemplateList请求参数结构体
 * @class
 */
class DescribeTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页Limit, 最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 演练名称
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 标签键
         * @type {Array.<string> || null}
         */
        this.Tag = null;

        /**
         * 状态，1---使用中， 2---停用
         * @type {number || null}
         */
        this.IsUsed = null;

        /**
         * 标签对
         * @type {Array.<TagWithDescribe> || null}
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.IsUsed = 'IsUsed' in params ? params.IsUsed : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDescribe();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 经验库列表信息
 * @class
 */
class TemplateListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经验库ID
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 经验库标题
         * @type {string || null}
         */
        this.TemplateTitle = null;

        /**
         * 经验库描述
         * @type {string || null}
         */
        this.TemplateDescription = null;

        /**
         * 经验库标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateTag = null;

        /**
         * 经验库状态。1 -- 使用中，2 -- 停用
         * @type {number || null}
         */
        this.TemplateIsUsed = null;

        /**
         * 经验库创建时间
         * @type {string || null}
         */
        this.TemplateCreateTime = null;

        /**
         * 经验库更新时间
         * @type {string || null}
         */
        this.TemplateUpdateTime = null;

        /**
         * 经验库关联的任务数量
         * @type {number || null}
         */
        this.TemplateUsedNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateTitle = 'TemplateTitle' in params ? params.TemplateTitle : null;
        this.TemplateDescription = 'TemplateDescription' in params ? params.TemplateDescription : null;
        this.TemplateTag = 'TemplateTag' in params ? params.TemplateTag : null;
        this.TemplateIsUsed = 'TemplateIsUsed' in params ? params.TemplateIsUsed : null;
        this.TemplateCreateTime = 'TemplateCreateTime' in params ? params.TemplateCreateTime : null;
        this.TemplateUpdateTime = 'TemplateUpdateTime' in params ? params.TemplateUpdateTime : null;
        this.TemplateUsedNum = 'TemplateUsedNum' in params ? params.TemplateUsedNum : null;

    }
}

/**
 * 用于传入创建、编辑标签
 * @class
 */
class TagWithCreate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
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

module.exports = {
    ModifyTaskRunStatusResponse: ModifyTaskRunStatusResponse,
    TaskGroupAction: TaskGroupAction,
    TaskMonitor: TaskMonitor,
    TaskConfig: TaskConfig,
    DeleteTaskRequest: DeleteTaskRequest,
    TaskGroup: TaskGroup,
    ExecuteTaskResponse: ExecuteTaskResponse,
    TaskGroupConfig: TaskGroupConfig,
    Template: Template,
    DescribeTaskExecuteLogsRequest: DescribeTaskExecuteLogsRequest,
    DescribeTaskResponse: DescribeTaskResponse,
    ModifyTaskRunStatusRequest: ModifyTaskRunStatusRequest,
    DescribeTemplateResponse: DescribeTemplateResponse,
    DescribePolicy: DescribePolicy,
    DescribeTemplateRequest: DescribeTemplateRequest,
    ExecuteTaskInstanceRequest: ExecuteTaskInstanceRequest,
    TaskGroupInstance: TaskGroupInstance,
    ExecuteTaskRequest: ExecuteTaskRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    TemplateGroupAction: TemplateGroupAction,
    DescribeTemplateListResponse: DescribeTemplateListResponse,
    TagWithDescribe: TagWithDescribe,
    CreateTaskFromTemplateResponse: CreateTaskFromTemplateResponse,
    DeleteTaskResponse: DeleteTaskResponse,
    DescribeTaskRequest: DescribeTaskRequest,
    Task: Task,
    CreateTaskFromTemplateRequest: CreateTaskFromTemplateRequest,
    DescribeTaskListRequest: DescribeTaskListRequest,
    TaskListItem: TaskListItem,
    ExecuteTaskInstanceResponse: ExecuteTaskInstanceResponse,
    DescribeTaskExecuteLogsResponse: DescribeTaskExecuteLogsResponse,
    TemplateMonitor: TemplateMonitor,
    TemplateGroup: TemplateGroup,
    TemplatePolicy: TemplatePolicy,
    TaskGroupActionConfig: TaskGroupActionConfig,
    DescribeTemplateListRequest: DescribeTemplateListRequest,
    TemplateListItem: TemplateListItem,
    TagWithCreate: TagWithCreate,

}
