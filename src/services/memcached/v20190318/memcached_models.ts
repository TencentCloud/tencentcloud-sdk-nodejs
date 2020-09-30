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
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 实例ID组成的数组，数组下标从0开始
   */
  InstanceIds?: Array<string>

  /**
   * 实例名称组成的数组，数组下标从0开始
   */
  InstanceNames?: Array<string>

  /**
   * 实例列表的大小，参数默认值100
   */
  Limit?: number

  /**
   * 偏移量，取Limit整数倍
   */
  Offset?: number

  /**
   * 枚举范围： AddTimeStamp, InstanceName, ProjectId
   */
  OrderBy?: string

  /**
   * 0倒序，1正序，默认倒序
   */
  OrderType?: number

  /**
   * 项目ID组成的数组，数组下标从0开始
   */
  ProjectIds?: Array<number>

  /**
   * 搜索关键词：支持实例ID、实例名称、完整IP
   */
  SearchKeys?: Array<string>

  /**
   * 子网ID数组，数组下标从0开始，如：subnet-fdj24n34j2
   */
  UniqSubnetIds?: Array<string>

  /**
   * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：vpc-sad23jfdfk
   */
  UniqVpcIds?: Array<string>

  /**
   * 实例服务IP组成的数组，数组下标从0开始
   */
  Vips?: Array<string>
}

/**
 * 标签信息
 */
export interface TagInfo {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例详细信息列表
   */
  InstanceList?: Array<InstanceListInfo>

  /**
   * 实例数量
   */
  TotalNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详细信息列表
 */
export interface InstanceListInfo {
  /**
   * 实例关联的标签信息
   */
  Tags?: Array<TagInfo>

  /**
   * 实例创建时间
   */
  AddTimeStamp?: string

  /**
   * 用户AppID
   */
  AppId?: number

  /**
   * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
   */
  AutoRenewFlag?: number

  /**
   * 实例内置ID
   */
  CmemId?: number

  /**
   * 实例截止时间
   */
  DeadlineTimeStamp?: string

  /**
   * 过期策略
   */
  Expire?: number

  /**
   * 实例描述信息
   */
  InstanceDesc?: string

  /**
   * 实例ID
   */
  InstanceId?: string

  /**
   * 实例名称
   */
  InstanceName?: string

  /**
   * 实例隔离时间
   */
  IsolateTimeStamp?: string

  /**
   * 实例修改时间
   */
  ModTimeStamp?: string

  /**
   * 计费模式：0-按量计费，1-包年包月
   */
  PayMode?: number

  /**
   * 项目ID
   */
  ProjectId?: number

  /**
   * 地域id 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
   */
  RegionId?: number

  /**
   * 仓库ID
   */
  SetId?: number

  /**
   * 实例当前状态，0：待初始化；1：实例在流程中；2：实例运行中；-2：实例已隔离；-3：实例待删除
   */
  Status?: number

  /**
   * vpc网络下子网id 如：46315
   */
  SubnetId?: number

  /**
   * vpc网络下子网id 如：subnet-fd3j6l35mm0
   */
  UniqSubnetId?: string

  /**
   * vpc网络id 如：vpc-fk33jsf43kgv
   */
  UniqVpcId?: string

  /**
   * 实例vip
   */
  Vip?: string

  /**
   * vpc网络id 如：75101
   */
  VpcId?: number

  /**
   * 实例端口号
   */
  Vport?: number

  /**
   * 区域ID
   */
  ZoneId?: number
}
