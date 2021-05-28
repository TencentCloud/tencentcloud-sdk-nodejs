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
 * 图片段信息
 * @class
 */
class ImageSegments extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面截帧结果详情
         * @type {ImageResult || null}
         */
        this.Result = null;

        /**
         * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
         * @type {string || null}
         */
        this.OffsetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ImageResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;

    }
}

/**
 * 图片输出结果的子结果
 * @class
 */
class ImageResultResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景
Porn 色情
Sexy 性感
Abuse 谩骂
Ad 广告
等多个识别场景
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 子标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 如果命中场景为涉政，则该数据为人物姓名列表，否则null
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 图片OCR文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 其他详情
         * @type {Array.<ImageResultsResultDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ImageResultsResultDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

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
 * CreateBizConfig请求参数结构体
 * @class
 */
class CreateBizConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务类型，仅限英文字母、数字和下划线（_）组成，长度不超过8位
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 配置信息，
         * @type {MediaModerationConfig || null}
         */
        this.MediaModeration = null;

        /**
         * 业务名称，用于标识业务场景，长度不超过32位
         * @type {string || null}
         */
        this.BizName = null;

        /**
         * 审核内容，可选：Polity (政治); Porn (色情); Illegal(违法);Abuse (谩骂); Terror (暴恐); Ad (广告);
         * @type {Array.<string> || null}
         */
        this.ModerationCategories = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;

        if (params.MediaModeration) {
            let obj = new MediaModerationConfig();
            obj.deserialize(params.MediaModeration)
            this.MediaModeration = obj;
        }
        this.BizName = 'BizName' in params ? params.BizName : null;
        this.ModerationCategories = 'ModerationCategories' in params ? params.ModerationCategories : null;

    }
}

/**
 * DescribeBizConfig请求参数结构体
 * @class
 */
class DescribeBizConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审核业务类类型
         * @type {string || null}
         */
        this.BizType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;

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
         * 业务类型，用于调用识别策略模板；
（暂未发布功能，敬请期待）
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
         * 传入媒体的解码信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * 审核任务的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 审核任务的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 审核任务的更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 在N秒后重试
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TryInSeconds = null;

        /**
         * 视频/音频审核中的音频结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * 视频审核中的图片结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageSegments> || null}
         */
        this.ImageSegments = null;

        /**
         * 音频识别总文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AudioText = null;

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

        if (params.MediaInfo) {
            let obj = new MediaInfo();
            obj.deserialize(params.MediaInfo)
            this.MediaInfo = obj;
        }

        if (params.InputInfo) {
            let obj = new InputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.TryInSeconds = 'TryInSeconds' in params ? params.TryInSeconds : null;

        if (params.AudioSegments) {
            this.AudioSegments = new Array();
            for (let z in params.AudioSegments) {
                let obj = new AudioSegments();
                obj.deserialize(params.AudioSegments[z]);
                this.AudioSegments.push(obj);
            }
        }

        if (params.ImageSegments) {
            this.ImageSegments = new Array();
            for (let z in params.ImageSegments) {
                let obj = new ImageSegments();
                obj.deserialize(params.ImageSegments[z]);
                this.ImageSegments.push(obj);
            }
        }
        this.AudioText = 'AudioText' in params ? params.AudioText : null;
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
         * 业务类型, 定义 模版策略，输出存储配置。如果没有BizType，可以先参考 【创建业务配置】接口进行创建
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 审核类型，这里可选：AUDIO (点播音频)和 LIVE_AUDIO（直播音频）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 回调签名key，具体可以查看签名文档。
         * @type {string || null}
         */
        this.Seed = null;

        /**
         * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 输入的任务信息，最多可以同时创建10个任务
         * @type {Array.<TaskInput> || null}
         */
        this.Tasks = null;

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
        this.Seed = 'Seed' in params ? params.Seed : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInput();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

    }
}

