/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeFaceIdResultsRequest = models.DescribeFaceIdResultsRequest;
const CreateSubOrganizationRequest = models.CreateSubOrganizationRequest;
const Component = models.Component;
const CreateSealRequest = models.CreateSealRequest;
const CancelFlowResponse = models.CancelFlowResponse;
const FaceIdPhoto = models.FaceIdPhoto;
const VerifySubOrganizationRequest = models.VerifySubOrganizationRequest;
const VerifyUserRequest = models.VerifyUserRequest;
const DescribeFaceIdPhotosResponse = models.DescribeFaceIdPhotosResponse;
const CheckVerifyCodeMatchFlowIdRequest = models.CheckVerifyCodeMatchFlowIdRequest;
const CheckBankCard2EVerificationRequest = models.CheckBankCard2EVerificationRequest;
const DescribeFileIdsByCustomIdsResponse = models.DescribeFileIdsByCustomIdsResponse;
const ModifySubOrganizationInfoResponse = models.ModifySubOrganizationInfoResponse;
const DescribeCatalogApproversRequest = models.DescribeCatalogApproversRequest;
const CheckFaceIdentifyRequest = models.CheckFaceIdentifyRequest;
const CreateServerFlowSignResponse = models.CreateServerFlowSignResponse;
const ModifyUserResponse = models.ModifyUserResponse;
const CheckBankCard4EVerificationResponse = models.CheckBankCard4EVerificationResponse;
const DescribeFileUrlsRequest = models.DescribeFileUrlsRequest;
const FlowFileInfo = models.FlowFileInfo;
const SmsTemplate = models.SmsTemplate;
const Address = models.Address;
const ModifyUserDefaultSealRequest = models.ModifyUserDefaultSealRequest;
const GenerateUserSealRequest = models.GenerateUserSealRequest;
const CheckIdCardVerificationResponse = models.CheckIdCardVerificationResponse;
const DescribeFlowResponse = models.DescribeFlowResponse;
const CreateSubOrganizationAndSealRequest = models.CreateSubOrganizationAndSealRequest;
const CheckMobileVerificationRequest = models.CheckMobileVerificationRequest;
const SendFlowUrlResponse = models.SendFlowUrlResponse;
const DescribeCatalogApproversResponse = models.DescribeCatalogApproversResponse;
const CustomFileIdMap = models.CustomFileIdMap;
const SendFlowResponse = models.SendFlowResponse;
const CatalogApprovers = models.CatalogApprovers;
const DescribeSealsRequest = models.DescribeSealsRequest;
const FlowApproverInfo = models.FlowApproverInfo;
const DescribeFlowFilesRequest = models.DescribeFlowFilesRequest;
const DescribeCustomFlowIdsResponse = models.DescribeCustomFlowIdsResponse;
const SubOrganizationDetail = models.SubOrganizationDetail;
const CheckIdCardVerificationRequest = models.CheckIdCardVerificationRequest;
const CreateSignUrlResponse = models.CreateSignUrlResponse;
const ModifySubOrganizationInfoRequest = models.ModifySubOrganizationInfoRequest;
const SendSignInnerVerifyCodeResponse = models.SendSignInnerVerifyCodeResponse;
const DescribeFaceIdPhotosRequest = models.DescribeFaceIdPhotosRequest;
const FileUrl = models.FileUrl;
const CreateUserResponse = models.CreateUserResponse;
const CheckVerifyCodeMatchFlowIdResponse = models.CheckVerifyCodeMatchFlowIdResponse;
const ModifyOrganizationDefaultSealRequest = models.ModifyOrganizationDefaultSealRequest;
const CreateFaceIdSignResponse = models.CreateFaceIdSignResponse;
const DescribeFlowApproversResponse = models.DescribeFlowApproversResponse;
const CheckMobileAndNameRequest = models.CheckMobileAndNameRequest;
const DeleteSealRequest = models.DeleteSealRequest;
const CheckBankCardVerificationResponse = models.CheckBankCardVerificationResponse;
const ArchiveFlowRequest = models.ArchiveFlowRequest;
const CreateUserAndSealResponse = models.CreateUserAndSealResponse;
const FaceIdResult = models.FaceIdResult;
const CreateSignUrlRequest = models.CreateSignUrlRequest;
const ComponentSeal = models.ComponentSeal;
const DeleteSealResponse = models.DeleteSealResponse;
const UploadFilesRequest = models.UploadFilesRequest;
const DescribeUsersRequest = models.DescribeUsersRequest;
const CreateFlowByFilesRequest = models.CreateFlowByFilesRequest;
const CatalogComponents = models.CatalogComponents;
const ArchiveFlowResponse = models.ArchiveFlowResponse;
const FlowInfo = models.FlowInfo;
const UserDescribe = models.UserDescribe;
const CheckBankCard2EVerificationResponse = models.CheckBankCard2EVerificationResponse;
const VerifySubOrganizationResponse = models.VerifySubOrganizationResponse;
const DescribeSealsResponse = models.DescribeSealsResponse;
const DescribeFileUrlsResponse = models.DescribeFileUrlsResponse;
const ModifySealRequest = models.ModifySealRequest;
const CheckBankCard3EVerificationRequest = models.CheckBankCard3EVerificationRequest;
const CheckBankCardVerificationRequest = models.CheckBankCardVerificationRequest;
const RejectFlowRequest = models.RejectFlowRequest;
const DescribeSubOrganizationsRequest = models.DescribeSubOrganizationsRequest;
const SignSeal = models.SignSeal;
const DescribeCatalogSignComponentsRequest = models.DescribeCatalogSignComponentsRequest;
const ModifyOrganizationDefaultSealResponse = models.ModifyOrganizationDefaultSealResponse;
const CreateFlowByFilesResponse = models.CreateFlowByFilesResponse;
const ModifyUserDefaultSealResponse = models.ModifyUserDefaultSealResponse;
const UploadFilesResponse = models.UploadFilesResponse;
const CheckBankCard3EVerificationResponse = models.CheckBankCard3EVerificationResponse;
const SignFlowRequest = models.SignFlowRequest;
const CustomFlowIdMap = models.CustomFlowIdMap;
const DescribeCustomFlowIdsByFlowIdRequest = models.DescribeCustomFlowIdsByFlowIdRequest;
const UploadFile = models.UploadFile;
const DescribeUsersResponse = models.DescribeUsersResponse;
const CreateH5FaceIdUrlRequest = models.CreateH5FaceIdUrlRequest;
const CheckMobileVerificationResponse = models.CheckMobileVerificationResponse;
const DescribeFlowFilesResponse = models.DescribeFlowFilesResponse;
const CreateUserRequest = models.CreateUserRequest;
const CreatePreviewSignUrlRequest = models.CreatePreviewSignUrlRequest;
const CreateUserAndSealRequest = models.CreateUserAndSealRequest;
const CreatePreviewSignUrlResponse = models.CreatePreviewSignUrlResponse;
const CreateFaceIdSignRequest = models.CreateFaceIdSignRequest;
const DescribeCustomFlowIdsByFlowIdResponse = models.DescribeCustomFlowIdsByFlowIdResponse;
const SignFlowResponse = models.SignFlowResponse;
const RejectFlowResponse = models.RejectFlowResponse;
const DescribeFlowRequest = models.DescribeFlowRequest;
const DescribeFileIdsByCustomIdsRequest = models.DescribeFileIdsByCustomIdsRequest;
const CreateSealResponse = models.CreateSealResponse;
const GenerateOrganizationSealResponse = models.GenerateOrganizationSealResponse;
const DescribeSubOrganizationsResponse = models.DescribeSubOrganizationsResponse;
const DestroyFlowFileRequest = models.DestroyFlowFileRequest;
const CheckFaceIdentifyResponse = models.CheckFaceIdentifyResponse;
const Seal = models.Seal;
const SendFlowUrlRequest = models.SendFlowUrlRequest;
const CancelFlowRequest = models.CancelFlowRequest;
const CreateH5FaceIdUrlResponse = models.CreateH5FaceIdUrlResponse;
const DescribeCustomFlowIdsRequest = models.DescribeCustomFlowIdsRequest;
const DescribeFlowApproversRequest = models.DescribeFlowApproversRequest;
const DescribeFaceIdResultsResponse = models.DescribeFaceIdResultsResponse;
const CheckBankCard4EVerificationRequest = models.CheckBankCard4EVerificationRequest;
const GenerateUserSealResponse = models.GenerateUserSealResponse;
const DescribeCatalogSignComponentsResponse = models.DescribeCatalogSignComponentsResponse;
const GenerateOrganizationSealRequest = models.GenerateOrganizationSealRequest;
const CreateServerFlowSignRequest = models.CreateServerFlowSignRequest;
const Caller = models.Caller;
const VerifyUserResponse = models.VerifyUserResponse;
const SendFlowRequest = models.SendFlowRequest;
const SendSignInnerVerifyCodeRequest = models.SendSignInnerVerifyCodeRequest;
const DestroyFlowFileResponse = models.DestroyFlowFileResponse;
const CreateSubOrganizationResponse = models.CreateSubOrganizationResponse;
const CreateSubOrganizationAndSealResponse = models.CreateSubOrganizationAndSealResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const CheckMobileAndNameResponse = models.CheckMobileAndNameResponse;
const ModifySealResponse = models.ModifySealResponse;


