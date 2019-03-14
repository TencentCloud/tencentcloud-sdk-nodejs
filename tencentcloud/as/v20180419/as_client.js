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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeScheduledActionsRequest = models.DescribeScheduledActionsRequest;
const ModifyLoadBalancersRequest = models.ModifyLoadBalancersRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const DisableAutoScalingGroupResponse = models.DisableAutoScalingGroupResponse;
const SystemDisk = models.SystemDisk;
const ModifyLaunchConfigurationAttributesRequest = models.ModifyLaunchConfigurationAttributesRequest;
const DisableAutoScalingGroupRequest = models.DisableAutoScalingGroupRequest;
const DeleteAutoScalingGroupResponse = models.DeleteAutoScalingGroupResponse;
const SpotMarketOptions = models.SpotMarketOptions;
const SetInstancesProtectionRequest = models.SetInstancesProtectionRequest;
const AutoScalingGroupAbstract = models.AutoScalingGroupAbstract;
const DeleteNotificationConfigurationResponse = models.DeleteNotificationConfigurationResponse;
const DetachInstancesResponse = models.DetachInstancesResponse;
const EnableAutoScalingGroupRequest = models.EnableAutoScalingGroupRequest;
const ModifyAutoScalingGroupRequest = models.ModifyAutoScalingGroupRequest;
const CreateLaunchConfigurationRequest = models.CreateLaunchConfigurationRequest;
const AutoScalingGroup = models.AutoScalingGroup;
const AutoScalingNotification = models.AutoScalingNotification;
const EnhancedService = models.EnhancedService;
const AttachInstancesResponse = models.AttachInstancesResponse;
const MetricAlarm = models.MetricAlarm;
const Instance = models.Instance;
const DeleteLaunchConfigurationResponse = models.DeleteLaunchConfigurationResponse;
const DescribeAutoScalingGroupsRequest = models.DescribeAutoScalingGroupsRequest;
const LaunchConfiguration = models.LaunchConfiguration;
const DescribeAccountLimitsRequest = models.DescribeAccountLimitsRequest;
const DescribeAccountLimitsResponse = models.DescribeAccountLimitsResponse;
const DescribeLaunchConfigurationsResponse = models.DescribeLaunchConfigurationsResponse;
const CreateLaunchConfigurationResponse = models.CreateLaunchConfigurationResponse;
const ForwardLoadBalancer = models.ForwardLoadBalancer;
const DeleteScheduledActionRequest = models.DeleteScheduledActionRequest;
const ScalingPolicy = models.ScalingPolicy;
const DescribeAutoScalingActivitiesRequest = models.DescribeAutoScalingActivitiesRequest;
const ModifyDesiredCapacityRequest = models.ModifyDesiredCapacityRequest;
const InstanceMarketOptionsRequest = models.InstanceMarketOptionsRequest;
const ModifyLoadBalancersResponse = models.ModifyLoadBalancersResponse;
const CreateScheduledActionResponse = models.CreateScheduledActionResponse;
const CreateNotificationConfigurationRequest = models.CreateNotificationConfigurationRequest;
const DescribeScheduledActionsResponse = models.DescribeScheduledActionsResponse;
const TargetAttribute = models.TargetAttribute;
const ModifyScheduledActionResponse = models.ModifyScheduledActionResponse;
const ModifyNotificationConfigurationResponse = models.ModifyNotificationConfigurationResponse;
const DescribeAutoScalingGroupsResponse = models.DescribeAutoScalingGroupsResponse;
const CreateScheduledActionRequest = models.CreateScheduledActionRequest;
const CreateScalingPolicyResponse = models.CreateScalingPolicyResponse;
const ScheduledAction = models.ScheduledAction;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const ModifyAutoScalingGroupResponse = models.ModifyAutoScalingGroupResponse;
const DeleteLaunchConfigurationRequest = models.DeleteLaunchConfigurationRequest;
const AttachInstancesRequest = models.AttachInstancesRequest;
const DeleteScalingPolicyRequest = models.DeleteScalingPolicyRequest;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const ModifyScalingPolicyRequest = models.ModifyScalingPolicyRequest;
const DescribeScalingPoliciesRequest = models.DescribeScalingPoliciesRequest;
const DescribeAutoScalingInstancesResponse = models.DescribeAutoScalingInstancesResponse;
const LoginSettings = models.LoginSettings;
const Filter = models.Filter;
const ModifyLaunchConfigurationAttributesResponse = models.ModifyLaunchConfigurationAttributesResponse;
const DescribeNotificationConfigurationsRequest = models.DescribeNotificationConfigurationsRequest;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const Activity = models.Activity;
const ModifyDesiredCapacityResponse = models.ModifyDesiredCapacityResponse;
const CreateAutoScalingGroupResponse = models.CreateAutoScalingGroupResponse;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const DeleteAutoScalingGroupRequest = models.DeleteAutoScalingGroupRequest;
const SetInstancesProtectionResponse = models.SetInstancesProtectionResponse;
const ModifyScalingPolicyResponse = models.ModifyScalingPolicyResponse;
const DetachInstancesRequest = models.DetachInstancesRequest;
const CreateNotificationConfigurationResponse = models.CreateNotificationConfigurationResponse;
const ModifyNotificationConfigurationRequest = models.ModifyNotificationConfigurationRequest;
const ActivtyRelatedInstance = models.ActivtyRelatedInstance;
const CreateAutoScalingGroupRequest = models.CreateAutoScalingGroupRequest;
const CreateScalingPolicyRequest = models.CreateScalingPolicyRequest;
const InternetAccessible = models.InternetAccessible;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const EnableAutoScalingGroupResponse = models.EnableAutoScalingGroupResponse;
const DescribeLaunchConfigurationsRequest = models.DescribeLaunchConfigurationsRequest;
const DeleteNotificationConfigurationRequest = models.DeleteNotificationConfigurationRequest;
const DeleteScheduledActionResponse = models.DeleteScheduledActionResponse;
const DescribeAutoScalingInstancesRequest = models.DescribeAutoScalingInstancesRequest;
const DescribeAutoScalingActivitiesResponse = models.DescribeAutoScalingActivitiesResponse;
const DescribeNotificationConfigurationsResponse = models.DescribeNotificationConfigurationsResponse;
const LimitedLoginSettings = models.LimitedLoginSettings;
const ModifyScheduledActionRequest = models.ModifyScheduledActionRequest;
const DataDisk = models.DataDisk;


