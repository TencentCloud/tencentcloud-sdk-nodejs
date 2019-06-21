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
 * 画布信息。制作视频时，如果源素材（视频或者图片）不能填满输出的视频窗口，将用设置的画布进行背景绘制。
 * @class
 */
class Canvas extends  AbstractModel {
    constructor(){
        super();

        /**
         * 背景颜色，取值有：
<li>Black：黑色背景</li>
<li>White：白色背景</li>
默认值：Black。
         * @type {string || null}
         */
        this.Color = null;

        /**
         * 画布宽度，即输出视频的宽度，取值范围：0~ 4096，单位：px。
默认值：0，表示和第一个视频轨的第一个视频片段的视频宽度一致。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 画布高度，即输出视频的高度（或长边），取值范围：0~ 4096，单位：px。
默认值：0，表示和第一个视频轨的第一个视频片段的视频高度一致。
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
        this.Color = 'Color' in params ? params.Color : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

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
目前，当 Type 为 image，该字段仅支持 TopLeft。
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * DescribeAllClass请求参数结构体
 * @class
 */
class DescribeAllClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 转场操作
 * @class
 */
class TransitionOpertion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转场类型，取值有：
<ul>
<li>图像的转场操作，用于两个视频片段图像间的转场处理：
<ul>
<li>ImageFadeInFadeOut：图像淡入淡出。 </li>
<li>BowTieHorizontal：水平蝴蝶结。 </li>
<li>BowTieVertical：垂直蝴蝶结。 </li>
<li>ButterflyWaveScrawler：晃动。 </li>
<li>Cannabisleaf：枫叶。 </li>
<li>Circle：弧形收放。 </li>
<li>CircleCrop：圆环聚拢。 </li>
<li>Circleopen：椭圆聚拢。 </li>
<li>Crosswarp：横向翘曲。 </li>
<li>Cube：立方体。 </li>
<li>DoomScreenTransition：幕布。 </li>
<li>Doorway：门廊。 </li>
<li>Dreamy：波浪。 </li>
<li>DreamyZoom：水平聚拢。 </li>
<li>FilmBurn：火烧云。 </li>
<li>GlitchMemories：抖动。 </li>
<li>Heart：心形。 </li>
<li>InvertedPageCurl：翻页。 </li>
<li>Luma：腐蚀。 </li>
<li>Mosaic：九宫格。 </li>
<li>Pinwheel：风车。 </li>
<li>PolarFunction：椭圆扩散。 </li>
<li>PolkaDotsCurtain：弧形扩散。 </li>
<li>Radial：雷达扫描 </li>
<li>RotateScaleFade：上下收放。 </li>
<li>Squeeze：上下聚拢。 </li>
<li>Swap：放大切换。 </li>
<li>Swirl：螺旋。 </li>
<li>UndulatingBurnOutSwirl：水流蔓延。 </li>
<li>Windowblinds：百叶窗。 </li>
<li>WipeDown：向下收起。 </li>
<li>WipeLeft：向左收起。 </li>
<li>WipeRight：向右收起。 </li>
<li>WipeUp：向上收起。 </li>
<li>ZoomInCircles：水波纹。 </li>
</ul>
</li>
<li>音频的转场操作，用于两个音频片段间的转场处理：
<ul>
<li>AudioFadeInFadeOut：声音淡入淡出。 </li>
</ul>
</li>
</ul>
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 音频轨道上的音频片段信息。
 * @class
 */
class AudioTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频素材的媒体文件来源。可以是点播的文件 ID，也可以是其它文件的 URL。
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * 音频片段取自素材文件的起始时间，单位为秒。0 表示从素材开始位置截取。默认为0。
         * @type {number || null}
         */
        this.SourceMediaStartTime = null;

        /**
         * 音频片段的时长，单位为秒。默认和素材本身长度一致，表示截取全部素材。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 对音频片段进行的操作，如音量调节等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioTransform> || null}
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new AudioTransform();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

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
         * 字幕文件 Url。
         * @type {string || null}
         */
        this.SubtitleUrl = null;

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
        this.SubtitleUrl = 'SubtitleUrl' in params ? params.SubtitleUrl : null;

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
 * 要处理的源视频信息，视频名称、视频自定义 ID。
 * @class
 */
class MediaInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频 URL。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 视频名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频自定义 ID。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 视频截取雪碧图任务，该结构仅用于对 2017 版[截取雪碧图](https://cloud.tencent.com/document/product/266/8101)接口发起的任务。
 * @class
 */
class CreateImageSpriteTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 截图雪碧图任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 截取雪碧图文件 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 雪碧图规格，参见[雪碧图截图模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 雪碧图小图总数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 截取雪碧图输出的地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImageSpriteUrlSet = null;

        /**
         * 雪碧图子图位置与时间关系 WebVtt 文件地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebVttUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageSpriteUrlSet = 'ImageSpriteUrlSet' in params ? params.ImageSpriteUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

    }
}

/**
 * 临时凭证
 * @class
 */
class TempCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时安全证书 Id。
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * 临时安全证书 Key。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * Token 值。
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒。
         * @type {number || null}
         */
        this.ExpiredTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

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
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimePicInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该张截图对应视频文件中的时间偏移，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * 该张截图的 URL 地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 截图如果被打上了水印，被打水印的模板 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;
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
         * 鉴恐控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

        /**
         * 审核结果是否进入审核墙（对审核结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
         * @type {string || null}
         */
        this.ReviewWallSwitch = null;

        /**
         * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

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
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 音频操作
 * @class
 */
class AudioTransform extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频操作类型，取值有：
<li>Volume：音量调节。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 音量调节参数， 当 Type = Volume 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AudioVolumeParam || null}
         */
        this.VolumeParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VolumeParam) {
            let obj = new AudioVolumeParam();
            obj.deserialize(params.VolumeParam)
            this.VolumeParam = obj;
        }

    }
}

/**
 * ComposeMedia返回参数结构体
 * @class
 */
class ComposeMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 制作媒体文件的任务 ID，可以通过该 ID 查询制作任务（任务类型为 MakeMedia）的状态。
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
 * 音频流配置参数
 * @class
 */
class AudioTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的编码格式，可选值：
<li>libfdk_aac：更适合 mp4 和 hls；</li>
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 采样方式，取值范围：
<li>Percent：根据百分比间隔采样。</li>
<li>Time：根据时间间隔采样。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 采样间隔
<li>当 SampleType 为 Percent 时，该值表示多少百分比一张图。</li>
<li>当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 生成的截图 url 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

        /**
         * 截图如果被打上了水印，被打水印的模板 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

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
         * 音频流的编码格式，可选值：
<li>libfdk_aac：更适合 mp4 和 hls；</li>
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
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
 * ExecuteFunction返回参数结构体
 * @class
 */
class ExecuteFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理结果打包后的字符串，具体与后台一同协调。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ComposeMedia请求参数结构体
 * @class
 */
class ComposeMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息。输入的多个轨道在时间轴上和输出媒体文件的时间轴对齐，时间轴上相同时间点的各个轨道的素材进行重叠，视频或者图片按轨道顺序进行图像的叠加，轨道顺序高的素材叠加在上面；音频素材进行混音。
         * @type {Array.<MediaTrack> || null}
         */
        this.Tracks = null;

        /**
         * 输出的媒体文件信息。
         * @type {ComposeMediaOutput || null}
         */
        this.Output = null;

        /**
         * 制作视频文件时使用的画布。
         * @type {Canvas || null}
         */
        this.Canvas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

        if (params.Output) {
            let obj = new ComposeMediaOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
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
         * 头尾识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HeadTailConfigureInfo || null}
         */
        this.HeadTailConfigure = null;

        /**
         * 人脸识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

        /**
         * 物体识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ObjectConfigureInfo || null}
         */
        this.ObjectConfigure = null;

        /**
         * 截图时间间隔，单位：秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

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

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfo();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

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

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfo();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
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
 * 视频片头片尾识别的输入。
 * @class
 */
class AiRecognitionTaskHeadTailResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频片头片尾识别模板 ID。
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
 * PushUrlCache返回参数结构体
 * @class
 */
