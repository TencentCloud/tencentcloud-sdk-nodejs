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
 * 按帧标签片段列表
 * @class
 */
class MediaAiAnalysisFrameTagSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按帧标签起始的偏移时间。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 按帧标签结束的偏移时间。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 时间片段内的标签列表。
         * @type {Array.<MediaAiAnalysisFrameTagItem> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisFrameTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * ModifySnapshotByTimeOffsetTemplate返回参数结构体
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
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
 * ModifySampleSnapshotTemplate返回参数结构体
 * @class
 */
class ModifySampleSnapshotTemplateResponse extends  AbstractModel {
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
 * 直播 AI 内容审核图片鉴黄结果
 * @class
 */
class LiveStreamAiReviewImagePornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉黄分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * ModifyWatermarkTemplate请求参数结构体
 * @class
 */
class ModifyWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 水印模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 原点位置，可选值：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 图片水印模板，该字段仅对图片水印模板有效。
         * @type {ImageWatermarkInputForUpdate || null}
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，该字段仅对文字水印模板有效。
         * @type {TextWatermarkTemplateInputForUpdate || null}
         */
        this.TextTemplate = null;

        /**
         * SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。
         * @type {SvgWatermarkInputForUpdate || null}
         */
        this.SvgTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInputForUpdate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInputForUpdate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInputForUpdate();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }

    }
}

/**
 * CreateWordSamples请求参数结构体
 * @class
 */
class CreateWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过语音识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行内容审核；
4. Review.Asr：通过语音识别技术，进行内容审核；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、语音识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、语音识别技术，进行内容审核，等价于 3+4；
7. All：通过光学字符识别技术、语音识别技术，进行内容识别、内容审核，等价于 1+2+3+4。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 关键词，数组长度限制：100。
         * @type {Array.<AiSampleWordInfo> || null}
         */
        this.Words = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new AiSampleWordInfo();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

    }
}

/**
 * 智能按帧标签任务输入类型
 * @class
 */
class AiAnalysisTaskFrameTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能按帧标签模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeImageSpriteTemplates请求参数结构体
 * @class
 */
class DescribeImageSpriteTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 语音关键词识别结果。
 * @class
 */
class AiRecognitionTaskAsrWordsResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音关键词。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 语音关键词出现的时间片段列表。
         * @type {Array.<AiRecognitionTaskAsrWordsSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 语音全文识别片段。
 * @class
 */
class AiRecognitionTaskAsrFullTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 识别文本。
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 用户自定义文本审核任务控制参数。
 * @class
 */
class UserDefineOcrTextReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定文本审核任务开关，可选值：
<li>ON：开启自定义文本审核任务；</li>
<li>OFF：关闭自定义文本审核任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {string || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyAIRecognitionTemplate请求参数结构体
 * @class
 */
class ModifyAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 视频内容识别模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频内容识别模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 人脸识别控制参数。
         * @type {FaceConfigureInfoForUpdate || null}
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
         * @type {OcrFullTextConfigureInfoForUpdate || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
         * @type {OcrWordsConfigureInfoForUpdate || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
         * @type {AsrFullTextConfigureInfoForUpdate || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
         * @type {AsrWordsConfigureInfoForUpdate || null}
         */
        this.AsrWordsConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfoForUpdate();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfoForUpdate();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfoForUpdate();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

    }
}

/**
 * 智能标签结果信息
 * @class
 */
class MediaAiAnalysisTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 标签的可信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 转动图任务类型。
 * @class
 */
class AnimatedGraphicTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频转动图模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 动图在视频中的开始时间，单位为秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 动图在视频中的结束时间，单位为秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 转动图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 转动图后文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_animatedGraphic_{definition}.{format}`。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

    }
}

/**
 * 语音鉴政任务控制参数。
 * @class
 */
class PoliticalAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音鉴政任务开关，可选值：
<li>ON：开启语音鉴政任务；</li>
<li>OFF：关闭语音鉴政任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 任务概要信息
 * @class
 */
class TaskSimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务类型，包含：
<li> WorkflowTask：工作流处理任务；</li>
<li> LiveProcessTask：直播处理任务。</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。
         * @type {string || null}
         */
        this.FinishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

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
         * 任务类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>LiveStreamProcessTask：直播流处理任务。</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务状态，取值：
<li>WAITING：等待中；</li>
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkflowTask || null}
         */
        this.WorkflowTask = null;

        /**
         * 直播流处理任务信息，仅当 TaskType 为 LiveStreamProcessTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LiveStreamProcessTask || null}
         */
        this.LiveStreamProcessTask = null;

        /**
         * 任务的事件通知信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务流的优先级，取值范围为 [-10, 10]。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.WorkflowTask) {
            let obj = new WorkflowTask();
            obj.deserialize(params.WorkflowTask)
            this.WorkflowTask = obj;
        }

        if (params.LiveStreamProcessTask) {
            let obj = new LiveStreamProcessTask();
            obj.deserialize(params.LiveStreamProcessTask)
            this.LiveStreamProcessTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直播流 AI 识别结果
 * @class
 */
class LiveStreamAiRecognitionResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 人脸识别结果，当 Type 为
FaceRecognition 时有效。
         * @type {Array.<LiveStreamFaceRecognitionResult> || null}
         */
        this.FaceRecognitionResultSet = null;

        /**
         * 语音关键词识别结果，当 Type 为
AsrWordsRecognition 时有效。
         * @type {Array.<LiveStreamAsrWordsRecognitionResult> || null}
         */
        this.AsrWordsRecognitionResultSet = null;

        /**
         * 文本关键词识别结果，当 Type 为
OcrWordsRecognition 时有效。
         * @type {Array.<LiveStreamOcrWordsRecognitionResult> || null}
         */
        this.OcrWordsRecognitionResultSet = null;

        /**
         * 语音全文识别结果，当 Type 为
AsrFullTextRecognition 时有效。
         * @type {Array.<LiveStreamAsrFullTextRecognitionResult> || null}
         */
        this.AsrFullTextRecognitionResultSet = null;

        /**
         * 文本全文识别结果，当 Type 为
OcrFullTextRecognition 时有效。
         * @type {Array.<LiveStreamOcrFullTextRecognitionResult> || null}
         */
        this.OcrFullTextRecognitionResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FaceRecognitionResultSet) {
            this.FaceRecognitionResultSet = new Array();
            for (let z in params.FaceRecognitionResultSet) {
                let obj = new LiveStreamFaceRecognitionResult();
                obj.deserialize(params.FaceRecognitionResultSet[z]);
                this.FaceRecognitionResultSet.push(obj);
            }
        }

        if (params.AsrWordsRecognitionResultSet) {
            this.AsrWordsRecognitionResultSet = new Array();
            for (let z in params.AsrWordsRecognitionResultSet) {
                let obj = new LiveStreamAsrWordsRecognitionResult();
                obj.deserialize(params.AsrWordsRecognitionResultSet[z]);
                this.AsrWordsRecognitionResultSet.push(obj);
            }
        }

        if (params.OcrWordsRecognitionResultSet) {
            this.OcrWordsRecognitionResultSet = new Array();
            for (let z in params.OcrWordsRecognitionResultSet) {
                let obj = new LiveStreamOcrWordsRecognitionResult();
                obj.deserialize(params.OcrWordsRecognitionResultSet[z]);
                this.OcrWordsRecognitionResultSet.push(obj);
            }
        }

        if (params.AsrFullTextRecognitionResultSet) {
            this.AsrFullTextRecognitionResultSet = new Array();
            for (let z in params.AsrFullTextRecognitionResultSet) {
                let obj = new LiveStreamAsrFullTextRecognitionResult();
                obj.deserialize(params.AsrFullTextRecognitionResultSet[z]);
                this.AsrFullTextRecognitionResultSet.push(obj);
            }
        }

        if (params.OcrFullTextRecognitionResultSet) {
            this.OcrFullTextRecognitionResultSet = new Array();
            for (let z in params.OcrFullTextRecognitionResultSet) {
                let obj = new LiveStreamOcrFullTextRecognitionResult();
                obj.deserialize(params.OcrFullTextRecognitionResultSet[z]);
                this.OcrFullTextRecognitionResultSet.push(obj);
            }
        }

    }
}

/**
 * AI 样本管理，人脸数据操作。
 * @class
 */
class AiSampleFaceOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。重置操作将清空该人物已有人脸数据，并添加 FaceContents 指定人脸数据。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 人脸 ID 集合，当 Type为delete 时，该字段必填。
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

        /**
         * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合。
<li>当 Type为add 或 reset 时，该字段必填；</li>
<li>数组长度限制：5 张图片。</li>
注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;

    }
}

/**
 * 智能分类任务输入类型
 * @class
 */
class AiAnalysisTaskClassificationInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能分类模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI 智能分析模板详情
 * @class
 */
class AIAnalysisTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能分析模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 智能分析模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 智能分析模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 智能分类任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClassificationConfigureInfo || null}
         */
        this.ClassificationConfigure = null;

        /**
         * 智能标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TagConfigureInfo || null}
         */
        this.TagConfigure = null;

        /**
         * 智能封面任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CoverConfigureInfo || null}
         */
        this.CoverConfigure = null;

        /**
         * 智能按帧标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FrameTagConfigureInfo || null}
         */
        this.FrameTagConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 工作流信息详情。
 * @class
 */
class WorkflowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID。
         * @type {number || null}
         */
        this.WorkflowId = null;

        /**
         * 工作流名称。
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 工作流状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 工作流绑定的输入规则，当上传视频命中该规则到该对象时即触发工作流。
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * 视频处理的文件输出存储位置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 视频处理类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         * @type {number || null}
         */
        this.TaskPriority = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 工作流创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 工作流最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateTranscodeTemplate请求参数结构体
 * @class
 */
class CreateTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 转码模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数，当 RemoveVideo 为 0，该字段必填。
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，当 RemoveAudio 为 0，该字段必填。
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数，需联系商务架构师开通后才能使用。
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

    }
}

/**
 * ProcessLiveStream返回参数结构体
 * @class
 */
class ProcessLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AI 样本管理，处理失败的人脸信息
 * @class
 */
class AiSampleFailFaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应入参 FaceContents 中错误图片下标，从 0 开始。
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 错误码，取值：
<li>0：成功；</li>
<li>其他：失败。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误描述。
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
        this.Index = 'Index' in params ? params.Index : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DeleteWorkflow请求参数结构体
 * @class
 */
class DeleteWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID。
         * @type {number || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * 文本关键识别结果。
 * @class
 */
class AiRecognitionTaskOcrWordsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 文本关键词识别任务输入信息。
         * @type {AiRecognitionTaskOcrWordsResultInput || null}
         */
        this.Input = null;

        /**
         * 文本关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskOcrWordsResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 语音鉴黄任务控制参数
 * @class
 */
class PornAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音鉴黄任务开关，可选值：
<li>ON：开启语音鉴黄任务；</li>
<li>OFF：关闭语音鉴黄任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DeleteAIAnalysisTemplate返回参数结构体
 * @class
 */
class DeleteAIAnalysisTemplateResponse extends  AbstractModel {
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
 * DeleteWorkflow返回参数结构体
 * @class
 */
class DeleteWorkflowResponse extends  AbstractModel {
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
 * 文本全文本识别任务控制参数
 * @class
 */
class OcrFullTextConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本全文识别任务开关，可选值：
<li>ON：开启智能文本全文识别任务；</li>
<li>OFF：关闭智能文本全文识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate返回参数结构体
 * @class
 */
class DeleteAnimatedGraphicsTemplateResponse extends  AbstractModel {
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
 * ModifyContentReviewTemplate请求参数结构体
 * @class
 */
class ModifyContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 内容审核模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 内容审核模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 鉴黄控制参数。
         * @type {PornConfigureInfoForUpdate || null}
         */
        this.PornConfigure = null;

        /**
         * 鉴恐控制参数。
         * @type {TerrorismConfigureInfoForUpdate || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
         * @type {PoliticalConfigureInfoForUpdate || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         * @type {UserDefineConfigureInfoForUpdate || null}
         */
        this.UserDefineConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfoForUpdate();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfoForUpdate();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfoForUpdate();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfoForUpdate();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * AI 样本管理，标签操作。
 * @class
 */
class AiSampleTagOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 标签，长度限制：128 个字符。
         * @type {Array.<string> || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 语音全文识别结果。
 * @class
 */
class AiRecognitionTaskAsrFullTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音全文识别片段列表。
         * @type {Array.<AiRecognitionTaskAsrFullTextSegmentItem> || null}
         */
        this.SegmentSet = null;

        /**
         * 字幕文件地址。
         * @type {string || null}
         */
        this.SubtitlePath = null;

        /**
         * 字幕文件存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }
        this.SubtitlePath = 'SubtitlePath' in params ? params.SubtitlePath : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * DeleteImageSpriteTemplate返回参数结构体
 * @class
 */
class DeleteImageSpriteTemplateResponse extends  AbstractModel {
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
 * 文本全文识别片段。
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段结果集。
         * @type {Array.<AiRecognitionTaskOcrFullTextSegmentTextItem> || null}
         */
        this.TextSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TextSet) {
            this.TextSet = new Array();
            for (let z in params.TextSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentTextItem();
                obj.deserialize(params.TextSet[z]);
                this.TextSet.push(obj);
            }
        }

    }
}

/**
 * ResetWorkflow返回参数结构体
 * @class
 */
class ResetWorkflowResponse extends  AbstractModel {
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
 * 画面鉴政任务控制参数
 * @class
 */
class PoliticalImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴政任务开关，可选值：
<li>ON：开启画面鉴政任务；</li>
<li>OFF：关闭画面鉴政任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面鉴政过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：政治人物；</li>
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星。</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * CreateAIRecognitionTemplate返回参数结构体
 * @class
 */
class CreateAIRecognitionTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 任务概要列表。
         * @type {Array.<TaskSimpleInfo> || null}
         */
        this.TaskSet = null;

        /**
         * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空字符串，说明已无更多数据。
         * @type {string || null}
         */
        this.ScrollToken = null;

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

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskSimpleInfo();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTranscodeTemplate请求参数结构体
 * @class
 */
class DeleteTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 暴恐信息
 * @class
 */
class AiReviewTerrorismTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频暴恐评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 暴恐结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频暴恐结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：暴恐旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：暴恐人物。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有暴恐嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 人脸识别输入。
 * @class
 */
class AiRecognitionTaskFaceResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸识别模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeAIRecognitionTemplates返回参数结构体
 * @class
 */
class DescribeAIRecognitionTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 视频内容识别模板详情列表。
         * @type {Array.<AIRecognitionTemplateItem> || null}
         */
        this.AIRecognitionTemplateSet = null;

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

        if (params.AIRecognitionTemplateSet) {
            this.AIRecognitionTemplateSet = new Array();
            for (let z in params.AIRecognitionTemplateSet) {
                let obj = new AIRecognitionTemplateItem();
                obj.deserialize(params.AIRecognitionTemplateSet[z]);
                this.AIRecognitionTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 画面鉴黄任务控制参数
 * @class
 */
class PornImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴黄任务开关，可选值：
<li>ON：开启画面鉴黄任务；</li>
<li>OFF：关闭画面鉴黄任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 涉政信息
 * @class
 */
class AiReviewPoliticalTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频涉政评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 涉政结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴政结果标签，取值范围：
<li>politician：政治人物。</li>
<li>violation_photo：违规图标。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉政嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewPoliticalSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewPoliticalSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 内容审核鉴政任务结果类型
 * @class
 */
class AiReviewTaskPoliticalResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核鉴政任务输入。
         * @type {AiReviewPoliticalTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核鉴政任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewPoliticalTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * SVG水印模板输入参数
 * @class
 */
class SvgWatermarkInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
<li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 W%。</li>
默认值为 10W%。
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
<li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 H%。
默认值为 0px。
         * @type {string || null}
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
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 输入规则，当上传视频命中该规则时，即触发工作流。
 * @class
 */
class WorkflowTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器的类型，目前仅支持 CosFileUpload。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当 Type 为 CosFileUpload 时必填且有效，为 COS 触发规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosFileUploadTrigger || null}
         */
        this.CosFileUploadTrigger = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosFileUploadTrigger) {
            let obj = new CosFileUploadTrigger();
            obj.deserialize(params.CosFileUploadTrigger)
            this.CosFileUploadTrigger = obj;
        }

    }
}

/**
 * 对视频做采样截图任务输入参数类型。
 * @class
 */
class SampleSnapshotTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * 采样截图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 采样截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_sampleSnapshot_{definition}_{number}.{format}`。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * 采样截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * DeleteAIAnalysisTemplate请求参数结构体
 * @class
 */
class DeleteAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 同一规格的截图信息集合，每个元素代表一张截图。
         * @type {Array.<MediaSnapshotByTimePicInfoItem> || null}
         */
        this.PicInfoSet = null;

        /**
         * 指定时间点截图文件的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.PicInfoSet) {
            this.PicInfoSet = new Array();
            for (let z in params.PicInfoSet) {
                let obj = new MediaSnapshotByTimePicInfoItem();
                obj.deserialize(params.PicInfoSet[z]);
                this.PicInfoSet.push(obj);
            }
        }

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * 采样截图模板详情
 * @class
 */
class SampleSnapshotTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 采样截图模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 采样截图类型。
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔。
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * ModifySnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 指定时间点截图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 图片宽度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 图片高度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片格式，取值可以为 jpg 和 png。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * ModifySampleSnapshotTemplate请求参数结构体
 * @class
 */
class ModifySampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 采样截图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 图片宽度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 图片高度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 采样截图类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * 图片格式，取值为 jpg 和 png。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 智能分析结果
 * @class
 */
class AiAnalysisResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Classification：智能分类</li>
<li>Cover：智能封面</li>
<li>Tag：智能标签</li>
<li>FrameTag：智能按帧标签</li>
<li>Highlight：智能精彩集锦</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskClassificationResult || null}
         */
        this.ClassificationTask = null;

        /**
         * 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskCoverResult || null}
         */
        this.CoverTask = null;

        /**
         * 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskTagResult || null}
         */
        this.TagTask = null;

        /**
         * 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskFrameTagResult || null}
         */
        this.FrameTagTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ClassificationTask) {
            let obj = new AiAnalysisTaskClassificationResult();
            obj.deserialize(params.ClassificationTask)
            this.ClassificationTask = obj;
        }

        if (params.CoverTask) {
            let obj = new AiAnalysisTaskCoverResult();
            obj.deserialize(params.CoverTask)
            this.CoverTask = obj;
        }

        if (params.TagTask) {
            let obj = new AiAnalysisTaskTagResult();
            obj.deserialize(params.TagTask)
            this.TagTask = obj;
        }

        if (params.FrameTagTask) {
            let obj = new AiAnalysisTaskFrameTagResult();
            obj.deserialize(params.FrameTagTask)
            this.FrameTagTask = obj;
        }

    }
}

