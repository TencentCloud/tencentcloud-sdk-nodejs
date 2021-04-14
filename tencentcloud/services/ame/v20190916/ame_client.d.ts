import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMusicResponse, DescribeLyricResponse, ModifyMusicOnShelvesResponse, DescribeStationsResponse, DescribePackageItemsResponse, DescribeCloudMusicPurchasedRequest, DescribeCloudMusicPurchasedResponse, ReportDataResponse, ModifyMusicOnShelvesRequest, DescribePackageItemsRequest, TakeMusicOffShelvesRequest, DescribeItemByIdRequest, DescribeMusicRequest, DescribeStationsRequest, PutMusicOnTheShelvesResponse, DescribeItemsRequest, DescribeCloudMusicResponse, DescribePackagesRequest, DescribeItemsResponse, DescribeItemByIdResponse, PutMusicOnTheShelvesRequest, DescribePackagesResponse, DescribeCloudMusicRequest, DescribeAuthInfoResponse, TakeMusicOffShelvesResponse, DescribeLyricRequest, DescribeAuthInfoRequest, ReportDataRequest } from "./ame_models";
/**
 * ame client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据资源方所传歌曲信息，进行歌曲上架，多个歌曲同时请求时，需构造复合结构进行请求
     */
    PutMusicOnTheShelves(req: PutMusicOnTheShelvesRequest, cb?: (error: string, rep: PutMusicOnTheShelvesResponse) => void): Promise<PutMusicOnTheShelvesResponse>;
    /**
     * 根据歌曲ID查询歌曲信息
     */
    DescribeItemById(req: DescribeItemByIdRequest, cb?: (error: string, rep: DescribeItemByIdResponse) => void): Promise<DescribeItemByIdResponse>;
    /**
     * 获取已购曲库包列表接口
     */
    DescribePackages(req: DescribePackagesRequest, cb?: (error: string, rep: DescribePackagesResponse) => void): Promise<DescribePackagesResponse>;
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
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
     * 客户上报用户数据功能，为了更好地为用户提供优质服务
     */
    ReportData(req: ReportDataRequest, cb?: (error: string, rep: ReportDataResponse) => void): Promise<ReportDataResponse>;
    /**
     * 获取曲库包歌曲播放信息接口
     */
    DescribeMusic(req: DescribeMusicRequest, cb?: (error: string, rep: DescribeMusicResponse) => void): Promise<DescribeMusicResponse>;
    /**
     * 获取云音乐播放信息接口
     */
    DescribeCloudMusic(req: DescribeCloudMusicRequest, cb?: (error: string, rep: DescribeCloudMusicResponse) => void): Promise<DescribeCloudMusicResponse>;
    /**
     * 根据资源方，需要变更的参数，请求该接口进行变更，为空的参数默认为无变更
     */
    ModifyMusicOnShelves(req: ModifyMusicOnShelvesRequest, cb?: (error: string, rep: ModifyMusicOnShelvesResponse) => void): Promise<ModifyMusicOnShelvesResponse>;
    /**
     * 获取曲库包下已核销歌曲列表接口
     */
    DescribePackageItems(req: DescribePackageItemsRequest, cb?: (error: string, rep: DescribePackageItemsResponse) => void): Promise<DescribePackageItemsResponse>;
    /**
     * 根据资源方所传MusicId进行将歌曲进行下架，多个MusicId使用逗号隔开
     */
    TakeMusicOffShelves(req: TakeMusicOffShelvesRequest, cb?: (error: string, rep: TakeMusicOffShelvesResponse) => void): Promise<TakeMusicOffShelvesResponse>;
    /**
     * 获取授权项目下已购云音乐列表
     */
    DescribeCloudMusicPurchased(req: DescribeCloudMusicPurchasedRequest, cb?: (error: string, rep: DescribeCloudMusicPurchasedResponse) => void): Promise<DescribeCloudMusicPurchasedResponse>;
    /**
     * 该服务后续会停用，不再建议使用
     */
    DescribeStations(req: DescribeStationsRequest, cb?: (error: string, rep: DescribeStationsResponse) => void): Promise<DescribeStationsResponse>;
}
