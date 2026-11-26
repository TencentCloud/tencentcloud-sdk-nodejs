/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * 账号工厂基线配置项
 */
export interface BaselineConfigItem {
  /**
   * 账号工厂基线项唯一标识,只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
   */
  Identifier?: string
  /**
   * 账号工厂基线项配置，不同基线项配置参数不同。
   */
  Configuration?: string
}

/**
 * UpdateAccountFactoryBaseline返回参数结构体
 */
export interface UpdateAccountFactoryBaselineResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基线项部署任务信息列表
 */
export interface BaselineStepTaskInfo {
  /**
   * 任务唯一Id，只能包含英文字母、数字，是16个字符的随机字符串。
   */
  TaskId?: string
  /**
   * 基线功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
   */
  Identifier?: string
  /**
   * 被应用基线项的成员账号uin
   */
  MemberUin?: number
  /**
   * 基线项应用的状态,Running表示基线项应用中,Success表示基线项应用成功,Failed表示基线项应用失败,Pending表示基线项待应用,Skipped表示基线项被跳过
   */
  Status?: string
  /**
   * 错误码
   */
  ErrCode?: string
  /**
   * 错误信息
   */
  ErrMessage?: string
  /**
   * 基线项部署输出
   */
  Output?: string
  /**
   * 创建时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。
   */
  CreateTime?: string
  /**
   * 更新时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。
   */
  UpdateTime?: string
}

/**
 * ListAccountFactoryBaselineItems请求参数结构体
 */
export interface ListAccountFactoryBaselineItemsRequest {
  /**
   * 返回记录最大数目,取值范围0~200。
   */
  Limit: number
  /**
   * 偏移量，取值范围大于等于0。
   */
  Offset: number
}

/**
 * 依赖项
 */
export interface DependsOnItem {
  /**
   * 依赖项类型，只有LandingZoneSetUp或AccountFactorySetUp。LandingZoneSetUp表示landingZone的依赖项；AccountFactorySetUp表示账号工厂的依赖项
   */
  Type?: string
  /**
   * 功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
   */
  Identifier?: string
}

/**
 * BatchApplyAccountBaselines返回参数结构体
 */
export interface BatchApplyAccountBaselinesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAccountFactoryBaseline请求参数结构体
 */
export interface UpdateAccountFactoryBaselineRequest {
  /**
   * 基线名称，基线名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。
   */
  Name: string
  /**
   * 基线配置，覆盖更新。可以通过controlcenter:GetAccountFactoryBaseline查询现有基线配置。可以通过controlcenter:ListAccountFactoryBaselineItems查询支持的基线列表。
   */
  BaselineConfigItems?: Array<BaselineConfigItem>
}

/**
 * ListDeployStepTasks请求参数结构体
 */
export interface ListDeployStepTasksRequest {
  /**
   * 功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
   */
  Identifier: string
  /**
   * 返回记录最大数目,取值范围0~200。
   */
  Limit: number
  /**
   * 偏移量，取值范围大于等于0。
   */
  Offset: number
}

/**
 * 账号工厂基线项
 */
export interface AccountFactoryItem {
  /**
   * 账号工厂基线项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
   */
  Identifier?: string
  /**
   * 基线项名称，功能项名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。
   */
  Name?: string
  /**
   * 基线项英文名称，基线项名字唯一，仅支持英文字母、数字、空格、符号@、＆_[]-的组合，1-64个英文字符。
   */
  NameEn?: string
  /**
   * 基线项权重，数值小权重越高，取值范围大于等于0。
   */
  Weight?: number
  /**
   * 基线项是否必填，1必填，0非必填
   */
  Required?: number
  /**
   * 基线项依赖项，N的取值范围与该基线项依赖的其它基线项个数有关。
   */
  DependsOn?: Array<DependsOnItem>
  /**
   * 基线描述，长度为2~256个英文或中文字符，默认值为空。
   */
  Description?: string
  /**
   * 基线项英文描述，长度为2~1024个英文字符，默认值为空。
   */
  DescriptionEn?: string
  /**
   * 基线分类，长度为2~32个英文或中文字符，不能为空。
   */
  Classify?: string
  /**
   * 基线英文分类，长度为2~64个英文字符，不能为空。
   */
  ClassifyEn?: string
}

