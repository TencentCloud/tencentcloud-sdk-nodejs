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
         * 该字段用于返回创建视频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 该字段用于返回调用视频审核接口时传入的数据ID参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段用于返回调用视频审核接口时传入的BizType参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段用于返回调用视频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 该字段用于返回所查询内容的任务状态。
<br>取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 该字段用于返回调用视频审核接口时输入的视频审核类型，取值为：**VIDEO**（点播视频）和**LIVE_VIDEO**（直播视频），默认值为VIDEO。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 该字段用于返回输入媒体文件的详细信息，包括编解码格式、分片时长等信息。详细内容敬请参考MediaInfo数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。
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
         * 该字段用于返回视频中截帧审核的结果，详细返回内容敬请参考ImageSegments数据结构的描述。<br>备注：数据有效期为24小时，如需要延长存储时间，请在已配置的COS储存桶中设置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageSegments> || null}
         */
        this.ImageSegments = null;

        /**
         * 该字段用于返回视频中音频审核的结果，详细返回内容敬请参考AudioSegments数据结构的描述。<br>备注：数据有效期为24小时，如需要延长存储时间，请在已配置的COS储存桶中设置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * 当任务状态为Error时，返回对应错误的类型，取值：**DECODE_ERROR**: 解码失败。（输入资源中可能包含无法解码的视频）
**URL_ERROR**：下载地址验证失败。
**TIMEOUT_ERROR**：处理超时。任务状态非Error时默认返回为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorType = null;

        /**
         * 当任务状态为Error时，该字段用于返回对应错误的详细描述，任务状态非Error时默认返回为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorDescription = null;

        /**
         * 该字段用于返回检测结果所对应的标签。如果未命中恶意，返回Normal，如果命中恶意，则返回Labels中优先级最高的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AudioText = null;

        /**
         * 该字段用于返回音频文件识别出的对应文本内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RcbAsr> || null}
         */
        this.Asrs = null;

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
        this.Label = 'Label' in params ? params.Label : null;
        this.AudioText = 'AudioText' in params ? params.AudioText : null;

        if (params.Asrs) {
            this.Asrs = new Array();
            for (let z in params.Asrs) {
                let obj = new RcbAsr();
                obj.deserialize(params.Asrs[z]);
                this.Asrs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数表示任务列表每页展示的任务条数，**默认值为10**（每页展示10条任务）。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 该参数表示任务筛选器的输入参数，可根据业务类型、审核文件类型、处理建议及任务状态筛选想要查看的审核任务，具体参数内容请参见TaskFilter数据结构的详细描述。
         * @type {TaskFilter || null}
         */
        this.Filter = null;

        /**
         * 该参数表示翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。
         * @type {string || null}
         */
        this.PageToken = null;

        /**
         * 该参数表示任务列表的开始时间，格式为ISO8601标准的时间戳。**默认值为最近3天**，若传入该参数，则在这一时间到EndTime之间的任务将会被筛选出来。<br>备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 该参数表示任务列表的结束时间，格式为ISO8601标准的时间戳。**默认值为空**，若传入该参数，则在这StartTime到这一时间之间的任务将会被筛选出来。<br>备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。
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
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回当前查询的任务总量，格式为int字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 该字段用于返回当前页的任务详细数据，具体输出内容请参见TaskData数据结构的详细描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskData> || null}
         */
        this.Data = null;

        /**
         * 该字段用于返回翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。
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
 * Cos TaskFilter 
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
 * 识别类标签结果信息
 * @class
 */
class RecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可能的取值有：Teenager 、Gender
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 识别标签列表
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Label = 'Label' in params ? params.Label : null;

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
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回ASR识别出的文本内容命中的关键词信息，用于标注内容违规的具体原因（如：加我微信）。该参数可能会有多个返回值，代表命中的多个关键词；若返回值为空，Score不为空，则代表识别结果所对应的恶意标签（Label）来自于语义模型判断的返回值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回当前标签（Lable）下的二级标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

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
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * 审核切片asr文本信息
 * @class
 */
class RcbAsr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

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
         * 该字段用于返回审核内容是否命中审核模型；取值：0（**未命中**）、1（**命中**）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回音频文件经ASR识别后的文本信息。最长可识别**5小时**的音频文件，若超出时长限制，接口将会报错。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 该字段用于返回音频片段存储的链接地址，该地址有效期为1天。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 该字段用于返回音频文件的时长，单位为毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。<br>备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioResultDetailTextResult> || null}
         */
        this.TextResults = null;

        /**
         * 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioResultDetailMoanResult> || null}
         */
        this.MoanResults = null;

        /**
         * 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioResultDetailLanguageResult> || null}
         */
        this.LanguageResults = null;

        /**
         * 该字段用于返回当前标签（Lable）下的二级标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 识别类标签结果信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RecognitionResult> || null}
         */
        this.RecognitionResults = null;

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
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

        if (params.RecognitionResults) {
            this.RecognitionResults = new Array();
            for (let z in params.RecognitionResults) {
                let obj = new RecognitionResult();
                obj.deserialize(params.RecognitionResults[z]);
                this.RecognitionResults.push(obj);
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
         * 该字段用于返回检测结果需要检测的内容类型，此处固定为**Moan**（呻吟）以调用呻吟检测功能。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回呻吟检测的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于呻吟内容。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回对应呻吟标签的片段在音频文件内的开始时间，单位为毫秒。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 该字段用于返回对应呻吟标签的片段在音频文件内的结束时间，单位为毫秒。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * *内测中，敬请期待*
         * @type {string || null}
         */
        this.SubLabelCode = null;

        /**
         * 该字段用于返回当前标签（Lable）下的二级标签。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
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
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

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
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 输入的数据ID
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
         * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 处理建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 媒体信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * 输入信息
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
         * 封面
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
 * 音频切片识别标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据Label字段确定具体名称：
当Label 为Teenager 时 Name可能取值有：Teenager 
当Label 为Gender 时 Name可能取值有：Male 、Female
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 置信分：0～100，数值越大表示置信度越高
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 识别开始偏移时间，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 识别结束偏移时间，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
    DescribeTasksRequest: DescribeTasksRequest,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    TaskLabel: TaskLabel,
    ImageResultsResultDetail: ImageResultsResultDetail,
    InputInfo: InputInfo,
    CreateVideoModerationTaskRequest: CreateVideoModerationTaskRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    TaskFilter: TaskFilter,
    RecognitionResult: RecognitionResult,
    CancelTaskResponse: CancelTaskResponse,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    RcbAsr: RcbAsr,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    TaskData: TaskData,
    MediaInfo: MediaInfo,
    Tag: Tag,
    AudioSegments: AudioSegments,
    ImageResultsResultDetailLocation: ImageResultsResultDetailLocation,
    ImageResult: ImageResult,

}
