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
<li>topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
目前，当 Type 为 image，该字段仅支持 topLeft。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * 图片水印模板，该字段仅对图片水印模板有效。
         * @type {ImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，该字段仅对文字水印模板有效。
         * @type {TextWatermarkTemplate || null}
         */
        this.TextTemplate = null;

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
            let obj = new ImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/11701#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
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
 * AI 视频智能分析输入参数类型
 * @class
 */
class AiAnalysisTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容分析模板 ID ，固定为 10，同时进行智能分类、智能标签分析、智能封面分析。
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
<li>WechatPublish：微信发布任务。</li>
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
 * 智能分类任务输入类型
 * @class
 */
class AiAnalysisTaskClassificationInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能分类模板 ID ，固定为 10 。
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
 * CreateTranscodeTemplate请求参数结构体
 * @class
 */
class CreateTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg。其中，mp3、flac、ogg 为纯音频文件。
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
         * 水印图片地址，仅当 Type 为 image，该字段有值。
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;

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
<li>Description：智能描述</li>
<li>Highlight：智能精彩片断</li>
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
         * @type {string || null}
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
默认值：0px，表示 Height 按照 Width 对视频宽度的比例缩放。
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 智能封面结果信息
 * @class
 */
class AiAnalysisTaskCoverOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 智能内容审核任务类型
 * @class
 */
class AiContentReviewTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频内容审核模板 ID，可以填 10 和 20。<li>10：对视频画面进行鉴黄、鉴暴、鉴政审核；</li><li>20：对视频画面进行鉴黄、鉴暴、鉴政审核，并对 Asr 和 Ocr 文字进行鉴黄、鉴政审核。</li>
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
         * 视频帧率，取值范围：[0, 60],单位：Hz。
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
 * 智能分类结果信息
 * @class
 */
class AiAnalysisTaskClassificationOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能分类列表。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 智能分类结果
 * @class
 */
class MediaAiAnalysisClassificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能分类的类别名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * 智能分类的可信度，取值范围是 0 到 100。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 视频内容审核智能画面鉴恐任务的查询结果，当任务类型为 Political 时有效。
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
         * 雪碧图规格，参见[雪碧图截图模板](https://cloud.tencent.com/document/product/266/11702#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/11702#.E6.8C.87.E5.AE.9A.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/11701#.E9.A2.84.E7.BD.AE.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
 * 智能标签结果信息
 * @class
 */
class MediaAiAnalysisTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 标签的可信度，取值范围是 0 到 100。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 智能标签任务输入。
         * @type {AiAnalysisTaskTagInput || null}
         */
        this.Input = null;

        /**
         * 智能标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AiAnalysisTaskTagOutput> || null}
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
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiAnalysisTaskTagOutput();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
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
 * 智能标签结果信息
 * @class
 */
class AiAnalysisTaskTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能标签列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MediaAiAnalysisTagItem || null}
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
            let obj = new MediaAiAnalysisTagItem();
            obj.deserialize(params.TagSet)
            this.TagSet = obj;
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
<li>WechatPublishComplete：微信发布完成。</li>
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
         * @type {PullFileTask || null}
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
        this.WechatPublishComplete = null;

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
            let obj = new PullFileTask();
            obj.deserialize(params.PullCompleteEvent)
            this.PullCompleteEvent = obj;
        }

        if (params.EditMediaCompleteEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaCompleteEvent)
            this.EditMediaCompleteEvent = obj;
        }

        if (params.WechatPublishComplete) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishComplete)
            this.WechatPublishComplete = obj;
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
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/11701#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
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
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 250 个字符。
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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 文字水印模板
 * @class
 */
class TextWatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字体类型，目前仅支持 arial.ttf。
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
 * 智能标签任务输入类型
 * @class
 */
class AiAnalysisTaskTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能分类模板 ID ，固定为 10 。
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
 * 智能封面信息
 * @class
 */
class MediaAiAnalysisCoverItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 智能封面的可信度，取值范围是 0 到 100。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 智能封面任务输入。
         * @type {AiAnalysisTaskCoverInput || null}
         */
        this.Input = null;

        /**
         * 智能分类任务输出。
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
         * @type {number || null}
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
         * 截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/11702#.E6.8C.87.E5.AE.9A.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg。其中，mp3、flac、ogg 为纯音频文件。
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
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数。
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
        this.Definition = 'Definition' in params ? params.Definition : null;
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
         * 删除由Type参数指定的种类下的视频模板号，模板定义参见[转码模板](https://cloud.tencent.com/document/product/266/11701#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
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
 * 雪碧图信息
 * @class
 */
class MediaImageSpriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/11702#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
 * 智能分类任务输入类型
 * @class
 */
class AiAnalysisTaskCoverInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频智能封面模板 ID ，固定为 10 。
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
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频处理任务的任务 ID
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
 * 视频转拉任务信息
 * @class
 */
class PullFileTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转拉上传任务 ID。
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
         * 转拉上传完成后生成的视频 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 转拉上传完成后生成的播放地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 若转拉上传时指定了视频处理流程，则该参数为流程任务 ID。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;

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
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 250 个字符。
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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
<li>topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
默认值：topLeft。目前，当 Type 为 image，该字段仅支持 topLeft。
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。</li>
默认值：0px。
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。</li>
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
         * @type {TextWatermarkTemplate || null}
         */
        this.TextTemplate = null;

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
            let obj = new TextWatermarkTemplate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 图片水印模板，仅当 Type 为 image，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageWatermarkTemplate || null}
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，仅当 Type 为 text，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextWatermarkTemplate || null}
         */
        this.TextTemplate = null;

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
            let obj = new TextWatermarkTemplate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;

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
 * 采样截图信息
 * @class
 */
class MediaSampleSnapshotItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/11702#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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

module.exports = {
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    TranscodePlayInfo2017: TranscodePlayInfo2017,
    DescribeAllClassRequest: DescribeAllClassRequest,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    MediaKeyFrameDescInfo: MediaKeyFrameDescInfo,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    CreateClassRequest: CreateClassRequest,
    ClipTask2017: ClipTask2017,
    MediaSnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo,
    MediaKeyFrameDescItem: MediaKeyFrameDescItem,
    LiveRealTimeClipRequest: LiveRealTimeClipRequest,
    ConfirmEventsRequest: ConfirmEventsRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    SimpleHlsClipResponse: SimpleHlsClipResponse,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    ProcedureTask: ProcedureTask,
    AiAnalysisResult: AiAnalysisResult,
    ConcatFileInfo2017: ConcatFileInfo2017,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    MediaTranscodeInfo: MediaTranscodeInfo,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    DescribeMediaInfosResponse: DescribeMediaInfosResponse,
    TempCertificate: TempCertificate,
    DescribeTasksRequest: DescribeTasksRequest,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    PullEventsResponse: PullEventsResponse,
    SnapshotByTimeOffset2017: SnapshotByTimeOffset2017,
    MediaProcessTaskInput: MediaProcessTaskInput,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    ImageWatermarkInput: ImageWatermarkInput,
    MediaAudioStreamItem: MediaAudioStreamItem,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    ProcessMediaByUrlResponse: ProcessMediaByUrlResponse,
    TranscodeTask2017: TranscodeTask2017,
    TranscodeTemplate: TranscodeTemplate,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    DescribeAllClassResponse: DescribeAllClassResponse,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    MediaInputInfo: MediaInputInfo,
    EditMediaStreamInfo: EditMediaStreamInfo,
    LiveRealTimeClipResponse: LiveRealTimeClipResponse,
    CommitUploadResponse: CommitUploadResponse,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    VideoTemplateInfo: VideoTemplateInfo,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    TaskSimpleInfo: TaskSimpleInfo,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AiContentReviewResult: AiContentReviewResult,
    ApplyUploadResponse: ApplyUploadResponse,
    CoverBySnapshotTaskInput: CoverBySnapshotTaskInput,
    DeleteClassRequest: DeleteClassRequest,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    ApplyUploadRequest: ApplyUploadRequest,
    ProcessMediaResponse: ProcessMediaResponse,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    CreateImageSpriteTask2017: CreateImageSpriteTask2017,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    MediaBasicInfo: MediaBasicInfo,
    AudioTemplateInfo: AudioTemplateInfo,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    SortBy: SortBy,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    WatermarkInput: WatermarkInput,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    DeleteMediaResponse: DeleteMediaResponse,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    SearchMediaResponse: SearchMediaResponse,
    ConfirmEventsResponse: ConfirmEventsResponse,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    EventContent: EventContent,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    MediaTranscodeItem: MediaTranscodeItem,
    ProcessMediaRequest: ProcessMediaRequest,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TextWatermarkTemplate: TextWatermarkTemplate,
    PullEventsRequest: PullEventsRequest,
    ModifyMediaInfoResponse: ModifyMediaInfoResponse,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    SearchMediaRequest: SearchMediaRequest,
    CreateClassResponse: CreateClassResponse,
    MediaClassInfo: MediaClassInfo,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    DeleteClassResponse: DeleteClassResponse,
    ModifyClassResponse: ModifyClassResponse,
    EditMediaFileInfo: EditMediaFileInfo,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    TranscodeTaskInput: TranscodeTaskInput,
    ConcatTask2017: ConcatTask2017,
    FileUploadTask: FileUploadTask,
    EditMediaTask: EditMediaTask,
    WechatPublishTask: WechatPublishTask,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    ClipFileInfo2017: ClipFileInfo2017,
    CommitUploadRequest: CommitUploadRequest,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    SnapshotByTimeOffsetTask2017: SnapshotByTimeOffsetTask2017,
    MediaSourceData: MediaSourceData,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    DeleteMediaRequest: DeleteMediaRequest,
    FileDeleteTask: FileDeleteTask,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    EditMediaTaskInput: EditMediaTaskInput,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    ModifyClassRequest: ModifyClassRequest,
    SimpleHlsClipRequest: SimpleHlsClipRequest,
    MediaDeleteItem: MediaDeleteItem,
    DescribeMediaInfosRequest: DescribeMediaInfosRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    CoverBySnapshotTaskOutput: CoverBySnapshotTaskOutput,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    MediaImageSpriteItem: MediaImageSpriteItem,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    PullFileTask: PullFileTask,
    ProcessMediaByUrlRequest: ProcessMediaByUrlRequest,
    MediaVideoStreamItem: MediaVideoStreamItem,
    ModifyMediaInfoRequest: ModifyMediaInfoRequest,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    MediaOutputInfo: MediaOutputInfo,
    MediaAnimatedGraphicsInfo: MediaAnimatedGraphicsInfo,
    MediaMetaData: MediaMetaData,
    EditMediaTaskOutput: EditMediaTaskOutput,
    MediaProcessTaskCoverBySnapshotResult: MediaProcessTaskCoverBySnapshotResult,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    WatermarkTemplate: WatermarkTemplate,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaSampleSnapshotInfo: MediaSampleSnapshotInfo,
    MediaInfo: MediaInfo,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,

}
