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
 * ModifyMultiBizConfig返回参数结构体
 * @class
 */
class ModifyMultiBizConfigResponse extends  AbstractModel {
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
 * CreateMultiBizAlert返回参数结构体
 * @class
 */
class CreateMultiBizAlertResponse extends  AbstractModel {
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
 * 摄像头配置信息
 * @class
 */
class CameraConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 楼层ID
         * @type {number || null}
         */
        this.FloorId = null;

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 摄像头IP
         * @type {string || null}
         */
        this.CameraIp = null;

        /**
         * 摄像头Mac
         * @type {string || null}
         */
        this.CameraMac = null;

        /**
         * 摄像头类型:
1: 码流机
2: AI相机
         * @type {number || null}
         */
        this.CameraType = null;

        /**
         * 摄像头功能:
1: 人脸
2: 人体
         * @type {number || null}
         */
        this.CameraFeature = null;

        /**
         * 摄像头是否启用:
0: 下线
1: 启用
         * @type {number || null}
         */
        this.CameraState = null;

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 点位类型:
1: 场门
3: 层门
5: 特殊区域
7: 门店
8: 补位
10: 开放式门店
11: 品类区
12: 公共区
         * @type {number || null}
         */
        this.ZoneType = null;

        /**
         * 配置
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * 宽
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高
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
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.FloorId = 'FloorId' in params ? params.FloorId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.CameraIp = 'CameraIp' in params ? params.CameraIp : null;
        this.CameraMac = 'CameraMac' in params ? params.CameraMac : null;
        this.CameraType = 'CameraType' in params ? params.CameraType : null;
        this.CameraFeature = 'CameraFeature' in params ? params.CameraFeature : null;
        this.CameraState = 'CameraState' in params ? params.CameraState : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneType = 'ZoneType' in params ? params.ZoneType : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * CreateServerState返回参数结构体
 * @class
 */
class CreateServerStateResponse extends  AbstractModel {
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
 * 多边形
 * @class
 */
class Polygon extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标注列表
         * @type {Array.<Point> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new Point();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

    }
}

/**
 * CreateCapture返回参数结构体
 * @class
 */
class CreateCaptureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始应答报文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RspData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RspData = 'RspData' in params ? params.RspData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话ID
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 摄像头签名
         * @type {string || null}
         */
        this.CameraSign = null;

        /**
         * 摄像头app id
         * @type {string || null}
         */
        this.CameraAppId = null;

        /**
         * 摄像头时间戳，毫秒
         * @type {number || null}
         */
        this.CameraTimestamp = null;

        /**
         * MAC地址，字母大写
         * @type {string || null}
         */
        this.ServerMac = null;

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.CameraSign = 'CameraSign' in params ? params.CameraSign : null;
        this.CameraAppId = 'CameraAppId' in params ? params.CameraAppId : null;
        this.CameraTimestamp = 'CameraTimestamp' in params ? params.CameraTimestamp : null;
        this.ServerMac = 'ServerMac' in params ? params.ServerMac : null;
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;

    }
}

/**
 * DeleteTask请求参数结构体
 * @class
 */
class DeleteTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 任务ID
         * @type {number || null}
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
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateCameraAlerts请求参数结构体
 * @class
 */
class CreateCameraAlertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警信息列表
         * @type {Array.<CreateCameraAlertAlert> || null}
         */
        this.Alerts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Alerts) {
            this.Alerts = new Array();
            for (let z in params.Alerts) {
                let obj = new CreateCameraAlertAlert();
                obj.deserialize(params.Alerts[z]);
                this.Alerts.push(obj);
            }
        }

    }
}

/**
 * CreateCameraAlerts返回参数结构体
 * @class
 */
class CreateCameraAlertsResponse extends  AbstractModel {
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
 * DeleteMultiBizAlert请求参数结构体
 * @class
 */
class DeleteMultiBizAlertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 消警动作:
1: 误报
2: 正报合规
3: 正报不合规，整改完成
         * @type {number || null}
         */
        this.ActionType = null;

