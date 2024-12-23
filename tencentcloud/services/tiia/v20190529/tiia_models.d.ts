/**
 * RecognizeCarPro请求参数结构体
 */
export interface RecognizeCarProRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要base64编码，并且要去掉编码头部。**
  支持的图片格式：PNG、JPG、JPEG、BMP，暂不支持GIF格式。支持的图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
     */
    ImageBase64?: string;
}
/**
 * DetectChefDress返回参数结构体
 */
export interface DetectChefDressResponse {
    /**
     * 识别到的人体属性信息。单个人体属性信息包括人体检测置信度，属性信息，人体检测框。
     */
    Bodies?: Array<AttributesForBody>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchImage返回参数结构体
 */
export interface SearchImageResponse {
    /**
     * 返回结果数量。
     */
    Count?: number;
    /**
     * 图片信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageInfos?: Array<ImageInfo>;
    /**
     * 输入图的主体信息。
  若启用主体识别且在请求中指定了类目ID或主体区域，以指定的主体为准。若启用主体识别且没有指定，以最大面积主体为准。
  **<font color=#1E90FF>注意：仅服务类型为商品图像搜索时才生效。</font>**
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Object?: ObjectInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectDisgust请求参数结构体
 */
export interface DetectDisgustRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要base64编码，并且要去掉编码头部。**
     */
    ImageBase64?: string;
}
/**
 * 宠物具体信息
 */
export interface Pet {
    /**
     * 识别出的宠物类型（猫或者狗，暂不支持识别猫狗品种）。
     */
    Name: string;
    /**
     * 识别服务给识别目标打出的置信度，范围在0-100之间。值越高，表示目标为相应结果的可能性越高。
     */
    Score: number;
    /**
     * 识别目标在图片中的坐标。
     */
    Location: Rect;
}
/**
 * DetectPet请求参数结构体
 */
export interface DetectPetRequest {
    /**
     * 图片的URL地址。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  图片大小的限制为4M，图片像素的限制为4k。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。与ImageUrl同时存在时优先使用ImageUrl字段。
  图片大小的限制为4M，图片像素的限制为4k。
  **注意：图片需要base64编码，并且要去掉编码头部。**
     */
    ImageBase64?: string;
}
/**
 * CreateImage请求参数结构体
 */
export interface CreateImageRequest {
    /**
     * 图库ID。
     */
    GroupId: string;
    /**
     * 物品ID，最多支持64个字符。
  一个物品ID可以包含多张图片，若EntityId已存在，则对其追加图片。同一个EntityId，最大支持10张图。
     */
    EntityId: string;
    /**
     * 图片名称，最多支持64个字符，
  PicName唯一确定一张图片，具有唯一性。
     */
    PicName: string;
    /**
     * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。
  ImageUrl和ImageBase64必须提供一个，如果都提供，只使用ImageUrl。
  图片限制：
  • 图片格式：支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  • 图片大小：对应图片 base64 编码后大小不可超过5M。图片分辨率不超过4096\*4096。
  • 如果在商品图像搜索中开启主体识别，分辨率不超过2000\*2000，图片长宽比小于10。
  建议：
  • 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
     */
    ImageUrl?: string;
    /**
     * 图片自定义备注内容，最多支持4096个字符，查询时原样带回。
     */
    CustomContent?: string;
    /**
     * 图片 base64 数据，base64 编码后大小不可超过5M。
  图片限制：
  • 图片格式：支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  • 图片大小：base64 编码后大小不可超过5M。图片分辨率不超过4096\*4096。
  • 如果在商品图像搜索中开启主体识别，分辨率不超过2000\*2000，图片长宽比小于10。
     */
    ImageBase64?: string;
    /**
     * 图片自定义标签，最多不超过10个，格式为JSON。
     */
    Tags?: string;
    /**
     * 是否需要启用主体识别，默认为**TRUE**。
  • 为**TRUE**时，启用主体识别，返回主体信息。若没有指定**ImageRect**，自动提取最大面积主体创建图片并进行主体识别。主体识别结果可在**Response**中获取。
  • 为**FALSE**时，不启用主体识别，不返回主体信息。若没有指定**ImageRect**，以整张图创建图片。
  **<font color=#1E90FF>注意：仅服务类型为商品图像搜索时才生效。</font>**
     */
    EnableDetect?: boolean;
    /**
     * 图像类目ID。
  若设置类目ID，提取以下类目的主体创建图片。
  类目取值说明：
  0：上衣。
  1：裙装。
  2：下装。
  3：包。
  4：鞋。
  5：配饰。
  **<font color=#1E90FF>注意：仅服务类型为商品图像搜索时才生效。</font>**
     */
    CategoryId?: number;
    /**
     * 图像主体区域。
  若设置主体区域，提取指定的区域创建图片。
     */
    ImageRect?: Rect;
}
/**
 * 属性列表。
 */
export interface BodyAttributes {
    /**
     * 属性值。
     */
    Label?: string;
    /**
     * 置信度，取值0-1之间。
     */
    Confidence?: number;
    /**
     * 属性名称。
     */
    Name?: string;
}
/**
 * DeleteImages返回参数结构体
 */
export interface DeleteImagesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CropImage请求参数结构体
 */
export interface CropImageRequest {
    /**
     * 需要裁剪区域的宽度，与Height共同组成所需裁剪的图片宽高比例。
  输入数字请大于0、小于图片宽度的像素值。
     */
    Width: number;
    /**
     * 需要裁剪区域的高度，与Width共同组成所需裁剪的图片宽高比例。
  输入数字请大于0、小于图片高度的像素值。
  宽高比例（Width : Height）会简化为最简分数，即如果Width输入10、Height输入20，会简化为1：2。
  Width : Height建议取值在[1, 2.5]之间，超过这个范围可能会影响效果。
     */
    Height: number;
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果。
  • 长宽比：长边：短边<5。
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过Base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  注意：图片需要Base64编码，并且要去掉编码头部。
     */
    ImageBase64?: string;
}
/**
 * DetectProduct请求参数结构体
 */
export interface DetectProductRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要base64编码，并且要去掉编码头部。**
     */
    ImageBase64?: string;
}
/**
 * DetectLabelBeta请求参数结构体
 */
