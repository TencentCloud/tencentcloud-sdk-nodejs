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
const DissolveRoomRequest = models.DissolveRoomRequest;
const DissolveRoomResponse = models.DissolveRoomResponse;
const KickOutUserRequest = models.KickOutUserRequest;
const KickOutUserResponse = models.KickOutUserResponse;


/**
 * trtc client
 * @class
 */
class TrtcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trtc.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * 接口说明：将用户从房间踢出。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     * @param {KickOutUserRequest} req
     * @param {function(string, KickOutUserResponse):void} cb
     * @public
     */
    KickOutUser(req, cb) {
        let resp = new KickOutUserResponse();
        this.request("KickOutUser", req, resp, cb);
    }

    /**
     * 接口说明：把房间所有用户从房间踢出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     * @param {DissolveRoomRequest} req
     * @param {function(string, DissolveRoomResponse):void} cb
     * @public
     */
    DissolveRoom(req, cb) {
        let resp = new DissolveRoomResponse();
        this.request("DissolveRoom", req, resp, cb);
    }


}
module.exports = TrtcClient;
