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
 * MCU混流布局参数
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板。
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
         * 查询开始时间，5天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户sdkappid（1400188366）
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
 * MCU混流输出流编码参数
 * @class
 */
class EncodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流-输出流音频采样率。取值为[48000, 44100, 32000,24000, 22050, 16000, 12000, 11025, 8000]。
         * @type {number || null}
         */
        this.AudioSampleRate = null;

        /**
         * 混流-输出流音频码率。取值范围[8,500]，单位为Kbps。
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * 混流-输出流音频声道数，取值范围[1,2]。
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
         * 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为Kbps。
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 混流-输出流帧率，音视频输出时必填。取值为[6,12,15,24,30,48,60]，不在上述帧率值内系统会自动调整。
         * @type {number || null}
         */
        this.VideoFramerate = null;

        /**
         * 混流-输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
         * @type {number || null}
         */
        this.VideoGop = null;

        /**
         * 混流-输出流背景色。
         * @type {number || null}
         */
        this.BackgroundColor = null;

        /**
         * 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。
         * @type {number || null}
         */
        this.BackgroundImageId = null;

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
         * 用户退房时间
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
 * DescribeRoomInformation返回参数结构体
 * @class
 */
class DescribeRoomInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据总条数
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
         * 自定义录制文件名
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3
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
         * 查询开始时间，5天内。本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588031999s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 数字房间号
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 分页index（不填默认只返回10个）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小（不填默认返回10个,最多不超过100条）
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
         * 查询开始时间，5天内。本地unix时间戳（1588031999s）
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

module.exports = {
    DescribeAbnormalEventResponse: DescribeAbnormalEventResponse,
    RealtimeData: RealtimeData,
    DescribeAbnormalEventRequest: DescribeAbnormalEventRequest,
    LayoutParams: LayoutParams,
    TimeValue: TimeValue,
    StopMCUMixTranscodeResponse: StopMCUMixTranscodeResponse,
    DescribeRealtimeScaleResponse: DescribeRealtimeScaleResponse,
    DismissRoomResponse: DismissRoomResponse,
    DescribeRealtimeNetworkResponse: DescribeRealtimeNetworkResponse,
    RemoveUserRequest: RemoveUserRequest,
    DescribeCallDetailRequest: DescribeCallDetailRequest,
    DescribeRealtimeNetworkRequest: DescribeRealtimeNetworkRequest,
    DismissRoomRequest: DismissRoomRequest,
    EncodeParams: EncodeParams,
    StartMCUMixTranscodeRequest: StartMCUMixTranscodeRequest,
    DescribeRealtimeQualityResponse: DescribeRealtimeQualityResponse,
    StopMCUMixTranscodeRequest: StopMCUMixTranscodeRequest,
    UserInformation: UserInformation,
    DescribeHistoryScaleRequest: DescribeHistoryScaleRequest,
    DescribeRoomInformationResponse: DescribeRoomInformationResponse,
    OutputParams: OutputParams,
    EventMessage: EventMessage,
    CreateTroubleInfoResponse: CreateTroubleInfoResponse,
    QualityData: QualityData,
    AbnormalEvent: AbnormalEvent,
    DescribeRealtimeQualityRequest: DescribeRealtimeQualityRequest,
    ScaleInfomation: ScaleInfomation,
    CreateTroubleInfoRequest: CreateTroubleInfoRequest,
    EventList: EventList,
    DescribeDetailEventResponse: DescribeDetailEventResponse,
    StartMCUMixTranscodeResponse: StartMCUMixTranscodeResponse,
    SmallVideoLayoutParams: SmallVideoLayoutParams,
    DescribeRealtimeScaleRequest: DescribeRealtimeScaleRequest,
    DescribeCallDetailResponse: DescribeCallDetailResponse,
    DescribeRoomInformationRequest: DescribeRoomInformationRequest,
    DescribeDetailEventRequest: DescribeDetailEventRequest,
    AbnormalExperience: AbnormalExperience,
    RoomState: RoomState,
    RemoveUserResponse: RemoveUserResponse,
    DescribeHistoryScaleResponse: DescribeHistoryScaleResponse,

}
