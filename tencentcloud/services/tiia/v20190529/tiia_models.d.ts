/**
 * DetectProductBeta返回参数结构体
 */
export interface DetectProductBetaResponse {
    /**
      * 检测到的图片中的商品位置和品类预测。
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。
最多可以输出__3组__检测结果。
      */
    RegionDetected: Array<RegionDetected>;
    /**
      * 图像识别出的商品的详细信息。
当图像中检测到多个物品时，会对显著性最高的进行识别。
      */
    ProductInfo: ProductInfo;
    /**
      * 相似商品信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductInfoList: Array<ProductInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DetectCelebrity返回参数结构体
 */
export interface DetectCelebrityResponse {
    /**
      * 公众人物识别结果数组。如果检测不到人脸，返回为空；最多可以返回10个人脸识别结果。
      */
    Faces?: Array<Face>;
    /**
      * 本服务在不同误识率水平下（将图片中的人物识别错误的比例）的推荐阈值，可以用于控制识别结果的精度。
FalseRate1Percent, FalseRate5Permil, FalseRate1Permil分别代表误识率在百分之一、千分之五、千分之一情况下的推荐阈值。
因为阈值会存在变动，请勿将此处输出的固定值处理，而是每次取值与confidence对比，来判断本次的识别结果是否可信。
 例如，如果您业务中可以接受的误识率是1%，则可以将所有confidence>=FalseRate1Percent的结论认为是正确的。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Threshold?: Threshold;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CropImage请求参数结构体
 */
export interface CropImageRequest {
    /**
      * 需要裁剪区域的宽度，与Height共同组成所需裁剪的图片宽高比例；
输入数字请大于0、小于图片宽度的像素值；
      */
    Width: number;
    /**
      * 需要裁剪区域的高度，与Width共同组成所需裁剪的图片宽高比例；
输入数字请请大于0、小于图片高度的像素值；
宽高比例（Width : Height）会简化为最简分数，即如果Width输入10、Height输入20，会简化为1：2。
Width : Height建议取值在[1, 2.5]之间，超过这个范围可能会影响效果；
      */
    Height: number;
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
 * AssessQuality返回参数结构体
 */
export interface AssessQualityResponse {
    /**
      * 取值为TRUE或FALSE，TRUE为长图，FALSE为正常图，长图定义为长宽比大于等于3或小于等于1/3的图片。
      */
    LongImage: boolean;
    /**
      * 取值为TRUE或FALSE，TRUE为黑白图，FALSE为否。黑白图即灰度图，指红绿蓝三个通道都是以灰度色阶显示的图片，并非视觉上的“黑白图片”。
      */
    BlackAndWhite: boolean;
    /**
      * 取值为TRUE或FALSE，TRUE为小图，FALSE为否, 小图定义为最长边小于179像素的图片。当一张图片被判断为小图时，不建议做推荐和展示，其他字段统一输出为0或FALSE。
      */
    SmallImage: boolean;
    /**
      * 取值为TRUE或FALSE，TRUE为大图，FALSE为否，定义为最短边大于1000像素的图片
      */
    BigImage: boolean;
    /**
      * 取值为TRUE或FALSE，TRUE为纯色图或纯文字图，即没有内容或只有简单内容的图片，FALSE为正常图片。
      */
    PureImage: boolean;
    /**
      * 综合评分。图像清晰度的得分，对图片的噪声、曝光、模糊、压缩等因素进行综合评估，取值为[0, 100]，值越大，越清晰。一般大于50为较清晰图片，标准可以自行把握。
      */
    ClarityScore: number;
    /**
      * 综合评分。图像美观度得分， 从构图、色彩等多个艺术性维度评价图片，取值为[0, 100]，值越大，越美观。一般大于50为较美观图片，标准可以自行把握。
      */
    AestheticScore: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetectLabel请求参数结构体
 */
export interface DetectLabelRequest {
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
    Labels: Array<DetectLabelItem>;
    /**
      * Camera摄像头版标签结果数组。如未选择CAMERA场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CameraLabels: Array<DetectLabelItem>;
    /**
      * Album相册版标签结果数组。如未选择ALBUM场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlbumLabels: Array<DetectLabelItem>;
    /**
      * News新闻版标签结果数组。如未选择NEWS场景，则为空。
新闻版目前为测试阶段，暂不提供每个标签的一级、二级分类信息的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewsLabels: Array<DetectLabelItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 图像识别出的商品的详细信息。
当图像中检测到多个物品时，会对显著性最高的物品进行识别。
 */
export interface ProductInfo {
    /**
      * 1表示找到同款商品，以下字段为同款商品信息；
0表示未找到同款商品， 具体商品信息为空（参考价格、名称、品牌等），仅提供商品类目和参考图片（商品库中找到的最相似图片，供参考）。
是否找到同款的判断依据为Score分值，分值越大则同款的可能性越大。
      */
    FindSKU: number;
    /**
      * 本商品在图片中的坐标，表示为矩形框的四个顶点坐标。
      */
    Location: Location;
    /**
      * 商品名称
      */
    Name: string;
    /**
      * 商品品牌
      */
    Brand: string;
    /**
      * 参考价格，综合多个信息源，仅供参考。
      */
    Price: string;
    /**
      * 识别结果的商品类目。
包含：鞋、图书音像、箱包、美妆个护、服饰、家电数码、玩具乐器、食品饮料、珠宝、家居家装、药品、酒水、绿植园艺、其他商品、非商品等。
当类别为“非商品”时，除Location、Score和本字段之外的商品信息为空。
      */
    ProductCategory: string;
    /**
      * 输入图片中的主体物品和输出结果的相似度。分值越大，输出结果与输入图片是同款的可能性越高。
      */
    Score: number;
    /**
      * 搜索到的商品配图URL。
      */
    Image: string;
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
 * DetectProductBeta请求参数结构体
 */
export interface DetectProductBetaRequest {
    /**
      * 图片限制：内测版仅支持jpg、jpeg，图片大小不超过1M，分辨率在25万到100万之间。
建议先对图片进行压缩，以便提升处理速度。
      */
    ImageUrl?: string;
    /**
      * 图片经过base64编码的内容。最大不超过1M，分辨率在25万到100万之间。
与ImageUrl同时存在时优先使用ImageUrl字段。
      */
    ImageBase64?: string;
}
/**
 * DetectMisbehavior返回参数结构体
 */
export interface DetectMisbehaviorResponse {
    /**
      * 对于图片中包含不良行为的置信度，取值[0,1]，一般超过0.5则表明可能包含不良行为内容；
      */
    Confidence: number;
    /**
      * 图像中最可能包含的不良行为类别，包括赌博、打架斗殴、吸毒等。
      */
    Type: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
• 图片像素：大于50*50像素，最大不超过250万像素，否则影响识别效果；
• 长宽比：长边：短边<5；
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
      */
    ImageUrl?: string;
    /**
      * 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
      */
    ImageBase64?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetectCelebrity请求参数结构体
 */
export interface DetectCelebrityRequest {
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
 * 汽车坐标信息
 */
export interface Coord {
    /**
      * 横坐标x
      */
    X: number;
    /**
      * 纵坐标y
      */
    Y: number;
}
/**
 * 公众人物识别人脸信息
 */
export interface Face {
    /**
      * 与图片中人脸最相似的公众人物的名字。
      */
    Name: string;
    /**
      * 公众人物身份标签的数组，一个公众人物可能有多个身份标签。
      */
    Labels: Array<Labels>;
    /**
      * 对人物的简介。
      */
    BasicInfo: string;
    /**
      * 算法对于Name的置信度（图像中人脸与公众人物的相似度），0-100之间，值越高，表示对于Name越确定。
      */
    Confidence: number;
    /**
      * 人脸区域左上角横坐标。
      */
    X: number;
    /**
      * 人脸区域左上角纵坐标。
      */
    Y: number;
    /**
      * 人脸区域宽度。
      */
    Width: number;
    /**
      * 人脸区域高度。
      */
    Height: number;
    /**
      * 公众人物的唯一编号，可以用于区分同名人物、一个人物不同称呼等情况。唯一编号为8个字符构成的字符串。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ID: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 检测到的主体在图片中的矩形框位置（四个顶点坐标）
 */
export interface Location {
    /**
      * 位置矩形框的左上角横坐标
      */
    XMin: number;
    /**
      * 位置矩形框的左上角纵坐标
      */
    YMin: number;
    /**
      * 位置矩形框的右下角横坐标
      */
    XMax: number;
    /**
      * 位置矩形框的右下角纵坐标
      */
    YMax: number;
}
/**
 * 车牌信息
 */
export interface CarPlateContent {
    /**
      * 车牌信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Plate: string;
    /**
      * 车牌颜色。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Color: string;
    /**
      * 车牌类型；渣土车车牌遮挡时,该值为枚举值“异常”。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 车牌在图片中的坐标信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlateLocation: Array<Coord>;
}
/**
 * DetectLabelBeta返回参数结构体
 */
export interface DetectLabelBetaResponse {
    /**
      * Web网络版标签结果数组。如未选择WEB场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<DetectLabelItem>;
    /**
      * Camera摄像头版标签结果数组。如未选择CAMERA场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CameraLabels: Array<DetectLabelItem>;
    /**
      * Album相册版标签结果数组。如未选择ALBUM场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlbumLabels: Array<DetectLabelItem>;
    /**
      * News新闻版标签结果数组。如未选择NEWS场景，则为空。
新闻版目前为测试阶段，暂不提供每个标签的一级、二级分类信息的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewsLabels: Array<DetectLabelItem>;
    /**
      * 非实拍标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoneCamLabels: Array<DetectLabelItem>;
    /**
      * 识别结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocationLabels: Array<Product>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 名人识别的标签
 */
export interface Labels {
    /**
      * 公众人物身份标签的一级分类，例如体育明星、娱乐明星、政治人物等；
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstLabel: string;
    /**
      * 公众人物身份标签的二级分类，例如歌手（对应一级标签为“娱乐明星”）；
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecondLabel: string;
}
/**
 * 检测到的单个商品结构体
 */
export interface Product {
    /**
      * 图片中商品的三级分类识别结果，选取所有三级分类中的置信度最大者
      */
    Name: string;
    /**
      * 三级商品分类对应的一级分类和二级分类，两级之间用“-”（中划线）隔开，例如商品名称是“硬盘”，那么Parents输出为“电脑、办公-电脑配件”
      */
    Parents: string;
    /**
      * 算法对于Name的置信度，0-100之间，值越高，表示对于Name越确定
      */
    Confidence: number;
    /**
      * 商品坐标X轴的最小值
      */
    XMin: number;
    /**
      * 商品坐标Y轴的最小值
      */
    YMin: number;
    /**
      * 商品坐标X轴的最大值
      */
    XMax: number;
    /**
      * 商品坐标Y轴的最大值
      */
    YMax: number;
}
/**
 * 检测到的图片中的商品位置和品类预测。
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。
最多可以输出__3组__检测结果。
 */
export interface RegionDetected {
    /**
      * 商品的品类预测结果。
包含：鞋、图书音像、箱包、美妆个护、服饰、家电数码、玩具乐器、食品饮料、珠宝、家居家装、药品、酒水、绿植园艺、其他商品、非商品等。
      */
    Category: string;
    /**
      * 商品品类预测的置信度
      */
    CategoryScore: number;
    /**
      * 检测到的主体在图片中的坐标，表示为矩形框的四个顶点坐标
      */
    Location: Location;
}
/**
 * 车辆属性识别的结果
 */
export interface CarTagItem {
    /**
      * 车系
      */
    Serial: string;
    /**
      * 车辆品牌
      */
    Brand: string;
    /**
      * 车辆类型
      */
    Type: string;
    /**
      * 车辆颜色
      */
    Color: string;
    /**
      * 置信度，0-100
      */
    Confidence: number;
    /**
      * 年份，没识别出年份的时候返回0
      */
    Year: number;
    /**
      * 车辆在图片中的坐标信息
      */
    CarLocation: Array<Coord>;
    /**
      * 车牌信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlateContent: CarPlateContent;
}
/**
 * 本服务在不同误识率水平下（将图片中的人物识别错误的比例）的推荐阈值，可以用于控制识别结果的精度。
{FalseRate1Percent, FalseRate5Permil, FalseRate1Permil}分别代表误识率在百分之一、千分之五、千分之一情况下的推荐阈值。
因为阈值会存在变动，请勿将此处输出的固定值处理，而是每次取值与confidence对比，来判断本次的识别结果是否可信。
例如，如果您业务中可以接受的误识率是1%，则可以将所有confidence>=FalseRate1Percent的结论认为是正确的。
 */
export interface Threshold {
    /**
      * 误识率在百分之一时的推荐阈值。
      */
    FalseRate1Percent: number;
    /**
      * 误识率在千分之五时的推荐阈值。
      */
    FalseRate5Permil: number;
    /**
      * 误识率在千分之一时的推荐阈值。
      */
    FalseRate1Permil: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
