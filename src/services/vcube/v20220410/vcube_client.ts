/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeVcubeApplicationAndLicenseRequest,
  CreateLicenseResponse,
  CreateApplicationAndVideoResponse,
  CreateApplicationAndBindLicenseResponse,
  ModifyFormalApplicationResponse,
  XMagicResourceSimpleInfo,
  DescribeXMagicResourceListRequest,
  DescribeVcubeResourcesListRequest,
  DescribeTrialFeatureResponse,
  CreateTrialLicenseResponse,
  DescribeUserConfigResponse,
  RenewTestXMagicResponse,
  RenewVideoResponse,
  UpdateXMagicRequest,
  DescribeVcubeResourcesRequest,
  CreateLicenseRequest,
  CreateTrialApplicationAndLicenseRequest,
  ModifyFormalApplicationRequest,
  DescribeLicenseListRequest,
  DescribeSTSRequest,
  RenewLicenseRequest,
  LicenseResourceInfo,
  LicenseResourceSimpleInfo,
  RenewLicenseResponse,
  DescribeVcubeApplicationAndPlayListRequest,
  XMagicTrial,
  DescribeVcubeApplicationAndXMagicListRequest,
  DescribeVcubeResourcesListResponse,
  License,
  DescribeLicenseListResponse,
  ModifyApplicationResponse,
  ModifyXMagicRequest,
  XMagicResource,
  RenewResource,
  DescribeVcubeResourcesResponse,
  DescribeNewsRequest,
  CreateTestXMagicResponse,
  DescribeUserConfigRequest,
  RenewTestXMagicRequest,
  UpdateXMagicResponse,
  ModifyLicenseRequest,
  CreateActivityLicenseResponse,
  UpdateTestXMagicResponse,
  CreateTrialApplicationAndLicenseResponse,
  DescribeXMagicResourceRequest,
  ModifyPresetApplicationResponse,
  CreateXMagicResponse,
  ModifyPresetApplicationRequest,
  AppInfo,
  DescribeNewsResponse,
  DescribeSTSResponse,
  Package,
  DescribeXMagicResourceResponse,
  DescribeVcubeApplicationAndPlayListResponse,
  VideoFeature,
  Feature,
  ModifyTrialLicenseResponse,
  UpdateTrialLicenseResponse,
  ModifyApplicationRequest,
  CreateXMagicRequest,
  RenewVideoRequest,
  CreateApplicationAndVideoRequest,
  DescribeVcubeApplicationAndLicenseResponse,
  CreateTestXMagicRequest,
  DescribeVcubeApplicationAndXMagicListResponse,
  CreateTrialLicenseRequest,
  XMagicSimpleInfo,
  XMagicInfo,
  DescribeFeatureListRequest,
  ApplicationInfo,
  CreateActivityLicenseRequest,
  UpdateTrialLicenseRequest,
  UpdateTestXMagicRequest,
  ModifyLicenseResponse,
  CreateApplicationAndWebPlayerLicenseResponse,
  ModifyTrialLicenseRequest,
  XMagicFeature,
  ModifyXMagicResponse,
  CreateApplicationAndWebPlayerLicenseRequest,
  CreateApplicationAndBindLicenseRequest,
  NewsInfo,
  DescribeFeatureListResponse,
  DescribeXMagicResourceListResponse,
  DescribeTrialFeatureRequest,
} from "./vcube_models"

