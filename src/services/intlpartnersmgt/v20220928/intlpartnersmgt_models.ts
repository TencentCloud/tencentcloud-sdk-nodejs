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
 * GetCountryCodes请求参数结构体
 */
export type GetCountryCodesRequest = null

/**
 * QueryPartnerCredit返回参数结构体
 */
export interface QueryPartnerCreditResponse {
  /**
   * 已分配额度
   */
  AllocatedCredit: number

  /**
   * 额度总数
   */
  TotalCredit: number

  /**
   * 剩余额度
   */
  RemainingCredit: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryVoucherListByUin请求参数结构体
 */
export interface QueryVoucherListByUinRequest {
  /**
   * 子客uin列表
   */
  ClientUins: Array<number>

  /**
   * 状态，不传时默认查询所有状态。Unused,Used,Expired
   */
  Status?: string
}

/**
 * QueryVoucherAmountByUin返回参数结构体
 */
export interface QueryVoucherAmountByUinResponse {
  /**
   * 子客代金券额度数据
   */
  Data: Array<QueryVoucherAmountByUinItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子客代金券额度
 */
export interface QueryVoucherAmountByUinItem {
  /**
   * 子客uin
   */
  ClientUin: number

  /**
   * 代金券额度
   */
  TotalAmount: number

  /**
   * 代金券余额
   */
  RemainAmount: number
}

/**
 * 查询子客授信历史记录返回信息
 */
export interface QueryCreditAllocationHistoryData {
  /**
   * 分配时间
   */
  AllocatedTime: string

  /**
   * 操作员
   */
  Operator: string

  /**
   * 分配的信用值
   */
  Credit: number

  /**
   * 分配的总金额
   */
  AllocatedCredit: number
}

/**
 * AllocateCustomerCredit请求参数结构体
 */
export interface AllocateCustomerCreditRequest {
  /**
   * 分配客户信用的具体值
   */
  AddedCredit: number

  /**
   * 客户uin
   */
  ClientUin: number
}

/**
 * GetCountryCodes返回参数结构体
 */
export interface GetCountryCodesResponse {
  /**
   * 国家地区代码列表
   */
  Data: Array<CountryCodeItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryCustomersCredit请求参数结构体
 */
export interface QueryCustomersCreditRequest {
  /**
   * 搜索条件类型，只能是：ClientUin|Name|Remark|Email四选一
   */
  FilterType?: string

  /**
   * 查询条件值
   */
  Filter?: string

  /**
   * 分页参数：当前页数，从1开始
   */
  Page?: number

  /**
   * 分页参数：每页条数
   */
  PageSize?: number

  /**
   * 排序参数，根据AssociationTime按照空或者desc：逆序，asc：顺序的方式进行排序
   */
  Order?: string
}

/**
 * QueryCreditByUinList请求参数结构体
 */
export interface QueryCreditByUinListRequest {
  /**
   * 用户列表
   */
  UinList: Array<number>
}

/**
 * CreateAccount返回参数结构体
 */
export interface CreateAccountResponse {
  /**
   * 账号的uin
   */
  Uin: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryPartnerCredit请求参数结构体
 */
export type QueryPartnerCreditRequest = null

/**
 * QueryCreditByUinList返回参数结构体
 */
export interface QueryCreditByUinListResponse {
  /**
   * 用户信息列表
   */
  Data: Array<QueryDirectCustomersCreditData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryVoucherPool返回参数结构体
 */
export interface QueryVoucherPoolResponse {
  /**
   * 经销商姓名
   */
  AgentName: string

  /**
   * 经销商角色类型：1:经销商 2:总经销商 3:二级经销商
   */
  AccountType: number

  /**
   * 总额度
   */
  TotalQuota: number

  /**
   * 剩余额度
   */
  RemainingQuota: number

  /**
   * 已发放的代金券数量
   */
  IssuedNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryCreditAllocationHistory返回参数结构体
 */
export interface QueryCreditAllocationHistoryResponse {
  /**
      * 历史信息总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 历史信息详细列表数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  History: Array<QueryCreditAllocationHistoryData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccount请求参数结构体
 */
export interface CreateAccountRequest {
  /**
   * 新建客户的账户类型标识。本接口取值为：personal或company
   */
  AccountType: string

  /**
      * 注册邮件地址。需要调用方保证邮件地址的有效性和正确性。
需要满足邮件的格式。如：account@qq.com
      */
  Mail: string

  /**
      * 账户密码。
长度限制：[8,20]。
需同时包含数字、字母以及特殊符号（!@#$%^&*()等非空格）
      */
  Password: string