class PushUrlCacheResponse extends  AbstractModel {
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
 * 视频片头片尾识别任务控制参数
 * @class
 */
class HeadTailConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频片头片尾识别任务开关，可选值：
<li>ON：开启智能视频片头片尾识别任务；</li>
<li>OFF：关闭智能视频片头片尾识别任务。</li>
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
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（黑色）。
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
 * CreateProcedureTemplate请求参数结构体
 * @class
 */
class CreateProcedureTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流名字（支持中文，不超过20个字）。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频处理类型任务参数。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * AI 智能内容审核类型任务参数。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * AI 智能内容分析类型任务参数。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * AI 内容识别类型任务参数。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 转场信息
 * @class
 */
class MediaTransitionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转场持续时间，单位为秒。进行转场处理的两个媒体片段，第二个片段在轨道上的起始时间会自动进行调整，设置为前面一个片段的结束时间减去转场的持续时间。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 转场操作列表。图像转场操作和音频转场操作各自最多支持一个。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TransitionOpertion> || null}
         */
        this.Transitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Transitions) {
            this.Transitions = new Array();
            for (let z in params.Transitions) {
                let obj = new TransitionOpertion();
                obj.deserialize(params.Transitions[z]);
                this.Transitions.push(obj);
            }
        }

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
         * 智能封面地址。
         * @type {string || null}
         */
        this.CoverUrl = null;

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
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

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
 * 视频拼接任务信息，该结构仅用于对 2017 版[视频拼接](https://cloud.tencent.com/document/product/266/7821)接口发起的任务。
 * @class
 */
class ConcatTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频拼接任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 视频拼接源文件信息。
         * @type {Array.<ConcatFileInfo2017> || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new ConcatFileInfo2017();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 文件上传任务信息
 * @class
 */
class FileUploadTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件唯一 ID。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 上传完成后生成的媒体文件基础信息。
         * @type {MediaBasicInfo || null}
         */
        this.MediaBasicInfo = null;

        /**
         * 若视频上传时指定了视频处理流程，则该字段为流程任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaBasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.MediaBasicInfo)
            this.MediaBasicInfo = obj;
        }
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;

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
 * 文件删除任务
 * @class
 */
class FileDeleteTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除文件 ID 列表。
         * @type {Array.<string> || null}
         */
        this.FileIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIdSet = 'FileIdSet' in params ? params.FileIdSet : null;

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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 输入视频的来源类型，可以取的值为 File，Stream 两种。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 输入的视频文件信息，当 InputType 为 File 时，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfoSet = null;

        /**
         * 输入的流信息，当 InputType 为 Stream 时，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EditMediaStreamInfo> || null}
         */
        this.StreamInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

        if (params.StreamInfoSet) {
            this.StreamInfoSet = new Array();
            for (let z in params.StreamInfoSet) {
                let obj = new EditMediaStreamInfo();
                obj.deserialize(params.StreamInfoSet[z]);
                this.StreamInfoSet.push(obj);
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
         * 对视频转自适应码流任务的输入。
         * @type {AdaptiveDynamicStreamingTaskInput || null}
         */
        this.Input = null;

        /**
         * 对视频转自适应码流任务的输出。
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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 对视频截图做封面任务输出类型
 * @class
 */
class CoverBySnapshotTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封面 URL。
         * @type {string || null}
         */
        this.CoverUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

    }
}

/**
 * CommitUpload请求参数结构体
 * @class
 */
class CommitUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点播会话，取申请上传接口的返回值 VodSessionKey。
         * @type {string || null}
         */
        this.VodSessionKey = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VodSessionKey = 'VodSessionKey' in params ? params.VodSessionKey : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * EditMedia返回参数结构体
 * @class
 */
class EditMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑视频的任务 ID，可以通过该 ID 查询编辑任务（任务类型为 EditMedia）的状态。
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
 * ProcessMediaByUrl请求参数结构体
 * @class
 */
class ProcessMediaByUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入视频信息，包括视频 URL ， 名称、视频自定义 ID。
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * 输出文件 COS 路径信息。
         * @type {MediaOutputInfo || null}
         */
        this.OutputInfo = null;

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
         * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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

        if (params.OutputInfo) {
            let obj = new MediaOutputInfo();
            obj.deserialize(params.OutputInfo)
            this.OutputInfo = obj;
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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ModifyMediaInfo请求参数结构体
 * @class
 */
class ModifyMediaInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件唯一标识。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体文件名称，最长 64 个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒体文件描述，最长 128 个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 媒体文件分类 ID。
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 媒体文件过期时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 视频封面图片文件（如 jpeg, png 等）进行 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式。
         * @type {string || null}
         */
        this.CoverData = null;

        /**
         * 新增的一组视频打点信息，如果某个偏移时间已存在打点，则会进行覆盖操作，单个媒体文件最多 100 个打点信息。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。
         * @type {Array.<MediaKeyFrameDescItem> || null}
         */
        this.AddKeyFrameDescs = null;

        /**
         * 要删除的一组视频打点信息的时间偏移，单位：秒。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。
         * @type {Array.<number> || null}
         */
        this.DeleteKeyFrameDescs = null;

        /**
         * 取值 1 表示清空视频打点信息，其他值无意义。
同一个请求里，ClearKeyFrameDescs 与 AddKeyFrameDescs 不能同时出现。
         * @type {number || null}
         */
        this.ClearKeyFrameDescs = null;

        /**
         * 新增的一组标签，单个媒体文件最多 16 个标签，单个标签最多 16 个字符。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
         * @type {Array.<string> || null}
         */
        this.AddTags = null;

        /**
         * 要删除的一组标签。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
         * @type {Array.<string> || null}
         */
        this.DeleteTags = null;

        /**
         * 取值 1 表示清空媒体文件所有标签，其他值无意义。
同一个请求里，ClearTags 与 AddTags 不能同时出现。
         * @type {number || null}
         */
        this.ClearTags = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CoverData = 'CoverData' in params ? params.CoverData : null;

        if (params.AddKeyFrameDescs) {
            this.AddKeyFrameDescs = new Array();
            for (let z in params.AddKeyFrameDescs) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.AddKeyFrameDescs[z]);
                this.AddKeyFrameDescs.push(obj);
            }
        }
        this.DeleteKeyFrameDescs = 'DeleteKeyFrameDescs' in params ? params.DeleteKeyFrameDescs : null;
        this.ClearKeyFrameDescs = 'ClearKeyFrameDescs' in params ? params.ClearKeyFrameDescs : null;
        this.AddTags = 'AddTags' in params ? params.AddTags : null;
        this.DeleteTags = 'DeleteTags' in params ? params.DeleteTags : null;
        this.ClearTags = 'ClearTags' in params ? params.ClearTags : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 点播文件视频转动图结果信息
 * @class
 */
class MediaAnimatedGraphicsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频转动图结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaAnimatedGraphicsItem> || null}
         */
        this.AnimatedGraphicsSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AnimatedGraphicsSet) {
            this.AnimatedGraphicsSet = new Array();
            for (let z in params.AnimatedGraphicsSet) {
                let obj = new MediaAnimatedGraphicsItem();
                obj.deserialize(params.AnimatedGraphicsSet[z]);
                this.AnimatedGraphicsSet.push(obj);
            }
        }

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频拍摄时的选择角度，单位：度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 视频流信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

        /**
         * 音频流信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * 视频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * 音频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 视频处理任务类型
 * @class
 */
class MediaProcessTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频转码任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TranscodeTaskInput> || null}
         */
        this.TranscodeTaskSet = null;

        /**
         * 视频转动图任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AnimatedGraphicTaskInput> || null}
         */
        this.AnimatedGraphicTaskSet = null;

        /**
         * 对视频按时间点截图任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SnapshotByTimeOffsetTaskInput> || null}
         */
        this.SnapshotByTimeOffsetTaskSet = null;

        /**
         * 对视频采样截图任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SampleSnapshotTaskInput> || null}
         */
        this.SampleSnapshotTaskSet = null;

        /**
         * 对视频截雪碧图任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageSpriteTaskInput> || null}
         */
        this.ImageSpriteTaskSet = null;

        /**
         * 对视频截图做封面任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CoverBySnapshotTaskInput> || null}
         */
        this.CoverBySnapshotTaskSet = null;

        /**
         * 对视频转自适应码流任务列表。
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.CoverBySnapshotTaskSet) {
            this.CoverBySnapshotTaskSet = new Array();
            for (let z in params.CoverBySnapshotTaskSet) {
                let obj = new CoverBySnapshotTaskInput();
                obj.deserialize(params.CoverBySnapshotTaskSet[z]);
                this.CoverBySnapshotTaskSet.push(obj);
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * LiveRealTimeClip请求参数结构体
 * @class
 */
class LiveRealTimeClipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流[直播码](https://cloud.tencent.com/document/product/267/5959)。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 流剪辑的开始时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 流剪辑的结束时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 是否固化。0 不固化，1 固化。默认不固化。
         * @type {number || null}
         */
        this.IsPersistence = null;

        /**
         * 剪辑固化后的视频存储过期时间。格式参照 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。仅 IsPersistence 为 1 时有效，默认剪辑固化的视频永不过期。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 剪辑固化后的视频点播任务流处理，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。仅 IsPersistence 为 1 时有效。
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * 是否需要返回剪辑后的视频元信息。0 不需要，1 需要。默认不需要。
         * @type {number || null}
         */
        this.MetaDataRequired = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsPersistence = 'IsPersistence' in params ? params.IsPersistence : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.MetaDataRequired = 'MetaDataRequired' in params ? params.MetaDataRequired : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * Asr 文字涉黄信息
 * @class
 */
class AiReviewPornAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asr 文字涉黄评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉黄嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * SimpleHlsClip返回参数结构体
 * @class
 */
class SimpleHlsClipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 裁剪后的视频地址。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 裁剪后的视频元信息。目前`Size`，`Rotate`，`VideoDuration`，`AudioDuration` 几个字段暂时缺省，没有真实数据。
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
        this.Url = 'Url' in params ? params.Url : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 输入视频的类型，可以取的值为  File，Stream 两种。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 输入的视频文件信息，当 InputType 为 File 时必填。
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfos = null;

        /**
         * 输入的流信息，当 InputType 为 Stream 时必填。
         * @type {Array.<EditMediaStreamInfo> || null}
         */
        this.StreamInfos = null;

        /**
         * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字，如果要对生成的新视频执行任务流时填写。
         * @type {string || null}
         */
        this.ProcedureName = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new EditMediaStreamInfo();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 视频拼接源文件信息（2017 版）
 * @class
 */
class ConcatFileInfo2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 视频拼接源文件的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 视频拼接源文件的地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 视频拼接源文件的格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

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
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeMediaInfos返回参数结构体
 * @class
 */
class DescribeMediaInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

        /**
         * 不存在的文件 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotExistFileIdSet = null;

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

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.NotExistFileIdSet = 'NotExistFileIdSet' in params ? params.NotExistFileIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProcedureTemplate返回参数结构体
 * @class
 */
class DeleteProcedureTemplateResponse extends  AbstractModel {
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
         * 转码后的视频文件地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33478#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 视频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频的 md5 值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 音频流信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * 视频流信息。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;
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
 * 内容审核 Ocr 文字审核嫌疑片段
 * @class
 */
class MediaContentReviewOcrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

        /**
         * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

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
 * 物体识别任务控制参数
 * @class
 */
class ObjectConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物体识别任务开关，可选值：
<li>ON：开启智能物体识别任务；</li>
<li>OFF：关闭智能物体识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 物体库选择，可选值：
<li>Default：使用默认物体库；</li>
<li>UserDefine：使用用户自定义物体库。</li>
<li>All：同时使用默认物体库和用户自定义物体库。</li>
默认值： All，同时使用默认物体库和用户自定义物体库。
         * @type {string || null}
         */
        this.ObjectLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ObjectLibrary = 'ObjectLibrary' in params ? params.ObjectLibrary : null;

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
 * 视频片头片尾识别结果。
 * @class
 */
class AiRecognitionTaskHeadTailResult extends  AbstractModel {
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
         * 视频片头片尾识别任务输入信息。
         * @type {AiRecognitionTaskHeadTailResultInput || null}
         */
        this.Input = null;

        /**
         * 视频片头片尾识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskHeadTailResultOutput || null}
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
            let obj = new AiRecognitionTaskHeadTailResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskHeadTailResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 视频转码任务信息，该结构仅用于对 2017 版[视频转码](https://cloud.tencent.com/document/product/266/7822)接口发起的任务。
 * @class
 */
class TranscodeTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转码任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 被转码文件 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 被转码文件名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 视频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 封面地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 视频转码后生成的播放信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TranscodePlayInfo2017> || null}
         */
        this.PlayInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

        if (params.PlayInfoSet) {
            this.PlayInfoSet = new Array();
            for (let z in params.PlayInfoSet) {
                let obj = new TranscodePlayInfo2017();
                obj.deserialize(params.PlayInfoSet[z]);
                this.PlayInfoSet.push(obj);
            }
        }

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
 * DescribeProcedureTemplates请求参数结构体
 * @class
 */
class DescribeProcedureTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流模板名字过滤条件，数组长度限制：100。
         * @type {Array.<string> || null}
         */
        this.Names = null;

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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 空的轨道片段，用来进行时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。
 * @class
 */
class EmptyTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 持续时间，单位为秒。
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 贴图轨上的贴图信息。
 * @class
 */
class StickerTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 贴图素材的媒体文件来源。可以是点播的文件 ID，也可以是其它文件的 URL。
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * 贴图的持续时间，单位为秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 贴图在轨道上的起始时间，单位为秒。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 原点位置，取值有：
<li>Center：坐标原点为中心位置，如画布中心。</li>
默认值：Center。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 贴图原点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。</li><li>当字符串以 px 结尾，表示贴图 XPos 单位为像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 贴图原点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示贴图 YPos 单位为像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 贴图的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示贴图 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。</li>
<li>当 Width 为空0，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 贴图的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示贴图 Height 单位为像素，如 100px 表示 Hieght 为 100 像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 对贴图进行的操作，如图像旋转等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageTransform> || null}
         */
        this.ImageOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ImageTransform();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

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
<li>open：开启，此时，Width 代表视频的宽度，Height 表示视频的高度；</li>
<li>close：关闭，此时，Width 代表视频的长边，Height 表示视频的短边。</li>
默认值：open。
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

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
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 对视频截图做封面任务输入参数类型
 * @class
 */
class CoverBySnapshotTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图模板 ID。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 截图方式。包含：
<li>Time：依照时间点截图</li>
<li>Percent：依照百分比截图</li>
         * @type {string || null}
         */
        this.PositionType = null;

        /**
         * 截图位置：
<li>对于依照时间点截图，该值表示指定视频第几秒的截图作为封面</li>
<li>对于依照百分比截图，该值表示使用视频百分之多少的截图作为封面</li>
         * @type {number || null}
         */
        this.PositionValue = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.PositionType = 'PositionType' in params ? params.PositionType : null;
        this.PositionValue = 'PositionValue' in params ? params.PositionValue : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UserDefineFaceReviewTemplateInfo || null}
         */
        this.FaceReviewInfo = null;

        /**
         * 用户自定义语音审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UserDefineAsrTextReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 用户自定义文本审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 同一规格的截图信息集合，每个元素代表一张截图。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaSnapshotByTimePicInfoItem> || null}
         */
        this.PicInfoSet = null;

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
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（黑色）。
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
 * 视频转动图结果信息
 * @class
 */
class MediaAnimatedGraphicsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转动图的文件地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/33481#.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 动图格式，如 gif。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 动图的高度，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 动图的宽度，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 动图码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 动图大小，单位：字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 动图的md5值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 动图在视频中的起始时间偏移，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 动图在视频中的结束时间偏移，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DeleteMedia返回参数结构体
 * @class
 */
class DeleteMediaResponse extends  AbstractModel {
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
 * 物体识别结果。
 * @class
 */
class AiRecognitionTaskObjectResult extends  AbstractModel {
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
         * 物体识别任务输入信息。
         * @type {AiRecognitionTaskObjectResultInput || null}
         */
        this.Input = null;

        /**
         * 物体识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskObjectResultOutput || null}
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
            let obj = new AiRecognitionTaskObjectResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskObjectResultOutput();
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
 * SearchMedia返回参数结构体
 * @class
 */
class SearchMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合搜索条件的记录总数
<li>最大值：5000，即，当命中记录数超过 5000，该字段将返回 5000，而非实际命中总数。</li>
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 媒体文件信息列表，只包含基础信息（BasicInfo）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

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

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ProcessMedia请求参数结构体
 * @class
 */
class ProcessMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件 ID。
         * @type {string || null}
         */
        this.FileId = null;

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
         * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ModifyMediaInfo返回参数结构体
 * @class
 */
class ModifyMediaInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新的视频封面 URL。
* 注意：仅当请求携带 CoverData 时此返回值有效。 *
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverUrl = null;

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
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 截图时间点列表，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TimeOffsetSet = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

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
 * 物体识别任务控制参数
 * @class
 */
class ObjectConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物体识别任务开关，可选值：
<li>ON：开启智能物体识别任务；</li>
<li>OFF：关闭智能物体识别任务。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 物体库选择，可选值：
<li>Default：使用默认物体库；</li>
<li>UserDefine：使用用户自定义物体库。</li>
<li>All：同时使用默认物体库和用户自定义物体库。</li>
         * @type {string || null}
         */
        this.ObjectLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ObjectLibrary = 'ObjectLibrary' in params ? params.ObjectLibrary : null;

    }
}

/**
 * DeleteMedia请求参数结构体
 * @class
 */
class DeleteMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件的唯一标识。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 指定本次需要删除的部分。默认值为 "[]", 表示删除媒体及其对应的全部视频处理文件。
         * @type {Array.<MediaDeleteItem> || null}
         */
        this.DeleteParts = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.DeleteParts) {
            this.DeleteParts = new Array();
            for (let z in params.DeleteParts) {
                let obj = new MediaDeleteItem();
                obj.deserialize(params.DeleteParts[z]);
                this.DeleteParts.push(obj);
            }
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * SimpleHlsClip请求参数结构体
 * @class
 */
class SimpleHlsClipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要裁剪的腾讯云点播 HLS 视频 URL。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 裁剪的开始偏移时间，单位秒。默认 0，即从视频开头开始裁剪。负数表示距离视频结束多少秒开始裁剪。比如 -10 表示从倒数第 10 秒开始裁剪。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 裁剪的结束偏移时间，单位秒。默认 0，即裁剪到视频尾部。负数表示距离视频结束多少秒结束裁剪。比如 -10 表示到倒数第 10 秒结束裁剪。
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
        this.Url = 'Url' in params ? params.Url : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 指定删除点播视频时的删除内容

 * @class
 */
class MediaDeleteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所指定的删除部分。如果未填写该字段则参数无效。可选值有：
<li>TranscodeFiles（删除转码文件）。</li>
<li>WechatPublishFiles（删除微信发布文件）。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 删除由Type参数指定的种类下的视频模板号，模板定义参见[转码模板](https://cloud.tencent.com/document/product/266/33478#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
默认值为0，表示删除参数Type指定种类下所有的视频。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Definition = 'Definition' in params ? params.Definition : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 转自适应码流信息
 * @class
 */
class MediaAdaptiveDynamicStreamingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转自适应码流信息数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AdaptiveDynamicStreamingInfoItem> || null}
         */
        this.AdaptiveDynamicStreamingSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AdaptiveDynamicStreamingSet) {
            this.AdaptiveDynamicStreamingSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingSet) {
                let obj = new AdaptiveDynamicStreamingInfoItem();
                obj.deserialize(params.AdaptiveDynamicStreamingSet[z]);
                this.AdaptiveDynamicStreamingSet.push(obj);
            }
        }

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
 * 视频剪辑任务信息，该结构仅用于对 2017 版[视频剪辑](https://cloud.tencent.com/document/product/266/10156)接口发起的任务。
 * @class
 */
class ClipTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频剪辑任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 视频剪辑任务源文件 ID。
         * @type {string || null}
         */
        this.SrcFileId = null;

        /**
         * 视频剪辑输出的文件信息。
         * @type {ClipFileInfo2017 || null}
         */
        this.FileInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SrcFileId = 'SrcFileId' in params ? params.SrcFileId : null;

        if (params.FileInfo) {
            let obj = new ClipFileInfo2017();
            obj.deserialize(params.FileInfo)
            this.FileInfo = obj;
        }

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
 * 视频片头片尾识别输出。
 * @class
 */
class AiRecognitionTaskHeadTailResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片头识别置信度。取值：0~100。
         * @type {number || null}
         */
        this.HeadConfidence = null;

        /**
         * 视频片头的结束时间点，单位：秒。
         * @type {number || null}
         */
        this.HeadTimeOffset = null;

        /**
         * 片尾识别置信度。取值：0~100。
         * @type {number || null}
         */
        this.TailConfidence = null;

        /**
         * 视频片尾的开始时间点，单位：秒。
         * @type {number || null}
         */
        this.TailTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeadConfidence = 'HeadConfidence' in params ? params.HeadConfidence : null;
        this.HeadTimeOffset = 'HeadTimeOffset' in params ? params.HeadTimeOffset : null;
        this.TailConfidence = 'TailConfidence' in params ? params.TailConfidence : null;
        this.TailTimeOffset = 'TailTimeOffset' in params ? params.TailTimeOffset : null;

    }
}

/**
 * PullEvents请求参数结构体
 * @class
 */
class PullEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
<li>text：文字水印。</li>
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
默认值：TopLeft。目前，当 Type 为 image，该字段仅支持 TopLeft。
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
         * @type {ImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，当 Type 为 text，该字段必填。当 Type 为 image，该字段无效。
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 制作媒体文件任务信息
 * @class
 */
class ComposeMediaTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 制作媒体文件任务的输入。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComposeMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * 制作媒体文件任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComposeMediaTaskOutput || null}
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
            let obj = new ComposeMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 视频片头片尾识别任务控制参数
 * @class
 */
class HeadTailConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频片头片尾识别任务开关，可选值：
<li>ON：开启智能视频片头片尾识别任务；</li>
<li>OFF：关闭智能视频片头片尾识别任务。</li>
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
 * 视频转码播放信息（2017 版）
 * @class
 */
class TranscodePlayInfo2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放地址。
         * @type {string || null}
         */
        this.Url = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * 制作媒体文件任务的输入。
 * @class
 */
class ComposeMediaTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息。
         * @type {Array.<MediaTrack> || null}
         */
        this.Tracks = null;

        /**
         * 制作视频文件时使用的画布。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Canvas || null}
         */
        this.Canvas = null;

        /**
         * 输出的媒体文件信息。
         * @type {ComposeMediaOutput || null}
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

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 转动图任务类型
 * @class
 */
class AnimatedGraphicTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频转动图模板 ID
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
 * 单个物体识别结果。
 * @class
 */
class AiRecognitionTaskObjectResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别的物体名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 物体出现的片段列表。
         * @type {Array.<AiRecognitionTaskObjectSeqmentItem> || null}
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskObjectSeqmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特定规格的指定时间点截图信息集合。目前每种规格只能有一套截图。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaSnapshotByTimeOffsetItem> || null}
         */
        this.SnapshotByTimeOffsetSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SnapshotByTimeOffsetSet) {
            this.SnapshotByTimeOffsetSet = new Array();
            for (let z in params.SnapshotByTimeOffsetSet) {
                let obj = new MediaSnapshotByTimeOffsetItem();
                obj.deserialize(params.SnapshotByTimeOffsetSet[z]);
                this.SnapshotByTimeOffsetSet.push(obj);
            }
        }

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
 * 视频打点信息
 * @class
 */
class MediaKeyFrameDescItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 打点的视频偏移时间，单位：秒。
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * 打点的内容字符串，限制 1-128 个字符。
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
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * ConfirmEvents请求参数结构体
 * @class
 */
class ConfirmEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件句柄，数组长度限制：16。
         * @type {Array.<string> || null}
         */
        this.EventHandles = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventHandles = 'EventHandles' in params ? params.EventHandles : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 暴恐结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有暴恐嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ResetProcedureTemplate返回参数结构体
 * @class
 */
class ResetProcedureTemplateResponse extends  AbstractModel {
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 点播文件转码信息
 * @class
 */
class MediaTranscodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 各规格的转码信息集合，每个元素代表一个规格的转码结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaTranscodeItem> || null}
         */
        this.TranscodeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeSet) {
            this.TranscodeSet = new Array();
            for (let z in params.TranscodeSet) {
                let obj = new MediaTranscodeItem();
                obj.deserialize(params.TranscodeSet[z]);
                this.TranscodeSet.push(obj);
            }
        }

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
 * 媒体轨道的片段信息
 * @class
 */
class MediaTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片段类型。取值有：
<li>Video：视频片段。</li>
<li>Audio：音频片段。</li>
<li>Sticker：贴图片段。</li>
<li>Transition：转场。</li>
<li>Empty：空白片段。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 视频片段，当 Type = Video 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoTrackItem || null}
         */
        this.VideoItem = null;

        /**
         * 音频片段，当 Type = Audio 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AudioTrackItem || null}
         */
        this.AudioItem = null;

        /**
         * 贴图片段，当 Type = Sticker 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StickerTrackItem || null}
         */
        this.StickerItem = null;

        /**
         * 转场，当 Type = Transition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaTransitionItem || null}
         */
        this.TransitionItem = null;

        /**
         * 空白片段，当 Type = Empty 时有效。空片段用于时间轴的占位。<li>如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。</li>
<li>使用 EmptyTrackItem 进行占位，来定位某个Item。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EmptyTrackItem || null}
         */
        this.EmptyItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VideoItem) {
            let obj = new VideoTrackItem();
            obj.deserialize(params.VideoItem)
            this.VideoItem = obj;
        }

        if (params.AudioItem) {
            let obj = new AudioTrackItem();
            obj.deserialize(params.AudioItem)
            this.AudioItem = obj;
        }

        if (params.StickerItem) {
            let obj = new StickerTrackItem();
            obj.deserialize(params.StickerItem)
            this.StickerItem = obj;
        }

        if (params.TransitionItem) {
            let obj = new MediaTransitionItem();
            obj.deserialize(params.TransitionItem)
            this.TransitionItem = obj;
        }

        if (params.EmptyItem) {
            let obj = new EmptyTrackItem();
            obj.deserialize(params.EmptyItem)
            this.EmptyItem = obj;
        }

    }
}

/**
 * PullEvents返回参数结构体
 * @class
 */
class PullEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EventContent> || null}
         */
        this.EventSet = null;

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

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new EventContent();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 物体识别任务输入类型。
 * @class
 */
class AiRecognitionTaskObjectResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物体识别模板 ID。
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
 * 输出的视频流信息
 * @class
 */
class OutputVideoStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>libx264：H.264 编码 </li>
默认值：libx264。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
默认值：0，表示和第一个视频轨的第一个视频片段的视频帧率一致。
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
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * 任务流模板详情
 * @class
 */
class ProcedureTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频处理类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * AI 智能内容审核类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * AI 智能内容分析类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * AI 内容识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

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
        this.Name = 'Name' in params ? params.Name : null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 内容审核 Asr 文字审核嫌疑片段
 * @class
 */
class MediaContentReviewAsrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 内容审核涉政嫌疑片段
 * @class
 */
class MediaContentReviewPoliticalSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉政分数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴政结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 涉政人物、违规图标名字。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 嫌疑片段鉴政结果标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PicUrlExpireTimeStamp = null;

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
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;

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

        /**
         * 截帧间隔，单位为秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * 审核结果是否进入审核墙（对审核结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
         * @type {string || null}
         */
        this.ReviewWallSwitch = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * ProcessMediaByUrl返回参数结构体
 * @class
 */
class ProcessMediaByUrlResponse extends  AbstractModel {
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
 * Ocr 文字涉黄信息
 * @class
 */
class AiReviewPornOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ocr 文字涉黄评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉黄嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ApplyUpload请求参数结构体
 * @class
 */
class ApplyUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体类型，可选值请参考[上传能力综述](https://cloud.tencent.com/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。
         * @type {string || null}
         */
        this.MediaType = null;

        /**
         * 媒体名称。
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * 封面类型，可选值请参考[上传能力综述](https://cloud.tencent.com/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。
         * @type {string || null}
         */
        this.CoverType = null;

        /**
         * 媒体后续任务操作，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 指定上传园区，仅适用于对上传地域有特殊需求的用户。
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过[创建分类](https://cloud.tencent.com/document/product/266/7812)接口，创建分类，获得分类 ID。
<li>默认值：0，表示其他分类。</li>
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 来源上下文，用于透传用户请求信息，上传回调接口将返回该字段值，最长 250 个字符。
         * @type {string || null}
         */
        this.SourceContext = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaType = 'MediaType' in params ? params.MediaType : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.CoverType = 'CoverType' in params ? params.CoverType : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 点播媒体文件基础信息
 * @class
 */
class MediaBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒体文件描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 媒体文件的创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 媒体文件的过期时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。“9999-12-31T23:59:59Z”表示永不过期。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 媒体文件的分类 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 媒体文件的分类名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 媒体文件的分类路径，分类间以“-”分隔，如“新的一级分类 - 新的二级分类”。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 媒体文件的封面图片地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 媒体文件的封装格式，例如 mp4、flv 等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 原始媒体文件的 URL 地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * 该媒体文件的来源信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaSourceData || null}
         */
        this.SourceInfo = null;

        /**
         * 媒体文件存储地区，如 ap-guangzhou，参见[地域列表](https://cloud.tencent.com/document/api/213/15692#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 媒体文件的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 直播录制文件的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;

        if (params.SourceInfo) {
            let obj = new MediaSourceData();
            obj.deserialize(params.SourceInfo)
            this.SourceInfo = obj;
        }
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.Vid = 'Vid' in params ? params.Vid : null;

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
 * PullUpload请求参数结构体
 * @class
 */
class PullUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要拉取的媒体 URL，暂不支持拉取 HLS 和 Dash 格式。
<li>URL 里文件名需要包括扩展名, 比如 ```https://xxxx.mp4``` ，扩展名为 mp4，支持的扩展名详见[文件类型](https://cloud.tencent.com/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。</li>
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * 媒体名称。
         * @type {string || null}
         */
        this.MediaName = null;

        /**
         * 要拉取的视频封面 URL。
<li>URL 里文件名需要包括扩展名, 比如 ```https://xxxx.jpg``` ，扩展名为 jpg，支持的扩展名详见[封面类型](https://cloud.tencent.com/document/product/266/9760#.E5.B0.81.E9.9D.A2.E7.B1.BB.E5.9E.8B)。</li>
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 媒体后续任务操作，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 指定上传园区，仅适用于对上传地域有特殊需求的用户。目前支持的园区：
<li>ap-chongqing：重庆园区，</li>
<li>ap-beijing：北京园区，</li>
<li>ap-shanghai：上海园区。</li>
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过[创建分类](https://cloud.tencent.com/document/product/266/7812)接口，创建分类，获得分类 ID。
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 来源上下文，用于透传用户请求信息，当指定 Procedure 任务后，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 排序依据
 * @class
 */
class SortBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 排序方式，可选值：Asc（升序）、Desc（降序）
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板描述信息。
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

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
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeReviewDetails请求参数结构体
 * @class
 */
class DescribeReviewDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束日期，需大于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 内容审核涉黄/暴恐嫌疑片段
 * @class
 */
class MediaContentReviewSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉黄分数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PicUrlExpireTimeStamp = null;

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
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 智能物体识别输出。
 * @class
 */
class AiRecognitionTaskObjectResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能物体识别结果集。
         * @type {Array.<AiRecognitionTaskObjectResultItem> || null}
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
                let obj = new AiRecognitionTaskObjectResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * CreateClass返回参数结构体
 * @class
 */
class CreateClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类 ID
         * @type {number || null}
         */
        this.ClassId = null;

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
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
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
         * 视频片头片尾识别控制参数。
         * @type {HeadTailConfigureInfoForUpdate || null}
         */
        this.HeadTailConfigure = null;

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

        /**
         * 物体识别控制参数。
         * @type {ObjectConfigureInfoForUpdate || null}
         */
        this.ObjectConfigure = null;

        /**
         * 截帧间隔，单位为秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfoForUpdate();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

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

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfoForUpdate();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 微信发布任务信息
 * @class
 */
class WechatPublishTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务状态，取值：
WAITING：等待中；
PROCESSING：处理中；
FINISH：已完成。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 发布视频文件 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 微信发布模板 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceDefinition = null;

        /**
         * 微信发布状态，取值：
<li>FAIL：失败；</li>
<li>SUCCESS：成功；</li>
<li>AUDITNOTPASS：审核未通过；</li>
<li>NOTTRIGGERED：尚未发起微信发布。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatStatus = null;

        /**
         * 微信 Vid。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatVid = null;

        /**
         * 微信地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatUrl = null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.WechatStatus = 'WechatStatus' in params ? params.WechatStatus : null;
        this.WechatVid = 'WechatVid' in params ? params.WechatVid : null;
        this.WechatUrl = 'WechatUrl' in params ? params.WechatUrl : null;

    }
}

/**
 * 视频裁剪结果文件信息（2017 版）
 * @class
 */
class ClipFileInfo2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 输出目标文件的文件 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 输出目标文件的文件地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 输出目标文件的文件类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * 统计数据
 * @class
 */
class StatDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数据大小。
<li>存储空间的数据，单位是字节。</li>
<li>转码时长的数据，单位是秒。</li>
<li>流量数据，单位是字节。</li>
<li>带宽数据，单位是比特每秒。</li>
         * @type {number || null}
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 来源文件信息
 * @class
 */
class MediaSourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件的来源类别：
<li>Record：来自录制。如直播录制、直播时移录制等。</li>
<li>Upload：来自上传。如拉取上传、服务端上传、客户端 UGC 上传等。</li>
<li>VideoProcessing：来自视频处理。如视频拼接、视频剪辑等。</li>
<li>Unknown：未知来源。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 用户创建文件时透传的字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

    }
}

/**
 * PushUrlCache请求参数结构体
 * @class
 */
class PushUrlCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预热的 URL 列表，单次最多指定20个 URL。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 事件通知内容，其中，TranscodeCompleteEvent、ConcatCompleteEvent、ClipCompleteEvent、CreateImageSpriteCompleteEvent、SnapshotByTimeOffsetCompleteEvent 为兼容 2017 版接口发起任务的事件通知。
 * @class
 */
class EventContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件句柄，调用方必须调用 ConfirmEvents 来确认消息已经收到，确认有效时间 30 秒。失效后，事件可重新被获取。
         * @type {string || null}
         */
        this.EventHandle = null;

        /**
         * <b>支持事件类型：</b>
<li>NewFileUpload：视频上传完成；</li>
<li>ProcedureStateChanged：任务流状态变更；</li>
<li>FileDeleted：视频删除完成；</li>
<li>PullComplete：视频转拉完成；</li>
<li>EditMediaComplete：视频编辑完成；</li>
<li>WechatPublishComplete：微信发布完成；</li>
<li>ComposeMediaComplete：制作媒体文件完成；</li>
<li>WechatMiniProgramPublishComplete：微信小程序发布完成。</li>
<b>兼容 2017 版的事件类型：</b>
<li>TranscodeComplete：视频转码完成；</li>
<li>ConcatComplete：视频拼接完成；</li>
<li>ClipComplete：视频剪辑完成；</li>
<li>CreateImageSpriteComplete：视频截取雪碧图完成；</li>
<li>CreateSnapshotByTimeOffsetComplete：视频按时间点截图完成。</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 视频上传完成事件，当事件类型为 NewFileUpload 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FileUploadTask || null}
         */
        this.FileUploadEvent = null;

        /**
         * 任务流状态变更事件，当事件类型为 ProcedureStateChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcedureTask || null}
         */
        this.ProcedureStateChangeEvent = null;

        /**
         * 文件删除事件，当事件类型为 FileDeleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FileDeleteTask || null}
         */
        this.FileDeleteEvent = null;

        /**
         * 视频转拉完成事件，当事件类型为 PullComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PullUploadTask || null}
         */
        this.PullCompleteEvent = null;

        /**
         * 视频编辑完成事件，当事件类型为 EditMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTask || null}
         */
        this.EditMediaCompleteEvent = null;

        /**
         * 微信发布完成事件，当事件类型为 WechatPublishComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WechatPublishTask || null}
         */
        this.WechatPublishCompleteEvent = null;

        /**
         * 视频转码完成事件，当事件类型为 TranscodeComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TranscodeTask2017 || null}
         */
        this.TranscodeCompleteEvent = null;

        /**
         * 视频拼接完成事件，当事件类型为 ConcatComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConcatTask2017 || null}
         */
        this.ConcatCompleteEvent = null;

        /**
         * 视频剪辑完成事件，当事件类型为 ClipComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClipTask2017 || null}
         */
        this.ClipCompleteEvent = null;

        /**
         * 视频截取雪碧图完成事件，当事件类型为 CreateImageSpriteComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateImageSpriteTask2017 || null}
         */
        this.CreateImageSpriteCompleteEvent = null;

        /**
         * 视频按时间点截图完成事件，当事件类型为 CreateSnapshotByTimeOffsetComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SnapshotByTimeOffsetTask2017 || null}
         */
        this.SnapshotByTimeOffsetCompleteEvent = null;

        /**
         * 制作媒体文件任务完成事件，当事件类型为 ComposeMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComposeMediaTask || null}
         */
        this.ComposeMediaCompleteEvent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventHandle = 'EventHandle' in params ? params.EventHandle : null;
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.FileUploadEvent) {
            let obj = new FileUploadTask();
            obj.deserialize(params.FileUploadEvent)
            this.FileUploadEvent = obj;
        }

        if (params.ProcedureStateChangeEvent) {
            let obj = new ProcedureTask();
            obj.deserialize(params.ProcedureStateChangeEvent)
            this.ProcedureStateChangeEvent = obj;
        }

        if (params.FileDeleteEvent) {
            let obj = new FileDeleteTask();
            obj.deserialize(params.FileDeleteEvent)
            this.FileDeleteEvent = obj;
        }

        if (params.PullCompleteEvent) {
            let obj = new PullUploadTask();
            obj.deserialize(params.PullCompleteEvent)
            this.PullCompleteEvent = obj;
        }

        if (params.EditMediaCompleteEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaCompleteEvent)
            this.EditMediaCompleteEvent = obj;
        }

        if (params.WechatPublishCompleteEvent) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishCompleteEvent)
            this.WechatPublishCompleteEvent = obj;
        }

        if (params.TranscodeCompleteEvent) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeCompleteEvent)
            this.TranscodeCompleteEvent = obj;
        }

        if (params.ConcatCompleteEvent) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatCompleteEvent)
            this.ConcatCompleteEvent = obj;
        }

        if (params.ClipCompleteEvent) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipCompleteEvent)
            this.ClipCompleteEvent = obj;
        }

        if (params.CreateImageSpriteCompleteEvent) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteCompleteEvent)
            this.CreateImageSpriteCompleteEvent = obj;
        }

        if (params.SnapshotByTimeOffsetCompleteEvent) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetCompleteEvent)
            this.SnapshotByTimeOffsetCompleteEvent = obj;
        }

        if (params.ComposeMediaCompleteEvent) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaCompleteEvent)
            this.ComposeMediaCompleteEvent = obj;
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
 * Asr 文字涉政信息
 * @class
 */
class AiReviewPoliticalAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Asr 文字涉政、敏感评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉政、敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉政、敏感嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 输出的音频流信息
 * @class
 */
class OutputAudioStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的编码格式，可选值：
<li>libfdk_aac：适合 mp4 文件。</li>
默认值：libfdk_aac。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 音频流的采样率，可选值：
<li>16000</li>
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
默认值：16000。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 音频声道数，可选值：
<li>1：单声道 。</li>
<li>2：双声道</li>
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
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * ModifyClass请求参数结构体
 * @class
 */
class ModifyClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类 ID
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 分类名称。长度限制：1-64 个字符。
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 制作媒体文件任务的输出。
 * @class
 */
class ComposeMediaTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件类型，例如 mp4、mp3 等。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 媒体文件 ID。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体文件播放地址。
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
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * DescribeMediaInfos请求参数结构体
 * @class
 */
class DescribeMediaInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件 ID 列表，N 从 0 开始取值，最大 19。
         * @type {Array.<string> || null}
         */
        this.FileIds = null;

        /**
         * 指定所有媒体文件需要返回的信息，可同时指定多个信息，N 从 0 开始递增。如果未填写该字段，默认返回所有信息。选项有：
<li>basicInfo（视频基础信息）。</li>
<li>metaData（视频元信息）。</li>
<li>transcodeInfo（视频转码结果信息）。</li>
<li>animatedGraphicsInfo（视频转动图结果信息）。</li>
<li>imageSpriteInfo（视频雪碧图信息）。</li>
<li>snapshotByTimeOffsetInfo（视频指定时间点截图信息）。</li>
<li>sampleSnapshotInfo（采样截图信息）。</li>
<li>keyFrameDescInfo（打点信息）。</li>
<li>adaptiveDynamicStreamingInfo（转自适应码流信息）。</li>
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.Filters = 'Filters' in params ? params.Filters : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 视频片头片尾识别控制参数。
         * @type {HeadTailConfigureInfo || null}
         */
        this.HeadTailConfigure = null;

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
         * 物体识别控制参数。
         * @type {ObjectConfigureInfo || null}
         */
        this.ObjectConfigure = null;

        /**
         * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfo();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

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

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfo();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉黄嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 鉴政任务控制参数
 * @class
 */
class PoliticalConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PoliticalImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PoliticalAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 对视频截图做封面任务的查询结果，当任务类型为 CoverBySnapshot 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaProcessTaskCoverBySnapshotResult || null}
         */
        this.CoverBySnapshotTask = null;

        /**
         * 对视频转自适应码流任务的查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
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

        if (params.CoverBySnapshotTask) {
            let obj = new MediaProcessTaskCoverBySnapshotResult();
            obj.deserialize(params.CoverBySnapshotTask)
            this.CoverBySnapshotTask = obj;
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
 * DeleteProcedureTemplate请求参数结构体
 * @class
 */
class DeleteProcedureTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TextContent = null;

        /**
         * SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SvgContent = null;

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
         * 打包格式，可能为 hls 和 dash 两种。
         * @type {string || null}
         */
        this.Package = null;

        /**
         * 加密类型。
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * 播放地址。
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DeleteClass返回参数结构体
 * @class
 */
class DeleteClassResponse extends  AbstractModel {
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
 * 点播文件采样截图信息
 * @class
 */
class MediaSampleSnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特定规格的采样截图信息集合，每个元素代表一套相同规格的采样截图。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaSampleSnapshotItem> || null}
         */
        this.SampleSnapshotSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SampleSnapshotSet) {
            this.SampleSnapshotSet = new Array();
            for (let z in params.SampleSnapshotSet) {
                let obj = new MediaSampleSnapshotItem();
                obj.deserialize(params.SampleSnapshotSet[z]);
                this.SampleSnapshotSet.push(obj);
            }
        }

    }
}

/**
 * 点播文件信息
 * @class
 */
class MediaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础信息。包括视频名称、大小、时长、封面图片等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 元信息。包括视频流信息、音频流信息等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 转码结果信息。包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaTranscodeInfo || null}
         */
        this.TranscodeInfo = null;

        /**
         * 转动图结果信息。对视频转动图（如 gif）后，动图相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaAnimatedGraphicsInfo || null}
         */
        this.AnimatedGraphicsInfo = null;

        /**
         * 采样截图信息。对视频采样截图后，相关截图信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaSampleSnapshotInfo || null}
         */
        this.SampleSnapshotInfo = null;

        /**
         * 雪碧图信息。对视频截取雪碧图之后，雪碧的相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaImageSpriteInfo || null}
         */
        this.ImageSpriteInfo = null;

        /**
         * 指定时间点截图信息。对视频依照指定时间点截图后，各个截图的信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaSnapshotByTimeOffsetInfo || null}
         */
        this.SnapshotByTimeOffsetInfo = null;

        /**
         * 视频打点信息。对视频设置的各个打点信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaKeyFrameDescInfo || null}
         */
        this.KeyFrameDescInfo = null;

        /**
         * 转自适应码流信息。包括规格、加密类型、打包格式等相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaAdaptiveDynamicStreamingInfo || null}
         */
        this.AdaptiveDynamicStreamingInfo = null;

        /**
         * 媒体文件唯一标识 ID。
         * @type {string || null}
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.TranscodeInfo) {
            let obj = new MediaTranscodeInfo();
            obj.deserialize(params.TranscodeInfo)
            this.TranscodeInfo = obj;
        }

        if (params.AnimatedGraphicsInfo) {
            let obj = new MediaAnimatedGraphicsInfo();
            obj.deserialize(params.AnimatedGraphicsInfo)
            this.AnimatedGraphicsInfo = obj;
        }

        if (params.SampleSnapshotInfo) {
            let obj = new MediaSampleSnapshotInfo();
            obj.deserialize(params.SampleSnapshotInfo)
            this.SampleSnapshotInfo = obj;
        }

        if (params.ImageSpriteInfo) {
            let obj = new MediaImageSpriteInfo();
            obj.deserialize(params.ImageSpriteInfo)
            this.ImageSpriteInfo = obj;
        }

        if (params.SnapshotByTimeOffsetInfo) {
            let obj = new MediaSnapshotByTimeOffsetInfo();
            obj.deserialize(params.SnapshotByTimeOffsetInfo)
            this.SnapshotByTimeOffsetInfo = obj;
        }

        if (params.KeyFrameDescInfo) {
            let obj = new MediaKeyFrameDescInfo();
            obj.deserialize(params.KeyFrameDescInfo)
            this.KeyFrameDescInfo = obj;
        }

        if (params.AdaptiveDynamicStreamingInfo) {
            let obj = new MediaAdaptiveDynamicStreamingInfo();
            obj.deserialize(params.AdaptiveDynamicStreamingInfo)
            this.AdaptiveDynamicStreamingInfo = obj;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

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
<li>open：开启，此时，Width 代表视频的宽度，Height 表示视频的高度；</li>
<li>close：关闭，此时，Width 代表视频的长边，Height 表示视频的短边。</li>
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
         * 审核结果是否进入审核墙（对审核结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
         * @type {string || null}
         */
        this.ReviewWallSwitch = null;

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
         * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
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
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

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
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，取值：
<li>Procedure：视频处理任务；</li>
<li>EditMedia：视频编辑任务；</li>
<li>WechatPublish：微信发布任务；</li>
<li>ComposeMedia：制作媒体文件任务；</li>
<li>PullUpload：拉取上传媒体文件任务。</li>

