public static void display(int[] a)
{
    StringBuilder sb = new StringBuilder();

    for(int val: a){
      sb.append(val + " ");
    }
    System.out.println(sb);
  }

 public static void reverse(int a[], int i, int j)
 {
     int li = i;
     int ri = j;
     while(li<ri){
         int temp =a[li];
         a[li]=a[ri];
         a[ri]=temp;
         
         li++;
         ri--;
     }
 }

function reverse(a,i,j)
{
    let li=i
    let ri=j
    while(li<ri)
    {
        let temp=a[li]
        a[li]=a[ri]
        a[ri]=temp

        li++
        ri--
    }
}


function rotate(a,k)
{
    let k=k%a.length
    if(k<0)
    {
        k=k+a.length
    }
    reverse(a,0,a.length-k-1)
    reverse(a,a.length-k,a.length-1)
    reverse(a,0,a.length-1)
}

function processData(input)
{
   
    let inputArr=input.split("\n")
    let n=Number(inputArr[0])
    let number=Number(inputArr[1])
    rotate(number, k);
    display(number);
 }