  /**
   * 二次确认密码。必须和Password值相同
   */
  ConfirmPassword: string

  /**
      * 客户手机号码。需要调用方保证手机号码的有效性和正确性。
长度限制：[1,32]。支持全球手机号。如18888888888
      */
  PhoneNum: string

  /**
   * 客户的国家/地区代码。取值参考获取国家/地区码接口GetCountryCodes。如852
   */
  CountryCode: string

  /**
   * 客户的IOS2标准国家/地区代码。参考获取国家/地区码接口GetCountryCodes。需要与CountryCode值对应。如HK
   */
  Area: string

  /**
   * 拓展字段，默认为空
   */
  Extended?: string
}

/**
 * QueryDirectCustomersCredit请求参数结构体
 */
export type QueryDirectCustomersCreditRequest = null

/**
 * AllocateCustomerCredit返回参数结构体
 */
export interface AllocateCustomerCreditResponse {
  /**
   * 更新后的信用总额
   */
  TotalCredit: number

  /**
   * 更新后的信用余额
   */
  RemainingCredit: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子客代金券数据
 */
export interface QueryVoucherListByUinVoucherItem {
  /**
   * 券号
   */
  VoucherId: string

  /**
   * 状态
   */
  VoucherStatus: string

  /**
   * 面额
   */
  TotalAmount: number

  /**
   * 余额
   */
  RemainAmount: number
}

/**
 * QueryVoucherAmountByUin请求参数结构体
 */
export interface QueryVoucherAmountByUinRequest {
  /**
   * 子客uin列表
   */
  ClientUins: Array<number>
}

/**
 * 直接子客信用信息
 */
export interface QueryDirectCustomersCreditData {
  /**
   * 用户Uin
   */
  Uin: number

  /**
   * 总信用值
   */
  TotalCredit: number

  /**
   * 剩余信用值
   */
  RemainingCredit: number
}

/**
 * QueryCreditAllocationHistory请求参数结构体
 */
export interface QueryCreditAllocationHistoryRequest {
  /**
   * 客户uin
   */
  ClientUin: number

  /**
   * 翻页参数，所在页数
   */
  Page?: number

  /**
   * 翻页参数，每页数据量
   */
  PageSize?: number
}

/**
 * 获取国家码接口的一个元素类型
 */
export interface CountryCodeItem {
  /**
   * 国家英文名
   */
  EnName: string

  /**
   * 国家中文名
   */
  Name: string

  /**
   * ISO2标准国家/地区代码
   */
  IOS2: string

  /**
   * ISO3标准国家/地区代码
   */
  IOS3: string

  /**
   * 电话代码
   */
  Code: string
}

/**
 * QueryDirectCustomersCredit返回参数结构体
 */
export interface QueryDirectCustomersCreditResponse {
  /**
   * 直接子客信息列表
   */
  Data: Array<QueryDirectCustomersCreditData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryVoucherListByUin返回参数结构体
 */
export interface QueryVoucherListByUinResponse {
  /**
   * 子客代金券数据
   */
  Data: Array<QueryVoucherListByUinItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryVoucherPool请求参数结构体
 */
export type QueryVoucherPoolRequest = null

/**
 * 单个客户代金券数据
 */
export interface QueryVoucherListByUinItem {
  /**
   * 子客uin
   */
  ClientUin: number

  /**
   * 券总数量
   */
  TotalCount: number

  /**
   * 券详情
   */
  Data: Array<QueryVoucherListByUinVoucherItem>
}

/**
 * 查询客户信用额度出参复杂类型
 */
export interface QueryCustomersCreditData {
  /**
   * 名字
   */
  Name: string

  /**
   * 类型
   */
  Type: string

  /**
   * 电话
   */
  Mobile: string

  /**
   * 邮箱
   */
  Email: string

  /**
   * 欠费标记
   */
  Arrears: string

  /**
   * 绑定时间
   */
  AssociationTime: string

  /**
   * 最近到期时间
   */
  RecentExpiry: string

  /**
   * 子客uin
   */
  ClientUin: number

  /**
   * 子客授信额度
   */
  Credit: number

  /**
   * 子客剩余额度
   */
  RemainingCredit: number

  /**
   * 0：未实名 1: 个人实名 2：企业实名
   */
  IdentifyType: number

  /**
   * 客户备注
   */
  Remark: string

  /**
   * 强制状态
   */
  Force: number
}

/**
 * QueryCustomersCredit返回参数结构体
 */
export interface QueryCustomersCreditResponse {
  /**
      * 查询客户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<QueryCustomersCreditData>

  /**
   * 客户数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
