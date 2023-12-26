import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ApplyChorusResponse, DescribeKTVSuggestionsResponse, DestroyKTVRobotResponse, CreateKTVRobotRequest, SyncKTVRobotCommandRequest, DescribeKTVPlaylistDetailRequest, SyncKTVRobotCommandResponse, CreateKTVRobotResponse, DescribeKTVMusicAccompanySegmentUrlVipResponse, DescribeKTVSuggestionsRequest, DescribeKTVMatchMusicsRequest, DescribeKTVPlaylistsResponse, RechargeLiveVipResponse, DescribeKTVPlaylistsRequest, DescribeKTVPlaylistDetailResponse, DescribeLiveVipTradeInfosRequest, RechargeVipResponse, DescribeKTVRobotsResponse, DescribeKTVMusicAccompanySegmentUrlRequest, DescribeVipUserInfoRequest, BatchDescribeKTVMusicDetailsRequest, DescribeKTVMusicsByTagResponse, DescribeLiveVipTradeInfosResponse, DescribeVipUserInfoResponse, DescribeKTVMatchMusicsResponse, DescribeKTVTagsResponse, RechargeLiveVipRequest, SearchKTVMusicsResponse, RechargeVipRequest, ApplyChorusRequest, BatchDescribeKTVMusicDetailsResponse, DescribeKTVMusicsByTagRequest, SearchKTVMusicsRequest, DescribeKTVMusicAccompanySegmentUrlResponse, DescribeUserInfoRequest, DescribeKTVMusicAccompanySegmentUrlVipRequest, DestroyKTVRobotRequest, DescribeUserInfoResponse, DescribeKTVRobotsRequest, DescribeKTVTagsRequest } from "./yinsuda_models";
/**
 * yinsuda client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建机器人，支持进入 RTC 房间，播放曲库歌曲。
     */
    CreateKTVRobot(req: CreateKTVRobotRequest, cb?: (error: string, rep: CreateKTVRobotResponse) => void): Promise<CreateKTVRobotResponse>;
    /**
     * 充值直播会员，使该用户可以在直播场景使用
     */
    RechargeLiveVip(req: RechargeLiveVipRequest, cb?: (error: string, rep: RechargeLiveVipResponse) => void): Promise<RechargeLiveVipResponse>;
    /**
     * 获取标签分组及分组下的标签列表信息。
     */
    DescribeKTVTags(req: DescribeKTVTagsRequest, cb?: (error: string, rep: DescribeKTVTagsResponse) => void): Promise<DescribeKTVTagsResponse>;
    /**
     * 充值会员
     */
    RechargeVip(req: RechargeVipRequest, cb?: (error: string, rep: RechargeVipResponse) => void): Promise<RechargeVipResponse>;
    /**
     * 根据歌单 Id 获取歌单详情。
     */
    DescribeKTVPlaylistDetail(req: DescribeKTVPlaylistDetailRequest, cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void): Promise<DescribeKTVPlaylistDetailResponse>;
    /**
     * 获取会员信息：获取用户是否开通会员
     */
    DescribeVipUserInfo(req: DescribeVipUserInfoRequest, cb?: (error: string, rep: DescribeVipUserInfoResponse) => void): Promise<DescribeVipUserInfoResponse>;
    /**
     * 销毁机器人，机器人退出 RTC 房间。
     */
    DestroyKTVRobot(req: DestroyKTVRobotRequest, cb?: (error: string, rep: DestroyKTVRobotResponse) => void): Promise<DestroyKTVRobotResponse>;
    /**
     * 获取歌曲伴奏高潮的开始、结束时间，可用于抢唱
     */
    DescribeKTVMusicAccompanySegmentUrlVip(req: DescribeKTVMusicAccompanySegmentUrlVipRequest, cb?: (error: string, rep: DescribeKTVMusicAccompanySegmentUrlVipResponse) => void): Promise<DescribeKTVMusicAccompanySegmentUrlVipResponse>;
    /**
     * 根据关键词获取联想词列表。
     */
    DescribeKTVSuggestions(req: DescribeKTVSuggestionsRequest, cb?: (error: string, rep: DescribeKTVSuggestionsResponse) => void): Promise<DescribeKTVSuggestionsResponse>;
    /**
     * 获取用户信息，包括是否为直播会员，及直播会员信息等
     */
    DescribeUserInfo(req: DescribeUserInfoRequest, cb?: (error: string, rep: DescribeUserInfoResponse) => void): Promise<DescribeUserInfoResponse>;
    /**
     * 批量获取直播会员充值流水详细信息，包括：流水号，订单状态，下订单时间等
     */
    DescribeLiveVipTradeInfos(req: DescribeLiveVipTradeInfosRequest, cb?: (error: string, rep: DescribeLiveVipTradeInfosResponse) => void): Promise<DescribeLiveVipTradeInfosResponse>;
    /**
     * 批量获取歌曲详细信息，包括：歌词下载链接、播放凭证、音高数据下载链接信息等。
     */
    BatchDescribeKTVMusicDetails(req: BatchDescribeKTVMusicDetailsRequest, cb?: (error: string, rep: BatchDescribeKTVMusicDetailsResponse) => void): Promise<BatchDescribeKTVMusicDetailsResponse>;
    /**
     * 获取歌单列表。
     */
    DescribeKTVPlaylists(req: DescribeKTVPlaylistsRequest, cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void): Promise<DescribeKTVPlaylistsResponse>;
    /**
     * 申请合唱相关信息，用于标记用户的演唱是在合唱场景下。
     */
    ApplyChorus(req: ApplyChorusRequest, cb?: (error: string, rep: ApplyChorusResponse) => void): Promise<ApplyChorusResponse>;
    /**
     * 获取机器人列表，支持 Id、状态等过滤条件。
     */
    DescribeKTVRobots(req: DescribeKTVRobotsRequest, cb?: (error: string, rep: DescribeKTVRobotsResponse) => void): Promise<DescribeKTVRobotsResponse>;
    /**
     * 获取歌曲伴奏片段链接，可用于抢唱
     */
    DescribeKTVMusicAccompanySegmentUrl(req: DescribeKTVMusicAccompanySegmentUrlRequest, cb?: (error: string, rep: DescribeKTVMusicAccompanySegmentUrlResponse) => void): Promise<DescribeKTVMusicAccompanySegmentUrlResponse>;
    /**
     * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
     */
    SyncKTVRobotCommand(req: SyncKTVRobotCommandRequest, cb?: (error: string, rep: SyncKTVRobotCommandResponse) => void): Promise<SyncKTVRobotCommandResponse>;
    /**
     * 根据输入的规则匹配曲库中的歌曲。
     */
    DescribeKTVMatchMusics(req: DescribeKTVMatchMusicsRequest, cb?: (error: string, rep: DescribeKTVMatchMusicsResponse) => void): Promise<DescribeKTVMatchMusicsResponse>;
    /**
     * 根据关键词搜索歌曲，返回相关歌曲列表。
     */
    SearchKTVMusics(req: SearchKTVMusicsRequest, cb?: (error: string, rep: SearchKTVMusicsResponse) => void): Promise<SearchKTVMusicsResponse>;
    /**
     * 通过标签过滤歌曲列表。
     */
    DescribeKTVMusicsByTag(req: DescribeKTVMusicsByTagRequest, cb?: (error: string, rep: DescribeKTVMusicsByTagResponse) => void): Promise<DescribeKTVMusicsByTagResponse>;
}
