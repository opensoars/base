#include <node.h>
#include <v8.h>

using namespace v8;

void Init(Handle<Object> exports) {
  Isolate* isolate = Isolate::GetCurrent();
}

NODE_MODULE(b2, Init)
