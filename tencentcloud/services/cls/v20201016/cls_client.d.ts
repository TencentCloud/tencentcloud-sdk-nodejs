import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UploadLogResponse, CreateAlarmResponse, DeleteAlarmNoticeResponse, DescribeLogHistogramRequest, DescribeLogContextRequest, DeleteShipperRequest, ModifyTopicRequest, DeleteLogsetResponse, DescribeShipperTasksResponse, CreateMachineGroupResponse, DescribeConfigMachineGroupsRequest, ModifyConfigExtraResponse, ModifyLogsetRequest, CreateLogsetRequest, ModifyDataTransformRequest, SearchLogResponse, DeleteTopicRequest, DescribePartitionsRequest, ModifyAlarmResponse, DescribeShipperTasksRequest, DescribeAlarmsRequest, MergePartitionRequest, DescribeShippersResponse, CreateConfigExtraResponse, ModifyShipperResponse, RetryShipperTaskRequest, DescribeConfigExtrasResponse, OpenKafkaConsumerResponse, DescribeIndexRequest, DescribeConfigsResponse, CreateLogsetResponse, DeleteMachineGroupResponse, DescribeExportsRequest, DeleteDataTransformResponse, DeleteConfigExtraResponse, ModifyConsumerRequest, CreateIndexResponse, DeleteConfigFromMachineGroupResponse, CreateConsumerResponse, ModifyMachineGroupResponse, DeleteMachineGroupRequest, DescribePartitionsResponse, DescribeConfigMachineGroupsResponse, ModifyAlarmRequest, DescribeTopicsResponse, ModifyAlarmNoticeRequest, CreateAlarmRequest, DeleteExportResponse, DescribeShippersRequest, RetryShipperTaskResponse, SplitPartitionRequest, DescribeMachineGroupConfigsResponse, DescribeLogHistogramResponse, CloseKafkaConsumerResponse, CreateIndexRequest, DeleteConsumerResponse, DescribeTopicsRequest, GetAlarmLogResponse, CreateTopicRequest, DescribeMachineGroupsRequest, OpenKafkaConsumerRequest, DeleteConfigResponse, ModifyIndexResponse, DeleteConsumerRequest, DeleteIndexRequest, DescribeConsumerResponse, UploadLogRequest, ModifyConsumerResponse, DescribeConfigsRequest, DescribeConsumerRequest, DeleteConfigRequest, CloseKafkaConsumerRequest, CreateExportRequest, DescribeAlarmNoticesResponse, DeleteDataTransformRequest, DeleteConfigExtraRequest, ModifyConfigRequest, DescribeLogsetsResponse, CreateShipperRequest, CreateTopicResponse, DeleteAlarmResponse, DescribeAlarmsResponse, CreateAlarmNoticeResponse, ModifyTopicResponse, CreateConfigRequest, CreateShipperResponse, DeleteIndexResponse, ModifyIndexRequest, DescribeDataTransformInfoRequest, DeleteShipperResponse, DescribeLogContextResponse, DeleteExportRequest, SplitPartitionResponse, CreateDataTransformResponse, ModifyShipperRequest, CreateConfigExtraRequest, CreateConsumerRequest, ModifyConfigResponse, ModifyAlarmNoticeResponse, DescribeMachinesResponse, ApplyConfigToMachineGroupResponse, DeleteAlarmRequest, CreateConfigResponse, DeleteConfigFromMachineGroupRequest, ModifyMachineGroupRequest, DescribeAlarmNoticesRequest, DescribeMachinesRequest, DeleteAlarmNoticeRequest, DeleteLogsetRequest, ModifyLogsetResponse, SearchLogRequest, CreateMachineGroupRequest, DescribeExportsResponse, ApplyConfigToMachineGroupRequest, GetAlarmLogRequest, DescribeConfigExtrasRequest, CreateAlarmNoticeRequest, DescribeIndexResponse, DescribeMachineGroupConfigsRequest, ModifyConfigExtraRequest, CreateDataTransformRequest, DescribeMachineGroupsResponse, DescribeLogsetsRequest, DeleteTopicResponse, ModifyDataTransformResponse, DescribeDataTransformInfoResponse, CreateExportResponse, MergePartitionResponse } from "./cls_models";
/**
 * cls client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建机器组
     */
    CreateMachineGroup(req: CreateMachineGroupRequest, cb?: (error: string, rep: CreateMachineGroupResponse) => void): Promise<CreateMachineGroupResponse>;
    /**
     * 获取机器组信息列表
     */
    DescribeMachineGroups(req: DescribeMachineGroupsRequest, cb?: (error: string, rep: DescribeMachineGroupsResponse) => void): Promise<DescribeMachineGroupsResponse>;
    /**
     * 本接口用于获取告警任务历史
     */
    GetAlarmLog(req: GetAlarmLogRequest, cb?: (error: string, rep: GetAlarmLogResponse) => void): Promise<GetAlarmLogResponse>;
    /**
     * 本接口用于创建投递任务
     */
    CreateConsumer(req: CreateConsumerRequest, cb?: (error: string, rep: CreateConsumerResponse) => void): Promise<CreateConsumerResponse>;
    /**
     * 本接口用于修改日志主题。
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 获取制定机器组下的机器状态
     */
    DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse>;
    /**
     * 本接口用于获取日志集信息列表。
     */
    DescribeLogsets(req: DescribeLogsetsRequest, cb?: (error: string, rep: DescribeLogsetsResponse) => void): Promise<DescribeLogsetsResponse>;
    /**
     * 本接口用于修改日志集信息
     */
    ModifyLogset(req: ModifyLogsetRequest, cb?: (error: string, rep: ModifyLogsetResponse) => void): Promise<ModifyLogsetResponse>;
    /**
     * 本接口用于获取日志下载任务列表
     */
    DescribeExports(req: DescribeExportsRequest, cb?: (error: string, rep: DescribeExportsResponse) => void): Promise<DescribeExportsResponse>;
    /**
     * 本接口用于修改索引配置

     */
    ModifyIndex(req: ModifyIndexRequest, cb?: (error: string, rep: ModifyIndexResponse) => void): Promise<ModifyIndexResponse>;
    /**
     * 本接口用于修改特殊采集配置任务
     */
    ModifyConfigExtra(req: ModifyConfigExtraRequest, cb?: (error: string, rep: ModifyConfigExtraResponse) => void): Promise<ModifyConfigExtraResponse>;
    /**
     * 本接口用于获取索引配置信息
     */
    DescribeIndex(req: DescribeIndexRequest, cb?: (error: string, rep: DescribeIndexResponse) => void): Promise<DescribeIndexResponse>;
    /**
     * 本接口用于获取主题分区列表。
     */
    DescribePartitions(req: DescribePartitionsRequest, cb?: (error: string, rep: DescribePartitionsResponse) => void): Promise<DescribePartitionsResponse>;
    /**
     * 本接口用于创建索引
     */
    CreateIndex(req: CreateIndexRequest, cb?: (error: string, rep: CreateIndexResponse) => void): Promise<CreateIndexResponse>;
    /**
     * 删除采集规则配置
     */
    DeleteConfig(req: DeleteConfigRequest, cb?: (error: string, rep: DeleteConfigResponse) => void): Promise<DeleteConfigResponse>;
    /**
     * 本接口用于获取特殊采集配置
     */
    DescribeConfigExtras(req: DescribeConfigExtrasRequest, cb?: (error: string, rep: DescribeConfigExtrasResponse) => void): Promise<DescribeConfigExtrasResponse>;
    /**
     * 创建新的投递规则，【！！！注意】使用此接口，需要检查是否配置了投递COS的角色和权限。如果没有配置，请参考文档投递权限查看和配置https://cloud.tencent.com/document/product/614/71623。
     */
    CreateShipper(req: CreateShipperRequest, cb?: (error: string, rep: CreateShipperResponse) => void): Promise<CreateShipperResponse>;
    /**
     * 本接口用于修改投递任务
     */
    ModifyConsumer(req: ModifyConsumerRequest, cb?: (error: string, rep: ModifyConsumerResponse) => void): Promise<ModifyConsumerResponse>;
    /**
     * 该接口用于创建通知渠道组。
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * 本接口用于删除投递配置
     */
    DeleteConsumer(req: DeleteConsumerRequest, cb?: (error: string, rep: DeleteConsumerResponse) => void): Promise<DeleteConsumerResponse>;
    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     */
    ModifyAlarm(req: ModifyAlarmRequest, cb?: (error: string, rep: ModifyAlarmResponse) => void): Promise<ModifyAlarmResponse>;
    /**
     * 删除机器组
     */
    DeleteMachineGroup(req: DeleteMachineGroupRequest, cb?: (error: string, rep: DeleteMachineGroupResponse) => void): Promise<DeleteMachineGroupResponse>;
    /**
     *  本接口用于获取日志主题列表，支持分页
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 本接口用于删除日志集。
     */
    DeleteLogset(req: DeleteLogsetRequest, cb?: (error: string, rep: DeleteLogsetResponse) => void): Promise<DeleteLogsetResponse>;
    /**
     * 获取投递规则信息列表
     */
    DescribeShippers(req: DescribeShippersRequest, cb?: (error: string, rep: DescribeShippersResponse) => void): Promise<DescribeShippersResponse>;
    /**
     * 修改机器组
     */
    ModifyMachineGroup(req: ModifyMachineGroupRequest, cb?: (error: string, rep: ModifyMachineGroupResponse) => void): Promise<ModifyMachineGroupResponse>;
    /**
     * 删除应用到机器组的采集配置
     */
    DeleteConfigFromMachineGroup(req: DeleteConfigFromMachineGroupRequest, cb?: (error: string, rep: DeleteConfigFromMachineGroupResponse) => void): Promise<DeleteConfigFromMachineGroupResponse>;
    /**
     * 本接口用于删除数据加工任务
     */
    DeleteDataTransform(req: DeleteDataTransformRequest, cb?: (error: string, rep: DeleteDataTransformResponse) => void): Promise<DeleteDataTransformResponse>;
    /**
     * 本接口用于删除特殊采集规则配置
     */
    DeleteConfigExtra(req: DeleteConfigExtraRequest, cb?: (error: string, rep: DeleteConfigExtraResponse) => void): Promise<DeleteConfigExtraResponse>;
    /**
     * 本接口用于创建数据加工任务。
     */
    CreateDataTransform(req: CreateDataTransformRequest, cb?: (error: string, rep: CreateDataTransformResponse) => void): Promise<CreateDataTransformResponse>;
    /**
     * 本接口用于获取数据加工任务列表基本信息
     */
    DescribeDataTransformInfo(req: DescribeDataTransformInfoRequest, cb?: (error: string, rep: DescribeDataTransformInfoResponse) => void): Promise<DescribeDataTransformInfoResponse>;
    /**
     * 该接口用于获取通知渠道组列表
     */
    DescribeAlarmNotices(req: DescribeAlarmNoticesRequest, cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void): Promise<DescribeAlarmNoticesResponse>;
    /**
     * 本接口用于创建日志主题。
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 应用采集配置到指定机器组
     */
    ApplyConfigToMachineGroup(req: ApplyConfigToMachineGroupRequest, cb?: (error: string, rep: ApplyConfigToMachineGroupResponse) => void): Promise<ApplyConfigToMachineGroupResponse>;
    /**
     * 本接口用于创建日志集，返回新创建的日志集的 ID。
     */
    CreateLogset(req: CreateLogsetRequest, cb?: (error: string, rep: CreateLogsetResponse) => void): Promise<CreateLogsetResponse>;
    /**
     * 该接口用于删除通知渠道组
     */
    DeleteAlarmNotice(req: DeleteAlarmNoticeRequest, cb?: (error: string, rep: DeleteAlarmNoticeResponse) => void): Promise<DeleteAlarmNoticeResponse>;
    /**
     * 本接口用于构建直方图
     */
    DescribeLogHistogram(req: DescribeLogHistogramRequest, cb?: (error: string, rep: DescribeLogHistogramResponse) => void): Promise<DescribeLogHistogramResponse>;
    /**
     * 本接口用于检索分析日志, 该接口除受默认接口请求频率限制外，针对单个日志主题，查询并发数不能超过15。
     */
    SearchLog(req: SearchLogRequest, cb?: (error: string, rep: SearchLogResponse) => void): Promise<SearchLogResponse>;
    /**
     * 该接口用于修改通知渠道组
     */
    ModifyAlarmNotice(req: ModifyAlarmNoticeRequest, cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void): Promise<ModifyAlarmNoticeResponse>;
    /**
     * 打开Kafka协议消费功能
     */
    OpenKafkaConsumer(req: OpenKafkaConsumerRequest, cb?: (error: string, rep: OpenKafkaConsumerResponse) => void): Promise<OpenKafkaConsumerResponse>;
    /**
     * 修改采集规则配置
     */
    ModifyConfig(req: ModifyConfigRequest, cb?: (error: string, rep: ModifyConfigResponse) => void): Promise<ModifyConfigResponse>;
    /**
     * ## 提示
为了保障您日志数据的可靠性以及更高效地使用日志服务，建议您使用CLS优化后的接口[上传结构化日志](https://cloud.tencent.com/document/api/614/16873)上传日志。

同时我们给此接口专门优化定制了多个语言版本的SDK供您选择，SDK提供统一的异步发送、资源控制、自动重试、优雅关闭、感知上报等功能，使上报日志功能更完善，详情请参考[SDK采集](https://cloud.tencent.com/document/product/614/67157)。

同时云API上传日志接口也支持同步上传日志数据，如果您选继续使用此接口请参考下文。

## 功能描述

本接口用于将日志写入到指定的日志主题。

日志服务提供以下两种模式：

#### 负载均衡模式

系统根据当前日志主题下所有可读写的分区，遵循负载均衡原则自动分配写入的目标分区。该模式适合消费不保序的场景。

#### 哈希路由模式

系统根据携带的哈希值（X-CLS-HashKey）将数据写入到符合范围要求的目标分区。例如，可以将某个日志源端通过 hashkey 与某个主题分区强绑定，这样可以保证数据在该分区上写入和消费是严格保序的。

此外日志服务还为用户提供以下两种不同的日志上传模式：
                 

#### 输入参数(pb二进制流，位于body中)

| 字段名       | 类型    | 位置 | 必须 | 含义                                                         |
| ------------ | ------- | ---- | ---- | ------------------------------------------------------------ |
| logGroupList | message | pb   | 是   | logGroup 列表，封装好的日志组列表内容，建议 logGroup 数量不要超过5个 |

LogGroup 说明：

| 字段名      | 是否必选 | 含义                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| logs        | 是       | 日志数组，表示有多个 Log 组成的集合，一个 Log 表示一条日志，一个 LogGroup 中 Log 个数不能超过10000 |
| contextFlow | 否       | LogGroup 的唯一ID，需要使用上下文功能时传入。格式："{上下文ID}-{LogGroupID}"。<br>上下文ID：唯一标识一个上下文（连续滚动的一系列日志文件，或者是需要保序的一系列日志），16进制64位整型字符串。<br>LogGroupID：连续递增的一串整型，16进制64位整型字符串。样例："102700A66102516A-59F59"。                        |
| filename    | 否       | 日志文件名                                                   |
| source      | 否       | 日志来源，一般使用机器 IP 作为标识                           |
| logTags     | 否       | 日志的标签列表                                               |

Log 说明：

| 字段名   | 是否必选 | 含义                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| time     | 是       | 日志时间（Unix 格式时间戳），支持秒、毫秒，建议采用毫秒      |
| contents | 否       | key-value 格式的日志内容，表示一条日志里的多个 key-value 组合 |

Content 说明：

| 字段名 | 是否必选 | 含义                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| key    | 是       | 单条日志里某个字段组的 key 值，不能以`_`开头                 |
| value  | 是       | 单条日志某个字段组的 value 值，单条日志 value 不能超过1MB，LogGroup 中所有 value 总和不能超过5MB |

LogTag 说明：

| 字段名 | 是否必选 | 含义                             |
| ------ | -------- | -------------------------------- |
| key    | 是       | 自定义的标签 key                 |
| value  | 是       | 自定义的标签 key 对应的 value 值 |

## PB 编译示例

本示例将说明如何使用官方 protoc 编译工具将 PB 描述文件 编译生成为 C++ 语言可调用的上传日志接口。

> ?目前 protoc 官方支持 Java、C++、Python 等语言的编译，详情请参见 [protoc](https://github.com/protocolbuffers/protobuf)。

#### 1. 安装 Protocol Buffer

下载 [Protocol Buffer](https://main.qcloudimg.com/raw/d7810aaf8b3073fbbc9d4049c21532aa/protobuf-2.6.1.tar.gz) ，解压并安装。示例版本为 protobuf 2.6.1，环境为 Centos 7.3 系统。 解压`protobuf-2.6.1.tar.gz`压缩包至`/usr/local`目录并进入该目录，执行命令如下：

```
tar -zxvf protobuf-2.6.1.tar.gz -C /usr/local/ && cd /usr/local/protobuf-2.6.1
```

开始编译和安装，配置环境变量，执行命令如下：

```
[root@VM_0_8_centos protobuf-2.6.1]# ./configure
[root@VM_0_8_centos protobuf-2.6.1]# make && make install
[root@VM_0_8_centos protobuf-2.6.1]# export PATH=$PATH:/usr/local/protobuf-2.6.1/bin
```

编译成功后，您可以使用以下命令查看版本：

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --version
liprotoc 2.6.1
```

#### 2. 创建 PB 描述文件

PB 描述文件是通信双方约定的数据交换格式，上传日志时须将规定的协议格式编译成对应语言版本的调用接口，然后添加到工程代码里，详情请参见 [protoc](https://github.com/protocolbuffers/protobuf) 。

以日志服务所规定的 PB 数据格式内容为准， 在本地创建 PB 消息描述文件 cls.proto。

> !PB 描述文件内容不可更改，且文件名须以`.proto`结尾。

cls.proto 内容（PB 描述文件）如下：

```
package cls;

message Log
{
    message Content
    {
        required string key   = 1; // 每组字段的 key
        required string value = 2; // 每组字段的 value
    }
    required int64   time     = 1; // 时间戳，UNIX时间格式
    repeated Content contents = 2; // 一条日志里的多个kv组合
}

message LogTag
{
    required string key       = 1;
    required string value     = 2;
}

message LogGroup
{
    repeated Log    logs        = 1; // 多条日志合成的日志数组
    optional string contextFlow = 2; // 目前暂无效用
    optional string filename    = 3; // 日志文件名
    optional string source      = 4; // 日志来源，一般使用机器IP
    repeated LogTag logTags     = 5;
}

message LogGroupList
{
    repeated LogGroup logGroupList = 1; // 日志组列表
}
```

#### 3. 编译生成

此例中，使用 proto 编译器生成 C++ 语言的文件，在 cls.proto 文件的同一目录下，执行如下编译命令：

```
protoc --cpp_out=./ ./cls.proto
```

> ?`--cpp_out=./`表示编译成 cpp 格式并输出当前目录下，`./cls.proto`表示位于当前目录下的 cls.proto 描述文件。

编译成功后，会输出对应语言的代码文件。此例会生成 cls.pb.h 头文件和 [cls.pb.cc](http://cls.pb.cc) 代码实现文件，如下所示：

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --cpp_out=./ ./cls.proto
[root@VM_0_8_centos protobuf-2.6.1]# ls
cls.pb.cc cls.pb.h cls.proto
```

#### 4. 调用

将生成的 cls.pb.h 头文件引入代码中，调用接口进行数据格式封装。
     */
    UploadLog(req: UploadLogRequest, cb?: (error: string, rep: UploadLogResponse) => void): Promise<UploadLogResponse>;
    /**
     * 获取投递任务列表
     */
    DescribeShipperTasks(req: DescribeShipperTasksRequest, cb?: (error: string, rep: DescribeShipperTasksResponse) => void): Promise<DescribeShipperTasksResponse>;
    /**
     * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    ModifyShipper(req: ModifyShipperRequest, cb?: (error: string, rep: ModifyShipperResponse) => void): Promise<ModifyShipperResponse>;
    /**
     * 创建采集规则配置
     */
    CreateConfig(req: CreateConfigRequest, cb?: (error: string, rep: CreateConfigResponse) => void): Promise<CreateConfigResponse>;
    /**
     * 获取机器组绑定的采集规则配置
     */
    DescribeMachineGroupConfigs(req: DescribeMachineGroupConfigsRequest, cb?: (error: string, rep: DescribeMachineGroupConfigsResponse) => void): Promise<DescribeMachineGroupConfigsResponse>;
    /**
     * 删除投递规则
     */
    DeleteShipper(req: DeleteShipperRequest, cb?: (error: string, rep: DeleteShipperResponse) => void): Promise<DeleteShipperResponse>;
    /**
     * 本接口用于删除日志主题的索引配置，删除索引配置后将无法检索和查询采集到的日志。
     */
    DeleteIndex(req: DeleteIndexRequest, cb?: (error: string, rep: DeleteIndexResponse) => void): Promise<DeleteIndexResponse>;
    /**
     * 本接口用于修改数据加工任务
     */
    ModifyDataTransform(req: ModifyDataTransformRequest, cb?: (error: string, rep: ModifyDataTransformResponse) => void): Promise<ModifyDataTransformResponse>;
    /**
     * 本接口用于删除告警策略。
     */
    DeleteAlarm(req: DeleteAlarmRequest, cb?: (error: string, rep: DeleteAlarmResponse) => void): Promise<DeleteAlarmResponse>;
    /**
     * 本接口用于搜索日志上下文附近的内容
     */
    DescribeLogContext(req: DescribeLogContextRequest, cb?: (error: string, rep: DescribeLogContextResponse) => void): Promise<DescribeLogContextResponse>;
    /**
     * 本接口用于获取投递配置
     */
    DescribeConsumer(req: DescribeConsumerRequest, cb?: (error: string, rep: DescribeConsumerResponse) => void): Promise<DescribeConsumerResponse>;
    /**
     * 本接口用于分裂主题分区
     */
    SplitPartition(req: SplitPartitionRequest, cb?: (error: string, rep: SplitPartitionResponse) => void): Promise<SplitPartitionResponse>;
    /**
     * 获取采集规则配置
     */
    DescribeConfigs(req: DescribeConfigsRequest, cb?: (error: string, rep: DescribeConfigsResponse) => void): Promise<DescribeConfigsResponse>;
    /**
     * 本接口用于合并一个读写态的主题分区，合并时指定一个主题分区 ID，日志服务会自动合并范围右相邻的分区。
     */
    MergePartition(req: MergePartitionRequest, cb?: (error: string, rep: MergePartitionResponse) => void): Promise<MergePartitionResponse>;
    /**
     * 本接口用于创建特殊采集配置任务
     */
    CreateConfigExtra(req: CreateConfigExtraRequest, cb?: (error: string, rep: CreateConfigExtraResponse) => void): Promise<CreateConfigExtraResponse>;
    /**
     * 重试失败的投递任务
     */
    RetryShipperTask(req: RetryShipperTaskRequest, cb?: (error: string, rep: RetryShipperTaskResponse) => void): Promise<RetryShipperTaskResponse>;
    /**
     * 获取采集规则配置所绑定的机器组
     */
    DescribeConfigMachineGroups(req: DescribeConfigMachineGroupsRequest, cb?: (error: string, rep: DescribeConfigMachineGroupsResponse) => void): Promise<DescribeConfigMachineGroupsResponse>;
    /**
     * 本接口用于删除日志下载任务
     */
    DeleteExport(req: DeleteExportRequest, cb?: (error: string, rep: DeleteExportResponse) => void): Promise<DeleteExportResponse>;
    /**
     * 本接口用于创建告警策略。
     */
    CreateAlarm(req: CreateAlarmRequest, cb?: (error: string, rep: CreateAlarmResponse) => void): Promise<CreateAlarmResponse>;
    /**
     * 本接口用于删除日志主题。
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 本接口仅创建下载任务，任务返回的下载地址，请用户调用DescribeExports查看任务列表。其中有下载地址CosPath参数。参考文档https://cloud.tencent.com/document/product/614/56449
     */
    CreateExport(req: CreateExportRequest, cb?: (error: string, rep: CreateExportResponse) => void): Promise<CreateExportResponse>;
    /**
     * 关闭Kafka协议消费
     */
    CloseKafkaConsumer(req: CloseKafkaConsumerRequest, cb?: (error: string, rep: CloseKafkaConsumerResponse) => void): Promise<CloseKafkaConsumerResponse>;
    /**
     * 本接口用于获取告警策略列表。
     */
    DescribeAlarms(req: DescribeAlarmsRequest, cb?: (error: string, rep: DescribeAlarmsResponse) => void): Promise<DescribeAlarmsResponse>;
}
