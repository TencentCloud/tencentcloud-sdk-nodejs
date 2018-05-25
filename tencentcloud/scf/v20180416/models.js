const AbstractModel = require("../../common/abstract_model");

/**
 * Invoke返回参数结构体
 * @class
 */
class InvokeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数执行结果
         * @type {Result || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 运行函数的返回
 * @class
 */
class Result extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示执行过程中的日志输出，异步调用返回为空
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 表示执行函数的返回，异步调用返回为空
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * 表示执行函数的错误返回信息，异步调用返回为空
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 执行函数时的内存大小，单位为Byte，异步调用返回为空
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * 表示执行函数的耗时，单位是毫秒，异步调用返回为空
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 表示函数的计费耗时，单位是毫秒，异步调用返回为空
         * @type {number || null}
         */
        this.BillDuration = null;

        /**
         * 此次函数执行的Id
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * 0为正确，异步调用返回为空
         * @type {number || null}
         */
        this.InvokeResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Log = params.Log || null;
        this.RetMsg = params.RetMsg || null;
        this.ErrMsg = params.ErrMsg || null;
        this.MemUsage = params.MemUsage || null;
        this.Duration = params.Duration || null;
        this.BillDuration = params.BillDuration || null;
        this.FunctionRequestId = params.FunctionRequestId || null;
        this.InvokeResult = params.InvokeResult || null;

    }
}

/**
 * Invoke请求参数结构体
 * @class
 */
class InvokeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称。
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * RequestResponse(同步) 和 Event(异步)，默认为同步。
         * @type {string || null}
         */
        this.InvocationType = null;

        /**
         * 触发函数的版本号。
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 运行函数时的参数，以json格式传入，最大支持的参数长度是 1M。
         * @type {string || null}
         */
        this.ClientContext = null;

        /**
         * 同步调用时指定该字段，返回值会包含4K的日志，可选值为None和Tail，默认值为None。当该值为Tail时，返回参数中的logMsg字段会包含对应的函数执行日志。
         * @type {string || null}
         */
        this.LogType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = params.FunctionName || null;
        this.InvocationType = params.InvocationType || null;
        this.Qualifier = params.Qualifier || null;
        this.ClientContext = params.ClientContext || null;
        this.LogType = params.LogType || null;

    }
}

module.exports = {
    InvokeResponse: InvokeResponse,
    Result: Result,
    InvokeRequest: InvokeRequest,

}
