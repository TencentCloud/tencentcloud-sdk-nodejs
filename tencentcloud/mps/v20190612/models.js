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
 * 查询输入的RTP配置信息。
 * @class
 */
class DescribeInputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否FEC。
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * 空闲超时时间。
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

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
 * DeleteStreamLinkFlow请求参数结构体
 * @class
 */
class DeleteStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流Id。
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * 插帧帧率配置
 * @class
 */
class FrameRateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 帧率，取值范围：[0, 100]，单位：Hz。
默认值 0。
注意：对于转码，该参数会覆盖 VideoTemplate 内部的 Fps。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * 自定义转码的规格参数。用于覆盖模板中对应参数值。
 * @class
 */
class OverrideTranscodeParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         * @type {string || null}
         */
        this.Container = null;

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
         * 极速高清转码参数。
         * @type {TEHDConfigForUpdate || null}
         */
        this.TEHDConfig = null;

        /**
         * 字幕流配置参数。
         * @type {SubtitleTemplate || null}
         */
        this.SubtitleTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
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

        if (params.SubtitleTemplate) {
            let obj = new SubtitleTemplate();
            obj.deserialize(params.SubtitleTemplate)
            this.SubtitleTemplate = obj;
        }

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
         * 媒体处理的文件输出存储位置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 媒体处理类型任务参数。
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
         * 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 工作流创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 工作流最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
         * 极速高清转码参数。
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

        /**
         * 音视频增强配置。
         * @type {EnhanceConfig || null}
         */
        this.EnhanceConfig = null;

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

        if (params.EnhanceConfig) {
            let obj = new EnhanceConfig();
            obj.deserialize(params.EnhanceConfig)
            this.EnhanceConfig = obj;
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
 * 创建媒体传输流的输出的SRT配置。
 * @class
 */
class CreateOutputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的目标地址，当Mode为CALLER时必填，且只能填1组。
         * @type {Array.<CreateOutputSRTSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * 转推SRT的流Id，可选大小写字母、数字和特殊字符（.#!:&,=_-），长度为0~512。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 转推SRT的总延迟，默认0，单位ms，范围为[0, 3000]。
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * 转推SRT的接收延迟，默认120，单位ms，范围为[0, 3000]。
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * 转推SRT的对端延迟，默认0，单位ms，范围为[0, 3000]。
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * 转推SRT的对端空闲超时时间，默认5000，单位ms，范围为[1000, 10000]。
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * 转推SRT的加密密钥，默认为空，表示不加密。只可填ascii码值，长度为[10, 79]。
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * 转推SRT的密钥长度，默认为0，可选[0|16|24|32]。
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * SRT模式，可选[LISTENER|CALLER]，默认为CALLER。
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputSRTSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * ModifyStreamLinkOutputInfo返回参数结构体
 * @class
 */
class ModifyStreamLinkOutputInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改后的Output配置。
         * @type {DescribeOutput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeOutput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 内容审核 Asr 文字鉴任违禁务结果类型
 * @class
 */
class AiReviewTaskProhibitedAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字鉴违禁任务输入。
         * @type {AiReviewProhibitedAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewProhibitedAsrTaskOutput || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 转自适应码流模板详情
 * @class
 */
class AdaptiveDynamicStreamingTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转自适应码流模板唯一标识。
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
         * 转自适应码流模板名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 转自适应码流模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 转自适应码流输入流参数信息，最多输入10路流。
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * 内容审核 Ocr 文字鉴任违禁务结果类型
 * @class
 */
class AiReviewTaskProhibitedOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴违禁任务输入。
         * @type {AiReviewProhibitedOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewProhibitedOcrTaskOutput || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
 * Ocr 文字涉违禁信息
 * @class
 */
class AiReviewProhibitedOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ocr 文字涉违禁评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉违禁嫌疑的视频片段列表。
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
 * ManageTask返回参数结构体
 * @class
 */
class ManageTaskResponse extends  AbstractModel {
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
 * 传输流的媒体数据。
 * @class
 */
class FlowMediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳，单位是秒。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 总带宽。
         * @type {number || null}
         */
        this.Network = null;

        /**
         * 传输流的视频数据。
         * @type {Array.<FlowMediaVideo> || null}
         */
        this.Video = null;

        /**
         * 传输流的音频数据。
         * @type {Array.<FlowMediaAudio> || null}
         */
        this.Audio = null;

        /**
         * 标志同一次推流。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 客户端IP。
         * @type {string || null}
         */
        this.ClientIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Network = 'Network' in params ? params.Network : null;

        if (params.Video) {
            this.Video = new Array();
            for (let z in params.Video) {
                let obj = new FlowMediaVideo();
                obj.deserialize(params.Video[z]);
                this.Video.push(obj);
            }
        }

        if (params.Audio) {
            this.Audio = new Array();
            for (let z in params.Audio) {
                let obj = new FlowMediaAudio();
                obj.deserialize(params.Audio[z]);
                this.Audio.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;

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
 * 查询输入的RTMP配置信息。
 * @class
 */
class DescribeRTMPPullSourceAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTMP源站的TcUrl地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TcUrl = null;

        /**
         * RTMP源站的StreamKey。
RTMP源站地址拼接规则为：$TcUrl/$StreamKey。
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TcUrl = 'TcUrl' in params ? params.TcUrl : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * 查询输出的RTMP拉流配置信息。
 * @class
 */
class DescribeOutputRTMPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉流地址列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeOutputRTMPPullServerUrl> || null}
         */
        this.ServerUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServerUrls) {
            this.ServerUrls = new Array();
            for (let z in params.ServerUrls) {
                let obj = new DescribeOutputRTMPPullServerUrl();
                obj.deserialize(params.ServerUrls[z]);
                this.ServerUrls.push(obj);
            }
        }

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
 * 修改Output配置。
 * @class
 */
class ModifyOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的Output的Id。
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * 输出的名称。
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * 输出的描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 输出的转推协议，支持SRT|RTP|RTMP。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 转推SRT的配置。
         * @type {CreateOutputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * 转推RTP的配置。
         * @type {CreateOutputInfoRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * 转推RTMP的配置。
         * @type {CreateOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * IP白名单列表，格式为CIDR，如0.0.0.0/0。
当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.SRTSettings) {
            let obj = new CreateOutputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateOutputInfoRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new CreateOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

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
         * 图片格式，取值为 jpg、png、webp。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 内容审核 Ocr 文字敏感任务输入参数类型
 * @class
 */
class AiReviewPoliticalOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
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
 * 音视频增强配置
 * @class
 */
class EnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoEnhanceConfig || null}
         */
        this.VideoEnhance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VideoEnhance) {
            let obj = new VideoEnhanceConfig();
            obj.deserialize(params.VideoEnhance)
            this.VideoEnhance = obj;
        }

    }
}

/**
 * 媒体处理的输入对象信息。
 * @class
 */
class MediaInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入来源对象的类型，支持 COS、URL 两种。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 对象信息。
         * @type {CosInputInfo || null}
         */
        this.CosInputInfo = null;

        /**
         * 当 Type 为 URL 时有效，则该项为必填，表示媒体处理 URL 对象信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UrlInputInfo || null}
         */
        this.UrlInputInfo = null;

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

        if (params.UrlInputInfo) {
            let obj = new UrlInputInfo();
            obj.deserialize(params.UrlInputInfo)
            this.UrlInputInfo = obj;
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
         * 媒体处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 媒体处理类型任务参数。
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
 * 自定义水印规格参数。
 * @class
 */
class RawWatermarkParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印类型，可选值：
<li>image：图片水印。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 原点位置，目前仅支持：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角。</li>
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
         * 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。
         * @type {RawImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new RawImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

    }
}

/**
 * 内容审核 Ocr 文字敏感任务结果类型
 * @class
 */
class AiReviewTaskPoliticalOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS，FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字敏感任务输入。
         * @type {AiReviewPoliticalOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字敏感任务输出。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * ManageTask请求参数结构体
 * @class
 */
class ManageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型，取值范围：
<ul>
<li>Abort：终止任务。使用说明：
<ul><li>若 [任务类型](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) 为直播流处理任务（LiveStreamProcessTask），支持终止 [任务状态](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) 为等待中（WAITING）或处理中（PROCESSING）的任务；</li>
<li>否则，对于其他 [任务类型](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)，只支持终止 [任务状态](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) 为等待中（WAITING）的任务。</li></ul>
</li></ul>
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 视频处理的任务 ID。
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
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 图片格式，取值为 jpg、png、webp。默认为 jpg。
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

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
         * 该张截图对应视频文件中的时间偏移，单位为秒。
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
 * 创建的输入HLS拉流的配置信息。
 * @class
 */
class CreateInputHLSPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS源站的源站地址，有且只能有一个。
         * @type {Array.<HLSPullSourceAddress> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new HLSPullSourceAddress();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * 涉敏控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 涉敏控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProhibitedConfigureInfo || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 模板类型，取值范围：
* Preset：系统预置模板；
* Custom：用户自定义模板。
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyStreamLinkFlow返回参数结构体
 * @class
 */
class ModifyStreamLinkFlowResponse extends  AbstractModel {
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
 * 视频增强配置
 * @class
 */
class VideoEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插帧帧率配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FrameRateConfig || null}
         */
        this.FrameRate = null;

        /**
         * 超分配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SuperResolutionConfig || null}
         */
        this.SuperResolution = null;

        /**
         * HDR配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HdrConfig || null}
         */
        this.Hdr = null;

        /**
         * 视频降噪配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoDenoiseConfig || null}
         */
        this.Denoise = null;

        /**
         * 综合增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageQualityEnhanceConfig || null}
         */
        this.ImageQualityEnhance = null;

        /**
         * 色彩增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ColorEnhanceConfig || null}
         */
        this.ColorEnhance = null;

        /**
         * 细节增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SharpEnhanceConfig || null}
         */
        this.SharpEnhance = null;

        /**
         * 人脸增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceEnhanceConfig || null}
         */
        this.FaceEnhance = null;

        /**
         * 低光照增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LowLightEnhanceConfig || null}
         */
        this.LowLightEnhance = null;

        /**
         * 去划痕配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScratchRepairConfig || null}
         */
        this.ScratchRepair = null;

        /**
         * 去伪影（毛刺）配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ArtifactRepairConfig || null}
         */
        this.ArtifactRepair = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FrameRate) {
            let obj = new FrameRateConfig();
            obj.deserialize(params.FrameRate)
            this.FrameRate = obj;
        }

        if (params.SuperResolution) {
            let obj = new SuperResolutionConfig();
            obj.deserialize(params.SuperResolution)
            this.SuperResolution = obj;
        }

        if (params.Hdr) {
            let obj = new HdrConfig();
            obj.deserialize(params.Hdr)
            this.Hdr = obj;
        }

        if (params.Denoise) {
            let obj = new VideoDenoiseConfig();
            obj.deserialize(params.Denoise)
            this.Denoise = obj;
        }

        if (params.ImageQualityEnhance) {
            let obj = new ImageQualityEnhanceConfig();
            obj.deserialize(params.ImageQualityEnhance)
            this.ImageQualityEnhance = obj;
        }

        if (params.ColorEnhance) {
            let obj = new ColorEnhanceConfig();
            obj.deserialize(params.ColorEnhance)
            this.ColorEnhance = obj;
        }

        if (params.SharpEnhance) {
            let obj = new SharpEnhanceConfig();
            obj.deserialize(params.SharpEnhance)
            this.SharpEnhance = obj;
        }

        if (params.FaceEnhance) {
            let obj = new FaceEnhanceConfig();
            obj.deserialize(params.FaceEnhance)
            this.FaceEnhance = obj;
        }

        if (params.LowLightEnhance) {
            let obj = new LowLightEnhanceConfig();
            obj.deserialize(params.LowLightEnhance)
            this.LowLightEnhance = obj;
        }

        if (params.ScratchRepair) {
            let obj = new ScratchRepairConfig();
            obj.deserialize(params.ScratchRepair)
            this.ScratchRepair = obj;
        }

        if (params.ArtifactRepair) {
            let obj = new ArtifactRepairConfig();
            obj.deserialize(params.ArtifactRepair)
            this.ArtifactRepair = obj;
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
 * StartStreamLinkFlow返回参数结构体
 * @class
 */
class StartStreamLinkFlowResponse extends  AbstractModel {
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
 * 内容审核敏感任务输入参数类型
 * @class
 */
class AiReviewPoliticalTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
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
 * 创建媒体传输流的输出的RTP的目标地址。
 * @class
 */
class CreateOutputRTPSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的目标IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 转推的目标端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

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
当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
         * @type {number || null}
         */
        this.AudioChannel = null;

        /**
         * 指定输出要保留的音频轨道。默认是全部保留源的。
         * @type {Array.<number> || null}
         */
        this.StreamSelects = null;

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
        this.StreamSelects = 'StreamSelects' in params ? params.StreamSelects : null;

    }
}

/**
 * 超分配置
 * @class
 */
class SuperResolutionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>lq：针对低清晰度有较多噪声视频的超分；</li>
<li>hq：针对高清晰度视频超分。</li>
默认值：lq。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 超分倍数，可选值：
<li>2：目前只支持 2 倍超分。</li>
默认值：2。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;

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
         * 素材 ID。
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
 * DescribeStreamLinkFlows返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流的配置信息列表。
         * @type {Array.<DescribeFlow> || null}
         */
        this.Infos = null;

        /**
         * 当前页数。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总数量。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DescribeFlow();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 内容审核结果
 * @class
 */
class AiContentReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Porn：图片鉴黄</li>
<li>Terrorism：图片敏感</li>
<li>Political：图片敏感</li>
<li>Porn.Asr：Asr 文字鉴黄</li>
<li>Porn.Ocr：Ocr 文字鉴黄</li>
<li>Political.Asr：Asr 文字敏感</li>
<li>Political.Ocr：Ocr 文字敏感</li>
<li>Terrorism.Ocr：Ocr 文字敏感</li>
<li>Prohibited.Asr：Asr 文字鉴违禁</li>
<li>Prohibited.Ocr：Ocr 文字鉴违禁</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 采样频率，即对视频每秒截取进行审核的帧数。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 审核的视频时长，单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频内容审核智能画面鉴黄任务的查询结果，当任务类型为 Porn 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPornResult || null}
         */
        this.PornTask = null;

        /**
         * 视频内容审核智能画面敏感任务的查询结果，当任务类型为 Terrorism 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskTerrorismResult || null}
         */
        this.TerrorismTask = null;

        /**
         * 视频内容审核智能画面敏感任务的查询结果，当任务类型为 Political 时有效。
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
         * 视频内容审核 Asr 文字敏感任务的查询结果，当任务类型为 Political.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPoliticalAsrResult || null}
         */
        this.PoliticalAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字敏感任务的查询结果，当任务类型为 Political.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskPoliticalOcrResult || null}
         */
        this.PoliticalOcrTask = null;

        /**
         * 视频内容审核 Ocr 文字敏感任务的查询结果，当任务类型为 Terrorism.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskTerrorismOcrResult || null}
         */
        this.TerrorismOcrTask = null;

        /**
         * 视频内容审核 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskProhibitedAsrResult || null}
         */
        this.ProhibitedAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTaskProhibitedOcrResult || null}
         */
        this.ProhibitedOcrTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

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

        if (params.TerrorismOcrTask) {
            let obj = new AiReviewTaskTerrorismOcrResult();
            obj.deserialize(params.TerrorismOcrTask)
            this.TerrorismOcrTask = obj;
        }

        if (params.ProhibitedAsrTask) {
            let obj = new AiReviewTaskProhibitedAsrResult();
            obj.deserialize(params.ProhibitedAsrTask)
            this.ProhibitedAsrTask = obj;
        }

        if (params.ProhibitedOcrTask) {
            let obj = new AiReviewTaskProhibitedOcrResult();
            obj.deserialize(params.ProhibitedOcrTask)
            this.ProhibitedOcrTask = obj;
        }

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
<li>libmp3lame：更适合 flv。</li>
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
当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
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
 * ExecuteFunction返回参数结构体
 * @class
 */
class ExecuteFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理结果打包后的字符串，具体与后台一同协调。
         * @type {string || null}
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 模板类型，取值范围：
* Preset：系统预置模板；
* Custom：用户自定义模板。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Type = 'Type' in params ? params.Type : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * CreateAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自适应转码格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 转自适应码流输出子流参数信息，最多输出10路子流。
注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * 模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
默认为否。
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
默认为否。
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

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
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 创建的输入RTMP拉流的配置信息。
 * @class
 */
class CreateInputRTMPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTMP源站的源站地址，有且只能有一个。
         * @type {Array.<RTMPPullSourceAddress> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new RTMPPullSourceAddress();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * 画面涉敏任务控制参数。
 * @class
 */
class TerrorismImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：涉敏旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：涉敏人物；</li>
<li>scenario：涉敏画面。</li>
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
         * 模板描述信息，长度限制：256 个字符。
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
         * 极速高清转码参数。
         * @type {TEHDConfigForUpdate || null}
         */
        this.TEHDConfig = null;

        /**
         * 音视频增强参数。
         * @type {EnhanceConfig || null}
         */
        this.EnhanceConfig = null;

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

        if (params.EnhanceConfig) {
            let obj = new EnhanceConfig();
            obj.deserialize(params.EnhanceConfig)
            this.EnhanceConfig = obj;
        }

    }
}

/**
 * ModifyStreamLinkFlow请求参数结构体
 * @class
 */
class ModifyStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 需要修改的流名称。
         * @type {string || null}
         */
        this.FlowName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;

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
 * 内容审核 Ocr 文字敏感任务输入参数类型
 * @class
 */
class AiReviewTerrorismOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
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
 * HDR配置
 * @class
 */
class HdrConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>HDR10</li>
<li>HLG</li>
默认值：HDR10。
注意：video的编码方式需要为libx265；
注意：视频编码位深为10。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 编排任务信息
 * @class
 */
class ScheduleTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编排任务 ID。
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
         * 媒体处理的目标文件信息。
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
         * 编排任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ActivityResult> || null}
         */
        this.ActivityResultSet = null;

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

        if (params.ActivityResultSet) {
            this.ActivityResultSet = new Array();
            for (let z in params.ActivityResultSet) {
                let obj = new ActivityResult();
                obj.deserialize(params.ActivityResultSet[z]);
                this.ActivityResultSet.push(obj);
            }
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
         * 素材名称，长度限制：20 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 素材应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于不适宜内容识别，等价于 Review.Face。
3. All：包含以上全部，等价于 1+2。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 素材描述，长度限制：1024 个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 素材图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。
注意：图片必须是单人像五官较清晰的照片，像素不低于 200*200。
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

        /**
         * 素材标签
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
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 查询输出的HLS拉流URL信息。
 * @class
 */
class DescribeOutputHLSPullServerUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS拉流地址的Url。
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
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeStreamLinkFlowSRTStatistics请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowSRTStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流ID。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 输入或输出类型，可选[input|output]。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 输入或输出Id。
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * 主通道或备通道，可选[0|1]。
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询间隔，可选[5s|1min|5min|15min]。
         * @type {string || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;

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
 * 媒体处理 COS 对象信息。
 * @class
 */
class CosInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体处理对象文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 媒体处理对象文件所在的 COS Bucket 所属园区，如 ap-chongqing。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 媒体处理对象文件的输入路径，如`/movie/201907/WildAnimal.mov`。
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
 * 流的统计数据列表。
 * @class
 */
class FlowStatisticsArray extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 每个会话的统计数据。
         * @type {Array.<FlowStatistics> || null}
         */
        this.FlowStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.FlowStatistics) {
            this.FlowStatistics = new Array();
            for (let z in params.FlowStatistics) {
                let obj = new FlowStatistics();
                obj.deserialize(params.FlowStatistics[z]);
                this.FlowStatistics.push(obj);
            }
        }

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
 * 查询输入的SRT配置信息。
 * @class
 */
class DescribeInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * SRT模式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 流Id。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 延迟。
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * 接收延迟。
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * 对端延迟。
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * 对端空闲超时时间。
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * 解密密钥。
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * 密钥长度。
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * SRT对端地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SRTSourceAddressResp> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new SRTSourceAddressResp();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * CreateStreamLinkFlow返回参数结构体
 * @class
 */
class CreateStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的Flow信息。
         * @type {DescribeFlow || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeFlow();
            obj.deserialize(params.Info)
            this.Info = obj;
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
 * 转推的目标地址信息。
 * @class
 */
class SRTAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标地址的IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 目标地址的端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * 流状态实时查询接口的流状态信息
 * @class
 */
class FlowRealtimeStatusItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，Input|Output。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 输入Id，如果Type为Input，此字段不为空。
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * 输出Id，如果Type为Output，此字段不为空。
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 协议， SRT | RTMP。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 共同状态信息。
         * @type {FlowRealtimeStatusCommon || null}
         */
        this.CommonStatus = null;

        /**
         * 如果是SRT协议则有此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FlowRealtimeStatusSRT || null}
         */
        this.SRTStatus = null;

        /**
         * 如果是RTMP协议则有此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FlowRealtimeStatusRTMP || null}
         */
        this.RTMPStatus = null;

        /**
         * 服务器IP。
         * @type {string || null}
         */
        this.ConnectServerIP = null;

        /**
         * 如果是RTP协议则有此字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FlowRealtimeStatusRTP || null}
         */
        this.RTPStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.CommonStatus) {
            let obj = new FlowRealtimeStatusCommon();
            obj.deserialize(params.CommonStatus)
            this.CommonStatus = obj;
        }

        if (params.SRTStatus) {
            let obj = new FlowRealtimeStatusSRT();
            obj.deserialize(params.SRTStatus)
            this.SRTStatus = obj;
        }

        if (params.RTMPStatus) {
            let obj = new FlowRealtimeStatusRTMP();
            obj.deserialize(params.RTMPStatus)
            this.RTMPStatus = obj;
        }
        this.ConnectServerIP = 'ConnectServerIP' in params ? params.ConnectServerIP : null;

        if (params.RTPStatus) {
            let obj = new FlowRealtimeStatusRTP();
            obj.deserialize(params.RTPStatus)
            this.RTPStatus = obj;
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
 * 编辑视频任务的输入。
 * @class
 */
class EditMediaTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的视频文件信息。
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

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
 * 创建的输入RTSP拉流的配置信息。
 * @class
 */
class CreateInputRTSPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTSP源站的源站地址，有且只能有一个。
         * @type {Array.<RTSPPullSourceAddress> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new RTSPPullSourceAddress();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * CreateStreamLinkFlow请求参数结构体
 * @class
 */
class CreateStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 最大带宽，单位bps，可选[10000000, 20000000, 50000000]。
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 流的输入组。
         * @type {Array.<CreateInput> || null}
         */
        this.InputGroup = null;

        /**
         * 该Flow关联的媒体传输事件ID，每个flow只能关联一个Event。
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.InputGroup) {
            this.InputGroup = new Array();
            for (let z in params.InputGroup) {
                let obj = new CreateInput();
                obj.deserialize(params.InputGroup[z]);
                this.InputGroup.push(obj);
            }
        }
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * 创建媒体传输流的输出SRT的目标地址。
 * @class
 */
class CreateOutputSRTSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出的IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 输出的端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * RecognizeMediaForZhiXue请求参数结构体
 * @class
 */
class RecognizeMediaForZhiXueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入媒体文件存储信息。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 表情识别参数配置。默认开启。
         * @type {ExpressionConfigInfo || null}
         */
        this.ExpressionConfig = null;

        /**
         * 动作识别参数配置。默认开启。
         * @type {ActionConfigInfo || null}
         */
        this.ActionConfig = null;

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

        if (params.ExpressionConfig) {
            let obj = new ExpressionConfigInfo();
            obj.deserialize(params.ExpressionConfig)
            this.ExpressionConfig = obj;
        }

        if (params.ActionConfig) {
            let obj = new ActionConfigInfo();
            obj.deserialize(params.ActionConfig)
            this.ActionConfig = obj;
        }

    }
}

/**
 * 对视频转自适应码流任务结果类型
 * @class
 */
class MediaProcessTaskAdaptiveDynamicStreamingResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 对视频转自适应码流任务的输入。
         * @type {AdaptiveDynamicStreamingTaskInput || null}
         */
        this.Input = null;

        /**
         * 对视频转自适应码流任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdaptiveDynamicStreamingInfoItem || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AdaptiveDynamicStreamingTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AdaptiveDynamicStreamingInfoItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 去划痕配置
 * @class
 */
class ScratchRepairConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 强度，取值范围：0.0~1.0。
默认：0.0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Intensity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Intensity = 'Intensity' in params ? params.Intensity : null;

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
 * EditMedia返回参数结构体
 * @class
 */
class EditMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑视频的任务 ID，可以通过该 ID 查询编辑任务的状态。
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
 * 文本涉敏任务控制参数。
 * @class
 */
class PoliticalOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
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
 * 创建媒体传输流的输出的RTMP的目标地址。
 * @class
 */
class CreateOutputRtmpSettingsDestinations extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的URL，格式如：rtmp://domain/live。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转推的StreamKey，格式如：stream?key=value。
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

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
 * 编排视频识别任务结果类型
 * @class
 */
class ScheduleRecognitionTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 识别任务的输入。
         * @type {AiRecognitionTaskInput || null}
         */
        this.Input = null;

        /**
         * 识别任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiRecognitionResult> || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiRecognitionResult();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
        }

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
 * 查询输入的RTMP配置信息。
 * @class
 */
class DescribeInputRTMPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTMP源站地址信息。
         * @type {Array.<DescribeRTMPPullSourceAddress> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new DescribeRTMPPullSourceAddress();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * 媒体处理任务类型
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

        /**
         * 转自适应码流任务列表。
         * @type {Array.<AdaptiveDynamicStreamingTaskInput> || null}
         */
        this.AdaptiveDynamicStreamingTaskSet = null;

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

        if (params.AdaptiveDynamicStreamingTaskSet) {
            this.AdaptiveDynamicStreamingTaskSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTaskSet) {
                let obj = new AdaptiveDynamicStreamingTaskInput();
                obj.deserialize(params.AdaptiveDynamicStreamingTaskSet[z]);
                this.AdaptiveDynamicStreamingTaskSet.push(obj);
            }
        }

    }
}

