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
 * 音频文本内容审核结果
 * @class
 */
class TextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。

如音频中无复杂类型「TextResults」的返回则代表改音频中无相关违规内容；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 命中的关键词，为空则代表该违规内容出自于模型的判断；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 命中关键词库的库标识；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 命中关键词库的名字；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 机器判断当前分类的置信度，取值范围：0~100。分数越高，表示越有可能属于当前分类。
（如：Porn 99，则该样本属于色情的置信度非常高。）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 自定义词库的类型，自定义词库相关的信息可登录控制台中查看；

1：自定义黑白库；

2：自定义库；
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * 该字段用于返回当前标签（Lable）下的二级标签。
注意：此字段可能返回null，表示取不到有效值。
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
 * 用于表示数据存储的相关信息
 * @class
 */
class StorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)；该字段应当与传入的访问类型相对应，可用于强校验并方便系统快速识别访问地址；若不传入此参数，则默认值为URL，此时系统将自动判定访问地址类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 该字段表示文件访问的链接地址，格式为标准URL格式。<br> 备注：当Type为URL时此字段不为空，该参数与BucketInfo参数须传入其中之一
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 该字段表示文件访问的腾讯云存储桶信息。<br> 备注：当Type为COS时此字段不为空，该参数与Url参数须传入其中之一。
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
 * CreateAudioModerationSyncTask请求参数结构体
 * @class
 */
class CreateAudioModerationSyncTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；调用时不传入Biztype代表采用默认的识别策略。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 数据标识，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 音频文件资源格式，当前为mp3，wav，请按照实际文件格式填入
         * @type {string || null}
         */
        this.FileFormat = null;

        /**
         * 文件名称，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据Base64编码，短音频同步接口仅传入可音频内容；
支持范围：文件大小不能超过5M，时长不可超过60s，码率范围为8-16Kbps；
支持格式：wav、mp3
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 音频资源访问链接，与FileContent参数必须二选一输入；
支持范围：同FileContent；
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
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.FileFormat = 'FileFormat' in params ? params.FileFormat : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

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
         * 该字段用于标识腾讯云对象存储的存储桶名称,关于文件桶的详细信息敬请参考 [腾讯云存储相关说明](https://cloud.tencent.com/document/product/436/44352)。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 该字段用于标识腾讯云对象存储的托管机房的分布地区，对象存储 COS 的数据存放在这些地域的存储桶中。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 该字段用于标识腾讯云对象存储的对象Key,对象z作为基本单元被存放在存储桶中；用户可以通过腾讯云控制台、API、SDK 等多种方式管理对象。有关对象的详细描述敬请参阅相应 [产品文档](https://cloud.tencent.com/document/product/436/13324)。
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
         * 该字段用于返回任务创建的结果，具体输出内容请参见TaskResult数据结构的详细描述。
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
         * 该字段用于返回创建音频审核任务时在TaskInput结构内传入的DataId，用于标识具体审核任务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段用于返回音频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 该字段用于返回任务创建的状态，如返回OK则代表任务创建成功，其他返回值可参考公共错误码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * **仅在Code的返回值为错误码时生效**，用于返回错误的详情内容。
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
         * 该字段表示创建音频审核任务后返回的任务ID（在Results参数中），用于标识需要取消的审核任务。
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
         * 该字段用于返回创建音频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 该字段用于返回调用音频审核接口时在Tasks参数内传入的数据ID参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段用于返回调用音频审核接口时传入的BizType参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段用于返回调用音频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。
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
         * 该字段用于返回调用音频审核接口时输入的音频审核类型，取值为：**AUDIO**（点播音频）和**LIVE_AUDIO**（直播音频），默认值为AUDIO。
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
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AudioText = null;

        /**
         * 该字段用于返回音频片段的审核结果，主要包括开始时间和音频审核的相应结果。<br>具体输出内容请参见AudioSegments及AudioResult数据结构的详细描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioSegments> || null}
         */
        this.AudioSegments = null;

        /**
         * 当任务状态为Error时，该字段用于返回对应错误的类型；任务状态非Error时，默认返回为空。
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
         * 该字段表示输入的音频审核任务信息，具体输入内容请参见TaskInput数据结构的详细描述。<br> 备注：最多同时可创建**10个任务**。
         * @type {Array.<TaskInput> || null}
         */
        this.Tasks = null;

        /**
         * 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用默认的识别策略；传入则会在审核时根据业务场景采取不同的审核策略。<br>备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段表示输入的音频审核类型，取值为：**AUDIO**（点播音频）和 **LIVE_AUDIO**（直播音频），默认值为AUDIO。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 可选参数，该字段表示回调签名的key信息，用于保证数据的安全性。 签名方法为在返回的HTTP头部添加 X-Signature 的字段，值为： seed + body 的 SHA256 编码和Hex字符串，在收到回调数据后，可以根据返回的body，用 **sha256(seed + body)**, 计算出 `X-Signature` 进行验证。<br>具体使用实例可参考 [回调签名示例](https://cloud.tencent.com/document/product/1219/53263)。
         * @type {string || null}
         */
        this.Seed = null;

        /**
         * 可选参数，该字段表示接受审核信息回调的地址，格式为URL链接默认格式。配置成功后，审核过程中产生的违规音频片段将通过此接口发送。回调返回内容格式请参考 [回调签名示例](https://cloud.tencent.com/document/product/1219/53257#.E7.A4.BA.E4.BE.8B2-.E5.9B.9E.E8.B0.83.E7.AD.BE.E5.90.8D.E7.A4.BA.E4.BE.8B)
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
 * 音视频任务数据结构
 * @class
 */
class TaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选填参数，该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。<br>取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 选填参数，该字段表示音频审核任务所对应的任务名称，方便后续查询和管理审核任务。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 必填参数，该字段表示审核文件的访问参数，用于获取审核媒体文件，该参数内包括访问类型和访问地址。
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
         * 该字段表示创建音频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。
<br>备注：查询接口单次最大查询量为**20条每次**。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 该布尔字段表示是否展示全部的音频片段，取值：True(展示全部的音频分片)、False(只展示命中审核规则的音频分片)；默认值为False。
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
 * CreateAudioModerationSyncTask返回参数结构体
 * @class
 */
class CreateAudioModerationSyncTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求接口时传入的数据标识
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 文件名称，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；调用时不传入Biztype代表采用默认的识别策略。
         * @type {string || null}
         */
        this.BizType = null;

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
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 音频文本，备注：这里的文本最大只返回前1000个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AsrText = null;

        /**
         * 音频中对话内容审核结果；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextResult> || null}
         */
        this.TextResults = null;

        /**
         * 音频中低俗内容审核结果；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MoanResult> || null}
         */
        this.MoanResults = null;

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
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.AsrText = 'AsrText' in params ? params.AsrText : null;

        if (params.TextResults) {
            this.TextResults = new Array();
            for (let z in params.TextResults) {
                let obj = new TextResult();
                obj.deserialize(params.TextResults[z]);
                this.TextResults.push(obj);
            }
        }

        if (params.MoanResults) {
            this.MoanResults = new Array();
            for (let z in params.MoanResults) {
                let obj = new MoanResult();
                obj.deserialize(params.MoanResults[z]);
                this.MoanResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于返回审核任务输出的标签
 * @class
 */
class TaskLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回当前标签对应的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
         * 该字段用于传入任务对应的业务类型供筛选器进行筛选。Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与审核策略，调用前请确认正确的Biztype。Biztype仅为**数字、字母与下划线的组合**，长度为3-32个字符。<br>备注：在不传入该参数时筛选器默认不筛选业务类型。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段用于传入音频审核对应的任务类型供筛选器进行筛选，取值为：**VIDEO**（点播视频审核），**AUDIO**（点播音频审核）， **LIVE_VIDEO**（直播视频审核）, **LIVE_AUDIO**（直播音频审核）。<br>备注：在不传入该参数时筛选器默认不筛选任务类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 该字段用于传入音频审核对应的建议操作供筛选器进行筛选，取值为：**Block**：建议屏蔽，**Review**：建议人工复审，**Pass**：建议通过。<br>备注：在不传入该参数时筛选器默认不筛选建议操作。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于传入审核任务的任务状态供筛选器进行筛选，取值为：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。<br>备注：在不传入该参数时筛选器默认不筛选任务状态。
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
         * 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 该字段表示文件访问的链接地址，格式为标准URL格式。<br> 备注：当Type为URL时此字段不为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 该字段表示文件访问的腾讯云存储桶信息。<br> 备注：当Type为COS时此字段不为空。
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
 * 音频语言种类检测结果
 * @class
 */
class AudioResultDetailLanguageResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回对应的语言种类信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该参数用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于当前返回的语种标签；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该参数用于返回对应语种标签的片段在音频文件内的开始时间，单位为毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 该参数用于返回对应语种标签的片段在音频文件内的结束时间，单位为毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * *内测中，敬请期待*
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
 * 呻吟低俗检测结果
 * @class
 */
class MoanResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固定取值为Moan（呻吟/娇喘），如音频中无复杂类型「MoanResult」的返回则代表改音频中无呻吟/娇喘相关违规内容；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 机器判断当前分类的置信度，取值范围：0~100。分数越高，表示越有可能属于当前分类。
（如：Moan 99，则该样本属于呻吟/娇喘的置信度非常高。）
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 违规事件开始时间，单位为毫秒（ms）；
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 违规事件结束时间，单位为毫秒（ms）；
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 该字段用于返回当前标签（Lable）下的二级标签。
注意：此字段可能返回null，表示取不到有效值。
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
        this.Score = 'Score' in params ? params.Score : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
         * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。
         * @type {number || null}
         */
        this.LibType = null;

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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * 音频审核输出参数
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
         * 该字段用于返回音频文件的时长，单位为秒。
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 该字段用于返回额外附加信息，不同客户或Biztype下返回信息不同。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
         * @type {Array.<AudioResultDetailTextResult> || null}
         */
        this.TextResults = null;

        /**
         * 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。
         * @type {Array.<AudioResultDetailMoanResult> || null}
         */
        this.MoanResults = null;

        /**
         * 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
         * @type {Array.<AudioResultDetailLanguageResult> || null}
         */
        this.LanguageResults = null;

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
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

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
         * 该字段用于返回音频审核任务数据所对应的数据ID，方便后续查询和管理审核任务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段用于返回音频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 该字段用于返回所查询内容的任务状态。
<br>取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 该字段用于返回音频审核任务所对应的任务名称，方便后续查询和管理审核任务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 该字段用于返回调用音频审核接口时传入的BizType参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段用于返回调用音频审核接口时输入的音频审核类型，取值为：**AUDIO**（点播音频）和**LIVE_AUDIO**（直播音频），默认值为AUDIO。
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
         * 输入信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInfo || null}
         */
        this.MediaInfo = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskLabel> || null}
         */
        this.Labels = null;

        /**
         * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。
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
         * 该字段用于返回传入的媒体文件的编码格式，如wav、mp3、aac、flac、amr、3gp、 m4a、wma、ogg、ape等。
         * @type {string || null}
         */
        this.Codecs = null;

        /**
         * 该字段用于返回对传入的流媒体文件进行分片的片段时长，单位为秒。**默认值为15秒**，支持用户自定义配置。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * *内测中，敬请期待*
         * @type {number || null}
         */
        this.Width = null;

        /**
         * *内测中，敬请期待*
         * @type {number || null}
         */
        this.Height = null;

        /**
         * *内测中，敬请期待*
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
 * 表示声音段信息
 * @class
 */
