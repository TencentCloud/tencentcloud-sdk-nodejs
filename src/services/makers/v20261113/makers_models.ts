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
 * 项目列表过滤条件。同一条件的 Values 之间为或
 */
export interface ProjectFilter {
  /**
   * <p>过滤字段。ProjectId、Name、Status、Provider</p>
   */
  Name: string
  /**
   * <p>过滤值</p>
   */
  Values: Array<string>
}

/**
 * 项目最近一次部署
 */
export interface ProjectDeployment {
  /**
   * <p>部署 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentId?: string
  /**
   * <p>项目 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * <p>部署状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>构建耗时，单位毫秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildCost?: string
  /**
   * <p>触发来源</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViaMeta?: string
  /**
   * <p>环境 slug</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * <p>分支</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoBranch?: string
  /**
   * <p>提交哈希</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoCommitHash?: string
  /**
   * <p>提交说明</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoCommitMsg?: string
  /**
   * <p>预览地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewUrl?: string
  /**
   * <p>封面地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoverUrl?: string
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedOn?: string
  /**
   * <p>本次部署使用的仓库地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DplRepoUrl?: string
}

/**
 * DeleteProjectCustomDomains请求参数结构体
 */
export interface DeleteProjectCustomDomainsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>要解绑的域名</p>
   */
  CustomDomains: Array<string>
}

/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
}

/**
 * CreateDeployment请求参数结构体
 */
export interface CreateDeploymentRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>触发来源。Github、ReDeploy、Api、Webhook、Upload、Coding、Gitee、Gitlab</p>
   */
  ViaMeta: string
  /**
   * <p>环境 slug。Production、Preview 或自定义环境</p>
   */
  Env: string
  /**
   * <p>代码来源。上传制品传 Upload</p>
   */
  Provider: string
  /**
   * <p>制品类型。Zip 或 Folder</p>
   */
  DistType?: string
  /**
   * <p>已上传制品在临时桶中的对象路径</p>
   */
  TempBucketPath?: string
  /**
   * <p>构建分支</p>
   */
  RepoBranch?: string
  /**
   * <p>提交哈希</p>
   */
  RepoCommitHash?: string
  /**
   * <p>提交说明</p>
   */
  RepoCommitMsg?: string
  /**
   * <p>构建来源</p>
   */
  BuildFrom?: string
  /**
   * <p>模板 ID</p>
   */
  TemplateId?: string
  /**
   * <p>构建规格。当前服务端仍从 edgeone.json 读取，此字段先保留</p>
   */
  CiSpec?: string
}

/**
 * DescribeDeployments请求参数结构体
 */
export interface DescribeDeploymentsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>按部署 ID 查询</p>
   */
  DeploymentIds?: Array<string>
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<DeploymentFilter>
  /**
   * <p>偏移</p>
   */
  Offset?: number
  /**
   * <p>每页数量，最大 100</p>
   */
  Limit?: number
  /**
   * <p>CreatedOn 或 ModifiedOn</p>
   */
  OrderBy?: string
  /**
   * <p>Asc 或 Desc</p>
   */
  OrderType?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
}

/**
 * 环境
 */
export interface Environment {
  /**
   * <p>环境标识，创建后不可改</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Slug?: string
  /**
   * <p>环境名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>Production、Preview、Custom</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>关联分支，支持通配</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Branches?: Array<string>
  /**
   * <p>是否自动部署。Production 恒为 true</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoDeploy?: boolean
  /**
   * <p>绑定的自定义域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomDomains?: Array<string>
  /**
   * <p>环境变量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvVars?: Array<EnvironmentEnvVar>
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedOn?: string
}

/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>页码偏移，从 0 开始。后端跳过 Offset * Limit 条</p>
   */
  Offset?: number
  /**
   * <p>每页数量，最大 100</p>
   */
  Limit?: number
  /**
   * <p>过滤条件。Name 取值 ProjectId、Name、Status、Provider</p>
   */
  Filters?: Array<ProjectFilter>
  /**
   * <p>按项目 ID 查询</p>
   */
  ProjectIds?: Array<string>
  /**
   * <p>排序字段。CreatedOn、ModifiedOn。默认 CreatedOn</p>
   */
  OrderBy?: string
  /**
   * <p>排序方向。Asc、Desc、ASC、DESC。默认 DESC</p>
   */
  OrderType?: string
  /**
   * <p>来源。drop 时只返回 Upload 项目</p>
   */
  Source?: string
  /**
   * <p>按项目名称模糊搜索</p>
   */
  Query?: string
}

/**
 * COS 临时密钥
 */
