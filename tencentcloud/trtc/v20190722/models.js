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
 * DescribeAbnormalEvent返回参数结构体
 * @class
 */
class DescribeAbnormalEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 异常体验列表
         * @type {Array.<AbnormalExperience> || null}
         */
        this.AbnormalExperienceList = null;

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

        if (params.AbnormalExperienceList) {
            this.AbnormalExperienceList = new Array();
            for (let z in params.AbnormalExperienceList) {
                let obj = new AbnormalExperience();
                obj.deserialize(params.AbnormalExperienceList[z]);
                this.AbnormalExperienceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询秒级监控返回的数据
 * @class
 */
class RealtimeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

        /**
         * 数据类型字段
         * @type {string || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TimeValue();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeAbnormalEvent请求参数结构体
 * @class
 */
class DescribeAbnormalEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户SDKAppID，查询SDKAppID下任意20条异常体验事件（可能不同房间）
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 房间号，查询房间内任意20条以内异常体验事件
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * DescribeTrtcInteractiveTime返回参数结构体
 * @class
 */
class DescribeTrtcInteractiveTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的用量信息数组。
         * @type {Array.<OneSdkAppIdUsagesInfo> || null}
         */
        this.Usages = null;

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

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new OneSdkAppIdUsagesInfo();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPicture返回参数结构体
 * @class
 */
class ModifyPictureResponse extends  AbstractModel {
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
 * StartMCUMixTranscodeByStrRoomId请求参数结构体
 * @class
 */
class StartMCUMixTranscodeByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 字符串房间号。
         * @type {string || null}
         */
        this.StrRoomId = null;

        /**
         * 混流输出控制参数。
         * @type {OutputParams || null}
         */
        this.OutputParams = null;

        /**
         * 混流输出编码参数。
         * @type {EncodeParams || null}
         */
        this.EncodeParams = null;

        /**
         * 混流输出布局参数。
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 第三方CDN转推参数。
         * @type {PublishCdnParams || null}
         */
        this.PublishCdnParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

        if (params.OutputParams) {
            let obj = new OutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }

        if (params.EncodeParams) {
            let obj = new EncodeParams();
            obj.deserialize(params.EncodeParams)
            this.EncodeParams = obj;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.PublishCdnParams) {
            let obj = new PublishCdnParams();
            obj.deserialize(params.PublishCdnParams)
            this.PublishCdnParams = obj;
        }

    }
}

/**
 * MCU混流布局参数
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板;4为自定义模板。
         * @type {number || null}
         */
        this.Template = null;

        /**
         * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的用户ID。
         * @type {string || null}
         */
        this.MainVideoUserId = null;

        /**
         * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的流类型，0为摄像头，1为屏幕分享。左侧大画面为web用户时此值填0。
         * @type {number || null}
         */
        this.MainVideoStreamType = null;

        /**
         * 画中画模板中有效，代表小画面的布局参数。
         * @type {SmallVideoLayoutParams || null}
         */
        this.SmallVideoLayoutParams = null;

        /**
         * 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。
         * @type {number || null}
         */
        this.MainVideoRightAlign = null;

        /**
         * 悬浮模板、九宫格、屏幕分享模板有效。设置此参数后，输出流混合此参数中包含用户的音视频，以及其他用户的纯音频。最多可设置16个用户。
         * @type {Array.<string> || null}
         */
        this.MixVideoUids = null;

        /**
         * 自定义模板中有效，指定用户视频在混合画面中的位置。
         * @type {Array.<PresetLayoutConfig> || null}
         */
        this.PresetLayoutConfig = null;

        /**
         * 自定义模板中有效，设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
         * @type {number || null}
         */
        this.PlaceHolderMode = null;

        /**
         * 悬浮模板、九宫格、屏幕分享模板生效，用于控制纯音频上行是否占用画面布局位置。设置为0是代表后台默认处理方式，悬浮小画面占布局位置，九宫格画面占布局位置、屏幕分享小画面不占布局位置；设置为1时代表纯音频上行占布局位置；设置为2时代表纯音频上行不占布局位置。默认为0。
         * @type {number || null}
         */
        this.PureAudioHoldPlaceMode = null;

        /**
         * 水印参数。
         * @type {WaterMarkParams || null}
         */
        this.WaterMarkParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.MainVideoUserId = 'MainVideoUserId' in params ? params.MainVideoUserId : null;
        this.MainVideoStreamType = 'MainVideoStreamType' in params ? params.MainVideoStreamType : null;

        if (params.SmallVideoLayoutParams) {
            let obj = new SmallVideoLayoutParams();
            obj.deserialize(params.SmallVideoLayoutParams)
            this.SmallVideoLayoutParams = obj;
        }
        this.MainVideoRightAlign = 'MainVideoRightAlign' in params ? params.MainVideoRightAlign : null;
        this.MixVideoUids = 'MixVideoUids' in params ? params.MixVideoUids : null;

        if (params.PresetLayoutConfig) {
            this.PresetLayoutConfig = new Array();
            for (let z in params.PresetLayoutConfig) {
                let obj = new PresetLayoutConfig();
                obj.deserialize(params.PresetLayoutConfig[z]);
                this.PresetLayoutConfig.push(obj);
            }
        }
        this.PlaceHolderMode = 'PlaceHolderMode' in params ? params.PlaceHolderMode : null;
        this.PureAudioHoldPlaceMode = 'PureAudioHoldPlaceMode' in params ? params.PureAudioHoldPlaceMode : null;

        if (params.WaterMarkParams) {
            let obj = new WaterMarkParams();
            obj.deserialize(params.WaterMarkParams)
            this.WaterMarkParams = obj;
        }

    }
}