class AudioSegments extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回音频片段的开始时间，单位为秒。对于点播文件，该参数代表对应音频相对于完整音轨的偏移时间，如0（代表不偏移），5（音轨开始后5秒），10（音轨开始后10秒）；对于直播文件，该参数则返回对应音频片段开始时的Unix时间戳，如：1594650717。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OffsetTime = null;

        /**
         * 该字段用于返回音频片段的具体审核结果，详细内容敬请参考AudioResult数据结构的描述。
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
    TextResult: TextResult,
    DescribeTasksRequest: DescribeTasksRequest,
    StorageInfo: StorageInfo,
    CreateAudioModerationSyncTaskRequest: CreateAudioModerationSyncTaskRequest,
    BucketInfo: BucketInfo,
    CreateAudioModerationTaskResponse: CreateAudioModerationTaskResponse,
    TaskResult: TaskResult,
    CancelTaskRequest: CancelTaskRequest,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    CreateAudioModerationTaskRequest: CreateAudioModerationTaskRequest,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    CreateAudioModerationSyncTaskResponse: CreateAudioModerationSyncTaskResponse,
    TaskLabel: TaskLabel,
    TaskFilter: TaskFilter,
    InputInfo: InputInfo,
    DescribeTasksResponse: DescribeTasksResponse,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    MoanResult: MoanResult,
    CancelTaskResponse: CancelTaskResponse,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    TaskData: TaskData,
    MediaInfo: MediaInfo,
    AudioSegments: AudioSegments,

}
