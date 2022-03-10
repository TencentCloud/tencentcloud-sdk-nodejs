import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMusicResponse, DescribeKTVSuggestionsResponse, ModifyMusicOnShelvesResponse, DescribeKTVMusicDetailRequest, DescribeKTVSingerCategoriesRequest, ModifyMusicOnShelvesRequest, DescribeMusicRequest, DescribeMusicSaleStatusRequest, TakeMusicOffShelvesRequest, DescribeCloudMusicResponse, DestroyKTVRobotRequest, DescribeAuthInfoResponse, DescribeLyricRequest, ReportDataRequest, DescribePkgOfflineMusicRequest, DescribeMusicSaleStatusResponse, CreateKTVRobotResponse, DescribePackageItemsResponse, DescribeCloudMusicPurchasedResponse, ReportDataResponse, SearchKTVMusicsResponse, DescribeItemByIdRequest, PutMusicOnTheShelvesResponse, DescribeKTVSingerMusicsResponse, DescribeItemsResponse, DescribePkgOfflineMusicResponse, PutMusicOnTheShelvesRequest, DescribeCloudMusicRequest, DescribeKTVMusicDetailResponse, DescribeKTVRobotsRequest, DescribeKTVMusicTagsResponse, DescribeKTVMusicTagsRequest, DestroyKTVRobotResponse, CreateKTVRobotRequest, DescribeKTVTopListRequest, DescribeKTVPlaylistDetailRequest, DescribeStationsResponse, DescribeCloudMusicPurchasedRequest, DescribeKTVPlaylistsRequest, DescribePackageItemsRequest, DescribeKTVRobotsResponse, DescribeStationsRequest, DescribeKTVSingerMusicsRequest, DescribeKTVSingerCategoriesResponse, DescribeKTVSingersRequest, SyncKTVRobotCommandResponse, BatchDescribeKTVMusicDetailsResponse, SearchKTVMusicsRequest, DescribeKTVSingersResponse, DescribeItemByIdResponse, BatchDescribeKTVMusicDetailsRequest, DescribeLyricResponse, SyncKTVRobotCommandRequest, DescribeKTVSuggestionsRequest, DescribeKTVPlaylistsResponse, DescribeKTVPlaylistDetailResponse, DescribeAuthInfoRequest, DescribeItemsRequest, DescribeKTVTopListResponse, DescribePackagesRequest, DescribePackagesResponse, TakeMusicOffShelvesResponse } from "./ame_models";
/**
 * ame client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取已购曲库包列表接口
     */
    DescribePackages(req: DescribePackagesRequest, cb?: (error: string, rep: DescribePackagesResponse) => void): Promise<DescribePackagesResponse>;
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息或者波形图信息。
     */
    DescribeLyric(req: DescribeLyricRequest, cb?: (error: string, rep: DescribeLyricResponse) => void): Promise<DescribeLyricResponse>;
    /**
     * 该服务后续会停用，不再建议使用
     */
    DescribeItems(req: DescribeItemsRequest, cb?: (error: string, rep: DescribeItemsResponse) => void): Promise<DescribeItemsResponse>;
    /**
     * 获取授权项目信息列表
     */
    DescribeAuthInfo(req: DescribeAuthInfoRequest, cb?: (error: string, rep: DescribeAuthInfoResponse) => void): Promise<DescribeAuthInfoResponse>;
    /**
     * 根据 Id 列表查询歌曲的详细信息，包含基础信息及播放信息。
     */
    BatchDescribeKTVMusicDetails(req: BatchDescribeKTVMusicDetailsRequest, cb?: (error: string, rep: BatchDescribeKTVMusicDetailsResponse) => void): Promise<BatchDescribeKTVMusicDetailsResponse>;
    /**
     * 获取授权项目下已购云音乐列表
     */
    DescribeCloudMusicPurchased(req: DescribeCloudMusicPurchasedRequest, cb?: (error: string, rep: DescribeCloudMusicPurchasedResponse) => void): Promise<DescribeCloudMusicPurchasedResponse>;
    /**
     * 根据购买曲库包用户可查询已回退的歌曲信息
     */
    DescribePkgOfflineMusic(req: DescribePkgOfflineMusicRequest, cb?: (error: string, rep: DescribePkgOfflineMusicResponse) => void): Promise<DescribePkgOfflineMusicResponse>;
    /**
     * 根据歌手id，返回该歌手下歌曲列表。



     */
    DescribeKTVSingerMusics(req: DescribeKTVSingerMusicsRequest, cb?: (error: string, rep: DescribeKTVSingerMusicsResponse) => void): Promise<DescribeKTVSingerMusicsResponse>;
    /**
     * 获取曲库包歌曲播放信息接口
     */
    DescribeMusic(req: DescribeMusicRequest, cb?: (error: string, rep: DescribeMusicResponse) => void): Promise<DescribeMusicResponse>;
    /**
     * 获取直播互动曲库联想词
     */
    DescribeKTVSuggestions(req: DescribeKTVSuggestionsRequest, cb?: (error: string, rep: DescribeKTVSuggestionsResponse) => void): Promise<DescribeKTVSuggestionsResponse>;
    /**
     * 根据资源方，需要变更的参数，请求该接口进行变更，为空的参数默认为无变更
     */
    ModifyMusicOnShelves(req: ModifyMusicOnShelvesRequest, cb?: (error: string, rep: ModifyMusicOnShelvesResponse) => void): Promise<ModifyMusicOnShelvesResponse>;
    /**
     * 获取直播互动曲库标签分组信息和标签信息
     */
    DescribeKTVMusicTags(req?: DescribeKTVMusicTagsRequest, cb?: (error: string, rep: DescribeKTVMusicTagsResponse) => void): Promise<DescribeKTVMusicTagsResponse>;
    /**
     * 获取曲库包下已核销歌曲列表接口
     */
    DescribePackageItems(req: DescribePackageItemsRequest, cb?: (error: string, rep: DescribePackageItemsResponse) => void): Promise<DescribePackageItemsResponse>;
    /**
     * 根据资源方所传MusicId进行将歌曲进行下架，多个MusicId使用逗号隔开
     */
    TakeMusicOffShelves(req: TakeMusicOffShelvesRequest, cb?: (error: string, rep: TakeMusicOffShelvesResponse) => void): Promise<TakeMusicOffShelvesResponse>;
    /**
     * 获取直播互动曲库推荐歌单列表。
     */
    DescribeKTVPlaylists(req: DescribeKTVPlaylistsRequest, cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void): Promise<DescribeKTVPlaylistsResponse>;
    /**
     * 创建机器人，支持进入 RTC 房间，播放直播互动曲库歌曲。
     */
    CreateKTVRobot(req: CreateKTVRobotRequest, cb?: (error: string, rep: CreateKTVRobotResponse) => void): Promise<CreateKTVRobotResponse>;
    /**
     * 下发操作机器人指令，支持播放、暂停、恢复、歌单设置等操作指令，实现对机器人行为的控制。
     */
    SyncKTVRobotCommand(req: SyncKTVRobotCommandRequest, cb?: (error: string, rep: SyncKTVRobotCommandResponse) => void): Promise<SyncKTVRobotCommandResponse>;
    /**
     * 获取直播互动曲库歌曲的周榜和月榜
     */
    DescribeKTVTopList(req: DescribeKTVTopListRequest, cb?: (error: string, rep: DescribeKTVTopListResponse) => void): Promise<DescribeKTVTopListResponse>;
    /**
     * 根据歌单 Id 获取歌单详情，包括歌单的基础信息以及歌曲列表。
     */
    DescribeKTVPlaylistDetail(req: DescribeKTVPlaylistDetailRequest, cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void): Promise<DescribeKTVPlaylistDetailResponse>;
    /**
     * 客户上报用户数据功能，为了更好地为用户提供优质服务
     */
    ReportData(req: ReportDataRequest, cb?: (error: string, rep: ReportDataResponse) => void): Promise<ReportDataResponse>;
    /**
     * 获取直播互动曲库歌手分类信息
     */
    DescribeKTVSingerCategories(req?: DescribeKTVSingerCategoriesRequest, cb?: (error: string, rep: DescribeKTVSingerCategoriesResponse) => void): Promise<DescribeKTVSingerCategoriesResponse>;
    /**
     * 该服务后续会停用，不再建议使用
     */
    DescribeStations(req: DescribeStationsRequest, cb?: (error: string, rep: DescribeStationsResponse) => void): Promise<DescribeStationsResponse>;
    /**
     * 根据 Id 查询歌曲的详细信息，包含基础信息及播放信息。
     */
    DescribeKTVMusicDetail(req: DescribeKTVMusicDetailRequest, cb?: (error: string, rep: DescribeKTVMusicDetailResponse) => void): Promise<DescribeKTVMusicDetailResponse>;
    /**
     * 根据歌曲ID查询歌曲信息
     */
    DescribeItemById(req: DescribeItemByIdRequest, cb?: (error: string, rep: DescribeItemByIdResponse) => void): Promise<DescribeItemByIdResponse>;
    /**
     * 根据音乐信息查询音乐是否在售
     */
    DescribeMusicSaleStatus(req: DescribeMusicSaleStatusRequest, cb?: (error: string, rep: DescribeMusicSaleStatusResponse) => void): Promise<DescribeMusicSaleStatusResponse>;
    /**
     * 根据过滤条件，返回匹配的歌手列表。
     */
    DescribeKTVSingers(req: DescribeKTVSingersRequest, cb?: (error: string, rep: DescribeKTVSingersResponse) => void): Promise<DescribeKTVSingersResponse>;
    /**
     * 销毁机器人，机器人退出 RTC 房间。
     */
    DestroyKTVRobot(req: DestroyKTVRobotRequest, cb?: (error: string, rep: DestroyKTVRobotResponse) => void): Promise<DestroyKTVRobotResponse>;
    /**
     * 获取云音乐播放信息接口
     */
    DescribeCloudMusic(req: DescribeCloudMusicRequest, cb?: (error: string, rep: DescribeCloudMusicResponse) => void): Promise<DescribeCloudMusicResponse>;
    /**
     * 根据资源方所传歌曲信息，进行歌曲上架，多个歌曲同时请求时，需构造复合结构进行请求
     */
    PutMusicOnTheShelves(req: PutMusicOnTheShelvesRequest, cb?: (error: string, rep: PutMusicOnTheShelvesResponse) => void): Promise<PutMusicOnTheShelvesResponse>;
    /**
     * 获取机器人列表，支持 Id、状态等过滤条件。
     */
    DescribeKTVRobots(req: DescribeKTVRobotsRequest, cb?: (error: string, rep: DescribeKTVRobotsResponse) => void): Promise<DescribeKTVRobotsResponse>;
    /**
     * 根据搜索条件，返回匹配的歌曲列表。
     */
    SearchKTVMusics(req: SearchKTVMusicsRequest, cb?: (error: string, rep: SearchKTVMusicsResponse) => void): Promise<SearchKTVMusicsResponse>;
}
