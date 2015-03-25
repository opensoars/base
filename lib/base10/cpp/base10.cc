#include <nan.h>

#include <iostream>
#include <string>
#include <stdio.h>
#include <math.h>

#include "maps.h"

using namespace v8;
using namespace std;


NAN_METHOD(B2){
  NanScope();

  unsigned int b10 = args[0]->Uint32Value();
  string b2 = "";
  string new_b2 = "";

  while(b10 != 0){

    new_b2 += (b10 % 2);
    new_b2 += b2;


    b2 = new_b2;
    b10 = floor(b10 / 2);
  }

  NanReturnValue(NanNew(b2));
}

NAN_METHOD(B16){
  NanScope();
}


void Init(Handle<Object> exports) {
  exports->Set(NanNew("2"), NanNew<FunctionTemplate>(B2)->GetFunction());
  exports->Set(NanNew("16"), NanNew<FunctionTemplate>(B16)->GetFunction());
}

NODE_MODULE(b10, Init)