/**
 * DescribeKTVPlaylists返回参数结构体
 */
export interface DescribeKTVPlaylistsResponse {
    /**
      * 歌单基础信息。
      */
    PlaylistBaseInfoSet: Array<KTVPlaylistBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SearchKTVMusics请求参数结构体
 */
export interface SearchKTVMusicsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 关键词。
      */
    KeyWord: string;
    /**
      * 滚动标记。
      */
    ScrollToken?: string;
    /**
      * 返回条数限制，默认 20，最大 50.
      */
    Limit?: number;
    /**
      * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightFilters?: Array<string>;
}
/**
 * DescribeKTVPlaylists请求参数结构体
 */
export interface DescribeKTVPlaylistsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
}
/**
 * DescribeKTVSuggestions返回参数结构体
 */
export interface DescribeKTVSuggestionsResponse {
    /**
      * 联想词信息列表。
      */
    KTVSuggestionInfoSet: Array<KTVSuggestionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVPlaylistDetail返回参数结构体
 */
export interface DescribeKTVPlaylistDetailResponse {
    /**
      * 歌曲信息列表。
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 滚动标记，用于设置下次请求的 ScrollToken 参数。
      */
    ScrollToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 歌单基础信息。
 */
export interface KTVPlaylistBaseInfo {
    /**
      * 歌单Id。
      */
    PlaylistId: string;
    /**
      * 歌单标题。
      */
    Title: string;
}
/**
 * 歌曲专辑封面信息。
 */
export interface MusicAlbumCoverInfo {
    /**
      * 尺寸规格，取值有：
<li>Mini：150 x 150 尺寸；</li>
<li>Small：240 x 240 尺寸；</li>
<li>Medium：480 x 480 尺寸。</li>
      */
    Dimension: string;
    /**
      * 下载链接。
      */
    Url: string;
}
/**
 * 歌曲基础信息。
 */
export interface KTVMusicBaseInfo {
    /**
      * 歌曲Id。
      */
    MusicId: string;
    /**
      * 歌曲名称。
      */
    Name: string;
    /**
      * 歌手名称。
      */
    SingerSet: Array<string>;
    /**
      * 播放时长。
      */
    Duration: number;
    /**
      * 歌手图片链接。
      */
    SingerImageUrl: string;
    /**
      * 专辑信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlbumInfo: MusicAlbumInfo;
    /**
      * 权益列表，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightSet: Array<string>;
}
/**
 * 联想词信息。
 */
export interface KTVSuggestionInfo {
    /**
      * 联想词。
      */
    Suggestion: string;
}
/**
 * DescribeKTVPlaylistDetail请求参数结构体
 */
export interface DescribeKTVPlaylistDetailRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 歌单 Id。
      */
    PlaylistId: string;
    /**
      * 滚动标记。
      */
    ScrollToken?: string;
    /**
      * 返回条数，默认：20，最大：50。
      */
    Limit?: number;
    /**
      * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
      */
    RightFilters?: Array<string>;
}
/**
 * 歌曲专辑信息。
 */
export interface MusicAlbumInfo {
    /**
      * 专辑名称。
      */
    Name: string;
    /**
      * 封面列表。
      */
    CoverInfoSet: Array<MusicAlbumCoverInfo>;
}
/**
 * 歌曲详细信息。
 */
export interface KTVMusicDetailInfo {
    /**
      * 歌曲基础信息。
      */
    KTVMusicBaseInfo: KTVMusicBaseInfo;
    /**
      * 播放凭证。
      */
    PlayToken: string;
    /**
      * 歌词下载链接。
      */
    LyricsUrl: string;
    /**
      * 音高数据下载链接。
      */
    MidiUrl: string;
    /**
      * 副歌片段信息。
      */
    ChorusClipSet: Array<ChorusClip>;
    /**
      * 前奏间隔。
      */
    PreludeInterval: number;
    /**
      * 歌曲流派列表。
      */
    GenreSet: Array<string>;
}
/**
 * 副歌片段信息。
 */
export interface ChorusClip {
    /**
      * 开始时间，单位：毫秒。
      */
    StartTime: number;
    /**
      * 结束时间，单位：毫秒。
      */
    EndTime: number;
}
/**
 * SearchKTVMusics返回参数结构体
 */
export interface SearchKTVMusicsResponse {
    /**
      * 歌曲信息列表。
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 滚动标记，用于设置下次请求的 ScrollToken 参数。
      */
    ScrollToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVSuggestions请求参数结构体
 */
export interface DescribeKTVSuggestionsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 搜索词。
      */
    KeyWord: string;
}
/**
 * BatchDescribeKTVMusicDetails返回参数结构体
 */
export interface BatchDescribeKTVMusicDetailsResponse {
    /**
      * 歌曲详细信息列表。
      */
    KTVMusicDetailInfoSet: Array<KTVMusicDetailInfo>;
    /**
      * 不存在歌曲Id列表。
      */
    NotExistMusicIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchDescribeKTVMusicDetails请求参数结构体
 */
export interface BatchDescribeKTVMusicDetailsRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 用户标识。
      */
    UserId: string;
    /**
      * 歌曲 Id 列表。
      */
    MusicIds: Array<string>;
}
