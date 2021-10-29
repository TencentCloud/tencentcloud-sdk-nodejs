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
 * tiw client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tiw.tencentcloudapi.com", "2019-09-19", clientConfig);
    }
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     */
    async SetOnlineRecordCallback(req, cb) {
        return this.request("SetOnlineRecordCallback", req, cb);
    }
    /**
     * 设置录制视频生成回调地址
     */
    async SetVideoGenerationTaskCallback(req, cb) {
        return this.request("SetVideoGenerationTaskCallback", req, cb);
    }
    /**
     * 创建视频生成任务
     */
    async CreateVideoGenerationTask(req, cb) {
        return this.request("CreateVideoGenerationTask", req, cb);
    }
    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    async SetOnlineRecordCallbackKey(req, cb) {
        return this.request("SetOnlineRecordCallbackKey", req, cb);
    }
    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     */
    async SetTranscodeCallback(req, cb) {
        return this.request("SetTranscodeCallback", req, cb);
    }
    /**
     * 恢复实时录制
     */
    async ResumeOnlineRecord(req, cb) {
        return this.request("ResumeOnlineRecord", req, cb);
    }
    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    async SetTranscodeCallbackKey(req, cb) {
        return this.request("SetTranscodeCallbackKey", req, cb);
    }
    /**
     * 创建白板板书生成任务, 在任务结束后，如果提供了回调地址，将通过回调地址通知板书生成结果
     */
    async CreateSnapshotTask(req, cb) {
        return this.request("CreateSnapshotTask", req, cb);
    }
    /**
     * 查询录制任务状态与结果
     */
    async DescribeOnlineRecord(req, cb) {
        return this.request("DescribeOnlineRecord", req, cb);
    }
    /**
     * 查询实时录制回调地址
     */
    async DescribeOnlineRecordCallback(req, cb) {
        return this.request("DescribeOnlineRecordCallback", req, cb);
    }
    /**
     * 查询白板推流回调地址
     */
    async DescribeWhiteboardPushCallback(req, cb) {
        return this.request("DescribeWhiteboardPushCallback", req, cb);
    }
    /**
     * 发起一个白板推流任务
     */
    async StartWhiteboardPush(req, cb) {
        return this.request("StartWhiteboardPush", req, cb);
    }
    /**
     * 创建一个文档转码任务
     */
    async CreateTranscode(req, cb) {
        return this.request("CreateTranscode", req, cb);
    }
    /**
     * 查询录制视频生成回调地址
     */
    async DescribeVideoGenerationTaskCallback(req, cb) {
        return this.request("DescribeVideoGenerationTaskCallback", req, cb);
    }
    /**
     * 设置白板推流回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    async SetWhiteboardPushCallback(req, cb) {
        return this.request("SetWhiteboardPushCallback", req, cb);
    }
    /**
     * 发起一个实时录制任务
     */
    async StartOnlineRecord(req, cb) {
        return this.request("StartOnlineRecord", req, cb);
    }
    /**
     * 停止实时录制
     */
    async StopOnlineRecord(req, cb) {
        return this.request("StopOnlineRecord", req, cb);
    }
    /**
     * 设置白板推流回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    async SetWhiteboardPushCallbackKey(req, cb) {
        return this.request("SetWhiteboardPushCallbackKey", req, cb);
    }
    /**
     * 查询文档转码任务的执行进度与转码结果
     */
    async DescribeTranscode(req, cb) {
        return this.request("DescribeTranscode", req, cb);
    }
    /**
     * 查询互动白板天维度计费用量。
1. 单次查询统计区间最多不能超过31天。
2. 由于统计延迟等原因，暂时不支持查询当天数据，建议在次日上午7点以后再来查询前一天的用量，例如在10月27日上午7点后，再来查询到10月26日整天的用量

     */
    async DescribeTIWDailyUsage(req, cb) {
        return this.request("DescribeTIWDailyUsage", req, cb);
    }
    /**
     * 停止白板推流任务
     */
    async StopWhiteboardPush(req, cb) {
        return this.request("StopWhiteboardPush", req, cb);
    }
    /**
     * 查询互动白板质量数据
     */
    async DescribeQualityMetrics(req, cb) {
        return this.request("DescribeQualityMetrics", req, cb);
    }
    /**
     * 暂停实时录制
     */
    async PauseOnlineRecord(req, cb) {
        return this.request("PauseOnlineRecord", req, cb);
    }
    /**
     * 查询文档转码回调地址
     */
    async DescribeTranscodeCallback(req, cb) {
        return this.request("DescribeTranscodeCallback", req, cb);
    }
    /**
     * 设置视频生成回调鉴权密钥
     */
    async SetVideoGenerationTaskCallbackKey(req, cb) {
        return this.request("SetVideoGenerationTaskCallbackKey", req, cb);
    }
    /**
     * 查询推流任务状态与结果
     */
    async DescribeWhiteboardPush(req, cb) {
        return this.request("DescribeWhiteboardPush", req, cb);
    }
    /**
     * 查询录制视频生成任务状态与结果
     */
    async DescribeVideoGenerationTask(req, cb) {
        return this.request("DescribeVideoGenerationTask", req, cb);
    }
    /**
     * 获取指定白板板书生成任务信息
     */
    async DescribeSnapshotTask(req, cb) {
        return this.request("DescribeSnapshotTask", req, cb);
    }
}
exports.Client = Client;
