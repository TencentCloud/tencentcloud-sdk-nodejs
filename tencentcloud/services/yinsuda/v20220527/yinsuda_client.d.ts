import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeKTVSuggestionsResponse, DestroyKTVRobotResponse, CreateKTVRobotRequest, SyncKTVRobotCommandRequest, DescribeKTVPlaylistDetailRequest, CreateKTVRobotResponse, DescribeKTVSuggestionsRequest, DescribeKTVMatchMusicsRequest, DescribeKTVPlaylistsResponse, DescribeKTVPlaylistsRequest, DescribeKTVPlaylistDetailResponse, DescribeKTVRobotsResponse, BatchDescribeKTVMusicDetailsRequest, SearchKTVMusicsResponse, DescribeKTVMatchMusicsResponse, SyncKTVRobotCommandResponse, BatchDescribeKTVMusicDetailsResponse, SearchKTVMusicsRequest, DestroyKTVRobotRequest, DescribeKTVRobotsRequest } from "./yinsuda_models";
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
     * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
     */
    SyncKTVRobotCommand(req: SyncKTVRobotCommandRequest, cb?: (error: string, rep: SyncKTVRobotCommandResponse) => void): Promise<SyncKTVRobotCommandResponse>;
    /**
     * 根据歌单 Id 获取歌单详情。
     */
    DescribeKTVPlaylistDetail(req: DescribeKTVPlaylistDetailRequest, cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void): Promise<DescribeKTVPlaylistDetailResponse>;
    /**
     * 销毁机器人，机器人退出 RTC 房间。
     */
    DestroyKTVRobot(req: DestroyKTVRobotRequest, cb?: (error: string, rep: DestroyKTVRobotResponse) => void): Promise<DestroyKTVRobotResponse>;
    /**
     * 根据关键词获取联想词列表。
     */
    DescribeKTVSuggestions(req: DescribeKTVSuggestionsRequest, cb?: (error: string, rep: DescribeKTVSuggestionsResponse) => void): Promise<DescribeKTVSuggestionsResponse>;
    /**
     * 批量获取歌曲详细信息，包括：歌词下载链接、播放凭证、音高数据下载链接信息等。
     */
    BatchDescribeKTVMusicDetails(req: BatchDescribeKTVMusicDetailsRequest, cb?: (error: string, rep: BatchDescribeKTVMusicDetailsResponse) => void): Promise<BatchDescribeKTVMusicDetailsResponse>;
    /**
     * 获取歌单列表。
     */
    DescribeKTVPlaylists(req: DescribeKTVPlaylistsRequest, cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void): Promise<DescribeKTVPlaylistsResponse>;
    /**
     * 获取机器人列表，支持 Id、状态等过滤条件。
     */
    DescribeKTVRobots(req: DescribeKTVRobotsRequest, cb?: (error: string, rep: DescribeKTVRobotsResponse) => void): Promise<DescribeKTVRobotsResponse>;
    /**
     * 根据输入的规则匹配曲库中的歌曲。
     */
    DescribeKTVMatchMusics(req: DescribeKTVMatchMusicsRequest, cb?: (error: string, rep: DescribeKTVMatchMusicsResponse) => void): Promise<DescribeKTVMatchMusicsResponse>;
    /**
     * 根据关键词搜索歌曲，返回相关歌曲列表。
     */
    SearchKTVMusics(req: SearchKTVMusicsRequest, cb?: (error: string, rep: SearchKTVMusicsResponse) => void): Promise<SearchKTVMusicsResponse>;
}
