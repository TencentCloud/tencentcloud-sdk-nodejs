"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * yinsuda client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("yinsuda.tencentcloudapi.com", "2022-05-27", clientConfig);
    }
    /**
     * 创建机器人，支持进入 RTC 房间，播放曲库歌曲。
     */
    async CreateKTVRobot(req, cb) {
        return this.request("CreateKTVRobot", req, cb);
    }
    /**
     * 充值直播会员，使该用户可以在直播场景使用
     */
    async RechargeLiveVip(req, cb) {
        return this.request("RechargeLiveVip", req, cb);
    }
    /**
     * 获取标签分组及分组下的标签列表信息。
     */
    async DescribeKTVTags(req, cb) {
        return this.request("DescribeKTVTags", req, cb);
    }
    /**
     * 充值会员
     */
    async RechargeVip(req, cb) {
        return this.request("RechargeVip", req, cb);
    }
    /**
     * 根据歌单 Id 获取歌单详情。
     */
    async DescribeKTVPlaylistDetail(req, cb) {
        return this.request("DescribeKTVPlaylistDetail", req, cb);
    }
    /**
     * 获取会员信息：获取用户是否开通会员
     */
    async DescribeVipUserInfo(req, cb) {
        return this.request("DescribeVipUserInfo", req, cb);
    }
    /**
     * 销毁机器人，机器人退出 RTC 房间。
     */
    async DestroyKTVRobot(req, cb) {
        return this.request("DestroyKTVRobot", req, cb);
    }
    /**
     * 获取歌曲伴奏高潮的开始、结束时间，可用于抢唱
     */
    async DescribeKTVMusicAccompanySegmentUrlVip(req, cb) {
        return this.request("DescribeKTVMusicAccompanySegmentUrlVip", req, cb);
    }
    /**
     * 根据关键词获取联想词列表。
     */
    async DescribeKTVSuggestions(req, cb) {
        return this.request("DescribeKTVSuggestions", req, cb);
    }
    /**
     * 获取用户信息，包括是否为直播会员，及直播会员信息等
     */
    async DescribeUserInfo(req, cb) {
        return this.request("DescribeUserInfo", req, cb);
    }
    /**
     * 批量获取直播会员充值流水详细信息，包括：流水号，订单状态，下订单时间等
     */
    async DescribeLiveVipTradeInfos(req, cb) {
        return this.request("DescribeLiveVipTradeInfos", req, cb);
    }
    /**
     * 批量获取歌曲详细信息，包括：歌词下载链接、播放凭证、音高数据下载链接信息等。
     */
    async BatchDescribeKTVMusicDetails(req, cb) {
        return this.request("BatchDescribeKTVMusicDetails", req, cb);
    }
    /**
     * 获取歌单列表。
     */
    async DescribeKTVPlaylists(req, cb) {
        return this.request("DescribeKTVPlaylists", req, cb);
    }
    /**
     * 申请合唱相关信息，用于标记用户的演唱是在合唱场景下。
     */
    async ApplyChorus(req, cb) {
        return this.request("ApplyChorus", req, cb);
    }
    /**
     * 获取机器人列表，支持 Id、状态等过滤条件。
     */
    async DescribeKTVRobots(req, cb) {
        return this.request("DescribeKTVRobots", req, cb);
    }
    /**
     * 获取歌曲伴奏片段链接，可用于抢唱
     */
    async DescribeKTVMusicAccompanySegmentUrl(req, cb) {
        return this.request("DescribeKTVMusicAccompanySegmentUrl", req, cb);
    }
    /**
     * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
     */
    async SyncKTVRobotCommand(req, cb) {
        return this.request("SyncKTVRobotCommand", req, cb);
    }
    /**
     * 根据输入的规则匹配曲库中的歌曲。
     */
    async DescribeKTVMatchMusics(req, cb) {
        return this.request("DescribeKTVMatchMusics", req, cb);
    }
    /**
     * 根据关键词搜索歌曲，返回相关歌曲列表。
     */
    async SearchKTVMusics(req, cb) {
        return this.request("SearchKTVMusics", req, cb);
    }
    /**
     * 通过标签过滤歌曲列表。
     */
    async DescribeKTVMusicsByTag(req, cb) {
        return this.request("DescribeKTVMusicsByTag", req, cb);
    }
}
exports.Client = Client;