/**
 * as client
 * @class
 */
class AsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("as.tencentcloudapi.com", "2018-04-19", credential, region, profile);
    }
    
    /**
     * 本接口（CreateAutoScalingGroup）用于创建伸缩组
     * @param {CreateAutoScalingGroupRequest} req
     * @param {function(string, CreateAutoScalingGroupResponse):void} cb
     * @public
     */
    CreateAutoScalingGroup(req, cb) {
        let resp = new CreateAutoScalingGroupResponse();
        this.request("CreateAutoScalingGroup", req, resp, cb);
    }

    /**
     * 本接口（ModifyScalingPolicy）用于修改告警触发策略。
     * @param {ModifyScalingPolicyRequest} req
     * @param {function(string, ModifyScalingPolicyResponse):void} cb
     * @public
     */
    ModifyScalingPolicy(req, cb) {
        let resp = new ModifyScalingPolicyResponse();
        this.request("ModifyScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口 (DescribeNotificationConfigurations) 用于查询一个或多个通知的详细信息。

可以根据通知ID、伸缩组ID等信息来查询通知的详细信息。过滤信息详细请见过滤器`Filter`。
如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的通知。
     * @param {DescribeNotificationConfigurationsRequest} req
     * @param {function(string, DescribeNotificationConfigurationsResponse):void} cb
     * @public
     */
    DescribeNotificationConfigurations(req, cb) {
        let resp = new DescribeNotificationConfigurationsResponse();
        this.request("DescribeNotificationConfigurations", req, resp, cb);
    }

    /**
     * 本接口（DeleteAutoScalingGroup）用于删除指定伸缩组，删除前提是伸缩组内无实例且当前未在执行伸缩活动。
     * @param {DeleteAutoScalingGroupRequest} req
     * @param {function(string, DeleteAutoScalingGroupResponse):void} cb
     * @public
     */
    DeleteAutoScalingGroup(req, cb) {
        let resp = new DeleteAutoScalingGroupResponse();
        this.request("DeleteAutoScalingGroup", req, resp, cb);
    }

    /**
     * 本接口（AttachInstances）用于将 CVM 实例添加到伸缩组。

     * @param {AttachInstancesRequest} req
     * @param {function(string, AttachInstancesResponse):void} cb
     * @public
     */
    AttachInstances(req, cb) {
        let resp = new AttachInstancesResponse();
        this.request("AttachInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeScalingPolicies）用于查询告警触发策略。
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        let resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }

    /**
     * 本接口（DeleteScheduledAction）用于删除特定的定时任务。
     * @param {DeleteScheduledActionRequest} req
     * @param {function(string, DeleteScheduledActionResponse):void} cb
     * @public
     */
    DeleteScheduledAction(req, cb) {
        let resp = new DeleteScheduledActionResponse();
        this.request("DeleteScheduledAction", req, resp, cb);
    }

    /**
     * 本接口（DetachInstances）用于从伸缩组移出 CVM 实例，本接口不会销毁实例。
     * @param {DetachInstancesRequest} req
     * @param {function(string, DetachInstancesResponse):void} cb
     * @public
     */
    DetachInstances(req, cb) {
        let resp = new DetachInstancesResponse();
        this.request("DetachInstances", req, resp, cb);
    }

    /**
     * 本接口（CreateScheduledAction）用于创建定时任务。
     * @param {CreateScheduledActionRequest} req
     * @param {function(string, CreateScheduledActionResponse):void} cb
     * @public
     */
    CreateScheduledAction(req, cb) {
        let resp = new CreateScheduledActionResponse();
        this.request("CreateScheduledAction", req, resp, cb);
    }

    /**
     * 本接口（RemoveInstances）用于从伸缩组删除 CVM 实例。根据当前的产品逻辑，如果实例由弹性伸缩自动创建，则实例会被销毁；如果实例系创建后加入伸缩组的，则会从伸缩组中移除，保留实例。
     * @param {RemoveInstancesRequest} req
     * @param {function(string, RemoveInstancesResponse):void} cb
     * @public
     */
    RemoveInstances(req, cb) {
        let resp = new RemoveInstancesResponse();
        this.request("RemoveInstances", req, resp, cb);
    }

    /**
     * 本接口（DeleteScalingPolicy）用于删除告警触发策略。
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        let resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（ModifyLoadBalancers）用于修改伸缩组的负载均衡器。

* 本接口用于为伸缩组指定新的负载均衡器配置，采用“完全覆盖”风格，无论之前配置如何，统一按照接口参数配置为新的负载均衡器。
* 如果要为伸缩组清空负载均衡器，则在调用本接口时仅指定伸缩组ID，不指定具体负载均衡器。
* 本接口会立即修改伸缩组的负载均衡器，并生成一个伸缩活动，异步修改存量实例的负载均衡器。
     * @param {ModifyLoadBalancersRequest} req
     * @param {function(string, ModifyLoadBalancersResponse):void} cb
     * @public
     */
    ModifyLoadBalancers(req, cb) {
        let resp = new ModifyLoadBalancersResponse();
        this.request("ModifyLoadBalancers", req, resp, cb);
    }

    /**
     * 本接口（ModifyDesiredCapacity）用于修改指定伸缩组的期望实例数
     * @param {ModifyDesiredCapacityRequest} req
     * @param {function(string, ModifyDesiredCapacityResponse):void} cb
     * @public
     */
    ModifyDesiredCapacity(req, cb) {
        let resp = new ModifyDesiredCapacityResponse();
        this.request("ModifyDesiredCapacity", req, resp, cb);
    }

    /**
     * 本接口（SetInstancesProtection）用于设置实例移除保护。
子机设置为移除保护之后，当发生不健康替换、报警策略、期望值变更等触发缩容时，将不对此子机缩容操作。
     * @param {SetInstancesProtectionRequest} req
     * @param {function(string, SetInstancesProtectionResponse):void} cb
     * @public
     */
    SetInstancesProtection(req, cb) {
        let resp = new SetInstancesProtectionResponse();
        this.request("SetInstancesProtection", req, resp, cb);
    }

    /**
     * 本接口（ModifyNotificationConfiguration）用于修改通知。
     * @param {ModifyNotificationConfigurationRequest} req
     * @param {function(string, ModifyNotificationConfigurationResponse):void} cb
     * @public
     */
    ModifyNotificationConfiguration(req, cb) {
        let resp = new ModifyNotificationConfigurationResponse();
        this.request("ModifyNotificationConfiguration", req, resp, cb);
    }

    /**
     * 本接口（CreateLaunchConfiguration）用于创建新的启动配置。

* 启动配置，可以通过 `ModifyLaunchConfigurationAttributes` 修改少量字段。如需使用新的启动配置，建议重新创建启动配置。

* 每个项目最多只能创建20个启动配置，详见[使用限制](https://cloud.tencent.com/document/product/377/3120)。

     * @param {CreateLaunchConfigurationRequest} req
     * @param {function(string, CreateLaunchConfigurationResponse):void} cb
     * @public
     */
    CreateLaunchConfiguration(req, cb) {
        let resp = new CreateLaunchConfigurationResponse();
        this.request("CreateLaunchConfiguration", req, resp, cb);
    }

    /**
     * 本接口（ModifyAutoScalingGroup）用于修改伸缩组。
     * @param {ModifyAutoScalingGroupRequest} req
     * @param {function(string, ModifyAutoScalingGroupResponse):void} cb
     * @public
     */
    ModifyAutoScalingGroup(req, cb) {
        let resp = new ModifyAutoScalingGroupResponse();
        this.request("ModifyAutoScalingGroup", req, resp, cb);
    }

    /**
     * 本接口（CreateNotificationConfiguration）用于创建通知。
     * @param {CreateNotificationConfigurationRequest} req
     * @param {function(string, CreateNotificationConfigurationResponse):void} cb
     * @public
     */
    CreateNotificationConfiguration(req, cb) {
        let resp = new CreateNotificationConfigurationResponse();
        this.request("CreateNotificationConfiguration", req, resp, cb);
    }

    /**
     * 本接口（DescribeAutoScalingInstances）用于查询弹性伸缩关联实例的信息。

* 可以根据实例ID、伸缩组ID等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
     * @param {DescribeAutoScalingInstancesRequest} req
     * @param {function(string, DescribeAutoScalingInstancesResponse):void} cb
     * @public
     */
    DescribeAutoScalingInstances(req, cb) {
        let resp = new DescribeAutoScalingInstancesResponse();
        this.request("DescribeAutoScalingInstances", req, resp, cb);
    }

    /**
     * 本接口（DisableAutoScalingGroup）用于停用指定伸缩组。
     * @param {DisableAutoScalingGroupRequest} req
     * @param {function(string, DisableAutoScalingGroupResponse):void} cb
     * @public
     */
    DisableAutoScalingGroup(req, cb) {
        let resp = new DisableAutoScalingGroupResponse();
        this.request("DisableAutoScalingGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeLaunchConfigurations）用于查询启动配置的信息。

* 可以根据启动配置ID、启动配置名称等信息来查询启动配置的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的启动配置。
     * @param {DescribeLaunchConfigurationsRequest} req
     * @param {function(string, DescribeLaunchConfigurationsResponse):void} cb
     * @public
     */
    DescribeLaunchConfigurations(req, cb) {
        let resp = new DescribeLaunchConfigurationsResponse();
        this.request("DescribeLaunchConfigurations", req, resp, cb);
    }

    /**
     * 本接口（CreateScalingPolicy）用于创建告警触发策略。
     * @param {CreateScalingPolicyRequest} req
     * @param {function(string, CreateScalingPolicyResponse):void} cb
     * @public
     */
    CreateScalingPolicy(req, cb) {
        let resp = new CreateScalingPolicyResponse();
        this.request("CreateScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（DeleteLaunchConfiguration）用于删除启动配置。

* 若启动配置在伸缩组中属于生效状态，则该启动配置不允许删除。

     * @param {DeleteLaunchConfigurationRequest} req
     * @param {function(string, DeleteLaunchConfigurationResponse):void} cb
     * @public
     */
    DeleteLaunchConfiguration(req, cb) {
        let resp = new DeleteLaunchConfigurationResponse();
        this.request("DeleteLaunchConfiguration", req, resp, cb);
    }

    /**
     * 本接口（EnableAutoScalingGroup）用于启用指定伸缩组。
     * @param {EnableAutoScalingGroupRequest} req
     * @param {function(string, EnableAutoScalingGroupResponse):void} cb
     * @public
     */
    EnableAutoScalingGroup(req, cb) {
        let resp = new EnableAutoScalingGroupResponse();
        this.request("EnableAutoScalingGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccountLimits）用于查询用户账户在弹性伸缩中的资源限制。
     * @param {DescribeAccountLimitsRequest} req
     * @param {function(string, DescribeAccountLimitsResponse):void} cb
     * @public
     */
    DescribeAccountLimits(req, cb) {
        let resp = new DescribeAccountLimitsResponse();
        this.request("DescribeAccountLimits", req, resp, cb);
    }

    /**
     * 本接口（DescribeAutoScalingGroups）用于查询伸缩组信息。

* 可以根据伸缩组ID、伸缩组名称或者启动配置ID等信息来查询伸缩组的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的伸缩组。
     * @param {DescribeAutoScalingGroupsRequest} req
     * @param {function(string, DescribeAutoScalingGroupsResponse):void} cb
     * @public
     */
    DescribeAutoScalingGroups(req, cb) {
        let resp = new DescribeAutoScalingGroupsResponse();
        this.request("DescribeAutoScalingGroups", req, resp, cb);
    }

    /**
     * 本接口（ModifyScheduledAction）用于修改定时任务。
     * @param {ModifyScheduledActionRequest} req
     * @param {function(string, ModifyScheduledActionResponse):void} cb
     * @public
     */
    ModifyScheduledAction(req, cb) {
        let resp = new ModifyScheduledActionResponse();
        this.request("ModifyScheduledAction", req, resp, cb);
    }

    /**
     * 本接口（DescribeAutoScalingActivities）用于查询伸缩组的伸缩活动记录。
     * @param {DescribeAutoScalingActivitiesRequest} req
     * @param {function(string, DescribeAutoScalingActivitiesResponse):void} cb
     * @public
     */
    DescribeAutoScalingActivities(req, cb) {
        let resp = new DescribeAutoScalingActivitiesResponse();
        this.request("DescribeAutoScalingActivities", req, resp, cb);
    }

    /**
     * 本接口（DeleteNotificationConfiguration）用于删除特定的通知。
     * @param {DeleteNotificationConfigurationRequest} req
     * @param {function(string, DeleteNotificationConfigurationResponse):void} cb
     * @public
     */
    DeleteNotificationConfiguration(req, cb) {
        let resp = new DeleteNotificationConfigurationResponse();
        this.request("DeleteNotificationConfiguration", req, resp, cb);
    }

    /**
     * 本接口 (DescribeScheduledActions) 用于查询一个或多个定时任务的详细信息。

* 可以根据定时任务ID、定时任务名称或者伸缩组ID等信息来查询定时任务的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的定时任务。
     * @param {DescribeScheduledActionsRequest} req
     * @param {function(string, DescribeScheduledActionsResponse):void} cb
     * @public
     */
    DescribeScheduledActions(req, cb) {
        let resp = new DescribeScheduledActionsResponse();
        this.request("DescribeScheduledActions", req, resp, cb);
    }

    /**
     * 本接口（ModifyLaunchConfigurationAttributes）用于修改启动配置部分属性。

* 修改启动配置后，已经使用该启动配置扩容的存量实例不会发生变更，此后使用该启动配置的新增实例会按照新的配置进行扩容。
* 本接口支持修改部分简单类型。
     * @param {ModifyLaunchConfigurationAttributesRequest} req
     * @param {function(string, ModifyLaunchConfigurationAttributesResponse):void} cb
     * @public
     */
    ModifyLaunchConfigurationAttributes(req, cb) {
        let resp = new ModifyLaunchConfigurationAttributesResponse();
        this.request("ModifyLaunchConfigurationAttributes", req, resp, cb);
    }


}
module.exports = AsClient;