/**
 * CreateBizConfig返回参数结构体
 * @class
 */
class CreateBizConfigResponse extends  AbstractModel {
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
 * 任务输出标签
 * @class
 */
class TaskLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
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
 * 具体场景下的图片识别结果
 * @class
 */
class ImageResultsResultDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageResultsResultDetailLocation> || null}
         */
        this.Location = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * OCR识别文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 标签
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 库ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 得分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

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

        if (params.Location) {
            this.Location = new Array();
            for (let z in params.Location) {
                let obj = new ImageResultsResultDetailLocation();
                obj.deserialize(params.Location[z]);
                this.Location.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * DescribeAmsList请求参数结构体
 * @class
 */
class DescribeAmsListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码
         * @type {string || null}
         */
        this.PageToken = null;

        /**
         * 过滤条件
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询方向
         * @type {string || null}
         */
        this.PageDirection = null;

        /**
         * 过滤条件
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
        this.PageToken = 'PageToken' in params ? params.PageToken : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PageDirection = 'PageDirection' in params ? params.PageDirection : null;

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
 * 音频过滤条件
 * @class
 */
class Filters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询字段：
策略BizType
子账号SubUin
日期区间DateRange
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 查询值
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
 * 机器审核详情列表数据项
 * @class
 */
class AmsDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签
         * @type {Array.<string> || null}
         */
        this.Label = null;

        /**
         * 时长(秒/s)
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 任务名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务ID，创建任务后返回的TaskId字段
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 插入时间
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 数据来源 0机审，其他为自主审核
         * @type {number || null}
         */
        this.DataForm = null;

        /**
         * 操作人
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 原始命中标签
         * @type {Array.<string> || null}
         */
        this.OriginalLabel = null;

        /**
         * 操作时间
         * @type {string || null}
         */
        this.OperateTime = null;

        /**
         * 视频原始地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 封面图地址
         * @type {string || null}
         */
        this.Thumbnail = null;

        /**
         * 短音频内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 短音频个数
         * @type {number || null}
         */
        this.DetailCount = null;

        /**
         * 音频审核的请求 id
         * @type {string || null}
         */
        this.RequestId = null;

        /**
         * 音频机审状态
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.DataForm = 'DataForm' in params ? params.DataForm : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.OriginalLabel = 'OriginalLabel' in params ? params.OriginalLabel : null;
        this.OperateTime = 'OperateTime' in params ? params.OperateTime : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Thumbnail = 'Thumbnail' in params ? params.Thumbnail : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.DetailCount = 'DetailCount' in params ? params.DetailCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * Cos FileOutput 
 * @class
 */
class FileOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储的Bucket
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Cos Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 对象前缀
         * @type {string || null}
         */
        this.ObjectPrefix = null;

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
        this.ObjectPrefix = 'ObjectPrefix' in params ? params.ObjectPrefix : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
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
 * DescribeAudioStat返回参数结构体
 * @class
 */
class DescribeAudioStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果统计
         * @type {Overview || null}
         */
        this.Overview = null;

        /**
         * 识别量统计
         * @type {Array.<TrendCount> || null}
         */
        this.TrendCount = null;

        /**
         * 违规数据分布
         * @type {Array.<EvilCount> || null}
         */
        this.EvilCount = null;

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

        if (params.Overview) {
            let obj = new Overview();
            obj.deserialize(params.Overview)
            this.Overview = obj;
        }

        if (params.TrendCount) {
            this.TrendCount = new Array();
            for (let z in params.TrendCount) {
                let obj = new TrendCount();
                obj.deserialize(params.TrendCount[z]);
                this.TrendCount.push(obj);
            }
        }

        if (params.EvilCount) {
            this.EvilCount = new Array();
            for (let z in params.EvilCount) {
                let obj = new EvilCount();
                obj.deserialize(params.EvilCount[z]);
                this.EvilCount.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAmsList返回参数结构体
 * @class
 */
class DescribeAmsListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回列表数据----非必选，该参数暂未对外开放
         * @type {Array.<AmsDetailInfo> || null}
         */
        this.AmsDetailSet = null;

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分页 token
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

        if (params.AmsDetailSet) {
            this.AmsDetailSet = new Array();
            for (let z in params.AmsDetailSet) {
                let obj = new AmsDetailInfo();
                obj.deserialize(params.AmsDetailSet[z]);
                this.AmsDetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.PageToken = 'PageToken' in params ? params.PageToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别量统计
 * @class
 */
class TrendCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总调用时长
         * @type {number || null}
         */
        this.TotalHour = null;

        /**
         * 通过量
         * @type {number || null}
         */
        this.PassCount = null;

        /**
         * 通过时长
         * @type {number || null}
         */
        this.PassHour = null;

        /**
         * 违规量
         * @type {number || null}
         */
        this.EvilCount = null;

        /**
         * 违规时长
         * @type {number || null}
         */
        this.EvilHour = null;

        /**
         * 疑似违规量
         * @type {number || null}
         */
        this.SuspectCount = null;

        /**
         * 疑似违规时长
         * @type {number || null}
         */
        this.SuspectHour = null;

        /**
         * 日期
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalHour = 'TotalHour' in params ? params.TotalHour : null;
        this.PassCount = 'PassCount' in params ? params.PassCount : null;
        this.PassHour = 'PassHour' in params ? params.PassHour : null;
        this.EvilCount = 'EvilCount' in params ? params.EvilCount : null;
        this.EvilHour = 'EvilHour' in params ? params.EvilHour : null;
        this.SuspectCount = 'SuspectCount' in params ? params.SuspectCount : null;
        this.SuspectHour = 'SuspectHour' in params ? params.SuspectHour : null;
        this.Date = 'Date' in params ? params.Date : null;

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
 * DescribeAudioStat请求参数结构体
 * @class
 */
class DescribeAudioStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审核类型 1: 机器审核; 2: 人工审核
         * @type {number || null}
         */
        this.AuditType = null;

        /**
         * 查询条件
         * @type {Array.<Filters> || null}
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
        this.AuditType = 'AuditType' in params ? params.AuditType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 识别结果统计
 * @class
 */
class Overview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总调用时长
         * @type {number || null}
         */
        this.TotalHour = null;

        /**
         * 通过量
         * @type {number || null}
         */
        this.PassCount = null;

        /**
         * 通过时长
         * @type {number || null}
         */
        this.PassHour = null;

        /**
         * 违规量
         * @type {number || null}
         */
        this.EvilCount = null;

        /**
         * 违规时长
         * @type {number || null}
         */
        this.EvilHour = null;

        /**
         * 疑似违规量
         * @type {number || null}
         */
        this.SuspectCount = null;

        /**
         * 疑似违规时长
         * @type {number || null}
         */
        this.SuspectHour = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalHour = 'TotalHour' in params ? params.TotalHour : null;
        this.PassCount = 'PassCount' in params ? params.PassCount : null;
        this.PassHour = 'PassHour' in params ? params.PassHour : null;
        this.EvilCount = 'EvilCount' in params ? params.EvilCount : null;
        this.EvilHour = 'EvilHour' in params ? params.EvilHour : null;
        this.SuspectCount = 'SuspectCount' in params ? params.SuspectCount : null;
        this.SuspectHour = 'SuspectHour' in params ? params.SuspectHour : null;

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
以及令人反感、不安全或不适宜的内容类型。
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
 * DescribeBizConfig返回参数结构体
 * @class
 */
class DescribeBizConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务类型
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 业务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizName = null;

        /**
         * 审核范围
         * @type {Array.<string> || null}
         */
        this.ModerationCategories = null;

        /**
         * 多媒体审核配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaModerationConfig || null}
         */
        this.MediaModeration = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
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
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.BizName = 'BizName' in params ? params.BizName : null;
        this.ModerationCategories = 'ModerationCategories' in params ? params.ModerationCategories : null;

        if (params.MediaModeration) {
            let obj = new MediaModerationConfig();
            obj.deserialize(params.MediaModeration)
            this.MediaModeration = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 媒体审核配置
 * @class
 */
class MediaModerationConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频截帧频率。默认一分钟
         * @type {number || null}
         */
        this.AudioFrequency = null;

        /**
         * 图片取帧频率, 单位（秒/帧），默认 5， 可选 1 ～ 300
         * @type {number || null}
         */
        this.ImageFrequency = null;

        /**
         * 异步回调地址。
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 临时文件存储位置
         * @type {FileOutput || null}
         */
        this.SegmentOutput = null;

        /**
         * 是否使用OCR，默认为true
         * @type {boolean || null}
         */
        this.UseOCR = null;

        /**
         * 是否使用音频。（音频场景下，该值永远为true）
         * @type {boolean || null}
         */
        this.UseAudio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AudioFrequency = 'AudioFrequency' in params ? params.AudioFrequency : null;
        this.ImageFrequency = 'ImageFrequency' in params ? params.ImageFrequency : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.SegmentOutput) {
            let obj = new FileOutput();
            obj.deserialize(params.SegmentOutput)
            this.SegmentOutput = obj;
        }
        this.UseOCR = 'UseOCR' in params ? params.UseOCR : null;
        this.UseAudio = 'UseAudio' in params ? params.UseAudio : null;

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
         * 截帧时间。
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

/**
 * 违规数据分布
 * @class
 */
class EvilCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * ----非必选，该参数功能暂未对外开放
         * @type {string || null}
         */
        this.EvilType = null;

        /**
         * 分布类型总量
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 图片详情位置信息
 * @class
 */
class ImageResultsResultDetailLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * x坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.X = null;

        /**
         * y坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 旋转角度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rotate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

    }
}

/**
 * Result结果详情
 * @class
 */
class ImageResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 违规标志
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 得分
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 画面截帧图片结果集
         * @type {Array.<ImageResultResult> || null}
         */
        this.Results = null;

        /**
         * 图片URL地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 附加字段
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ImageResultResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

module.exports = {
    ImageSegments: ImageSegments,
    ImageResultResult: ImageResultResult,
    InputInfo: InputInfo,
    StorageInfo: StorageInfo,
    BucketInfo: BucketInfo,
    CreateAudioModerationTaskResponse: CreateAudioModerationTaskResponse,
    CreateBizConfigRequest: CreateBizConfigRequest,
    DescribeBizConfigRequest: DescribeBizConfigRequest,
    TaskResult: TaskResult,
    CancelTaskRequest: CancelTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    CreateAudioModerationTaskRequest: CreateAudioModerationTaskRequest,
    CreateBizConfigResponse: CreateBizConfigResponse,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    CancelTaskResponse: CancelTaskResponse,
    TaskLabel: TaskLabel,
    ImageResultsResultDetail: ImageResultsResultDetail,
    DescribeAmsListRequest: DescribeAmsListRequest,
    Filters: Filters,
    AmsDetailInfo: AmsDetailInfo,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    FileOutput: FileOutput,
    Filter: Filter,
    DescribeAudioStatResponse: DescribeAudioStatResponse,
    DescribeAmsListResponse: DescribeAmsListResponse,
    TrendCount: TrendCount,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    DescribeAudioStatRequest: DescribeAudioStatRequest,
    Overview: Overview,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    DescribeBizConfigResponse: DescribeBizConfigResponse,
    MediaInfo: MediaInfo,
    MediaModerationConfig: MediaModerationConfig,
    AudioSegments: AudioSegments,
    EvilCount: EvilCount,
    ImageResultsResultDetailLocation: ImageResultsResultDetailLocation,
    ImageResult: ImageResult,

}
