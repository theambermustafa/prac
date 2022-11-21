Async is when you do not want the data processing to be in sync with other processes, i.e. A, B, C execution
Does not need to be in order
B -> A -> C or A -> C -> B etc. any order of execution is possible.
In case of sycn: A -> B -> C only possible

In case of callback.js, we cannot see Post Three. 
Reason: This is because createPost took more time in getting completed than getPosts