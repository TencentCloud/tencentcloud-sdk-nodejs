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
 * ImageModeration请求参数结构体
 * @class
 */
class ImageModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用默认的识别策略；传入则会在审核时根据业务场景采取不同的审核策略。<br>备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。<br>取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段表示待检测图片文件内容的Base64编码，图片**大小不超过5MB**，建议**分辨率不低于256x256**，否则可能会影响识别效果。<br>备注： **该字段与FileUrl必须选择输入其中一个**。
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 该字段表示待检测图片文件的访问链接，图片支持PNG、JPG、JPEG、BMP、GIF、WEBP格式，**大小不超过5MB**，建议**分辨率不低于256x256**；图片下载时间限制为3秒，超过则会返回下载超时。<br>备注：**该字段与FileContent必须选择输入其中一个**。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * **GIF/长图检测专用**，用于表示GIF截帧频率（每隔多少张图片抽取一帧进行检测），长图则按照长边：短边取整计算要切割的总图数；默认值为0，此时只会检测GIF的第一帧或对长图不进行切分处理。<br>备注：Interval与MaxFrames参数需要组合使用。例如，Interval=3, MaxFrames=400，则代表在检测GIF/长图时，将每间隔2帧检测一次且最多检测400帧。
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * **GIF/长图检测专用**，用于标识最大截帧数量；默认值为1，此时只会检测输入GIF的第一帧或对长图不进行切分处理（可能会造成处理超时）。<br>备注：Interval与MaxFrames参数需要组合使用。例如，Interval=3, MaxFrames=400，则代表在检测GIF/长图时，将每间隔2帧检测一次且最多检测400帧。
         * @type {number || null}
         */
        this.MaxFrames = null;

        /**
         * 该字段表示待检测对象对应的用户相关信息，若填入则可甄别相应违规风险用户。
         * @type {User || null}
         */
        this.User = null;

        /**
         * 该字段表示待检测对象对应的设备相关信息，若填入则可甄别相应违规风险设备。
         * @type {Device || null}
         */
        this.Device = null;

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
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxFrames = 'MaxFrames' in params ? params.MaxFrames : null;

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

    }
}

/**
 * 用于返回实体检测结果详情
 * @class
 */
class ObjectResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回实体识别出的实体场景结果，如二维码、logo、图片OCR等场景。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 该字段用于返回针对当前恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回当前恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior* 等子标签。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该字段用于返回命中当前恶意标签下子标签的分值，取值为**0-100**，如：*Porn-SexBehavior 99* 则代表相应识别内容命中色情-性行为标签的分值为99。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该标签用于返回所识别出的实体名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 该标签用于返回所识别出实体的详细信息，如：序号、命中标签名称、位置坐标等信息，详细返回内容敬请参考相应数据结构（[ObjectDetail
](https://cloud.tencent.com/document/api/1125/53274#ObjectDetail)）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectDetail> || null}
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Names = 'Names' in params ? params.Names : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ObjectDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * 用于返回OCR文本结果详情，图片中的文本越多，可能导致接口返回时间增加。
 * @class
 */
class OcrTextDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回OCR识别出的文本内容。<br>备注：OCR文本识别上限在**5000字节内**。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段**仅当Label为Custom自定义关键词时有效**，用于返回自定义库的ID，以方便自定义库管理和配置。
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 该字段**仅当Label为Custom自定义关键词时有效**，用于返回自定义库的名称，以方便自定义库管理和配置。
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 该参数用于返回在当前label下命中的关键词。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 该参数用于返回在当前恶意标签下模型命中的分值，取值为**0-100**；分数越高，代表当前场景越符合该恶意标签所对应的场景。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该参数用于返回OCR检测框在图片中的位置（左上角xy坐标、长宽、旋转角度），以方便快速定位识别文字的相关信息。
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * 该参数用于返回OCR文本识别结果的置信度，取值在**0**（**置信度最低**）-**100**（**置信度最高**），越高代表对应图像越有可能是识别出的文字；如：*你好 99*，则表明OCR识别框内的文字大概率是”你好“。
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 该字段用于返回检测结果所对应的恶意二级标签。
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
        this.Text = 'Text' in params ? params.Text : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * 实体检测结果明细，当检测场景为实体、广告台标、二维码时表示模型检测目标框的标签名称、标签值、标签分数以及检测框的位置信息。
 * @class
 */
class ObjectDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数用于返回识别对象的ID以方便识别和区分。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 该参数用于返回命中的实体标签。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 该参数用于返回对应实体标签所对应的值或内容。如：当标签为*二维码(QrCode)*时，该字段为识别出的二维码对应的URL地址。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 该参数用于返回对应实体标签命中的分值，取值为**0-100**，如：*QrCode 99* 则代表相应识别内容命中二维码场景标签的概率非常高。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回实体检测框的坐标位置（左上角xy坐标、长宽、旋转角度）以方便快速定位实体的相关信息。
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * 该参数用于返回命中的实体二级标签。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;

    }
}

/**
 * 用于返回OCR结果检测详情
 * @class
 */
class OcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段表示识别场景，取值默认为OCR（图片OCR识别）。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 该字段用于返回优先级最高的恶意标签对应的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回OCR检测结果所对应的优先级最高的恶意标签，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回当前标签（Label）下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回OCR识别出的结果的详细内容，如：文本内容、对应标签、识别框位置等信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OcrTextDetail> || null}
         */
        this.Details = null;

        /**
         * 该字段用于返回OCR识别出的文字信息。
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
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new OcrTextDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 用于返回自定义库/黑白库的明细信息
 * @class
 */
class LibDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回识别对象的ID以方便识别和区分。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。
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
         * 该字段用于返回识别图像对象的ID以方便文件管理。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回其他自定义标签以满足您的定制化场景需求，若无需求则可略过。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 该字段用于返回对应模型命中的分值，取值为**0-100**，如：*Porn 99* 则代表相应识别内容命中色情标签的分值为99。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 坐标
 * @class
 */
class Location extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该参数用于返回检测框**左上角位置的横坐标**（x）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 该参数用于返回检测框**左上角位置的纵坐标**（y）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 该参数用于返回**检测框的宽度**（由左上角出发在x轴向右延伸的长度），结合剩余参数可唯一确定检测框的大小和位置。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 该参数用于返回**检测框的高度**（由左上角出发在y轴向下延伸的长度），结合剩余参数可唯一确定检测框的大小和位置。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 该参数用于返回**检测框的旋转角度**，该参数结合X和Y两个坐标参数可唯一确定检测框的具体位置；取值：**0-360**（**角度制**），方向为**逆时针旋转**。
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
 * 分类模型命中结果
 * @class
 */
class LabelResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回模型识别出的场景结果，如广告、色情、有害内容等场景。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 该字段用于返回针对当前恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回对应恶意标签下的子标签的检测结果，如：*Porn-SexBehavior*等子标签。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表图片越有可能属于当前返回的标签；如：*色情 99*，则表明该图片非常有可能属于色情内容；*色情 0*，则表明该图片不属于色情内容。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回分类模型命中子标签的详细信息，如：序号、命中标签名称、分数等信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LabelDetailItem> || null}
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new LabelDetailItem();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * 用于返回分类模型命中子标签的详细结果
 * @class
 */
class LabelDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回识别对象的ID以方便识别和区分。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 该字段用于返回识命中的子标签名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 该字段用于返回对应子标签命中的分值，取值为**0-100**，如：*Porn-SexBehavior 99* 则代表相应识别内容命中色情-性行为标签的分值为99。
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 用于表示业务用户对应的设备信息
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段表示业务用户对应设备的IP地址，同时**支持IPv4和IPv6**地址的记录；需要与IpType参数配合使用。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 该字段表示业务用户对应的MAC地址，以方便设备识别与管理；其格式与取值与标准MAC地址一致。
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * *内测中，敬请期待。*
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * *内测中，敬请期待。*
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 该字段表示业务用户对应设备的**IMEI码**（国际移动设备识别码），该识别码可用于识别每一部独立的手机等移动通信设备，方便设备识别与管理。<br>备注：格式为**15-17位纯数字**。
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * **iOS设备专用**，该字段表示业务用户对应的**IDFA**(广告标识符),这是由苹果公司提供的用于标识用户的广告标识符，由一串16进制的32位数字和字母组成。<br>
备注：苹果公司自2021年iOS14更新后允许用户手动关闭或者开启IDFA，故此字符串标记有效性可能有所降低。
         * @type {string || null}
         */
        this.IDFA = null;

        /**
         * **iOS设备专用**，该字段表示业务用户对应的**IDFV**(应用开发商标识符),这是由苹果公司提供的用于标注应用开发商的标识符，由一串16进制的32位数字和字母组成，可被用于唯一标识设备。
         * @type {string || null}
         */
        this.IDFV = null;

        /**
         * 该字段表示记录的IP地址的类型，取值：**0**（代表IPv4地址）、**1**（代表IPv6地址）；需要与IpType参数配合使用。
         * @type {number || null}
         */
        this.IpType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;
        this.IDFV = 'IDFV' in params ? params.IDFV : null;
        this.IpType = 'IpType' in params ? params.IpType : null;

    }
}

/**
 * 用于返回黑白库比对结果的详细信息
 * @class
 */
class LibResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段表示模型的场景识别结果，默认取值为Similar。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该字段用于返回图片检索模型识别的分值，取值为**0-100**，表示该审核图片**与库中样本的相似分值**，得分越高，代表当前内容越有可能命中相似图库内的样本。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回黑白库比对结果的详细信息，如：序号、库名称、恶意标签等信息；详细返回信息敬请参考对应数据结构（[LibDetail](https://cloud.tencent.com/document/product/1125/53274#LibDetail)）的描述文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LibDetail> || null}
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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new LibDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * ImageModeration返回参数结构体
 * @class
 */
class ImageModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于返回Label标签下的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该字段用于返回检测结果（LabelResults）中所对应的**优先级最高的恶意标签**，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 该字段用于返回检测结果所命中优先级最高的恶意标签下的子标签名称，如：*色情--性行为*；若未命中任何子标签则返回空字符串。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表图片越有可能属于当前返回的标签；如：*色情 99*，则表明该图片非常有可能属于色情内容；*色情 0*，则表明该图片不属于色情内容。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 该字段用于返回分类模型命中的恶意标签的详细识别结果，包括涉黄、广告等令人反感、不安全或不适宜的内容类型识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LabelResult> || null}
         */
        this.LabelResults = null;

        /**
         * 该字段用于返回物体检测模型的详细检测结果；包括：实体、广告台标、二维码等内容命中的标签名称、标签分数、坐标信息、场景识别结果、建议操作等内容审核信息；详细返回值信息可参阅对应的数据结构（ObjectResults）描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectResult> || null}
         */
        this.ObjectResults = null;

        /**
         * 该字段用于返回OCR文本识别的详细检测结果；包括：文本坐标信息、文本识别结果、建议操作等内容审核信息；详细返回值信息可参阅对应的数据结构（OcrResults）描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OcrResult> || null}
         */
        this.OcrResults = null;

        /**
         * 该字段用于返回基于图片风险库（风险黑库与正常白库）识别的结果,详细返回值信息可参阅对应的数据结构（LibResults）描述。<br>备注：图片风险库目前**暂不支持自定义库**。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LibResult> || null}
         */
        this.LibResults = null;

        /**
         * 该字段用于返回检测对象对应请求参数中的DataId。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段用于返回检测对象对应请求参数中的BizType。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 该字段用于返回根据您的需求配置的额外附加信息（Extra），如未配置则默认返回值为空。<br>备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 该字段用于返回检测对象对应的MD5校验值，以方便校验文件完整性。
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.LabelResults) {
            this.LabelResults = new Array();
            for (let z in params.LabelResults) {
                let obj = new LabelResult();
                obj.deserialize(params.LabelResults[z]);
                this.LabelResults.push(obj);
            }
        }

        if (params.ObjectResults) {
            this.ObjectResults = new Array();
            for (let z in params.ObjectResults) {
                let obj = new ObjectResult();
                obj.deserialize(params.ObjectResults[z]);
                this.ObjectResults.push(obj);
            }
        }

        if (params.OcrResults) {
            this.OcrResults = new Array();
            for (let z in params.OcrResults) {
                let obj = new OcrResult();
                obj.deserialize(params.OcrResults[z]);
                this.OcrResults.push(obj);
            }
        }

        if (params.LibResults) {
            this.LibResults = new Array();
            for (let z in params.LibResults) {
                let obj = new LibResult();
                obj.deserialize(params.LibResults[z]);
                this.LibResults.push(obj);
            }
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于表示业务用户的账号相关信息
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段表示业务用户ID,填写后，系统可根据账号过往违规历史优化审核结果判定，有利于存在可疑违规风险时的辅助判断。<br>
备注：该字段可传入微信openid、QQopenid、字符串等账号信息，与账号类别参数（AccountType）配合使用可确定唯一账号。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 该字段表示业务用户对应的账号昵称信息。
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 该字段表示业务用户ID对应的账号类型，取值：**1**-微信uin，**2**-QQ号，**3**-微信群uin，**4**-qq群号，**5**-微信openid，**6**-QQopenid，**7**-其它string。<br>
该字段与账号ID参数（UserId）配合使用可确定唯一账号。
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 该字段表示业务用户对应账号的性别信息。<br>
取值：**0**（默认值，代表性别未知）、**1**（男性）、**2**（女性）。
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 该字段表示业务用户对应账号的年龄信息。<br>
取值：**0**（默认值，代表年龄未知）-（**自定义年龄上限**）之间的整数。
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 该字段表示业务用户对应账号的等级信息。<br>
取值：**0**（默认值，代表等级未知）、**1**（等级较低）、**2**（等级中等）、**3**（等级较高），目前**暂不支持自定义等级**。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 该字段表示业务用户对应账号的手机号信息，支持全球各地区手机号的记录。<br>
备注：请保持手机号格式的统一，如区号格式（086/+86）等。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 该字段表示业务用户的简介信息，支持汉字、英文及特殊符号，**长度不超过5000个汉字字符**。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 该字段表示业务用户头像图片的访问链接(URL)，支持PNG、JPG、JPEG、BMP、GIF、WEBP格式。<br>备注：头像图片**大小不超过5MB**，建议**分辨率不低于256x256**；图片下载时间限制为3秒，超过则会返回下载超时。
         * @type {string || null}
         */
        this.HeadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.HeadUrl = 'HeadUrl' in params ? params.HeadUrl : null;

    }
}

module.exports = {
    ImageModerationRequest: ImageModerationRequest,
    ObjectResult: ObjectResult,
    OcrTextDetail: OcrTextDetail,
    ObjectDetail: ObjectDetail,
    OcrResult: OcrResult,
    LibDetail: LibDetail,
    Location: Location,
    LabelResult: LabelResult,
    LabelDetailItem: LabelDetailItem,
    Device: Device,
    LibResult: LibResult,
    ImageModerationResponse: ImageModerationResponse,
    User: User,

}
