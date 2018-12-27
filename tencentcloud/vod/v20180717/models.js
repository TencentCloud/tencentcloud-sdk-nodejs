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
        this.RequestId = params.RequestId || null;

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
        this.SecretId = params.SecretId || null;
        this.SecretKey = params.SecretKey || null;
        this.Token = params.Token || null;
        this.ExpiredTime = params.ExpiredTime || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.CoverUrl = params.CoverUrl || null;
        this.RequestId = params.RequestId || null;

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
        this.ClassId = params.ClassId || null;
        this.ClassName = params.ClassName || null;
        this.SubAppId = params.SubAppId || null;

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
        this.SubAppId = params.SubAppId || null;

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
        this.Url = params.Url || null;
        this.Definition = params.Definition || null;
        this.Bitrate = params.Bitrate || null;
        this.Height = params.Height || null;
        this.Width = params.Width || null;
        this.Size = params.Size || null;
        this.Duration = params.Duration || null;
        this.Container = params.Container || null;
        this.Md5 = params.Md5 || null;

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
        this.Type = params.Type || null;
        this.Definition = params.Definition || null;

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
        this.Bitrate = params.Bitrate || null;
        this.SamplingRate = params.SamplingRate || null;
        this.Codec = params.Codec || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileIds = params.FileIds || null;
        this.Filters = params.Filters || null;

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
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * 该张截图的 URL 地址。
         * @type {string || null}
         */
        this.Url = null;

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
        this.TimeOffset = params.TimeOffset || null;
        this.Url = params.Url || null;
        this.WaterMarkDefinition = params.WaterMarkDefinition || null;

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
         * 生成的截图 url 列表。
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

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
        this.Definition = params.Definition || null;
        this.SampleType = params.SampleType || null;
        this.Interval = params.Interval || null;
        this.ImageUrlSet = params.ImageUrlSet || null;
        this.WaterMarkDefinition = params.WaterMarkDefinition || null;

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
        this.ParentId = params.ParentId || null;
        this.ClassName = params.ClassName || null;
        this.SubAppId = params.SubAppId || null;

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
         * 每一张雪碧图大图的地址。
         * @type {Array.<string> || null}
         */
        this.ImageUrlSet = null;

        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在在雪碧大图里的坐标位置，一般被播放器用于实现预览。
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
        this.Definition = params.Definition || null;
        this.Height = params.Height || null;
        this.Width = params.Width || null;
        this.TotalCount = params.TotalCount || null;
        this.ImageUrlSet = params.ImageUrlSet || null;
        this.WebVttUrl = params.WebVttUrl || null;

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
        this.TimeOffset = params.TimeOffset || null;
        this.Content = params.Content || null;

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
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * 媒体封面地址。
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
        this.FileId = params.FileId || null;
        this.MediaUrl = params.MediaUrl || null;
        this.CoverUrl = params.CoverUrl || null;
        this.RequestId = params.RequestId || null;

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
         * @type {string || null}
         */
        this.SourceType = null;

        /**
         * 用户创建文件时透传的字段
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
        this.SourceType = params.SourceType || null;
        this.SourceContext = params.SourceContext || null;

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
        this.ClassId = params.ClassId || null;
        this.RequestId = params.RequestId || null;

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
        this.ClassId = params.ClassId || null;
        this.ParentId = params.ParentId || null;
        this.ClassName = params.ClassName || null;
        this.Level = params.Level || null;
        this.SubClassIdSet = params.SubClassIdSet || null;

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
        this.Bitrate = params.Bitrate || null;
        this.Height = params.Height || null;
        this.Width = params.Width || null;
        this.Codec = params.Codec || null;
        this.Fps = params.Fps || null;

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
        this.RequestId = params.RequestId || null;

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
        this.FileId = params.FileId || null;
        this.Name = params.Name || null;
        this.Description = params.Description || null;
        this.ClassId = params.ClassId || null;
        this.ExpireTime = params.ExpireTime || null;
        this.CoverData = params.CoverData || null;

        if (params.AddKeyFrameDescs) {
            this.AddKeyFrameDescs = new Array();
            for (let z in params.AddKeyFrameDescs) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.AddKeyFrameDescs[z]);
                this.AddKeyFrameDescs.push(obj);
            }
        }
        this.DeleteKeyFrameDescs = params.DeleteKeyFrameDescs || null;
        this.ClearKeyFrameDescs = params.ClearKeyFrameDescs || null;
        this.AddTags = params.AddTags || null;
        this.DeleteTags = params.DeleteTags || null;
        this.ClearTags = params.ClearTags || null;
        this.SubAppId = params.SubAppId || null;

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
        this.Size = params.Size || null;
        this.Container = params.Container || null;
        this.Bitrate = params.Bitrate || null;
        this.Height = params.Height || null;
        this.Width = params.Width || null;
        this.Duration = params.Duration || null;
        this.Rotate = params.Rotate || null;

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
        this.VideoDuration = params.VideoDuration || null;
        this.AudioDuration = params.AudioDuration || null;

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
        this.Text = params.Text || null;
        this.Tags = params.Tags || null;
        this.ClassIds = params.ClassIds || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.SourceType = params.SourceType || null;
        this.StreamId = params.StreamId || null;
        this.Vid = params.Vid || null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.SubAppId = params.SubAppId || null;

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
         * @type {string || null}
         */
        this.MediaStoragePath = null;

        /**
         * 封面存储路径，用于上传接口存储封面的对象键（Key）。
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
        this.StorageBucket = params.StorageBucket || null;
        this.StorageRegion = params.StorageRegion || null;
        this.VodSessionKey = params.VodSessionKey || null;
        this.MediaStoragePath = params.MediaStoragePath || null;
        this.CoverStoragePath = params.CoverStoragePath || null;

        if (params.TempCertificate) {
            let obj = new TempCertificate();
            obj.deserialize(params.TempCertificate)
            this.TempCertificate = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.ClassId = params.ClassId || null;
        this.SubAppId = params.SubAppId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.MediaType = params.MediaType || null;
        this.MediaName = params.MediaName || null;
        this.CoverType = params.CoverType || null;
        this.Procedure = params.Procedure || null;
        this.ExpireTime = params.ExpireTime || null;
        this.StorageRegion = params.StorageRegion || null;
        this.ClassId = params.ClassId || null;
        this.SourceContext = params.SourceContext || null;
        this.SubAppId = params.SubAppId || null;

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
        this.VodSessionKey = params.VodSessionKey || null;
        this.SubAppId = params.SubAppId || null;

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
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * 同一规格的截图信息集合，每个元素代表一张截图。
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
        this.Definition = params.Definition || null;

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
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 媒体文件描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 媒体文件的创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 媒体文件的过期时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。“9999-12-31T23:59:59Z”表示永不过期。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 媒体文件的分类 ID。
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 媒体文件的分类名称。
         * @type {string || null}
         */
        this.ClassName = null;

        /**
         * 媒体文件的分类路径，分类间以“-”分隔，如“新的一级分类 - 新的二级分类”。
         * @type {string || null}
         */
        this.ClassPath = null;

        /**
         * 媒体文件的封面图片地址。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 媒体文件的封装格式，例如 mp4、flv 等。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 原始媒体文件的 URL 地址。
         * @type {string || null}
         */
        this.MediaUrl = null;

        /**
         * 该媒体文件的来源信息。
         * @type {MediaSourceData || null}
         */
        this.SourceInfo = null;

        /**
         * 媒体文件存储地区，如 ap-guangzhou，参见[地域列表](https://cloud.tencent.com/document/api/213/15692#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 媒体文件的标签信息。
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 直播录制文件的唯一标识
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
        this.Name = params.Name || null;
        this.Description = params.Description || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;
        this.ExpireTime = params.ExpireTime || null;
        this.ClassId = params.ClassId || null;
        this.ClassName = params.ClassName || null;
        this.ClassPath = params.ClassPath || null;
        this.CoverUrl = params.CoverUrl || null;
        this.Type = params.Type || null;
        this.MediaUrl = params.MediaUrl || null;

        if (params.SourceInfo) {
            let obj = new MediaSourceData();
            obj.deserialize(params.SourceInfo)
            this.SourceInfo = obj;
        }
        this.StorageRegion = params.StorageRegion || null;
        this.TagSet = params.TagSet || null;
        this.Vid = params.Vid || null;

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
         * @type {MediaBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 元信息。包括视频流信息、音频流信息等。
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * 转码结果信息。包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
         * @type {MediaTranscodeInfo || null}
         */
        this.TranscodeInfo = null;

        /**
         * 转动图结果信息。对视频转动图（如 gif）后，动图相关信息。
         * @type {MediaAnimatedGraphicsInfo || null}
         */
        this.AnimatedGraphicsInfo = null;

        /**
         * 采样截图信息。对视频采样截图后，相关截图信息。
         * @type {MediaSampleSnapshotInfo || null}
         */
        this.SampleSnapshotInfo = null;

        /**
         * 雪碧图信息。对视频截取雪碧图之后，雪碧的相关信息。
         * @type {MediaImageSpriteInfo || null}
         */
        this.ImageSpriteInfo = null;

        /**
         * 指定时间点截图信息。对视频依照指定时间点截图后，各个截图的信息。
         * @type {MediaSnapshotByTimeOffsetInfo || null}
         */
        this.SnapshotByTimeOffsetInfo = null;

        /**
         * 视频打点信息。对视频设置的各个打点信息。
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
        this.FileId = params.FileId || null;

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
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/11701#.E9.A2.84.E7.BD.AE.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
        this.Url = params.Url || null;
        this.Definition = params.Definition || null;
        this.Container = params.Container || null;
        this.Height = params.Height || null;
        this.Width = params.Width || null;
        this.Bitrate = params.Bitrate || null;
        this.Size = params.Size || null;
        this.Md5 = params.Md5 || null;
        this.StartTimeOffset = params.StartTimeOffset || null;
        this.EndTimeOffset = params.EndTimeOffset || null;

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
        this.Field = params.Field || null;
        this.Order = params.Order || null;

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
        this.FileId = params.FileId || null;

        if (params.DeleteParts) {
            this.DeleteParts = new Array();
            for (let z in params.DeleteParts) {
                let obj = new MediaDeleteItem();
                obj.deserialize(params.DeleteParts[z]);
                this.DeleteParts.push(obj);
            }
        }
        this.SubAppId = params.SubAppId || null;

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
         * @type {Array.<MediaInfo> || null}
         */
        this.MediaInfoSet = null;

        /**
         * 不存在的文件 ID 列表。
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
        this.NotExistFileIdSet = params.NotExistFileIdSet || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    DeleteMediaResponse: DeleteMediaResponse,
    TempCertificate: TempCertificate,
    SearchMediaResponse: SearchMediaResponse,
    ModifyMediaInfoResponse: ModifyMediaInfoResponse,
    ModifyClassRequest: ModifyClassRequest,
    DescribeAllClassRequest: DescribeAllClassRequest,
    MediaTranscodeItem: MediaTranscodeItem,
    MediaDeleteItem: MediaDeleteItem,
    MediaAudioStreamItem: MediaAudioStreamItem,
    MediaKeyFrameDescInfo: MediaKeyFrameDescInfo,
    DescribeMediaInfosRequest: DescribeMediaInfosRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    CreateClassRequest: CreateClassRequest,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    MediaImageSpriteItem: MediaImageSpriteItem,
    MediaSnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo,
    MediaKeyFrameDescItem: MediaKeyFrameDescItem,
    CommitUploadResponse: CommitUploadResponse,
    MediaSourceData: MediaSourceData,
    CreateClassResponse: CreateClassResponse,
    MediaClassInfo: MediaClassInfo,
    MediaVideoStreamItem: MediaVideoStreamItem,
    ModifyClassResponse: ModifyClassResponse,
    ModifyMediaInfoRequest: ModifyMediaInfoRequest,
    MediaAnimatedGraphicsInfo: MediaAnimatedGraphicsInfo,
    MediaMetaData: MediaMetaData,
    SearchMediaRequest: SearchMediaRequest,
    ApplyUploadResponse: ApplyUploadResponse,
    DeleteClassRequest: DeleteClassRequest,
    DescribeAllClassResponse: DescribeAllClassResponse,
    DeleteClassResponse: DeleteClassResponse,
    ApplyUploadRequest: ApplyUploadRequest,
    MediaSampleSnapshotInfo: MediaSampleSnapshotInfo,
    CommitUploadRequest: CommitUploadRequest,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    MediaBasicInfo: MediaBasicInfo,
    MediaInfo: MediaInfo,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    SortBy: SortBy,
    MediaTranscodeInfo: MediaTranscodeInfo,
    DeleteMediaRequest: DeleteMediaRequest,
    DescribeMediaInfosResponse: DescribeMediaInfosResponse,

}
