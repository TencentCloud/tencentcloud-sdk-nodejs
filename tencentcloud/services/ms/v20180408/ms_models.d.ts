/**
 * 加固策略具体信息
 */
export interface PlanDetailInfo {
    /**
      * 默认策略，1为默认，0为非默认
      */
    IsDefault: number;
    /**
      * 策略id
      */
    PlanId: number;
    /**
      * 策略名称
      */
    PlanName: string;
    /**
      * 策略信息
      */
    PlanInfo: PlanInfo;
}
/**
 * 加固后app的信息，包含基本信息和加固信息
 */
export interface AppSetInfo {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
    /**
      * app的版本号
      */
    AppVersion: string;
    /**
      * app的md5
      */
    AppMd5: string;
    /**
      * app的大小
      */
    AppSize: number;
    /**
      * 加固服务版本
      */
    ServiceEdition: string;
    /**
      * 加固结果返回码
      */
    ShieldCode: number;
    /**
      * 加固后的APP下载地址
      */
    AppUrl?: string;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * 请求的客户端ip
      */
    ClientIp: string;
    /**
      * 提交加固时间
      */
    TaskTime: number;
    /**
      * app的图标url
      */
    AppIconUrl: string;
    /**
      * 加固后app的md5
      */
    ShieldMd5: string;
    /**
      * 加固后app的大小
      */
    ShieldSize: number;
}
/**
 * CreateShieldPlanInstance返回参数结构体
 */
