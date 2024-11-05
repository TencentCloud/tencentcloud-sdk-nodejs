/**
 * 加固策略具体信息
 */
export interface PlanDetailInfo {
    /**
     * 默认策略，1为默认，0为非默认
     */
    IsDefault?: number;
    /**
     * 策略id
     */
    PlanId?: number;
    /**
     * 策略名称
     */
    PlanName?: string;
    /**
     * 策略信息
     */
    PlanInfo?: PlanInfo;
}
/**
 * 加固后app的信息，包含基本信息和加固信息
 */
export interface AppSetInfo {
    /**
     * 任务唯一标识
     */
    ItemId?: string;
    /**
     * app的名称
     */
    AppName?: string;
    /**
     * app的包名
     */
    AppPkgName?: string;
    /**
     * app的版本号
     */
    AppVersion?: string;
    /**
     * app的md5
     */
    AppMd5?: string;
    /**
     * app的大小
     */
    AppSize?: number;
    /**
     * 加固服务版本
     */
    ServiceEdition?: string;
    /**
     * 加固结果返回码
     */
    ShieldCode?: number;
    /**
     * 加固后的APP下载地址
     */
    AppUrl?: string;
    /**
     * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
     */
    TaskStatus?: number;
    /**
     * 请求的客户端ip
     */
    ClientIp?: string;
    /**
     * 提交加固时间
     */
    TaskTime?: number;
    /**
     * app的图标url
     */
    AppIconUrl?: string;
    /**
     * 加固后app的md5
     */
    ShieldMd5?: string;
    /**
     * 加固后app的大小
     */
    ShieldSize?: number;
}
/**
 * CreateShieldPlanInstance返回参数结构体
 */