兼容 2017 版的任务类型：
<li>Transcode：视频转码任务；</li>
<li>SnapshotByTimeOffset：视频截图任务；</li>
<li>Concat：视频拼接任务；</li>
<li>Clip：视频剪辑任务；</li>
<li>ImageSprites：截取雪碧图任务。</li>
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
         * 视频处理任务信息，仅当 TaskType 为 Procedure，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProcedureTask || null}
         */
        this.ProcedureTask = null;

        /**
         * 视频编辑任务信息，仅当 TaskType 为 EditMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTask || null}
         */
        this.EditMediaTask = null;

        /**
         * 微信发布任务信息，仅当 TaskType 为 WechatPublish，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WechatPublishTask || null}
         */
        this.WechatPublishTask = null;

        /**
         * 制作媒体文件任务信息，仅当 TaskType 为 ComposeMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ComposeMediaTask || null}
         */
        this.ComposeMediaTask = null;

        /**
         * 拉取上传媒体文件任务信息，仅当 TaskType 为 PullUpload，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PullUploadTask || null}
         */
        this.PullUploadTask = null;

        /**
         * 视频转码任务信息，仅当 TaskType 为 Transcode，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TranscodeTask2017 || null}
         */
        this.TranscodeTask = null;

        /**
         * 视频指定时间点截图任务信息，仅当 TaskType 为 SnapshotByTimeOffset，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SnapshotByTimeOffsetTask2017 || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * 视频拼接任务信息，仅当 TaskType 为 Concat，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConcatTask2017 || null}
         */
        this.ConcatTask = null;

        /**
         * 视频剪辑任务信息，仅当 TaskType 为 Clip，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClipTask2017 || null}
         */
        this.ClipTask = null;

        /**
         * 截取雪碧图任务信息，仅当 TaskType 为 ImageSprite，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateImageSpriteTask2017 || null}
         */
        this.CreateImageSpriteTask = null;

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

        if (params.ProcedureTask) {
            let obj = new ProcedureTask();
            obj.deserialize(params.ProcedureTask)
            this.ProcedureTask = obj;
        }

        if (params.EditMediaTask) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTask)
            this.EditMediaTask = obj;
        }

        if (params.WechatPublishTask) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishTask)
            this.WechatPublishTask = obj;
        }

        if (params.ComposeMediaTask) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaTask)
            this.ComposeMediaTask = obj;
        }

        if (params.PullUploadTask) {
            let obj = new PullUploadTask();
            obj.deserialize(params.PullUploadTask)
            this.PullUploadTask = obj;
        }

        if (params.TranscodeTask) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.ConcatTask) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatTask)
            this.ConcatTask = obj;
        }

        if (params.ClipTask) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipTask)
            this.ClipTask = obj;
        }

        if (params.CreateImageSpriteTask) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteTask)
            this.CreateImageSpriteTask = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频打点信息
 * @class
 */
class MediaKeyFrameDescInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频打点信息数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaKeyFrameDescItem> || null}
         */
        this.KeyFrameDescSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyFrameDescSet) {
            this.KeyFrameDescSet = new Array();
            for (let z in params.KeyFrameDescSet) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.KeyFrameDescSet[z]);
                this.KeyFrameDescSet.push(obj);
            }
        }

    }
}

/**
 * CreateClass请求参数结构体
 * @class
 */
class CreateClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 父类 ID，一级分类填写 -1。
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * 分类名称，长度限制：1-64 个字符。
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * CreateProcedureTemplate返回参数结构体
 * @class
 */
class CreateProcedureTemplateResponse extends  AbstractModel {
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskSimpleInfo> || null}
         */
        this.TaskSet = null;

        /**
         * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 涉政信息
 * @class
 */
class AiReviewPoliticalTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频涉政评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 涉政结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴政结果标签，取值范围：
<li>politician：政治人物。</li>
<li>violation_photo：违规图标。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉政嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 视频处理任务信息
 * @class
 */
class ProcedureTask extends  AbstractModel {
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
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 媒体文件 ID
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 FileId；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Id。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体文件名称
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.Name；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Name。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 媒体文件地址
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.MediaUrl；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Url。</li>
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 原始视频的元信息。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 视频处理任务的执行状态与结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaProcessTaskResult> || null}
         */
        this.MediaProcessResultSet = null;

        /**
         * 视频内容审核任务的执行状态与结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiContentReviewResult> || null}
         */
        this.AiContentReviewResultSet = null;

        /**
         * 视频内容分析任务的执行状态与结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiAnalysisResult> || null}
         */
        this.AiAnalysisResultSet = null;

        /**
         * 视频内容识别任务的执行状态与结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiRecognitionResult> || null}
         */
        this.AiRecognitionResultSet = null;

        /**
         * 任务流的优先级，取值范围为 [-10, 10]。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式。
<li>Finish：只有当任务流全部执行完毕时，才发起一次事件通知；</li>
<li>Change：只要任务流中每个子任务的状态发生变化，都进行事件通知；</li>
<li>None：不接受该任务流回调。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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
         * 任务类型，取值：
<li>Procedure：视频处理任务；</li>
<li>EditMedia：视频编辑任务</li>
<li>WechatDistribute：微信发布任务。</li>
兼容 2017 版的任务类型：
<li>Transcode：视频转码任务；</li>
<li>SnapshotByTimeOffset：视频截图任务；</li>
<li>Concat：视频拼接任务；</li>
<li>Clip：视频剪辑任务；</li>
<li>ImageSprites：截取雪碧图任务。</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreatTime = null;

        /**
         * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。若任务尚未开始，该字段为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。若任务尚未完成，该字段为空。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流的高度，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流的宽度，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流的编码格式，例如 h264。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 帧率，单位：hz。
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
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

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
         * 过滤条件：文件 ID。
         * @type {string || null}
         */
        this.FileId = null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeReviewDetails返回参数结构体
 * @class
 */
class DescribeReviewDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发起内容审核次数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 内容审核总时长。
         * @type {number || null}
         */
        this.TotalDuration = null;

        /**
         * 内容审核时长统计数据，每天一个数据。
         * @type {Array.<StatDataItem> || null}
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
        this.TotalDuration = 'TotalDuration' in params ? params.TotalDuration : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 截图输出信息（2017 版）
 * @class
 */
class SnapshotByTimeOffset2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 截图的具体时间点，单位：毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * 截图输出文件地址。
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Url = 'Url' in params ? params.Url : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 点播文件音频流信息
 * @class
 */
class MediaAudioStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，单位：hz。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * 音频流的编码格式，例如 aac。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 点播文件雪碧图信息
 * @class
 */
class MediaImageSpriteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特定规格的雪碧图信息集合，每个元素代表一套相同规格的雪碧图。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaImageSpriteItem> || null}
         */
        this.ImageSpriteSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageSpriteSet) {
            this.ImageSpriteSet = new Array();
            for (let z in params.ImageSpriteSet) {
                let obj = new MediaImageSpriteItem();
                obj.deserialize(params.ImageSpriteSet[z]);
                this.ImageSpriteSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAllClass返回参数结构体
 * @class
 */
class DescribeAllClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类信息集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaClassInfo> || null}
         */
        this.ClassInfoSet = null;

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

        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new MediaClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 编辑视频流信息
 * @class
 */
class EditMediaStreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制的流 ID
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 流剪辑的起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 流剪辑的结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * LiveRealTimeClip返回参数结构体
 * @class
 */
class LiveRealTimeClipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 剪辑后的视频播放 URL。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 剪辑固化后的视频的媒体文件的唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 剪辑固化后的视频任务流 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VodTaskId = null;

        /**
         * 剪辑后的视频元信息。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.VodTaskId = 'VodTaskId' in params ? params.VodTaskId : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CommitUpload返回参数结构体
 * @class
 */
class CommitUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件的唯一标识。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体播放地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * 媒体封面地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverUrl = null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ApplyUpload返回参数结构体
 * @class
 */
class ApplyUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储桶，用于上传接口 URL 的 bucket_name。
         * @type {string || null}
         */
        this.StorageBucket = null;

        /**
         * 存储园区，用于上传接口 Host 的 Region。
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 点播会话，用于确认上传接口的参数 VodSessionKey。
         * @type {string || null}
         */
        this.VodSessionKey = null;

        /**
         * 媒体存储路径，用于上传接口存储媒体的对象键（Key）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MediaStoragePath = null;

        /**
         * 封面存储路径，用于上传接口存储封面的对象键（Key）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverStoragePath = null;

        /**
         * 临时凭证，用于上传接口的权限验证。
         * @type {TempCertificate || null}
         */
        this.TempCertificate = null;

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
        this.StorageBucket = 'StorageBucket' in params ? params.StorageBucket : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.VodSessionKey = 'VodSessionKey' in params ? params.VodSessionKey : null;
        this.MediaStoragePath = 'MediaStoragePath' in params ? params.MediaStoragePath : null;
        this.CoverStoragePath = 'CoverStoragePath' in params ? params.CoverStoragePath : null;

        if (params.TempCertificate) {
            let obj = new TempCertificate();
            obj.deserialize(params.TempCertificate)
            this.TempCertificate = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClass请求参数结构体
 * @class
 */
class DeleteClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类 ID
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 图像旋转、翻转等操作
 * @class
 */
class ImageTransform extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型，取值有：
<li> Rotate：图像旋转。</li>
<li> Flip：图像翻转。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 图像以中心点为原点进行旋转的角度，取值范围0~360。当 Type = Rotate 时有效。
         * @type {number || null}
         */
        this.RotateAngle = null;

        /**
         * 图像翻转动作，取值有：
<li>Horizental：水平翻转，即左右镜像。</li>
<li>Vertical：垂直翻转，即上下镜像。</li>
当 Type = Flip 时有效。
         * @type {string || null}
         */
        this.Flip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.RotateAngle = 'RotateAngle' in params ? params.RotateAngle : null;
        this.Flip = 'Flip' in params ? params.Flip : null;

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

        /**
         * 截帧间隔，单位为秒，当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ConfirmEvents返回参数结构体
 * @class
 */
class ConfirmEventsResponse extends  AbstractModel {
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
 * 视频轨的视频片段信息。
 * @class
 */
class VideoTrackItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频片段的媒体素材来源，可以是点播的文件 ID，或者是其它文件的 URL。
         * @type {string || null}
         */
        this.SourceMedia = null;

        /**
         * 视频片段取自素材文件的起始时间，单位为秒。默认为0。
         * @type {number || null}
         */
        this.SourceMediaStartTime = null;

        /**
         * 视频片段时长，单位为秒。默认取视频素材本身长度，表示截取全部素材。如果源文件是图片，Duration需要大于0。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频原点位置，取值有：
<li>Center：坐标原点为中心位置，如画布中心。</li>
默认值 ：Center。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 视频片段原点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布口宽度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 视频片段原点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 视频片段的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 Width 单位为像素，如 100px 表示 Width 为100像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * 视频片段的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%；
</li><li>当字符串以 px 结尾，表示视频片段 Height 单位为像素，如 100px 表示 Height 为100像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * 对图像进行的操作，如图像旋转等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageTransform> || null}
         */
        this.ImageOperations = null;

        /**
         * 对音频进行操作，如静音等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioTransform> || null}
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ImageTransform();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new AudioTransform();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
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
 * ProcessMediaByProcedure请求参数结构体
 * @class
 */
class ProcessMediaByProcedureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体文件 ID。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字。
         * @type {string || null}
         */
        this.ProcedureName = null;

        /**
         * 任务流的优先级，数值越大优先级越高，取值范围是-10到10，不填代表0。
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
         * @type {string || null}
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果一天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 鉴黄任务控制参数
 * @class
 */
class PornConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画面鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PornImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PornAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 物体识别结果片段。
 * @class
 */
class AiRecognitionTaskObjectSeqmentItem extends  AbstractModel {
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
 * 对视频截图做封面任务结果类型
 * @class
 */
class MediaProcessTaskCoverBySnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 对视频截图做封面任务的输入。
         * @type {CoverBySnapshotTaskInput || null}
         */
        this.Input = null;

        /**
         * 对视频截图做封面任务的输出。
         * @type {CoverBySnapshotTaskOutput || null}
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
            let obj = new CoverBySnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new CoverBySnapshotTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
 * DescribeProcedureTemplates返回参数结构体
 * @class
 */
class DescribeProcedureTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务流模板详情列表。
         * @type {Array.<ProcedureTemplate> || null}
         */
        this.ProcedureTemplateSet = null;

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

        if (params.ProcedureTemplateSet) {
            this.ProcedureTemplateSet = new Array();
            for (let z in params.ProcedureTemplateSet) {
                let obj = new ProcedureTemplate();
                obj.deserialize(params.ProcedureTemplateSet[z]);
                this.ProcedureTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchMedia请求参数结构体
 * @class
 */
class SearchMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索文本，模糊匹配媒体文件名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：64 个字符。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 标签集合，匹配集合中任意元素。
<li>单个标签长度限制：8 个字符。</li>
<li>数组长度限制：10。</li>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 分类 ID 集合，匹配集合指定 ID 的分类及其所有子类。数组长度限制：10。
         * @type {Array.<number> || null}
         */
        this.ClassIds = null;

        /**
         * 创建时间的开始时间。
<li>大于等于开始时间。</li>
<li>格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。</li>
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 创建时间的结束时间。
<li>小于结束时间。</li>
<li>格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。</li>
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 媒体文件来源，来源取值参见 [SourceType](https://cloud.tencent.com/document/product/266/31773#MediaSourceData)。
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 推流[直播码](https://cloud.tencent.com/document/product/267/5959)。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 直播录制文件的唯一标识。
         * @type {string || null}
         */
        this.Vid = null;

        /**
         * 排序方式。
<li>Sort.Field 可选值：CreateTime</li>
<li>指定 Text 搜索时，将根据匹配度排序，该字段无效</li>
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * 偏移量。
<li>默认值：0。</li>
<li>取值范围：Offset + Limit 不超过 5000。</li>
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.ClassIds = 'ClassIds' in params ? params.ClassIds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Vid = 'Vid' in params ? params.Vid : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 音频增益调节参数
 * @class
 */
class AudioVolumeParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频增益，取值范围0~10。仅在Mute=0时生效。
<li>大于1表示增加音量。</li>
<li>小于1表示降低音量。</li>
<li>1：表示不改变。</li>
默认是1。
         * @type {number || null}
         */
        this.Gain = null;

        /**
         * 是否静音，取值范围0或1。
<li>0表示不静音。</li>
<li>1表示静音。</li>
默认是0。
         * @type {number || null}
         */
        this.Mute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gain = 'Gain' in params ? params.Gain : null;
        this.Mute = 'Mute' in params ? params.Mute : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyClass返回参数结构体
 * @class
 */
class ModifyClassResponse extends  AbstractModel {
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
 * 编辑点播视频文件信息
 * @class
 */
class EditMediaFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频的 ID。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 视频剪辑的起始偏移时间偏移，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 视频剪辑的起始结束时间偏移，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * ProcessMediaByProcedure返回参数结构体
 * @class
 */
class ProcessMediaByProcedureResponse extends  AbstractModel {
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
 * PullUpload返回参数结构体
 * @class
 */
class PullUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取上传视频的任务 ID，可以通过该 ID 查询拉取上传任务的状态。
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
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 视频编辑任务的输入。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * 视频编辑任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EditMediaTaskOutput || null}
         */
        this.Output = null;

        /**
         * 若发起视频编辑任务时指定了视频处理流程，则该字段为流程任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * ResetProcedureTemplate请求参数结构体
 * @class
 */
class ResetProcedureTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务流名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 视频处理类型任务参数。
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * AI 智能内容审核类型任务参数。
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * AI 智能内容分析类型任务参数。
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * AI 内容识别类型任务参数。
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 视频指定时间点截图任务信息，该结构仅用于 2017 版[指定时间点截图](https://cloud.tencent.com/document/product/266/8102)接口发起的任务。
 * @class
 */
class SnapshotByTimeOffsetTask2017 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 截图任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 截图文件 ID。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 截图结果信息。
         * @type {Array.<SnapshotByTimeOffset2017> || null}
         */
        this.SnapshotInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.SnapshotInfoSet) {
            this.SnapshotInfoSet = new Array();
            for (let z in params.SnapshotInfoSet) {
                let obj = new SnapshotByTimeOffset2017();
                obj.deserialize(params.SnapshotInfoSet[z]);
                this.SnapshotInfoSet.push(obj);
            }
        }

    }
}

/**
 * 分类信息描述
 * @class
 */
class MediaClassInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类 ID
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 父类 ID，一级分类的父类 ID 为 -1。
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * 分类名称
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 分类级别，一级分类为 0，最大值为 3，即最多允许 4 级分类层次。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 当前分类的第一级子类 ID 集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.SubClassIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.SubClassIdSet = 'SubClassIdSet' in params ? params.SubClassIdSet : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 对视频做采样截图任务输入参数类型
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 雪碧图信息
 * @class
 */
class MediaImageSpriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 雪碧图小图的高度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 雪碧图小图的宽度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 每一张雪碧图大图里小图的数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 每一张雪碧图大图的地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在在雪碧大图里的坐标位置，一般被播放器用于实现预览。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebVttUrl = null;

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
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 轨道信息
 * @class
 */
class MediaTrack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 轨道类型，取值有：
<ul>
<li>Video ：视频轨道。视频轨道由以下 Item 组成：<ul><li>VideoTrackItem</li><li>MediaTransitionItem</li> <li>EmptyTrackItem</li></ul> </li>
<li>Audio ：音频轨道。音频轨道由以下 Item 组成：<ul><li>AudioTrackItem</li><li>MediaTransitionItem</li><li>EmptyTrackItem</li></ul></li>
<li>Sticker ：贴图轨道。贴图轨道以下 Item 组成：<ul><li> StickerTrackItem</li><li>EmptyTrackItem</li></ul></li>	
</ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 轨道上的媒体片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MediaTrackItem> || null}
         */
        this.TrackItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TrackItems) {
            this.TrackItems = new Array();
            for (let z in params.TrackItems) {
                let obj = new MediaTrackItem();
                obj.deserialize(params.TrackItems[z]);
                this.TrackItems.push(obj);
            }
        }

    }
}

/**
 * 视频处理输出文件信息参数。
 * @class
 */
class MediaOutputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出文件 Bucket 所属地域，如 ap-guangzhou  。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 输出文件 Bucket 。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 输出文件目录，目录名必须以 "/" 结尾。
         * @type {string || null}
         */
        this.Dir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Dir = 'Dir' in params ? params.Dir : null;

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
         * 文件类型，例如 mp4、flv 等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 媒体文件 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 媒体文件播放地址。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

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
 * 输出的媒体文件信息。
 * @class
 */
class ComposeMediaOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名称，最长 64 个字符。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 描述信息，最长 128 个字符。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 封装格式，可选值：mp4、mp3。其中，mp3 为纯音频文件。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 输出的视频信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputVideoStream || null}
         */
        this.VideoStream = null;

        /**
         * 输出的音频信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputAudioStream || null}
         */
        this.AudioStream = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Container = 'Container' in params ? params.Container : null;

        if (params.VideoStream) {
            let obj = new OutputVideoStream();
            obj.deserialize(params.VideoStream)
            this.VideoStream = obj;
        }

        if (params.AudioStream) {
            let obj = new OutputAudioStream();
            obj.deserialize(params.AudioStream)
            this.AudioStream = obj;
        }
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

    }
}

/**
 * 视频转拉任务信息
 * @class
 */
class PullUploadTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转拉上传任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>

