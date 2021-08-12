### CLS Node SDK Demo
---


### 注意事项

js版本的pb文件和其他语言的不太一样， 多增加 [jstype = JS_STRING]，来解决js proto int64的问题。

```
syntax = "proto2";

package cls;

message Log
{
    required int64 time = 1 [jstype = JS_STRING]; 
    message Content
    {
        required string key = 1;
        required string value = 2;
    }
    repeated Content contents= 2;
}

message LogTag
{
    required string key       = 1;
    required string value     = 2;
}

message LogGroup
{
    repeated Log logs= 1;
    optional string contextFlow= 2;
    optional string filename = 3;
    optional string source = 4;
    repeated LogTag logTags = 5;
}

message LogGroupList
{
    repeated LogGroup logGroupList = 1;
}
```

### 运行

1、 npm install 
2、 npm run start




