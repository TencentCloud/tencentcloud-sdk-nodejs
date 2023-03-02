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
const ApplyChorusResponse = models.ApplyChorusResponse;
const KTVBPMInfo = models.KTVBPMInfo;
const DescribeKTVSuggestionsResponse = models.DescribeKTVSuggestionsResponse;
const KTVMatchRuleMusicInfo = models.KTVMatchRuleMusicInfo;
const JoinRoomInput = models.JoinRoomInput;
const DestroyKTVRobotResponse = models.DestroyKTVRobotResponse;
const MusicAlbumCoverInfo = models.MusicAlbumCoverInfo;
const CreateKTVRobotRequest = models.CreateKTVRobotRequest;
const KTVSuggestionInfo = models.KTVSuggestionInfo;
const SyncKTVRobotCommandRequest = models.SyncKTVRobotCommandRequest;
const DescribeKTVPlaylistDetailRequest = models.DescribeKTVPlaylistDetailRequest;
const KTVMusicDetailInfo = models.KTVMusicDetailInfo;
const CreateKTVRobotResponse = models.CreateKTVRobotResponse;
const DescribeKTVSuggestionsRequest = models.DescribeKTVSuggestionsRequest;
const DescribeKTVMatchMusicsRequest = models.DescribeKTVMatchMusicsRequest;
const DescribeKTVPlaylistsResponse = models.DescribeKTVPlaylistsResponse;
const DescribeKTVPlaylistsRequest = models.DescribeKTVPlaylistsRequest;
const DescribeKTVPlaylistDetailResponse = models.DescribeKTVPlaylistDetailResponse;
const SyncKTVRobotCommandResponse = models.SyncKTVRobotCommandResponse;
const SetDestroyModeCommandInput = models.SetDestroyModeCommandInput;
const SetAudioParamCommandInput = models.SetAudioParamCommandInput;
const KTVMatchMusic = models.KTVMatchMusic;
const TRTCJoinRoomInput = models.TRTCJoinRoomInput;
const DescribeKTVRobotsResponse = models.DescribeKTVRobotsResponse;
const KTVTagGroupInfo = models.KTVTagGroupInfo;
const BatchDescribeKTVMusicDetailsRequest = models.BatchDescribeKTVMusicDetailsRequest;
const AMEMusicBaseInfo = models.AMEMusicBaseInfo;
const DescribeKTVMusicsByTagResponse = models.DescribeKTVMusicsByTagResponse;
const KTVTagInfo = models.KTVTagInfo;
const MusicAlbumInfo = models.MusicAlbumInfo;
const SetPlayModeCommandInput = models.SetPlayModeCommandInput;
const SyncRobotCommand = models.SyncRobotCommand;
const SearchKTVMusicsResponse = models.SearchKTVMusicsResponse;
const KTVRobotInfo = models.KTVRobotInfo;
const DescribeKTVMatchMusicsResponse = models.DescribeKTVMatchMusicsResponse;
const DescribeKTVTagsResponse = models.DescribeKTVTagsResponse;
const ChorusClip = models.ChorusClip;
const SetPlaylistCommandInput = models.SetPlaylistCommandInput;
const ApplyChorusRequest = models.ApplyChorusRequest;
const BatchDescribeKTVMusicDetailsResponse = models.BatchDescribeKTVMusicDetailsResponse;
const KTVMatchRule = models.KTVMatchRule;
const KTVMusicBaseInfo = models.KTVMusicBaseInfo;
const DescribeKTVMusicsByTagRequest = models.DescribeKTVMusicsByTagRequest;
const SearchKTVMusicsRequest = models.SearchKTVMusicsRequest;
const PlayCommandInput = models.PlayCommandInput;
const TimeRange = models.TimeRange;
const KTVPlaylistBaseInfo = models.KTVPlaylistBaseInfo;
const SendMessageCommandInput = models.SendMessageCommandInput;
const DestroyKTVRobotRequest = models.DestroyKTVRobotRequest;
const DescribeKTVRobotsRequest = models.DescribeKTVRobotsRequest;
const DescribeKTVTagsRequest = models.DescribeKTVTagsRequest;
const SeekCommandInput = models.SeekCommandInput;


