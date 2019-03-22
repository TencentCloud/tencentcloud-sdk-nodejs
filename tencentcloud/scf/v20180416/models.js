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
 * CreateFunction请求参数结构体
 * @class
 */
class CreateFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的函数名称，函数名称支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度2-60
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的代码. 注意：不能同时指定Cos与ZipFile
         * @type {Code || null}
         */
        this.Code = null;

        /**
         * 函数处理方法名称，名称格式支持 "文件名称.方法名称" 形式，文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求是 2-60 个字符
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 函数描述,最大支持 1000 个英文字母、数字、空格、逗号、换行符和英文句号，支持中文
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数运行时内存大小，默认为 128M，可选范围 128MB-1536MB，并且以 128MB 为阶梯
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数最长执行时间，单位为秒，可选值范围 1-300 秒，默认为 3 秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数的环境变量
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10， PHP5， PHP7，Golang1 和 Java8，默认Python2.7
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的私有网络配置
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 函数日志投递到的CLS LogsetID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * 函数日志投递到的CLS TopicID
         * @type {string || null}
         */
        this.ClsTopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

        if (params.Code) {
            let obj = new Code();
            obj.deserialize(params.Code)
            this.Code = obj;
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;

    }
}

/**
 * DeleteFunction请求参数结构体
 * @class
 */
class DeleteFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

    }
}

/**
 * CopyFunction返回参数结构体
 * @class
 */
class CopyFunctionResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFunction请求参数结构体
 * @class
 */
class GetFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取详情的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的版本号
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 是否显示代码, TRUE表示显示代码，FALSE表示不显示代码,大于1M的入口文件不会显示
         * @type {string || null}
         */
        this.ShowCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.ShowCode = 'ShowCode' in params ? params.ShowCode : null;

    }
}

/**
 * 函数的环境变量参数
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境变量数组
         * @type {Array.<Variable> || null}
         */
        this.Variables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Variables) {
            this.Variables = new Array();
            for (let z in params.Variables) {
                let obj = new Variable();
                obj.deserialize(params.Variables[z]);
                this.Variables.push(obj);
            }
        }

    }
}

/**
 * 触发器类型
 * @class
 */
class Trigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器最后修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 触发器类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 触发器详细配置
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发器创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 使能开关
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 客户自定义参数
         * @type {string || null}
         */
        this.CustomArgument = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.CustomArgument = 'CustomArgument' in params ? params.CustomArgument : null;

    }
}

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

        if (params.Result) {
            let obj = new Result();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFunction返回参数结构体
 * @class
 */
class CreateFunctionResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 函数列表
 * @class
 */
class Function extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 运行时
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 函数状态详情
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 函数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * RequestResponse(同步) 和 Event(异步)，默认为同步
         * @type {string || null}
         */
        this.InvocationType = null;

        /**
         * 触发函数的版本号
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 运行函数时的参数，以json格式传入，最大支持的参数长度是 1M
         * @type {string || null}
         */
        this.ClientContext = null;

        /**
         * 同步调用时指定该字段，返回值会包含4K的日志，可选值为None和Tail，默认值为None。当该值为Tail时，返回参数中的logMsg字段会包含对应的函数执行日志
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.InvocationType = 'InvocationType' in params ? params.InvocationType : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.ClientContext = 'ClientContext' in params ? params.ClientContext : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * UpdateFunctionConfiguration请求参数结构体
 * @class
 */
class UpdateFunctionConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要修改的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数描述。最大支持 1000 个英文字母、数字、空格、逗号和英文句号，支持中文
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数运行时内存大小，默认为 128 M，可选范 128 M-1536 M
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数最长执行时间，单位为秒，可选值范 1-300 秒，默认为 3 秒
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，PHP5， PHP7，Golang1 和 Java8
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的环境变量
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * 函数的私有网络配置
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }

    }
}

/**
 * 私有网络参数配置
 * @class
 */
class VpcConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络 的 id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网的 id
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * ListFunctions返回参数结构体
 * @class
 */
class ListFunctionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数列表
         * @type {Array.<Function> || null}
         */
        this.Functions = null;

        /**
         * 总数
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

        if (params.Functions) {
            this.Functions = new Array();
            for (let z in params.Functions) {
                let obj = new Function();
                obj.deserialize(params.Functions[z]);
                this.Functions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTrigger返回参数结构体
 * @class
 */
class CreateTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器信息
         * @type {Trigger || null}
         */
        this.TriggerInfo = null;

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

        if (params.TriggerInfo) {
            let obj = new Trigger();
            obj.deserialize(params.TriggerInfo)
            this.TriggerInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.Log = 'Log' in params ? params.Log : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.BillDuration = 'BillDuration' in params ? params.BillDuration : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.InvokeResult = 'InvokeResult' in params ? params.InvokeResult : null;

    }
}

/**
 * CopyFunction请求参数结构体
 * @class
 */
class CopyFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 新函数的名称
         * @type {string || null}
         */
        this.NewFunctionName = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 将函数复制到的命名空间，默认为default
         * @type {string || null}
         */
        this.TargetNamespace = null;

        /**
         * 函数描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 要将函数复制到的地域，不填则默认为当前地域
         * @type {string || null}
         */
        this.TargetRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.NewFunctionName = 'NewFunctionName' in params ? params.NewFunctionName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.TargetNamespace = 'TargetNamespace' in params ? params.TargetNamespace : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.TargetRegion = 'TargetRegion' in params ? params.TargetRegion : null;

    }
}

/**
 * UpdateFunctionConfiguration返回参数结构体
 * @class
 */
class UpdateFunctionConfigurationResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 变量参数
 * @class
 */
class Variable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变量的名称
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 变量的值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * GetFunction返回参数结构体
 * @class
 */
class GetFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的最后修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 函数的代码
         * @type {string || null}
         */
        this.CodeInfo = null;

        /**
         * 函数的描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 函数的触发器列表
         * @type {Array.<Trigger> || null}
         */
        this.Triggers = null;

        /**
         * 函数的入口
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 函数代码大小
         * @type {number || null}
         */
        this.CodeSize = null;

        /**
         * 函数的超时时间
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.FunctionVersion = null;

        /**
         * 函数的最大可用内存
         * @type {number || null}
         */
        this.MemorySize = null;

        /**
         * 函数的运行环境
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的私有网络
         * @type {VpcConfig || null}
         */
        this.VpcConfig = null;

        /**
         * 是否使用GPU
         * @type {string || null}
         */
        this.UseGpu = null;

        /**
         * 函数的环境变量
         * @type {Environment || null}
         */
        this.Environment = null;

        /**
         * 代码是否正确
         * @type {string || null}
         */
        this.CodeResult = null;

        /**
         * 代码错误信息
         * @type {string || null}
         */
        this.CodeError = null;

        /**
         * 代码错误码
         * @type {number || null}
         */
        this.ErrNo = null;

        /**
         * 函数的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 函数绑定的角色
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 是否自动安装依赖
         * @type {string || null}
         */
        this.InstallDependency = null;

        /**
         * 函数状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 日志投递到的Cls日志集
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * 日志投递到的Cls Topic
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 函数ID
         * @type {string || null}
         */
        this.FunctionId = null;

        /**
         * 函数的标签列表
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.CodeInfo = 'CodeInfo' in params ? params.CodeInfo : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new Trigger();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.CodeSize = 'CodeSize' in params ? params.CodeSize : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.FunctionVersion = 'FunctionVersion' in params ? params.FunctionVersion : null;
        this.MemorySize = 'MemorySize' in params ? params.MemorySize : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;

        if (params.VpcConfig) {
            let obj = new VpcConfig();
            obj.deserialize(params.VpcConfig)
            this.VpcConfig = obj;
        }
        this.UseGpu = 'UseGpu' in params ? params.UseGpu : null;

        if (params.Environment) {
            let obj = new Environment();
            obj.deserialize(params.Environment)
            this.Environment = obj;
        }
        this.CodeResult = 'CodeResult' in params ? params.CodeResult : null;
        this.CodeError = 'CodeError' in params ? params.CodeError : null;
        this.ErrNo = 'ErrNo' in params ? params.ErrNo : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.InstallDependency = 'InstallDependency' in params ? params.InstallDependency : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.FunctionId = 'FunctionId' in params ? params.FunctionId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFunctionLogs返回参数结构体
 * @class
 */
class GetFunctionLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数日志的总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 函数日志信息
         * @type {Array.<FunctionLog> || null}
         */
        this.Data = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new FunctionLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListFunctions请求参数结构体
 * @class
 */
class ListFunctionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime, FunctionName
         * @type {string || null}
         */
        this.Orderby = null;

        /**
         * 数据偏移量，默认值为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认值为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 支持FunctionName模糊匹配
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 函数描述，支持模糊搜索
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 过滤条件。
- tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。

每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Orderby = 'Orderby' in params ? params.Orderby : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DeleteTrigger返回参数结构体
 * @class
 */
class DeleteTriggerResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTrigger请求参数结构体
 * @class
 */
class DeleteTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 要删除的触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 要删除的触发器类型，目前支持 cos 、cmq、 timer、ckafka 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 如果删除的触发器类型为 COS 触发器，该字段为必填值，存放 JSON 格式的数据 {"event":"cos:ObjectCreated:*"}，数据内容和 SetTrigger 接口中该字段的格式相同；如果删除的触发器类型为定时触发器或 CMQ 触发器，可以不指定该字段
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 函数的版本信息
         * @type {string || null}
         */
        this.Qualifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;

    }
}

/**
 * 函数代码
 * @class
 */
class Code extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象存储桶名称
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 对象存储对象路径
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * 包含函数代码文件及其依赖项的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M
         * @type {string || null}
         */
        this.ZipFile = null;

        /**
         * 对象存储的地域，地域为北京时需要传入ap-beijing,北京一区时需要传递ap-beijing-1，其他的地域不需要传递。
         * @type {string || null}
         */
        this.CosBucketRegion = null;

        /**
         * 如果是通过Demo创建的话，需要传入DemoId
         * @type {string || null}
         */
        this.DemoId = null;

        /**
         * 如果是从TempCos创建的话，需要传入TempCosObjectName
         * @type {string || null}
         */
        this.TempCosObjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;
        this.DemoId = 'DemoId' in params ? params.DemoId : null;
        this.TempCosObjectName = 'TempCosObjectName' in params ? params.TempCosObjectName : null;

    }
}

/**
 * UpdateFunctionCode请求参数结构体
 * @class
 */
class UpdateFunctionCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数处理方法名称。名称格式支持“文件名称.函数名称”形式，文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求 2-60 个字符
         * @type {string || null}
         */
        this.Handler = null;

        /**
         * 要修改的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 对象存储桶名称
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 对象存储对象路径
         * @type {string || null}
         */
        this.CosObjectName = null;

        /**
         * 包含函数代码文件及其依赖项的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M
         * @type {string || null}
         */
        this.ZipFile = null;

        /**
         * 对象存储的地域，注：北京分为ap-beijing和ap-beijing-1
         * @type {string || null}
         */
        this.CosBucketRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Handler = 'Handler' in params ? params.Handler : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosObjectName = 'CosObjectName' in params ? params.CosObjectName : null;
        this.ZipFile = 'ZipFile' in params ? params.ZipFile : null;
        this.CosBucketRegion = 'CosBucketRegion' in params ? params.CosBucketRegion : null;

    }
}

/**
 * GetFunctionLogs请求参数结构体
 * @class
 */
class GetFunctionLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 数据的偏移量，Offset+Limit不能大于10000
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据的长度，Offset+Limit不能大于10000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 以升序还是降序的方式对日志进行排序，可选值 desc和 asc
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 根据某个字段排序日志,支持以下字段：function_name, duration, mem_usage, start_time
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 日志过滤条件。可用来区分正确和错误日志，filter.retCode=not0 表示只返回错误日志，filter.retCode=is0 表示只返回正确日志，不传，则返回所有日志
         * @type {LogFilter || null}
         */
        this.Filter = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 执行该函数对应的requestId
         * @type {string || null}
         */
        this.FunctionRequestId = null;

        /**
         * 查询的具体日期，例如：2017-05-16 20:00:00，只能与endtime相差一天之内
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的具体日期，例如：2017-05-16 20:59:59，只能与startTime相差一天之内
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

        if (params.Filter) {
            let obj = new LogFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.FunctionRequestId = 'FunctionRequestId' in params ? params.FunctionRequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateTrigger请求参数结构体
 * @class
 */
class CreateTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建触发器绑定的函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 新建触发器名称。如果是定时触发器，名称支持英文字母、数字、连接符和下划线，最长100个字符；如果是其他触发器，见具体触发器绑定参数的说明
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发器类型，目前支持 cos 、cmq、 timer、 ckafka类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 触发器对应的参数，如果是 timer 类型的触发器其内容是 Linux cron 表达式，如果是其他触发器，见具体触发器说明
         * @type {string || null}
         */
        this.TriggerDesc = null;

        /**
         * 函数的版本
         * @type {string || null}
         */
        this.Qualifier = null;

        /**
         * 触发器的初始是能状态 OPEN表示开启 CLOSE表示关闭
         * @type {string || null}
         */
        this.Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TriggerDesc = 'TriggerDesc' in params ? params.TriggerDesc : null;
        this.Qualifier = 'Qualifier' in params ? params.Qualifier : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

    }
}

/**
 * DeleteFunction返回参数结构体
 * @class
 */
class DeleteFunctionResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 函数标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签的value
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 日志信息
 * @class
 */
class FunctionLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数的名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数执行完成后的返回值
         * @type {string || null}
         */
        this.RetMsg = null;

        /**
         * 执行该函数对应的requestId
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 函数开始执行时的时间点
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 函数执行结果，如果是 0 表示执行成功，其他值表示失败
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * 函数调用是否结束，如果是 1 表示执行结束，其他值表示调用异常
         * @type {number || null}
         */
        this.InvokeFinished = null;

        /**
         * 函数执行耗时，单位为 ms
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 函数计费时间，根据 duration 向上取最近的 100ms，单位为ms
         * @type {number || null}
         */
        this.BillDuration = null;

        /**
         * 函数执行时消耗实际内存大小，单位为 Byte
         * @type {number || null}
         */
        this.MemUsage = null;

        /**
         * 函数执行过程中的日志输出
         * @type {string || null}
         */
        this.Log = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.InvokeFinished = 'InvokeFinished' in params ? params.InvokeFinished : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.BillDuration = 'BillDuration' in params ? params.BillDuration : null;
        this.MemUsage = 'MemUsage' in params ? params.MemUsage : null;
        this.Log = 'Log' in params ? params.Log : null;

    }
}

/**
 * UpdateFunctionCode返回参数结构体
 * @class
 */
class UpdateFunctionCodeResponse extends  AbstractModel {
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志过滤条件，用于区分正确与错误日志
 * @class
 */
class LogFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * filter.RetCode=not0 表示只返回错误日志，filter.RetCode=is0 表示只返回正确日志，无输入则返回所有日志。
         * @type {string || null}
         */
        this.RetCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;

    }
}

module.exports = {
    CreateFunctionRequest: CreateFunctionRequest,
    DeleteFunctionRequest: DeleteFunctionRequest,
    CopyFunctionResponse: CopyFunctionResponse,
    GetFunctionRequest: GetFunctionRequest,
    Environment: Environment,
    Trigger: Trigger,
    InvokeResponse: InvokeResponse,
    CreateFunctionResponse: CreateFunctionResponse,
    Function: Function,
    InvokeRequest: InvokeRequest,
    UpdateFunctionConfigurationRequest: UpdateFunctionConfigurationRequest,
    VpcConfig: VpcConfig,
    ListFunctionsResponse: ListFunctionsResponse,
    CreateTriggerResponse: CreateTriggerResponse,
    Result: Result,
    CopyFunctionRequest: CopyFunctionRequest,
    UpdateFunctionConfigurationResponse: UpdateFunctionConfigurationResponse,
    Filter: Filter,
    Variable: Variable,
    GetFunctionResponse: GetFunctionResponse,
    GetFunctionLogsResponse: GetFunctionLogsResponse,
    ListFunctionsRequest: ListFunctionsRequest,
    DeleteTriggerResponse: DeleteTriggerResponse,
    DeleteTriggerRequest: DeleteTriggerRequest,
    Code: Code,
    UpdateFunctionCodeRequest: UpdateFunctionCodeRequest,
    GetFunctionLogsRequest: GetFunctionLogsRequest,
    CreateTriggerRequest: CreateTriggerRequest,
    DeleteFunctionResponse: DeleteFunctionResponse,
    Tag: Tag,
    FunctionLog: FunctionLog,
    UpdateFunctionCodeResponse: UpdateFunctionCodeResponse,
    LogFilter: LogFilter,

}
