# Release 4.1.326

## 腾讯云智能体开发平台(adp) 版本：2026-05-20

### 第 29 次发布

发布时间：2026-10-14 01:08:52

本次发布包含了以下内容：

改善已有的文档。

新增数据结构：

* [AppIdentity](https://cloud.tencent.com/document/api/1759/132545#AppIdentity)
* [ClawAgentChannelContextTimeoutConfig](https://cloud.tencent.com/document/api/1759/132545#ClawAgentChannelContextTimeoutConfig)

修改数据结构：

* [AppSummary](https://cloud.tencent.com/document/api/1759/132545#AppSummary)

	* 新增成员：Description

* [ClawAgentConfig](https://cloud.tencent.com/document/api/1759/132545#ClawAgentConfig)

	* 新增成员：ChannelContextTimeoutConfig

* [SkillReferenceSummary](https://cloud.tencent.com/document/api/1759/132545#SkillReferenceSummary)

	* 新增成员：AppIdentity


### 第 28 次发布

发布时间：2026-10-12 10:39:20

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [CreateWorkflowRun](https://cloud.tencent.com/document/api/1759/139333)
* [DescribeNodeBatchRun](https://cloud.tencent.com/document/api/1759/139332)
* [DescribeNodeRunDetail](https://cloud.tencent.com/document/api/1759/139331)
* [DescribeWorkflowRun](https://cloud.tencent.com/document/api/1759/139330)
* [DescribeWorkflowRunSummaryList](https://cloud.tencent.com/document/api/1759/139329)
* [ResumeWorkflowRun](https://cloud.tencent.com/document/api/1759/139328)
* [SaveWorkflowDebugContext](https://cloud.tencent.com/document/api/1759/139327)
* [SaveWorkflowToolNodeOutput](https://cloud.tencent.com/document/api/1759/139326)
* [StopWorkflowRunList](https://cloud.tencent.com/document/api/1759/139325)

修改接口：

* [CreateRelease](https://cloud.tencent.com/document/api/1759/132538)

	* 新增入参：PortalShareConfig

* [ModifyApp](https://cloud.tencent.com/document/api/1759/132502)

	* 新增入参：FileVolumeMountList


新增数据结构：

* [AppFileVolumeMount](https://cloud.tencent.com/document/api/1759/132545#AppFileVolumeMount)
* [AppVariableValue](https://cloud.tencent.com/document/api/1759/132545#AppVariableValue)
* [BatchRunSummary](https://cloud.tencent.com/document/api/1759/132545#BatchRunSummary)
* [ConversationFileCollection](https://cloud.tencent.com/document/api/1759/132545#ConversationFileCollection)
* [ConversationFileInfo](https://cloud.tencent.com/document/api/1759/132545#ConversationFileInfo)
* [ConversationWidget](https://cloud.tencent.com/document/api/1759/132545#ConversationWidget)
* [CustomVariable](https://cloud.tencent.com/document/api/1759/132545#CustomVariable)
* [FileVolumeMount](https://cloud.tencent.com/document/api/1759/132545#FileVolumeMount)
* [KBShareStatus](https://cloud.tencent.com/document/api/1759/132545#KBShareStatus)
* [KBSpaceShare](https://cloud.tencent.com/document/api/1759/132545#KBSpaceShare)
* [NodeRun](https://cloud.tencent.com/document/api/1759/132545#NodeRun)
* [NodeRunContent](https://cloud.tencent.com/document/api/1759/132545#NodeRunContent)
* [NodeRunDetail](https://cloud.tencent.com/document/api/1759/132545#NodeRunDetail)
* [NodeRunExecution](https://cloud.tencent.com/document/api/1759/132545#NodeRunExecution)
* [NodeRunLog](https://cloud.tencent.com/document/api/1759/132545#NodeRunLog)
* [PortalShareConfig](https://cloud.tencent.com/document/api/1759/132545#PortalShareConfig)
* [ReplyContent](https://cloud.tencent.com/document/api/1759/132545#ReplyContent)
* [ReplyMessage](https://cloud.tencent.com/document/api/1759/132545#ReplyMessage)
* [Statistic](https://cloud.tencent.com/document/api/1759/132545#Statistic)
* [WorkflowRun](https://cloud.tencent.com/document/api/1759/132545#WorkflowRun)
* [WorkflowRunMetadata](https://cloud.tencent.com/document/api/1759/132545#WorkflowRunMetadata)
* [WorkflowRunOutput](https://cloud.tencent.com/document/api/1759/132545#WorkflowRunOutput)
* [WorkflowRunProfile](https://cloud.tencent.com/document/api/1759/132545#WorkflowRunProfile)
* [WorkflowRunResult](https://cloud.tencent.com/document/api/1759/132545#WorkflowRunResult)
* [WorkflowRunSummary](https://cloud.tencent.com/document/api/1759/132545#WorkflowRunSummary)
* [WorkflowRunTime](https://cloud.tencent.com/document/api/1759/132545#WorkflowRunTime)

修改数据结构：

* [App](https://cloud.tencent.com/document/api/1759/132545#App)

	* 新增成员：PortalShareConfig, FileVolumeMountList

* [KBPermission](https://cloud.tencent.com/document/api/1759/132545#KBPermission)

	* 新增成员：CanShare

* [KBSummary](https://cloud.tencent.com/document/api/1759/132545#KBSummary)

	* 新增成员：SpaceShare

* [ModelLimit](https://cloud.tencent.com/document/api/1759/132545#ModelLimit)

	* 新增成员：MaxInputTokensDescription, MaxOutputTokensDescription

* [ModelStatus](https://cloud.tencent.com/document/api/1759/132545#ModelStatus)

	* 新增成员：IsExperienceSupported, RpmLimit, TpmLimit

* [ReleaseSummary](https://cloud.tencent.com/document/api/1759/132545#ReleaseSummary)

	* 新增成员：PortalShareConfig




## Agent 沙箱服务(ags) 版本：2025-09-20

### 第 28 次发布

发布时间：2026-10-14 01:10:27

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [DeletePreCacheImage](https://cloud.tencent.com/document/api/1814/139442)
* [DescribePreCacheImageList](https://cloud.tencent.com/document/api/1814/139441)

修改接口：

* [StartSandboxInstance](https://cloud.tencent.com/document/api/1814/124816)

	* 新增入参：SnapshotId


新增数据结构：

* [PreCacheImage](https://cloud.tencent.com/document/api/1814/124823#PreCacheImage)



## 应用型负载均衡(alb) 版本：2025-10-30

### 第 4 次发布

发布时间：2026-10-14 01:11:39

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [LoadBalancer](https://cloud.tencent.com/document/api/1822/133738#LoadBalancer)

	* <font color="#dd0000">**删除成员**：</font>AccessLogConfig




## 语音识别(asr) 版本：2019-06-14

### 第 49 次发布

发布时间：2026-10-14 01:15:54

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [VoicePrintEnroll](https://cloud.tencent.com/document/api/1093/94483)

	* 新增入参：QualityCheck




## 云数据库 MySQL(cdb) 版本：2017-03-20

### 第 232 次发布

发布时间：2026-10-14 01:23:47

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [DescribeBackups](https://cloud.tencent.com/document/api/236/15842)

	* 新增入参：MinStartTime, MaxStartTime




## 腾讯云数据仓库 TCHouse-D(cdwdoris) 版本：2021-12-28

### 第 67 次发布

发布时间：2026-10-14 01:26:59

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [InstanceInfo](https://cloud.tencent.com/document/api/1387/102385#InstanceInfo)

	* 新增成员：CacheDiskType


### 第 66 次发布

发布时间：2026-10-13 01:31:12

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [ResourceSpec](https://cloud.tencent.com/document/api/1387/102385#ResourceSpec)

	* 新增成员：ComputeGroupSuffix




## 云防火墙(cfw) 版本：2019-09-04

### 第 117 次发布

发布时间：2026-10-13 01:33:47

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [DescribeVpcFwIpStat](https://cloud.tencent.com/document/api/1132/139347)

新增数据结构：

* [FwGroupIpFlowStat](https://cloud.tencent.com/document/api/1132/49071#FwGroupIpFlowStat)



## 云安全一体化平台(csip) 版本：2022-11-21

### 第 107 次发布

发布时间：2026-10-13 01:46:59

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [ImageAssociatedAssetCount](https://cloud.tencent.com/document/api/664/90825#ImageAssociatedAssetCount)

	* 新增成员：SuperNodeHostCount




## 大数据智能体工作台DataBuddy(databuddy) 版本：2026-07-15

### 第 8 次发布

发布时间：2026-10-14 01:55:07

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [DeleteCatalog](https://cloud.tencent.com/document/api/1835/139026)

	* <font color="#dd0000">**修改入参**：</font>WorkspaceId

* [DeleteSchema](https://cloud.tencent.com/document/api/1835/139025)

	* <font color="#dd0000">**修改入参**：</font>WorkspaceId

* [GetSchema](https://cloud.tencent.com/document/api/1835/139291)

	* <font color="#dd0000">**修改入参**：</font>WorkspaceId

* [GetTable](https://cloud.tencent.com/document/api/1835/139290)

	* <font color="#dd0000">**修改入参**：</font>WorkspaceId

* [ListSchemas](https://cloud.tencent.com/document/api/1835/139024)

	* <font color="#dd0000">**修改入参**：</font>WorkspaceId

* [ListTables](https://cloud.tencent.com/document/api/1835/139287)

	* <font color="#dd0000">**修改入参**：</font>WorkspaceId




## 数据库智能管家 DBbrain(dbbrain) 版本：2021-05-27

### 第 66 次发布

发布时间：2026-10-13 02:07:40

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [DescribeDBAuditLogs](https://cloud.tencent.com/document/api/1130/139349)
* [DescribeDatabaseObjectV2](https://cloud.tencent.com/document/api/1130/139350)

新增数据结构：

* [AuditDBLogItem](https://cloud.tencent.com/document/api/1130/57812#AuditDBLogItem)
* [AuditLogQueryFilter](https://cloud.tencent.com/document/api/1130/57812#AuditLogQueryFilter)
* [AuditProxyLogItem](https://cloud.tencent.com/document/api/1130/57812#AuditProxyLogItem)
* [IndexDDLInfo](https://cloud.tencent.com/document/api/1130/57812#IndexDDLInfo)
* [TableStatistics](https://cloud.tencent.com/document/api/1130/57812#TableStatistics)



## 数据库智能管家 DBbrain(dbbrain) 版本：2019-10-16



## 数据湖计算 DLC(dlc) 版本：2021-01-25

### 第 185 次发布

发布时间：2026-10-14 01:58:51

本次发布包含了以下内容：

改善已有的文档。

新增数据结构：

* [WarehouseProfileBriefInfo](https://cloud.tencent.com/document/api/1342/53778#WarehouseProfileBriefInfo)

修改数据结构：

* [WarehouseInfo](https://cloud.tencent.com/document/api/1342/53778#WarehouseInfo)

	* 新增成员：ProfileDetail




## 事件总线(eb) 版本：2021-04-16

### 第 18 次发布

发布时间：2026-10-14 02:06:37

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [CkafkaTargetParams](https://cloud.tencent.com/document/api/1359/67704#CkafkaTargetParams)

	* 新增成员：TimeFormat




## Elasticsearch Service(es) 版本：2025-01-01



## Elasticsearch Service(es) 版本：2018-04-16

### 第 112 次发布

发布时间：2026-10-14 02:10:10

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [DescribeInstances](https://cloud.tencent.com/document/api/845/30631)

	* 新增入参：NodeIps


新增数据结构：

* [FamilyResourceStat](https://cloud.tencent.com/document/api/845/30634#FamilyResourceStat)

修改数据结构：

* [CollectorTarget](https://cloud.tencent.com/document/api/845/30634#CollectorTarget)

	* 新增成员：InputsMultiLineEnabled, InputsMultiLineType, InputsMultiLinePattern, InputsMultiLineNegate, InputsMultiLineMatch, TkeCollectType

* [EventDataInfoOverview](https://cloud.tencent.com/document/api/845/30634#EventDataInfoOverview)

	* 新增成员：EventScope

* [LogstashNodeTypeResource](https://cloud.tencent.com/document/api/845/30634#LogstashNodeTypeResource)

	* 新增成员：SsdSoldOutDetail, SataSoldOutDetail, HSsdSoldOutDetail, ThroughputSoldOutDetail, BigDataSoldOutDetail, HighIOSoldOutDetail, BssdSoldOutDetail

* [NodeTypeResource](https://cloud.tencent.com/document/api/845/30634#NodeTypeResource)

	* 新增成员：SsdSoldOutDetail, SataSoldOutDetail, HSsdSoldOutDetail, ThroughputSoldOutDetail, BigDataSoldOutDetail, HighIOSoldOutDetail, BssdSoldOutDetail




## 智能视图计算平台(iss) 版本：2023-05-17

### 第 35 次发布

发布时间：2026-10-13 02:46:37

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [BatchAddVideoSnapshotConfigChannel](https://cloud.tencent.com/document/api/1344/139374)
* [BatchAssignVLPlanChannels](https://cloud.tencent.com/document/api/1344/139363)
* [BatchGetVLPlanSourceFileURL](https://cloud.tencent.com/document/api/1344/139362)
* [BatchGetVideoSnapshotImageUrl](https://cloud.tencent.com/document/api/1344/139373)
* [CreateVLPlan](https://cloud.tencent.com/document/api/1344/139361)
* [CreateVLTemplate](https://cloud.tencent.com/document/api/1344/139360)
* [CreateVideoSnapshotConfig](https://cloud.tencent.com/document/api/1344/139372)
* [CreateVideoSnapshotTemplate](https://cloud.tencent.com/document/api/1344/139371)
* [DeleteVLPlan](https://cloud.tencent.com/document/api/1344/139359)
* [DeleteVLTemplate](https://cloud.tencent.com/document/api/1344/139358)
* [DeleteVideoSnapshotConfig](https://cloud.tencent.com/document/api/1344/139370)
* [DeleteVideoSnapshotTemplate](https://cloud.tencent.com/document/api/1344/139369)
* [DescribeVLPlan](https://cloud.tencent.com/document/api/1344/139357)
* [DescribeVLPlanResult](https://cloud.tencent.com/document/api/1344/139356)
* [DescribeVLTemplate](https://cloud.tencent.com/document/api/1344/139355)
* [DescribeVideoSnapshotConfig](https://cloud.tencent.com/document/api/1344/139368)
* [DescribeVideoSnapshotTemplate](https://cloud.tencent.com/document/api/1344/139367)
* [ListVLPlans](https://cloud.tencent.com/document/api/1344/139354)
* [ListVLTemplates](https://cloud.tencent.com/document/api/1344/139353)
* [ListVideoSnapshotTemplate](https://cloud.tencent.com/document/api/1344/139366)
* [ModifyVLPlan](https://cloud.tencent.com/document/api/1344/139352)
* [ModifyVideoSnapshotConfig](https://cloud.tencent.com/document/api/1344/139365)

新增数据结构：

* [BatchGetVideoSnapshotImageUrlData](https://cloud.tencent.com/document/api/1344/95952#BatchGetVideoSnapshotImageUrlData)
* [CallbackURL](https://cloud.tencent.com/document/api/1344/95952#CallbackURL)
* [EffectiveTime](https://cloud.tencent.com/document/api/1344/95952#EffectiveTime)
* [ImageSceneInfo](https://cloud.tencent.com/document/api/1344/95952#ImageSceneInfo)
* [ImageUrlInfo](https://cloud.tencent.com/document/api/1344/95952#ImageUrlInfo)
* [ListVideoSnapshotTemplateData](https://cloud.tencent.com/document/api/1344/95952#ListVideoSnapshotTemplateData)
* [MultiSnapshotMode](https://cloud.tencent.com/document/api/1344/95952#MultiSnapshotMode)
* [MultiVideoSnapshotMode](https://cloud.tencent.com/document/api/1344/95952#MultiVideoSnapshotMode)
* [VLPlanInfo](https://cloud.tencent.com/document/api/1344/95952#VLPlanInfo)
* [VLPlanResultDetailInfo](https://cloud.tencent.com/document/api/1344/95952#VLPlanResultDetailInfo)
* [VLPlanResultSnapshotImageUrlInfo](https://cloud.tencent.com/document/api/1344/95952#VLPlanResultSnapshotImageUrlInfo)
* [VLTemplateInfo](https://cloud.tencent.com/document/api/1344/95952#VLTemplateInfo)
* [VideoSceneInfo](https://cloud.tencent.com/document/api/1344/95952#VideoSceneInfo)
* [VideoSnapshotConfigInfo](https://cloud.tencent.com/document/api/1344/95952#VideoSnapshotConfigInfo)
* [VideoSnapshotTemplateInfo](https://cloud.tencent.com/document/api/1344/95952#VideoSnapshotTemplateInfo)



## 云直播CSS(live) 版本：2018-08-01

### 第 192 次发布

发布时间：2026-10-13 02:52:01

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [DescribeStreamPackageIngestStatistics](https://cloud.tencent.com/document/api/267/139378)
* [DescribeStreamPackageOutputStatistics](https://cloud.tencent.com/document/api/267/139377)
* [DescribeStreamPackageRemuxStatistics](https://cloud.tencent.com/document/api/267/139376)

新增数据结构：

* [IngestStatisticsDataInfo](https://cloud.tencent.com/document/api/267/20474#IngestStatisticsDataInfo)
* [OutputStatisticsDataInfo](https://cloud.tencent.com/document/api/267/20474#OutputStatisticsDataInfo)
* [RemuxStatisticsDataInfo](https://cloud.tencent.com/document/api/267/20474#RemuxStatisticsDataInfo)



## 腾讯云可观测平台(monitor) 版本：2023-06-16

### 第 14 次发布

发布时间：2026-10-14 02:38:33

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [ListAIWorkbenchArtifacts](https://cloud.tencent.com/document/api/248/136938)

	* 新增入参：AgentId, NameKeyword


修改数据结构：

* [ArtifactInfo](https://cloud.tencent.com/document/api/248/115881#ArtifactInfo)

	* 新增成员：SourceType, SourceName, ExecutionSummary




## 腾讯云可观测平台(monitor) 版本：2018-07-24



## 流计算 Oceanus(oceanus) 版本：2019-04-22

### 第 96 次发布

发布时间：2026-10-13 03:08:28

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [Setats](https://cloud.tencent.com/document/api/849/52010#Setats)

	* 新增成员：ClusterGroupSerialId




## 集团账号管理(organization) 版本：2021-03-31

### 第 61 次发布

发布时间：2026-10-14 02:45:28

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [AuditPermissionApplyOrder](https://cloud.tencent.com/document/api/850/139443)



## 集团账号管理(organization) 版本：2018-12-25



## 风险识别 RCE(rce) 版本：2026-01-30

### 第 9 次发布

发布时间：2026-10-13 03:16:58

本次发布包含了以下内容：

改善已有的文档。

新增数据结构：

* [AccountSecurityEvent](https://cloud.tencent.com/document/api/1343/134560#AccountSecurityEvent)
* [BookingEvent](https://cloud.tencent.com/document/api/1343/134560#BookingEvent)
* [SearchEvent](https://cloud.tencent.com/document/api/1343/134560#SearchEvent)

修改数据结构：

* [EventDetail](https://cloud.tencent.com/document/api/1343/134560#EventDetail)

	* 新增成员：Search, Booking, AccountSecurity




## 风险识别 RCE(rce) 版本：2025-04-25



## 风险识别 RCE(rce) 版本：2020-11-03



## 容器镜像服务(tcr) 版本：2019-09-24

### 第 83 次发布

发布时间：2026-10-13 03:30:37

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [CreateWebhookTrigger](https://cloud.tencent.com/document/api/1141/43531)

	* 新增入参：Product, PreheatRegion

* [ModifyWebhookTrigger](https://cloud.tencent.com/document/api/1141/43527)

	* 新增入参：Product, PreheatRegion


修改数据结构：

* [WebhookTrigger](https://cloud.tencent.com/document/api/1141/41603#WebhookTrigger)

	* 新增成员：Product, PreheatRegion




## TI-ONE 训练平台(tione) 版本：2021-11-11

### 第 139 次发布

发布时间：2026-10-14 03:10:17

本次发布包含了以下内容：

改善已有的文档。

修改接口：

* [CreateExport](https://cloud.tencent.com/document/api/851/124492)

	* 新增入参：TiProjectId

* [DeleteExport](https://cloud.tencent.com/document/api/851/124491)

	* 新增入参：TiProjectId




## TI-ONE 训练平台(tione) 版本：2019-10-22



## 容器服务(tke) 版本：2022-05-01



## 容器服务(tke) 版本：2018-05-25

### 第 239 次发布

发布时间：2026-10-14 03:11:43

本次发布包含了以下内容：

改善已有的文档。

<font color="#dd0000">**预下线接口**：</font>

* DescribeClusterSecurity



## 私有网络(vpc) 版本：2017-03-12

### 第 313 次发布

发布时间：2026-10-14 03:25:22

本次发布包含了以下内容：

改善已有的文档。

修改数据结构：

* [CcnPolicyBasedRoutingRule](https://cloud.tencent.com/document/api/215/15824#CcnPolicyBasedRoutingRule)

	* 新增成员：InstanceRegion




## Web 应用防火墙(waf) 版本：2018-01-25

### 第 167 次发布

发布时间：2026-10-13 04:09:15

本次发布包含了以下内容：

改善已有的文档。

新增接口：

* [DeleteLLMContentRule](https://cloud.tencent.com/document/api/627/139392)
* [DeleteLLMKeywordLibrary](https://cloud.tencent.com/document/api/627/139391)
* [DescribeLLMContentRuleList](https://cloud.tencent.com/document/api/627/139390)
* [DescribeLLMKeywordLibrary](https://cloud.tencent.com/document/api/627/139389)
* [DescribeLLMSdkAccess](https://cloud.tencent.com/document/api/627/139388)
* [DescribeLLMWafDLPRules](https://cloud.tencent.com/document/api/627/139387)
* [DescribeLLMWafProtectRules](https://cloud.tencent.com/document/api/627/139386)
* [ExportLLMKeywordLib](https://cloud.tencent.com/document/api/627/139385)
* [ModifyLLMContentRule](https://cloud.tencent.com/document/api/627/139384)
* [ModifyLLMContentRuleStatus](https://cloud.tencent.com/document/api/627/139383)
* [ModifyLLMKeywordLibrary](https://cloud.tencent.com/document/api/627/139382)
* [ModifyLLMStatus](https://cloud.tencent.com/document/api/627/139381)
* [ModifyLLMWafDLPRule](https://cloud.tencent.com/document/api/627/139380)
* [ModifyLLMWafProtectRule](https://cloud.tencent.com/document/api/627/139379)

新增数据结构：

* [CategoryGroup](https://cloud.tencent.com/document/api/627/53609#CategoryGroup)
* [LLMKeywordLibrary](https://cloud.tencent.com/document/api/627/53609#LLMKeywordLibrary)
* [LLMOptionsItem](https://cloud.tencent.com/document/api/627/53609#LLMOptionsItem)
* [LLMSdkAccessItem](https://cloud.tencent.com/document/api/627/53609#LLMSdkAccessItem)
* [RuleDetail](https://cloud.tencent.com/document/api/627/53609#RuleDetail)
* [RuleItem](https://cloud.tencent.com/document/api/627/53609#RuleItem)
* [ValueLevel](https://cloud.tencent.com/document/api/627/53609#ValueLevel)