export interface CreateShieldPlanInstanceResponse {
    /**
     * 策略id
     */
    PlanId?: number;
    /**
     * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
     */
    Progress?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEncryptInstances返回参数结构体
 */
export interface DescribeEncryptInstancesResponse {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 渠道合作加固信息数组
     */
    EncryptResults?: Array<EncryptResults>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源服务信息
 */
export interface ResourceServiceInfo {
    /**
     * 创建时间戳
     */
    CreateTime?: number;
    /**
     * 到期时间戳
     */
    ExpireTime?: number;
    /**
     * 资源名称，如应用加固，源码混淆
     */
    ResourceName?: string;
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
    TotalCount?: number;
    /**
     * 一个关于app详细信息的结构体，主要包括app的基本信息和加固信息。
     */
    AppSet?: Array<AppSetInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 加固后app的信息
 */
export interface ShieldInfo {
    /**
     * 加固结果的返回码
     */
    ShieldCode?: number;
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
    TaskTime?: number;
    /**
     * 任务唯一标识
     */
    ItemId?: string;
    /**
     * 加固版本，basic基础版，professional专业版，enterprise企业版
     */
    ServiceEdition?: string;
}
/**
 * UpdateClientState请求参数结构体
 */
export interface UpdateClientStateRequest {
    /**
     * Client Id
     */
    ClientId: string;
    /**
     * Ip addr
     */
    Ip: string;
    /**
     * 内部分组
     */
    Internal: number;
    /**
     * Client  Version
     */
    ServerVersion: string;
    /**
     * 主机
     */
    Hostname: string;
    /**
     * 系统
     */
    Os: string;
}
/**
 * 渠道合作sdk加固策略配置
 */
export interface SDKPlan {
    /**
     * 策略id
     */
    PlanId?: number;
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
 * CancelEncryptTask返回参数结构体
 */
export interface CancelEncryptTaskResponse {
    /**
     * 1: 取消任务成功 ； -1 ：取消任务失败，原因为任务进程已结束，不能取消。
     */
    State?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrderInstances返回参数结构体
 */
export interface DescribeOrderInstancesResponse {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 订单信息
     */
    Orders?: Array<Orders>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 渠道合作IOS源码混淆配置
 */
export interface IOSPlan {
    /**
     * 策略id
     */
    PlanId?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateLocalTaskResult返回参数结构体
 */
export interface UpdateLocalTaskResultResponse {
    /**
     * 标记成功
     */
    ResultCode?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateEncryptInstance返回参数结构体
 */
export interface CreateEncryptInstanceResponse {
    /**
     * 加固任务Id
     */
    ResultId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroyResourceInstances请求参数结构体
 */
export interface DestroyResourceInstancesRequest {
    /**
     * ResourceId 资源id，在创建订单时，返回的resourceId
     */
    ResourceId: string;
    /**
     * 资源绑定的包名，为了防止误删除，需要指定绑定时的包名
     */
    AppPkgName: string;
}
/**
 * 渠道合作加固sdk加固结果
 */
export interface SDKResult {
    /**
     * 加固任务结果Id
     */
    ResultId?: string;
}
/**
 * RequestLocalTask返回参数结构体
 */
export interface RequestLocalTaskResponse {
    /**
     * 返回的任务id
     */
    Sid?: string;
    /**
     * 任务文件的mk5
     */
    SrcFileMd5?: string;
    /**
     * 文件大小，可不传
     */
    SrcFileSize?: number;
    /**
     * 任务文件的下载地址，必须无鉴权可下载
     */
    SrcFileUrl?: string;
    /**
     * release: 需要INFO-PLIST文件，会生成工具部署安装包，并带有license文件，绑定机器；nobind不需要INFO-PLIST文件，不绑定机器
     */
    SrcFileType?: string;
    /**
     * enterprise
  trial
     */
    SrcFileVersion?: string;
    /**
     * 补充字段
     */
    EncryptParam?: string;
    /**
     * 任务状态
     */
    EncryptState?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateLocalTaskResult请求参数结构体
 */
export interface UpdateLocalTaskResultRequest {
    /**
     * 任务id
     */
    Sid: string;
    /**
     * 一级任务code。标记任务状态
     */
    ResultCode: number;
    /**
     * 二级错误码
     */
    SubCode: number;
    /**
     * 二级错误信息
     */
    ErrMsg: string;
    /**
     * 结果
     */
    Result: string;
}
/**
 * iOS加固信息

    InfoPListUrl  string `json:"InfoPListUrl"`  //info.plist的url，必须保证不用权限校验就可以下载
    InfoPListSize int64  `json:"InfoPListSize"` //info.plist文件的大小
    InfoPListMd5  string `json:"InfoPListMd5"`  //info.plist文件的md5
    BuildType     string `json:"BuildType"`     //release: 需要INFO-PLIST文件，会生成工具部署安装包，并带有license文件，绑定机器；nobind不需要INFO-PLIST文件，不绑定机器
 */
export interface IOSInfo {
    /**
     * info.plist的url，必须保证不用权限校验就可以下载
     */
    InfoPListUrl?: string;
    /**
     * info.plist文件的大小
     */
    InfoPListSize?: number;
    /**
     * info.plist文件的md5
     */
    InfoPListMd5?: string;
    /**
     * release: 需要INFO-PLIST文件，会生成工具部署安装包，并带有license文件，绑定机器；nobind不需要INFO-PLIST文件，不绑定机器
     */
    BuildType?: string;
}
/**
 * 加固策略信息
 */
export interface ShieldPlanInfo {
    /**
     * 加固策略数量
     */
    TotalCount?: number;
    /**
     * 加固策略具体信息数组
     */
    PlanSet?: Array<PlanDetailInfo>;
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
    Progress?: number;
    /**
     * 任务唯一标识
     */
    ItemId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 小程序加固配置
 */
export interface AppletPlan {
    /**
     * 策略Id
     */
    PlanId?: number;
    /**
     * 1 - 开启代码混淆、代码压缩、代码反调试保护。
  2 - 开启字符串编码和代码变换，代码膨胀，随机插入冗余代码，开启代码控制流平坦化，保证业务逻辑正常前提下，扁平化代码逻辑分支，破坏代码简单的线性结构。
  3 - 开启代码加密，对字符串、函数、变量、属性、类、数组等结构进行加密保护，更多得代码控制流平坦化，扁平化逻辑分支。
     */
    AppletLevel?: number;
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
    ResourceId?: string;
    /**
     * 资源的pid，MTP加固-12767，应用加固-12750 MTP反作弊-12766 源代码混淆-12736
     */
    Pid?: number;
    /**
     * 购买时间戳
     */
    CreateTime?: number;
    /**
     * 到期时间戳
     */
    ExpireTime?: number;
    /**
     * 0-未绑定，1-已绑定
     */
    IsBind?: number;
    /**
     * 用户绑定app的基本信息
     */
    BindInfo?: BindInfo;
    /**
     * 资源名称，如应用加固，漏洞扫描
     */
    ResourceName?: string;
}
/**
 * Android加固结果
 */
export interface AndroidResult {
    /**
     * 结果Id,用于查询加固结果
     */
    ResultId?: string;
    /**
     * 与当前任务关联的订单id
     */
    OrderId?: string;
    /**
     * 与当前任务关联的资源Id
     */
    ResourceId?: string;
    /**
     * 本次任务发起者
     */
    OpUin?: number;
    /**
     * 应用类型：android-apk; android-aab;
     */
    AppType?: string;
    /**
     * 应用包名
     */
    AppPkgName?: string;
    /**
     * 后台资源绑定的包名
     */
    BindAppPkgName?: string;
    /**
     * 加固结果
     */
    EncryptState?: number;
    /**
     * 加固结果描述
     */
    EncryptStateDesc?: string;
    /**
     * 加固失败错误码
     */
    EncryptErrCode?: number;
    /**
     * 加固失败原因
     */
    EncryptErrDesc?: string;
    /**
     * 加固失败解决方案
     */
    EncryptErrRef?: string;
    /**
     * 任务创建时间
     */
    CreatTime?: string;
    /**
     * 任务开始处理时间
     */
    StartTime?: string;
    /**
     * 任务处理结束时间
     */
    EndTime?: string;
    /**
     * 加固耗时（秒单位）
     */
    CostTime?: number;
    /**
     * 在线加固-android应用原包下载链接
     */
    AppUrl?: string;
    /**
     * 在线加固-android应用文件MD5算法值
     */
    AppMd5?: string;
    /**
     * 在线加固-android应用应用名称
     */
    AppName?: string;
    /**
     * 在线加固-android应用版本；
     */
    AppVersion?: string;
    /**
     * 在线加固-android应用大小
     */
    AppSize?: number;
    /**
     * 在线加固-android加固-腾讯云应用加固工具版本
     */
    OnlineToolVersion?: string;
    /**
     * 在线加固-android加固，加固成功后文件md5算法值
     */
    EncryptAppMd5?: string;
    /**
     * 在线加固-android加固，加固成功后应用大小
     */
    EncryptAppSize?: number;
    /**
     * 在线加固-android加固，加固包下载链接。
     */
    EncryptPkgUrl?: string;
    /**
     * 输出工具-android加固-腾讯云输出工具版本
     */
    OutputToolVersion?: string;
    /**
     * 输出工具-android加固-工具大小
     */
    OutputToolSize?: number;
    /**
     * 输出工具-android加固-工具输出时间
     */
    ToolOutputTime?: string;
    /**
     * 输出工具-android加固-工具到期时间
     */
    ToolExpireTime?: string;
    /**
     * 输出工具-android加固-输出工具下载链接
     */
    OutputToolUrl?: string;
    /**
     * 本次android加固策略信息
     */
    AndroidPlan?: AndroidPlan;
}
/**
 * DescribeUserBaseInfoInstance请求参数结构体
 */
export declare type DescribeUserBaseInfoInstanceRequest = null;
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
 * 小程序加固信息
 */
export interface AppletInfo {
    /**
     * 客户JS包
     */
    AppletJsUrl?: string;
    /**
     * 小程序加固等级配置
  1 - 开启代码混淆、代码压缩、代码反调试保护。 2 - 开启字符串编码和代码变换，代码膨胀，随机插入冗余代码，开启代码控制流平坦化，保证业务逻辑正常前提下，扁平化代码逻辑分支，破坏代码简单的线性结构。 3 - 开启代码加密，对字符串、函数、变量、属性、类、数组等结构进行加密保护，更多得代码控制流平坦化，扁平化逻辑分支。
     */
    AppletLevel?: number;
    /**
     * 本次加固输出产物名称，如”test.zip“,非空必须是 ”.zip“结尾
     */
    Name?: string;
}
/**
 * 渠道合作Android加固策略信息
 */
export interface AndroidPlan {
    /**
     * 非必输字段，PlanId 是指本次加固使用的配置策略Id，可通过载入上次配置接口获取。其值非0时，代表引用对应的策略。
     */
    PlanId?: number;
    /**
     * 本次操作的包名。
  当收费模式是android按年收费和android免费试用的在线加固和输出工具加固时，要求该字段必输，且与AndroidAppInfo.AppPkgName值相等。
     */
    AppPkgName?: string;
    /**
     * android app的文件类型，本次加固操作的应用类型 。
  android在线加固和输出工具加固必输，其值需等于“apk”或“aab”，且与AndroidAppInfo.AppType值相等。
  
     */
    AppType?: string;
    /**
     * android加固必输字段。
  加固策略，json格式字符串。
  字段说明（0-关闭，1-开启）：
          "enable"=1 #DEX整体加固;
          "antiprotect"=1 #反调试;
          "antirepack"=1 #防重打包、防篡改;
          "dexsig"=1       #签名校验;
          "antimonitor"=1 #防模拟器运行保护;
          "ptrace"=1 #防动态注入、动态调试;
          "so"."enable" = 1 #文件加密;
          "vmp"."enable" = 1 #VMP虚拟化保护;
          "respro"."assets"."enable" = 1 #assets资源文件加密
         "respro"."res"."enable" = 1 #res资源文件加密
  
  so文件加密：
  支持5种架构:
  apk 格式: /lib/armeabi/libxxx.so,/lib/arm64-v8a/libxxx.so,/lib/armeabi-v7a/libxxx.so,/lib/x86/libxxx.so,/lib/x86_64/libxxx.so
  aab格式: /base/lib/armeabi/libxxx.so,/base/lib/arm64-v8a/libxxx.so,/base/lib/armeabi-v7a/libxxx.so,/base/lib/x86/libxxx.so,/base/lib/x86_64/libxxx.so
  请列举 SO 库在 apk 文件解压后的完整有效路径，如:/lib/armeabi/libxxx.so；
  需要加固的 SO 库需确认为自研的 SO 库，不要加固第三方 SO 库，否则会增加 crash 风险
  
  res资源文件加密注意事项：
  请指定需要加密的文件全路径，如：res/layout/1.xml;
  res资源文件加密不能加密APP图标
  res目录文件，不能加密以下后缀规则的文件".wav", ".mp2", ".mp3", ".ogg", ".aac", ".mpg",".mpeg", ".mid", ".midi", ".smf", ".jet", ".rtttl", ".imy", ".xmf", ".mp4", ".m4a", ".m4v", ".3gp",".3gpp", ".3g2", ".3gpp2", ".amr", ".awb", ".wma", ".wmv"
  
  assets资源文件加密注意事项:
  请指定需要加密的文件全路径，如：assets/main.js；可以完整路径，也可以相对路径。
  如果有通配符需要完整路径 ":all"或者"*"代表所有文件
  assets资源文件加密不能加密APP图标
  assets目录文件，不能加密以下后缀规则的文件".wav", ".mp2", ".mp3", ".ogg", ".aac", ".mpg",".mpeg", ".mid", ".midi", ".smf", ".jet", ".rtttl", ".imy", ".xmf", ".mp4", ".m4a", ".m4v", ".3gp",".3gpp", ".3g2", ".3gpp2", ".amr", ".awb", ".wma", ".wmv"
  
  
  apk[dex+so+vmp+res+assets]加固参数示例：
  ‘{
      "dex": {
          "enable": 1,
          "antiprotect": 1,
          "antirepack": 1,
          "dexsig": 1,
          "antimonitor": 1,
          "ptrace": 1
      },
      "so": {
          "enable": 1,
          "ver": "1.3.3",
          "file": [
              "/lib/armeabi/libtest.so"
          ]
      },
      "vmp": {
          "enable": 1,
          "ndkpath": "/xxx/android-ndk-r10e",
          "profile": "/xxx/vmpprofile.txt",
          "mapping": "/xxx/mapping.txt"
      },
      "respro": {
          "assets": {
              "enable": 1,
              "file": [
                  "assets/1.js",
                  "assets/2.jpg"
              ]
          },
          "res": {
              "enable": 1,
              "file": [
                  "res/layout/1.xml",
                  "res/layout/2.xml"
              ]
          }
      }
  }’
  
  aab加固方案一
  [dex+res+assets]加固json字符串：
  ‘{
      "dex": {
          "enable": 1,
          "antiprotect": 1,
          "antimonitor": 1
      },
      "respro": {
          "assets": {
              "enable": 1,
              "file": [
                  "assets/1.js",
                  "assets/2.jpg"
              ]
          },
          "res": {
              "enable": 1,
              "file": [
                  "res/layout/1.xml",
                  "res/layout/2.xml"
              ]
          }
      }
  }’
  
  aab加固方案二
  单独vmp加固：
  ‘{
      "vmp": {
          "enable": 1,
          "ndkpath": "/xxx/android-ndk-r10e",
          "profile": "/xxx/vmpprofile.txt",
          "mapping": "/xxx/mapping.txt",
          "antiprotect": 1,
          "antimonitor": 1
      }
  }’
     */
    EncryptParam?: string;
}
/**
 * 渠道合作ios源码混淆加固结果
 */
export interface IOSResult {
    /**
     * 加固任务结果Id
     */
    ResultId?: string;
    /**
     * 用户uid
     */
    OpUin?: number;
    /**
     * 加固类型，这里为ios
     */
    EncryptType?: string;
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 加固状态：0等待，1成功，2任务中，3失败，4重试中
     */
    EncryptState?: number;
    /**
     * 业务错误码
     */
    EncryptErrno?: number;
    /**
     * 业务错误信息
     */
    EncryptErrDesc?: string;
    /**
     * 创建时间
     */
    CreatTime?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 消耗时间
     */
    CostTime?: number;
    /**
     * 加固（混淆）包结果url
     */
    EncryptPkgUrl?: string;
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
    BindInfo?: BindInfo;
    /**
     * 加固策略信息
     */
    ShieldPlanInfo?: ShieldPlanInfo;
    /**
     * 加固资源信息
     */
    ResourceServiceInfo?: ResourceServiceInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEncryptPlan请求参数结构体
 */
export interface DescribeEncryptPlanRequest {
    /**
     * 平台类型  1.android加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformType: number;
    /**
     * 订单采购类型 1-免费试用 2-按年收费 3-按次收费
     */
    OrderType: number;
    /**
     * 1-在线加固；2-输出工具
     */
    EncryptOpType: number;
    /**
     * 本次加固使用的资源id
     */
    ResourceId: string;
    /**
     * （条件过滤字段）加固查询时，根据包名查询
     */
    AppPkgName?: string;
    /**
     * （条件过滤字段）加固查询时，根据应用格式查询，枚举值：“apk”、“aab”
     */
    AppType?: string;
}
/**
 * DescribeEncryptInstances请求参数结构体
 */
export interface DescribeEncryptInstancesRequest {
    /**
     * 多记录查询时使用，页码
     */
    PageNumber?: number;
    /**
     * 多记录每页展示数量
     */
    PageSize?: number;
    /**
     * 多记录查询时排序使用  仅支持CreateTime 任务创建时间排序
     */
    OrderField?: string;
    /**
     * 升序（asc）还是降序（desc），默认：desc。
     */
    OrderDirection?: string;
    /**
     * (条件过滤字段) 平台类型  1.android加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformType?: number;
    /**
     * (条件过滤字段) 订单采购类型 1-免费试用 2-按年收费 3-按次收费
     */
    OrderType?: number;
    /**
     * (条件过滤字段) 1-在线加固 或 2-输出工具加固
     */
    EncryptOpType?: number;
    /**
     * (条件过滤字段) 单记录查询时使用，结果ID该字段非空时，结构会根据结果ID进行单记录查询，符合查询条件时，只返回一条记录。
     */
    ResultId?: string;
    /**
     * (条件过滤字段) 查询与订单Id关联的任务
     */
    OrderId?: string;
    /**
     * (条件过滤字段) 查询与资源Id关联的任务
     */
    ResourceId?: string;
    /**
     * (条件过滤字段) 应用类型：android-apk; android-aab;
     */
    AppType?: string;
    /**
     * （条件过滤字段）应用的包名
     */
    AppPkgName?: string;
    /**
     * 加固结果，
  0：正在排队；
  1：加固成功；
  2：加固中；
  3：加固失败；
  5：重试；
  多记录查询时，根据查询结果进行检索使用。
     */
    EncryptState?: Array<number | bigint>;
}
/**
 * so加固信息
 */
export interface SoInfo {
    /**
     * so文件列表
     */
    SoFileNames?: Array<string>;
}
/**
 * APK检测服务：广告插件结果结构体
 */
export interface PluginListItem {
    /**
     * 数字类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
     */
    PluginType?: string;
    /**
     * 广告插件名称
     */
    PluginName?: string;
    /**
     * 广告插件描述
     */
    PluginDesc?: string;
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
    Banner?: string;
    /**
     * 精品推荐列表广告标记，分别为-1-不确定，0-否，1-是
     */
    BoutiqueRecommand?: string;
    /**
     * 悬浮窗图标广告标记,分别为-1-不确定，0-否，1-是
     */
    FloatWindows?: string;
    /**
     * 积分墙广告软件标记，分别为 -1 -不确定，0-否，1-是
     */
    IntegralWall?: string;
    /**
     * 安装包的md5
     */
    Md5?: string;
    /**
     * 通知栏广告软件标记，分别为-1-不确定，0-否，1-是
     */
    NotifyBar?: string;
    /**
     * 1表示官方，0表示非官方
     */
    Official?: string;
    /**
     * 广告插件结果列表
     */
    PluginList?: Array<PluginListItem>;
    /**
     * 非广告插件结果列表(SDK、风险插件等)
     */
    OptPluginList?: Array<OptPluginListItem>;
    /**
     * 数字类型，分别为0-未知， 1-安全软件，2-风险软件，3-病毒软件
     */
    SafeType?: string;
    /**
     * Session id，合作方可以用来区分回调数据，需要唯一。
     */
    Sid?: string;
    /**
     * 安装包名称
     */
    SoftName?: string;
    /**
     * 插播广告软件标记，取值：-1 不确定，0否， 1 是
     */
    Spot?: string;
    /**
     * 病毒名称，utf8编码
     */
    VirusName?: string;
    /**
     * 病毒描述，utf8编码
     */
    VirusDesc?: string;
    /**
     * 二次打包状态：0-表示默认；1-表示二次
     */
    RepackageStatus?: string;
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
     * @deprecated
     */
    Errno?: string;
    /**
     * 对应errno的错误信息描述
     */
    ErrMsg?: string;
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
    ErrNo?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroyResourceInstances返回参数结构体
 */
export interface DestroyResourceInstancesResponse {
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 返回状态
     */
    Result?: string;
    /**
     * 平台类型  1.android安卓加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformType?: number;
    /**
     * 订单采购类型 1-免费试用 2-按年收费 3-按次收费
     */
    OrderType?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 渠道合作Android加固App信息
 */
export interface AndroidAppInfo {
    /**
     * app文件的md5算法值，需要正确传递，在线加固必输。
  例如linux环境下执行算法命令md5sum ：
  #md5sum test.apk
  d40cc11e4bddd643ecdf29cde729a12b
     */
    AppMd5?: string;
    /**
     * app的大小，非必输。
     */
    AppSize?: number;
    /**
     * app下载链接，在线加固必输。
     */
    AppUrl?: string;
    /**
     * app名称，非必输
     */
    AppName?: string;
    /**
     * app的包名，本次操作的包名。
  当Android是按年收费、免费试用加固时，在线加固和输出工具要求该字段必输，且与AndroidPlan.AppPkgName值相等。
     */
    AppPkgName?: string;
    /**
     * app的文件名，非必输。
     */
    AppFileName?: string;
    /**
     * app版本号，非必输。
     */
    AppVersion?: string;
    /**
     * Android app的文件类型，本次加固操作的应用类型 。
  Android在线加固和输出工具加固必输，其值需等于“apk”或“aab”，且与AndroidAppInfo.AppType值相等。
     */
    AppType?: string;
}
/**
 * DescribeUrlDetectionResult返回参数结构体
 */
export interface DescribeUrlDetectionResultResponse {
    /**
     * [查询结果]查询结果；枚举值：0 查询成功，否则查询失败
     */
    ResultCode?: number;
    /**
     * [固定信息]响应协议版本号
     */
    RespVer?: number;
    /**
     * [查询结果]url恶意状态
  枚举值：
  0-1：未知，访问暂无风险。
  2 ：	风险网址，具体的恶意类型定义参考恶意大类EvilClass字段。
  3-4：安全，访问无风险。
  
  注意：查询结果EvilClass字段在Urltype=2时，才有意义。
     */
    UrlType?: number;
    /**
     * [查询结果]url恶意类型大类:{
      "1": "社工欺诈（仿冒、账号钓鱼、中奖诈骗）",
      "2": "信息诈骗（虚假充值、虚假兼职、虚假金融投资、虚假信用卡代办、网络赌博诈骗）",
      "3": "虚假销售（男女保健美容减肥产品、电子产品、虚假广告、违法销售）",
      "4": "恶意文件（病毒文件，木马文件，恶意apk文件的下载链接以及站点，挂马网站）",
      "5": "博彩网站（博彩网站，在线赌博网站）",
      "6": "色情网站（涉嫌传播色情内容，提供色情服务的网站）"，
      "7": "风险网站（弱类型，传播垃圾信息的网站，如果客户端有阻断，不建议使用这个网站）"，
      "8": "违法网站（根据法律法规不能传播的内容，以及侵犯知识产权的类型）"
    }
     */
    EvilClass?: number;
    /**
     * 该字段暂为空
     */
    EvilType?: number;
    /**
     * 该字段暂为空
     */
    Level?: number;
    /**
     * [查询详情]url检出时间；时间戳
     */
    DetectTime?: number;
    /**
     * 该字段暂为空
     */
    Wording?: string;
    /**
     * 该字段暂为空
     */
    WordingTitle?: string;
    /**
     * [查询结果]url恶意状态说明；为UrlType字段值对应的说明
     */
    UrlTypeDesc?: string;
    /**
     * [查询结果]url恶意大类说明；为EvilClass字段值对应的说明
     */
    EvilClassDesc?: string;
    /**
     * 该字段暂为空
     */
    EvilTypeDesc?: string;
    /**
     * 该字段暂为空
     */
    LevelDesc?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeEncryptPlan返回参数结构体
 */
export interface DescribeEncryptPlanResponse {
    /**
     * 平台类型整型值
     */
    PlatformType?: number;
    /**
     * 平台类型描述 1.android加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformTypeDesc?: string;
    /**
     * 1- 在线加固 2-输出工具加固
     */
    EncryptOpType?: number;
    /**
     * 1- 在线加固 2-输出工具加固
     */
    EncryptOpTypeDesc?: string;
    /**
     * 订单收费类型枚举值
     */
    OrderType?: number;
    /**
     * 订单收费类型描述
     */
    OrderTypeDesc?: string;
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 上次加固策略
     */
    AndroidPlan?: AndroidPlan;
    /**
     * 上次小程序加固策略
     */
    AppletPlan?: AppletPlan;
    /**
     * 上次ios源码混淆加固配置
     */
    IOSPlan?: IOSPlan;
    /**
     * 上次sdk加固配置
     */
    SDKPlan?: SDKPlan;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateResourceInstances返回参数结构体
 */
export interface CreateResourceInstancesResponse {
    /**
     * 新创建的资源列表。
     */
    ResourceSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    AppName?: string;
    /**
     * app的包名
     */
    AppPkgName?: string;
    /**
     * app的版本号
     */
    AppVersion?: string;
    /**
     * app的大小
     */
    AppSize?: number;
    /**
     * app的md5
     */
    AppMd5?: string;
    /**
     * app的图标url
     */
    AppIconUrl?: string;
    /**
     * app的文件名称
     */
    FileName?: string;
}
/**
 * RequestLocalTask请求参数结构体
 */
export interface RequestLocalTaskRequest {
    /**
     * Client Id
     */
    ClientId: string;
}
/**
 * DescribeOrderInstances请求参数结构体
 */
export interface DescribeOrderInstancesRequest {
    /**
     * 页码
     */
    PageNumber?: number;
    /**
     * 每页展示数量
     */
    PageSize?: number;
    /**
     * 按某个字段排序，目前仅支持CreateTime排序。
     */
    OrderField?: string;
    /**
     * 升序（asc）还是降序（desc），默认：desc。
     */
    OrderDirection?: string;
    /**
     * （条件过滤字段）平台类型  1.android加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformType?: number;
    /**
     * （条件过滤字段）订单采购类型 1-免费试用 2-按年收费 3-按次收费
     */
    OrderType?: number;
    /**
     * （条件过滤字段）订单审批状态：
     */
    ApprovalStatus?: number;
    /**
     * （条件过滤字段）资源状态：
     */
    ResourceStatus?: number;
    /**
     * （条件过滤字段）订单ID
     */
    OrderId?: string;
    /**
     * （条件过滤字段）资源ID
     */
    ResourceId?: string;
    /**
     * （条件过滤字段）包名，查询android加固订单时使用
     */
    AppPkgName?: string;
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
    Pids?: Array<number | bigint>;
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
 * CreateOrderInstance请求参数结构体
 */
export interface CreateOrderInstanceRequest {
    /**
     * 平台类型枚举值：1-android加固  ；2-ios源码混淆 ； 3-sdk加固 ； 4-applet小程序加固
     */
    PlatformType: number;
    /**
     * 订单采购类型 1-免费试用 ；2-按年收费 ；3-按次收费
     */
    OrderType: number;
    /**
     * 代表应用包名列表，值为单个包名（例如：“a.b.xxx”）或多个包名用逗号隔开(例如：“a.b.xxx,b.c.xxx”)。
  当android按年收费加固或android免费试用加固时，该字段要求非空，即PlatformType=1 并且 OrderType=2时，AppPkgNameList必传值。
  
     */
    AppPkgNameList?: string;
}
/**
 * 渠道合作加固小程序加固结果
 */
export interface AppletResult {
    /**
     * 加固任务结果id
     */
    ResultId?: string;
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 订单id
     */
    OrderId?: string;
    /**
     * 操作账号
     */
    OpUin?: number;
    /**
     * 加固结果
     */
    EncryptState?: number;
    /**
     * 加固结果描述
     */
    EncryptStateDesc?: string;
    /**
     * 失败错误码
     */
    EncryptErrCode?: number;
    /**
     * 失败原因
     */
    EncryptErrDesc?: string;
    /**
     * 解决方案
     */
    EncryptErrRef?: string;
    /**
     * 任务创建时间
     */
    CreatTime?: string;
    /**
     * 任务开始处理时间
     */
    StartTime?: string;
    /**
     * 任务处理结束时间
     */
    EndTime?: string;
    /**
     * 加固耗时（秒单位）
     */
    CostTime?: number;
    /**
     * 在线加固成功下载包
     */
    EncryptPkgUrl?: string;
    /**
     * 本次加固配置
     */
    AppletInfo?: AppletInfo;
}
/**
 * DescribeApkDetectionResult返回参数结构体
 */
export interface DescribeApkDetectionResultResponse {
    /**
     * 响应结果，ok表示正常，error表示错误
     */
    Result?: string;
    /**
     * Result为error错误时的原因说明
     */
    Reason?: string;
    /**
     * APK检测结果数组
     */
    ResultList?: Array<ResultListItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 符合要求的资源数组
     */
    ResourceSet?: Array<ResourceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrderInstance返回参数结构体
 */
export interface CreateOrderInstanceResponse {
    /**
     * 订单Id
     */
    OrderId?: string;
    /**
     * 与订单关联的资源id
     */
    ResourceId?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CancelEncryptTask请求参数结构体
 */
export interface CancelEncryptTaskRequest {
    /**
     * 加固任务结果Id
     */
    ResultId: string;
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
     * @deprecated
     */
    CosTocken?: string;
    /**
     * 密钥可访问的文件前缀人。例如：CosPrefix=test/123/666，则该密钥只能操作test/123/666为前缀的文件，例如test/123/666/1.txt
     */
    CosPrefix?: string;
    /**
     * 密钥TOCKEN信息
     */
    CosToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 渠道合作加固订单资源信息
 */
export interface Orders {
    /**
     * 订单号
     */
    OrderId?: string;
    /**
     * 平台类型整型值
     */
    PlatformType?: number;
    /**
     * 平台类型描述：  1.android加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformTypeDesc?: string;
    /**
     * 订单采购类型整型值
     */
    OrderType?: number;
    /**
     * 订单采购类型描述： 1-免费试用 2-按年收费 3-按次收费
     */
    OrderTypeDesc?: string;
    /**
     * android包年收费加固的包名
     */
    AppPkgName?: string;
    /**
     * 资源号
     */
    ResourceId?: string;
    /**
     * 资源状态整型值
     */
    ResourceStatus?: number;
    /**
     * 资源状态描述
  0-未生效、1-生效中、2-已失效。
     */
    ResourceStatusDesc?: string;
    /**
     * 订单类型为免费试用时的免费加固次数。
     */
    TestTimes?: number;
    /**
     * 资源生效时间
     */
    ValidTime?: string;
    /**
     * 资源过期时间
     */
    ExpireTime?: string;
    /**
     * 资源创建时间
     */
    CreateTime?: string;
    /**
     * 订单审批人
     */
    Approver?: string;
    /**
     * 订单审批状态整型值
     */
    ApprovalStatus?: number;
    /**
     * 订单审批状态整型值描述：0-未审批、1-审批通过、2-驳回。
     */
    ApprovalStatusDesc?: string;
    /**
     * 订单审批时间
     */
    ApprovalTime?: string;
    /**
     * 按次收费加固资源，其关联的总任务数
     */
    TimesTaskTotalCount?: number;
    /**
     * 按次收费加固资源，其关联的任务成功数
     */
    TimesTaskSuccessCount?: number;
    /**
     * 按次收费加固资源，其关联的任务失败数
     */
    TimesTaskFailCount?: number;
}
/**
 * CreateEncryptInstance请求参数结构体
 */
export interface CreateEncryptInstanceRequest {
    /**
     * 平台类型  1.android加固   2.ios源码混淆  3.sdk加固  4.applet小程序加固
     */
    PlatformType: number;
    /**
     * 订单采购类型 1-免费试用 2-按年收费 3-按次收费
     */
    OrderType: number;
    /**
     * 1-在线加固、  2-输出工具加固
     */
    EncryptOpType: number;
    /**
     * 本次加固使用的资源id
     */
    ResourceId: string;
    /**
     * 渠道合作android加固App信息
     */
    AndroidAppInfo?: AndroidAppInfo;
    /**
     * 渠道合作android加固策略信息
     */
    AndroidPlan?: AndroidPlan;
    /**
     * 小程序加固信息
     */
    AppletInfo?: AppletInfo;
    /**
     * iOS混淆信息
     */
    IOSInfo?: IOSInfo;
}
/**
 * 加固策略信息
 */
export interface PlanInfo {
    /**
     * Dex分离，0关闭，1开启
     */
    SetFile?: string;
    /**
     * apk大小优化，0关闭，1开启
     */
    ApkSizeOpt?: number;
    /**
     * Dex加固，0关闭，1开启
     */
    Dex?: number;
    /**
     * So加固，0关闭，1开启
     */
    So?: number;
    /**
     * 数据收集，0关闭，1开启
     */
    Bugly?: number;
    /**
     * 防止重打包，0关闭，1开启
     */
    AntiRepack?: number;
    /**
     * 内存保护，0关闭，1开启
     */
    Db?: number;
    /**
     * So文件信息
     */
    SoInfo?: SoInfo;
    /**
     * vmp，0关闭，1开启
     */
    AntiVMP?: number;
    /**
     * 保护so的强度，
     */
    SoType?: Array<string>;
    /**
     * 防日志泄漏，0关闭，1开启
     */
    AntiLogLeak?: number;
    /**
     * 资源防篡改，0关闭，1开启
     */
    AntiAssets?: number;
    /**
     * 防止截屏，0关闭，1开启
     */
    AntiScreenshot?: number;
    /**
     * SSL证书防窃取，0关闭，1开启
     */
    AntiSSL?: number;
    /**
     * Dex签名校验，0关闭，1开启
     */
    FileSign?: string;
    /**
     * root检测，0关闭，1开启
     */
    AntiRoot?: string;
    /**
     * Dex分离，0关闭，1开启
     * @deprecated
     */
    SeperateDex?: number;
    /**
     * Dex签名校验，0关闭，1开启
     * @deprecated
     */
    DexSig?: number;
    /**
     * root检测，0关闭，1开启
     * @deprecated
     */
    AntiQemuRoot?: number;
}
/**
 * DescribeShieldResult返回参数结构体
 */
export interface DescribeShieldResultResponse {
    /**
     * 任务状态: 0-请返回,1-已完成,2-处理中,3-处理出错,4-处理超时
     */
    TaskStatus?: number;
    /**
     * app加固前的详细信息
     */
    AppDetailInfo?: AppDetailInfo;
    /**
     * app加固后的详细信息
     */
    ShieldInfo?: ShieldInfo;
    /**
     * 状态描述
     */
    StatusDesc?: string;
    /**
     * 状态指引
     */
    StatusRef?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户绑定app的基本信息
 */
export interface BindInfo {
    /**
     * app的icon的url
     */
    AppIconUrl?: string;
    /**
     * app的名称
     */
    AppName?: string;
    /**
     * app的包名
     */
    AppPkgName?: string;
}
/**
 * UpdateClientState返回参数结构体
 */
export interface UpdateClientStateResponse {
    /**
     * 返回值
     */
    ResultCode?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * APK检测服务：非广告插件结果列表(SDK、风险插件等)
 */
export interface OptPluginListItem {
    /**
     * 非广告类型
     */
    PluginType?: string;
    /**
     * 非广告插件名称
     */
    PluginName?: string;
    /**
     * 非广告插件描述
     */
    PluginDesc?: string;
}
/**
 * 渠道合作加固结果信息
 */
export interface EncryptResults {
    /**
     * 平台类型枚举值  1-android加固   2-ios源码混淆  3-sdk加固  4-applet小程序加固
     */
    PlatformType?: number;
    /**
     * 平台类型描述  1-android加固   2-ios源码混淆  3-sdk加固  4-applet小程序加固
     */
    PlatformDesc?: string;
    /**
     * 订单采购类型枚举值， 1-免费试用 2-按年收费 3-按次收费
     */
    OrderType?: number;
    /**
     * 订单采购类型 描述：1-免费试用 2-按年收费 3-按次收费
     */
    OrderTypeDesc?: string;
    /**
     * 枚举值：1-在线加固 或 2-输出工具加固
     */
    EncryptOpType?: number;
    /**
     * 描述：1-在线加固 或 2-输出工具加固
     */
    EncryptOpTypeDesc?: string;
    /**
     * 与当前任务关联的资源Id
     */
    ResourceId?: string;
    /**
     * 与当前任务关联的订单Id
     */
    OrderId?: string;
    /**
     * 对应PlatformType平台类型值   1-android加固结果
     */
    AndroidResult?: AndroidResult;
    /**
     * 对应PlatformType平台类型值   2-ios源码混淆加固结果
     */
    IOSResult?: IOSResult;
    /**
     * 对应PlatformType平台类型值   3-sdk加固结果
     */
    SDKResult?: SDKResult;
    /**
     * 对应PlatformType平台类型值   4-applet小程序加固结果
     */
    AppletResult?: AppletResult;
}