/**
 * 返回的质量数据，时间:值
 * @class
 */
class TimeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间，unix时间戳（1590065877s)
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 当前时间返回参数取值，如（bigvCapFps在1590065877取值为0，则Value：0 ）
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
 * CreatePicture请求参数结构体
 * @class
 */
class CreatePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片内容经base64编码后的string格式
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 图片后缀名
         * @type {string || null}
         */
        this.Suffix = null;

        /**
         * 图片长度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 显示位置x轴方向
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置y轴方向
         * @type {number || null}
         */
        this.YPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Suffix = 'Suffix' in params ? params.Suffix : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;

    }
}

/**
 * DescribeTrtcMcuTranscodeTime请求参数结构体
 * @class
 */
class DescribeTrtcMcuTranscodeTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间，格式为YYYY-MM-DD。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * 查询旁路转码计费时长。
查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
 * @class
 */
class SdkAppIdTrtcMcuTranscodeTimeUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本组数据对应的时间点，格式如：2020-09-07或2020-09-07 00:05:05。
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * 语音时长，单位：秒。
         * @type {number || null}
         */
        this.AudioTime = null;

        /**
         * 视频时长-标清SD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeSd = null;

        /**
         * 视频时长-高清HD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeHd = null;

        /**
         * 视频时长-全高清FHD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeFhd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.AudioTime = 'AudioTime' in params ? params.AudioTime : null;
        this.VideoTimeSd = 'VideoTimeSd' in params ? params.VideoTimeSd : null;
        this.VideoTimeHd = 'VideoTimeHd' in params ? params.VideoTimeHd : null;
        this.VideoTimeFhd = 'VideoTimeFhd' in params ? params.VideoTimeFhd : null;

    }
}

/**
 * RemoveUserByStrRoomId请求参数结构体
 * @class
 */
class RemoveUserByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 要移出的用户列表，最多10个。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * DescribeRealtimeScale返回参数结构体
 * @class
 */
class DescribeRealtimeScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据数组
         * @type {Array.<RealtimeData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RealtimeData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DismissRoom返回参数结构体
 * @class
 */
class DismissRoomResponse extends  AbstractModel {
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
 * DescribeRealtimeNetwork返回参数结构体
 * @class
 */
class DescribeRealtimeNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询返回的数据
         * @type {Array.<RealtimeData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RealtimeData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordStatistic请求参数结构体
 * @class
 */
class DescribeRecordStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始日期，格式为YYYY-MM-DD。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束日期，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeUserInformation请求参数结构体
 * @class
 */
class DescribeUserInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户SDKAppID（1400188366）
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,PageSize最大不超过100）
         * @type {string || null}
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
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeCallDetail请求参数结构体
 * @class
 */
class DescribeCallDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户SDKAppID（1400188366）
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 需查询的指标，不填则只返回用户列表，填all则返回所有指标。
appCpu：APP CPU使用率；
sysCpu：系统 CPU使用率；
aBit：上/下行音频码率；
aBlock：音频卡顿时长；
bigvBit：上/下行视频码率；
bigvCapFps：视频采集帧率；
bigvEncFps：视频发送帧率；
bigvDecFps：渲染帧率；
bigvBlock：视频卡顿时长；
aLoss：上/下行音频丢包；
bigvLoss：上/下行视频丢包；
bigvWidth：上/下行分辨率宽；
bigvHeight：上/下行分辨率高
         * @type {Array.<string> || null}
         */
        this.DataType = null;

        /**
         * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,DataType，UserIds不为null，PageSize最大不超过6，DataType，UserIds为null，PageSize最大不超过100）
         * @type {string || null}
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
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeRealtimeNetwork请求参数结构体
 * @class
 */
class DescribeRealtimeNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间，24小时内，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户sdkappid
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 需查询的数据类型
sendLossRateRaw：上行丢包率
recvLossRateRaw：下行丢包率
         * @type {Array.<string> || null}
         */
        this.DataType = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeUserInformation返回参数结构体
 * @class
 */
class DescribeUserInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的用户总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

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

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MCU混流输出流编码参数
 * @class
 */
class EncodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流-输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。
         * @type {number || null}
         */
        this.AudioSampleRate = null;

        /**
         * 混流-输出流音频码率。取值范围[8,500]，单位为kbps。
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * 混流-输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。
         * @type {number || null}
         */
        this.AudioChannels = null;

        /**
         * 混流-输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。
         * @type {number || null}
         */
        this.VideoWidth = null;

        /**
         * 混流-输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。
         * @type {number || null}
         */
        this.VideoHeight = null;

        /**
         * 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 混流-输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。
         * @type {number || null}
         */
        this.VideoFramerate = null;

        /**
         * 混流-输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
         * @type {number || null}
         */
        this.VideoGop = null;

        /**
         * 混流-输出流背景色，取值是十进制整数。常用的颜色有：
红色：0xff0000，对应的十进制整数是16724736。
黄色：0xffff00。对应的十进制整数是16776960。
绿色：0x33cc00。对应的十进制整数是3394560。
蓝色：0x0066ff。对应的十进制整数是26367。
黑色：0x000000。对应的十进制整数是0。
白色：0xFFFFFF。对应的十进制整数是16777215。
灰色：0x999999。对应的十进制整数是10066329。
         * @type {number || null}
         */
        this.BackgroundColor = null;

        /**
         * 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。
         * @type {number || null}
         */
        this.BackgroundImageId = null;

        /**
         * 混流-输出流音频编码类型，取值范围[0,1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]
         * @type {number || null}
         */
        this.AudioCodec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AudioSampleRate = 'AudioSampleRate' in params ? params.AudioSampleRate : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.AudioChannels = 'AudioChannels' in params ? params.AudioChannels : null;
        this.VideoWidth = 'VideoWidth' in params ? params.VideoWidth : null;
        this.VideoHeight = 'VideoHeight' in params ? params.VideoHeight : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.VideoFramerate = 'VideoFramerate' in params ? params.VideoFramerate : null;
        this.VideoGop = 'VideoGop' in params ? params.VideoGop : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;
        this.BackgroundImageId = 'BackgroundImageId' in params ? params.BackgroundImageId : null;
        this.AudioCodec = 'AudioCodec' in params ? params.AudioCodec : null;

    }
}

/**
 * RemoveUserByStrRoomId返回参数结构体
 * @class
 */
class RemoveUserByStrRoomIdResponse extends  AbstractModel {
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
 * StartMCUMixTranscode请求参数结构体
 * @class
 */
class StartMCUMixTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 混流输出控制参数。
         * @type {OutputParams || null}
         */
        this.OutputParams = null;

        /**
         * 混流输出编码参数。
         * @type {EncodeParams || null}
         */
        this.EncodeParams = null;

        /**
         * 混流输出布局参数。
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 第三方CDN转推参数。
         * @type {PublishCdnParams || null}
         */
        this.PublishCdnParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

        if (params.OutputParams) {
            let obj = new OutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }

        if (params.EncodeParams) {
            let obj = new EncodeParams();
            obj.deserialize(params.EncodeParams)
            this.EncodeParams = obj;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.PublishCdnParams) {
            let obj = new PublishCdnParams();
            obj.deserialize(params.PublishCdnParams)
            this.PublishCdnParams = obj;
        }

    }
}

/**
 * DescribeRealtimeQuality返回参数结构体
 * @class
 */
class DescribeRealtimeQualityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据类型
         * @type {Array.<RealtimeData> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new RealtimeData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopMCUMixTranscode请求参数结构体
 * @class
 */
class StopMCUMixTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * 用户信息，包括用户进房时间，退房时间等
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间号
         * @type {string || null}
         */
        this.RoomStr = null;

        /**
         * 用户Id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户进房时间
         * @type {number || null}
         */
        this.JoinTs = null;

        /**
         * 用户退房时间，用户没有退房则返回当前时间
         * @type {number || null}
         */
        this.LeaveTs = null;

        /**
         * 终端类型
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Sdk版本号
         * @type {string || null}
         */
        this.SdkVersion = null;

        /**
         * 客户端IP地址
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 判断用户是否已经离开房间
         * @type {boolean || null}
         */
        this.Finished = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomStr = 'RoomStr' in params ? params.RoomStr : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.JoinTs = 'JoinTs' in params ? params.JoinTs : null;
        this.LeaveTs = 'LeaveTs' in params ? params.LeaveTs : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.SdkVersion = 'SdkVersion' in params ? params.SdkVersion : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Finished = 'Finished' in params ? params.Finished : null;

    }
}

/**
 * DescribeHistoryScale请求参数结构体
 * @class
 */
class DescribeHistoryScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户sdkappid
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询开始时间，5天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeletePicture请求参数结构体
 * @class
 */
class DeletePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeRoomInformation返回参数结构体
 * @class
 */
class DescribeRoomInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回当页数据总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 房间信息列表
         * @type {Array.<RoomState> || null}
         */
        this.RoomList = null;

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

        if (params.RoomList) {
            this.RoomList = new Array();
            for (let z in params.RoomList) {
                let obj = new RoomState();
                obj.deserialize(params.RoomList[z]);
                this.RoomList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 录制的使用信息。
 * @class
 */
class RecordUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本组数据对应的时间点，格式如:2020-09-07或2020-09-07 00:05:05。
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * 视频时长-标清SD，单位：秒。
         * @type {number || null}
         */
        this.Class1VideoTime = null;

        /**
         * 视频时长-高清HD，单位：秒。
         * @type {number || null}
         */
        this.Class2VideoTime = null;

        /**
         * 视频时长-超清HD，单位：秒。
         * @type {number || null}
         */
        this.Class3VideoTime = null;

        /**
         * 语音时长，单位：秒。
         * @type {number || null}
         */
        this.AudioTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.Class1VideoTime = 'Class1VideoTime' in params ? params.Class1VideoTime : null;
        this.Class2VideoTime = 'Class2VideoTime' in params ? params.Class2VideoTime : null;
        this.Class3VideoTime = 'Class3VideoTime' in params ? params.Class3VideoTime : null;
        this.AudioTime = 'AudioTime' in params ? params.AudioTime : null;

    }
}

/**
 * RemoveUser请求参数结构体
 * @class
 */
class RemoveUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 要移出的用户列表，最多10个。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * MCU混流的输出参数
 * @class
 */
class OutputParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流 ID，由用户自定义设置，该流 ID 不能与用户旁路的流 ID 相同。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 取值范围[0,1]， 填0：直播流为音视频(默认); 填1：直播流为纯音频
         * @type {number || null}
         */
        this.PureAudioStream = null;

        /**
         * 自定义录制文件名称前缀。请先在实时音视频控制台开通录制功能，https://cloud.tencent.com/document/product/647/50768
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3。此参数不建议使用，建议在实时音视频控制台配置纯音频录制模板。
         * @type {number || null}
         */
        this.RecordAudioOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.PureAudioStream = 'PureAudioStream' in params ? params.PureAudioStream : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordAudioOnly = 'RecordAudioOnly' in params ? params.RecordAudioOnly : null;

    }
}

/**
 * 事件信息，包括，事件时间戳，事件ID,
 * @class
 */
class EventMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流类型：
0：与视频无关的事件；
2：视频为大画面；
3：视频为小画面；
7：视频为旁路画面；
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 事件上报的时间戳，unix时间（1589891188801ms)
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 事件Id：分为sdk的事件和webrtc的事件，详情见：附录/事件 ID 映射表：https://cloud.tencent.com/document/product/647/44916
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 事件的第一个参数，如视频分辨率宽
         * @type {number || null}
         */
        this.ParamOne = null;

        /**
         * 事件的第二个参数，如视频分辨率高
         * @type {number || null}
         */
        this.ParamTwo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.ParamOne = 'ParamOne' in params ? params.ParamOne : null;
        this.ParamTwo = 'ParamTwo' in params ? params.ParamTwo : null;

    }
}

/**
 * ModifyPicture请求参数结构体
 * @class
 */
class ModifyPictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片长度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 显示位置x轴方向
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置y轴方向
         * @type {number || null}
         */
        this.YPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;

    }
}

/**
 * CreateTroubleInfo返回参数结构体
 * @class
 */
class CreateTroubleInfoResponse extends  AbstractModel {
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
 * StopMCUMixTranscodeByStrRoomId请求参数结构体
 * @class
 */
class StopMCUMixTranscodeByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 字符串房间号。
         * @type {string || null}
         */
        this.StrRoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

    }
}

/**
 * Es返回的质量数据
 * @class
 */
class QualityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据内容
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 对端Id,为空时表示上行数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PeerId = null;

        /**
         * 数据类型
         * @type {string || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TimeValue();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PeerId = 'PeerId' in params ? params.PeerId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * 造成异常体验可能的异常事件类型
 * @class
 */
class AbnormalEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常事件ID，具体值查看附录：异常体验ID映射表：https://cloud.tencent.com/document/product/647/44916
         * @type {number || null}
         */
        this.AbnormalEventId = null;

        /**
         * 远端用户ID,""：表示异常事件不是由远端用户产生
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PeerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AbnormalEventId = 'AbnormalEventId' in params ? params.AbnormalEventId : null;
        this.PeerId = 'PeerId' in params ? params.PeerId : null;

    }
}

/**
 * StopMCUMixTranscodeByStrRoomId返回参数结构体
 * @class
 */
class StopMCUMixTranscodeByStrRoomIdResponse extends  AbstractModel {
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
 * DescribeRealtimeQuality请求参数结构体
 * @class
 */
class DescribeRealtimeQualityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间，24小时内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户sdkappid
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询的数据类型
enterTotalSuccPercent：进房成功率
fistFreamInSecRate：首帧秒开率
blockPercent：视频卡顿率
audioBlockPercent：音频卡顿率
         * @type {Array.<string> || null}
         */
        this.DataType = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DeletePicture返回参数结构体
 * @class
 */
class DeletePictureResponse extends  AbstractModel {
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
 * StopMCUMixTranscode返回参数结构体
 * @class
 */
class StopMCUMixTranscodeResponse extends  AbstractModel {
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
 * CreateTroubleInfo请求参数结构体
 * @class
 */
class CreateTroubleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的ID
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 房间ID
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 老师用户ID
         * @type {string || null}
         */
        this.TeacherUserId = null;