/**
 * 内容审核 Ocr 文字鉴政任务输入参数类型
 * @class
 */
class AiReviewPoliticalOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴政模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 文本鉴黄任务控制参数
 * @class
 */
class PornOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本鉴黄任务开关，可选值：
<li>ON：开启文本鉴黄任务；</li>
<li>OFF：关闭文本鉴黄任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 直播流 AI 审核结果
 * @class
 */
class LiveStreamAiReviewResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审核结果的类型，可以取的值有：
<li>ImagePorn：图片鉴黄</li>
<li>ImageTerrorism：图片鉴恐</li>
<li>ImagePolitical：图片鉴政</li>
<li>PornVoice：声音鉴黄</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 图片鉴黄的结果，当 Type 为 ImagePorn 时有效。
         * @type {Array.<LiveStreamAiReviewImagePornResult> || null}
         */
        this.ImagePornResultSet = null;

        /**
         * 图片鉴恐的结果，当 Type 为 ImageTerrorism 时有效。
         * @type {Array.<LiveStreamAiReviewImageTerrorismResult> || null}
         */
        this.ImageTerrorismResultSet = null;

        /**
         * 图片鉴政的结果，当 Type 为 ImagePolitical 时有效。
         * @type {Array.<LiveStreamAiReviewImagePoliticalResult> || null}
         */
        this.ImagePoliticalResultSet = null;

        /**
         * 声音鉴黄的结果，当 Type 为 PornVoice 时有效。
         * @type {Array.<LiveStreamAiReviewVoicePornResult> || null}
         */
        this.VoicePornResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ImagePornResultSet) {
            this.ImagePornResultSet = new Array();
            for (let z in params.ImagePornResultSet) {
                let obj = new LiveStreamAiReviewImagePornResult();
                obj.deserialize(params.ImagePornResultSet[z]);
                this.ImagePornResultSet.push(obj);
            }
        }

        if (params.ImageTerrorismResultSet) {
            this.ImageTerrorismResultSet = new Array();
            for (let z in params.ImageTerrorismResultSet) {
                let obj = new LiveStreamAiReviewImageTerrorismResult();
                obj.deserialize(params.ImageTerrorismResultSet[z]);
                this.ImageTerrorismResultSet.push(obj);
            }
        }

        if (params.ImagePoliticalResultSet) {
            this.ImagePoliticalResultSet = new Array();
            for (let z in params.ImagePoliticalResultSet) {
                let obj = new LiveStreamAiReviewImagePoliticalResult();
                obj.deserialize(params.ImagePoliticalResultSet[z]);
                this.ImagePoliticalResultSet.push(obj);
            }
        }

        if (params.VoicePornResultSet) {
            this.VoicePornResultSet = new Array();
            for (let z in params.VoicePornResultSet) {
                let obj = new LiveStreamAiReviewVoicePornResult();
                obj.deserialize(params.VoicePornResultSet[z]);
                this.VoicePornResultSet.push(obj);
            }
        }

    }
}

/**
 * 图片水印模板输入参数
 * @class
 */
class ImageWatermarkInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
0px 表示 Height 按照 Width 对视频宽度的比例缩放。
         * @type {string || null}
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
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Asr 文字涉黄信息
 * @class
 */
class AiReviewPornAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asr 文字涉黄评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉黄嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAIAnalysisTemplates请求参数结构体
 * @class
 */
class DescribeAIAnalysisTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识过滤条件，数组长度限制：10。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
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
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 视频处理输入对象信息。
 * @class
 */
class MediaInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理对象的类型，现在仅支持 COS。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当 Type 为 COS 时有效，则该项为必填，表示视频处理 COS 对象信息。
         * @type {CosInputInfo || null}
         */
        this.CosInputInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosInputInfo) {
            let obj = new CosInputInfo();
            obj.deserialize(params.CosInputInfo)
            this.CosInputInfo = obj;
        }

    }
}

/**
 * 任务处理的事件通知配置。
 * @class
 */
class LiveStreamTaskNotifyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
         * @type {string || null}
         */
        this.CmqModel = null;

        /**
         * CMQ 的园区，如 sh，bj 等。
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmqModel = 'CmqModel' in params ? params.CmqModel : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 对视频截雪碧图任务结果类型
 * @class
 */
class MediaProcessTaskImageSpriteResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 对视频截雪碧图任务的输入。
         * @type {ImageSpriteTaskInput || null}
         */
        this.Input = null;

        /**
         * 对视频截雪碧图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaImageSpriteItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new ImageSpriteTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaImageSpriteItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreateWorkflow请求参数结构体
 * @class
 */
class CreateWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流名称，最多128字符。同一个用户该名称唯一。
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * 视频处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 视频处理类型任务参数。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 任务的事件通知配置，不填代表不获取事件通知。
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         * @type {number || null}
         */
        this.TaskPriority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;

    }
}

/**
 * ParseLiveStreamProcessNotification请求参数结构体
 * @class
 */
class ParseLiveStreamProcessNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从 CMQ 获取到的直播流事件通知内容。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates返回参数结构体
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 指定时间点截图模板详情列表。
         * @type {Array.<SnapshotByTimeOffsetTemplate> || null}
         */
        this.SnapshotByTimeOffsetTemplateSet = null;

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

        if (params.SnapshotByTimeOffsetTemplateSet) {
            this.SnapshotByTimeOffsetTemplateSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTemplateSet) {
                let obj = new SnapshotByTimeOffsetTemplate();
                obj.deserialize(params.SnapshotByTimeOffsetTemplateSet[z]);
                this.SnapshotByTimeOffsetTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 点播文件视频流信息
 * @class
 */
class MediaVideoStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的码率，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流的高度，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流的宽度，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流的编码格式，例如 h264。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 帧率，单位：hz。
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * 文本全文本识别任务控制参数
 * @class
 */
class OcrFullTextConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本全文识别任务开关，可选值：
<li>ON：开启智能文本全文识别任务；</li>
<li>OFF：关闭智能文本全文识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 时间点截图模板详情
 * @class
 */
class SnapshotByTimeOffsetTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间点截图模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>black：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>black：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate返回参数结构体
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
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
 * 文本关键词识别结果。
 * @class
 */
class AiRecognitionTaskOcrWordsResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本关键词。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 文本关键出现的片段列表。
         * @type {Array.<AiRecognitionTaskOcrWordsSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

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
         * 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
         * @type {string || null}
         */
        this.ScrollToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;

    }
}