        /**
         * 图片base64字符串
         * @type {string || null}
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * 服务器监控状态上报项
 * @class
 */
class ServerStateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器状态
1: 在线
2: 离线
3: 重启
         * @type {number || null}
         */
        this.ServerState = null;

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 硬盘监控信息列表
         * @type {Array.<DiskInfo> || null}
         */
        this.DiskInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerState = 'ServerState' in params ? params.ServerState : null;
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;

        if (params.DiskInfos) {
            this.DiskInfos = new Array();
            for (let z in params.DiskInfos) {
                let obj = new DiskInfo();
                obj.deserialize(params.DiskInfos[z]);
                this.DiskInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;

    }
}

/**
 * 摄像头配置
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * 摄像头厂商:
H: 海康
D: 大华
Y: 英飞拓
L: 联纵
         * @type {string || null}
         */
        this.CameraProducer = null;

        /**
         * rtsp 地址
         * @type {string || null}
         */
        this.RTSP = null;

        /**
         * 摄像头帧率
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 解码帧率
         * @type {number || null}
         */
        this.DecodeFps = null;

        /**
         * 是否做客流计算:
0: 否
1: 是
         * @type {number || null}
         */
        this.PassengerFlow = null;

        /**
         * 是否打开人脸曝光:
0: 关闭
1: 开启
         * @type {number || null}
         */
        this.FaceExpose = null;

        /**
         * 门线标注
         * @type {Array.<Point> || null}
         */
        this.MallArea = null;

        /**
         * 店门标注
         * @type {Array.<Point> || null}
         */
        this.ShopArea = null;

        /**
         * 检测区标注
         * @type {Array.<Polygon> || null}
         */
        this.TrackAreas = null;

        /**
         * 点位列表（品类区）
         * @type {Array.<ZoneArea> || null}
         */
        this.Zones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CameraProducer = 'CameraProducer' in params ? params.CameraProducer : null;
        this.RTSP = 'RTSP' in params ? params.RTSP : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.DecodeFps = 'DecodeFps' in params ? params.DecodeFps : null;
        this.PassengerFlow = 'PassengerFlow' in params ? params.PassengerFlow : null;
        this.FaceExpose = 'FaceExpose' in params ? params.FaceExpose : null;

        if (params.MallArea) {
            this.MallArea = new Array();
            for (let z in params.MallArea) {
                let obj = new Point();
                obj.deserialize(params.MallArea[z]);
                this.MallArea.push(obj);
            }
        }

        if (params.ShopArea) {
            this.ShopArea = new Array();
            for (let z in params.ShopArea) {
                let obj = new Point();
                obj.deserialize(params.ShopArea[z]);
                this.ShopArea.push(obj);
            }
        }

        if (params.TrackAreas) {
            this.TrackAreas = new Array();
            for (let z in params.TrackAreas) {
                let obj = new Polygon();
                obj.deserialize(params.TrackAreas[z]);
                this.TrackAreas.push(obj);
            }
        }

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new ZoneArea();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }

    }
}

/**
 * 任务内容
 * @class
 */
class TaskContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * rtsp 地址
         * @type {string || null}
         */
        this.RTSP = null;

        /**
         * 图片上传地址
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
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.RTSP = 'RTSP' in params ? params.RTSP : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * SearchImage返回参数结构体
 * @class
 */
class SearchImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * face id
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 搜索结果列表
         * @type {Array.<SearchResult> || null}
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
        this.FaceId = 'FaceId' in params ? params.FaceId : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new SearchResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProgramState返回参数结构体
 * @class
 */
class CreateProgramStateResponse extends  AbstractModel {
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
 * 用于服务注册时表示当前服务的具体信息
 * @class
 */
class ServiceRegisterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前服务的回调地址
         * @type {string || null}
         */
        this.CgiUrl = null;