/**
 * BatchApplyAccountBaselines请求参数结构体
 */
export interface BatchApplyAccountBaselinesRequest {
  /**
   * 成员账号uin，也是被应用基线的账号uin。
   */
  MemberUinList: Array<number | bigint>
  /**
   * 基线项配置信息列表。
   */
  BaselineConfigItems: Array<BaselineConfigItem>
}

/**
 * GetAccountFactoryBaseline返回参数结构体
 */
export interface GetAccountFactoryBaselineResponse {
  /**
   * 资源所属主账号uin。
   */
  OwnerUin?: number
  /**
   * 基线项名称，基线项名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。
   */
  Name?: string
  /**
   * 基线项配置列表。
   */
  BaselineConfigItems?: Array<BaselineInfoItem>
  /**
   * 创建时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。
   */
  CreateTime?: string
  /**
   * 更新时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAccountFactoryBaselineItems返回参数结构体
 */
export interface ListAccountFactoryBaselineItemsResponse {
  /**
   * <p>账号工厂基线列表。<br><strong>1. TCC-AF_ACCOUNT_CONTACT 账号联系人</strong><br>该基线项用于在成员账号下创建消息接收人（联系人）。<br>字段    类型    必填    默认值    取值范围与说明<br>AccountContacts    对象数组    是    无    联系人列表，最多 50 个，不能为空<br>AccountContacts[].Name    字符串    是    无    联系人名称，需为账号中已存在的名称；同一列表内不可重复；无固定格式限制<br>AccountContacts[].CountryCode    字符串    是    无    手机号区号，如 86；无固定枚举<br>AccountContacts[].PhoneNum    字符串    是    无    手机号，需完成验证后方可应用该基线项；格式由验证流程判定，无本地格式限制<br>AccountContacts[].Email    字符串    是    无    邮箱，需完成验证后方可应用该基线项；格式由验证流程判定，无本地格式限制<br>AccountContacts[].Remark    字符串    否    无    备注，无长度限制说明<br><pre><code>{  &quot;AccountContacts&quot;: [    {      &quot;Name&quot;: &quot;ops-admin&quot;,      &quot;CountryCode&quot;: &quot;86&quot;,      &quot;PhoneNum&quot;: &quot;13800***000&quot;,      &quot;Email&quot;: &quot;ops@ex***le.com&quot;,      &quot;Remark&quot;: &quot;运维联系人&quot;    }  ]}</code></pre><strong>2. TCC-AF_ACCOUNT_NOTIFICATION 消息接收人</strong><br>国内站：<br>字段    类型    必填    默认值    取值范围与说明<br>Subscriptions    对象数组    是    无    订阅关系列表，建议不超过 50 条；超过时分批处理，不会因条数被拒绝<br>Subscriptions[].Name    字符串    是    无    单个子用户名；请填写已存在的子用户名，否则该条订阅不生效<br>Subscriptions[].ProductId    整数    是    无    产品 ID，无固定枚举，通过 DescribeProductIds 查询<br>Subscriptions[].MsgType    整数    是    无    消息类型 ID，无固定枚举，通过 DescribeFirstSiteMsgType、DescribeSecondMsgType 查询<br>Subscriptions[].Channel    整数    是    无    消息发送通道，位掩码，取值见下表<br>Subscriptions[].Status    字符串    是    无    仅 Open、Close；只有 Open 会建立订阅，Close 或其他值均不生效</p><p>Channel 位掩码：<br>通道    值<br>站内信1<br>邮件    2<br>短信    4<br>微信    8（国际站暂无）<br>语音    16<br>企业微信    32（国际站暂无）</p><p>渠道组合   值<br>站内信+邮件 3<br>站内信+短信 5<br>邮件+短信 6<br>站内信+邮件+短信 7</p><p>国际站字段：<br>字段    类型    必填    默认值    取值范围与说明<br>Subscriptions    对象数组    是    无    订阅关系列表，建议不超过 50 条；超过时分批处理，不会因条数被拒绝<br>Subscriptions[].Name    字符串数组    是    无    子用户名列表；请填写已存在的子用户名，名称会去重<br>Subscriptions[].MsgType    整数    是    无    消息类型 ID，无固定枚举，通过 DescribeFirstSiteMsgType、DescribeSecondMsgType 查询<br>Subscriptions[].Channel    整数    是    无    消息发送通道，位掩码，取值同上表</p><p>国内站示例：<br><pre><code>{  &quot;Subscriptions&quot;: [    {      &quot;Name&quot;: &quot;ops-admin&quot;,      &quot;ProductId&quot;: 1001,      &quot;MsgType&quot;: 2001,      &quot;Channel&quot;: 3,      &quot;Status&quot;: &quot;Open&quot;    }  ]}</code></pre>国际站示例：<br><pre><code>{  &quot;Subscriptions&quot;: [    {      &quot;Name&quot;: [&quot;ops-admin&quot;, &quot;audit&quot;],      &quot;MsgType&quot;: 2001,      &quot;Channel&quot;: 6    }  ]}</code></pre><strong>3. TCC-AF_CAM_USER_PASSWORD_POLICY CAM 密码策略</strong><br>字段    类型    必填    默认值    取值范围与说明<br>MinimumLength    整数    是    无    密码最小长度，无固定枚举和上下限说明，取值是否有效由 CAM 密码策略判定<br>MustContain    字符串    是    无    密码必须包含的字符，无固定枚举和合法字符集说明，取值是否有效由 CAM 密码策略判定<br>ForcePasswordChange    整数    是    无    强制修改密码周期，无固定枚举和单位说明，取值是否有效由 CAM 密码策略判定<br>ReusePasswordLimit    整数    是    无    密码重复使用限制，无固定枚举和上下限说明，取值是否有效由 CAM 密码策略判定<br>RetryPasswordLimit    整数    是    无    密码重试次数限制，无固定枚举和上下限说明，取值是否有效由 CAM 密码策略判定<br>OnlyAdminCanResetPassword    整数    是    无    是否只允许管理员重置密码，无固定枚举说明，取值是否有效由 CAM 密码策略判定<br><pre><code>{  &quot;MinimumLength&quot;: 19,  &quot;MustContain&quot;: &quot;A&quot;,  &quot;ForcePasswordChange&quot;: 0,  &quot;ReusePasswordLimit&quot;: 2,  &quot;RetryPasswordLimit&quot;: 1,  &quot;OnlyAdminCanResetPassword&quot;: 0}</code></pre><strong>4. TCC-AF_CAM_USER_SECURITY CAM 用户安全设置</strong><br>字段    类型    必填    默认值    取值范围与说明<br>DefaultMFASettings    对象    是    无    登录与操作保护设置<br>DefaultMFASettings.LoginStrategy    整数    是    无    1 强制所有用户校验；2 依赖用户单独设置项<br>DefaultMFASettings.ActionStrategy    整数    是    无    1 强制所有用户校验；2 依赖用户单独设置项；本基线项必须填写 2<br>DefaultMFASettings.LoginDetail    字符串数组    是    无    可选项：Stoken、Phone、Wechat、U2FToken、Mail；必须包含 Stoken<br>LoginStatusSettings    对象    是    无    会话时长设置<br>LoginStatusSettings.SessionTimeout    整数    否    无    会话超时时间，单位秒；无固定上下限说明，取值是否有效由 CAM 判定<br>LoginStatusSettings.IdleSessionTimeout    整数    否    无    空闲会话超时时间，单位秒；无固定上下限说明，取值是否有效由 CAM 判定<br><pre><code>{  &quot;DefaultMFASettings&quot;: {    &quot;LoginStrategy&quot;: 1,    &quot;ActionStrategy&quot;: 2,    &quot;LoginDetail&quot;: [&quot;Stoken&quot;, &quot;Phone&quot;]  },  &quot;LoginStatusSettings&quot;: {    &quot;SessionTimeout&quot;: 7200,    &quot;IdleSessionTimeout&quot;: 900  }}</code></pre><strong>5. TCC-AF_VPC_SUBNET VPC 与子网</strong><br>字段    类型    必填    默认值    取值范围与说明<br>VpcName    字符串    是    无    VPC 名称，最大 60 字节<br>CidrBlock    字符串    是    无    VPC 网段，仅支持 10.0.0.0/12、172.16.0.0/12、192.168.0.0/16 三个内网网段内的地址<br>RegionName    字符串    是    无    地域，按「地域、可用区与动态取值怎么填」填写；本基线项的地域由此字段指定<br>Subnets    对象数组    否    无    子网列表；不填或为空时只创建 VPC，不创建子网<br>Subnets[].CidrBlock    字符串    是    无    子网网段，须在 CidrBlock 范围内，且同一 VPC 内各子网网段不能重叠<br>Subnets[].SubnetName    字符串    是    无    子网名称，最大 60 字节<br>Subnets[].Zone    字符串    是    无    可用区，形如 ap-guangzhou-2；无固定枚举，通过 DescribeZones 查询<br><pre><code>{  &quot;VpcName&quot;: &quot;af-vpc&quot;,  &quot;CidrBlock&quot;: &quot;10.0.0.0/16&quot;,  &quot;RegionName&quot;: &quot;ap-guangzhou&quot;,  &quot;Subnets&quot;: [    {      &quot;CidrBlock&quot;: &quot;10.0.1.0/24&quot;,      &quot;SubnetName&quot;: &quot;af-subnet-1&quot;,      &quot;Zone&quot;: &quot;ap-guangzhou-2&quot;    }  ]}</code></pre><strong>6. TCC-AF_SECURITY_GROUP 安全组</strong><br>字段    类型    必填    默认值    取值范围与说明<br>GroupName    字符串    是    无    安全组名称，不超过 60 个字符<br>GroupDescription    字符串    否    无    安全组描述，最多 100 个字符<br>Region    字符串    是    无    地域，按「地域、可用区与动态取值怎么填」填写<br>SecurityGroupPolicySet    对象    是    无    安全组规则集<br>SecurityGroupPolicySet.Ingress    对象数组    否    无    入站规则列表<br>SecurityGroupPolicySet.Egress    对象数组    否    无    出站规则列表<br>Ingress[].Protocol、Egress[].Protocol    字符串    是    无    TCP、UDP、ICMP、ICMPv6、ALL<br>Ingress[].Port、Egress[].Port    字符串    是    无    all、单个端口或端口范围（如 80、80-90）；Protocol 为 ALL 时必须填 all<br>Ingress[].Action、Egress[].Action    字符串    是    无    ACCEPT 允许流量；DROP 丢弃流量<br>Ingress[].CidrBlock、Egress[].CidrBlock    字符串    否    无    IPv4 网段或 IP，如 10.0.0.0/16、0.0.0.0/0；与 Ipv6CidrBlock 互斥<br>Ingress[].Ipv6CidrBlock、Egress[].Ipv6CidrBlock    字符串    否    无    暂不支持，请勿填写<br>Ingress[].SecurityGroupId、Egress[].SecurityGroupId    字符串    否    无    引用的安全组 ID，形如 sg-ohuuioma；无固定枚举，由资源列表查询<br>Ingress[].AddressTemplate.AddressId    字符串    否    无    IP 地址模板 ID，形如 ipm-2uw6ujo6；使用地址模板时与 AddressGroupId 需同时填写<br>Ingress[].AddressTemplate.AddressGroupId    字符串    否    无    IP 地址组 ID，形如 ipmg-2uw6ujo6；使用地址模板时与 AddressId 需同时填写<br>Ingress[].PolicyDescription、Egress[].PolicyDescription    字符串    否    无    规则描述，无长度限制说明，取值是否有效由云产品判定<br><pre><code>{  &quot;GroupName&quot;: &quot;af-sg&quot;,  &quot;GroupDescription&quot;: &quot;account factory baseline&quot;,  &quot;Region&quot;: &quot;ap-guangzhou&quot;,  &quot;SecurityGroupPolicySet&quot;: {    &quot;Ingress&quot;: [      {        &quot;Protocol&quot;: &quot;TCP&quot;,        &quot;Port&quot;: &quot;22&quot;,        &quot;CidrBlock&quot;: &quot;10.0.0.0/16&quot;,        &quot;Action&quot;: &quot;ACCEPT&quot;,        &quot;PolicyDescription&quot;: &quot;ssh&quot;      },      {        &quot;Protocol&quot;: &quot;TCP&quot;,        &quot;Port&quot;: &quot;443&quot;,        &quot;AddressTemplate&quot;: {          &quot;AddressId&quot;: &quot;ipm-2uw6ujo6&quot;,          &quot;AddressGroupId&quot;: &quot;ipmg-2uw6ujo6&quot;        },        &quot;Action&quot;: &quot;ACCEPT&quot;      }    ],    &quot;Egress&quot;: [      {        &quot;Protocol&quot;: &quot;ALL&quot;,        &quot;Port&quot;: &quot;all&quot;,        &quot;CidrBlock&quot;: &quot;0.0.0.0/0&quot;,        &quot;Action&quot;: &quot;ACCEPT&quot;,        &quot;PolicyDescription&quot;: &quot;allow all&quot;      }    ]  }}</code></pre><strong>7. TCC-AF_PRESET_TAG 预设标签</strong><br>字段    类型    必填    默认值    取值范围与说明<br>TagValuePairs    对象数组    是    无    标签键值对列表<br>TagValuePairs[].Key    字符串    是    无    标签键，无固定长度和字符限制说明，取值是否有效由标签服务判定<br>TagValuePairs[].Values    字符串数组    是    无    该键对应的标签值列表；无固定长度和字符限制说明，取值是否有效由标签服务判定<br>约束：数组总数不得超过 30 个<br><pre><code>{  &quot;TagValuePairs&quot;: [    { &quot;Key&quot;: &quot;env&quot;, &quot;Values&quot;: [&quot;prod&quot;, &quot;dev&quot;] },    { &quot;Key&quot;: &quot;owner&quot;, &quot;Values&quot;: [&quot;ops&quot;] }  ]}</code></pre><strong>8. TCC-AF_SHARE_IMAGE 共享镜像</strong><br>字段    类型    必填    默认值    取值范围与说明<br>Images    对象数组    是    无    待共享的镜像列表，无数量上限说明<br>Images[].Region    字符串    是    无    镜像所在地域，按「地域、可用区与动态取值怎么填」填写<br>Images[].ImageId    字符串    是    无    镜像 ID，形如 img-gvbnzy6f；无固定枚举，通过 DescribeImages 或控制台查询，镜像需处于可用状态<br><pre><code>{  &quot;Images&quot;: [    {      &quot;Region&quot;: &quot;ap-guangzhou&quot;,      &quot;ImageId&quot;: &quot;img-gvbnzy6f&quot;    }  ]}</code></pre></p>
   */
  BaselineItems?: Array<AccountFactoryItem>
  /**
   * <p>总数。</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAccountFactoryBaseline请求参数结构体
 */
export type GetAccountFactoryBaselineRequest = null

/**
 * 账号工厂基线信息
 */
export interface BaselineInfoItem {
  /**
   * 账号工厂基线项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
   */
  Identifier?: string
  /**
   * 账号工厂基线项配置，不同的基线项配置参数不同。
   */
  Configuration?: string
  /**
   * 基线应用的账号数量。
   */
  ApplyCount?: number
}

/**
 * ListDeployStepTasks返回参数结构体
 */
export interface ListDeployStepTasksResponse {
  /**
   * 账号工厂基线功能项应用信息列表。
   */
  BaselineDeployStepTaskList?: Array<BaselineStepTaskInfo>
  /**
   * 总数。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
