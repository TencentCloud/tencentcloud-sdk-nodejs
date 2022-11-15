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
 * vm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("vm.tencentcloudapi.com", "2021-09-22", clientConfig);
    }
    /**
     * 查看任务详情DescribeTaskDetail
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * 通过URL或存储桶创建审核任务。

### 直播断流处理说明：
- 请确认已对接[取消任务](https://cloud.tencent.com/document/product/1265/80018)。
- 如果直播任务取消/结束，则终止直播拉流并退出审核。
- 如果直播任务没有取消/结束，直播视频推流因故中断，产品将在将在10分钟内持续拉流重试。如果10分钟检测到图片截帧/音频切片数据，则恢复正常审核，反之，则终止拉流并退出审核。在拉流终止后，用户如有审核需求，需重新送审。

默认接口请求频率限制：20次/秒。
     */
    async CreateVideoModerationTask(req, cb) {
        return this.request("CreateVideoModerationTask", req, cb);
    }
    /**
     * 通过查看审核任务列表接口，可查询任务队列；您可根据多种业务信息（业务类型、审核结果、任务状态等）筛选审核任务列表。<br>

默认接口请求频率限制：**20次/秒**。
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 取消任务
     */
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
}
exports.Client = Client;