        /**
         * 当前服务类型:
1: 多经服务
2: 相机误报警确认
3: 底图更新
         * @type {number || null}
         */
        this.ServiceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CgiUrl = 'CgiUrl' in params ? params.CgiUrl : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

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
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 任务类型:
1: 底图拉取
         * @type {number || null}
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
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * SearchImage请求参数结构体
 * @class
 */
class SearchImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 图片base64字符串
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 时间戳，毫秒
         * @type {number || null}
         */
        this.ImageTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.ImageTime = 'ImageTime' in params ? params.ImageTime : null;

    }
}

/**
 * DeleteMultiBizAlert返回参数结构体
 * @class
 */
class DeleteMultiBizAlertResponse extends  AbstractModel {
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
 * ReportServiceRegister请求参数结构体
 * @class
 */
class ReportServiceRegisterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 服务上报当前的服务能力信息
         * @type {Array.<ServiceRegisterInfo> || null}
         */
        this.ServiceRegisterInfos = null;

        /**
         * 服务内网Ip
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 上报服务所在服务器的唯一ID
         * @type {string || null}
         */
        this.ServerNodeId = null;

        /**
         * 上报时间戳, 单位毫秒
         * @type {number || null}
         */
        this.ReportTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;

        if (params.ServiceRegisterInfos) {
            this.ServiceRegisterInfos = new Array();
            for (let z in params.ServiceRegisterInfos) {
                let obj = new ServiceRegisterInfo();
                obj.deserialize(params.ServiceRegisterInfos[z]);
                this.ServiceRegisterInfos.push(obj);
            }
        }
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.ServerNodeId = 'ServerNodeId' in params ? params.ServerNodeId : null;
        this.ReportTime = 'ReportTime' in params ? params.ReportTime : null;

    }
}

/**
 * DescribeImage返回参数结构体
 * @class
 */
class DescribeImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos 临时 url，异步上传图片，client需要轮询
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
 * 告警信息
 * @class
 */
class CreateCameraAlertAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 相机ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 时间戳,ms,默认为告警请求到达时间
         * @type {number || null}
         */
        this.CaptureTime = null;

        /**
         * 图片base64编码
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 移动告警
         * @type {CreateCameraAlertsMoveAlert || null}
         */
        this.MoveAlert = null;

        /**
         * 遮挡告警
         * @type {CreateCameraAlertsCoverAlert || null}
         */
        this.CoverAlert = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.CaptureTime = 'CaptureTime' in params ? params.CaptureTime : null;
        this.Image = 'Image' in params ? params.Image : null;

        if (params.MoveAlert) {
            let obj = new CreateCameraAlertsMoveAlert();
            obj.deserialize(params.MoveAlert)
            this.MoveAlert = obj;
        }

        if (params.CoverAlert) {
            let obj = new CreateCameraAlertsCoverAlert();
            obj.deserialize(params.CoverAlert)
            this.CoverAlert = obj;
        }

    }
}

/**
 * ReportServiceRegister返回参数结构体
 * @class
 */
class ReportServiceRegisterResponse extends  AbstractModel {
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
 * 硬盘监控信息
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 硬盘名字
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * 硬盘使用率
         * @type {number || null}
         */
        this.Usage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskName = 'DiskName' in params ? params.DiskName : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

    }
}

/**
 * CreateCameraState返回参数结构体
 * @class
 */
class CreateCameraStateResponse extends  AbstractModel {
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
 * CreateMultiBizAlert请求参数结构体
 * @class
 */
class CreateMultiBizAlertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 时间戳，毫秒
         * @type {number || null}
         */
        this.CaptureTime = null;

        /**
         * 状态: 
1: 侵占
2: 消失
3: 即侵占又消失
         * @type {number || null}
         */
        this.State = null;

        /**
         * 图片base64字符串
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 告警列表
         * @type {Array.<MultiBizWarning> || null}
         */
        this.Warnings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.CaptureTime = 'CaptureTime' in params ? params.CaptureTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Image = 'Image' in params ? params.Image : null;

