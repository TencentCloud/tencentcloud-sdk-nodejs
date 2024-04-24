import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyApmInstanceRequest, CreateApmInstanceRequest, ModifyGeneralApmApplicationConfigRequest, DescribeServiceOverviewResponse, TerminateApmInstanceRequest, DescribeApmInstancesResponse, DescribeTagValuesResponse, DescribeGeneralSpanListResponse, DescribeServiceOverviewRequest, DescribeApmAgentResponse, DescribeTagValuesRequest, DescribeMetricRecordsResponse, DescribeGeneralSpanListRequest, DescribeApmAgentRequest, DescribeMetricRecordsRequest, DescribeGeneralApmApplicationConfigResponse, DescribeGeneralMetricDataRequest, CreateApmInstanceResponse, DescribeGeneralApmApplicationConfigRequest, ModifyApmInstanceResponse, DescribeApmInstancesRequest, DescribeGeneralMetricDataResponse, ModifyGeneralApmApplicationConfigResponse, TerminateApmInstanceResponse } from "./apm_models";
/**
 * apm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询应用配置信息
     */
    DescribeGeneralApmApplicationConfig(req: DescribeGeneralApmApplicationConfigRequest, cb?: (error: string, rep: DescribeGeneralApmApplicationConfigResponse) => void): Promise<DescribeGeneralApmApplicationConfigResponse>;
    /**
     * 根据维度名和过滤条件，查询维度数据.
     */
    DescribeTagValues(req: DescribeTagValuesRequest, cb?: (error: string, rep: DescribeTagValuesResponse) => void): Promise<DescribeTagValuesResponse>;
    /**
     * 通用查询调用链列表
     */
    DescribeGeneralSpanList(req: DescribeGeneralSpanListRequest, cb?: (error: string, rep: DescribeGeneralSpanListResponse) => void): Promise<DescribeGeneralSpanListResponse>;
    /**
     * APM实例列表拉取
     */
    DescribeApmInstances(req: DescribeApmInstancesRequest, cb?: (error: string, rep: DescribeApmInstancesResponse) => void): Promise<DescribeApmInstancesResponse>;
    /**
     * 获取APM Agent信息
     */
    DescribeApmAgent(req: DescribeApmAgentRequest, cb?: (error: string, rep: DescribeApmAgentResponse) => void): Promise<DescribeApmAgentResponse>;
    /**
     * 修改APM实例接口
     */
    ModifyApmInstance(req: ModifyApmInstanceRequest, cb?: (error: string, rep: ModifyApmInstanceResponse) => void): Promise<ModifyApmInstanceResponse>;
    /**
     * 对外开放的openApi，客户可以灵活的指定需要修改的字段，再加入需要修改的服务列表.
     */
    ModifyGeneralApmApplicationConfig(req: ModifyGeneralApmApplicationConfigRequest, cb?: (error: string, rep: ModifyGeneralApmApplicationConfigResponse) => void): Promise<ModifyGeneralApmApplicationConfigResponse>;
    /**
     * 获取指标数据通用接口。用户根据需要上送请求参数，返回对应的指标数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求的数据点数限制为1440个。
     */
    DescribeGeneralMetricData(req: DescribeGeneralMetricDataRequest, cb?: (error: string, rep: DescribeGeneralMetricDataResponse) => void): Promise<DescribeGeneralMetricDataResponse>;
    /**
     * 拉取通用指标列表
     */
    DescribeMetricRecords(req: DescribeMetricRecordsRequest, cb?: (error: string, rep: DescribeMetricRecordsResponse) => void): Promise<DescribeMetricRecordsResponse>;
    /**
     * apm销毁实例
     */
    TerminateApmInstance(req: TerminateApmInstanceRequest, cb?: (error: string, rep: TerminateApmInstanceResponse) => void): Promise<TerminateApmInstanceResponse>;
    /**
     * 业务购买APM实例，调用该接口创建
     */
    CreateApmInstance(req: CreateApmInstanceRequest, cb?: (error: string, rep: CreateApmInstanceResponse) => void): Promise<CreateApmInstanceResponse>;
    /**
     * 服务概览数据拉取
     */
    DescribeServiceOverview(req: DescribeServiceOverviewRequest, cb?: (error: string, rep: DescribeServiceOverviewResponse) => void): Promise<DescribeServiceOverviewResponse>;
}