/**
 * 创建的输入RTMP拉流源站配置信息。
 * @class
 */
class RTMPPullSourceAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTMP源站的TcUrl地址。
         * @type {string || null}
         */
        this.TcUrl = null;

        /**
         * RTMP源站的StreamKey信息。
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TcUrl = 'TcUrl' in params ? params.TcUrl : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * 媒体处理 COS 输出对象信息。
 * @class
 */
class CosOutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体处理生成的文件输出的目标 Bucket 名，如 TopRankVideo-125xxx88。如果不填，表示继承上层。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 媒体处理生成的文件输出的目标 Bucket 的园区，如 ap-chongqing。如果不填，表示继承上层。
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
 * DeleteAdaptiveDynamicStreamingTemplate返回参数结构体
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
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
 * CreateAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class CreateAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帧率，取值范围：[1, 30]，单位：Hz。
         * @type {number || null}
         */
        this.Fps = null;

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
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

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
 * CreateWordSamples请求参数结构体
 * @class
 */
class CreateWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过音频识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行不适宜内容识别；
4. Review.Asr：通过音频识别技术，进行不适宜内容识别；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容识别，等价于 3+4；
7. All：通过光学字符识别技术、音频识别技术，进行内容识别、不适宜内容识别，等价于 1+2+3+4。
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
 * 语音涉敏任务控制参数。
 * @class
 */
class PoliticalAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音涉敏任务开关，可选值：
<li>ON：开启语音涉敏任务；</li>
<li>OFF：关闭语音涉敏任务。</li>
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
 * DescribeStreamLinkFlowStatistics请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流ID。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 输入或输出类型，可选[input|output]。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 输入或输出Id。
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * 主通道或备通道，可选[0|1]。
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * 查询间隔，可选[5s|1min|5min|15min]。
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * 内容审核 Ocr 文字敏感任务结果类型
 * @class
 */
class AiReviewTaskTerrorismOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字敏感任务输入。
         * @type {AiReviewTerrorismOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiReviewTerrorismOcrTaskOutput || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 语音违禁任务控制参数
 * @class
 */
class ProhibitedAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音违禁任务开关，可选值：
<li>ON：开启语音违禁任务；</li>
<li>OFF：关闭语音违禁任务。</li>
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
 * DeleteAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自适应转码模板唯一标识。
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
 * 编辑视频的结果文件输出配置。
 * @class
 */
class EditMediaOutputConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、hls、mov、flv、avi。默认是 mp4。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 剪辑模式，可选值 normal、fast。默认是精确剪辑 normal
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
        this.Container = 'Container' in params ? params.Container : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * EditMedia请求参数结构体
 * @class
 */
class EditMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的视频文件信息。
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfos = null;

        /**
         * 媒体处理输出文件的目标存储。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 媒体处理输出文件的目标路径。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * 编辑后生成的文件配置。
         * @type {EditMediaOutputConfig || null}
         */
        this.OutputConfig = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
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

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.OutputConfig) {
            let obj = new EditMediaOutputConfig();
            obj.deserialize(params.OutputConfig)
            this.OutputConfig = obj;
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
 * CreateStreamLinkOutputInfo返回参数结构体
 * @class
 */
class CreateStreamLinkOutputInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建后的Output信息。
         * @type {DescribeOutput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeOutput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 转推的RTP目标地址信息。
 * @class
 */
class RTPAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的目标地址的IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 转推的目标地址的端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates返回参数结构体
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 转自适应码流模板详情列表。
         * @type {Array.<AdaptiveDynamicStreamingTemplate> || null}
         */
        this.AdaptiveDynamicStreamingTemplateSet = null;

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

        if (params.AdaptiveDynamicStreamingTemplateSet) {
            this.AdaptiveDynamicStreamingTemplateSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTemplateSet) {
                let obj = new AdaptiveDynamicStreamingTemplate();
                obj.deserialize(params.AdaptiveDynamicStreamingTemplateSet[z]);
                this.AdaptiveDynamicStreamingTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * StopStreamLinkFlow请求参数结构体
 * @class
 */
class StopStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates请求参数结构体
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转自适应码流模板唯一标识过滤条件，数组长度限制：100。
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
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
默认值：10%。
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束（默认值）。</li>
         * @type {string || null}
         */
        this.RepeatType = null;

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
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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
 * CreatePersonSample返回参数结构体
 * @class
 */
class CreatePersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材信息。
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * 处理失败的五官定位信息。
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
 * 违禁任务控制参数
 * @class
 */
class ProhibitedConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音违禁控制参数。
         * @type {ProhibitedAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本违禁控制参数。
         * @type {ProhibitedOcrReviewTemplateInfoForUpdate || null}
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

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

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
 * 查询输入的RTSP配置信息。
 * @class
 */
class DescribeInputRTSPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTSP源站地址信息。
         * @type {Array.<DescribeRTSPPullSourceAddress> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new DescribeRTSPPullSourceAddress();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * 自定义转码的规格参数。
 * @class
 */
class RawTranscodeParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
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
         * 极速高清转码参数。
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

        /**
         * 通知类型，默认CMQ，指定URL时HTTP回调推送到 NotifyUrl 指定的地址。

<font color="red"> 注：不填或为空时默认 CMQ，如需采用其他类型需填写对应类型值。 </font>
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * HTTP回调地址，NotifyType为URL时必填。
         * @type {string || null}
         */
        this.NotifyUrl = null;

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
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;

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
<li>av1：AOMedia Video 1 编码</li>
注意：目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。
注意：av1 编码容器目前只支持 mp4 。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 100]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
注意：自适应码率时取值范围是 [0, 60]
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
注意：自适应模式时，Width不能小于Height。
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
         * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
当填 0 或不填时，系统将自动设置 gop 长度。
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
默认值：black 。
注意：自适应码流只支持 stretch、black。
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * 视频恒定码率控制因子，取值范围为[1, 51]。
如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）。
如果没有特殊需求，不建议指定该参数。
         * @type {number || null}
         */
        this.Vcrf = null;

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
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Vcrf = 'Vcrf' in params ? params.Vcrf : null;

    }
}

/**
 * 文本涉敏任务控制参数
 * @class
 */
class PoliticalOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 创建输出的配置信息。
 * @class
 */
class CreateOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出的名称。
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * 输出描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 输出协议，可选[SRT|RTP|RTMP|RTMP_PULL]。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 输出地区。
         * @type {string || null}
         */
        this.OutputRegion = null;

        /**
         * 输出的SRT的配置。
         * @type {CreateOutputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * 输出的RTMP的配置。
         * @type {CreateOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * 输出的RTP的配置。
         * @type {CreateOutputInfoRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * IP白名单列表，格式为CIDR，如0.0.0.0/0。
当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.OutputRegion = 'OutputRegion' in params ? params.OutputRegion : null;

        if (params.SRTSettings) {
            let obj = new CreateOutputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new CreateOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateOutputInfoRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

    }
}

/**
 * 媒体处理输出对象信息。
 * @class
 */
class TaskOutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体处理输出对象存储位置的类型，现在仅支持 COS。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 输出位置。
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
 * 传输流日志信息。
 * @class
 */
class FlowLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳，单位为秒。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 输入输出类型（input/output）。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 输入或输出Id。
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * 协议。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 事件代码。
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 事件信息。
         * @type {string || null}
         */
        this.EventMessage = null;

        /**
         * 对端IP。
         * @type {string || null}
         */
        this.RemoteIp = null;

        /**
         * 对端端口。
         * @type {string || null}
         */
        this.RemotePort = null;

        /**
         * 主备通道，0为主通道，1为备通道。
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * 输入或输出的名称。
         * @type {string || null}
         */
        this.InputOutputName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventMessage = 'EventMessage' in params ? params.EventMessage : null;
        this.RemoteIp = 'RemoteIp' in params ? params.RemoteIp : null;
        this.RemotePort = 'RemotePort' in params ? params.RemotePort : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.InputOutputName = 'InputOutputName' in params ? params.InputOutputName : null;

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
 * 色彩增强配置
 * @class
 */
class ColorEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>weak</li>
<li>normal</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 查询输出的RTP配置信息。
 * @class
 */
class DescribeOutputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推RTP的目标地址信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RTPAddressDestination> || null}
         */
        this.Destinations = null;

        /**
         * 是否FEC。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * 空闲超时时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new RTPAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * DeleteStreamLinkOutput返回参数结构体
 * @class
 */
class DeleteStreamLinkOutputResponse extends  AbstractModel {
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
 * ModifyAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转自适应码流模板唯一标识。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * 转自适应码流输入流参数信息，最多输入10路流。
注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

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
        this.Format = 'Format' in params ? params.Format : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Comment = 'Comment' in params ? params.Comment : null;

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
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/862/37042#.E9.A2.84.E7.BD.AE.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
2. Recognition.Asr：通过音频识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；
4. Review.Asr：通过音频识别技术，进行不适宜的音频识别；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；
7. All：包含以上全部，等价于 1+2+3+4。
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * RTMP转推的目标地址信息。
 * @class
 */
class RTMPAddressDestination extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推RTMP的目标Url，格式如'rtmp://domain/live'。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转推RTMP的目标StreamKey，格式如'steamid?key=value'。
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

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
 * SRT输入源地址。
 * @class
 */
class SRTSourceAddressReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 对端端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

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
         * 媒体处理的文件输入信息。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 媒体处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与 InputInfo 中文件所在的目录一致。
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * 媒体处理类型任务参数。
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
         * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 编排ID。
注意1：对于OutputStorage、OutputDir参数：
<li>当服务编排中子任务节点配置了OutputStorage、OutputDir时，该子任务节点中配置的输出作为子任务的输出。</li>
<li>当服务编排中子任务节点没有配置OutputStorage、OutputDir时，若创建任务接口（ProcessMedia）有输出，将覆盖原有编排的默认输出。</li>
注意2：对于TaskNotifyConfig参数，若创建任务接口（ProcessMedia）有设置，将覆盖原有编排的默认回调。

注意3：编排的 Trigger 只是用来自动化触发场景，在手动发起的请求中已经配置的 Trigger 无意义。
         * @type {number || null}
         */
        this.ScheduleId = null;

        /**
         * 任务类型，默认Online
<li> Online：实时任务</li>
<li> Offline：闲时任务，不保证实效性，默认3天内处理完</li>
         * @type {string || null}
         */
        this.TaskType = null;

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
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * 查询输入的RTSP配置信息。
 * @class
 */
class DescribeRTSPPullSourceAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTSP源站的Url地址。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 查询输出的RTSP拉流配置信息。
 * @class
 */
class DescribeOutputRTSPPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTSP拉流地址列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeOutputRTSPPullServerUrl> || null}
         */
        this.ServerUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServerUrls) {
            this.ServerUrls = new Array();
            for (let z in params.ServerUrls) {
                let obj = new DescribeOutputRTSPPullServerUrl();
                obj.deserialize(params.ServerUrls[z]);
                this.ServerUrls.push(obj);
            }
        }

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 查询输出的HLS拉流配置信息。
 * @class
 */
class DescribeOutputHLSPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS拉流地址列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeOutputHLSPullServerUrl> || null}
         */
        this.ServerUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServerUrls) {
            this.ServerUrls = new Array();
            for (let z in params.ServerUrls) {
                let obj = new DescribeOutputHLSPullServerUrl();
                obj.deserialize(params.ServerUrls[z]);
                this.ServerUrls.push(obj);
            }
        }

    }
}

/**
 * 翻译的输入。
 * @class
 */
class AiRecognitionTaskTransTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 翻译模板 ID。
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
 * 综合增强配置
 * @class
 */
class ImageQualityEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>weak</li>
<li>normal</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeStreamLinkRegions返回参数结构体
 * @class
 */
class DescribeStreamLinkRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体传输地区信息。
         * @type {StreamLinkRegionInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new StreamLinkRegionInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * DescribeStreamLinkFlowStatistics返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流的媒体数据列表。
         * @type {Array.<FlowStatisticsArray> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowStatisticsArray();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyAdaptiveDynamicStreamingTemplate返回参数结构体
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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

        /**
         * 转码进度，取值范围 [0-100]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
        this.Progress = 'Progress' in params ? params.Progress : null;

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
         * 截图时间点列表，时间点支持 s、% 两种格式：
<li>当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
<li>当字符串以 % 结尾，表示时间点为视频时长的百分比大小，如10%表示时间点为视频前第10%的时间。</li>
         * @type {Array.<string> || null}
         */
        this.ExtTimeOffsetSet = null;

        /**
         * 截图时间点列表，单位为<font color=red>秒</font>。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。
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
        this.ExtTimeOffsetSet = 'ExtTimeOffsetSet' in params ? params.ExtTimeOffsetSet : null;
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
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；</li>
0px：表示 Height 按照 Width 对视频宽度的比例缩放。
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束。</li>
         * @type {string || null}
         */
        this.RepeatType = null;

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
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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
 * ModifyStreamLinkOutputInfo请求参数结构体
 * @class
 */
class ModifyStreamLinkOutputInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 需要修改的Output配置。
         * @type {ModifyOutputInfo || null}
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Output) {
            let obj = new ModifyOutputInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
         * 按帧标签名称的分类列表，CategorySet.N 表示第 N+1级分类。
比如 Tag 为“塔楼”时，CategorySet 包含两个元素：CategorySet.0 为“场景”，CategorySet.1为 “建筑”，表示按帧标签为“塔楼”，且第1级分类是“场景”，第2级分类是“建筑”。
         * @type {Array.<string> || null}
         */
        this.CategorySet = null;

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
        this.CategorySet = 'CategorySet' in params ? params.CategorySet : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * RecognizeMediaForZhiXue返回参数结构体
 * @class
 */
class RecognizeMediaForZhiXueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID，可以通过该 ID 查询任务状态和结果。
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
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 流的统计数据。
 * @class
 */
class FlowStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话Id。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 对端IP。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 总带宽。
         * @type {number || null}
         */
        this.Network = null;

        /**
         * 视频数据。
         * @type {Array.<FlowVideo> || null}
         */
        this.Video = null;

        /**
         * 音频数据。
         * @type {Array.<FlowAudio> || null}
         */
        this.Audio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Network = 'Network' in params ? params.Network : null;

        if (params.Video) {
            this.Video = new Array();
            for (let z in params.Video) {
                let obj = new FlowVideo();
                obj.deserialize(params.Video[z]);
                this.Video.push(obj);
            }
        }

        if (params.Audio) {
            this.Audio = new Array();
            for (let z in params.Audio) {
                let obj = new FlowAudio();
                obj.deserialize(params.Audio[z]);
                this.Audio.push(obj);
            }
        }

    }
}

/**
 * 创建的输入SRT的配置信息。
 * @class
 */
class CreateInputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * SRT模式，可选[LISTENER|CALLER]，默认为LISTENER。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 流Id，可选大小写字母、数字和特殊字符（.#!:&,=_-），长度为0~512。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 延迟，默认0，单位ms，范围为[0, 3000]。
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * 接收延迟，默认120，单位ms，范围为[0, 3000]。
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * 对端延迟，默认0，单位ms，范围为[0, 3000]。
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * 对端超时时间，默认5000，单位ms，范围为[1000, 10000]。
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * 解密密钥，默认为空，表示不加密。只可填ascii码值，长度为[10, 79]。
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * 密钥长度，默认为0，可选[0|16|24|32]。
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * SRT对端地址，当Mode为CALLER时必填，且只能填1组。
         * @type {Array.<SRTSourceAddressReq> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new SRTSourceAddressReq();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
            }
        }

    }
}

/**
 * 实时流状态查询的通用状态信息。
 * @class
 */
class FlowRealtimeStatusCommon extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前连接状态，Connected|Waiting|Idle。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 连接模式，Listener|Caller。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 已连接时长，单位为ms。
         * @type {number || null}
         */
        this.ConnectedTime = null;

        /**
         * 实时码率，单位为bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 重试次数。
         * @type {number || null}
         */
        this.Reconnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ConnectedTime = 'ConnectedTime' in params ? params.ConnectedTime : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Reconnections = 'Reconnections' in params ? params.Reconnections : null;

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
 * DescribeStreamLinkActivateState返回参数结构体
 * @class
 */
class DescribeStreamLinkActivateStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户已激活为0，否则为非0。
         * @type {number || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * DescribeStreamLinkFlow请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * 创建媒体传输流的输出的RTMP配置。
 * @class
 */
class CreateOutputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的目标地址，可填1~2个。
         * @type {Array.<CreateOutputRtmpSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * RTMP的Chunk大小，范围为[4096, 40960]。
         * @type {number || null}
         */
        this.ChunkSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputRtmpSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.ChunkSize = 'ChunkSize' in params ? params.ChunkSize : null;

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
 * 创建的输入HLS拉流源站配置信息。
 * @class
 */
class HLSPullSourceAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS源站的Url地址。
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
        this.Url = 'Url' in params ? params.Url : null;

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
 * 直播 AI 内容审核图片敏感结果
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
         * 嫌疑片段敏感分数。
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
         * 视频敏感结果标签，取值范围：
<li>politician：敏感人物。</li>
<li>violation_photo：违规图标。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 敏感人物、违规图标名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 敏感人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
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
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 文本涉敏任务控制参数
 * @class
 */
class TerrorismOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
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
 * 编排视频分析任务结果类型
 * @class
 */
class ScheduleAnalysisTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 分析任务的输入。
         * @type {AiAnalysisTaskInput || null}
         */
        this.Input = null;

        /**
         * 分析任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiAnalysisResult> || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiAnalysisResult();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
        }

    }
}

/**
 * 涉敏任务控制参数。
 * @class
 */
class TerrorismConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏任务控制参数。
         * @type {TerrorismImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 文本涉敏任务控制参数。
         * @type {TerrorismOcrReviewTemplateInfoForUpdate || null}
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
            let obj = new TerrorismImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * SRT输出的监听地址。
 * @class
 */
class OutputSRTSourceAddressResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 监听端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * 媒体传输的地区信息。
 * @class
 */
class StreamLinkRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体直传输的地区信息列表。
         * @type {Array.<RegionInfo> || null}
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Regions) {
            this.Regions = new Array();
            for (let z in params.Regions) {
                let obj = new RegionInfo();
                obj.deserialize(params.Regions[z]);
                this.Regions.push(obj);
            }
        }

    }
}

/**
 * 流状态实时查询接口的RTP流状态信息
 * @class
 */
class FlowRealtimeStatusRTP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输的包个数
         * @type {number || null}
         */
        this.Packets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Packets = 'Packets' in params ? params.Packets : null;

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
 * 输出的出口的地址。
 * @class
 */
class OutputAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出口IP。
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * 媒体处理任务中的马赛克参数类型
 * @class
 */
class MosaicInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原点位置，目前仅支持：
<li>TopLeft：表示坐标原点位于视频图像左上角，马赛克原点为图片或文字的左上角。</li>
默认值：TopLeft。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 马赛克原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 马赛克原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 马赛克的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：10%。
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 马赛克的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
默认值：10%。
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 马赛克的起始时间偏移，单位：秒。不填或填0，表示马赛克从画面出现时开始显现。
<li>不填或填0，表示马赛克从画面开始就出现；</li>
<li>当数值大于0时（假设为 n），表示马赛克从画面开始的第 n 秒出现；</li>
<li>当数值小于0时（假设为 -n），表示马赛克从离画面结束 n 秒前开始出现。</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 马赛克的结束时间偏移，单位：秒。
<li>不填或填0，表示马赛克持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示马赛克持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示马赛克持续到离画面结束 n 秒前消失。</li>
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
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * DescribeStreamLinkActivateState请求参数结构体
 * @class
 */
class DescribeStreamLinkActivateStateRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 模板类型，取值范围：
* Preset：系统预置模板；
* Custom：用户自定义模板。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 片头片尾参数
 * @class
 */
class HeadTailParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片头列表。
         * @type {Array.<MediaInputInfo> || null}
         */
        this.HeadSet = null;

        /**
         * 片尾列表。
         * @type {Array.<MediaInputInfo> || null}
         */
        this.TailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HeadSet) {
            this.HeadSet = new Array();
            for (let z in params.HeadSet) {
                let obj = new MediaInputInfo();
                obj.deserialize(params.HeadSet[z]);
                this.HeadSet.push(obj);
            }
        }

        if (params.TailSet) {
            this.TailSet = new Array();
            for (let z in params.TailSet) {
                let obj = new MediaInputInfo();
                obj.deserialize(params.TailSet[z]);
                this.TailSet.push(obj);
            }
        }

    }
}

/**
 * 图片水印模板输入参数
 * @class
 */
class RawImageWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片的输入内容。支持 jpeg、png 图片格式。
         * @type {MediaInputInfo || null}
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
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束（默认值）。</li>
         * @type {string || null}
         */
        this.RepeatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageContent) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.ImageContent)
            this.ImageContent = obj;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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
 * SRT输入源地址。
 * @class
 */
class SRTSourceAddressResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对端IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 对端端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

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
 * 查询输入配置信息。
 * @class
 */
class DescribeInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入Id。
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * 输入名称。
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * 输入描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 输入协议。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 输入地址列表。
         * @type {Array.<InputAddress> || null}
         */
        this.InputAddressList = null;

        /**
         * 输入IP白名单列表。
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * 输入的SRT配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * 输入的RTP配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * 输入的地区。
         * @type {string || null}
         */
        this.InputRegion = null;

        /**
         * 输入的RTMP配置信息。
         * @type {DescribeInputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * 输入的主备开关。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailOver = null;

        /**
         * 输入的RTMP_PULL配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInputRTMPPullSettings || null}
         */
        this.RTMPPullSettings = null;

        /**
         * 输入的RTSP_PULL配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInputRTSPPullSettings || null}
         */
        this.RTSPPullSettings = null;

        /**
         * 输入的HLS_PULL配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeInputHLSPullSettings || null}
         */
        this.HLSPullSettings = null;

        /**
         * 延播平滑吐流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResilientStreamConf || null}
         */
        this.ResilientStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.InputAddressList) {
            this.InputAddressList = new Array();
            for (let z in params.InputAddressList) {
                let obj = new InputAddress();
                obj.deserialize(params.InputAddressList[z]);
                this.InputAddressList.push(obj);
            }
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new DescribeInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new DescribeInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.InputRegion = 'InputRegion' in params ? params.InputRegion : null;

        if (params.RTMPSettings) {
            let obj = new DescribeInputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

        if (params.RTMPPullSettings) {
            let obj = new DescribeInputRTMPPullSettings();
            obj.deserialize(params.RTMPPullSettings)
            this.RTMPPullSettings = obj;
        }

        if (params.RTSPPullSettings) {
            let obj = new DescribeInputRTSPPullSettings();
            obj.deserialize(params.RTSPPullSettings)
            this.RTSPPullSettings = obj;
        }

        if (params.HLSPullSettings) {
            let obj = new DescribeInputHLSPullSettings();
            obj.deserialize(params.HLSPullSettings)
            this.HLSPullSettings = obj;
        }

        if (params.ResilientStream) {
            let obj = new ResilientStreamConf();
            obj.deserialize(params.ResilientStream)
            this.ResilientStream = obj;
        }

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
 * 涉敏信息
 * @class
 */
class AiReviewTerrorismTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频涉敏评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频涉敏结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：涉敏旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：涉敏人物。</li>
<li>scenario：涉敏画面。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉敏嫌疑的视频片段列表。
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
 * 违禁任务控制参数
 * @class
 */
class ProhibitedConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音违禁控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProhibitedAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本违禁控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProhibitedOcrReviewTemplateInfo || null}
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

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * DescribeStreamLinkFlowSRTStatistics返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowSRTStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流的SRT质量数据列表。
         * @type {Array.<FlowSRTInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowSRTInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ocr 文字涉敏信息
 * @class
 */
class AiReviewTerrorismOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ocr 文字涉敏评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉敏嫌疑的视频片段列表。
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
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束。</li>
         * @type {string || null}
         */
        this.RepeatType = null;

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
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

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

        /**
         * 模板类型过滤条件，不填则返回所有，可选值：
* Preset：系统预置模板；
* Custom：用户自定义模板。
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
 * 流的视频数据。
 * @class
 */
class FlowVideo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帧率。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 码率，单位是bps。
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 音频Pid。
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

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
 * 内容审核涉敏任务结果类型
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核涉敏任务输入。
         * @type {AiReviewTerrorismTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核涉敏任务输出。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 查询输出的配置信息。
 * @class
 */
class DescribeOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出Id。
         * @type {string || null}
         */
        this.OutputId = null;

        /**
         * 输出名称。
         * @type {string || null}
         */
        this.OutputName = null;

        /**
         * 输出类型。
         * @type {string || null}
         */
        this.OutputType = null;

        /**
         * 输出描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 输出协议。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 输出的出口地址信息列表。
         * @type {Array.<OutputAddress> || null}
         */
        this.OutputAddressList = null;

        /**
         * 输出的地区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputRegion = null;

        /**
         * 输出的SRT配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeOutputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * 输出的RTP配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeOutputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * 输出的RTMP配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeOutputRTMPSettings || null}
         */
        this.RTMPSettings = null;

        /**
         * 输出的RTMP拉流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeOutputRTMPPullSettings || null}
         */
        this.RTMPPullSettings = null;

        /**
         * CIDR白名单列表。
当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * 输出的RTSP拉流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeOutputRTSPPullSettings || null}
         */
        this.RTSPPullSettings = null;

        /**
         * 输出的HLS拉流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescribeOutputHLSPullSettings || null}
         */
        this.HLSPullSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutputId = 'OutputId' in params ? params.OutputId : null;
        this.OutputName = 'OutputName' in params ? params.OutputName : null;
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.OutputAddressList) {
            this.OutputAddressList = new Array();
            for (let z in params.OutputAddressList) {
                let obj = new OutputAddress();
                obj.deserialize(params.OutputAddressList[z]);
                this.OutputAddressList.push(obj);
            }
        }
        this.OutputRegion = 'OutputRegion' in params ? params.OutputRegion : null;

        if (params.SRTSettings) {
            let obj = new DescribeOutputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new DescribeOutputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }

        if (params.RTMPSettings) {
            let obj = new DescribeOutputRTMPSettings();
            obj.deserialize(params.RTMPSettings)
            this.RTMPSettings = obj;
        }

        if (params.RTMPPullSettings) {
            let obj = new DescribeOutputRTMPPullSettings();
            obj.deserialize(params.RTMPPullSettings)
            this.RTMPPullSettings = obj;
        }
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.RTSPPullSettings) {
            let obj = new DescribeOutputRTSPPullSettings();
            obj.deserialize(params.RTSPPullSettings)
            this.RTSPPullSettings = obj;
        }

        if (params.HLSPullSettings) {
            let obj = new DescribeOutputHLSPullSettings();
            obj.deserialize(params.HLSPullSettings)
            this.HLSPullSettings = obj;
        }

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
 * 内容审核涉敏嫌疑片段
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
         * 嫌疑片段涉敏分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 涉敏人物、违规图标名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 嫌疑片段涉敏结果标签。内容审核模板[画面涉敏任务控制参数](https://cloud.tencent.com/document/api/862/37615#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
politician：
<li>nation_politician：国家领导人；</li>
<li>province_politician: 省部级领导人；</li>
<li>bureau_politician：厅局级领导人；</li>
<li>county_politician：县处级领导人；</li>
<li>rural_politician：乡科级领导人；</li>
<li>sensitive_politician：涉敏人物；</li>
<li>foreign_politician：国外领导人。</li>
entertainment：
<li>sensitive_entertainment：敏感娱乐人物。</li>
sport：
<li>sensitive_sport：敏感体育人物。</li>
entrepreneur：
<li>sensitive_entrepreneur：敏感商业人物。</li>
scholar：
<li>sensitive_scholar：敏感教育学者。</li>
celebrity：
<li>sensitive_celebrity：敏感知名人物；</li>
<li>historical_celebrity：历史知名人物。</li>
military：
<li>sensitive_military：敏感军事人物。</li>
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
         * 涉敏人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * StartStreamLinkFlow请求参数结构体
 * @class
 */
class StartStreamLinkFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

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
         * 令人反感的信息的控制参数。
         * @type {PornConfigureInfoForUpdate || null}
         */
        this.PornConfigure = null;

        /**
         * 令人不安全的信息的控制参数。
         * @type {TerrorismConfigureInfoForUpdate || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 令人不适宜的控制参数。
         * @type {PoliticalConfigureInfoForUpdate || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此参数尚未支持。
         * @type {ProhibitedConfigureInfoForUpdate || null}
         */
        this.ProhibitedConfigure = null;

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

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfoForUpdate();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfoForUpdate();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * StopStreamLinkFlow返回参数结构体
 * @class
 */
class StopStreamLinkFlowResponse extends  AbstractModel {
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
 * 输入地址信息。
 * @class
 */
class InputAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入地址的IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 输入地址的端口。
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * CreateAdaptiveDynamicStreamingTemplate返回参数结构体
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自适应转码模板唯一标识。
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

        /**
         * 扩展参数，其值为序列化的 json字符串。
注意：此参数为定制需求参数，需要线下对接。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtendedParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExtendedParameter = 'ExtendedParameter' in params ? params.ExtendedParameter : null;

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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

        /**
         * 模板描述信息。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 图片格式。
         * @type {string || null}
         */
        this.Format = null;

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
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

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
 * DeleteStreamLinkFlow返回参数结构体
 * @class
 */
class DeleteStreamLinkFlowResponse extends  AbstractModel {
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
 * 语音违禁任务控制参数
 * @class
 */
class ProhibitedAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音违禁任务开关，可选值：
<li>ON：开启语音违禁任务；</li>
<li>OFF：关闭语音违禁任务。</li>
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
 * 内容审核 Asr 文字敏感任务输入参数类型
 * @class
 */
class AiReviewPoliticalAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
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
 * 动作识别参数配置
 * @class
 */
class ActionConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作识别任务开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
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
         * 极速高清转码参数。
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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 音视频增强配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EnhanceConfig || null}
         */
        this.EnhanceConfig = null;

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

        if (params.EnhanceConfig) {
            let obj = new EnhanceConfig();
            obj.deserialize(params.EnhanceConfig)
            this.EnhanceConfig = obj;
        }

    }
}

/**
 * DescribeStreamLinkFlowMediaStatistics返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowMediaStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流的媒体数据列表。
         * @type {Array.<FlowMediaInfo> || null}
         */
        this.Infos = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowMediaInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 创建媒体传输流的输出的RTP配置。
 * @class
 */
class CreateOutputInfoRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的目标地址，可填1~2个。
         * @type {Array.<CreateOutputRTPSettingsDestinations> || null}
         */
        this.Destinations = null;

        /**
         * 只能填none。
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * 空闲超时时间，单位ms。
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new CreateOutputRTPSettingsDestinations();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

    }
}

/**
 * 内容审核 Asr 文字敏感任务结果类型
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字敏感任务输入。
         * @type {AiReviewPoliticalAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字敏感任务输出。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 字幕流配置参数。
 * @class
 */
class SubtitleTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要压制到视频中的字幕文件地址。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 指定要压制到视频中的字幕轨道，如果有指定Path，则Path 优先级更高。Path 和 StreamIndex 至少指定一个。
         * @type {number || null}
         */
        this.StreamIndex = null;

        /**
         * 字体类型，
<li>hei.ttf：黑体</li>
<li>song.ttf：宋体</li>
<li>simkai.ttf：楷体</li>
<li>arial.ttf：仅支持英文</li>
默认hei.ttf
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * 字体大小，格式：Npx，N 为数值，不指定则以字幕文件中为准。
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）
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
        this.Path = 'Path' in params ? params.Path : null;
        this.StreamIndex = 'StreamIndex' in params ? params.StreamIndex : null;
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
         * 媒体处理任务 ID。
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
 * 内容审核 Asr 文字鉴违禁任务输入参数类型
 * @class
 */
class AiReviewProhibitedAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴违禁模板 ID。
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
 * 内容审核涉黄/涉敏嫌疑片段
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
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 文本涉敏任务控制参数
 * @class
 */
class TerrorismOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * DescribeStreamLinkFlowRealtimeStatus请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowRealtimeStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流ID。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 输入id数组，如果输入输出数组都为空，则代表全量查询。
         * @type {Array.<string> || null}
         */
        this.InputIds = null;

        /**
         * 输出id数组，如果输入输出数组都为空，则代表全量查询。
         * @type {Array.<string> || null}
         */
        this.OutputIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InputIds = 'InputIds' in params ? params.InputIds : null;
        this.OutputIds = 'OutputIds' in params ? params.OutputIds : null;

    }
}

/**
 * Asr 文字涉违禁信息
 * @class
 */
class AiReviewProhibitedAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asr 文字涉违禁评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉违禁嫌疑的视频片段列表。
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
 * 流的音频数据。
 * @class
 */
class FlowAudio extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帧率。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 码率，单位是bps。
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 音频Pid。
         * @type {number || null}
         */
        this.Pid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 画面涉敏任务控制参数。
 * @class
 */
class PoliticalImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：涉敏人物；</li>
<li>entertainment：娱乐人物；</li>
<li>sport：体育人物；</li>
<li>entrepreneur：商业人物；</li>
<li>scholar：教育学者；</li>
<li>celebrity：知名人物；</li>
<li>military：军事人物。</li>
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
 * 流状态实时查询接口的RTMP信息。
 * @class
 */
class FlowRealtimeStatusRTMP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频帧率。
         * @type {number || null}
         */
        this.VideoFPS = null;

        /**
         * 音频帧率。
         * @type {number || null}
         */
        this.AudioFPS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoFPS = 'VideoFPS' in params ? params.VideoFPS : null;
        this.AudioFPS = 'AudioFPS' in params ? params.AudioFPS : null;

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
 * 自适应转码流参数模板
 * @class
 */
class AdaptiveStreamTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频参数信息。
         * @type {VideoTemplateInfo || null}
         */
        this.Video = null;

        /**
         * 音频参数信息。
         * @type {AudioTemplateInfo || null}
         */
        this.Audio = null;

        /**
         * 是否移除音频流，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * 是否移除视频流，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Video) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.Video)
            this.Video = obj;
        }

        if (params.Audio) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.Audio)
            this.Audio = obj;
        }
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;

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
         * 视频转码自定义参数，当 Definition 填 0 时有效。
该参数用于高度定制场景，建议您优先使用 Definition 指定转码参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RawTranscodeParameter || null}
         */
        this.RawParameter = null;

        /**
         * 视频转码自定义参数，当 Definition 不填 0 时有效。
当填写了该结构中的部分转码参数时，将使用填写的参数覆盖转码模板中的参数。
该参数用于高度定制场景，建议您仅使用 Definition 指定转码参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OverrideTranscodeParameter || null}
         */
        this.OverrideParameter = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * 马赛克列表，最大可支持 10 张。
         * @type {Array.<MosaicInput> || null}
         */
        this.MosaicSet = null;

        /**
         * 转码后的视频的起始时间偏移，单位：秒。
<li>不填或填0，表示转码后的视频从原始视频的起始位置开始；</li>
<li>当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；</li>
<li>当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 转码后视频的终止时间偏移，单位：秒。
<li>不填或填0，表示转码后的视频持续到原始视频的末尾终止；</li>
<li>当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；</li>
<li>当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

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

        /**
         * 片头片尾参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HeadTailParameter || null}
         */
        this.HeadTailParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.RawParameter) {
            let obj = new RawTranscodeParameter();
            obj.deserialize(params.RawParameter)
            this.RawParameter = obj;
        }

        if (params.OverrideParameter) {
            let obj = new OverrideTranscodeParameter();
            obj.deserialize(params.OverrideParameter)
            this.OverrideParameter = obj;
        }

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.MosaicSet) {
            this.MosaicSet = new Array();
            for (let z in params.MosaicSet) {
                let obj = new MosaicInput();
                obj.deserialize(params.MosaicSet[z]);
                this.MosaicSet.push(obj);
            }
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

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

        if (params.HeadTailParameter) {
            let obj = new HeadTailParameter();
            obj.deserialize(params.HeadTailParameter)
            this.HeadTailParameter = obj;
        }

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
 * ParseNotification返回参数结构体
 * @class
 */
class ParseNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持事件类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>EditMediaTask：视频编辑任务。</li>
<li>ScheduleTask：编排任务。</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 视频处理任务信息，仅当 EventType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WorkflowTask || null}
         */
        this.WorkflowTaskEvent = null;

        /**
         * 视频编辑任务信息，仅当 EventType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTask || null}
         */
        this.EditMediaTaskEvent = null;

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
         * 编排任务信息，仅当 EventType 为 ScheduleTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleTask || null}
         */
        this.ScheduleTaskEvent = null;

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

        if (params.EditMediaTaskEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTaskEvent)
            this.EditMediaTaskEvent = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

        if (params.ScheduleTaskEvent) {
            let obj = new ScheduleTask();
            obj.deserialize(params.ScheduleTaskEvent)
            this.ScheduleTaskEvent = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 编排任务输出
 * @class
 */
class ActivityResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原子任务类型。
<li>Transcode：转码。</li>
<li>SampleSnapshot：采样截图。</li>
<li>AnimatedGraphics：转动图。</li>
<li>SnapshotByTimeOffset：时间点截图。</li>
<li>ImageSprites：雪碧图。</li>
<li>AdaptiveDynamicStreaming：自适应码流。</li>
<li>AiContentReview：内容审核。</li>
<li>AIRecognition：智能识别。</li>
<li>AIAnalysis：智能分析。</li>
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * 原子任务输出。
         * @type {ActivityResItem || null}
         */
        this.ActivityResItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;

        if (params.ActivityResItem) {
            let obj = new ActivityResItem();
            obj.deserialize(params.ActivityResItem)
            this.ActivityResItem = obj;
        }

    }
}

/**
 * 查询输入的HLS配置信息。
 * @class
 */
class DescribeInputHLSPullSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS源站地址信息。
         * @type {Array.<DescribeHLSPullSourceAddress> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new DescribeHLSPullSourceAddress();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
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
 * DescribeStreamLinkFlows请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前页数，默认1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * 工作流绑定的输入路径目录，必须为绝对路径，即以 `/` 开头和结尾。如`/movie/201907/`，不填代表根目录`/`。
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
 * Asr 文字敏感信息
 * @class
 */
class AiReviewPoliticalAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asr 文字敏感评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字敏感嫌疑的视频片段列表。
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
 * 流状态实时查询接口的SRT信息。
 * @class
 */
class FlowRealtimeStatusSRT extends  AbstractModel {
    constructor(){
        super();

        /**
         * 延迟，单位为ms。
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * RTT，单位为ms。
         * @type {number || null}
         */
        this.RTT = null;

        /**
         * 实时发包数或者收包数。
         * @type {number || null}
         */
        this.Packets = null;

        /**
         * 丢包率。
         * @type {number || null}
         */
        this.PacketLossRate = null;

        /**
         * 重传率。
         * @type {number || null}
         */
        this.RetransmitRate = null;

        /**
         * 实时丢包数。
         * @type {number || null}
         */
        this.DroppedPackets = null;

        /**
         * 是否加密，On|Off。
         * @type {string || null}
         */
        this.Encryption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RTT = 'RTT' in params ? params.RTT : null;
        this.Packets = 'Packets' in params ? params.Packets : null;
        this.PacketLossRate = 'PacketLossRate' in params ? params.PacketLossRate : null;
        this.RetransmitRate = 'RetransmitRate' in params ? params.RetransmitRate : null;
        this.DroppedPackets = 'DroppedPackets' in params ? params.DroppedPackets : null;
        this.Encryption = 'Encryption' in params ? params.Encryption : null;

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
 * DeleteStreamLinkOutput请求参数结构体
 * @class
 */
class DeleteStreamLinkOutputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 输出Id。
         * @type {string || null}
         */
        this.OutputId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.OutputId = 'OutputId' in params ? params.OutputId : null;

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
         * 素材 ID。
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
         * 素材应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于不适宜的内容识别，等价于 Review.Face。
3. All：用于内容识别、不适宜的内容识别，等价于 1+2。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * 五官操作信息。
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
 * 去伪影（毛刺）配置
 * @class
 */
class ArtifactRepairConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>weak</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * DescribeStreamLinkFlow返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流的配置信息。
         * @type {DescribeFlow || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeFlow();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 画面涉敏任务控制参数
 * @class
 */
class PoliticalImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：涉敏人物；</li>
<li>entertainment：娱乐人物；</li>
<li>sport：体育人物；</li>
<li>entrepreneur：商业人物；</li>
<li>scholar：教育学者；</li>
<li>celebrity：知名人物；</li>
<li>military：军事人物。</li>
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
 * 涉敏任务控制参数
 * @class
 */
class PoliticalConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏控制参数。
         * @type {PoliticalImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音涉敏控制参数。
         * @type {PoliticalAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本涉敏控制参数。
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
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 查询输出的RTMP拉流URL信息。
 * @class
 */
class DescribeOutputRTMPPullServerUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTMP拉流地址的tcUrl。
         * @type {string || null}
         */
        this.TcUrl = null;

        /**
         * RTMP拉流地址的流key。
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TcUrl = 'TcUrl' in params ? params.TcUrl : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

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

        /**
         * 转自适应码流任务查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskAdaptiveDynamicStreamingResult || null}
         */
        this.AdaptiveDynamicStreamingTask = null;

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

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new MediaProcessTaskAdaptiveDynamicStreamingResult();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

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
 * 直播实时翻译结果
 * @class
 */
class LiveStreamTransTextRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别文本。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 翻译片段起始的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * 翻译片段终止的 PTS 时间，单位：秒。
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * 翻译片段置信度。取值：0~100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 翻译文本。
         * @type {string || null}
         */
        this.Trans = null;

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
        this.Trans = 'Trans' in params ? params.Trans : null;

    }
}

/**
 * 媒体处理任务中的水印参数类型
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
         * 水印自定义参数，当 Definition 填 0 时有效。
该参数用于高度定制场景，建议您优先使用 Definition 指定水印参数。
水印自定义参数不支持截图打水印。
         * @type {RawWatermarkParameter || null}
         */
        this.RawParameter = null;

        /**
         * 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。
文字水印不支持截图打水印。
         * @type {string || null}
         */
        this.TextContent = null;

        /**
         * SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。
SVG 水印不支持截图打水印。
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

        if (params.RawParameter) {
            let obj = new RawWatermarkParameter();
            obj.deserialize(params.RawParameter)
            this.RawParameter = obj;
        }
        this.TextContent = 'TextContent' in params ? params.TextContent : null;
        this.SvgContent = 'SvgContent' in params ? params.SvgContent : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

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
 * 转自适应码流信息
 * @class
 */
class AdaptiveDynamicStreamingInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转自适应码流规格。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 打包格式，可能为 HLS和 MPEG-DASH 两种。
         * @type {string || null}
         */
        this.Package = null;

        /**
         * 播放路径。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 自适应码流文件的存储位置。
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
        this.Package = 'Package' in params ? params.Package : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * CreateStreamLinkOutputInfo请求参数结构体
 * @class
 */
class CreateStreamLinkOutputInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 传输流的Output配置。
         * @type {CreateOutputInfo || null}
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Output) {
            let obj = new CreateOutputInfo();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 文本违禁任务控制参数
 * @class
 */
class ProhibitedOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本违禁任务开关，可选值：
<li>ON：开启文本违禁任务；</li>
<li>OFF：关闭文本违禁任务。</li>
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
 * ModifyStreamLinkInput请求参数结构体
 * @class
 */
class ModifyStreamLinkInputRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 需要修改的Input信息。
         * @type {ModifyInput || null}
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

        if (params.Input) {
            let obj = new ModifyInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

    }
}

/**
 * 编排视频审核任务结果类型
 * @class
 */
class ScheduleReviewTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 审核任务的输入。
         * @type {AiContentReviewTaskInput || null}
         */
        this.Input = null;

        /**
         * 审核任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiContentReviewResult> || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiContentReviewResult();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
        }

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
 * 表情识别参数配置
 * @class
 */
class ExpressionConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表情识别任务开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
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
<li>av1：AOMedia Video 1 编码</li>
注意：目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。
注意：av1 编码容器目前只支持 mp4 。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 100]，单位：Hz。
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
注意：自适应模式时，Width不能小于Height。
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
         * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 时，系统将自动设置 gop 长度。
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * 视频恒定码率控制因子。取值范围为[0, 51]，填0表示禁用该参数。
如果没有特殊需求，不建议指定该参数。
         * @type {number || null}
         */
        this.Vcrf = null;

        /**
         * 内容自适应编码。可选值：
<li>0：不开启</li>
<li>1：开启</li>
默认值: 0.   当开启该参数时，将会自适应生成多个不同分辨率，不同码率的码流， 其中VideoTemplate的宽和高为多个码流中的最大分辨率，VideoTemplate中的码率为多个码流中的最高码率， VideoTemplate中的vcrf为多个码流中的最高质量。 当不设置分辨率、码率和vcrf时， ContentAdaptStream 参数生成的最高分辨率为视频源的分辨率，视频质量为接近vmaf95分。 若要开启该参数或了解计费细节, 请联系您的腾讯云商务。
         * @type {number || null}
         */
        this.ContentAdaptStream = null;

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
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Vcrf = 'Vcrf' in params ? params.Vcrf : null;
        this.ContentAdaptStream = 'ContentAdaptStream' in params ? params.ContentAdaptStream : null;

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
         * 令人反感的信息的控制参数。
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * 令人不安全的信息的控制参数。
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 令人不适宜的信息的控制参数。
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此参数尚未支持。
         * @type {ProhibitedConfigureInfo || null}
         */
        this.ProhibitedConfigure = null;

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

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

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
         * 智能审核模板唯一标识过滤条件，数组长度限制：50。
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

        /**
         * 模板类型过滤条件，不填则返回所有，可选值：
* Preset：系统预置模板；
* Custom：用户自定义模板。
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
 * 对视频转自适应码流的输入参数类型
 * @class
 */
class AdaptiveDynamicStreamingTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转自适应码流模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * 转自适应码流后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 转自适应码流后，manifest 文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}.{format}`。
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * 转自适应码流后，子流文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`。
         * @type {string || null}
         */
        this.SubStreamObjectName = null;

        /**
         * 转自适应码流（仅 HLS）后，分片文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`。
         * @type {string || null}
         */
        this.SegmentObjectName = null;

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
        this.SubStreamObjectName = 'SubStreamObjectName' in params ? params.SubStreamObjectName : null;
        this.SegmentObjectName = 'SegmentObjectName' in params ? params.SegmentObjectName : null;

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
 * 任务的事件通知配置。
 * @class
 */
class TaskNotifyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ或TDMQ-CMQ 的模型，有 Queue 和 Topic 两种。
         * @type {string || null}
         */
        this.CmqModel = null;

        /**
         * CMQ或TDMQ-CMQ 的园区，如 sh，bj 等。
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的主题名。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的队列名。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。
         * @type {string || null}
         */
        this.NotifyMode = null;

        /**
         * 通知类型，可选值：
<li>CMQ：已下线，建议切换到TDMQ-CMQ</li>
<li>TDMQ-CMQ：消息队列</li>
<li>URL：指定URL时HTTP回调推送到 NotifyUrl 指定的地址，回调协议http+json，包体内容同解析事件通知接口的输出参数 </li>
<li>SCF：不推荐使用，需要在控制台额外配置SCF</li>
<font color="red"> 注：不填或为空时默认 CMQ，如需采用其他类型需填写对应类型值。 </font>
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * HTTP回调地址，NotifyType为URL时必填。
         * @type {string || null}
         */
        this.NotifyUrl = null;

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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.NotifyMode = 'NotifyMode' in params ? params.NotifyMode : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;

    }
}

/**
 * 人脸增强配置
 * @class
 */
class FaceEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 强度，取值范围：0.0~1.0。
默认：0.0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Intensity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Intensity = 'Intensity' in params ? params.Intensity : null;

    }
}

/**
 * 内容审核涉敏任务结果类型
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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 内容审核涉敏任务输入。
         * @type {AiReviewPoliticalTaskInput || null}
         */
        this.Input = null;

        /**
         * 内容审核涉敏任务输出。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * DescribeStreamLinkRegions请求参数结构体
 * @class
 */
class DescribeStreamLinkRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * ModifyStreamLinkInput返回参数结构体
 * @class
 */
class ModifyStreamLinkInputResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改后的Input信息。
         * @type {DescribeInput || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new DescribeInput();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<li>EditMediaTask：视频编辑任务。</li>
<li>LiveStreamProcessTask：直播流处理任务。</li>
<li>ScheduleTask：编排处理任务。</li>
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
         * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTask || null}
         */
        this.EditMediaTask = null;

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
         * 扩展信息字段，仅用于特定场景。
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * 编排处理任务信息，仅当 TaskType 为 ScheduleTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleTask || null}
         */
        this.ScheduleTask = null;

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

        if (params.EditMediaTask) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTask)
            this.EditMediaTask = obj;
        }

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
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;

        if (params.ScheduleTask) {
            let obj = new ScheduleTask();
            obj.deserialize(params.ScheduleTask)
            this.ScheduleTask = obj;
        }
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
<li>TransTextRecognition：语音翻译。</li>
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

        /**
         * 翻译结果，当Type 为 TransTextRecognition 时有效。
         * @type {Array.<LiveStreamTransTextRecognitionResult> || null}
         */
        this.TransTextRecognitionResultSet = null;

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

        if (params.TransTextRecognitionResultSet) {
            this.TransTextRecognitionResultSet = new Array();
            for (let z in params.TransTextRecognitionResultSet) {
                let obj = new LiveStreamTransTextRecognitionResult();
                obj.deserialize(params.TransTextRecognitionResultSet[z]);
                this.TransTextRecognitionResultSet.push(obj);
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
 * 查询输入的RTMP配置信息。
 * @class
 */
class DescribeInputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTMP的推流路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * RTMP的推流StreamKey。
RTMP的推流地址拼接规则为：rtmp://Ip:1935/AppName/StreamKey
         * @type {string || null}
         */
        this.StreamKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.StreamKey = 'StreamKey' in params ? params.StreamKey : null;

    }
}

/**
 * 细节增强配置
 * @class
 */
class SharpEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 强度，取值范围：0.0~1.0。
默认：0.0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Intensity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Intensity = 'Intensity' in params ? params.Intensity : null;

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
 * 传输流的SRT质量数据。
 * @class
 */
class FlowSRTInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳，单位是秒。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 发送丢包率。
         * @type {number || null}
         */
        this.SendPacketLossRate = null;

        /**
         * 发送重传率。
         * @type {number || null}
         */
        this.SendRetransmissionRate = null;

        /**
         * 接收丢包率。
         * @type {number || null}
         */
        this.RecvPacketLossRate = null;

        /**
         * 接收重传率。
         * @type {number || null}
         */
        this.RecvRetransmissionRate = null;

        /**
         * 与对端的RTT时延。
         * @type {number || null}
         */
        this.RTT = null;

        /**
         * 标志同一次推流。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 发送弃包数。
         * @type {number || null}
         */
        this.SendPacketDropNumber = null;

        /**
         * 接收弃包数。
         * @type {number || null}
         */
        this.RecvPacketDropNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.SendPacketLossRate = 'SendPacketLossRate' in params ? params.SendPacketLossRate : null;
        this.SendRetransmissionRate = 'SendRetransmissionRate' in params ? params.SendRetransmissionRate : null;
        this.RecvPacketLossRate = 'RecvPacketLossRate' in params ? params.RecvPacketLossRate : null;
        this.RecvRetransmissionRate = 'RecvRetransmissionRate' in params ? params.RecvRetransmissionRate : null;
        this.RTT = 'RTT' in params ? params.RTT : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SendPacketDropNumber = 'SendPacketDropNumber' in params ? params.SendPacketDropNumber : null;
        this.RecvPacketDropNumber = 'RecvPacketDropNumber' in params ? params.RecvPacketDropNumber : null;

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
         * 符合过滤条件的记录总数。
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

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskSimpleInfo();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询输出的SRT配置信息。
 * @class
 */
class DescribeOutputSRTSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转推的目标的地址信息列表，SRT模式为CALLER时使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SRTAddressDestination> || null}
         */
        this.Destinations = null;

        /**
         * 流Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 延迟。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Latency = null;

        /**
         * 接收延迟。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecvLatency = null;

        /**
         * 对端延迟。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PeerLatency = null;

        /**
         * 对端空闲超时时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PeerIdleTimeout = null;

        /**
         * 加密密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Passphrase = null;

        /**
         * 加密密钥长度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PbKeyLen = null;

        /**
         * SRT模式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 服务器监听地址，SRT模式为LISTENER时使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OutputSRTSourceAddressResp> || null}
         */
        this.SourceAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new SRTAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Latency = 'Latency' in params ? params.Latency : null;
        this.RecvLatency = 'RecvLatency' in params ? params.RecvLatency : null;
        this.PeerLatency = 'PeerLatency' in params ? params.PeerLatency : null;
        this.PeerIdleTimeout = 'PeerIdleTimeout' in params ? params.PeerIdleTimeout : null;
        this.Passphrase = 'Passphrase' in params ? params.Passphrase : null;
        this.PbKeyLen = 'PbKeyLen' in params ? params.PbKeyLen : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.SourceAddresses) {
            this.SourceAddresses = new Array();
            for (let z in params.SourceAddresses) {
                let obj = new OutputSRTSourceAddressResp();
                obj.deserialize(params.SourceAddresses[z]);
                this.SourceAddresses.push(obj);
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
 * 涉敏信息
 * @class
 */
class AiReviewPoliticalTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频涉敏评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频涉敏结果标签。内容审核模板[画面涉敏任务控制参数](https://cloud.tencent.com/document/api/862/37615#AiReviewPoliticalTaskOutput)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：
<li>politician：涉敏人物。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉敏嫌疑的视频片段列表。
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
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 翻译结果。
 * @class
 */
class AiRecognitionTaskTransTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 翻译片段列表。
         * @type {Array.<AiRecognitionTaskTransTextSegmentItem> || null}
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
                let obj = new AiRecognitionTaskTransTextSegmentItem();
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
         * 图片格式，取值可以为 jpg、png、webp。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

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
<li>ImageTerrorism：图片涉敏</li>
<li>ImagePolitical：图片涉敏</li>
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
         * 图片涉敏的结果，当 Type 为 ImageTerrorism 时有效。
         * @type {Array.<LiveStreamAiReviewImageTerrorismResult> || null}
         */
        this.ImageTerrorismResultSet = null;

        /**
         * 图片涉敏的结果，当 Type 为 ImagePolitical 时有效。
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
 * 创建输入的RTP配置信息。
 * @class
 */
class CreateInputRTPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认为“none”，可选值['none']。
         * @type {string || null}
         */
        this.FEC = null;

        /**
         * 空闲超时时间，默认5000，单位ms，范围为[1000, 10000]。
         * @type {number || null}
         */
        this.IdleTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FEC = 'FEC' in params ? params.FEC : null;
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;

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
<li> EditMediaTask：视频编辑任务；</li>
<li> LiveProcessTask：直播处理任务。</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 子任务类型。
         * @type {Array.<string> || null}
         */
        this.SubTaskTypes = null;

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
        this.SubTaskTypes = 'SubTaskTypes' in params ? params.SubTaskTypes : null;

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

        /**
         * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColorPrimaries = null;

        /**
         * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColorSpace = null;

        /**
         * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ColorTransfer = null;

        /**
         * HDR类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HdrType = null;

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
        this.ColorPrimaries = 'ColorPrimaries' in params ? params.ColorPrimaries : null;
        this.ColorSpace = 'ColorSpace' in params ? params.ColorSpace : null;
        this.ColorTransfer = 'ColorTransfer' in params ? params.ColorTransfer : null;
        this.HdrType = 'HdrType' in params ? params.HdrType : null;

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 文本违禁任务控制参数
 * @class
 */
class ProhibitedOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本违禁任务开关，可选值：
<li>ON：开启文本违禁任务；</li>
<li>OFF：关闭文本违禁任务。</li>
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
<li>politician：敏感人物。</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 100 个，每个标签长度最多 16 个字符。
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
 * 创建输入的配置信息。
 * @class
 */
class CreateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入名称，可填大小写、数字和下划线，长度为[1, 32]。
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * 输入的协议，可选[SRT|RTP|RTMP|RTMP_PULL]。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 输入描述，长度为[0, 255]。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 输入的IP白名单，格式为CIDR。
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * 输入的SRT配置信息。
         * @type {CreateInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * 输入的RTP配置信息。
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * 输入的主备开关，可选[OPEN|CLOSE]，默认为CLOSE。
         * @type {string || null}
         */
        this.FailOver = null;

        /**
         * 输入的RTMP_PULL配置信息。
         * @type {CreateInputRTMPPullSettings || null}
         */
        this.RTMPPullSettings = null;

        /**
         * 输入的RTSP_PULL配置信息。
         * @type {CreateInputRTSPPullSettings || null}
         */
        this.RTSPPullSettings = null;

        /**
         * 输入的HLS_PULL配置信息。
         * @type {CreateInputHLSPullSettings || null}
         */
        this.HLSPullSettings = null;

        /**
         * 延播平滑吐流配置信息。
         * @type {ResilientStreamConf || null}
         */
        this.ResilientStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new CreateInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

        if (params.RTMPPullSettings) {
            let obj = new CreateInputRTMPPullSettings();
            obj.deserialize(params.RTMPPullSettings)
            this.RTMPPullSettings = obj;
        }

        if (params.RTSPPullSettings) {
            let obj = new CreateInputRTSPPullSettings();
            obj.deserialize(params.RTSPPullSettings)
            this.RTSPPullSettings = obj;
        }

        if (params.HLSPullSettings) {
            let obj = new CreateInputHLSPullSettings();
            obj.deserialize(params.HLSPullSettings)
            this.HLSPullSettings = obj;
        }

        if (params.ResilientStream) {
            let obj = new ResilientStreamConf();
            obj.deserialize(params.ResilientStream)
            this.ResilientStream = obj;
        }

    }
}

/**
 * 内容审核涉敏任务输入参数类型
 * @class
 */
class AiReviewTerrorismTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID。
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

        /**
         * 音频声道数，例如 2。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Channel = null;

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
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * 直播 AI 内容审核图片涉敏结果
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
         * 嫌疑片段涉敏分数。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段涉敏结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频涉敏结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：涉敏旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：涉敏人物。</li>
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
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 图片格式，取值可以为 jpg、png、webp。
         * @type {string || null}
         */
        this.Format = null;

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
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴违禁任务输入参数类型
 * @class
 */
class AiReviewProhibitedOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴违禁模板 ID。
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
 * DescribeWordSamples请求参数结构体
 * @class
 */
class DescribeWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词过滤条件，数组长度限制：100 个词。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * <b>关键词应用场景过滤条件，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过音频识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行不适宜内容的识别；
4. Review.Asr：通过音频识别技术，进行不适宜内容的识别；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容的识别，等价于 3+4；
可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。
         * @type {Array.<string> || null}
         */
        this.Usages = null;

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
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Usages = 'Usages' in params ? params.Usages : null;
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
 * 查询Flow的配置信息。
 * @class
 */
class DescribeFlow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.FlowName = null;

        /**
         * 流状态，目前有IDLE/RUNNING。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 最大带宽值。
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 输入组。
         * @type {Array.<DescribeInput> || null}
         */
        this.InputGroup = null;

        /**
         * 输出组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeOutput> || null}
         */
        this.OutputGroup = null;

        /**
         * 该Flow关联的媒体传输事件EventId。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 媒体传输输入流所属的区域，取值和InputRegion相同。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.FlowName = 'FlowName' in params ? params.FlowName : null;
        this.State = 'State' in params ? params.State : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

        if (params.InputGroup) {
            this.InputGroup = new Array();
            for (let z in params.InputGroup) {
                let obj = new DescribeInput();
                obj.deserialize(params.InputGroup[z]);
                this.InputGroup.push(obj);
            }
        }

        if (params.OutputGroup) {
            this.OutputGroup = new Array();
            for (let z in params.OutputGroup) {
                let obj = new DescribeOutput();
                obj.deserialize(params.OutputGroup[z]);
                this.OutputGroup.push(obj);
            }
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Region = 'Region' in params ? params.Region : null;

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
 * DescribeMediaMetaData返回参数结构体
 * @class
 */
class DescribeMediaMetaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体元信息。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

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

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamLinkFlowRealtimeStatus返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowRealtimeStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询时间，单位s。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 实时数据信息列表。
         * @type {Array.<FlowRealtimeStatusItem> || null}
         */
        this.Datas = null;

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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

        if (params.Datas) {
            this.Datas = new Array();
            for (let z in params.Datas) {
                let obj = new FlowRealtimeStatusItem();
                obj.deserialize(params.Datas[z]);
                this.Datas.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 画面涉敏任务控制参数
 * @class
 */
class TerrorismImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：涉敏旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：涉敏人物；</li>
<li>scenario：涉敏画面。</li>
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
 * 传输流媒体的音频数据。
 * @class
 */
class FlowMediaAudio extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帧率。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 码率，单位是bps。
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 音频Pid。
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 标志同一次推流。
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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

        /**
         * 模板类型（替换旧版本 TEHDType），可选值：
<li>Common：普通转码模板；</li>
<li>TEHD：极速高清模板。</li>
<li>Enhance：音视频增强模板。</li>
默认空，不限制类型。
         * @type {string || null}
         */
        this.TranscodeType = null;

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
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;

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
 * 涉敏任务控制参数。
 * @class
 */
class PoliticalConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏控制参数。
         * @type {PoliticalImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音涉敏控制参数。
         * @type {PoliticalAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本涉敏控制参数。
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
 * DescribeStreamLinkFlowLogs请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流Id。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 输入或输出类型，可选[input|output]。
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 主通道或备通道，可选[0|1]。
         * @type {Array.<string> || null}
         */
        this.Pipeline = null;

        /**
         * 每页大小，默认100，范围为[1, 1000]。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 按Timestamp升序或降序排序，默认降序，可选[desc|asc]。
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * 页码，默认1，范围为[1, 1000]。
         * @type {number || null}
         */
        this.PageNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;

    }
}

/**
 * 查询输出的RTMP配置信息。
 * @class
 */
class DescribeOutputRTMPSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空闲超时时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdleTimeout = null;

        /**
         * Chunk大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChunkSize = null;

        /**
         * 转推RTMP的目标地址信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RTMPAddressDestination> || null}
         */
        this.Destinations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdleTimeout = 'IdleTimeout' in params ? params.IdleTimeout : null;
        this.ChunkSize = 'ChunkSize' in params ? params.ChunkSize : null;

        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new RTMPAddressDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }

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
 * ExecuteFunction请求参数结构体
 * @class
 */
class ExecuteFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用后端接口名称。
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 接口参数，具体参数格式调用时与后端协调。
         * @type {string || null}
         */
        this.FunctionArg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionArg = 'FunctionArg' in params ? params.FunctionArg : null;

    }
}

/**
 * DescribeStreamLinkFlowLogs返回参数结构体
 * @class
 */
class DescribeStreamLinkFlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志信息列表。
         * @type {Array.<FlowLogInfo> || null}
         */
        this.Infos = null;

        /**
         * 当前页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总数量。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

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

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new FlowLogInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.TotalPage = 'TotalPage' in params ? params.TotalPage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 素材信息。
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * 处理失败的五官信息。
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
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/862/37042)。
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
         * 素材信息。
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
 * 修改输入信息的参数。
 * @class
 */
class ModifyInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入Id。
         * @type {string || null}
         */
        this.InputId = null;

        /**
         * 输入名称。
         * @type {string || null}
         */
        this.InputName = null;

        /**
         * 输入描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 允许的推流的IP，CIDR格式。
         * @type {Array.<string> || null}
         */
        this.AllowIpList = null;

        /**
         * SRT的配置信息。
         * @type {CreateInputSRTSettings || null}
         */
        this.SRTSettings = null;

        /**
         * RTP的配置信息。
         * @type {CreateInputRTPSettings || null}
         */
        this.RTPSettings = null;

        /**
         * 输入的协议，可选[SRT|RTP|RTMP]。
当输出包含RTP时，输入只能是RTP。
当输出包含RTMP时，输入可以是SRT/RTMP。
当输出包含SRT时，输入只能是SRT。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 输入的主备开关，可选[OPEN|CLOSE]。
         * @type {string || null}
         */
        this.FailOver = null;

        /**
         * RTMP_PULL的配置信息。
         * @type {CreateInputRTMPPullSettings || null}
         */
        this.RTMPPullSettings = null;

        /**
         * RTSP_PULL的配置信息。
         * @type {CreateInputRTSPPullSettings || null}
         */
        this.RTSPPullSettings = null;

        /**
         * HLS_PULL的配置信息。
         * @type {CreateInputHLSPullSettings || null}
         */
        this.HLSPullSettings = null;

        /**
         * 延播平滑吐流配置信息。
         * @type {ResilientStreamConf || null}
         */
        this.ResilientStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputId = 'InputId' in params ? params.InputId : null;
        this.InputName = 'InputName' in params ? params.InputName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AllowIpList = 'AllowIpList' in params ? params.AllowIpList : null;

        if (params.SRTSettings) {
            let obj = new CreateInputSRTSettings();
            obj.deserialize(params.SRTSettings)
            this.SRTSettings = obj;
        }

        if (params.RTPSettings) {
            let obj = new CreateInputRTPSettings();
            obj.deserialize(params.RTPSettings)
            this.RTPSettings = obj;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.FailOver = 'FailOver' in params ? params.FailOver : null;

        if (params.RTMPPullSettings) {
            let obj = new CreateInputRTMPPullSettings();
            obj.deserialize(params.RTMPPullSettings)
            this.RTMPPullSettings = obj;
        }

        if (params.RTSPPullSettings) {
            let obj = new CreateInputRTSPPullSettings();
            obj.deserialize(params.RTSPPullSettings)
            this.RTSPPullSettings = obj;
        }

        if (params.HLSPullSettings) {
            let obj = new CreateInputHLSPullSettings();
            obj.deserialize(params.HLSPullSettings)
            this.HLSPullSettings = obj;
        }

        if (params.ResilientStream) {
            let obj = new ResilientStreamConf();
            obj.deserialize(params.ResilientStream)
            this.ResilientStream = obj;
        }

    }
}

