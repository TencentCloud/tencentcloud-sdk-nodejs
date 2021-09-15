import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeFaceIdResultsRequest, CreateSubOrganizationRequest, CreateSealRequest, CancelFlowResponse, VerifySubOrganizationRequest, VerifyUserRequest, DescribeFaceIdPhotosResponse, CheckVerifyCodeMatchFlowIdRequest, CheckBankCard2EVerificationRequest, DescribeFileIdsByCustomIdsResponse, ModifySubOrganizationInfoResponse, DescribeCatalogApproversRequest, CheckFaceIdentifyRequest, CreateServerFlowSignResponse, ModifyUserResponse, CheckBankCard4EVerificationResponse, DescribeFileUrlsRequest, ModifyUserDefaultSealRequest, GenerateUserSealRequest, CheckIdCardVerificationResponse, DescribeFlowResponse, CreateSubOrganizationAndSealRequest, CheckMobileVerificationRequest, SendFlowUrlResponse, DescribeCatalogApproversResponse, SendFlowResponse, DescribeSealsRequest, DescribeFlowFilesRequest, DescribeCustomFlowIdsResponse, CheckIdCardVerificationRequest, CreateSignUrlResponse, ModifySubOrganizationInfoRequest, SendSignInnerVerifyCodeResponse, DescribeFaceIdPhotosRequest, CreateUserResponse, CheckVerifyCodeMatchFlowIdResponse, ModifyOrganizationDefaultSealRequest, CreateFaceIdSignResponse, DescribeFlowApproversResponse, CheckMobileAndNameRequest, DeleteSealRequest, CheckBankCardVerificationResponse, ArchiveFlowRequest, CreateUserAndSealResponse, CreateSignUrlRequest, DeleteSealResponse, UploadFilesRequest, DescribeUsersRequest, CreateFlowByFilesRequest, ArchiveFlowResponse, CheckBankCard2EVerificationResponse, VerifySubOrganizationResponse, DescribeSealsResponse, DescribeFileUrlsResponse, ModifySealRequest, CheckBankCard3EVerificationRequest, CheckBankCardVerificationRequest, RejectFlowRequest, DescribeSubOrganizationsRequest, DescribeCatalogSignComponentsRequest, ModifyOrganizationDefaultSealResponse, CreateFlowByFilesResponse, ModifyUserDefaultSealResponse, UploadFilesResponse, CheckBankCard3EVerificationResponse, SignFlowRequest, DescribeCustomFlowIdsByFlowIdRequest, DescribeUsersResponse, CreateH5FaceIdUrlRequest, CheckMobileVerificationResponse, DescribeFlowFilesResponse, CreateUserRequest, CreatePreviewSignUrlRequest, CreateUserAndSealRequest, CreatePreviewSignUrlResponse, CreateFaceIdSignRequest, DescribeCustomFlowIdsByFlowIdResponse, SignFlowResponse, RejectFlowResponse, DescribeFlowRequest, DescribeFileIdsByCustomIdsRequest, CreateSealResponse, GenerateOrganizationSealResponse, DescribeSubOrganizationsResponse, DestroyFlowFileRequest, CheckFaceIdentifyResponse, SendFlowUrlRequest, CancelFlowRequest, CreateH5FaceIdUrlResponse, DescribeCustomFlowIdsRequest, DescribeFlowApproversRequest, DescribeFaceIdResultsResponse, CheckBankCard4EVerificationRequest, GenerateUserSealResponse, DescribeCatalogSignComponentsResponse, GenerateOrganizationSealRequest, CreateServerFlowSignRequest, VerifyUserResponse, SendFlowRequest, SendSignInnerVerifyCodeRequest, DestroyFlowFileResponse, CreateSubOrganizationResponse, CreateSubOrganizationAndSealResponse, ModifyUserRequest, CheckMobileAndNameResponse, ModifySealResponse } from "./essbasic_models";
/**
 * essbasic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口为第三方平台向电子签平台验证手机号三要素
     */
    CheckMobileVerification(req: CheckMobileVerificationRequest, cb?: (error: string, rep: CheckMobileVerificationResponse) => void): Promise<CheckMobileVerificationResponse>;
    /**
     * 此接口（CreateSubOrganization）用于在腾讯电子签内注册子机构。
     */
    CreateSubOrganization(req: CreateSubOrganizationRequest, cb?: (error: string, rep: CreateSubOrganizationResponse) => void): Promise<CreateSubOrganizationResponse>;
    /**
     * 此接口（CancelFlow）用于撤销正在进行中的流程。

注：已归档流程不可完成撤销动作。
     */
    CancelFlow(req: CancelFlowRequest, cb?: (error: string, rep: CancelFlowResponse) => void): Promise<CancelFlowResponse>;
    /**
     * 此接口（DescribeFileUrls）用于获取签署文件下载的URL。
     */
    DescribeFileUrls(req: DescribeFileUrlsRequest, cb?: (error: string, rep: DescribeFileUrlsResponse) => void): Promise<DescribeFileUrlsResponse>;
    /**
     * 该接口为第三方平台向电子签平台获取慧眼H5人脸核身Url
     */
    CreateH5FaceIdUrl(req: CreateH5FaceIdUrlRequest, cb?: (error: string, rep: CreateH5FaceIdUrlResponse) => void): Promise<CreateH5FaceIdUrlResponse>;
    /**
     * 第三方应用可通过此接口（DescribeFlowApprovers）查询流程参与者信息。
     */
    DescribeFlowApprovers(req: DescribeFlowApproversRequest, cb?: (error: string, rep: DescribeFlowApproversResponse) => void): Promise<DescribeFlowApproversResponse>;
    /**
     * 该接口为第三方平台向电子签平台验证银行卡四要素
     */
    CheckBankCard4EVerification(req: CheckBankCard4EVerificationRequest, cb?: (error: string, rep: CheckBankCard4EVerificationResponse) => void): Promise<CheckBankCard4EVerificationResponse>;
    /**
     * 此接口 (DeleteSeal) 用于删除指定ID的印章。

注意：默认印章不支持删除
     */
    DeleteSeal(req: DeleteSealRequest, cb?: (error: string, rep: DeleteSealResponse) => void): Promise<DeleteSealResponse>;
    /**
     * 此接口（CreateSignUrl）用于生成指定用户的签署URL。

注：调用此接口前，请确保您已提前调用了发送流程接口（SendFlow）指定相关签署方。
     */
    CreateSignUrl(req: CreateSignUrlRequest, cb?: (error: string, rep: CreateSignUrlResponse) => void): Promise<CreateSignUrlResponse>;
    /**
     * 此接口（DescribeUsers）用于查询应用号下的个人用户信息。

注：此接口仅可查询您所属机构应用号创建的个人用户信息，不可跨应用/跨机构查询。
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * 发送流程并获取签署URL
     */
    SendFlowUrl(req: SendFlowUrlRequest, cb?: (error: string, rep: SendFlowUrlResponse) => void): Promise<SendFlowUrlResponse>;
    /**
     * 此接口用于发送签署验证码
     */
    SendSignInnerVerifyCode(req: SendSignInnerVerifyCodeRequest, cb?: (error: string, rep: SendSignInnerVerifyCodeResponse) => void): Promise<SendSignInnerVerifyCodeResponse>;
    /**
     * 查询流程文件
     */
    DescribeFlowFiles(req: DescribeFlowFilesRequest, cb?: (error: string, rep: DescribeFlowFilesResponse) => void): Promise<DescribeFlowFilesResponse>;
    /**
     * 此接口（CreateSeal）用于创建个人/企业印章。

注意：使用FileId参数指定印章，需先调用多文件上传 (UploadFiles) 上传印章图片。
     */
    CreateSeal(req: CreateSealRequest, cb?: (error: string, rep: CreateSealResponse) => void): Promise<CreateSealResponse>;
    /**
     * 此接口 (ModifyUserDefaultSeal) 用于重新指定个人默认印章。
     */
    ModifyUserDefaultSeal(req: ModifyUserDefaultSealRequest, cb?: (error: string, rep: ModifyUserDefaultSealResponse) => void): Promise<ModifyUserDefaultSealResponse>;
    /**
     * 此接口（CreatePreviewSignUrl）用于生成生成预览签署URL。

注：调用此接口前，请确保您已提前调用了发送流程接口（SendFlow）指定相关签署方。
     */
    CreatePreviewSignUrl(req: CreatePreviewSignUrlRequest, cb?: (error: string, rep: CreatePreviewSignUrlResponse) => void): Promise<CreatePreviewSignUrlResponse>;
    /**
     * 此接口用于确认验证码是否正确
     */
    CheckVerifyCodeMatchFlowId(req: CheckVerifyCodeMatchFlowIdRequest, cb?: (error: string, rep: CheckVerifyCodeMatchFlowIdResponse) => void): Promise<CheckVerifyCodeMatchFlowIdResponse>;
    /**
     * 该接口为第三方平台向电子签平台检测慧眼或腾讯电子签小程序人脸核身结果
     */
    CheckFaceIdentify(req: CheckFaceIdentifyRequest, cb?: (error: string, rep: CheckFaceIdentifyResponse) => void): Promise<CheckFaceIdentifyResponse>;
    /**
     * 此接口（GenerateUserSeal）用于生成个人签名图片。

注意：
1. 个人签名由用户注册时预留的姓名信息生成，不支持自定义签名内容。
2. 个人用户仅支持拥有一个系统生成的电子签名。
     */
    GenerateUserSeal(req: GenerateUserSealRequest, cb?: (error: string, rep: GenerateUserSealResponse) => void): Promise<GenerateUserSealResponse>;
    /**
     * 此接口（UploadFiles）用于文件上传。
     */
    UploadFiles(req: UploadFilesRequest, cb?: (error: string, rep: UploadFilesResponse) => void): Promise<UploadFilesResponse>;
    /**
     * 此接口（DescribeCustomFlowIds）用于通过自定义流程id来查询对应的电子签流程id
     */
    DescribeCustomFlowIds(req: DescribeCustomFlowIdsRequest, cb?: (error: string, rep: DescribeCustomFlowIdsResponse) => void): Promise<DescribeCustomFlowIdsResponse>;
    /**
     * 此接口（CreateSubOrganizationAndSeal）用于注册子机构，同时系统将为该子企业自动生成一个默认电子印章图片。

注意：
1. 在后续的签署流程中，若未指定签署使用的印章ID，则默认调用自动生成的印章图片进行签署。
2. 此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     */
    CreateSubOrganizationAndSeal(req: CreateSubOrganizationAndSealRequest, cb?: (error: string, rep: CreateSubOrganizationAndSealResponse) => void): Promise<CreateSubOrganizationAndSealResponse>;
    /**
     * 通过此接口（DescribeFlow）可查询签署流程的详细信息。
     */
    DescribeFlow(req: DescribeFlowRequest, cb?: (error: string, rep: DescribeFlowResponse) => void): Promise<DescribeFlowResponse>;
    /**
     * 此接口（CreateFlowByFiles）用于通过PDF文件创建签署流程。

注意：调用此接口前，请先调用多文件上传接口 (UploadFiles)，提前上传合同文件。
     */
    CreateFlowByFiles(req: CreateFlowByFilesRequest, cb?: (error: string, rep: CreateFlowByFilesResponse) => void): Promise<CreateFlowByFilesResponse>;
    /**
     * 第三方应用可通过此接口（DescribeCatalogApprovers）查询指定目录的参与者列表
     */
    DescribeCatalogApprovers(req: DescribeCatalogApproversRequest, cb?: (error: string, rep: DescribeCatalogApproversResponse) => void): Promise<DescribeCatalogApproversResponse>;
    /**
     * 此接口（DescribeSubOrganizations）用于查询子机构信息。

注：此接口仅可查询您所属机构应用号创建的子机构信息，不可跨应用/跨机构查询。
     */
    DescribeSubOrganizations(req: DescribeSubOrganizationsRequest, cb?: (error: string, rep: DescribeSubOrganizationsResponse) => void): Promise<DescribeSubOrganizationsResponse>;
    /**
     * 该接口为第三方平台向电子签平台验证银行卡二要素
     */
    CheckBankCard2EVerification(req: CheckBankCard2EVerificationRequest, cb?: (error: string, rep: CheckBankCard2EVerificationResponse) => void): Promise<CheckBankCard2EVerificationResponse>;
    /**
     * 此接口（ArchiveFlow）用于流程的归档。

注意：归档后的流程不可再进行发送、签署、拒签、撤回等一系列操作。
     */
    ArchiveFlow(req: ArchiveFlowRequest, cb?: (error: string, rep: ArchiveFlowResponse) => void): Promise<ArchiveFlowResponse>;
    /**
     * 该接口为第三方平台向电子签平台验证手机号二要素
     */
    CheckMobileAndName(req: CheckMobileAndNameRequest, cb?: (error: string, rep: CheckMobileAndNameResponse) => void): Promise<CheckMobileAndNameResponse>;
    /**
     * 生成企业电子印章
     */
    GenerateOrganizationSeal(req: GenerateOrganizationSealRequest, cb?: (error: string, rep: GenerateOrganizationSealResponse) => void): Promise<GenerateOrganizationSealResponse>;
    /**
     * 此接口（ModifySubOrganizationInfo）用于更新子机构信息。

注：若修改子机构名称或更新机构证件照片，需要重新通过子机构实名接口（VerifySubOrganization）进行重新实名。
     */
    ModifySubOrganizationInfo(req: ModifySubOrganizationInfoRequest, cb?: (error: string, rep: ModifySubOrganizationInfoResponse) => void): Promise<ModifySubOrganizationInfoResponse>;
    /**
     * 第三方应用可通过此接口（CreateUserAndSeal）注册腾讯电子签实名个人用户，同时系统将为该用户自动生成一个默认电子签名图片。

注意：
1. 在后续的签署流程中，若未指定签署使用的印章ID，则默认调用自动生成的签名图片进行签署。
2. 此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     */
    CreateUserAndSeal(req: CreateUserAndSealRequest, cb?: (error: string, rep: CreateUserAndSealResponse) => void): Promise<CreateUserAndSealResponse>;
    /**
     * 通过此接口（DestroyFlowFile）可删除指定流程中的合同文件。

注：调用此接口前，请确保此流程已属于归档状态。您可通过查询流程信息接口（DescribeFlow）进行查询。
     */
    DestroyFlowFile(req: DestroyFlowFileRequest, cb?: (error: string, rep: DestroyFlowFileResponse) => void): Promise<DestroyFlowFileResponse>;
    /**
     * 此接口（ModifySeal）用于修改指定印章ID的印章图片和名称。

注：印章类型暂不支持修改，如需调整，请联系客服经理或通过创建印章接口（CreateSeal）进行创建新印章。
     */
    ModifySeal(req: ModifySealRequest, cb?: (error: string, rep: ModifySealResponse) => void): Promise<ModifySealResponse>;
    /**
     * 根据用户自定义id查询文件id
     */
    DescribeFileIdsByCustomIds(req: DescribeFileIdsByCustomIdsRequest, cb?: (error: string, rep: DescribeFileIdsByCustomIdsResponse) => void): Promise<DescribeFileIdsByCustomIdsResponse>;
    /**
     * 此接口（SignFlow）可用于对流程文件进行签署。
     */
    SignFlow(req: SignFlowRequest, cb?: (error: string, rep: SignFlowResponse) => void): Promise<SignFlowResponse>;
    /**
     * 该接口为第三方平台向电子签平台获取慧眼人脸核身结果
     */
    DescribeFaceIdResults(req: DescribeFaceIdResultsRequest, cb?: (error: string, rep: DescribeFaceIdResultsResponse) => void): Promise<DescribeFaceIdResultsResponse>;
    /**
     * 第三方应用可通过此接口（DescribeCatalogSignComponents）拉取目录签署区
     */
    DescribeCatalogSignComponents(req: DescribeCatalogSignComponentsRequest, cb?: (error: string, rep: DescribeCatalogSignComponentsResponse) => void): Promise<DescribeCatalogSignComponentsResponse>;
    /**
     * 此接口（RejectFlow）用于用户拒绝签署合同流程。
     */
    RejectFlow(req: RejectFlowRequest, cb?: (error: string, rep: RejectFlowResponse) => void): Promise<RejectFlowResponse>;
    /**
     * 此接口（ModifyUser）用于更新个人用户信息。

注：若修改用户姓名，需要重新通过个人用户实名接口（VerifyUser）进行重新实名。
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 此接口（VerifySubOrganization）用于通过子机构的实名认证。

注：此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     */
    VerifySubOrganization(req: VerifySubOrganizationRequest, cb?: (error: string, rep: VerifySubOrganizationResponse) => void): Promise<VerifySubOrganizationResponse>;
    /**
     * 第三方应用可通过此接口（VerifyUser）将腾讯电子签个人用户的实名认证状态设为通过。

注：此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     */
    VerifyUser(req: VerifyUserRequest, cb?: (error: string, rep: VerifyUserResponse) => void): Promise<VerifyUserResponse>;
    /**
     * 此接口（DescribeCustomFlowIdsByFlowId）用于根据流程id反查自定义流程id
     */
    DescribeCustomFlowIdsByFlowId(req: DescribeCustomFlowIdsByFlowIdRequest, cb?: (error: string, rep: DescribeCustomFlowIdsByFlowIdResponse) => void): Promise<DescribeCustomFlowIdsByFlowIdResponse>;
    /**
     * 该接口为第三方平台向电子签平台获取慧眼人脸核身照片
     */
    DescribeFaceIdPhotos(req: DescribeFaceIdPhotosRequest, cb?: (error: string, rep: DescribeFaceIdPhotosResponse) => void): Promise<DescribeFaceIdPhotosResponse>;
    /**
     * 该接口为第三方平台向电子签平台获取慧眼慧眼API签名
     */
    CreateFaceIdSign(req: CreateFaceIdSignRequest, cb?: (error: string, rep: CreateFaceIdSignResponse) => void): Promise<CreateFaceIdSignResponse>;
    /**
     * 该接口为第三方平台向电子签平台验证姓名和身份证信息
     */
    CheckIdCardVerification(req: CheckIdCardVerificationRequest, cb?: (error: string, rep: CheckIdCardVerificationResponse) => void): Promise<CheckIdCardVerificationResponse>;
    /**
     * 该接口为第三方平台向电子签平台验证银行卡三要素
     */
    CheckBankCard3EVerification(req: CheckBankCard3EVerificationRequest, cb?: (error: string, rep: CheckBankCard3EVerificationResponse) => void): Promise<CheckBankCard3EVerificationResponse>;
    /**
     * 此接口（SendFlow）用于指定签署者及签署内容，后续可通过生成签署接口（CreateSignUrl）获取签署url。
     */
    SendFlow(req: SendFlowRequest, cb?: (error: string, rep: SendFlowResponse) => void): Promise<SendFlowResponse>;
    /**
     * 此接口（CreateUser）用于注册腾讯电子签个人用户。
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 此接口 (ModifyOrganizationDefaultSeal) 用于重新指定企业默认印章。
     */
    ModifyOrganizationDefaultSeal(req: ModifyOrganizationDefaultSealRequest, cb?: (error: string, rep: ModifyOrganizationDefaultSealResponse) => void): Promise<ModifyOrganizationDefaultSealResponse>;
    /**
     * 此接口（DescribeSeals）用于查询指定ID的印章信息。
     */
    DescribeSeals(req: DescribeSealsRequest, cb?: (error: string, rep: DescribeSealsResponse) => void): Promise<DescribeSealsResponse>;
    /**
     * 该接口为第三方平台向电子签平台验证银行卡二/三/四要素
银行卡二要素(同CheckBankCard2EVerification): bank_card + name
银行卡三要素(同CheckBankCard3EVerification): bank_card + name + id_card_number
银行卡四要素(同CheckBankCard4EVerification): bank_card + name + id_card_number + mobile
     */
    CheckBankCardVerification(req: CheckBankCardVerificationRequest, cb?: (error: string, rep: CheckBankCardVerificationResponse) => void): Promise<CheckBankCardVerificationResponse>;
    /**
     * 此接口（CreateServerFlowSign）用于静默签署文件。

注：
1、此接口为白名单接口，调用前请提前与客服经理或邮件至e-contract@tencent.com进行联系。
2、仅合同发起者可使用流程静默签署能力。
     */
    CreateServerFlowSign(req: CreateServerFlowSignRequest, cb?: (error: string, rep: CreateServerFlowSignResponse) => void): Promise<CreateServerFlowSignResponse>;
}
