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

/**
 * Album
 */
export interface Album {
  /**
   * 专辑名
   */
  AlbumName: string

  /**
      * 专辑图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImagePathMap: Array<ImagePath>
}

/**
 * DescribeMusic返回参数结构体
 */
export interface DescribeMusicResponse {
  /**
      * 音乐相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Music: Music

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePkgOfflineMusic请求参数结构体
 */
export interface DescribePkgOfflineMusicRequest {
  /**
   * 订单id
   */
  PackageOrderId: string

  /**
   * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条(注：单次上限为100)。
   */
  Limit?: number

  /**
   * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
   */
  Offset?: number
}

/**
 * DescribeLyric返回参数结构体
 */
export interface DescribeLyricResponse {
  /**
      * 歌词或者波形图详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Lyric: Lyric

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMusicOnShelves返回参数结构体
 */
export interface ModifyMusicOnShelvesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 曲库包用途信息
 */
export interface UseRange {
  /**
   * 用途id
   */
  UseRangeId: number

  /**
   * 用途范围名称
   */
  Name: string
}

/**
 * DescribeKTVPlaylistDetail请求参数结构体
 */
export interface DescribeKTVPlaylistDetailRequest {
  /**
   * 歌单Id
   */
  PlaylistId: string

  /**
   * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
   */
  Offset?: number

  /**
   * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
   */
  Limit?: number
}

/**
 * 分类内容
 */
export interface Station {
  /**
   * StationID
   */
  CategoryID: string

  /**
      * Station MCCode
注意：此字段可能返回 null，表示取不到有效值。
      */
  CategoryCode: string

  /**
      * Category Name
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * Station的排序值，供参考（返回结果已按其升序）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rank: number

  /**
      * station图片集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImagePathMap: Array<ImagePath>
}

/**
 * 音乐详情
 */
export interface Music {
  /**
   * 音乐播放链接相对路径，必须通过在正版曲库直通车控制台上登记的域名进行拼接。
   */
  Url: string

  /**
   * 音频文件大小
   */
  FileSize: number

  /**
   * 音频文件类型
   */
  FileExtension: string

  /**
      * Song fragment start.试听片段开始时间，试听时长为auditionEnd-auditionBegin
Unit :ms
      */
  AuditionBegin: number

  /**
      * Song fragment end.试听片段结束时间, 试听时长为auditionEnd-auditionBegin
Unit :ms
      */
  AuditionEnd: number

  /**
      * 音乐播放链接全路径，前提是在正版曲库直通车控制台添加过域名，否则返回空字符。
如果添加过多个域名只返回第一个添加域名的播放全路径。
      */
  FullUrl: string
}

/**
 * 歌曲变更细节
 */
export interface MusicDetailInfo {
  /**
   * 资源方音乐Id
   */
  MusicId: string

  /**
   * 资源方识别信息
   */
  AmeId: string

  /**
   * 分类标签
   */
  Tags?: Array<string>

  /**
   * 关键词
   */
  HitWords?: Array<string>

  /**
   * 节奏信息
   */
  Bpm?: number

  /**
   * 商业化权益
   */
  Score?: number

  /**
   * 应用歌曲信息,1.图文/短视频,2.网络直播,3.网络电台FM,4.免费游戏,5.商业游戏,6.网店网站设计,7.广告营销,8.网络长视频
   */
  Scene?: Array<string>

  /**
   * 应用地域,1. 中国大陆,2. 中国含港澳台,3. 全球
   */
  Region?: Array<string>

  /**
   * 授权时间,1. 1年, 5. 随片永久
   */
  AuthPeriod?: string

  /**
   * 商业化授权，1. 支持商业化 ,2. 不支持商业化
   */
  Commercialization?: string

  /**
   * 跨平台传播，1. 支持跨平台传播 ,2. 不支持跨平台传播
   */
  Platform?: string

  /**
   * 传播渠道
   */
  Channel?: string
}

/**
 * DescribeKTVMusicDetail请求参数结构体
 */
export interface DescribeKTVMusicDetailRequest {
  /**
   * 曲目 Id
   */
  MusicId: string
}

/**
 * DescribeStations返回参数结构体
 */
export interface DescribeStationsResponse {
  /**
   * 总数量
   */
  Total?: number

