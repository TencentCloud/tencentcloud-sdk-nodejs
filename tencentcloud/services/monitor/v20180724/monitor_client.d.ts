import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeProductEventListRequest, DescribePolicyGroupListResponse, BindingPolicyObjectRequest, DescribePolicyGroupInfoRequest, DescribePolicyGroupInfoResponse, DescribeAllNamespacesRequest, CreatePolicyGroupResponse, PutMonitorDataResponse, DescribeBaseMetricsResponse, SendCustomAlarmMsgRequest, GetMonitorDataRequest, UnBindingPolicyObjectRequest, DescribePolicyConditionListRequest, DeletePolicyGroupResponse, DescribeProductListRequest, ModifyAlarmReceiversResponse, DescribePolicyConditionListResponse, DescribeAllNamespacesResponse, DescribeBasicAlarmListResponse, ModifyAlarmReceiversRequest, DescribeBindingPolicyObjectListResponse, ModifyPolicyGroupRequest, DescribeProductEventListResponse, DescribeBaseMetricsRequest, UnBindingAllPolicyObjectResponse, DescribeAlarmHistoriesRequest, DeletePolicyGroupRequest, ModifyPolicyGroupResponse, DescribeBindingPolicyObjectListRequest, UnBindingPolicyObjectResponse, PutMonitorDataRequest, DescribeAccidentEventListResponse, DescribeProductListResponse, DescribeAlarmHistoriesResponse, CreatePolicyGroupRequest, DescribePolicyGroupListRequest, DescribeBasicAlarmListRequest, DescribeAccidentEventListRequest, GetMonitorDataResponse, UnBindingAllPolicyObjectRequest, SendCustomAlarmMsgResponse, BindingPolicyObjectResponse } from "./monitor_models";
/**
 * monitor client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 分页获取产品事件的列表
     */
    DescribeProductEventList(req: DescribeProductEventListRequest, cb?: (error: string, rep: DescribeProductEventListResponse) => void): Promise<DescribeProductEventListResponse>;
    /**
     * 获取平台事件列表
     */
    DescribeAccidentEventList(req: DescribeAccidentEventListRequest, cb?: (error: string, rep: DescribeAccidentEventListResponse) => void): Promise<DescribeAccidentEventListResponse>;
    /**
     * 删除策略的关联对象
     */
    UnBindingPolicyObject(req: UnBindingPolicyObjectRequest, cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void): Promise<UnBindingPolicyObjectResponse>;
    /**
     * 将告警策略绑定到特定对象
     */
    BindingPolicyObject(req: BindingPolicyObjectRequest, cb?: (error: string, rep: BindingPolicyObjectResponse) => void): Promise<BindingPolicyObjectResponse>;
    /**
     * 告警2.0-告警历史列表
     */
    DescribeAlarmHistories(req: DescribeAlarmHistoriesRequest, cb?: (error: string, rep: DescribeAlarmHistoriesResponse) => void): Promise<DescribeAlarmHistoriesResponse>;
    /**
     * 修改告警接收人
     */
    ModifyAlarmReceivers(req: ModifyAlarmReceiversRequest, cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void): Promise<ModifyAlarmReceiversResponse>;
    /**
     * 获取已绑定对象列表
     */
    DescribeBindingPolicyObjectList(req: DescribeBindingPolicyObjectListRequest, cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void): Promise<DescribeBindingPolicyObjectListResponse>;
    /**
     * 发送自定义消息告警
     */
    SendCustomAlarmMsg(req: SendCustomAlarmMsgRequest, cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void): Promise<SendCustomAlarmMsgResponse>;
    /**
     * 删除告警策略组
     */
    DeletePolicyGroup(req: DeletePolicyGroupRequest, cb?: (error: string, rep: DeletePolicyGroupResponse) => void): Promise<DeletePolicyGroupResponse>;
    /**
     * 获取基础指标详情
     */
    DescribeBaseMetrics(req: DescribeBaseMetricsRequest, cb?: (error: string, rep: DescribeBaseMetricsResponse) => void): Promise<DescribeBaseMetricsResponse>;
    /**
     * 获取基础策略组详情
     */
    DescribePolicyGroupInfo(req: DescribePolicyGroupInfoRequest, cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void): Promise<DescribePolicyGroupInfoResponse>;
    /**
     * 更新策略组
     */
    ModifyPolicyGroup(req: ModifyPolicyGroupRequest, cb?: (error: string, rep: ModifyPolicyGroupResponse) => void): Promise<ModifyPolicyGroupResponse>;
    /**
     * 查询云监控产品列表
     */
    DescribeProductList(req: DescribeProductListRequest, cb?: (error: string, rep: DescribeProductListResponse) => void): Promise<DescribeProductListResponse>;
    /**
     * 获取基础策略告警组列表
     */
    DescribePolicyGroupList(req: DescribePolicyGroupListRequest, cb?: (error: string, rep: DescribePolicyGroupListResponse) => void): Promise<DescribePolicyGroupListResponse>;
    /**
     * 获取基础告警列表
     */
    DescribeBasicAlarmList(req: DescribeBasicAlarmListRequest, cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void): Promise<DescribeBasicAlarmListResponse>;
    /**
       * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
  接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
  若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
       */
    GetMonitorData(req: GetMonitorDataRequest, cb?: (error: string, rep: GetMonitorDataResponse) => void): Promise<GetMonitorDataResponse>;
    /**
     * 拉取所有名字空间
     */
    DescribeAllNamespaces(req: DescribeAllNamespacesRequest, cb?: (error: string, rep: DescribeAllNamespacesResponse) => void): Promise<DescribeAllNamespacesResponse>;
    /**
     * 增加策略组
     */
    CreatePolicyGroup(req: CreatePolicyGroupRequest, cb?: (error: string, rep: CreatePolicyGroupResponse) => void): Promise<CreatePolicyGroupResponse>;
    /**
     * 删除全部的关联对象
     */
    UnBindingAllPolicyObject(req: UnBindingAllPolicyObjectRequest, cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void): Promise<UnBindingAllPolicyObjectResponse>;
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
     * 获取基础告警策略条件
     */
    DescribePolicyConditionList(req: DescribePolicyConditionListRequest, cb?: (error: string, rep: DescribePolicyConditionListResponse) => void): Promise<DescribePolicyConditionListResponse>;
}