/**
 * 人脸识别任务控制参数
 * @class
 */
class FaceConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸识别任务开关，可选值：
<li>ON：开启智能人脸识别任务；</li>
<li>OFF：关闭智能人脸识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。取值范围：0-100。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星；</li>
<li>politician：政治人物。</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * 人物库选择，可选值：
<li>Default：使用默认人物库；</li>
<li>UserDefine：使用用户自定义人物库。</li>
<li>All：同时使用默认人物库和用户自定义人物库。</li>
         * @type {string || null}
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * CreateTranscodeTemplate返回参数结构体
 * @class
 */
class CreateTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能标签任务输入类型
 * @class
 */
class AiAnalysisTaskTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能标签模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 内容审核 Ocr 文字审核嫌疑片段
 * @class
 */
class MediaContentReviewOcrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

        /**
         * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴政、敏感任务结果类型
 * @class
 */
class AiReviewTaskPoliticalOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS �� FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴政任务输入。
         * @type {AiReviewPoliticalOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴政任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewPoliticalOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 转动图模板详情。
 * @class
 */
class AnimatedGraphicsTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 转动图模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 转动图模板描述。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * 动图格式。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 帧率。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 图片质量。
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 语音鉴黄任务控制参数。
 * @class
 */
class PornAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音鉴黄任务开关，可选值：
<li>ON：开启语音鉴黄任务；</li>
<li>OFF：关闭语音鉴黄任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * AI 样本管理，关键词输出信息。
 * @class
 */
class AiSampleWord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 关键词标签。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 关键词应用场景。
         * @type {Array.<string> || null}
         */
        this.UsageSet = null;

        /**
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateAIAnalysisTemplate请求参数结构体
 * @class
 */
class CreateAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频内容分析模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 智能分类任务控制参数。
         * @type {ClassificationConfigureInfo || null}
         */
        this.ClassificationConfigure = null;

        /**
         * 智能标签任务控制参数。
         * @type {TagConfigureInfo || null}
         */
        this.TagConfigure = null;

        /**
         * 智能封面任务控制参数。
         * @type {CoverConfigureInfo || null}
         */
        this.CoverConfigure = null;

        /**
         * 智能按帧标签任务控制参数。
         * @type {FrameTagConfigureInfo || null}
         */
        this.FrameTagConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

    }
}

/**
 * 文本鉴政任务控制参数
 * @class
 */
class PoliticalOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本鉴政任务开关，可选值：
<li>ON：开启文本鉴政任务；</li>
<li>OFF：关闭文本鉴政任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 内容审核鉴恐任务输入参数类型
 * @class
 */
class AiReviewTerrorismTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴恐模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateImageSpriteTemplate请求参数结构体
 * @class
 */
class CreateImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图中小图的宽度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 采样类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * 雪碧图中小图的行数。
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * 雪碧图中小图的列数。
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * 雪碧图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeWorkflows请求参数结构体
 * @class
 */
class DescribeWorkflowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID 过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.WorkflowIds = null;

        /**
         * 工作流状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
不填此参数，则不区分工作流状态。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
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
        this.WorkflowIds = 'WorkflowIds' in params ? params.WorkflowIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 语音全文识别任务控制参数
 * @class
 */
class AsrFullTextConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
         * @type {string || null}
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * 内容审核鉴恐任务结果类型
 * @class
 */
class AiReviewTaskTerrorismResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核鉴恐任务输入。
         * @type {AiReviewTerrorismTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核鉴恐任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTerrorismTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 直播 AI 内容审核图片鉴恐结果
 * @class
 */
class LiveStreamAiReviewImageTerrorismResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉恐分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴恐结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频暴恐结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：暴恐旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：暴恐人物。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * ProcessLiveStream请求参数结构体
 * @class
 */
class ProcessLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流 URL（必须是直播文件地址，支持 rtmp，hls 和 flv 等）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 任务的事件通知信息，用于指定直播流处理的结果。
         * @type {LiveStreamTaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * 直播流处理输出文件的目标存储。如处理有文件输出，该参数为必填项。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 直播流处理生成的文件输出的目标目录，如`/movie/201909/`，如果不填为 `/` 目录。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 视频内容审核类型任务参数。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容识别类型任务参数。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.TaskNotifyConfig) {
            let obj = new LiveStreamTaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * CreatePersonSample返回参数结构体
 * @class
 */
class CreatePersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物信息。
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * 处理失败的人脸信息。
         * @type {Array.<AiSampleFailFaceInfo> || null}
         */
        this.FailFaceInfoSet = null;

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

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateContentReviewTemplate返回参数结构体
 * @class
 */
class CreateContentReviewTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 内容审核 Asr 文字审核嫌疑片段
 * @class
 */
class MediaContentReviewAsrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;

    }
}

/**
 * 智能标签任务控制参数
 * @class
 */
class TagConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能标签任务开关，可选值：
<li>ON：开启智能标签任务；</li>
<li>OFF：关闭智能标签任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeTranscodeTemplates返回参数结构体
 * @class
 */
class DescribeTranscodeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 转码模板详情列表。
         * @type {Array.<TranscodeTemplate> || null}
         */
        this.TranscodeTemplateSet = null;

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

        if (params.TranscodeTemplateSet) {
            this.TranscodeTemplateSet = new Array();
            for (let z in params.TranscodeTemplateSet) {
                let obj = new TranscodeTemplate();
                obj.deserialize(params.TranscodeTemplateSet[z]);
                this.TranscodeTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyImageSpriteTemplate请求参数结构体
 * @class
 */
class ModifyImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 雪碧图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 雪碧图中小图的宽度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 采样类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * 雪碧图中小图的行数。
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * 雪碧图中小图的列数。
         * @type {number || null}
         */
        this.ColumnCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;

    }
}

/**
 * 内容审核模板详情
 * @class
 */
class ContentReviewTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 内容审核模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 内容审核模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 鉴黄控制参数。
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * 鉴恐控制参数。
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 采样截图信息
 * @class
 */
class MediaSampleSnapshotItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 采样方式，取值范围：
<li>Percent：根据百分比间隔采样。</li>
<li>Time：根据时间间隔采样。</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔
<li>当 SampleType 为 Percent 时，该值表示多少百分比一张图。</li>
<li>当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。</li>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 截图后文件的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

        /**
         * 生成的截图 path 列表。
         * @type {Array.<string> || null}
         */
        this.ImagePathSet = null;

        /**
         * 截图如果被打上了水印，被打水印的模板 ID 列表。
         * @type {Array.<number> || null}
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.ImagePathSet = 'ImagePathSet' in params ? params.ImagePathSet : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * DeletePersonSample返回参数结构体
 * @class
 */
class DeletePersonSampleResponse extends  AbstractModel {
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
 * DeleteAIRecognitionTemplate返回参数结构体
 * @class
 */
class DeleteAIRecognitionTemplateResponse extends  AbstractModel {
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
 * DeleteWordSamples请求参数结构体
 * @class
 */
class DeleteWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词，数组长度限制：100 个词。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;

    }
}

/**
 * 直播流 AI 识别结果
 * @class
 */
class LiveStreamAiRecognitionResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容识别结果列表。
         * @type {Array.<LiveStreamAiRecognitionResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new LiveStreamAiRecognitionResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * DeleteContentReviewTemplate请求参数结构体
 * @class
 */
class DeleteContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate返回参数结构体
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWordSamples请求参数结构体
 * @class
 */
class DescribeWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <b>关键词应用场景过滤条件，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过语音识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行内容审核；
4. Review.Asr：通过语音识别技术，进行内容审核；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、语音识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、语音识别技术，进行内容审核，等价于 3+4；
可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 关键词过滤条件，数组长度限制：100 个词。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 标签过滤条件，数组长度限制：20 个词。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：100，最大值：100。
         * @type {number || null}
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
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAIAnalysisTemplate请求参数结构体
 * @class
 */
class ModifyAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 视频内容分析模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频内容分析模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 智能分类任务控制参数。
         * @type {ClassificationConfigureInfoForUpdate || null}
         */
        this.ClassificationConfigure = null;

        /**
         * 智能标签任务控制参数。
         * @type {TagConfigureInfoForUpdate || null}
         */
        this.TagConfigure = null;

        /**
         * 智能封面任务控制参数。
         * @type {CoverConfigureInfoForUpdate || null}
         */
        this.CoverConfigure = null;

        /**
         * 智能按帧标签任务控制参数。
         * @type {FrameTagConfigureInfoForUpdate || null}
         */
        this.FrameTagConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfoForUpdate();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfoForUpdate();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfoForUpdate();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfoForUpdate();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

    }
}

/**
 * DescribeWatermarkTemplates请求参数结构体
 * @class
 */
class DescribeWatermarkTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印模板唯一标识过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 水印类型过滤条件，可选值：
<li>image：图片水印；</li>
<li>text：文字水印。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数
<li>默认值：10；</li>
<li>最大值：100。</li>
         * @type {number || null}
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
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 内容审核鉴政任务输入参数类型
 * @class
 */
class AiReviewPoliticalTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴政模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * ModifyContentReviewTemplate返回参数结构体
 * @class
 */
class ModifyContentReviewTemplateResponse extends  AbstractModel {
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
 * 鉴黄任务控制参数。
 * @class
 */
class PornConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴黄控制参数。
         * @type {PornImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴黄控制参数。
         * @type {PornAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴黄控制参数。
         * @type {PornOcrReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 文本全文识别片段。
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentTextItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * 识别文本。
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 智能内容审核任务类型
 * @class
 */
class AiContentReviewTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容审核模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 视频处理任务信息
 * @class
 */
class WorkflowTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 已弃用，请使用各个具体任务的 ErrCode。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 已弃用，请使用各个具体任务的 Message。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 视频处理的目标文件信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 原始视频的元信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 视频处理任务的执行状态与结果。
         * @type {Array.<MediaProcessTaskResult> || null}
         */
        this.MediaProcessResultSet = null;

        /**
         * 视频内容审核任务的执行状态与结果。
         * @type {Array.<AiContentReviewResult> || null}
         */
        this.AiContentReviewResultSet = null;

        /**
         * 视频内容分析任务的执行状态与结果。
         * @type {Array.<AiAnalysisResult> || null}
         */
        this.AiAnalysisResultSet = null;

        /**
         * 视频内容识别任务的执行状态与结果。
         * @type {Array.<AiRecognitionResult> || null}
         */
        this.AiRecognitionResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.MediaProcessResultSet) {
            this.MediaProcessResultSet = new Array();
            for (let z in params.MediaProcessResultSet) {
                let obj = new MediaProcessTaskResult();
                obj.deserialize(params.MediaProcessResultSet[z]);
                this.MediaProcessResultSet.push(obj);
            }
        }

        if (params.AiContentReviewResultSet) {
            this.AiContentReviewResultSet = new Array();
            for (let z in params.AiContentReviewResultSet) {
                let obj = new AiContentReviewResult();
                obj.deserialize(params.AiContentReviewResultSet[z]);
                this.AiContentReviewResultSet.push(obj);
            }
        }

        if (params.AiAnalysisResultSet) {
            this.AiAnalysisResultSet = new Array();
            for (let z in params.AiAnalysisResultSet) {
                let obj = new AiAnalysisResult();
                obj.deserialize(params.AiAnalysisResultSet[z]);
                this.AiAnalysisResultSet.push(obj);
            }
        }

        if (params.AiRecognitionResultSet) {
            this.AiRecognitionResultSet = new Array();
            for (let z in params.AiRecognitionResultSet) {
                let obj = new AiRecognitionResult();
                obj.deserialize(params.AiRecognitionResultSet[z]);
                this.AiRecognitionResultSet.push(obj);
            }
        }

    }
}

/**
 * DeleteImageSpriteTemplate请求参数结构体
 * @class
 */
class DeleteImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 视频流配置参数
 * @class
 */
class VideoTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * DeleteSampleSnapshotTemplate请求参数结构体
 * @class
 */
class DeleteSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates返回参数结构体
 * @class
 */
class DescribeSampleSnapshotTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 采样截图模板详情列表。
         * @type {Array.<SampleSnapshotTemplate> || null}
         */
        this.SampleSnapshotTemplateSet = null;

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