  /**
   * 分页偏移量
   */
  Offset?: number

  /**
   * 当前页station数量
   */
  Size?: number

  /**
   * 剩余数量（total-offset-size），通过这个值判断是否还有下一页
   */
  HaveMore?: number

  /**
      * Stations 素材库列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Stations?: Array<Station>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePackageItems返回参数结构体
 */
export interface DescribePackageItemsResponse {
  /**
      * 已核销歌曲信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageItems?: Array<PackageItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudMusicPurchased请求参数结构体
 */
export interface DescribeCloudMusicPurchasedRequest {
  /**
   * 授权项目Id
   */
  AuthInfoId: string
}

/**
 * 曲库包歌曲信息
 */
export interface PackageItem {
  /**
   * 订单id
   */
  OrderId: string

  /**
   * 歌曲名
   */
  TrackName: string

  /**
   * 歌曲ID
   */
  ItemID: string

  /**
   * 专辑图片
   */
  Img: string

  /**
   * 歌手名
   */
  ArtistName: string

  /**
   * 歌曲时长
   */
  Duration: string

  /**
   * 授权区域，global: 全球 CN: 中国
   */
  AuthorizedArea: string
}

/**
 * DescribeCloudMusicPurchased返回参数结构体
 */
export interface DescribeCloudMusicPurchasedResponse {
  /**
      * 云音乐列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  MusicOpenDetail?: Array<MusicOpenDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKTVPlaylists请求参数结构体
 */
export interface DescribeKTVPlaylistsRequest {
  /**
   * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
   */
  Offset?: number

  /**
   * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
   */
  Limit?: number
}

/**
 * 数据信息
 */
export interface DataInfo {
  /**
   * Song Name
   */
  Name: string

  /**
   * 歌曲版本
   */
  Version: string

  /**
   * 歌曲总时长（非试听时长）
   */
  Duration: string

  /**
   * 试听开始时间
   */
  AuditionBegin: number

  /**
   * 试听结束时间
   */
  AuditionEnd: number

  /**
   * 标签名称
   */
  TagNames: Array<string>
}

/**
 * DescribeKTVPlaylistDetail返回参数结构体
 */
export interface DescribeKTVPlaylistDetailResponse {
  /**
   * 歌曲基础信息列表
   */
  KTVMusicInfoSet: Array<KTVMusicBaseInfo>

  /**
   * 歌单基础信息
   */
  PlaylistBaseInfo: KTVPlaylistBaseInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 曲库包信息
 */
export interface Package {
  /**
   * 订单id
   */
  OrderId: string

  /**
   * 曲库包名称
   */
  Name: string

  /**
   * 授权地区-global: 全球  CN: 中国
   */
  AuthorizedArea: string

  /**
   * 授权次数
   */
  AuthorizedLimit: number

  /**
   * 套餐有效期，单位:天
   */
  TermOfValidity: number

  /**
   * 0:不可商业化；1:可商业化
   */
  Commercial: number

  /**
   * 套餐价格，单位：元
   */
  PackagePrice: number

  /**
   * 生效开始时间,格式yyyy-MM-dd HH:mm:ss
   */
  EffectTime: string

  /**
   * 生效结束时间,格式yyyy-MM-dd HH:mm:ss
   */
  ExpireTime: string

  /**
   * 剩余授权次数
   */
  UsedCount: number

  /**
   * 曲库包用途信息
   */
  UseRanges: Array<UseRange>
}

/**
 * ReportData返回参数结构体
 */
export interface ReportDataResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMusicOnShelves请求参数结构体
 */
export interface ModifyMusicOnShelvesRequest {
  /**
   * 歌曲变更信息
   */
  MusicDetailInfos: MusicDetailInfo

  /**
   * ame对接资源方密钥
   */
  AmeKey?: string
}

/**
 * DescribePackageItems请求参数结构体
 */
export interface DescribePackageItemsRequest {
  /**
   * 订单id，从获取已购曲库包列表中获取
   */
  OrderId: string

