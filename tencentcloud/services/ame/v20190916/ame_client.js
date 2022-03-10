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
 * ame client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ame.tencentcloudapi.com", "2019-09-16", clientConfig);
    }
    /**
     * 获取已购曲库包列表接口
     */
    async DescribePackages(req, cb) {
        return this.request("DescribePackages", req, cb);
    }
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息或者波形图信息。
     */
    async DescribeLyric(req, cb) {
        return this.request("DescribeLyric", req, cb);
    }
    /**
     * 该服务后续会停用，不再建议使用
     */
    async DescribeItems(req, cb) {
        return this.request("DescribeItems", req, cb);
    }
    /**
     * 获取授权项目信息列表
     */
    async DescribeAuthInfo(req, cb) {
        return this.request("DescribeAuthInfo", req, cb);
    }
    /**
     * 根据 Id 列表查询歌曲的详细信息，包含基础信息及播放信息。
     */
    async BatchDescribeKTVMusicDetails(req, cb) {
        return this.request("BatchDescribeKTVMusicDetails", req, cb);
    }
    /**
     * 获取授权项目下已购云音乐列表
     */
    async DescribeCloudMusicPurchased(req, cb) {
        return this.request("DescribeCloudMusicPurchased", req, cb);
    }
    /**
     * 根据购买曲库包用户可查询已回退的歌曲信息
     */
    async DescribePkgOfflineMusic(req, cb) {
        return this.request("DescribePkgOfflineMusic", req, cb);
    }
    /**
     * 根据歌手id，返回该歌手下歌曲列表。



     */
    async DescribeKTVSingerMusics(req, cb) {
        return this.request("DescribeKTVSingerMusics", req, cb);
    }
    /**
     * 获取曲库包歌曲播放信息接口
     */
    async DescribeMusic(req, cb) {
        return this.request("DescribeMusic", req, cb);
    }
    /**
     * 获取直播互动曲库联想词
     */
    async DescribeKTVSuggestions(req, cb) {
        return this.request("DescribeKTVSuggestions", req, cb);
    }
    /**
     * 根据资源方，需要变更的参数，请求该接口进行变更，为空的参数默认为无变更
     */
    async ModifyMusicOnShelves(req, cb) {
        return this.request("ModifyMusicOnShelves", req, cb);
    }
    /**
     * 获取直播互动曲库标签分组信息和标签信息
     */
    async DescribeKTVMusicTags(req, cb) {
        return this.request("DescribeKTVMusicTags", req, cb);
    }
    /**
     * 获取曲库包下已核销歌曲列表接口
     */
    async DescribePackageItems(req, cb) {
        return this.request("DescribePackageItems", req, cb);
    }
    /**
     * 根据资源方所传MusicId进行将歌曲进行下架，多个MusicId使用逗号隔开
     */
    async TakeMusicOffShelves(req, cb) {
        return this.request("TakeMusicOffShelves", req, cb);
    }
    /**
     * 获取直播互动曲库推荐歌单列表。
     */
    async DescribeKTVPlaylists(req, cb) {
        return this.request("DescribeKTVPlaylists", req, cb);
    }
    /**
     * 创建机器人，支持进入 RTC 房间，播放直播互动曲库歌曲。
     */
    async CreateKTVRobot(req, cb) {
        return this.request("CreateKTVRobot", req, cb);
    }
    /**
     * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
     */
    async SyncKTVRobotCommand(req, cb) {
        return this.request("SyncKTVRobotCommand", req, cb);
    }
    /**
     * 获取直播互动曲库歌曲的周榜和月榜
     */
    async DescribeKTVTopList(req, cb) {
        return this.request("DescribeKTVTopList", req, cb);
    }
    /**
     * 根据歌单 Id 获取歌单详情，包括歌单的基础信息以及歌曲列表。
     */
    async DescribeKTVPlaylistDetail(req, cb) {
        return this.request("DescribeKTVPlaylistDetail", req, cb);
    }
    /**
     * 客户上报用户数据功能，为了更好地为用户提供优质服务
     */
    async ReportData(req, cb) {
        return this.request("ReportData", req, cb);
    }
    /**
     * 获取直播互动曲库歌手分类信息
     */
    async DescribeKTVSingerCategories(req, cb) {
        return this.request("DescribeKTVSingerCategories", req, cb);
    }
    /**
     * 该服务后续会停用，不再建议使用
     */
    async DescribeStations(req, cb) {
        return this.request("DescribeStations", req, cb);
    }
    /**
     * 根据 Id 查询歌曲的详细信息，包含基础信息及播放信息。
     */
    async DescribeKTVMusicDetail(req, cb) {
        return this.request("DescribeKTVMusicDetail", req, cb);
    }
    /**
     * 根据歌曲ID查询歌曲信息
     */
    async DescribeItemById(req, cb) {
        return this.request("DescribeItemById", req, cb);
    }
    /**
     * 根据音乐信息查询音乐是否在售
     */
    async DescribeMusicSaleStatus(req, cb) {
        return this.request("DescribeMusicSaleStatus", req, cb);
    }
    /**
     * 根据过滤条件，返回匹配的歌手列表。
     */
    async DescribeKTVSingers(req, cb) {
        return this.request("DescribeKTVSingers", req, cb);
    }
    /**
     * 销毁机器人，机器人退出 RTC 房间。
     */
    async DestroyKTVRobot(req, cb) {
        return this.request("DestroyKTVRobot", req, cb);
    }
    /**
     * 获取云音乐播放信息接口
     */
    async DescribeCloudMusic(req, cb) {
        return this.request("DescribeCloudMusic", req, cb);
    }
    /**
     * 根据资源方所传歌曲信息，进行歌曲上架，多个歌曲同时请求时，需构造复合结构进行请求
     */
    async PutMusicOnTheShelves(req, cb) {
        return this.request("PutMusicOnTheShelves", req, cb);
    }
    /**
     * 获取机器人列表，支持 Id、状态等过滤条件。
     */
    async DescribeKTVRobots(req, cb) {
        return this.request("DescribeKTVRobots", req, cb);
    }
    /**
     * 根据搜索条件，返回匹配的歌曲列表。
     */
    async SearchKTVMusics(req, cb) {
        return this.request("SearchKTVMusics", req, cb);
    }
}
exports.Client = Client;
