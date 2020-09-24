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
const DescribePolicyConditionListConfigManual = models.DescribePolicyConditionListConfigManual;
const CreatePolicyGroupEventCondition = models.CreatePolicyGroupEventCondition;
const DescribeProductEventListRequest = models.DescribeProductEventListRequest;
const DescribePolicyConditionListMetric = models.DescribePolicyConditionListMetric;
const DescribePolicyGroupListResponse = models.DescribePolicyGroupListResponse;
const BindingPolicyObjectRequest = models.BindingPolicyObjectRequest;
const DescribePolicyGroupInfoRequest = models.DescribePolicyGroupInfoRequest;
const DescribePolicyGroupInfoCallback = models.DescribePolicyGroupInfoCallback;
const DescribeProductEventListDimensions = models.DescribeProductEventListDimensions;
const DescribePolicyGroupInfoResponse = models.DescribePolicyGroupInfoResponse;
const DescribeAllNamespacesRequest = models.DescribeAllNamespacesRequest;
const CreatePolicyGroupResponse = models.CreatePolicyGroupResponse;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;
const SendCustomAlarmMsgRequest = models.SendCustomAlarmMsgRequest;
const DescribePolicyConditionListConfigManualContinueTime = models.DescribePolicyConditionListConfigManualContinueTime;
const CommonNamespace = models.CommonNamespace;
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const DataPoint = models.DataPoint;
const DescribePolicyConditionListConfigManualPeriod = models.DescribePolicyConditionListConfigManualPeriod;
const UnBindingPolicyObjectRequest = models.UnBindingPolicyObjectRequest;
const DescribePolicyConditionListRequest = models.DescribePolicyConditionListRequest;
const DescribeBindingPolicyObjectListInstance = models.DescribeBindingPolicyObjectListInstance;
const DeletePolicyGroupResponse = models.DeletePolicyGroupResponse;
const DimensionsDesc = models.DimensionsDesc;
const DescribePolicyConditionListCondition = models.DescribePolicyConditionListCondition;
const DescribeProductListRequest = models.DescribeProductListRequest;
const PeriodsSt = models.PeriodsSt;
const ModifyAlarmReceiversResponse = models.ModifyAlarmReceiversResponse;
const DescribePolicyConditionListResponse = models.DescribePolicyConditionListResponse;
const DescribeAllNamespacesResponse = models.DescribeAllNamespacesResponse;
const DescribeBasicAlarmListResponse = models.DescribeBasicAlarmListResponse;
const ProductSimple = models.ProductSimple;
const ModifyAlarmReceiversRequest = models.ModifyAlarmReceiversRequest;
const DescribeProductEventListEventsDimensions = models.DescribeProductEventListEventsDimensions;
const MetricSet = models.MetricSet;
const DescribeBindingPolicyObjectListResponse = models.DescribeBindingPolicyObjectListResponse;
const ModifyPolicyGroupEventCondition = models.ModifyPolicyGroupEventCondition;
const ModifyPolicyGroupRequest = models.ModifyPolicyGroupRequest;
const DescribeProductEventListResponse = models.DescribeProductEventListResponse;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const Instance = models.Instance;
const BindingPolicyObjectDimension = models.BindingPolicyObjectDimension;
const Dimension = models.Dimension;
const DescribeBasicAlarmListAlarms = models.DescribeBasicAlarmListAlarms;
const UnBindingAllPolicyObjectResponse = models.UnBindingAllPolicyObjectResponse;
const DescribeAlarmHistoriesRequest = models.DescribeAlarmHistoriesRequest;
const MetricObjectMeaning = models.MetricObjectMeaning;
const DeletePolicyGroupRequest = models.DeletePolicyGroupRequest;
const ModifyPolicyGroupResponse = models.ModifyPolicyGroupResponse;
const DescribePolicyConditionListConfigManualCalcType = models.DescribePolicyConditionListConfigManualCalcType;
const DescribePolicyGroupInfoCondition = models.DescribePolicyGroupInfoCondition;
const DescribeProductEventListEventsGroupInfo = models.DescribeProductEventListEventsGroupInfo;
const DescribePolicyGroupInfoConditionTpl = models.DescribePolicyGroupInfoConditionTpl;
const DescribeBindingPolicyObjectListRequest = models.DescribeBindingPolicyObjectListRequest;
const UnBindingPolicyObjectResponse = models.UnBindingPolicyObjectResponse;
const DescribeProductEventListEvents = models.DescribeProductEventListEvents;
const DescribePolicyConditionListConfigManualPeriodNum = models.DescribePolicyConditionListConfigManualPeriodNum;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const DescribePolicyGroupListGroupInstanceGroup = models.DescribePolicyGroupListGroupInstanceGroup;
const InstanceGroup = models.InstanceGroup;
const DescribeAccidentEventListResponse = models.DescribeAccidentEventListResponse;
const DescribePolicyConditionListConfigManualStatType = models.DescribePolicyConditionListConfigManualStatType;
const DescribeAccidentEventListAlarms = models.DescribeAccidentEventListAlarms;
const DescribeProductListResponse = models.DescribeProductListResponse;
const DescribeAlarmHistoriesResponse = models.DescribeAlarmHistoriesResponse;
const AlarmHistory = models.AlarmHistory;
const MonitorTypeNamespace = models.MonitorTypeNamespace;
const CreatePolicyGroupRequest = models.CreatePolicyGroupRequest;
const CreatePolicyGroupCondition = models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models.DescribePolicyGroupInfoReceiverInfo;
const DescribePolicyConditionListEventMetric = models.DescribePolicyConditionListEventMetric;
const DescribePolicyGroupListRequest = models.DescribePolicyGroupListRequest;
const DescribeBasicAlarmListRequest = models.DescribeBasicAlarmListRequest;
const DescribePolicyGroupListGroup = models.DescribePolicyGroupListGroup;
const DescribeAccidentEventListRequest = models.DescribeAccidentEventListRequest;
const MetricDatum = models.MetricDatum;
const DescribeBindingPolicyObjectListInstanceGroup = models.DescribeBindingPolicyObjectListInstanceGroup;
const DescribeBindingPolicyObjectListDimension = models.DescribeBindingPolicyObjectListDimension;
const InstanceGroups = models.InstanceGroups;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const ReceiverInfo = models.ReceiverInfo;
const UnBindingAllPolicyObjectRequest = models.UnBindingAllPolicyObjectRequest;
const DescribePolicyGroupInfoEventCondition = models.DescribePolicyGroupInfoEventCondition;
const SendCustomAlarmMsgResponse = models.SendCustomAlarmMsgResponse;
const ModifyPolicyGroupCondition = models.ModifyPolicyGroupCondition;
const DescribeProductEventListOverView = models.DescribeProductEventListOverView;
const DescribePolicyConditionListConfigManualCalcValue = models.DescribePolicyConditionListConfigManualCalcValue;
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
     * 告警2.0-告警历史列表
     * @param {DescribeAlarmHistoriesRequest} req
     * @param {function(string, DescribeAlarmHistoriesResponse):void} cb
     * @public
     */
    DescribeAlarmHistories(req, cb) {
        let resp = new DescribeAlarmHistoriesResponse();
        this.request("DescribeAlarmHistories", req, resp, cb);
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
     * 获取基础指标详情
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
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
     * 拉取所有名字空间
     * @param {DescribeAllNamespacesRequest} req
     * @param {function(string, DescribeAllNamespacesResponse):void} cb
     * @public
     */
    DescribeAllNamespaces(req, cb) {
        let resp = new DescribeAllNamespacesResponse();
        this.request("DescribeAllNamespaces", req, resp, cb);
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
     * 获取基础告警策略条件
     * @param {DescribePolicyConditionListRequest} req
     * @param {function(string, DescribePolicyConditionListResponse):void} cb
     * @public
     */
    DescribePolicyConditionList(req, cb) {
        let resp = new DescribePolicyConditionListResponse();
        this.request("DescribePolicyConditionList", req, resp, cb);
    }


}
module.exports = MonitorClient;
