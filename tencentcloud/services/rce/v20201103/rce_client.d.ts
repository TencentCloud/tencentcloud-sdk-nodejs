import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ManageMarketingRiskRequest, DescribeRiskTrendsRequest, DescribeRiskAssessmentRequest, DescribeRiskAssessmentResponse, ManageMarketingRiskResponse, DescribeRiskModelResponse, DescribeRiskTrendsResponse, DescribeRiskModelRequest } from "./rce_models";
/**
 * rce client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 依托人工智能技术和腾讯丰富的风控实战经验，根据用户提供的数据和业务场景，给客户提供定制化模型服务
     */
    DescribeRiskModel(req: DescribeRiskModelRequest, cb?: (error: string, rep: DescribeRiskModelResponse) => void): Promise<DescribeRiskModelResponse>;
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
