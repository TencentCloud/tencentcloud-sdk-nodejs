/**
 * 眼睛信息
 */
export interface Eye {
    /**
     * 识别是否佩戴眼镜。
  - AttributeItem对应的Type为 —— 0：无眼镜，1：普通眼镜，2：墨镜
     */
    Glass?: AttributeItem;
    /**
     * 识别眼睛的睁开、闭合状态。
  - AttributeItem对应的Type为 —— 0：睁开，1：闭眼
     */
    EyeOpen?: AttributeItem;
    /**
     * 识别是否双眼皮。
  - AttributeItem对应的Type为 —— 0：无，1：有。
     */
    EyelidType?: AttributeItem;
    /**
     * 眼睛大小。
  - AttributeItem对应的Type为 —— 0：小眼睛，1：普通眼睛，2：大眼睛。
     */
    EyeSize?: AttributeItem;
}
/**
 * 识别出的最相似候选人
 */
export interface Candidate {
    /**
     * 人员ID。
     */
    PersonId?: string;
    /**
     * 人脸ID。
  - 仅在SearchFaces/SearchFacesReturnsByGroup接口返回时有效。
  - 人员搜索类接口采用融合特征方式检索，该字段无意义。
     */
    FaceId?: string;
    /**
     * 候选者的匹配得分。
  - 1万大小人脸底库下，误识率百分之一对应分数为70分，误识率千分之一对应分数为80分，误识率万分之一对应分数为90分。
  - 10万大小人脸底库下，误识率百分之一对应分数为80分，误识率千分之一对应分数为90分，误识率万分之一对应分数为100分。
  - 30万大小人脸底库下，误识率百分之一对应分数为85分，误识率千分之一对应分数为95分。
  - 一般80分左右可适用大部分场景，建议分数不要超过90分。您可以根据实际情况选择合适的分数。
     */
    Score?: number;
    /**
     * 人员名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PersonName?: string;
    /**
     * 人员性别。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Gender?: number;
    /**
     * 包含此人员的人员库及描述字段内容列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PersonGroupInfos?: Array<PersonGroupInfo>;
}
/**
 * DetectFaceAttributes返回参数结构体
 */
export interface DetectFaceAttributesResponse {
    /**
     * 请求的图片宽度。
     */
    ImageWidth?: number;
    /**
     * 请求的图片高度。
     */
    ImageHeight?: number;
    /**
     * 人脸信息列表。
     */
    FaceDetailInfos?: Array<FaceDetailInfo>;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchPersonsReturnsByGroup返回参数结构体
 */
export interface SearchPersonsReturnsByGroupResponse {
    /**
     * 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。
     */
    PersonNum?: number;
    /**
     * 识别结果。
     */
    ResultsReturnsByGroup?: Array<ResultsReturnsByGroup>;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 包含此人员的人员库及描述字段内容列表
 */
export interface PersonGroupInfo {
    /**
     * 包含此人员的人员库ID。
     */
    GroupId?: string;
    /**
     * 人员描述字段内容。
     */
    PersonExDescriptions?: Array<string>;
}
/**
 * 帽子信息
 */
export interface Hat {
    /**
     * 帽子佩戴状态信息。
  AttributeItem对应的Type为 —— 0：不戴帽子，1：普通帽子，2：头盔，3：保安帽。
     */
    Style?: AttributeItem;
    /**
     * 帽子颜色。
  AttributeItem对应的Type为 —— 0：不戴帽子，1：红色系，2：黄色系，3：蓝色系，4：黑色系，5：灰白色系，6：混色系。
     */
    Color?: AttributeItem;
}
/**
 * CreatePerson请求参数结构体
 */
export interface CreatePersonRequest {
    /**
     * 待加入的人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
    /**
     * 人员名称。[1，60]个字符，可修改，可重复。
     */
    PersonName: string;
    /**
     * 人员ID。
  - 单个腾讯云账号下不可修改，不可重复。
  - 支持英文、数字、-%@#&_，长度限制64B。
     */
    PersonId: string;
    /**
     * 性别。
  - 取值范围：0代表未填写，1代表男性，2代表女性。
     */
    Gender?: number;
    /**
     * 人员描述字段内容，key-value。[0，60]个字符，可修改，可重复。
     */
    PersonExDescriptionInfos?: Array<PersonExDescriptionInfo>;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 此参数用于控制判断 Image 或 Url 中图片包含的人脸，是否在人员库中已有疑似的同一人。
  - 如果判断为已有相同人在人员库中，则不会创建新的人员，返回疑似同一人的人员信息。
  - 如果判断没有，则完成创建人员。
  - 取值范围：
  0: 不进行判断，无论是否有疑似同一人在库中均完成入库；
  1:较低的同一人判断要求（百一误识别率）；
  2: 一般的同一人判断要求（千一误识别率）；
  3: 较高的同一人判断要求（万一误识别率）；
  4: 很高的同一人判断要求（十万一误识别率）。
  - 默认 0。
  - 注： 要求越高，则疑似同一人的概率越小。不同要求对应的误识别率仅为参考值，您可以根据实际情况调整。
     */
    UniquePersonControl?: number;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制；
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况；
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况；
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况；
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题；
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * CreateFace返回参数结构体
 */
export interface CreateFaceResponse {
    /**
     * 加入成功的人脸数量。
     */
    SucFaceNum?: number;
    /**
     * 加入成功的人脸ID列表。
     */
    SucFaceIds?: Array<string>;
    /**
     * 每张人脸图片添加结果。
  - 其他非 0 值代表算法服务异常，取值范围：
  -1101 代表未检测到人脸。
  -1102 代表图片解码失败。
  -1109 代表图片尺寸过大或者过小。
  -1601代表不符合图片质量控制要求。
  -1604 代表人脸相似度没有超过FaceMatchThreshold。
  - RetCode的顺序和入参中 Images 或 Urls 的顺序一致。
     */
    RetCode?: Array<number | bigint>;
    /**
     * 加入成功的人脸索引。
  - 索引顺序和入参中 Images 或 Urls 的顺序一致。
  - 例如， Urls 中 有 3 个 url，第二个 url 失败，则 SucIndexes 值为 [0,2] 。
     */
    SucIndexes?: Array<number | bigint>;
    /**
     * 加入成功的人脸框位置。顺序和入参中 Images 或 Urls 的顺序一致。
     */
    SucFaceRects?: Array<FaceRect>;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 人脸属性中的发型信息。
 */
export interface FaceHairAttributesInfo {
    /**
     * 取值范围：0：光头，1：短发，2：中发，3：长发，4：绑发。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Length?: number;
    /**
     * 取值范围：0：有刘海，1：无刘海。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bang?: number;
    /**
     * 取值范围：0：黑色，1：金色，2：棕色，3：灰白色。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Color?: number;
}
/**
 * CreateFace请求参数结构体
 */
export interface CreateFaceRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 人员人脸总数量不可超过5张。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Images?: Array<string>;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  - 人员人脸总数量不可超过5张。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
     */
    Urls?: Array<string>;
    /**
     * 只有和该人员已有的人脸相似度超过FaceMatchThreshold值的人脸，才能增加人脸成功。
  - 默认值60分。
  - 取值范围：[0,100] 。
     */
    FaceMatchThreshold?: number;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制；
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况；
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况；
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况；
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题；
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * CreateGroup请求参数结构体
 */
export interface CreateGroupRequest {
    /**
     * 人员库名称，[1,60]个字符，可修改，不可重复。
     */
    GroupName: string;
    /**
     * 人员库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。
     */
    GroupId: string;
    /**
     * 人员库自定义描述字段，用于描述人员库中人员属性，该人员库下所有人员将拥有此描述字段。
  - 最多可以创建5个。
  - 每个自定义描述字段支持[1,30]个字符。
  - 在同一人员库中自定义描述字段不可重复。
  - 例： 设置某人员库“自定义描述字段”为["学号","工号","手机号"]， 则该人员库下所有人员将拥有名为“学号”、“工号”、“手机号”的描述字段， 可在对应人员描述字段中填写内容，登记该人员的学号、工号、手机号等信息。
     */
    GroupExDescriptions?: Array<string>;
    /**
     * 人员库信息备注，[0，40]个字符。
     */
    Tag?: string;
    /**
     * 人脸识别服务所用的算法模型版本。
  - 目前入参支持 “2.0”和“3.0“ 两个输入。
  - 2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。
  - 2020年11月26日后开通服务的账号仅支持输入“3.0”。
  - 不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
     */
    FaceModelVersion?: string;
}
/**
 * GetPersonGroupInfo请求参数结构体
 */
export interface GetPersonGroupInfoRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 起始序号，默认值为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认值为10，最大值为100。
     */
    Limit?: number;
}
/**
 * 人脸信息列表。
 */
export interface FaceInfo {
    /**
     * 人脸框左上角横坐标。
  - 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。
  - 若需截取完整人脸，可以在完整分completeness满足需求的情况下，将负值坐标取0。
     */
    X?: number;
    /**
     * 人脸框左上角纵坐标。
  - 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。
  - 若需截取完整人脸，可以在完整分completeness满足需求的情况下，将负值坐标取0。
     */
    Y?: number;
    /**
     * 人脸框宽度。
     */
    Width?: number;
    /**
     * 人脸框高度。
     */
    Height?: number;
    /**
     * 人脸属性信息。
  - 包含性别( gender )、年龄( age )、表情( expression )、魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。
  - 只有当 NeedFaceAttributes 设为 1 时才返回有效信息。
     */
    FaceAttributesInfo?: FaceAttributesInfo;
    /**
     * 人脸质量信息。
  - 包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。
  - 只有当NeedFaceDetection设为1时才返回有效信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceQualityInfo?: FaceQualityInfo;
}
/**
 * 眉毛信息
 */
export interface Eyebrow {
    /**
     * 眉毛浓密。
  - AttributeItem对应的Type为 —— 0：淡眉，1：浓眉。
     */
    EyebrowDensity?: AttributeItem;
    /**
     * 眉毛弯曲。
  - AttributeItem对应的Type为 —— 0：不弯，1：弯眉。
     */
    EyebrowCurve?: AttributeItem;
    /**
     * 眉毛长短。
  - AttributeItem对应的Type为 —— 0：短眉毛，1：长眉毛。
     */
    EyebrowLength?: AttributeItem;
}
/**
 * AnalyzeDenseLandmarks请求参数结构体
 */
export interface AnalyzeDenseLandmarksRequest {
    /**
     * 检测模式。
  - 取值范围：0 为检测所有出现的人脸， 1 为检测面积最大的人脸。
  - 默认为 0。
  - 最多返回 5 张人脸的五官定位（人脸关键点）具体信息。
     */
    Mode?: number;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。
     */
    FaceModelVersion?: string;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * GetGroupList请求参数结构体
 */
export interface GetGroupListRequest {
    /**
     * 起始序号，默认值为0
     */
    Offset?: number;
    /**
     * 返回数量，默认值为10，最大值为1000
     */
    Limit?: number;
}
/**
 * GetUpgradeGroupFaceModelVersionJobList请求参数结构体
 */
export interface GetUpgradeGroupFaceModelVersionJobListRequest {
    /**
     * 起始序号，默认值为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认值为10，最大值为1000。
     */
    Limit?: number;
}
/**
 * GetUpgradeGroupFaceModelVersionResult返回参数结构体
 */
export interface GetUpgradeGroupFaceModelVersionResultResponse {
    /**
     * 人员升级任务预估结束时间。 StartTimestamp的值是自 Unix 纪元时间到人员查重任务预估结束的毫秒数。
  Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。
  如果为0表示这个任务已经执行完毕。
     */
    EndTimestamp: number;
    /**
     * 升级任务完成进度。取值[0.0，100.0]。
     */
    Progress: number;
    /**
     * 0表示升级中，1表示升级完毕，2表示回滚完毕，3表示升级失败。
     */
    Status: number;
    /**
     * 升级起始时间。
  StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。
  Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。
  有关更多信息，请参阅 Unix 时间。
     */
    StartTime: number;
    /**
     * 当前算法模型版本。
     */
    FromFaceModelVersion: string;
    /**
     * 目标算法模型版本。
     */
    ToFaceModelVersion: string;
    /**
     * 人员库ID。
     */
    GroupId: string;
    /**
     * 无法升级的人脸Id信息，文件格式为json。内容参见下方示例。url有效期为半小时。
     */
    FailedFacesUrl: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectLiveFaceAccurate返回参数结构体
 */
export interface DetectLiveFaceAccurateResponse {
    /**
     * 活体打分。
  - 取值范围 [0,100]。
  - 根据活体分数对应的阈值区间来判断是否为翻拍。
  - 目前阈值可分为[5,10,40,70,90]，其中推荐阈值为40。
     */
    Score?: number;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AnalyzeFace请求参数结构体
 */
export interface AnalyzeFaceRequest {
    /**
     * 检测模式。
  - 取值范围：
  0 为检测所有出现的人脸。
  1 为检测面积最大的人脸。
  - 默认为 0。
  - 最多返回 10 张人脸的五官定位（人脸关键点）具体信息。
     */
    Mode?: number;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 人脸识别服务所用的算法模型版本。
  - 目前入参支持 “2.0”和“3.0“ 两个输入。
  - 2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。
  - 2020年11月26日后开通服务的账号仅支持输入“3.0”。
  - 不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
     */
    FaceModelVersion?: string;
    /**
     * 是否开启图片旋转识别支持。
  - 0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * CreatePerson返回参数结构体
 */
export interface CreatePersonResponse {
    /**
     * 人脸图片唯一标识。
     */
    FaceId?: string;
    /**
     * 检测出的人脸框的位置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceRect?: FaceRect;
    /**
     * 疑似同一人的PersonId。
  - 当 UniquePersonControl 参数不为0且人员库中有疑似的同一人，此参数才有意义。
     */
    SimilarPersonId?: string;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchFaces返回参数结构体
 */
export interface SearchFacesResponse {
    /**
     * 识别结果。
     */
    Results?: Array<Result>;
    /**
     * 搜索的人员库中包含的人脸数。
     */
    FaceNum?: number;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CopyPerson返回参数结构体
 */
export interface CopyPersonResponse {
    /**
     * 成功加入的人员库数量。
     */
    SucGroupNum?: number;
    /**
     * 成功加入的人员库列表。
     */
    SucGroupIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分组识别结果Item
 */
export interface GroupCandidate {
    /**
     * 人员库ID 。
     */
    GroupId?: string;
    /**
     * 识别出的最相似候选人。
     */
    Candidates?: Array<Candidate>;
}
/**
 * DeleteFace返回参数结构体
 */
export interface DeleteFaceResponse {
    /**
     * 删除成功的人脸数量.
     */
    SucDeletedNum?: number;
    /**
     * 删除成功的人脸ID列表。
     */
    SucFaceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePerson请求参数结构体
 */
export interface DeletePersonRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
}
/**
 * DetectLiveFace返回参数结构体
 */
export interface DetectLiveFaceResponse {
    /**
     * 活体打分，取值范围 [0,100]，分数一般落于[80, 100]区间内，0分也为常见值。推荐相大于 87 时可判断为活体。可根据具体场景自行调整阈值。
  本字段当且仅当FaceModelVersion为2.0时才具备参考意义。
     */
    Score: number;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion: string;
    /**
     * 活体检测是否通过。
  本字段只有FaceModelVersion为3.0时才具备参考意义。
     */
    IsLiveness: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteFace请求参数结构体
 */
export interface DeleteFaceRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 待删除的人脸ID列表，数组元素取值为增加人脸接口返回的FaceId。
     */
    FaceIds: Array<string>;
}
/**
 * ModifyGroup请求参数结构体
 */
export interface ModifyGroupRequest {
    /**
     * 人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
    /**
     * 人员库名称。
     */
    GroupName?: string;
    /**
     * 需要修改的人员库自定义描述字段，key-value。
     */
    GroupExDescriptionInfos?: Array<GroupExDescriptionInfo>;
    /**
     * 人员库信息备注。
     */
    Tag?: string;
}
/**
 * DeleteGroup请求参数结构体
 */
export interface DeleteGroupRequest {
    /**
     * 人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
}
/**
 * UpgradeGroupFaceModelVersion请求参数结构体
 */
export interface UpgradeGroupFaceModelVersionRequest {
    /**
     * 需要升级的人员库ID。
     */
    GroupId: string;
    /**
     * 需要升级至的算法模型版本。默认为最新版本。不可逆向升级
     */
    FaceModelVersion: string;
}
/**
 * DetectLiveFace请求参数结构体
 */
export interface DetectLiveFaceRequest {
    /**
     * 图片 base64 数据，base64 编码后大小不可超过5M。
  jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。（图片的宽高比请接近3:4，不符合宽高比的图片返回的分值不具备参考意义）。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
  jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  Url、Image必须提供一个，如果都提供，只使用 Url。
  （图片的宽高比请接近 3:4，不符合宽高比的图片返回的分值不具备参考意义）
  图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 人脸识别服务所用的算法模型版本。
  
  目前入参支持 “2.0”和“3.0“ 两个输入。
  
  2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。
  
  2020年11月26日后开通服务的账号仅支持输入“3.0”。
  
  不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
     */
    FaceModelVersion?: string;
}
/**
 * GetPersonBaseInfo返回参数结构体
 */
export interface GetPersonBaseInfoResponse {
    /**
     * 人员名称。
     */
    PersonName?: string;
    /**
     * 人员性别。
  - 取值范围：0代表未填写，1代表男性，2代表女性。
     */
    Gender?: number;
    /**
     * 包含的人脸 ID 列表。
     */
    FaceIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchPersons返回参数结构体
 */
export interface SearchPersonsResponse {
    /**
     * 识别结果。
     */
    Results?: Array<Result>;
    /**
     * 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。
     */
    PersonNum?: number;
    /**
     * 人脸识别所用的算法模型版本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUpgradeGroupFaceModelVersionResult请求参数结构体
 */
export interface GetUpgradeGroupFaceModelVersionResultRequest {
    /**
     * 升级任务ID，用于查询、获取人员库升级的进度和结果。
     */
    JobId: string;
}
/**
 * 返回的人员库信息
 */
export interface GroupInfo {
    /**
     * 人员库名称。
     */
    GroupName?: string;
    /**
     * 人员库ID。
     */
    GroupId?: string;
    /**
     * 人员库自定义描述字段。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupExDescriptions?: Array<string>;
    /**
     * 人员库信息备注。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: string;
    /**
     * 人脸识别所用的算法模型版本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceModelVersion?: string;
    /**
     * Group的创建时间和日期 CreationTimestamp。
  - CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。
  - Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。
  - 有关更多信息，请参阅 Unix 时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTimestamp?: number;
}
/**
 * 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。
 */
export interface FaceQualityInfo {
    /**
     * 质量分。
  - 取值范围：[0,100]，综合评价图像质量是否适合人脸识别，分数越高质量越好。
  - 正常情况，只需要使用Score作为质量分总体的判断标准即可。Sharpness、Brightness、Completeness等细项分仅供参考。
  - 参考范围：[0,40]较差，[40,60] 一般，[60,80]较好，[80,100]很好。
  - 建议：人脸入库选取70以上的图片。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 清晰分。
  - 取值范围：[0,100]，评价图片清晰程度，分数越高越清晰。
  - 参考范围：[0,40]特别模糊，[40,60]模糊，[60,80]一般，[80,100]清晰。
  - 建议：人脸入库选取80以上的图片。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Sharpness?: number;
    /**
     * 光照分。
  - 取值范围：[0,100]，评价图片光照程度，分数越高越亮。
  - 参考范围： [0,30]偏暗，[30,70]光照正常，[70,100]偏亮。
  - 建议：人脸入库选取[30,70]的图片。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Brightness?: number;
    /**
     * 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Completeness?: FaceQualityCompleteness;
}
/**
 * SearchFacesReturnsByGroup返回参数结构体
 */
export interface SearchFacesReturnsByGroupResponse {
    /**
     * 搜索的人员库中包含的人脸数。
     */
    FaceNum?: number;
    /**
     * 识别结果。
     */
    ResultsReturnsByGroup?: Array<ResultsReturnsByGroup>;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CopyPerson请求参数结构体
 */
export interface CopyPersonRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 待加入的人员库列表，数组元素取值为创建人员库接口中的GroupId。
     */
    GroupIds: Array<string>;
}
/**
 * SearchPersonsReturnsByGroup请求参数结构体
 */
export interface SearchPersonsReturnsByGroupRequest {
    /**
     * 希望搜索的人员库列表，上限60个。数组元素取值为创建人员库接口中的GroupId。
     */
    GroupIds: Array<string>;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 最多识别的人脸数目。
  - 默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
  - MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
  - 例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
     */
    MaxFaceNum?: number;
    /**
     * 人脸长和宽的最小尺寸，单位为像素。
  - 默认为34。
  - 低于34将影响搜索精度。
  - 建议设置为80。
     */
    MinFaceSize?: number;
    /**
     * 被检测到的人脸，对应最多返回的最相似人员数目。
  - 默认值为5，最大值为10。
  - 例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。
     */
    MaxPersonNumPerGroup?: number;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制。
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况。
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况。
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况。
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题。
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。
     */
    FaceMatchThreshold?: number;
    /**
     * 是否返回人员具体信息。
  - 取值范围：0 为关闭，1 为开启。
  - 默认为 0。
  - 其他非0非1值默认为0。
     */
    NeedPersonInfo?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * DeletePersonFromGroup返回参数结构体
 */
export interface DeletePersonFromGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 稠密关键点详细信息
 */
export interface DenseFaceShape {
    /**
     * 人脸框左上角横坐标。
     */
    X?: number;
    /**
     * 人脸框左上角纵坐标。
     */
    Y?: number;
    /**
     * 人脸框宽度。
     */
    Width?: number;
    /**
     * 人脸框高度。
     */
    Height?: number;
    /**
     * 描述左侧眼睛轮廓的 XX 点。
     */
    LeftEye?: Array<Point>;
    /**
     * 描述右侧眼睛轮廓的 XX 点。
     */
    RightEye?: Array<Point>;
    /**
     * 描述左侧眉毛轮廓的 XX 点。
     */
    LeftEyeBrow?: Array<Point>;
    /**
     * 描述右侧眉毛轮廓的 XX 点。
     */
    RightEyeBrow?: Array<Point>;
    /**
     * 描述外嘴巴轮廓的 XX 点， 从左侧开始逆时针返回。
     */
    MouthOutside?: Array<Point>;
    /**
     * 描述内嘴巴轮廓的 XX 点，从左侧开始逆时针返回。
     */
    MouthInside?: Array<Point>;
    /**
     * 描述鼻子轮廓的 XX 点。
     */
    Nose?: Array<Point>;
    /**
     * 左瞳孔轮廓的 XX 个点。
     */
    LeftPupil?: Array<Point>;
    /**
     * 右瞳孔轮廓的 XX 个点。
     */
    RightPupil?: Array<Point>;
    /**
     * 中轴线轮廓的 XX 个点。
     */
    CentralAxis?: Array<Point>;
    /**
     * 下巴轮廓的 XX 个点。
     */
    Chin?: Array<Point>;
    /**
     * 左眼袋的 XX 个点。
     */
    LeftEyeBags?: Array<Point>;
    /**
     * 右眼袋的 XX 个点。
     */
    RightEyeBags?: Array<Point>;
    /**
     * 额头的 XX 个点。
     */
    Forehead?: Array<Point>;
}
/**
 * 识别结果。
 */
export interface ResultsReturnsByGroup {
    /**
     * 检测出的人脸框位置。
     */
    FaceRect?: FaceRect;
    /**
     * 识别结果。
     */
    GroupCandidates?: Array<GroupCandidate>;
    /**
     * 检测出的人脸图片状态返回码。
  - 0 表示正常。
  - -1601代表不符合图片质量控制要求，此时Candidate内容为空。
     */
    RetCode?: number;
}
/**
 * 坐标
 */
export interface Point {
    /**
     * x坐标。
     */
    X?: number;
    /**
     * Y坐标。
     */
    Y?: number;
}
/**
 * GetPersonListNum返回参数结构体
 */
export interface GetPersonListNumResponse {
    /**
     * 人员数量。
     */
    PersonNum?: number;
    /**
     * 人脸数量。
     */
    FaceNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePersonFromGroup请求参数结构体
 */
export interface DeletePersonFromGroupRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
}
/**
 * VerifyFace请求参数结构体
 */
export interface VerifyFaceRequest {
    /**
     * 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。
     */
    PersonId: string;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制。
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况。
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况。
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况。
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题。
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * GetPersonList返回参数结构体
 */
export interface GetPersonListResponse {
    /**
     * 返回的人员信息。
     */
    PersonInfos?: Array<PersonInfo>;
    /**
     * 该人员库的人员数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PersonNum?: number;
    /**
     * 该人员库的人脸数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceNum?: number;
    /**
     * 人脸识别所用的算法模型版本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 头发信息
 */
export interface Hair {
    /**
     * 头发长度信息。
  AttributeItem对应的Type为 —— 0：光头，1：短发，2：中发，3：长发，4：绑发。
     */
    Length: AttributeItem;
    /**
     * 刘海信息。
  AttributeItem对应的Type为 —— 0：无刘海，1：有刘海。
     */
    Bang: AttributeItem;
    /**
     * 头发颜色信息。
  AttributeItem对应的Type为 —— 0：黑色，1：金色，2：棕色，3：灰白色。
     */
    Color: AttributeItem;
}
/**
 * 人脸的识别结果
 */
export interface Result {
    /**
     * 识别出的最相似候选人。
     */
    Candidates?: Array<Candidate>;
    /**
     * 检测出的人脸框位置。
     */
    FaceRect?: FaceRect;
    /**
     * 检测出的人脸图片状态返回码。
  - 0 表示正常。
  - -1601代表不符合图片质量控制要求，此时Candidate内容为空。
     */
    RetCode?: number;
}
/**
 * GetPersonGroupInfo返回参数结构体
 */
export interface GetPersonGroupInfoResponse {
    /**
     * 包含此人员的人员库及描述字段内容列表。
     */
    PersonGroupInfos?: Array<PersonGroupInfo>;
    /**
     * 人员库总数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupNum?: number;
    /**
     * 人脸识别服务所用的算法模型版本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpgradeGroupFaceModelVersion返回参数结构体
 */
export interface UpgradeGroupFaceModelVersionResponse {
    /**
     * 升级任务ID，用于查询、获取升级的进度和结果。
     */
    JobId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchFacesReturnsByGroup请求参数结构体
 */
export interface SearchFacesReturnsByGroupRequest {
    /**
     * 希望搜索的人员库列表，上限60个。
  - 数组元素取值为创建人员库接口中的GroupId。
  - 不可同时搜索不同算法模型版本（FaceModelVersion）的人员库。
     */
    GroupIds: Array<string>;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 最多识别的人脸数目。
  - 默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
  - MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
  - 例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
     */
    MaxFaceNum?: number;
    /**
     * 人脸长和宽的最小尺寸，单位为像素。
  - 默认为34。
  - 低于34将影响搜索精度。
  - 建议设置为80。
     */
    MinFaceSize?: number;
    /**
     * 被检测到的人脸，对应最多返回的最相似人员数目。
  - 默认值为5，最大值为10。
  - 例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。
     */
    MaxPersonNumPerGroup?: number;
    /**
     * 是否返回人员具体信息。
  - 取值范围：0 为关闭，1 为开启。
  - 默认为 0。
  - 其他非0非1值默认为0
     */
    NeedPersonInfo?: number;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制。
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况。
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况。
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况。
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题。
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。
  - 默认为0。
  - 取值范围：[0.0,100.0) 。
     */
    FaceMatchThreshold?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * AnalyzeDenseLandmarks返回参数结构体
 */
export interface AnalyzeDenseLandmarksResponse {
    /**
     * 请求的图片宽度。
     */
    ImageWidth?: number;
    /**
     * 请求的图片高度。
     */
    ImageHeight?: number;
    /**
     * 稠密人脸关键点具体信息。
     */
    DenseFaceShapeSet?: Array<DenseFaceShape>;
    /**
     * 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectFaceSimilarity返回参数结构体
 */
export interface DetectFaceSimilarityResponse {
    /**
     * 取值范围 [0.00, 100.00]。
  推荐相似度大于等于70时可判断为同一人，可根据具体场景自行调整阈值（阈值70的误通过率为千分之一，阈值80的误通过率是万分之一）。
     */
    Score?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPersonBaseInfo返回参数结构体
 */
export interface ModifyPersonBaseInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPersonGroupInfo请求参数结构体
 */
export interface ModifyPersonGroupInfoRequest {
    /**
     * 人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 需要修改的人员描述字段内容，key-value。
     */
    PersonExDescriptionInfos: Array<PersonExDescriptionInfo>;
}
/**
 * RevertGroupFaceModelVersion请求参数结构体
 */
export interface RevertGroupFaceModelVersionRequest {
    /**
     * 需要回滚的升级任务ID。
     */
    JobId: string;
}
/**
 * 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。
 */
export interface FaceQualityCompleteness {
    /**
     * 眉毛的遮挡分数。
  - 取值范围：[0,100]，分数越高遮挡越少。
  - 参考范围：[0,80]表示发生遮挡。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Eyebrow?: number;
    /**
     * 眼睛的遮挡分数。
  - 取值范围：[0,100],分数越高遮挡越少。
  - 参考范围：[0,80]表示发生遮挡。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Eye?: number;
    /**
     * 鼻子的遮挡分数。
  - 取值范围：[0,100],分数越高遮挡越少。
  - 参考范围：[0,60]表示发生遮挡。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nose?: number;
    /**
     * 脸颊的遮挡分数。
  - 取值范围：[0,100],分数越高遮挡越少。
  - 参考范围：[0,70]表示发生遮挡。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cheek?: number;
    /**
     * 嘴巴的遮挡分数。
  - 取值范围：[0,100],分数越高遮挡越少。
  - 参考范围：[0,50]表示发生遮挡。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mouth?: number;
    /**
     * 下巴的遮挡分数。
  - 取值范围：[0,100],分数越高遮挡越少。
  - 参考范围：[0,70]表示发生遮挡。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Chin?: number;
}
/**
 * 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、
魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息，最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。
 */
export interface FaceAttributesInfo {
    /**
     * 性别。
  - 取值说明：[0~49]为女性，[50，100]为男性，越接近0和100表示置信度越高。
  - NeedFaceAttributes 不为 1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Gender?: number;
    /**
     * 年龄 。
  - 取值范围：[0~100]。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Age?: number;
    /**
     * 微笑。
  - 取值说明：[0(normal，正常)~100(laugh，大笑)]。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Expression?: number;
    /**
     * 是否有眼镜。
  - 取值范围： [true,false]。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Glass?: boolean;
    /**
     * 上下偏移。
  - 取值范围：[-30,30]，单位角度。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  - 建议：人脸入库选择[-10,10]的图片。
     */
    Pitch?: number;
    /**
     * 左右偏移。
  - 取值范围：[-30,30]，单位角度。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  - 建议：人脸入库选择[-10,10]的图片。
     */
    Yaw?: number;
    /**
     * 平面旋转。
  - 取值范围：[-180,180]，单位角度。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  - 建议：人脸入库选择[-20,20]的图片。
     */
    Roll?: number;
    /**
     * 魅力。
  - 取值范围：[0~100]。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Beauty?: number;
    /**
     * 是否有帽子。
  - 取值范围： [true,false]。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Hat?: boolean;
    /**
     * 是否有口罩。
  - 取值范围： [true,false]。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mask?: boolean;
    /**
     * 头发信息，包含头发长度（length）、有无刘海（bang）、头发颜色（color）。
  - NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Hair?: FaceHairAttributesInfo;
    /**
     * 双眼是否睁开。
  - 取值范围： [true,false]。
  - 只要有超过一只眼睛闭眼，就返回false。
  -  NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EyeOpen?: boolean;
}
/**
 * VerifyPerson请求参数结构体
 */
export interface VerifyPersonRequest {
    /**
     * 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。
     */
    PersonId: string;
    /**
     * 图片 base64 数据。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  -  图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制。
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况。
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况。
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况。
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题。
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * CompareMaskFace返回参数结构体
 */
export interface CompareMaskFaceResponse {
    /**
     * 两张图片中人脸的相似度分数。
  - 不同算法版本返回的相似度分数不同。
  - 若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。  一般超过50分则可认定为同一人。
  - 2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。
  - 若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。
     */
    Score?: number;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPersonBaseInfo请求参数结构体
 */
export interface ModifyPersonBaseInfoRequest {
    /**
     * 人员ID，取值为创建人员接口中的PersonId。
     */
    PersonId: string;
    /**
     * 需要修改的人员名称。
     */
    PersonName?: string;
    /**
     * 需要修改的人员性别，1代表男性，2代表女性。
     */
    Gender?: number;
}
/**
 * DetectFaceSimilarity请求参数结构体
 */
export interface DetectFaceSimilarityRequest {
    /**
     * A 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中置信度最高的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    ImageA?: string;
    /**
     * B 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中置信度最高的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    ImageB?: string;
    /**
     * A 图片的 Url。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    UrlA?: string;
    /**
     * B 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    UrlB?: string;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制；
  1: 较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况；
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况；
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况；
  4: 很高的质量要求，各个维度均为最好或最多，在某一维度上存在轻微问题；
  默认 0。
  
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
}
/**
 * DetectLiveFaceAccurate请求参数结构体
 */
export interface DetectLiveFaceAccurateRequest {
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 图片的宽高比请接近 3:4，手机拍摄比例最佳。
  - 人脸尺寸大于100X100像素。
  - 图片格式支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片的宽高比请接近 3:4，手机拍摄比例最佳。
  - 人脸尺寸大于100X100像素。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 图片格式支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 人脸识别服务所用的算法模型版本。目前入参支持“3.0“。
     */
    FaceModelVersion?: string;
}
/**
 * VerifyFace返回参数结构体
 */
export interface VerifyFaceResponse {
    /**
     * 给定的人脸图片与 PersonId 对应人脸的相似度。
  - 若 PersonId 下有多张人脸（Face），返回相似度最大的分数。
  - 不同算法版本返回的相似度分数不同。
  - 若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。
  - 2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。
     */
    Score?: number;
    /**
     * 是否为同一人判断，固定阈值分数为60分，若想更灵活地调整阈值可取Score参数返回进行判断。
     */
    IsMatch?: boolean;
    /**
     * 人脸识别所用的算法模型版本，是该 Person 所在的人员库的算法模型版本。
  - 在创建人员库时设置，详情可参考[算法模型版本](https://cloud.tencent.com/document/product/867/40042)
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 人脸信息列表。
 */
export interface FaceDetailInfo {
    /**
     * 检测出的人脸框位置。
     */
    FaceRect?: FaceRect;
    /**
     * 人脸属性信息。
  - 根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty）、情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender）、头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouth）、胡子（Moustache） 、鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。
  - 若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。
     */
    FaceDetailAttributesInfo?: FaceDetailAttributesInfo;
}
/**
 * SearchFaces请求参数结构体
 */
export interface SearchFacesRequest {
    /**
     * 希望搜索的人员库列表，上限100个。
  - 数组元素取值为创建人员库接口中的GroupId。
  - 不可同时搜索不同算法模型版本（FaceModelVersion）的人员库。
     */
    GroupIds: Array<string>;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 最多识别的人脸数目。
  - 默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
  - MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
  - 例如：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
     */
    MaxFaceNum?: number;
    /**
     * 人脸长和宽的最小尺寸，单位为像素。
  - 默认为34。
  - 低于34的人脸图片无法被识别。
  - 建议设置为80。
     */
    MinFaceSize?: number;
    /**
     * 单张被识别的人脸返回的最相似人员数量。
  - 默认值为5，最大值为100。
  - 例如，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。
  - 值越大，需要处理的时间越长。
  - 建议不要超过10。
     */
    MaxPersonNum?: number;
    /**
     * 是否返回人员具体信息。
  - 取值范围：0 为关闭，1 为开启。
  - 默认为 0。
  - 其他非0非1值默认为0。
     */
    NeedPersonInfo?: number;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制。
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况。
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况。
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况。
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题。
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。
     */
    FaceMatchThreshold?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * SearchPersons请求参数结构体
 */
export interface SearchPersonsRequest {
    /**
     * 希望搜索的人员库列表，上限100个。数组元素取值为创建人员库接口中的GroupId。
     */
    GroupIds: Array<string>;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 最多识别的人脸数目。
  - 默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。
  - MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。
  - 例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。
     */
    MaxFaceNum?: number;
    /**
     * 人脸长和宽的最小尺寸，单位为像素。
  - 默认为34。
  - 低于34将影响搜索精度。
  - 建议设置为80。
     */
    MinFaceSize?: number;
    /**
     * 单张被识别的人脸返回的最相似人员数量。
  - 默认值为5，最大值为100。
  - 例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。
  - 值越大，需要处理的时间越长。建议不要超过10。
     */
    MaxPersonNum?: number;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制。
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况。
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况。
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况。
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题。
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。
  - 默认为0。
  - 取值范围：[0.0,100.0) 。
     */
    FaceMatchThreshold?: number;
    /**
     * 是否返回人员具体信息。
  - 取值范围：0 为关闭，1 为开启。
  - 默认为 0。
  - 其他非0非1值默认为0
     */
    NeedPersonInfo?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * 返回的人员信息
 */
export interface PersonInfo {
    /**
     * 人员名称。
     */
    PersonName?: string;
    /**
     * 人员Id。
     */
    PersonId?: string;
    /**
     * 人员性别。
     */
    Gender?: number;
    /**
     * 人员描述字段内容。
     */
    PersonExDescriptions?: Array<string>;
    /**
     * 包含的人脸照片列表。
     */
    FaceIds?: Array<string>;
    /**
     * 人员的创建时间和日期 CreationTimestamp。
  - CreationTimestamp 的值是自 Unix 纪元时间到Person创建时间的毫秒数。
  - Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。
  - 有关更多信息，请参阅 Unix 时间。
     */
    CreationTimestamp?: number;
}
/**
 * 需要修改的人员库自定义描述字段key-value
 */
export interface GroupExDescriptionInfo {
    /**
     * 人员库自定义描述字段Index，从0开始。
     */
    GroupExDescriptionIndex: number;
    /**
     * 需要更新的人员库自定义描述字段内容。
     */
    GroupExDescription: string;
}
/**
 * CompareMaskFace请求参数结构体
 */
export interface CompareMaskFaceRequest {
    /**
     * A 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    ImageA?: string;
    /**
     * B 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    ImageB?: string;
    /**
     * A 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    UrlA?: string;
    /**
     * B 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    UrlB?: string;
    /**
     * 人脸识别服务所用的算法模型版本。该接口只支持"3.0"
     */
    FaceModelVersion?: string;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制；
  1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况；
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况；
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况；
  4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题；
  - 默认 0。
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
}
/**
 * AnalyzeFace返回参数结构体
 */
export interface AnalyzeFaceResponse {
    /**
     * 请求的图片宽度。
     */
    ImageWidth?: number;
    /**
     * 请求的图片高度。
     */
    ImageHeight?: number;
    /**
     * 五官定位（人脸关键点）具体信息。
     */
    FaceShapeSet?: Array<FaceShape>;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectFace请求参数结构体
 */
export interface DetectFaceRequest {
    /**
     * 最多处理的人脸数目。
  - 默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。
  - 此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。
     */
    MaxFaceNum?: number;
    /**
     * 人脸长和宽的最小尺寸，单位为像素，低于MinFaceSize值的人脸不会被检测。
  - 只支持设置34和20，建议使用34。
     */
    MinFaceSize?: number;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 是否需要返回人脸属性信息（FaceAttributesInfo）。
  - 0 为不需要返回，1 为需要返回。
  - 默认为 0。
  - 非 1 值均视为不需要返回，此时 FaceAttributesInfo 不具备参考意义。
  - 最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。
  - 提取人脸属性信息较为耗时，如不需要人脸属性信息，建议关闭此项功能，加快人脸检测速度。
     */
    NeedFaceAttributes?: number;
    /**
     * 是否开启质量检测。
  - 0 为关闭，1 为开启。
  - 默认为 0。
  - 非 1 值均视为不进行质量检测。
  - 最多返回面积最大的 30 张人脸质量分信息，超过 30 张人脸（第 31 张及以后的人脸）的 FaceQualityInfo不具备参考意义。
  - 建议：人脸入库操作建议开启此功能。
     */
    NeedQualityDetection?: number;
    /**
     * 人脸识别服务所用的算法模型版本。
  - 目前入参支持 “2.0”和“3.0“ 两个输入。
  - 2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。
  - 2020年11月26日后开通服务的账号仅支持输入“3.0”。
  - 不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
     */
    FaceModelVersion?: string;
    /**
     * 是否开启图片旋转识别支持。
  - 0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * GetPersonBaseInfo请求参数结构体
 */
export interface GetPersonBaseInfoRequest {
    /**
     * 人员ID，创建人员接口中的PersonId。
     */
    PersonId: string;
}
/**
 * DeletePerson返回参数结构体
 */
export interface DeletePersonResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 需要修改的人员描述字段内容，key-value
 */
export interface PersonExDescriptionInfo {
    /**
     * 人员描述字段Index，从0开始。
     */
    PersonExDescriptionIndex: number;
    /**
     * 需要更新的人员描述字段内容。
     */
    PersonExDescription: string;
}
/**
 * GetUpgradeGroupFaceModelVersionJobList返回参数结构体
 */
export interface GetUpgradeGroupFaceModelVersionJobListResponse {
    /**
     * 人员库升级任务信息列表。
     */
    JobInfos?: Array<UpgradeJobInfo>;
    /**
     * 升级任务总数量。
     */
    JobNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 姿态信息
 */
export interface HeadPose {
    /**
     * 上下偏移[-30,30]。
     */
    Pitch?: number;
    /**
     * 左右偏移[-30,30]。
     */
    Yaw?: number;
    /**
     * 平面旋转[-180,180]。
     */
    Roll?: number;
}
/**
 * GetGroupList返回参数结构体
 */
export interface GetGroupListResponse {
    /**
     * 返回的人员库信息
     */
    GroupInfos: Array<GroupInfo>;
    /**
     * 人员库总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupNum: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectFaceAttributes请求参数结构体
 */
export interface DetectFaceAttributesRequest {
    /**
     * 最多处理的人脸数目。
  - 默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。
  - 此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。
     */
    MaxFaceNum?: number;
    /**
     * 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。
  - 所有格式的图片短边像素不小于64。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    Url?: string;
    /**
     * 是否返回年龄、性别、情绪等属性。
  - 合法值为（大小写不敏感）：None、Age、Beauty、Emotion、Eye、Eyebrow、Gender、Hair、Hat、Headpose、Mask、Mouth、Moustache、Nose、Shape、Skin、Smile。
  - None为不需要返回。
  - 默认为 None。即FaceAttributesType属性为空时，各属性返回值为0。
  - 需要将属性组成一个用逗号分隔的字符串，属性之间的顺序没有要求。
  - 关于各属性的详细描述，参见下文出参。
  - 最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 AttributesInfo 不具备参考意义。
     */
    FaceAttributesType?: string;
    /**
     * 是否开启图片旋转识别支持。
  - 0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
    /**
     * 人脸识别服务所用的算法模型版本。本接口仅支持“3.0”输入
     */
    FaceModelVersion?: string;
}
/**
 * GetGroupInfo返回参数结构体
 */
export interface GetGroupInfoResponse {
    /**
     * 人员库名称。
     */
    GroupName?: string;
    /**
     * 人员库ID。
     */
    GroupId?: string;
    /**
     * 人员库自定义描述字段。
     */
    GroupExDescriptions?: Array<string>;
    /**
     * 人员库信息备注。
     */
    Tag?: string;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * Group的创建时间和日期。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。
     */
    CreationTimestamp?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CompareFace返回参数结构体
 */
export interface CompareFaceResponse {
    /**
     * 两张图片中人脸的相似度分数。
  - 不同算法版本返回的相似度分数不同。
  - 若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。  一般超过50分则可认定为同一人。
  - 2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。
  - 若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。
     */
    Score?: number;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 嘴巴信息。
 */
export interface Mouth {
    /**
     * 是否张嘴信息。
  AttributeItem对应的Type为 —— 0：不张嘴，1：张嘴。
     */
    MouthOpen: AttributeItem;
}
/**
 * RevertGroupFaceModelVersion返回参数结构体
 */
export interface RevertGroupFaceModelVersionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteGroup返回参数结构体
 */
export interface DeleteGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 五官定位（人脸关键点）具体信息。
 */
export interface FaceShape {
    /**
     * 描述脸型轮廓的 21 点。
     */
    FaceProfile: Array<Point>;
    /**
     * 描述左侧眼睛轮廓的 8 点。
     */
    LeftEye: Array<Point>;
    /**
     * 描述右侧眼睛轮廓的 8 点。
     */
    RightEye: Array<Point>;
    /**
     * 描述左侧眉毛轮廓的 8 点。
     */
    LeftEyeBrow: Array<Point>;
    /**
     * 描述右侧眉毛轮廓的 8 点。
     */
    RightEyeBrow: Array<Point>;
    /**
     * 描述嘴巴轮廓的 22 点。
     */
    Mouth: Array<Point>;
    /**
     * 描述鼻子轮廓的 13 点。
     */
    Nose: Array<Point>;
    /**
     * 左瞳孔轮廓的 1 个点。
     */
    LeftPupil: Array<Point>;
    /**
     * 右瞳孔轮廓的 1 个点。
     */
    RightPupil: Array<Point>;
}
/**
 * CompareFace请求参数结构体
 */
export interface CompareFaceRequest {
    /**
     * A 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中置信度最高的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    ImageA?: string;
    /**
     * B 图片 base64 数据。
  - base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - 若图片中包含多张人脸，只选取其中置信度最高的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    ImageB?: string;
    /**
     * A 图片的 Url。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    UrlA?: string;
    /**
     * B 图片的 Url 。
  - 对应图片 base64 编码后大小不可超过5M。
  - jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。所有格式的图片短边像素不小于64。
  - B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  - 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  - 非腾讯云存储的Url速度和稳定性可能受一定影响。
  - 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
  - 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
     */
    UrlB?: string;
    /**
     * 人脸识别服务所用的算法模型版本。
  - 目前入参支持 “2.0”和“3.0“ 两个输入。
  - 2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。
  - 2020年11月26日后开通服务的账号仅支持输入“3.0”。
  - 不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。
     */
    FaceModelVersion?: string;
    /**
     * 图片质量控制。
  - 取值范围：
  0: 不进行控制；
  1: 较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况；
  2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况；
  3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况；
  4: 很高的质量要求，各个维度均为最好或最多，在某一维度上存在轻微问题；
  默认 0。
  
  - 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。
     */
    QualityControl?: number;
    /**
     * 是否开启图片旋转识别支持。
  - 取值范围：0为不开启，1为开启。
  - 默认为0。
  - 本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。
  - 若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。
     */
    NeedRotateDetection?: number;
}
/**
 * VerifyPerson返回参数结构体
 */
export interface VerifyPersonResponse {
    /**
     * 给定的人脸照片与 PersonId 对应的相似度。若 PersonId 下有多张人脸（Face），会融合多张人脸信息进行验证。
     */
    Score?: number;
    /**
     * 是否为同一人的判断。
     */
    IsMatch?: boolean;
    /**
     * 人脸识别所用的算法模型版本，是该 Person 所在的人员库的算法模型版本。
  - 在创建人员库时设置，详情可参考[算法模型版本](https://cloud.tencent.com/document/product/867/40042)
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectFace返回参数结构体
 */
export interface DetectFaceResponse {
    /**
     * 请求的图片宽度。
     */
    ImageWidth?: number;
    /**
     * 请求的图片高度。
     */
    ImageHeight?: number;
    /**
     * 人脸信息列表。
  - 包含人脸坐标信息、属性信息（若需要）、质量分信息（若需要）。
     */
    FaceInfos?: Array<FaceInfo>;
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPersonListNum请求参数结构体
 */
export interface GetPersonListNumRequest {
    /**
     * 人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
}
/**
 * GetGroupInfo请求参数结构体
 */
export interface GetGroupInfoRequest {
    /**
     * 人员库 ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
}
/**
 * 人员库升级任务信息
 */
export interface UpgradeJobInfo {
    /**
     * 人员库升级任务ID，用于查询、获取升级的进度和结果。
     */
    JobId: string;
    /**
     * 人员库ID。
     */
    GroupId: string;
    /**
     * 当前算法模型版本。
     */
    FromFaceModelVersion: string;
    /**
     * 目标算法模型版本。
     */
    ToFaceModelVersion: string;
    /**
     * 升级起始时间。
  StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。
  Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。
  有关更多信息，请参阅 Unix 时间。
     */
    StartTime: number;
    /**
     * 0表示升级中，1表示升级完毕，2表示回滚完毕，3表示升级失败。
     */
    Status: number;
}
/**
 * ModifyGroup返回参数结构体
 */
export interface ModifyGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPersonList请求参数结构体
 */
export interface GetPersonListRequest {
    /**
     * 人员库ID，取值为创建人员库接口中的GroupId。
     */
    GroupId: string;
    /**
     * 起始序号，默认值为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认值为10，最大值为1000。
     */
    Limit?: number;
}
/**
 * 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty）
情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender）
头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouth）、胡子（Moustache）
鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。
若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。
 */
export interface FaceDetailAttributesInfo {
    /**
     * 年龄。
  - 取值范围： [0,65]，其中65代表“65岁及以上”。
  - FaceAttributesType 不含Age 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Age?: number;
    /**
     * 美丑打分。
  - 取值范围：[0,100]。
  - FaceAttributesType 不含 Beauty 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Beauty?: number;
    /**
     * 情绪，可识别自然、高兴、惊讶、生气、悲伤、厌恶、害怕。
  - AttributeItem对应的Type为 —— 0：自然，1：高兴，2：惊讶，3：生气，4：悲伤，5：厌恶，6：害怕。
  - FaceAttributesType 不含Emotion 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Emotion?: AttributeItem;
    /**
     * 眼睛相关信息，可识别是否戴眼镜、是否闭眼、是否双眼皮和眼睛大小。
  - FaceAttributesType 不含Eye 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Eye?: Eye;
    /**
     * 眉毛相关信息，可识别眉毛浓密、弯曲、长短信息。
  FaceAttributesType 不含Eyebrow 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Eyebrow?: Eyebrow;
    /**
     * 性别信息。
  - AttributeItem对应的Type为 —— 	0：男性，1：女性。
  - FaceAttributesType 不含Gender 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Gender?: AttributeItem;
    /**
     * 头发信息，包含头发长度、有无刘海、头发颜色。
  - FaceAttributesType 不含Hair 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Hair?: Hair;
    /**
     * 帽子信息，可识别是否佩戴帽子、帽子款式、帽子颜色。
  - FaceAttributesType 不含Hat 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Hat?: Hat;
    /**
     * 姿态信息，包含人脸的上下偏移、左右偏移、平面旋转信息。
  - FaceAttributesType 不含Headpose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    HeadPose?: HeadPose;
    /**
     * 口罩佩戴信息。
  - AttributeItem对应的Type为 —— 0: 无口罩， 1: 有口罩不遮脸，2: 有口罩遮下巴，3: 有口罩遮嘴，4: 正确佩戴口罩。
  - FaceAttributesType 不含Mask 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Mask?: AttributeItem;
    /**
     * 嘴巴信息，可识别是否张嘴、嘴唇厚度。
  - FaceAttributesType 不含 Mouth 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Mouth?: Mouth;
    /**
     * 胡子信息。
  - AttributeItem对应的Type为 —— 0：无胡子，1：有胡子。
  - FaceAttributesType 不含 Moustache 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Moustache?: AttributeItem;
    /**
     * 鼻子信息。
  - AttributeItem对应的Type为 —— 0：朝天鼻，1：鹰钩鼻，2：普通，3：圆鼻头
  - FaceAttributesType 不含 Nose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Nose?: AttributeItem;
    /**
     * 脸型信息。
  - AttributeItem对应的Type为 —— 0：方脸，1：三角脸，2：鹅蛋脸，3：心形脸，4：圆脸。
  - FaceAttributesType 不含 Shape 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Shape?: AttributeItem;
    /**
     * 肤色信息。
  - AttributeItem对应的Type为 —— 0：黄色皮肤，1：棕色皮肤，2：黑色皮肤，3：白色皮肤。
  - FaceAttributesType 不含 Skin 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Skin?: AttributeItem;
    /**
     * 微笑程度
  - 取值范围：[0,100]。
  - FaceAttributesType 不含 Smile 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。
     */
    Smile?: number;
}
/**
 * 人脸属性信息
 */
export interface AttributeItem {
    /**
     * 属性值。
     */
    Type?: number;
    /**
     * Type识别概率值。
  - 取值范围：[0,1]，代表判断正确的概率。
     */
    Probability?: number;
}
/**
 * 检测出的人脸框的位置
 */
export interface FaceRect {
    /**
     * 人脸框左上角横坐标。
  - 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。
  - 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。
     */
    X?: number;
    /**
     * 人脸框左上角纵坐标。
  - 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。
  - 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。
     */
    Y?: number;
    /**
     * 人脸宽度。
     */
    Width?: number;
    /**
     * 人脸高度。
     */
    Height?: number;
}
/**
 * ModifyPersonGroupInfo返回参数结构体
 */
export interface ModifyPersonGroupInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateGroup返回参数结构体
 */
export interface CreateGroupResponse {
    /**
     * 人脸识别所用的算法模型版本。
     */
    FaceModelVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
