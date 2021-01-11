import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyAlarmPolicyNoticeResponse, ModifyAlarmPolicyInfoRequest, DescribeProductEventListRequest, DescribeServiceDiscoveryResponse, DescribePolicyGroupListResponse, BindingPolicyObjectRequest, CreateServiceDiscoveryResponse, PutMonitorDataResponse, DescribePolicyGroupInfoRequest, DeleteServiceDiscoveryResponse, CreateAlarmPolicyRequest, DescribeAlarmEventsResponse, DescribePolicyGroupInfoResponse, ModifyAlarmPolicyNoticeRequest, DeleteAlarmPolicyRequest, PutMonitorDataRequest, CreatePolicyGroupResponse, ModifyAlarmPolicyTasksResponse, DescribeBaseMetricsResponse, GetMonitorDataRequest, DescribeAlarmPoliciesResponse, ModifyAlarmPolicyStatusRequest, SendCustomAlarmMsgRequest, UnBindingPolicyObjectRequest, DescribeServiceDiscoveryRequest, DescribePolicyConditionListRequest, DeletePolicyGroupResponse, DescribeMonitorTypesRequest, DescribeAlarmNoticesResponse, ModifyAlarmPolicyTasksRequest, SetDefaultAlarmPolicyRequest, ModifyAlarmNoticeRequest, CreateServiceDiscoveryRequest, DescribeProductListRequest, CreateAlarmPolicyResponse, ModifyAlarmReceiversResponse, DescribePolicyConditionListResponse, DescribeAllNamespacesResponse, DeleteAlarmNoticesResponse, DescribeBasicAlarmListResponse, ModifyAlarmReceiversRequest, DescribeAlarmNoticeCallbacksRequest, ModifyAlarmPolicyConditionResponse, ModifyPolicyGroupRequest, DescribeAlarmHistoriesResponse, DescribeAlarmMetricsRequest, DescribeBaseMetricsRequest, DescribeAlarmNoticeCallbacksResponse, ModifyAlarmPolicyConditionRequest, ModifyAlarmPolicyStatusResponse, DescribeAlarmPolicyResponse, UpdateServiceDiscoveryResponse, DescribeMonitorTypesResponse, UpdateServiceDiscoveryRequest, CreateAlarmNoticeResponse, DescribeAlarmHistoriesRequest, ModifyPolicyGroupResponse, DeletePolicyGroupRequest, DescribeBindingPolicyObjectListResponse, DescribeBindingPolicyObjectListRequest, UnBindingPolicyObjectResponse, DeleteAlarmNoticesRequest, DescribeAllNamespacesRequest, DescribeAlarmMetricsResponse, DescribeAlarmPoliciesRequest, DescribeAccidentEventListResponse, ModifyAlarmPolicyInfoResponse, DescribeAlarmEventsRequest, ModifyAlarmNoticeResponse, DescribeProductListResponse, DescribeProductEventListResponse, DeleteAlarmPolicyResponse, DescribeAlarmPolicyRequest, CreatePolicyGroupRequest, DescribeStatisticDataResponse, DescribePolicyGroupListRequest, DescribeBasicAlarmListRequest, UnBindingAllPolicyObjectResponse, DescribeAlarmNoticesRequest, DescribeAccidentEventListRequest, DescribeAlarmNoticeResponse, DescribeStatisticDataRequest, DescribeAlarmNoticeRequest, CreateAlarmNoticeRequest, GetMonitorDataResponse, UnBindingAllPolicyObjectRequest, SendCustomAlarmMsgResponse, DeleteServiceDiscoveryRequest, SetDefaultAlarmPolicyResponse, BindingPolicyObjectResponse } from "./monitor_models";
/**
 * monitor client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     */
    PutMonitorData(req: PutMonitorDataRequest, cb?: (error: string, rep: PutMonitorDataResponse) => void): Promise<PutMonitorDataResponse>;
    /**
     * 查询告警策略列表
     */
    DescribeAlarmPolicies(req: DescribeAlarmPoliciesRequest, cb?: (error: string, rep: DescribeAlarmPoliciesResponse) => void): Promise<DescribeAlarmPoliciesResponse>;
    /**
     * 删除策略的关联对象
     */
    UnBindingPolicyObject(req: UnBindingPolicyObjectRequest, cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void): Promise<UnBindingPolicyObjectResponse>;
    /**
     * 发送自定义消息告警
     */
    SendCustomAlarmMsg(req: SendCustomAlarmMsgRequest, cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void): Promise<SendCustomAlarmMsgResponse>;
    /**
     * 获取已绑定对象列表
     */
    DescribeBindingPolicyObjectList(req: DescribeBindingPolicyObjectListRequest, cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void): Promise<DescribeBindingPolicyObjectListResponse>;
    /**
     * 云监控告警修改告警策略绑定的告警通知模板
     */
    ModifyAlarmPolicyNotice(req: ModifyAlarmPolicyNoticeRequest, cb?: (error: string, rep: ModifyAlarmPolicyNoticeResponse) => void): Promise<ModifyAlarmPolicyNoticeResponse>;
    /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    DeleteServiceDiscovery(req: DeleteServiceDiscoveryRequest, cb?: (error: string, rep: DeleteServiceDiscoveryResponse) => void): Promise<DeleteServiceDiscoveryResponse>;
    /**
     * 获取基础策略告警组列表
     */
    DescribePolicyGroupList(req: DescribePolicyGroupListRequest, cb?: (error: string, rep: DescribePolicyGroupListResponse) => void): Promise<DescribePolicyGroupListResponse>;
    /**
     * 删除告警策略
     */
    DeleteAlarmPolicy(req: DeleteAlarmPolicyRequest, cb?: (error: string, rep: DeleteAlarmPolicyResponse) => void): Promise<DeleteAlarmPolicyResponse>;
    /**
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     */
    GetMonitorData(req: GetMonitorDataRequest, cb?: (error: string, rep: GetMonitorDataResponse) => void): Promise<GetMonitorDataResponse>;
    /**
     * 云监控告警修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     */
    ModifyAlarmPolicyTasks(req: ModifyAlarmPolicyTasksRequest, cb?: (error: string, rep: ModifyAlarmPolicyTasksResponse) => void): Promise<ModifyAlarmPolicyTasksResponse>;
    /**
     * 获取基础告警策略条件
     */
    DescribePolicyConditionList(req: DescribePolicyConditionListRequest, cb?: (error: string, rep: DescribePolicyConditionListResponse) => void): Promise<DescribePolicyConditionListResponse>;
    /**
     * 编辑告警策略触发条件
     */
    ModifyAlarmPolicyCondition(req: ModifyAlarmPolicyConditionRequest, cb?: (error: string, rep: ModifyAlarmPolicyConditionResponse) => void): Promise<ModifyAlarmPolicyConditionResponse>;
    /**
     * 获取基础告警列表
     */
    DescribeBasicAlarmList(req: DescribeBasicAlarmListRequest, cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void): Promise<DescribeBasicAlarmListResponse>;
    /**
     * 将告警策略绑定到特定对象
     */
    BindingPolicyObject(req: BindingPolicyObjectRequest, cb?: (error: string, rep: BindingPolicyObjectResponse) => void): Promise<BindingPolicyObjectResponse>;
    /**
     * 创建通知模板
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * 创建告警策略
     */
    CreateAlarmPolicy(req: CreateAlarmPolicyRequest, cb?: (error: string, rep: CreateAlarmPolicyResponse) => void): Promise<CreateAlarmPolicyResponse>;
    /**
     * 获取基础策略组详情
     */
    DescribePolicyGroupInfo(req: DescribePolicyGroupInfoRequest, cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void): Promise<DescribePolicyGroupInfoResponse>;
    /**
     * 查询云监控产品列表
     */
    DescribeProductList(req: DescribeProductListRequest, cb?: (error: string, rep: DescribeProductListResponse) => void): Promise<DescribeProductListResponse>;
    /**
     * 查询所有名字空间
     */
    DescribeAllNamespaces(req: DescribeAllNamespacesRequest, cb?: (error: string, rep: DescribeAllNamespacesResponse) => void): Promise<DescribeAllNamespacesResponse>;
    /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    CreateServiceDiscovery(req: CreateServiceDiscoveryRequest, cb?: (error: string, rep: CreateServiceDiscoveryResponse) => void): Promise<CreateServiceDiscoveryResponse>;
    /**
     * 根据维度条件查询监控数据
     */
    DescribeStatisticData(req: DescribeStatisticDataRequest, cb?: (error: string, rep: DescribeStatisticDataResponse) => void): Promise<DescribeStatisticDataResponse>;
    /**
     * 查询通知模板列表
     */
    DescribeAlarmNotices(req: DescribeAlarmNoticesRequest, cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void): Promise<DescribeAlarmNoticesResponse>;
    /**
     * 云监控告警获取告警通知模板所有回调URL
     */
    DescribeAlarmNoticeCallbacks(req: DescribeAlarmNoticeCallbacksRequest, cb?: (error: string, rep: DescribeAlarmNoticeCallbacksResponse) => void): Promise<DescribeAlarmNoticeCallbacksResponse>;
    /**
     * 修改告警接收人
     */
    ModifyAlarmReceivers(req: ModifyAlarmReceiversRequest, cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void): Promise<ModifyAlarmReceiversResponse>;
    /**
     * 删除全部的关联对象
     */
    UnBindingAllPolicyObject(req: UnBindingAllPolicyObjectRequest, cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void): Promise<UnBindingAllPolicyObjectResponse>;
    /**
     * 删除告警策略组
     */
    DeletePolicyGroup(req: DeletePolicyGroupRequest, cb?: (error: string, rep: DeletePolicyGroupResponse) => void): Promise<DeletePolicyGroupResponse>;
    /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    UpdateServiceDiscovery(req: UpdateServiceDiscoveryRequest, cb?: (error: string, rep: UpdateServiceDiscoveryResponse) => void): Promise<UpdateServiceDiscoveryResponse>;
    /**
     * 云监控支持多种类型的监控，此接口列出支持的所有类型
     */
    DescribeMonitorTypes(req: DescribeMonitorTypesRequest, cb?: (error: string, rep: DescribeMonitorTypesResponse) => void): Promise<DescribeMonitorTypesResponse>;
    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     */
    SetDefaultAlarmPolicy(req: SetDefaultAlarmPolicyRequest, cb?: (error: string, rep: SetDefaultAlarmPolicyResponse) => void): Promise<SetDefaultAlarmPolicyResponse>;
    /**
     * 增加策略组
     */
    CreatePolicyGroup(req: CreatePolicyGroupRequest, cb?: (error: string, rep: CreatePolicyGroupResponse) => void): Promise<CreatePolicyGroupResponse>;
    /**
     * 分页获取产品事件的列表
     */
    DescribeProductEventList(req: DescribeProductEventListRequest, cb?: (error: string, rep: DescribeProductEventListResponse) => void): Promise<DescribeProductEventListResponse>;
    /**
     * 获取平台事件列表
     */
    DescribeAccidentEventList(req: DescribeAccidentEventListRequest, cb?: (error: string, rep: DescribeAccidentEventListResponse) => void): Promise<DescribeAccidentEventListResponse>;
    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     */
    ModifyAlarmPolicyInfo(req: ModifyAlarmPolicyInfoRequest, cb?: (error: string, rep: ModifyAlarmPolicyInfoResponse) => void): Promise<ModifyAlarmPolicyInfoResponse>;
    /**
     * 查询告警历史
     */
    DescribeAlarmHistories(req: DescribeAlarmHistoriesRequest, cb?: (error: string, rep: DescribeAlarmHistoriesResponse) => void): Promise<DescribeAlarmHistoriesResponse>;
    /**
     * 查询告警指标列表
     */
    DescribeAlarmMetrics(req: DescribeAlarmMetricsRequest, cb?: (error: string, rep: DescribeAlarmMetricsResponse) => void): Promise<DescribeAlarmMetricsResponse>;
    /**
     * 启停告警策略
     */
    ModifyAlarmPolicyStatus(req: ModifyAlarmPolicyStatusRequest, cb?: (error: string, rep: ModifyAlarmPolicyStatusResponse) => void): Promise<ModifyAlarmPolicyStatusResponse>;
    /**
     * 获取基础指标详情
     */
    DescribeBaseMetrics(req: DescribeBaseMetricsRequest, cb?: (error: string, rep: DescribeBaseMetricsResponse) => void): Promise<DescribeBaseMetricsResponse>;
    /**
     * 查询单个通知模板的详情
     */
    DescribeAlarmNotice(req: DescribeAlarmNoticeRequest, cb?: (error: string, rep: DescribeAlarmNoticeResponse) => void): Promise<DescribeAlarmNoticeResponse>;
    /**
     * 查询告警事件列表
     */
    DescribeAlarmEvents(req: DescribeAlarmEventsRequest, cb?: (error: string, rep: DescribeAlarmEventsResponse) => void): Promise<DescribeAlarmEventsResponse>;
    /**
     * 云监控告警删除告警通知模板
     */
    DeleteAlarmNotices(req: DeleteAlarmNoticesRequest, cb?: (error: string, rep: DeleteAlarmNoticesResponse) => void): Promise<DeleteAlarmNoticesResponse>;
    /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    DescribeServiceDiscovery(req: DescribeServiceDiscoveryRequest, cb?: (error: string, rep: DescribeServiceDiscoveryResponse) => void): Promise<DescribeServiceDiscoveryResponse>;
    /**
     * 云监控告警编辑告警通知模板
     */
    ModifyAlarmNotice(req: ModifyAlarmNoticeRequest, cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void): Promise<ModifyAlarmNoticeResponse>;
    /**
     * 更新策略组
     */
    ModifyPolicyGroup(req: ModifyPolicyGroupRequest, cb?: (error: string, rep: ModifyPolicyGroupResponse) => void): Promise<ModifyPolicyGroupResponse>;
    /**
     * 获取单个告警策略详情
     */
    DescribeAlarmPolicy(req: DescribeAlarmPolicyRequest, cb?: (error: string, rep: DescribeAlarmPolicyResponse) => void): Promise<DescribeAlarmPolicyResponse>;
}
