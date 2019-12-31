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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const TextTranslateBatchRequest = models.TextTranslateBatchRequest;
const ImageTranslateResponse = models.ImageTranslateResponse;
const SpeechTranslateResponse = models.SpeechTranslateResponse;
const ImageRecord = models.ImageRecord;
const LanguageDetectRequest = models.LanguageDetectRequest;
const TextTranslateBatchResponse = models.TextTranslateBatchResponse;
const LanguageDetectResponse = models.LanguageDetectResponse;
const ItemValue = models.ItemValue;
const TextTranslateResponse = models.TextTranslateResponse;
const SpeechTranslateRequest = models.SpeechTranslateRequest;
const ImageTranslateRequest = models.ImageTranslateRequest;
const TextTranslateRequest = models.TextTranslateRequest;


/**
 * tmt client
 * @class
 */
class TmtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tmt.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * 提供中文到英文、英文到中文的等多种语言的文本内容翻译服务， 经过大数据语料库、多种解码算法、翻译引擎深度优化，在新闻文章、生活口语等不同语言场景中都有深厚积累，翻译结果专业评价处于行业领先水平。<br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源 部分。

     * @param {TextTranslateRequest} req
     * @param {function(string, TextTranslateResponse):void} cb
     * @public
     */
    TextTranslate(req, cb) {
        let resp = new TextTranslateResponse();
        this.request("TextTranslate", req, resp, cb);
    }

    /**
     * 提供中文到英文、英文到中文两种语言的图片翻译服务，可自动识别图片中的文本内容并翻译成目标语言，识别后的文本按行翻译，后续会提供可按段落翻译的版本。<br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源 部分。
     * @param {ImageTranslateRequest} req
     * @param {function(string, ImageTranslateResponse):void} cb
     * @public
     */
    ImageTranslate(req, cb) {
        let resp = new ImageTranslateResponse();
        this.request("ImageTranslate", req, resp, cb);
    }

    /**
     * 本接口提供音频内文字识别 + 翻译功能，目前开放中英互译的语音翻译服务。
待识别和翻译的音频文件可以是 pcm、mp3、amr和speex 格式，采样率要求16kHz、位深16bit、单声道，音频内语音清晰。<br/>
如果采用流式传输的方式，要求每个分片时长200ms~500ms；如果采用非流式的传输方式，要求音频时长不超过8s。注意最后一个分片的IsEnd参数设置为1。<br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源部分。

     * @param {SpeechTranslateRequest} req
     * @param {function(string, SpeechTranslateResponse):void} cb
     * @public
     */
    SpeechTranslate(req, cb) {
        let resp = new SpeechTranslateResponse();
        this.request("SpeechTranslate", req, resp, cb);
    }

    /**
     * 文本翻译的批量接口
     * @param {TextTranslateBatchRequest} req
     * @param {function(string, TextTranslateBatchResponse):void} cb
     * @public
     */
    TextTranslateBatch(req, cb) {
        let resp = new TextTranslateBatchResponse();
        this.request("TextTranslateBatch", req, resp, cb);
    }

    /**
     * 可自动识别文本内容的语言种类，轻量高效，无需额外实现判断方式，使面向客户的服务体验更佳。 <br />
提示：对于一般开发者，我们建议优先使用SDK接入简化开发。SDK使用介绍请直接查看 5. 开发者资源 部分。
     * @param {LanguageDetectRequest} req
     * @param {function(string, LanguageDetectResponse):void} cb
     * @public
     */
    LanguageDetect(req, cb) {
        let resp = new LanguageDetectResponse();
        this.request("LanguageDetect", req, resp, cb);
    }


}
module.exports = TmtClient;
