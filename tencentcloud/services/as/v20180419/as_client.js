"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * as client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("as.tencentcloudapi.com", "2018-04-19", clientConfig);
    }
    /**
     * 本接口（ExecuteScalingPolicy）用于执行伸缩策略。

* 可以根据伸缩策略ID执行伸缩策略。
* 伸缩策略所属伸缩组处于伸缩活动时，会拒绝执行伸缩策略。
     */
    async ExecuteScalingPolicy(req, cb) {
        return this.request("ExecuteScalingPolicy", req, cb);
    }
    /**
     * 本接口（CreateAutoScalingGroup）用于创建伸缩组
     */
    async CreateAutoScalingGroup(req, cb) {
        return this.request("CreateAutoScalingGroup", req, cb);
    }
    /**
     * 本接口（ClearLaunchConfigurationAttributes）用于将启动配置内的特定属性完全清空。
     */
    async ClearLaunchConfigurationAttributes(req, cb) {
        return this.request("ClearLaunchConfigurationAttributes", req, cb);
    }
    /**
     * 本接口（ModifyScalingPolicy）用于修改告警触发策略。
     */
    async ModifyScalingPolicy(req, cb) {
        return this.request("ModifyScalingPolicy", req, cb);
    }
    /**
     * 本接口（ModifyLoadBalancerTargetAttributes）用于修改伸缩组内负载均衡器的目标规则属性。
     */
    async ModifyLoadBalancerTargetAttributes(req, cb) {
        return this.request("ModifyLoadBalancerTargetAttributes", req, cb);
    }
    /**
     * 本接口 (DescribeNotificationConfigurations) 用于查询一个或多个通知的详细信息。

可以根据通知ID、伸缩组ID等信息来查询通知的详细信息。过滤信息详细请见过滤器`Filter`。
如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的通知。
     */
    async DescribeNotificationConfigurations(req, cb) {
        return this.request("DescribeNotificationConfigurations", req, cb);
    }
    /**
     * 本接口（DeleteAutoScalingGroup）用于删除指定伸缩组，删除前提是伸缩组内无实例且当前未在执行伸缩活动。
     */
    async DeleteAutoScalingGroup(req, cb) {
        return this.request("DeleteAutoScalingGroup", req, cb);
    }
    /**
     * 为伸缩组指定数量扩容实例，返回扩容活动的 ActivityId。
* 伸缩组需要未处于活动中
* 伸缩组处于停用状态时，该接口也会生效，可参考[停用伸缩组](https://cloud.tencent.com/document/api/377/20435)文档查看伸缩组停用状态的影响范围
* 接口会增加期望实例数，新的期望实例数需要小于等于最大实例数
* 扩容如果失败或者部分成功，最后期望实例数只会增加实际成功的实例数量
     */
    async ScaleOutInstances(req, cb) {
        return this.request("ScaleOutInstances", req, cb);
    }
    /**
     * 本接口（StartAutoScalingInstances）用于开启伸缩组内 CVM 实例。
* 开机成功，实例转为`IN_SERVICE`状态后，会增加期望实例数，期望实例数不可超过设置的最大值
* 本接口支持批量操作，每次请求开机实例的上限为100
     */
    async StartAutoScalingInstances(req, cb) {
        return this.request("StartAutoScalingInstances", req, cb);
    }
    /**
     * 本接口（UpgradeLaunchConfiguration）用于升级启动配置。

* 本接口用于升级启动配置，采用“完全覆盖”风格，无论之前参数如何，统一按照接口参数设置为新的配置。对于非必填字段，不填写则按照默认值赋值。
* 升级修改启动配置后，已经使用该启动配置扩容的存量实例不会发生变更，此后使用该启动配置的新增实例会按照新的配置进行扩容。
     */
    async UpgradeLaunchConfiguration(req, cb) {
        return this.request("UpgradeLaunchConfiguration", req, cb);
    }
    /**
     * 此接口用于修改生命周期挂钩。
     */
    async ModifyLifecycleHook(req, cb) {
        return this.request("ModifyLifecycleHook", req, cb);
    }
    /**
     * 本接口（DetachLoadBalancers）用于从伸缩组移出负载均衡器，本接口不会销毁负载均衡器。
     */
    async DetachLoadBalancers(req, cb) {
        return this.request("DetachLoadBalancers", req, cb);
    }
    /**
     * 本接口（AttachInstances）用于将 CVM 实例添加到伸缩组。

     */
    async AttachInstances(req, cb) {
        return this.request("AttachInstances", req, cb);
    }
    /**
     * 本接口（DescribeScalingPolicies）用于查询告警触发策略。
     */
    async DescribeScalingPolicies(req, cb) {
        return this.request("DescribeScalingPolicies", req, cb);
    }
    /**
     * 本接口（DeleteScheduledAction）用于删除特定的定时任务。
     */
    async DeleteScheduledAction(req, cb) {
        return this.request("DeleteScheduledAction", req, cb);
    }
    /**
     * 此接口（AttachLoadBalancers）用于将负载均衡器添加到伸缩组。
     */
    async AttachLoadBalancers(req, cb) {
        return this.request("AttachLoadBalancers", req, cb);
    }
    /**
     * 本接口（DetachInstances）用于从伸缩组移出 CVM 实例，本接口不会销毁实例。
* 如果移出指定实例后，伸缩组内处于`IN_SERVICE`状态的实例数量小于伸缩组最小值，接口将报错
* 如果伸缩组处于`DISABLED`状态，移出操作不校验`IN_SERVICE`实例数量和最小值的关系
* 对于伸缩组配置的 CLB，实例在离开伸缩组时，AS 会进行解挂载动作
     */
    async DetachInstances(req, cb) {
        return this.request("DetachInstances", req, cb);
    }
    /**
     * 为伸缩组指定数量缩容实例，返回缩容活动的 ActivityId。
* 伸缩组需要未处于活动中
* 伸缩组处于停用状态时，该接口也会生效，可参考[停用伸缩组](https://cloud.tencent.com/document/api/377/20435)文档查看伸缩组停用状态的影响范围
* 根据伸缩组的`TerminationPolicies`策略，选择被缩容的实例，可参考[缩容处理](https://cloud.tencent.com/document/product/377/8563)
* 接口只会选择`IN_SERVICE`实例缩容，如果需要缩容其他状态实例，可以使用 [DetachInstances](https://cloud.tencent.com/document/api/377/20436) 或 [RemoveInstances](https://cloud.tencent.com/document/api/377/20431) 接口
* 接口会减少期望实例数，新的期望实例数需要大于等于最小实例数
* 缩容如果失败或者部分成功，最后期望实例数只会扣减实际缩容成功的实例数量
     */
    async ScaleInInstances(req, cb) {
        return this.request("ScaleInInstances", req, cb);
    }
    /**
     * 本接口（CreateScheduledAction）用于创建定时任务。
     */
    async CreateScheduledAction(req, cb) {
        return this.request("CreateScheduledAction", req, cb);
    }
    /**
     * 此接口用于查询伸缩组配置建议。
     */
    async DescribeAutoScalingAdvices(req, cb) {
        return this.request("DescribeAutoScalingAdvices", req, cb);
    }
    /**
     * 本接口（RemoveInstances）用于从伸缩组删除 CVM 实例。根据当前的产品逻辑，如果实例由弹性伸缩自动创建，则实例会被销毁；如果实例系创建后加入伸缩组的，则会从伸缩组中移除，保留实例。
* 如果删除指定实例后，伸缩组内处于`IN_SERVICE`状态的实例数量小于伸缩组最小值，接口将报错
* 如果伸缩组处于`DISABLED`状态，删除操作不校验`IN_SERVICE`实例数量和最小值的关系
* 对于伸缩组配置的 CLB，实例在离开伸缩组时，AS 会进行解挂载动作
     */
    async RemoveInstances(req, cb) {
        return this.request("RemoveInstances", req, cb);
    }
    /**
     * 本接口（DeleteScalingPolicy）用于删除告警触发策略。
     */
    async DeleteScalingPolicy(req, cb) {
        return this.request("DeleteScalingPolicy", req, cb);
    }
    /**
     * 本接口（CompleteLifecycleAction）用于完成生命周期动作。

* 用户通过调用本接口，指定一个具体的生命周期挂钩的结果（“CONITNUE”或者“ABANDON”）。如果一直不调用本接口，则生命周期挂钩会在超时后按照“DefaultResult”进行处理。

     */
    async CompleteLifecycleAction(req, cb) {
        return this.request("CompleteLifecycleAction", req, cb);
    }
    /**
     * 本接口（ModifyLoadBalancers）用于修改伸缩组的负载均衡器。

* 本接口用于为伸缩组指定新的负载均衡器配置，采用`完全覆盖`风格，无论之前配置如何，`统一按照接口参数配置为新的负载均衡器`。
* 如果要为伸缩组清空负载均衡器，则在调用本接口时仅指定伸缩组ID，不指定具体负载均衡器。
* 本接口会立即修改伸缩组的负载均衡器，并生成一个伸缩活动，异步修改存量实例的负载均衡器。
     */
    async ModifyLoadBalancers(req, cb) {
        return this.request("ModifyLoadBalancers", req, cb);
    }
    /**
     * 本接口（ModifyDesiredCapacity）用于修改指定伸缩组的期望实例数
     */
    async ModifyDesiredCapacity(req, cb) {
        return this.request("ModifyDesiredCapacity", req, cb);
    }
    /**
     * 本接口（SetInstancesProtection）用于设置实例保护。
实例设置保护之后，当发生不健康替换、报警策略、期望值变更等触发缩容时，将不对此实例缩容操作。
     */
    async SetInstancesProtection(req, cb) {
        return this.request("SetInstancesProtection", req, cb);
    }
    /**
     * 本接口（ModifyNotificationConfiguration）用于修改通知。
* 通知的接收端类型不支持修改。
     */
    async ModifyNotificationConfiguration(req, cb) {
        return this.request("ModifyNotificationConfiguration", req, cb);
    }
    /**
     * 本接口（StopAutoScalingInstances）用于关闭伸缩组内 CVM 实例。
* 关机方式采用`SOFT_FIRST`方式，表示在正常关闭失败后进行强制关闭
* 关闭`IN_SERVICE`状态的实例，会减少期望实例数，期望实例数不可低于设置的最小值
* 使用`STOP_CHARGING`选项关机，待关机的实例需要满足[关机不收费条件](https://cloud.tencent.com/document/product/213/19918)
* 本接口支持批量操作，每次请求关机实例的上限为100
     */
    async StopAutoScalingInstances(req, cb) {
        return this.request("StopAutoScalingInstances", req, cb);
    }
    /**
     * 本接口（CreateLaunchConfiguration）用于创建新的启动配置。

* 启动配置，可以通过 `ModifyLaunchConfigurationAttributes` 修改少量字段。如需使用新的启动配置，建议重新创建启动配置。

* 每个项目最多只能创建20个启动配置，详见[使用限制](https://cloud.tencent.com/document/product/377/3120)。

     */
    async CreateLaunchConfiguration(req, cb) {
        return this.request("CreateLaunchConfiguration", req, cb);
    }
    /**
     * 本接口（ModifyAutoScalingGroup）用于修改伸缩组。
     */
    async ModifyAutoScalingGroup(req, cb) {
        return this.request("ModifyAutoScalingGroup", req, cb);
    }
    /**
     * 本接口（CreateNotificationConfiguration）用于创建通知。
通知到 CMQ 主题或队列时，消息内容如下：
```
{
    "Service": "Tencent Cloud Auto Scaling",
    "CreatedTime": "2021-10-11T10:15:11Z", // 活动创建时间
    "AppId": "100000000",
    "ActivityId": "asa-fznnvrja", // 伸缩活动ID
    "AutoScalingGroupId": "asg-pc2oqu2z", // 伸缩组ID
    "ActivityType": "SCALE_OUT",  // 伸缩活动类型
    "StatusCode": "SUCCESSFUL",   // 伸缩活动结果
    "Description": "Activity was launched in response to a difference between desired capacity and actual capacity,
    scale out 1 instance(s).", // 伸缩活动描述
    "StartTime": "2021-10-11T10:15:11Z",  // 活动开始时间
    "EndTime": "2021-10-11T10:15:32Z",    // 活动结束时间
    "DetailedStatusMessageSet": [ // 活动内部错误集合（非空不代表活动失败）
        {
            "Code": "InvalidInstanceType",
            "Zone": "ap-guangzhou-2",
            "InstanceId": "",
            "InstanceChargeType": "POSTPAID_BY_HOUR",
            "SubnetId": "subnet-4t5mgeuu",
            "Message": "The specified instance type `S5.LARGE8` is invalid in `subnet-4t5mgeuu`, `ap-guangzhou-2`.",
            "InstanceType": "S5.LARGE8"
        }
    ]
}
```
     */
    async CreateNotificationConfiguration(req, cb) {
        return this.request("CreateNotificationConfiguration", req, cb);
    }
    /**
     * 本接口（DescribeAutoScalingInstances）用于查询弹性伸缩关联实例的信息。

* 可以根据实例ID、伸缩组ID等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
     */
    async DescribeAutoScalingInstances(req, cb) {
        return this.request("DescribeAutoScalingInstances", req, cb);
    }
    /**
     * 本接口（CreateAutoScalingGroupFromInstance）用于根据实例创建启动配置及伸缩组。

说明：根据按包年包月计费的实例所创建的伸缩组，其扩容的实例为按量计费实例。
     */
    async CreateAutoScalingGroupFromInstance(req, cb) {
        return this.request("CreateAutoScalingGroupFromInstance", req, cb);
    }
    /**
     * 本接口（CreateLifecycleHook）用于创建生命周期挂钩。

* 您可以为生命周期挂钩配置消息通知，弹性伸缩会通知您的CMQ消息队列，通知内容形如：

```
{
    "Service": "Tencent Cloud Auto Scaling",
    "Time": "2019-03-14T10:15:11Z",
    "AppId": "1251783334",
    "ActivityId": "asa-fznnvrja",
    "AutoScalingGroupId": "asg-rrrrtttt",
    "LifecycleHookId": "ash-xxxxyyyy",
    "LifecycleHookName": "my-hook",
    "LifecycleActionToken": "3080e1c9-0efe-4dd7-ad3b-90cd6618298f",
    "InstanceId": "ins-aaaabbbb",
    "LifecycleTransition": "INSTANCE_LAUNCHING",
    "NotificationMetadata": ""
}
```
     */
    async CreateLifecycleHook(req, cb) {
        return this.request("CreateLifecycleHook", req, cb);
    }
    /**
     * 本接口（UpgradeLifecycleHook）用于升级生命周期挂钩。

* 本接口用于升级生命周期挂钩，采用“完全覆盖”风格，无论之前参数如何，统一按照接口参数设置为新的配置。对于非必填字段，不填写则按照默认值赋值。

     */
    async UpgradeLifecycleHook(req, cb) {
        return this.request("UpgradeLifecycleHook", req, cb);
    }
    /**
     * 本接口（DisableAutoScalingGroup）用于停用指定伸缩组。
* 停用伸缩组后，自动触发的伸缩活动不再进行，包括：
    - 告警策略触发的伸缩活动
    - 匹配期望实例数的伸缩活动
    - 不健康实例替换活动
    - 定时任务
* 停用伸缩组后，手动触发的伸缩活动允许进行，包括：
    - 指定数量扩容实例（ScaleOutInstances）
    - 指定数量缩容实例（ScaleInInstances）
    - 从伸缩组中移出 CVM 实例（DetachInstances）
    - 从伸缩组中删除 CVM 实例（RemoveInstances）
    - 添加 CVM 实例到伸缩组（AttachInstances）
    - 关闭伸缩组内 CVM 实例（StopAutoScalingInstances）
    - 开启伸缩组内 CVM 实例（StartAutoScalingInstances）
     */
    async DisableAutoScalingGroup(req, cb) {
        return this.request("DisableAutoScalingGroup", req, cb);
    }
    /**
     * 本接口（DescribeLaunchConfigurations）用于查询启动配置的信息。

* 可以根据启动配置ID、启动配置名称等信息来查询启动配置的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的启动配置。
     */
    async DescribeLaunchConfigurations(req, cb) {
        return this.request("DescribeLaunchConfigurations", req, cb);
    }
    /**
     * 本接口（CreateScalingPolicy）用于创建告警触发策略。
     */
    async CreateScalingPolicy(req, cb) {
        return this.request("CreateScalingPolicy", req, cb);
    }
    /**
     * 本接口（DeleteLaunchConfiguration）用于删除启动配置。

* 若启动配置在伸缩组中属于生效状态，则该启动配置不允许删除。

     */
    async DeleteLaunchConfiguration(req, cb) {
        return this.request("DeleteLaunchConfiguration", req, cb);
    }
    /**
     * 本接口（DeleteLifecycleHook）用于删除生命周期挂钩。
     */
    async DeleteLifecycleHook(req, cb) {
        return this.request("DeleteLifecycleHook", req, cb);
    }
    /**
     * 本接口（DescribeAutoScalingGroupLastActivities）用于查询伸缩组的最新一次伸缩活动记录。
     */
    async DescribeAutoScalingGroupLastActivities(req, cb) {
        return this.request("DescribeAutoScalingGroupLastActivities", req, cb);
    }
    /**
     * 本接口（DescribeLifecycleHooks）用于查询生命周期挂钩信息。

* 可以根据伸缩组ID、生命周期挂钩ID或者生命周期挂钩名称等信息来查询生命周期挂钩的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的生命周期挂钩。
     */
    async DescribeLifecycleHooks(req, cb) {
        return this.request("DescribeLifecycleHooks", req, cb);
    }
    /**
     * 本接口（EnableAutoScalingGroup）用于启用指定伸缩组。
     */
    async EnableAutoScalingGroup(req, cb) {
        return this.request("EnableAutoScalingGroup", req, cb);
    }
    /**
     * 本接口 (DescribeScheduledActions) 用于查询一个或多个定时任务的详细信息。

* 可以根据定时任务ID、定时任务名称或者伸缩组ID等信息来查询定时任务的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的定时任务。
     */
    async DescribeScheduledActions(req, cb) {
        return this.request("DescribeScheduledActions", req, cb);
    }
    /**
     * 本接口（DescribeAutoScalingGroups）用于查询伸缩组信息。

* 可以根据伸缩组ID、伸缩组名称或者启动配置ID等信息来查询伸缩组的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的伸缩组。
     */
    async DescribeAutoScalingGroups(req, cb) {
        return this.request("DescribeAutoScalingGroups", req, cb);
    }
    /**
     * 本接口（ModifyScheduledAction）用于修改定时任务。
     */
    async ModifyScheduledAction(req, cb) {
        return this.request("ModifyScheduledAction", req, cb);
    }
    /**
     * 本接口（DescribeAutoScalingActivities）用于查询伸缩组的伸缩活动记录。
     */
    async DescribeAutoScalingActivities(req, cb) {
        return this.request("DescribeAutoScalingActivities", req, cb);
    }
    /**
     * 本接口（DeleteNotificationConfiguration）用于删除特定的通知。
     */
    async DeleteNotificationConfiguration(req, cb) {
        return this.request("DeleteNotificationConfiguration", req, cb);
    }
    /**
     * 本接口（DescribeAccountLimits）用于查询用户账户在弹性伸缩中的资源限制。
     */
    async DescribeAccountLimits(req, cb) {
        return this.request("DescribeAccountLimits", req, cb);
    }
    /**
     * 本接口（ModifyLaunchConfigurationAttributes）用于修改启动配置部分属性。

* 修改启动配置后，已经使用该启动配置扩容的存量实例不会发生变更，此后使用该启动配置的新增实例会按照新的配置进行扩容。
* 本接口支持修改部分简单类型。
     */
    async ModifyLaunchConfigurationAttributes(req, cb) {
        return this.request("ModifyLaunchConfigurationAttributes", req, cb);
    }
}
exports.Client = Client;
