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

  unsigned int b10 = args[0]->Uint32Value();
  string b2 = "";

  while(b10 != 0){
    b2 = static_cast<ostringstream*>(
        &(ostringstream() << b10 % 2) )->str() + b2;

    b10 = floor(b10 / 2);
  }

  NanReturnValue(NanNew(b2));
}

NAN_METHOD(B16){
  NanScope();

  unsigned int b10 = args[0]->Uint32Value();
  string b16 = "";

  float next_num;
  int char_index;

  while(b10 > 0){
    next_num = b10 / 16.0; 
    char_index = (next_num - floor(next_num)) * 16;
    b16 = MAP16[char_index] + b16;
    b10 = floor(next_num);
  }

  NanReturnValue(NanNew(b16));
}


void Init(Handle<Object> exports) {
  exports->Set(NanNew("2"), NanNew<FunctionTemplate>(B2)->GetFunction());
  exports->Set(NanNew("16"), NanNew<FunctionTemplate>(B16)->GetFunction());
}

NODE_MODULE(b10, Init)