注意：此字段可能返回 null，表示取不到有效值。
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
         * 转拉上传完成后生成的视频 ID。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 转拉完成后生成的媒体文件基础信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaBasicInfo || null}
         */
        this.MediaBasicInfo = null;

        /**
         * 转拉上传完成后生成的播放地址。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 若转拉上传时指定了视频处理流程，则该参数为流程任务 ID。
         * @type {string || null}
         */
        this.ProcedureTaskId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaBasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.MediaBasicInfo)
            this.MediaBasicInfo = obj;
        }
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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

        /**
         * 截帧间隔，单位为秒，最小值为 0.5 秒。
         * @type {number || null}
         */
        this.ScreenshotInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;

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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
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

        /**
         * 视频片头片尾识别结果，当 Type 为
 HeadTailRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskHeadTailResult || null}
         */
        this.HeadTailTask = null;

        /**
         * 物体识别结果，当 Type 为
 ObjectRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AiRecognitionTaskObjectResult || null}
         */
        this.ObjectTask = null;

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

        if (params.HeadTailTask) {
            let obj = new AiRecognitionTaskHeadTailResult();
            obj.deserialize(params.HeadTailTask)
            this.HeadTailTask = obj;
        }

        if (params.ObjectTask) {
            let obj = new AiRecognitionTaskObjectResult();
            obj.deserialize(params.ObjectTask)
            this.ObjectTask = obj;
        }

    }
}

module.exports = {
    Canvas: Canvas,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    DescribeAllClassRequest: DescribeAllClassRequest,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    SvgWatermarkInput: SvgWatermarkInput,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    TransitionOpertion: TransitionOpertion,
    AudioTrackItem: AudioTrackItem,
    TagConfigureInfo: TagConfigureInfo,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    MediaInputInfo: MediaInputInfo,
    CreateImageSpriteTask2017: CreateImageSpriteTask2017,
    TempCertificate: TempCertificate,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    AiSampleWord: AiSampleWord,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    AudioTransform: AudioTransform,
    ComposeMediaResponse: ComposeMediaResponse,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AudioTemplateInfo: AudioTemplateInfo,
    ExecuteFunctionResponse: ExecuteFunctionResponse,
    CoverConfigureInfo: CoverConfigureInfo,
    ComposeMediaRequest: ComposeMediaRequest,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    AiRecognitionTaskHeadTailResultInput: AiRecognitionTaskHeadTailResultInput,
    PushUrlCacheResponse: PushUrlCacheResponse,
    HeadTailConfigureInfo: HeadTailConfigureInfo,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    CreateProcedureTemplateRequest: CreateProcedureTemplateRequest,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    MediaTransitionItem: MediaTransitionItem,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    ConcatTask2017: ConcatTask2017,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    FileUploadTask: FileUploadTask,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    FileDeleteTask: FileDeleteTask,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    EditMediaTaskInput: EditMediaTaskInput,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    CoverBySnapshotTaskOutput: CoverBySnapshotTaskOutput,
    CommitUploadRequest: CommitUploadRequest,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    EditMediaResponse: EditMediaResponse,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    ProcessMediaByUrlRequest: ProcessMediaByUrlRequest,
    ModifyMediaInfoRequest: ModifyMediaInfoRequest,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    MediaAnimatedGraphicsInfo: MediaAnimatedGraphicsInfo,
    MediaMetaData: MediaMetaData,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    MediaProcessTaskInput: MediaProcessTaskInput,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    ProcessMediaResponse: ProcessMediaResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    AiSampleFaceOperation: AiSampleFaceOperation,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    LiveRealTimeClipRequest: LiveRealTimeClipRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    SimpleHlsClipResponse: SimpleHlsClipResponse,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    EditMediaRequest: EditMediaRequest,
    ConcatFileInfo2017: ConcatFileInfo2017,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    DescribeMediaInfosResponse: DescribeMediaInfosResponse,
    DeleteProcedureTemplateResponse: DeleteProcedureTemplateResponse,
    MediaTranscodeItem: MediaTranscodeItem,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    ImageWatermarkInput: ImageWatermarkInput,
    ObjectConfigureInfo: ObjectConfigureInfo,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    AiRecognitionTaskHeadTailResult: AiRecognitionTaskHeadTailResult,
    TranscodeTask2017: TranscodeTask2017,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    DescribeProcedureTemplatesRequest: DescribeProcedureTemplatesRequest,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    EmptyTrackItem: EmptyTrackItem,
    StickerTrackItem: StickerTrackItem,
    VideoTemplateInfo: VideoTemplateInfo,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    CoverBySnapshotTaskInput: CoverBySnapshotTaskInput,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    DeleteMediaResponse: DeleteMediaResponse,
    AiRecognitionTaskObjectResult: AiRecognitionTaskObjectResult,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    SearchMediaResponse: SearchMediaResponse,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    ProcessMediaRequest: ProcessMediaRequest,
    ModifyMediaInfoResponse: ModifyMediaInfoResponse,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiSampleFaceInfo: AiSampleFaceInfo,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    ObjectConfigureInfoForUpdate: ObjectConfigureInfoForUpdate,
    DeleteMediaRequest: DeleteMediaRequest,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    SimpleHlsClipRequest: SimpleHlsClipRequest,
    MediaDeleteItem: MediaDeleteItem,
    AiSamplePerson: AiSamplePerson,
    MediaAdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    ClipTask2017: ClipTask2017,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    AiRecognitionTaskHeadTailResultOutput: AiRecognitionTaskHeadTailResultOutput,
    PullEventsRequest: PullEventsRequest,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    ComposeMediaTask: ComposeMediaTask,
    HeadTailConfigureInfoForUpdate: HeadTailConfigureInfoForUpdate,
    TranscodePlayInfo2017: TranscodePlayInfo2017,
    ComposeMediaTaskInput: ComposeMediaTaskInput,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    AiRecognitionTaskObjectResultItem: AiRecognitionTaskObjectResultItem,
    MediaSnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    MediaKeyFrameDescItem: MediaKeyFrameDescItem,
    AiSampleTagOperation: AiSampleTagOperation,
    ConfirmEventsRequest: ConfirmEventsRequest,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ResetProcedureTemplateResponse: ResetProcedureTemplateResponse,
    AiAnalysisResult: AiAnalysisResult,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    MediaTranscodeInfo: MediaTranscodeInfo,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    MediaTrackItem: MediaTrackItem,
    PullEventsResponse: PullEventsResponse,
    AiRecognitionTaskObjectResultInput: AiRecognitionTaskObjectResultInput,
    OutputVideoStream: OutputVideoStream,
    ProcedureTemplate: ProcedureTemplate,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    ProcessMediaByUrlResponse: ProcessMediaByUrlResponse,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    ApplyUploadRequest: ApplyUploadRequest,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    MediaBasicInfo: MediaBasicInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    PullUploadRequest: PullUploadRequest,
    SortBy: SortBy,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    TranscodeTemplate: TranscodeTemplate,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    DescribeReviewDetailsRequest: DescribeReviewDetailsRequest,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiRecognitionTaskObjectResultOutput: AiRecognitionTaskObjectResultOutput,
    CreateClassResponse: CreateClassResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    TranscodeTaskInput: TranscodeTaskInput,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    WechatPublishTask: WechatPublishTask,
    ClipFileInfo2017: ClipFileInfo2017,
    StatDataItem: StatDataItem,
    MediaSourceData: MediaSourceData,
    PushUrlCacheRequest: PushUrlCacheRequest,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    EventContent: EventContent,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    OutputAudioStream: OutputAudioStream,
    ModifyClassRequest: ModifyClassRequest,
    ComposeMediaTaskOutput: ComposeMediaTaskOutput,
    DescribeMediaInfosRequest: DescribeMediaInfosRequest,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    DeleteProcedureTemplateRequest: DeleteProcedureTemplateRequest,
    WatermarkInput: WatermarkInput,
    AiSampleWordInfo: AiSampleWordInfo,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    DeleteClassResponse: DeleteClassResponse,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaSampleSnapshotInfo: MediaSampleSnapshotInfo,
    MediaInfo: MediaInfo,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    MediaKeyFrameDescInfo: MediaKeyFrameDescInfo,
    CreateClassRequest: CreateClassRequest,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    CreateProcedureTemplateResponse: CreateProcedureTemplateResponse,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    DescribeTasksResponse: DescribeTasksResponse,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    ProcedureTask: ProcedureTask,
    TaskSimpleInfo: TaskSimpleInfo,
    MediaVideoStreamItem: MediaVideoStreamItem,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeReviewDetailsResponse: DescribeReviewDetailsResponse,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    SnapshotByTimeOffset2017: SnapshotByTimeOffset2017,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    MediaAudioStreamItem: MediaAudioStreamItem,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    DescribeAllClassResponse: DescribeAllClassResponse,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    EditMediaStreamInfo: EditMediaStreamInfo,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    LiveRealTimeClipResponse: LiveRealTimeClipResponse,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    CommitUploadResponse: CommitUploadResponse,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    AiContentReviewResult: AiContentReviewResult,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    ApplyUploadResponse: ApplyUploadResponse,
    DeleteClassRequest: DeleteClassRequest,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    ImageTransform: ImageTransform,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ExecuteFunctionRequest: ExecuteFunctionRequest,
    ConfirmEventsResponse: ConfirmEventsResponse,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    VideoTrackItem: VideoTrackItem,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    ProcessMediaByProcedureRequest: ProcessMediaByProcedureRequest,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    PornConfigureInfo: PornConfigureInfo,
    AiRecognitionTaskObjectSeqmentItem: AiRecognitionTaskObjectSeqmentItem,
    MediaProcessTaskCoverBySnapshotResult: MediaProcessTaskCoverBySnapshotResult,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    DescribeProcedureTemplatesResponse: DescribeProcedureTemplatesResponse,
    SearchMediaRequest: SearchMediaRequest,
    AudioVolumeParam: AudioVolumeParam,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    ModifyClassResponse: ModifyClassResponse,
    EditMediaFileInfo: EditMediaFileInfo,
    ProcessMediaByProcedureResponse: ProcessMediaByProcedureResponse,
    PullUploadResponse: PullUploadResponse,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    ResetProcedureTemplateRequest: ResetProcedureTemplateRequest,
    SnapshotByTimeOffsetTask2017: SnapshotByTimeOffsetTask2017,
    MediaClassInfo: MediaClassInfo,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    MediaImageSpriteItem: MediaImageSpriteItem,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    MediaTrack: MediaTrack,
    MediaOutputInfo: MediaOutputInfo,
    EditMediaTaskOutput: EditMediaTaskOutput,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    ComposeMediaOutput: ComposeMediaOutput,
    PullUploadTask: PullUploadTask,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    AiRecognitionResult: AiRecognitionResult,

}
