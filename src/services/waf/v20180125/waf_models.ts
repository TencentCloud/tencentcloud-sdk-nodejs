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
 * ModifyWebshellStatus请求参数结构体
 */
export interface ModifyWebshellStatusRequest {
  /**
   * 域名webshell状态
   */
  Webshell: WebshellStatus
}

/**
 * waf模块的规格
 */
export interface WafRuleLimit {
  /**
   * 自定义CC的规格
   */
  CC: number
  /**
   * 自定义策略的规格
   */
  CustomRule: number
  /**
   * 黑白名单的规格
   */
  IPControl: number
  /**
   * 信息防泄漏的规格
   */
  AntiLeak: number
  /**
   * 防篡改的规格
   */
  AntiTamper: number
  /**
   * 紧急CC的规格
   */
  AutoCC: number
  /**
   * 地域封禁的规格
   */
  AreaBan: number
  /**
   * 自定义CC中配置session
   */
  CCSession: number
  /**
   * AI的规格
   */
  AI: number
  /**
   * 精准白名单的规格
   */
  CustomWhite: number
  /**
   * api安全的规格
   */
  ApiSecurity: number
  /**
   * 客户端流量标记的规格
   */
  ClientMsg: number
  /**
   * 流量标记的规格
   */
  TrafficMarking: number
}

/**
 * DescribeUserClbWafRegions返回参数结构体
 */
export interface DescribeUserClbWafRegionsResponse {
  /**
   * 地域（标准的ap-格式）列表
   */
  Data?: Array<string>
  /**
   * 包含详细属性的地域信息
   */
  RichDatas?: Array<ClbWafRegionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAntiFakeUrl请求参数结构体
 */
export interface AddAntiFakeUrlRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 名称
   */
  Name: string
  /**
   * uri
   */
  Uri: string
}

/**
 * ModifyIpAccessControl请求参数结构体
 */
export interface ModifyIpAccessControlRequest {
  /**
   * 具体域名如：test.qcloudwaf.com
全局域名为：global
   */
  Domain: string
  /**
   * ip参数列表
   */
  IpList: Array<string>
  /**
   * 42为黑名单，40为白名单
   */
  ActionType: number
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00））
   * @deprecated
   */
  ValidTS?: number
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
   */
  Edition?: string
  /**
   * 是否为批量防护IP黑白名单，当为批量防护IP黑白名单时，取值为batch，否则为空
   */
  SourceType?: string
  /**
   * 备注
   */
  Note?: string
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时配置详情
   */
  JobDateTime?: JobDateTime
}

/**
 * DescribeApiListVersionTwo返回参数结构体
 */
export interface DescribeApiListVersionTwoResponse {
  /**
   * api资产列表
   */
  Data?: Array<ApiAsset>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePeakValue返回参数结构体
 */
export interface DescribePeakValueResponse {
  /**
   * QPS峰值
   */
  Access?: number
  /**
   * 上行带宽峰值，单位B
   */
  Up?: number
  /**
   * 下行带宽峰值，单位B
   */
  Down?: number
  /**
   * Web攻击总数
   */
  Attack?: number
  /**
   * CC攻击总数
   */
  Cc?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * waf产品
 */
export interface ProductInfo {
  /**
   * 产品名称
   */
  Name?: string
  /**
   * 版本
   */
  Value?: string
}

/**
 * 出参
 */
export interface DescribeAntiLeakageItem {
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 名称
   */
  Name?: string
  /**
   * 状态值
   */
  Status?: number
  /**
   * 动作
   */
  Action?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 匹配条件
   */
  Strategies?: Array<DescribeAntiInfoLeakRulesStrategyItem>
  /**
   * 匹配的URL
   */
  Uri?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
}

/**
 * 负载均衡器
 */
export interface LoadBalancerPackageNew {
  /**
   * 监听id
   */
  ListenerId: string
  /**
   * 监听名
   */
  ListenerName: string
  /**
   * 负载均衡id
   */
  LoadBalancerId: string
  /**
   * 负载均衡名
   */
  LoadBalancerName: string
  /**
   * 协议
   */
  Protocol: string
  /**
   * 地区
"多伦多": "ca",
    "广州": "gz",
    "成都": "cd",
    "福州": "fzec",
    "深圳": "szx",
    "印度": "in",
    "济南": "jnec",
    "重庆": "cq",
    "天津": "tsn",
    "欧洲东北": "ru",
    "南京": "nj",
    "美国硅谷": "usw",
    "泰国": "th",
    "广州Open": "gzopen",
    "深圳金融": "szjr",
    "法兰克福": "de",
    "日本": "jp",
    "弗吉尼亚": "use",
    "北京": "bj",
    "中国香港": "hk",
    "杭州": "hzec",
    "北京金融": "bjjr",
    "上海金融": "shjr",
    "台北": "tpe",
    "首尔": "kr",
    "上海": "sh",
    "新加坡": "sg",
    "清远": "qy"
   */
  Region: string
  /**
   * 接入IP
   */
  Vip: string
  /**
   * 接入端口
   */
  Vport: number
  /**
   * 地域
   */
  Zone: string
  /**
   * VPCID
   */
  NumericalVpcId: number
  /**
   * CLB类型
   */
  LoadBalancerType: string
  /**
   * 负载均衡器的域名
   */
  LoadBalancerDomain?: string
}

/**
 * cc规则
 */
export interface CCRuleItem {
  /**
   * 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截，24表示JS校验
   */
  ActionType?: number
  /**
   * 高级模式
   */
  Advance?: number
  /**
   * 时间周期
   */
  Interval?: number
  /**
   * 限制次数
   */
  Limit?: number
  /**
   * 匹配方法
   */
  MatchFunc?: number
  /**
   * 名称
   */
  Name?: string
  /**
   * 优先级
   */
  Priority?: number
  /**
   * 状态
   */
  Status?: number
  /**
   * 更新时间戳
   */
  TsVersion?: number
  /**
   * 匹配url
   */
  Url?: string
  /**
   * 策略动作有效时间
   */
  ValidTime?: number
  /**
   * 高级参数
   */
  OptionsArr?: string
  /**
   * url长度
   */
  Length?: number
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 事件id
   */
  EventId?: string
  /**
   * 关联的Session规则
   */
  SessionApplied?: Array<number | bigint>
  /**
   * 创建时间
   */
  CreateTime?: number
}

/**
 * DescribeCertificateVerifyResult返回参数结构体
 */
export interface DescribeCertificateVerifyResultResponse {
  /**
   * 状态码。
0：证书正常
310：证书异常
311：证书过期
312：证书即将过期
   */
  Status?: number
  /**
   * 错误详情
   */
  Detail?: Array<string>
  /**
   * 过期时间
   */
  NotAfter?: string
  /**
   * 证书是否改变。
0：未变化
1：有变化
   */
  Changed?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserSignatureRule返回参数结构体
 */
export interface ModifyUserSignatureRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
  /**
   * 修改状态：0为成功
   */
  ModifyCode?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWafAutoDenyRules请求参数结构体
 */
export interface DescribeWafAutoDenyRulesRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 实例Id
   */
  InstanceId?: string
}

/**
 * GenerateDealsAndPayNew请求参数结构体
 */
export interface GenerateDealsAndPayNewRequest {
  /**
   * 计费下单入参
   */
  Goods: Array<GoodNews>
}

/**
 * DeleteCustomWhiteRule返回参数结构体
 */
export interface DeleteCustomWhiteRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHostMode返回参数结构体
 */
export interface ModifyHostModeResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAttackDownloadRecords请求参数结构体
 */
export type GetAttackDownloadRecordsRequest = null

/**
 * 重保防护资源信息
 */
export interface MajorEventsPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 申请数量
   */
  InquireNum?: number
  /**
   * 使用数量
   */
  UsedNum?: number
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * 计费项
   */
  BillingItem?: string
  /**
   * 护网包状态
   */
  HWState?: number
}

/**
 * DescribeDomainRules请求参数结构体
 */
export interface DescribeDomainRulesRequest {
  /**
   * 需要查询的域名
   */
  Domain?: string
}

/**
 * DescribeScanIp请求参数结构体
 */
export interface DescribeScanIpRequest {
  /**
   * 要查询的ip地址
   */
  Ip: string
}

/**
 * DeleteAccessExport返回参数结构体
 */
export interface DeleteAccessExportResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModuleStatus返回参数结构体
 */
export interface DescribeModuleStatusResponse {
  /**
   * WEB安全规则是否开启
   */
  WebSecurity?: number
  /**
   * 访问控制规则是否开启
   */
  AccessControl?: number
  /**
   * CC防护是否开启
   */
  CcProtection?: number
  /**
   * 网页防篡改是否开启
   */
  AntiTamper?: number
  /**
   * 信息防泄漏是否开启
   */
  AntiLeakage?: number
  /**
   * API安全是否开启
   */
  ApiProtection?: number
  /**
   * 限流模块开关
   */
  RateLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于 DescribeAccessIndex 的出参
 */
export interface AccessKeyValueInfo {
  /**
   * 需要配置键值或者元字段索引的字段
   */
  Key?: string
  /**
   * 字段的索引描述信息
   */
  Value?: AccessValueInfo
}

/**
 * Key-Value的形式，Value为Int
 */
export interface KVInt {
  /**
   * Key
   */
  Key?: string
  /**
   * Value
   */
  Value?: number
}

/**
 * AddAntiInfoLeakRules请求参数结构体
 */
export interface AddAntiInfoLeakRulesRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则名称
   */
  Name: string
  /**
   * 动作，0（告警）、1（替换）、2（仅显示前四位）、3（仅显示后四位）、4（阻断）
   */
  ActionType: number
  /**
   * 策略详情
   */
  Strategies: Array<StrategyForAntiInfoLeak>
  /**
   * 网址
   */
  Uri?: string
}

/**
 * DeleteAttackWhiteRule返回参数结构体
 */
export interface DeleteAttackWhiteRuleResponse {
  /**
   * 删除失败的规则序号组
   */
  FailIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebshellStatus请求参数结构体
 */
export interface DescribeWebshellStatusRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * GetAttackHistogram返回参数结构体
 */
export interface GetAttackHistogramResponse {
  /**
   * 统计详情
   */
  Data?: Array<LogHistogramInfo>
  /**
   * 时间段大小
   */
  Period?: number
  /**
   * 统计的条目数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤数组
 */
export interface FiltersItemNew {
  /**
   * 字段名； 过滤
子订单号过滤通过name 为：DealName； value为子订单号
   */
  Name: string
  /**
   * 过滤值
   */
  Values: Array<string>
  /**
   * 是否精确查找
   */
  ExactMatch: boolean
}

/**
 * DeleteSpartaProtection返回参数结构体
 */
export interface DeleteSpartaProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 饼图数据类型
 */
export interface PiechartItem {
  /**
   * 类型
   */
  Type?: string
  /**
   * 数量
   */
  Count?: number
}

/**
 * DeleteHost返回参数结构体
 */
export interface DeleteHostResponse {
  /**
   * 域名删除结果。Code表示状态码，Message表示详细信息。
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApiAnalyzeStatus返回参数结构体
 */
export interface ModifyApiAnalyzeStatusResponse {
  /**
   * 已经开启的数量,如果返回值为3（大于支持的域名开启数量），则表示开启失败
   */
  Count?: number
  /**
   * 不支持开启的域名列表
   */
  UnSupportedList?: Array<string>
  /**
   * 开启/关闭失败的域名列表
   */
  FailDomainList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAttackWhiteRule请求参数结构体
 */
export interface ModifyAttackWhiteRuleRequest {
  /**
   * 规则序号
   */
  RuleId: number
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则状态
   */
  Status: number
  /**
   * 匹配规则项列表
   */
  Rules: Array<UserWhiteRuleItem>
  /**
   * 规则Id
   */
  SignatureId?: string
  /**
   * 编辑的加白的规则ID列表
   */
  SignatureIds?: Array<string>
  /**
   * 加白的大类规则ID
   */
  TypeIds?: Array<string>
  /**
   * 0表示按照特定规则ID加白, 1表示按照规则类型加白
   */
  Mode?: number
  /**
   * 规则名
   */
  Name?: string
}

/**
 * 负载均衡型WAF域名信息
 */
export interface HostRecord {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名唯一ID
   */
  DomainId: string
  /**
   * 主域名，入参时为空
   */
  MainDomain: string
  /**
   * 规则引擎防护模式。
0：观察模式
1：拦截模式
   */
  Mode: number
  /**
   * waf和负载均衡器的绑定关系。
0：未绑定
1：已绑定
   */
  Status: number
  /**
   * clbwaf域名监听器状态。
0：操作成功
4：正在绑定LB
6：正在解绑LB 
7：解绑LB失败 
8：绑定LB失败 
10：内部错误
   */
  State: number
  /**
   * 规则引擎和AI引擎防护模式联合状态。
1:初始状态,规则引擎拦截&&AI引擎未操作开关状态
10：规则引擎观察&&AI引擎关闭模式 
11：规则引擎观察&&AI引擎观察模式 
12：规则引擎观察&&AI引擎拦截模式 
20：规则引擎拦截&&AI引擎关闭模式 
21：规则引擎拦截&&AI引擎观察模式 
22：规则引擎拦截&&AI引擎拦截模式
   */
  Engine: number
  /**
   * waf前是否部署有七层代理服务。 0：没有部署代理服务 1：有部署代理服务，waf将使用XFF获取客户端IP 2：有部署代理服务，waf将使用remote_addr获取客户端IP 3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP
   */
  IsCdn: number
  /**
   * 绑定的负载均衡器信息列表
   */
  LoadBalancerSet: Array<LoadBalancer>
  /**
   * 域名绑定的LB的地域，以逗号分割多个地域
   */
  Region: string
  /**
   * 域名所属实例类型。负载均衡型WAF为"clb-waf"
   */
  Edition: string
  /**
   * 负载均衡型WAF域名的流量模式。
1：清洗模式
0：镜像模式
   */
  FlowMode: number
  /**
   * 是否开启访问日志。
1：开启
0：关闭
   */
  ClsStatus: number
  /**
   * 防护等级，可选值100,200,300
   */
  Level?: number
  /**
   * 域名需要下发到的cdc集群列表。仅CDC场景下填充
   */
  CdcClusters?: Array<string>
  /**
   * 应用型负载均衡类型，默认clb。 
clb：七层负载均衡器类型 
apisix：apisix网关型
tsegw：云原生API网关
scf：云函数
   */
  AlbType?: string
  /**
   * IsCdn=3时，需要填此参数，表示自定义header
   */
  IpHeaders?: Array<string>
  /**
   * 规则引擎类型。
1: menshen
2: tiga
   */
  EngineType?: number
  /**
   * 云类型。
public:公有云
private:私有云
hybrid:混合云
   */
  CloudType?: string
  /**
   * 域名备注信息
   */
  Note?: string
}

/**
 * ModifyCustomRule返回参数结构体
 */
export interface ModifyCustomRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FreshAntiFakeUrl请求参数结构体
 */
export interface FreshAntiFakeUrlRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * Id
   */
  Id: number
}

/**
 * ModifyAreaBanStatus请求参数结构体
 */
export interface ModifyAreaBanStatusRequest {
  /**
   * 需要修改的域名
   */
  Domain: string
  /**
   * 状态值，0表示关闭，1表示开启
   */
  Status: number
}

/**
 * waf斯巴达-编辑防护域名中的端口结构
 */
export interface SpartaProtectionPort {
  /**
   * 分配的服务器id
   */
  NginxServerId: number
  /**
   * 端口
   */
  Port: string
  /**
   * 协议
   */
  Protocol: string
  /**
   * 后端端口
   */
  UpstreamPort: string
  /**
   * 后端协议
   */
  UpstreamProtocol: string
}

/**
 * PeakPoints数组项
 */
export interface PeakPointsItem {
  /**
   * 秒级别时间戳
   */
  Time?: number
  /**
   * QPS
   */
  Access?: number
  /**
   * 上行带宽峰值，单位B
   */
  Up?: number
  /**
   * 下行带宽峰值，单位B
   */
  Down?: number
  /**
   * Web攻击次数
   */
  Attack?: number
  /**
   * CC攻击次数
   */
  Cc?: number
  /**
   * Bot qps
   */
  BotAccess?: number
  /**
   * WAF返回给客户端状态码5xx次数
   */
  StatusServerError?: number
  /**
   * WAF返回给客户端状态码4xx次数
   */
  StatusClientError?: number
  /**
   * WAF返回给客户端状态码302次数
   */
  StatusRedirect?: number
  /**
   * WAF返回给客户端状态码202次数
   */
  StatusOk?: number
  /**
   * 源站返回给WAF状态码5xx次数
   */
  UpstreamServerError?: number
  /**
   * 源站返回给WAF状态码4xx次数
   */
  UpstreamClientError?: number
  /**
   * 源站返回给WAF状态码302次数
   */
  UpstreamRedirect?: number
  /**
   * 黑名单次数
   */
  BlackIP?: number
  /**
   * 防篡改次数
   */
  Tamper?: number
  /**
   * 信息防泄露次数
   */
  Leak?: number
  /**
   * 访问控制
   */
  ACL?: number
  /**
   * 小程序 qps
   */
  WxAccess?: number
  /**
   * 小程序请求数
   */
  WxCount?: number
  /**
   * 小程序上行带宽峰值，单位B
   */
  WxUp?: number
  /**
   * 小程序下行带宽峰值，单位B
   */
  WxDown?: number
}

/**
 * DescribeSession请求参数结构体
 */
export interface DescribeSessionRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * clb-waf或者sparta-waf
   */
  Edition?: string
}

/**
 * DescribePolicyStatus请求参数结构体
 */
export interface DescribePolicyStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * clb-waf或者saas-waf
   */
  Edition: string
}

/**
 * DescribeAccessFastAnalysis请求参数结构体
 */
export interface DescribeAccessFastAnalysisRequest {
  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number
  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number
  /**
   * 查询语句，语句长度最大为4096，由于本接口是分析接口，如果无过滤条件，必须传 * 表示匹配所有，参考CLS的分析统计语句的文档
   */
  Query: string
  /**
   * 需要分析统计的字段名
   */
  FieldName: string
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   * @deprecated
   */
  TopicId?: string
  /**
   * 排序字段,升序asc,降序desc，默认降序desc
   */
  Sort?: string
  /**
   * 返回的top数，默认返回top5
   */
  Count?: number
}

/**
 * DeleteIpAccessControl请求参数结构体
 */
export interface DeleteIpAccessControlRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 删除的ip数组
   */
  Items: Array<string>
  /**
   * 若IsId字段为True，则Items列表元素需为Id，否则为IP
   */
  IsId?: boolean
  /**
   * 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定ip名单
   */
  DeleteAll?: boolean
  /**
   * 是否为多域名黑白名单
   */
  SourceType?: string
  /**
   * IP黑白名单类型，40为IP白名单，42为IP黑名单
   */
  ActionType?: number
}

/**
 * DescribeDomainCountInfo返回参数结构体
 */
export interface DescribeDomainCountInfoResponse {
  /**
   * 域名总数
   */
  AllDomain?: number
  /**
   * 最近发现时间
   */
  UpdateTime?: string
  /**
   * 接入域名总数
   */
  WafDomainCount?: number
  /**
   * 剩下配额
   */
  LeftDomainCount?: number
  /**
   * 开启防护域名数
   */
  OpenWafDomain?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHostMode请求参数结构体
 */
export interface ModifyHostModeRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID
   */
  DomainId: string
  /**
   * 防护状态：
10：规则观察&&AI关闭模式，11：规则观察&&AI观察模式，12：规则观察&&AI拦截模式
20：规则拦截&&AI关闭模式，21：规则拦截&&AI观察模式，22：规则拦截&&AI拦截模式
   */
  Mode: number
  /**
   * 0:修改防护模式，1:修改AI
   */
  Type?: number
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 实例类型
   */
  Edition?: string
}

/**
 * ModifyAntiInfoLeakRuleStatus请求参数结构体
 */
export interface ModifyAntiInfoLeakRuleStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则
   */
  RuleId: number
  /**
   * 状态
   */
  Status: number
}

/**
 * DescribeCiphersDetail返回参数结构体
 */
export interface DescribeCiphersDetailResponse {
  /**
   * 加密套件信息
   */
  Ciphers?: Array<TLSCiphers>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomRuleList请求参数结构体
 */
export interface DescribeCustomRuleListRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 偏移
   */
  Offset: number
  /**
   * 容量
   */
  Limit: number
  /**
   * 过滤数组,name可以是如下的值： RuleID,RuleName,Match
   */
  Filters?: Array<FiltersItemNew>
  /**
   * asc或者desc
   */
  Order?: string
  /**
   * exp_ts或者mod_ts
   */
  By?: string
  /**
   * 查询的域名列表,访问控制页面不用传
   */
  DomainList?: Array<string>
}

/**
 * DeleteIpAccessControlV2返回参数结构体
 */
