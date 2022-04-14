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
  DescribeMusicResponse,
  DescribeKTVSuggestionsResponse,
  ChorusClip,
  ModifyMusicOnShelvesResponse,
  Station,
  DescribeKTVMusicDetailRequest,
  KTVMusicTopInfo,
  DescribeKTVSingerCategoriesRequest,
  KTVSingerBaseInfo,
  ModifyMusicOnShelvesRequest,
  PlayCommandInput,
  DescribeMusicRequest,
  KTVMusicDetailInfo,
  DescribeMusicSaleStatusRequest,
  TakeMusicOffShelvesRequest,
  DescribeCloudMusicResponse,
  MusicDetailInfo,
  ImagePath,
  KTVMusicTagInfo,
  DestroyKTVRobotRequest,
  DescribeAuthInfoResponse,
  DescribeLyricRequest,
  ReportDataRequest,
  SeekCommandInput,
  DescribePkgOfflineMusicRequest,
  TimeRange,
  DescribeMusicSaleStatusResponse,
  CreateKTVRobotResponse,
  DescribePackageItemsResponse,
  DescribeCloudMusicPurchasedResponse,
  KTVMusicTagGroup,
  DataInfo,
  ApplicationLicenseInput,
  Artist,
  SetDestroyModeCommandInput,
  ReportDataResponse,
  SearchKTVMusicsResponse,
  DescribeItemByIdRequest,
  PutMusicOnTheShelvesResponse,
  SyncRobotCommand,
  DescribeKTVSingerMusicsResponse,
  DescribeItemsResponse,
  DescribePkgOfflineMusicResponse,
  KTVSingerInfo,
  SetVolumeCommandInput,
  PutMusicOnTheShelvesRequest,
  DescribeCloudMusicRequest,
  SortBy,
  DescribeKTVMusicDetailResponse,
  DescribeKTVRobotsRequest,
  DescribeKTVMusicTagsResponse,
  DescribeKTVMusicTagsRequest,
  JoinRoomInput,
  DestroyKTVRobotResponse,
  CreateKTVRobotRequest,
  KTVSuggestionInfo,
  DescribeKTVTopListRequest,
  DescribeKTVPlaylistDetailRequest,
  Music,
  DescribeStationsResponse,
  DescribeCloudMusicPurchasedRequest,
  PackageItem,
  DescribeKTVPlaylistsRequest,
  TRTCJoinRoomInput,
  DescribePackageItemsRequest,
  AuthInfo,
  DescribeKTVRobotsResponse,
  UseRange,
  DescribeStationsRequest,
  DescribeKTVSingerMusicsRequest,
  DescribeKTVSingerCategoriesResponse,
  DescribeKTVSingersRequest,
  SetPlaylistCommandInput,
  SyncKTVRobotCommandResponse,
  BatchDescribeKTVMusicDetailsResponse,
  SearchKTVMusicsRequest,
  KTVPlaylistBaseInfo,
  DescribeKTVSingersResponse,
  DescribeItemByIdResponse,
  MusicStatus,
  KTVSingerCategoryInfo,
  BatchDescribeKTVMusicDetailsRequest,
  SendMessageCommandInput,
  KTVMusicDefinitionInfo,
  Album,
  DescribeLyricResponse,
  KTVMusicBaseInfo,
  SyncKTVRobotCommandRequest,
  DescribeKTVSuggestionsRequest,
  DescribeKTVPlaylistsResponse,
  DescribeKTVPlaylistDetailResponse,
  SetAudioParamCommandInput,
  TakeMusicOffShelves,
  OfflineMusicDetail,
  DescribeAuthInfoRequest,
  Package,
  SetPlayModeCommandInput,
  KTVRobotInfo,
  DescribeItemsRequest,
  Item,
  DescribeKTVTopListResponse,
  MusicOpenDetail,
  DescribePackagesRequest,
  DescribePackagesResponse,
  Lyric,
  TakeMusicOffShelvesResponse,
} from "./ame_models"