/**
 * vcube client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vcube.tencentcloudapi.com", "2022-04-10", clientConfig)
  }

  /**
   * 续期测试license
   */
  async ModifyTrialLicense(
    req: ModifyTrialLicenseRequest,
    cb?: (error: string, rep: ModifyTrialLicenseResponse) => void
  ): Promise<ModifyTrialLicenseResponse> {
    return this.request("ModifyTrialLicense", req, cb)
  }

  /**
   * 续期测试版优图美视
   */
  async RenewTestXMagic(
    req: RenewTestXMagicRequest,
    cb?: (error: string, rep: RenewTestXMagicResponse) => void
  ): Promise<RenewTestXMagicResponse> {
    return this.request("RenewTestXMagic", req, cb)
  }

  /**
   * 查询视立方 license 资源，所有的资源包
   */
  async DescribeVcubeResources(
    req: DescribeVcubeResourcesRequest,
    cb?: (error: string, rep: DescribeVcubeResourcesResponse) => void
  ): Promise<DescribeVcubeResourcesResponse> {
    return this.request("DescribeVcubeResources", req, cb)
  }

  /**
   * 创建应用并绑定license或者XMagic
   */
  async CreateApplicationAndBindLicense(
    req: CreateApplicationAndBindLicenseRequest,
    cb?: (error: string, rep: CreateApplicationAndBindLicenseResponse) => void
  ): Promise<CreateApplicationAndBindLicenseResponse> {
    return this.request("CreateApplicationAndBindLicense", req, cb)
  }

  /**
   * 创建 web 播放器基础版
   */
  async CreateApplicationAndWebPlayerLicense(
    req: CreateApplicationAndWebPlayerLicenseRequest,
    cb?: (error: string, rep: CreateApplicationAndWebPlayerLicenseResponse) => void
  ): Promise<CreateApplicationAndWebPlayerLicenseResponse> {
    return this.request("CreateApplicationAndWebPlayerLicense", req, cb)
  }

  /**
   * 用途美视资源包用于开通正式优图美视
   */
  async DescribeXMagicResource(
    req: DescribeXMagicResourceRequest,
    cb?: (error: string, rep: DescribeXMagicResourceResponse) => void
  ): Promise<DescribeXMagicResourceResponse> {
    return this.request("DescribeXMagicResource", req, cb)
  }

  /**
   * 编辑更改应用
   */
  async ModifyApplication(
    req: ModifyApplicationRequest,
    cb?: (error: string, rep: ModifyApplicationResponse) => void
  ): Promise<ModifyApplicationResponse> {
    return this.request("ModifyApplication", req, cb)
  }

  /**
   * 修改正式应用的包名称
   */
  async ModifyFormalApplication(
    req: ModifyFormalApplicationRequest,
    cb?: (error: string, rep: ModifyFormalApplicationResponse) => void
  ): Promise<ModifyFormalApplicationResponse> {
    return this.request("ModifyFormalApplication", req, cb)
  }

  /**
   * 查询用户个性配置
   */
  async DescribeUserConfig(
    req?: DescribeUserConfigRequest,
    cb?: (error: string, rep: DescribeUserConfigResponse) => void
  ): Promise<DescribeUserConfigResponse> {
    return this.request("DescribeUserConfig", req, cb)
  }

  /**
   * 获取临时秘钥，用于图片，特效包上传
   */
  async DescribeSTS(
    req?: DescribeSTSRequest,
    cb?: (error: string, rep: DescribeSTSResponse) => void
  ): Promise<DescribeSTSResponse> {
    return this.request("DescribeSTS", req, cb)
  }

  /**
   * 修改内置应用包名
   */
  async ModifyPresetApplication(
    req: ModifyPresetApplicationRequest,
    cb?: (error: string, rep: ModifyPresetApplicationResponse) => void
  ): Promise<ModifyPresetApplicationResponse> {
    return this.request("ModifyPresetApplication", req, cb)
  }

  /**
   * 查询视立方 license 资源，包括资源包赠送和直接购买的资源
   */
  async DescribeVcubeResourcesList(
    req: DescribeVcubeResourcesListRequest,
    cb?: (error: string, rep: DescribeVcubeResourcesListResponse) => void
  ): Promise<DescribeVcubeResourcesListResponse> {
    return this.request("DescribeVcubeResourcesList", req, cb)
  }

  /**
   * 开通测试license
   */
  async CreateTrialLicense(
    req: CreateTrialLicenseRequest,
    cb?: (error: string, rep: CreateTrialLicenseResponse) => void
  ): Promise<CreateTrialLicenseResponse> {
    return this.request("CreateTrialLicense", req, cb)
  }

  /**
   * 正式license 升降配，点播精简版、基础版
   */
  async ModifyLicense(
    req: ModifyLicenseRequest,
    cb?: (error: string, rep: ModifyLicenseResponse) => void
  ): Promise<ModifyLicenseResponse> {
    return this.request("ModifyLicense", req, cb)
  }

  /**
   * 查询用户license， 按照应用分类
   */
  async DescribeVcubeApplicationAndLicense(
    req: DescribeVcubeApplicationAndLicenseRequest,
    cb?: (error: string, rep: DescribeVcubeApplicationAndLicenseResponse) => void
  ): Promise<DescribeVcubeApplicationAndLicenseResponse> {
    return this.request("DescribeVcubeApplicationAndLicense", req, cb)
  }

  /**
   * 将测试xmagic升级到正式版
   */
  async UpdateTestXMagic(
    req: UpdateTestXMagicRequest,
    cb?: (error: string, rep: UpdateTestXMagicResponse) => void
  ): Promise<UpdateTestXMagicResponse> {
    return this.request("UpdateTestXMagic", req, cb)
  }

  /**
   * 更新优图美视的申请信息 Status 为2，3的时候可用
   */
  async UpdateXMagic(
    req: UpdateXMagicRequest,
    cb?: (error: string, rep: UpdateXMagicResponse) => void
  ): Promise<UpdateXMagicResponse> {
    return this.request("UpdateXMagic", req, cb)
  }

  /**
   * 测试 license 升级为正式 license
   */
  async UpdateTrialLicense(
    req: UpdateTrialLicenseRequest,
    cb?: (error: string, rep: UpdateTrialLicenseResponse) => void
  ): Promise<UpdateTrialLicenseResponse> {
    return this.request("UpdateTrialLicense", req, cb)
  }

  /**
   * 查询用户优图license， 按照应用分类
   */
  async DescribeVcubeApplicationAndXMagicList(
    req: DescribeVcubeApplicationAndXMagicListRequest,
    cb?: (error: string, rep: DescribeVcubeApplicationAndXMagicListResponse) => void
  ): Promise<DescribeVcubeApplicationAndXMagicListResponse> {
    return this.request("DescribeVcubeApplicationAndXMagicList", req, cb)
  }

  /**
   * 查询用户点播直播等license， 按照应用分类,国际站专用
   */
  async DescribeVcubeApplicationAndPlayList(
    req: DescribeVcubeApplicationAndPlayListRequest,
    cb?: (error: string, rep: DescribeVcubeApplicationAndPlayListResponse) => void
  ): Promise<DescribeVcubeApplicationAndPlayListResponse> {
    return this.request("DescribeVcubeApplicationAndPlayList", req, cb)
  }

  /**
   * 总览页查询临期License列表，和统计数据
   */
  async DescribeLicenseList(
    req?: DescribeLicenseListRequest,
    cb?: (error: string, rep: DescribeLicenseListResponse) => void
  ): Promise<DescribeLicenseListResponse> {
    return this.request("DescribeLicenseList", req, cb)
  }

  /**
   * 创建活动license
   */
  async CreateActivityLicense(
    req: CreateActivityLicenseRequest,
    cb?: (error: string, rep: CreateActivityLicenseResponse) => void
  ): Promise<CreateActivityLicenseResponse> {
    return this.request("CreateActivityLicense", req, cb)
  }

  /**
   * 绑定license
   */
  async CreateLicense(
    req: CreateLicenseRequest,
    cb?: (error: string, rep: CreateLicenseResponse) => void
  ): Promise<CreateLicenseResponse> {
    return this.request("CreateLicense", req, cb)
  }

  /**
   * 申请开通测试版优图
   */
  async CreateTestXMagic(
    req: CreateTestXMagicRequest,
    cb?: (error: string, rep: CreateTestXMagicResponse) => void
  ): Promise<CreateTestXMagicResponse> {
    return this.request("CreateTestXMagic", req, cb)
  }

  /**
   * 续期国际站视频播放功能和中国站web基础版
   */
  async RenewVideo(
    req: RenewVideoRequest,
    cb?: (error: string, rep: RenewVideoResponse) => void
  ): Promise<RenewVideoResponse> {
    return this.request("RenewVideo", req, cb)
  }

  /**
   * 正式license 续期与变更有效期
   */
  async RenewLicense(
    req: RenewLicenseRequest,
    cb?: (error: string, rep: RenewLicenseResponse) => void
  ): Promise<RenewLicenseResponse> {
    return this.request("RenewLicense", req, cb)
  }

  /**
   * 创建测试应用并开通测试 license
   */
  async CreateTrialApplicationAndLicense(
    req: CreateTrialApplicationAndLicenseRequest,
    cb?: (error: string, rep: CreateTrialApplicationAndLicenseResponse) => void
  ): Promise<CreateTrialApplicationAndLicenseResponse> {
    return this.request("CreateTrialApplicationAndLicense", req, cb)
  }

  /**
   * 用于优图美视资源列表展示
   */
  async DescribeXMagicResourceList(
    req: DescribeXMagicResourceListRequest,
    cb?: (error: string, rep: DescribeXMagicResourceListResponse) => void
  ): Promise<DescribeXMagicResourceListResponse> {
    return this.request("DescribeXMagicResourceList", req, cb)
  }

  /**
   * 查询测试应用可以开通的功能
   */
  async DescribeTrialFeature(
    req?: DescribeTrialFeatureRequest,
    cb?: (error: string, rep: DescribeTrialFeatureResponse) => void
  ): Promise<DescribeTrialFeatureResponse> {
    return this.request("DescribeTrialFeature", req, cb)
  }

  /**
   * x08开通正式版优图美视功能，针对已经有Application的情况
   */
  async CreateXMagic(
    req: CreateXMagicRequest,
    cb?: (error: string, rep: CreateXMagicResponse) => void
  ): Promise<CreateXMagicResponse> {
    return this.request("CreateXMagic", req, cb)
  }

  /**
   * 创建应用和视频播放license 目前只有国际站可以用
   */
  async CreateApplicationAndVideo(
    req: CreateApplicationAndVideoRequest,
    cb?: (error: string, rep: CreateApplicationAndVideoResponse) => void
  ): Promise<CreateApplicationAndVideoResponse> {
    return this.request("CreateApplicationAndVideo", req, cb)
  }

  /**
   * 查询功能列表
   */
  async DescribeFeatureList(
    req?: DescribeFeatureListRequest,
    cb?: (error: string, rep: DescribeFeatureListResponse) => void
  ): Promise<DescribeFeatureListResponse> {
    return this.request("DescribeFeatureList", req, cb)
  }

  /**
   * 查询产品动态
   */
  async DescribeNews(
    req: DescribeNewsRequest,
    cb?: (error: string, rep: DescribeNewsResponse) => void
  ): Promise<DescribeNewsResponse> {
    return this.request("DescribeNews", req, cb)
  }

  /**
   * 使用一个腾讯特效资源，更新现在的腾讯特效license，license功能和到期时间会以新的资源为准，老资源会被替换下来
   */
  async ModifyXMagic(
    req: ModifyXMagicRequest,
    cb?: (error: string, rep: ModifyXMagicResponse) => void
  ): Promise<ModifyXMagicResponse> {
    return this.request("ModifyXMagic", req, cb)
  }
}
