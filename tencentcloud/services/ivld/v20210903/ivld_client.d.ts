import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { AddCustomPersonImageRequest, DescribeVideoSummaryDetailRequest, DescribeTaskDetailResponse, DeleteCustomCategoryRequest, DescribeCustomCategoriesRequest, DescribeTasksResponse, DescribeVideoSummaryDetailResponse, CreateCustomPersonResponse, DescribeUsageAmountRequest, ImportMediaResponse, QueryCallbackRequest, DescribeMediaRequest, DescribeTasksRequest, DescribeCustomPersonsResponse, CreateCustomGroupRequest, AddCustomPersonImageResponse, CreateDefaultCategoriesRequest, UpdateCustomPersonResponse, UpdateCustomCategoryRequest, CreateTaskRequest, DescribeCustomCategoriesResponse, DescribeCustomGroupResponse, DeleteCustomPersonImageRequest, DeleteMediaResponse, ModifyCallbackRequest, DeleteCustomPersonResponse, DeleteTaskRequest, ImportMediaRequest, DescribeMediasRequest, CreateDefaultCategoriesResponse, DescribeCustomPersonsRequest, DescribeMediaResponse, DescribeUsageAmountResponse, DeleteCustomPersonImageResponse, CreateCustomCategoryResponse, CreateVideoSummaryTaskRequest, QueryCallbackResponse, CreateCustomGroupResponse, UpdateCustomCategoryResponse, DescribeMediasResponse, DeleteCustomPersonRequest, DescribeCustomPersonDetailResponse, DeleteMediaRequest, CreateCustomCategoryRequest, DescribeTaskResponse, CreateTaskResponse, DescribeCustomPersonDetailRequest, DescribeTaskDetailRequest, DeleteTaskResponse, DescribeTaskRequest, UpdateCustomPersonRequest, ModifyCallbackResponse, CreateVideoSummaryTaskResponse, CreateCustomPersonRequest, DeleteCustomCategoryResponse, DescribeCustomGroupRequest } from "./ivld_models";
/**
 * ivld client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建智能标签任务。

请注意，本接口为异步接口，**返回TaskId只代表任务创建成功，不代表任务执行成功**。
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 将URL指向的媒资视频文件导入系统之中。

**请注意，本接口为异步接口**。接口返回MediaId仅代表导入视频任务发起，不代表任务完成，您可调用读接口(DescribeMedia/DescribeMedias)接口查询MediaId

URL字段推荐您使用COS地址，其形式为`https://${Bucket}-${AppId}.cos.${Region}.myqcloud.com/${ObjectKey}`，其中`${Bucket}`为您的COS桶名称，Region为COS桶所在[可用区](https://cloud.tencent.com/document/product/213/6091)，`${ObjectKey}`为指向存储在COS桶内的待分析的视频的[ObjectKey](https://cloud.tencent.com/document/product/436/13324)

另外，目前产品也支持使用外部URL地址，但是当传入URL为非COS地址时，需要您指定额外的WriteBackCosPath以供产品回写结果数据。

分析完成后，本产品将在您的`${Bucket}`桶内创建名为`${ObjectKey}_${task-create-time}`的目录(`task-create-time`形式为1970-01-01T08:08:08)并将分析结果将回传回该目录，也即，结构化分析结果(包括图片，JSON等数据)将会写回`https://${Bucket}-${AppId}.cos.${Region}.myqcloud.com/${ObjectKey}_${task-create-time}`目录
     */
    ImportMedia(req: ImportMediaRequest, cb?: (error: string, rep: ImportMediaResponse) => void): Promise<ImportMediaResponse>;
    /**
     * 创建自定义人物。

输入人物名称，基本信息，分类信息与人脸图片，创建自定义人物

人脸图片可使用图片数据(base64编码的图片数据)或者图片URL(推荐使用COS以减少下载时间，其他地址也支持)，原始图片优先，也即如果同时指定了图片数据和图片URL，接口将仅使用图片数据
     */
    CreateCustomPerson(req: CreateCustomPersonRequest, cb?: (error: string, rep: CreateCustomPersonResponse) => void): Promise<CreateCustomPersonResponse>;
    /**
     * 删除自定义人脸数据
     */
    DeleteCustomPersonImage(req: DeleteCustomPersonImageRequest, cb?: (error: string, rep: DeleteCustomPersonImageResponse) => void): Promise<DeleteCustomPersonImageResponse>;
    /**
     * 查询用户回调设置
     */
    QueryCallback(req?: QueryCallbackRequest, cb?: (error: string, rep: QueryCallbackResponse) => void): Promise<QueryCallbackResponse>;
    /**
     * 更新自定义人物分类

当L2Category为空时，代表更新CategoryId对应的一级自定义人物类型以及所有二级自定义人物类型所从属的一级自定义人物类型；
当L2Category非空时，仅更新CategoryId对应的二级自定义人物类型
     */
    UpdateCustomCategory(req: UpdateCustomCategoryRequest, cb?: (error: string, rep: UpdateCustomCategoryResponse) => void): Promise<UpdateCustomCategoryResponse>;
    /**
     * 更新自定义人物信息，包括姓名，简要信息，分类信息等
     */
    UpdateCustomPerson(req: UpdateCustomPersonRequest, cb?: (error: string, rep: UpdateCustomPersonResponse) => void): Promise<UpdateCustomPersonResponse>;
    /**
     * 描述任务信息，如果任务成功完成，还将返回任务结果
     */
    DescribeVideoSummaryDetail(req: DescribeVideoSummaryDetailRequest, cb?: (error: string, rep: DescribeVideoSummaryDetailResponse) => void): Promise<DescribeVideoSummaryDetailResponse>;
    /**
     * 删除自定义分类信息
     */
    DeleteCustomCategory(req: DeleteCustomCategoryRequest, cb?: (error: string, rep: DeleteCustomCategoryResponse) => void): Promise<DeleteCustomCategoryResponse>;
    /**
     * 增加自定义人脸图片，每个自定义人物最多可包含10张人脸图片

请注意，与创建自定义人物一样，图片数据优先级优于图片URL优先级
     */
    AddCustomPersonImage(req: AddCustomPersonImageRequest, cb?: (error: string, rep: AddCustomPersonImageResponse) => void): Promise<AddCustomPersonImageResponse>;
    /**
     * 描述任务信息，如果任务成功完成，还将返回任务结果
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 创建默认自定义人物类型
     */
    CreateDefaultCategories(req?: CreateDefaultCategoriesRequest, cb?: (error: string, rep: CreateDefaultCategoriesResponse) => void): Promise<CreateDefaultCategoriesResponse>;
    /**
     * 描述智能标签任务进度。

请注意，**此接口仅返回任务执行状态信息，不返回任务执行结果**
     */
    DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse>;
    /**
     * 创建一个视频缩编任务。

### 回调事件消息通知协议

#### 网络协议
- 回调接口协议目前仅支持http/https协议；
- 请求：HTTP POST 请求，包体内容为 JSON，每一种消息的具体包体内容参见后文。
- 应答：HTTP STATUS CODE = 200，服务端忽略应答包具体内容，为了协议友好，建议客户应答内容携带 JSON： `{"code":0}`

#### 通知可靠性

事件通知服务具备重试能力，事件通知失败后会总计重试3次；
为了避免重试对您的服务器以及网络带宽造成冲击，请保持正常回包。触发重试条件如下：
- 长时间（5 秒）未回包应答。
- 应答 HTTP STATUS 不为200。


#### 回调接口协议

##### 分析任务完成消息回调
| 参数名称 | 必选 | 类型 | 描述 |
|---------|---------|---------|---------|
| TaskId | 是 | String | 任务ID |
| TaskStatus | 是 | Integer | 任务执行状态 |
| FailedReason | 是 | String | 若任务失败，该字段为失败原因 |
     */
    CreateVideoSummaryTask(req: CreateVideoSummaryTaskRequest, cb?: (error: string, rep: CreateVideoSummaryTaskResponse) => void): Promise<CreateVideoSummaryTaskResponse>;
    /**
     * 描述自定义人物详细信息，包括人物信息与人物信息
     */
    DescribeCustomPersonDetail(req: DescribeCustomPersonDetailRequest, cb?: (error: string, rep: DescribeCustomPersonDetailResponse) => void): Promise<DescribeCustomPersonDetailResponse>;
    /**
     * 创建自定义人物分类信息

当L2Category为空时，将创建一级自定义分类。
当L1Category与L2Category均不为空时，将创建二级自定义分类。请注意，**只有当一级自定义分类存在时，才可创建二级自定义分类**。
     */
    CreateCustomCategory(req: CreateCustomCategoryRequest, cb?: (error: string, rep: CreateCustomCategoryResponse) => void): Promise<CreateCustomCategoryResponse>;
    /**
     * 批量描述自定义人物
     */
    DescribeCustomPersons(req: DescribeCustomPersonsRequest, cb?: (error: string, rep: DescribeCustomPersonsResponse) => void): Promise<DescribeCustomPersonsResponse>;
    /**
     * 删除自定义人物
     */
    DeleteCustomPerson(req: DeleteCustomPersonRequest, cb?: (error: string, rep: DeleteCustomPersonResponse) => void): Promise<DeleteCustomPersonResponse>;
    /**
     * 描述媒资文件信息，包括媒资状态，分辨率，帧率等。

如果媒资文件未完成导入，本接口将仅输出媒资文件的状态信息；导入完成后，本接口还将输出媒资文件的其他元信息。
     */
    DescribeMedia(req: DescribeMediaRequest, cb?: (error: string, rep: DescribeMediaResponse) => void): Promise<DescribeMediaResponse>;
    /**
     * 获取用户资源使用量
     */
    DescribeUsageAmount(req?: DescribeUsageAmountRequest, cb?: (error: string, rep: DescribeUsageAmountResponse) => void): Promise<DescribeUsageAmountResponse>;
    /**
     * 将MediaId对应的媒资文件从系统中删除。

**请注意，本接口仅删除媒资文件，媒资文件对应的视频分析结果不会被删除**。如您需要删除结构化分析结果，请调用DeleteTask接口。
     */
    DeleteMedia(req: DeleteMediaRequest, cb?: (error: string, rep: DeleteMediaResponse) => void): Promise<DeleteMediaResponse>;
    /**
     * 用户设置对应事件的回调地址

### 回调事件消息通知协议

#### 网络协议
- 回调接口协议目前仅支持http/https协议；
- 请求：HTTP POST 请求，包体内容为 JSON，每一种消息的具体包体内容参见后文。
- 应答：HTTP STATUS CODE = 200，服务端忽略应答包具体内容，为了协议友好，建议客户应答内容携带 JSON： `{"code":0}`

#### 通知可靠性

事件通知服务具备重试能力，事件通知失败后会总计重试3次；
为了避免重试对您的服务器以及网络带宽造成冲击，请保持正常回包。触发重试条件如下：
- 长时间（5 秒）未回包应答。
- 应答 HTTP STATUS 不为200。


#### 回调接口协议

##### 分析任务完成消息回调
| 参数名称 | 必选 | 类型 | 描述 |
|---------|---------|---------|---------|
| EventType | 是 | int | 回调时间类型，1-任务分析完成，2-媒资导入完成 |
| TaskId | 是 | String | 任务ID |
| TaskStatus | 是 | [TaskStatus](/document/product/1509/65063#TaskInfo) | 任务执行状态 |
| FailedReason | 是 | String | 若任务失败，该字段为失败原因 |


##### 导入媒资完成消息回调
| 参数名称 | 必选 | 类型 | 描述 |
|---------|---------|---------|---------|
| EventType | 是 | int | 回调时间类型，1-任务分析完成，2-媒资导入完成 |
| MediaId | 是 | String | 媒资ID |
| MediaStatus | 是 | [MediaStatus](/document/product/1509/65063#MediaInfo) | 媒资导入状态|
| FailedReason | 是 | String | 若任务失败，该字段为失败原因 |
     */
    ModifyCallback(req: ModifyCallbackRequest, cb?: (error: string, rep: ModifyCallbackResponse) => void): Promise<ModifyCallbackResponse>;
    /**
     * 依照输入条件，描述命中的任务信息，包括任务创建时间，处理时间信息等。

请注意，本接口最多支持同时描述**50**个任务信息
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 创建自定义人物库

Bucket的格式参考为 `bucketName-123456.cos.ap-shanghai.myqcloud.com`

在调用CreateCustomPerson和AddCustomPersonImage接口之前，请先确保本接口成功调用。当前每个用户只支持一个自定义人物库，一旦自定义人物库创建成功，后续接口调用均会返回人物库已存在错误。

由于人脸图片对于自定义人物识别至关重要，因此自定义人物识别功能需要用户显式指定COS存储桶方可使用。具体来说，自定义人物识别功能接口(主要是CreateCustomPerson和AddCustomPersonImage)会在此COS桶下面新建IVLDCustomPersonImage目录，并在此目录下存储自定义人物图片数据以支持后续潜在的特征更新。

请注意：本接口指定的COS桶仅用于**备份存储自定义人物图片**，CreateCustomPerson和AddCustomPersonImage接口入参URL可使用任意COS存储桶下的任意图片。

**重要**：请务必确保本接口指定的COS存储桶存在(不要手动删除COS桶)。COS存储桶一旦指定，将不能修改。

     */
    CreateCustomGroup(req: CreateCustomGroupRequest, cb?: (error: string, rep: CreateCustomGroupResponse) => void): Promise<CreateCustomGroupResponse>;
    /**
     * 批量描述自定义人物分类信息
     */
    DescribeCustomCategories(req?: DescribeCustomCategoriesRequest, cb?: (error: string, rep: DescribeCustomCategoriesResponse) => void): Promise<DescribeCustomCategoriesResponse>;
    /**
     * 删除任务信息

请注意，本接口**不会**删除媒资文件

只有已完成(成功或者失败)的任务可以删除，**正在执行中的任务不支持删除**
     */
    DeleteTask(req: DeleteTaskRequest, cb?: (error: string, rep: DeleteTaskResponse) => void): Promise<DeleteTaskResponse>;
    /**
     * 描述自定义人物库信息，当前库大小(库中有多少人脸)，以及库中的存储桶
     */
    DescribeCustomGroup(req?: DescribeCustomGroupRequest, cb?: (error: string, rep: DescribeCustomGroupResponse) => void): Promise<DescribeCustomGroupResponse>;
    /**
     * 依照输入条件，描述命中的媒资文件信息，包括媒资状态，分辨率，帧率等。

请注意，本接口最多支持同时描述**50**个媒资文件

如果媒资文件未完成导入，本接口将仅输出媒资文件的状态信息；导入完成后，本接口还将输出媒资文件的其他元信息。
     */
    DescribeMedias(req: DescribeMediasRequest, cb?: (error: string, rep: DescribeMediasResponse) => void): Promise<DescribeMediasResponse>;
}
