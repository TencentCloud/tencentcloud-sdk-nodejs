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
const AbstractModel = require("../../common/abstract_model");

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务ID，形如abc-a0b1c2xyz
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.TaskId = params.TaskId || null;

    }
}

/**
 * ApplyBlackList请求参数结构体
 * @class
 */
class ApplyBlackListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 黑名单列表
         * @type {Array.<SingleBlackApply> || null}
         */
        this.BlackList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;

        if (params.BlackList) {
            this.BlackList = new Array();
            for (let z in params.BlackList) {
                let obj = new SingleBlackApply();
                obj.deserialize(params.BlackList[z]);
                this.BlackList.push(obj);
            }
        }

    }
}

/**
 * DownloadReport返回参数结构体
 * @class
 */
class DownloadReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日报下载地址
         * @type {string || null}
         */
        this.DailyReportUrl = null;

        /**
         * 结果下载地址
         * @type {string || null}
         */
        this.ResultReportUrl = null;

        /**
         * 明细下载地址
         * @type {string || null}
         */
        this.DetailReportUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DailyReportUrl = params.DailyReportUrl || null;
        this.ResultReportUrl = params.ResultReportUrl || null;
        this.DetailReportUrl = params.DetailReportUrl || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UploadFile返回参数结构体
 * @class
 */
class UploadFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ApplyBlackList返回参数结构体
 * @class
 */
class ApplyBlackListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeRecords请求参数结构体
 * @class
 */
class DescribeRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 案件编号
         * @type {string || null}
         */
        this.AccountNum = null;

        /**
         * 被叫号码
         * @type {string || null}
         */
        this.CalledPhone = null;

        /**
         * 查询起始日期
         * @type {string || null}
         */
        this.StartBizDate = null;

        /**
         * 查询结束日期
         * @type {string || null}
         */
        this.EndBizDate = null;

        /**
         * 分页参数，索引，从0开始
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 分页参数，页长
         * @type {string || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ProductId = params.ProductId || null;
        this.AccountNum = params.AccountNum || null;
        this.CalledPhone = params.CalledPhone || null;
        this.StartBizDate = params.StartBizDate || null;
        this.EndBizDate = params.EndBizDate || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务结果
         * @type {string || null}
         */
        this.TaskResult = null;

        /**
         * 任务类型，001为报告下载，002为数据上传，003为还款数据上传。
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskResult = params.TaskResult || null;
        this.TaskType = params.TaskType || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UploadFile请求参数结构体
 * @class
 */
class UploadFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 文件上传地址，要求地址协议为HTTPS，且URL端口必须为443
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件日期
         * @type {string || null}
         */
        this.FileDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.FileUrl = params.FileUrl || null;
        this.FileName = params.FileName || null;
        this.FileDate = params.FileDate || null;

    }
}

/**
 * DownloadReport请求参数结构体
 * @class
 */
class DownloadReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 报告日期
         * @type {string || null}
         */
        this.ReportDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ReportDate = params.ReportDate || null;

    }
}

/**
 * DescribeRecords返回参数结构体
 * @class
 */
class DescribeRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音列表。
         * @type {Array.<SingleRecord> || null}
         */
        this.RecordList = null;

        /**
         * 录音总量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new SingleRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UploadDataFile返回参数结构体
 * @class
 */
class UploadDataFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据ID
         * @type {string || null}
         */
        this.DataResId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataResId = params.DataResId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 黑名单申请信息
 * @class
 */
class SingleBlackApply extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单类型，01代表手机号码。
         * @type {string || null}
         */
        this.BlackType = null;

        /**
         * 操作类型，A为新增，D为删除。
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 黑名单值，BlackType为01时，填写11位手机号码。
         * @type {string || null}
         */
        this.BlackValue = null;

        /**
         * 备注。
         * @type {string || null}
         */
        this.BlackDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackType = params.BlackType || null;
        this.OperationType = params.OperationType || null;
        this.BlackValue = params.BlackValue || null;
        this.BlackDescription = params.BlackDescription || null;

    }
}

/**
 * UploadDataFile请求参数结构体
 * @class
 */
class UploadDataFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 上传类型，不填默认催收文件，催收文件为data，还款文件为repay。
         * @type {string || null}
         */
        this.UploadModel = null;

        /**
         * 文件，文件与文件地址上传只可选用一种，必须使用multipart/form-data协议来上传二进制流文件，建议使用xlsx格式，大小不超过5MB。
         * @type {binary || null}
         */
        this.File = null;

        /**
         * 文件上传地址，文件与文件地址上传只可选用一种，大小不超过50MB。
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.FileName = params.FileName || null;
        this.UploadModel = params.UploadModel || null;
        this.File = params.File || null;
        this.FileUrl = params.FileUrl || null;

    }
}

/**
 * 录音信息
 * @class
 */
class SingleRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 案件编号。
         * @type {string || null}
         */
        this.AccountNum = null;

        /**
         * 外呼日期。
         * @type {string || null}
         */
        this.BizDate = null;

        /**
         * 开始呼叫时间。
         * @type {string || null}
         */
        this.CallStartTime = null;

        /**
         * 主叫号码。
         * @type {string || null}
         */
        this.CallerPhone = null;

        /**
         * 呼叫方向，O为呼出，I为呼入。
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 通话时长。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 产品ID。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 录音下载链接。
         * @type {string || null}
         */
        this.RecordCosUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountNum = params.AccountNum || null;
        this.BizDate = params.BizDate || null;
        this.CallStartTime = params.CallStartTime || null;
        this.CallerPhone = params.CallerPhone || null;
        this.Direction = params.Direction || null;
        this.Duration = params.Duration || null;
        this.ProductId = params.ProductId || null;
        this.RecordCosUrl = params.RecordCosUrl || null;

    }
}

module.exports = {
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    ApplyBlackListRequest: ApplyBlackListRequest,
    DownloadReportResponse: DownloadReportResponse,
    UploadFileResponse: UploadFileResponse,
    ApplyBlackListResponse: ApplyBlackListResponse,
    DescribeRecordsRequest: DescribeRecordsRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    UploadFileRequest: UploadFileRequest,
    DownloadReportRequest: DownloadReportRequest,
    DescribeRecordsResponse: DescribeRecordsResponse,
    UploadDataFileResponse: UploadDataFileResponse,
    SingleBlackApply: SingleBlackApply,
    UploadDataFileRequest: UploadDataFileRequest,
    SingleRecord: SingleRecord,

}
