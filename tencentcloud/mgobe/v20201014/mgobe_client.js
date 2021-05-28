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
const DismissRoomRequest = models.DismissRoomRequest;
const ChangeRoomPlayerProfileResponse = models.ChangeRoomPlayerProfileResponse;
const ModifyRoomRequest = models.ModifyRoomRequest;
const Room = models.Room;
const ChangeRoomPlayerProfileRequest = models.ChangeRoomPlayerProfileRequest;
const DescribeRoomResponse = models.DescribeRoomResponse;
const ModifyRoomResponse = models.ModifyRoomResponse;
const DescribePlayerRequest = models.DescribePlayerRequest;
const DismissRoomResponse = models.DismissRoomResponse;
const ChangeRoomPlayerStatusResponse = models.ChangeRoomPlayerStatusResponse;
const Player = models.Player;
const ChangeRoomPlayerStatusRequest = models.ChangeRoomPlayerStatusRequest;
const RemoveRoomPlayerResponse = models.RemoveRoomPlayerResponse;
const DescribePlayerResponse = models.DescribePlayerResponse;
const DescribeRoomRequest = models.DescribeRoomRequest;
const RemoveRoomPlayerRequest = models.RemoveRoomPlayerRequest;
const Team = models.Team;


/**
 * mgobe client
 * @class
 */
class MgobeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mgobe.tencentcloudapi.com", "2020-10-14", credential, region, profile);
    }
    
    /**
     * 该接口用于查询玩家信息。支持两种用法，当OpenId不传的时候，PlayerId必传，传入PlayerId可以查询当前PlayerId的玩家信息，当OpenId传入的时候，PlayerId可不传，按照OpenId查询玩家信息。
     * @param {DescribePlayerRequest} req
     * @param {function(string, DescribePlayerResponse):void} cb
     * @public
     */
    DescribePlayer(req, cb) {
        let resp = new DescribePlayerResponse();
        this.request("DescribePlayer", req, resp, cb);
    }

    /**
     * 修改玩家自定义状态
     * @param {ChangeRoomPlayerStatusRequest} req
     * @param {function(string, ChangeRoomPlayerStatusResponse):void} cb
     * @public
     */
    ChangeRoomPlayerStatus(req, cb) {
        let resp = new ChangeRoomPlayerStatusResponse();
        this.request("ChangeRoomPlayerStatus", req, resp, cb);
    }

    /**
     * 修改房间
     * @param {ModifyRoomRequest} req
     * @param {function(string, ModifyRoomResponse):void} cb
     * @public
     */
    ModifyRoom(req, cb) {
        let resp = new ModifyRoomResponse();
        this.request("ModifyRoom", req, resp, cb);
    }

    /**
     * 踢出房间玩家
     * @param {RemoveRoomPlayerRequest} req
     * @param {function(string, RemoveRoomPlayerResponse):void} cb
     * @public
     */
    RemoveRoomPlayer(req, cb) {
        let resp = new RemoveRoomPlayerResponse();
        this.request("RemoveRoomPlayer", req, resp, cb);
    }

    /**
     * 该接口用于查询房间信息。支持两种用法，当房间Id不传的时候，玩家Id必传，传入玩家Id可以查询当前玩家所在的房间信息，当房间Id传入的时候，玩家Id可不传，按照房间Id查询房间信息。
     * @param {DescribeRoomRequest} req
     * @param {function(string, DescribeRoomResponse):void} cb
     * @public
     */
    DescribeRoom(req, cb) {
        let resp = new DescribeRoomResponse();
        this.request("DescribeRoom", req, resp, cb);
    }

    /**
     * 修改房间玩家自定义属性
     * @param {ChangeRoomPlayerProfileRequest} req
     * @param {function(string, ChangeRoomPlayerProfileResponse):void} cb
     * @public
     */
    ChangeRoomPlayerProfile(req, cb) {
        let resp = new ChangeRoomPlayerProfileResponse();
        this.request("ChangeRoomPlayerProfile", req, resp, cb);
    }

    /**
     * 通过game_id、room_id解散房间
     * @param {DismissRoomRequest} req
     * @param {function(string, DismissRoomResponse):void} cb
     * @public
     */
    DismissRoom(req, cb) {
        let resp = new DismissRoomResponse();
        this.request("DismissRoom", req, resp, cb);
    }


}
module.exports = MgobeClient;
