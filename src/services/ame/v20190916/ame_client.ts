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
  Album,
  DescribeMusicResponse,
  DescribeLyricResponse,
  Station,
  Music,
  DescribeStationsResponse,
  DescribePackageItemsResponse,
  PackageItem,
  DataInfo,
  Package,
  ReportDataResponse,
  DescribePackageItemsRequest,
  DescribeItemByIdRequest,
  DescribeMusicRequest,
  UseRange,
  Artist,
  DescribeStationsRequest,
  DescribeItemsRequest,
  Item,
  DescribePackagesRequest,
  ImagePath,
  DescribeItemsResponse,
  DescribeItemByIdResponse,
  DescribePackagesResponse,
  Lyric,
  DescribeLyricRequest,
  ReportDataRequest,
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
   * 根据歌曲ID查询歌曲信息
   */
  async DescribeItemById(
    req: DescribeItemByIdRequest,
    cb?: (error: string, rep: DescribeItemByIdResponse) => void
  ): Promise<DescribeItemByIdResponse> {
    return this.request("DescribeItemById", req, cb)
  }

  /**
   * 查询已购曲库包列表接口
   */
  async DescribePackages(
    req: DescribePackagesRequest,
    cb?: (error: string, rep: DescribePackagesResponse) => void
  ): Promise<DescribePackagesResponse> {
    return this.request("DescribePackages", req, cb)
  }

  /**
   * 根据接口的模式及歌曲ID来取得歌词信息。
   */
  async DescribeLyric(
    req: DescribeLyricRequest,
    cb?: (error: string, rep: DescribeLyricResponse) => void
  ): Promise<DescribeLyricResponse> {
    return this.request("DescribeLyric", req, cb)
  }

  /**
   * 分类内容下歌曲列表获取，根据CategoryID或CategoryCode
   */
  async DescribeItems(
    req: DescribeItemsRequest,
    cb?: (error: string, rep: DescribeItemsResponse) => void
  ): Promise<DescribeItemsResponse> {
    return this.request("DescribeItems", req, cb)
  }

  /**
   * 根据接口的模式及歌曲ID来取得对应权限的歌曲播放地址等信息。
   */
  async DescribeMusic(
    req: DescribeMusicRequest,
    cb?: (error: string, rep: DescribeMusicResponse) => void
  ): Promise<DescribeMusicResponse> {
    return this.request("DescribeMusic", req, cb)
  }

  /**
   * 查询曲库包已核验歌曲列表接口
   */
  async DescribePackageItems(
    req: DescribePackageItemsRequest,
    cb?: (error: string, rep: DescribePackageItemsResponse) => void
  ): Promise<DescribePackageItemsResponse> {
    return this.request("DescribePackageItems", req, cb)
  }

  /**
   * 客户上报用户数据功能，为了更好的为用户提供优质服务
   */
  async ReportData(
    req: ReportDataRequest,
    cb?: (error: string, rep: ReportDataResponse) => void
  ): Promise<ReportDataResponse> {
    return this.request("ReportData", req, cb)
  }

  /**
   * 获取素材库列表时使用
   */
  async DescribeStations(
    req: DescribeStationsRequest,
    cb?: (error: string, rep: DescribeStationsResponse) => void
  ): Promise<DescribeStationsResponse> {
    return this.request("DescribeStations", req, cb)
  }
}
