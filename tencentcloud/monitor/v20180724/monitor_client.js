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
const TagInstance = models.TagInstance;
const DescribePolicyConditionListConfigManual = models.DescribePolicyConditionListConfigManual;
const ModifyAlarmPolicyNoticeResponse = models.ModifyAlarmPolicyNoticeResponse;
const ModifyAlarmPolicyInfoRequest = models.ModifyAlarmPolicyInfoRequest;
const CreatePolicyGroupEventCondition = models.CreatePolicyGroupEventCondition;
const DescribeProductEventListRequest = models.DescribeProductEventListRequest;
const AlarmPolicyTriggerTask = models.AlarmPolicyTriggerTask;
const DescribeServiceDiscoveryResponse = models.DescribeServiceDiscoveryResponse;
const DescribePolicyConditionListMetric = models.DescribePolicyConditionListMetric;
const DescribeAlertRulesRequest = models.DescribeAlertRulesRequest;
const DescribePolicyGroupListResponse = models.DescribePolicyGroupListResponse;
const BindingPolicyObjectRequest = models.BindingPolicyObjectRequest;
const CreateServiceDiscoveryResponse = models.CreateServiceDiscoveryResponse;
const PrometheusRuleKV = models.PrometheusRuleKV;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const DescribePolicyGroupInfoRequest = models.DescribePolicyGroupInfoRequest;
const UpdateAlertRuleStateResponse = models.UpdateAlertRuleStateResponse;
const DeleteServiceDiscoveryResponse = models.DeleteServiceDiscoveryResponse;
const DescribePolicyGroupInfoCallback = models.DescribePolicyGroupInfoCallback;
const AlarmHistoryMetric = models.AlarmHistoryMetric;
const CreateAlarmPolicyRequest = models.CreateAlarmPolicyRequest;
const DescribeAlarmEventsResponse = models.DescribeAlarmEventsResponse;
const DescribeProductEventListDimensions = models.DescribeProductEventListDimensions;
const DescribePolicyGroupInfoResponse = models.DescribePolicyGroupInfoResponse;
const ModifyAlarmPolicyNoticeRequest = models.ModifyAlarmPolicyNoticeRequest;
const DeleteAlarmPolicyRequest = models.DeleteAlarmPolicyRequest;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const CreateAlertRuleResponse = models.CreateAlertRuleResponse;
const CreatePolicyGroupResponse = models.CreatePolicyGroupResponse;
const ModifyAlarmPolicyTasksResponse = models.ModifyAlarmPolicyTasksResponse;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;
const MetricDataPoint = models.MetricDataPoint;
const DescribePolicyConditionListConfigManualContinueTime = models.DescribePolicyConditionListConfigManualContinueTime;
const DeleteAlertRulesResponse = models.DeleteAlertRulesResponse;
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const DataPoint = models.DataPoint;
const DescribeAlarmPoliciesResponse = models.DescribeAlarmPoliciesResponse;
const DescribeStatisticDataRequest = models.DescribeStatisticDataRequest;
const ConditionsTemp = models.ConditionsTemp;
const SendCustomAlarmMsgRequest = models.SendCustomAlarmMsgRequest;
const DescribePolicyConditionListConfigManualPeriod = models.DescribePolicyConditionListConfigManualPeriod;
const UnBindingPolicyObjectRequest = models.UnBindingPolicyObjectRequest;
const DescribeServiceDiscoveryRequest = models.DescribeServiceDiscoveryRequest;
const CommonNamespace = models.CommonNamespace;
const DescribePolicyConditionListRequest = models.DescribePolicyConditionListRequest;
const DeletePolicyGroupResponse = models.DeletePolicyGroupResponse;
const DescribeMonitorTypesRequest = models.DescribeMonitorTypesRequest;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const ModifyAlarmPolicyTasksRequest = models.ModifyAlarmPolicyTasksRequest;
const DimensionsDesc = models.DimensionsDesc;
const ServiceDiscoveryItem = models.ServiceDiscoveryItem;
const SetDefaultAlarmPolicyRequest = models.SetDefaultAlarmPolicyRequest;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const CreateServiceDiscoveryRequest = models.CreateServiceDiscoveryRequest;
const DescribeAlertRulesResponse = models.DescribeAlertRulesResponse;
const DescribeProductListRequest = models.DescribeProductListRequest;
const PeriodsSt = models.PeriodsSt;
const AlarmPolicy = models.AlarmPolicy;
const CreateAlarmPolicyResponse = models.CreateAlarmPolicyResponse;
const ModifyAlarmReceiversResponse = models.ModifyAlarmReceiversResponse;
const DescribePolicyConditionListResponse = models.DescribePolicyConditionListResponse;
const PrometheusRuleSet = models.PrometheusRuleSet;
const DescribeAllNamespacesResponse = models.DescribeAllNamespacesResponse;
const DeleteAlarmNoticesResponse = models.DeleteAlarmNoticesResponse;
const DescribeBasicAlarmListResponse = models.DescribeBasicAlarmListResponse;
const ProductSimple = models.ProductSimple;
const ModifyAlarmReceiversRequest = models.ModifyAlarmReceiversRequest;
const AlarmPolicyRule = models.AlarmPolicyRule;
const DescribeAlarmNoticeCallbacksRequest = models.DescribeAlarmNoticeCallbacksRequest;
const DescribeProductEventListEventsDimensions = models.DescribeProductEventListEventsDimensions;
const ModifyAlarmPolicyConditionResponse = models.ModifyAlarmPolicyConditionResponse;
const Dimension = models.Dimension;
const DescribeBindingPolicyObjectListInstance = models.DescribeBindingPolicyObjectListInstance;
const Point = models.Point;
const UpdateAlertRuleStateRequest = models.UpdateAlertRuleStateRequest;
const ModifyPolicyGroupEventCondition = models.ModifyPolicyGroupEventCondition;
const Metric = models.Metric;
const ModifyPolicyGroupRequest = models.ModifyPolicyGroupRequest;
const DescribeAlarmHistoriesResponse = models.DescribeAlarmHistoriesResponse;
const DescribeAlarmMetricsRequest = models.DescribeAlarmMetricsRequest;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const UserNotice = models.UserNotice;
const AlarmPolicyFilter = models.AlarmPolicyFilter;
const DescribeAlarmNoticeCallbacksResponse = models.DescribeAlarmNoticeCallbacksResponse;
const ModifyAlarmPolicyConditionRequest = models.ModifyAlarmPolicyConditionRequest;
const ModifyAlarmPolicyStatusResponse = models.ModifyAlarmPolicyStatusResponse;
const Instance = models.Instance;
const BindingPolicyObjectDimension = models.BindingPolicyObjectDimension;
const DeletePolicyGroupRequest = models.DeletePolicyGroupRequest;
const DescribeAlarmPolicyResponse = models.DescribeAlarmPolicyResponse;
const UpdateServiceDiscoveryResponse = models.UpdateServiceDiscoveryResponse;
const DescribeMonitorTypesResponse = models.DescribeMonitorTypesResponse;
const MetricSet = models.MetricSet;
const DescribeBasicAlarmListAlarms = models.DescribeBasicAlarmListAlarms;
const UpdateServiceDiscoveryRequest = models.UpdateServiceDiscoveryRequest;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const DescribeAlarmHistoriesRequest = models.DescribeAlarmHistoriesRequest;
const MetricObjectMeaning = models.MetricObjectMeaning;
const DescribeAccidentEventListAlarms = models.DescribeAccidentEventListAlarms;
const ModifyPolicyGroupResponse = models.ModifyPolicyGroupResponse;
const DescribePolicyConditionListConfigManualCalcType = models.DescribePolicyConditionListConfigManualCalcType;
const ModifyAlarmPolicyStatusRequest = models.ModifyAlarmPolicyStatusRequest;
const MetricData = models.MetricData;
const AlarmEvent = models.AlarmEvent;
const DescribePolicyGroupInfoCondition = models.DescribePolicyGroupInfoCondition;
const UpdateAlertRuleRequest = models.UpdateAlertRuleRequest;
const DescribeBindingPolicyObjectListResponse = models.DescribeBindingPolicyObjectListResponse;
const DescribePolicyGroupInfoConditionTpl = models.DescribePolicyGroupInfoConditionTpl;
const DescribeBindingPolicyObjectListRequest = models.DescribeBindingPolicyObjectListRequest;
const UnBindingPolicyObjectResponse = models.UnBindingPolicyObjectResponse;
const InstanceGroup = models.InstanceGroup;
const DescribeProductEventListEvents = models.DescribeProductEventListEvents;
const DeleteAlarmNoticesRequest = models.DeleteAlarmNoticesRequest;
const DescribePolicyConditionListConfigManualPeriodNum = models.DescribePolicyConditionListConfigManualPeriodNum;
const DescribeAllNamespacesRequest = models.DescribeAllNamespacesRequest;
const UpdateAlertRuleResponse = models.UpdateAlertRuleResponse;
const DescribeAlarmMetricsResponse = models.DescribeAlarmMetricsResponse;
const DescribePolicyGroupListGroupInstanceGroup = models.DescribePolicyGroupListGroupInstanceGroup;
const DescribeAlarmPoliciesRequest = models.DescribeAlarmPoliciesRequest;
const DescribeAccidentEventListResponse = models.DescribeAccidentEventListResponse;
const DescribePolicyConditionListConfigManualStatType = models.DescribePolicyConditionListConfigManualStatType;
const ModifyAlarmPolicyInfoResponse = models.ModifyAlarmPolicyInfoResponse;
const AlarmNotice = models.AlarmNotice;
const MetricConfig = models.MetricConfig;
const DescribeAlarmEventsRequest = models.DescribeAlarmEventsRequest;
const MidQueryCondition = models.MidQueryCondition;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const CreateAlertRuleRequest = models.CreateAlertRuleRequest;
const DescribeProductListResponse = models.DescribeProductListResponse;
const DescribeProductEventListResponse = models.DescribeProductEventListResponse;
const AlarmHistory = models.AlarmHistory;
const MonitorTypeNamespace = models.MonitorTypeNamespace;
const DeleteAlarmPolicyResponse = models.DeleteAlarmPolicyResponse;
const URLNotice = models.URLNotice;
const DescribeAlarmPolicyRequest = models.DescribeAlarmPolicyRequest;
const CreatePolicyGroupRequest = models.CreatePolicyGroupRequest;
const CreatePolicyGroupCondition = models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models.DescribePolicyGroupInfoReceiverInfo;
const DescribeStatisticDataResponse = models.DescribeStatisticDataResponse;
const DescribePolicyConditionListEventMetric = models.DescribePolicyConditionListEventMetric;
const DescribePolicyGroupListRequest = models.DescribePolicyGroupListRequest;
const DescribeBasicAlarmListRequest = models.DescribeBasicAlarmListRequest;
const UnBindingAllPolicyObjectResponse = models.UnBindingAllPolicyObjectResponse;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const DescribePolicyGroupListGroup = models.DescribePolicyGroupListGroup;
const DescribeAccidentEventListRequest = models.DescribeAccidentEventListRequest;
const MetricDatum = models.MetricDatum;
const DescribeAlarmNoticeResponse = models.DescribeAlarmNoticeResponse;
const DescribeBindingPolicyObjectListInstanceGroup = models.DescribeBindingPolicyObjectListInstanceGroup;
const DescribeProductEventListEventsGroupInfo = models.DescribeProductEventListEventsGroupInfo;
const DeleteAlertRulesRequest = models.DeleteAlertRulesRequest;
const DescribeAlarmNoticeRequest = models.DescribeAlarmNoticeRequest;
const DescribeBindingPolicyObjectListDimension = models.DescribeBindingPolicyObjectListDimension;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const InstanceGroups = models.InstanceGroups;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const ReceiverInfo = models.ReceiverInfo;
const UnBindingAllPolicyObjectRequest = models.UnBindingAllPolicyObjectRequest;
const DescribePolicyGroupInfoEventCondition = models.DescribePolicyGroupInfoEventCondition;
const SendCustomAlarmMsgResponse = models.SendCustomAlarmMsgResponse;
const AlarmPolicyCondition = models.AlarmPolicyCondition;
const ModifyPolicyGroupCondition = models.ModifyPolicyGroupCondition;
const DescribePolicyConditionListCondition = models.DescribePolicyConditionListCondition;
const DeleteServiceDiscoveryRequest = models.DeleteServiceDiscoveryRequest;
const AlarmPolicyEventCondition = models.AlarmPolicyEventCondition;
const DescribeProductEventListOverView = models.DescribeProductEventListOverView;
const DescribePolicyConditionListConfigManualCalcValue = models.DescribePolicyConditionListConfigManualCalcValue;
const SetDefaultAlarmPolicyResponse = models.SetDefaultAlarmPolicyResponse;
const BindingPolicyObjectResponse = models.BindingPolicyObjectResponse;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     * @param {PutMonitorDataRequest} req
     * @param {function(string, PutMonitorDataResponse):void} cb
     * @public
     */
    PutMonitorData(req, cb) {
        let resp = new PutMonitorDataResponse();
        this.request("PutMonitorData", req, resp, cb);
    }

    /**
     * 查询告警策略列表
     * @param {DescribeAlarmPoliciesRequest} req
     * @param {function(string, DescribeAlarmPoliciesResponse):void} cb
     * @public
     */
    DescribeAlarmPolicies(req, cb) {
        let resp = new DescribeAlarmPoliciesResponse();
        this.request("DescribeAlarmPolicies", req, resp, cb);
    }

    /**
     * 删除策略的关联对象
     * @param {UnBindingPolicyObjectRequest} req
     * @param {function(string, UnBindingPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingPolicyObject(req, cb) {
        let resp = new UnBindingPolicyObjectResponse();
        this.request("UnBindingPolicyObject", req, resp, cb);
    }

    /**
     * 创建 Prometheus 告警规则
     * @param {CreateAlertRuleRequest} req
     * @param {function(string, CreateAlertRuleResponse):void} cb
     * @public
     */
    CreateAlertRule(req, cb) {
        let resp = new CreateAlertRuleResponse();
        this.request("CreateAlertRule", req, resp, cb);
    }

    /**
     * 发送自定义消息告警
     * @param {SendCustomAlarmMsgRequest} req
     * @param {function(string, SendCustomAlarmMsgResponse):void} cb
     * @public
     */
    SendCustomAlarmMsg(req, cb) {
        let resp = new SendCustomAlarmMsgResponse();
        this.request("SendCustomAlarmMsg", req, resp, cb);
    }

    /**
     * 获取已绑定对象列表
     * @param {DescribeBindingPolicyObjectListRequest} req
     * @param {function(string, DescribeBindingPolicyObjectListResponse):void} cb
     * @public
     */
    DescribeBindingPolicyObjectList(req, cb) {
        let resp = new DescribeBindingPolicyObjectListResponse();
        this.request("DescribeBindingPolicyObjectList", req, resp, cb);
    }

    /**
     * 云监控告警修改告警策略绑定的告警通知模板
     * @param {ModifyAlarmPolicyNoticeRequest} req
     * @param {function(string, ModifyAlarmPolicyNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyNotice(req, cb) {
        let resp = new ModifyAlarmPolicyNoticeResponse();
        this.request("ModifyAlarmPolicyNotice", req, resp, cb);
    }

    /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {DeleteServiceDiscoveryRequest} req
     * @param {function(string, DeleteServiceDiscoveryResponse):void} cb
     * @public
     */
    DeleteServiceDiscovery(req, cb) {
        let resp = new DeleteServiceDiscoveryResponse();
        this.request("DeleteServiceDiscovery", req, resp, cb);
    }

    /**
     * 获取基础策略告警组列表
     * @param {DescribePolicyGroupListRequest} req
     * @param {function(string, DescribePolicyGroupListResponse):void} cb
     * @public
     */
    DescribePolicyGroupList(req, cb) {
        let resp = new DescribePolicyGroupListResponse();
        this.request("DescribePolicyGroupList", req, resp, cb);
    }

    /**
     * 删除告警策略
     * @param {DeleteAlarmPolicyRequest} req
     * @param {function(string, DeleteAlarmPolicyResponse):void} cb
     * @public
     */
    DeleteAlarmPolicy(req, cb) {
        let resp = new DeleteAlarmPolicyResponse();
        this.request("DeleteAlarmPolicy", req, resp, cb);
    }

    /**
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }

    /**
     * 云监控告警修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     * @param {ModifyAlarmPolicyTasksRequest} req
     * @param {function(string, ModifyAlarmPolicyTasksResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyTasks(req, cb) {
        let resp = new ModifyAlarmPolicyTasksResponse();
        this.request("ModifyAlarmPolicyTasks", req, resp, cb);
    }

    /**
     * 获取基础告警策略条件
     * @param {DescribePolicyConditionListRequest} req
     * @param {function(string, DescribePolicyConditionListResponse):void} cb
     * @public
     */
    DescribePolicyConditionList(req, cb) {
        let resp = new DescribePolicyConditionListResponse();
        this.request("DescribePolicyConditionList", req, resp, cb);
    }

    /**
     * 修改告警策略触发条件
     * @param {ModifyAlarmPolicyConditionRequest} req
     * @param {function(string, ModifyAlarmPolicyConditionResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyCondition(req, cb) {
        let resp = new ModifyAlarmPolicyConditionResponse();
        this.request("ModifyAlarmPolicyCondition", req, resp, cb);
    }

    /**
     * 获取基础告警列表
     * @param {DescribeBasicAlarmListRequest} req
     * @param {function(string, DescribeBasicAlarmListResponse):void} cb
     * @public
     */
    DescribeBasicAlarmList(req, cb) {
        let resp = new DescribeBasicAlarmListResponse();
        this.request("DescribeBasicAlarmList", req, resp, cb);
    }

    /**
     * 将告警策略绑定到特定对象
     * @param {BindingPolicyObjectRequest} req
     * @param {function(string, BindingPolicyObjectResponse):void} cb
     * @public
     */
    BindingPolicyObject(req, cb) {
        let resp = new BindingPolicyObjectResponse();
        this.request("BindingPolicyObject", req, resp, cb);
    }

    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     * @param {ModifyAlarmPolicyInfoRequest} req
     * @param {function(string, ModifyAlarmPolicyInfoResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyInfo(req, cb) {
        let resp = new ModifyAlarmPolicyInfoResponse();
        this.request("ModifyAlarmPolicyInfo", req, resp, cb);
    }

    /**
     * 创建通知模板
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
    }

    /**
     * 更新 Prometheus 报警策略状态
     * @param {UpdateAlertRuleStateRequest} req
     * @param {function(string, UpdateAlertRuleStateResponse):void} cb
     * @public
     */
    UpdateAlertRuleState(req, cb) {
        let resp = new UpdateAlertRuleStateResponse();
        this.request("UpdateAlertRuleState", req, resp, cb);
    }

    /**
     * 创建告警策略
     * @param {CreateAlarmPolicyRequest} req
     * @param {function(string, CreateAlarmPolicyResponse):void} cb
     * @public
     */
    CreateAlarmPolicy(req, cb) {
        let resp = new CreateAlarmPolicyResponse();
        this.request("CreateAlarmPolicy", req, resp, cb);
    }

    /**
     * 获取基础策略组详情
     * @param {DescribePolicyGroupInfoRequest} req
     * @param {function(string, DescribePolicyGroupInfoResponse):void} cb
     * @public
     */
    DescribePolicyGroupInfo(req, cb) {
        let resp = new DescribePolicyGroupInfoResponse();
        this.request("DescribePolicyGroupInfo", req, resp, cb);
    }

    /**
     * 查询云监控产品列表
     * @param {DescribeProductListRequest} req
     * @param {function(string, DescribeProductListResponse):void} cb
     * @public
     */
    DescribeProductList(req, cb) {
        let resp = new DescribeProductListResponse();
        this.request("DescribeProductList", req, resp, cb);
    }

    /**
     * 查询所有名字空间
     * @param {DescribeAllNamespacesRequest} req
     * @param {function(string, DescribeAllNamespacesResponse):void} cb
     * @public
     */
    DescribeAllNamespaces(req, cb) {
        let resp = new DescribeAllNamespacesResponse();
        this.request("DescribeAllNamespaces", req, resp, cb);
    }

    /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {CreateServiceDiscoveryRequest} req
     * @param {function(string, CreateServiceDiscoveryResponse):void} cb
     * @public
     */
    CreateServiceDiscovery(req, cb) {
        let resp = new CreateServiceDiscoveryResponse();
        this.request("CreateServiceDiscovery", req, resp, cb);
    }

    /**
     * 根据维度条件查询监控数据
     * @param {DescribeStatisticDataRequest} req
     * @param {function(string, DescribeStatisticDataResponse):void} cb
     * @public
     */
    DescribeStatisticData(req, cb) {
        let resp = new DescribeStatisticDataResponse();
        this.request("DescribeStatisticData", req, resp, cb);
    }

    /**
     * 查询通知模板列表
     * @param {DescribeAlarmNoticesRequest} req
     * @param {function(string, DescribeAlarmNoticesResponse):void} cb
     * @public
     */
    DescribeAlarmNotices(req, cb) {
        let resp = new DescribeAlarmNoticesResponse();
        this.request("DescribeAlarmNotices", req, resp, cb);
    }

    /**
     * 云监控告警获取告警通知模板所有回调URL
     * @param {DescribeAlarmNoticeCallbacksRequest} req
     * @param {function(string, DescribeAlarmNoticeCallbacksResponse):void} cb
     * @public
     */
    DescribeAlarmNoticeCallbacks(req, cb) {
        let resp = new DescribeAlarmNoticeCallbacksResponse();
        this.request("DescribeAlarmNoticeCallbacks", req, resp, cb);
    }

    /**
     * 修改告警接收人
     * @param {ModifyAlarmReceiversRequest} req
     * @param {function(string, ModifyAlarmReceiversResponse):void} cb
     * @public
     */
    ModifyAlarmReceivers(req, cb) {
        let resp = new ModifyAlarmReceiversResponse();
        this.request("ModifyAlarmReceivers", req, resp, cb);
    }

    /**
     * 删除全部的关联对象
     * @param {UnBindingAllPolicyObjectRequest} req
     * @param {function(string, UnBindingAllPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingAllPolicyObject(req, cb) {
        let resp = new UnBindingAllPolicyObjectResponse();
        this.request("UnBindingAllPolicyObject", req, resp, cb);
    }

    /**
     * 删除告警策略组
     * @param {DeletePolicyGroupRequest} req
     * @param {function(string, DeletePolicyGroupResponse):void} cb
     * @public
     */
    DeletePolicyGroup(req, cb) {
        let resp = new DeletePolicyGroupResponse();
        this.request("DeletePolicyGroup", req, resp, cb);
    }

    /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {UpdateServiceDiscoveryRequest} req
     * @param {function(string, UpdateServiceDiscoveryResponse):void} cb
     * @public
     */
    UpdateServiceDiscovery(req, cb) {
        let resp = new UpdateServiceDiscoveryResponse();
        this.request("UpdateServiceDiscovery", req, resp, cb);
    }

    /**
     * 云监控支持多种类型的监控，此接口列出支持的所有类型
     * @param {DescribeMonitorTypesRequest} req
     * @param {function(string, DescribeMonitorTypesResponse):void} cb
     * @public
     */
    DescribeMonitorTypes(req, cb) {
        let resp = new DescribeMonitorTypesResponse();
        this.request("DescribeMonitorTypes", req, resp, cb);
    }

    /**
     * 更新 Prometheus 的报警规则
     * @param {UpdateAlertRuleRequest} req
     * @param {function(string, UpdateAlertRuleResponse):void} cb
     * @public
     */
    UpdateAlertRule(req, cb) {
        let resp = new UpdateAlertRuleResponse();
        this.request("UpdateAlertRule", req, resp, cb);
    }

    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     * @param {SetDefaultAlarmPolicyRequest} req
     * @param {function(string, SetDefaultAlarmPolicyResponse):void} cb
     * @public
     */
    SetDefaultAlarmPolicy(req, cb) {
        let resp = new SetDefaultAlarmPolicyResponse();
        this.request("SetDefaultAlarmPolicy", req, resp, cb);
    }

    /**
     * 增加策略组
     * @param {CreatePolicyGroupRequest} req
     * @param {function(string, CreatePolicyGroupResponse):void} cb
     * @public
     */
    CreatePolicyGroup(req, cb) {
        let resp = new CreatePolicyGroupResponse();
        this.request("CreatePolicyGroup", req, resp, cb);
    }

    /**
     * 分页获取产品事件的列表
     * @param {DescribeProductEventListRequest} req
     * @param {function(string, DescribeProductEventListResponse):void} cb
     * @public
     */
    DescribeProductEventList(req, cb) {
        let resp = new DescribeProductEventListResponse();
        this.request("DescribeProductEventList", req, resp, cb);
    }

    /**
     * 获取平台事件列表
     * @param {DescribeAccidentEventListRequest} req
     * @param {function(string, DescribeAccidentEventListResponse):void} cb
     * @public
     */
    DescribeAccidentEventList(req, cb) {
        let resp = new DescribeAccidentEventListResponse();
        this.request("DescribeAccidentEventList", req, resp, cb);
    }

    /**
     * 批量删除 Prometheus 报警规则
     * @param {DeleteAlertRulesRequest} req
     * @param {function(string, DeleteAlertRulesResponse):void} cb
     * @public
     */
    DeleteAlertRules(req, cb) {
        let resp = new DeleteAlertRulesResponse();
        this.request("DeleteAlertRules", req, resp, cb);
    }

    /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     * @param {DescribeAlarmHistoriesRequest} req
     * @param {function(string, DescribeAlarmHistoriesResponse):void} cb
     * @public
     */
    DescribeAlarmHistories(req, cb) {
        let resp = new DescribeAlarmHistoriesResponse();
        this.request("DescribeAlarmHistories", req, resp, cb);
    }

    /**
     * 查询告警指标列表
     * @param {DescribeAlarmMetricsRequest} req
     * @param {function(string, DescribeAlarmMetricsResponse):void} cb
     * @public
     */
    DescribeAlarmMetrics(req, cb) {
        let resp = new DescribeAlarmMetricsResponse();
        this.request("DescribeAlarmMetrics", req, resp, cb);
    }

    /**
     * 启停告警策略
     * @param {ModifyAlarmPolicyStatusRequest} req
     * @param {function(string, ModifyAlarmPolicyStatusResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyStatus(req, cb) {
        let resp = new ModifyAlarmPolicyStatusResponse();
        this.request("ModifyAlarmPolicyStatus", req, resp, cb);
    }

    /**
     * 获取基础指标属性
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * 查询单个通知模板的详情
     * @param {DescribeAlarmNoticeRequest} req
     * @param {function(string, DescribeAlarmNoticeResponse):void} cb
     * @public
     */
    DescribeAlarmNotice(req, cb) {
        let resp = new DescribeAlarmNoticeResponse();
        this.request("DescribeAlarmNotice", req, resp, cb);
    }

    /**
     * 查询告警事件列表
     * @param {DescribeAlarmEventsRequest} req
     * @param {function(string, DescribeAlarmEventsResponse):void} cb
     * @public
     */
    DescribeAlarmEvents(req, cb) {
        let resp = new DescribeAlarmEventsResponse();
        this.request("DescribeAlarmEvents", req, resp, cb);
    }

    /**
     * 云监控告警删除告警通知模板
     * @param {DeleteAlarmNoticesRequest} req
     * @param {function(string, DeleteAlarmNoticesResponse):void} cb
     * @public
     */
    DeleteAlarmNotices(req, cb) {
        let resp = new DeleteAlarmNoticesResponse();
        this.request("DeleteAlarmNotices", req, resp, cb);
    }

    /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {DescribeServiceDiscoveryRequest} req
     * @param {function(string, DescribeServiceDiscoveryResponse):void} cb
     * @public
     */
    DescribeServiceDiscovery(req, cb) {
        let resp = new DescribeServiceDiscoveryResponse();
        this.request("DescribeServiceDiscovery", req, resp, cb);
    }

    /**
     * 云监控告警编辑告警通知模板
     * @param {ModifyAlarmNoticeRequest} req
     * @param {function(string, ModifyAlarmNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmNotice(req, cb) {
        let resp = new ModifyAlarmNoticeResponse();
        this.request("ModifyAlarmNotice", req, resp, cb);
    }

    /**
     * 更新策略组
     * @param {ModifyPolicyGroupRequest} req
     * @param {function(string, ModifyPolicyGroupResponse):void} cb
     * @public
     */
    ModifyPolicyGroup(req, cb) {
        let resp = new ModifyPolicyGroupResponse();
        this.request("ModifyPolicyGroup", req, resp, cb);
    }

    /**
     * Prometheus 报警规则查询接口
     * @param {DescribeAlertRulesRequest} req
     * @param {function(string, DescribeAlertRulesResponse):void} cb
     * @public
     */
    DescribeAlertRules(req, cb) {
        let resp = new DescribeAlertRulesResponse();
        this.request("DescribeAlertRules", req, resp, cb);
    }

    /**
     * 获取单个告警策略详情
     * @param {DescribeAlarmPolicyRequest} req
     * @param {function(string, DescribeAlarmPolicyResponse):void} cb
     * @public
     */
    DescribeAlarmPolicy(req, cb) {
        let resp = new DescribeAlarmPolicyResponse();
        this.request("DescribeAlarmPolicy", req, resp, cb);
    }


}
module.exports = MonitorClient;
