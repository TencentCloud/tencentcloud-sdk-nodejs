import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeMusicResponse, DescribeLyricResponse, DescribeStationsResponse, DescribePackageItemsResponse, ReportDataResponse, DescribePackageItemsRequest, DescribeItemByIdRequest, DescribeMusicRequest, DescribeStationsRequest, DescribeItemsRequest, DescribePackagesRequest, DescribeItemsResponse, DescribeItemByIdResponse, DescribePackagesResponse, DescribeLyricRequest, ReportDataRequest } from "./ame_models";
/**
 * ame client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据歌曲ID查询歌曲信息
     */
    DescribeItemById(req: DescribeItemByIdRequest, cb?: (error: string, rep: DescribeItemByIdResponse) => void): Promise<DescribeItemByIdResponse>;
    /**
     * 查询已购曲库包列表接口
     */
    DescribePackages(req: DescribePackagesRequest, cb?: (error: string, rep: DescribePackagesResponse) => void): Promise<DescribePackagesResponse>;
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
     */
    DescribeLyric(req: DescribeLyricRequest, cb?: (error: string, rep: DescribeLyricResponse) => void): Promise<DescribeLyricResponse>;
    /**
     * 分类内容下歌曲列表获取，根据CategoryID或CategoryCode
     */
    DescribeItems(req: DescribeItemsRequest, cb?: (error: string, rep: DescribeItemsResponse) => void): Promise<DescribeItemsResponse>;
    /**
     * 根据接口的模式及歌曲ID来取得对应权限的歌曲播放地址等信息。
     */
    DescribeMusic(req: DescribeMusicRequest, cb?: (error: string, rep: DescribeMusicResponse) => void): Promise<DescribeMusicResponse>;
    /**
     * 查询曲库包已核验歌曲列表接口
     */
    DescribePackageItems(req: DescribePackageItemsRequest, cb?: (error: string, rep: DescribePackageItemsResponse) => void): Promise<DescribePackageItemsResponse>;
    /**
     * 客户上报用户数据功能，为了更好的为用户提供优质服务
     */
    ReportData(req: ReportDataRequest, cb?: (error: string, rep: ReportDataResponse) => void): Promise<ReportDataResponse>;
    /**
     * 获取素材库列表时使用
     */
    DescribeStations(req: DescribeStationsRequest, cb?: (error: string, rep: DescribeStationsResponse) => void): Promise<DescribeStationsResponse>;
}
