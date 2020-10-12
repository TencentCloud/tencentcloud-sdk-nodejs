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
const AbstractModel = require("../../common/abstract_model");

/**
 * InvokeService请求参数结构体
 * @class
 */
class InvokeServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待调用的服务ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 要调用服务的状态：0表示调试版本，1表示上线版本
         * @type {number || null}
         */
        this.ServiceStatus = null;

        /**
         * 用于测试的文档的URL。
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 用于测试的文本，当此值不为空时，调用内容以此参数的值为准。
         * @type {string || null}
         */
        this.Input = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.Input = 'Input' in params ? params.Input : null;

    }
}

/**
 * DescribeInvocationResult返回参数结构体
 * @class
 */
class DescribeInvocationResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务的调用结果
         * @type {Array.<AlgorithmResult> || null}
         */
        this.Results = null;

        /**
         * 0:获取结果失败
1：结果还没有生成，继续轮询
2：获取结果成功
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new AlgorithmResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 每个算法的返回结果
 * @class
 */
class AlgorithmResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 算法ID
         * @type {string || null}
         */
        this.AlgoId = null;

        /**
         * 算法名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlgoName = null;

        /**
         * 算法返回的结果。
- 当算法类型为“OCR（1）”时，结果为文本字符串
- 当算法类型为“文本分类（2）”时，结果字符串为json对象数组：
  Class：分类结果
  Confidence：置信度
- 算法类型为“情感分析（3）”时，结果字符串为json对象：
  Positive：正面情感概率
  Negative：负面情感概率
  Neutral：中性情感概率
- 当算法类型为“合同要素抽取（4）”时，结果字符串为json对象数组：
  NodeName：一级要素名称
  ItemName：二级要素名称
  Content：要素文本内容
- 当算法类型为“实体识别（5）”时，结果字符串为json对象数组：
  - Entity：实体类型
  - Content：实体文本内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 算法调用错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Error = null;

        /**
         * 算法类型：
1：OCR算法
2：文本分类算法
3：情感分析算法
4：合同要素抽取算法
5、实体识别算法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AlgoType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlgoId = 'AlgoId' in params ? params.AlgoId : null;
        this.AlgoName = 'AlgoName' in params ? params.AlgoName : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Error = 'Error' in params ? params.Error : null;
        this.AlgoType = 'AlgoType' in params ? params.AlgoType : null;

    }
}

/**
 * InvokeService返回参数结构体
 * @class
 */
class InvokeServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInvocationResult请求参数结构体
 * @class
 */
class DescribeInvocationResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用id，为调用InvokeService接口返回的RequestId
         * @type {string || null}
         */
        this.InvokeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokeId = 'InvokeId' in params ? params.InvokeId : null;

    }
}

module.exports = {
    InvokeServiceRequest: InvokeServiceRequest,
    DescribeInvocationResultResponse: DescribeInvocationResultResponse,
    AlgorithmResult: AlgorithmResult,
    InvokeServiceResponse: InvokeServiceResponse,
    DescribeInvocationResultRequest: DescribeInvocationResultRequest,

}