export interface DeleteIpAccessControlV2Response {
  /**
   * 在批量删除的时候表示删除失败的条数
   */
  FailedCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PostAttackDownloadTask返回参数结构体
 */
export interface PostAttackDownloadTaskResponse {
  /**
   * 任务task id
   */
  Flow?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackWhiteRule请求参数结构体
 */
export interface DescribeAttackWhiteRuleRequest {
  /**
   * 需要查询的域名
   */
  Domain: string
  /**
   * 分页
   */
  Offset: number
  /**
   * 每页容量
   */
  Limit: number
  /**
   * 排序的字段，支持user_id, signature_id, modify_time
   */
  By?: string
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 筛选条件，支持SignatureId, MatchContent
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * 防信息泄露的匹配条件结构体
 */
export interface StrategyForAntiInfoLeak {
  /**
   * 匹配条件，returncode（响应码）、keywords（关键字）、information（敏感信息）
   */
  Field: string
  /**
   * 逻辑符号，固定取值为contains
   */
  CompareFunc: string
  /**
   * 匹配内容。
以下三个对应Field为information时可取的匹配内容：
idcard（身份证）、phone（手机号）、bankcard（银行卡）。
以下为对应Field为returncode时可取的匹配内容：
400（状态码400）、403（状态码403）、404（状态码404）、4xx（其它4xx状态码）、500（状态码500）、501（状态码501）、502（状态码502）、504（状态码504）、5xx（其它5xx状态码）。
当对应Field为keywords时由用户自己输入匹配内容。

   */
  Content: string
}

/**
 * AddSpartaProtection返回参数结构体
 */
export interface AddSpartaProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserDomainInfo请求参数结构体
 */
export type DescribeUserDomainInfoRequest = null

/**
 * 混合云节点资源信息
 */
export interface HybridPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 申请数量
   */
  InquireNum?: number
  /**
   * 使用数量
   */
  UsedNum?: number
  /**
   * 续费标志
   */
  RenewFlag?: number
}

/**
 * 数据封装
 */
export interface IpAccessControlData {
  /**
   * ip黑白名单
   */
  Res?: Array<IpAccessControlItem>
  /**
   * 计数
   */
  TotalCount?: number
}

/**
 * DescribeHost返回参数结构体
 */
export interface DescribeHostResponse {
  /**
   * 域名详情
   */
  Host?: HostRecord
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWafAutoDenyRules返回参数结构体
 */
export interface ModifyWafAutoDenyRulesResponse {
  /**
   * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserSignatureRule返回参数结构体
 */
export interface DescribeUserSignatureRuleResponse {
  /**
   * 规则总数
   */
  Total?: number
  /**
   * 规则列表
   */
  Rules?: Array<UserSignatureRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于DescribeAccessIndex接口的出参
 */
export interface AccessValueInfo {
  /**
   * 字段类型，目前支持的类型有：long、text、double
   */
  Type?: string
  /**
   * 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符
   */
  Tokenizer?: string
  /**
   * 字段是否开启分析功能
   */
  SqlFlag?: boolean
  /**
   * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainZH?: boolean
}

/**
 * 规则列表详情
 */
export interface Rule {
  /**
   * 规则id
   */
  Id?: number
  /**
   * 规则类型
   */
  Type?: string
  /**
   * 规则等级
   */
  Level?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 规则防护的CVE编号
   */
  CVE?: string
  /**
   * 规则的状态
   */
  Status?: number
  /**
   * 规则修改的时间
   */
  ModifyTime?: string
  /**
   * 门神规则新增/更新时间
   */
  AddTime?: string
}

/**
 * 规则的匹配条件结构体
 */
export interface Strategy {
  /**
   * 匹配字段

    匹配字段不同，相应的匹配参数、逻辑符号、匹配内容有所不同具体如下所示：
<table><thead><tr><th>匹配字段</th><th>匹配参数</th><th>逻辑符号</th><th>匹配内容</th></tr></thead><tbody><tr><td>IP（来源IP）</td><td>不支持参数</td><td>ipmatch（匹配）<br/>ipnmatch（不匹配）</td><td>多个IP以英文逗号隔开,最多20个</td></tr><tr><td>IPV6（来源IPv6）</td><td>不支持参数</td><td>ipmatch（匹配）<br/>ipnmatch（不匹配）</td><td>支持单个IPV6地址</td></tr><tr><td>Referer（Referer）</td><td>不支持参数</td><td>empty（内容为空）<br/>null（不存在）<br/>eq（等于）<br/>neq（不等于）<br/>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>URL（请求路径）</td><td>不支持参数</td><td>eq（等于）<br/>neq（不等于）<br/>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）<br/></td><td>请以/开头,512个字符以内</td></tr><tr><td>UserAgent（UserAgent）</td><td>不支持参数</td><td>同匹配字段<font color="Red">Referer</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>HTTP_METHOD（HTTP请求方法）</td><td>不支持参数</td><td>eq（等于）<br/>neq（不等于）</td><td>请输入方法名称,建议大写</td></tr><tr><td>QUERY_STRING（请求字符串）</td><td>不支持参数</td><td>同匹配字段<font color="Red">请求路径</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET（GET参数值）</td><td>支持参数录入</td><td>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET_PARAMS_NAMES（GET参数名）</td><td>不支持参数</td><td>exsit（存在参数）<br/>nexsit（不存在参数）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>POST（POST参数值）</td><td>支持参数录入</td><td>同匹配字段<font color="Red">GET参数值</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET_POST_NAMES（POST参数名）</td><td>不支持参数</td><td>同匹配字段<font color="Red">GET参数名</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>POST_BODY（完整BODY）</td><td>不支持参数</td><td>同匹配字段<font color="Red">请求路径</font>逻辑符号</td><td>请输入BODY内容,512个字符以内</td></tr><tr><td>COOKIE（Cookie）</td><td>不支持参数</td><td>empty（内容为空）<br/>null（不存在）<br/>rematch（正则匹配）</td><td><font color="Red">暂不支持</font></td></tr><tr><td>GET_COOKIES_NAMES（Cookie参数名）</td><td>不支持参数</td><td>同匹配字段<font color="Red">GET参数名</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>ARGS_COOKIE（Cookie参数值）</td><td>支持参数录入</td><td>同匹配字段<font color="Red">GET参数值</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET_HEADERS_NAMES（Header参数名）</td><td>不支持参数</td><td>exsit（存在参数）<br/>nexsit（不存在参数）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）</td><td>请输入内容,建议小写,512个字符以内</td></tr><tr><td>ARGS_HEADER（Header参数值）</td><td>支持参数录入</td><td>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>CONTENT_LENGTH（Content-length）</td><td>支持参数录入</td><td>numgt（数值大于）<br/>numlt（数值小于）<br/>numeq（数值等于）<br/></td><td>请输入0-9999999999999之间的整数</td></tr><tr><td>IP_GEO（来源IP归属地）</td><td>支持参数录入</td><td>geo_in（属于）<br/>geo_not_in（不属于）<br/></td><td>请输入内容,10240字符以内，格式为序列化的JSON，格式为：[{"Country":"中国","Region":"广东","City":"深圳"}]</td></tr>
</tbody></table>
   */
  Field: string
  /**
   * 逻辑符号 

    逻辑符号一共分为以下几种类型：
        empty （ 内容为空）
        null （不存在）
        eq （ 等于）
        neq （ 不等于）
        contains （ 包含）
        ncontains （ 不包含）
        strprefix （ 前缀匹配）
        strsuffix （ 后缀匹配）
        len_eq （ 长度等于）
        len_gt （ 长度大于）
        len_lt （ 长度小于）
        ipmatch （ 属于）
        ipnmatch （ 不属于）
        numgt （ 数值大于）
        numlt （ 数值小于）
        numeq （ 数值等于）
        geo_in （ IP地理属于）
        geo_not_in （ IP地理不属于）
    各匹配字段对应的逻辑符号不同，详见上述匹配字段表格

   */
  CompareFunc: string
  /**
   * 匹配内容

    目前 当匹配字段为COOKIE（Cookie）时，不需要输入 匹配内容其他都需要

   */
  Content: string
  /**
   * 匹配参数

    配置参数一共分2种类型 不支持参数与支持参数
    当匹配字段为以下4个时，匹配参数才能录入，否则不支持该参数
        GET（GET参数值）		
        POST（POST参数值）		
        ARGS_COOKIE（Cookie参数值）		
        ARGS_HEADER（Header参数值）

   */
  Arg: string
  /**
   * 0：大小写敏感
1：大小写不敏感
   */
  CaseNotSensitive?: number
}

/**
 * UpsertCCRule返回参数结构体
 */
export interface UpsertCCRuleResponse {
  /**
   * 一般为null
   */
  Data?: string
  /**
   * 操作的RuleId
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHost请求参数结构体
 */
export interface DescribeHostRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID
   */
  DomainId: string
  /**
   * 实例ID
   */
  InstanceID?: string
}

/**
 * DescribeAccessIndex
 */
export interface AccessFullTextInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive?: boolean
  /**
   * 全文索引的分词符，字符串中每个字符代表一个分词符
   */
  Tokenizer?: string
  /**
   * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainZH?: boolean
}

/**
 * DeleteCustomRule请求参数结构体
 */
export interface DeleteCustomRuleRequest {
  /**
   * 删除的域名
   */
  Domain: string
  /**
   * 删除的规则ID
   */
  RuleId: string
  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
  /**
   * 批量删除的规则列表
   */
  DomainRuleIdList?: Array<DomainRuleId>
}

/**
 * DescribeUserSignatureRuleV2请求参数结构体
 */
export interface DescribeUserSignatureRuleV2Request {
  /**
   * 需要查询的域名
   */
  Domain: string
  /**
   * 分页
   */
  Offset: number
  /**
   * 每页容量
   */
  Limit: number
  /**
   * 排序字段，支持 signature_id, modify_time
   */
  By?: string
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 筛选条件，支持 MainClassName，SubClassID ,CveID, Status, ID;  ID为规则id
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * ModifyApiSecEventChange请求参数结构体
 */
export interface ModifyApiSecEventChangeRequest {
  /**
   * 变更状态，1:新发现，2，确认中，3，已确认，4，已下线，5，已忽略
   */
  Mode?: string
  /**
   * 处理人
   */
  UserName?: string
  /**
   * 备注，有长度显示1k
   */
  Remark?: string
  /**
   * 批量操作的事件列表
   */
  EventIdList?: Array<string>
  /**
   * 批量操作的api列表
   */
  ApiNameList?: Array<ApiSecKey>
  /**
   * 判断是否删除，包括删除事件和删除资产
   */
  IsDelete?: boolean
  /**
   * 判断是否是更新api的备注，更新api备注的时候，为true
   */
  UpdateApiRemark?: boolean
}

/**
 * 规则执行的时间结构体
 */
export interface JobDateTime {
  /**
   * 定时执行的时间参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timed?: Array<TimedJob>
  /**
   * 周期执行的时间参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cron?: Array<CronJob>
  /**
   * 时区
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeTZone?: string
}

/**
 * DescribeHosts请求参数结构体
 */
export interface DescribeHostsRequest {
  /**
   * 防护域名，如果是要查询某一具体的防护域名则传入此参数，要求是准确的域名，此参数不支持模糊搜索
   */
  Domain?: string
  /**
   * 防护域名ID，如果是要查询某一具体的防护域名则传入此参数，要求是准确的域名ID，此参数不支持模糊搜索
   */
  DomainId?: string
  /**
   * 搜索条件，根据此参数对域名做模糊搜索
   */
  Search?: string
  /**
   * 复杂的搜索条件
   */
  Item?: SearchItem
  /**
   * 实例id
   */
  InstanceID?: string
}

/**
 * ModifyCustomWhiteRuleStatus请求参数结构体
 */
export interface ModifyCustomWhiteRuleStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * 开关的状态，1是开启、0是关闭
   */
  Status: number
}

/**
 * ModifyAreaBanRule请求参数结构体
 */
export interface ModifyAreaBanRuleRequest {
  /**
   * 需要修改的域名
   */
  Domain: string
  /**
   * 需要新增的封禁地域
   */
  Areas: Array<Area>
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType: string
  /**
   * 定时任务配置
   */
  JobDateTime: JobDateTime
  /**
   * 地域信息的语言，支持cn、en，默认为中文cn
   */
  Lang?: string
}

/**
 * Clb-waf地域信息
 */
export interface ClbWafRegionItem {
  /**
   * 地域ID
   */
  Id?: string
  /**
   * 地域中文说明
   */
  Text?: string
  /**
   * 地域英文全拼
   */
  Value?: string
  /**
   * 地域编码
   */
  Code?: string
}

/**
 * DescribeFindDomainList请求参数结构体
 */
export interface DescribeFindDomainListRequest {
  /**
   * 分页
   */
  Offset: number
  /**
   * 每页容量
   */
  Limit: number
  /**
   * 过滤条件
   */
  Key: string
  /**
   * 是否接入waf；传"1"返回接入域名的详情，传"0"返回未接入域名的详情，传""返回接入和未接入域名的详情
   */
  IsWafDomain: string
  /**
   * 排序参数
   */
  By?: string
  /**
   * 排序方式
   */
  Order?: string
}

/**
 * ModifyInstanceElasticMode返回参数结构体
 */
export interface ModifyInstanceElasticModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 需要开启/关闭API安全的 实例+域名 组合实体
 */
export interface TargetEntity {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 域名
   */
  Domain?: string
}

/**
 * DeleteHost请求参数结构体
 */
export interface DeleteHostRequest {
  /**
   * 删除的域名列表
   */
  HostsDel: Array<HostDel>
}

/**
 * DescribeDomainCountInfo请求参数结构体
 */
export type DescribeDomainCountInfoRequest = null

/**
 * DescribeCustomWhiteRule返回参数结构体
 */
export interface DescribeCustomWhiteRuleResponse {
  /**
   * 规则详情
   */
  RuleList?: Array<DescribeCustomRulesRspRuleListItem>
  /**
   * 规则条数
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySpartaProtection请求参数结构体
 */
export interface ModifySpartaProtectionRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 必填项。域名唯一ID
   */
  DomainId: string
  /**
   * 必填项。域名所属实例id
   */
  InstanceID: string
  /**
   * 证书类型。0：仅配置HTTP监听端口，没有证书1：证书来源为自有证书2：证书来源为托管证书
   */
  CertType?: number
  /**
   * CertType为1时，需要填充此参数，表示自有证书的证书链
   */
  Cert?: string
  /**
   * CertType为1时，需要填充此参数，表示自有证书的私钥
   */
  PrivateKey?: string
  /**
   * CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  SSLId?: string
  /**
   * waf前是否部署有七层代理服务。0：没有部署代理服务1：有部署代理服务，waf将使用XFF获取客户端IP2：有部署代理服务，waf将使用remote_addr获取客户端IP3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP
   */
  IsCdn?: number
  /**
   * 服务配置有HTTPS端口时，HTTPS的回源协议。
http：使用http协议回源，和HttpsUpstreamPort配合使用
https：使用https协议回源
   */
  UpstreamScheme?: string
  /**
   * HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段
   */
  HttpsUpstreamPort?: string
  /**
   * 是否开启HTTP强制跳转到HTTPS。0：不强制跳转1：开启强制跳转
   */
  HttpsRewrite?: number
  /**
   * 回源类型。0：通过IP回源1：通过域名回源
   */
  UpstreamType?: number
  /**
   * 域名回源时的回源域名。UpstreamType为1时，需要填充此字段
   */
  UpstreamDomain?: string
  /**
   * IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段
   */
  SrcList?: Array<string>
  /**
   * 是否开启HTTP2，需要开启HTTPS协议支持。0：关闭1：开启
   */
  IsHttp2?: number
  /**
   * 是否开启WebSocket支持。0：关闭1：开启
   */
  IsWebsocket?: number
  /**
   * 回源负载均衡策略。0：轮询1：IP hash2：加权轮询
   */
  LoadBalance?: number
  /**
   * 待废弃，可不填。是否开启灰度，0表示不开启灰度。
   */
  IsGray?: number
  /**
   * 域名所属实例类型
   */
  Edition?: string
  /**
   * 端口信息，可通过DescribeDomains接口获取具体参数信息。
   */
  Ports?: Array<SpartaProtectionPort>
  /**
   * 是否开启长连接。0： 短连接1： 长连接
   */
  IsKeepAlive?: string
  /**
   * 待废弃。目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP
   */
  Anycast?: number
  /**
   * 回源IP列表各IP的权重，和SrcList一一对应。当且仅当UpstreamType为0，并且SrcList有多个IP，并且LoadBalance为2时需要填写，否则填 []
   */
  Weights?: Array<number | bigint>
  /**
   * 是否开启主动健康检测。0：不开启1：开启
   */
  ActiveCheck?: number
  /**
   * TLS版本信息
   */
  TLSVersion?: number
  /**
   * 加密套件信息
   */
  Ciphers?: Array<number | bigint>
  /**
   * 加密套件模板。0：不支持选择，使用默认模板  1：通用型模板 2：安全型模板3：自定义模板
   */
  CipherTemplate?: number
  /**
   * WAF与源站的读超时时间，默认300s。
   */
  ProxyReadTimeout?: number
  /**
   * WAF与源站的写超时时间，默认300s。
   */
  ProxySendTimeout?: number
  /**
   * WAF回源时的SNI类型。
0：关闭SNI，不配置client_hello中的server_name
1：开启SNI，client_hello中的server_name为防护域名
2：开启SNI，SNI为域名回源时的源站域名
3：开启SNI，SNI为自定义域名
   */
  SniType?: number
  /**
   * SniType为3时，需要填此参数，表示自定义的SNI；
   */
  SniHost?: string
  /**
   * IsCdn=3时，需要填此参数，表示自定义header
   */
  IpHeaders?: Array<string>
  /**
   * 是否开启XFF重置。0：关闭1：开启
   */
  XFFReset?: number
  /**
   * 域名备注信息
   */
  Note?: string
  /**
   * 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。
   */
  UpstreamHost?: string
  /**
   * 是否开启缓存。 0：关闭 1：开启
   */
  ProxyBuffer?: number
  /**
   * 是否开启拨测。 0: 禁用拨测 1: 启用拨测。默认启用拨测
   */
  ProbeStatus?: number
  /**
   * 国密选项。0：不开启国密 1：在原有TLS选项的基础上追加支持国密 2：开启国密并仅支持国密客户端访问
   */
  GmType?: number
  /**
   * 国密证书类型。0：无国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书
   */
  GmCertType?: number
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的证书链
   */
  GmCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的私钥
   */
  GmPrivateKey?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书
   */
  GmEncCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥
   */
  GmEncPrivateKey?: string
  /**
   * GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  GmSSLId?: string
  /**
   * 回源策略，支持负载均衡回源和分流回源两种方式。0：默认值，负载均衡回源；1：分流回源
   */
  UpstreamPolicy?: number
  /**
   * 分流回源时生效，分流回源的规则。
   */
  UpstreamRules?: Array<UpstreamRule>
}

/**
 * DeleteAttackDownloadRecord请求参数结构体
 */
export interface DeleteAttackDownloadRecordRequest {
  /**
   * 下载任务记录唯一标记
   */
  Id: number
}

/**
 * DescribeAntiFakeRules请求参数结构体
 */
export interface DescribeAntiFakeRulesRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 偏移
   */
  Offset: number
  /**
   * 容量
   */
  Limit: number
  /**
   * 过滤数组,name可以是如下的值： RuleID,ParamName,Url,Action,Method,Source,Status
   */
  Filters?: Array<FiltersItemNew>
  /**
   * asc或者desc
   */
  Order?: string
  /**
   * 目前支持根据create_time、modify_time、id排序
   */
  By?: string
}

/**
 * DescribeVipInfo请求参数结构体
 */
export interface DescribeVipInfoRequest {
  /**
   * waf实例id列表
   */
  InstanceIds: Array<string>
}

/**
 * ImportIpAccessControl请求参数结构体
 */
export interface ImportIpAccessControlRequest {
  /**
   * 导入的IP黑白名单列表
   */
  Data: Array<IpAccessControlParam>
  /**
   * 具体域名如：test.qcloudwaf.com
全局域名为：global
   */
  Domain: string
  /**
   * 是否为批量防护IP黑白名单，当为批量防护IP黑白名单时，取值为batch，否则为空
   */
  SourceType: string
  /**
   * 实例Id
   */
  InstanceId?: string
}

/**
 * DescribeFindDomainList返回参数结构体
 */
export interface DescribeFindDomainListResponse {
  /**
   * 域名总数
   */
  Total?: number
  /**
   * 域名信息列表
   */
  List?: Array<FindAllDomainDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSession返回参数结构体
 */
export interface DeleteSessionResponse {
  /**
   * 结果
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessIndex返回参数结构体
 */
export interface DescribeAccessIndexResponse {
  /**
   * 是否生效，true表示生效，false表示未生效
   */
  Status?: boolean
  /**
   * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule?: AccessRuleInfo
  /**
   * 索引修改时间，初始值为索引创建时间。
   */
  ModifyTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserSignatureRule请求参数结构体
 */
export interface ModifyUserSignatureRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 主类id
   */
  MainClassID?: string
  /**
   * 主类开关0=关闭，1=开启，2=只告警
   */
  Status?: number
  /**
   * 下发修改的规则列表
   */
  RuleID?: Array<ReqUserRule>
}

/**
 * ModifyWafThreatenIntelligence返回参数结构体
 */
export interface ModifyWafThreatenIntelligenceResponse {
  /**
   * 当前WAF威胁情报封禁模块详情
   */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserDomainInfo返回参数结构体
 */
export interface DescribeUserDomainInfoResponse {
  /**
   * saas和clb域名信息
   */
  UsersInfo?: Array<UserDomainInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TLS信息
 */
export interface TLSVersion {
  /**
   * TLSVERSION的ID
   */
  VersionId?: number
  /**
   * TLSVERSION的NAME
   */
  VersionName?: string
}

/**
 * 负载均衡的监听器
 */
export interface LoadBalancer {
  /**
   * 负载均衡LD的ID
   */
  LoadBalancerId: string
  /**
   * 负载均衡LD的名称
   */
  LoadBalancerName: string
  /**
   * 负载均衡监听器的ID
   */
  ListenerId: string
  /**
   * 负载均衡监听器的名称
   */
  ListenerName: string
  /**
   * 负载均衡实例的IP
   */
  Vip: string
  /**
   * 负载均衡实例的端口
   */
  Vport: number
  /**
   * 负载均衡LD的地域
   */
  Region: string
  /**
   * 监听器协议，http、https
   */
  Protocol: string
  /**
   * 负载均衡监听器所在的zone
   */
  Zone: string
  /**
   * 负载均衡的VPCID，公网为-1，内网按实际填写
   */
  NumericalVpcId?: number
  /**
   * 负载均衡的网络类型。OPEN： 公网 INTERNAL ：内网
   */
  LoadBalancerType?: string
  /**
   * 负载均衡的域名
   */
  LoadBalancerDomain?: string
}

/**
 * CDC场景下负载均衡WAF的集群信息
 */
export interface CdcCluster {
  /**
   * cdc的集群id
   */
  Id: string
  /**
   * cdc的集群名称
   */
  Name: string
}

/**
 * DescribeCustomRules接口回包中的复杂类型
 */
export interface DescribeCustomRulesRspRuleListItem {
  /**
   * 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向，5代表JS校验
   */
  ActionType?: string
  /**
   * 跳过的策略
   */
  Bypass?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 过期时间
   */
  ExpireTime?: string
  /**
   * 策略名称
   */
  Name?: string
  /**
   * 重定向地址
   */
  Redirect?: string
  /**
   * 策略ID
   */
  RuleId?: string
  /**
   * 优先级
   */
  SortId?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 策略详情
   */
  Strategies?: Array<Strategy>
  /**
   * 事件id
   */
  EventId?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 生效状态
   */
  ValidStatus?: number
  /**
   * 来源
   */
  Source?: string
  /**
   * 定时任务类型
   */
  JobType?: string
  /**
   * 定时任务配置信息
   */
  JobDateTime?: JobDateTime
  /**
   * 周期任务粒度
   */
  CronType?: string
  /**
   * 自定义标签，风控规则用，用来表示是内置规则还是用户自定义的
   */
  Label?: string
  /**
   * 拦截页面id
   */
  PageId?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系
   */
  LogicalOp?: string
}

/**
 * ModifyAntiInfoLeakRules返回参数结构体
 */
export interface ModifyAntiInfoLeakRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取弹性qps的默认相关值
 */
export interface QpsData {
  /**
   * 弹性qps默认值
   */
  ElasticBillingDefault?: number
  /**
   * 弹性qps最小值
   */
  ElasticBillingMin?: number
  /**
   * 弹性qps最大值
   */
  ElasticBillingMax?: number
  /**
   * 业务扩展包最大qps
   */
  QPSExtendMax?: number
  /**
   * 境外业务扩展包最大qps
   */
  QPSExtendIntlMax?: number
}

/**
 * AddCustomWhiteRule返回参数结构体
 */
export interface AddCustomWhiteRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 添加成功的规则ID
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchElasticMode请求参数结构体
 */
export interface SwitchElasticModeRequest {
  /**
   * 版本，只能是sparta-waf, clb-waf, cdn-waf
   */
  Edition: string
  /**
   * 0代表关闭，1代表打开
   */
  Mode: number
  /**
   * 实例id
   */
  InstanceID?: string
}

/**
 * CLB-WAF删除域名参数
 */
export interface HostDel {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID
   */
  DomainId: string
  /**
   * 实例类型
   */
  InstanceID?: string
}

/**
 * DescribeModuleStatus请求参数结构体
 */
export interface DescribeModuleStatusRequest {
  /**
   * 要查询状态的域名
   */
  Domain: string
}

/**
 * DeleteAttackWhiteRule请求参数结构体
 */
export interface DeleteAttackWhiteRuleRequest {
  /**
   * 规则序号组
   */
  Ids: Array<number | bigint>
  /**
   * 用户域名
   */
  Domain: string
}

/**
 * DescribeHosts返回参数结构体
 */
export interface DescribeHostsResponse {
  /**
   * 防护域名列表的长度
   */
  TotalCount?: number
  /**
   * 防护域名的列表
   */
  HostList?: Array<HostRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessIndex请求参数结构体
 */
export type DescribeAccessIndexRequest = null

/**
 * domain列表
 */
export interface DomainInfo {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID
   */
  DomainId: string
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * cname地址
   */
  Cname: string
  /**
   * 域名所属实例类型。
sparta-waf：SaaS型WAF实例
clb-waf：负载均衡型WAF实例
cdc-clb-waf：CDC环境下负载均衡型WAF实例
   */
  Edition: string
  /**
   * 地域。
"多伦多": "ca"
"广州": "gz"
"成都": "cd"
"福州": "fzec"
"深圳": "szx"
"印度": "in"
"济南": "jnec"
"重庆": "cq"
"天津": "tsn"
"欧洲东北": "ru"
"南京": "nj"
"美国硅谷": "usw"
"泰国": "th"
"广州Open": "gzopen"
"深圳金融": "szjr"
"法兰克福": "de"
"日本": "jp"
"弗吉尼亚": "use"
"北京": "bj"
"中国香港": "hk"
"杭州": "hzec"
"北京金融": "bjjr"
"上海金融": "shjr"
"台北": "tpe"
"首尔": "kr"
"上海": "sh"
"新加坡": "sg"
"清远": "qy"
   */
  Region: string
  /**
   * 实例名
   */
  InstanceName: string
  /**
   * 访问日志开关状态。
0：关闭
1：开启
   */
  ClsStatus: number
  /**
   * 负载均衡型WAF使用模式。
0：镜像模式 
1：清洗模式
   */
  FlowMode: number
  /**
   * waf开关状态。
0：关闭 
1：开启
   */
  Status: number
  /**
   * 规则引擎防护模式。
0：观察模式 
1：拦截模式
   */
  Mode: number
  /**
   * 规则引擎和AI引擎防护模式联合状态。
1:初始状态,规则引擎拦截&&AI引擎未操作开关状态
10：规则引擎观察&&AI引擎关闭模式 
11：规则引擎观察&&AI引擎观察模式 
12：规则引擎观察&&AI引擎拦截模式 
20：规则引擎拦截&&AI引擎关闭模式 
21：规则引擎拦截&&AI引擎观察模式 
22：规则引擎拦截&&AI引擎拦截模式
   */
  Engine: number
  /**
   * 沙箱集群回源出口IP列表
   */
  CCList: Array<string>
  /**
   * 生产集群回源出口IP列表
   */
  RsList: Array<string>
  /**
   * 服务端口配置
   */
  Ports: Array<PortInfo>
  /**
   * 负载均衡器相关配置
   */
  LoadBalancerSet: Array<LoadBalancerPackageNew>
  /**
   * 用户id
   */
  AppId: number
  /**
   * 负载均衡型WAF域名LB监听器状态。
0：操作成功 
4：正在绑定LB 
6：正在解绑LB 
7：解绑LB失败 
8：绑定LB失败 
10：内部错误
   */
  State: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * Ipv6开关状态。
0：关闭 
1：开启
   */
  Ipv6Status?: number
  /**
   * BOT开关状态。
0：关闭 
1：关闭
2：开启
3：开启
   */
  BotStatus?: number
  /**
   * 实例版本信息。
101：小微敏捷版 
102：小微超轻版
2：高级版
3：企业版
4：旗舰版
6：独享版
   */
  Level?: number
  /**
   * 投递CLS状态。
0：关闭 
1：开启
   */
  PostCLSStatus?: number
  /**
   * 投递CKafka状态。
0：关闭 
1：开启
   */
  PostCKafkaStatus?: number
  /**
   * cdc实例域名接入的集群信息,非cdc实例忽略。
   */
  CdcClusters?: string
  /**
   * api安全开关状态。
0：关闭 
1：开启
   */
  ApiStatus?: number
  /**
   * 应用型负载均衡类型，默认clb。
clb：七层负载均衡器类型
apisix：apisix网关型
   */
  AlbType?: string
  /**
   * 安全组状态。
0：不展示
1：非腾讯云源站
2：安全组绑定失败
3：安全组发生变更
   */
  SgState?: number
  /**
   * 安全组状态的详细解释
   */
  SgDetail?: string
  /**
   * 域名云环境。hybrid：混合云域名
public：公有云域名
   */
  CloudType?: string
  /**
   * 域名备注信息
   */
  Note?: string
  /**
   * SAASWAF源站IP列表
   */
  SrcList?: Array<string>
  /**
   * SAASWAF源站域名列表
   */
  UpstreamDomainList?: Array<string>
  /**
   * 安全组ID
   */
  SgID?: string
  /**
   * clbwaf接入状态
   */
  AccessStatus?: number
  /**
   * 域名标签
   */
  Labels?: Array<string>
}

/**
 * DescribeAreaBanAreas返回参数结构体
 */
export interface DescribeAreaBanAreasResponse {
  /**
   * 回包内容
   */
  Data?: DescribeAreaBanAreasRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * domain列表
   */
  Domains?: Array<DomainInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAntiFakeUrl返回参数结构体
 */
export interface AddAntiFakeUrlResponse {
  /**
   * 结果
   */
  Result?: string
  /**
   * 规则ID
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchAttackLog返回参数结构体
 */
export interface SearchAttackLogResponse {
  /**
   * 当前返回的攻击日志条数
   */
  Count?: number
  /**
   * 接口升级，此字段无效，默认返回空字符串
   */
  Context?: string
  /**
   * 攻击日志数组条目内容
   */
  Data?: Array<AttackLogInfo>
  /**
   * CLS接口返回内容
   */
  ListOver?: boolean
  /**
   * CLS接口返回内容，标志是否启动新版本索引
   */
  SqlFlag?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySpartaProtection返回参数结构体
 */
export interface ModifySpartaProtectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserCdcClbWafRegions返回参数结构体
 */
export interface DescribeUserCdcClbWafRegionsResponse {
  /**
   * CdcRegion的类型描述
   */
  Data?: Array<CdcRegion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchElasticMode返回参数结构体
 */
export interface SwitchElasticModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessIndex接口的出参数
 */
export interface AccessRuleInfo {
  /**
   * 全文索引配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullText?: AccessFullTextInfo
  /**
   * 键值索引配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyValue?: AccessRuleKeyValueInfo
  /**
   * 元字段索引配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: AccessRuleTagInfo
}

/**
 * DescribeAreaBanRule返回参数结构体
 */
export interface DescribeAreaBanRuleResponse {
  /**
   * 规则内容
   */
  Data?: AreaBanRule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CC规则总览
 */
export interface CCRuleLists {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 规则
   */
  Res?: Array<CCRuleItems>
}

/**
 * BatchOperateUserSignatureRules返回参数结构体
 */
export interface BatchOperateUserSignatureRulesResponse {
  /**
   * 操作结果
   */
  CommonRsp?: CommonRspData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAreaBanAreas返回参数结构体
 */
export interface ModifyAreaBanAreasResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAntiFakeUrlStatus请求参数结构体
 */
export interface ModifyAntiFakeUrlStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 状态
   */
  Status: number
  /**
   * Id列表
   */
  Ids: Array<number | bigint>
}

/**
 * api列表
 */
export interface ApiAsset {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 请求方法
   */
  Method?: string
  /**
   * api名称
   */
  ApiName?: string
  /**
   * 场景
   */
  Scene?: string
  /**
   * 数据标签
   */
  Label?: Array<string>
  /**
   * 过去7天是否活跃
   */
  Active?: boolean
  /**
   * 最近更新时间
   */
  Timestamp?: number
  /**
   * api发现时间
   */
  InsertTime?: number
  /**
   * 资产状态，1:新发现，2，确认中，3，已确认，4，已下线，5，已忽略
   */
  Mode?: string
  /**
   * 风险等级，100,200,300对应低中高
   */
  Level?: string
  /**
   * 近30天调用量
   */
  Count?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 是否鉴权，1标识是，0表示否
   */
  IsAuth?: number
  /**
   * 如果添加了api入参检测规则，则此id返回值不为0
   */
  ApiRequestRuleId?: number
  /**
   * 如果添加了api限流规则，则此id返回值不为0
   */
  ApiLimitRuleId?: number
  /**
   * 对象接入和泛域名接入时，展示host列表
   */
  HostList?: Array<string>
}

/**
 * DescribeCCRuleList请求参数结构体
 */
export interface DescribeCCRuleListRequest {
  /**
   * 需要查询的API所属的域名
   */
  Domain: string
  /**
   * 偏移
   */
  Offset: number
  /**
   * 容量
   */
  Limit: number
  /**
   * 目前支持根据ts_version排序
   */
  By: string
  /**
   * 过滤数组,name可以是如下的值： RuleID,ParamName,Url,Action,Method,Source,Status
   */
  Filters?: Array<FiltersItemNew>
  /**
   * asc或者desc
   */
  Order?: string
}

/**
 * 响应体的返回码
 */
export interface ResponseCode {
  /**
   * 如果成功则返回Success，失败则返回云api定义的错误码
   */
  Code?: string
  /**
   * 如果成功则返回Success，失败则返回WAF定义的二级错误码
   */
  Message?: string
}

/**
 * ModifyAttackWhiteRule返回参数结构体
 */
export interface ModifyAttackWhiteRuleResponse {
  /**
   * 规则总数
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchAccessLog返回参数结构体
 */
export interface SearchAccessLogResponse {
  /**
   * 新接口此字段失效，默认返回空字符串
   */
  Context?: string
  /**
   * 日志查询结果是否全部返回，其中，“true”表示结果返回，“false”表示结果为返回
   */
  ListOver?: boolean
  /**
   * 返回的是否为分析结果，其中，“true”表示返回分析结果，“false”表示未返回分析结果
   */
  Analysis?: boolean
  /**
   * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ColNames?: Array<string>
  /**
   * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
   */
  Results?: Array<AccessLogInfo>
  /**
   * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
   * @deprecated
   */
  AnalysisResults?: Array<AccessLogItems>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAntiInfoLeakageRules请求参数结构体
 */
export interface DescribeAntiInfoLeakageRulesRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 翻页支持，读取偏移
   */
  Offset?: number
  /**
   * 翻页支持，读取长度限制
   */
  Limit?: number
  /**
   * 排序方式，asc或者desc
   */
  Order?: string
  /**
   * 过滤器,可以允许如下的值：
RuleId,Match_field,Name,Action,Status
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * CreateHost返回参数结构体
 */
export interface CreateHostResponse {
  /**
   * 新增防护域名ID
   */
  DomainId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBotStatus请求参数结构体
 */
export interface ModifyBotStatusRequest {
  /**
   * 类别
   */
  Category: string
  /**
   * 状态
   */
  Status: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 实例id
   */
  InstanceID?: string
  /**
   * 是否是bot4.0版本
   */
  IsVersionFour?: boolean
  /**
   * 传入Bot版本号，场景化版本为"4.1.0"
   */
  BotVersion?: string
  /**
   * 批量开启BOT开关的域名列表
   */
  DomainList?: Array<string>
}

/**
 * ModifyHostFlowMode请求参数结构体
 */
export interface ModifyHostFlowModeRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID
   */
  DomainId: string
  /**
   * WAF流量模式。
0：镜像模式（默认）
1：清洗模式
   */
  FlowMode: number
  /**
   * 实例ID
   */
  InstanceID?: string
}

/**
 * CreateHost请求参数结构体
 */
export interface CreateHostRequest {
  /**
   * 防护域名配置信息
   */
  Host: HostRecord
  /**
   * 实例id
   */
  InstanceID?: string
}

/**
 * GetInstanceQpsLimit返回参数结构体
 */
export interface GetInstanceQpsLimitResponse {
  /**
   * 弹性qps相关值集合
   */
  QpsData?: QpsData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDeals请求参数结构体
 */
export interface CreateDealsRequest {
  /**
   * 计费下单入参
   */
  Goods: Array<CreateDealsGoods>
}

/**
 * ModifyCustomWhiteRule返回参数结构体
 */
export interface ModifyCustomWhiteRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接入列表查询复杂条件
 */
export interface SearchItem {
  /**
   * 日志开关
   */
  ClsStatus?: string
  /**
   * waf开关
   */
  Status?: string
  /**
   * 流量模式
   */
  FlowMode?: string
}

/**
 * API安全资源信息
 */
export interface ApiPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 申请数量
   */
  InquireNum?: number
  /**
   * 使用数量
   */
  UsedNum?: number
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * 计费项
   */
  BillingItem?: string
  /**
   * api安全7天试用标识。1试用。0没试用
   */
  IsAPISecurityTrial?: number
}

/**
 * DescribeAreaBanSupportAreas返回参数结构体
 */
export interface DescribeAreaBanSupportAreasResponse {
  /**
   * 地域封禁的地域列表，要解析成json后使用
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Tiga引擎中Mainclass的TypeID和防护模式
 */
export interface TigaMainClassMode {
  /**
   * MainclassID
   */
  TypeID?: string
  /**
   * 防护模式，0表示观察，1表示拦截
   */
  Mode?: number
}

/**
 * DescribeUserSignatureClass返回参数结构体
 */
export interface DescribeUserSignatureClassResponse {
  /**
   * 规则类型数量
   */
  Total?: number
  /**
   * 规则类型列表及信息
   */
  RuleTypeList?: Array<RuleType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePorts请求参数结构体
 */
export interface DescribePortsRequest {
  /**
   * 实例ID
   */
  InstanceID?: string
  /**
   * 实例类型
   */
  Edition?: string
}

/**
 * DescribeWafAutoDenyStatus返回参数结构体
 */
export interface DescribeWafAutoDenyStatusResponse {
  /**
   * WAF 自动封禁详情
   */
  WafAutoDenyDetails?: AutoDenyDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域封禁规则详情
 */
export interface AreaBanRule {
  /**
   * 状态 0：未开启地域封禁、1：开启地域封禁
   */
  Status?: number
  /**
   * 数据来源 custom：自定义(默认)、batch：批量防护
   */
  Source?: string
  /**
   * 配置的地域列表
   */
  Areas?: Array<Area>
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时任务配置
   */
  JobDateTime?: JobDateTime
  /**
   * 如果是周期任务类型，那么表示周期的类型，支持 Week：按周、Month：按月
   */
  CronType?: string
  /**
   * 地域信息的语言，支持cn、en，默认为中文cn
   */
  Lang?: string
}

/**
 * DescribeTlsVersion请求参数结构体
 */
export type DescribeTlsVersionRequest = null

/**
 * 计费下单响应实体
 */
export interface DealData {
  /**
   * 订单号列表，元素个数与请求包的goods数组的元素个数一致，商品详情与订单按顺序对应
   */
  DealNames?: Array<string>
  /**
   * 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单[{},{}]
   */
  BigDealId?: string
}

/**
 * DescribeDomainDetailsSaas请求参数结构体
 */
export interface DescribeDomainDetailsSaasRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名id
   */
  DomainId: string
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * api资产列表过滤器
 */
export interface ApiDataFilter {
  /**
   * 数据标签，是否活跃，功能场景
   */
  Entity: string
  /**
   * 等于
   */
  Operator: string
  /**
   * 日期，手机号，邮箱等
   */
  Value: string
}

/**
 * 产品明细
 */
export interface CreateDealsGoodsDetail {
  /**
   * 时间间隔
   */
  TimeSpan?: number
  /**
   * 单位，支持购买d、m、y 即（日、月、年）
   */
  TimeUnit?: string
  /**
   * 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面

Saas 高级版 ：sp_wsm_waf_premium
Saas企业版 ：sp_wsm_waf_enterprise
Saas旗舰版 ：sp_wsm_waf_ultimate
Saas 业务扩展包：sp_wsm_waf_qpsep
Saas 域名扩展包：sp_wsm_waf_domain

高级版-CLB:sp_wsm_waf_premium_clb
企业版-CLB : sp_wsm_waf_enterprise_clb
旗舰版-CLB:sp_wsm_waf_ultimate_clb
 业务扩展包-CLB：sp_wsm_waf_qpsep_clb
域名扩展包-CLB：sp_wsm_waf_domain_clb

   */
  SubProductCode?: string
  /**
   * 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型
高级版 ：1000827
企业版 ：1000830
旗舰版 ：1000832
域名包 : 1000834
业务扩展包 : 1000481
高级版-CLB:1001150
企业版-CLB : 1001152
旗舰版-CLB:1001154
域名包-CLB: 1001156
业务扩展包-CLB : 1001160

   */
  Pid?: number
  /**
   * waf实例名
   */
  InstanceName?: string
  /**
   * 1:自动续费，0:不自动续费
   */
  AutoRenewFlag?: number
  /**
   * waf购买的实际地域信息
   */
  RealRegion?: number
  /**
   * 计费细项标签数组
Saas 高级版  sv_wsm_waf_package_premium 
Saas 企业版  sv_wsm_waf_package_enterprise
Saas 旗舰版  sv_wsm_waf_package_ultimate 
Saas 非中国大陆高级版  sv_wsm_waf_package_premium_intl
Saas 非中国大陆企业版   sv_wsm_waf_package_enterprise_intl
Saas 非中国大陆旗舰版  sv_wsm_waf_package_ultimate _intl
Saas 业务扩展包  sv_wsm_waf_qps_ep
Saas 域名扩展包  sv_wsm_waf_domain

高级版CLB   sv_wsm_waf_package_premium_clb
企业版CLB  sv_wsm_waf_package_enterprise_clb
旗舰版CLB   sv_wsm_waf_package_ultimate_clb
非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl
非中国大陆企业版CLB   sv_wsm_waf_package_premium_clb_intl
非中国大陆旗舰版CLB  sv_wsm_waf_package_ultimate_clb _intl
业务扩展包CLB sv_wsm_waf_qps_ep_clb
域名扩展包CLB  sv_wsm_waf_domain_clb

   */
  LabelTypes?: Array<string>
  /**
   * 计费细项标签数量，一般和SvLabelType一一对应
   */
  LabelCounts?: Array<number | bigint>
  /**
   * 变配使用，实例到期时间
   */
  CurDeadline?: string
  /**
   * 对存在的实例购买bot 或api 安全
   */
  InstanceId?: string
  /**
   * 资源id
   */
  ResourceId?: string
}

/**
 * api历史样例返回结构体
 */
export interface ApiDetailSampleHistory {
  /**
   * 样例名称
   */
  SampleNme?: string
  /**
   * 请求样例
   */
  RepLog?: string
  /**
   * 响应样例
   */
  RspLog?: string
}

/**
 * 当前WAF威胁情报封禁模块详情
 */
export interface WafThreatenIntelligenceDetails {
  /**
   * 封禁属性标签
   */
  Tags?: Array<string>
  /**
   * 封禁模组启用状态
   */
  DefenseStatus?: number
  /**
   * 最后更新时间
   */
  LastUpdateTime?: string
}

/**
 * DescribeDomainWhiteRules请求参数结构体
 */
export interface DescribeDomainWhiteRulesRequest {
  /**
   * 需要查询的域名
   */
  Domain: string
  /**
   * 请求的白名单匹配路径
   */
  Url?: string
  /**
   * 翻到多少页
   */
  Page?: number
  /**
   * 每页展示的条数
   */
  Count?: number
  /**
   * 排序方式,desc表示降序，asc表示升序
   */
  Sort?: string
  /**
   * 规则ID
   */
  RuleId?: string
}

/**
 * DescribePeakPoints返回参数结构体
 */
export interface DescribePeakPointsResponse {
  /**
   * 数据点
   */
  Points?: Array<PeakPointsItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceRenewFlag请求参数结构体
 */
export interface ModifyInstanceRenewFlagRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 续费开关
   */
  RenewFlag: number
}

/**
 * 用户规则白名单规则子项
 */
export interface UserWhiteRuleItem {
  /**
   * 匹配域
   */
  MatchField: string
  /**
   * 匹配方法
   */
  MatchMethod: string
  /**
   * 匹配内容
   */
  MatchContent: string
  /**
   * 匹配参数名
   */
  MatchParams?: string
}

/**
 * 产品明细
 */
export interface GoodsDetailNew {
  /**
   * 时间间隔
   */
  TimeSpan?: number
  /**
   * 单位，支持购买d、m、y 即（日、月、年）
   */
  TimeUnit?: string
  /**
   * 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面

Saas 高级版 ：sp_wsm_waf_premium
Saas企业版 ：sp_wsm_waf_enterprise
Saas旗舰版 ：sp_wsm_waf_ultimate
Saas 业务扩展包：sp_wsm_waf_qpsep
Saas 域名扩展包：sp_wsm_waf_domain

高级版-CLB:sp_wsm_waf_premium_clb
企业版-CLB : sp_wsm_waf_enterprise_clb
旗舰版-CLB:sp_wsm_waf_ultimate_clb
 业务扩展包-CLB：sp_wsm_waf_qpsep_clb
域名扩展包-CLB：sp_wsm_waf_domain_clb

   */
  SubProductCode?: string
  /**
   * 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型
高级版 ：1000827
企业版 ：1000830
旗舰版 ：1000832
域名包 : 1000834
业务扩展包 : 1000481
高级版-CLB:1001150
企业版-CLB : 1001152
旗舰版-CLB:1001154
域名包-CLB: 1001156
业务扩展包-CLB : 1001160

   */
  Pid?: number
  /**
   * waf实例名
   */
  InstanceName?: string
  /**
   * 1:自动续费，0:不自动续费
   */
  AutoRenewFlag?: number
  /**
   * waf购买的实际地域信息
   */
  RealRegion?: number
  /**
   * 计费细项标签数组
Saas 高级版  sv_wsm_waf_package_premium 
Saas 企业版  sv_wsm_waf_package_enterprise
Saas 旗舰版  sv_wsm_waf_package_ultimate 
Saas 非中国大陆高级版  sv_wsm_waf_package_premium_intl
Saas 非中国大陆企业版   sv_wsm_waf_package_enterprise_intl
Saas 非中国大陆旗舰版  sv_wsm_waf_package_ultimate _intl
Saas 业务扩展包  sv_wsm_waf_qps_ep
Saas 域名扩展包  sv_wsm_waf_domain

高级版CLB   sv_wsm_waf_package_premium_clb
企业版CLB  sv_wsm_waf_package_enterprise_clb
旗舰版CLB   sv_wsm_waf_package_ultimate_clb
非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl
非中国大陆企业版CLB   sv_wsm_waf_package_premium_clb_intl
非中国大陆旗舰版CLB  sv_wsm_waf_package_ultimate_clb _intl
业务扩展包CLB sv_wsm_waf_qps_ep_clb
域名扩展包CLB  sv_wsm_waf_domain_clb

   */
  LabelTypes?: Array<string>
  /**
   * 计费细项标签数量，一般和SvLabelType一一对应
   */
  LabelCounts?: Array<number | bigint>
  /**
   * 变配使用，实例到期时间
   */
  CurDeadline?: string
  /**
   * 对存在的实例购买bot 或api 安全
   */
  InstanceId?: string
  /**
   * 资源id
   */
  ResourceId?: string
  /**
   * 模式clb-waf或者saas-waf
   */
  MicroVersion?: string
}

/**
 * DescribeAreaBanSupportAreas请求参数结构体
 */
export type DescribeAreaBanSupportAreasRequest = null

/**
 * 产品明细
 */
export interface GoodsDetail {
  /**
   * 时间间隔
   */
  TimeSpan: number
  /**
   * 单位，支持m、y、d
   */
  TimeUnit: string
  /**
   * 产品码
   */
  ProductCode: string
  /**
   * 二级产品码
   */
  SubProductCode: string
  /**
   * 计费策略id
   */
  Pid: number
  /**
   * waf产品码
   */
  ProductInfo?: Array<ProductInfo>
  /**
   * waf实例名
   */
  InstanceName?: string
  /**
   * QPS数量
   */
  ElasticQps?: number
  /**
   * 弹性账单
   */
  FlexBill?: number
  /**
   * 1:自动续费，0:不自动续费
   */
  AutoRenewFlag?: number
  /**
   * waf购买的实际地域信息
   */
  RealRegion?: number
  /**
   * Waf实例对应的二级产品码
   */
  Type?: string
  /**
   * 计费细项标签数组
   */
  LabelTypes?: Array<string>
  /**
   * 计费细项标签数量，一般和SvLabelType一一对应
   */
  LabelCounts?: Array<number | bigint>
  /**
   * 变配使用，实例到期时间
   */
  CurDeadline?: string
  /**
   * 对存在的实例购买bot 或api 安全
   */
  InstanceId?: string
}

/**
 * DeleteIpAccessControl返回参数结构体
 */
export interface DeleteIpAccessControlResponse {
  /**
   * 删除失败的条目
   */
  FailedItems?: string
  /**
   * 删除失败的条目数
   */
  FailedCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量多域名黑白名单列表Ip
 */
export interface BatchIpAccessControlItem {
  /**
   * mongo表自增Id
   * @deprecated
   */
  Id?: string
  /**
   * 黑名单42或白名单40
   */
  ActionType?: number
  /**
   * 黑白名单的IP
   * @deprecated
   */
  Ip?: string
  /**
   * 备注
   */
  Note?: string
  /**
   * batch为批量域名，batch-group为防护对象组
   */
  Source?: string
  /**
   * 修改时间
   */
  TsVersion?: number
  /**
   * 超时时间
   */
  ValidTs?: number
  /**
   * 域名列表
   */
  Hosts?: Array<string>
  /**
   * 55101145
   */
  RuleId?: number
  /**
   * IP列表
   */
  IpList?: Array<string>
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 定时任务类型
   */
  JobType?: string
  /**
   * 周期任务类型
   */
  CronType?: string
  /**
   * 定时任务配置详情
   */
  JobDateTime?: JobDateTime
  /**
   * 生效状态
   */
  ValidStatus?: number
  /**
   * 防护对象组ID列表，如果绑定的是防护对象组
   */
  GroupIds?: Array<number | bigint>
}

/**
 * api列表
 */
export interface ApiSecKey {
  /**
   * api名称
   */
  ApiName: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 请求方法
   */
  Method: string
}

/**
 * 用户规则白名单
 */
export interface UserWhiteRule {
  /**
   * 白名单的id
   */
  WhiteRuleId?: number
  /**
   * 规则id
   */
  SignatureId?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 匹配域
   */
  MatchField?: string
  /**
   * 匹配参数
   */
  MatchParams?: string
  /**
   * 匹配方法
   */
  MatchMethod?: string
  /**
   * 匹配内容
   */
  MatchContent?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 规则ID列表
   */
  SignatureIds?: Array<string>
  /**
   * 大类规则ID列表
   */
  TypeIds?: Array<string>
  /**
   * 大类规则ID
   */
  TypeId?: string
  /**
   * 0:按照特定规则ID加白, 1:按照规则类型加白
   */
  Mode?: number
  /**
   * 规则名
   */
  Name?: string
  /**
   * 匹配规则列表
   */
  MatchInfo?: Array<UserWhiteRuleItem>
  /**
   * MatchInfo字符串
   */
  MatchInfoStr?: string
}

/**
 * 服务端口配置
 */
export interface PortInfo {
  /**
   * Nginx的服务器id
   */
  NginxServerId: number
  /**
   * 监听端口配置
   */
  Port: string
  /**
   * 与端口对应的协议
   */
  Protocol: string
  /**
   * 回源端口
   */
  UpstreamPort: string
  /**
   * 回源协议
   */
  UpstreamProtocol: string
}

/**
 * AddAttackWhiteRule请求参数结构体
 */
export interface AddAttackWhiteRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则状态
   */
  Status: number
  /**
   * 匹配规则项列表
   */
  Rules: Array<UserWhiteRuleItem>
  /**
   * 规则序号
   */
  RuleId?: number
  /**
   * 规则Id
   */
  SignatureId?: string
  /**
   * 加白的规则ID列表
   */
  SignatureIds?: Array<string>
  /**
   * 加白的大类规则ID
   */
  TypeIds?: Array<string>
  /**
   * 0:按照特定规则ID加白, 1:按照规则类型加白
   */
  Mode?: number
  /**
   * 规则名
   */
  Name?: string
}

/**
 * 业务安全资源信息
 */
export interface FraudPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 申请数量
   */
  InquireNum?: number
  /**
   * 使用数量
   */
  UsedNum?: number
  /**
   * 续费标志
   */
  RenewFlag?: number
}

/**
 * DescribeDomainDetailsClb返回参数结构体
 */
export interface DescribeDomainDetailsClbResponse {
  /**
   * clb域名详情
   */
  DomainsClbPartInfo?: ClbDomainsInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessExports接口
 */
export interface ExportAccessInfo {
  /**
   * 日志导出任务ID
   */
  ExportId?: string
  /**
   * 日志导出查询语句
   */
  Query?: string
  /**
   * 日志导出文件名
   */
  FileName?: string
  /**
   * 日志文件大小
   */
  FileSize?: number
  /**
   * 日志导出时间排序
   */
  Order?: string
  /**
   * 日志导出格式
   */
  Format?: string
  /**
   * 日志导出数量
   */
  Count?: number
  /**
   * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）
   */
  Status?: string
  /**
   * 日志导出起始时间
   */
  From?: number
  /**
   * 日志导出结束时间
   */
  To?: number
  /**
   * 日志导出路径
   */
  CosPath?: string
  /**
   * 日志导出创建时间
   */
  CreateTime?: string
}

/**
 * DescribeIpAccessControl请求参数结构体
 */
export interface DescribeIpAccessControlRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 计数标识
   */
  Count: number
  /**
   * 动作，40表示查询白名单，42表示查询黑名单
   */
  ActionType?: number
  /**
   * 最小有效时间的时间戳
   * @deprecated
   */
  VtsMin?: number
  /**
   * 最大有效时间的时间戳
   * @deprecated
   */
  VtsMax?: number
  /**
   * 最小创建时间的时间戳
   */
  CtsMin?: number
  /**
   * 最大创建时间的时间戳
   */
  CtsMax?: number
  /**
   * 分页偏移量，取Limit整数倍。最小值为0，最大值= Total/Limit向上取整
   */
  OffSet?: number
  /**
   * 每页返回的数量，默认为20
   */
  Limit?: number
  /**
   * 来源
   */
  Source?: string
  /**
   * 排序参数
   */
  Sort?: string
  /**
   * IP
   */
  Ip?: string
  /**
   * 生效状态，1表示生效中，2表示过期，0表示全部
   */
  ValidStatus?: number
  /**
   * 最小有效时间的时间戳
   */
  ValidTimeStampMin?: string
  /**
   * 最大有效时间的时间戳
   */
  ValidTimeStampMax?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 0表示全部，1表示永久生效，2表示定时生效，3表示周粒度生效，4表示月粒度生效
   */
  TimerType?: number
}

/**
 * ModifyWafThreatenIntelligence请求参数结构体
 */
export interface ModifyWafThreatenIntelligenceRequest {
  /**
   * 配置WAF威胁情报封禁模块详情
   */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails
}

/**
 * DescribeApiListVersionTwo请求参数结构体
 */
export interface DescribeApiListVersionTwoRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 页面索引，第几页
   */
  PageIndex: number
  /**
   * 页面大小
   */
  PageSize: number
  /**
   * 过滤条件
   */
  Filters?: Array<ApiDataFilter>
  /**
   * 排序方法，1 升序，-1 降序
   */
  Sort?: Array<string>
  /**
   * 是否进行总数查询
   */
  NeedTotalCount?: boolean
  /**
   * 查询开始时间
   */
  StartTs?: number
  /**
   * 查询结束时间
   */
  EndTs?: number
}

/**
 * ModifyInstanceQpsLimit返回参数结构体
 */
export interface ModifyInstanceQpsLimitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户规则更新输出规则子项
 */
export interface ReqUserRule {
  /**
   * 特征序号
   */
  Id: string
  /**
   * 规则开关
0：关
1：开
2：只告警
   */
  Status: number
  /**
   * 修改原因
0：无(兼容记录为空)
1：业务自身特性误报避免
2：规则误报上报
3：核心业务规则灰度
4：其它
   */
  Reason?: number
}

/**
 * DescribeIpHitItems请求参数结构体
 */
export interface DescribeIpHitItemsRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 计数标识
   */
  Count: number
  /**
   * 类别，ip封禁传值auto_deny
   */
  Category: string
  /**
   * 有效时间最小时间戳
   * @deprecated
   */
  VtsMin?: number
  /**
   * 有效时间最大时间戳
   * @deprecated
   */
  VtsMax?: number
  /**
   * 创建时间最小时间戳
   */
  CtsMin?: number
  /**
   * 创建时间最大时间戳
   */
  CtsMax?: number
  /**
   * 偏移参数
   */
  Skip?: number
  /**
   * 限制数目，category不等于threat_intelligence时，该值需要必传
   */
  Limit?: number
  /**
   * 策略名称
   */
  Name?: string
  /**
   * 排序参数
   */
  Sort?: string
  /**
   * IP,category传threat_intelligence的时候，该值必传
   */
  Ip?: string
  /**
   * 有效时间最小时间戳
   */
  ValidTimeStampMin?: number
  /**
   * 有效时间最大时间戳
   */
  ValidTimeStampMax?: number
}

/**
 * 计费下单接口出入参Goods
 */
export interface GoodNews {
  /**
   * 商品数量
   */
  GoodsNum: number
  /**
   * 商品明细
   */
  GoodsDetail: GoodsDetailNew
  /**
   * 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）
高级版: 102375(新购),102376(续费),102377(变配)
企业版 : 102378(新购),102379(续费),102380(变配)
旗舰版 : 102369(新购),102370(续费),102371(变配)
域名包 : 102372(新购),102373(续费),102374(变配)
业务扩展包 : 101040(新购),101041(续费),101042(变配)

高级版-CLB: 新购 101198  续费 101199 变配 101200
企业版-CLB 101204(新购),101205(续费),101206(变配)
旗舰版-CLB : 101201(新购),101202(续费),101203(变配)
域名包-CLB: 101207(新购),101208(续费),101209(变配)
业务扩展包-CLB: 101210(新购),101211(续费),101212(变配)

   */
  GoodsCategoryId?: number
  /**
   * 购买waf实例区域ID
1 表示购买大陆资源;
9表示购买非中国大陆资源
   */
  RegionId?: number
}

/**
 * 扫描ip信息
 */
export interface ScanIpInfo {
  /**
   * 所属业务

   */
  Bussiness?: string
  /**
   * 扫描对象
   */
  Target?: string
  /**
   * ip列表
   */
  IpList?: Array<string>
  /**
   * 扫描说明
   */
  Descibe?: string
  /**
   * 官方公告

   */
  Referer?: string
  /**
   * 更新时间
   */
  UpdateTime?: number
}

/**
 * DescribeUserSignatureRule请求参数结构体
 */
export interface DescribeUserSignatureRuleRequest {
  /**
   * 需要查询的域名
   */
  Domain: string
  /**
   * 分页
   */
  Offset: number
  /**
   * 每页容量
   */
  Limit: number
  /**
   * 排序字段，支持 signature_id, modify_time
   */
  By?: string
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 筛选条件，支持 MainClassName，SubClassID ,CveID, Status, ID;  ID为规则id
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * ModifyAreaBanRule返回参数结构体
 */
export interface ModifyAreaBanRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserClbWafRegions请求参数结构体
 */
export interface DescribeUserClbWafRegionsRequest {
  /**
   * 流量来源，不填默认clb。clb：负载均衡器，tsegw：云原生API网关，scf：云函数，apisix：腾讯云上其他网关
   */
  AlbType?: string
}

/**
 * AddAntiInfoLeakRules返回参数结构体
 */
export interface AddAntiInfoLeakRulesResponse {
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWafThreatenIntelligence返回参数结构体
 */
export interface DescribeWafThreatenIntelligenceResponse {
  /**
   * WAF 威胁情报封禁信息
   */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddDomainWhiteRule请求参数结构体
 */
export interface AddDomainWhiteRuleRequest {
  /**
   * 需要添加的域名
   */
  Domain?: string
  /**
   * 需要添加的规则
   */
  Rules?: Array<number | bigint>
  /**
   * 需要添加的规则url
   */
  Url?: string
  /**
   * 规则的方法
   */
  Function?: string
  /**
   * 规则的开关，0表示规则关闭，1表示规则打开
   */
  Status?: number
}

/**
 * DeleteAntiInfoLeakRule返回参数结构体
 */
export interface DeleteAntiInfoLeakRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ip封堵状态数据
 */
export interface IpHitItem {
  /**
   * 动作
   */
  Action?: number
  /**
   * 类别
   */
  Category?: string
  /**
   * ip
   */
  Ip?: string
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 时间戳
   */
  TsVersion?: number
  /**
   * 有效截止时间戳
   */
  ValidTs?: number
}

/**
 * 用户特征规则描述
 */
export interface UserSignatureRule {
  /**
   * 特征ID
   */
  ID?: string
  /**
   * 规则开关
   */
  Status?: number
  /**
   * 主类ID
   */
  MainClassID?: string
  /**
   * 子类ID
   */
  SubClassID?: string
  /**
   * CVE ID
   */
  CveID?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  ModifyTime?: string
  /**
   * 主类名字，根据Language字段输出中文/英文
   */
  MainClassName?: string
  /**
   * 子类名字，根据Language字段输出中文/英文，若子类id为00000000，此字段为空
   */
  SubClassName?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 0/1
   */
  Reason?: number
  /**
   * 1: 高危 2:中危 3:低危
   */
  RiskLevel?: number
}

/**
 * 下载攻击日志记录数据项
 */
export interface DownloadAttackRecordInfo {
  /**
   * 记录ID
   */
  Id?: number
  /**
   * 下载任务名
   */
  TaskName?: string
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 域名
   */
  Host?: string
  /**
   * 当前下载任务的日志条数
   */
  Count?: number
  /**
   * 下载任务运行状态：-1-下载超时，0-下载等待，1-下载完成，2-下载失败，4-正在下载
   */
  Status?: number
  /**
   * 下载文件URL
   */
  Url?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最后更新修改时间
   */
  ModifyTime?: string
  /**
   * 过期时间
   */
  ExpireTime?: string
  /**
   * 下载任务需下载的日志总条数
   */
  TotalCount?: number
}

/**
 * DescribeRuleLimit返回参数结构体
 */
export interface DescribeRuleLimitResponse {
  /**
   * waf模块的规格
   */
  Res?: WafRuleLimit
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccessExport返回参数结构体
 */
export interface CreateAccessExportResponse {
  /**
   * 日志导出ID。
   */
  ExportId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHost请求参数结构体
 */
export interface ModifyHostRequest {
  /**
   * 编辑的域名配置信息
   */
  Host: HostRecord
  /**
   * 实例唯一ID
   */
  InstanceID?: string
}

/**
 * DescribeHistogram返回参数结构体
 */
export interface DescribeHistogramResponse {
  /**
   * 统计数据
   */
  Histogram?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Clb类型防护对象
 */
export interface ClbObject {
  /**
   * 对象ID
   */
  ObjectId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 精准域名列表
   */
  PreciseDomains?: Array<string>
  /**
   * WAF功能开关状态，0关闭1开启
   */
  Status?: number
  /**
   * WAF日志开关状态，0关闭1开启
   */
  ClsStatus?: number
  /**
   * CLB对象对应的虚拟域名
   */
  VirtualDomain?: string
  /**
   * 对象名称
   */
  ObjectName?: string
  /**
   * 公网地址
   */
  PublicIp?: Array<string>
  /**
   * 内网地址
   */
  PrivateIp?: Array<string>
  /**
   * VPC名称
   */
  VpcName?: string
  /**
   * VPC ID
   */
  Vpc?: string
  /**
   * waf实例等级，如果未绑定实例为0
   */
  InstanceLevel?: number
  /**
   * clb投递开关
   */
  PostCLSStatus?: number
  /**
   * kafka投递开关
   */
  PostCKafkaStatus?: number
  /**
   * 对象类型：CLB:负载均衡器，TSE:云原生网关
   */
  Type?: string
  /**
   * 对象地域
   */
  Region?: string
  /**
   * 代理状态: 0:不开启,1:以XFF的第一个IP地址作为客户端IP,2:以remote_addr作为客户端IP,3:从指定的头部字段获取客户端IP，字段通过IpHeaders字段给出
   */
  Proxy?: number
  /**
   * 指定获取客户端IP的头部字段列表。IsCdn为3时有效
   */
  IpHeaders?: Array<string>
  /**
   * bot防护开关
   */
  BotStatus?: number
  /**
   * api防护开关
   */
  ApiStatus?: number
  /**
   * 对象接入模式，0表示镜像模式，1表示清洗模式，2表示体检模式，默认为清洗模式
   */
  ObjectFlowMode?: number
  /**
   * 数值形式的私有网络 ID
   */
  NumericalVpcId?: number
}

/**
 * ModifyUserLevel返回参数结构体
 */
export interface ModifyUserLevelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccessExport请求参数结构体
 */
export interface CreateAccessExportRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   */
  TopicId: string
  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number
  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number
  /**
   * 日志导出检索语句
   */
  Query: string
  /**
   * 日志导出数量，最大值100w
   */
  Count: number
  /**
   * 日志导出数据格式。json，csv，默认为json
   */
  Format?: string
  /**
   * 日志导出时间排序。desc，asc，默认为desc
   */
  Order?: string
}

/**
 * ModifyUserLevel请求参数结构体
 */
export interface ModifyUserLevelRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 防护规则等级 300=standard，400=extended
   */
  Level: number
}

/**
 * DescribeIpHitItems返回参数结构体
 */
export interface DescribeIpHitItemsResponse {
  /**
   * 结果
   */
  Data?: IpHitItemsData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHost返回参数结构体
 */
export interface ModifyHostResponse {
  /**
   * 编辑的域名ID
   */
  DomainId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCertificateVerifyResult请求参数结构体
 */
export interface DescribeCertificateVerifyResultRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 证书类型。 0：不检测国际标准证书 1：证书来源为自有证书 2：证书来源为托管证书
   */
  CertType?: number
  /**
   * CertType为1时，需要填充此参数，表示自有证书的证书链
   */
  Certificate?: string
  /**
   * CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  CertID?: string
  /**
   * CertType为1时，需要填充此参数，表示自有证书的私钥
   */
  PrivateKey?: string
  /**
   * 国密证书类型。0：不检测国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书
   */
  GmCertType?: number
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的证书链
   */
  GmCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的私钥
   */
  GmPrivateKey?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书
   */
  GmEncCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥
   */
  GmEncPrivateKey?: string
  /**
   * GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  GmSSLId?: string
}

/**
 * DescribeUserCdcClbWafRegions请求参数结构体
 */
export type DescribeUserCdcClbWafRegionsRequest = null

/**
 * DeleteAttackDownloadRecord返回参数结构体
 */
export interface DeleteAttackDownloadRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIpAccessControl请求参数结构体
 */
export interface CreateIpAccessControlRequest {
  /**
   * 具体域名如：test.qcloudwaf.com
全局域名为：global
   */
  Domain: string
  /**
   * ip参数列表
   */
  IpList: Array<string>
  /**
   * 42为黑名单，40为白名单
   */
  ActionType: number
  /**
   * valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00））
   * @deprecated
   */
  ValidTS?: number
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
   */
  Edition?: string
  /**
   * 可选值为：batch（批量添加）、bot（BOT流量分析中的BOT详情列表中添加时）、cc（在攻击日志列表中对攻击类型为CC的IP添加时）、custom（非批量添加时的默认值）
   */
  SourceType?: string
  /**
   * 备注
   */
  Note?: string
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时配置详情
   */
  JobDateTime?: JobDateTime
}

/**
 * DescribeFlowTrend请求参数结构体
 */
export interface DescribeFlowTrendRequest {
  /**
   * 需要获取流量趋势的域名, all表示所有域名
   */
  Domain: string
  /**
   * 起始时间戳，精度秒
   */
  StartTs: number
  /**
   * 结束时间戳，精度秒
   */
  EndTs: number
}

/**
 * DescribeWafAutoDenyStatus请求参数结构体
 */
export type DescribeWafAutoDenyStatusRequest = null

/**
 * 小程序安全资源信息
 */
export interface MiniPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 购买数量
   */
  Count?: number
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * 计费项
   */
  BillingItem?: string
}

/**
 * DescribeAreaBanAreas请求参数结构体
 */
export interface DescribeAreaBanAreasRequest {
  /**
   * 需要查询的域名
   */
  Domain: string
}

/**
 * AddDomainWhiteRule返回参数结构体
 */
export interface AddDomainWhiteRuleResponse {
  /**
   * 规则id
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpAccessControl返回参数结构体
 */
export interface DescribeIpAccessControlResponse {
  /**
   * 输出
   */
  Data?: IpAccessControlData
  /**
   * 已经使用的IP黑白名单的IP总数
   */
  UsedTotal?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProtectionStatus请求参数结构体
 */
export interface ModifyProtectionStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 1：开启WAF开关，0：关闭WAF开关
   */
  Status: number
  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
}

/**
 * 数据封装
 */
export interface CCRuleData {
  /**
   * cc规则
   */
  Res?: Array<CCRuleItem>
  /**
   * 规则数目
   */
  TotalCount?: number
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * instance列表
   */
  Instances?: Array<InstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleTagInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive?: boolean
  /**
   * 标签索引配置中的字段信息
   */
  KeyValues?: Array<AccessKeyValueInfo>
}

/**
 * ip黑白名单
 */
export interface IpAccessControlItem {
  /**
   * mongo表自增Id
   */
  Id?: string
  /**
   * 动作
   */
  ActionType?: number
  /**
   * ip
   */
  Ip?: string
  /**
   * 备注
   */
  Note?: string
  /**
   * 来源
   */
  Source?: string
  /**
   * 更新时间戳
   */
  TsVersion?: number
  /**
   * 有效截止时间戳
   */
  ValidTs?: number
  /**
   * 生效状态
   */
  ValidStatus?: number
  /**
   * 55000001
   */
  RuleId?: number
  /**
   * IP列表
   */
  IpList?: Array<string>
  /**
   * 规则创建时间
   */
  CreateTime?: number
  /**
   * 定时任务类型
   */
  JobType?: string
  /**
   * 周期任务类型
   */
  CronType?: string
  /**
   * 定时任务配置详情
   */
  JobDateTime?: JobDateTime
}

/**
 * UpsertCCAutoStatus返回参数结构体
 */
export interface UpsertCCAutoStatusResponse {
  /**
   * 正常情况为null
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGenerateDeals返回参数结构体
 */
export interface ModifyGenerateDealsResponse {
  /**
   * 计费下单响应结构体
   */
  Data?: DealData
  /**
   * 1:成功，0:失败
   */
  Status?: number
  /**
   * 返回message
   */
  ReturnMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpsertSession返回参数结构体
 */
export interface UpsertSessionResponse {
  /**
   * 结果
   */
  Data?: string
  /**
   * SessionID
   */
  SessionID?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志KeyValue对
 */
export interface AccessLogItem {
  /**
   * 日记Key
   */
  Key?: string
  /**
   * 日志Value
   */
  Value?: string
}

/**
 * SwitchDomainRules请求参数结构体
 */
export interface SwitchDomainRulesRequest {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 规则列表
   */
  Ids?: Array<number | bigint>
  /**
   * 开关状态，0表示关闭，1表示开启，2表示只观察
   */
  Status?: number
  /**
   * 设置为观察模式原因，
1表示业务自身原因观察，2表示系统规则误报上报，3表示核心业务灰度观察，4表示其他
   */
  Reason?: number
}

/**
 * DeleteSession请求参数结构体
 */
export interface DeleteSessionRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * clb-waf 或者 sprta-waf
   */
  Edition?: string
  /**
   * 要删除的SessionID
   */
  SessionID?: number
}

/**
 * SearchAttackLog请求参数结构体
 */
export interface SearchAttackLogRequest {
  /**
   * 查询的域名，所有域名使用all
   */
  Domain: string
  /**
   * 查询起始时间
   */
  StartTime: string
  /**
   * 查询结束时间
   */
  EndTime: string
  /**
   * 接口升级，这个字段传空字符串,翻页使用Page字段
   */
  Context: string
  /**
   * Lucene语法
   */
  QueryString: string
  /**
   * 查询的数量，默认10条，最多100条
   */
  Count?: number
  /**
   * 默认为desc，可以取值desc和asc
   */
  Sort?: string
  /**
   * 第几页，从0开始
   */
  Page?: number
}

/**
 * AddCustomRule返回参数结构体
 */
export interface AddCustomRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 添加成功的规则ID
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowTrend返回参数结构体
 */
export interface DescribeFlowTrendResponse {
  /**
   * 流量趋势数据
   */
  Data: Array<BotStatPointItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIpAccessControl返回参数结构体
 */
export interface CreateIpAccessControlResponse {
  /**
   * 新增的规则对应的ID
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpsertIpAccessControl请求参数结构体
 */
export interface UpsertIpAccessControlRequest {
  /**
   * 具体域名如：test.qcloudwaf.com
全局域名为：global
   */
  Domain: string
  /**
   * IP 参数列表，json数组由IP，source，note，action，valid_ts组成。IP对应配置的IP地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00））
   */
  Items: Array<string>
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
   */
  Edition?: string
  /**
   * 可选值为：batch（批量添加）、bot、cc、custom（非批量添加时的默认值）
   */
  SourceType?: string
}

/**
 * session定义
 */
export interface SessionItem {
  /**
   * 匹配类型
   */
  Category?: string
  /**
   * 起始模式
   */
  KeyOrStartMat?: string
  /**
   * 结束模式
   */
  EndMat?: string
  /**
   * 起始偏移
   */
  StartOffset?: string
  /**
   * 结束偏移
   */
  EndOffset?: string
  /**
   * 数据源
   */
  Source?: string
  /**
   * 更新时间戳
   */
  TsVersion?: string
  /**
   * SessionID
   */
  SessionId?: number
  /**
   * Session名
   */
  SessionName?: string
  /**
   * Session是否正在被启用
   */
  SessionInUsed?: boolean
  /**
   * Session关联的CC规则ID
   */
  RelatedRuleID?: Array<number | bigint>
}

/**
 * ModifyObject请求参数结构体
 */
export interface ModifyObjectRequest {
  /**
   * 修改对象标识
   */
  ObjectId: string
  /**
   * 改动作类型:Status修改开关，InstanceId绑定实例, Proxy设置代理状态
   */
  OpType: string
  /**
   * 新的Waf开关状态，如果和已有状态相同认为修改成功
   */
  Status?: number
  /**
   * 新的实例ID，如果和已绑定的实例相同认为修改成功
   */
  InstanceId?: string
  /**
   * 是否开启代理，0:不开启,1:以XFF的第一个IP地址作为客户端IP,2:以remote_addr作为客户端IP,3:从指定的头部字段获取客户端IP，字段通过IpHeaders字段给出(OpType为Status或Proxy时，该值有效)
   */
  Proxy?: number
  /**
   * IsCdn=3时，需要填此参数，表示自定义header(OpType为Status或Proxy时，该值有效)
   */
  IpHeaders?: Array<string>
}

/**
 * DescribeAccessExports请求参数结构体
 */
export interface DescribeAccessExportsRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   */
  TopicId: string
  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number
  /**
   * 分页单页限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * DescribeCustomWhiteRule请求参数结构体
 */
export interface DescribeCustomWhiteRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 容量
   */
  Limit: number
  /**
   * 过滤数组,name可以是如下的值： RuleID,RuleName,Match
   */
  Filters?: Array<FiltersItemNew>
  /**
   * asc或者desc
   */
  Order?: string
  /**
   * exp_ts或者mod_ts
   */
  By?: string
}

/**
 * DeleteAntiFakeUrl返回参数结构体
 */
export interface DeleteAntiFakeUrlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAreaBanRule请求参数结构体
 */
export interface CreateAreaBanRuleRequest {
  /**
   * 需要修改的域名
   */
  Domain: string
  /**
   * 需要新增的封禁地域
   */
  Areas: Array<Area>
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType: string
  /**
   * 定时任务配置
   */
  JobDateTime: JobDateTime
  /**
   * 地域信息的语言，支持cn、en，默认为中文cn
   */
  Lang: string
}

/**
 * 地域信息
 */
export interface Area {
  /**
   * 国家，除了标准的国家外还支持国内、国外这两个特殊的标识
   */
  Country: string
  /**
   * 省份
   */
  Region?: string
  /**
   * 城市
   */
  City?: string
}

/**
 * DescribeUserLevel返回参数结构体
 */
export interface DescribeUserLevelResponse {
  /**
   * 300:正常 400:严格
   */
  Level?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP黑白名单参数结构体，主要用于IP黑白名单的导入。
 */
export interface IpAccessControlParam {
  /**
   * IP列表
   */
  IpList: Array<string>
  /**
   * valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00））
   */
  ValidTs: number
  /**
   * 42为黑名单，40为白名单
   */
  ActionType: number
  /**
   * 备注
   */
  Note?: string
}

/**
 * DescribeCustomRuleList返回参数结构体
 */
export interface DescribeCustomRuleListResponse {
  /**
   * 规则详情
   */
  RuleList?: Array<DescribeCustomRulesRspRuleListItem>
  /**
   * 规则条数
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetInstanceQpsLimit请求参数结构体
 */
export interface GetInstanceQpsLimitRequest {
  /**
   * 套餐实例id
   */
  InstanceId: string
  /**
   * 套餐类型
   */
  Type?: string
}

/**
 * 参数包装
 */
export interface SessionData {
  /**
   * session定义
   */
  Res?: Array<SessionItem>
}

/**
 * DescribeAutoDenyIP返回参数结构体
 */
export interface DescribeAutoDenyIPResponse {
  /**
   * 查询IP封禁状态返回结果
   */
  Data?: IpHitItemsData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchDomainRules返回参数结构体
 */
export interface SwitchDomainRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceQpsLimit请求参数结构体
 */
export interface ModifyInstanceQpsLimitRequest {
  /**
   * 套餐实例id
   */
  InstanceId: string
  /**
   * qps上限
   */
  QpsLimit: number
}

/**
 * FreshAntiFakeUrl返回参数结构体
 */
export interface FreshAntiFakeUrlResponse {
  /**
   * 结果成功与否
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSpartaProtection请求参数结构体
 */
export interface DeleteSpartaProtectionRequest {
  /**
   * 域名列表
   */
  Domains: Array<string>
  /**
   * 实例类型
   */
  Edition?: string
  /**
   * 必填项。域名所属实例ID
   */
  InstanceID?: string
}

/**
 * saas和clb信息
 */
export interface UserDomainInfo {
  /**
   * 用户id
   */
  Appid?: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名id
   */
  DomainId?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * waf类型
   */
  Edition?: string
  /**
   * 版本
   */
  Level?: string
  /**
   * 指定域名访问日志字段的开关
   */
  WriteConfig?: string
  /**
   * 指定域名是否写cls的开关 1:写 0:不写
   */
  Cls?: number
  /**
   * 标记是否是混合云接入。hybrid表示混合云接入域名
   */
  CloudType?: string
  /**
   * 标记clbwaf类型
   */
  AlbType?: string
  /**
   * BOT开关状态
   */
  BotStatus?: number
  /**
   * API开关状态
   */
  ApiStatus?: number
}

/**
 * DescribeAntiFakeRules返回参数结构体
 */
export interface DescribeAntiFakeRulesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 返回值
   */
  Data?: Array<CacheUrlItems>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAreaBanRule返回参数结构体
 */
export interface CreateAreaBanRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAttackTotalCount请求参数结构体
 */
export interface GetAttackTotalCountRequest {
  /**
   * 起始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 查询的域名，全部域名填all
   */
  Domain: string
  /**
   * 查询条件，默认为""
   */
  QueryString: string
}

/**
 * DeleteDomainWhiteRules返回参数结构体
 */
export interface DeleteDomainWhiteRulesResponse {
  /**
   * 出参
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttackOverview返回参数结构体
 */
export interface DescribeAttackOverviewResponse {
  /**
   * 访问请求总数
   */
  AccessCount?: number
  /**
   * Web攻击总数
   */
  AttackCount?: number
  /**
   * 访问控制总数
   */
  ACLCount?: number
  /**
   * CC攻击总数
   */
  CCCount?: number
  /**
   * Bot攻击总数
   */
  BotCount?: number
  /**
   * api资产总数
   */
  ApiAssetsCount?: number
  /**
   * api风险事件数量
   */
  ApiRiskEventCount?: number
  /**
   * 黑名单总数
   */
  IPBlackCount?: number
  /**
   * 防篡改总数
   */
  TamperCount?: number
  /**
   * 信息泄露总数
   */
  LeakCount?: number
  /**
   * API风险事件周环比
   */
  ApiRiskEventCircleCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAreaBanAreas请求参数结构体
 */
export interface AddAreaBanAreasRequest {
  /**
   * 需要修改的域名
   */
  Domain: string
  /**
   * 需要新增的封禁地域
   */
  Areas: Array<string>
  /**
   * waf版本信息，spart-waf或者clb-waf，其他无效，请一定填写
   */
  Edition?: string
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时任务配置
   */
  JobDateTime?: JobDateTime
}

/**
 * DescribeCCRuleList返回参数结构体
 */
export interface DescribeCCRuleListResponse {
  /**
   * 查询到的CC规则的列表
   */
  Data?: CCRuleLists
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCCAutoStatus请求参数结构体
 */
export interface DescribeCCAutoStatusRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * DescribeDomainDetailsClb请求参数结构体
 */
export interface DescribeDomainDetailsClbRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名id
   */
  DomainId: string
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * 规则定时任务数据结构
 */
export interface TimedJob {
  /**
   * 开始时间戳，单位为秒
   */
  StartDateTime?: number
  /**
   * 结束时间戳，单位为秒
   */
  EndDateTime?: number
}

/**
 * waf 域名扩展套餐
 */
export interface DomainPackageNew {
  /**
   * 资源ID
   */
  ResourceIds: string
  /**
   * 过期时间
   */
  ValidTime: string
  /**
   * 是否自动续费，1：自动续费，0：不自动续费
   */
  RenewFlag: number
  /**
   * 套餐购买个数
   */
  Count: number
  /**
   * 套餐购买地域，clb-waf暂时没有用到
   */
  Region: string
}

/**
 * ModifyDomainsCLSStatus返回参数结构体
 */
export interface ModifyDomainsCLSStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBotStatus返回参数结构体
 */
export interface ModifyBotStatusResponse {
  /**
   * 正常情况为null
   */
  Data?: string
  /**
   * 未购买BOT的域名列表
   */
  UnSupportedList?: Array<string>
  /**
   * 已购买但操作失败的域名列表
   */
  FailDomainList?: Array<string>
  /**
   * 成功数目
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名-规则id结构体
 */
export interface DomainRuleId {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 规则id
   */
  RuleId?: string
}

/**
 * DescribeProtectionModes请求参数结构体
 */
export interface DescribeProtectionModesRequest {
  /**
   * sparta-waf或clb
   */
  Edition: string
  /**
   * 域名
   */
  Domain: string
}

/**
 * 防护域名端口配置信息
 */
export interface PortItem {
  /**
   * 监听端口配置
   */
  Port: string
  /**
   * 与Port一一对应，表示端口对应的协议
   */
  Protocol: string
  /**
   * 与Port一一对应,  表示回源端口
   */
  UpstreamPort: string
  /**
   * 与Port一一对应,  表示回源协议
   */
  UpstreamProtocol: string
  /**
   * Nginx的服务器ID,新增域名时填"0"
   */
  NginxServerId: string
}

/**
 * Tiga规则
 */
export interface RuleType {
  /**
   * 规则ID
   */
  TypeID?: string
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 规则类型描述