/**
 * 视频降噪配置
 * @class
 */
class VideoDenoiseConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>weak</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * CreateSnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图模板名称，长度限制：64 个字符。
         * @type {string || null}
         */
        this.Name = null;

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
         * 图片格式，取值可以为 jpg、png、webp。默认为 jpg。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * CreateSampleSnapshotTemplate请求参数结构体
 * @class
 */
class CreateSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 图片格式，取值为 jpg、png、webp。默认为 jpg。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         * @type {string || null}
         */
        this.Comment = null;

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
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 媒体处理任务信息
 * @class
 */
class WorkflowTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体处理任务 ID。
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
         * 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 媒体处理的目标文件信息。
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
         * 媒体处理任务的执行状态与结果。
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
 * 传输流媒体的视频数据。
 * @class
 */
class FlowMediaVideo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帧率。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 码率，单位是bps。
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 视频Pid。
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 标志同一次推流。
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
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
 * 编辑点播视频文件信息
 * @class
 */
class EditMediaFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频的输入信息。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 视频剪辑的起始时间偏移，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 视频剪辑的结束时间偏移，单位：秒。
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

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 媒体处理 URL 对象信息。
 * @class
 */
class UrlInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频的 URL。
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
        this.Url = 'Url' in params ? params.Url : null;

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
<li>politician：敏感人物。</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 100 个，每个标签长度最多 16 个字符。
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
 * 编辑视频任务信息
 * @class
 */
class EditMediaTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 视频编辑任务的输入。
         * @type {EditMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * 视频编辑任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTaskOutput || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new EditMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new EditMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
 * Ocr 文字敏感信息
 * @class
 */
class AiReviewPoliticalOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ocr 文字敏感评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有敏感嫌疑的视频片段列表。
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
 * 编排子任务输出
 * @class
 */
class ActivityResItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskTranscodeResult || null}
         */
        this.TranscodeTask = null;

        /**
         * 转动图任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskAnimatedGraphicResult || null}
         */
        this.AnimatedGraphicTask = null;

        /**
         * 时间点截图任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * 采样截图任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SampleSnapshotTask = null;

        /**
         * 雪碧图任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskImageSpriteResult || null}
         */
        this.ImageSpriteTask = null;

        /**
         * 自适应码流任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskAdaptiveDynamicStreamingResult || null}
         */
        this.AdaptiveDynamicStreamingTask = null;

        /**
         * 识别任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleRecognitionTaskResult || null}
         */
        this.RecognitionTask = null;

        /**
         * 审核任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleReviewTaskResult || null}
         */
        this.ReviewTask = null;

        /**
         * 分析任务输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleAnalysisTaskResult || null}
         */
        this.AnalysisTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
            let obj = new MediaProcessTaskSampleSnapshotResult();
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

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new MediaProcessTaskAdaptiveDynamicStreamingResult();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

        if (params.RecognitionTask) {
            let obj = new ScheduleRecognitionTaskResult();
            obj.deserialize(params.RecognitionTask)
            this.RecognitionTask = obj;
        }

        if (params.ReviewTask) {
            let obj = new ScheduleReviewTaskResult();
            obj.deserialize(params.ReviewTask)
            this.ReviewTask = obj;
        }

        if (params.AnalysisTask) {
            let obj = new ScheduleAnalysisTaskResult();
            obj.deserialize(params.AnalysisTask)
            this.AnalysisTask = obj;
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
 * 涉敏任务控制参数
 * @class
 */
class TerrorismConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面涉敏任务控制参数。
         * @type {TerrorismImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 文本涉敏任务控制参数。
         * @type {TerrorismOcrReviewTemplateInfo || null}
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
            let obj = new TerrorismImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 语音涉敏任务控制参数
 * @class
 */
class PoliticalAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音涉敏任务开关，可选值：
<li>ON：开启语音涉敏任务；</li>
<li>OFF：关闭语音涉敏任务。</li>
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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
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
 * 创建的输入RTSP拉流源站配置信息。
 * @class
 */
class RTSPPullSourceAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTSP源站的Url地址。
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
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 查询输入的HLS配置信息。
 * @class
 */
class DescribeHLSPullSourceAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * HLS源站的Url地址。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;

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
         * 雪碧图子图位置与时间关系的 WebVtt 文件路径。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
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
 * DescribePersonSamples请求参数结构体
 * @class
 */
class DescribePersonSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取的素材类型，可选值：
<li>UserDefine：用户自定义素材库；</li>
<li>Default：系统默认素材库。</li>

默认值：UserDefine，拉取用户自定义素材库素材。
说明：如果是拉取系统默认素材库，只能使用素材名字或者素材 ID + 素材名字的方式进行拉取，且人脸图片只返回一张。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 素材 ID，数组长度限制：100。
         * @type {Array.<string> || null}
         */
        this.PersonIds = null;

        /**
         * 素材名称，数组长度限制：20。
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 素材标签，数组长度限制：20。
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

        /**
         * 人物性别：
<li>Male：男性；</li>
<li>Female：女性。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 人物出生日期。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * 人物职业或者职务。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Profession = null;

        /**
         * 人物毕业院校。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchoolOfGraduation = null;

        /**
         * 人物简介。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Abstract = null;

        /**
         * 人物出生地或者籍贯。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlaceOfBirth = null;

        /**
         * 人物类型：
<li>Politician：官员；</li>
<li>Artist：艺人。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PersonType = null;

        /**
         * 敏感度标注：
<li>Normal：正常；</li>
<li>Sensitive：敏感。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 截图链接
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Profession = 'Profession' in params ? params.Profession : null;
        this.SchoolOfGraduation = 'SchoolOfGraduation' in params ? params.SchoolOfGraduation : null;
        this.Abstract = 'Abstract' in params ? params.Abstract : null;
        this.PlaceOfBirth = 'PlaceOfBirth' in params ? params.PlaceOfBirth : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeStreamLinkFlowMediaStatistics请求参数结构体
 * @class
 */
class DescribeStreamLinkFlowMediaStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传输流ID。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 输入或输出类型，可选[input|output]。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 输入或输出Id。
         * @type {string || null}
         */
        this.InputOutputId = null;

        /**
         * 主通道或备通道，可选[0|1]。
         * @type {string || null}
         */
        this.Pipeline = null;

        /**
         * 查询间隔，可选[5s|1min|5min|15min]。
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InputOutputId = 'InputOutputId' in params ? params.InputOutputId : null;
        this.Pipeline = 'Pipeline' in params ? params.Pipeline : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * 地区信息。
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地区名称。
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
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 翻译结果。
 * @class
 */
class AiRecognitionTaskTransTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 翻译任务输入信息。
         * @type {AiRecognitionTaskTransTextResultInput || null}
         */
        this.Input = null;

        /**
         * 翻译任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskTransTextResultOutput || null}
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
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskTransTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskTransTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 编辑视频任务的输出
 * @class
 */
class EditMediaTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑后文件的目标存储。
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * 编辑后的视频文件路径。
         * @type {string || null}
         */
        this.Path = null;

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
 * 延播平滑吐流配置。
 * @class
 */
class ResilientStreamConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启延播平滑吐流，true开启，false不开启，默认不开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 延播时间，单位秒，目前支持的范围为10~300秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BufferTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.BufferTime = 'BufferTime' in params ? params.BufferTime : null;

    }
}

/**
 * 查询输出的RTSP拉流URL信息。
 * @class
 */
class DescribeOutputRTSPPullServerUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * RTSP拉流地址的Url。
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
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 低光照增强配置
 * @class
 */
class LowLightEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 类型，可选值：
<li>normal</li>
默认值：normal。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeMediaMetaData请求参数结构体
 * @class
 */
class DescribeMediaMetaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取元信息的文件输入信息。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

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

        /**
         * 模板类型过滤条件，不填则返回所有，可选值：
* Preset：系统预置模板；
* Custom：用户自定义模板。
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
 * 翻译片段。
 * @class
 */
class AiRecognitionTaskTransTextSegmentItem extends  AbstractModel {
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

        /**
         * 翻译文本。
         * @type {string || null}
         */
        this.Trans = null;

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
        this.Trans = 'Trans' in params ? params.Trans : null;

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
<li>OcrFullTextRecognition：文本全文识别。</li>
<li>TransTextRecognition：语音翻译。</li>
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

        /**
         * 翻译结果，当 Type 为
 TransTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskTransTextResult || null}
         */
        this.TransTextTask = null;

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

        if (params.TransTextTask) {
            let obj = new AiRecognitionTaskTransTextResult();
            obj.deserialize(params.TransTextTask)
            this.TransTextTask = obj;
        }

    }
}

