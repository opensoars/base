/**
 * n ^ p
 *
 * @return {int} r
 */
int pow(int n, int p){
  if(p == 0) return 1;

  int r = n;
  p--;

  for(int i = 0; i < p; i++)
    r*=n;
  
  return r;
}