/**
 * ame client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ame.tencentcloudapi.com", "2019-09-16", clientConfig)
  }

  /**
   * 获取已购曲库包列表接口
   */
  async DescribePackages(
    req: DescribePackagesRequest,
    cb?: (error: string, rep: DescribePackagesResponse) => void
  ): Promise<DescribePackagesResponse> {
    return this.request("DescribePackages", req, cb)
  }

  /**
   * 根据接口的模式及歌曲ID来取得歌词信息或者波形图信息。
   */
  async DescribeLyric(
    req: DescribeLyricRequest,
    cb?: (error: string, rep: DescribeLyricResponse) => void
  ): Promise<DescribeLyricResponse> {
    return this.request("DescribeLyric", req, cb)
  }

  /**
   * 该服务后续会停用，不再建议使用
   */
  async DescribeItems(
    req: DescribeItemsRequest,
    cb?: (error: string, rep: DescribeItemsResponse) => void
  ): Promise<DescribeItemsResponse> {
    return this.request("DescribeItems", req, cb)
  }

  /**
   * 获取授权项目信息列表
   */
  async DescribeAuthInfo(
    req: DescribeAuthInfoRequest,
    cb?: (error: string, rep: DescribeAuthInfoResponse) => void
  ): Promise<DescribeAuthInfoResponse> {
    return this.request("DescribeAuthInfo", req, cb)
  }

  /**
   * 根据 Id 列表查询歌曲的详细信息，包含基础信息及播放信息。
   */
  async BatchDescribeKTVMusicDetails(
    req: BatchDescribeKTVMusicDetailsRequest,
    cb?: (error: string, rep: BatchDescribeKTVMusicDetailsResponse) => void
  ): Promise<BatchDescribeKTVMusicDetailsResponse> {
    return this.request("BatchDescribeKTVMusicDetails", req, cb)
  }

  /**
   * 获取授权项目下已购云音乐列表
   */
  async DescribeCloudMusicPurchased(
    req: DescribeCloudMusicPurchasedRequest,
    cb?: (error: string, rep: DescribeCloudMusicPurchasedResponse) => void
  ): Promise<DescribeCloudMusicPurchasedResponse> {
    return this.request("DescribeCloudMusicPurchased", req, cb)
  }

  /**
   * 根据购买曲库包用户可查询已回退的歌曲信息
   */
  async DescribePkgOfflineMusic(
    req: DescribePkgOfflineMusicRequest,
    cb?: (error: string, rep: DescribePkgOfflineMusicResponse) => void
  ): Promise<DescribePkgOfflineMusicResponse> {
    return this.request("DescribePkgOfflineMusic", req, cb)
  }

  /**
     * 根据歌手id，返回该歌手下歌曲列表。



     */
  async DescribeKTVSingerMusics(
    req: DescribeKTVSingerMusicsRequest,
    cb?: (error: string, rep: DescribeKTVSingerMusicsResponse) => void
  ): Promise<DescribeKTVSingerMusicsResponse> {
    return this.request("DescribeKTVSingerMusics", req, cb)
  }

  /**
   * 获取曲库包歌曲播放信息接口
   */
  async DescribeMusic(
    req: DescribeMusicRequest,
    cb?: (error: string, rep: DescribeMusicResponse) => void
  ): Promise<DescribeMusicResponse> {
    return this.request("DescribeMusic", req, cb)
  }

  /**
   * 获取直播互动曲库联想词
   */
  async DescribeKTVSuggestions(
    req: DescribeKTVSuggestionsRequest,
    cb?: (error: string, rep: DescribeKTVSuggestionsResponse) => void
  ): Promise<DescribeKTVSuggestionsResponse> {
    return this.request("DescribeKTVSuggestions", req, cb)
  }

  /**
   * 根据资源方，需要变更的参数，请求该接口进行变更，为空的参数默认为无变更
   */
  async ModifyMusicOnShelves(
    req: ModifyMusicOnShelvesRequest,
    cb?: (error: string, rep: ModifyMusicOnShelvesResponse) => void
  ): Promise<ModifyMusicOnShelvesResponse> {
    return this.request("ModifyMusicOnShelves", req, cb)
  }

  /**
   * 获取直播互动曲库标签分组信息和标签信息
   */
  async DescribeKTVMusicTags(
    req?: DescribeKTVMusicTagsRequest,
    cb?: (error: string, rep: DescribeKTVMusicTagsResponse) => void
  ): Promise<DescribeKTVMusicTagsResponse> {
    return this.request("DescribeKTVMusicTags", req, cb)
  }

  /**
   * 获取曲库包下已核销歌曲列表接口
   */
  async DescribePackageItems(
    req: DescribePackageItemsRequest,
    cb?: (error: string, rep: DescribePackageItemsResponse) => void
  ): Promise<DescribePackageItemsResponse> {
    return this.request("DescribePackageItems", req, cb)
  }

  /**
   * 根据资源方所传MusicId进行将歌曲进行下架，多个MusicId使用逗号隔开
   */
  async TakeMusicOffShelves(
    req: TakeMusicOffShelvesRequest,
    cb?: (error: string, rep: TakeMusicOffShelvesResponse) => void
  ): Promise<TakeMusicOffShelvesResponse> {
    return this.request("TakeMusicOffShelves", req, cb)
  }

  /**
   * 获取直播互动曲库推荐歌单列表。
   */
  async DescribeKTVPlaylists(
    req: DescribeKTVPlaylistsRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void
  ): Promise<DescribeKTVPlaylistsResponse> {
    return this.request("DescribeKTVPlaylists", req, cb)
  }

  /**
   * 创建机器人，支持进入 RTC 房间，播放直播互动曲库歌曲。
   */
  async CreateKTVRobot(
    req: CreateKTVRobotRequest,
    cb?: (error: string, rep: CreateKTVRobotResponse) => void
  ): Promise<CreateKTVRobotResponse> {
    return this.request("CreateKTVRobot", req, cb)
  }

  /**
   * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
   */
  async SyncKTVRobotCommand(
    req: SyncKTVRobotCommandRequest,
    cb?: (error: string, rep: SyncKTVRobotCommandResponse) => void
  ): Promise<SyncKTVRobotCommandResponse> {
    return this.request("SyncKTVRobotCommand", req, cb)
  }

  /**
   * 获取直播互动曲库歌曲的周榜和月榜
   */
  async DescribeKTVTopList(
    req: DescribeKTVTopListRequest,
    cb?: (error: string, rep: DescribeKTVTopListResponse) => void
  ): Promise<DescribeKTVTopListResponse> {
    return this.request("DescribeKTVTopList", req, cb)
  }

  /**
   * 根据歌单 Id 获取歌单详情，包括歌单的基础信息以及歌曲列表。
   */
  async DescribeKTVPlaylistDetail(
    req: DescribeKTVPlaylistDetailRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void
  ): Promise<DescribeKTVPlaylistDetailResponse> {
    return this.request("DescribeKTVPlaylistDetail", req, cb)
  }

  /**
   * 客户上报用户数据功能，为了更好地为用户提供优质服务
   */
  async ReportData(
    req: ReportDataRequest,
    cb?: (error: string, rep: ReportDataResponse) => void
  ): Promise<ReportDataResponse> {
    return this.request("ReportData", req, cb)
  }

  /**
   * 获取直播互动曲库歌手分类信息
   */
  async DescribeKTVSingerCategories(
    req?: DescribeKTVSingerCategoriesRequest,
    cb?: (error: string, rep: DescribeKTVSingerCategoriesResponse) => void
  ): Promise<DescribeKTVSingerCategoriesResponse> {
    return this.request("DescribeKTVSingerCategories", req, cb)
  }

  /**
   * 该服务后续会停用，不再建议使用
   */
  async DescribeStations(
    req: DescribeStationsRequest,
    cb?: (error: string, rep: DescribeStationsResponse) => void
  ): Promise<DescribeStationsResponse> {
    return this.request("DescribeStations", req, cb)
  }

  /**
   * 根据 Id 查询歌曲的详细信息，包含基础信息及播放信息。
   */
  async DescribeKTVMusicDetail(
    req: DescribeKTVMusicDetailRequest,
    cb?: (error: string, rep: DescribeKTVMusicDetailResponse) => void
  ): Promise<DescribeKTVMusicDetailResponse> {
    return this.request("DescribeKTVMusicDetail", req, cb)
  }

  /**
   * 根据歌曲ID查询歌曲信息
   */
  async DescribeItemById(
    req: DescribeItemByIdRequest,
    cb?: (error: string, rep: DescribeItemByIdResponse) => void
  ): Promise<DescribeItemByIdResponse> {
    return this.request("DescribeItemById", req, cb)
  }

  /**
   * 根据音乐信息查询音乐是否在售
   */
  async DescribeMusicSaleStatus(
    req: DescribeMusicSaleStatusRequest,
    cb?: (error: string, rep: DescribeMusicSaleStatusResponse) => void
  ): Promise<DescribeMusicSaleStatusResponse> {
    return this.request("DescribeMusicSaleStatus", req, cb)
  }

  /**
   * 根据过滤条件，返回匹配的歌手列表。
   */
  async DescribeKTVSingers(
    req: DescribeKTVSingersRequest,
    cb?: (error: string, rep: DescribeKTVSingersResponse) => void
  ): Promise<DescribeKTVSingersResponse> {
    return this.request("DescribeKTVSingers", req, cb)
  }

  /**
   * 销毁机器人，机器人退出 RTC 房间。
   */
  async DestroyKTVRobot(
    req: DestroyKTVRobotRequest,
    cb?: (error: string, rep: DestroyKTVRobotResponse) => void
  ): Promise<DestroyKTVRobotResponse> {
    return this.request("DestroyKTVRobot", req, cb)
  }

  /**
   * 获取云音乐播放信息接口
   */
  async DescribeCloudMusic(
    req: DescribeCloudMusicRequest,
    cb?: (error: string, rep: DescribeCloudMusicResponse) => void
  ): Promise<DescribeCloudMusicResponse> {
    return this.request("DescribeCloudMusic", req, cb)
  }

  /**
   * 根据资源方所传歌曲信息，进行歌曲上架，多个歌曲同时请求时，需构造复合结构进行请求
   */
  async PutMusicOnTheShelves(
    req: PutMusicOnTheShelvesRequest,
    cb?: (error: string, rep: PutMusicOnTheShelvesResponse) => void
  ): Promise<PutMusicOnTheShelvesResponse> {
    return this.request("PutMusicOnTheShelves", req, cb)
  }

  /**
   * 获取机器人列表，支持 Id、状态等过滤条件。
   */
  async DescribeKTVRobots(
    req: DescribeKTVRobotsRequest,
    cb?: (error: string, rep: DescribeKTVRobotsResponse) => void
  ): Promise<DescribeKTVRobotsResponse> {
    return this.request("DescribeKTVRobots", req, cb)
  }

  /**
   * 根据搜索条件，返回匹配的歌曲列表。
   */
  async SearchKTVMusics(
    req: SearchKTVMusicsRequest,
    cb?: (error: string, rep: SearchKTVMusicsResponse) => void
  ): Promise<SearchKTVMusicsResponse> {
    return this.request("SearchKTVMusics", req, cb)
  }
}
