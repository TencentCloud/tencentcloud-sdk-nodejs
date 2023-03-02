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
const ReportFeedItemResponse = models.ReportFeedItemResponse;
const ReportFeedUserRequest = models.ReportFeedUserRequest;
const FeedUserInfo = models.FeedUserInfo;
const FeedRecommendResponse = models.FeedRecommendResponse;
const DocItem = models.DocItem;
const DislikeInfo = models.DislikeInfo;
const ReportFeedBehaviorResponse = models.ReportFeedBehaviorResponse;
const ReportFeedItemRequest = models.ReportFeedItemRequest;
const UserIdInfo = models.UserIdInfo;
const RecItemData = models.RecItemData;
const ReportFeedBehaviorRequest = models.ReportFeedBehaviorRequest;
const FeedBehaviorInfo = models.FeedBehaviorInfo;
const ReportFeedUserResponse = models.ReportFeedUserResponse;
const FeedRecommendRequest = models.FeedRecommendRequest;


/**
 * irp client
 * @class
 */
class IrpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("irp.tencentcloudapi.com", "2022-08-05", credential, region, profile);
    }
    
    /**
     * 上报信息流用户信息，请务必确认用户的唯一性，并在请求推荐结果时指定用户的唯一标识信息（UserId），否则将无法进行千人千面的推荐
     * @param {ReportFeedUserRequest} req
     * @param {function(string, ReportFeedUserResponse):void} cb
     * @public
     */
    ReportFeedUser(req, cb) {
        let resp = new ReportFeedUserResponse();
        this.request("ReportFeedUser", req, resp, cb);
    }

    /**
     * 上报被用于推荐的信息流内容信息
     * @param {ReportFeedItemRequest} req
     * @param {function(string, ReportFeedItemResponse):void} cb
     * @public
     */
    ReportFeedItem(req, cb) {
        let resp = new ReportFeedItemResponse();
        this.request("ReportFeedItem", req, resp, cb);
    }

    /**
     * 上报信息流场景内的行为数据，随着数据的积累，模型的效果会逐渐稳定。
     * @param {ReportFeedBehaviorRequest} req
     * @param {function(string, ReportFeedBehaviorResponse):void} cb
     * @public
     */
    ReportFeedBehavior(req, cb) {
        let resp = new ReportFeedBehaviorResponse();
        this.request("ReportFeedBehavior", req, resp, cb);
    }

    /**
     * 获取信息流推荐结果
     * @param {FeedRecommendRequest} req
     * @param {function(string, FeedRecommendResponse):void} cb
     * @public
     */
    FeedRecommend(req, cb) {
        let resp = new FeedRecommendResponse();
        this.request("FeedRecommend", req, resp, cb);
    }


}
module.exports = IrpClient;
