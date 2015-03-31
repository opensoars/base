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

  cout << "b10" << endl;

  NanReturnValue(NanNew("ok"));
}


void Init(Handle<Object> exports) {
  exports->Set(NanNew("2"), NanNew<FunctionTemplate>(B2)->GetFunction());
  exports->Set(NanNew("10"), NanNew<FunctionTemplate>(B10)->GetFunction());
}

NODE_MODULE(b16, Init)