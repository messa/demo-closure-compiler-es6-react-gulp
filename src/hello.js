
import  bar from './bar';

class Hello {

    foo() {
      return 42;
    }

}

function hello() {
  const h = new Hello();
  let x = h.foo();
  x += bar();
  return (
    <div>
      {x}
    </div>
  );
}

window['hx'] = hello;