  /**
   * 默认0，Offset=Offset+Length
   */
  Offset?: number

  /**
   * 默认20
   */
  Length?: number
}

/**
 * AuthInfo集合
 */
export interface AuthInfo {
  /**
      * 主体名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubjectName: string

  /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectName: string

  /**
   * 应用场景
   */
  AppScene: number

  /**
   * 应用地域
   */
  AppRegion: number

  /**
   * 授权时间
   */
  AuthPeriod: number

  /**
   * 是否可商业化
   */
  Commercialization: number

  /**
   * 是否可跨平台
   */
  Platform: number

  /**
   * 加密后Id
   */
  Id: string
}

/**
 * TakeMusicOffShelves请求参数结构体
 */
export interface TakeMusicOffShelvesRequest {
  /**
   * 资源方下架必传结构
   */
  TakeMusicOffShelves: Array<TakeMusicOffShelves>
}

/**
 * PutMusicOnTheShelves返回参数结构体
 */
export interface PutMusicOnTheShelvesResponse {
  /**
   * 操作成功数量
   */
  SuccessNum: number

  /**
   * 操作失败数量
   */
  FailedNum: number

  /**
      * 失败歌曲Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedMusicIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 下架歌曲复合结构
 */
export interface TakeMusicOffShelves {
  /**
   * 资源方对应音乐Id
   */
  MusicIds: string

  /**
      * 当曲目临时下架时：已订购客户无影响，无需消息通知。当曲目封杀下架后，推送消息至已订购老客户，枚举值，判断是否上/下架
在售状态，0在售，1临时下架，2永久下架
      */
  SaleStatus: string
}

/**
 * 歌词信息
 */
export interface Lyric {
  /**
   * 歌词cdn地址
   */
  Url: string

  /**
   * 歌词后缀名
   */
  FileNameExt: string

  /**
   * 歌词类型
   */
  SubItemType: string
}

/**
 * 曲库包已下架歌曲详细信息
 */
export interface OfflineMusicDetail {
  /**
   * 歌曲Id
   */
  ItemId: string

  /**
   * 歌曲名称
   */
  MusicName: string

  /**
   * 不可用原因
   */
  OffRemark: string

  /**
   * 不可用时间
   */
  OffTime: string
}

/**
 * DescribeItemById请求参数结构体
 */
export interface DescribeItemByIdRequest {
  /**
   * 歌曲ID，目前暂不支持批量查询
   */
  ItemIDs: string
}

/**
 * DescribeAuthInfo请求参数结构体
 */
export interface DescribeAuthInfoRequest {
  /**
   * 偏移量：Offset=Offset+Limit
   */
  Offset?: number

  /**
   * 数据条数
   */
  Limit?: number

  /**
   * 搜索关键字
   */
  Key?: string
}

/**
 * DescribeKTVPlaylists返回参数结构体
 */
export interface DescribeKTVPlaylistsResponse {
  /**
   * 推荐歌单列表
   */
  PlaylistBaseInfoSet: Array<KTVPlaylistBaseInfo>

  /**
   * 推荐歌单列表总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Artist
 */
export interface Artist {
  /**
   * 歌手名
   */
  ArtistName: string
}

/**
 * DescribeStations请求参数结构体
 */
export interface DescribeStationsRequest {
  /**
   * 条数，必须大于0
   */
  Limit: number

  /**
   * offset (Default = 0)，Offset=Offset+Limit
   */
  Offset: number
}

/**
 * 对外开放信息
 */
export interface MusicOpenDetail {
  /**
      * 音乐Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  MusicId: string

  /**
      * 专辑名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlbumName: string

  /**
      * 专辑图片路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlbumImageUrl: string

  /**
      * 音乐名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MusicName: string

  /**
      * 音乐图片路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  MusicImageUrl: string

  /**
      * 歌手
注意：此字段可能返回 null，表示取不到有效值。
      */
  Singers: Array<string>

  /**
      * 播放时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<string>

  /**
      * 歌词url
注意：此字段可能返回 null，表示取不到有效值。
      */
  LyricUrl: string

