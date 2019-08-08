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
 * 三元组查询返回的元记录
 * @class
 */
class TripleContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 实体名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实体order
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 实体流行度
         * @type {number || null}
         */
        this.Popular = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Popular = 'Popular' in params ? params.Popular : null;

    }
}

/**
 * DescribeEntity请求参数结构体
 * @class
 */
class DescribeEntityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体名称
         * @type {string || null}
         */
        this.EntityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

    }
}

/**
 * DescribeTriple请求参数结构体
 * @class
 */
class DescribeTripleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 三元组查询条件
         * @type {string || null}
         */
        this.TripleCondition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TripleCondition = 'TripleCondition' in params ? params.TripleCondition : null;

    }
}

/**
 * DescribeTriple返回参数结构体
 * @class
 */
class DescribeTripleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回三元组信息
         * @type {Array.<TripleContent> || null}
         */
        this.Content = null;

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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TripleContent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRelation返回参数结构体
 * @class
 */
class DescribeRelationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回查询实体间的关系
         * @type {Array.<EntityRelationContent> || null}
         */
        this.Content = null;

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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new EntityRelationContent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回的实体关系查询结果详细内容
 * @class
 */
class EntityRelationContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体关系查询返回关系的object
         * @type {Array.<EntityRelationObject> || null}
         */
        this.Object = null;

        /**
         * 实体关系查询返回关系的subject
         * @type {Array.<EntityRelationSubject> || null}
         */
        this.Subject = null;

        /**
         * 实体关系查询返回的关系名称
         * @type {string || null}
         */
        this.Relation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Object) {
            this.Object = new Array();
            for (let z in params.Object) {
                let obj = new EntityRelationObject();
                obj.deserialize(params.Object[z]);
                this.Object.push(obj);
            }
        }

        if (params.Subject) {
            this.Subject = new Array();
            for (let z in params.Subject) {
                let obj = new EntityRelationSubject();
                obj.deserialize(params.Subject[z]);
                this.Subject.push(obj);
            }
        }
        this.Relation = 'Relation' in params ? params.Relation : null;

    }
}

/**
 * DescribeRelation请求参数结构体
 * @class
 */
class DescribeRelationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入第一个实体
         * @type {string || null}
         */
        this.LeftEntityName = null;

        /**
         * 输入第二个实体
         * @type {string || null}
         */
        this.RightEntityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LeftEntityName = 'LeftEntityName' in params ? params.LeftEntityName : null;
        this.RightEntityName = 'RightEntityName' in params ? params.RightEntityName : null;

    }
}

/**
 * 实体关系查询返回的Object类型
 * @class
 */
class EntityRelationObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * object对应id
         * @type {Array.<string> || null}
         */
        this.Id = null;

        /**
         * object对应name
         * @type {Array.<string> || null}
         */
        this.Name = null;

        /**
         * object对应popular值
         * @type {Array.<number> || null}
         */
        this.Popular = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Popular = 'Popular' in params ? params.Popular : null;

    }
}

/**
 * DescribeEntity返回参数结构体
 * @class
 */
class DescribeEntityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回查询实体相关信息
         * @type {string || null}
         */
        this.Content = null;

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
        this.Content = 'Content' in params ? params.Content : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实体关系查询返回Subject
 * @class
 */
class EntityRelationSubject extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subject对应id
         * @type {Array.<string> || null}
         */
        this.Id = null;

        /**
         * Subject对应name
         * @type {Array.<string> || null}
         */
        this.Name = null;

        /**
         * Subject对应popular
         * @type {Array.<number> || null}
         */
        this.Popular = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Popular = 'Popular' in params ? params.Popular : null;

    }
}

module.exports = {
    TripleContent: TripleContent,
    DescribeEntityRequest: DescribeEntityRequest,
    DescribeTripleRequest: DescribeTripleRequest,
    DescribeTripleResponse: DescribeTripleResponse,
    DescribeRelationResponse: DescribeRelationResponse,
    EntityRelationContent: EntityRelationContent,
    DescribeRelationRequest: DescribeRelationRequest,
    EntityRelationObject: EntityRelationObject,
    DescribeEntityResponse: DescribeEntityResponse,
    EntityRelationSubject: EntityRelationSubject,

}
