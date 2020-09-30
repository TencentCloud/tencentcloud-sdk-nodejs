import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryFaceMorphJobResponse, CancelFaceMorphJobResponse, SwapGenderPicRequest, SwapGenderPicResponse, MorphFaceRequest, ChangeAgePicResponse, ChangeAgePicRequest, CancelFaceMorphJobRequest, FaceCartoonPicRequest, QueryFaceMorphJobRequest, FaceCartoonPicResponse, MorphFaceResponse } from "./ft_models";
/**
 * ft client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 撤销人像渐变任务请求
     */
    CancelFaceMorphJob(req: CancelFaceMorphJobRequest, cb?: (error: string, rep: CancelFaceMorphJobResponse) => void): Promise<CancelFaceMorphJobResponse>;
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸性别转换的图片。男变女可实现美颜、淡妆、加刘海和长发的效果；女变男可实现加胡须、变短发的效果。
     */
    SwapGenderPic(req: SwapGenderPicRequest, cb?: (error: string, rep: SwapGenderPicResponse) => void): Promise<SwapGenderPicResponse>;
    /**
     * 输入2-5张人脸照片，生成一段以人脸为焦点的渐变视频或GIF图，支持自定义图片播放速度、视频每秒传输帧数，可用于短视频、表情包、创意H5等应用场景，丰富静态图片的玩法。
     */
    MorphFace(req: MorphFaceRequest, cb?: (error: string, rep: MorphFaceResponse) => void): Promise<MorphFaceResponse>;
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸变老或变年轻的图片，支持实现人脸不同年龄的变化。
     */
    ChangeAgePic(req: ChangeAgePicRequest, cb?: (error: string, rep: ChangeAgePicResponse) => void): Promise<ChangeAgePicResponse>;
    /**
     * 查询人像渐变处理进度
     */
    QueryFaceMorphJob(req: QueryFaceMorphJobRequest, cb?: (error: string, rep: QueryFaceMorphJobResponse) => void): Promise<QueryFaceMorphJobResponse>;
    /**
     * 输入一张人脸照片，生成个性化的二次元动漫形象，可用于打造个性头像、趣味活动、特效类应用等场景，提升社交娱乐的体验。
     */
    FaceCartoonPic(req: FaceCartoonPicRequest, cb?: (error: string, rep: FaceCartoonPicResponse) => void): Promise<FaceCartoonPicResponse>;
}
