#include <node.h>
#include <v8.h>
#include <iostream>


#include "pow.h"


using namespace v8;
using namespace std;


/**
 *
 */
int strToB10(const char* b2){
  int b10 = 0,
      len = strlen(b2),
      i = len-1,
      p;

  for(p = 0; i > -1; p++, i--)
    b10 += (b2[i] - 48) * pow(2, p);
  
  return b10;
}

/**
 * 
 */
int arrToB10(int* pointer){
  int b10 = 0;

  cout << "arrToB10 pointer value: " << *pointer << endl;

  return b10;
}

/**
 * B10 JS API
 */
void B10(const v8::FunctionCallbackInfo<Value>& args){
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  if(args[0]->IsString()){
    String::Utf8Value js_str(args[0]);
    const char* str = *js_str;

    Local<Number> js_b10 = Number::New(isolate, strToB10(str));
    args.GetReturnValue().Set(js_b10);
  }
  else{

    Local<Object>  array  = args[0]->ToObject();
    Handle<Object> buffer = array->Get(
        String::NewFromUtf8(isolate, "buffer"))->ToObject();
    unsigned int offset = array->Get(
        String::NewFromUtf8(isolate, "byteOffset"))->Uint32Value();
    int length = array->Get(
        String::NewFromUtf8(isolate, "byteLength"))->Uint32Value();

    //Local<Number> js_b10 = Number::New(isolate, arrToB10(*array));
    //args.GetReturnValue().Set(js_b10);

/*
    int var = 25;
    int* var_pointer = &var;
    cout << "var_pointer: " << var_pointer << "\n";

    int var = 25;
    int* var_pointer = &var;
    arrToB10(var_pointer);
*/

    int t;
    for(int i = 0; i < length; i++){
      t = array->Get(i)->Uint32Value();
      cout << "t: " << t << endl;
    }


/*
    Local<Object> array  = args[0]->ToObject();
    Local<Number> js_b10 = Number::New(isolate, arrToB10(*array));
    args.GetReturnValue().Set(js_b10);
*/
    //arrToB10(array);

    //int p = &array;

/*
    Local<Object> array  = args[0]->ToObject();
    Local<Number> js_b10 = Number::New(isolate, arrToB10(*array));
    args.GetReturnValue().Set(js_b10);
*/


    /*int t;
    for(int i = 0; i < length; i++){
      t = array->Get(i)->Uint32Value();
      cout << "t: " << t << "\n";
    }

    cout << "offset: " << offset << "\n";
    cout << "length: " << length << "\n";*/
  }


}

void Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();

  exports->Set(String::NewFromUtf8(isolate, "b10"),
      FunctionTemplate::New(isolate, B10)->GetFunction());
}

NODE_MODULE(b2, Init)
