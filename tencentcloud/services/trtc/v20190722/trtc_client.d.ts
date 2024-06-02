import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreatePictureRequest, DescribeTRTCMarketQualityMetricDataResponse, DescribeTRTCRealTimeScaleDataRequest, DescribeTRTCMarketScaleDataRequest, DescribeUserEventRequest, DescribeTrtcRoomUsageResponse, StopPublishCdnStreamResponse, DescribeTRTCRealTimeScaleMetricDataRequest, StopWebRecordRequest, DescribeUserEventResponse, StopMCUMixTranscodeByStrRoomIdResponse, DescribeCallDetailInfoRequest, DescribeTRTCMarketScaleDataResponse, ModifyPictureRequest, DescribeWebRecordResponse, DescribeUserInfoRequest, DescribeTRTCMarketQualityDataResponse, DescribeRelayUsageRequest, DescribeRecordStatisticResponse, StartMCUMixTranscodeByStrRoomIdResponse, DescribeTrtcUsageResponse, DismissRoomByStrRoomIdRequest, DescribeTRTCMarketQualityMetricDataRequest, DescribeWebRecordRequest, DescribeTRTCRealTimeScaleDataResponse, DescribeRecordStatisticRequest, DescribeRoomInfoRequest, DescribeCallDetailInfoResponse, DescribeTRTCRealTimeQualityDataResponse, DescribeMixTranscodingUsageRequest, DescribeStreamIngestResponse, StopStreamIngestRequest, DescribeTRTCRealTimeQualityDataRequest, DescribeTrtcUsageRequest, DescribeRoomInfoResponse, DismissRoomRequest, DescribeTRTCRealTimeQualityMetricDataRequest, DescribeAITranscriptionRequest, DescribeUserInfoResponse, RemoveUserByStrRoomIdResponse, DescribeTRTCRealTimeScaleMetricDataResponse, StartMCUMixTranscodeRequest, StartPublishCdnStreamResponse, DescribeTRTCMarketScaleMetricDataRequest, DescribeRelayUsageResponse, StartStreamIngestRequest, DescribeRecordingUsageResponse, StopMCUMixTranscodeRequest, ModifyPictureResponse, DescribeRecordingUsageRequest, DescribeScaleInfoResponse, StopMCUMixTranscodeResponse, DescribeMixTranscodingUsageResponse, RemoveUserRequest, DescribeUnusualEventRequest, DescribeCloudRecordingRequest, DescribeTRTCRealTimeQualityMetricDataResponse, StartWebRecordResponse, CreateCloudRecordingRequest, DeleteCloudRecordingResponse, StopMCUMixTranscodeByStrRoomIdRequest, StopPublishCdnStreamRequest, DeletePictureResponse, ModifyCloudRecordingRequest, StartPublishCdnStreamRequest, CreateCloudRecordingResponse, StartStreamIngestResponse, StartMCUMixTranscodeResponse, DescribeTrtcMcuTranscodeTimeResponse, DeleteCloudRecordingRequest, DescribePictureRequest, DescribePictureResponse, DescribeTrtcRoomUsageRequest, DescribeTrtcMcuTranscodeTimeRequest, DescribeScaleInfoRequest, DismissRoomByStrRoomIdResponse, DescribeUnusualEventResponse, ModifyCloudRecordingResponse, StartMCUMixTranscodeByStrRoomIdRequest, DescribeCloudRecordingResponse, StartAITranscriptionRequest, DismissRoomResponse, StopStreamIngestResponse, DescribeTRTCMarketQualityDataRequest, SummarizeTranscriptionRequest, UpdatePublishCdnStreamRequest, StartWebRecordRequest, StopWebRecordResponse, SummarizeTranscriptionResponse, DeletePictureRequest, StopAITranscriptionRequest, UpdatePublishCdnStreamResponse, RemoveUserByStrRoomIdRequest, DescribeStreamIngestRequest, DescribeTRTCMarketScaleMetricDataResponse, StopAITranscriptionResponse, DescribeAITranscriptionResponse, CreatePictureResponse, StartAITranscriptionResponse, RemoveUserResponse } from "./trtc_models";
/**
 * trtc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询SdkAppId下的房间列表。默认返回10条通话，一次最多返回100条通话。最大可查询14天内的数据。（同老接口DescribeRoomInformation）
**注意**：
1.该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
2.该接口自2024年4月1日起正式商业化，需订阅套餐解锁调用能力，提供以下两种解锁方式，可任意其一解锁：
方式一：通过订阅[包月套餐](https://cloud.tencent.com/document/product/647/85386)「尊享版」（可查近7天）和「旗舰版」（可查近14天），[前往订阅](https://buy.cloud.tencent.com/trtc?trtcversion=top)。
方式二：通过订阅[监控仪表盘](https://cloud.tencent.com/document/product/647/81331)商业套餐包「基础版」（可查近7天）和「进阶版」（可查近14天），[前往订阅](https://buy.cloud.tencent.com/trtc_monitor)。
     */
    DescribeRoomInfo(req: DescribeRoomInfoRequest, cb?: (error: string, rep: DescribeRoomInfoResponse) => void): Promise<DescribeRoomInfoResponse>;
    /**
     * 获取TRTC音视频互动的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     */
    DescribeTrtcUsage(req: DescribeTrtcUsageRequest, cb?: (error: string, rep: DescribeTrtcUsageResponse) => void): Promise<DescribeTrtcUsageResponse>;
    /**
     * 查询TRTC监控仪表盘-数据大盘质量指标（包括下列指标）
joinSuccessRate：加入频道成功率。
joinSuccessIn5sRate：5s内加入频道成功率。
audioFreezeRate：音频卡顿率。
videoFreezeRate：视频卡顿率。
networkDelay ：网络延迟率。
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天。
     */
    DescribeTRTCMarketQualityMetricData(req: DescribeTRTCMarketQualityMetricDataRequest, cb?: (error: string, rep: DescribeTRTCMarketQualityMetricDataResponse) => void): Promise<DescribeTRTCMarketQualityMetricDataResponse>;
    /**
     * 查询页面录制任务
     */
    DescribeWebRecord(req: DescribeWebRecordRequest, cb?: (error: string, rep: DescribeWebRecordResponse) => void): Promise<DescribeWebRecordResponse>;
    /**
     * TRTC房间中可能会同时存在多路音视频流，您可以通过混流转推API，通知腾讯云服务端将同个房间或者多个房间的多路视频画面混合到一起，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看，同时可以支持将这一路音视频的混流回推到TRTC房间内部。

云api混流转推功能包含三个接口：
1、StartPublishCdnStream：启动一个混流转推任务，此接口会发起一个新的混流转推任务，启动成功后会返回一个sdkappid维度唯一的任务id（TaskId）。您需要保存该TaskId，后续需要依赖此TaskId更新任务和结束任务。
2、UpdatePublishCdnStream：更新指定的混流转推任务，包括：更新视频画面的布局、更新混音列表、更新转推cdn的地址列表以及更新回推房间列表。
3、StopPublishCdnStream：停止指定的混流转推任务。

您可以通过此套接口实现目标：
1、设置最终混流的画质和音质，包括视频分辨率、视频帧率、视频码率，和音频质量。
2、设置每一路画面的布局位置，您只需要设置一次，后续您指定的混流用户进房上行音视频时，排版引擎会自动将该用户的画面混合到您指定的布局位置。同时您可以使用更新接口调整画面的布局位置。
3、设置多个cdn转推的目的地址，一个转推任务最多可以同时设置10个cdn转推地址，如果您需要转推非腾讯云的cdn地址时，需要联系腾讯云开通能力。
4、设置多个回推房间列表，一个转推任务最多可以同时将混流回推到10个TRTC房间。

目前已经支持如下几种布局模版，其中动态布局模版（悬浮模板、九宫格模板、屏幕分享模板）只支持单个TRTC房间，自定义模版支持混合多个TRTC房间内的音视频流。具体说明如下：
1、悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频默认不占布局配置，也支持设置。每个子画面默认采用居中裁剪的方式进行渲染，也支持统一设置子画面的渲染方式。
2、九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，默认不占布局配置，也支持设置。每个子画面默认采用居中裁剪的方式进行渲染，也支持统一设置子画面的渲染方式。
3、屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，需要您明确设置占据大画面的混流用户信息。其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理，也支持统一设置子画面的渲染方式。
4、自定义布局模版：支持您主动根据业务需要设置布局位置，每个预设的布局位置支持具名设置（具名设置需要明确指定房间号和用户名）和不具名设置。当一个子画面具名设置时，该位置就为该用户预留，用户进房且上行音视频数据时会自动占据该位置，其它用户不会占据该位置。当预设的布局位置未具名时，排版引擎会根据进房间顺序自动填充，预设位置填满时，不再混合其它用户的画面和声音。每个子画面位置支持设置占位图（BackgroundImageUrl），当用户未进房或者只上行音频数据时，该位置画面可显示对应的占位图画面。

您可以控制台开通旁路转推回调功能实现转推cdn状态的事件监控，具体说明请参考官网文档：[旁路转推回调说明](https://cloud.tencent.com/document/product/647/88552)
您使用转推api时根据使用特性可能会产生如下费用：
MCU混流转码费用请参考文档：[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)
转推非腾讯云CDN费用请参考文档：[云端转推计费说明](https://cloud.tencent.com/document/product/647/82155)

参数的使用说明：
1、AgentParams：每个转推任务会拉起一个机器人用户进入TRTC房间进行拉流，您需要通过AgentParams.UserId参数进行设置，这个机器人id不能和房间中的普通用户id冲突，否则会导致转推任务由于机器人用户被踢出TRTC房间而异常结束，您可以通过增加特殊前缀的方式规避。您可以通过设置AgentParams.MaxIdleTime控制转推任务的自动结束，当设置此参数时，所有参与混流转推的主播持续离开TRTC房间超过MaxIdleTime的时长，自动停止转推任务。注意：参与混流转推的主播仅是停止音视频上行，转推任务不会自动停止。
2、WithTranscoding：如果需要将多路音视频流混合到一路时，WithTranscoding必须设置为1。
3、AudioParams：转推任务音频参数和视频参数是分开设置的，若您想要将指定的用户音频进行混音时，需要明确设置AudioParams.SubscribeAudioList。若您不设置AudioParams.SubscribeAudioList，混音引擎会自动将TRTC房间中所有用户的音频混合。若您想要混合TRTC房间除指定用户之外的所有用户的声音，可以通过AudioParams.UnSubscribeAudioList设置音频黑名单列表。
4、VideoParams：若您想要将用户的视频混合，可以通过VideoParams设置，若只想要混纯音频，则不用设置VideoParams参数。您可以通过VideoParams.LayoutParams.MixLayoutMode设置画面的布局模式，包括：动态布局（1：悬浮布局（默认），2：屏幕分享布局，3：九宫格布局）和自定义布局。动态布局模式由排版引擎按照固定的布局自动混合，不需要设置VideoParams.LayoutParams.MixLayoutList。当使用悬浮布局和屏幕分享布局时，您可以通过设置VideoParams.LayoutParams.MaxVideoUser参数指定大画面用户。自定义布局模式提供给您自主布局画面的能力，可以通过VideoParams.LayoutParams.MixLayoutList参数指定每个用户所在的布局位置。在每个布局参数中，您可以通过用户媒体流参数（UserMediaStream）指定这个布局位置为指定的用户预留，也可以不设置UserMediaStream，由排版引擎按照用户进入TRTC房间的顺序自动填充，另外您也可以设置每个布局位置的渲染方式（RenderMode）和裁剪方式（CustomCrop）。
5、VideoParams.WaterMarkList：若您想要混流画面中叠加水印，可以通过VideoParams.WaterMarkList参数设置，支持图片水印和文字水印，支持透明通道。
6、SingleSubscribeParams：若您想要将TRTC房间中的一路单流推到CDN，可以使用SingleSubscribeParams参数设置，此时需要将WithTranscoding参数设置为0。
7、PublishCdnParams.N：若您想要推流到CDN，可以使用PublishCdnParams.N参数设置，支持最多同时推流到10个CDN地址。若转推地址是腾讯云CDN时，请将IsTencentCdn明确设置为1；若您有转推非腾讯云CDN的需求时，请联系腾讯云技术支持开通，转推非腾讯云会产生转推费用，费用说明请参考官网文档：[云端转推计费说明](https://cloud.tencent.com/document/product/647/82155)。
8、FeedBackRoomParams.N：若您想要将混合的音视频流回推到TRTC房间，可以使用FeedBackRoomParams.N参数设置，支持最多同时推10路流回TRTC房间。您需要指定回推的TRTC房间号和机器人ID（UserId），机器人ID不能与普通用户ID冲突，否则会导致转推任务由于机器人用户被踢出TRTC房间而异常结束，您可以通过增加特殊前缀的方式规避。
9、SeiParams：若您想要混合的音视频流中增加SEI信息时，可以使用SeiParams参数设置，支持音量布局SEI和叠加转推请求中的SEI，其中音量布局SEI的内容是固定的json结构，具体请看本章节后续的SEI说明。您可以通过FollowIdr参数设置SEI跟随关键帧一起发送。音量布局sei的说明如下：
如果您的CDN观众端需要识别到参与混流的主播位置，以及需要识别到参与混流的主播的音量信息，可以通过音量布局sei实现。音量布局sei的payload内容及参数说明如下：

```
{
    "app_data":"",
    "canvas":{
        "w":1080,
        "h":960
    },
    "regions":[
        {
            "uid":"65949987242835883c",
            "zorder":2,
            "volume":45,
            "x":270,
            "y":480,
            "w":540,
            "h":480
        },
        {
            "uid":"659c9d8d242b328d31",
            "zorder":2,
            "volume":0,
            "x":0,
            "y":0,
            "w":540,
            "h":480
        },
        {
            "uid":"64989a82272b308c",
            "zorder":2,
            "volume":91,
            "x":540,
            "y":0,
            "w":540,
            "h":480
        }
    ],
    "ver":"1.0",
    "ts":1648544726
}
```
canvas：这个是混流信令中VideoEncode设置的宽高，即：混流输出的整个画布宽高。
regions：里面是真实混入的用户id和对应的子画面位置，若参与混流的用户未进入TRTC房间或者未开启视频上行，regions中不会包含该用户。
uid：代表参与混流的用户ID。
zorder：参与混流userid在混流输出的层级。
x/y：参与混流userid的子画面在画布的坐标。
w/h：参与混流userid的子画面的大小。
volume：代表混流用户的音量，取值范围为0-100，值越大，代表该用户参与混流时的音量越大。
ts：是输出sei的服务器本地秒级时戳。
ver：可以忽略。

其它使用注意事项：
1、使用混流转推接口时，您需要先调用启动转推任务接口（StartPublishCdnStream），获取启动转推任务响应中的任务ID标识（TaskId）。后续传入任务ID标识（TaskId）来更新转推任务（UpdatePublishCdnStream）和停止转推任务（StopPublishCdnStream）。
2、转推API不支持发起到TRTC控制台配置的自动旁路任务，以及通过TRTC SDK进房接口中设置的自定义流ID的旁路任务。
3、为了确保转推链接的稳定，同一个转推任务不支持纯音频、音视频、纯视频之间的切换。
4、为了确保转推链接的稳定，不支持update时更新视频参数（codec）和音频参数（codec、采样率、码率、声道数）。
5、发起单流旁路任务时，AudioParams和VideoParams都填写表示音视频旁路，如果仅填写AudioParams表示纯音频旁路，任务进行过程中不支持纯音频到音视频的切换。音视频旁路时，VideoParams中的Width、Height、Fps、BitRate、Gop需要按照真实上行参数填写。
6、更新请求中必须携带SequenceNumber参数，用于防止请求乱序。客户保证对同一个任务更新时的SequenceNumber参数递增，否则会导致混流任务更新失败。
7、调用api时region选择说明：如果应用id是1400xxx时，region可填北京、上海、广州、香港，如果您的cdn观众主要在海外，请选择香港；如果应用id是200xxx或400xxx时，region请选择新加坡。
8、回推到TRTC房间的流不会参与其他回推房间任务的混流，满足下面条件之一时，可以参与其他转推cdn任务的混流: (1) 转推cdn任务在视频参数中通过具名方式指定推流机器人参与混流；(2) 转推cdn任务在音频参数中通过白名单方式指定推流机器人参与混流；(3) 转推cdn任务参与混流用户的房间号与回推机器人对应混流用户的房间号完全不同。
9、您可以在主播进房前，提前创建转推任务，结束转推任务时需要主动调用停止接口。如果您没有调用停止转推任务接口时，腾讯云后台会按照所有参与混流的用户没有任何数据上行的时间算起，直到超过启动转推任务时设置的超时时间（AgentParams.MaxIdleTime）为止，自动停止混流转推任务。
     */
    StartPublishCdnStream(req: StartPublishCdnStreamRequest, cb?: (error: string, rep: StartPublishCdnStreamResponse) => void): Promise<StartPublishCdnStreamResponse>;
    /**
     * 查询指定时间内的用户列表及用户通话质量数据，最大可查询14天内数据。DataType 不为null，查询起止时间不超过1个小时，查询用户不超过6个，支持跨天查询。DataType为null时，查询起止时间不超过4个小时， 默认查询6个用户，同时支持每页查询100以内用户个数（PageSize不超过100）。接口用于查询质量问题，不推荐作为计费使用。（同老接口DescribeCallDetail）
**注意**：
1.该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
2.该接口自2024年4月1日起正式商业化，需订阅套餐解锁调用能力，提供以下两种解锁方式，可任选其一解锁：
方式一：通过订阅[包月套餐](https://cloud.tencent.com/document/product/647/85386)「尊享版」（可查近7天）和「旗舰版」（可查近14天），[前往订阅](https://buy.cloud.tencent.com/trtc?trtcversion=top)。
方式二：通过订阅[监控仪表盘](https://cloud.tencent.com/document/product/647/81331)商业套餐包「基础版」（可查近7天）和「进阶版」（可查近14天），[前往订阅](https://buy.cloud.tencent.com/trtc_monitor)。
     */
    DescribeCallDetailInfo(req: DescribeCallDetailInfoRequest, cb?: (error: string, rep: DescribeCallDetailInfoResponse) => void): Promise<DescribeCallDetailInfoResponse>;
    /**
     * 您可以查询输入在线媒体流任务的状态。
     */
    DescribeStreamIngest(req: DescribeStreamIngestRequest, cb?: (error: string, rep: DescribeStreamIngestResponse) => void): Promise<DescribeStreamIngestResponse>;
    /**
     * 查询TRTC监控仪表盘-数据大盘规模指标（会返回通话人数，通话房间数，峰值同时在线人数，峰值同时在线频道数）
userCount：通话人数，
roomCount：通话房间数，从有用户加入频道到所有用户离开频道计为一个通话频道。
peakCurrentChannels：峰值同时在线频道数。
peakCurrentUsers：峰值同时在线人数。
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天。
     */
    DescribeTRTCMarketScaleMetricData(req: DescribeTRTCMarketScaleMetricDataRequest, cb?: (error: string, rep: DescribeTRTCMarketScaleMetricDataResponse) => void): Promise<DescribeTRTCMarketScaleMetricDataResponse>;
    /**
     * 停止一个输入在线媒体流任务。
     */
    StopStreamIngest(req: StopStreamIngestRequest, cb?: (error: string, rep: StopStreamIngestResponse) => void): Promise<StopStreamIngestResponse>;
    /**
     * 接口说明：启动云端混流，并指定混流画面中各路画面的布局位置。

TRTC 的一个房间中可能会同时存在多路音视频流，您可以通过此 API 接口，通知腾讯云服务端将多路视频画面合成一路，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看。

您可以通过此接口实现如下目标：
- 设置最终直播流的画质和音质，包括视频分辨率、视频码率、视频帧率、以及声音质量等。
- 设置各路画面的位置和布局，您只需要在启动时设置一次，排版引擎会自动完成后续的画面排布。
- 设置录制文件名，用于二次回放。
- 设置 CDN 直播流 ID，用于在 CDN 进行直播观看。

目前已经支持了如下几种布局模板：
- 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，仍然会占用画面位置。
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置。
- 自定义模板：适用于在混流中指定用户的画面位置，或者预设视频画面位置的场景。当预设位置指定用户时，排版引擎会为该用户预留位置；当预设位置未指定用户时，排版引擎会根据进房间顺序自动填充。预设位置填满时，不再混合其他用户的画面和声音。自定义模板启用占位图功能时（LayoutParams中的PlaceHolderMode设置成1），在预设位置的用户没有上行视频时可显示对应的占位图（PlaceImageId）。

注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、2020年1月9号及以后创建的应用才能直接调用此接口。2020年1月9日之前创建的应用默认使用云直播的云端混流，如需切换至MCU混流，请[提交工单](https://console.cloud.tencent.com/workorder/category)寻求帮助。
3、客户端混流和服务端混流不能混用。
     */
    StartMCUMixTranscodeByStrRoomId(req: StartMCUMixTranscodeByStrRoomIdRequest, cb?: (error: string, rep: StartMCUMixTranscodeByStrRoomIdResponse) => void): Promise<StartMCUMixTranscodeByStrRoomIdResponse>;
    /**
     * 将一个在线媒体流推到TRTC房间。
使用此接口的前提条件：需要购买 [尊享版或旗舰版套餐包](https://cloud.tencent.com/document/product/647/85386
)
     */
    StartStreamIngest(req: StartStreamIngestRequest, cb?: (error: string, rep: StartStreamIngestResponse) => void): Promise<StartStreamIngestResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁删除自定义背景图或水印，可通过此接口删除已上传的图片。无需频繁删除图片的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     */
    DeletePicture(req: DeletePictureRequest, cb?: (error: string, rep: DeletePictureResponse) => void): Promise<DeletePictureResponse>;
    /**
     * 查询TRTC监控仪表盘-实时监控质量指标（会返回下列指标）
-视频卡顿率
-音频卡顿率
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时。
     */
    DescribeTRTCRealTimeQualityMetricData(req: DescribeTRTCRealTimeQualityMetricDataRequest, cb?: (error: string, rep: DescribeTRTCRealTimeQualityMetricDataResponse) => void): Promise<DescribeTRTCRealTimeQualityMetricDataResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁新增自定义背景图或水印，可通过此接口上传新的图片素材。无需频繁新增图片的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     */
    CreatePicture(req: CreatePictureRequest, cb?: (error: string, rep: CreatePictureResponse) => void): Promise<CreatePictureResponse>;
    /**
     * 查询TRTC监控仪表盘-实时监控规模指标（会返回下列指标）
-userCount（在线用户数）
-roomCount（在线房间数）
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘[版本功能和计费说明](https://cloud.tencent.com/document/product/647/81331)。
2.查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时。
3.除此之外您也可以通过[订阅TRTC包月套餐](https://buy.cloud.tencent.com/trtc)尊享版或旗舰版解锁此接口的调用能力，请在开通包月套餐后，请[提交工单](https://console.cloud.tencent.com/workorder/category)联系售后解锁调用能力
     */
    DescribeTRTCRealTimeScaleData(req: DescribeTRTCRealTimeScaleDataRequest, cb?: (error: string, rep: DescribeTRTCRealTimeScaleDataResponse) => void): Promise<DescribeTRTCRealTimeScaleDataResponse>;
    /**
     * 接口说明：将用户从房间移出，适用于主播/房主/管理员踢人等场景。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    RemoveUser(req: RemoveUserRequest, cb?: (error: string, rep: RemoveUserResponse) => void): Promise<RemoveUserResponse>;
    /**
     * 接口说明：结束云端混流
     */
    StopMCUMixTranscode(req: StopMCUMixTranscodeRequest, cb?: (error: string, rep: StopMCUMixTranscodeResponse) => void): Promise<StopMCUMixTranscodeResponse>;
    /**
     * 成功开启录制后，可以使用此接口来更新录制任务。仅在录制任务进行时有效，录制退出后更新将会返回错误。更新操作是全量覆盖，并不是增量更新的模式，也就是说每次更新都需要携带全量的信息。
     */
    ModifyCloudRecording(req: ModifyCloudRecordingRequest, cb?: (error: string, rep: ModifyCloudRecordingResponse) => void): Promise<ModifyCloudRecordingResponse>;
    /**
     * 查询用户某次通话内的进退房，视频开关等详细事件。可查询14天内数据。（同接口DescribeDetailEvent）
     */
    DescribeUserEvent(req: DescribeUserEventRequest, cb?: (error: string, rep: DescribeUserEventResponse) => void): Promise<DescribeUserEventResponse>;
    /**
     * 通过此接口可以发起 WEB 页面录制任务，在接口参数中指定录制 URL，录制分辨率，录制结果存储等参数。
因为参数或API逻辑问题会立即返回结果。而因为页面问题，如页面无法访问，会在回调中返回结果，请关注。
     */
    StartWebRecord(req: StartWebRecordRequest, cb?: (error: string, rep: StartWebRecordResponse) => void): Promise<StartWebRecordResponse>;
    /**
     * 接口说明：启动云端混流，并指定混流画面中各路画面的布局位置。

TRTC 的一个房间中可能会同时存在多路音视频流，您可以通过此 API 接口，通知腾讯云服务端将多路视频画面合成一路，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看。房间销毁后混流自动结束。

您可以通过此接口实现如下目标：
- 设置最终直播流的画质和音质，包括视频分辨率、视频码率、视频帧率、以及声音质量等。
- 设置各路画面的位置和布局，您只需要在启动时设置一次，排版引擎会自动完成后续的画面排布。
- 设置录制文件名，用于二次回放。
- 设置 CDN 直播流 ID，用于在 CDN 进行直播观看。

目前已经支持了如下几种布局模板：
- 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，仍然会占用画面位置。
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置，最多支持2个画面。
- 自定义模板：适用于在混流中指定用户的画面位置，或者预设视频画面位置的场景。当预设位置指定用户时，排版引擎会为该用户预留位置；当预设位置未指定用户时，排版引擎会根据进房间顺序自动填充。预设位置填满时，不再混合其他用户的画面和声音。自定义模板启用占位图功能时（LayoutParams中的PlaceHolderMode设置成1），在预设位置的用户没有上行视频时可显示对应的占位图（PlaceImageId）。

注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、2020年1月9号及以后创建的应用才能直接调用此接口。2020年1月9日之前创建的应用默认使用云直播的云端混流，如需切换至MCU混流，请[提交工单](https://console.cloud.tencent.com/workorder/category)寻求帮助。
3、客户端混流和服务端混流不能混用。
     */
    StartMCUMixTranscode(req: StartMCUMixTranscodeRequest, cb?: (error: string, rep: StartMCUMixTranscodeResponse) => void): Promise<StartMCUMixTranscodeResponse>;
    /**
     * 这个接口调用后，后台会启动转录机器人，实时进行语音识别并下发字幕和转录消息。
转录机器人支持两种拉流方式，通过TranscriptionMode字段控制：
- 拉取全房间的流。
- 拉取特定用户的流。

服务端实时下发字幕和会议记录有两种方式，通过IMAdminUserId和IMAdminUserSig字段控制：
- 如果填写IMAdminUserId和IMAdminUserSig，服务端会调用IM的[发送群组消息](https://cloud.tencent.com/document/product/269/1629)API来向端上实时下发消息。客户端只需监听群组消息的回调即可，比如[web端回调](https://cloud.tencent.com/document/product/269/75319)。
- 如果不填写IMAdminUserId和IMAdminUserSig，服务端使用TRTC自定义消息通道下发消息，CmdId固定是1。客户端只需监听自定义消息的回调即可，比如[c++回调](https://cloud.tencent.com/document/product/647/79637#4cd82f4edb24992a15a25187089e1565)。

服务端实时下发的消息是JSON字符串，实时字幕具体格式如下：
`{
    "type": "subtitle",
    "userid": "xxx",
    "text": "xxx",
    "translation_text": "xxx",
    "start_time": "00:00:02",
    "end_time": "00:00:05"
}`
字段作用如下：
- type是subtitle，表示这是实时字幕消息。
- userid表示是哪个用户说的话。
- text是语音识别出的文本。
- translation_text是text翻译后的文本，如果不启用翻译，则是空字符串。
- start_time和end_time表示该字幕消息从任务开启后的开始和结束时间。

转录消息具体格式如下：
`{
    "type": "transcription",
    "userid": "xxx",
    "text": "xxx",
    "translation_text": "xx",
    "start_time": "00:00:02",
    "end_time": "00:00:05"
}`
字段作用如下：
- type是transcription，表示这是转录消息。
- 其余字段同实时字幕消息。

转录消息和实时字幕消息的区别是，转录消息是完整的一句话，实时字幕消息则是这一句话的中间阶段。
假如有一句完整的话，“今天天气怎么样？”，那么服务的下发消息的顺序可能是这样：
- 字幕消息，“今天”
- 字幕消息，“今天天气”
- 字幕消息，“今天天气怎么样”
- 转录消息，“今天天气怎么样？”
     */
    StartAITranscription(req: StartAITranscriptionRequest, cb?: (error: string, rep: StartAITranscriptionResponse) => void): Promise<StartAITranscriptionResponse>;
    /**
     * 查询TRTC监控仪表盘-数据大盘规模指标（会返回通话人数，通话房间数，峰值同时在线人数，峰值同时在线频道数）
userCount：通话人数，
roomCount：通话房间数，从有用户加入频道到所有用户离开频道计为一个通话频道。
peakCurrentChannels：峰值同时在线频道数。
peakCurrentUsers：峰值同时在线人数。
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘[版本功能和计费说明](https://cloud.tencent.com/document/product/647/81331)。
2.查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天。
     */
    DescribeTRTCMarketScaleData(req: DescribeTRTCMarketScaleDataRequest, cb?: (error: string, rep: DescribeTRTCMarketScaleDataResponse) => void): Promise<DescribeTRTCMarketScaleDataResponse>;
    /**
     * 停止页面录制任务
     */
    StopWebRecord(req: StopWebRecordRequest, cb?: (error: string, rep: StopWebRecordResponse) => void): Promise<StopWebRecordResponse>;
    /**
     * 停止转推任务。
     */
    StopPublishCdnStream(req: StopPublishCdnStreamRequest, cb?: (error: string, rep: StopPublishCdnStreamResponse) => void): Promise<StopPublishCdnStreamResponse>;
    /**
     * 接口说明：
启动云端录制功能，完成房间内的音视频录制，并上传到指定的云存储。您可以通过此 API 接口把TRTC 房间中的每一路音视频流做单独的录制又或者多路视频画面合流混成一路。

您可以通过此接口实现如下目标：
* 指定订阅流参数（RecordParams）来指定需要录制的主播的黑名单或者白名单。
* 指定录制存储参数（StorageParams）来指定上传到您希望的云存储，目前支持腾讯云（云点播VOD、对象存储COS）和第三方AWS
* 指定合流模式下的音视频转码详细参数（MixTranscodeParams），包括视频分辨率、视频码率、视频帧率、以及声音质量等
* 指定合流模式各路画面的位置和布局或者也可以指定自动模板的方式来配置。

关键名词：
* 单流录制：分别录制房间的订阅UserId的音频和视频，录制服务会实时将录制文件上传至您指定的云存储。
* 合流录制：将房间内订阅UserId的音视频混录成一个视频文件，并将录制文件上传至您指定的云存储。（录制结束后可前往云点播控制台https://console.cloud.tencent.com/vod/media 或 对象存储COS控制台https://console.cloud.tencent.com/cos/bucket查看文件）。
     */
    CreateCloudRecording(req: CreateCloudRecordingRequest, cb?: (error: string, rep: CreateCloudRecordingResponse) => void): Promise<CreateCloudRecordingResponse>;
    /**
     * 可查询SdkAppId每天的房间数和用户数，按天统计，可查询最近14天的数据。当天未结束，数据未统计完成，无法查到当天的房间数与用户数。（同老接口DescribeHistoryScale）
     */
    DescribeScaleInfo(req: DescribeScaleInfoRequest, cb?: (error: string, rep: DescribeScaleInfoResponse) => void): Promise<DescribeScaleInfoResponse>;
    /**
     * 获取TRTC旁路转推的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     */
    DescribeRelayUsage(req: DescribeRelayUsageRequest, cb?: (error: string, rep: DescribeRelayUsageResponse) => void): Promise<DescribeRelayUsageResponse>;
    /**
     * 查询指定时间内的用户列表，最大可查询14天内数据，查询起止时间不超过4小时。默认每页查询6个用户，支持每页最大查询100个用户PageSize不超过100）。（同老接口DescribeUserInformation）
**注意**：
1.该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
2.该接口自2024年4月1日起正式商业化，需订阅套餐解锁调用能力，提供以下两种解锁方式，可任选其一解锁：
方式一：通过订阅[包月套餐](https://cloud.tencent.com/document/product/647/85386)「尊享版」（可查近7天）和「旗舰版」（可查近14天），[前往订阅](https://buy.cloud.tencent.com/trtc?trtcversion=top)。
方式二：通过订阅[监控仪表盘](https://cloud.tencent.com/document/product/647/81331)商业套餐包「基础版」（可查近7天）和「进阶版」（可查近14天），[前往订阅](https://buy.cloud.tencent.com/trtc_monitor)。
     */
    DescribeUserInfo(req: DescribeUserInfoRequest, cb?: (error: string, rep: DescribeUserInfoResponse) => void): Promise<DescribeUserInfoResponse>;
    /**
     * 接口说明：把房间所有用户从房间移出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    DismissRoomByStrRoomId(req: DismissRoomByStrRoomIdRequest, cb?: (error: string, rep: DismissRoomByStrRoomIdResponse) => void): Promise<DismissRoomByStrRoomIdResponse>;
    /**
     * 接口说明：结束云端混流
     */
    StopMCUMixTranscodeByStrRoomId(req: StopMCUMixTranscodeByStrRoomIdRequest, cb?: (error: string, rep: StopMCUMixTranscodeByStrRoomIdResponse) => void): Promise<StopMCUMixTranscodeByStrRoomIdResponse>;
    /**
     * 对转录的文本进行总结。
     */
    SummarizeTranscription(req?: SummarizeTranscriptionRequest, cb?: (error: string, rep: SummarizeTranscriptionResponse) => void): Promise<SummarizeTranscriptionResponse>;
    /**
     * 获取TRTC录制的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     */
    DescribeRecordingUsage(req: DescribeRecordingUsageRequest, cb?: (error: string, rep: DescribeRecordingUsageResponse) => void): Promise<DescribeRecordingUsageResponse>;
    /**
     * 接口说明：将用户从房间移出，适用于主播/房主/管理员踢人等场景。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    RemoveUserByStrRoomId(req: RemoveUserByStrRoomIdRequest, cb?: (error: string, rep: RemoveUserByStrRoomIdResponse) => void): Promise<RemoveUserByStrRoomIdResponse>;
    /**
     * 获取TRTC混流转码的用量明细。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用。
- 默认接口请求频率限制：5次/秒。
     */
    DescribeMixTranscodingUsage(req: DescribeMixTranscodingUsageRequest, cb?: (error: string, rep: DescribeMixTranscodingUsageResponse) => void): Promise<DescribeMixTranscodingUsageResponse>;
    /**
     * 接口说明：把房间所有用户从房间移出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    DismissRoom(req: DismissRoomRequest, cb?: (error: string, rep: DismissRoomResponse) => void): Promise<DismissRoomResponse>;
    /**
     * 查询TRTC音视频房间维度用量。
- 单次只能查询一天数据，返回查询时间段内的汇总数据；通过多次查询可以查不同天数据。若查询跨天用量，由于统计延迟等原因，返回数据可能不够准确。
- 该接口只用于历史用量数据统计或核对数据使用，关键业务逻辑不能使用，不可用于账单核对，如需对账请使用账号/应用维度用量API：DescribeTrtcUsage。
- 默认接口请求频率限制：1次/15秒。
- 数据最早可查日期为2023年4月1日0点，最大可查范围近3个月。
     */
    DescribeTrtcRoomUsage(req: DescribeTrtcRoomUsageRequest, cb?: (error: string, rep: DescribeTrtcRoomUsageResponse) => void): Promise<DescribeTrtcRoomUsageResponse>;
    /**
     * 查询云端录制计费时长。

- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 日结后付费将于次日上午推送账单，建议次日上午9点以后再来查询前一天的用量。
     */
    DescribeRecordStatistic(req: DescribeRecordStatisticRequest, cb?: (error: string, rep: DescribeRecordStatisticResponse) => void): Promise<DescribeRecordStatisticResponse>;
    /**
     * 查询旁路转码计费时长。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 日结后付费将于次日上午推送账单，建议次日上午9点以后再来查询前一天的用量。
     */
    DescribeTrtcMcuTranscodeTime(req: DescribeTrtcMcuTranscodeTimeRequest, cb?: (error: string, rep: DescribeTrtcMcuTranscodeTimeResponse) => void): Promise<DescribeTrtcMcuTranscodeTimeResponse>;
    /**
     * 成功开启录制后，可以使用此接口来查询录制状态。仅在录制任务进行时有效，录制退出后查询将会返回错误。
录制文件上传到云点播VOD时，StorageFileList中不会返回录制文件信息，请订阅相关录制文件回调事件，获取录制文件信息。
     */
    DescribeCloudRecording(req: DescribeCloudRecordingRequest, cb?: (error: string, rep: DescribeCloudRecordingResponse) => void): Promise<DescribeCloudRecordingResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁修改自定义背景图或水印素材，可通过此接口修改已上传的图片。无需频繁修改图片素材的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     */
    ModifyPicture(req: ModifyPictureRequest, cb?: (error: string, rep: ModifyPictureResponse) => void): Promise<ModifyPictureResponse>;
    /**
     * 查询AI转录任务状态。
     */
    DescribeAITranscription(req: DescribeAITranscriptionRequest, cb?: (error: string, rep: DescribeAITranscriptionResponse) => void): Promise<DescribeAITranscriptionResponse>;
    /**
     * 更新转推任务。
注：请参见启动转推任务的接口说明和使用说明。
     */
    UpdatePublishCdnStream(req: UpdatePublishCdnStreamRequest, cb?: (error: string, rep: UpdatePublishCdnStreamResponse) => void): Promise<UpdatePublishCdnStreamResponse>;
    /**
     * 查询TRTC监控仪表盘-实时监控质量指标（会返回下列指标）
-视频卡顿率
-音频卡顿率
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘[版本功能和计费说明]（https://cloud.tencent.com/document/product/647/81331）。
2.查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时。
     */
    DescribeTRTCRealTimeQualityData(req: DescribeTRTCRealTimeQualityDataRequest, cb?: (error: string, rep: DescribeTRTCRealTimeQualityDataResponse) => void): Promise<DescribeTRTCRealTimeQualityDataResponse>;
    /**
     * 成功开启录制后，可以使用此接口来停止录制任务。停止录制成功后不代表文件全部传输完成，如果未完成后台将会继续上传文件，成功后通过事件回调通知客户文件全部传输完成状态。
     */
    DeleteCloudRecording(req: DeleteCloudRecordingRequest, cb?: (error: string, rep: DeleteCloudRecordingResponse) => void): Promise<DeleteCloudRecordingResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁查找自定义背景图或水印信息，可通过此接口查找已上传的图片信息。无需频繁查找图片信息的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中查看。
     */
    DescribePicture(req: DescribePictureRequest, cb?: (error: string, rep: DescribePictureResponse) => void): Promise<DescribePictureResponse>;
    /**
     * 查询TRTC监控仪表盘-数据大盘质量指标（包括下列指标）
joinSuccessRate：加入频道成功率。
joinSuccessIn5sRate：5s内加入频道成功率。
audioFreezeRate：音频卡顿率。
videoFreezeRate：视频卡顿率。
networkDelay ：网络延迟率。
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘[版本功能和计费说明](https://cloud.tencent.com/document/product/647/81331)。
2.查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天。
     */
    DescribeTRTCMarketQualityData(req: DescribeTRTCMarketQualityDataRequest, cb?: (error: string, rep: DescribeTRTCMarketQualityDataResponse) => void): Promise<DescribeTRTCMarketQualityDataResponse>;
    /**
     * 停止AI转录任务。
     */
    StopAITranscription(req: StopAITranscriptionRequest, cb?: (error: string, rep: StopAITranscriptionResponse) => void): Promise<StopAITranscriptionResponse>;
    /**
     * 查询SdkAppId下任意20条异常体验事件，返回异常体验ID与可能产生异常体验的原因。可查询14天内数据，查询起止时间不超过1个小时。支持跨天查询。（同老接口DescribeAbnormalEvent）
异常体验ID映射见：https://cloud.tencent.com/document/product/647/44916
     */
    DescribeUnusualEvent(req: DescribeUnusualEventRequest, cb?: (error: string, rep: DescribeUnusualEventResponse) => void): Promise<DescribeUnusualEventResponse>;
    /**
     * 查询TRTC监控仪表盘-实时监控规模指标（会返回下列指标）
-userCount（在线用户数）
-roomCount（在线房间数）
注意：
1.调用接口需开通监控仪表盘【基础版】和【进阶版】，监控仪表盘【免费版】不支持调用，监控仪表盘版本功能和计费说明：https://cloud.tencent.com/document/product/647/81331。
2.查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时。
xa0
3.除此之外您也可以通过订阅TRTC包月套餐(https://buy.cloud.tencent.com/trtc)尊享版或旗舰版解锁此接口（DescribeTRTCRealTimeScaleMetricData）的调用能力，请在开通包月套餐后，请提交工单联系售后解锁调用能力https://console.cloud.tencent.com/workorder/category
     */
    DescribeTRTCRealTimeScaleMetricData(req: DescribeTRTCRealTimeScaleMetricDataRequest, cb?: (error: string, rep: DescribeTRTCRealTimeScaleMetricDataResponse) => void): Promise<DescribeTRTCRealTimeScaleMetricDataResponse>;
}
