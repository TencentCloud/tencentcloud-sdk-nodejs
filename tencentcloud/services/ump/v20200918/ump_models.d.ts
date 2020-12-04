/**
 * CreateMultiBizAlert返回参数结构体
 */
export interface CreateMultiBizAlertResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 摄像头配置信息
 */
export interface CameraConfig {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 楼层ID
      */
    FloorId: number;
    /**
      * 摄像头ID
      */
    CameraId: number;
    /**
      * 摄像头IP
      */
    CameraIp: string;
    /**
      * 摄像头Mac
      */
    CameraMac: string;
    /**
      * 摄像头类型:
1: 码流机
2: AI相机
      */
    CameraType: number;
    /**
      * 摄像头功能:
1: 人脸
2: 人体
      */
    CameraFeature: number;
    /**
      * 摄像头是否启用:
0: 下线
1: 启用
      */
    CameraState: number;
    /**
      * 点位ID
      */
    ZoneId: number;
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
      */
    ZoneType: number;
    /**
      * 配置
      */
    Config: Config;
    /**
      * 宽
      */
    Width: number;
    /**
      * 高
      */
    Height: number;
}
/**
 * CreateServerState返回参数结构体
 */
export interface CreateServerStateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 多边形
 */
export interface Polygon {
    /**
      * 标注列表
      */
    Points: Array<Point>;
}
/**
 * CreateCapture返回参数结构体
 */
export interface CreateCaptureResponse {
    /**
      * 原始应答报文
注意：此字段可能返回 null，表示取不到有效值。
      */
    RspData?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfig请求参数结构体
 */
export interface DescribeConfigRequest {
    /**
      * 会话ID
      */
    SessionId: string;
    /**
      * 摄像头签名
      */
    CameraSign: string;
    /**
      * 摄像头app id
      */
    CameraAppId: string;
    /**
      * 摄像头时间戳，毫秒
      */
    CameraTimestamp: number;
    /**
      * MAC地址，字母大写
      */
    ServerMac?: string;
    /**
      * 集团编码
      */
    GroupCode?: string;
    /**
      * 广场ID
      */
    MallId?: number;
}
/**
 * DeleteTask请求参数结构体
 */
export interface DeleteTaskRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 任务ID
      */
    TaskId: number;
}
/**
 * CreateCameraAlerts请求参数结构体
 */
export interface CreateCameraAlertsRequest {
    /**
      * 告警信息列表
      */
    Alerts?: Array<CreateCameraAlertAlert>;
}
/**
 * CreateCameraAlerts返回参数结构体
 */
export interface CreateCameraAlertsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteMultiBizAlert请求参数结构体
 */
export interface DeleteMultiBizAlertRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 点位ID
      */
    ZoneId: number;
    /**
      * 摄像头ID
      */
    CameraId: number;
    /**
      * 消警动作:
1: 误报
2: 正报合规
3: 正报不合规，整改完成
      */
    ActionType: number;
    /**
      * 图片base64字符串
      */
    Image?: string;
}
/**
 * 服务器监控状态上报项
 */
export interface ServerStateItem {
    /**
      * 服务器状态
1: 在线
2: 离线
3: 重启
      */
    ServerState: number;
    /**
      * 服务器IP
      */
    ServerIp: string;
    /**
      * 硬盘监控信息列表
      */
    DiskInfos: Array<DiskInfo>;
}
/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
}
/**
 * 摄像头配置
 */
export interface Config {
    /**
      * 摄像头厂商:
H: 海康
D: 大华
Y: 英飞拓
L: 联纵
      */
    CameraProducer: string;
    /**
      * rtsp 地址
      */
    RTSP: string;
    /**
      * 摄像头帧率
      */
    Fps: number;
    /**
      * 解码帧率
      */
    DecodeFps: number;
    /**
      * 是否做客流计算:
0: 否
1: 是
      */
    PassengerFlow: number;
    /**
      * 是否打开人脸曝光:
0: 关闭
1: 开启
      */
    FaceExpose: number;
    /**
      * 门线标注
      */
    MallArea: Array<Point>;
    /**
      * 店门标注
      */
    ShopArea: Array<Point>;
    /**
      * 检测区标注
      */
    TrackAreas: Array<Polygon>;
    /**
      * 点位列表（品类区）
      */
    Zones: Array<ZoneArea>;
}
/**
 * 任务内容
 */
