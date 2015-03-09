#include <node.h>
#include <v8.h>
#include <iostream>


#include "pow.h"


using namespace v8;
using namespace std;


/**
 * B10 JS API
 */
void B10(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  unsigned int b10 = 0,
      p,
      i;

  if(args[0]->IsString()){

    String::Utf8Value js_str(args[0]);
    const char* b2 = *js_str;

    for(i = (strlen(b2) - 1), p = 0; i > -1; i--, p++)
      b10 += (b2[i] - 48) * pow(2, p);
  }
  else if(args[0]->IsObject()){

    Local<Object> array  = args[0]->ToObject();

    int byte_len = array->Get(
        String::NewFromUtf8(isolate, "byteLength"))->Uint32Value();

    for(i = (byte_len-1), p = 0; i > -1; i--, p++)
      b10 += array->Get(i)->Uint32Value() * pow(2, p);
  }

  args.GetReturnValue().Set(Number::New(isolate, b10));
}

void B16(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  

  //args.GetReturnValue().Set(String::NewFromUtf8(isolate, b16));
}


void Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();

  exports->Set(String::NewFromUtf8(isolate, "b10"),
      FunctionTemplate::New(isolate, B10)->GetFunction());

  exports->Set(String::NewFromUtf8(isolate, "b16"),
      FunctionTemplate::New(isolate, B16)->GetFunction());
}

NODE_MODULE(b2, Init)