        /**
         * 学生用户ID
         * @type {string || null}
         */
        this.StudentUserId = null;

        /**
         * 体验异常端（老师或学生）的用户 ID。
         * @type {string || null}
         */
        this.TroubleUserId = null;

        /**
         * 异常类型。
1. 仅视频异常
2. 仅声音异常
3. 音视频都异常
5. 进房异常
4. 切课
6. 求助
7. 问题反馈
8. 投诉
         * @type {number || null}
         */
        this.TroubleType = null;

        /**
         * 异常发生的UNIX 时间戳，单位为秒。
         * @type {number || null}
         */
        this.TroubleTime = null;

        /**
         * 异常详情
         * @type {string || null}
         */
        this.TroubleMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.TeacherUserId = 'TeacherUserId' in params ? params.TeacherUserId : null;
        this.StudentUserId = 'StudentUserId' in params ? params.StudentUserId : null;
        this.TroubleUserId = 'TroubleUserId' in params ? params.TroubleUserId : null;
        this.TroubleType = 'TroubleType' in params ? params.TroubleType : null;
        this.TroubleTime = 'TroubleTime' in params ? params.TroubleTime : null;
        this.TroubleMsg = 'TroubleMsg' in params ? params.TroubleMsg : null;

    }
}

/**
 * sdk或webrtc的事件列表。
 * @class
 */
class EventList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据内容
         * @type {Array.<EventMessage> || null}
         */
        this.Content = null;

        /**
         * 发送端的userId
         * @type {string || null}
         */
        this.PeerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new EventMessage();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.PeerId = 'PeerId' in params ? params.PeerId : null;

    }
}

/**
 * DismissRoom请求参数结构体
 * @class
 */
class DismissRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * DescribeDetailEvent返回参数结构体
 * @class
 */
class DescribeDetailEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的事件列表
         * @type {Array.<EventList> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new EventList();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DismissRoomByStrRoomId请求参数结构体
 * @class
 */
class DismissRoomByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * StartMCUMixTranscode返回参数结构体
 * @class
 */
class StartMCUMixTranscodeResponse extends  AbstractModel {
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
 * 旁路转码时长的查询结果
 * @class
 */
class OneSdkAppIdTranscodeTimeUsagesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 旁路转码时长查询结果数组
         * @type {Array.<SdkAppIdTrtcMcuTranscodeTimeUsage> || null}
         */
        this.SdkAppIdTranscodeTimeUsages = null;

        /**
         * 查询记录数量
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 所查询的应用ID，可能值为:1-应用的应用ID，2-total，显示为total则表示查询的是所有应用的用量合计值。
         * @type {string || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SdkAppIdTranscodeTimeUsages) {
            this.SdkAppIdTranscodeTimeUsages = new Array();
            for (let z in params.SdkAppIdTranscodeTimeUsages) {
                let obj = new SdkAppIdTrtcMcuTranscodeTimeUsage();
                obj.deserialize(params.SdkAppIdTranscodeTimeUsages[z]);
                this.SdkAppIdTranscodeTimeUsages.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeTrtcMcuTranscodeTime返回参数结构体
 * @class
 */
class DescribeTrtcMcuTranscodeTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的用量信息数组。
         * @type {Array.<OneSdkAppIdTranscodeTimeUsagesInfo> || null}
         */
        this.Usages = null;

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

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new OneSdkAppIdTranscodeTimeUsagesInfo();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePicture请求参数结构体
 * @class
 */
class DescribePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片ID，不填时返回该应用下所有图片
         * @type {number || null}
         */
        this.PictureId = null;

        /**
         * 每页数量，不填时默认为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码，不填时默认为1
         * @type {number || null}
         */
        this.PageNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;

    }
}

/**
 * SdkAppId级别录制时长数据。
 * @class
 */
class SdkAppIdRecordUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId的值。
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 统计的时间点数据。
         * @type {Array.<RecordUsage> || null}
         */
        this.Usages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new RecordUsage();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }

    }
}

/**
 * 单个SdkAppId的音视频互动计费时长用量数组和数组长度。
 * @class
 */
class OneSdkAppIdUsagesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该 SdkAppId 对应的用量记录数长度
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 用量数组
         * @type {Array.<SdkAppIdTrtcUsage> || null}
         */
        this.SdkAppIdTrtcTimeUsages = null;

        /**
         * 应用ID
         * @type {string || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.SdkAppIdTrtcTimeUsages) {
            this.SdkAppIdTrtcTimeUsages = new Array();
            for (let z in params.SdkAppIdTrtcTimeUsages) {
                let obj = new SdkAppIdTrtcUsage();
                obj.deserialize(params.SdkAppIdTrtcTimeUsages[z]);
                this.SdkAppIdTrtcTimeUsages.push(obj);
            }
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * 画中画模板中有效，代表小画面的布局参数
 * @class
 */
class SmallVideoLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代表小画面对应的用户ID。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 代表小画面对应的流类型，0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * 小画面在输出时的宽度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 小画面在输出时的高度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 小画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 小画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
         * @type {number || null}
         */
        this.LocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;

    }
}

/**
 * RemoveUser返回参数结构体
 * @class
 */
class RemoveUserResponse extends  AbstractModel {
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
 * 自定义模板中有效，指定用户视频在混合画面中的位置。
 * @class
 */
class PresetLayoutConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定显示在该画面上的用户ID。如果不指定用户ID，会按照用户加入房间的顺序自动匹配PresetLayoutConfig中的画面设置。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 当该画面指定用户时，代表用户的流类型。0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * 该画面在输出时的宽度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 该画面在输出时的高度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 该画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 该画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * 该画面在输出时的层级，不填默认为0。
         * @type {number || null}
         */
        this.ZOrder = null;

        /**
         * 该画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底。不填默认为0。
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * 该当前位置用户混入的流类型：0为混入音视频，1为只混入视频，2为只混入音频。默认为0，建议配合指定用户ID使用。
         * @type {number || null}
         */
        this.MixInputType = null;

        /**
         * 占位图ID。启用占位图功能时，在当前位置的用户没有上行视频时显示占位图。占位图在实时音视频控制台上传并生成，https://cloud.tencent.com/document/product/647/50769
         * @type {number || null}
         */
        this.PlaceImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.MixInputType = 'MixInputType' in params ? params.MixInputType : null;
        this.PlaceImageId = 'PlaceImageId' in params ? params.PlaceImageId : null;

    }
}

/**
 * DescribeRealtimeScale请求参数结构体
 * @class
 */
class DescribeRealtimeScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间，24小时内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户sdkappid
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询的数据类型
UserNum：通话人数；
RoomNum：房间数
         * @type {Array.<string> || null}
         */
        this.DataType = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * DescribeCallDetail返回参数结构体
 * @class
 */
class DescribeCallDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的用户总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * 质量数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityData> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QualityData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePicture返回参数结构体
 * @class
 */
class DescribePictureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的图片记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 图片信息列表
         * @type {Array.<PictureInfo> || null}
         */
        this.PictureInfo = null;

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

        if (params.PictureInfo) {
            this.PictureInfo = new Array();
            for (let z in params.PictureInfo) {
                let obj = new PictureInfo();
                obj.deserialize(params.PictureInfo[z]);
                this.PictureInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询音视频互动时长的输出数据。
查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
 * @class
 */
class SdkAppIdTrtcUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本组数据对应的时间点，格式如：2020-09-07或2020-09-07 00:05:05。
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * 语音时长，单位：秒。
         * @type {number || null}
         */
        this.AudioTime = null;

        /**
         * 音视频时长，单位：秒。
2019年10月11日前注册，没有变更为 [新计费模式](https://cloud.tencent.com/document/product/647/17157) 的用户才会返回此值。
         * @type {number || null}
         */
        this.AudioVideoTime = null;

        /**
         * 视频时长-标清SD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeSd = null;

        /**
         * 视频时长-高清HD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeHd = null;

        /**
         * 视频时长-超清HD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeHdp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.AudioTime = 'AudioTime' in params ? params.AudioTime : null;
        this.AudioVideoTime = 'AudioVideoTime' in params ? params.AudioVideoTime : null;
        this.VideoTimeSd = 'VideoTimeSd' in params ? params.VideoTimeSd : null;
        this.VideoTimeHd = 'VideoTimeHd' in params ? params.VideoTimeHd : null;
        this.VideoTimeHdp = 'VideoTimeHdp' in params ? params.VideoTimeHdp : null;

    }
}

/**
 * DescribeTrtcInteractiveTime请求参数结构体
 * @class
 */
class DescribeTrtcInteractiveTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间，格式为YYYY-MM-DD。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回所有应用的合计值。
         * @type {number || null}
         */
        this.SdkAppId = null;

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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * 第三方CDN转推参数
 * @class
 */
class PublishCdnParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云直播BizId。
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 第三方CDN转推的目的地址，同时只支持转推一个第三方CDN地址。
         * @type {Array.<string> || null}
         */
        this.PublishCdnUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.PublishCdnUrls = 'PublishCdnUrls' in params ? params.PublishCdnUrls : null;

    }
}

/**
 * DescribeRoomInformation请求参数结构体
 * @class
 */
class DescribeRoomInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户sdkappid
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 字符串房间号
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回10条数据）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小（PageNumber和PageSize 其中一个不填均默认返回10条数据,最大不超过100）
         * @type {string || null}
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 历史规模信息
 * @class
 */
