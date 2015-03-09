#include <node.h>
#include <v8.h>
#include <iostream>

using namespace v8;
using namespace std;

int pow(int n, int p){
  if(p == 0) return 1;

  int r = n;
  p--;

  for(int i = 0; i < p; i++)
    r*=n;
  
  return r;
}

int b10(const char* b2){
  int b10 = 0,
      len = strlen(b2),
      i = len-1,
      p;

  for(p = 0; i > -1; p++, i--)
    b10 += (b2[i] - 48) * pow(2, p);
  
  return b10;
}

void B10(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  Local<Number> js_b10  = Number::New(isolate, b10("11111111"));
  args.GetReturnValue().Set(js_b10);
}

void Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();

  exports->Set(String::NewFromUtf8(isolate, "b10"),
      FunctionTemplate::New(isolate, B10)->GetFunction());
}

NODE_MODULE(b2, Init)