        if (params.SampleSnapshotTemplateSet) {
            this.SampleSnapshotTemplateSet = new Array();
            for (let z in params.SampleSnapshotTemplateSet) {
                let obj = new SampleSnapshotTemplate();
                obj.deserialize(params.SampleSnapshotTemplateSet[z]);
                this.SampleSnapshotTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能分类结果信息
 * @class
 */
class AiAnalysisTaskClassificationOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能分类列表。
         * @type {Array.<MediaAiAnalysisClassificationItem> || null}
         */
        this.ClassificationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClassificationSet) {
            this.ClassificationSet = new Array();
            for (let z in params.ClassificationSet) {
                let obj = new MediaAiAnalysisClassificationItem();
                obj.deserialize(params.ClassificationSet[z]);
                this.ClassificationSet.push(obj);
            }
        }

    }
}

/**
 * SVG水印模板输入参数
 * @class
 */
class SvgWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
<li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 W%。</li>
默认值为 10W%。
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度，支持 px，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
<li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 H%。</li>
默认值为 0px。
         * @type {string || null}
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
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴黄任务结果类型
 * @class
 */
class AiReviewTaskPornOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴黄任务输入。
         * @type {AiReviewPornOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewPornOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 雪碧图模板详情
 * @class
 */
class ImageSpriteTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 雪碧图模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * 采样类型。
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔。
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * 雪碧图中小图的行数。
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * 雪碧图中小图的列数。
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 智能封面结果信息
 * @class
 */
class AiAnalysisTaskCoverOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面列表。
         * @type {Array.<MediaAiAnalysisCoverItem> || null}
         */
        this.CoverSet = null;

        /**
         * 智能封面的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CoverSet) {
            this.CoverSet = new Array();
            for (let z in params.CoverSet) {
                let obj = new MediaAiAnalysisCoverItem();
                obj.deserialize(params.CoverSet[z]);
                this.CoverSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * 智能分类任务控制参数
 * @class
 */
class ClassificationConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能分类任务开关，可选值：
<li>ON：开启智能分类任务；</li>
<li>OFF：关闭智能分类任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 直播 AI 内容审核声音鉴黄结果
 * @class
 */
class LiveStreamAiReviewVoicePornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉黄分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>sexual_moan：呻吟。</li>
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * ModifyWordSample返回参数结构体
 * @class
 */
class ModifyWordSampleResponse extends  AbstractModel {
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
 * 视频处理输出对象信息。
 * @class
 */
class TaskOutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理输出对象存储位置的类型，现在仅支持 COS。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当 Type 为 COS 时有效，则该项为必填，表示视频处理 COS 输出位置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CosOutputStorage || null}
         */
        this.CosOutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosOutputStorage) {
            let obj = new CosOutputStorage();
            obj.deserialize(params.CosOutputStorage)
            this.CosOutputStorage = obj;
        }

    }
}

/**
 * 内容审核结果
 * @class
 */
class AiContentReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Porn：图片鉴黄</li>
<li>Terrorism：图片鉴恐</li>
<li>Political：图片鉴政</li>
<li>Porn.Asr：Asr 文字鉴黄</li>
<li>Porn.Ocr：Ocr 文字鉴黄</li>
<li>Porn.Voice：声音鉴黄</li>
<li>Political.Asr：Asr 文字鉴政</li>
<li>Political.Ocr：Ocr 文字鉴政</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频内容审核智能画面鉴黄任务的查询结果，当任务类型为 Porn 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPornResult || null}
         */
        this.PornTask = null;

        /**
         * 视频内容审核智能画面鉴恐任务的查询结果，当任务类型为 Terrorism 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskTerrorismResult || null}
         */
        this.TerrorismTask = null;

        /**
         * 视频内容审核智能画面鉴政任务的查询结果，当任务类型为 Political 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPoliticalResult || null}
         */
        this.PoliticalTask = null;

        /**
         * 视频内容审核 Asr 文字鉴黄任务的查询结果，当任务类型为 Porn.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPornAsrResult || null}
         */
        this.PornAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴黄任务的查询结果，当任务类型为 Porn.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPornOcrResult || null}
         */
        this.PornOcrTask = null;

        /**
         * 视频内容审核 Asr 文字鉴政任务的查询结果，当任务类型为 Political.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPoliticalAsrResult || null}
         */
        this.PoliticalAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴政任务的查询结果，当任务类型为 Political.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPoliticalOcrResult || null}
         */
        this.PoliticalOcrTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PornTask) {
            let obj = new AiReviewTaskPornResult();
            obj.deserialize(params.PornTask)
            this.PornTask = obj;
        }

        if (params.TerrorismTask) {
            let obj = new AiReviewTaskTerrorismResult();
            obj.deserialize(params.TerrorismTask)
            this.TerrorismTask = obj;
        }

        if (params.PoliticalTask) {
            let obj = new AiReviewTaskPoliticalResult();
            obj.deserialize(params.PoliticalTask)
            this.PoliticalTask = obj;
        }

        if (params.PornAsrTask) {
            let obj = new AiReviewTaskPornAsrResult();
            obj.deserialize(params.PornAsrTask)
            this.PornAsrTask = obj;
        }

        if (params.PornOcrTask) {
            let obj = new AiReviewTaskPornOcrResult();
            obj.deserialize(params.PornOcrTask)
            this.PornOcrTask = obj;
        }

        if (params.PoliticalAsrTask) {
            let obj = new AiReviewTaskPoliticalAsrResult();
            obj.deserialize(params.PoliticalAsrTask)
            this.PoliticalAsrTask = obj;
        }

        if (params.PoliticalOcrTask) {
            let obj = new AiReviewTaskPoliticalOcrResult();
            obj.deserialize(params.PoliticalOcrTask)
            this.PoliticalOcrTask = obj;
        }

    }
}

/**
 * 音频流配置参数
 * @class
 */
class AudioTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的编码格式。
当外层参数 Container 为 mp3 时，可选值为：
<li>libmp3lame。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>libfdk_aac：更适合 mp4；</li>
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：立体声</li>
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * 对视频按指定时间点截图任务输入参数类型
 * @class
 */
class SnapshotByTimeOffsetTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 截图时间点列表，单位为<font color=red>秒</font>。
         * @type {Array.<number> || null}
         */
        this.TimeOffsetSet = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * 时间点截图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 时间点截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * 时间点截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TimeOffsetSet = 'TimeOffsetSet' in params ? params.TimeOffsetSet : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * 画面鉴恐任务控制参数
 * @class
 */
class TerrorismImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴恐任务开关，可选值：
<li>ON：开启画面鉴恐任务；</li>
<li>OFF：关闭画面鉴恐任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面鉴恐过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：暴恐旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：暴恐人物。</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DeletePersonSample请求参数结构体
 * @class
 */
class DeletePersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物 ID。
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 对视频截雪碧图任务输入参数类型
 * @class
 */
class ImageSpriteTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 截取雪碧图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 截取雪碧图后，雪碧图图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}_{number}.{format}`。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * 截取雪碧图后，Web VTT 文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}.{format}`。
         * @type {string || null}
         */
        this.WebVttObjectName = null;

        /**
         * 截取雪碧图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.WebVttObjectName = 'WebVttObjectName' in params ? params.WebVttObjectName : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * 用户自定义文本审核任务控制参数
 * @class
 */
class UserDefineOcrTextReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定文本审核任务开关，可选值：
<li>ON：开启自定义文本审核任务；</li>
<li>OFF：关闭自定义文本审核任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 语音识别片段。
 * @class
 */
class AiRecognitionTaskAsrWordsSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * DescribeImageSpriteTemplates返回参数结构体
 * @class
 */
class DescribeImageSpriteTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 雪碧图模板详情列表。
         * @type {Array.<ImageSpriteTemplate> || null}
         */
        this.ImageSpriteTemplateSet = null;

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

        if (params.ImageSpriteTemplateSet) {
            this.ImageSpriteTemplateSet = new Array();
            for (let z in params.ImageSpriteTemplateSet) {
                let obj = new ImageSpriteTemplate();
                obj.deserialize(params.ImageSpriteTemplateSet[z]);
                this.ImageSpriteTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ParseLiveStreamProcessNotification返回参数结构体
 * @class
 */
class ParseLiveStreamProcessNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流处理结果类型，包含：
<li>AiReviewResult：内容审核结果；</li>
<li>AiRecognitionResult：内容识别结果；</li>
<li>ProcessEof：直播流处理结束。</li>
         * @type {string || null}
         */
        this.NotificationType = null;

        /**
         * 视频处理任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 直播流处理错误信息，当 NotificationType 为 ProcessEof 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LiveStreamProcessErrorInfo || null}
         */
        this.ProcessEofInfo = null;

        /**
         * 内容审核结果，当 NotificationType 为 AiReviewResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LiveStreamAiReviewResultInfo || null}
         */
        this.AiReviewResultInfo = null;

        /**
         * 内容识别结果，当 NotificationType 为 AiRecognitionResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LiveStreamAiRecognitionResultInfo || null}
         */
        this.AiRecognitionResultInfo = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

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
        this.NotificationType = 'NotificationType' in params ? params.NotificationType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.ProcessEofInfo) {
            let obj = new LiveStreamProcessErrorInfo();
            obj.deserialize(params.ProcessEofInfo)
            this.ProcessEofInfo = obj;
        }

        if (params.AiReviewResultInfo) {
            let obj = new LiveStreamAiReviewResultInfo();
            obj.deserialize(params.AiReviewResultInfo)
            this.AiReviewResultInfo = obj;
        }

        if (params.AiRecognitionResultInfo) {
            let obj = new LiveStreamAiRecognitionResultInfo();
            obj.deserialize(params.AiRecognitionResultInfo)
            this.AiRecognitionResultInfo = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直播识别 Asr 全文识别
 * @class
 */
class LiveStreamAsrFullTextRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别文本。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * DescribeTranscodeTemplates请求参数结构体
 * @class
 */
class DescribeTranscodeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码模板唯一标识过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式板；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式。</li>
         * @type {string || null}
         */
        this.ContainerType = null;

        /**
         * 极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：
<li>Common：普通转码模板；</li>
<li>TEHD：极速高清模板。</li>
         * @type {string || null}
         */
        this.TEHDType = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
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
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.TEHDType = 'TEHDType' in params ? params.TEHDType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Ocr 文字涉黄信息
 * @class
 */
class AiReviewPornOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ocr 文字涉黄评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉黄嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateSampleSnapshotTemplate返回参数结构体
 * @class
 */
class CreateSampleSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频内容识别输入参数类型
 * @class
 */
class AiRecognitionTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能识别模板 ID 。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴黄任务输入参数类型
 * @class
 */
class AiReviewPornOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴黄模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 文本关键词识别控制参数。
 * @class
 */
class OcrWordsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本关键词识别任务开关，可选值：
<li>ON：开启文本关键词识别任务；</li>
<li>OFF：关闭文本关键词识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * DisableWorkflow请求参数结构体
 * @class
 */
class DisableWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID。
         * @type {number || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * 智能按帧标签结果信息
 * @class
 */
class AiAnalysisTaskFrameTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频按帧标签列表。
         * @type {Array.<MediaAiAnalysisFrameTagSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaAiAnalysisFrameTagSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 鉴政任务控制参数。
 * @class
 */
class PoliticalConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴政控制参数。
         * @type {PoliticalImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴政控制参数。
         * @type {PoliticalAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴政控制参数。
         * @type {PoliticalOcrReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 音频流配置参数
 * @class
 */
class AudioTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的编码格式。
当外层参数 Container 为 mp3 时，可选值为：
<li>libmp3lame。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>libfdk_aac：更适合 mp4；</li>
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
当取值为 0，表示音频码率和原始音频保持一致。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：立体声</li>
默认值：2。
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * DescribeContentReviewTemplates返回参数结构体
 * @class
 */
class DescribeContentReviewTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 内容审核模板详情列表。
         * @type {Array.<ContentReviewTemplateItem> || null}
         */
        this.ContentReviewTemplateSet = null;

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

        if (params.ContentReviewTemplateSet) {
            this.ContentReviewTemplateSet = new Array();
            for (let z in params.ContentReviewTemplateSet) {
                let obj = new ContentReviewTemplateItem();
                obj.deserialize(params.ContentReviewTemplateSet[z]);
                this.ContentReviewTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频转动图结果信息
 * @class
 */
class MediaAnimatedGraphicsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图文件的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

        /**
         * 转动图的文件路径。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/33481#.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 动图格式，如 gif。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 动图的高度，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 动图的宽度，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 动图码率，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 动图大小，单位：字节。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 动图的md5值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 动图在视频中的起始时间偏移，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 动图在视频中的结束时间偏移，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 智能封面任务控制参数
 * @class
 */
class CoverConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面任务开关，可选值：
<li>ON：开启智能封面任务；</li>
<li>OFF：关闭智能封面任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 转动图任务结果类型
 * @class
 */
class MediaProcessTaskAnimatedGraphicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 转动图任务的输入。
         * @type {AnimatedGraphicTaskInput || null}
         */
        this.Input = null;

        /**
         * 转动图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaAnimatedGraphicsItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AnimatedGraphicTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaAnimatedGraphicsItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeWatermarkTemplates返回参数结构体
 * @class
 */
class DescribeWatermarkTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 水印模板详情列表。
         * @type {Array.<WatermarkTemplate> || null}
         */
        this.WatermarkTemplateSet = null;

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

        if (params.WatermarkTemplateSet) {
            this.WatermarkTemplateSet = new Array();
            for (let z in params.WatermarkTemplateSet) {
                let obj = new WatermarkTemplate();
                obj.deserialize(params.WatermarkTemplateSet[z]);
                this.WatermarkTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务的事件通知配置。
 * @class
 */
class TaskNotifyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
         * @type {string || null}
         */
        this.CmqModel = null;

        /**
         * CMQ 的园区，如 sh，bj 等。
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。
         * @type {string || null}
         */
        this.NotifyMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmqModel = 'CmqModel' in params ? params.CmqModel : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.NotifyMode = 'NotifyMode' in params ? params.NotifyMode : null;

    }
}

/**
 * ModifyWordSample请求参数结构体
 * @class
 */
class ModifyWordSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词，长度限制：128 个字符。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过语音识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行内容审核；
4. Review.Asr：通过语音识别技术，进行内容审核；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、语音识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、语音识别技术，进行内容审核，等价于 3+4；
7. All：通过光学字符识别技术、语音识别技术，进行内容识别、内容审核，等价于 1+2+3+4。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 标签操作信息。
         * @type {AiSampleTagOperation || null}
         */
        this.TagOperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }

    }
}

/**
 * 视频内容识别模板详情
 * @class
 */
class AIRecognitionTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 视频内容识别模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频内容识别模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 人脸识别控制参数。
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 内容审核 Asr 文字鉴黄任务输入参数类型
 * @class
 */
class AiReviewPornAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴黄模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 人脸识别结果片段
 * @class
 */
class AiRecognitionTaskFaceSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class CreateAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 帧率，取值范围：[1, 30]，单位：Hz。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 动图格式，取值为 gif 和 webp。默认为 gif。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 图片质量，取值范围：[1, 100]，默认值为 75。
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * 转动图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 智能按帧标签任务控制参数
 * @class
 */
class FrameTagConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeAnimatedGraphicsTemplates请求参数结构体
 * @class
 */
class DescribeAnimatedGraphicsTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图模板唯一标识过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 智能标签结果类型
 * @class
 */
class AiAnalysisTaskTagResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 智能标签任务输入。
         * @type {AiAnalysisTaskTagInput || null}
         */
        this.Input = null;

        /**
         * 智能标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskTagOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 文本鉴黄任务控制参数。
 * @class
 */
class PornOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本鉴黄任务开关，可选值：
<li>ON：开启文本鉴黄任务；</li>
<li>OFF：关闭文本鉴黄任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyAIAnalysisTemplate返回参数结构体
 * @class
 */
class ModifyAIAnalysisTemplateResponse extends  AbstractModel {
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
 * 画面鉴恐任务控制参数。
 * @class
 */
class TerrorismImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴恐任务开关，可选值：
<li>ON：开启画面鉴恐任务；</li>
<li>OFF：关闭画面鉴恐任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面鉴恐过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：暴恐旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：暴恐人物。</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyPersonSample返回参数结构体
 * @class
 */
class ModifyPersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物信息。
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * 处理失败的人脸信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiSampleFailFaceInfo> || null}
         */
        this.FailFaceInfoSet = null;

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

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTranscodeTemplate请求参数结构体
 * @class
 */
class ModifyTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 转码模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字节。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数。
         * @type {VideoTemplateInfoForUpdate || null}
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数。
         * @type {AudioTemplateInfoForUpdate || null}
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数，需联系商务架构师开通后才能使用。
         * @type {TEHDConfigForUpdate || null}
         */
        this.TEHDConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfoForUpdate();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfoForUpdate();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfigForUpdate();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

    }
}

/**
 * 输出文件名的`{number}`变量的规则。
 * @class
 */
class NumberFormat extends  AbstractModel {
    constructor(){
        super();

        /**
         * `{number}`变量的起始值，默认为0。
         * @type {number || null}
         */
        this.InitialValue = null;

        /**
         * `{number}`变量的增长步长，默认为1。
         * @type {number || null}
         */
        this.Increment = null;

        /**
         * `{number}`变量的最小长度，不足时补占位符。默认为1。
         * @type {number || null}
         */
        this.MinLength = null;

        /**
         * `{number}`变量的长度不足时，补充的占位符。默认为"0"。
         * @type {string || null}
         */
        this.PlaceHolder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitialValue = 'InitialValue' in params ? params.InitialValue : null;
        this.Increment = 'Increment' in params ? params.Increment : null;
        this.MinLength = 'MinLength' in params ? params.MinLength : null;
        this.PlaceHolder = 'PlaceHolder' in params ? params.PlaceHolder : null;

    }
}

/**
 * 智能标签结果信息
 * @class
 */
class AiAnalysisTaskTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能标签列表。
         * @type {Array.<MediaAiAnalysisTagItem> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * DeleteTranscodeTemplate返回参数结构体
 * @class
 */
class DeleteTranscodeTemplateResponse extends  AbstractModel {
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
 * 内容审核 Asr 文字鉴政、敏感任务结果类型
 * @class
 */
class AiReviewTaskPoliticalAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字鉴政任务输入。
         * @type {AiReviewPoliticalAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴政任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewPoliticalAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 转码信息
 * @class
 */
class MediaTranscodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码后文件的目标存储。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 转码后的视频文件路径。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33478#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 视频时长，单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频的 md5 值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 音频流信息。
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * 视频流信息。
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

    }
}

/**
 * DescribePersonSamples返回参数结构体
 * @class
 */
class DescribePersonSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 人物信息。
         * @type {Array.<AiSamplePerson> || null}
         */
        this.PersonSet = null;

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

        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new AiSamplePerson();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片宽度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 图片高度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 指定时间点截图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 图片格式，取值可以为 jpg 和 png。默认为 jpg。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 文字水印模板
 * @class
 */
class TextWatermarkTemplateInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字体类型，目前可以支持两种：
<li>simkai.ttf：可以支持中文和英文；</li>
<li>arial.ttf：仅支持英文。</li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * 字体大小，格式：Npx，N 为数值。
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * 直播处理任务信息
 * @class
 */
class LiveStreamProcessTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 直播流 URL。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 鉴黄任务控制参数
 * @class
 */
class PornConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴黄控制参数。
         * @type {PornImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴黄控制参数。
         * @type {PornAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴黄控制参数。
         * @type {PornOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 内容审核涉黄/暴恐嫌疑片段
 * @class
 */
class MediaContentReviewSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉黄分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果标签。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * 文本关键词识别输入。
 * @class
 */
class AiRecognitionTaskOcrWordsResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本关键词识别模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeContentReviewTemplates请求参数结构体
 * @class
 */
class DescribeContentReviewTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识过滤条件，数组长度限制：50。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：50。
         * @type {number || null}
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
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyImageSpriteTemplate返回参数结构体
 * @class
 */
class ModifyImageSpriteTemplateResponse extends  AbstractModel {
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
 * 用户自定义人物审核任务控制参数。
 * @class
 */
class UserDefineFaceReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义人物审核任务开关，可选值：
<li>ON：开启自定义人物审核任务；</li>
<li>OFF：关闭自定义人物审核任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeAIAnalysisTemplates返回参数结构体
 * @class
 */
class DescribeAIAnalysisTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 视频内容分析模板详情列表。
         * @type {Array.<AIAnalysisTemplateItem> || null}
         */
        this.AIAnalysisTemplateSet = null;

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

        if (params.AIAnalysisTemplateSet) {
            this.AIAnalysisTemplateSet = new Array();
            for (let z in params.AIAnalysisTemplateSet) {
                let obj = new AIAnalysisTemplateItem();
                obj.deserialize(params.AIAnalysisTemplateSet[z]);
                this.AIAnalysisTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 内容审核鉴黄任务结果类型
 * @class
 */
class AiReviewTaskPornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核鉴黄任务输入。
         * @type {AiReviewPornTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewPornTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DeleteSampleSnapshotTemplate返回参数结构体
 * @class
 */
class DeleteSampleSnapshotTemplateResponse extends  AbstractModel {
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
 * 用户自定义人物审核任务控制参数
 * @class
 */
class UserDefineFaceReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义人物审核任务开关，可选值：
<li>ON：开启自定义人物审核任务；</li>
<li>OFF：关闭自定义人物审核任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 文本全文识别结果。
 * @class
 */
class AiRecognitionTaskOcrFullTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 文本全文识别任务输入信息。
         * @type {AiRecognitionTaskOcrFullTextResultInput || null}
         */
        this.Input = null;

        /**
         * 文本全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskOcrFullTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 语音关键词识别结果。
 * @class
 */
class AiRecognitionTaskAsrWordsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 语音关键词识别任务输入信息。
         * @type {AiRecognitionTaskAsrWordsResultInput || null}
         */
        this.Input = null;

        /**
         * 语音关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskAsrWordsResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 内容审核鉴黄任务输入参数类型
 * @class
 */
class AiReviewPornTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴黄模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 直播 AI 人脸识别结果
 * @class
 */
class LiveStreamFaceRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物唯一标识 ID。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 人物名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li><li>UserDefine：用户自定义人物库。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * CreateSampleSnapshotTemplate请求参数结构体
 * @class
 */
class CreateSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片宽度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 图片高度，取值范围： [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 采样截图类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * 采样截图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 图片格式，取值为 jpg 和 png。默认为 jpg。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 用户自定义语音审核任务控制参数
 * @class
 */
class UserDefineAsrTextReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定语音审核任务开关，可选值：
<li>ON：开启自定义语音审核任务；</li>
<li>OFF：关闭自定义语音审核任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates请求参数结构体
 * @class
 */
class DescribeSampleSnapshotTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 智能封面任务控制参数
 * @class
 */
class CoverConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面任务开关，可选值：
<li>ON：开启智能封面任务；</li>
<li>OFF：关闭智能封面任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DisableWorkflow返回参数结构体
 * @class
 */
class DisableWorkflowResponse extends  AbstractModel {
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
 * 对视频按指定时间点截图任务结果类型
 * @class
 */
class MediaProcessTaskSnapshotByTimeOffsetResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 对视频按指定时间点截图任务输入。
         * @type {SnapshotByTimeOffsetTaskInput || null}
         */
        this.Input = null;

        /**
         * 对视频按指定时间点截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaSnapshotByTimeOffsetItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SnapshotByTimeOffsetTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSnapshotByTimeOffsetItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreatePersonSample请求参数结构体
 * @class
 */
class CreatePersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物名称，长度限制：20 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。
注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

        /**
         * 人物应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于内容审核，等价于 Review.Face。
3. All：用于内容识别、内容审核，等价于 1+2。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 人物描述，长度限制：1024 个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 人物标签
<li>数组长度限制：20 个标签；</li>
<li>单个标签长度限制：128 个字符。</li>
         * @type {Array.<string> || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 内容审核 Asr 文字鉴黄任务结果类型
 * @class
 */
class AiReviewTaskPornAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字鉴黄任务输入。
         * @type {AiReviewPornAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewPornAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 画面鉴政任务控制参数。
 * @class
 */
class PoliticalImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴政任务开关，可选值：
<li>ON：开启画面鉴政任务；</li>
<li>OFF：关闭画面鉴政任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面鉴政过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：政治人物；</li>
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星。</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 智能封面信息
 * @class
 */
class MediaAiAnalysisCoverItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面存储路径。
         * @type {string || null}
         */
        this.CoverPath = null;

        /**
         * 智能封面的可信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoverPath = 'CoverPath' in params ? params.CoverPath : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 用户自定义审核任务控制参数
 * @class
 */
class UserDefineConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义人物审核控制参数。
         * @type {UserDefineFaceReviewTemplateInfo || null}
         */
        this.FaceReviewInfo = null;

        /**
         * 用户自定义语音审核控制参数。
         * @type {UserDefineAsrTextReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 用户自定义文本审核控制参数。
         * @type {UserDefineOcrTextReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfo();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 视频处理 COS 对象信息。
 * @class
 */
class CosInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理对象文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 视频处理对象文件所在的 COS Bucket 所属园区，如 ap-chongqing。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 视频处理对象文件的输入路径，如`/movie/201907/WildAnimal.mov`。
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
 * 智能标签任务控制参数
 * @class
 */
class TagConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能标签任务开关，可选值：
<li>ON：开启智能标签任务；</li>
<li>OFF：关闭智能标签任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 转码任务输入参数类型
 * @class
 */
class TranscodeTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频转码模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * 转码后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 转码后主文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_transcode_{definition}.{format}`。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * 转码后分片文件的输出路径（转码 HLS 时 ts 的路径），只能为相对路径。如果不填，则默认为：`{inputName}_transcode_{definition}_{number}.{format}`。
         * @type {string || null}
         */
        this.SegmentObjectName = null;

        /**
         * 转码后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.SegmentObjectName = 'SegmentObjectName' in params ? params.SegmentObjectName : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * DescribeWordSamples返回参数结构体
 * @class
 */
class DescribeWordSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 关键词信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiSampleWord> || null}
         */
        this.WordSet = null;

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

        if (params.WordSet) {
            this.WordSet = new Array();
            for (let z in params.WordSet) {
                let obj = new AiSampleWord();
                obj.deserialize(params.WordSet[z]);
                this.WordSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸识别任务控制参数
 * @class
 */
class FaceConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸识别任务开关，可选值：
<li>ON：开启智能人脸识别任务；</li>
<li>OFF：关闭智能人脸识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。默认 95 分。取值范围：0 - 100。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星；</li>
<li>politician：政治人物。</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * 人物库选择，可选值：
<li>Default：使用默认人物库；</li>
<li>UserDefine：使用用户自定义人物库。</li>
<li>All：同时使用默认人物库和用户自定义人物库。</li>
默认值：All，使用系统默认人物库及用户自定义人物库。
         * @type {string || null}
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * 智能人脸识别输出。
 * @class
 */
class AiRecognitionTaskFaceResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能人脸识别结果集。
         * @type {Array.<AiRecognitionTaskFaceResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskFaceResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * ParseNotification返回参数结构体
 * @class
 */
class ParseNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持事件类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkflowTask || null}
         */
        this.WorkflowTaskEvent = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

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
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.WorkflowTaskEvent) {
            let obj = new WorkflowTask();
            obj.deserialize(params.WorkflowTaskEvent)
            this.WorkflowTaskEvent = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 画面鉴黄任务控制参数。
 * @class
 */
class PornImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴黄任务开关，可选值：
<li>ON：开启画面鉴黄任务；</li>
<li>OFF：关闭画面鉴黄任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DeleteAIRecognitionTemplate请求参数结构体
 * @class
 */
class DeleteAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateWatermarkTemplate返回参数结构体
 * @class
 */
class CreateWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 水印图片地址，仅当 Type 为 image，该字段有效。
         * @type {string || null}
         */
        this.ImageUrl = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAnimatedGraphicsTemplate返回参数结构体
 * @class
 */
class ModifyAnimatedGraphicsTemplateResponse extends  AbstractModel {
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
 * ResetWorkflow请求参数结构体
 * @class
 */
class ResetWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID。
         * @type {number || null}
         */
        this.WorkflowId = null;

        /**
         * 工作流名称，最多128字符。同一个用户该名称唯一。
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * 视频处理的文件输出配置。不填则继承 Trigger 中的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致，即`{inputDir}`。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 视频处理类型任务参数。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         * @type {number || null}
         */
        this.TaskPriority = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

    }
}

/**
 * 智能封面结果类型
 * @class
 */
class AiAnalysisTaskCoverResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 智能封面任务输入。
         * @type {AiAnalysisTaskCoverInput || null}
         */
        this.Input = null;

        /**
         * 智能封面任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskCoverOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskCoverInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskCoverOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Ocr 文字涉政信息
 * @class
 */
class AiReviewPoliticalOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ocr 文字涉政、敏感评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉政、敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉政、敏感嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 语音关键词识别输出。
 * @class
 */
class AiRecognitionTaskAsrWordsResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音关键词识别结果集。
         * @type {Array.<AiRecognitionTaskAsrWordsResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskAsrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * 文本全文识别输入。
 * @class
 */
class AiRecognitionTaskOcrFullTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本全文识别模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 直播 AI Ocr 单词识别结果
 * @class
 */
class LiveStreamOcrWordsRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本关键词。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoords = 'AreaCoords' in params ? params.AreaCoords : null;

    }
}

/**
 * 直播流处理错误信息
 * @class
 */
class LiveStreamProcessErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码：
<li>0表示没有错误；</li>
<li>非0表示错误，请参考 Message 错误信息。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * EnableWorkflow请求参数结构体
 * @class
 */
class EnableWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID。
         * @type {number || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * 转码任务结果类型
 * @class
 */
class MediaProcessTaskTranscodeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 转码任务的输入。
         * @type {TranscodeTaskInput || null}
         */
        this.Input = null;

        /**
         * 转码任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaTranscodeItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new TranscodeTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaTranscodeItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimePicInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该张截图对应视频文件中的时间偏移，单位为<font color=red>毫秒</font>。
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * 该张截图的路径。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 截图如果被打上了水印，被打水印的模板 ID 列表。
         * @type {Array.<number> || null}
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * AI 视频智能分析输入参数类型
 * @class
 */
class AiAnalysisTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class DeleteAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeAnimatedGraphicsTemplates返回参数结构体
 * @class
 */
class DescribeAnimatedGraphicsTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 转动图模板详情列表。
         * @type {Array.<AnimatedGraphicsTemplate> || null}
         */
        this.AnimatedGraphicsTemplateSet = null;

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

        if (params.AnimatedGraphicsTemplateSet) {
            this.AnimatedGraphicsTemplateSet = new Array();
            for (let z in params.AnimatedGraphicsTemplateSet) {
                let obj = new AnimatedGraphicsTemplate();
                obj.deserialize(params.AnimatedGraphicsTemplateSet[z]);
                this.AnimatedGraphicsTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能按帧标签结果信息
 * @class
 */
class MediaAiAnalysisFrameTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按帧标签名称。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 按帧标签的可信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * DeleteContentReviewTemplate返回参数结构体
 * @class
 */
class DeleteContentReviewTemplateResponse extends  AbstractModel {
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
 * 鉴恐任务控制参数。
 * @class
 */
class TerrorismConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴恐任务控制参数。
         * @type {TerrorismImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

    }
}

/**
 * 内容审核涉政嫌疑片段
 * @class
 */
class MediaContentReviewPoliticalSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉政分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴政结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 涉政人物、违规图标名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 嫌疑片段鉴政结果标签。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * CreateAIAnalysisTemplate返回参数结构体
 * @class
 */
class CreateAIAnalysisTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对视频做采样截图任务结果类型
 * @class
 */
class MediaProcessTaskSampleSnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 对视频做采样截图任务输入。
         * @type {SampleSnapshotTaskInput || null}
         */
        this.Input = null;

        /**
         * 对视频做采样截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaSampleSnapshotItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SampleSnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSampleSnapshotItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 文本全文识别输出。
 * @class
 */
class AiRecognitionTaskOcrFullTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本全文识别结果集。
         * @type {Array.<AiRecognitionTaskOcrFullTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 图片水印模板
 * @class
 */
class ImageWatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片地址。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；</li>
0px：表示 Height 按照 Width 对视频宽度的比例缩放。
         * @type {string || null}
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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 图片水印模板输入参数
 * @class
 */
class ImageWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：10%。
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         * @type {string || null}
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
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 语音关键词识别控制参数。
 * @class
 */
class AsrWordsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音关键词识别任务开关，可选值：
<li>ON：开启语音关键词识别任务；</li>
<li>OFF：关闭语音关键词识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 绑定到 COS 的输入规则。
 * @class
 */
class CosFileUploadTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流绑定的 COS Bucket 名，如 TopRankVideo-125xxx88。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 工作流绑定的 COS Bucket 所属园区，如 ap-chongiqng。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 工作流绑定的输入路径目录，如`/movie/201907/`，不填代表根目录`/`。
         * @type {string || null}
         */
        this.Dir = null;

        /**
         * 工作流允许触发的文件格式列表，如 ["mp4", "flv", "mov"]。不填代表所有格式的文件都可以触发工作流。
         * @type {Array.<string> || null}
         */
        this.Formats = null;

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
        this.Dir = 'Dir' in params ? params.Dir : null;
        this.Formats = 'Formats' in params ? params.Formats : null;

    }
}

/**
 * 文本关键词识别输出。
 * @class
 */
class AiRecognitionTaskOcrWordsResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本关键词识别结果集。
         * @type {Array.<AiRecognitionTaskOcrWordsResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskOcrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * AI 样本管理，人脸信息。
 * @class
 */
class AiSampleFaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸图片 ID。
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 人脸图片地址。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 直播 AI Asr 单词识别结果
 * @class
 */
class LiveStreamAsrWordsRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音关键词。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Asr 文字涉政信息
 * @class
 */
class AiReviewPoliticalAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asr 文字涉政、敏感评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉政、敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉政、敏感嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 鉴恐任务控制参数
 * @class
 */
class TerrorismConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴恐任务控制参数。
         * @type {TerrorismImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

    }
}

/**
 * 极速高清参数配置。
 * @class
 */
class TEHDConfigForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100。</li>
不填代表不修改。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频码率上限，不填代表不修改。
         * @type {number || null}
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * 转码模板详情
 * @class
 */
class TranscodeTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 转码模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数，需联系商务架构师开通后才能使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

        /**
         * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式板。</li>
         * @type {string || null}
         */
        this.ContainerType = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * AI 样本管理，人物信息。
 * @class
 */
class AiSamplePerson extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物 ID。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人物名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人物描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 人脸信息。
         * @type {Array.<AiSampleFaceInfo> || null}
         */
        this.FaceInfoSet = null;

        /**
         * 人物标签。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 应用场景。
         * @type {Array.<string> || null}
         */
        this.UsageSet = null;

        /**
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new AiSampleFaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate返回参数结构体
 * @class
 */
class CreateAnimatedGraphicsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 点播文件音频流信息
 * @class
 */
class MediaAudioStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的码率，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，单位：hz。
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * 音频流的编码格式，例如 aac。
         * @type {string || null}
         */
        this.Codec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

    }
}

/**
 * 智能分类任务结果类型
 * @class
 */
class AiAnalysisTaskClassificationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 智能分类任务输入。
         * @type {AiAnalysisTaskClassificationInput || null}
         */
        this.Input = null;

        /**
         * 智能分类任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskClassificationOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskClassificationInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskClassificationOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 内容审核 Asr 文字鉴政、敏感任务输入参数类型
 * @class
 */
class AiReviewPoliticalAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴政模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 语音全文识别任务控制参数
 * @class
 */
class AsrFullTextConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
         * @type {string || null}
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * 雪碧图信息
 * @class
 */
class MediaImageSpriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 雪碧图小图的高度。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 雪碧图小图的宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 每一张雪碧图大图里小图的数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 每一张雪碧图大图的路径。
         * @type {Array.<string> || null}
         */
        this.ImagePathSet = null;

        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件路径。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在在雪碧大图里的坐标位置，一般被播放器用于实现预览。
         * @type {string || null}
         */
        this.WebVttPath = null;

        /**
         * 雪碧图文件的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImagePathSet = 'ImagePathSet' in params ? params.ImagePathSet : null;
        this.WebVttPath = 'WebVttPath' in params ? params.WebVttPath : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * DescribeWorkflows返回参数结构体
 * @class
 */
class DescribeWorkflowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 工作流信息数组。
         * @type {Array.<WorkflowInfo> || null}
         */
        this.WorkflowInfoSet = null;

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

        if (params.WorkflowInfoSet) {
            this.WorkflowInfoSet = new Array();
            for (let z in params.WorkflowInfoSet) {
                let obj = new WorkflowInfo();
                obj.deserialize(params.WorkflowInfoSet[z]);
                this.WorkflowInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePersonSamples请求参数结构体
 * @class
 */
class DescribePersonSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取的人物类型，可选值：
<li>UserDefine：用户自定义人物库；</li>
<li>Default：系统默认人物库。</li>

默认值：UserDefine，拉取用户自定义人物库人物。
说明：如果是拉取系统默认人物库，只能使用人物名字或者人物 ID + 人物名字的方式进行拉取，且人脸图片只返回一张。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 人物 ID，数组长度限制：100。
         * @type {Array.<string> || null}
         */
        this.PersonIds = null;

        /**
         * 人物名称，数组长度限制：20。
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 人物标签，数组长度限制：20。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：100，最大值：100。
         * @type {number || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.PersonIds = 'PersonIds' in params ? params.PersonIds : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 语音关键词识别控制参数。
 * @class
 */
class AsrWordsConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音关键词识别任务开关，可选值：
<li>ON：开启语音关键词识别任务；</li>
<li>OFF：关闭语音关键词识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 人脸识别结果
 * @class
 */
class AiRecognitionTaskFaceResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物唯一标识 ID。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li>
<li>UserDefine：用户自定义人物库。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 人物名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 人物出现的片段结果集。
         * @type {Array.<AiRecognitionTaskFaceSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskFaceSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 语音鉴政任务控制参数
 * @class
 */
class PoliticalAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音鉴政任务开关，可选值：
<li>ON：开启语音鉴政任务；</li>
<li>OFF：关闭语音鉴政任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 智能分类任务输入类型
 * @class
 */
class AiAnalysisTaskCoverInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能封面模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateAIRecognitionTemplate请求参数结构体
 * @class
 */
class CreateAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容识别模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频内容识别模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 人脸识别控制参数。
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
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
         * 视频处理任务的任务 ID。
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
 * 智能分类结果
 * @class
 */
class MediaAiAnalysisClassificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能分类的类别名称。
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * 智能分类的可信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 智能按帧标签结果类型
 * @class
 */
class AiAnalysisTaskFrameTagResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 智能按帧标签任务输入。
         * @type {AiAnalysisTaskFrameTagInput || null}
         */
        this.Input = null;

        /**
         * 智能按帧标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskFrameTagOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskFrameTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskFrameTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 鉴黄结果信息
 * @class
 */
class AiReviewPornTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频鉴黄评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉黄嫌疑的视频片段列表。
         * @type {Array.<MediaContentReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateWorkflow返回参数结构体
 * @class
 */
class CreateWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作流 ID。
         * @type {number || null}
         */
        this.WorkflowId = null;

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
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直播流 AI 审核结果
 * @class
 */
class LiveStreamAiReviewResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核结果列表。
         * @type {Array.<LiveStreamAiReviewResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new LiveStreamAiReviewResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * 语音全文识别结果。
 * @class
 */
class AiRecognitionTaskAsrFullTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 语音全文识别任务输入信息。
         * @type {AiRecognitionTaskAsrFullTextResultInput || null}
         */
        this.Input = null;

        /**
         * 语音全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskAsrFullTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 文本鉴政任务控制参数。
 * @class
 */
class PoliticalOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本鉴政任务开关，可选值：
<li>ON：开启文本鉴政任务；</li>
<li>OFF：关闭文本鉴政任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyAIRecognitionTemplate返回参数结构体
 * @class
 */
class ModifyAIRecognitionTemplateResponse extends  AbstractModel {
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
 * 语音关键词识别输入。
 * @class
 */
class AiRecognitionTaskAsrWordsResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音关键词识别模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateImageSpriteTemplate返回参数结构体
 * @class
 */
class CreateImageSpriteTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class ModifyAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 转动图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 动图格式，取值为 gif 和 webp。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 帧率，取值范围：[1, 30]，单位：Hz。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 图片质量，取值范围：[1, 100]，默认值为 75。
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 极速高清参数配置。
 * @class
 */
class TEHDConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100。</li>
不填代表不启用极速高清。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频码率上限，当 Type 指定了极速高清类型时有效。
不填或填0表示不设视频码率上限。
         * @type {number || null}
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * 鉴政任务控制参数
 * @class
 */
class PoliticalConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴政控制参数。
         * @type {PoliticalImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴政控制参数。
         * @type {PoliticalAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴政控制参数。
         * @type {PoliticalOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 文本识别片段。
 * @class
 */
class AiRecognitionTaskOcrWordsSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * 视频处理任务中的水印参数类型
 * @class
 */
class WatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。
         * @type {string || null}
         */
        this.TextContent = null;

        /**
         * SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。
         * @type {string || null}
         */
        this.SvgContent = null;

        /**
         * 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。
<li>不填或填0，表示水印从画面开始就出现；</li>
<li>当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；</li>
<li>当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 水印的结束时间偏移，单位：秒。
<li>不填或填0，表示水印持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TextContent = 'TextContent' in params ? params.TextContent : null;
        this.SvgContent = 'SvgContent' in params ? params.SvgContent : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 直播 AI 内容审核图片鉴政结果
 * @class
 */
class LiveStreamAiReviewImagePoliticalResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉政分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴政结果标签，取值范围：
<li>politician：政治人物。</li>
<li>violation_photo：违规图标。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 涉政人物、违规图标名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * DeleteWordSamples返回参数结构体
 * @class
 */
class DeleteWordSamplesResponse extends  AbstractModel {
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
 * 用户自定义语音审核任务控制参数
 * @class
 */
class UserDefineAsrTextReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定语音审核任务开关，可选值：
<li>ON：开启自定义语音审核任务；</li>
<li>OFF：关闭自定义语音审核任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyPersonSample请求参数结构体
 * @class
 */
class ModifyPersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物 ID。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 名称，长度限制：128 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述，长度限制：1024 个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 人物应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于内容审核，等价于 Review.Face。
3. All：用于内容识别、内容审核，等价于 1+2。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 人脸操作信息。
         * @type {AiSampleFaceOperation || null}
         */
        this.FaceOperationInfo = null;

        /**
         * 标签操作信息。
         * @type {AiSampleTagOperation || null}
         */
        this.TagOperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.FaceOperationInfo) {
            let obj = new AiSampleFaceOperation();
            obj.deserialize(params.FaceOperationInfo)
            this.FaceOperationInfo = obj;
        }

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }

    }
}

/**
 * ProcessMedia请求参数结构体
 * @class
 */
class ProcessMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理的文件输入信息。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 视频处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与 InputInfo 中文件所在的目录一致。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 视频处理类型任务参数。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务流的优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * EnableWorkflow返回参数结构体
 * @class
 */
class EnableWorkflowResponse extends  AbstractModel {
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
 * DescribeSnapshotByTimeOffsetTemplates请求参数结构体
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * AI 样本管理，关键词输入信息。
 * @class
 */
class AiSampleWordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词，长度限制：20 个字符。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 关键词标签
<li>数组长度限制：20 个标签；</li>
<li>单个标签长度限制：128 个字符。</li>
         * @type {Array.<string> || null}
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
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * CreateWatermarkTemplate请求参数结构体
 * @class
 */
class CreateWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印类型，可选值：
<li>image：图片水印；</li>
<li>text：文字水印；</li>
<li>svg：SVG 水印。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 水印模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 原点位置，可选值：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
默认值：TopLeft。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 图片水印模板，仅当 Type 为 image，该字段必填且有效。
         * @type {ImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，仅当 Type 为 text，该字段必填且有效。
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG 水印模板，仅当 Type 为 svg，该字段必填且有效。
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }

    }
}

/**
 * 用户自定义审核任务控制参数。
 * @class
 */
class UserDefineConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义人物审核控制参数。
         * @type {UserDefineFaceReviewTemplateInfoForUpdate || null}
         */
        this.FaceReviewInfo = null;

        /**
         * 用户自定义语音审核控制参数。
         * @type {UserDefineAsrTextReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 用户自定义文本审核控制参数。
         * @type {UserDefineOcrTextReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfoForUpdate();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 水印模板详情
 * @class
 */
class WatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 水印类型，取值：
<li>image：图片水印；</li>
<li>text：文字水印。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 水印模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 水印图片原点距离视频图像原点的水平位置。
<li>当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 水印图片原点距离视频图像原点的垂直位置。
<li>当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 图片水印模板，仅当 Type 为 image，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageWatermarkTemplate || null}
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，仅当 Type 为 text，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG 水印模板，当 Type 为 svg，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 原点位置，可选值：
<li>topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下。；</li>
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkTemplate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;

    }
}

/**
 * 直播识别 Ocr 全文识别
 * @class
 */
class LiveStreamOcrFullTextRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音文本。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * DeleteWatermarkTemplate返回参数结构体
 * @class
 */
class DeleteWatermarkTemplateResponse extends  AbstractModel {
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
 * DeleteWatermarkTemplate请求参数结构体
 * @class
 */
class DeleteWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 语音全文识别的输入。
 * @class
 */
class AiRecognitionTaskAsrFullTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音全文识别模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * ModifyTranscodeTemplate返回参数结构体
 * @class
 */
class ModifyTranscodeTemplateResponse extends  AbstractModel {
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
 * 点播媒体文件元信息
 * @class
 */
class MediaMetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和，单位：bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频时长，单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频拍摄时的选择角度，单位：度。
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 视频流信息。
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

        /**
         * 音频流信息。
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * 视频时长，单位：秒。
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * 音频时长，单位：秒。
         * @type {number || null}
         */
        this.AudioDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.AudioDuration = 'AudioDuration' in params ? params.AudioDuration : null;

    }
}

/**
 * ProcessMedia返回参数结构体
 * @class
 */
class ProcessMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文本关键词识别控制参数。
 * @class
 */
class OcrWordsConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本关键词识别任务开关，可选值：
<li>ON：开启文本关键词识别任务；</li>
<li>OFF：关闭文本关键词识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 视频流配置参数
 * @class
 */
class VideoTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 文字水印模板
 * @class
 */
class TextWatermarkTemplateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字体类型，目前可以支持两种：
<li>simkai.ttf：可以支持中文和英文；</li>
<li>arial.ttf：仅支持英文。</li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * 字体大小，格式：Npx，N 为数值。
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
默认值：1。
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * ParseNotification请求参数结构体
 * @class
 */
class ParseNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从 CMQ 获取到的事件通知内容。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 视频处理任务类型
 * @class
 */
class MediaProcessTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频转码任务列表。
         * @type {Array.<TranscodeTaskInput> || null}
         */
        this.TranscodeTaskSet = null;

        /**
         * 视频转动图任务列表。
         * @type {Array.<AnimatedGraphicTaskInput> || null}
         */
        this.AnimatedGraphicTaskSet = null;

        /**
         * 对视频按时间点截图任务列表。
         * @type {Array.<SnapshotByTimeOffsetTaskInput> || null}
         */
        this.SnapshotByTimeOffsetTaskSet = null;

        /**
         * 对视频采样截图任务列表。
         * @type {Array.<SampleSnapshotTaskInput> || null}
         */
        this.SampleSnapshotTaskSet = null;

        /**
         * 对视频截雪碧图任务列表。
         * @type {Array.<ImageSpriteTaskInput> || null}
         */
        this.ImageSpriteTaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeTaskSet) {
            this.TranscodeTaskSet = new Array();
            for (let z in params.TranscodeTaskSet) {
                let obj = new TranscodeTaskInput();
                obj.deserialize(params.TranscodeTaskSet[z]);
                this.TranscodeTaskSet.push(obj);
            }
        }

        if (params.AnimatedGraphicTaskSet) {
            this.AnimatedGraphicTaskSet = new Array();
            for (let z in params.AnimatedGraphicTaskSet) {
                let obj = new AnimatedGraphicTaskInput();
                obj.deserialize(params.AnimatedGraphicTaskSet[z]);
                this.AnimatedGraphicTaskSet.push(obj);
            }
        }

        if (params.SnapshotByTimeOffsetTaskSet) {
            this.SnapshotByTimeOffsetTaskSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTaskSet) {
                let obj = new SnapshotByTimeOffsetTaskInput();
                obj.deserialize(params.SnapshotByTimeOffsetTaskSet[z]);
                this.SnapshotByTimeOffsetTaskSet.push(obj);
            }
        }

        if (params.SampleSnapshotTaskSet) {
            this.SampleSnapshotTaskSet = new Array();
            for (let z in params.SampleSnapshotTaskSet) {
                let obj = new SampleSnapshotTaskInput();
                obj.deserialize(params.SampleSnapshotTaskSet[z]);
                this.SampleSnapshotTaskSet.push(obj);
            }
        }

        if (params.ImageSpriteTaskSet) {
            this.ImageSpriteTaskSet = new Array();
            for (let z in params.ImageSpriteTaskSet) {
                let obj = new ImageSpriteTaskInput();
                obj.deserialize(params.ImageSpriteTaskSet[z]);
                this.ImageSpriteTaskSet.push(obj);
            }
        }

    }
}

/**
 * 智能按帧标签任务控制参数
 * @class
 */
class FrameTagConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateContentReviewTemplate请求参数结构体
 * @class
 */
class CreateContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容审核模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 内容审核模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 鉴黄控制参数。
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * 鉴恐控制参数。
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * DescribeAIRecognitionTemplates请求参数结构体
 * @class
 */
class DescribeAIRecognitionTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识过滤条件，数组长度限制：10。
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：50。
         * @type {number || null}
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
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 视频处理 COS 输出对象信息。
 * @class
 */
class CosOutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理生成的文件输出的目标 Bucket 名，如 TopRankVideo-125xxx88。如果不填，表示继承上层。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 视频处理生成的文件输出的目标 Bucket 的园区，如 ap-chongqing。如果不填，表示继承上层。
         * @type {string || null}
         */
        this.Region = null;

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

    }
}

/**
 * 任务查询结果类型
 * @class
 */
class MediaProcessTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Transcode：转码</li>
<li>AnimatedGraphics：转动图</li>
<li>SnapshotByTimeOffset：时间点截图</li>
<li>SampleSnapshot：采样截图</li>
<li>ImageSprites：雪碧图</li>
<li>CoverBySnapshot：截图做封面</li>
<li>AdaptiveDynamicStreaming：自适应码流</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频转码任务的查询结果，当任务类型为 Transcode 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskTranscodeResult || null}
         */
        this.TranscodeTask = null;

        /**
         * 视频转动图任务的查询结果，当任务类型为 AnimatedGraphics 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskAnimatedGraphicResult || null}
         */
        this.AnimatedGraphicTask = null;

        /**
         * 对视频按时间点截图任务的查询结果，当任务类型为 SnapshotByTimeOffset 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskSnapshotByTimeOffsetResult || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * 对视频采样截图任务的查询结果，当任务类型为 SampleSnapshot 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SampleSnapshotTask = null;

        /**
         * 对视频截雪碧图任务的查询结果，当任务类型为 ImageSprite 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskImageSpriteResult || null}
         */
        this.ImageSpriteTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TranscodeTask) {
            let obj = new MediaProcessTaskTranscodeResult();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.AnimatedGraphicTask) {
            let obj = new MediaProcessTaskAnimatedGraphicResult();
            obj.deserialize(params.AnimatedGraphicTask)
            this.AnimatedGraphicTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new MediaProcessTaskSnapshotByTimeOffsetResult();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.SampleSnapshotTask) {
            let obj = new MediaProcessTaskSampleSnapshotResult();
            obj.deserialize(params.SampleSnapshotTask)
            this.SampleSnapshotTask = obj;
        }

        if (params.ImageSpriteTask) {
            let obj = new MediaProcessTaskImageSpriteResult();
            obj.deserialize(params.ImageSpriteTask)
            this.ImageSpriteTask = obj;
        }

    }
}

/**
 * 人脸识别结果。
 * @class
 */
class AiRecognitionTaskFaceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 人脸识别任务输入信息。
         * @type {AiRecognitionTaskFaceResultInput || null}
         */
        this.Input = null;

        /**
         * 人脸识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskFaceResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskFaceResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskFaceResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifyWatermarkTemplate返回参数结构体
 * @class
 */
class ModifyWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有效。
         * @type {string || null}
         */
        this.ImageUrl = null;

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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWordSamples返回参数结构体
 * @class
 */
class CreateWordSamplesResponse extends  AbstractModel {
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
 * 智能分类任务控制参数
 * @class
 */
class ClassificationConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能分类任务开关，可选值：
<li>ON：开启智能分类任务；</li>
<li>OFF：关闭智能分类任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 智能识别结果。
 * @class
 */
class AiRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别，</li>
<li>HeadTailRecognition：视频片头片尾识别，</li>
<li>ObjectRecognition：物体识别。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 人脸识别结果，当 Type 为 
 FaceRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskFaceResult || null}
         */
        this.FaceTask = null;

        /**
         * 语音关键词识别结果，当 Type 为
 AsrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskAsrWordsResult || null}
         */
        this.AsrWordsTask = null;

        /**
         * 语音全文识别结果，当 Type 为
 AsrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskAsrFullTextResult || null}
         */
        this.AsrFullTextTask = null;

        /**
         * 文本关键词识别结果，当 Type 为
 OcrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskOcrWordsResult || null}
         */
        this.OcrWordsTask = null;

        /**
         * 文本全文识别结果，当 Type 为
 OcrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskOcrFullTextResult || null}
         */
        this.OcrFullTextTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FaceTask) {
            let obj = new AiRecognitionTaskFaceResult();
            obj.deserialize(params.FaceTask)
            this.FaceTask = obj;
        }

        if (params.AsrWordsTask) {
            let obj = new AiRecognitionTaskAsrWordsResult();
            obj.deserialize(params.AsrWordsTask)
            this.AsrWordsTask = obj;
        }

        if (params.AsrFullTextTask) {
            let obj = new AiRecognitionTaskAsrFullTextResult();
            obj.deserialize(params.AsrFullTextTask)
            this.AsrFullTextTask = obj;
        }

        if (params.OcrWordsTask) {
            let obj = new AiRecognitionTaskOcrWordsResult();
            obj.deserialize(params.OcrWordsTask)
            this.OcrWordsTask = obj;
        }

        if (params.OcrFullTextTask) {
            let obj = new AiRecognitionTaskOcrFullTextResult();
            obj.deserialize(params.OcrFullTextTask)
            this.OcrFullTextTask = obj;
        }

    }
}

module.exports = {
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    ModifySampleSnapshotTemplateResponse: ModifySampleSnapshotTemplateResponse,
    LiveStreamAiReviewImagePornResult: LiveStreamAiReviewImagePornResult,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    TaskSimpleInfo: TaskSimpleInfo,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    LiveStreamAiRecognitionResultItem: LiveStreamAiRecognitionResultItem,
    AiSampleFaceOperation: AiSampleFaceOperation,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    WorkflowInfo: WorkflowInfo,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    ProcessLiveStreamResponse: ProcessLiveStreamResponse,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    DeleteWorkflowRequest: DeleteWorkflowRequest,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    DeleteWorkflowResponse: DeleteWorkflowResponse,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    DeleteAnimatedGraphicsTemplateResponse: DeleteAnimatedGraphicsTemplateResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    AiSampleTagOperation: AiSampleTagOperation,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    ResetWorkflowResponse: ResetWorkflowResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    WorkflowTrigger: WorkflowTrigger,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiAnalysisResult: AiAnalysisResult,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    LiveStreamAiReviewResultItem: LiveStreamAiReviewResultItem,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    MediaInputInfo: MediaInputInfo,
    LiveStreamTaskNotifyConfig: LiveStreamTaskNotifyConfig,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    CreateWorkflowRequest: CreateWorkflowRequest,
    ParseLiveStreamProcessNotificationRequest: ParseLiveStreamProcessNotificationRequest,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    DescribeTasksRequest: DescribeTasksRequest,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    AiSampleWord: AiSampleWord,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    DescribeWorkflowsRequest: DescribeWorkflowsRequest,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    LiveStreamAiReviewImageTerrorismResult: LiveStreamAiReviewImageTerrorismResult,
    ProcessLiveStreamRequest: ProcessLiveStreamRequest,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    LiveStreamAiRecognitionResultInfo: LiveStreamAiRecognitionResultInfo,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    WorkflowTask: WorkflowTask,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    VideoTemplateInfo: VideoTemplateInfo,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    SvgWatermarkInput: SvgWatermarkInput,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    LiveStreamAiReviewVoicePornResult: LiveStreamAiReviewVoicePornResult,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    TaskOutputStorage: TaskOutputStorage,
    AiContentReviewResult: AiContentReviewResult,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    ParseLiveStreamProcessNotificationResponse: ParseLiveStreamProcessNotificationResponse,
    LiveStreamAsrFullTextRecognitionResult: LiveStreamAsrFullTextRecognitionResult,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    DisableWorkflowRequest: DisableWorkflowRequest,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    AudioTemplateInfo: AudioTemplateInfo,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    CoverConfigureInfo: CoverConfigureInfo,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    TaskNotifyConfig: TaskNotifyConfig,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    DescribeAnimatedGraphicsTemplatesRequest: DescribeAnimatedGraphicsTemplatesRequest,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    NumberFormat: NumberFormat,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    MediaTranscodeItem: MediaTranscodeItem,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    LiveStreamProcessTask: LiveStreamProcessTask,
    PornConfigureInfo: PornConfigureInfo,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    LiveStreamFaceRecognitionResult: LiveStreamFaceRecognitionResult,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    DisableWorkflowResponse: DisableWorkflowResponse,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    CosInputInfo: CosInputInfo,
    TagConfigureInfo: TagConfigureInfo,
    TranscodeTaskInput: TranscodeTaskInput,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    ParseNotificationResponse: ParseNotificationResponse,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    ResetWorkflowRequest: ResetWorkflowRequest,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    LiveStreamOcrWordsRecognitionResult: LiveStreamOcrWordsRecognitionResult,
    LiveStreamProcessErrorInfo: LiveStreamProcessErrorInfo,
    EnableWorkflowRequest: EnableWorkflowRequest,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    ImageWatermarkInput: ImageWatermarkInput,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    CosFileUploadTrigger: CosFileUploadTrigger,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    AiSampleFaceInfo: AiSampleFaceInfo,
    LiveStreamAsrWordsRecognitionResult: LiveStreamAsrWordsRecognitionResult,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    TranscodeTemplate: TranscodeTemplate,
    AiSamplePerson: AiSamplePerson,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    MediaAudioStreamItem: MediaAudioStreamItem,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    MediaImageSpriteItem: MediaImageSpriteItem,
    DescribeWorkflowsResponse: DescribeWorkflowsResponse,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    CreateWorkflowResponse: CreateWorkflowResponse,
    LiveStreamAiReviewResultInfo: LiveStreamAiReviewResultInfo,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    CreateImageSpriteTemplateResponse: CreateImageSpriteTemplateResponse,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    TEHDConfig: TEHDConfig,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    WatermarkInput: WatermarkInput,
    LiveStreamAiReviewImagePoliticalResult: LiveStreamAiReviewImagePoliticalResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    ProcessMediaRequest: ProcessMediaRequest,
    EnableWorkflowResponse: EnableWorkflowResponse,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    AiSampleWordInfo: AiSampleWordInfo,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    LiveStreamOcrFullTextRecognitionResult: LiveStreamOcrFullTextRecognitionResult,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    ProcessMediaResponse: ProcessMediaResponse,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    ParseNotificationRequest: ParseNotificationRequest,
    MediaProcessTaskInput: MediaProcessTaskInput,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    CosOutputStorage: CosOutputStorage,
    MediaProcessTaskResult: MediaProcessTaskResult,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    AiRecognitionResult: AiRecognitionResult,

}
