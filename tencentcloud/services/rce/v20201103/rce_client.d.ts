import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ManageMarketingRiskRequest, DescribeRiskTrendsRequest, DescribeRiskAssessmentRequest, DescribeRiskTrendsResponse, ManageMarketingRiskResponse, DescribeRiskAssessmentResponse } from "./rce_models";
/**
 * rce client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 以图表形式展示三种请求状态的趋势变化
     */
    DescribeRiskTrends(req: DescribeRiskTrendsRequest, cb?: (error: string, rep: DescribeRiskTrendsResponse) => void): Promise<DescribeRiskTrendsResponse>;
    /**
     * 此接口用于查询风险评估结果
     */
    DescribeRiskAssessment(req?: DescribeRiskAssessmentRequest, cb?: (error: string, rep: DescribeRiskAssessmentResponse) => void): Promise<DescribeRiskAssessmentResponse>;
    /**
     * 全栈式风控引擎（RiskControlEngine，RCE）是基于人工智能技术和腾讯20年风控实战沉淀，依托腾讯海量业务构建的风控引擎，以轻量级的 SaaS 服务方式接入，帮助您快速解决注册、登录、营销活动等关键场景遇到的欺诈问题，实时防御黑灰产作恶。
     */
    ManageMarketingRisk(req: ManageMarketingRiskRequest, cb?: (error: string, rep: ManageMarketingRiskResponse) => void): Promise<ManageMarketingRiskResponse>;
}
