import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySmsTemplateResponse, PushMmsContentResponse, DescribeMmsInstanceListRequest, DescribeMmsInstanceInfoResponse, AddCrowdPackInfoResponse, AddSmsSignRequest, AddSmsSignResponse, GetSmsCampaignStatusRequest, DescribeSmsTemplateListResponse, GetCrowdPackListResponse, AddSmsTemplateRequest, DescribeMmsInstanceInfoRequest, CreateCampaignResponse, CreateCampaignRequest, AddCrowdPackInfoRequest, DeleteMmsInstanceResponse, ModifySmsTemplateRequest, SendSmsResponse, CancelCampaignResponse, DescribeSmsSignListRequest, GetCrowdUploadInfoResponse, GetSmsAmountInfoResponse, GetCrowdPackListRequest, AddSmsTemplateResponse, DelCrowdPackResponse, DelCrowdPackRequest, CreateMmsInstanceResponse, DescribeSmsTemplateListRequest, DeleteMmsInstanceRequest, GetSmsAmountInfoRequest, DelTemplateRequest, PushMmsContentRequest, DescribeMmsInstanceListResponse, GetCrowdUploadInfoRequest, CancelCampaignRequest, DelTemplateResponse, CreateMmsInstanceRequest, DescribeSmsSignListResponse, DescribeSmsCampaignStatisticsResponse, GetSmsCampaignStatusResponse, DescribeSmsCampaignStatisticsRequest, SendSmsRequest } from "./zj_models";
/**
 * zj client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取彩信实例列表
     */
    DescribeMmsInstanceList(req: DescribeMmsInstanceListRequest, cb?: (error: string, rep: DescribeMmsInstanceListResponse) => void): Promise<DescribeMmsInstanceListResponse>;
    /**
     * 删除人群包
     */
    DelCrowdPack(req: DelCrowdPackRequest, cb?: (error: string, rep: DelCrowdPackResponse) => void): Promise<DelCrowdPackResponse>;
    /**
     * 删除短信模板
     */
    DelTemplate(req: DelTemplateRequest, cb?: (error: string, rep: DelTemplateResponse) => void): Promise<DelTemplateResponse>;
    /**
     * 添加短信人群包信息
     */
    AddCrowdPackInfo(req: AddCrowdPackInfoRequest, cb?: (error: string, rep: AddCrowdPackInfoResponse) => void): Promise<AddCrowdPackInfoResponse>;
    /**
     * 创建普通短信签名信息
     */
    AddSmsSign(req: AddSmsSignRequest, cb?: (error: string, rep: AddSmsSignResponse) => void): Promise<AddSmsSignResponse>;
    /**
     * 删除超级短信样例
     */
    DeleteMmsInstance(req: DeleteMmsInstanceRequest, cb?: (error: string, rep: DeleteMmsInstanceResponse) => void): Promise<DeleteMmsInstanceResponse>;
    /**
     * 获取人群包列表接口
     */
    GetCrowdPackList(req: GetCrowdPackListRequest, cb?: (error: string, rep: GetCrowdPackListResponse) => void): Promise<GetCrowdPackListResponse>;
    /**
     * 根据短信标题、模板内容等创建短信模板
     */
    AddSmsTemplate(req: AddSmsTemplateRequest, cb?: (error: string, rep: AddSmsTemplateResponse) => void): Promise<AddSmsTemplateResponse>;
    /**
     * 发送短信
     */
    SendSms(req: SendSmsRequest, cb?: (error: string, rep: SendSmsResponse) => void): Promise<SendSmsResponse>;
    /**
     * 获取短信活动状态信息
     */
    GetSmsCampaignStatus(req: GetSmsCampaignStatusRequest, cb?: (error: string, rep: GetSmsCampaignStatusResponse) => void): Promise<GetSmsCampaignStatusResponse>;
    /**
     * 获取普通短信签名信息
     */
    DescribeSmsSignList(req: DescribeSmsSignListRequest, cb?: (error: string, rep: DescribeSmsSignListResponse) => void): Promise<DescribeSmsSignListResponse>;
    /**
     * 获取模板信息
     */
    DescribeSmsTemplateList(req: DescribeSmsTemplateListRequest, cb?: (error: string, rep: DescribeSmsTemplateListResponse) => void): Promise<DescribeSmsTemplateListResponse>;
    /**
     * 获取短信超短活动统计数据
     */
    DescribeSmsCampaignStatistics(req: DescribeSmsCampaignStatisticsRequest, cb?: (error: string, rep: DescribeSmsCampaignStatisticsResponse) => void): Promise<DescribeSmsCampaignStatisticsResponse>;
    /**
     * 创建超级短信的素材样例内容
     */
    CreateMmsInstance(req: CreateMmsInstanceRequest, cb?: (error: string, rep: CreateMmsInstanceResponse) => void): Promise<CreateMmsInstanceResponse>;
    /**
     * 获取彩信实例信息
     */
    DescribeMmsInstanceInfo(req: DescribeMmsInstanceInfoRequest, cb?: (error: string, rep: DescribeMmsInstanceInfoResponse) => void): Promise<DescribeMmsInstanceInfoResponse>;
    /**
     * 取消短信推送活动
     */
    CancelCampaign(req: CancelCampaignRequest, cb?: (error: string, rep: CancelCampaignResponse) => void): Promise<CancelCampaignResponse>;
    /**
     * 获取账号短信额度配置信息
     */
    GetSmsAmountInfo(req: GetSmsAmountInfoRequest, cb?: (error: string, rep: GetSmsAmountInfoResponse) => void): Promise<GetSmsAmountInfoResponse>;
    /**
     * 推送超级短信
     */
    PushMmsContent(req: PushMmsContentRequest, cb?: (error: string, rep: PushMmsContentResponse) => void): Promise<PushMmsContentResponse>;
    /**
     * 创建短信推送活动
     */
    CreateCampaign(req: CreateCampaignRequest, cb?: (error: string, rep: CreateCampaignResponse) => void): Promise<CreateCampaignResponse>;
    /**
     * 获取短信人群包cos上传需要的信息
     */
    GetCrowdUploadInfo(req: GetCrowdUploadInfoRequest, cb?: (error: string, rep: GetCrowdUploadInfoResponse) => void): Promise<GetCrowdUploadInfoResponse>;
    /**
     * 对未审核或者审核未通过的短信模板内容进行编辑修改
     */
    ModifySmsTemplate(req: ModifySmsTemplateRequest, cb?: (error: string, rep: ModifySmsTemplateResponse) => void): Promise<ModifySmsTemplateResponse>;
}
