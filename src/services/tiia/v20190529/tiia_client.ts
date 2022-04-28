/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DetectProductBetaResponse,
  DetectDisgustRequest,
  SearchImageResponse,
  RecognizeCarProResponse,
  CreateImageRequest,
  DeleteImagesResponse,
  CropImageRequest,
  DetectProductRequest,
  RegionDetected,
  DescribeGroupsRequest,
  AssessQualityResponse,
  DetectDisgustResponse,
  SearchImageRequest,
  RecognizeCarResponse,
  DetectLabelRequest,
  DetectLabelResponse,
  EnhanceImageResponse,
  ProductInfo,
  AssessQualityRequest,
  DeleteImagesRequest,
  CreateGroupRequest,
  DescribeImagesRequest,
  DetectProductBetaRequest,
  DetectMisbehaviorResponse,
  RecognizeCarRequest,
  EnhanceImageRequest,
  GroupInfo,
  CropImageResponse,
  DetectCelebrityRequest,
  Coord,
  Face,
  DetectProductResponse,
  DetectLabelBetaRequest,
  ImageRect,
  CreateImageResponse,
  DetectLabelItem,
  Location,
  CarPlateContent,
  DetectLabelBetaResponse,
  ImageInfo,
  RecognizeCarProRequest,
  Labels,
  DetectCelebrityResponse,
  Product,
  DescribeGroupsResponse,
  CarTagItem,
  Threshold,
  LemmaInfo,
  DescribeImagesResponse,
  DetectMisbehaviorRequest,
  CreateGroupResponse,
} from "./tiia_models"

