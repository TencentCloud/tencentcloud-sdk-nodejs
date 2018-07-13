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
         * 任务ID
         * @type {number || null}
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
 * DownloadReport返回参数结构体
 * @class
 */
class DownloadReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告下载地址
         * @type {string || null}
         */
        this.ReportUrl = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.ReportUrl = params.ReportUrl || null;
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
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
         * 任务类型，010代表上传任务
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

module.exports = {
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    DownloadReportResponse: DownloadReportResponse,
    UploadFileResponse: UploadFileResponse,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    UploadFileRequest: UploadFileRequest,
    DownloadReportRequest: DownloadReportRequest,

}