export interface TaskContent {
    /**
      * 摄像头ID
      */
    CameraId: number;
    /**
      * rtsp 地址
      */
    RTSP: string;
    /**
      * 图片上传地址
      */
    Url: string;
}
/**
 * SearchImage返回参数结构体
 */
export interface SearchImageResponse {
    /**
      * face id
      */
    FaceId?: string;
    /**
      * 搜索结果列表
      */
    Results?: Array<SearchResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProgramState返回参数结构体
 */
export interface CreateProgramStateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 任务类型:
1: 底图拉取
      */
    TaskType: number;
}
/**
 * SearchImage请求参数结构体
 */
export interface SearchImageRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 图片base64字符串
      */
    Image: string;
    /**
      * 时间戳，毫秒
      */
    ImageTime: number;
}
/**
 * DeleteMultiBizAlert返回参数结构体
 */
export interface DeleteMultiBizAlertResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 以图搜图检索结果
 */
export interface SearchResult {
    /**
      * 图片base64数据
      */
    Image: string;
    /**
      * 身份ID
      */
    PersonId: string;
    /**
      * 相似度
      */
    Similarity: number;
}
/**
 * DescribeImage返回参数结构体
 */
export interface DescribeImageResponse {
    /**
      * cos 临时 url，异步上传图片，client需要轮询
      */
    ImageUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警信息
 */
export interface CreateCameraAlertAlert {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 相机ID
      */
    CameraId: number;
    /**
      * 时间戳,ms,默认为告警请求到达时间
      */
    CaptureTime: number;
    /**
      * 图片base64编码
      */
    Image?: string;
    /**
      * 移动告警
      */
    MoveAlert?: CreateCameraAlertsMoveAlert;
    /**
      * 遮挡告警
      */
    CoverAlert?: CreateCameraAlertsCoverAlert;
}
/**
 * 硬盘监控信息
 */
export interface DiskInfo {
    /**
      * 硬盘名字
      */
    DiskName: string;
    /**
      * 硬盘使用率
      */
    Usage: number;
}
/**
 * DeleteTask返回参数结构体
 */
export interface DeleteTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProgramState请求参数结构体
 */
export interface CreateProgramStateRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 进程监控信息列表
      */
    ProgramStateItems: Array<ProgramStateItem>;
    /**
      * 商场ID
      */
    MallId?: number;
}
/**
 * DescribeMultiBizBaseImage请求参数结构体
 */
export interface DescribeMultiBizBaseImageRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 摄像头ID
      */
    CameraId: number;
    /**
      * 点位ID
      */
    ZoneId: number;
}
/**
 * 任务信息
 */
export interface Task {
    /**
      * 任务ID
      */
    TaskId: number;
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 任务内容
      */
    TaskContent: TaskContent;
    /**
      * 任务类型:
1: 底图拉取
      */
    TaskType: number;
}
/**
 * 点位包含绑定、调试信息
 */
export interface ZoneConfig {
    /**
      * 点位ID
      */
    ZoneId: number;
    /**
      * 点位名称
      */
    ZoneName: string;
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
      */
    ZoneType: number;
    /**
      * 铺位编码
      */
    BunkCodes: string;
    /**
      * 楼层名称
      */
    FloorName: string;
    /**
      * 楼层ID
      */
    FloorId: number;
    /**
      * 绑定数
      */
    BindNum: number;
    /**
      * 调试数
      */
    DebugNum: number;
    /**
      * 下发状态:
1: 不可下发
2: 可下发
3: 已下发
      */
    State: number;
}
/**
 * 进程状态监控项
 */