   */
  Desc?: string
  /**
   * 规则类型状态，即类型生效开关，0：关闭，1：开启
   */
  RuleTypeStatus?: number
  /**
   * 类型下生效的规则数量
   */
  ActiveRuleCount?: number
  /**
   * 类型下的规则总数量
   */
  TotalRuleCount?: number
}

/**
 * DescribeCCAutoStatus返回参数结构体
 */
export interface DescribeCCAutoStatusResponse {
  /**
   * 配置状态，0表示关闭，1表示开启
   */
  AutoCCSwitch?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomRuleStatus请求参数结构体
 */
export interface ModifyCustomRuleStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * 开关的状态，1是开启、0是关闭
   */
  Status: number
  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
  /**
   * 规则id
   */
  DomainRuleIdList?: Array<DomainRuleId>
}

/**
 * 用于接口DescribeAccessHistogram 的出参
 */
export interface AccessHistogramItem {
  /**
   * 时间，单位ms
   * @deprecated
   */
  BTime?: number
  /**
   * 日志条数
   */
  Count?: number
  /**
   * 时间，单位ms
   */
  BeginTime?: number
}

/**
 * ModifySpartaProtectionMode请求参数结构体
 */
export interface ModifySpartaProtectionModeRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 防护状态：
10：规则观察&&AI关闭模式，11：规则观察&&AI观察模式，12：规则观察&&AI拦截模式
20：规则拦截&&AI关闭模式，21：规则拦截&&AI观察模式，22：规则拦截&&AI拦截模式
   */
  Mode: number
  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
  /**
   * 0是修改规则引擎状态，1是修改AI的状态
   */
  Type?: number
  /**
   * 实例id
   */
  InstanceID?: string
}

/**
 * DescribeAttackOverview请求参数结构体
 */
export interface DescribeAttackOverviewRequest {
  /**
   * 查询开始时间
   */
  FromTime: string
  /**
   * 查询结束时间
   */
  ToTime: string
  /**
   * 客户的Appid
   */
  Appid?: number
  /**
   * 被查询的域名
   */
  Domain?: string
  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string
  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
}

/**
 * DescribeUserLevel请求参数结构体
 */
export interface DescribeUserLevelRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * 一个实例的详细信息
 */
export interface InstanceInfo {
  /**
   * 实例唯一ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 实例对应资源ID，计费使用
   */
  ResourceIds: string
  /**
   * 实例所属地域
   */
  Region: string
  /**
   * 付费模式
   */
  PayMode: number
  /**
   * 自动续费标识。
0：关闭
1：开启
   */
  RenewFlag: number
  /**
   * 弹性计费开关。
0：关闭
1：开启
   */
  Mode: number
  /**
   * 实例套餐版本。
101：小微版
102：超轻版
2：高级版
3：企业版
4：旗舰版
6：独享版
   */
  Level: number
  /**
   * 实例过期时间
   */
  ValidTime: string
  /**
   * 实例开始时间
   */
  BeginTime: string
  /**
   * 已配置域名个数
   */
  DomainCount: number
  /**
   * 域名数量上限
   */
  SubDomainLimit: number
  /**
   * 已配置主域名个数
   */
  MainDomainCount: number
  /**
   * 主域名数量上限
   */
  MainDomainLimit: number
  /**
   * 实例30天内QPS峰值
   */
  MaxQPS: number
  /**
   * qps扩展包信息
   */
  QPS: QPSPackageNew
  /**
   * 域名扩展包信息
   */
  DomainPkg: DomainPackageNew
  /**
   * 用户appid
   */
  AppId: number
  /**
   * clb或saas
   */
  Edition: string
  /**
   * 业务安全包
   */
  FraudPkg?: FraudPkg
  /**
   * Bot资源包
   */
  BotPkg?: BotPkg
  /**
   * bot的qps详情
   */
  BotQPS?: BotQPS
  /**
   * qps弹性计费上限
   */
  ElasticBilling?: number
  /**
   * 攻击日志投递开关
   */
  AttackLogPost?: number
  /**
   * 带宽峰值，单位为B/s(字节每秒)
   */
  MaxBandwidth?: number
  /**
   * api安全是否购买
   */
  APISecurity?: number
  /**
   * 购买的qps规格
   */
  QpsStandard?: number
  /**
   * 购买的带宽规格
   */
  BandwidthStandard?: number
  /**
   * 实例状态
   */
  Status?: number
  /**
   * 实例沙箱qps值
   */
  SandboxQps?: number
  /**
   * 是否api 安全试用
   */
  IsAPISecurityTrial?: number
  /**
   * 重保包
   */
  MajorEventsPkg?: MajorEventsPkg
  /**
   * 混合云子节点包
   */
  HybridPkg?: HybridPkg
  /**
   * API安全资源包
   */
  ApiPkg?: ApiPkg
  /**
   * 小程序安全加速包
   */
  MiniPkg?: MiniPkg
  /**
   * 小程序qps规格
   */
  MiniQpsStandard?: number
  /**
   * 小程序qps峰值
   */
  MiniMaxQPS?: number
  /**
   * 最近一次超量时间
   */
  LastQpsExceedTime?: string
  /**
   * 小程序安全接入ID数量扩张包
   */
  MiniExtendPkg?: MiniExtendPkg
  /**
   * 计费项
   */
  BillingItem?: string
  /**
   * 实例延期释放标识
   */
  FreeDelayFlag?: number
  /**
   * 最近3天最大qps
   */
  Last3MaxQPS?: number
  /**
   * 最近3天最大带宽
   */
  Last3MaxBandwidth?: number
}

/**
 * DescribeUserSignatureRuleV2返回参数结构体
 */
export interface DescribeUserSignatureRuleV2Response {
  /**
   * 规则总数
   */
  Total?: number
  /**
   * 规则列表
   */
  Rules?: Array<UserSignatureRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设置WAF状态的结构体
 */
export interface HostStatus {
  /**
   * 域名
   */
  Domain: string
  /**
   * 域名ID
   */
  DomainId: string
  /**
   * WAF的开关，1：开，0：关
   */
  Status: number
  /**
   * 实例ID
   */
  InstanceID?: string
}

/**
 * ModifyAntiFakeUrl返回参数结构体
 */
export interface ModifyAntiFakeUrlResponse {
  /**
   * 结果
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBatchIpAccessControl请求参数结构体
 */
export interface DescribeBatchIpAccessControlRequest {
  /**
   * 筛选条件，支持 ActionType（可选的值为40：白名单，42：黑名单），ValidStatus（可选的值0：全部，1：生效，2：过期），Ip，Domains（域名列表），GroupId（防护对象组ID），GroupName（防护对象组名），RuleId（规则ID），TimerType（生效方式，1：永久生效，2：定时生效，3：按周周期生效，4：按月周期生效）
   */
  Filters: Array<FiltersItemNew>
  /**
   * 偏移
   */
  OffSet?: number
  /**
   * 限制
   */
  Limit?: number
  /**
   * 排序参数
   */
  Sort?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 容量
   */
  Limit: number
  /**
   * 过滤数组
   */
  Filters?: Array<FiltersItemNew>
  /**
   * 释放延期标识
   */
  FreeDelayFlag?: number
}

/**
 * ModifyAntiInfoLeakRules请求参数结构体
 */
export interface ModifyAntiInfoLeakRulesRequest {
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * 规则名称
   */
  Name: string
  /**
   * 域名
   */
  Domain: string
  /**
   * Action 值
   */
  ActionType: number
  /**
   * 策略数组
   */
  Strategies: Array<StrategyForAntiInfoLeak>
}

/**
 * DescribeUserSignatureClass请求参数结构体
 */
export interface DescribeUserSignatureClassRequest {
  /**
   * 查询域名
   */
  Domain: string
}

/**
 * 单条日志数据描述
 */
export interface AccessLogInfo {
  /**
   * 日志时间，单位ms
   */
  Time?: number
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志主题名称
   */
  TopicName?: string
  /**
   * 日志来源IP
   */
  Source?: string
  /**
   * 日志文件名称
   */
  FileName?: string
  /**
   * 日志上报请求包的ID
   */
  PkgId?: string
  /**
   * 请求包内日志的ID
   */
  PkgLogId?: string
  /**
   * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogJson?: string
}

/**
 * 通用返回
 */
export interface CommonRspData {
  /**
   * 操作结果
   */
  Code?: number
  /**
   * 输出信息
   */
  Msg?: string
}

/**
 * DescribeBatchIpAccessControl返回参数结构体
 */
export interface DescribeBatchIpAccessControlResponse {
  /**
   * 输出
   */
  Data?: BatchIpAccessControlData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainDetailsSaas返回参数结构体
 */
export interface DescribeDomainDetailsSaasResponse {
  /**
   * 域名详情
   */
  DomainsPartInfo?: DomainsPartInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApiAnalyzeStatus请求参数结构体
 */
export interface ModifyApiAnalyzeStatusRequest {
  /**
   * 开关状态
   */
  Status: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 需要批量开启的实体列表
   */
  TargetList?: Array<TargetEntity>
}

/**
 * ModifyAntiInfoLeakRuleStatus返回参数结构体
 */
export interface ModifyAntiInfoLeakRuleStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAreaBanStatus返回参数结构体
 */
export interface ModifyAreaBanStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIpAccessControlV2请求参数结构体
 */
export interface DeleteIpAccessControlV2Request {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则ID列表，支持批量删除，在DeleteAll参数为true的时候可以不传
   */
  RuleIds?: Array<number | bigint>
  /**
   * 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定IP名单，批量防护不支持
   */
  DeleteAll?: boolean
  /**
   * batch表示为批量防护的IP黑白名单
   */
  SourceType?: string
  /**
   * IP黑白名单类型，40为IP白名单，42为IP黑名单，在DeleteAll为true的时候必传此参数
   */
  ActionType?: number
}

/**
 * DescribeTopAttackDomain请求参数结构体
 */
export interface DescribeTopAttackDomainRequest {
  /**
   * 查询起始时间
   */
  FromTime: string
  /**
   * 查询结束时间
   */
  ToTime: string
  /**
   * TOP N,可从0-10选择，默认是10
   */
  Count?: number
  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string
  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
}

/**
 * DescribeAccessFastAnalysis返回参数结构体
 */
export interface DescribeAccessFastAnalysisResponse {
  /**
   * 注意：此字段可能返回 null，表示取不到有效值
   */
  FieldValueRatioInfos?: Array<AccessFieldValueRatioInfo>
  /**
   * 日志条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDomainIpv6Status返回参数结构体
 */
export interface ModifyDomainIpv6StatusResponse {
  /**
   * 返回的状态 （0: 操作失败 1:操作成功 2:企业版以上不支持 3:企业版以下不支持 ）
   */
  Ipv6Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostLimit返回参数结构体
 */
export interface DescribeHostLimitResponse {
  /**
   * 成功返回的状态码
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAntiFakeUrl请求参数结构体
 */
export interface DeleteAntiFakeUrlRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * Id
   */
  Id: number
}

/**
 * DescribeSpartaProtectionInfo请求参数结构体
 */
export interface DescribeSpartaProtectionInfoRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 版本
   */
  Edition?: string
  /**
   * 实例
   */
  InstanceID?: string
}

/**
 * 防篡改url元素
 */
export interface CacheUrlItems {
  /**
   * 标识
   */
  Id?: number
  /**
   * 名字
   */
  Name?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 网址
   */
  Uri?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * ModifyUserSignatureRuleV2请求参数结构体
 */
export interface ModifyUserSignatureRuleV2Request {
  /**
   * 域名
   */
  Domain: string
  /**
   * 主类id
   */
  MainClassID?: string
  /**
   * 主类开关0=关闭，1=开启，2=只告警
   */
  Status?: number
  /**
   * 下发修改的规则列表
   */
  RuleID?: Array<ReqUserRule>
}

/**
 * ModifyWebshellStatus返回参数结构体
 */
export interface ModifyWebshellStatusResponse {
  /**
   * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateDealsAndPayNew返回参数结构体
 */
export interface GenerateDealsAndPayNewResponse {
  /**
   * 计费下单响应结构体
   */
  Data?: DealData
  /**
   * 1:成功，0:失败
   */
  Status?: number
  /**
   * 返回message
   */
  ReturnMessage?: string
  /**
   * 购买的实例ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCCRule请求参数结构体
 */
export interface DescribeCCRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 页码
   */
  Offset: number
  /**
   * 页的数目
   */
  Limit: number
  /**
   * 排序参数
   */
  Sort?: string
  /**
   * clb-waf 或者 sparta-waf
   */
  Edition?: string
  /**
   * 过滤条件
   */
  Name?: string
}

/**
 * BatchOperateUserSignatureRules请求参数结构体
 */
export interface BatchOperateUserSignatureRulesRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 0:关闭，1:开启，2:仅观察
   */
  Status: string
  /**
   * 如果SelectedAll为true，则表示反选的规则，否则表示手动选择的规则ID
   */
  RuleIds?: Array<string>
  /**
   * 仅观察原因
   */
  Reason?: number
  /**
   * 是否全选
   */
  SelectedAll?: boolean
  /**
   * 过滤
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * GetAttackDownloadRecords返回参数结构体
 */
export interface GetAttackDownloadRecordsResponse {
  /**
   * 下载攻击日志记录数组
   */
  Records?: Array<DownloadAttackRecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAreaBanRule请求参数结构体
 */
export interface DescribeAreaBanRuleRequest {
  /**
   * 需要查询的域名
   */
  Domain: string
}

/**
 * DescribeApiDetail返回参数结构体
 */
export interface DescribeApiDetailResponse {
  /**
   * 请求样例，json字符串格式
   */
  Log?: string
  /**
   * 请求参数样例列表
   */
  ParameterList?: Array<ApiParameterType>
  /**
   * 当前场景标签
   */
  Scene?: string
  /**
   * 敏感字段
   */
  SensitiveFields?: Array<string>
  /**
   * 7天内是否活跃
   */
  IsActive?: boolean
  /**
   * 访问ip数
   */
  IpCount?: number
  /**
   * 访问地域数量
   */
  RegionCount?: number
  /**
   * 关联事件数
   */
  EventCount?: number
  /**
   * 涉敏数据条数
   */
  SensitiveCount?: number
  /**
   * 风险等级
   */
  Level?: number
  /**
   * 响应体
   */
  RspLog?: string
  /**
   * 昨日访问峰值QPS
   */
  MaxQPS?: number
  /**
   * 历史样例
   */
  ApiDetailSampleHistory?: Array<ApiDetailSampleHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Vip信息
 */
export interface VipInfo {
  /**
   * VIP地址
   */
  Vip?: string
  /**
   * waf实例id
   */
  InstanceId?: string
  /**
   * 创建时间
   */
  InstanceCreateTime?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * ip运营商类型
   */
  ISP?: string
  /**
   * ip类型
   */
  VipType?: string
  /**
   * 域名信息
   */
  AddressName?: string
}

/**
 * DescribeAccessHistogram返回参数结构体
 */
export interface DescribeAccessHistogramResponse {
  /**
   * 柱状图间隔时间差，单位ms
   */
  Interval?: number
  /**
   * 满足条件的日志条数
   */
  TotalCount?: number
  /**
   * 注意：此字段可能返回 null，表示取不到有效值
   */
  HistogramInfos?: Array<AccessHistogramItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopAttackDomain返回参数结构体
 */
export interface DescribeTopAttackDomainResponse {
  /**
   * CC攻击域名列表
   */
  CC?: Array<KVInt>
  /**
   * Web攻击域名列表
   */
  Web?: Array<KVInt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费下单接口出入参Goods
 */
export interface Goods {
  /**
   * 付费类型，1:预付费，0:后付费
   */
  PayMode: number
  /**
   * 商品数量
   */
  GoodsNum: number
  /**
   * 商品明细
   */
  GoodsDetail: GoodsDetail
  /**
   * 默认为0
   */
  ProjectId: number
  /**
   * 计费类目ID，对应cid
   */
  GoodsCategoryId?: number
  /**
   * 平台类型，默认1
   */
  Platform?: number
  /**
   * 购买waf实例区域ID
   */
  RegionId?: number
}

/**
 * UpsertIpAccessControl返回参数结构体
 */
export interface UpsertIpAccessControlResponse {
  /**
   * 添加或修改失败的条目
   */
  FailedItems?: string
  /**
   * 添加或修改失败的数目
   */
  FailedCount?: number
  /**
   * 添加或修改的IP数据Id列表
   */
  Ids?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessHistogram请求参数结构体
 */
export interface DescribeAccessHistogramRequest {
  /**
   * 老版本查询的日志主题ID，新版本传空字符串即可
   */
  TopicId: string
  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number
  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number
  /**
   * 查询语句，语句长度最大为4096
   */
  Query: string
  /**
   * 柱状图间隔时间差，单位ms
   */
  Interval?: number
}

/**
 * DescribeWafThreatenIntelligence请求参数结构体
 */
export type DescribeWafThreatenIntelligenceRequest = null

/**
 * DescribeAccessExports返回参数结构体
 */
export interface DescribeAccessExportsResponse {
  /**
   * 日志导出ID。
   */
  TotalCount?: number
  /**
   * 日志导出列表
   */
  Exports?: Array<ExportAccessInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCustomRule返回参数结构体
 */
export interface DeleteCustomRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SAASWAF规则回源时的规则数据结构
 */
export interface UpstreamRule {
  /**
   * 匹配的关键字。目前支持host、uri两种
   */
  KeyName: string
  /**
   * 逻辑符号。
equal：等于
not equal：不等于
belong：属于
not belong：不属于
   */
  Symbol: string
  /**
   * 匹配的内容。equal和not equal时，数组只能有一个元素
   */
  ContentList: Array<string>
  /**
   * 规则匹配后生效的回源地址。
   */
  AddressList: Array<string>
  /**
   * 回源负载均衡类型，仅多个回源地址时生效。
0：轮询
1：IP_HASH
   */
  BalanceType: number
}

/**
 * DescribeHistogram请求参数结构体
 */
export interface DescribeHistogramRequest {
  /**
   * 起始时间
   */
  FromTime: string
  /**
   * 结束时间
   */
  ToTime: string
  /**
   * 聚类字段，ip为ip聚合，art为响应耗时聚合，url为url聚合，local为ip转化的城市聚合,qps为每秒请求数峰值的聚合，up为上行带宽峰值聚合，down为下行带峰值聚合
   */
  QueryField: string
  /**
   * 条件，access为访问日志，attack为攻击日志
   */
  Source: string
  /**
   * 兼容Host，逐步淘汰Host字段
   */
  Host?: string
  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string
  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
  /**
   * 域名过滤，不传则不过滤，用于替代Host字段，逐步淘汰Host
   */
  Domain?: string
}

/**
 * DeleteCCRule返回参数结构体
 */
export interface DeleteCCRuleResponse {
  /**
   * 一般为null
   */
  Data?: string
  /**
   * 操作的规则Id
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAreaBanAreas接口的回包
 */
export interface DescribeAreaBanAreasRsp {
  /**
   * 状态 "0"：未开启地域封禁 "1"：开启地域封禁
   */
  Status?: string
  /**
   * 数据来源 custom-自定义(默认)、batch-批量防护
   */
  Source?: string
  /**
   * 字符串数据，配置的地域列表
   */
  Areas?: Array<string>
  /**
   * 定时任务类型
   */
  JobType?: string
  /**
   * 定时任务详细配置
   */
  JobDateTime?: JobDateTime
  /**
   * 周期任务配置
   */
  CronType?: string
}

/**
 * UpsertCCRule请求参数结构体
 */
export interface UpsertCCRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 名称
   */
  Name: string
  /**
   * 状态
   */
  Status: number
  /**
   * 高级模式（是否使用Session检测），0表示不启用，1表示启用
   */
  Advance: string
  /**
   * CC检测阈值
   */
  Limit: string
  /**
   * CC检测周期
   */
  Interval: string
  /**
   * 检测Url
   */
  Url: string
  /**
   * 匹配方法，0表示等于，1表示前缀匹配，2表示包含，3表示不等于，6表示后缀匹配，7表示不包含
   */
  MatchFunc: number
  /**
   * 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截，26表示精准人机识别，27表示JS校验
   */
  ActionType: string
  /**
   * 优先级
   */
  Priority: number
  /**
   * 动作有效时间
   */
  ValidTime: number
  /**
   * [{\"key\":\"Method\",\"args\":[\"=R0VU\"],\"match\":\"0\",\"encodeflag\":true}] Key可选值为 Method、Post、Referer、Cookie、User-Agent、CustomHeader match可选值为，当Key为Method的时候可选值为0（等于）、3（不等于）。 Key为Post的时候可选值为0（等于）、3（不等于），Key为Cookie的时候可选值为0（等于）、2（包含），3（不等于）、7（不包含）、 当Key为Referer的时候可选值为0（等于）、3（不等于）、1（前缀匹配）、6（后缀匹配）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）， 当Key为Cookie的时候可选值为0（等于）、3（不等于）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）， 当Key为User-Agent的时候可选值为0（等于）、3（不等于）、1（前缀匹配）、6（后缀匹配）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）， 当Key为CustomHeader的时候可选值为0（等于）、3（不等于）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）。 args用来表示匹配内容，需要设置encodeflag为true，当Key为Post、Cookie、CustomHeader时，用等号=来分别串接Key和Value，并分别用Base64编码，类似YWJj=YWJj。当Key为Referer、User-Agent时，用等号=来串接Value，类似=YWJj。
   */
  OptionsArr?: string
  /**
   * waf版本，sparta-waf或者clb-waf
   */
  Edition?: string
  /**
   * 操作类型
   */
  Type?: number
  /**
   * 添加规则的来源事件id
   */
  EventId?: string
  /**
   * 规则需要启用的SessionID
   */
  SessionApplied?: Array<number | bigint>
  /**
   * 规则ID，新增时填0
   */
  RuleId?: number
  /**
   * 规则创建时间
   */
  CreateTime?: number
  /**
   * url长度
   */
  Length?: number
}

/**
 * ModifyProtectionStatus返回参数结构体
 */
export interface ModifyProtectionStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
  /**
   * 分页偏移量，取Limit整数倍。最小值为0，最大值= Total/Limit向上取整
   */
  Offset: number
  /**
   * 返回域名的数量
   */
  Limit: number
  /**
   * 过滤数组，过滤字段包括：Edition：实例版本，sparta-waf或clb-waf Domain：域名 DomainId：域名ID InstanceName：实例名称 InstanceId：实例ID FlowMode：流量接入模式，仅支持CLBWAF FlowCheckMode：流量体检模式，仅支持CLBWAF ClsStatus：日志开关 Status：WAF开关BotStatus：BOT开关 ApiStatus：API安全开关 Engine：引擎模式 UpstreamIP：源站IP，仅支持SAAS型WAF UpstreamDomain：源站域名，仅支持SAAS型WAF DomainState：域名状态，仅支持SAAS型WAF SgState：安全组状态，仅支持SAAS型WAF Label：分组标签，同时仅支持一种标签过滤
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * ModifyDomainPostAction请求参数结构体
 */
export interface ModifyDomainPostActionRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 0-关闭投递，1-开启投递
   */
  PostCLSAction: number
  /**
   * 0-关闭投递，1-开启投递
   */
  PostCKafkaAction: number
}

/**
 * Bot资源信息
 */
export interface BotPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 申请数量
   */
  InquireNum?: number
  /**
   * 使用数量
   */
  UsedNum?: number
  /**
   * 子产品code
   */
  Type?: string
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * 购买页bot6折
   */
  BotCPWaf?: number
  /**
   * 控制台买bot5折
   */
  BotNPWaf?: number
  /**
   * 7天bot试用标识 1 试用 0 没有试用
   */
  IsBotTrial?: number
}

/**
 * UpsertCCAutoStatus请求参数结构体
 */
export interface UpsertCCAutoStatusRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 状态值
   */
  Value: number
  /**
   * 版本：clb-waf, spart-waf
   */
  Edition?: string
}

/**
 * DescribeProtectionModes返回参数结构体
 */
export interface DescribeProtectionModesResponse {
  /**
   * 规则大类ID及防护模式
   */
  Modes?: Array<TigaMainClassMode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWafAutoDenyRules返回参数结构体
 */
export interface DescribeWafAutoDenyRulesResponse {
  /**
   * 攻击次数阈值
   */
  AttackThreshold?: number
  /**
   * 攻击时间阈值
   */
  TimeThreshold?: number
  /**
   * 自动封禁时间
   */
  DenyTimeThreshold?: number
  /**
   * 自动封禁状态
   */
  DefenseStatus?: number
  /**
   * 数据来源Source字段 custom-自定义(默认)、batch-domain-批量域名

   */
  Source?: string
  /**
   * 重保护网域名状态
   */
  HWState?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefreshAccessCheckResult请求参数结构体
 */
export interface RefreshAccessCheckResultRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * 封装参数
 */
export interface IpHitItemsData {
  /**
   * 数组封装
   */
  Res?: Array<IpHitItem>
  /**
   * 总数目
   */
  TotalCount?: number
}

/**
 * 域名的webshell开启状态
 */
export interface WebshellStatus {
  /**
   * 域名
   */
  Domain: string
  /**
   * webshell开关，1：开。0：关。2：观察
   */
  Status: number
}

/**
 * DescribeSpartaProtectionInfo返回参数结构体
 */
export interface DescribeSpartaProtectionInfoResponse {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名ID
   */
  DomainId?: string
  /**
   * cname取值
   */
  Cname?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 源IP地址列表
   */
  SrcList?: Array<string>
  /**
   * 证书类型
   */
  CertType?: string
  /**
   * 证书
   */
  Cert?: string
  /**
   * 私有密钥
   */
  PrivateKey?: string
  /**
   * ssl的id
   */
  Sslid?: string
  /**
   * 是否是cdn
   */
  IsCdn?: string
  /**
   * 灰度区域列表
   */
  GrayAreas?: Array<string>
  /**
   * 引擎
   */
  Engine?: string
  /**
   * HTTPS重写
   */
  HttpsRewrite?: string
  /**
   * upstreamType取值
   */
  UpstreamType?: string
  /**
   * upstreamDomain取值
   */
  UpstreamDomain?: string
  /**
   * upstreamScheme取值
   */
  UpstreamScheme?: string
  /**
   * 是否是HTTP2
   */
  IsHttp2?: string
  /**
   * 是否含有websocket
   */
  IsWebsocket?: string
  /**
   * loadBalance信息
   */
  LoadBalance?: string
  /**
   * httpsUpstreamPort取值
   */
  HttpsUpstreamPort?: string
  /**
   * port信息
   */
  Ports?: Array<PortItem>
  /**
   * 是否灰度
   */
  IsGray?: string
  /**
   * 模式
   */
  Mode?: string
  /**
   * 防御等级,100,200,300
   */
  Level?: string
  /**
   * 与源站是否保持长连接
   */
  IsKeepAlive?: string
  /**
   * 0：BGP 1：Anycast
   */
  Anycast?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleStatus请求参数结构体
 */
export interface ModifyModuleStatusRequest {
  /**
   * 需要设置的domain
   */
  Domain: string
  /**
   * Web 安全模块开关，0或1
   */
  WebSecurity: number
  /**
   * 访问控制模块开关，0或者1
   */
  AccessControl: number
  /**
   * CC模块开关，0或者1
   */
  CcProtection: number
  /**
   * API安全模块开关，0或者1
   */
  ApiProtection: number
  /**
   * 防篡改模块开关，0或者1
   */
  AntiTamper?: number
  /**
   * 防泄漏模块开关，0或者1
   */
  AntiLeakage?: number
  /**
   * 限流模块开关，0或1
   */
  RateLimit?: number
}

/**
 * ModifyUserSignatureRuleV2返回参数结构体
 */
export interface ModifyUserSignatureRuleV2Response {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志KeyValue对数组，用于搜索访问日志
 */
export interface AccessLogItems {
  /**
   * 分析结果返回的KV数据对
   */
  Data?: Array<AccessLogItem>
}

/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
  /**
   * 新名称
   */
  InstanceName: string
  /**
   * 实例id
   */
  InstanceID: string
  /**
   * 实例版本，支持clb-waf、sparta-waf
   */
  Edition: string
}

/**
 * DescribePorts返回参数结构体
 */
export interface DescribePortsResponse {
  /**
   * http端口列表
   */
  HttpPorts?: Array<string>
  /**
   * https端口列表
   */
  HttpsPorts?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomRule请求参数结构体
 */
export interface ModifyCustomRuleRequest {
  /**
   * 编辑的域名
   */
  Domain: string
  /**
   * 编辑的规则ID
   */
  RuleId: number
  /**
   * 编辑的规则名称
   */
  RuleName: string
  /**
   * 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向，5代表JS校验
   */
  RuleAction: string
  /**
   * 匹配条件数组
   */
  Strategies: Array<Strategy>
  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
  /**
   * 动作为重定向的时候重定向URL，默认为"/"
   */
  Redirect?: string
  /**
   * 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。
默认是"geoip,cc,owasp,ai,antileakage"
   * @deprecated
   */
  Bypass?: string
  /**
   * 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。
默认是100
   */
  SortId?: number
  /**
   * 规则生效截止时间，0：永久生效，其它值为对应时间的时间戳。
默认是0
   */
  ExpireTime?: number
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时任务配置
   */
  JobDateTime?: JobDateTime
  /**
   * 规则来源，判断是不是小程序的
   */
  Source?: string
  /**
   * 开关状态，小程序风控规则的时候传该值
   */
  Status?: number
  /**
   * 拦截页面id
   */
  PageId?: string
  /**
   * 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系
   */
  LogicalOp?: string
}

/**
 * ModifyDomainWhiteRule请求参数结构体
 */
export interface ModifyDomainWhiteRuleRequest {
  /**
   * 需要更改的规则的域名
   */
  Domain?: string
  /**
   * 白名单id
   */
  Id?: number
  /**
   * 规则的id列表
   */
  Rules?: Array<number | bigint>
  /**
   * 规则匹配路径
   */
  Url?: string
  /**
   * 规则匹配方法
   */
  Function?: string
  /**
   * 规则的开关状态，0表示关闭开关，1表示打开开关
   */
  Status?: number
}

/**
 * DescribePeakPoints请求参数结构体
 */
export interface DescribePeakPointsRequest {
  /**
   * 查询起始时间
   */
  FromTime: string
  /**
   * 查询终止时间
   */
  ToTime: string
  /**
   * 查询的域名，如果查询所有域名数据，该参数不填写
   */
  Domain?: string
  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string
  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
  /**
   * 十二个值可选：
access-峰值qps趋势图
botAccess- bot峰值qps趋势图
down-下行峰值带宽趋势图
up-上行峰值带宽趋势图
attack-Web攻击总数趋势图
cc-CC攻击总数趋势图
bw-黑IP攻击总数趋势图
tamper-防篡改攻击总数趋势图
leak-防泄露攻击总数趋势图
acl-访问控制攻击总数趋势图
http_status-状态码各次数趋势图
wx_access-微信小程序峰值qps趋势图
   */
  MetricName?: string
}

/**
 * ModifyHostFlowMode返回参数结构体
 */
export interface ModifyHostFlowModeResponse {
  /**
   * 成功的状态码
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAntiInfoLeakRules返回的规则元素中的具体的规则元素
 */
export interface DescribeAntiInfoLeakRulesStrategyItem {
  /**
   * 字段
   */
  Field?: string
  /**
   * 条件
   */
  CompareFunc?: string
  /**
   * 内容
   */
  Content?: string
}

/**
 * api请求参数类型
 */
export interface ApiParameterType {
  /**
   * 参数名称
   */
  ParameterName?: string
  /**
   * 参数类型
   */
  Type?: string
  /**
   * 参数位置
   */
  Location?: string
  /**
   * 数据标签(敏感字段)
   */
  Label?: Array<string>
  /**
   * 时间戳
   */
  Timestamp?: number
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 来源是请求或者响应
   */
  Source?: string
  /**
   * 是否需要泛化 ，0表示不需要，1表示需要
   */
  IsPan?: number
  /**
   * 是否鉴权，1表示是，0表示否
   */
  IsAuth?: number
}

/**
 * bot的趋势图对象
 */
export interface BotStatPointItem {
  /**
   * 横坐标
   */
  TimeStamp: string
  /**
   * value的所属对象
   */
  Key: string
  /**
   * 纵列表
   */
  Value: number
  /**
   * Key对应的页面展示内容
   */
  Label: string
}

/**
 * DescribeCiphersDetail请求参数结构体
 */
export type DescribeCiphersDetailRequest = null

/**
 * CC规则详情
 */
export interface CCRuleItems {
  /**
   * 名字
   */
  Name?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 模式
   */
  Advance?: number
  /**
   * 限制
   */
  Limit?: number
  /**
   * 范围
   */
  Interval?: number
  /**
   * 网址
   */
  Url?: string
  /**
   * 匹配类型
   */
  MatchFunc?: number
  /**
   * 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截，24表示JS校验
   */
  ActionType?: number
  /**
   * 优先级
   */
  Priority?: number
  /**
   * 有效时间
   */
  ValidTime?: number
  /**
   * 版本
   */
  TsVersion?: number
  /**
   * 规则详情
   */
  Options?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 事件id
   */
  EventId?: string
  /**
   * 关联的Session规则
   */
  SessionApplied?: Array<number | bigint>
  /**
   * 创建时间
   */
  CreateTime?: number
}

/**
 * ModifyDomainIpv6Status请求参数结构体
 */
export interface ModifyDomainIpv6StatusRequest {
  /**
   * 需要修改的域名所属的实例ID
   */
  InstanceId: string
  /**
   * 需要修改的域名
   */
  Domain: string
  /**
   * 需要修改的域名ID
   */
  DomainId: string
  /**
   * 修改域名的Ipv6开关为Status （1:开启 2:关闭）
   */
  Status: number
}

/**
 * DescribeAntiInfoLeakageRules返回参数结构体
 */
export interface DescribeAntiInfoLeakageRulesResponse {
  /**
   * 记录条数
   */
  Total?: number
  /**
   * 规则列表
   */
  RuleList?: Array<DescribeAntiLeakageItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAreaBanAreas返回参数结构体
 */
export interface AddAreaBanAreasResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanIp返回参数结构体
 */
export interface DescribeScanIpResponse {
  /**
   * ip列表,当入参Ip为all时，返回所有已知ip列表
   */
  IpList?: Array<ScanIpInfo>
  /**
   * 所属业务
   */
  Bussiness?: string
  /**
   * 业务特征
   */
  Characteristic?: string
  /**
   * 扫描说明
   */
  Descibe?: string
  /**
   * 官方公告
   */
  Referer?: string
  /**
   * 扫描示例
   */
  Demo?: string
  /**
   * 扫描对象
   */
  Target?: string
  /**
   * 扫描目的
   */
  Purpose?: string
  /**
   * 产品文案
   */
  Announcement?: string
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * ipowner
   */
  IpOwner?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAttackHistogram请求参数结构体
 */
export interface GetAttackHistogramRequest {
  /**
   * 查询的域名，所有域名使用all
   */
  Domain: string
  /**
   * 查询起始时间
   */
  StartTime: string
  /**
   * 查询结束时间
   */
  EndTime: string
  /**
   * Lucene语法
   */
  QueryString: string
}

/**
 * 规则白名单
 */
export interface RuleList {
  /**
   * 规则Id
   */
  Id?: number
  /**
   * 规则列表的id
   */
  Rules?: Array<number | bigint>
  /**
   * 请求url
   */
  Url?: string
  /**
   * 请求的方法
   */
  Function?: string
  /**
   * 时间戳
   */
  Time?: string
  /**
   * 开关状态
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeAttackType请求参数结构体
 */
export interface DescribeAttackTypeRequest {
  /**
   * 起始时间
   */
  FromTime: string
  /**
   * 结束时间
   */
  ToTime: string
  /**
   * 兼容Host，逐步淘汰Host字段
   */
  Host?: string
  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string
  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
  /**
   * 域名过滤，不传则不过滤，用于替代Host字段，逐步淘汰Host
   */
  Domain?: string
}

/**
 * ModifyCustomWhiteRule请求参数结构体
 */
export interface ModifyCustomWhiteRuleRequest {
  /**
   * 编辑的域名
   */
  Domain: string
  /**
   * 编辑的规则ID
   */
  RuleId: number
  /**
   * 编辑的规则名称
   */
  RuleName: string
  /**
   * 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果勾选多个，则以“，”串接。
   */
  Bypass: string
  /**
   * 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。
   */
  SortId: number
  /**
   * 如果没有设置JobDateTime字段则用此字段，0表示永久生效，其它表示定时生效的截止时间（单位为秒）
   */
  ExpireTime: number
  /**
   * 匹配条件数组
   */
  Strategies: Array<Strategy>
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时任务配置
   */
  JobDateTime?: JobDateTime
}

/**
 * DeleteCustomWhiteRule请求参数结构体
 */
export interface DeleteCustomWhiteRuleRequest {
  /**
   * 删除的域名
   */
  Domain: string
  /**
   * 删除的规则ID
   */
  RuleId: number
}

/**
 * ModifyInstanceRenewFlag返回参数结构体
 */
export interface ModifyInstanceRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAttackWhiteRule返回参数结构体
 */
export interface AddAttackWhiteRuleResponse {
  /**
   * 规则总数
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportIpAccessControl返回参数结构体
 */
export interface ImportIpAccessControlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCustomWhiteRule请求参数结构体
 */
export interface AddCustomWhiteRuleRequest {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 优先级
   */
  SortId: string
  /**
   * 策略详情
   */
  Strategies: Array<Strategy>
  /**
   * 需要添加策略的域名
   */
  Domain: string
  /**
   * 放行的模块，多个模块之间用逗号连接。支持的模块：acl（自定义规则）、owasp（规则引擎）、webshell（恶意文件检测）、geoip（地域封禁）、bwip（IP黑白名单）、cc、botrpc（BOT防护）、antileakage（信息防泄露）、api（API安全）、ai（AI引擎）、ip_auto_deny（IP封禁）、applet（小程序流量风控）
   */
  Bypass: string
  /**
   * 如果没有设置JobDateTime字段则用此字段，0表示永久生效，其它表示定时生效的截止时间（单位为秒）
   */
  ExpireTime?: string
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时任务配置
   */
  JobDateTime?: JobDateTime
}

/**
 * 规则周期执行的数据结构
 */
export interface CronJob {
  /**
   * 每个月的几号执行
   */
  Days?: Array<number | bigint>
  /**
   * 每个星期的星期几执行
   */
  WDays?: Array<number | bigint>
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * SaaS型WAF域名详情
 */
export interface DomainsPartInfo {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名唯一ID
   */
  DomainId?: string
  /**
   * 域名所属实例唯一ID
   */
  InstanceId?: string
  /**
   * 域名所属实例类型
   */
  Edition?: string
  /**
   * 域名所属实例名
   */
  InstanceName?: string
  /**
   * 证书
   */
  Cert?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 规则引擎和AI引擎防护模式联合状态。
1:初始状态,规则引擎拦截&&AI引擎未操作开关状态
10：规则引擎观察&&AI引擎关闭模式 
11：规则引擎观察&&AI引擎观察模式 
12：规则引擎观察&&AI引擎拦截模式 
20：规则引擎拦截&&AI引擎关闭模式 
21：规则引擎拦截&&AI引擎观察模式 
22：规则引擎拦截&&AI引擎拦截模式
   */
  Engine?: number
  /**
   * 是否开启HTTP强制跳转到HTTPS。
0：不强制跳转
1：开启强制跳转
   */
  HttpsRewrite?: number
  /**
   * HTTPS回源端口
   */
  HttpsUpstreamPort?: string
  /**
   * waf前是否部署有七层代理服务。
0：没有部署代理服务
1：有部署代理服务，waf将使用XFF获取客户端IP
2：有部署代理服务，waf将使用remote_addr获取客户端IP
3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP
   */
  IsCdn?: number
  /**
   * 是否开启灰度，已废弃。
   */
  IsGray?: number
  /**
   * 是否开启HTTP2，需要开启HTTPS协议支持。
0：关闭
1：开启
   */
  IsHttp2?: number
  /**
   * 是否开启WebSocket支持。
0：关闭
1：开启
   */
  IsWebsocket?: number
  /**
   * 回源负载均衡策略。
0：轮询
1：IP hash
2：加权轮询
   */
  LoadBalance?: number
  /**
   * 防护模式。
0：观察模式
1：拦截模式
   */
  Mode?: number
  /**
   * 自有证书的私钥
   */
  PrivateKey?: string
  /**
   * CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  SSLId?: string
  /**
   * 域名回源时的回源域名。UpstreamType为1时，需要填充此字段
   */
  UpstreamDomain?: string
  /**
   * 回源类型。
0：通过IP回源
1：通过域名回源
   */
  UpstreamType?: number
  /**
   * IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段
   */
  SrcList?: Array<string>
  /**
   * 域名端口配置
   */
  Ports?: Array<PortInfo>
  /**
   * 证书类型。
0：仅配置HTTP监听端口，没有证书
1：证书来源为自有证书
2：证书来源为托管证书
   */
  CertType?: number
  /**
   * 服务配置有HTTPS端口时，HTTPS的回源协议。
http：使用http协议回源，和HttpsUpstreamPort配合使用
https：使用https协议回源
   */
  UpstreamScheme?: string
  /**
   * 日志包是否开启。
0：关闭
1：开启
   */
  Cls?: number
  /**
   * 接入Cname，SaaS型域名使用此Cname进行接入
   */
  Cname?: string
  /**
   * 是否开启长连接。
0： 短连接
1： 长连接
   */
  IsKeepAlive?: number
  /**
   * 是否开启主动健康检测。
0：不开启
1：开启
   */
  ActiveCheck?: number
  /**
   * TLS版本信息
   */
  TLSVersion?: number
  /**
   * 自定义的加密套件列表。CipherTemplate为3时需要填此字段，表示自定义的加密套件，值通过DescribeCiphersDetail接口获取。
   */
  Ciphers?: Array<number | bigint>
  /**
   * 加密套件模板。
0：不支持选择，使用默认模板  
1：通用型模板 
2：安全型模板
3：自定义模板
   */
  CipherTemplate?: number
  /**
   * WAF与源站的读超时时间，默认300s。
   */
  ProxyReadTimeout?: number
  /**
   * WAF与源站的写超时时间，默认300s。
   */
  ProxySendTimeout?: number
  /**
   * WAF回源时的SNI类型。
0：关闭SNI，不配置client_hello中的server_name
1：开启SNI，client_hello中的server_name为防护域名
2：开启SNI，SNI为域名回源时的源站域名
3：开启SNI，SNI为自定义域名
   */
  SniType?: number
  /**
   * SniType为3时，需要填此参数，表示自定义的SNI；
   */
  SniHost?: string
  /**
   * 回源IP权重
   */
  Weights?: Array<string>
  /**
   * IsCdn=3时，表示自定义header
   */
  IpHeaders?: Array<string>
  /**
   * 是否开启XFF重置。
0：关闭
1：开启
   */
  XFFReset?: number
  /**
   * 域名备注信息
   */
  Note?: string
  /**
   * 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。
   */
  UpstreamHost?: string
  /**
   * 防护规则
   */
  Level?: string
  /**
   * 是否开启缓存 0-关闭 1-开启
   */
  ProxyBuffer?: number
  /**
   * 国密选项。0：不开启国密 1：在原有TLS选项的基础上追加支持国密 2：开启国密并仅支持国密客户端访问
   */
  GmType?: number
  /**
   * 国密证书类型。0：无国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书
   */
  GmCertType?: number
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的证书链
   */
  GmCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的私钥
   */
  GmPrivateKey?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书
   */
  GmEncCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥
   */
  GmEncPrivateKey?: string
  /**
   * GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  GmSSLId?: string
  /**
   * 域名标签
   */
  Labels?: Array<string>
  /**
   * 拨测状态。 0: 禁用拨测, 1: 启用拨测
   */
  ProbeStatus?: number
  /**
   * 回源策略。
0：负载均衡回源
1：分流回源
   */
  UpstreamPolicy?: number
  /**
   * 分流回源策略
   */
  UpstreamRules?: Array<UpstreamRule>
}

/**
 * DescribeAutoDenyIP请求参数结构体
 */
export interface DescribeAutoDenyIPRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 查询IP自动封禁状态
   */
  Ip?: string
  /**
   * 计数标识
   */
  Count?: number
  /**
   * 类别
   */
  Category?: string
  /**
   * 有效时间最小时间戳
   */
  VtsMin?: number
  /**
   * 有效时间最大时间戳
   */
  VtsMax?: number
  /**
   * 创建时间最小时间戳
   */
  CtsMin?: number
  /**
   * 创建时间最大时间戳
   */
  CtsMax?: number
  /**
   * 偏移量
   */
  Skip?: number
  /**
   * 限制条数
   */
  Limit?: number
  /**
   * 策略名字
   */
  Name?: string
  /**
   * 排序参数
   */
  Sort?: string
}

/**
 * AddSpartaProtection请求参数结构体
 */
export interface AddSpartaProtectionRequest {
  /**
   * 需要防护的域名
   */
  Domain: string
  /**
   * 证书类型。
0：仅配置HTTP监听端口，没有证书
1：证书来源为自有证书
2：证书来源为托管证书
   */
  CertType: number
  /**
   * waf前是否部署有七层代理服务。
0：没有部署代理服务
1：有部署代理服务，waf将使用XFF获取客户端IP
2：有部署代理服务，waf将使用remote_addr获取客户端IP
3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP
   */
  IsCdn: number
  /**
   * 回源类型。
0：通过IP回源
1：通过域名回源
   */
  UpstreamType: number
  /**
   * 是否开启WebSocket支持。
0：关闭
1：开启
   */
  IsWebsocket: number
  /**
   * 回源负载均衡策略。
0：轮询
1：IP hash
2：加权轮询
   */
  LoadBalance: string
  /**
   * 服务端口列表配置。
NginxServerId：新增域名时填'0'
Port：监听端口号
Protocol：端口协议
UpstreamPort：与Port相同
UpstreamProtocol：与Protocol相同
   */
  Ports: Array<PortItem>
  /**
   * 必填项，是否开启长连接。
0： 短连接
1： 长连接
   */
  IsKeepAlive: string
  /**
   * 必填项，域名所属实例id
   */
  InstanceID: string
  /**
   * CertType为1时，需要填充此参数，表示自有证书的证书链
   */
  Cert?: string
  /**
   * CertType为1时，需要填充此参数，表示自有证书的私钥
   */
  PrivateKey?: string
  /**
   * CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  SSLId?: string
  /**
   * 待废弃，可不填。Waf的资源ID。
   */
  ResourceId?: string
  /**
   * IsCdn为3时，需要填此参数，表示自定义header
   */
  IpHeaders?: Array<string>
  /**
   * 服务配置有HTTPS端口时，HTTPS的回源协议。
http：使用http协议回源，和HttpsUpstreamPort配合使用
https：使用https协议回源
   */
  UpstreamScheme?: string
  /**
   * HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段
   */
  HttpsUpstreamPort?: string
  /**
   * 待废弃，可不填。是否开启灰度，0表示不开启灰度。
   */
  IsGray?: number
  /**
   * 待废弃，可不填。灰度的地区
   */
  GrayAreas?: Array<string>
  /**
   * 必填项，是否开启HTTP强制跳转到HTTPS。
0：不强制跳转
1：开启强制跳转
   */
  HttpsRewrite?: number
  /**
   * 域名回源时的回源域名。UpstreamType为1时，需要填充此字段
   */
  UpstreamDomain?: string
  /**
   * IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段
   */
  SrcList?: Array<string>
  /**
   * 必填项，是否开启HTTP2，需要开启HTTPS协议支持。
0：关闭
1：开启
   */
  IsHttp2?: number
  /**
   * 待废弃，可不填。WAF实例类型。
sparta-waf：SAAS型WAF
clb-waf：负载均衡型WAF
cdn-waf：CDN上的Web防护能力
   */
  Edition?: string
  /**
   * 待废弃，目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP
   */
  Anycast?: number
  /**
   * 回源IP列表各IP的权重，和SrcList一一对应。当且仅当UpstreamType为0，并且SrcList有多个IP，并且LoadBalance为2时需要填写，否则填 []
   */
  Weights?: Array<number | bigint>
  /**
   * 必填项，是否开启主动健康检测。
0：不开启
1：开启
   */
  ActiveCheck?: number
  /**
   * TLS版本信息
   */
  TLSVersion?: number
  /**
   * 必填项，加密套件模板。
0：不支持选择，使用默认模板  
1：通用型模板 
2：安全型模板
3：自定义模板
   */
  CipherTemplate?: number
  /**
   * 自定义的加密套件列表。CipherTemplate为3时需要填此字段，表示自定义的加密套件，值通过DescribeCiphersDetail接口获取。
   */
  Ciphers?: Array<number | bigint>
  /**
   * WAF与源站的读超时时间，默认300s。
   */
  ProxyReadTimeout?: number
  /**
   * WAF与源站的写超时时间，默认300s。
   */
  ProxySendTimeout?: number
  /**
   * WAF回源时的SNI类型。
0：关闭SNI，不配置client_hello中的server_name
1：开启SNI，client_hello中的server_name为防护域名
2：开启SNI，SNI为域名回源时的源站域名
3：开启SNI，SNI为自定义域名
   */
  SniType?: number
  /**
   * SniType为3时，需要填此参数，表示自定义的SNI；
   */
  SniHost?: string
  /**
   * 是否开启XFF重置。0：关闭 1：开启
   */
  XFFReset?: number
  /**
   * 域名备注信息
   */
  Note?: string
  /**
   * 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。
   */
  UpstreamHost?: string
  /**
   * 是否开启缓存。 0：关闭 1：开启
   */
  ProxyBuffer?: number
  /**
   * 是否开启拨测。 0: 禁用拨测  1: 启用拨测。默认启用拨测
   */
  ProbeStatus?: number
  /**
   * 国密选项。0：不开启国密 1：在原有TLS选项的基础上追加支持国密 2：开启国密并仅支持国密客户端访问
   */
  GmType?: number
  /**
   * 国密证书类型。0：无国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书
   */
  GmCertType?: number
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的证书链
   */
  GmCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的私钥
   */
  GmPrivateKey?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书
   */
  GmEncCert?: string
  /**
   * GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥
   */
  GmEncPrivateKey?: string
  /**
   * GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
   */
  GmSSLId?: string
  /**
   * 回源策略，支持负载均衡回源和分流回源两种方式。0：默认值，负载均衡回源；1：分流回源
   */
  UpstreamPolicy?: number
  /**
   * 分流回源时生效，分流回源的规则。
   */
  UpstreamRules?: Array<UpstreamRule>
}

/**
 * PostAttackDownloadTask请求参数结构体
 */
export interface PostAttackDownloadTaskRequest {
  /**
   * 查询的域名，所有域名使用all
   */
  Domain: string
  /**
   * 查询起始时间
   */
  StartTime: string
  /**
   * 查询结束时间
   */
  EndTime: string
  /**
   * Lucene语法
   */
  QueryString: string
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 默认为desc，可以取值desc和asc
   */
  Sort?: string
  /**
   * 下载的日志条数
   */
  Count?: number
}

/**
 * ModifyAreaBanAreas请求参数结构体
 */
export interface ModifyAreaBanAreasRequest {
  /**
   * 需要修改的域名
   */
  Domain: string
  /**
   * 需要调整的地域信息，一个字符串数组
   */
  Areas: Array<string>
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 定时任务配置
   */
  JobDateTime?: JobDateTime
}

/**
 * ModifyModuleStatus返回参数结构体
 */
export interface ModifyModuleStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 攻击日志详情
 */
export interface AttackLogInfo {
  /**
   * 攻击日志的详情内容
   */
  Content?: string
  /**
   * CLS返回内容
   */
  FileName?: string
  /**
   * CLS返回内容
   */
  Source?: string
  /**
   * CLS返回内容
   */
  TimeStamp?: string
}

/**
 * ModifyHostStatus返回参数结构体
 */
export interface ModifyHostStatusResponse {
  /**
   * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * clb-waf QPS套餐 New
 */
export interface QPSPackageNew {
  /**
   * 资源ID
   */
  ResourceIds: string
  /**
   * 过期时间
   */
  ValidTime: string
  /**
   * 是否自动续费，1：自动续费，0：不自动续费
   */
  RenewFlag: number
  /**
   * 套餐购买个数
   */
  Count: number
  /**
   * 套餐购买地域，clb-waf暂时没有用到
   */
  Region: string
  /**
   * 计费项
   */
  BillingItem?: string
}

/**
 * 攻击日志统计详情
 */
export interface LogHistogramInfo {
  /**
   * 日志条数
   */
  Count?: number
  /**
   * 时间戳
   */
  TimeStamp?: number
}

/**
 * DeleteDomainWhiteRules请求参数结构体
 */
export interface DeleteDomainWhiteRulesRequest {
  /**
   * 需要删除的规则域名
   */
  Domain?: string
  /**
   * 需要删除的白名单规则
   */
  Ids?: Array<number | bigint>
}

/**
 * DescribeDomainVerifyResult请求参数结构体
 */
export interface DescribeDomainVerifyResultRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 实例id
   */
  InstanceID: string
}

/**
 * 计费下单接口出入参Goods
 */
export interface CreateDealsGoods {
  /**
   * 商品数量
   */
  GoodsNum: number
  /**
   * 商品明细
   */
  GoodsDetail: CreateDealsGoodsDetail
  /**
   * 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）
高级版: 102375(新购),102376(续费),102377(变配)
企业版 : 102378(新购),102379(续费),102380(变配)
旗舰版 : 102369(新购),102370(续费),102371(变配)
域名包 : 102372(新购),102373(续费),102374(变配)
业务扩展包 : 101040(新购),101041(续费),101042(变配)

高级版-CLB: 新购 101198  续费 101199 变配 101200
企业版-CLB 101204(新购),101205(续费),101206(变配)
旗舰版-CLB : 101201(新购),101202(续费),101203(变配)
域名包-CLB: 101207(新购),101208(续费),101209(变配)
业务扩展包-CLB: 101210(新购),101211(续费),101212(变配)

   */
  GoodsCategoryId?: number
  /**
   * 购买waf实例区域ID
1 表示购买大陆资源;
9表示购买非中国大陆资源
   */
  RegionId?: number
}

/**
 * ModifySpartaProtectionMode返回参数结构体
 */
export interface ModifySpartaProtectionModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApiSecEventChange返回参数结构体
 */
export interface ModifyApiSecEventChangeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomWhiteRuleStatus返回参数结构体
 */
export interface ModifyCustomWhiteRuleStatusResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessFastAnalysis接口的出参
 */
export interface AccessFieldValueRatioInfo {
  /**
   * 日志条数
   */
  Count?: number
  /**
   * 对应的Value值的百分比
   */
  Ratio?: number
  /**
   * 字段对应的值
   */
  Value?: string
}

/**
 * 多域名黑白名单describe返回
 */
export interface BatchIpAccessControlData {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 黑白名单条目
   */
  Res?: Array<BatchIpAccessControlItem>
}

/**
 * DescribePeakValue请求参数结构体
 */
export interface DescribePeakValueRequest {
  /**
   * 查询起始时间
   */
  FromTime: string
  /**
   * 查询结束时间
   */
  ToTime: string
  /**
   * 需要查询的域名，当前用户所有域名可以不传
   */
  Domain?: string
  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string
  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
  /**
   * 五个值可选：
access-峰值qps
down-下行峰值带宽
up-上行峰值带宽
attack-Web攻击总数
cc-CC攻击总数趋势图
   */
  MetricName?: string
}

/**
 * bot的qps详情
 */
export interface BotQPS {
  /**
   * 资源id
   */
  ResourceIds: string
  /**
   * 有效时间
   */
  ValidTime: string
  /**
   * 资源数量
   */
  Count: number
  /**
   * 资源所在地区
   */
  Region: string
  /**
   * 使用qps的最大值
   */
  MaxBotQPS: number
  /**
   * 续费标志
   */
  RenewFlag: number
}

/**
 * DescribeApiDetail请求参数结构体
 */
export interface DescribeApiDetailRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * Api名称
   */
  ApiName: string
  /**
   * 请求方法
   */
  Method: string
  /**
   * 是否仅查询敏感的，1表示查询，0表示不查询
   */
  IsSensitive?: number
  /**
   * 是否仅查询泛化的，1表示查询，0表示不查询
   */
  IsPan?: number
}

/**
 * DescribePolicyStatus返回参数结构体
 */
export interface DescribePolicyStatusResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 防护状态
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CDC场景下负载均衡WAF的地域信息
 */
export interface CdcRegion {
  /**
   * 地域
   */
  Region: string
  /**
   * 该地域对应的集群信息
   */
  Clusters: Array<CdcCluster>
}

/**
 * GetAttackTotalCount返回参数结构体
 */
export interface GetAttackTotalCountResponse {
  /**
   * 攻击总次数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainRules返回参数结构体
 */
export interface DescribeDomainRulesResponse {
  /**
   * 规则列表详情
   */
  Rules?: Array<Rule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDeals返回参数结构体
 */
export interface CreateDealsResponse {
  /**
   * 计费下单响应结构体
   */
  Data?: DealData
  /**
   * 1:成功，0:失败
   */
  Status?: number
  /**
   * 返回message
   */
  ReturnMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TLS 加密套件
 */
export interface TLSCiphers {
  /**
   * TLS版本ID
   */
  VersionId?: number
  /**
   * 加密套件ID
   */
  CipherId?: number
  /**
   * 加密套件
   */
  CipherName?: string
}

/**
 * DescribeDomainVerifyResult返回参数结构体
 */
export interface DescribeDomainVerifyResultResponse {
  /**
   * 结果描述；如果可以添加返回空字符串
   */
  Msg?: string
  /**
   * 检验状态：0表示可以添加，大于0为不能添加
   */
  VerifyCode?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCustomRule请求参数结构体
 */
export interface AddCustomRuleRequest {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 优先级
   */
  SortId: string
  /**
   * 策略详情
   */
  Strategies: Array<Strategy>
  /**
   * 需要添加策略的域名
   */
  Domain: string
  /**
   * 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向，5代表JS校验
   */
  ActionType: string
  /**
   * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
   */
  Redirect?: string
  /**
   * 过期时间，单位为秒级时间戳，例如1677254399表示过期时间为2023-02-24 23:59:59. 0表示永不过期
   */
  ExpireTime?: string
  /**
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
   */
  Edition?: string
  /**
   * 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。默认是"geoip,cc,owasp,ai,antileakage"
   * @deprecated
   */
  Bypass?: string
  /**
   * 添加规则的来源，默认为空
   */
  EventId?: string
  /**
   * 规则执行的方式，TimedJob为定时执行，CronJob为周期执行
   */
  JobType?: string
  /**
   * 规则执行的时间
   */
  JobDateTime?: JobDateTime
  /**
   * 规则来源，判断是不是小程序的
   */
  Source?: string
  /**
   * 规则标签，小程序规则用，标识是内置规则还是自定义规则
   */
  Label?: string
  /**
   * 开关状态，小程序风控规则的时候传该值
   */
  Status?: number
  /**
   * 拦截页面id
   */
  PageId?: string
  /**
   * 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系
   */
  LogicalOp?: string
}

/**
 * DeleteCCRule请求参数结构体
 */
export interface DeleteCCRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则名称
   */
  Name: string
  /**
   * clb-waf或者sparta-waf
   */
  Edition?: string
  /**
   * 规则Id
   */
  RuleId?: number
}

/**
 * DescribeAttackType返回参数结构体
 */
export interface DescribeAttackTypeResponse {
  /**
   * 数量
   */
  Piechart?: Array<PiechartItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCCRule返回参数结构体
 */
export interface DescribeCCRuleResponse {
  /**
   * 结果
   */
  Data?: CCRuleData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGenerateDeals请求参数结构体
 */
export interface ModifyGenerateDealsRequest {
  /**
   * 计费下单入参
   */
  Goods: Array<Goods>
}

/**
 * ModifyDomainWhiteRule返回参数结构体
 */
export interface ModifyDomainWhiteRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyObject返回参数结构体
 */
export interface ModifyObjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAntiFakeUrlStatus返回参数结构体
 */
export interface ModifyAntiFakeUrlStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAntiFakeUrl请求参数结构体
 */
export interface ModifyAntiFakeUrlRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 名称
   */
  Name: string
  /**
   * uri
   */
  Uri: string
  /**
   * ID
   */
  Id: number
}

/**
 * ModifyInstanceElasticMode请求参数结构体
 */
export interface ModifyInstanceElasticModeRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 弹性计费开关
   */
  Mode: number
}

/**
 * Waf 攻击自动封禁详情
 */
export interface AutoDenyDetail {
  /**
   * 攻击封禁类型标签
   */
  AttackTags: Array<string>
  /**
   * 攻击次数阈值
   */
  AttackThreshold: number
  /**
   * 自动封禁状态
   */
  DefenseStatus: number
  /**
   * 攻击时间阈值
   */
  TimeThreshold: number
  /**
   * 自动封禁时间
   */
  DenyTimeThreshold: number
  /**
   * 最后更新时间
   */
  LastUpdateTime?: string
}

/**
 * DescribeWebshellStatus返回参数结构体
 */
export interface DescribeWebshellStatusResponse {
  /**
   * webshell域名
   */
  Domain?: string
  /**
   * 开关状态
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名列表
 */
export interface FindAllDomainDetail {
  /**
   * 用户id
   */
  Appid?: number
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名ip
   */
  Ips?: Array<string>
  /**
   * 发现时间
   */
  FindTime?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 域名id
   */
  DomainId?: string
  /**
   * waf类型
   */
  Edition?: string
  /**
   * 是否接入waf
   */
  IsWafDomain?: number
}

/**
 * DeleteAntiInfoLeakRule请求参数结构体
 */
export interface DeleteAntiInfoLeakRuleRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 规则id
   */
  RuleId: number
}

/**
 * DescribeVipInfo返回参数结构体
 */
export interface DescribeVipInfoResponse {
  /**
   * VIP信息
   */
  VipInfo?: Array<VipInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIpAccessControl返回参数结构体
 */
export interface ModifyIpAccessControlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleLimit请求参数结构体
 */
export interface DescribeRuleLimitRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 实例Id
   */
  InstanceId?: string
}

/**
 * ModifyDomainPostAction返回参数结构体
 */
export interface ModifyDomainPostActionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDomainsCLSStatus请求参数结构体
 */
export interface ModifyDomainsCLSStatusRequest {
  /**
   * 需要修改的域名列表
   */
  Domains: Array<DomainURI>
  /**
   * 修改域名的访问日志开关为Status
   */
  Status: number
}

/**
 * DeleteAccessExport请求参数结构体
 */
export interface DeleteAccessExportRequest {
  /**
   * 日志导出ID
   */
  ExportId: string
  /**
   * 日志主题
   */
  TopicId: string
}

/**
 * DescribeTlsVersion返回参数结构体
 */
export interface DescribeTlsVersionResponse {
  /**
   * TLS信息
   */
  TLS?: Array<TLSVersion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainWhiteRules返回参数结构体
 */
export interface DescribeDomainWhiteRulesResponse {
  /**
   * 规则列表
   */
  RuleList?: Array<RuleList>
  /**
   * 规则的数量
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWafAutoDenyRules请求参数结构体
 */
export interface ModifyWafAutoDenyRulesRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * 触发IP封禁的攻击次数阈值，范围为2~100次
   */
  AttackThreshold: number
  /**
   * IP封禁统计时间，范围为1-60分钟
   */
  TimeThreshold: number
  /**
   * 触发IP封禁后的封禁时间，范围为5~360分钟
   */
  DenyTimeThreshold: number
  /**
   * 自动封禁状态，0表示关闭，1表示打开
   */
  DefenseStatus: number
}

/**
 * DescribeSession返回参数结构体
 */
export interface DescribeSessionResponse {
  /**
   * 返回结果
   */
  Data?: SessionData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpsertSession请求参数结构体
 */
export interface UpsertSessionRequest {
  /**
   * 域名
   */
  Domain: string
  /**
   * session来源位置
   */
  Source: string
  /**
   * 提取类别
   */
  Category: string
  /**
   * 提取key或者起始匹配模式
   */
  KeyOrStartMat: string
  /**
   * 结束匹配模式
   */
  EndMat: string
  /**
   * 起始偏移位置
   */
  StartOffset: string
  /**
   * 结束偏移位置
   */
  EndOffset: string
  /**
   * 版本
   */
  Edition?: string
  /**
   * Session名
   */
  SessionName?: string
  /**
   * Session对应ID
   */
  SessionID?: number
}

/**
 * DescribeHostLimit请求参数结构体
 */
export interface DescribeHostLimitRequest {
  /**
   * 添加的域名
   */
  Domain: string
  /**
   * 实例id
   */
  InstanceID?: string
  /**
   * 流量来源
   */
  AlbType?: string
}

/**
 * 负载均衡型WAF域名详情
 */
export interface ClbDomainsInfo {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名唯一ID
   */
  DomainId?: string
  /**
   * 域名所属实例ID
   */
  InstanceId?: string
  /**
   * 域名所属实例名
   */
  InstanceName?: string
  /**
   * 域名所属实例类型
   */
  Edition?: string
  /**
   * waf前是否部署有七层代理服务。 0：没有部署代理服务 1：有部署代理服务，waf将使用XFF获取客户端IP 2：有部署代理服务，waf将使用remote_addr获取客户端IP 3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP
   */
  IsCdn?: number
  /**
   * 负载均衡类型为clb时，对应的负载均衡器信息
   */
  LoadBalancerSet?: Array<LoadBalancerPackageNew>
  /**
   * 负载均衡型WAF的流量模式，1：清洗模式，0：镜像模式
   */
  FlowMode?: number
  /**
   * 域名绑定负载均衡器状态
   */
  State?: number
  /**
   * 负载均衡类型，clb或者apisix
   */
  AlbType?: string
  /**
   * IsCdn=3时，表示自定义header
   */
  IpHeaders?: Array<string>
  /**
   * cdc-clb-waf类型WAF的CDC集群信息
   */
  CdcClusters?: string
  /**
   * 云类型:public:公有云；private:私有云;hybrid:混合云
   */
  CloudType?: string
  /**
   * 域名备注信息
   */
  Note?: string
  /**
   * 域名标签
   */
  Labels?: Array<string>
}

/**
 * DescribeObjects返回参数结构体
 */
export interface DescribeObjectsResponse {
  /**
   * 对象列表
   */
  ClbObjects?: Array<ClbObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchAccessLog请求参数结构体
 */
export interface SearchAccessLogRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题，新版本此字段填空字符串
   */
  TopicId: string
  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number
  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number
  /**
   * 查询语句，语句长度最大为4096
   */
  Query: string
  /**
   * 单次查询返回的日志条数，最大值为100
   */
  Limit?: number
  /**
   * 新版本此字段失效，填空字符串，翻页使用Page
   */
  Context?: string
  /**
   * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
   */
  Sort?: string
  /**
   * 第几页，从0开始。新版本接口字段
   */
  Page?: number
}

/**
 * 小程序安全接入ID扩展资源信息
 */
export interface MiniExtendPkg {
  /**
   * 资源id
   */
  ResourceIds?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 地域
   */
  Region?: number
  /**
   * 开始时间
   */
  BeginTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 购买数量
   */
  Count?: number
  /**
   * 续费标志
   */
  RenewFlag?: number
  /**
   * 计费项
   */
  BillingItem?: string
}

/**
 * 唯一定位Domain
 */
export interface DomainURI {
  /**
   * 域名
   */
  Domain: string
  /**
   * 版本
   */
  Edition: string
  /**
   * 实例ID
   */
  InstanceID?: string
}

/**
 * DescribeAttackWhiteRule返回参数结构体
 */
export interface DescribeAttackWhiteRuleResponse {
  /**
   * 规则总数
   */
  Total?: number
  /**
   * 规则白名单列表
   */
  List?: Array<UserWhiteRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleKeyValueInfo {
  /**
   * 是否大小写敏感
   */
  CaseSensitive?: boolean
  /**
   * 需要建立索引的键值对信息；最大只能配置100个键值对
   */
  KeyValues?: Array<AccessKeyValueInfo>
}

/**
 * DescribeObjects请求参数结构体
 */
export interface DescribeObjectsRequest {
  /**
   * 支持的过滤器:	ObjectId: clb实例ID	VIP: clb实例的公网IP	InstanceId: waf实例ID	Domain: 精准域名	Status: waf防护开关状态: 0关闭，1开启	ClsStatus: waf日志开关: 0关闭，1开启
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * ModifyHostStatus请求参数结构体
 */
export interface ModifyHostStatusRequest {
  /**
   * 域名状态列表
   */
  HostsStatus: Array<HostStatus>
}

/**
 * RefreshAccessCheckResult返回参数结构体
 */
export interface RefreshAccessCheckResultResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