/**
 * essbasic client
 * @class
 */
class EssbasicClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("essbasic.tencentcloudapi.com", "2020-12-22", credential, region, profile);
    }
    
    /**
     * 该接口为第三方平台向电子签平台验证手机号三要素
     * @param {CheckMobileVerificationRequest} req
     * @param {function(string, CheckMobileVerificationResponse):void} cb
     * @public
     */
    CheckMobileVerification(req, cb) {
        let resp = new CheckMobileVerificationResponse();
        this.request("CheckMobileVerification", req, resp, cb);
    }

    /**
     * 此接口（CreateSubOrganization）用于在腾讯电子签内注册子机构。
     * @param {CreateSubOrganizationRequest} req
     * @param {function(string, CreateSubOrganizationResponse):void} cb
     * @public
     */
    CreateSubOrganization(req, cb) {
        let resp = new CreateSubOrganizationResponse();
        this.request("CreateSubOrganization", req, resp, cb);
    }

    /**
     * 此接口（CancelFlow）用于撤销正在进行中的流程。

注：已归档流程不可完成撤销动作。
     * @param {CancelFlowRequest} req
     * @param {function(string, CancelFlowResponse):void} cb
     * @public
     */
    CancelFlow(req, cb) {
        let resp = new CancelFlowResponse();
        this.request("CancelFlow", req, resp, cb);
    }

    /**
     * 此接口（DescribeFileUrls）用于获取签署文件下载的URL。
     * @param {DescribeFileUrlsRequest} req
     * @param {function(string, DescribeFileUrlsResponse):void} cb
     * @public
     */
    DescribeFileUrls(req, cb) {
        let resp = new DescribeFileUrlsResponse();
        this.request("DescribeFileUrls", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台获取慧眼H5人脸核身Url
     * @param {CreateH5FaceIdUrlRequest} req
     * @param {function(string, CreateH5FaceIdUrlResponse):void} cb
     * @public
     */
    CreateH5FaceIdUrl(req, cb) {
        let resp = new CreateH5FaceIdUrlResponse();
        this.request("CreateH5FaceIdUrl", req, resp, cb);
    }

    /**
     * 第三方应用可通过此接口（DescribeFlowApprovers）查询流程参与者信息。
     * @param {DescribeFlowApproversRequest} req
     * @param {function(string, DescribeFlowApproversResponse):void} cb
     * @public
     */
    DescribeFlowApprovers(req, cb) {
        let resp = new DescribeFlowApproversResponse();
        this.request("DescribeFlowApprovers", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台验证银行卡四要素
     * @param {CheckBankCard4EVerificationRequest} req
     * @param {function(string, CheckBankCard4EVerificationResponse):void} cb
     * @public
     */
    CheckBankCard4EVerification(req, cb) {
        let resp = new CheckBankCard4EVerificationResponse();
        this.request("CheckBankCard4EVerification", req, resp, cb);
    }

    /**
     * 此接口 (DeleteSeal) 用于删除指定ID的印章。

注意：默认印章不支持删除
     * @param {DeleteSealRequest} req
     * @param {function(string, DeleteSealResponse):void} cb
     * @public
     */
    DeleteSeal(req, cb) {
        let resp = new DeleteSealResponse();
        this.request("DeleteSeal", req, resp, cb);
    }

    /**
     * 此接口（CreateSignUrl）用于生成指定用户的签署URL。

注：调用此接口前，请确保您已提前调用了发送流程接口（SendFlow）指定相关签署方。
     * @param {CreateSignUrlRequest} req
     * @param {function(string, CreateSignUrlResponse):void} cb
     * @public
     */
    CreateSignUrl(req, cb) {
        let resp = new CreateSignUrlResponse();
        this.request("CreateSignUrl", req, resp, cb);
    }

    /**
     * 此接口（DescribeUsers）用于查询应用号下的个人用户信息。

注：此接口仅可查询您所属机构应用号创建的个人用户信息，不可跨应用/跨机构查询。
     * @param {DescribeUsersRequest} req
     * @param {function(string, DescribeUsersResponse):void} cb
     * @public
     */
    DescribeUsers(req, cb) {
        let resp = new DescribeUsersResponse();
        this.request("DescribeUsers", req, resp, cb);
    }

    /**
     * 发送流程并获取签署URL
     * @param {SendFlowUrlRequest} req
     * @param {function(string, SendFlowUrlResponse):void} cb
     * @public
     */
    SendFlowUrl(req, cb) {
        let resp = new SendFlowUrlResponse();
        this.request("SendFlowUrl", req, resp, cb);
    }

    /**
     * 此接口用于发送签署验证码
     * @param {SendSignInnerVerifyCodeRequest} req
     * @param {function(string, SendSignInnerVerifyCodeResponse):void} cb
     * @public
     */
    SendSignInnerVerifyCode(req, cb) {
        let resp = new SendSignInnerVerifyCodeResponse();
        this.request("SendSignInnerVerifyCode", req, resp, cb);
    }

    /**
     * 查询流程文件
     * @param {DescribeFlowFilesRequest} req
     * @param {function(string, DescribeFlowFilesResponse):void} cb
     * @public
     */
    DescribeFlowFiles(req, cb) {
        let resp = new DescribeFlowFilesResponse();
        this.request("DescribeFlowFiles", req, resp, cb);
    }

    /**
     * 此接口（CreateSeal）用于创建个人/企业印章。

注意：使用FileId参数指定印章，需先调用多文件上传 (UploadFiles) 上传印章图片。
     * @param {CreateSealRequest} req
     * @param {function(string, CreateSealResponse):void} cb
     * @public
     */
    CreateSeal(req, cb) {
        let resp = new CreateSealResponse();
        this.request("CreateSeal", req, resp, cb);
    }

    /**
     * 此接口 (ModifyUserDefaultSeal) 用于重新指定个人默认印章。
     * @param {ModifyUserDefaultSealRequest} req
     * @param {function(string, ModifyUserDefaultSealResponse):void} cb
     * @public
     */
    ModifyUserDefaultSeal(req, cb) {
        let resp = new ModifyUserDefaultSealResponse();
        this.request("ModifyUserDefaultSeal", req, resp, cb);
    }

    /**
     * 此接口（CreatePreviewSignUrl）用于生成生成预览签署URL。

注：调用此接口前，请确保您已提前调用了发送流程接口（SendFlow）指定相关签署方。
     * @param {CreatePreviewSignUrlRequest} req
     * @param {function(string, CreatePreviewSignUrlResponse):void} cb
     * @public
     */
    CreatePreviewSignUrl(req, cb) {
        let resp = new CreatePreviewSignUrlResponse();
        this.request("CreatePreviewSignUrl", req, resp, cb);
    }

    /**
     * 此接口用于确认验证码是否正确
     * @param {CheckVerifyCodeMatchFlowIdRequest} req
     * @param {function(string, CheckVerifyCodeMatchFlowIdResponse):void} cb
     * @public
     */
    CheckVerifyCodeMatchFlowId(req, cb) {
        let resp = new CheckVerifyCodeMatchFlowIdResponse();
        this.request("CheckVerifyCodeMatchFlowId", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台检测慧眼或腾讯电子签小程序人脸核身结果
     * @param {CheckFaceIdentifyRequest} req
     * @param {function(string, CheckFaceIdentifyResponse):void} cb
     * @public
     */
    CheckFaceIdentify(req, cb) {
        let resp = new CheckFaceIdentifyResponse();
        this.request("CheckFaceIdentify", req, resp, cb);
    }

    /**
     * 此接口（GenerateUserSeal）用于生成个人签名图片。

注意：
1. 个人签名由用户注册时预留的姓名信息生成，不支持自定义签名内容。
2. 个人用户仅支持拥有一个系统生成的电子签名。
     * @param {GenerateUserSealRequest} req
     * @param {function(string, GenerateUserSealResponse):void} cb
     * @public
     */
    GenerateUserSeal(req, cb) {
        let resp = new GenerateUserSealResponse();
        this.request("GenerateUserSeal", req, resp, cb);
    }

    /**
     * 此接口（UploadFiles）用于文件上传。
     * @param {UploadFilesRequest} req
     * @param {function(string, UploadFilesResponse):void} cb
     * @public
     */
    UploadFiles(req, cb) {
        let resp = new UploadFilesResponse();
        this.request("UploadFiles", req, resp, cb);
    }

    /**
     * 此接口（DescribeCustomFlowIds）用于通过自定义流程id来查询对应的电子签流程id
     * @param {DescribeCustomFlowIdsRequest} req
     * @param {function(string, DescribeCustomFlowIdsResponse):void} cb
     * @public
     */
    DescribeCustomFlowIds(req, cb) {
        let resp = new DescribeCustomFlowIdsResponse();
        this.request("DescribeCustomFlowIds", req, resp, cb);
    }

    /**
     * 此接口（CreateSubOrganizationAndSeal）用于注册子机构，同时系统将为该子企业自动生成一个默认电子印章图片。

注意：
1. 在后续的签署流程中，若未指定签署使用的印章ID，则默认调用自动生成的印章图片进行签署。
2. 此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     * @param {CreateSubOrganizationAndSealRequest} req
     * @param {function(string, CreateSubOrganizationAndSealResponse):void} cb
     * @public
     */
    CreateSubOrganizationAndSeal(req, cb) {
        let resp = new CreateSubOrganizationAndSealResponse();
        this.request("CreateSubOrganizationAndSeal", req, resp, cb);
    }

    /**
     * 通过此接口（DescribeFlow）可查询签署流程的详细信息。
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        let resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }

    /**
     * 此接口（CreateFlowByFiles）用于通过PDF文件创建签署流程。

注意：调用此接口前，请先调用多文件上传接口 (UploadFiles)，提前上传合同文件。
     * @param {CreateFlowByFilesRequest} req
     * @param {function(string, CreateFlowByFilesResponse):void} cb
     * @public
     */
    CreateFlowByFiles(req, cb) {
        let resp = new CreateFlowByFilesResponse();
        this.request("CreateFlowByFiles", req, resp, cb);
    }

    /**
     * 第三方应用可通过此接口（DescribeCatalogApprovers）查询指定目录的参与者列表
     * @param {DescribeCatalogApproversRequest} req
     * @param {function(string, DescribeCatalogApproversResponse):void} cb
     * @public
     */
    DescribeCatalogApprovers(req, cb) {
        let resp = new DescribeCatalogApproversResponse();
        this.request("DescribeCatalogApprovers", req, resp, cb);
    }

    /**
     * 此接口（DescribeSubOrganizations）用于查询子机构信息。

注：此接口仅可查询您所属机构应用号创建的子机构信息，不可跨应用/跨机构查询。
     * @param {DescribeSubOrganizationsRequest} req
     * @param {function(string, DescribeSubOrganizationsResponse):void} cb
     * @public
     */
    DescribeSubOrganizations(req, cb) {
        let resp = new DescribeSubOrganizationsResponse();
        this.request("DescribeSubOrganizations", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台验证银行卡二要素
     * @param {CheckBankCard2EVerificationRequest} req
     * @param {function(string, CheckBankCard2EVerificationResponse):void} cb
     * @public
     */
    CheckBankCard2EVerification(req, cb) {
        let resp = new CheckBankCard2EVerificationResponse();
        this.request("CheckBankCard2EVerification", req, resp, cb);
    }

    /**
     * 此接口（ArchiveFlow）用于流程的归档。

注意：归档后的流程不可再进行发送、签署、拒签、撤回等一系列操作。
     * @param {ArchiveFlowRequest} req
     * @param {function(string, ArchiveFlowResponse):void} cb
     * @public
     */
    ArchiveFlow(req, cb) {
        let resp = new ArchiveFlowResponse();
        this.request("ArchiveFlow", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台验证手机号二要素
     * @param {CheckMobileAndNameRequest} req
     * @param {function(string, CheckMobileAndNameResponse):void} cb
     * @public
     */
    CheckMobileAndName(req, cb) {
        let resp = new CheckMobileAndNameResponse();
        this.request("CheckMobileAndName", req, resp, cb);
    }

    /**
     * 生成企业电子印章
     * @param {GenerateOrganizationSealRequest} req
     * @param {function(string, GenerateOrganizationSealResponse):void} cb
     * @public
     */
    GenerateOrganizationSeal(req, cb) {
        let resp = new GenerateOrganizationSealResponse();
        this.request("GenerateOrganizationSeal", req, resp, cb);
    }

    /**
     * 此接口（ModifySubOrganizationInfo）用于更新子机构信息。

注：若修改子机构名称或更新机构证件照片，需要重新通过子机构实名接口（VerifySubOrganization）进行重新实名。
     * @param {ModifySubOrganizationInfoRequest} req
     * @param {function(string, ModifySubOrganizationInfoResponse):void} cb
     * @public
     */
    ModifySubOrganizationInfo(req, cb) {
        let resp = new ModifySubOrganizationInfoResponse();
        this.request("ModifySubOrganizationInfo", req, resp, cb);
    }

    /**
     * 第三方应用可通过此接口（CreateUserAndSeal）注册腾讯电子签实名个人用户，同时系统将为该用户自动生成一个默认电子签名图片。

注意：
1. 在后续的签署流程中，若未指定签署使用的印章ID，则默认调用自动生成的签名图片进行签署。
2. 此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     * @param {CreateUserAndSealRequest} req
     * @param {function(string, CreateUserAndSealResponse):void} cb
     * @public
     */
    CreateUserAndSeal(req, cb) {
        let resp = new CreateUserAndSealResponse();
        this.request("CreateUserAndSeal", req, resp, cb);
    }

    /**
     * 通过此接口（DestroyFlowFile）可删除指定流程中的合同文件。

注：调用此接口前，请确保此流程已属于归档状态。您可通过查询流程信息接口（DescribeFlow）进行查询。
     * @param {DestroyFlowFileRequest} req
     * @param {function(string, DestroyFlowFileResponse):void} cb
     * @public
     */
    DestroyFlowFile(req, cb) {
        let resp = new DestroyFlowFileResponse();
        this.request("DestroyFlowFile", req, resp, cb);
    }

    /**
     * 此接口（ModifySeal）用于修改指定印章ID的印章图片和名称。

注：印章类型暂不支持修改，如需调整，请联系客服经理或通过创建印章接口（CreateSeal）进行创建新印章。
     * @param {ModifySealRequest} req
     * @param {function(string, ModifySealResponse):void} cb
     * @public
     */
    ModifySeal(req, cb) {
        let resp = new ModifySealResponse();
        this.request("ModifySeal", req, resp, cb);
    }

    /**
     * 根据用户自定义id查询文件id
     * @param {DescribeFileIdsByCustomIdsRequest} req
     * @param {function(string, DescribeFileIdsByCustomIdsResponse):void} cb
     * @public
     */
    DescribeFileIdsByCustomIds(req, cb) {
        let resp = new DescribeFileIdsByCustomIdsResponse();
        this.request("DescribeFileIdsByCustomIds", req, resp, cb);
    }

    /**
     * 此接口（SignFlow）可用于对流程文件进行签署。
     * @param {SignFlowRequest} req
     * @param {function(string, SignFlowResponse):void} cb
     * @public
     */
    SignFlow(req, cb) {
        let resp = new SignFlowResponse();
        this.request("SignFlow", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台获取慧眼人脸核身结果
     * @param {DescribeFaceIdResultsRequest} req
     * @param {function(string, DescribeFaceIdResultsResponse):void} cb
     * @public
     */
    DescribeFaceIdResults(req, cb) {
        let resp = new DescribeFaceIdResultsResponse();
        this.request("DescribeFaceIdResults", req, resp, cb);
    }

    /**
     * 第三方应用可通过此接口（DescribeCatalogSignComponents）拉取目录签署区
     * @param {DescribeCatalogSignComponentsRequest} req
     * @param {function(string, DescribeCatalogSignComponentsResponse):void} cb
     * @public
     */
    DescribeCatalogSignComponents(req, cb) {
        let resp = new DescribeCatalogSignComponentsResponse();
        this.request("DescribeCatalogSignComponents", req, resp, cb);
    }

    /**
     * 此接口（RejectFlow）用于用户拒绝签署合同流程。
     * @param {RejectFlowRequest} req
     * @param {function(string, RejectFlowResponse):void} cb
     * @public
     */
    RejectFlow(req, cb) {
        let resp = new RejectFlowResponse();
        this.request("RejectFlow", req, resp, cb);
    }

    /**
     * 此接口（ModifyUser）用于更新个人用户信息。

注：若修改用户姓名，需要重新通过个人用户实名接口（VerifyUser）进行重新实名。
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * 此接口（VerifySubOrganization）用于通过子机构的实名认证。

注：此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     * @param {VerifySubOrganizationRequest} req
     * @param {function(string, VerifySubOrganizationResponse):void} cb
     * @public
     */
    VerifySubOrganization(req, cb) {
        let resp = new VerifySubOrganizationResponse();
        this.request("VerifySubOrganization", req, resp, cb);
    }

    /**
     * 第三方应用可通过此接口（VerifyUser）将腾讯电子签个人用户的实名认证状态设为通过。

注：此接口为白名单接口，如您需要使用此能力，请提前与客户经理沟通或邮件至e-contract@tencent.com与我们联系。
     * @param {VerifyUserRequest} req
     * @param {function(string, VerifyUserResponse):void} cb
     * @public
     */
    VerifyUser(req, cb) {
        let resp = new VerifyUserResponse();
        this.request("VerifyUser", req, resp, cb);
    }

    /**
     * 此接口（DescribeCustomFlowIdsByFlowId）用于根据流程id反查自定义流程id
     * @param {DescribeCustomFlowIdsByFlowIdRequest} req
     * @param {function(string, DescribeCustomFlowIdsByFlowIdResponse):void} cb
     * @public
     */
    DescribeCustomFlowIdsByFlowId(req, cb) {
        let resp = new DescribeCustomFlowIdsByFlowIdResponse();
        this.request("DescribeCustomFlowIdsByFlowId", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台获取慧眼人脸核身照片
     * @param {DescribeFaceIdPhotosRequest} req
     * @param {function(string, DescribeFaceIdPhotosResponse):void} cb
     * @public
     */
    DescribeFaceIdPhotos(req, cb) {
        let resp = new DescribeFaceIdPhotosResponse();
        this.request("DescribeFaceIdPhotos", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台获取慧眼慧眼API签名
     * @param {CreateFaceIdSignRequest} req
     * @param {function(string, CreateFaceIdSignResponse):void} cb
     * @public
     */
    CreateFaceIdSign(req, cb) {
        let resp = new CreateFaceIdSignResponse();
        this.request("CreateFaceIdSign", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台验证姓名和身份证信息
     * @param {CheckIdCardVerificationRequest} req
     * @param {function(string, CheckIdCardVerificationResponse):void} cb
     * @public
     */
    CheckIdCardVerification(req, cb) {
        let resp = new CheckIdCardVerificationResponse();
        this.request("CheckIdCardVerification", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台验证银行卡三要素
     * @param {CheckBankCard3EVerificationRequest} req
     * @param {function(string, CheckBankCard3EVerificationResponse):void} cb
     * @public
     */
    CheckBankCard3EVerification(req, cb) {
        let resp = new CheckBankCard3EVerificationResponse();
        this.request("CheckBankCard3EVerification", req, resp, cb);
    }

    /**
     * 此接口（SendFlow）用于指定签署者及签署内容，后续可通过生成签署接口（CreateSignUrl）获取签署url。
     * @param {SendFlowRequest} req
     * @param {function(string, SendFlowResponse):void} cb
     * @public
     */
    SendFlow(req, cb) {
        let resp = new SendFlowResponse();
        this.request("SendFlow", req, resp, cb);
    }

    /**
     * 此接口（CreateUser）用于注册腾讯电子签个人用户。
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * 此接口 (ModifyOrganizationDefaultSeal) 用于重新指定企业默认印章。
     * @param {ModifyOrganizationDefaultSealRequest} req
     * @param {function(string, ModifyOrganizationDefaultSealResponse):void} cb
     * @public
     */
    ModifyOrganizationDefaultSeal(req, cb) {
        let resp = new ModifyOrganizationDefaultSealResponse();
        this.request("ModifyOrganizationDefaultSeal", req, resp, cb);
    }

    /**
     * 此接口（DescribeSeals）用于查询指定ID的印章信息。
     * @param {DescribeSealsRequest} req
     * @param {function(string, DescribeSealsResponse):void} cb
     * @public
     */
    DescribeSeals(req, cb) {
        let resp = new DescribeSealsResponse();
        this.request("DescribeSeals", req, resp, cb);
    }

    /**
     * 该接口为第三方平台向电子签平台验证银行卡二/三/四要素
银行卡二要素(同CheckBankCard2EVerification): bank_card + name
银行卡三要素(同CheckBankCard3EVerification): bank_card + name + id_card_number
银行卡四要素(同CheckBankCard4EVerification): bank_card + name + id_card_number + mobile
     * @param {CheckBankCardVerificationRequest} req
     * @param {function(string, CheckBankCardVerificationResponse):void} cb
     * @public
     */
    CheckBankCardVerification(req, cb) {
        let resp = new CheckBankCardVerificationResponse();
        this.request("CheckBankCardVerification", req, resp, cb);
    }

    /**
     * 此接口（CreateServerFlowSign）用于静默签署文件。

注：
1、此接口为白名单接口，调用前请提前与客服经理或邮件至e-contract@tencent.com进行联系。
2、仅合同发起者可使用流程静默签署能力。
     * @param {CreateServerFlowSignRequest} req
     * @param {function(string, CreateServerFlowSignResponse):void} cb
     * @public
     */
    CreateServerFlowSign(req, cb) {
        let resp = new CreateServerFlowSignResponse();
        this.request("CreateServerFlowSign", req, resp, cb);
    }


}
module.exports = EssbasicClient;
