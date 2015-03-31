#include <nan.h>

#include <iostream>
#include <string>
#include <sstream>
#include <stdio.h>
#include <math.h>

#include "maps.h"

using namespace v8;
using namespace std;

NAN_METHOD(B2){
  NanScope();

  cout << "b2" << endl;

  NanReturnValue(NanNew("ok"));
}

NAN_METHOD(B10){
  NanScope();

  unsigned int b10 = 0,
      p;

  int i;

  if(args[0]->IsString()){
    NanUtf8String js_str(args[0]);
    const char* b16 = *js_str;

    for(i = (strlen(b16) -1), p = 0; i > -1; i--, p++)
      b10 += B16VALUE(b16[i]) * pow(16, p);
  }
  else if(args[0]->IsObject()){
    // ...
  }

  NanReturnValue(NanNew(b10));
}


void Init(Handle<Object> exports) {
  exports->Set(NanNew("2"), NanNew<FunctionTemplate>(B2)->GetFunction());
  exports->Set(NanNew("10"), NanNew<FunctionTemplate>(B10)->GetFunction());
}

NODE_MODULE(b16, Init)