export interface CreateShieldPlanInstanceResponse {
    /**
      * 策略id
      */
    PlanId: number;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 需要扫描的应用的服务信息
 */
export interface ScanInfo {
    /**
      * 任务处理完成后的反向通知回调地址,批量提交app每扫描完成一个会通知一次,通知为POST请求，post信息{ItemId:
      */
    CallbackUrl: string;
    /**
      * VULSCAN-漏洞扫描信息，VIRUSSCAN-返回病毒扫描信息， ADSCAN-广告扫描信息，PLUGINSCAN-插件扫描信息，PERMISSION-系统权限信息，SENSITIVE-敏感词信息，可以自由组合
      */
    ScanTypes: Array<string>;
}
/**
 * CreateResourceInstances请求参数结构体
 */
export interface CreateResourceInstancesRequest {
    /**
      * 资源类型id。13624：加固专业版。
      */
    Pid: number;
    /**
      * 时间单位，取值为d，m，y，分别表示天，月，年。
      */
    TimeUnit: string;
    /**
      * 时间数量。
      */
    TimeSpan: number;
    /**
      * 资源数量。
      */
    ResourceNum: number;
}
/**
 * DescribeShieldInstances返回参数结构体
 */
export interface DescribeShieldInstancesResponse {
    /**
      * 符合要求的app数量
      */
    TotalCount: number;
    /**
      * 一个关于app详细信息的结构体，主要包括app的基本信息和加固信息。
      */
    AppSet: Array<AppSetInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 插件信息
 */
export interface PluginInfo {
    /**
      * 插件类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
      */
    PluginType: number;
    /**
      * 插件名称
      */
    PluginName: string;
    /**
      * 插件描述
      */
    PluginDesc: string;
}
/**
 * 安全扫描敏感词列表
 */
export interface ScanSensitiveList {
    /**
      * 敏感词列表
      */
    SensitiveList: Array<ScanSensitiveInfo>;
}
/**
 * DescribeShieldResult请求参数结构体
 */
export interface DescribeShieldResultRequest {
    /**
      * 任务唯一标识
      */
    ItemId: string;
}
/**
 * CreateShieldInstance请求参数结构体
 */
export interface CreateShieldInstanceRequest {
    /**
      * 待加固的应用信息
      */
    AppInfo: AppInfo;
    /**
      * 加固服务信息
      */
    ServiceInfo: ServiceInfo;
}
/**
 * CreateCosSecKeyInstance请求参数结构体
 */
export interface CreateCosSecKeyInstanceRequest {
    /**
      * 地域信息，例如广州：ap-guangzhou，上海：ap-shanghai，默认为广州。
      */
    CosRegion?: string;
    /**
      * 密钥有效时间，默认为1小时。
      */
    Duration?: number;
}
/**
 * DescribeScanResults返回参数结构体
 */
export interface DescribeScanResultsResponse {
    /**
      * 批量扫描的app结果集
      */
    ScanSet: Array<ScanSetInfo>;
    /**
      * 批量扫描结果的个数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateScanInstances请求参数结构体
 */
export interface CreateScanInstancesRequest {
    /**
      * 待扫描的app信息列表，一次最多提交20个
      */
    AppInfos: Array<AppInfo>;
    /**
      * 扫描信息
      */
    ScanInfo: ScanInfo;
}
/**
 * DescribeUserBaseInfoInstance返回参数结构体
 */
export interface DescribeUserBaseInfoInstanceResponse {
    /**
      * 用户uin信息
      */
    UserUin?: number;
    /**
      * 用户APPID信息
      */
    UserAppid?: number;
    /**
      * 系统时间戳
      */
    TimeStamp?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateShieldPlanInstance请求参数结构体
 */
export interface CreateShieldPlanInstanceRequest {
    /**
      * 资源id
      */
    ResourceId: string;
    /**
      * 策略名称
      */
    PlanName: string;
    /**
      * 策略具体信息
      */
    PlanInfo: PlanInfo;
}
/**
 * app扫描结果集
 */
export interface ScanSetInfo {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * app信息
      */
    AppDetailInfo: AppDetailInfo;
    /**
      * 病毒信息
      */
    VirusInfo: VirusInfo;
    /**
      * 漏洞信息
      */
    VulInfo: VulInfo;
    /**
      * 广告插件信息
      */
    AdInfo: AdInfo;
    /**
      * 提交扫描的时间
      */
    TaskTime: number;
    /**
      * 状态码，成功返回0，失败返回错误码
      */
    StatusCode: number;
    /**
      * 状态描述
      */
    StatusDesc: string;
    /**
      * 状态操作指引
      */
    StatusRef: string;
    /**
      * 系统权限信息
      */
    PermissionInfo: ScanPermissionList;
    /**
      * 敏感词列表
      */
    SensitiveInfo: ScanSensitiveList;
}
/**
 * 扫描后app的信息，包含基本信息和扫描状态信息
 */
export interface AppScanSet {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
    /**
      * app的版本号
      */
    AppVersion: string;
    /**
      * app的md5
      */
    AppMd5: string;
    /**
      * app的大小
      */
    AppSize: number;
    /**
      * 扫描结果返回码
      */
    ScanCode: number;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * 提交扫描时间
      */
    TaskTime: number;
    /**
      * app的图标url
      */
    AppIconUrl: string;
    /**
      * 标识唯一该app，主要用于删除
      */
    AppSid: string;
    /**
      * 安全类型:1-安全软件，2-风险软件，3病毒软件
      */
    SafeType: number;
    /**
      * 漏洞个数
      */
    VulCount: number;
}
/**
 * 加固策略信息
 */
export interface ShieldPlanInfo {
    /**
      * 加固策略数量
      */
    TotalCount: number;
    /**
      * 加固策略具体信息数组
      */
    PlanSet: Array<PlanDetailInfo>;
}
/**
 * CreateBindInstance请求参数结构体
 */
export interface CreateBindInstanceRequest {
    /**
      * 资源id，全局唯一
      */
    ResourceId: string;
    /**
      * app的icon的url
      */
    AppIconUrl: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
}
/**
 * CreateShieldInstance返回参数结构体
 */
export interface CreateShieldInstanceResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteShieldInstances请求参数结构体
 */
export interface DeleteShieldInstancesRequest {
    /**
      * 任务唯一标识ItemId的列表
      */
    ItemIds: Array<string>;
}
/**
 * 拉取某个用户的所有资源信息
 */
export interface ResourceInfo {
    /**
      * 用户购买的资源id，全局唯一
      */
    ResourceId: string;
    /**
      * 资源的pid，MTP加固-12767，应用加固-12750 MTP反作弊-12766 源代码混淆-12736
      */
    Pid: number;
    /**
      * 购买时间戳
      */
    CreateTime: number;
    /**
      * 到期时间戳
      */
    ExpireTime: number;
    /**
      * 0-未绑定，1-已绑定
      */
    IsBind: number;
    /**
      * 用户绑定app的基本信息
      */
    BindInfo: BindInfo;
    /**
      * 资源名称，如应用加固，漏洞扫描
      */
    ResourceName: string;
}
/**
 * DescribeShieldInstances请求参数结构体
 */
export interface DescribeShieldInstancesRequest {
    /**
      * 支持通过app名称，app包名，加固的服务版本，提交的渠道进行筛选。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 数量限制，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
      */
    ItemIds?: Array<string>;
    /**
      * 按某个字段排序，目前仅支持TaskTime排序。
      */
    OrderField?: string;
    /**
      * 升序（asc）还是降序（desc），默认：desc。
      */
    OrderDirection?: string;
}
/**
 * CreateScanInstances返回参数结构体
 */
export interface CreateScanInstancesResponse {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 提交成功的app的md5集合
      */
    AppMd5s: Array<string>;
    /**
      * 剩余可用次数
      */
    LimitCount: number;
    /**
      * 到期时间
      */
    LimitTime: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanInstances返回参数结构体
 */
export interface DescribeScanInstancesResponse {
    /**
      * 符合要求的app数量
      */
    TotalCount: number;
    /**
      * 一个关于app详细信息的结构体，主要包括app的基本信息和扫描状态信息。
      */
    ScanSet: Array<AppScanSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUrlDetectionResult请求参数结构体
 */
export interface DescribeUrlDetectionResultRequest {
    /**
      * 查询的网址
      */
    Url: string;
}
/**
 * 漏洞信息
 */
export interface VulInfo {
    /**
      * 漏洞列表
      */
    VulList: Array<VulList>;
    /**
      * 漏洞文件评分
      */
    VulFileScore: number;
}
/**
 * 提交的app基本信息
 */
export interface AppInfo {
    /**
      * app的url，必须保证不用权限校验就可以下载
      */
    AppUrl: string;
    /**
      * app的md5，需要正确传递
      */
    AppMd5: string;
    /**
      * app的大小
      */
    AppSize?: number;
    /**
      * app的文件名
      */
    FileName?: string;
    /**
      * app的包名，需要正确的传递此字段
      */
    AppPkgName?: string;
    /**
      * app的版本号
      */
    AppVersion?: string;
    /**
      * app的图标url
      */
    AppIconUrl?: string;
    /**
      * app的名称
      */
    AppName?: string;
}
/**
 * DescribeShieldPlanInstance返回参数结构体
 */
export interface DescribeShieldPlanInstanceResponse {
    /**
      * 绑定资源信息
      */
    BindInfo: BindInfo;
    /**
      * 加固策略信息
      */
    ShieldPlanInfo: ShieldPlanInfo;
    /**
      * 加固资源信息
      */
    ResourceServiceInfo: ResourceServiceInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 提交app加固的服务信息
 */
export interface ServiceInfo {
    /**
      * 服务版本，基础版basic，专业版professional，企业版enterprise。
      */
    ServiceEdition: string;
    /**
      * 任务处理完成后的反向通知回调地址，如果不需要通知请传递空字符串。通知为POST请求，post包体数据示例{"Response":{"ItemId":"4cdad8fb86f036b06bccb3f58971c306","ShieldCode":0,"ShieldMd5":"78701576793c4a5f04e1c9660de0aa0b","ShieldSize":11997354,"TaskStatus":1,"TaskTime":1539148141}}，调用方需要返回如下信息，{"Result":"ok","Reason":"xxxxx"}，如果Result字段值不等于ok会继续回调。
      */
    CallbackUrl: string;
    /**
      * 提交来源 YYB-应用宝 RDM-rdm MC-控制台 MAC_TOOL-mac工具 WIN_TOOL-window工具。
      */
    SubmitSource: string;
    /**
      * 加固策略编号，如果不传则使用系统默认加固策略。如果指定的plan不存在会返回错误。
      */
    PlanId?: number;
}
/**
 * so加固信息
 */
export interface SoInfo {
    /**
      * so文件列表
      */
    SoFileNames: Array<string>;
}
/**
 * 安全扫描敏感词
 */
export interface ScanSensitiveInfo {
    /**
      * 敏感词
      */
    WordList: Array<string>;
    /**
      * 敏感词对应的文件信息
      */
    FilePath: string;
    /**
      * 文件sha1值
      */
    FileSha: string;
}
/**
 * APK检测服务：广告插件结果结构体
 */
export interface PluginListItem {
    /**
      * 数字类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
      */
    PluginType: string;
    /**
      * 广告插件名称
      */
    PluginName: string;
    /**
      * 广告插件描述
      */
    PluginDesc: string;
}
/**
 * DescribeApkDetectionResult请求参数结构体
 */
export interface DescribeApkDetectionResultRequest {
    /**
      * 软件包的下载链接
      */
    ApkUrl: string;
    /**
      * 软件包的md5值，具有唯一性。腾讯APK云检测服务会根据md5值来判断该包是否为库中已收集的样本，已存在，则返回检测结果，反之，需要一定时间检测该样本。
      */
    ApkMd5: string;
}
/**
 * APK检测服务参数返回具体信息
 */
export interface ResultListItem {
    /**
      * banner广告软件标记，分别为-1-不确定，0-否，1-是
      */
    Banner: string;
    /**
      * 精品推荐列表广告标记，分别为-1-不确定，0-否，1-是
      */
    BoutiqueRecommand: string;
    /**
      * 悬浮窗图标广告标记,分别为-1-不确定，0-否，1-是
      */
    FloatWindows: string;
    /**
      * 积分墙广告软件标记，分别为 -1 -不确定，0-否，1-是
      */
    IntegralWall: string;
    /**
      * 安装包的md5
      */
    Md5: string;
    /**
      * 通知栏广告软件标记，分别为-1-不确定，0-否，1-是
      */
    NotifyBar: string;
    /**
      * 1表示官方，0表示非官方
      */
    Official: string;
    /**
      * 广告插件结果列表
      */
    PluginList: Array<PluginListItem>;
    /**
      * 非广告插件结果列表(SDK、风险插件等)
      */
    OptPluginList: Array<OptPluginListItem>;
    /**
      * 数字类型，分别为0-未知， 1-安全软件，2-风险软件，3-病毒软件
      */
    SafeType: string;
    /**
      * Session id，合作方可以用来区分回调数据，需要唯一。
      */
    Sid: string;
    /**
      * 安装包名称
      */
    SoftName: string;
    /**
      * 插播广告软件标记，取值：-1 不确定，0否， 1 是
      */
    Spot: string;
    /**
      * 病毒名称，utf8编码
      */
    VirusName: string;
    /**
      * 病毒描述，utf8编码
      */
    VirusDesc: string;
    /**
      * 二次打包状态：0-表示默认；1-表示二次
      */
    RepackageStatus: string;
    /**
      * 应用错误码：0、1-表示正常；

2表示System Error(engine analysis error).

3表示App analysis error, please confirm it.

4表示App have not cert, please confirm it.

5表示App size is zero, please confirm it.

6表示App have not package name, please confirm it.

7表示App build time is empty, please confirm it.

8表示App have not valid cert, please confirm it.

99表示Other error.

1000表示App downloadlink download fail, please confirm it.

1001表示APP md5 different between real md5, please confirm it.

1002表示App md5 uncollect, please offer downloadlink.
      */
    Errno: string;
    /**
      * 对应errno的错误信息描述
      */
    ErrMsg: string;
}
/**
 * 资源服务信息
 */
export interface ResourceServiceInfo {
    /**
      * 创建时间戳
      */
    CreateTime: number;
    /**
      * 到期时间戳
      */
    ExpireTime: number;
    /**
      * 资源名称，如应用加固，源码混淆
      */
    ResourceName: string;
}
/**
 * DescribeResourceInstances请求参数结构体
 */
export interface DescribeResourceInstancesRequest {
    /**
      * 支持CreateTime、ExpireTime、AppName、AppPkgName、BindValue、IsBind过滤
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 数量限制，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 资源类别id数组，13624：加固专业版，12750：企业版。空数组表示返回全部资源。
      */
    Pids?: Array<number>;
    /**
      * 按某个字段排序，目前支持CreateTime、ExpireTime其中的一个排序。
      */
    OrderField?: string;
    /**
      * 升序（asc）还是降序（desc），默认：desc。
      */
    OrderDirection?: string;
}
/**
 * 广告信息
 */
export interface AdInfo {
    /**
      * 插播广告列表
      */
    Spots: Array<PluginInfo>;
    /**
      * 精品推荐广告列表
      */
    BoutiqueRecommands: Array<PluginInfo>;
    /**
      * 悬浮窗广告列表
      */
    FloatWindowses: Array<PluginInfo>;
    /**
      * banner广告列表
      */
    Banners: Array<PluginInfo>;
    /**
      * 积分墙广告列表
      */
    IntegralWalls: Array<PluginInfo>;
    /**
      * 通知栏广告列表
      */
    NotifyBars: Array<PluginInfo>;
}
/**
 * DescribeUrlDetectionResult返回参数结构体
 */
export interface DescribeUrlDetectionResultResponse {
    /**
      * [查询结果]查询结果；枚举值：0 查询成功，否则查询失败
      */
    ResultCode: number;
    /**
      * [固定信息]响应协议版本号；
      */
    RespVer: number;
    /**
      * [查询结果]url恶意状态；枚举值：1-灰， 2-黑（具体的恶意类型参考恶意类型定义Eviltype字段) ，3-非腾讯白名单，4-腾讯白名单。查询结果（level、evilclass、eviltype）这3个字段在Urltype=2（url状态为黑）下才有意义。
      */
    UrlType: number;
    /**
      * [查询结果]url恶意类型大类:{
    "1": "社工欺诈（仿冒、账号钓鱼、中奖诈骗）",
    "2": "信息诈骗（虚假充值、虚假兼职、虚假金融投资、虚假信用卡代办、网络赌博诈骗）",
    "3": "虚假销售（男女保健美容减肥产品、电子产品、虚假广告、违法销售）",
    "4": "恶意文件（病毒文件，木马文件，恶意apk文件的下载链接以及站点，挂马网站）",
    "5": "博彩网站（博彩网站，在线赌博网站）",
    "6": "色情网站（涉嫌传播色情内容，提供色情服务的网站）",
    "7": "风险网站（弱类型，传播垃圾信息的网站, 如果客户端有阻断，不建议使用这个数据）"
  }
      */
    EvilClass: number;
    /**
      * [查询结果]url恶意类型:{
    "2": "盗号网站",
    "4": "中奖诈骗",
    "5": "虚假游戏币充值",
    "6": "非法政治",
    "7": "欺诈网站",
    "8": "刷Q币Q钻",
    "9": "欺诈类网站（总,不拦截）",
    "10": "欺诈-卡盟",
    "13": "非法商品",
    "14": "欺诈电话",
    "15": "贩卖枪支",
    "16": "话费欺诈",
    "17": "裸聊（拦截）",
    "18": "仿冒网站-银联举报",
    "19": "聊天室（不拦截）",
    "20": "成人游戏（不拦截）",
    "21": "一夜情交友(不拦截)",
    "22": "色情服务（不拦截）",
    "23": "微博拉黑",
    "24": "下载风险",
    "25": "病毒软件(apk)",
    "26": "病毒软件(apk不拦截)",
    "27": "病毒软件(apk低风险不拦截)",
    "28": "漏洞网站",
    "29": "色情网站-扫黄打非",
    "30": "可疑盗号（不拦截）",
    "31": "仿冒京东",
    "32": "仿冒银行",
    "33": "仿冒运营商",
    "34": "扫黄打非",
    "35": "仿冒苹果",
    "36": "CNCERT-木马",
    "37": "CNCERT-移动病毒",
    "38": "CNCERT-钓鱼",
    "39": "在线赌博",
    "40": "赌博游戏",
    "41": "秒赞",
    "42": "虚假商品",
    "43": "仿冒腾讯网",
    "44": "游戏账号交易",
    "45": "二手交易诈骗",
    "46": "充值平台-卡盟",
    "47": "虚假兼职",
    "48": "公司业务充值",
    "49": "赌博投注",
    "50": "侵权网站",
    "51": "兼职招聘后台",
    "52": "虚假支付",
    "53": "虚假兼职",
    "54": "虚假视频",
    "55": "虚假小说",
    "56": "非法图片",
    "57": "成人用品",
    "58": "虚假兼职bbs",
    "59": "虚假兼职流程",
    "60": "仿冒政府",
    "62": "虚假广告",
    "63": "恶意跳转",
    "64": "盗版腾讯视频",
    "65": "NBA直播盗版",
    "66": "测试",
    "68": "空间欺诈",
    "70": "清粉",
    "76": "含有apk的恶意url",
    "77": "拦截马",
    "78": "黑产",
    "79": "虚假投资理财",
    "80": "侵权网站",
    "81": "仿冒公检法",
    "82": "诱导传播-U镜",
    "83": "仿冒微信",
    "84": "买卖微信账号",
    "88": "欺诈网站(品牌保护专用)",
    "91": "非法政治(领导人)",
    "92": "非法政治（六四）",
    "93": "非法政治（法轮功）",
    "94": "非法政治（攻击政党）",
    "95": "非法政治（暴恐）",
    "96": "非法政治（其他）",
    "100": "信安博彩",
    "101": "信安色情",
    "102": "信安事件",
    "103": "信安暴力",
    "104": "信安违法",
    "105": "信安欺诈",
    "106": "信安版权",
    "107": "信安谣言",
    "108": "信安欺诈总",
    "109": "游戏租号",
    "110": "恶意挖矿",
    "120": "虚假广告推广",
    "128": "欺诈网站（网信办）",
    "222": "高考诈骗",
    "248": "非法色情",
    "250": "游戏盗号",
    "251": "游戏推广",
    "252": "股票推荐",
    "253": "工作流程",
    "254": "兼职申请表",
    "255": "tag检测色情",
    "256": "非法色情（cache已淘汰）",
    "257": "非法色情-搜索",
    "258": "非法色情（强类型）",
    "259": "非法色情（支付）",
    "260": "非法色情（支付）",
    "261": "诱导支付（红包）",
    "262": "儿童色情网站",
    "263": "加群支付",
    "264": "支付后台",
    "265": "本命佛",
    "266": "二维码软文",
    "267": "机器学习虚假博彩",
    "268": "色情网站(网信办)",
    "269": "机器学习虚假色情",
    "270": "虚假支付",
    "271": "佛法",
    "272": "仿冒公检法_监控",
    "273": "仿冒公检法_回溯",
    "277": "色情诈骗",
    "279": "色情推广",
    "280": "私家侦探",
    "281": "低俗小说",
    "299": "欺诈投资理财",
    "300": "政府同步P2P平台",
    "302": "违规口罩销售",
    "303": "个人销售电子烟",
    "512": "挂马网站",
    "598": "漏洞网站",
    "600": "翻墙软件",
    "900": "侵权网站",
    "1111": "危险网址",
    "1112": "危险网址",
    "1113": "危险网址",
    "1114": "危险网址",
    "1115": "危险网址",
    "1540": "测试使用",
    "2048": "欺诈广告",
    "2100": "GPS欺诈",
    "2257": "虚假信息",
    "2258": "虚假信息",
    "2300": "虚假信息",
    "2302": "异常传播",
    "2303": "去结构化(聚类)",
    "2304": "去结构化",
    "2305": "骚扰传播",
    "2306": "mqq跳转传播",
    "2307": "低俗推广",
    "2308": "虚假信息",
    "2310": "微信诱导分享",
    "2400": "虚假信息",
    "2401": "虚假信息",
    "2402": "虚假信息",
    "2501": "色情支付APK",
    "2502": "仿冒公检法APK",
    "2503": "诱导分享APK",
    "2504": "赌博APK",
    "2505": "外挂APK",
    "2506": "贷款欺诈APP",
    "2507": "刷单欺诈APP",
    "2508": "理财欺诈APP",
    "2509": "赌博APK",
    "2510": "杀猪盘APP下载",
    "2511": "刷单APP下载",
    "2513": "贷款app下载",
    "2600": "仿冒品牌保护网站",
    "2700": "站点QQ发送异常",
    "2701": "王者充值",
    "2702": "王者礼包",
    "2703": "虚假信息",
    "2704": "虚假信息",
    "2705": "虚假信息",
    "2706": "虚假信息",
    "2707": "仿冒壳牌",
    "2708": "善心汇",
    "2709": "虚假信息",
    "2710": "空间诱导",
    "2711": "漏洞利用",
    "2712": "扫码诱导",
    "2713": "虚假信息",
    "2800": "异常传播",
    "2801": "QQ去rich",
    "2802": "未知去rich",
    "2803": "QQ丢弃",
    "2804": "账号提醒",
    "2805": "可疑分享中间页",
    "2806": "继续访问中间页",
    "2808": "账号提醒",
    "2809": "微信提醒",
    "2810": "非QQ官方网站",
    "2901": "医疗器械标识",
    "2902": "西安工商风险网站",
    "2903": "西安食药提醒备案",
    "2904": "西安食药提示风险",
    "3001": "发言侵权",
    "8192": "虚假商品",
    "8193": "二手车",
    "8194": "虚假手表",
    "8195": "虚假商品-壮阳",
    "8196": "虚假商品-稽查局",
    "8197": "虚假数码",
    "8198": "虚假贷款",
    "8199": "假信用卡",
    "8200": "假银行卡",
    "8201": "虚假股票证券交易",
    "8202": "特供商品",
    "8203": "非法虚拟币交易",
    "8204": "可疑虚拟币交易",
    "8205": "虚假商品交易平台",
    "8206": "可疑商品交易平台",
    "8207": "股票投资直播",
    "8208": "一元夺宝云购",
    "8209": "传销（新）",
    "8210": "可疑贷款",
    "8211": "可疑信用卡",
    "8212": "可疑投资理财",
    "8213": "虚假治疗药品",
    "8214": "虚假美容药品",
    "8215": "A货网址",
    "8216": "零元拍",
    "8220": "可疑返利信息",
    "8250": "虚假外汇交易",
    "8251": "可疑外汇交易",
    "8252": "虚假贵金属交易",
    "8253": "可疑贵金属交易",
    "8254": "虚假大宗商品交易",
    "8255": "可疑大宗商品交易",
    "8256": "虚假期货交易",
    "8257": "可疑期货交易",
    "8258": "外汇交易拦截",
    "8259": "淘宝诱导",
    "8260": "高风险小额贷款",
    "8261": "低风险小额贷款",
    "8262": "小额贷款信息发布平台",
    "8263": "基金投资平台",
    "8264": "股票咨询平台",
    "8265": "邮币卡交易",
    "8266": "高风险文化产权交易所",
    "8267": "低风险文化产权交易所",
    "8268": "杀毒软件威胁下载",
    "8269": "股票配资",
    "8270": "外汇信息交流",
    "8271": "杀毒软件威胁下载(调起震动)",
    "8272": "贷款口子",
    "8273": "赌博棋牌",
    "8274": "案情贷款诈骗",
    "8275": "案情刷单诈骗",
    "8276": "案情贷款诈骗",
    "8277": "可疑的客服链接",
    "8278": "仿冒的购物网站",
    "8300": "成人用品",
    "8301": "融资租赁",
    "8302": "供应链金融",
    "8303": "保理",
    "8304": "投资管理",
    "8305": "金融服务",
    "8306": "交易类返佣跟单平台",
    "8307": "交易类直播喊单平台",
    "8308": "金融配资",
    "8309": "期货平台",
    "8310": "其他投资",
    "8311": "可疑区块链",
    "8312": "加微信虚假广告",
    "8313": "仿冒微粒贷",
    "8314": "Safari崩溃",
    "8315": "色情诱导支付",
    "8316": "仿冒拼多多网站",
    "8317": "电影众筹",
    "8318": "理财通数字竞猜",
    "8319": "卡盟平台",
    "8320": "发卡平台",
    "8321": "(扫码渠道)仿冒欺诈网站",
    "8322": "ETC速通卡仿冒",
    "8323": "工商登记诈骗",
    "8324": "违规，欺诈网站",
    "16383": "非法博彩",
    "16384": "非法博彩",
    "16386": "博彩支付",
    "16387": "虚假彩票",
    "16388": "腾讯分分彩",
    "16389": "非法博彩(网信办)",
    "16390": "虚假彩票-有备案",
    "16391": "非法博彩-有备案",
    "16392": "彩票预测-有备案",
    "16393": "博彩诈骗",
    "16394": "高危博彩",
    "16395": "虚假链接",
    "16396": "博彩诈骗",
    "16397": "电竞赌博",
    "16398": "博彩诈骗",
    "16399": "非法博彩(网信办)",
    "16407": "非法欺诈（用户举报）",
    "16489": "非法博彩（用户举报）",
    "16501": "贷款诈骗APP中的链接",
    "16502": "理财诈骗app内部链接",
    "16503": "赌博app中的内部链接",
    "16505": "杀猪盘诈骗",
    "16506": "贷款诈骗",
    "16507": "刷单诈骗",
    "16508": "非法博彩",
    "16509": "涉政信息",
    "16510": "枪支信息",
    "16511": "黄毒网址",
    "16521": "投资诈骗",
    "16522": "",
    "16523": "",
    "16524": "赌博网站",
    "16525": "",
    "16526": "",
    "16527": "黄毒网站",
    "16555": "可疑信息",
    "20001": "法律追损",
    "20040": "赌博订单平台",
    "32768": "虚假火车票",
    "65536": "虚假视频",
    "65537": "虚假视频-沙箱",
    "65538": "诱导下载-管家",
    "100000": "公司代注册",
    "100001": "手机维修",
    "262144": "彩票预测信息",
    "524288": "病毒软件",
    "524289": "病毒软件-色播",
    "1001000": "欺诈大类-其他",
    "1048577": "非法外挂",
    "1048578": "木马外挂",
    "1048579": "非法私服",
    "1048580": "游戏代练",
    "2097152": "仿冒淘宝",
    "4194304": "仿冒腾讯游戏",
    "5001000": "赌博-其他",
    "5001101": "赌博-其他（浏览器）",
    "6001000": "色情-其他",
    "8388608": "虚假机票",
    "16777216": "金融传销",
    "16777300": "微交易微盘",
    "33554432": "仿冒网站",
    "33554433": "假发票验证平台",
    "67108864": "虚假药品",
    "67108866": "虚假商品",
    "268435456": "淘宝刷钻"
  }
      */
    EvilType: number;
    /**
      * [查询结果]url恶意级别:{
    "1": "链接",
    "2": "Cgi",
    "3": "路径",
    "4": "整站",
    "5": "整域"
}
      */
    Level: number;
    /**
      * [查询详情]url检出时间
      */
    DetectTime: number;
    /**
      * [查询详情]拦截Wording
      */
    Wording: string;
    /**
      * [查询详情]拦截Wording 标题
      */
    WordingTitle: string;
    /**
      * [查询结果]url恶意状态说明；为UrlType字段值对应的说明
      */
    UrlTypeDesc: string;
    /**
      * [查询结果]url恶意大类说明；为EvilClass字段值对应的说明
      */
    EvilClassDesc: string;
    /**
      * [查询结果]url恶意类型说明；为EvilType字段值对应的说明
      */
    EvilTypeDesc: string;
    /**
      * [查询结果]url恶意级别说明；为Level字段值对应的说明
      */
    LevelDesc: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeShieldPlanInstance请求参数结构体
 */
export interface DescribeShieldPlanInstanceRequest {
    /**
      * 资源id
      */
    ResourceId: string;
    /**
      * 服务类别id
      */
    Pid: number;
}
/**
 * 加固后app的信息
 */
export interface ShieldInfo {
    /**
      * 加固结果的返回码
      */
    ShieldCode: number;
    /**
      * 加固后app的大小
      */
    ShieldSize?: number;
    /**
      * 加固后app的md5
      */
    ShieldMd5?: string;
    /**
      * 加固后的APP下载地址，该地址有效期为20分钟，请及时下载
      */
    AppUrl?: string;
    /**
      * 加固的提交时间
      */
    TaskTime: number;
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 加固版本，basic基础版，professional专业版，enterprise企业版
      */
    ServiceEdition: string;
}
/**
 * DescribeUserBaseInfoInstance请求参数结构体
 */
export declare type DescribeUserBaseInfoInstanceRequest = null;
/**
 * CreateResourceInstances返回参数结构体
 */
export interface CreateResourceInstancesResponse {
    /**
      * 新创建的资源列表。
      */
    ResourceSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * app的详细基础信息
 */
export interface AppDetailInfo {
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
    /**
      * app的版本号
      */
    AppVersion: string;
    /**
      * app的大小
      */
    AppSize: number;
    /**
      * app的md5
      */
    AppMd5: string;
    /**
      * app的图标url
      */
    AppIconUrl: string;
    /**
      * app的文件名称
      */
    FileName: string;
}
/**
 * DeleteScanInstances返回参数结构体
 */
export interface DeleteScanInstancesResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 筛选数据结构
 */
export interface Filter {
    /**
      * 需要过滤的字段
      */
    Name: string;
    /**
      * 需要过滤字段的值
      */
    Value?: string;
}
/**
 * DeleteShieldInstances返回参数结构体
 */
export interface DeleteShieldInstancesResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanInstances请求参数结构体
 */
export interface DescribeScanInstancesRequest {
    /**
      * 支持通过app名称，app包名进行筛选
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 数量限制，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
      */
    ItemIds?: Array<string>;
    /**
      * 按某个字段排序，目前仅支持TaskTime排序。
      */
    OrderField?: string;
    /**
      * 升序（asc）还是降序（desc），默认：desc。
      */
    OrderDirection?: string;
}
/**
 * DescribeApkDetectionResult返回参数结构体
 */
export interface DescribeApkDetectionResultResponse {
    /**
      * 响应结果，ok表示正常，error表示错误
      */
    Result: string;
    /**
      * Result为error错误时的原因说明
      */
    Reason: string;
    /**
      * APK检测结果数组
      */
    ResultList: Array<ResultListItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceInstances返回参数结构体
 */
export interface DescribeResourceInstancesResponse {
    /**
      * 符合要求的资源数量
      */
    TotalCount: number;
    /**
      * 符合要求的资源数组
      */
    ResourceSet: Array<ResourceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanResults请求参数结构体
 */
export interface DescribeScanResultsRequest {
    /**
      * 任务唯一标识
      */
    ItemId: string;
    /**
      * 批量查询一个或者多个app的扫描结果，如果不传表示查询该任务下所提交的所有app
      */
    AppMd5s?: Array<string>;
}
/**
 * CreateCosSecKeyInstance返回参数结构体
 */
export interface CreateCosSecKeyInstanceResponse {
    /**
      * COS密钥对应的AppId
      */
    CosAppid?: number;
    /**
      * COS密钥对应的存储桶名
      */
    CosBucket?: string;
    /**
      * 存储桶对应的地域
      */
    CosRegion?: string;
    /**
      * 密钥过期时间
      */
    ExpireTime?: number;
    /**
      * 密钥ID信息
      */
    CosId?: string;
    /**
      * 密钥KEY信息
      */
    CosKey?: string;
    /**
      * 密钥TOCKEN信息
      */
    CosTocken?: string;
    /**
      * 密钥可访问的文件前缀人。例如：CosPrefix=test/123/666，则该密钥只能操作test/123/666为前缀的文件，例如test/123/666/1.txt
      */
    CosPrefix?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 病毒信息
 */
export interface VirusInfo {
    /**
      * 软件安全类型，分别为0-未知、 1-安全软件、2-风险软件、3-病毒软件
      */
    SafeType: number;
    /**
      * 病毒名称， utf8编码，非病毒时值为空
      */
    VirusName: string;
    /**
      * 病毒描述，utf8编码，非病毒时值为空
      */
    VirusDesc: string;
}
/**
 * 安全扫描系统权限信息
 */
export interface ScanPermissionInfo {
    /**
      * 系统权限
      */
    Permission: string;
}
/**
 * 加固策略信息
 */
export interface PlanInfo {
    /**
      * apk大小优化，0关闭，1开启
      */
    ApkSizeOpt: number;
    /**
      * Dex加固，0关闭，1开启
      */
    Dex: number;
    /**
      * So加固，0关闭，1开启
      */
    So: number;
    /**
      * 数据收集，0关闭，1开启
      */
    Bugly: number;
    /**
      * 防止重打包，0关闭，1开启
      */
    AntiRepack: number;
    /**
      * Dex分离，0关闭，1开启
      */
    SeperateDex: number;
    /**
      * 内存保护，0关闭，1开启
      */
    Db: number;
    /**
      * Dex签名校验，0关闭，1开启
      */
    DexSig: number;
    /**
      * So文件信息
      */
    SoInfo: SoInfo;
    /**
      * vmp，0关闭，1开启
      */
    AntiVMP: number;
    /**
      * 保护so的强度，
      */
    SoType: Array<string>;
    /**
      * 防日志泄漏，0关闭，1开启
      */
    AntiLogLeak: number;
    /**
      * root检测，0关闭，1开启
      */
    AntiQemuRoot: number;
    /**
      * 资源防篡改，0关闭，1开启
      */
    AntiAssets: number;
    /**
      * 防止截屏，0关闭，1开启
      */
    AntiScreenshot: number;
    /**
      * SSL证书防窃取，0关闭，1开启
      */
    AntiSSL: number;
}
/**
 * DescribeShieldResult返回参数结构体
 */
export interface DescribeShieldResultResponse {
    /**
      * 任务状态: 0-请返回,1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    TaskStatus: number;
    /**
      * app加固前的详细信息
      */
    AppDetailInfo: AppDetailInfo;
    /**
      * app加固后的详细信息
      */
    ShieldInfo: ShieldInfo;
    /**
      * 状态描述
      */
    StatusDesc: string;
    /**
      * 状态指引
      */
    StatusRef: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBindInstance返回参数结构体
 */
export interface CreateBindInstanceResponse {
    /**
      * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
      */
    Progress: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 漏洞信息
 */
export interface VulList {
    /**
      * 漏洞id
      */
    VulId: string;
    /**
      * 漏洞名称
      */
    VulName: string;
    /**
      * 漏洞代码
      */
    VulCode: string;
    /**
      * 漏洞描述
      */
    VulDesc: string;
    /**
      * 漏洞解决方案
      */
    VulSolution: string;
    /**
      * 漏洞来源类别，0默认自身，1第三方插件
      */
    VulSrcType: number;
    /**
      * 漏洞位置
      */
    VulFilepath: string;
    /**
      * 风险级别：1 低风险 ；2中等风险；3 高风险
      */
    RiskLevel: number;
}
/**
 * 用户绑定app的基本信息
 */
export interface BindInfo {
    /**
      * app的icon的url
      */
    AppIconUrl: string;
    /**
      * app的名称
      */
    AppName: string;
    /**
      * app的包名
      */
    AppPkgName: string;
}
/**
 * 安全扫描系统权限信息
 */
export interface ScanPermissionList {
    /**
      * 系统权限信息
      */
    PermissionList: Array<ScanPermissionInfo>;
}
/**
 * APK检测服务：非广告插件结果列表(SDK、风险插件等)
 */
export interface OptPluginListItem {
    /**
      * 非广告类型
      */
    PluginType: string;
    /**
      * 非广告插件名称
      */
    PluginName: string;
    /**
      * 非广告插件描述
      */
    PluginDesc: string;
}
/**
 * DeleteScanInstances请求参数结构体
 */
export interface DeleteScanInstancesRequest {
    /**
      * 删除一个或多个扫描的app，最大支持20个
      */
    AppSids: Array<string>;
}
