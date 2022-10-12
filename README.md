
```shell
node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./generated \
    --grpc_out=./generated \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./proto \
      ./proto/ping.proto
```


```shell
protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:./generated \
    -I ./proto \
      ./proto/ping.proto
```