export interface DetectLabelBetaRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要base64编码，并且要去掉编码头部。**
     */
    ImageBase64?: string;
    /**
     * 本次调用支持的识别场景，可选值如下：
  WEB，针对网络图片优化;
  CAMERA，针对手机摄像头拍摄图片优化;
  ALBUM，针对手机相册、网盘产品优化;
  NEWS，针对新闻、资讯、广电等行业优化；
  NONECAM，非实拍图；
  LOCATION，主体位置识别；
  如果不传此参数，则默认为WEB。
  
  支持多场景（Scenes）一起检测。例如，使用 Scenes=["WEB", "CAMERA"]，即对一张图片使用两个模型同时检测，输出两套识别结果。
     */
    Scenes?: Array<string>;
}
/**
 * DetectLabel返回参数结构体
 */
export interface DetectLabelResponse {
    /**
     * Web网络版标签结果数组。如未选择WEB场景，则为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<DetectLabelItem>;
    /**
     * Camera摄像头版标签结果数组。如未选择CAMERA场景，则为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CameraLabels?: Array<DetectLabelItem>;
    /**
     * Album相册版标签结果数组。如未选择ALBUM场景，则为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlbumLabels?: Array<DetectLabelItem>;
    /**
     * News新闻版标签结果数组。如未选择NEWS场景，则为空。
  新闻版目前为测试阶段，暂不提供每个标签的一级、二级分类信息的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewsLabels?: Array<DetectLabelItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroups请求参数结构体
 */
export interface DescribeGroupsRequest {
    /**
     * 起始序号，默认值为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认值为10，最大值为100。
     */
    Limit?: number;
    /**
     * 图库ID，如果不为空，则返回指定库信息。
     */
    GroupId?: string;
}
/**
 * DetectMisbehavior返回参数结构体
 */
export interface DetectMisbehaviorResponse {
    /**
     * 对于图片中包含不良行为的置信度，取值[0,1]，一般超过0.5则表明可能包含不良行为内容；
     */
    Confidence?: number;
    /**
     * 图像中最可能包含的不良行为类别，包括赌博、打架斗殴、吸毒等。
     */
    Type?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AssessQuality返回参数结构体
 */
export interface AssessQualityResponse {
    /**
     * 取值为TRUE或FALSE，TRUE为长图，FALSE为正常图，长图定义为长宽比大于等于3或小于等于1/3的图片。
     */
    LongImage?: boolean;
    /**
     * 取值为TRUE或FALSE，TRUE为黑白图，FALSE为否。黑白图即灰度图，指红绿蓝三个通道都是以灰度色阶显示的图片，并非视觉上的“黑白图片”。
     */
    BlackAndWhite?: boolean;
    /**
     * 取值为TRUE或FALSE，TRUE为小图，FALSE为否, 小图定义为最长边小于179像素的图片。当一张图片被判断为小图时，不建议做推荐和展示，其他字段统一输出为0或FALSE。
     */
    SmallImage?: boolean;
    /**
     * 取值为TRUE或FALSE，TRUE为大图，FALSE为否，定义为最短边大于1000像素的图片
     */
    BigImage?: boolean;
    /**
     * 取值为TRUE或FALSE，TRUE为纯色图或纯文字图，即没有内容或只有简单内容的图片，FALSE为正常图片。
     */
    PureImage?: boolean;
    /**
     * 综合评分。图像清晰度的得分，对图片的噪声、曝光、模糊、压缩等因素进行综合评估，取值为[0, 100]，值越大，越清晰。一般大于50为较清晰图片，标准可以自行把握。
     */
    ClarityScore?: number;
    /**
     * 综合评分。图像美观度得分， 从构图、色彩等多个艺术性维度评价图片，取值为[0, 100]，值越大，越美观。一般大于50为较美观图片，标准可以自行把握。
     */
    AestheticScore?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectDisgust返回参数结构体
 */
export interface DetectDisgustResponse {
    /**
     * 对于图片中包含恶心内容的置信度，取值[0,1]，一般超过0.5则表明可能是恶心图片。
     */
    Confidence?: number;
    /**
     * 与图像内容最相似的恶心内容的类别，包含腐烂、密集、畸形、血腥、蛇、虫子、牙齿等。
     */
    Type?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectChefDress请求参数结构体
 */
export interface DetectChefDressRequest {
    /**
     * 图片的 Url 。
  ImageUrl和ImageBase64必须提供一个，同时存在时优先使用ImageUrl字段。
  图片限制：
  • 图片格式：支持PNG、JPG、JPEG、不支持 GIF 图片。
  • 图片大小：对应图片 base64 编码后大小不可超过5M。图片分辨率不超过 3840 x 2160pixel。
  建议：
  • 接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。与ImageUrl同时存在时优先使用ImageUrl字段。
  注意：图片需要base64编码，并且要去掉编码头部。
  支持的图片格式：PNG、JPG、JPEG、暂不支持GIF格式。
  支持的图片大小：所下载图片经Base64编码后不超过5M。
     */
    ImageBase64?: string;
    /**
     * 人体检测模型开关，“true”为开启，“false”为关闭
  默认为开启，开启后可先对图片中的人体进行检测之后再进行属性识别
     */
    EnableDetect?: boolean;
    /**
     * 人体优选开关，“true”为开启，“false”为关闭
  开启后自动对检测质量低的人体进行优选过滤，有助于提高属性识别的准确率。
  默认为开启，仅在人体检测开关开启时可配置，人体检测模型关闭时人体优选也关闭
  人体优选开启时，检测到的人体分辨率不超过1920*1080 pixel
     */
    EnablePreferred?: boolean;
}
/**
 * SearchImage请求参数结构体
 */
export interface SearchImageRequest {
    /**
     * 图库名称。
     */
    GroupId: string;
    /**
     * 图片的 Url 。
  ImageUrl和ImageBase64必须提供一个，如果都提供，只使用ImageUrl。
  图片限制：
  • 图片格式：支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  • 图片大小：对应图片 base64 编码后大小不可超过5M。图片分辨率不超过4096\*4096。
  • 如果在商品图像搜索中开启主体识别，分辨率不超过2000\*2000，图片长宽比小于10。
  建议：
  • 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
     */
    ImageUrl?: string;
    /**
     * 图片 base64 数据。
  ImageUrl和ImageBase64必须提供一个，如果都提供，只使用ImageUrl。
  图片限制：
  • 图片格式：支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
  • 图片大小：base64 编码后大小不可超过5M。图片分辨率不超过4096\*4096。
  • 如果在商品图像搜索中开启主体识别，分辨率不超过2000\*2000，图片长宽比小于10。
     */
    ImageBase64?: string;
    /**
     * 返回结果的数量，默认值为10，最大值为100。
  按照相似度分数由高到低排序。
  **<font color=#1E90FF>服务类型为图案花纹搜索时Limit = 1，最多只能返回1个结果。</font>**
     */
    Limit?: number;
    /**
     * 返回结果的起始序号，默认值为0。
     */
    Offset?: number;
    /**
     * 匹配阈值。
  只有图片相似度分数超过匹配阈值的结果才会返回。
  当MatchThreshold为0（默认值）时，各服务类型将按照以下默认的匹配阈值进行结果过滤：
  • 通用图像搜索1.0版：50。
  • 商品图像搜索2.0升级版：45。
  • 商品图像搜索1.0版：28。
  • 图案花纹搜索1.0版：56。
  建议：
  可以手动调整MatchThreshold值来控制输出结果的范围。如果发现无检索结果，可能是因为图片相似度较低导致检索结果被匹配阈值过滤，建议调整为较低的阈值后再次尝试检索。
     */
    MatchThreshold?: number;
    /**
     * 标签过滤条件。
  针对创建图片时提交的Tags信息进行条件过滤。支持>、>=、 <、 <=、=，!=，多个条件之间支持AND和OR进行连接。
  最大支持64字符。
     */
    Filter?: string;
    /**
     * 图像主体区域。
  若设置主体区域，提取指定的区域进行检索。
     */
    ImageRect?: ImageRect;
    /**
     * 是否需要启用主体识别，默认为**TRUE** 。
  • 为**TRUE**时，启用主体识别，返回主体信息。若没有指定**ImageRect**，自动提取最大面积主体进行检索并进行主体识别。主体识别结果可在**Response中**获取。
  • 为**FALSE**时，不启用主体识别，不返回主体信息。若没有指定**ImageRect**，以整张图检索图片。
  **<font color=#1E90FF>注意：仅服务类型为商品图像搜索时才生效。</font>**
     */
    EnableDetect?: boolean;
    /**
     * 图像类目ID。
  若设置类目ID，提取以下类目的主体进行检索。
  类目取值说明：
  0：上衣。
  1：裙装。
  2：下装。
  3：包。
  4：鞋。
  5：配饰。
  **<font color=#1E90FF>注意：仅服务类型为商品图像搜索时才生效。</font>**
     */
    CategoryId?: number;
}
/**
 * 属性检测到的人体
 */
export interface AttributesForBody {
    /**
     * 人体框。当不开启人体检测时，内部参数默认为0。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rect?: ImageRect;
    /**
     * 人体检测置信度。取值0-1之间，当不开启人体检测开关时默认为0。
     */
    DetectConfidence?: number;
    /**
     * 属性信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Attributes?: Array<BodyAttributes>;
}
/**
 * DetectLabel请求参数结构体
 */
export interface DetectLabelRequest {
    /**
     * 图片 Base64 编码数据。
  与ImageUrl同时存在时优先使用ImageUrl字段。
  图片限制：
  • 图片格式：PNG、JPG、JPEG、BMP。
  • 图片大小：经Base64编码后不超过4M。
  **<font color=#1E90FF>注意：图片需要Base64编码，并且要去掉编码头部。</font>**
     */
    ImageBase64?: string;
    /**
     * 图片 URL 地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG、BMP。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边:短边<5；
  • 接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 本次调用支持的识别场景，可选值如下：
  • WEB，针对网络图片优化;
  • CAMERA，针对手机摄像头拍摄图片优化;
  • ALBUM，针对手机相册、网盘产品优化;
  • NEWS，针对新闻、资讯、广电等行业优化；
  如果不传此参数，则默认为WEB。
  
  支持多场景（Scenes）一起检测。例如，使用 Scenes=["WEB", "CAMERA"]，即对一张图片使用两个模型同时检测，输出两套识别结果。
     */
    Scenes?: Array<string>;
}
/**
 * DetectLabelPro返回参数结构体
 */
export interface DetectLabelProResponse {
    /**
     * 返回标签数组。
     */
    Labels?: Array<DetectLabelItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnhanceImage返回参数结构体
 */
export interface EnhanceImageResponse {
    /**
     * 增强后图片的base64编码。
     */
    EnhancedImage?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AssessQuality请求参数结构体
 */
export interface AssessQualityRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果。
  • 长宽比：长边：短边<5。
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过Base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要Base64编码，并且要去掉编码头部。**
     */
    ImageBase64?: string;
}
/**
 * DeleteImages请求参数结构体
 */
export interface DeleteImagesRequest {
    /**
     * 图库名称。
     */
    GroupId: string;
    /**
     * 物品ID。
     */
    EntityId: string;
    /**
     * 图片名称，如果不指定本参数，则删除EntityId下所有的图片；否则删除指定的图。
     */
    PicName?: string;
}
/**
 * CreateGroup请求参数结构体
 */
export interface CreateGroupRequest {
    /**
     * 图库ID，不可重复，仅支持字母、数字和下划线。图库数量单个用户上限为30。
     */
    GroupId: string;
    /**
     * 图库名称描述。
     */
    GroupName: string;
    /**
     * 图片库可容纳的最大图片特征条数，一张图片对应一条图片特征数据，不支持修改。
  单个图片库容量最大可达亿级，达到容量限制后继续创建图片将会报错。
  注意，包月计费下支持绑定的最小库容量为500万。
     */
    MaxCapacity: number;
    /**
     * 图库简介。
     */
    Brief?: string;
    /**
     * 访问限制默认为10qps，如需扩容请联系[在线客服](https://cloud.tencent.com/online-service)申请。
     */
    MaxQps?: number;
    /**
     * 图库类型，用于决定图像搜索的服务类型和算法版本，默认为4。
  GroupType不支持修改，若不确定适用的服务类型，建议先对不同类型分别小规模测试后再开始正式使用。
  参数取值：
  4：通用图像搜索1.0版。
  8：商品图像搜索3.0升级版。
  7：商品图像搜索2.0版。
  5：商品图像搜索1.0版。
  6：图案花纹搜索1.0版。
  1 - 3：通用图像搜索旧版，不推荐使用。
     */
    GroupType?: number;
}
/**
 * UpdateImage请求参数结构体
 */
export interface UpdateImageRequest {
    /**
     * 图库ID。
     */
    GroupId: string;
    /**
     * 物品ID，最多支持64个字符。
     */
    EntityId: string;
    /**
     * 图片名称，最多支持64个字符。
     */
    PicName?: string;
    /**
     * 新的自定义标签，最多不超过10个，格式为JSON。
     */
    Tags?: string;
}
/**
 * DescribeImages请求参数结构体
 */
export interface DescribeImagesRequest {
    /**
     * 图库名称。
     */
    GroupId: string;
    /**
     * 物品ID。
     */
    EntityId: string;
    /**
     * 图片名称。
     */
    PicName?: string;
}
/**
 * 具体坐标，可用来判断边界
 */
export interface Rect {
    /**
     * x轴坐标
     */
    X: number;
    /**
     * y轴坐标
     */
    Y: number;
    /**
     * (x,y)坐标距离长度
     */
    Width: number;
    /**
     * (x,y)坐标距离高度
     */
    Height: number;
}
/**
 * RecognizeCar返回参数结构体
 */
export interface RecognizeCarResponse {
    /**
     * 汽车的四个矩形顶点坐标，如果图片中存在多辆车，则输出最大车辆的坐标。
     */
    CarCoords?: Array<Coord>;
    /**
     * 车辆属性识别的结果数组，如果识别到多辆车，则会输出每辆车的top1结果。
     */
    CarTags?: Array<CarTagItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图像主体区域。
 */
export interface Box {
    /**
     * 图像主体区域。
     */
    Rect: ImageRect;
    /**
     * 置信度。
     */
    Score: number;
    /**
     * 主体区域类目ID
     */
    CategoryId: number;
}
/**
 * DetectSecurity返回参数结构体
 */
export interface DetectSecurityResponse {
    /**
     * 识别到的人体属性信息。单个人体属性信息包括人体检测置信度，属性信息，人体检测框。
     */
    Bodies?: Array<AttributesForBody>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RecognizeCar请求参数结构体
 */
export interface RecognizeCarRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要base64编码，并且要去掉编码头部。**
  支持的图片格式：PNG、JPG、JPEG、BMP，暂不支持GIF格式。支持的图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
     */
    ImageBase64?: string;
}
/**
 * EnhanceImage请求参数结构体
 */
export interface EnhanceImageRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，最大不超过250万像素，否则影响识别效果。
  • 长宽比：长边：短边<5。
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。图片经过Base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  注意：图片需要Base64编码，并且要去掉编码头部。
     */
    ImageBase64?: string;
}
/**
 * 图库信息。
 */
export interface GroupInfo {
    /**
     * 图库Id。
     */
    GroupId?: string;
    /**
     * 图库名称。
     */
    GroupName?: string;
    /**
     * 图库简介。
     */
    Brief?: string;
    /**
     * 图库容量。
     */
    MaxCapacity?: number;
    /**
     * 该库的访问限频 。
     */
    MaxQps?: number;
    /**
     * 图库类型，对应不同服务类型，默认为1。建议手动调整为4～6，1～3为历史版本，不推荐。
  参数值：
  4：在自建图库中搜索相同原图，可支持裁剪、翻转、调色、加水印后的图片搜索，适用于图片版权保护、原图查询等场景。
  5：在自建图库中搜索相同或相似的商品图片，适用于商品分类、检索、推荐等电商场景。
  6：在自建图片库中搜索与输入图片高度相似的图片，适用于相似图案、logo、纹理等图像元素的搜索。
     */
    GroupType?: number;
    /**
     * 图库图片数量。
     */
    PicCount?: number;
    /**
     * 图库创建时间。
     */
    CreateTime?: string;
    /**
     * 图库更新时间。
     */
    UpdateTime?: string;
}
/**
 * CropImage返回参数结构体
 */
export interface CropImageResponse {
    /**
     * 裁剪区域左上角X坐标值
     */
    X?: number;
    /**
     * 裁剪区域左上角Y坐标值
     */
    Y?: number;
    /**
     * 裁剪区域的宽度，单位为像素
     */
    Width?: number;
    /**
     * 裁剪区域的高度，单位为像素
     */
    Height?: number;
    /**
     * 原图宽度，单位为像素
     */
    OriginalWidth?: number;
    /**
     * 原图高度，单位为像素
     */
    OriginalHeight?: number;
    /**
     * 0：抠图正常；
  1：原图过长，指原图的高度是宽度的1.8倍以上；
  2：原图过宽，指原图的宽度是高度的1.8倍以上；
  3：抠图区域过长，指抠图的高度是主体备选框高度的1.6倍以上；
  4：抠图区域过宽，指当没有检测到人脸时，抠图区域宽度是检测出的原图主体区域宽度的1.6倍以上；
  5：纯色图，指裁剪区域视觉较为单一、缺乏主体部分 ；
  6：宽高比异常，指Width : Height取值超出[1, 2.5]的范围；
  
  以上是辅助决策的参考建议，可以根据业务需求选择采纳或忽视。
     */
    CropResult?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图像的主体信息。
 */
export interface ObjectInfo {
    /**
     * 图像主体区域。
     */
    Box: Box;
    /**
     * 主体类别ID。
     */
    CategoryId: number;
    /**
     * 整张图颜色信息。
     */
    Colors: Array<ColorInfo>;
    /**
     * 属性信息。
     */
    Attributes: Array<Attribute>;
    /**
     * 图像的所有主体区域，置信度，以及主体区域类别ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllBox: Array<Box>;
}
/**
 * 检测到的单个商品结构体
 */
export interface Product {
    /**
     * 图片中商品的三级分类识别结果，选取所有三级分类中的置信度最大者
     */
    Name?: string;
    /**
     * 三级商品分类对应的一级分类和二级分类，两级之间用“-”（中划线）隔开，例如商品名称是“硬盘”，那么Parents输出为“电脑、办公-电脑配件”
     */
    Parents?: string;
    /**
     * 算法对于Name的置信度，0-100之间，值越高，表示对于Name越确定
     */
    Confidence?: number;
    /**
     * 商品坐标X轴的最小值
     */
    XMin?: number;
    /**
     * 商品坐标Y轴的最小值
     */
    YMin?: number;
    /**
     * 商品坐标X轴的最大值
     */
    XMax?: number;
    /**
     * 商品坐标Y轴的最大值
     */
    YMax?: number;
}
/**
 * 汽车坐标信息
 */
export interface Coord {
    /**
     * 横坐标x
     */
    X?: number;
    /**
     * 纵坐标y
     */
    Y?: number;
}
/**
 * DetectSecurity请求参数结构体
 */
export interface DetectSecurityRequest {
    /**
     * 图片的 Url 。
  ImageUrl和ImageBase64必须提供一个，同时存在时优先使用ImageUrl字段。
  图片限制：
  • 图片格式：支持PNG、JPG、JPEG、不支持 GIF 图片。
  • 图片大小：对应图片 base64 编码后大小不可超过5M。图片分辨率不超过3840 x 2160 pixel。
  建议：
  • 接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。
  最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  注意：图片需要base64编码，并且要去掉编码头部。
  支持的图片格式：PNG、JPG、JPEG、暂不支持GIF格式。
  支持的图片大小：所下载图片经Base64编码后不超过5M。
     */
    ImageBase64?: string;
    /**
     * 人体检测模型开关，“true”为开启，“false”为关闭
  开启后可先对图片中的人体进行检测之后再进行属性识别，默认为开启
     */
    EnableDetect?: boolean;
    /**
     * 人体优选开关，“true”为开启，“false”为关闭
  开启后自动对检测质量低的人体进行优选过滤，有助于提高属性识别的准确率。
  默认为开启，仅在人体检测开关开启时可配置，人体检测模型关闭时人体优选也关闭
  如开启人体优选，检测到的人体分辨率需不大于1920*1080 pixel
     */
    EnablePreferred?: boolean;
}
/**
 * DetectEnvelope请求参数结构体
 */
export interface DetectEnvelopeRequest {
    /**
     * 图片的URL地址。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的Url速度和稳定性可能受一定影响。
  图片大小的限制为4M，图片像素的限制为4k。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。与ImageUrl同时存在时优先使用ImageUrl字段。
  图片大小的限制为4M，图片像素的限制为4k。
  **注意：图片需要base64编码，并且要去掉编码头部。
     */
    ImageBase64?: string;
}
/**
 * DetectPet返回参数结构体
 */
export interface DetectPetResponse {
    /**
     * 识别出图片中的宠物信息列表。
     */
    Pets?: Array<Pet>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectProduct返回参数结构体
 */
export interface DetectProductResponse {
    /**
     * 商品识别结果数组
     */
    Products?: Array<Product>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 整张图颜色信息。
 */
export interface ColorInfo {
    /**
     * RGB颜色值（16进制），例如：291A18。
     */
    Color?: string;
    /**
     * 当前颜色标签所占比例。
     */
    Percentage?: number;
    /**
     * 颜色标签。蜜柚色，米驼色等。
     */
    Label?: string;
}
/**
 * 图像主体区域坐标
 */
export interface ImageRect {
    /**
     * 左上角横坐标。
     */
    X: number;
    /**
     * 左上角纵坐标。
     */
    Y: number;
    /**
     * 宽度。
     */
    Width: number;
    /**
     * 高度。
     */
    Height: number;
}
/**
 * CreateImage返回参数结构体
 */
export interface CreateImageResponse {
    /**
     * 输入图的主体信息。
  若启用主体识别且在请求中指定了类目ID或主体区域，以指定的主体为准。若启用主体识别且没有指定，以最大面积主体为准。
  **<font color=#1E90FF>注意：仅服务类型为商品图像搜索时才生效。</font>**
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Object?: ObjectInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图像标签检测结果。
 */
export interface DetectLabelItem {
    /**
     * 图片中的物体名称。
     */
    Name: string;
    /**
     * 算法对于Name的置信度，0-100之间，值越高，表示对于Name越确定。
     */
    Confidence: number;
    /**
     * 标签的一级分类
     */
    FirstCategory: string;
    /**
     * 标签的二级分类
     */
    SecondCategory: string;
}
/**
 * UpdateImage返回参数结构体
 */
export interface UpdateImageResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 车牌信息
 */
export interface CarPlateContent {
    /**
     * 车牌信息。
     */
    Plate?: string;
    /**
     * 车牌颜色。
     */
    Color?: string;
    /**
     * 车牌类型，包含：0普通蓝牌，1双层黄牌，2单层黄牌，3新能源车牌，4使馆车牌，5领馆车牌，6澳门车牌，7香港车牌，8警用车牌，9教练车牌，10武警车牌，11军用车牌   -2遮挡污损模糊车牌/异常   其他无牌
  注意：
  此字段可能返回 null，表示取不到有效值。
  此字段结果遮挡污损模糊车牌/异常：包含PlateStatus参数的“遮挡污损模糊车牌”，针对车牌异常，建议参考此字段，更全面
     */
    Type?: string;
    /**
     * 车牌在图片中的坐标信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlateLocation?: Array<Coord>;
    /**
     * 判断车牌是否遮挡：“遮挡污损模糊车牌”和"正常车牌"。
     */
    PlateStatus?: string;
    /**
     * 车牌遮挡的置信度，0-100。
     */
    PlateStatusConfidence?: number;
    /**
     * 车牌角度。
     */
    PlateAngle?: number;
}
/**
 * DetectLabelPro请求参数结构体
 */
export interface DetectLabelProRequest {
    /**
     * 图片 URL 地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG、BMP。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边:短边<5；
  • 接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片 Base64 编码数据。
  与ImageUrl同时存在时优先使用ImageUrl字段。
  图片限制：
  • 图片格式：PNG、JPG、JPEG、BMP。
  • 图片大小：经Base64编码后不超过4M。
  **<font color=#1E90FF>注意：图片需要Base64编码，并且要去掉编码头部。</font>**
     */
    ImageBase64?: string;
}
/**
 * DetectLabelBeta返回参数结构体
 */
export interface DetectLabelBetaResponse {
    /**
     * Web网络版标签结果数组。如未选择WEB场景，则为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<DetectLabelItem>;
    /**
     * Camera摄像头版标签结果数组。如未选择CAMERA场景，则为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CameraLabels?: Array<DetectLabelItem>;
    /**
     * Album相册版标签结果数组。如未选择ALBUM场景，则为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlbumLabels?: Array<DetectLabelItem>;
    /**
     * News新闻版标签结果数组。如未选择NEWS场景，则为空。
  新闻版目前为测试阶段，暂不提供每个标签的一级、二级分类信息的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewsLabels?: Array<DetectLabelItem>;
    /**
     * 非实拍标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NoneCamLabels?: Array<DetectLabelItem>;
    /**
     * 识别结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocationLabels?: Array<Product>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectEnvelope返回参数结构体
 */
export interface DetectEnvelopeResponse {
    /**
     * 一级标签结果数组。识别是否文件封。
     */
    FirstTags?: Array<ImageTag>;
    /**
     * 二级标签结果数组。识别文件封正反面。
     */
    SecondTags?: Array<ImageTag>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片标签。
 */
export interface ImageTag {
    /**
     * 标签内容。
     */
    Name?: string;
    /**
     * 置信度范围在0-100之间。值越高，表示目标为相应结果的可能性越高。
     */
    Confidence?: number;
}
/**
 * 属性
 */
export interface Attribute {
    /**
     * 属性
     */
    Type?: string;
    /**
     * 属性详情
     */
    Details?: string;
}
/**
 * 图片信息
 */
export interface ImageInfo {
    /**
     * 图片名称。
     */
    EntityId?: string;
    /**
     * 用户自定义的内容。
     */
    CustomContent?: string;
    /**
     * 图片自定义标签，JSON格式。
     */
    Tags?: string;
    /**
     * 图片名称。
     */
    PicName?: string;
    /**
     * 相似度。
     */
    Score?: number;
}
/**
 * RecognizeCarPro返回参数结构体
 */
export interface RecognizeCarProResponse {
    /**
     * 汽车的四个矩形顶点坐标，如果图片中存在多辆车，则输出最大车辆的坐标。
     */
    CarCoords?: Array<Coord>;
    /**
     * 车辆属性识别的结果数组，如果识别到多辆车，则会输出每辆车的top1结果。
  注意：置信度是指车牌信息置信度。
     */
    CarTags?: Array<CarTagItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroups返回参数结构体
 */
export interface DescribeGroupsResponse {
    /**
     * 图库信息
     */
    Groups?: Array<GroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 车辆属性识别的结果
 */
export interface CarTagItem {
    /**
     * 车系
     */
    Serial?: string;
    /**
     * 车辆品牌
     */
    Brand?: string;
    /**
     * 车辆类型
     */
    Type?: string;
    /**
     * 车辆颜色
     */
    Color?: string;
    /**
     * 车系置信度，0-100
     */
    Confidence?: number;
    /**
     * 年份，没识别出年份的时候返回0
     */
    Year?: number;
    /**
     * 车辆在图片中的坐标信息
     */
    CarLocation?: Array<Coord>;
    /**
     * 车牌信息，仅车辆识别（增强版）支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlateContent?: CarPlateContent;
    /**
     * 车牌信息置信度，0-100，仅车辆识别（增强版）支持
     */
    PlateConfidence?: number;
    /**
     * 车辆类型置信度，0-100，仅车辆识别（增强版）支持
     */
    TypeConfidence?: number;
    /**
     * 车辆颜色置信度，0-100，仅车辆识别（增强版）支持
     */
    ColorConfidence?: number;
    /**
     * 车辆朝向，仅车辆识别（增强版）支持
     */
    Orientation?: string;
    /**
     * 车辆朝向置信度，0-100，仅车辆识别（增强版）支持
     */
    OrientationConfidence?: number;
}
/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
    /**
     * 图库名称。
     */
    GroupId?: string;
    /**
     * 物品ID。
     */
    EntityId?: string;
    /**
     * 图片信息。
     */
    ImageInfos?: Array<ImageInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetectMisbehavior请求参数结构体
 */
export interface DetectMisbehaviorRequest {
    /**
     * 图片URL地址。
  图片限制：
  • 图片格式：PNG、JPG、JPEG。
  • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
  建议：
  • 图片像素：大于50*50像素，否则影响识别效果；
  • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
  **注意：图片需要base64编码，并且要去掉编码头部。**
     */
    ImageBase64?: string;
}
/**
 * CreateGroup返回参数结构体
 */
export interface CreateGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
