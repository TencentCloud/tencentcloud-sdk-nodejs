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
const DeleteMediaResponse = models.DeleteMediaResponse;
const TempCertificate = models.TempCertificate;
const SearchMediaResponse = models.SearchMediaResponse;
const ModifyMediaInfoResponse = models.ModifyMediaInfoResponse;
const ModifyClassRequest = models.ModifyClassRequest;
const DescribeAllClassRequest = models.DescribeAllClassRequest;
const MediaTranscodeItem = models.MediaTranscodeItem;
const MediaDeleteItem = models.MediaDeleteItem;
const MediaAudioStreamItem = models.MediaAudioStreamItem;
const MediaKeyFrameDescInfo = models.MediaKeyFrameDescInfo;
const DescribeMediaInfosRequest = models.DescribeMediaInfosRequest;
const MediaSnapshotByTimePicInfoItem = models.MediaSnapshotByTimePicInfoItem;
const MediaSampleSnapshotItem = models.MediaSampleSnapshotItem;
const CreateClassRequest = models.CreateClassRequest;
const MediaImageSpriteInfo = models.MediaImageSpriteInfo;
const MediaImageSpriteItem = models.MediaImageSpriteItem;
const MediaSnapshotByTimeOffsetInfo = models.MediaSnapshotByTimeOffsetInfo;
const MediaKeyFrameDescItem = models.MediaKeyFrameDescItem;
const CommitUploadResponse = models.CommitUploadResponse;
const MediaSourceData = models.MediaSourceData;
const CreateClassResponse = models.CreateClassResponse;
const MediaClassInfo = models.MediaClassInfo;
const MediaVideoStreamItem = models.MediaVideoStreamItem;
const ModifyClassResponse = models.ModifyClassResponse;
const ModifyMediaInfoRequest = models.ModifyMediaInfoRequest;
const MediaAnimatedGraphicsInfo = models.MediaAnimatedGraphicsInfo;
const MediaMetaData = models.MediaMetaData;
const SearchMediaRequest = models.SearchMediaRequest;
const ApplyUploadResponse = models.ApplyUploadResponse;
const DeleteClassRequest = models.DeleteClassRequest;
const DescribeAllClassResponse = models.DescribeAllClassResponse;
const DeleteClassResponse = models.DeleteClassResponse;
const ApplyUploadRequest = models.ApplyUploadRequest;
const MediaSampleSnapshotInfo = models.MediaSampleSnapshotInfo;
const CommitUploadRequest = models.CommitUploadRequest;
const MediaSnapshotByTimeOffsetItem = models.MediaSnapshotByTimeOffsetItem;
const MediaBasicInfo = models.MediaBasicInfo;
const MediaInfo = models.MediaInfo;
const MediaAnimatedGraphicsItem = models.MediaAnimatedGraphicsItem;
const SortBy = models.SortBy;
const MediaTranscodeInfo = models.MediaTranscodeInfo;
const DeleteMediaRequest = models.DeleteMediaRequest;
const DescribeMediaInfosResponse = models.DescribeMediaInfosResponse;


/**
 * vod client
 * @class
 */
class VodClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vod.tencentcloudapi.com", "2018-07-17", credential, region, profile);
    }
    
    /**
     * 该接口用于确认媒体文件（和封面文件）上传到腾讯云点播的结果，并存储媒体信息，返回文件的播放地址和文件 ID。
     * @param {CommitUploadRequest} req
     * @param {function(string, CommitUploadResponse):void} cb
     * @public
     */
    CommitUpload(req, cb) {
        let resp = new CommitUploadResponse();
        this.request("CommitUpload", req, resp, cb);
    }

    /**
     * 1. 该接口可以获取多个视频的多种信息，包括：
    1. 基础信息（basicInfo）：包括视频名称、大小、时长、封面图片等。
    2. 元信息（metaData）：包括视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后，动图相关信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后，相关截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图之后，雪碧图的相关信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，各个截图的信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的各个打点信息。
2. 可以指定回包只返回部分信息。
     * @param {DescribeMediaInfosRequest} req
     * @param {function(string, DescribeMediaInfosResponse):void} cb
     * @public
     */
    DescribeMediaInfos(req, cb) {
        let resp = new DescribeMediaInfosResponse();
        this.request("DescribeMediaInfos", req, resp, cb);
    }

    /**
     * 搜索媒体信息，支持文本模糊搜索及条件过滤。
<li>该接口单次请求最多返回100条数据。</li>
<li>搜索结果超过 5000条，不再支持分页查询超过 5000 部分的数据。</li>
     * @param {SearchMediaRequest} req
     * @param {function(string, SearchMediaResponse):void} cb
     * @public
     */
    SearchMedia(req, cb) {
        let resp = new SearchMediaResponse();
        this.request("SearchMedia", req, resp, cb);
    }

    /**
     * 修改媒体分类属性。
     * @param {ModifyClassRequest} req
     * @param {function(string, ModifyClassResponse):void} cb
     * @public
     */
    ModifyClass(req, cb) {
        let resp = new ModifyClassResponse();
        this.request("ModifyClass", req, resp, cb);
    }

    /**
     * * 仅当待删分类无子分类且无媒体关联情况下，可删除分类；
* 否则，请先执行[删除媒体](http://139.199.214.26/document/product/266/18115?!preview&preview_docmenu=1&lang=cn&!document=1)及子分类，再删除该分类；
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        let resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }

    /**
     * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面等。
     * @param {ModifyMediaInfoRequest} req
     * @param {function(string, ModifyMediaInfoResponse):void} cb
     * @public
     */
    ModifyMediaInfo(req, cb) {
        let resp = new ModifyMediaInfoResponse();
        this.request("ModifyMediaInfo", req, resp, cb);
    }

    /**
     * * 获得用户的所有分类信息。
     * @param {DescribeAllClassRequest} req
     * @param {function(string, DescribeAllClassResponse):void} cb
     * @public
     */
    DescribeAllClass(req, cb) {
        let resp = new DescribeAllClassResponse();
        this.request("DescribeAllClass", req, resp, cb);
    }

    /**
     * * 删除媒体及其对应的视频处理文件（如转码视频、雪碧图、截图、微信发布视频等）；
* 可单独删除指定 ID 的视频文件下的转码，或者微信发布文件；
     * @param {DeleteMediaRequest} req
     * @param {function(string, DeleteMediaResponse):void} cb
     * @public
     */
    DeleteMedia(req, cb) {
        let resp = new DeleteMediaResponse();
        this.request("DeleteMedia", req, resp, cb);
    }

    /**
     * * 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到腾讯云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
* 上传流程请参考[服务端上传综述](https://cloud.tencent.com/document/product/266/9759#.E4.B8.8A.E4.BC.A0.E6.B5.81.E7.A8.8B)。
     * @param {ApplyUploadRequest} req
     * @param {function(string, ApplyUploadResponse):void} cb
     * @public
     */
    ApplyUpload(req, cb) {
        let resp = new ApplyUploadResponse();
        this.request("ApplyUpload", req, resp, cb);
    }

    /**
     * * 用于对媒体进行分类管理；
* 该接口不影响既有媒体的分类，如需修改媒体分类，请调用[修改媒体文件属性](http://139.199.214.26/document/product/266/18104?!preview&preview_docmenu=1&lang=cn&!document=1)接口。
* 分类层次不可超过 4 层。
* 每个分类的子类数量不可超过 500 个。
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        let resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
    }


}
module.exports = VodClient;