export interface ProgramStateItem {
    /**
      * 服务器IP
      */
    ServerIp: string;
    /**
      * 进程名字
      */
    ProgramName: string;
    /**
      * 在线个数
      */
    OnlineCount: number;
    /**
      * 离线个数
      */
    OfflineCount: number;
    /**
      * 上报状态:
1: 正常上报
2: 异常上报
注：此处异常上报是指本次上报由于场内服务内部原因导致上报数据不可信等。此时离线个数重置为1，在线个数重置为0
      */
    State: number;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
      * 任务列表
      */
    Tasks?: Array<Task>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCameras请求参数结构体
 */
export interface DescribeCamerasRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
}
/**
 * DescribeMultiBizBaseImage返回参数结构体
 */
export interface DescribeMultiBizBaseImageResponse {
    /**
      * cos 临时 url
      */
    ImageUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImage请求参数结构体
 */
export interface DescribeImageRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 摄像头ID
      */
    CameraId: number;
}
/**
 * 点位包含店门标注
 */
export interface ZoneArea {
    /**
      * 点位ID
      */
    ZoneId: number;
    /**
      * 店门标注
      */
    ShopArea: Array<Point>;
}
/**
 * CreateCapture请求参数结构体
 */
export interface CreateCaptureRequest {
    /**
      * 原始抓拍报文
      */
    Data: string;
}
/**
 * 移动告警
 */
export interface CreateCameraAlertsMoveAlert {
    /**
      * 是否移动
      */
    Move?: boolean;
    /**
      * 是否移动置信度
      */
    MoveConfidence?: number;
}
/**
 * DescribeCameras返回参数结构体
 */
export interface DescribeCamerasResponse {
    /**
      * 摄像头列表
      */
    Cameras?: Array<CameraZones>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 点
 */
export interface Point {
    /**
      * X坐标
      */
    X: number;
    /**
      * Y坐标
      */
    Y: number;
}
/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
    /**
      * 会话ID
      */
    SessionId?: string;
    /**
      * 配置版本号
      */
    Version?: number;
    /**
      * 摄像头列表
      */
    Cameras?: Array<CameraConfig>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMultiBizAlert请求参数结构体
 */
export interface CreateMultiBizAlertRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 广场ID
      */
    MallId: number;
    /**
      * 点位ID
      */
    ZoneId: number;
    /**
      * 摄像头ID
      */
    CameraId: number;
    /**
      * 时间戳，毫秒
      */
    CaptureTime: number;
    /**
      * 状态:
1: 侵占
2: 消失
3: 即侵占又消失
      */
    State: number;
    /**
      * 图片base64字符串
      */
    Image?: string;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
      * 点位列表
      */
    Zones?: Array<ZoneConfig>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 摄像头包含简单的点位信息
 */
export interface CameraZones {
    /**
      * 摄像头ID
      */
    CameraId: number;
    /**
      * 摄像头名称
      */
    CameraName: string;
    /**
      * 摄像头功能:
1: 人脸
2: 人体
      */
    CameraFeature: number;
    /**
      * 摄像头IP
      */
    CameraIp: string;
    /**
      * 摄像头状态:
0: 异常
1: 正常
      */
    CameraState: number;
    /**
      * 点位列表
      */
    Zones: Array<BunkZone>;
    /**
      * 像素:
130W(1280*960)
200W(1920*1080)
400W(2560*1440)
      */
    Pixel: string;
}
/**
 * 遮挡告警
 */
export interface CreateCameraAlertsCoverAlert {
    /**
      * 是否遮挡
      */
    Cover?: boolean;
    /**
      * 是否移动置信度
      */
    CoverConfidence?: number;
}
/**
 * 点位包含铺位信息
 */
export interface BunkZone {
    /**
      * 点位ID
      */
    ZoneId: number;
    /**
      * 点位名称
      */
    ZoneName: string;
    /**
      * 铺位编码
      */
    BunkCodes: string;
}
/**
 * CreateServerState请求参数结构体
 */
export interface CreateServerStateRequest {
    /**
      * 集团编码
      */
    GroupCode: string;
    /**
      * 服务器监控信息列表
      */
    ServerStateItems: Array<ServerStateItem>;
    /**
      * 商场ID
      */
    MallId?: number;
    /**
      * 服务器监控信息上报时间戳，单位毫秒
      */
    ReportTime?: number;
}
