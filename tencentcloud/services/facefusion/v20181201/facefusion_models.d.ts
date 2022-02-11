/**
 * 素材信息
 */
export interface PublicMaterialInfos {
    /**
      * 素材Id
      */
    MaterialId: string;
    /**
      * 素材状态
      */
    MaterialStatus: number;
    /**
      * 脸型参数P图
      */
    BlendParamPtu: number;
    /**
      * 五官参数P图
      */
    PositionParamPtu: number;
    /**
      * 脸型参数优图
      */
    BlendParamYoutu: number;
    /**
      * 五官参数优图
      */
    PositionParamYoutu: number;
    /**
      * 素材COS地址
      */
    Url: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 修改时间
      */
    UpdateTime: string;
    /**
      * 人脸信息
      */
    MaterialFaceList: Array<MaterialFaceList>;
}
/**
 * 人脸信息
 */
export interface FaceInfo {
    /**
      * 人脸框的横坐标
      */
    X: number;
    /**
      * 人脸框的纵坐标
      */
    Y: number;
    /**
      * 人脸框的宽度
      */
    Width: number;
    /**
      * 人脸框的高度
      */
    Height: number;
}
/**
 * FaceFusion返回参数结构体
 */
export interface FaceFusionResponse {
    /**
      * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
      */
    Image: string;
    /**
      * 不适宜内容识别结果
      */
    ReviewResultSet: Array<FuseFaceReviewResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMaterialList返回参数结构体
 */
export interface DescribeMaterialListResponse {
    /**
      * 素材列表数据
      */
    MaterialInfos?: Array<PublicMaterialInfos>;
    /**
      * 素材条数
      */
    Count?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 人脸信息
 */
export interface MaterialFaceList {
    /**
      * 人脸序号
      */
    FaceId: string;
    /**
      * 人脸框信息
      */
    FaceInfo: FaceInfo;
}
/**
 * FaceFusion请求参数结构体
 */
export interface FaceFusionRequest {
    /**
      * 活动 ID，请在人脸融合控制台查看。
      */
    ProjectId: string;
    /**
      * 素材 ID，请在人脸融合控制台查看。
      */
    ModelId: string;
    /**
      * 返回图像方式（url 或 base64) ，二选一。url有效期为7天。
      */
    RspImgType: string;
    /**
      * 图片 base64 数据。请确保人脸为正脸，无旋转。若某些手机拍摄后人脸被旋转，请使用图片的 EXIF 信息对图片进行旋转处理；请勿在 base64 数据中包含头部，如“data:image/jpeg;base64,”。
      */
    Image?: string;
    /**
      * 历史遗留字段，无需填写。因为融合只需提取人脸特征，不需要鉴黄。
      */
    PornDetect?: number;
    /**
      * 0表示不需要不适宜内容识别，1表示需要不适宜内容识别。默认值为0。
请注意，不适宜内容识别服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。
      */
    CelebrityIdentify?: number;
    /**
      * 图片Url地址，目前Url方式还不支持，后续会支持，可以使用FuseFace接口
      */
    Url?: string;
}
/**
 * FaceFusionLite返回参数结构体
 */
export interface FaceFusionLiteResponse {
    /**
      * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
      */
    Image: string;
    /**
      * 鉴政结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReviewResultSet: Array<FuseFaceReviewResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 人脸融合不适宜内容识别人脸信息
 */
export interface FuseFaceReviewDetail {
    /**
      * 保留字段
      */
    Field: string;
    /**
      * 人员名称
      */
    Label: string;
    /**
      * 对应识别label的置信度，分数越高意味违法违规可能性越大。
0到70，Suggestion建议为PASS；
70到80，Suggestion建议为REVIEW；
80到100，Suggestion建议为BLOCK。
      */
    Confidence: number;
    /**
      * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
      */
    Suggestion: string;
}
/**
 * 人脸图片和待被融合的素材模板图的人脸位置信息。
 */
export interface MergeInfo {
    /**
      * 输入图片base64
      */
    Image?: string;
    /**
      * 输入图片url
      */
    Url?: string;
    /**
      * 上传的图片人脸位置信息（人脸框）
      */
    InputImageFaceRect?: FaceRect;
    /**
      * 控制台上传的素材人脸ID，不填默认取最大人脸
      */
    TemplateFaceID?: string;
}
/**
 * FaceFusionLite请求参数结构体
 */
export interface FaceFusionLiteRequest {
    /**
      * 活动 ID，请在人脸融合控制台查看。
      */
    ProjectId: string;
    /**
      * 素材 ID，请在人脸融合控制台查看。
      */
    ModelId: string;
    /**
      * 用户人脸图片、素材模板图的人脸位置信息。
      */
    MergeInfos: Array<MergeInfo>;
    /**
      * 返回图像方式（url 或 base64) ，二选一。默认url, url有效期为30天。
      */
    RspImgType?: string;
    /**
      * 请注意，鉴政服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。
      */
    CelebrityIdentify?: number;
    /**
      * 算法引擎参数:  1）选脸版 - youturecreat; 2）优享版 - youtu1vN； 3）畅享版 - ptu； 4）随机 - ALL;  默认为活动选择的算法
      */
    Engine?: string;
}
/**
 * 人脸融合不适宜内容识别返回参数item
 */
export interface FuseFaceReviewResult {
    /**
      * 保留字段
      */
    Category: string;
    /**
      * 状态码， 0为处理成功，其他值为处理失败
      */
    Code: string;
    /**
      * 对应状态码信息描述
      */
    CodeDescription: string;
    /**
      * 保留字段
      */
    Confidence: number;
    /**
      * 保留字段
      */
    Suggestion: string;
    /**
      * 审核详细内容
      */
    DetailSet: Array<FuseFaceReviewDetail>;
}
/**
 * FuseFace返回参数结构体
 */
export interface FuseFaceResponse {
    /**
      * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
      */
    FusedImage: string;
    /**
      * 不适宜内容识别结果。该数组的顺序和请求中mergeinfo的顺序一致，一一对应
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReviewResultSet: Array<FuseFaceReviewResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * FuseFace请求参数结构体
 */
export interface FuseFaceRequest {
    /**
      * 活动 ID，请在人脸融合控制台查看。
      */
    ProjectId: string;
    /**
      * 素材 ID，请在人脸融合控制台查看。
      */
    ModelId: string;
    /**
      * 返回图像方式（url 或 base64) ，二选一。url有效期为7天。
      */
    RspImgType: string;
    /**
      * 用户人脸图片、素材模板图的人脸位置信息。
      */
    MergeInfos: Array<MergeInfo>;
    /**
      * 脸型融合比例，数值越高，融合后的脸型越像素材人物。取值范围[0,100]
若此参数不填写，则使用人脸融合控制台中脸型参数数值。（换脸版算法暂不支持此参数调整）
      */
    FuseProfileDegree?: number;
    /**
      * 五官融合比例，数值越高，融合后的五官越像素材人物。取值范围[0,100]
若此参数不填写，则使用人脸融合控制台中五官参数数值。（换脸版算法暂不支持此参数调整）
      */
    FuseFaceDegree?: number;
    /**
      * 0表示不需要不适宜内容识别，1表示需要不适宜内容识别。默认值为0。
请注意，不适宜内容识别服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。
      */
    CelebrityIdentify?: number;
}
/**
 * 人脸框信息
 */
export interface FaceRect {
    /**
      * 人脸框左上角横坐标。
      */
    X: number;
    /**
      * 人脸框左上角纵坐标。
      */
    Y: number;
    /**
      * 人脸框宽度。
      */
    Width: number;
    /**
      * 人脸框高度。
      */
    Height: number;
}
/**
 * DescribeMaterialList请求参数结构体
 */
export interface DescribeMaterialListRequest {
    /**
      * 活动Id
      */
    ActivityId: number;
    /**
      * 素材Id
      */
    MaterialId?: string;
    /**
      * 每次拉取条数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
}
