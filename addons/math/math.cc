#include <node.h>
#include <v8.h>
#include <iostream>

using namespace v8;
using namespace std;

void Cout(const v8::FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  cout << "c++ cout\n";
}


void GetString(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "String!"));
}

void Add(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  if(args.Length() < 2){
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  double sum = args[0]->NumberValue() + args[1]->NumberValue();
  Local<Number> js_num = Number::New(isolate, sum);

  args.GetReturnValue().Set(js_num);
}

void Pow(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  if(args.Length() < 2){
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  double n = args[0]->NumberValue();
  double p = args[1]->NumberValue() - 1;
  double r = n;
  
  for(double i = 0; i < p; i++){
    r*=n;
  }

  Local<Number> js_num = Number::New(isolate, r);

  args.GetReturnValue().Set(js_num);
}

void Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();

  exports->Set(String::NewFromUtf8(isolate, "cout"),
      FunctionTemplate::New(isolate, Cout)->GetFunction());

  exports->Set(String::NewFromUtf8(isolate, "getString"),
      FunctionTemplate::New(isolate, GetString)->GetFunction());

  exports->Set(String::NewFromUtf8(isolate, "add"),
      FunctionTemplate::New(isolate, Add)->GetFunction());

  exports->Set(String::NewFromUtf8(isolate, "pow"),
      FunctionTemplate::New(isolate, Pow)->GetFunction());
}

NODE_MODULE(test, Init)