/**
 * yinsuda client
 * @class
 */
class YinsudaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("yinsuda.tencentcloudapi.com", "2022-05-27", credential, region, profile);
    }
    
    /**
     * 创建机器人，支持进入 RTC 房间，播放曲库歌曲。
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
     * 获取标签分组及分组下的标签列表信息。
     * @param {DescribeKTVTagsRequest} req
     * @param {function(string, DescribeKTVTagsResponse):void} cb
     * @public
     */
    DescribeKTVTags(req, cb) {
        let resp = new DescribeKTVTagsResponse();
        this.request("DescribeKTVTags", req, resp, cb);
    }

    /**
     * 根据歌单 Id 获取歌单详情。
     * @param {DescribeKTVPlaylistDetailRequest} req
     * @param {function(string, DescribeKTVPlaylistDetailResponse):void} cb
     * @public
     */
    DescribeKTVPlaylistDetail(req, cb) {
        let resp = new DescribeKTVPlaylistDetailResponse();
        this.request("DescribeKTVPlaylistDetail", req, resp, cb);
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
     * 根据关键词获取联想词列表。
     * @param {DescribeKTVSuggestionsRequest} req
     * @param {function(string, DescribeKTVSuggestionsResponse):void} cb
     * @public
     */
    DescribeKTVSuggestions(req, cb) {
        let resp = new DescribeKTVSuggestionsResponse();
        this.request("DescribeKTVSuggestions", req, resp, cb);
    }

    /**
     * 批量获取歌曲详细信息，包括：歌词下载链接、播放凭证、音高数据下载链接信息等。
     * @param {BatchDescribeKTVMusicDetailsRequest} req
     * @param {function(string, BatchDescribeKTVMusicDetailsResponse):void} cb
     * @public
     */
    BatchDescribeKTVMusicDetails(req, cb) {
        let resp = new BatchDescribeKTVMusicDetailsResponse();
        this.request("BatchDescribeKTVMusicDetails", req, resp, cb);
    }

    /**
     * 获取歌单列表。
     * @param {DescribeKTVPlaylistsRequest} req
     * @param {function(string, DescribeKTVPlaylistsResponse):void} cb
     * @public
     */
    DescribeKTVPlaylists(req, cb) {
        let resp = new DescribeKTVPlaylistsResponse();
        this.request("DescribeKTVPlaylists", req, resp, cb);
    }

    /**
     * 申请合唱相关信息，用于标记用户的演唱是在合唱场景下。
     * @param {ApplyChorusRequest} req
     * @param {function(string, ApplyChorusResponse):void} cb
     * @public
     */
    ApplyChorus(req, cb) {
        let resp = new ApplyChorusResponse();
        this.request("ApplyChorus", req, resp, cb);
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
     * 根据输入的规则匹配曲库中的歌曲。
     * @param {DescribeKTVMatchMusicsRequest} req
     * @param {function(string, DescribeKTVMatchMusicsResponse):void} cb
     * @public
     */
    DescribeKTVMatchMusics(req, cb) {
        let resp = new DescribeKTVMatchMusicsResponse();
        this.request("DescribeKTVMatchMusics", req, resp, cb);
    }

    /**
     * 根据关键词搜索歌曲，返回相关歌曲列表。
     * @param {SearchKTVMusicsRequest} req
     * @param {function(string, SearchKTVMusicsResponse):void} cb
     * @public
     */
    SearchKTVMusics(req, cb) {
        let resp = new SearchKTVMusicsResponse();
        this.request("SearchKTVMusics", req, resp, cb);
    }

    /**
     * 通过标签过滤歌曲列表。
     * @param {DescribeKTVMusicsByTagRequest} req
     * @param {function(string, DescribeKTVMusicsByTagResponse):void} cb
     * @public
     */
    DescribeKTVMusicsByTag(req, cb) {
        let resp = new DescribeKTVMusicsByTagResponse();
        this.request("DescribeKTVMusicsByTag", req, resp, cb);
    }


}
module.exports = YinsudaClient;
