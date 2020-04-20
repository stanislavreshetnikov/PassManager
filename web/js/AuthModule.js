
class AuthModule{
  test(){
    alert('Hello from AuthModule.js (test)');  
  }
  test3(){
    alert('Hello from AuthModule.js (test2)');  
  }
  test2(){
      alert('Test2 из AuthModule.js')
  }
  test4(){
      alert('Test4 из AuthModule.js')
  }
}
let authModule = new AuthModule();
export {authModule};

