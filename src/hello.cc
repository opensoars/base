#include <node.h>

using namespace v8;

void Method(const FunctionCallbackInfo<value>& args){
  Isolate* isolate = Isolate::getCurrent();
  HandleScope scope(isolate);

  args.getReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}

void init(Handle<Object> exports){
  NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(addon, init)