        if (params.Warnings) {
            this.Warnings = new Array();
            for (let z in params.Warnings) {
                let obj = new MultiBizWarning();
                obj.deserialize(params.Warnings[z]);
                this.Warnings.push(obj);
            }
        }

    }
}

/**
 * CreateProgramState请求参数结构体
 * @class
 */
class CreateProgramStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 进程监控信息列表
         * @type {Array.<ProgramStateItem> || null}
         */
        this.ProgramStateItems = null;

        /**
         * 商场ID
         * @type {number || null}
         */
        this.MallId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;

        if (params.ProgramStateItems) {
            this.ProgramStateItems = new Array();
            for (let z in params.ProgramStateItems) {
                let obj = new ProgramStateItem();
                obj.deserialize(params.ProgramStateItems[z]);
                this.ProgramStateItems.push(obj);
            }
        }
        this.MallId = 'MallId' in params ? params.MallId : null;

    }
}

/**
 * DescribeMultiBizBaseImage请求参数结构体
 * @class
 */
class DescribeMultiBizBaseImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * 多经点位告警信息
 * @class
 */
class MultiBizWarningInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警类型：
0: 无变化
1: 侵占
2: 消失
         * @type {number || null}
         */
        this.WarningType = null;

        /**
         * 告警侵占或消失面积
         * @type {number || null}
         */
        this.WarningAreaSize = null;

        /**
         * 告警侵占或消失坐标
         * @type {Point || null}
         */
        this.WarningLocation = null;

        /**
         * 告警侵占或消失轮廓
         * @type {Array.<Point> || null}
         */
        this.WarningAreaContour = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WarningType = 'WarningType' in params ? params.WarningType : null;
        this.WarningAreaSize = 'WarningAreaSize' in params ? params.WarningAreaSize : null;

        if (params.WarningLocation) {
            let obj = new Point();
            obj.deserialize(params.WarningLocation)
            this.WarningLocation = obj;
        }

        if (params.WarningAreaContour) {
            this.WarningAreaContour = new Array();
            for (let z in params.WarningAreaContour) {
                let obj = new Point();
                obj.deserialize(params.WarningAreaContour[z]);
                this.WarningAreaContour.push(obj);
            }
        }

    }
}

/**
 * 任务信息
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 任务内容
         * @type {TaskContent || null}
         */
        this.TaskContent = null;

        /**
         * 任务类型:
1: 底图拉取
         * @type {number || null}
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;

        if (params.TaskContent) {
            let obj = new TaskContent();
            obj.deserialize(params.TaskContent)
            this.TaskContent = obj;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * 点位包含绑定、调试信息
 * @class
 */
class ZoneConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 点位名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 点位类型:
1: 场门
3: 层门
5: 特殊区域
7: 门店
8: 补位
10: 开放式门店
11: 品类区
12: 公共区
         * @type {number || null}
         */
        this.ZoneType = null;

        /**
         * 铺位编码
         * @type {string || null}
         */
        this.BunkCodes = null;

        /**
         * 楼层名称
         * @type {string || null}
         */
        this.FloorName = null;

        /**
         * 楼层ID
         * @type {number || null}
         */
        this.FloorId = null;

        /**
         * 绑定数
         * @type {number || null}
         */
        this.BindNum = null;

        /**
         * 调试数
         * @type {number || null}
         */
        this.DebugNum = null;

        /**
         * 下发状态:
1: 不可下发
2: 可下发
3: 已下发
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneType = 'ZoneType' in params ? params.ZoneType : null;
        this.BunkCodes = 'BunkCodes' in params ? params.BunkCodes : null;
        this.FloorName = 'FloorName' in params ? params.FloorName : null;
        this.FloorId = 'FloorId' in params ? params.FloorId : null;
        this.BindNum = 'BindNum' in params ? params.BindNum : null;
        this.DebugNum = 'DebugNum' in params ? params.DebugNum : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * 进程状态监控项
 * @class
 */
class ProgramStateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器IP
         * @type {string || null}
         */
        this.ServerIp = null;

        /**
         * 进程名字
         * @type {string || null}
         */
        this.ProgramName = null;

        /**
         * 在线个数
         * @type {number || null}
         */
        this.OnlineCount = null;

        /**
         * 离线个数
         * @type {number || null}
         */
        this.OfflineCount = null;

        /**
         * 上报状态:
1: 正常上报
2: 异常上报
注：此处异常上报是指本次上报由于场内服务内部原因导致上报数据不可信等。此时离线个数重置为1，在线个数重置为0
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerIp = 'ServerIp' in params ? params.ServerIp : null;
        this.ProgramName = 'ProgramName' in params ? params.ProgramName : null;
        this.OnlineCount = 'OnlineCount' in params ? params.OnlineCount : null;
        this.OfflineCount = 'OfflineCount' in params ? params.OfflineCount : null;
        this.State = 'State' in params ? params.State : null;

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
         * 任务列表
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCameras请求参数结构体
 * @class
 */
class DescribeCamerasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;

    }
}

/**
 * DescribeMultiBizBaseImage返回参数结构体
 * @class
 */
class DescribeMultiBizBaseImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos 临时 url
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
 * DescribeImage请求参数结构体
 * @class
 */
class DescribeImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;

    }
}

/**
 * 点位包含店门标注
 * @class
 */
class ZoneArea extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 店门标注
         * @type {Array.<Point> || null}
         */
        this.ShopArea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.ShopArea) {
            this.ShopArea = new Array();
            for (let z in params.ShopArea) {
                let obj = new Point();
                obj.deserialize(params.ShopArea[z]);
                this.ShopArea.push(obj);
            }
        }

    }
}

/**
 * 以图搜图检索结果
 * @class
 */
class SearchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片base64数据
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 身份ID
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 相似度
         * @type {number || null}
         */
        this.Similarity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;

    }
}

/**
 * 用于场内上报当前相机的状态
 * @class
 */
class CameraState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 相机ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 相机状态:
10: 初始化
11: 未知状态
12: 网络异常
13: 未授权
14: 相机App异常
15: 相机取流异常
16: 状态正常
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * CreateCapture请求参数结构体
 * @class
 */
class CreateCaptureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始抓拍报文
         * @type {string || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * 移动告警
 * @class
 */
class CreateCameraAlertsMoveAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否移动
         * @type {boolean || null}
         */
        this.Move = null;

        /**
         * 是否移动置信度
         * @type {number || null}
         */
        this.MoveConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Move = 'Move' in params ? params.Move : null;
        this.MoveConfidence = 'MoveConfidence' in params ? params.MoveConfidence : null;

    }
}

/**
 * CreateCameraState请求参数结构体
 * @class
 */
class CreateCameraStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 场内所有相机的状态值
         * @type {Array.<CameraState> || null}
         */
        this.CameraStates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;

        if (params.CameraStates) {
            this.CameraStates = new Array();
            for (let z in params.CameraStates) {
                let obj = new CameraState();
                obj.deserialize(params.CameraStates[z]);
                this.CameraStates.push(obj);
            }
        }

    }
}

/**
 * DescribeCameras返回参数结构体
 * @class
 */
class DescribeCamerasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 摄像头列表
         * @type {Array.<CameraZones> || null}
         */
        this.Cameras = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cameras) {
            this.Cameras = new Array();
            for (let z in params.Cameras) {
                let obj = new CameraZones();
                obj.deserialize(params.Cameras[z]);
                this.Cameras.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话ID
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 配置版本号
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 摄像头列表
         * @type {Array.<CameraConfig> || null}
         */
        this.Cameras = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Cameras) {
            this.Cameras = new Array();
            for (let z in params.Cameras) {
                let obj = new CameraConfig();
                obj.deserialize(params.Cameras[z]);
                this.Cameras.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTask返回参数结构体
 * @class
 */
class DeleteTaskResponse extends  AbstractModel {
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
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点位列表
         * @type {Array.<ZoneConfig> || null}
         */
        this.Zones = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new ZoneConfig();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMultiBizConfig请求参数结构体
 * @class
 */
class ModifyMultiBizConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 广场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 监控区域
         * @type {Array.<Polygon> || null}
         */
        this.MonitoringAreas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;

        if (params.MonitoringAreas) {
            this.MonitoringAreas = new Array();
            for (let z in params.MonitoringAreas) {
                let obj = new Polygon();
                obj.deserialize(params.MonitoringAreas[z]);
                this.MonitoringAreas.push(obj);
            }
        }

    }
}

/**
 * 摄像头包含简单的点位信息
 * @class
 */
class CameraZones extends  AbstractModel {
    constructor(){
        super();

        /**
         * 摄像头ID
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 摄像头名称
         * @type {string || null}
         */
        this.CameraName = null;

        /**
         * 摄像头功能:
1: 人脸
2: 人体
         * @type {number || null}
         */
        this.CameraFeature = null;

        /**
         * 摄像头IP
         * @type {string || null}
         */
        this.CameraIp = null;

        /**
         * 摄像头状态:
0: 异常 (不再使用)
1: 正常 (不再使用)
10: 初始化
11: 未知状态 (因服务内部错误产生)
12: 网络异常
13: 未授权
14: 相机App异常
15: 相机取流异常
16: 正常
         * @type {number || null}
         */
        this.CameraState = null;

        /**
         * 点位列表
         * @type {Array.<BunkZone> || null}
         */
        this.Zones = null;

        /**
         * 像素:
130W(1280*960)
200W(1920*1080)
400W(2560*1440)
         * @type {string || null}
         */
        this.Pixel = null;

        /**
         * 相机Rtsp地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RTSP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.CameraName = 'CameraName' in params ? params.CameraName : null;
        this.CameraFeature = 'CameraFeature' in params ? params.CameraFeature : null;
        this.CameraIp = 'CameraIp' in params ? params.CameraIp : null;
        this.CameraState = 'CameraState' in params ? params.CameraState : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new BunkZone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.Pixel = 'Pixel' in params ? params.Pixel : null;
        this.RTSP = 'RTSP' in params ? params.RTSP : null;

    }
}

/**
 * 遮挡告警
 * @class
 */
class CreateCameraAlertsCoverAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否遮挡
         * @type {boolean || null}
         */
        this.Cover = null;

        /**
         * 是否移动置信度
         * @type {number || null}
         */
        this.CoverConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cover = 'Cover' in params ? params.Cover : null;
        this.CoverConfidence = 'CoverConfidence' in params ? params.CoverConfidence : null;

    }
}

/**
 * 点位包含铺位信息
 * @class
 */
class BunkZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点位ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 点位名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 铺位编码
         * @type {string || null}
         */
        this.BunkCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.BunkCodes = 'BunkCodes' in params ? params.BunkCodes : null;

    }
}

/**
 * 点
 * @class
 */
class Point extends  AbstractModel {
    constructor(){
        super();

        /**
         * X坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y坐标
         * @type {number || null}
         */
        this.Y = null;

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

    }
}

/**
 * CreateServerState请求参数结构体
 * @class
 */
class CreateServerStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团编码
         * @type {string || null}
         */
        this.GroupCode = null;

        /**
         * 服务器监控信息列表
         * @type {Array.<ServerStateItem> || null}
         */
        this.ServerStateItems = null;

        /**
         * 商场ID
         * @type {number || null}
         */
        this.MallId = null;

        /**
         * 服务器监控信息上报时间戳，单位毫秒
         * @type {number || null}
         */
        this.ReportTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupCode = 'GroupCode' in params ? params.GroupCode : null;

        if (params.ServerStateItems) {
            this.ServerStateItems = new Array();
            for (let z in params.ServerStateItems) {
                let obj = new ServerStateItem();
                obj.deserialize(params.ServerStateItems[z]);
                this.ServerStateItems.push(obj);
            }
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.ReportTime = 'ReportTime' in params ? params.ReportTime : null;

    }
}

/**
 * 多经点位告警
 * @class
 */
