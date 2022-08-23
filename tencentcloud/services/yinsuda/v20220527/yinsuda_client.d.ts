import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeKTVSuggestionsResponse, DescribeKTVPlaylistDetailRequest, DescribeKTVSuggestionsRequest, DescribeKTVMatchMusicsRequest, DescribeKTVPlaylistsResponse, DescribeKTVPlaylistsRequest, DescribeKTVPlaylistDetailResponse, SearchKTVMusicsResponse, BatchDescribeKTVMusicDetailsRequest, DescribeKTVMatchMusicsResponse, BatchDescribeKTVMusicDetailsResponse, SearchKTVMusicsRequest } from "./yinsuda_models";
/**
 * yinsuda client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据歌单 Id 获取歌单详情。
     */
    DescribeKTVPlaylistDetail(req: DescribeKTVPlaylistDetailRequest, cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void): Promise<DescribeKTVPlaylistDetailResponse>;
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
     * 根据输入的规则匹配曲库中的歌曲。
     */
    DescribeKTVMatchMusics(req: DescribeKTVMatchMusicsRequest, cb?: (error: string, rep: DescribeKTVMatchMusicsResponse) => void): Promise<DescribeKTVMatchMusicsResponse>;
    /**
     * 根据关键词搜索歌曲，返回相关歌曲列表。
     */
    SearchKTVMusics(req: SearchKTVMusicsRequest, cb?: (error: string, rep: SearchKTVMusicsResponse) => void): Promise<SearchKTVMusicsResponse>;
}
