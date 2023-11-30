import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCaptchaOperDataResponse, DescribeCaptchaMiniOperDataResponse, GetTotalTicketStatisticsRequest, DescribeCaptchaMiniDataSumResponse, DescribeCaptchaRceResultResponse, GetRequestStatisticsResponse, GetRequestStatisticsRequest, GetTicketStatisticsRequest, DescribeCaptchaUserAllAppIdRequest, GetTotalTicketStatisticsResponse, DescribeCaptchaMiniDataResponse, DescribeCaptchaMiniRiskResultRequest, UpdateCaptchaAppIdInfoResponse, DescribeCaptchaDataSumResponse, DescribeCaptchaTicketDataRequest, DescribeCaptchaResultResponse, DescribeCaptchaMiniDataSumRequest, DescribeCaptchaOperDataRequest, DescribeCaptchaDataSumRequest, DescribeCaptchaMiniRiskResultResponse, GetTicketStatisticsResponse, GetTotalRequestStatisticsRequest, GetTotalRequestStatisticsResponse, DescribeCaptchaDataResponse, DescribeCaptchaResultRequest, UpdateCaptchaAppIdInfoRequest, DescribeCaptchaMiniOperDataRequest, DescribeCaptchaAppIdInfoRequest, DescribeCaptchaAppIdInfoResponse, DescribeCaptchaRceResultRequest, DescribeCaptchaUserAllAppIdResponse, DescribeCaptchaDataRequest, DescribeCaptchaMiniResultRequest, DescribeCaptchaTicketDataResponse, DescribeCaptchaMiniResultResponse, DescribeCaptchaMiniDataRequest } from "./captcha_models";
/**
 * captcha client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * Rce融合验证核查验证码票据结果(Web及APP)
     */
    DescribeCaptchaRceResult(req: DescribeCaptchaRceResultRequest, cb?: (error: string, rep: DescribeCaptchaRceResultResponse) => void): Promise<DescribeCaptchaRceResultResponse>;
    /**
     * 核查验证码小程序插件票据接入风控结果(已停用)
     */
    DescribeCaptchaMiniRiskResult(req: DescribeCaptchaMiniRiskResultRequest, cb?: (error: string, rep: DescribeCaptchaMiniRiskResultResponse) => void): Promise<DescribeCaptchaMiniRiskResultResponse>;
    /**
     * 安全验证码用户操作票据数据查询
     */
    DescribeCaptchaTicketData(req: DescribeCaptchaTicketDataRequest, cb?: (error: string, rep: DescribeCaptchaTicketDataResponse) => void): Promise<DescribeCaptchaTicketDataResponse>;
    /**
     * 查询全部验证的统计数据，包括：总请求量、总验证量、总验证通过量、总验证拦截量等数据。
     */
    GetTotalRequestStatistics(req: GetTotalRequestStatisticsRequest, cb?: (error: string, rep: GetTotalRequestStatisticsResponse) => void): Promise<GetTotalRequestStatisticsResponse>;
    /**
     * 安全验证码查询请求数据概况，例如：按照时间段查询数据  昨日请求量、昨日恶意比例、昨日验证量、昨日通过量、昨日恶意拦截量……
     */
    DescribeCaptchaDataSum(req: DescribeCaptchaDataSumRequest, cb?: (error: string, rep: DescribeCaptchaDataSumResponse) => void): Promise<DescribeCaptchaDataSumResponse>;
    /**
     * 安全验证码用户操作数据查询，验证码加载耗时type = 1 、拦截情况type = 2、 一周通过平均尝试次数 type = 3、尝试次数分布 type = 4
     */
    DescribeCaptchaOperData(req: DescribeCaptchaOperDataRequest, cb?: (error: string, rep: DescribeCaptchaOperDataResponse) => void): Promise<DescribeCaptchaOperDataResponse>;
    /**
     * 安全验证码小程序插件分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3 小时级查询（五小时左右延迟）
     */
    DescribeCaptchaMiniData(req: DescribeCaptchaMiniDataRequest, cb?: (error: string, rep: DescribeCaptchaMiniDataResponse) => void): Promise<DescribeCaptchaMiniDataResponse>;
    /**
     * 安全验证码小程序插件用户操作数据查询
     */
    DescribeCaptchaMiniOperData(req: DescribeCaptchaMiniOperDataRequest, cb?: (error: string, rep: DescribeCaptchaMiniOperDataResponse) => void): Promise<DescribeCaptchaMiniOperDataResponse>;
    /**
     * 安全验证码分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3  分钟级查询
     */
    DescribeCaptchaData(req: DescribeCaptchaDataRequest, cb?: (error: string, rep: DescribeCaptchaDataResponse) => void): Promise<DescribeCaptchaDataResponse>;
    /**
     * 安全验证码小程序插件查询请求数据概况
     */
    DescribeCaptchaMiniDataSum(req: DescribeCaptchaMiniDataSumRequest, cb?: (error: string, rep: DescribeCaptchaMiniDataSumResponse) => void): Promise<DescribeCaptchaMiniDataSumResponse>;
    /**
     * 查询单个CaptchaAppID票据校验数据，包括：票据校验量、票据校验通过量、票据校验拦截量。
     */
    GetTicketStatistics(req: GetTicketStatisticsRequest, cb?: (error: string, rep: GetTicketStatisticsResponse) => void): Promise<GetTicketStatisticsResponse>;
    /**
     * 核查验证码票据结果(小程序插件)
     */
    DescribeCaptchaMiniResult(req: DescribeCaptchaMiniResultRequest, cb?: (error: string, rep: DescribeCaptchaMiniResultResponse) => void): Promise<DescribeCaptchaMiniResultResponse>;
    /**
     * 更新验证码应用APPId信息
     */
    UpdateCaptchaAppIdInfo(req: UpdateCaptchaAppIdInfoRequest, cb?: (error: string, rep: UpdateCaptchaAppIdInfoResponse) => void): Promise<UpdateCaptchaAppIdInfoResponse>;
    /**
     * 查询全部票据校验的统计数据，包括：总票据校验量、总票据校验通过量、总票据校验拦截量。
     */
    GetTotalTicketStatistics(req: GetTotalTicketStatisticsRequest, cb?: (error: string, rep: GetTotalTicketStatisticsResponse) => void): Promise<GetTotalTicketStatisticsResponse>;
    /**
     * 安全验证码获取用户注册所有APPId和应用名称
     */
    DescribeCaptchaUserAllAppId(req?: DescribeCaptchaUserAllAppIdRequest, cb?: (error: string, rep: DescribeCaptchaUserAllAppIdResponse) => void): Promise<DescribeCaptchaUserAllAppIdResponse>;
    /**
     * 查询单个CaptchaAppID验证的统计数据，包括：请求量、验证量、验证通过量、验证拦截量。
     */
    GetRequestStatistics(req: GetRequestStatisticsRequest, cb?: (error: string, rep: GetRequestStatisticsResponse) => void): Promise<GetRequestStatisticsResponse>;
    /**
     * 查询安全验证码应用APPId信息
     */
    DescribeCaptchaAppIdInfo(req: DescribeCaptchaAppIdInfoRequest, cb?: (error: string, rep: DescribeCaptchaAppIdInfoResponse) => void): Promise<DescribeCaptchaAppIdInfoResponse>;
    /**
     * 核查验证码票据结果(Web及APP)
     */
    DescribeCaptchaResult(req: DescribeCaptchaResultRequest, cb?: (error: string, rep: DescribeCaptchaResultResponse) => void): Promise<DescribeCaptchaResultResponse>;
}
