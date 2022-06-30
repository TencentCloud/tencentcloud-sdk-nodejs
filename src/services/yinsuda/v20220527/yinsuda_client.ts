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
  DescribeKTVPlaylistsResponse,
  SearchKTVMusicsRequest,
  DescribeKTVPlaylistsRequest,
  DescribeKTVSuggestionsResponse,
  DescribeKTVPlaylistDetailResponse,
  KTVPlaylistBaseInfo,
  MusicAlbumCoverInfo,
  KTVMusicBaseInfo,
  KTVSuggestionInfo,
  DescribeKTVPlaylistDetailRequest,
  MusicAlbumInfo,
  KTVMusicDetailInfo,
  ChorusClip,
  SearchKTVMusicsResponse,
  DescribeKTVSuggestionsRequest,
  BatchDescribeKTVMusicDetailsResponse,
  BatchDescribeKTVMusicDetailsRequest,
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
   * 获取推荐歌单列表。
   */
  async DescribeKTVPlaylists(
    req: DescribeKTVPlaylistsRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void
  ): Promise<DescribeKTVPlaylistsResponse> {
    return this.request("DescribeKTVPlaylists", req, cb)
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
   * 批量获取歌曲详细信息，包括：歌词下载链接、播放凭证、音高数据下载链接信息等。
   */
  async BatchDescribeKTVMusicDetails(
    req: BatchDescribeKTVMusicDetailsRequest,
    cb?: (error: string, rep: BatchDescribeKTVMusicDetailsResponse) => void
  ): Promise<BatchDescribeKTVMusicDetailsResponse> {
    return this.request("BatchDescribeKTVMusicDetails", req, cb)
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
   * 根据关键词获取联想词列表。
   */
  async DescribeKTVSuggestions(
    req: DescribeKTVSuggestionsRequest,
    cb?: (error: string, rep: DescribeKTVSuggestionsResponse) => void
  ): Promise<DescribeKTVSuggestionsResponse> {
    return this.request("DescribeKTVSuggestions", req, cb)
  }
}