class MultiBizWarning extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 监控区域
         * @type {Array.<Point> || null}
         */
        this.MonitoringArea = null;

        /**
         * 告警列表
         * @type {Array.<MultiBizWarningInfo> || null}
         */
        this.WarningInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.MonitoringArea) {
            this.MonitoringArea = new Array();
            for (let z in params.MonitoringArea) {
                let obj = new Point();
                obj.deserialize(params.MonitoringArea[z]);
                this.MonitoringArea.push(obj);
            }
        }

        if (params.WarningInfos) {
            this.WarningInfos = new Array();
            for (let z in params.WarningInfos) {
                let obj = new MultiBizWarningInfo();
                obj.deserialize(params.WarningInfos[z]);
                this.WarningInfos.push(obj);
            }
        }

    }
}

module.exports = {
    ModifyMultiBizConfigResponse: ModifyMultiBizConfigResponse,
    CreateMultiBizAlertResponse: CreateMultiBizAlertResponse,
    CameraConfig: CameraConfig,
    CreateServerStateResponse: CreateServerStateResponse,
    Polygon: Polygon,
    CreateCaptureResponse: CreateCaptureResponse,
    DescribeConfigRequest: DescribeConfigRequest,
    DeleteTaskRequest: DeleteTaskRequest,
    CreateCameraAlertsRequest: CreateCameraAlertsRequest,
    CreateCameraAlertsResponse: CreateCameraAlertsResponse,
    DeleteMultiBizAlertRequest: DeleteMultiBizAlertRequest,
    ServerStateItem: ServerStateItem,
    DescribeZonesRequest: DescribeZonesRequest,
    Config: Config,
    TaskContent: TaskContent,
    SearchImageResponse: SearchImageResponse,
    CreateProgramStateResponse: CreateProgramStateResponse,
    ServiceRegisterInfo: ServiceRegisterInfo,
    DescribeTasksRequest: DescribeTasksRequest,
    SearchImageRequest: SearchImageRequest,
    DeleteMultiBizAlertResponse: DeleteMultiBizAlertResponse,
    ReportServiceRegisterRequest: ReportServiceRegisterRequest,
    DescribeImageResponse: DescribeImageResponse,
    CreateCameraAlertAlert: CreateCameraAlertAlert,
    ReportServiceRegisterResponse: ReportServiceRegisterResponse,
    DiskInfo: DiskInfo,
    CreateCameraStateResponse: CreateCameraStateResponse,
    CreateMultiBizAlertRequest: CreateMultiBizAlertRequest,
    CreateProgramStateRequest: CreateProgramStateRequest,
    DescribeMultiBizBaseImageRequest: DescribeMultiBizBaseImageRequest,
    MultiBizWarningInfo: MultiBizWarningInfo,
    Task: Task,
    ZoneConfig: ZoneConfig,
    ProgramStateItem: ProgramStateItem,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeCamerasRequest: DescribeCamerasRequest,
    DescribeMultiBizBaseImageResponse: DescribeMultiBizBaseImageResponse,
    DescribeImageRequest: DescribeImageRequest,
    ZoneArea: ZoneArea,
    SearchResult: SearchResult,
    CameraState: CameraState,
    CreateCaptureRequest: CreateCaptureRequest,
    CreateCameraAlertsMoveAlert: CreateCameraAlertsMoveAlert,
    CreateCameraStateRequest: CreateCameraStateRequest,
    DescribeCamerasResponse: DescribeCamerasResponse,
    DescribeConfigResponse: DescribeConfigResponse,
    DeleteTaskResponse: DeleteTaskResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    ModifyMultiBizConfigRequest: ModifyMultiBizConfigRequest,
    CameraZones: CameraZones,
    CreateCameraAlertsCoverAlert: CreateCameraAlertsCoverAlert,
    BunkZone: BunkZone,
    Point: Point,
    CreateServerStateRequest: CreateServerStateRequest,
    MultiBizWarning: MultiBizWarning,

}
