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
  FeedUserInfo,
  DocItem,
  ReportFeedItemRequest,
  ReportGoodsBehaviorResponse,
  UserIdInfo,
  FeedRecommendResponse,
  UserPortraitInfo,
  RecGoodsData,
  GoodsInfo,
  DislikeInfo,
  ReportFeedBehaviorResponse,
  ReportGoodsInfoResponse,
  ReportFeedUserRequest,
  RecItemData,
  FeedBehaviorInfo,
  ReportFeedUserResponse,
  StrUserIdInfo,
  ReportFeedItemResponse,
  DescribeGoodsRecommendRequest,
  ReportGoodsBehaviorRequest,
  ReportGoodsInfoRequest,
  ReportFeedBehaviorRequest,
  GoodsBehaviorInfo,
  DescribeGoodsRecommendResponse,
  FeedRecommendRequest,
} from "./irp_models"

/**
 * irp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("irp.tencentcloudapi.com", "2022-08-05", clientConfig)
  }

  /**
   * 上报电商类商品信息
   */
  async ReportGoodsInfo(
    req: ReportGoodsInfoRequest,
    cb?: (error: string, rep: ReportGoodsInfoResponse) => void
  ): Promise<ReportGoodsInfoResponse> {
    return this.request("ReportGoodsInfo", req, cb)
  }

  /**
   * 上报电商类行为数据
   */
  async ReportGoodsBehavior(
    req: ReportGoodsBehaviorRequest,
    cb?: (error: string, rep: ReportGoodsBehaviorResponse) => void
  ): Promise<ReportGoodsBehaviorResponse> {
    return this.request("ReportGoodsBehavior", req, cb)
  }

  /**
   * 上报信息流场景内的行为数据，随着数据的积累，模型的效果会逐渐稳定。
   */
  async ReportFeedBehavior(
    req: ReportFeedBehaviorRequest,
    cb?: (error: string, rep: ReportFeedBehaviorResponse) => void
  ): Promise<ReportFeedBehaviorResponse> {
    return this.request("ReportFeedBehavior", req, cb)
  }

  /**
   * 获取电商类推荐结果
   */
  async DescribeGoodsRecommend(
    req: DescribeGoodsRecommendRequest,
    cb?: (error: string, rep: DescribeGoodsRecommendResponse) => void
  ): Promise<DescribeGoodsRecommendResponse> {
    return this.request("DescribeGoodsRecommend", req, cb)
  }

  /**
   * 上报信息流用户信息，请务必确认用户的唯一性，并在请求推荐结果时指定用户的唯一标识信息（UserId），否则将无法进行千人千面的推荐
   */
  async ReportFeedUser(
    req: ReportFeedUserRequest,
    cb?: (error: string, rep: ReportFeedUserResponse) => void
  ): Promise<ReportFeedUserResponse> {
    return this.request("ReportFeedUser", req, cb)
  }

  /**
   * 上报被用于推荐的信息流内容信息
   */
  async ReportFeedItem(
    req: ReportFeedItemRequest,
    cb?: (error: string, rep: ReportFeedItemResponse) => void
  ): Promise<ReportFeedItemResponse> {
    return this.request("ReportFeedItem", req, cb)
  }

  /**
   * 获取信息流推荐结果
   */
  async FeedRecommend(
    req: FeedRecommendRequest,
    cb?: (error: string, rep: FeedRecommendResponse) => void
  ): Promise<FeedRecommendResponse> {
    return this.request("FeedRecommend", req, cb)
  }
}
