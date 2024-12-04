import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeVcubeApplicationAndLicenseRequest, CreateLicenseResponse, CreateApplicationAndVideoResponse, CreateApplicationAndBindLicenseResponse, ModifyFormalApplicationResponse, DescribeXMagicResourceListRequest, DescribeVcubeResourcesListRequest, DescribeTrialFeatureResponse, CreateTrialLicenseResponse, DescribeUserConfigResponse, RenewTestXMagicResponse, RenewVideoResponse, UpdateXMagicRequest, DescribeVcubeResourcesRequest, CreateLicenseRequest, CreateTrialApplicationAndLicenseRequest, ModifyFormalApplicationRequest, DescribeLicenseListRequest, DescribeSTSRequest, RenewLicenseRequest, RenewLicenseResponse, DescribeVcubeApplicationAndPlayListRequest, DescribeVcubeApplicationAndXMagicListRequest, DescribeVcubeResourcesListResponse, DescribeLicenseListResponse, ModifyApplicationResponse, ModifyXMagicRequest, DescribeVcubeResourcesResponse, DescribeNewsRequest, CreateTestXMagicResponse, DescribeUserConfigRequest, RenewTestXMagicRequest, UpdateXMagicResponse, ModifyLicenseRequest, CreateActivityLicenseResponse, UpdateTestXMagicResponse, CreateTrialApplicationAndLicenseResponse, DescribeXMagicResourceRequest, ModifyPresetApplicationResponse, CreateXMagicResponse, ModifyPresetApplicationRequest, DescribeNewsResponse, DescribeSTSResponse, DescribeXMagicResourceResponse, DescribeVcubeApplicationAndPlayListResponse, ModifyTrialLicenseResponse, UpdateTrialLicenseResponse, ModifyApplicationRequest, CreateXMagicRequest, RenewVideoRequest, CreateApplicationAndVideoRequest, DescribeVcubeApplicationAndLicenseResponse, CreateTestXMagicRequest, DescribeVcubeApplicationAndXMagicListResponse, CreateTrialLicenseRequest, DescribeFeatureListRequest, CreateActivityLicenseRequest, UpdateTrialLicenseRequest, UpdateTestXMagicRequest, ModifyLicenseResponse, CreateApplicationAndWebPlayerLicenseResponse, ModifyTrialLicenseRequest, ModifyXMagicResponse, CreateApplicationAndWebPlayerLicenseRequest, CreateApplicationAndBindLicenseRequest, DescribeFeatureListResponse, DescribeXMagicResourceListResponse, DescribeTrialFeatureRequest } from "./vcube_models";
/**
 * vcube client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 续期测试license
     */
    ModifyTrialLicense(req: ModifyTrialLicenseRequest, cb?: (error: string, rep: ModifyTrialLicenseResponse) => void): Promise<ModifyTrialLicenseResponse>;
    /**
     * 续期测试版优图美视
     */
    RenewTestXMagic(req: RenewTestXMagicRequest, cb?: (error: string, rep: RenewTestXMagicResponse) => void): Promise<RenewTestXMagicResponse>;
    /**
     * 查询视立方 license 资源，所有的资源包
     */
    DescribeVcubeResources(req: DescribeVcubeResourcesRequest, cb?: (error: string, rep: DescribeVcubeResourcesResponse) => void): Promise<DescribeVcubeResourcesResponse>;
    /**
     * 创建应用并绑定license或者XMagic
     */
    CreateApplicationAndBindLicense(req: CreateApplicationAndBindLicenseRequest, cb?: (error: string, rep: CreateApplicationAndBindLicenseResponse) => void): Promise<CreateApplicationAndBindLicenseResponse>;
    /**
     * 创建 web 播放器基础版
     */
    CreateApplicationAndWebPlayerLicense(req: CreateApplicationAndWebPlayerLicenseRequest, cb?: (error: string, rep: CreateApplicationAndWebPlayerLicenseResponse) => void): Promise<CreateApplicationAndWebPlayerLicenseResponse>;
    /**
     * 用途美视资源包用于开通正式优图美视
     */
    DescribeXMagicResource(req: DescribeXMagicResourceRequest, cb?: (error: string, rep: DescribeXMagicResourceResponse) => void): Promise<DescribeXMagicResourceResponse>;
    /**
     * 编辑更改应用
     */
    ModifyApplication(req: ModifyApplicationRequest, cb?: (error: string, rep: ModifyApplicationResponse) => void): Promise<ModifyApplicationResponse>;
    /**
     * 修改正式应用的包名称
     */
    ModifyFormalApplication(req: ModifyFormalApplicationRequest, cb?: (error: string, rep: ModifyFormalApplicationResponse) => void): Promise<ModifyFormalApplicationResponse>;
    /**
     * 查询用户个性配置
     */
    DescribeUserConfig(req?: DescribeUserConfigRequest, cb?: (error: string, rep: DescribeUserConfigResponse) => void): Promise<DescribeUserConfigResponse>;
    /**
     * 获取临时秘钥，用于图片，特效包上传
     */
    DescribeSTS(req?: DescribeSTSRequest, cb?: (error: string, rep: DescribeSTSResponse) => void): Promise<DescribeSTSResponse>;
    /**
     * 修改内置应用包名
     */
    ModifyPresetApplication(req: ModifyPresetApplicationRequest, cb?: (error: string, rep: ModifyPresetApplicationResponse) => void): Promise<ModifyPresetApplicationResponse>;
    /**
     * 查询视立方 license 资源，包括资源包赠送和直接购买的资源
     */
    DescribeVcubeResourcesList(req: DescribeVcubeResourcesListRequest, cb?: (error: string, rep: DescribeVcubeResourcesListResponse) => void): Promise<DescribeVcubeResourcesListResponse>;
    /**
     * 开通测试license
     */
    CreateTrialLicense(req: CreateTrialLicenseRequest, cb?: (error: string, rep: CreateTrialLicenseResponse) => void): Promise<CreateTrialLicenseResponse>;
    /**
     * 正式license 升降配，点播精简版、基础版
     */
    ModifyLicense(req: ModifyLicenseRequest, cb?: (error: string, rep: ModifyLicenseResponse) => void): Promise<ModifyLicenseResponse>;
    /**
     * 查询用户license， 按照应用分类
     */
    DescribeVcubeApplicationAndLicense(req: DescribeVcubeApplicationAndLicenseRequest, cb?: (error: string, rep: DescribeVcubeApplicationAndLicenseResponse) => void): Promise<DescribeVcubeApplicationAndLicenseResponse>;
    /**
     * 将测试xmagic升级到正式版
     */
    UpdateTestXMagic(req: UpdateTestXMagicRequest, cb?: (error: string, rep: UpdateTestXMagicResponse) => void): Promise<UpdateTestXMagicResponse>;
    /**
     * 更新优图美视的申请信息 Status 为2，3的时候可用
     */
    UpdateXMagic(req: UpdateXMagicRequest, cb?: (error: string, rep: UpdateXMagicResponse) => void): Promise<UpdateXMagicResponse>;
    /**
     * 测试 license 升级为正式 license
     */
    UpdateTrialLicense(req: UpdateTrialLicenseRequest, cb?: (error: string, rep: UpdateTrialLicenseResponse) => void): Promise<UpdateTrialLicenseResponse>;
    /**
     * 查询用户优图license， 按照应用分类
     */
    DescribeVcubeApplicationAndXMagicList(req: DescribeVcubeApplicationAndXMagicListRequest, cb?: (error: string, rep: DescribeVcubeApplicationAndXMagicListResponse) => void): Promise<DescribeVcubeApplicationAndXMagicListResponse>;
    /**
     * 查询用户点播直播等license， 按照应用分类,国际站专用
     */
    DescribeVcubeApplicationAndPlayList(req: DescribeVcubeApplicationAndPlayListRequest, cb?: (error: string, rep: DescribeVcubeApplicationAndPlayListResponse) => void): Promise<DescribeVcubeApplicationAndPlayListResponse>;
    /**
     * 总览页查询临期License列表，和统计数据
     */
    DescribeLicenseList(req?: DescribeLicenseListRequest, cb?: (error: string, rep: DescribeLicenseListResponse) => void): Promise<DescribeLicenseListResponse>;
    /**
     * 创建活动license
     */
    CreateActivityLicense(req: CreateActivityLicenseRequest, cb?: (error: string, rep: CreateActivityLicenseResponse) => void): Promise<CreateActivityLicenseResponse>;
    /**
     * 绑定license
     */
    CreateLicense(req: CreateLicenseRequest, cb?: (error: string, rep: CreateLicenseResponse) => void): Promise<CreateLicenseResponse>;
    /**
     * 申请开通测试版优图
     */
    CreateTestXMagic(req: CreateTestXMagicRequest, cb?: (error: string, rep: CreateTestXMagicResponse) => void): Promise<CreateTestXMagicResponse>;
    /**
     * 续期国际站视频播放功能和中国站web基础版
     */
    RenewVideo(req: RenewVideoRequest, cb?: (error: string, rep: RenewVideoResponse) => void): Promise<RenewVideoResponse>;
    /**
     * 正式license 续期与变更有效期
     */
    RenewLicense(req: RenewLicenseRequest, cb?: (error: string, rep: RenewLicenseResponse) => void): Promise<RenewLicenseResponse>;
    /**
     * 创建测试应用并开通测试 license
     */
    CreateTrialApplicationAndLicense(req: CreateTrialApplicationAndLicenseRequest, cb?: (error: string, rep: CreateTrialApplicationAndLicenseResponse) => void): Promise<CreateTrialApplicationAndLicenseResponse>;
    /**
     * 用于优图美视资源列表展示
     */
    DescribeXMagicResourceList(req: DescribeXMagicResourceListRequest, cb?: (error: string, rep: DescribeXMagicResourceListResponse) => void): Promise<DescribeXMagicResourceListResponse>;
    /**
     * 查询测试应用可以开通的功能
     */
    DescribeTrialFeature(req?: DescribeTrialFeatureRequest, cb?: (error: string, rep: DescribeTrialFeatureResponse) => void): Promise<DescribeTrialFeatureResponse>;
    /**
     * x08开通正式版优图美视功能，针对已经有Application的情况
     */
    CreateXMagic(req: CreateXMagicRequest, cb?: (error: string, rep: CreateXMagicResponse) => void): Promise<CreateXMagicResponse>;
    /**
     * 创建应用和视频播放license 目前只有国际站可以用
     */
    CreateApplicationAndVideo(req: CreateApplicationAndVideoRequest, cb?: (error: string, rep: CreateApplicationAndVideoResponse) => void): Promise<CreateApplicationAndVideoResponse>;
    /**
     * 查询功能列表
     */
    DescribeFeatureList(req?: DescribeFeatureListRequest, cb?: (error: string, rep: DescribeFeatureListResponse) => void): Promise<DescribeFeatureListResponse>;
    /**
     * 查询产品动态
     */
    DescribeNews(req: DescribeNewsRequest, cb?: (error: string, rep: DescribeNewsResponse) => void): Promise<DescribeNewsResponse>;
    /**
     * 使用一个腾讯特效资源，更新现在的腾讯特效license，license功能和到期时间会以新的资源为准，老资源会被替换下来
     */
    ModifyXMagic(req: ModifyXMagicRequest, cb?: (error: string, rep: ModifyXMagicResponse) => void): Promise<ModifyXMagicResponse>;
}
