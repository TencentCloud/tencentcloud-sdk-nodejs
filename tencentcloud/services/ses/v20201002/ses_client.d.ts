import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { BatchSendEmailRequest, GetEmailTemplateRequest, ListSendTasksResponse, CreateReceiverResponse, CreateCustomBlacklistRequest, ListEmailAddressResponse, ListEmailAddressRequest, UpdateCustomBlackListResponse, UpdateEmailSmtpPassWordResponse, ListReceiversRequest, GetEmailIdentityResponse, ListBlackEmailAddressRequest, ListSendTasksRequest, GetSendEmailStatusResponse, DeleteBlackListRequest, BatchSendEmailResponse, DeleteEmailIdentityRequest, UpdateEmailIdentityRequest, GetEmailIdentityRequest, DeleteEmailIdentityResponse, GetStatisticsReportRequest, CreateCustomBlacklistResponse, CreateReceiverRequest, ListReceiverDetailsResponse, DeleteEmailTemplateResponse, UpdateCustomBlackListRequest, CreateEmailIdentityRequest, ListCustomBlacklistRequest, UpdateEmailSmtpPassWordRequest, UpdateEmailIdentityResponse, CreateEmailTemplateRequest, DeleteBlackListResponse, DeleteCustomBlackListRequest, UpdateEmailTemplateRequest, ListCustomBlacklistResponse, ListEmailTemplatesRequest, CreateReceiverDetailWithDataResponse, CreateReceiverDetailResponse, DeleteReceiverResponse, ListEmailTemplatesResponse, SendEmailResponse, SendEmailRequest, ListBlackEmailAddressResponse, GetSendEmailStatusRequest, DeleteReceiverRequest, ListEmailIdentitiesResponse, DeleteEmailTemplateRequest, GetStatisticsReportResponse, DeleteEmailAddressRequest, DeleteEmailAddressResponse, CreateEmailIdentityResponse, ListReceiverDetailsRequest, CreateEmailAddressRequest, DeleteCustomBlackListResponse, CreateReceiverDetailRequest, CreateEmailTemplateResponse, ListReceiversResponse, CreateEmailAddressResponse, UpdateEmailTemplateResponse, CreateReceiverDetailWithDataRequest, GetEmailTemplateResponse, ListEmailIdentitiesRequest } from "./ses_models";
/**
 * ses client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取当前发信域名列表，包含已验证通过与未验证的域名
     */
    ListEmailIdentities(req?: ListEmailIdentitiesRequest, cb?: (error: string, rep: ListEmailIdentitiesResponse) => void): Promise<ListEmailIdentitiesResponse>;
    /**
     * 在验证了发信域名之后，您需要一个发信地址来发送邮件。例如发信域名是mail.qcloud.com，那么发信地址可以为 service@mail.qcloud.com。如果您想要收件人在收件箱列表中显示您的别名，例如"腾讯云邮件通知"。那么发信地址为： 别名 空格 尖括号 邮箱地址。请注意中间需要有空格
     */
    CreateEmailAddress(req: CreateEmailAddressRequest, cb?: (error: string, rep: CreateEmailAddressResponse) => void): Promise<CreateEmailAddressResponse>;
    /**
     * 添加收件人地址附带模板参数，使用本接口在添加收件人地址的同时传入模板参数，使每一个收件人地址在发信的时候使用的模板变量取值不同。用户首先调用创建收件人列表接口-CreateReceiver后，然后调用本接口传入收件人地址和发信时的模板参数，最后使用批量发送邮件接口-BatchSendEmail，即可完成批量发信。需要注意的是在使用本接口后BatchSendEmail接口中的Template参数不需再传。用户也可以在控制台上邮件发送-收件人列表菜单中，通过导入文件的方式，导入收件人地址和模板变量和参数值。本接口一次请求的收件人地址数量限制为2W条，本接口同时也可以用来向已经上传完成的收件人列表追加收件人地址，但收件人列表中收件人地址的总量不能超过一定的数量，目前是限制5万条。本接口不支持去除重复的收件人地址，用户需要自己保证上传和追加地址不重复，不与之前上传的地址重复。
     */
    CreateReceiverDetailWithData(req: CreateReceiverDetailWithDataRequest, cb?: (error: string, rep: CreateReceiverDetailWithDataResponse) => void): Promise<CreateReceiverDetailWithDataResponse>;
    /**
     * 获取邮件发送状态。仅支持查询30天之内的数据
     */
    GetSendEmailStatus(req: GetSendEmailStatusRequest, cb?: (error: string, rep: GetSendEmailStatusResponse) => void): Promise<GetSendEmailStatusResponse>;
    /**
     * 根据收件人列表id查询收件人列表中的所有收件人邮箱地址，分页查询，可以根据收件邮箱地址来过滤查询
     */
    ListReceiverDetails(req: ListReceiverDetailsRequest, cb?: (error: string, rep: ListReceiverDetailsResponse) => void): Promise<ListReceiverDetailsResponse>;
    /**
     * 创建收件人列表，收件人列表是发送批量邮件的目标邮件地址列表。创建列表后，需要上传收件人邮箱地址。之后创建发送任务，关联列表，便可以实现批量发送邮件的功能
     */
    CreateReceiver(req: CreateReceiverRequest, cb?: (error: string, rep: CreateReceiverResponse) => void): Promise<CreateReceiverResponse>;
    /**
     * 获取某个发信域名的配置详情
     */
    GetEmailIdentity(req: GetEmailIdentityRequest, cb?: (error: string, rep: GetEmailIdentityResponse) => void): Promise<GetEmailIdentityResponse>;
    /**
     * 根据模板ID获取模板详情
     */
    GetEmailTemplate(req: GetEmailTemplateRequest, cb?: (error: string, rep: GetEmailTemplateResponse) => void): Promise<GetEmailTemplateResponse>;
    /**
     * 更新自定义黑名单
     */
    UpdateCustomBlackList(req: UpdateCustomBlackListRequest, cb?: (error: string, rep: UpdateCustomBlackListResponse) => void): Promise<UpdateCustomBlackListResponse>;
    /**
     * 腾讯云发送的邮件一旦被收件方判断为硬退(Hard Bounce)，腾讯云会拉黑该地址，并不允许所有用户向该地址发送邮件。成为邮箱黑名单。如果业务方确认是误判，可以从黑名单中删除。
     */
    ListBlackEmailAddress(req: ListBlackEmailAddressRequest, cb?: (error: string, rep: ListBlackEmailAddressResponse) => void): Promise<ListBlackEmailAddressResponse>;
    /**
     * 更新邮件模板，更新后需再次审核
     */
    UpdateEmailTemplate(req: UpdateEmailTemplateRequest, cb?: (error: string, rep: UpdateEmailTemplateResponse) => void): Promise<UpdateEmailTemplateResponse>;
    /**
     * 您已经成功配置好了您的DNS，接下来请求腾讯云验证您的DNS配置是否正确
     */
    UpdateEmailIdentity(req: UpdateEmailIdentityRequest, cb?: (error: string, rep: UpdateEmailIdentityResponse) => void): Promise<UpdateEmailIdentityResponse>;
    /**
     * 删除发信域名，删除后，将不可再使用该域名进行发信
     */
    DeleteEmailIdentity(req: DeleteEmailIdentityRequest, cb?: (error: string, rep: DeleteEmailIdentityResponse) => void): Promise<DeleteEmailIdentityResponse>;
    /**
     * 获取发信地址列表
     */
    ListEmailAddress(req?: ListEmailAddressRequest, cb?: (error: string, rep: ListEmailAddressResponse) => void): Promise<ListEmailAddressResponse>;
    /**
     * 根据收件id删除收件人列表,同时删除列表中的所有收件邮箱
     */
    DeleteReceiver(req: DeleteReceiverRequest, cb?: (error: string, rep: DeleteReceiverResponse) => void): Promise<DeleteReceiverResponse>;
    /**
     * 创建模板，该模板可以是TXT或者HTML，请注意如果HTML不要包含外部文件的CSS。模板中的变量使用 {{变量名}} 表示。
注意：模板需要审核通过才可以使用。
     */
    CreateEmailTemplate(req: CreateEmailTemplateRequest, cb?: (error: string, rep: CreateEmailTemplateResponse) => void): Promise<CreateEmailTemplateResponse>;
    /**
     * 您可以通过此API批量发送TEXT或者HTML邮件，适用于营销类、通知类邮件。默认仅支持使用模板发送邮件。批量发送之前，需先创建收件人列表，和收件人地址，并通过收件人列表id来进行发送。批量发送任务支持定时发送和周期重复发送，定时发送需传TimedParam，周期重复发送需传CycleParam
     */
    BatchSendEmail(req: BatchSendEmailRequest, cb?: (error: string, rep: BatchSendEmailResponse) => void): Promise<BatchSendEmailResponse>;
    /**
     * 设置邮箱的smtp密码。若要通过smtp发送邮件，必须为邮箱设置smtp密码。初始时，邮箱没有设置smtp密码，不能使用smtp的方式发送邮件。设置smtp密码后，可以修改密码。
     */
    UpdateEmailSmtpPassWord(req: UpdateEmailSmtpPassWordRequest, cb?: (error: string, rep: UpdateEmailSmtpPassWordResponse) => void): Promise<UpdateEmailSmtpPassWordResponse>;
    /**
     * 添加自定义黑名单
     */
    CreateCustomBlacklist(req: CreateCustomBlacklistRequest, cb?: (error: string, rep: CreateCustomBlacklistResponse) => void): Promise<CreateCustomBlacklistResponse>;
    /**
     * 删除发信模板
     */
    DeleteEmailTemplate(req: DeleteEmailTemplateRequest, cb?: (error: string, rep: DeleteEmailTemplateResponse) => void): Promise<DeleteEmailTemplateResponse>;
    /**
     * 获取当前邮件模板列表
     */
    ListEmailTemplates(req: ListEmailTemplatesRequest, cb?: (error: string, rep: ListEmailTemplatesResponse) => void): Promise<ListEmailTemplatesResponse>;
    /**
     * 分页查询批量发送邮件任务，包含即时发送任务，定时发送任务，周期重复发送任务，查询发送情况，包括请求数量，已发数量，缓存数量，任务状态等信息
     */
    ListSendTasks(req: ListSendTasksRequest, cb?: (error: string, rep: ListSendTasksResponse) => void): Promise<ListSendTasksResponse>;
    /**
     * 在使用身份发送电子邮件之前，您需要有一个电子邮件域名，该域名可以是您的网站或者移动应用的域名。您首先必须进行验证，证明自己是该域名的所有者，并且授权给腾讯云SES发送许可，才可以从该域名发送电子邮件。
     */
    CreateEmailIdentity(req: CreateEmailIdentityRequest, cb?: (error: string, rep: CreateEmailIdentityResponse) => void): Promise<CreateEmailIdentityResponse>;
    /**
     * 删除自定义黑名单邮箱地址
     */
    DeleteCustomBlackList(req: DeleteCustomBlackListRequest, cb?: (error: string, rep: DeleteCustomBlackListResponse) => void): Promise<DeleteCustomBlackListResponse>;
    /**
     * 邮箱被拉黑之后，用户如果确认收件邮箱有效或者已经处于激活状态，可以从腾讯云地址库中删除该黑名单之后继续投递。
     */
    DeleteBlackList(req: DeleteBlackListRequest, cb?: (error: string, rep: DeleteBlackListResponse) => void): Promise<DeleteBlackListResponse>;
    /**
     * 您可以通过此API发送HTML或者TEXT邮件，适用于触发类邮件（验证码、交易类）。默认仅支持使用模板发送邮件。
     */
    SendEmail(req: SendEmailRequest, cb?: (error: string, rep: SendEmailResponse) => void): Promise<SendEmailResponse>;
    /**
     * 获取自定义黑名单列表
     */
    ListCustomBlacklist(req: ListCustomBlacklistRequest, cb?: (error: string, rep: ListCustomBlacklistResponse) => void): Promise<ListCustomBlacklistResponse>;
    /**
     * 获取近期发送的统计情况，包含发送量、送达率、打开率、退信率等一系列数据。
     */
    GetStatisticsReport(req: GetStatisticsReportRequest, cb?: (error: string, rep: GetStatisticsReportResponse) => void): Promise<GetStatisticsReportResponse>;
    /**
     * 在创建完收件人列表后，向这个收件人列表中批量增加收件人邮箱地址，一次最大支持2万，异步完成处理。数据量比较大的时候，上传可能需要一点时间，可以通过查询收件人列表了解上传状态和上传数量。本接口与接口CreateReceiverDetailWithData的功能特性基本一致，只是不支持上传发信时的模板参数。用户首先调用创建收件人列表接口-CreateReceiver后，然后调用本接口传入收件人地址，最后使用批量发送邮件接口-BatchSendEmail，即可完成批量发信。本接口也支持追加收件人地址，也不支持去重，需要用户自己保证收件人地址不重复。本接口一次请求的收件人地址数量限制为2W条，但收件人列表中收件人地址的总量不能超过一定的数量，目前是限制5万条。
     */
    CreateReceiverDetail(req: CreateReceiverDetailRequest, cb?: (error: string, rep: CreateReceiverDetailResponse) => void): Promise<CreateReceiverDetailResponse>;
    /**
     * 根据条件查询收件人列表，支持分页，模糊查询，状态查询
     */
    ListReceivers(req: ListReceiversRequest, cb?: (error: string, rep: ListReceiversResponse) => void): Promise<ListReceiversResponse>;
    /**
     * 删除发信人地址
     */
    DeleteEmailAddress(req: DeleteEmailAddressRequest, cb?: (error: string, rep: DeleteEmailAddressResponse) => void): Promise<DeleteEmailAddressResponse>;
}