class ScaleInfomation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每天开始的时间
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 房间人数，用户重复进入同一个房间为1次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserNumber = null;

        /**
         * 房间人次，用户每次进入房间为一次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * sdkappid下一天内的房间数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RoomNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.UserNumber = 'UserNumber' in params ? params.UserNumber : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;
        this.RoomNumbers = 'RoomNumbers' in params ? params.RoomNumbers : null;

    }
}

/**
 * DescribeDetailEvent请求参数结构体
 * @class
 */
class DescribeDetailEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位s）。通过 DescribeRoomInformation（查询房间列表）接口获取。（链接：https://cloud.tencent.com/document/product/647/44050）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 房间号
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * 用户的异常体验及可能的原因
 * @class
 */
class AbnormalExperience extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 异常体验ID
         * @type {number || null}
         */
        this.ExperienceId = null;

        /**
         * 字符串房间号
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 异常事件数组
         * @type {Array.<AbnormalEvent> || null}
         */
        this.AbnormalEventList = null;

        /**
         * 异常事件的上报时间
         * @type {number || null}
         */
        this.EventTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ExperienceId = 'ExperienceId' in params ? params.ExperienceId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

        if (params.AbnormalEventList) {
            this.AbnormalEventList = new Array();
            for (let z in params.AbnormalEventList) {
                let obj = new AbnormalEvent();
                obj.deserialize(params.AbnormalEventList[z]);
                this.AbnormalEventList.push(obj);
            }
        }
        this.EventTime = 'EventTime' in params ? params.EventTime : null;

    }
}

/**
 * 房间信息列表
 * @class
 */
class RoomState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话ID（唯一标识一次通话）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 房间号
         * @type {string || null}
         */
        this.RoomString = null;

        /**
         * 房间创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 房间销毁时间
         * @type {number || null}
         */
        this.DestroyTime = null;

        /**
         * 房间是否已经结束
         * @type {boolean || null}
         */
        this.IsFinished = null;

        /**
         * 房间创建者Id
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.RoomString = 'RoomString' in params ? params.RoomString : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DestroyTime = 'DestroyTime' in params ? params.DestroyTime : null;
        this.IsFinished = 'IsFinished' in params ? params.IsFinished : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreatePicture返回参数结构体
 * @class
 */
class CreatePictureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

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
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MCU混流水印参数
 * @class
 */
class WaterMarkParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流-水印图片ID。取值为实时音视频控制台上传的图片ID。
         * @type {number || null}
         */
        this.WaterMarkId = null;

        /**
         * 混流-水印宽。单位为像素值。
         * @type {number || null}
         */
        this.WaterMarkWidth = null;

        /**
         * 混流-水印高。单位为像素值。
         * @type {number || null}
         */
        this.WaterMarkHeight = null;

        /**
         * 水印在输出时的X偏移。单位为像素值。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 水印在输出时的Y偏移。单位为像素值。
         * @type {number || null}
         */
        this.LocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkId = 'WaterMarkId' in params ? params.WaterMarkId : null;
        this.WaterMarkWidth = 'WaterMarkWidth' in params ? params.WaterMarkWidth : null;
        this.WaterMarkHeight = 'WaterMarkHeight' in params ? params.WaterMarkHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;

    }
}

/**
 * DescribeRecordStatistic返回参数结构体
 * @class
 */
class DescribeRecordStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的用量信息数组。
         * @type {Array.<SdkAppIdRecordUsage> || null}
         */
        this.SdkAppIdUsages = null;

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

        if (params.SdkAppIdUsages) {
            this.SdkAppIdUsages = new Array();
            for (let z in params.SdkAppIdUsages) {
                let obj = new SdkAppIdRecordUsage();
                obj.deserialize(params.SdkAppIdUsages[z]);
                this.SdkAppIdUsages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DismissRoomByStrRoomId返回参数结构体
 * @class
 */
class DismissRoomByStrRoomIdResponse extends  AbstractModel {
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
 * DescribeHistoryScale返回参数结构体
 * @class
 */
class DescribeHistoryScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScaleInfomation> || null}
         */
        this.ScaleList = null;

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

        if (params.ScaleList) {
            this.ScaleList = new Array();
            for (let z in params.ScaleList) {
                let obj = new ScaleInfomation();
                obj.deserialize(params.ScaleList[z]);
                this.ScaleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartMCUMixTranscodeByStrRoomId返回参数结构体
 * @class
 */
class StartMCUMixTranscodeByStrRoomIdResponse extends  AbstractModel {
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
 * 图片列表信息
 * @class
 */
class PictureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片长度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 显示位置x轴方向
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置y轴方向
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PictureId = 'PictureId' in params ? params.PictureId : null;

    }
}

module.exports = {
    DescribeAbnormalEventResponse: DescribeAbnormalEventResponse,
    RealtimeData: RealtimeData,
    DescribeAbnormalEventRequest: DescribeAbnormalEventRequest,
    DescribeTrtcInteractiveTimeResponse: DescribeTrtcInteractiveTimeResponse,
    ModifyPictureResponse: ModifyPictureResponse,
    StartMCUMixTranscodeByStrRoomIdRequest: StartMCUMixTranscodeByStrRoomIdRequest,
    LayoutParams: LayoutParams,
    TimeValue: TimeValue,
    CreatePictureRequest: CreatePictureRequest,
    DescribeTrtcMcuTranscodeTimeRequest: DescribeTrtcMcuTranscodeTimeRequest,
    SdkAppIdTrtcMcuTranscodeTimeUsage: SdkAppIdTrtcMcuTranscodeTimeUsage,
    RemoveUserByStrRoomIdRequest: RemoveUserByStrRoomIdRequest,
    DescribeRealtimeScaleResponse: DescribeRealtimeScaleResponse,
    DismissRoomResponse: DismissRoomResponse,
    DescribeRealtimeNetworkResponse: DescribeRealtimeNetworkResponse,
    DescribeRecordStatisticRequest: DescribeRecordStatisticRequest,
    DescribeUserInformationRequest: DescribeUserInformationRequest,
    DescribeCallDetailRequest: DescribeCallDetailRequest,
    DescribeRealtimeNetworkRequest: DescribeRealtimeNetworkRequest,
    DescribeUserInformationResponse: DescribeUserInformationResponse,
    EncodeParams: EncodeParams,
    RemoveUserByStrRoomIdResponse: RemoveUserByStrRoomIdResponse,
    StartMCUMixTranscodeRequest: StartMCUMixTranscodeRequest,
    DescribeRealtimeQualityResponse: DescribeRealtimeQualityResponse,
    StopMCUMixTranscodeRequest: StopMCUMixTranscodeRequest,
    UserInformation: UserInformation,
    DescribeHistoryScaleRequest: DescribeHistoryScaleRequest,
    DeletePictureRequest: DeletePictureRequest,
    DescribeRoomInformationResponse: DescribeRoomInformationResponse,
    RecordUsage: RecordUsage,
    RemoveUserRequest: RemoveUserRequest,
    OutputParams: OutputParams,
    EventMessage: EventMessage,
    ModifyPictureRequest: ModifyPictureRequest,
    CreateTroubleInfoResponse: CreateTroubleInfoResponse,
    StopMCUMixTranscodeByStrRoomIdRequest: StopMCUMixTranscodeByStrRoomIdRequest,
    QualityData: QualityData,
    AbnormalEvent: AbnormalEvent,
    StopMCUMixTranscodeByStrRoomIdResponse: StopMCUMixTranscodeByStrRoomIdResponse,
    DescribeRealtimeQualityRequest: DescribeRealtimeQualityRequest,
    DeletePictureResponse: DeletePictureResponse,
    StopMCUMixTranscodeResponse: StopMCUMixTranscodeResponse,
    CreateTroubleInfoRequest: CreateTroubleInfoRequest,
    EventList: EventList,
    DismissRoomRequest: DismissRoomRequest,
    DescribeDetailEventResponse: DescribeDetailEventResponse,
    DismissRoomByStrRoomIdRequest: DismissRoomByStrRoomIdRequest,
    StartMCUMixTranscodeResponse: StartMCUMixTranscodeResponse,
    OneSdkAppIdTranscodeTimeUsagesInfo: OneSdkAppIdTranscodeTimeUsagesInfo,
    DescribeTrtcMcuTranscodeTimeResponse: DescribeTrtcMcuTranscodeTimeResponse,
    DescribePictureRequest: DescribePictureRequest,
    SdkAppIdRecordUsage: SdkAppIdRecordUsage,
    OneSdkAppIdUsagesInfo: OneSdkAppIdUsagesInfo,
    SmallVideoLayoutParams: SmallVideoLayoutParams,
    RemoveUserResponse: RemoveUserResponse,
    PresetLayoutConfig: PresetLayoutConfig,
    DescribeRealtimeScaleRequest: DescribeRealtimeScaleRequest,
    DescribeCallDetailResponse: DescribeCallDetailResponse,
    DescribePictureResponse: DescribePictureResponse,
    SdkAppIdTrtcUsage: SdkAppIdTrtcUsage,
    DescribeTrtcInteractiveTimeRequest: DescribeTrtcInteractiveTimeRequest,
    PublishCdnParams: PublishCdnParams,
    DescribeRoomInformationRequest: DescribeRoomInformationRequest,
    ScaleInfomation: ScaleInfomation,
    DescribeDetailEventRequest: DescribeDetailEventRequest,
    AbnormalExperience: AbnormalExperience,
    RoomState: RoomState,
    CreatePictureResponse: CreatePictureResponse,
    WaterMarkParams: WaterMarkParams,
    DescribeRecordStatisticResponse: DescribeRecordStatisticResponse,
    DismissRoomByStrRoomIdResponse: DismissRoomByStrRoomIdResponse,
    DescribeHistoryScaleResponse: DescribeHistoryScaleResponse,
    StartMCUMixTranscodeByStrRoomIdResponse: StartMCUMixTranscodeByStrRoomIdResponse,
    PictureInfo: PictureInfo,

}
