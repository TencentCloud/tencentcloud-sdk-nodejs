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
const DescribeMusicResponse = models.DescribeMusicResponse;
const DescribeKTVSuggestionsResponse = models.DescribeKTVSuggestionsResponse;
const ChorusClip = models.ChorusClip;
const ModifyMusicOnShelvesResponse = models.ModifyMusicOnShelvesResponse;
const Station = models.Station;
const DescribeKTVMusicDetailRequest = models.DescribeKTVMusicDetailRequest;
const KTVMusicTopInfo = models.KTVMusicTopInfo;
const DescribeKTVSingerCategoriesRequest = models.DescribeKTVSingerCategoriesRequest;
const KTVSingerBaseInfo = models.KTVSingerBaseInfo;
const ModifyMusicOnShelvesRequest = models.ModifyMusicOnShelvesRequest;
const PlayCommandInput = models.PlayCommandInput;
const DescribeMusicRequest = models.DescribeMusicRequest;
const KTVMusicDetailInfo = models.KTVMusicDetailInfo;
const DescribeMusicSaleStatusRequest = models.DescribeMusicSaleStatusRequest;
const TakeMusicOffShelvesRequest = models.TakeMusicOffShelvesRequest;
const DescribeCloudMusicResponse = models.DescribeCloudMusicResponse;
const MusicDetailInfo = models.MusicDetailInfo;
const ImagePath = models.ImagePath;
const KTVMusicTagInfo = models.KTVMusicTagInfo;
const DestroyKTVRobotRequest = models.DestroyKTVRobotRequest;
const DescribeAuthInfoResponse = models.DescribeAuthInfoResponse;
const DescribeLyricRequest = models.DescribeLyricRequest;
const ReportDataRequest = models.ReportDataRequest;
const SeekCommandInput = models.SeekCommandInput;
const DescribePkgOfflineMusicRequest = models.DescribePkgOfflineMusicRequest;
const TimeRange = models.TimeRange;
const DescribeMusicSaleStatusResponse = models.DescribeMusicSaleStatusResponse;
const CreateKTVRobotResponse = models.CreateKTVRobotResponse;
const DescribePackageItemsResponse = models.DescribePackageItemsResponse;
const DescribeCloudMusicPurchasedResponse = models.DescribeCloudMusicPurchasedResponse;
const KTVMusicTagGroup = models.KTVMusicTagGroup;
const DataInfo = models.DataInfo;
const ApplicationLicenseInput = models.ApplicationLicenseInput;
const Artist = models.Artist;
const SetDestroyModeCommandInput = models.SetDestroyModeCommandInput;
const ReportDataResponse = models.ReportDataResponse;
const SearchKTVMusicsResponse = models.SearchKTVMusicsResponse;
const DescribeItemByIdRequest = models.DescribeItemByIdRequest;
const PutMusicOnTheShelvesResponse = models.PutMusicOnTheShelvesResponse;
const SyncRobotCommand = models.SyncRobotCommand;
const DescribeKTVSingerMusicsResponse = models.DescribeKTVSingerMusicsResponse;
const DescribeItemsResponse = models.DescribeItemsResponse;
const DescribePkgOfflineMusicResponse = models.DescribePkgOfflineMusicResponse;
const KTVSingerInfo = models.KTVSingerInfo;
const SetVolumeCommandInput = models.SetVolumeCommandInput;
const PutMusicOnTheShelvesRequest = models.PutMusicOnTheShelvesRequest;
const DescribeCloudMusicRequest = models.DescribeCloudMusicRequest;
const SortBy = models.SortBy;
const DescribeKTVMusicDetailResponse = models.DescribeKTVMusicDetailResponse;
const DescribeKTVRobotsRequest = models.DescribeKTVRobotsRequest;
const DescribeKTVMusicTagsResponse = models.DescribeKTVMusicTagsResponse;
const DescribeKTVMusicTagsRequest = models.DescribeKTVMusicTagsRequest;
const JoinRoomInput = models.JoinRoomInput;
const DestroyKTVRobotResponse = models.DestroyKTVRobotResponse;
const CreateKTVRobotRequest = models.CreateKTVRobotRequest;
const KTVSuggestionInfo = models.KTVSuggestionInfo;
const DescribeKTVTopListRequest = models.DescribeKTVTopListRequest;
const DescribeKTVPlaylistDetailRequest = models.DescribeKTVPlaylistDetailRequest;
const Music = models.Music;
const DescribeStationsResponse = models.DescribeStationsResponse;
const DescribeCloudMusicPurchasedRequest = models.DescribeCloudMusicPurchasedRequest;
const PackageItem = models.PackageItem;
const DescribeKTVPlaylistsRequest = models.DescribeKTVPlaylistsRequest;
const TRTCJoinRoomInput = models.TRTCJoinRoomInput;
const DescribePackageItemsRequest = models.DescribePackageItemsRequest;
const AuthInfo = models.AuthInfo;
const DescribeKTVRobotsResponse = models.DescribeKTVRobotsResponse;
const UseRange = models.UseRange;
const DescribeStationsRequest = models.DescribeStationsRequest;
const DescribeKTVSingerMusicsRequest = models.DescribeKTVSingerMusicsRequest;
const DescribeKTVSingerCategoriesResponse = models.DescribeKTVSingerCategoriesResponse;
const DescribeKTVSingersRequest = models.DescribeKTVSingersRequest;
const SetPlaylistCommandInput = models.SetPlaylistCommandInput;
const SyncKTVRobotCommandResponse = models.SyncKTVRobotCommandResponse;
const BatchDescribeKTVMusicDetailsResponse = models.BatchDescribeKTVMusicDetailsResponse;
const SearchKTVMusicsRequest = models.SearchKTVMusicsRequest;
const KTVPlaylistBaseInfo = models.KTVPlaylistBaseInfo;
const DescribeKTVSingersResponse = models.DescribeKTVSingersResponse;
const DescribeItemByIdResponse = models.DescribeItemByIdResponse;
const MusicStatus = models.MusicStatus;
const KTVSingerCategoryInfo = models.KTVSingerCategoryInfo;
const BatchDescribeKTVMusicDetailsRequest = models.BatchDescribeKTVMusicDetailsRequest;
const SendMessageCommandInput = models.SendMessageCommandInput;
const KTVMusicDefinitionInfo = models.KTVMusicDefinitionInfo;
const Album = models.Album;
const DescribeLyricResponse = models.DescribeLyricResponse;
const KTVMusicBaseInfo = models.KTVMusicBaseInfo;
const SyncKTVRobotCommandRequest = models.SyncKTVRobotCommandRequest;
const DescribeKTVSuggestionsRequest = models.DescribeKTVSuggestionsRequest;
const DescribeKTVPlaylistsResponse = models.DescribeKTVPlaylistsResponse;
const DescribeKTVPlaylistDetailResponse = models.DescribeKTVPlaylistDetailResponse;
const SetAudioParamCommandInput = models.SetAudioParamCommandInput;
const TakeMusicOffShelves = models.TakeMusicOffShelves;
const OfflineMusicDetail = models.OfflineMusicDetail;
const DescribeAuthInfoRequest = models.DescribeAuthInfoRequest;
const Package = models.Package;
const SetPlayModeCommandInput = models.SetPlayModeCommandInput;
const KTVRobotInfo = models.KTVRobotInfo;
const DescribeItemsRequest = models.DescribeItemsRequest;
const Item = models.Item;
const DescribeKTVTopListResponse = models.DescribeKTVTopListResponse;
const MusicOpenDetail = models.MusicOpenDetail;
const DescribePackagesRequest = models.DescribePackagesRequest;
const DescribePackagesResponse = models.DescribePackagesResponse;
const Lyric = models.Lyric;
const TakeMusicOffShelvesResponse = models.TakeMusicOffShelvesResponse;


