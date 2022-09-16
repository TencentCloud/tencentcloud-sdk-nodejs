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
  KTVBPMInfo,
  DescribeKTVSuggestionsResponse,
  KTVMatchRuleMusicInfo,
  JoinRoomInput,
  DestroyKTVRobotResponse,
  MusicAlbumCoverInfo,
  CreateKTVRobotRequest,
  KTVSuggestionInfo,
  SyncKTVRobotCommandRequest,
  DescribeKTVPlaylistDetailRequest,
  CreateKTVRobotResponse,
  DescribeKTVSuggestionsRequest,
  DescribeKTVMatchMusicsRequest,
  DescribeKTVPlaylistsResponse,
  DescribeKTVPlaylistsRequest,
  DescribeKTVPlaylistDetailResponse,
  SetDestroyModeCommandInput,
  SetAudioParamCommandInput,
  KTVMatchMusic,
  TRTCJoinRoomInput,
  DescribeKTVRobotsResponse,
  KTVTagGroupInfo,
  BatchDescribeKTVMusicDetailsRequest,
  KTVMusicDetailInfo,
  DescribeKTVMusicsByTagResponse,
  KTVTagInfo,
  MusicAlbumInfo,
  SetPlayModeCommandInput,
  SyncRobotCommand,
  SearchKTVMusicsResponse,
  KTVRobotInfo,
  DescribeKTVMatchMusicsResponse,
  DescribeKTVTagsResponse,
  ChorusClip,
  SetPlaylistCommandInput,
  SyncKTVRobotCommandResponse,
  BatchDescribeKTVMusicDetailsResponse,
  KTVMatchRule,
  KTVMusicBaseInfo,
  DescribeKTVMusicsByTagRequest,
  SearchKTVMusicsRequest,
  PlayCommandInput,
  TimeRange,
  KTVPlaylistBaseInfo,
  SendMessageCommandInput,
  DestroyKTVRobotRequest,
  DescribeKTVRobotsRequest,
  DescribeKTVTagsRequest,
  SeekCommandInput,
} from "./yinsuda_models"

/**
 * yinsuda client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("yinsuda.tencentcloudapi.com", "2022-05-27", clientConfig)
  }

  /**
   * 创建机器人，支持进入 RTC 房间，播放曲库歌曲。
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
   * 获取标签分组及分组下的标签列表信息。
   */
  async DescribeKTVTags(
    req: DescribeKTVTagsRequest,
    cb?: (error: string, rep: DescribeKTVTagsResponse) => void
  ): Promise<DescribeKTVTagsResponse> {
    return this.request("DescribeKTVTags", req, cb)
  }

  /**
   * 根据歌单 Id 获取歌单详情。
   */
  async DescribeKTVPlaylistDetail(
    req: DescribeKTVPlaylistDetailRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void
  ): Promise<DescribeKTVPlaylistDetailResponse> {
    return this.request("DescribeKTVPlaylistDetail", req, cb)
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
   * 根据关键词获取联想词列表。
   */
  async DescribeKTVSuggestions(
    req: DescribeKTVSuggestionsRequest,
    cb?: (error: string, rep: DescribeKTVSuggestionsResponse) => void
  ): Promise<DescribeKTVSuggestionsResponse> {
    return this.request("DescribeKTVSuggestions", req, cb)
  }

  /**
   * 批量获取歌曲详细信息，包括：歌词下载链接、播放凭证、音高数据下载链接信息等。
   */
  async BatchDescribeKTVMusicDetails(
    req: BatchDescribeKTVMusicDetailsRequest,
    cb?: (error: string, rep: BatchDescribeKTVMusicDetailsResponse) => void
  ): Promise<BatchDescribeKTVMusicDetailsResponse> {
    return this.request("BatchDescribeKTVMusicDetails", req, cb)
  }

  /**
   * 获取歌单列表。
   */
  async DescribeKTVPlaylists(
    req: DescribeKTVPlaylistsRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void
  ): Promise<DescribeKTVPlaylistsResponse> {
    return this.request("DescribeKTVPlaylists", req, cb)
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
   * 根据输入的规则匹配曲库中的歌曲。
   */
  async DescribeKTVMatchMusics(
    req: DescribeKTVMatchMusicsRequest,
    cb?: (error: string, rep: DescribeKTVMatchMusicsResponse) => void
  ): Promise<DescribeKTVMatchMusicsResponse> {
    return this.request("DescribeKTVMatchMusics", req, cb)
  }

  /**
   * 根据关键词搜索歌曲，返回相关歌曲列表。
   */
  async SearchKTVMusics(
    req: SearchKTVMusicsRequest,
    cb?: (error: string, rep: SearchKTVMusicsResponse) => void
  ): Promise<SearchKTVMusicsResponse> {
    return this.request("SearchKTVMusics", req, cb)
  }

  /**
   * 通过标签过滤歌曲列表。
   */
  async DescribeKTVMusicsByTag(
    req: DescribeKTVMusicsByTagRequest,
    cb?: (error: string, rep: DescribeKTVMusicsByTagResponse) => void
  ): Promise<DescribeKTVMusicsByTagResponse> {
    return this.request("DescribeKTVMusicsByTag", req, cb)
  }
}
