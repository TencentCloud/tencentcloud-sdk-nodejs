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
const DescribeLyricResponse = models.DescribeLyricResponse;
const ModifyMusicOnShelvesResponse = models.ModifyMusicOnShelvesResponse;
const Station = models.Station;
const Music = models.Music;
const DescribeStationsResponse = models.DescribeStationsResponse;
const DescribePackageItemsResponse = models.DescribePackageItemsResponse;
const DescribeCloudMusicPurchasedRequest = models.DescribeCloudMusicPurchasedRequest;
const PackageItem = models.PackageItem;
const DescribeCloudMusicPurchasedResponse = models.DescribeCloudMusicPurchasedResponse;
const DataInfo = models.DataInfo;
const MusicOpenDetail = models.MusicOpenDetail;
const Package = models.Package;
const ReportDataResponse = models.ReportDataResponse;
const ModifyMusicOnShelvesRequest = models.ModifyMusicOnShelvesRequest;
const DescribePackageItemsRequest = models.DescribePackageItemsRequest;
const AuthInfo = models.AuthInfo;
const TakeMusicOffShelvesRequest = models.TakeMusicOffShelvesRequest;
const TakeMusicOffShelves = models.TakeMusicOffShelves;
const Lyric = models.Lyric;
const DescribeItemByIdRequest = models.DescribeItemByIdRequest;
const DescribeMusicRequest = models.DescribeMusicRequest;
const UseRange = models.UseRange;
const Artist = models.Artist;
const DescribeStationsRequest = models.DescribeStationsRequest;
const PutMusicOnTheShelvesResponse = models.PutMusicOnTheShelvesResponse;
const DescribeItemsRequest = models.DescribeItemsRequest;
const Item = models.Item;
const DescribeCloudMusicResponse = models.DescribeCloudMusicResponse;
const DescribePackagesRequest = models.DescribePackagesRequest;
const MusicDetailInfo = models.MusicDetailInfo;
const ImagePath = models.ImagePath;
const DescribeItemsResponse = models.DescribeItemsResponse;
const DescribeItemByIdResponse = models.DescribeItemByIdResponse;
const PutMusicOnTheShelvesRequest = models.PutMusicOnTheShelvesRequest;
const DescribePackagesResponse = models.DescribePackagesResponse;
const DescribeCloudMusicRequest = models.DescribeCloudMusicRequest;
const DescribeAuthInfoResponse = models.DescribeAuthInfoResponse;
const TakeMusicOffShelvesResponse = models.TakeMusicOffShelvesResponse;
const DescribeLyricRequest = models.DescribeLyricRequest;
const DescribeAuthInfoRequest = models.DescribeAuthInfoRequest;
const ReportDataRequest = models.ReportDataRequest;


/**
 * ame client
 * @class
 */
class AmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ame.tencentcloudapi.com", "2019-09-16", credential, region, profile);
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
     * 该服务后续会停用，不再建议使用
     * @param {DescribeStationsRequest} req
     * @param {function(string, DescribeStationsResponse):void} cb
     * @public
     */
    DescribeStations(req, cb) {
        let resp = new DescribeStationsResponse();
        this.request("DescribeStations", req, resp, cb);
    }


}
module.exports = AmeClient;
