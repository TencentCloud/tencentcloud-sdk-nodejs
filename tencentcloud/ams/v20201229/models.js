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
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页展示多少条。（默认展示10条）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤参数
         * @type {TaskFilter || null}
         */
        this.Filter = null;

        /**
         * 翻页token，在向前或向后翻页时需要
         * @type {string || null}
         */
        this.PageToken = null;

        /**
         * 开始时间。默认是最近3天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。默认为空
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
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filter) {
            let obj = new TaskFilter();
            obj.deserialize(params.Filter)
            this.Filter = obj;
        }
        this.PageToken = 'PageToken' in params ? params.PageToken : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 *  数据存储信息
 * @class
 */
class StorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型 可选：
URL 资源链接类型
COS 腾讯云对象存储类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 资源链接
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 腾讯云存储桶信息
         * @type {BucketInfo || null}
         */
        this.BucketInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.BucketInfo) {
            let obj = new BucketInfo();
            obj.deserialize(params.BucketInfo)
            this.BucketInfo = obj;
        }

    }
}

/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 * @class
 */
class BucketInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云对象存储，存储桶名称
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 对象Key
         * @type {string || null}
         */
        this.Object = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Object = 'Object' in params ? params.Object : null;

    }
}

/**
 * CreateAudioModerationTask返回参数结构体
 * @class
 */
class CreateAudioModerationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务创建结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskResult> || null}
         */
        this.Results = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建任务时的返回结果
 * @class
 */
class TaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求时传入的DataId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * TaskId，任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 如果错误，该字段表示错误详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * CancelTask请求参数结构体
 * @class
 */
class CancelTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 审核时传入的数据Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 业务类型，用户可以在控制台查看自己配置的BizType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 查询内容审核任务的状态，可选值：
FINISH 已完成
PENDING 等待中
RUNNING 进行中
ERROR 出错
CANCELLED 已取消
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务类型：可选AUDIO（点播音频），LIVE_AUDIO（直播音频）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 智能审核服务对于内容违规类型的等级，可选值：
Pass 建议通过；
Reveiw 建议复审；
Block 建议屏蔽；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 智能审核服务对于内容违规类型的判断，详见返回值列表
如：Label：Porn（色情）；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 输入的媒体信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 音频文本，备注：这里的文本最大只返回前1000个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AudioText = null;

        /**
         * 音频片段审核信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * 错误类型，如果任务状态为Error，则该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorType = null;

        /**
         * 错误描述，如果任务状态为Error，则该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorDescription = null;

        /**
         * 任务创建时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 任务最后更新时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TaskLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.InputInfo) {
            let obj = new InputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.AudioText = 'AudioText' in params ? params.AudioText : null;

        if (params.AudioSegments) {
            this.AudioSegments = new Array();
            for (let z in params.AudioSegments) {
                let obj = new AudioSegments();
                obj.deserialize(params.AudioSegments[z]);
                this.AudioSegments.push(obj);
            }
        }
        this.ErrorType = 'ErrorType' in params ? params.ErrorType : null;
        this.ErrorDescription = 'ErrorDescription' in params ? params.ErrorDescription : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAudioModerationTask请求参数结构体
 * @class
 */
class CreateAudioModerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的任务信息，最多可以同时创建10个任务
         * @type {Array.<TaskInput> || null}
         */
        this.Tasks = null;

        /**
         * 默认为：default，客户可以在音频审核控制台配置自己的BizType
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 审核类型，这里可选：AUDIO (点播音频)和 LIVE_AUDIO（直播音频），默认为 AUDIIO
         * @type {string || null}
         */
        this.Type = null;

        /**
         * （可选）回调签名key，具体可以查看 回调签名示例
         * @type {string || null}
         */
        this.Seed = null;

        /**
         * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
         * @type {string || null}
         */
        this.CallbackUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInput();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Seed = 'Seed' in params ? params.Seed : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

    }
}

/**
 * 音视频任务结构
 * @class
 */
class TaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据ID
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务输入
         * @type {StorageInfo || null}
         */
        this.Input = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Input) {
            let obj = new StorageInfo();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，创建任务后返回的TaskId字段
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 是否展示所有分片，默认只展示命中规则的分片
         * @type {boolean || null}
         */
        this.ShowAllSegments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ShowAllSegments = 'ShowAllSegments' in params ? params.ShowAllSegments : null;

    }
}

/**
 * 任务输出标签
 * @class
 */
class TaskLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 得分，分数是 0 ～ 100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 任务筛选器
 * @class
 */
class TaskFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务业务类型
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 任务类型，可选：VIDEO，AUDIO， LIVE_VIDEO, LIVE_AUDIO
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 建议，可选：Pass, Review,Block
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
         * @type {string || null}
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * 输入信息详情
 * @class
 */
class InputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传入的类型可选：URL，COS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Url地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 桶信息。当输入当时COS时，该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BucketInfo || null}
         */
        this.BucketInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.BucketInfo) {
            let obj = new BucketInfo();
            obj.deserialize(params.BucketInfo)
            this.BucketInfo = obj;
        }

    }
}

/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务总量，为 int 字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 当前页数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskData> || null}
         */
        this.Data = null;

        /**
         * 翻页Token，当已经到最后一页时，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PageToken = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TaskData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.PageToken = 'PageToken' in params ? params.PageToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 音频小语种检测结果
 * @class
 */
class AudioResultDetailLanguageResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语言信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 得分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * CancelTask返回参数结构体
 * @class
 */
class CancelTaskResponse extends  AbstractModel {
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
 * 音频ASR文本审核结果
 * @class
 */
class AudioResultDetailTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 命中的LibId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 命中的LibName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 得分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 审核建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 词库类型 1 黑白库 2 自定义库
         * @type {number || null}
         */
        this.LibType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.LibType = 'LibType' in params ? params.LibType : null;

    }
}

/**
 * 音频输出参数
 * @class
 */
class AudioResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 得分，0-100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 音频ASR文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 音频片段存储URL，有效期为1天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 音频时长
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 拓展字段
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 文本识别结果
         * @type {Array.<AudioResultDetailTextResult> || null}
         */
        this.TextResults = null;

        /**
         * 音频呻吟检测结果
         * @type {Array.<AudioResultDetailMoanResult> || null}
         */
        this.MoanResults = null;

        /**
         * 音频语言检测结果
         * @type {Array.<AudioResultDetailLanguageResult> || null}
         */
        this.LanguageResults = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.TextResults) {
            this.TextResults = new Array();
            for (let z in params.TextResults) {
                let obj = new AudioResultDetailTextResult();
                obj.deserialize(params.TextResults[z]);
                this.TextResults.push(obj);
            }
        }

        if (params.MoanResults) {
            this.MoanResults = new Array();
            for (let z in params.MoanResults) {
                let obj = new AudioResultDetailMoanResult();
                obj.deserialize(params.MoanResults[z]);
                this.MoanResults.push(obj);
            }
        }

        if (params.LanguageResults) {
            this.LanguageResults = new Array();
            for (let z in params.LanguageResults) {
                let obj = new AudioResultDetailLanguageResult();
                obj.deserialize(params.LanguageResults[z]);
                this.LanguageResults.push(obj);
            }
        }

    }
}

/**
 * 音频呻吟审核结果
 * @class
 */
class AudioResultDetailMoanResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定为Moan（呻吟）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 分数
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 子标签码
         * @type {string || null}
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * 任务数据
 * @class
 */
class TaskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的数据ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 建议。可选：Pass，Block，Review
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 输入信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * 任务违规标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 创建时间（ iso 8601 格式）
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间（ iso 8601 格式）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.MediaInfo) {
            let obj = new MediaInfo();
            obj.deserialize(params.MediaInfo)
            this.MediaInfo = obj;
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TaskLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * 媒体类型
 * @class
 */
class MediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编码格式
         * @type {string || null}
         */
        this.Codecs = null;

        /**
         * 流检测时分片时长
注意：此字段可能返回 0，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 宽，单位为像素
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高，单位为像素
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 缩略图
         * @type {string || null}
         */
        this.Thumbnail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codecs = 'Codecs' in params ? params.Codecs : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Thumbnail = 'Thumbnail' in params ? params.Thumbnail : null;

    }
}

/**
 * 声音段信息
 * @class
 */
class AudioSegments extends  AbstractModel {
    constructor(){
        super();

        /**
         * 截帧时间, 单位：秒
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * 结果集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AudioResult || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;

        if (params.Result) {
            let obj = new AudioResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

    }
}

module.exports = {
    DescribeTasksRequest: DescribeTasksRequest,
    StorageInfo: StorageInfo,
    BucketInfo: BucketInfo,
    CreateAudioModerationTaskResponse: CreateAudioModerationTaskResponse,
    TaskResult: TaskResult,
    CancelTaskRequest: CancelTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    CreateAudioModerationTaskRequest: CreateAudioModerationTaskRequest,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    TaskLabel: TaskLabel,
    TaskFilter: TaskFilter,
    InputInfo: InputInfo,
    DescribeTasksResponse: DescribeTasksResponse,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    CancelTaskResponse: CancelTaskResponse,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    TaskData: TaskData,
    MediaInfo: MediaInfo,
    AudioSegments: AudioSegments,

}
