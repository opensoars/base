#include <node.h>
#include <v8.h>
#include <iostream>
#include <string>

#include "pow.h"
#include "maps.h"

using namespace v8;
using namespace std;


/**
 * B10 JS API
 */
void B10(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  unsigned int b10 = 0,
      p;

  int i;

  if(args[0]->IsString() || args[0]->IsNumber()){
    // Converts from string|number
    String::Utf8Value js_str(args[0]);
    const char* b2 = *js_str;

    for(i = (strlen(b2) - 1), p = 0; i > -1; i--, p++)
      b10 += (b2[i] - 48) * pow(2, p);
  }
  else if(args[0]->IsObject()){
    Local<Object> array = args[0]->ToObject();

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

  String::Utf8Value js_str(args[0]);
  const char* b2 = *js_str;
  std::string b2_str = b2;
  std::string empty_bit = "0";
  std::string b16 = "";
  std::string half_byte = "";

             // Iterators
  int p_i,   // prefix
      s_i,   // string
      h_b_i, // half_byte
      b_i;   // bit
 
  int p,
      b10 = 0;

  // Prefix with 0's so we can split by 4
  if(strlen(b2)%4 != 0)
    for(p_i = 0; p_i<(4-strlen(b2)%4); p_i++)
      b2_str = empty_bit + b2_str;

  for(s_i=0; s_i < b2_str.length(); s_i+=4){
    half_byte = b2_str.substr(s_i, 4);

    b10 = 0;
    for(h_b_i = 3, p = 0; h_b_i > -1; h_b_i--, p++)
      b10 += (half_byte[h_b_i] - 48) * pow(2, p);

    b16 = b16 + MAP16[b10];
  }

  args.GetReturnValue().Set(String::NewFromUtf8(isolate, b16.c_str()));
}


void Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();

  exports->Set(String::NewFromUtf8(isolate, "10"),
      FunctionTemplate::New(isolate, B10)->GetFunction());

  exports->Set(String::NewFromUtf8(isolate, "16"),
      FunctionTemplate::New(isolate, B16)->GetFunction());
}

NODE_MODULE(b2, Init)