module.exports = {
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    ModifySampleSnapshotTemplateResponse: ModifySampleSnapshotTemplateResponse,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    DescribeInputRTPSettings: DescribeInputRTPSettings,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    DeleteStreamLinkFlowRequest: DeleteStreamLinkFlowRequest,
    FrameRateConfig: FrameRateConfig,
    OverrideTranscodeParameter: OverrideTranscodeParameter,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    SvgWatermarkInput: SvgWatermarkInput,
    WorkflowInfo: WorkflowInfo,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    ProcessLiveStreamResponse: ProcessLiveStreamResponse,
    CreateOutputSRTSettings: CreateOutputSRTSettings,
    ModifyStreamLinkOutputInfoResponse: ModifyStreamLinkOutputInfoResponse,
    DescribeAnimatedGraphicsTemplatesRequest: DescribeAnimatedGraphicsTemplatesRequest,
    AiReviewTaskProhibitedAsrResult: AiReviewTaskProhibitedAsrResult,
    AdaptiveDynamicStreamingTemplate: AdaptiveDynamicStreamingTemplate,
    DeleteAnimatedGraphicsTemplateResponse: DeleteAnimatedGraphicsTemplateResponse,
    AiReviewTaskProhibitedOcrResult: AiReviewTaskProhibitedOcrResult,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    AiReviewProhibitedOcrTaskOutput: AiReviewProhibitedOcrTaskOutput,
    ManageTaskResponse: ManageTaskResponse,
    FlowMediaInfo: FlowMediaInfo,
    DeleteWorkflowRequest: DeleteWorkflowRequest,
    DescribeRTMPPullSourceAddress: DescribeRTMPPullSourceAddress,
    DescribeOutputRTMPPullSettings: DescribeOutputRTMPPullSettings,
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    ModifyOutputInfo: ModifyOutputInfo,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    NumberFormat: NumberFormat,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    EnhanceConfig: EnhanceConfig,
    MediaInputInfo: MediaInputInfo,
    CreateWorkflowRequest: CreateWorkflowRequest,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    RawWatermarkParameter: RawWatermarkParameter,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    ManageTaskRequest: ManageTaskRequest,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    CreateInputHLSPullSettings: CreateInputHLSPullSettings,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    ModifyStreamLinkFlowResponse: ModifyStreamLinkFlowResponse,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    VideoEnhanceConfig: VideoEnhanceConfig,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    StartStreamLinkFlowResponse: StartStreamLinkFlowResponse,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    CreateOutputRTPSettingsDestinations: CreateOutputRTPSettingsDestinations,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    SuperResolutionConfig: SuperResolutionConfig,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    DescribeStreamLinkFlowsResponse: DescribeStreamLinkFlowsResponse,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    AiContentReviewResult: AiContentReviewResult,
    ParseLiveStreamProcessNotificationResponse: ParseLiveStreamProcessNotificationResponse,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AudioTemplateInfo: AudioTemplateInfo,
    ExecuteFunctionResponse: ExecuteFunctionResponse,
    CoverConfigureInfo: CoverConfigureInfo,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    CreateAdaptiveDynamicStreamingTemplateRequest: CreateAdaptiveDynamicStreamingTemplateRequest,
    CreateInputRTMPPullSettings: CreateInputRTMPPullSettings,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    ModifyStreamLinkFlowRequest: ModifyStreamLinkFlowRequest,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    AiReviewTerrorismOcrTaskInput: AiReviewTerrorismOcrTaskInput,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    DeleteWorkflowResponse: DeleteWorkflowResponse,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    HdrConfig: HdrConfig,
    ScheduleTask: ScheduleTask,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    DescribeOutputHLSPullServerUrl: DescribeOutputHLSPullServerUrl,
    DescribeStreamLinkFlowSRTStatisticsRequest: DescribeStreamLinkFlowSRTStatisticsRequest,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    CosInputInfo: CosInputInfo,
    TagConfigureInfo: TagConfigureInfo,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    FlowStatisticsArray: FlowStatisticsArray,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    DescribeInputSRTSettings: DescribeInputSRTSettings,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    EnableWorkflowRequest: EnableWorkflowRequest,
    CreateStreamLinkFlowResponse: CreateStreamLinkFlowResponse,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    SRTAddressDestination: SRTAddressDestination,
    FlowRealtimeStatusItem: FlowRealtimeStatusItem,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    EditMediaTaskInput: EditMediaTaskInput,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    AiSampleFaceInfo: AiSampleFaceInfo,
    CreateInputRTSPPullSettings: CreateInputRTSPPullSettings,
    CreateStreamLinkFlowRequest: CreateStreamLinkFlowRequest,
    CreateOutputSRTSettingsDestinations: CreateOutputSRTSettingsDestinations,
    RecognizeMediaForZhiXueRequest: RecognizeMediaForZhiXueRequest,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    ScratchRepairConfig: ScratchRepairConfig,
    LiveStreamAiReviewResultInfo: LiveStreamAiReviewResultInfo,
    EditMediaResponse: EditMediaResponse,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    CreateOutputRtmpSettingsDestinations: CreateOutputRtmpSettingsDestinations,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    ScheduleRecognitionTaskResult: ScheduleRecognitionTaskResult,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    DescribeInputRTMPPullSettings: DescribeInputRTMPPullSettings,
    MediaProcessTaskInput: MediaProcessTaskInput,
    RTMPPullSourceAddress: RTMPPullSourceAddress,
    CosOutputStorage: CosOutputStorage,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    ProcessMediaResponse: ProcessMediaResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    DeleteAdaptiveDynamicStreamingTemplateResponse: DeleteAdaptiveDynamicStreamingTemplateResponse,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    ParseNotificationRequest: ParseNotificationRequest,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    DescribeStreamLinkFlowStatisticsRequest: DescribeStreamLinkFlowStatisticsRequest,
    AiSampleFaceOperation: AiSampleFaceOperation,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiReviewTaskTerrorismOcrResult: AiReviewTaskTerrorismOcrResult,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    ProhibitedAsrReviewTemplateInfoForUpdate: ProhibitedAsrReviewTemplateInfoForUpdate,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    DeleteAdaptiveDynamicStreamingTemplateRequest: DeleteAdaptiveDynamicStreamingTemplateRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    EditMediaOutputConfig: EditMediaOutputConfig,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    EditMediaRequest: EditMediaRequest,
    CreateStreamLinkOutputInfoResponse: CreateStreamLinkOutputInfoResponse,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    RTPAddressDestination: RTPAddressDestination,
    DescribeAdaptiveDynamicStreamingTemplatesResponse: DescribeAdaptiveDynamicStreamingTemplatesResponse,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    StopStreamLinkFlowRequest: StopStreamLinkFlowRequest,
    DescribeAdaptiveDynamicStreamingTemplatesRequest: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    ImageWatermarkInput: ImageWatermarkInput,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    ProhibitedConfigureInfoForUpdate: ProhibitedConfigureInfoForUpdate,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    DescribeInputRTSPPullSettings: DescribeInputRTSPPullSettings,
    RawTranscodeParameter: RawTranscodeParameter,
    LiveStreamTaskNotifyConfig: LiveStreamTaskNotifyConfig,
    VideoTemplateInfo: VideoTemplateInfo,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    CreateOutputInfo: CreateOutputInfo,
    TaskOutputStorage: TaskOutputStorage,
    FlowLogInfo: FlowLogInfo,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    ColorEnhanceConfig: ColorEnhanceConfig,
    DescribeOutputRTPSettings: DescribeOutputRTPSettings,
    DeleteStreamLinkOutputResponse: DeleteStreamLinkOutputResponse,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    ModifyAdaptiveDynamicStreamingTemplateRequest: ModifyAdaptiveDynamicStreamingTemplateRequest,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    RTMPAddressDestination: RTMPAddressDestination,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    SRTSourceAddressReq: SRTSourceAddressReq,
    ProcessMediaRequest: ProcessMediaRequest,
    DescribeRTSPPullSourceAddress: DescribeRTSPPullSourceAddress,
    DescribeOutputRTSPPullSettings: DescribeOutputRTSPPullSettings,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    DescribeOutputHLSPullSettings: DescribeOutputHLSPullSettings,
    AiRecognitionTaskTransTextResultInput: AiRecognitionTaskTransTextResultInput,
    ImageQualityEnhanceConfig: ImageQualityEnhanceConfig,
    DescribeStreamLinkRegionsResponse: DescribeStreamLinkRegionsResponse,
    AiSampleWord: AiSampleWord,
    DescribeStreamLinkFlowStatisticsResponse: DescribeStreamLinkFlowStatisticsResponse,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    LiveStreamOcrWordsRecognitionResult: LiveStreamOcrWordsRecognitionResult,
    LiveStreamProcessErrorInfo: LiveStreamProcessErrorInfo,
    ModifyAdaptiveDynamicStreamingTemplateResponse: ModifyAdaptiveDynamicStreamingTemplateResponse,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    ModifyStreamLinkOutputInfoRequest: ModifyStreamLinkOutputInfoRequest,
    LiveStreamAsrWordsRecognitionResult: LiveStreamAsrWordsRecognitionResult,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    RecognizeMediaForZhiXueResponse: RecognizeMediaForZhiXueResponse,
    AiSamplePerson: AiSamplePerson,
    FlowStatistics: FlowStatistics,
    CreateInputSRTSettings: CreateInputSRTSettings,
    FlowRealtimeStatusCommon: FlowRealtimeStatusCommon,
    DescribeWorkflowsResponse: DescribeWorkflowsResponse,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    DescribeStreamLinkActivateStateResponse: DescribeStreamLinkActivateStateResponse,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    DescribeStreamLinkFlowRequest: DescribeStreamLinkFlowRequest,
    CreateOutputRTMPSettings: CreateOutputRTMPSettings,
    WorkflowTrigger: WorkflowTrigger,
    HLSPullSourceAddress: HLSPullSourceAddress,
    LiveStreamAiRecognitionResultInfo: LiveStreamAiRecognitionResultInfo,
    LiveStreamAiReviewImagePoliticalResult: LiveStreamAiReviewImagePoliticalResult,
    TerrorismOcrReviewTemplateInfoForUpdate: TerrorismOcrReviewTemplateInfoForUpdate,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    ScheduleAnalysisTaskResult: ScheduleAnalysisTaskResult,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    OutputSRTSourceAddressResp: OutputSRTSourceAddressResp,
    StreamLinkRegionInfo: StreamLinkRegionInfo,
    FlowRealtimeStatusRTP: FlowRealtimeStatusRTP,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    OutputAddress: OutputAddress,
    MosaicInput: MosaicInput,
    DescribeStreamLinkActivateStateRequest: DescribeStreamLinkActivateStateRequest,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    HeadTailParameter: HeadTailParameter,
    RawImageWatermarkInput: RawImageWatermarkInput,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    AiSampleTagOperation: AiSampleTagOperation,
    SRTSourceAddressResp: SRTSourceAddressResp,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    DescribeInput: DescribeInput,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ProhibitedConfigureInfo: ProhibitedConfigureInfo,
    DescribeStreamLinkFlowSRTStatisticsResponse: DescribeStreamLinkFlowSRTStatisticsResponse,
    AiReviewTerrorismOcrTaskOutput: AiReviewTerrorismOcrTaskOutput,
    AiAnalysisResult: AiAnalysisResult,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    FlowVideo: FlowVideo,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    ResetWorkflowRequest: ResetWorkflowRequest,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    DescribeOutput: DescribeOutput,
    LiveStreamAiReviewVoicePornResult: LiveStreamAiReviewVoicePornResult,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    StartStreamLinkFlowRequest: StartStreamLinkFlowRequest,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    StopStreamLinkFlowResponse: StopStreamLinkFlowResponse,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    InputAddress: InputAddress,
    CreateAdaptiveDynamicStreamingTemplateResponse: CreateAdaptiveDynamicStreamingTemplateResponse,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    DeleteStreamLinkFlowResponse: DeleteStreamLinkFlowResponse,
    LiveStreamAsrFullTextRecognitionResult: LiveStreamAsrFullTextRecognitionResult,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    ProhibitedAsrReviewTemplateInfo: ProhibitedAsrReviewTemplateInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    ActionConfigInfo: ActionConfigInfo,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    TranscodeTemplate: TranscodeTemplate,
    DescribeStreamLinkFlowMediaStatisticsResponse: DescribeStreamLinkFlowMediaStatisticsResponse,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    CreateOutputInfoRTPSettings: CreateOutputInfoRTPSettings,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    SubtitleTemplate: SubtitleTemplate,
    LiveStreamProcessTask: LiveStreamProcessTask,
    AiReviewProhibitedAsrTaskInput: AiReviewProhibitedAsrTaskInput,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TerrorismOcrReviewTemplateInfo: TerrorismOcrReviewTemplateInfo,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    DescribeStreamLinkFlowRealtimeStatusRequest: DescribeStreamLinkFlowRealtimeStatusRequest,
    AiReviewProhibitedAsrTaskOutput: AiReviewProhibitedAsrTaskOutput,
    LiveStreamFaceRecognitionResult: LiveStreamFaceRecognitionResult,
    FlowAudio: FlowAudio,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    DisableWorkflowResponse: DisableWorkflowResponse,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    FlowRealtimeStatusRTMP: FlowRealtimeStatusRTMP,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    AdaptiveStreamTemplate: AdaptiveStreamTemplate,
    TranscodeTaskInput: TranscodeTaskInput,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    ParseNotificationResponse: ParseNotificationResponse,
    ActivityResult: ActivityResult,
    DescribeInputHLSPullSettings: DescribeInputHLSPullSettings,
    ResetWorkflowResponse: ResetWorkflowResponse,
    DescribeStreamLinkFlowsRequest: DescribeStreamLinkFlowsRequest,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    CosFileUploadTrigger: CosFileUploadTrigger,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    FlowRealtimeStatusSRT: FlowRealtimeStatusSRT,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    DeleteStreamLinkOutputRequest: DeleteStreamLinkOutputRequest,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    ArtifactRepairConfig: ArtifactRepairConfig,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    DescribeStreamLinkFlowResponse: DescribeStreamLinkFlowResponse,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    CreateWorkflowResponse: CreateWorkflowResponse,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    DescribeOutputRTMPPullServerUrl: DescribeOutputRTMPPullServerUrl,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    LiveStreamTransTextRecognitionResult: LiveStreamTransTextRecognitionResult,
    WatermarkInput: WatermarkInput,
    EnableWorkflowResponse: EnableWorkflowResponse,
    AiSampleWordInfo: AiSampleWordInfo,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    CreateStreamLinkOutputInfoRequest: CreateStreamLinkOutputInfoRequest,
    ProhibitedOcrReviewTemplateInfo: ProhibitedOcrReviewTemplateInfo,
    LiveStreamOcrFullTextRecognitionResult: LiveStreamOcrFullTextRecognitionResult,
    ModifyStreamLinkInputRequest: ModifyStreamLinkInputRequest,
    ScheduleReviewTaskResult: ScheduleReviewTaskResult,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    ExpressionConfigInfo: ExpressionConfigInfo,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    TaskNotifyConfig: TaskNotifyConfig,
    FaceEnhanceConfig: FaceEnhanceConfig,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    DescribeStreamLinkRegionsRequest: DescribeStreamLinkRegionsRequest,
    ModifyStreamLinkInputResponse: ModifyStreamLinkInputResponse,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    LiveStreamAiRecognitionResultItem: LiveStreamAiRecognitionResultItem,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    DescribeInputRTMPSettings: DescribeInputRTMPSettings,
    SharpEnhanceConfig: SharpEnhanceConfig,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    FlowSRTInfo: FlowSRTInfo,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeOutputSRTSettings: DescribeOutputSRTSettings,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    LiveStreamAiReviewImagePornResult: LiveStreamAiReviewImagePornResult,
    AiRecognitionTaskTransTextResultOutput: AiRecognitionTaskTransTextResultOutput,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    LiveStreamAiReviewResultItem: LiveStreamAiReviewResultItem,
    TEHDConfig: TEHDConfig,
    CreateInputRTPSettings: CreateInputRTPSettings,
    TaskSimpleInfo: TaskSimpleInfo,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    ProhibitedOcrReviewTemplateInfoForUpdate: ProhibitedOcrReviewTemplateInfoForUpdate,
    DescribeTasksRequest: DescribeTasksRequest,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    CreateInput: CreateInput,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    DescribeWorkflowsRequest: DescribeWorkflowsRequest,
    MediaAudioStreamItem: MediaAudioStreamItem,
    LiveStreamAiReviewImageTerrorismResult: LiveStreamAiReviewImageTerrorismResult,
    ProcessLiveStreamRequest: ProcessLiveStreamRequest,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    AiReviewProhibitedOcrTaskInput: AiReviewProhibitedOcrTaskInput,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    DescribeFlow: DescribeFlow,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    DescribeMediaMetaDataResponse: DescribeMediaMetaDataResponse,
    DescribeStreamLinkFlowRealtimeStatusResponse: DescribeStreamLinkFlowRealtimeStatusResponse,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    FlowMediaAudio: FlowMediaAudio,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    DisableWorkflowRequest: DisableWorkflowRequest,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    DescribeStreamLinkFlowLogsRequest: DescribeStreamLinkFlowLogsRequest,
    DescribeOutputRTMPSettings: DescribeOutputRTMPSettings,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ExecuteFunctionRequest: ExecuteFunctionRequest,
    DescribeStreamLinkFlowLogsResponse: DescribeStreamLinkFlowLogsResponse,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    MediaTranscodeItem: MediaTranscodeItem,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    PornConfigureInfo: PornConfigureInfo,
    ModifyInput: ModifyInput,
    VideoDenoiseConfig: VideoDenoiseConfig,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    ParseLiveStreamProcessNotificationRequest: ParseLiveStreamProcessNotificationRequest,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    WorkflowTask: WorkflowTask,
    FlowMediaVideo: FlowMediaVideo,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    EditMediaFileInfo: EditMediaFileInfo,
    UrlInputInfo: UrlInputInfo,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    ActivityResItem: ActivityResItem,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    RTSPPullSourceAddress: RTSPPullSourceAddress,
    DescribeHLSPullSourceAddress: DescribeHLSPullSourceAddress,
    MediaImageSpriteItem: MediaImageSpriteItem,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    DescribeStreamLinkFlowMediaStatisticsRequest: DescribeStreamLinkFlowMediaStatisticsRequest,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    RegionInfo: RegionInfo,
    AiRecognitionTaskTransTextResult: AiRecognitionTaskTransTextResult,
    EditMediaTaskOutput: EditMediaTaskOutput,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    ResilientStreamConf: ResilientStreamConf,
    DescribeOutputRTSPPullServerUrl: DescribeOutputRTSPPullServerUrl,
    LowLightEnhanceConfig: LowLightEnhanceConfig,
    DescribeMediaMetaDataRequest: DescribeMediaMetaDataRequest,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    CreateImageSpriteTemplateResponse: CreateImageSpriteTemplateResponse,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    AiRecognitionTaskTransTextSegmentItem: AiRecognitionTaskTransTextSegmentItem,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    AiRecognitionResult: AiRecognitionResult,

}