export interface CosCredentials {
  /**
   * <p>临时 SecretId</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretId?: string
  /**
   * <p>临时 SecretKey</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretKey?: string
  /**
   * <p>临时 Token</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
}

/**
 * 自定义域名
 */
export interface CustomDomainItem {
  /**
   * <p>域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
}

/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>环境列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environments?: Array<Environment>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyZoneCustomDomainEnv请求参数结构体
 */
export interface ModifyZoneCustomDomainEnvRequest {
  /**
   * <p>站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>域名</p>
   */
  Domain: string
  /**
   * <p>目标环境 slug</p>
   */
  Env: string
}

/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>项目列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Projects?: Array<Project>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名归属校验信息
 */
export interface OwnershipVerification {
  /**
   * <p>DNS 校验</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DnsVerification?: DnsVerification
  /**
   * <p>文件校验</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileVerification?: FileVerification
  /**
   * <p>NS 校验</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NsVerification?: NsVerification
}

/**
 * ModifyProjectEnvs请求参数结构体
 */
export interface ModifyProjectEnvsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>要写入的环境变量</p>
   */
  EnvVars: Array<EnvVar>
}

/**
 * 绑定自定义域名时的域名项
 */
export interface CustomDomainInput {
  /**
   * <p>域名</p>
   */
  Domain: string
  /**
   * <p>证书 ID</p>
   */
  CertificateId?: string
  /**
   * <p>校验状态。Verify、Pass、Fail</p>
   */
  Status?: string
  /**
   * <p>是否不申请证书</p>
   */
  NoCertificate?: boolean
}

/**
 * DeleteProjectEnvs请求参数结构体
 */
export interface DeleteProjectEnvsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>要删除的环境变量。传 Key（或 Id），Value 必填但不参与匹配</p>
   */
  EnvVars: Array<EnvVar>
}

/**
 * DeleteProjectEnvs返回参数结构体
 */
export interface DeleteProjectEnvsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * NS 归属校验信息。Makers 目前恒为 null
 */
export interface NsVerification {
  /**
   * <p>NS 服务器</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameServers?: Array<string>
}

/**
 * 文件归属校验信息
 */
export interface FileVerification {
  /**
   * <p>校验文件路径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * <p>校验文件内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * 部署记录
 */
export interface Deployment {
  /**
   * <p>部署 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentId?: string
  /**
   * <p>项目 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * <p>Success、Failed、Process、Invalid、Pending、Timeout、Cancelled</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>部署被移除前的原始状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalStatus?: string
  /**
   * <p>构建退出码，0 表示成功</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: number
  /**
   * <p>构建耗时，单位毫秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildCost?: string
  /**
   * <p>触发来源。Github、ReDeploy、Api、Coding、Gitee、Upload、Gitlab</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViaMeta?: string
  /**
   * <p>环境 slug</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * <p>分支</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoBranch?: string
  /**
   * <p>提交哈希</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoCommitHash?: string
  /**
   * <p>提交说明</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoCommitMsg?: string
  /**
   * <p>本次部署的访问地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreviewUrl?: string
  /**
   * <p>项目默认域名地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectUrl?: string
  /**
   * <p>是否为当前生产版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedInProd?: boolean
  /**
   * <p>封面地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoverUrl?: string
  /**
   * <p>路由配置，JSON 字符串</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaData?: string
  /**
   * <p>本次部署使用的仓库地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DplRepoUrl?: string
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedOn?: string
}

/**
 * DeleteProjectCustomDomains返回参数结构体
 */
export interface DeleteProjectCustomDomainsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectEnvs返回参数结构体
 */
export interface DescribeProjectEnvsResponse {
  /**
   * <p>环境变量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvVars?: Array<EnvVar>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeploymentLog请求参数结构体
 */
export interface DescribeDeploymentLogRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>部署 ID</p>
   */
  DeploymentId: string
}

/**
 * DescribeDeploymentLog返回参数结构体
 */
export interface DescribeDeploymentLogResponse {
  /**
   * <p>构建日志地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 开关配置
 */
export interface SwitchConfig {
  /**
   * <p>on 或 off</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Switch?: string
}

/**
 * DescribeZoneCustomDomains返回参数结构体
 */
export interface DescribeZoneCustomDomainsResponse {
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>域名列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PagesDomains?: Array<ZoneDomain>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>项目名称</p>
   */
  Name?: string
  /**
   * <p>项目根目录</p>
   */
  RootDir?: string
  /**
   * <p>构建产物目录</p>
   */
  OutputDir?: string
  /**
   * <p>构建命令</p>
   */
  BuildCmd?: string
  /**
   * <p>安装命令</p>
   */
  InstallCmd?: string
  /**
   * <p>框架</p>
   */
  Framework?: string
  /**
   * <p>封面地址</p>
   */
  CoverUrl?: string
  /**
   * <p>Node.js 版本</p>
   */
  NodeJsVersion?: string
}

/**
 * ModifyZoneCustomDomainEnv返回参数结构体
 */
export interface ModifyZoneCustomDomainEnvResponse {
  /**
   * <p>域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * <p>切换后的环境 slug</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 环境上的变量
 */
export interface EnvironmentEnvVar {
  /**
   * <p>变量 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * <p>变量名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * <p>变量值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * <p>备注</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * <p>生效环境 slug</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: Array<string>
}

/**
 * DescribeCosTempToken返回参数结构体
 */
export interface DescribeCosTempTokenResponse {
  /**
   * <p>COS 桶</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * <p>COS 地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * <p>上传路径，格式 appId/projectName/时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetPath?: string
  /**
   * <p>临时密钥过期时间，Unix 秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: number
  /**
   * <p>临时密钥过期时间，ISO 8601</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expiration?: string
  /**
   * <p>临时密钥</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Credentials?: CosCredentials
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目。字段与 DescribeProjects 的实际返回一致
 */
export interface Project {
  /**
   * <p>项目 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * <p>项目名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>项目状态。Normal、Ban、Unlink、Process、Pending、Offline</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>站点 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId?: string
  /**
   * <p>加速区域。mainland、overseas、global</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Area?: string
  /**
   * <p>代码来源。Github、Gitee、Coding、Upload、Gitlab、Bitbucket、Cnb</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Provider?: string
  /**
   * <p>创建来源。Template、Custom、CLI、Guest</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Channel?: string
  /**
   * <p>预设域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetDomain?: string
  /**
   * <p>预设域名状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PresetDomainStatus?: string
  /**
   * <p>项目根目录</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RootDir?: string
  /**
   * <p>构建产物目录</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputDir?: string
  /**
   * <p>构建命令</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildCmd?: string
  /**
   * <p>安装命令</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstallCmd?: string
  /**
   * <p>框架</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Framework?: string
  /**
   * <p>Node.js 版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodejsVersion?: string
  /**
   * <p>仓库地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoUrl?: string
  /**
   * <p>仓库所有者</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoOwner?: string
  /**
   * <p>仓库名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoName?: string
  /**
   * <p>生产分支</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoBranch?: string
  /**
   * <p>预览分支</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepoPreBranches?: Array<string>
  /**
   * <p>部署地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions?: Regions
  /**
   * <p>环境变量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvVars?: Array<ProjectEnvVar>
  /**
   * <p>自定义域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomDomains?: Array<CustomDomainItem>
  /**
   * <p>最近一次部署</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deployment?: ProjectDeployment
  /**
   * <p>是否 Agent 项目。1 是，0 否</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAgent?: number
  /**
   * <p>Agent 框架。非 Agent 项目为空</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentFramework?: string
  /**
   * <p>是否命中用户级泛域名。1 是，0 否</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsTld?: number
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedOn?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * <p>项目 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateZoneCustomDomain返回参数结构体
 */
export interface CreateZoneCustomDomainResponse {
  /**
   * <p>域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * <p>域名配置 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DNS 归属校验记录
 */
export interface DnsVerification {
  /**
   * <p>记录类型，TXT</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordType?: string
  /**
   * <p>主机记录</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subdomain?: string
  /**
   * <p>记录值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordValue?: string
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeployments返回参数结构体
 */
export interface DescribeDeploymentsResponse {
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>部署列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deployments?: Array<Deployment>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneCustomDomains请求参数结构体
 */
export interface DescribeZoneCustomDomainsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>只查询这些域名。不传则返回项目下的域名</p>
   */
  CustomDomains?: Array<CustomDomainInput>
}

/**
 * DescribeProjectEnvs请求参数结构体
 */
export interface DescribeProjectEnvsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>只返回该环境 slug 的变量</p>
   */
  Env?: string
}

/**
 * CreateDeployment返回参数结构体
 */
export interface CreateDeploymentResponse {
  /**
   * <p>部署 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeploymentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目部署地域
 */
export interface Regions {
  /**
   * <p>中国大陆地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mainland?: Array<string>
  /**
   * <p>海外地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Overseas?: Array<string>
}

/**
 * 部署列表过滤条件
 */
export interface DeploymentFilter {
  /**
   * <p>过滤字段。ProjectId、DeploymentId、Name、Status、StartTime、EndTime、RepoBranch</p>
   */
  Name: string
  /**
   * <p>过滤值</p>
   */
  Values: Array<string>
}

/**
 * 站点下的自定义域名
 */
export interface ZoneDomain {
  /**
   * <p>Custom 或 Preset</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * <p>域名状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>绑定的环境 slug，默认 Production</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * <p>站点 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId?: string
  /**
   * <p>加速区域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Area?: string
  /**
   * <p>CNAME</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cname?: string
  /**
   * <p>主域名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainDomain?: string
  /**
   * <p>IPv6</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ipv6?: SwitchConfig
  /**
   * <p>HTTP/2</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Http2?: SwitchConfig
  /**
   * <p>OCSP</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcspStapling?: SwitchConfig
  /**
   * <p>强制 HTTPS</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ForceRedirect?: ForceRedirectConfig
  /**
   * <p>HSTS</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hsts?: HstsConfig
  /**
   * <p>归属校验</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnershipVerification?: OwnershipVerification
}

/**
 * HSTS 配置
 */
export interface HstsConfig {
  /**
   * <p>on 或 off</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Switch?: string
  /**
   * <p>有效期，秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxAge?: number
  /**
   * <p>on 或 off</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncludeSubDomains?: string
  /**
   * <p>on 或 off</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Preload?: string
}

/**
 * 项目列表里返回的环境变量，只有键和值
 */
export interface ProjectEnvVar {
  /**
   * <p>变量名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * <p>变量值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * CreateZoneCustomDomain请求参数结构体
 */
export interface CreateZoneCustomDomainRequest {
  /**
   * <p>站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
  /**
   * <p>自定义域名</p>
   */
  Domain: string
  /**
   * <p>环境 slug。不传时由后端决定</p>
   */
  Env?: string
}

/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目 ID</p>
   */
  ProjectId: string
}

/**
 * 强制 HTTPS 跳转
 */
export interface ForceRedirectConfig {
  /**
   * <p>on 或 off</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Switch?: string
  /**
   * <p>301、302、307、308</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedirectStatusCode?: number
}

/**
 * ModifyProjectEnvs返回参数结构体
 */
export interface ModifyProjectEnvsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 环境变量。Env 缺省或空数组表示全局，写入时展开为项目当前全部环境
 */
export interface EnvVar {
  /**
   * <p>变量名，最长 255</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * <p>变量值，最长 1000</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * <p>变量 ID。创建时不传</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * <p>备注，最长 255</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * <p>生效环境 slug，例如 Production、Preview。同 Key 的多行环境不能重叠</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: Array<string>
}

/**
 * DescribeCosTempToken请求参数结构体
 */
export interface DescribeCosTempTokenRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目名称。临时路径按它拼接</p>
   */
  ProjectName: string
  /**
   * <p>项目 ID。不传 ProjectName 时用来反查项目名</p>
   */
  ProjectId?: string
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * <p>Makers 站点 ID</p>
   */
  ZoneId: string
  /**
   * <p>项目名称</p>
   */
  Name: string
  /**
   * <p>创建来源。Template、Custom、CLI、Guest</p>
   */
  Channel: string
  /**
   * <p>代码来源。Upload、Github、Gitee、Gitlab、Coding</p>
   */
  Provider?: string
  /**
   * <p>接入方标识</p>
   */
  Source?: string
  /**
   * <p>加速区域。mainland、overseas、global</p>
   */
  Area?: string
  /**
   * <p>Node.js 版本。14.21.3、16.20.2、18.20.4、20.18.0、22.11.0、22.17.1、22.21.1、24.5.0、24.11.0、24.18.0</p>
   */
  NodeJsVersion?: string
  /**
   * <p>项目根目录</p>
   */
  RootDir?: string
  /**
   * <p>构建产物目录</p>
   */
  OutputDir?: string
  /**
   * <p>构建命令</p>
   */
  BuildCmd?: string
  /**
   * <p>安装命令</p>
   */
  InstallCmd?: string
  /**
   * <p>框架</p>
   */
  Framework?: string
  /**
   * <p>模板 ID</p>
   */
  TemplateId?: string
  /**
   * <p>仓库地址</p>
   */
  RepoUrl?: string
  /**
   * <p>仓库所有者</p>
   */
  RepoOwner?: string
  /**
   * <p>仓库名称</p>
   */
  RepoName?: string
  /**
   * <p>生产分支</p>
   */
  RepoBranch?: string
  /**
   * <p>初始环境变量</p>
   */
  EnvVars?: Array<EnvVar>
  /**
   * <p>Coding 命名空间。Provider 为 Coding 时使用</p>
   */
  Namespace?: string
  /**
   * <p>Coding 项目 ID。Provider 为 Coding 时使用</p>
   */
  CodingProjectId?: number
}