  /**
      * 波形图url
注意：此字段可能返回 null，表示取不到有效值。
      */
  WaveformUrl: string
}

/**
 * SearchKTVMusics返回参数结构体
 */
export interface SearchKTVMusicsResponse {
  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * KTV 曲目列表
   */
  KTVMusicInfoSet: Array<KTVMusicBaseInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeItems请求参数结构体
 */
export interface DescribeItemsRequest {
  /**
   * offset (Default = 0)，(当前页-1) * Limit
   */
  Offset: number

  /**
   * 条数，必须大于0，最大值为30
   */
  Limit: number

  /**
   * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
   */
  CategoryId?: string

  /**
   * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
   */
  CategoryCode?: string
}

/**
 * 歌曲信息
 */
export interface Item {
  /**
   * Song ID
   */
  ItemID: string

  /**
      * Song info
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataInfo: DataInfo

  /**
      * 专辑信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Album: Album

  /**
      * 多个歌手集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  Artists: Array<Artist>

  /**
      * 歌曲状态，1:添加进购物车；2:核销进曲库包
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number
}

/**
 * DescribeCloudMusic返回参数结构体
 */
export interface DescribeCloudMusicResponse {
  /**
   * 歌曲Id
   */
  MusicId: string

  /**
   * 歌曲名称
   */
  MusicName: string

  /**
      * 歌曲时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
   * 歌曲链接
   */
  MusicUrl: string

  /**
      * 歌曲图片
注意：此字段可能返回 null，表示取不到有效值。
      */
  MusicImageUrl: string

  /**
      * 歌手列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Singers: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KTV 曲目基础信息
 */
export interface KTVMusicBaseInfo {
  /**
   * 歌曲 Id
   */
  MusicId: string

  /**
   * 歌曲名称
   */
  Name: string

  /**
   * 演唱者列表
   */
  SingerSet: Array<string>

  /**
   * 作词者列表
   */
  LyricistSet: Array<string>

  /**
   * 作曲者列表
   */
  ComposerSet: Array<string>

  /**
   * 标签列表
   */
  TagSet: Array<string>

  /**
   * 歌曲时长
   */
  Duration: number
}

/**
 * DescribePackages请求参数结构体
 */
export interface DescribePackagesRequest {
  /**
   * 默认0，Offset=Offset+Length
   */
  Offset?: number

  /**
   * 默认20
   */
  Length?: number
}

/**
 * DescribeMusicSaleStatus请求参数结构体
 */
export interface DescribeMusicSaleStatusRequest {
  /**
   * 歌曲Id集合，可传单个，也可传多个，上线查询单次50个
   */
  MusicIds: Array<string>

  /**
   * 查询哪个渠道的数据，1为曲库包，2为单曲
   */
  PurchaseType: number
}

/**
 * SearchKTVMusics请求参数结构体
 */
export interface SearchKTVMusicsRequest {
  /**
   * 搜索关键词
   */
  KeyWord: string

  /**
   * 分页游标
   */
  Offset: number

  /**
   * 分页页长
   */
  Limit: number
}

/**
 * 图片路径
 */
export interface ImagePath {
  /**
      * station图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * station图片地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * DescribeItems返回参数结构体
 */
export interface DescribeItemsResponse {
  /**
   * 分页偏移量
   */
  Offset?: number

  /**
   * 当前页歌曲数量
   */
  Size?: number

  /**
   * 总数据条数
   */
  Total?: number

  /**
      * 剩余数量（total-offset-size），通过这个值判断是否
还有下一页
      */
  HaveMore?: number

  /**
      * Items 歌曲列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<Item>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePkgOfflineMusic返回参数结构体
 */
export interface DescribePkgOfflineMusicResponse {
  /**
   * 曲库包中不可用歌曲信息
   */
  OfflineMusicSet: Array<OfflineMusicDetail>

  /**
   * 返回总量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推荐歌单基础信息
 */
export interface KTVPlaylistBaseInfo {
  /**
   * 歌单Id
   */
  PlaylistId: string

  /**
   * 歌单标题
   */
  Title: string

  /**
   * 歌单介绍
   */
  Description: string