/**
 * ame client
 * @class
 */
class AmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ame.tencentcloudapi.com", "2019-09-16", credential, region, profile);
    }
    
    /**
     * 获取已购曲库包列表接口
     * @param {DescribePackagesRequest} req
     * @param {function(string, DescribePackagesResponse):void} cb
     * @public
     */
    DescribePackages(req, cb) {
        let resp = new DescribePackagesResponse();
        this.request("DescribePackages", req, resp, cb);
    }

    /**
     * 根据接口的模式及歌曲ID来取得歌词信息或者波形图信息。
     * @param {DescribeLyricRequest} req
     * @param {function(string, DescribeLyricResponse):void} cb
     * @public
     */
    DescribeLyric(req, cb) {
        let resp = new DescribeLyricResponse();
        this.request("DescribeLyric", req, resp, cb);
    }

    /**
     * 该服务后续会停用，不再建议使用
     * @param {DescribeItemsRequest} req
     * @param {function(string, DescribeItemsResponse):void} cb
     * @public
     */
    DescribeItems(req, cb) {
        let resp = new DescribeItemsResponse();
        this.request("DescribeItems", req, resp, cb);
    }

    /**
     * 获取授权项目信息列表
     * @param {DescribeAuthInfoRequest} req
     * @param {function(string, DescribeAuthInfoResponse):void} cb
     * @public
     */
    DescribeAuthInfo(req, cb) {
        let resp = new DescribeAuthInfoResponse();
        this.request("DescribeAuthInfo", req, resp, cb);
    }

    /**
     * 根据 Id 列表查询歌曲的详细信息，包含基础信息及播放信息。
     * @param {BatchDescribeKTVMusicDetailsRequest} req
     * @param {function(string, BatchDescribeKTVMusicDetailsResponse):void} cb
     * @public
     */
    BatchDescribeKTVMusicDetails(req, cb) {
        let resp = new BatchDescribeKTVMusicDetailsResponse();
        this.request("BatchDescribeKTVMusicDetails", req, resp, cb);
    }

    /**
     * 获取授权项目下已购云音乐列表
     * @param {DescribeCloudMusicPurchasedRequest} req
     * @param {function(string, DescribeCloudMusicPurchasedResponse):void} cb
     * @public
     */
    DescribeCloudMusicPurchased(req, cb) {
        let resp = new DescribeCloudMusicPurchasedResponse();
        this.request("DescribeCloudMusicPurchased", req, resp, cb);
    }

    /**
     * 根据购买曲库包用户可查询已回退的歌曲信息
     * @param {DescribePkgOfflineMusicRequest} req
     * @param {function(string, DescribePkgOfflineMusicResponse):void} cb
     * @public
     */
    DescribePkgOfflineMusic(req, cb) {
        let resp = new DescribePkgOfflineMusicResponse();
        this.request("DescribePkgOfflineMusic", req, resp, cb);
    }

    /**
     * 根据歌手id，返回该歌手下歌曲列表。



     * @param {DescribeKTVSingerMusicsRequest} req
     * @param {function(string, DescribeKTVSingerMusicsResponse):void} cb
     * @public
     */
    DescribeKTVSingerMusics(req, cb) {
        let resp = new DescribeKTVSingerMusicsResponse();
        this.request("DescribeKTVSingerMusics", req, resp, cb);
    }

    /**
     * 获取曲库包歌曲播放信息接口
     * @param {DescribeMusicRequest} req
     * @param {function(string, DescribeMusicResponse):void} cb
     * @public
     */
    DescribeMusic(req, cb) {
        let resp = new DescribeMusicResponse();
        this.request("DescribeMusic", req, resp, cb);
    }

    /**
     * 获取直播互动曲库联想词
     * @param {DescribeKTVSuggestionsRequest} req
     * @param {function(string, DescribeKTVSuggestionsResponse):void} cb
     * @public
     */
    DescribeKTVSuggestions(req, cb) {
        let resp = new DescribeKTVSuggestionsResponse();
        this.request("DescribeKTVSuggestions", req, resp, cb);
    }

    /**
     * 根据资源方，需要变更的参数，请求该接口进行变更，为空的参数默认为无变更
     * @param {ModifyMusicOnShelvesRequest} req
     * @param {function(string, ModifyMusicOnShelvesResponse):void} cb
     * @public
     */
    ModifyMusicOnShelves(req, cb) {
        let resp = new ModifyMusicOnShelvesResponse();
        this.request("ModifyMusicOnShelves", req, resp, cb);
    }

    /**
     * 获取直播互动曲库标签分组信息和标签信息
     * @param {DescribeKTVMusicTagsRequest} req
     * @param {function(string, DescribeKTVMusicTagsResponse):void} cb
     * @public
     */
    DescribeKTVMusicTags(req, cb) {
        let resp = new DescribeKTVMusicTagsResponse();
        this.request("DescribeKTVMusicTags", req, resp, cb);
    }

    /**
     * 获取曲库包下已核销歌曲列表接口
     * @param {DescribePackageItemsRequest} req
     * @param {function(string, DescribePackageItemsResponse):void} cb
     * @public
     */
    DescribePackageItems(req, cb) {
        let resp = new DescribePackageItemsResponse();
        this.request("DescribePackageItems", req, resp, cb);
    }

    /**
     * 根据资源方所传MusicId进行将歌曲进行下架，多个MusicId使用逗号隔开
     * @param {TakeMusicOffShelvesRequest} req
     * @param {function(string, TakeMusicOffShelvesResponse):void} cb
     * @public
     */
    TakeMusicOffShelves(req, cb) {
        let resp = new TakeMusicOffShelvesResponse();
        this.request("TakeMusicOffShelves", req, resp, cb);
    }

    /**
     * 获取直播互动曲库推荐歌单列表。
     * @param {DescribeKTVPlaylistsRequest} req
     * @param {function(string, DescribeKTVPlaylistsResponse):void} cb
     * @public
     */
    DescribeKTVPlaylists(req, cb) {
        let resp = new DescribeKTVPlaylistsResponse();
        this.request("DescribeKTVPlaylists", req, resp, cb);
    }

    /**
     * 创建机器人，支持进入 RTC 房间，播放直播互动曲库歌曲。
     * @param {CreateKTVRobotRequest} req
     * @param {function(string, CreateKTVRobotResponse):void} cb
     * @public
     */
    CreateKTVRobot(req, cb) {
        let resp = new CreateKTVRobotResponse();
        this.request("CreateKTVRobot", req, resp, cb);
    }

    /**
     * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
     * @param {SyncKTVRobotCommandRequest} req
     * @param {function(string, SyncKTVRobotCommandResponse):void} cb
     * @public
     */
    SyncKTVRobotCommand(req, cb) {
        let resp = new SyncKTVRobotCommandResponse();
        this.request("SyncKTVRobotCommand", req, resp, cb);
    }

    /**
     * 获取直播互动曲库歌曲的周榜和月榜
     * @param {DescribeKTVTopListRequest} req
     * @param {function(string, DescribeKTVTopListResponse):void} cb
     * @public
     */
    DescribeKTVTopList(req, cb) {
        let resp = new DescribeKTVTopListResponse();
        this.request("DescribeKTVTopList", req, resp, cb);
    }

    /**
     * 根据歌单 Id 获取歌单详情，包括歌单的基础信息以及歌曲列表。
     * @param {DescribeKTVPlaylistDetailRequest} req
     * @param {function(string, DescribeKTVPlaylistDetailResponse):void} cb
     * @public
     */
    DescribeKTVPlaylistDetail(req, cb) {
        let resp = new DescribeKTVPlaylistDetailResponse();
        this.request("DescribeKTVPlaylistDetail", req, resp, cb);
    }

    /**
     * 客户上报用户数据功能，为了更好地为用户提供优质服务
     * @param {ReportDataRequest} req
     * @param {function(string, ReportDataResponse):void} cb
     * @public
     */
    ReportData(req, cb) {
        let resp = new ReportDataResponse();
        this.request("ReportData", req, resp, cb);
    }

    /**
     * 获取直播互动曲库歌手分类信息
     * @param {DescribeKTVSingerCategoriesRequest} req
     * @param {function(string, DescribeKTVSingerCategoriesResponse):void} cb
     * @public
     */
    DescribeKTVSingerCategories(req, cb) {
        let resp = new DescribeKTVSingerCategoriesResponse();
        this.request("DescribeKTVSingerCategories", req, resp, cb);
    }

    /**
     * 该服务后续会停用，不再建议使用
     * @param {DescribeStationsRequest} req
     * @param {function(string, DescribeStationsResponse):void} cb
     * @public
     */
    DescribeStations(req, cb) {
        let resp = new DescribeStationsResponse();
        this.request("DescribeStations", req, resp, cb);
    }

    /**
     * 根据 Id 查询歌曲的详细信息，包含基础信息及播放信息。
     * @param {DescribeKTVMusicDetailRequest} req
     * @param {function(string, DescribeKTVMusicDetailResponse):void} cb
     * @public
     */
    DescribeKTVMusicDetail(req, cb) {
        let resp = new DescribeKTVMusicDetailResponse();
        this.request("DescribeKTVMusicDetail", req, resp, cb);
    }

    /**
     * 根据歌曲ID查询歌曲信息
     * @param {DescribeItemByIdRequest} req
     * @param {function(string, DescribeItemByIdResponse):void} cb
     * @public
     */
    DescribeItemById(req, cb) {
        let resp = new DescribeItemByIdResponse();
        this.request("DescribeItemById", req, resp, cb);
    }

    /**
     * 根据音乐信息查询音乐是否在售
     * @param {DescribeMusicSaleStatusRequest} req
     * @param {function(string, DescribeMusicSaleStatusResponse):void} cb
     * @public
     */
    DescribeMusicSaleStatus(req, cb) {
        let resp = new DescribeMusicSaleStatusResponse();
        this.request("DescribeMusicSaleStatus", req, resp, cb);
    }

    /**
     * 根据过滤条件，返回匹配的歌手列表。
     * @param {DescribeKTVSingersRequest} req
     * @param {function(string, DescribeKTVSingersResponse):void} cb
     * @public
     */
    DescribeKTVSingers(req, cb) {
        let resp = new DescribeKTVSingersResponse();
        this.request("DescribeKTVSingers", req, resp, cb);
    }

    /**
     * 销毁机器人，机器人退出 RTC 房间。
     * @param {DestroyKTVRobotRequest} req
     * @param {function(string, DestroyKTVRobotResponse):void} cb
     * @public
     */
    DestroyKTVRobot(req, cb) {
        let resp = new DestroyKTVRobotResponse();
        this.request("DestroyKTVRobot", req, resp, cb);
    }

    /**
     * 获取云音乐播放信息接口
     * @param {DescribeCloudMusicRequest} req
     * @param {function(string, DescribeCloudMusicResponse):void} cb
     * @public
     */
    DescribeCloudMusic(req, cb) {
        let resp = new DescribeCloudMusicResponse();
        this.request("DescribeCloudMusic", req, resp, cb);
    }

    /**
     * 根据资源方所传歌曲信息，进行歌曲上架，多个歌曲同时请求时，需构造复合结构进行请求
     * @param {PutMusicOnTheShelvesRequest} req
     * @param {function(string, PutMusicOnTheShelvesResponse):void} cb
     * @public
     */
    PutMusicOnTheShelves(req, cb) {
        let resp = new PutMusicOnTheShelvesResponse();
        this.request("PutMusicOnTheShelves", req, resp, cb);
    }

    /**
     * 获取机器人列表，支持 Id、状态等过滤条件。
     * @param {DescribeKTVRobotsRequest} req
     * @param {function(string, DescribeKTVRobotsResponse):void} cb
     * @public
     */
    DescribeKTVRobots(req, cb) {
        let resp = new DescribeKTVRobotsResponse();
        this.request("DescribeKTVRobots", req, resp, cb);
    }

    /**
     * 根据搜索条件，返回匹配的歌曲列表。
     * @param {SearchKTVMusicsRequest} req
     * @param {function(string, SearchKTVMusicsResponse):void} cb
     * @public
     */
    SearchKTVMusics(req, cb) {
        let resp = new SearchKTVMusicsResponse();
        this.request("SearchKTVMusics", req, resp, cb);
    }


}
module.exports = AmeClient;
