/**
 * DeleteModel请求参数结构体
 */
export interface DeleteModelRequest {
    /**
     * 素材ID。
     */
    ModelId: string;
}
/**
 * TryLipstickPic请求参数结构体
 */
export interface TryLipstickPicRequest {
    /**
     * 唇色信息。
  您可以输入最多3个 LipColorInfo 来实现给一张图中的最多3张人脸试唇色。
     */
    LipColorInfos: Array<LipColorInfo>;
    /**
     * 图片 base64 数据，base64 编码后大小不可超过6M。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Image?: string;
    /**
     * 图片的 Url ，对应图片 base64 编码后大小不可超过6M。
  图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Url?: string;
    /**
     * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
     */
    RspImgType?: string;
}
/**
 * GetModelList请求参数结构体
 */
export interface GetModelListRequest {
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
 * StyleImagePro请求参数结构体
 */
export interface StyleImageProRequest {
    /**
     * 滤镜类型，取值如下：
  1.白茶1；2 白皙；3.初夏；4.东京；5.告白；6.暖阳；7.蔷薇；8.清澄；9.清透；10.甜薄荷；11.默认；12.心动；13.哑灰；14.樱桃布丁；15.自然；16.清逸1；17.黑白；18.水果；19.爱情；20.冬日；21.相片；22.夏日；23.香氛；24.魅惑；25.悸动；26.沙滩；27.街拍；28.甜美；29.初吻；30.午后；31.活力；32.朦胧；33.悦动；34.时尚；35.气泡；36.柠檬；37.棉花糖；38.小溪；39.丽人；40.咖啡；41.嫩芽；42.热情；43.渐暖；44.早餐；45.白茶2；46.白嫩；47.圣代；48.森林；49.冲浪；50.奶咖；51.清澈；52.微风；53.日落；54.水光；55.日系；56.星光；57.阳光；58.落叶；59.生机；60.甜心；61.清逸2；62.春意；63.罗马；64.青涩；65.清风；66.暖心；67.海水；68.神秘；69.旧调1；70.旧调2；71.雪顶；72.日光；73.浮云；74.流彩；75.胶片；76.回味；77.奶酪；78.蝴蝶。
     */
    FilterType: number;
    /**
     * 图片 base64 数据，base64 编码后大小不可超过5M。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Image?: string;
    /**
     * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
  图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  支持PNG、JPG、JPEG、BMP 等图片格式，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Url?: string;
    /**
     * 滤镜效果，取值[0,100]，0表示无效果，100表示满滤镜效果。默认值为80。
     */
    FilterDegree?: number;
    /**
     * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。默认为base64。
     */
    RspImgType?: string;
}
/**
 * StyleImagePro返回参数结构体
 */
export interface StyleImageProResponse {
    /**
     * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultImage?: string;
    /**
     * RspImgType 为 url 时，返回处理后的图片 url 数据。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StyleImage返回参数结构体
 */
export interface StyleImageResponse {
    /**
     * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultImage?: string;
    /**
     * RspImgType 为 url 时，返回处理后的图片 url 数据。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TryLipstickPic返回参数结构体
 */
export interface TryLipstickPicResponse {
    /**
     * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
     */
    ResultImage?: string;
    /**
     * RspImgType 为 url 时，返回处理后的图片 url 数据。
     */
    ResultUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 唇色信息
 */
export interface LipColorInfo {
    /**
     * 使用RGBA模型试唇色。
     */
    RGBA?: RGBAInfo;
    /**
     * 使用已注册的 LUT 文件试唇色。
  ModelId 和 RGBA 两个参数只需提供一个，若都提供只使用 ModelId。
     */
    ModelId?: string;
    /**
     * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。
  您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
     */
    FaceRect?: FaceRect;
    /**
     * 涂妆浓淡[0,100]。建议取值50。本参数仅控制ModelId对应的涂妆浓淡。
     */
    ModelAlpha?: number;
}
/**
 * CreateModel请求参数结构体
 */
export interface CreateModelRequest {
    /**
     * 图片base64数据，用于试唇色，要求必须是LUT 格式的cube文件转换成512*512的PNG图片。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。了解 [cube文件转png图片小工具](http://yyb.gtimg.com/aiplat/static/qcloud-cube-to-png.html)。
     */
    LUTFile: string;
    /**
     * 文件描述信息，可用于备注。
     */
    Description?: string;
}
/**
 * RGBA通道信息
 */
export interface RGBAInfo {
    /**
     * R通道数值。[0,255]。
     */
    R: number;
    /**
     * G通道数值。[0,255]。
     */
    G: number;
    /**
     * B通道数值。[0,255]。
     */
    B: number;
    /**
     * A通道数值。[0,100]。建议取值50。
     */
    A: number;
}
/**
 * GetModelList返回参数结构体
 */
export interface GetModelListResponse {
    /**
     * 唇色素材总数量。
     */
    ModelIdNum?: number;
    /**
     * 素材数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModelInfos?: Array<ModelInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LUT素材信息
 */
export interface ModelInfo {
    /**
     * 唇色素材ID
     */
    ModelId?: string;
    /**
     * 唇色素材 url 。 LUT 文件 url 5分钟有效。
     */
    LUTFileUrl?: string;
    /**
     * 文件描述信息。
     */
    Description?: string;
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
 * BeautifyPic请求参数结构体
 */
export interface BeautifyPicRequest {
    /**
     * 图片 base64 数据，base64 编码后大小不可超过5M。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Image?: string;
    /**
     * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
  Url、Image必须提供一个，如果都提供，只使用 Url。
  图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Url?: string;
    /**
     * 美白程度，取值范围[0,100]。0不美白，100代表最高程度。默认值30。
     */
    Whitening?: number;
    /**
     * 磨皮程度，取值范围[0,100]。0不磨皮，100代表最高程度。默认值10。
     */
    Smoothing?: number;
    /**
     * 瘦脸程度，取值范围[0,100]。0不瘦脸，100代表最高程度。默认值70。
     */
    FaceLifting?: number;
    /**
     * 大眼程度，取值范围[0,100]。0不大眼，100代表最高程度。默认值70。
     */
    EyeEnlarging?: number;
    /**
     * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
     */
    RspImgType?: string;
}
/**
 * StyleImage请求参数结构体
 */
export interface StyleImageRequest {
    /**
     * 滤镜类型，取值如下：
  1.白茶；2 白皙；3.初夏；4.东京；5.告白；6.暖阳；7.蔷薇；8.清澄；9.清透；10.甜薄荷；11.默认；12.心动；13.哑灰；14.樱桃布丁；15.自然；16.清逸；17.黑白；18.水果；19.爱情；20.冬日；21.相片；22.夏日；23.香氛；24.魅惑；25.悸动；26.沙滩；27.街拍；28.甜美；29.初吻；30.午后。
     */
    FilterType: number;
    /**
     * 图片 base64 数据，base64 编码后大小不可超过5M。
  支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Image?: string;
    /**
     * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。
  图片的 Url、Image必须提供一个，如果都提供，只使用 Url。
  图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  支持PNG、JPG、JPEG、BMP 等图片格式，不支持 GIF 图片。
  暂不支持带有alpha透明通道的图片。
     */
    Url?: string;
    /**
     * 滤镜效果，取值[0,100]，0表示无效果，100表示满滤镜效果。默认值为80。
     */
    FilterDegree?: number;
    /**
     * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。默认值为base64。
     */
    RspImgType?: string;
}
/**
 * CreateModel返回参数结构体
 */
export interface CreateModelResponse {
    /**
     * 唇色素材ID。
     */
    ModelId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteModel返回参数结构体
 */
export interface DeleteModelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BeautifyPic返回参数结构体
 */
export interface BeautifyPicResponse {
    /**
     * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultImage?: string;
    /**
     * RspImgType 为 url 时，返回处理后的图片 url 数据。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