  /**
   * 歌曲数量
   */
  MusicNum: number
}

/**
 * DescribeItemById返回参数结构体
 */
export interface DescribeItemByIdResponse {
  /**
      * 歌曲信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<Item>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回单曲页面歌曲是否在售状态
 */
export interface MusicStatus {
  /**
   * 歌曲Id
   */
  MusicId: string

  /**
   * 在售状态,0为在售，1为临时下架，2为永久下架
   */
  SaleStatus: number
}

/**
 * DescribeMusicSaleStatus返回参数结构体
 */
export interface DescribeMusicSaleStatusResponse {
  /**
   * musicId对应歌曲状态
   */
  MusicStatusSet: Array<MusicStatus>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PutMusicOnTheShelves请求参数结构体
 */
export interface PutMusicOnTheShelvesRequest {
  /**
   * 资源方歌曲Id
   */
  MusicIds: Array<string>
}

/**
 * DescribePackages返回参数结构体
 */
export interface DescribePackagesResponse {
  /**
      * 已购曲库包列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Packages?: Array<Package>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudMusic请求参数结构体
 */
export interface DescribeCloudMusicRequest {
  /**
   * 歌曲Id
   */
  MusicId: string

  /**
      * 歌曲类型，可选值有：
<li>MP3-128K-FTW：含有水印的试听资源；</li>
<li>MP3-320K-FTD-P：320kbps歌曲热门片段；</li>
<li>MP3-320K-FTD：320kbps已核验歌曲完整资源。</li>
默认为：MP3-128K-FTW
      */
  MusicType?: string
}

/**
 * DescribeAuthInfo返回参数结构体
 */
export interface DescribeAuthInfoResponse {
  /**
   * 授权项目列表
   */
  AuthInfo?: Array<AuthInfo>

  /**
   * 总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TakeMusicOffShelves返回参数结构体
 */
export interface TakeMusicOffShelvesResponse {
  /**
   * 返回成功数量
   */
  SuccessNum: number

  /**
   * 返回失败数量
   */
  FailedNum: number

  /**
      * 返回失败歌曲musicId
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedMusicIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLyric请求参数结构体
 */
export interface DescribeLyricRequest {
  /**
   * 歌曲ID
   */
  ItemId: string

  /**
      * 格式，可选项，可不填写，默认值为：LRC-LRC。
<li>LRC-LRC：歌词；</li>
<li>JSON-ST：波形图。</li>
      */
  SubItemType?: string
}

/**
 * DescribeKTVMusicDetail返回参数结构体
 */
export interface DescribeKTVMusicDetailResponse {
  /**
   * 歌曲基础信息
   */
  KTVMusicBaseInfo: KTVMusicBaseInfo

  /**
   * 播放凭证
   */
  PlayToken: string

  /**
   * 歌词下载地址
   */
  LyricsUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMusic请求参数结构体
 */
export interface DescribeMusicRequest {
  /**
   * 歌曲ID
   */
  ItemId: string

  /**
   * 在应用前端播放音乐C端用户的唯一标识。无需是账户信息，用户唯一标识即可。
   */
  IdentityId: string

  /**
      * MP3-320K-FTD-P  为获取320kbps歌曲热门片段。
MP3-320K-FTD 为获取320kbps已核验歌曲完整资源。
      */
  SubItemType?: string

  /**
      * CDN URL Protocol:HTTP or HTTPS/SSL
Values:Y , N(default)
      */
  Ssl?: string
}

/**
 * ReportData请求参数结构体
 */
export interface ReportDataRequest {
  /**
      * 上报数据
注:reportData为客户端压缩后的上报数据进行16进制转换的字符串数据
压缩说明：
a) 上报的json格式字符串通过流的转换（ByteArrayInputStream, java.util.zip.GZIPOutputStream），获取到压缩后的字节数组。
b) 将压缩后的字节数组转成16进制字符串。

reportData由两部分数据组成：
1）report_type（上报类型）
2）data（歌曲上报数据）
不同的report_type对应的data数据结构不一样。

详细说明请参考文档reportdata.docx：
https://github.com/tencentyun/ame-documents
      */
  ReportData: string
}
