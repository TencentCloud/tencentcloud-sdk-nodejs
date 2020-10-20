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
 * 图像识别出的商品的详细信息。
当图像中检测到多个物品时，会对显著性最高的物品进行识别。
 */
export interface ProductInfo {
    /**
      * 1表示找到同款商品，以下字段为同款商品信息；
0表示未找到同款商品， 具体商品信息为空（参考价格、名称、品牌等），仅提供商品类目。
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
      * 搜索到的商品配图URL
      */
    Image: string;
}
/**
 * RecognizeProduct返回参数结构体
 */
export interface RecognizeProductResponse {
    /**
      * 检测到的图片中的商品位置和品类预测。
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。
最多可以输出__3组__检测结果。
      */
    RegionDetected?: Array<RegionDetected>;
    /**
      * 图像识别出的商品的详细信息。
当图像中检测到多个物品时，会对显著性最高的进行识别。
      */
    ProductInfo?: ProductInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * RecognizeProduct请求参数结构体
 */
export interface RecognizeProductRequest {
    /**
      * 图片限制：内测版仅支持jpg、jpeg，图片大小不超过1M，分辨率在25万到100万之间。
建议先对图片进行压缩，以便提升处理速度。
      */
    ImageUrl?: string;
    /**
      * 图片经过base64编码的内容。最大不超过1M，分辨率在25万到100万之间。
与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
      */
    ImageBase64?: string;
}
