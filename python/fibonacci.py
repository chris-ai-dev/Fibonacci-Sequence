def fibonacci(n):
  if n == 1 or n == 0:
    return n
  fib_list = [0,1]
  for i in range(n-1):
    fib_list.append(fib_list[i] + fib_list[i+1])
  return fib_list[n]
    
#print(fibonacci(11))
