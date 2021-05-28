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
         * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * 画面截帧结果详情
         * @type {ImageResult || null}
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
            let obj = new ImageResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

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
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
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
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateVideoModerationTask返回参数结构体
 * @class
 */
class CreateVideoModerationTaskResponse extends  AbstractModel {
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
         * 任务Id
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
         * 业务类型
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
         * 状态，可选值：
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
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 审核建议
可选：
Pass 通过
Reveiw 建议复审
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 审核结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 媒体解码信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 在秒后重试
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TryInSeconds = null;

        /**
         * 图片结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageSegments> || null}
         */
        this.ImageSegments = null;

        /**
         * 音频结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * 如果返回的状态为ERROR，该字段会标记错误类型。
可选值：：
DECODE_ERROR: 解码失败。（输入资源中可能包含无法解码的视频）
URL_ERROR：下载地址验证失败。
TIMEOUT_ERROR：处理超时。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorType = null;

        /**
         * 审核任务错误日志。当Error不为空时，会展示该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorDescription = null;

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

        if (params.ImageSegments) {
            this.ImageSegments = new Array();
            for (let z in params.ImageSegments) {
                let obj = new ImageSegments();
                obj.deserialize(params.ImageSegments[z]);
                this.ImageSegments.push(obj);
            }
        }

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVideoStat返回参数结构体
 * @class
 */
class DescribeVideoStatResponse extends  AbstractModel {
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
 * 任务输出标签
 * @class
 */
class TaskLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命中的标签
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
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
         * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageResultsResultDetailLocation || null}
         */
        this.Location = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Location) {
            let obj = new ImageResultsResultDetailLocation();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
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
 * DescribeVideoStat请求参数结构体
 * @class
 */
class DescribeVideoStatRequest extends  AbstractModel {
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
         * @type {string || null}
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
        this.BucketInfo = 'BucketInfo' in params ? params.BucketInfo : null;

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
         * 违规类型：
Terror	24001
Porn	20002
Polity	20001
Ad	20105
Abuse	20007	
Illegal	20006	
Spam	25001	
Moan	26001
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
 * CreateVideoModerationTask请求参数结构体
 * @class
 */
class CreateVideoModerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务类型, 定义 模版策略，输出存储配置。如果没有BizType，可以先参考 【创建业务配置】接口进行创建
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 任务类型：可选VIDEO（点播视频），LIVE_VIDEO（直播视频）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 输入的任务信息，最多可以同时创建10个任务
         * @type {Array.<TaskInput> || null}
         */
        this.Tasks = null;

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
         * 审核排队优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级。用于处理插队等逻辑。默认该参数为0
         * @type {number || null}
         */
        this.Priority = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInput();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Seed = 'Seed' in params ? params.Seed : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

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
         * 语种
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
         * 词库类型 1 黑白库 2 自定义库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * 审核建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

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
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

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
         * 命中的标签
Porn 色情
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
Moan 呻吟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 拓展字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 文本审核结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioResultDetailTextResult> || null}
         */
        this.TextResults = null;

        /**
         * 音频呻吟审核结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioResultDetailMoanResult> || null}
         */
        this.MoanResults = null;

        /**
         * 音频语种检测结果
注意：此字段可能返回 null，表示取不到有效值。
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
         * 固定为Moan
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
 * CreateBizConfig请求参数结构体
 * @class
 */
class CreateBizConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务ID，仅限英文字母、数字和下划线（_）组成，长度不超过8位
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 审核分类信息
         * @type {MediaModerationConfig || null}
         */
        this.MediaModeration = null;

        /**
         * 业务名称，用于标识业务场景，长度不超过32位
         * @type {string || null}
         */
        this.BizName = null;

        /**
         * 审核内容，可选：Polity (政治); Porn (色情); Illegal(违法);Abuse (谩骂); Terror (暴恐); Ad (广告); Custom (自定义);
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
         * 是否使用OCR，默认为true
         * @type {boolean || null}
         */
        this.UseOCR = null;

        /**
         * 是否使用音频，默认为true。视频场景下，默认为 false
         * @type {boolean || null}
         */
        this.UseAudio = null;

        /**
         * 图片取帧频率, 单位（秒/帧），默认 5， 可选 1 ～ 300
         * @type {number || null}
         */
        this.ImageFrequency = null;

        /**
         * 音频片段长度。单位为：秒
         * @type {number || null}
         */
        this.AudioFrequency = null;

        /**
         * 临时文件存储位置
         * @type {FileOutput || null}
         */
        this.SegmentOutput = null;

        /**
         * 回调地址
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
        this.UseOCR = 'UseOCR' in params ? params.UseOCR : null;
        this.UseAudio = 'UseAudio' in params ? params.UseAudio : null;
        this.ImageFrequency = 'ImageFrequency' in params ? params.ImageFrequency : null;
        this.AudioFrequency = 'AudioFrequency' in params ? params.AudioFrequency : null;

        if (params.SegmentOutput) {
            let obj = new FileOutput();
            obj.deserialize(params.SegmentOutput)
            this.SegmentOutput = obj;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

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
 * 视频过滤条件
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
         * 命中的标签
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
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
         * 画面截帧图片结果集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageResultResult> || null}
         */
        this.Results = null;

        /**
         * 图片URL地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 附加字段
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
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
    StorageInfo: StorageInfo,
    BucketInfo: BucketInfo,
    CreateVideoModerationTaskResponse: CreateVideoModerationTaskResponse,
    TaskResult: TaskResult,
    CancelTaskRequest: CancelTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    DescribeVideoStatResponse: DescribeVideoStatResponse,
    CreateBizConfigResponse: CreateBizConfigResponse,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    TaskLabel: TaskLabel,
    ImageResultsResultDetail: ImageResultsResultDetail,
    DescribeVideoStatRequest: DescribeVideoStatRequest,
    InputInfo: InputInfo,
    EvilCount: EvilCount,
    CreateVideoModerationTaskRequest: CreateVideoModerationTaskRequest,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    FileOutput: FileOutput,
    CancelTaskResponse: CancelTaskResponse,
    TrendCount: TrendCount,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    Overview: Overview,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    CreateBizConfigRequest: CreateBizConfigRequest,
    MediaInfo: MediaInfo,
    MediaModerationConfig: MediaModerationConfig,
    AudioSegments: AudioSegments,
    Filters: Filters,
    ImageResultsResultDetailLocation: ImageResultsResultDetailLocation,
    ImageResult: ImageResult,

}
