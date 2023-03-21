import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyApmInstanceRequest, CreateApmInstanceRequest, DescribeServiceOverviewResponse, TerminateApmInstanceRequest, DescribeApmInstancesResponse, DescribeServiceOverviewRequest, DescribeApmAgentResponse, DescribeMetricRecordsResponse, DescribeApmAgentRequest, DescribeMetricRecordsRequest, DescribeGeneralMetricDataRequest, CreateApmInstanceResponse, ModifyApmInstanceResponse, DescribeApmInstancesRequest, DescribeGeneralMetricDataResponse, TerminateApmInstanceResponse } from "./apm_models";
/**
 * apm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改Apm实例接口
     */
    ModifyApmInstance(req: ModifyApmInstanceRequest, cb?: (error: string, rep: ModifyApmInstanceResponse) => void): Promise<ModifyApmInstanceResponse>;
    /**
     * APM实例列表拉取
     */
    DescribeApmInstances(req: DescribeApmInstancesRequest, cb?: (error: string, rep: DescribeApmInstancesResponse) => void): Promise<DescribeApmInstancesResponse>;
    /**
     * 获取Apm Agent信息
     */
    DescribeApmAgent(req: DescribeApmAgentRequest, cb?: (error: string, rep: DescribeApmAgentResponse) => void): Promise<DescribeApmAgentResponse>;
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
