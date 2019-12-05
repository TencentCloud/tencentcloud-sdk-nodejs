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
const Album = models.Album;
const DescribeMusicResponse = models.DescribeMusicResponse;
const ImagePath = models.ImagePath;
const DataInfo = models.DataInfo;
const DescribeItemsResponse = models.DescribeItemsResponse;
const Music = models.Music;
const Artist = models.Artist;
const DescribeLyricResponse = models.DescribeLyricResponse;
const DescribeItemsRequest = models.DescribeItemsRequest;
const DescribeStationsRequest = models.DescribeStationsRequest;
const Item = models.Item;
const Station = models.Station;
const Lyric = models.Lyric;
const DescribeLyricRequest = models.DescribeLyricRequest;
const DescribeStationsResponse = models.DescribeStationsResponse;
const DescribeMusicRequest = models.DescribeMusicRequest;


/**
 * ame client
 * @class
 */
class AmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ame.tencentcloudapi.com", "2019-09-16", credential, region, profile);
    }
    
    /**
     * 获取素材库列表时使用
     * @param {DescribeStationsRequest} req
     * @param {function(string, DescribeStationsResponse):void} cb
     * @public
     */
    DescribeStations(req, cb) {
        let resp = new DescribeStationsResponse();
        this.request("DescribeStations", req, resp, cb);
    }

    /**
     * 分类内容下歌曲列表获取，根据CategoryID或CategoryCode
     * @param {DescribeItemsRequest} req
     * @param {function(string, DescribeItemsResponse):void} cb
     * @public
     */
    DescribeItems(req, cb) {
        let resp = new DescribeItemsResponse();
        this.request("DescribeItems", req, resp, cb);
    }

    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
     * @param {DescribeLyricRequest} req
     * @param {function(string, DescribeLyricResponse):void} cb
     * @public
     */
    DescribeLyric(req, cb) {
        let resp = new DescribeLyricResponse();
        this.request("DescribeLyric", req, resp, cb);
    }

    /**
     * 根据接口的模式及歌曲ID来取得对应权限的歌曲播放地址等信息。
     * @param {DescribeMusicRequest} req
     * @param {function(string, DescribeMusicResponse):void} cb
     * @public
     */
    DescribeMusic(req, cb) {
        let resp = new DescribeMusicResponse();
        this.request("DescribeMusic", req, resp, cb);
    }


}
module.exports = AmeClient;