/**
 * tiia client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tiia.tencentcloudapi.com", "2019-05-29", clientConfig)
  }

  /**
   * 创建图片，并添加对应图片的自定义信息。
   */
  async CreateImage(
    req: CreateImageRequest,
    cb?: (error: string, rep: CreateImageResponse) => void
  ): Promise<CreateImageResponse> {
    return this.request("CreateImage", req, cb)
  }

  /**
     * 商品识别-微信识物版，基于人工智能技术、海量训练图片、亿级商品库，可以实现全覆盖、细粒度、高准确率的商品识别和商品推荐功能。
本服务可以识别出图片中的主体位置、主体商品类型，覆盖亿级SKU，输出具体商品的价格、型号等详细信息。
客户无需自建商品库，即可快速实现商品识别、拍照搜商品等功能。
>   
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectProductBeta(
    req: DetectProductBetaRequest,
    cb?: (error: string, rep: DetectProductBetaResponse) => void
  ): Promise<DetectProductBetaResponse> {
    return this.request("DetectProductBeta", req, cb)
  }

  /**
     * 车辆识别可对图片中车辆的车型进行识别，可识别7000多种车型，输出车辆的品牌（如路虎）、车系（如神行者2）、类型（如中型SUV）、颜色、年份和坐标等信息，覆盖轿车、SUV、大型客车等市面常见车。如果图片中存在多辆车，会分别输出每辆车的车型和坐标。

>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async RecognizeCar(
    req: RecognizeCarRequest,
    cb?: (error: string, rep: RecognizeCarResponse) => void
  ): Promise<RecognizeCarResponse> {
    return this.request("RecognizeCar", req, cb)
  }

  /**
     * 图像标签利用深度学习技术，可以对图片进行智能分类、物体识别等。

目前支持8个大类、六十多个子类、数千个标签。涵盖各种日常场景、动植物、物品、美食、卡证等。具体分类请见[图像分析常见问题功能与限制相关](https://cloud.tencent.com/document/product/865/39164)。

图像标签提供四个版本供选择：

• 摄像头版：针对搜索、手机摄像头照片进行优化，涵盖大量卡证、日常物品、二维码条形码。

• 相册版：针对手机相册、网盘进行优化，去除相册和网盘中不常见的标签，针对相册常见图片类型（人像、日常活动、日常物品等）识别效果更好。

• 网络版：针对网络图片进行优化，涵盖标签更多，满足长尾识别需求。

• 新闻版：针对新闻、资讯、广电等行业进行优化，增加定制识别，支持万级图像标签。

每个产品的图像类型都有独特性，建议在接入初期，对四个版本进行对比评估后选择合适的版本使用。

为了方便使用、减少图片传输次数，图像标签包装成多合一接口，实际上是多个服务。

图像标签按照服务的实际使用数量进行收费。例如一张图片同时调用相册版、摄像头版两个服务，那么此次调用按照两次计费。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectLabel(
    req: DetectLabelRequest,
    cb?: (error: string, rep: DetectLabelResponse) => void
  ): Promise<DetectLabelResponse> {
    return this.request("DetectLabel", req, cb)
  }

  /**
     * 评估输入图片在视觉上的质量，从多个方面评估，并同时给出综合的、客观的清晰度评分，和主观的美观度评分。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async AssessQuality(
    req: AssessQualityRequest,
    cb?: (error: string, rep: AssessQualityResponse) => void
  ): Promise<AssessQualityResponse> {
    return this.request("AssessQuality", req, cb)
  }

  /**
     * 输入一张图片，返回AI针对一张图片是否是恶心的一系列判断值。

通过恶心图片识别, 可以判断一张图片是否令人恶心, 同时给出它属于的潜在类别, 让您能够过滤掉使人不愉快的图片。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectDisgust(
    req: DetectDisgustRequest,
    cb?: (error: string, rep: DetectDisgustResponse) => void
  ): Promise<DetectDisgustResponse> {
    return this.request("DetectDisgust", req, cb)
  }

  /**
   * 查询所有的图库信息。
   */
  async DescribeGroups(
    req: DescribeGroupsRequest,
    cb?: (error: string, rep: DescribeGroupsResponse) => void
  ): Promise<DescribeGroupsResponse> {
    return this.request("DescribeGroups", req, cb)
  }

  /**
   * 删除图片。
   */
  async DeleteImages(
    req: DeleteImagesRequest,
    cb?: (error: string, rep: DeleteImagesResponse) => void
  ): Promise<DeleteImagesResponse> {
    return this.request("DeleteImages", req, cb)
  }

  /**
     * 图像标签测试接口

>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectLabelBeta(
    req: DetectLabelBetaRequest,
    cb?: (error: string, rep: DetectLabelBetaResponse) => void
  ): Promise<DetectLabelBetaResponse> {
    return this.request("DetectLabelBeta", req, cb)
  }

  /**
     * 根据输入的裁剪比例，智能判断一张图片的最佳裁剪区域，确保原图的主体区域不受影响。

可以自动裁剪图片，适应不同平台、设备的展示要求，避免简单拉伸带来的变形。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async CropImage(
    req: CropImageRequest,
    cb?: (error: string, rep: CropImageResponse) => void
  ): Promise<CropImageResponse> {
    return this.request("CropImage", req, cb)
  }

  /**
   * 本接口用于对一张待识别的商品图片，在指定图片库中检索出最相似的图片列表。
   */
  async SearchImage(
    req: SearchImageRequest,
    cb?: (error: string, rep: SearchImageResponse) => void
  ): Promise<SearchImageResponse> {
    return this.request("SearchImage", req, cb)
  }

  /**
   * 获取指定图片库中的图片列表。
   */
  async DescribeImages(
    req: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
     * 可以识别输入的图片中是否包含不良行为，例如打架斗殴、赌博、抽烟等，可以应用于广告图、直播截图、短视频截图等审核，减少不良行为对平台内容质量的影响，维护健康向上的互联网环境。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectMisbehavior(
    req: DetectMisbehaviorRequest,
    cb?: (error: string, rep: DetectMisbehaviorResponse) => void
  ): Promise<DetectMisbehaviorResponse> {
    return this.request("DetectMisbehavior", req, cb)
  }

  /**
     * 用于创建一个空的图片库，如果图片库已存在则返回错误。不同类型图库对应不同的图像搜索服务，根据输入参数GroupType区分。

| 服务类型 |  功能描述 |
|  :------  | :-----------------  |
| 相同图像搜索<img width=30/>    | 在自建图库中搜索相同原图，可支持裁剪、翻转、调色、加水印后的图片搜索，适用于版权场景。|
| 商品图像搜索<img width=30/>   | 在自建图库中搜索相同或相似的商品图片，适用于电商场景。|

     */
  async CreateGroup(
    req: CreateGroupRequest,
    cb?: (error: string, rep: CreateGroupResponse) => void
  ): Promise<CreateGroupResponse> {
    return this.request("CreateGroup", req, cb)
  }

  /**
     * 本接口支持识别图片中包含的商品，能够输出商品的品类名称、类别，还可以输出商品在图片中的位置。支持一张图片多个商品的识别。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectProduct(
    req: DetectProductRequest,
    cb?: (error: string, rep: DetectProductResponse) => void
  ): Promise<DetectProductResponse> {
    return this.request("DetectProduct", req, cb)
  }

  /**
     * 车辆识别（增强版）可对图片中车辆的车型和车牌进行识别，输出车辆的车牌，以及品牌（如路虎）、车系（如神行者2）、类型（如中型SUV）、颜色和坐标等信息，覆盖轿车、SUV、大型客车等市面常见车。如果图片中存在多辆车，会分别输出每辆车的车型、车牌和坐标。

>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async RecognizeCarPro(
    req: RecognizeCarProRequest,
    cb?: (error: string, rep: RecognizeCarProResponse) => void
  ): Promise<RecognizeCarProResponse> {
    return this.request("RecognizeCarPro", req, cb)
  }

  /**
     * 传入一张图片，输出清晰度提升后的图片。

可以消除图片有损压缩导致的噪声，和使用滤镜、拍摄失焦导致的模糊。让图片的边缘和细节更加清晰自然。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async EnhanceImage(
    req: EnhanceImageRequest,
    cb?: (error: string, rep: EnhanceImageResponse) => void
  ): Promise<EnhanceImageResponse> {
    return this.request("EnhanceImage", req, cb)
  }

  /**
     * 传入一张图片，可以识别图片中包含的人物是否为公众人物，如果是，输出人物的姓名、基本信息、脸部坐标。

支持识别一张图片中存在的多个人脸，针对每个人脸，会给出与之最相似的公众人物。
>     
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
  async DetectCelebrity(
    req: DetectCelebrityRequest,
    cb?: (error: string, rep: DetectCelebrityResponse) => void
  ): Promise<DetectCelebrityResponse> {
    return this.request("DetectCelebrity", req, cb)
  }
}
