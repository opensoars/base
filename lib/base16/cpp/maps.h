#include <stdio.h>
using namespace std;


const char* MAP16 = "0123456789abcdef";


/**
 * Example:
 * B16VALUE("f");
 * > 15
 */
int B16VALUE(char c){
  int match = -1,
      i;

  for(i = 0; i < strlen(MAP16); i++)
    if(MAP16[i] == c) match = i;
  
  return match;
}