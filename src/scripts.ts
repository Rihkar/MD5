// math.sum()()(1,3).sum // return 13
const math = {
    sum: () => () => () => (a:number, b:number) => ({
      sum: Number(`${a}${b}`),
    }),
  };
  
  console.log(math.sum()()()(1, 3).sum);
  
  // human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'
  const human = () => ({
    rights: [
      [],
      [],
      [
        [],
        {
  
          amendment: [{}, {}, {
            paragraph: () => 'lorem ipsum',
  
          },
          ],
        },
      ],
    ],
  
  }as any);
  
  console.log(human().rights[2][1].amendment[2].paragraph());
  

  
  const car = [
    {},
    {
      name: 'Volvo',
    },
  ];
  console.log(car[1].name);
  
  const car = { sum: () => '300000eur' };
  
  console.log(car.sum());
  
  const car = {
    model:
     { color: 'red' },
  };
  
  console.log(car.model.color);
  
  const fruit:any = [[[], 'apple']];
  console.log(fruit[0][1]);
  
  const humann = {
    name: (a:string) => a,
  };
  console.log(humann.name('Jānis'));
  
  const mathi = (a:any, b:any) => () => () => () => () => () => () => () => () => (z:any) => Math.pow(Math.pow(a, b), z);
  console.log(mathi(2, 2)()()()()()()()()(3)); 
  
  
  
  
  
  
  
  //KETIJAS MD
  
  const sumNum = (a:number, b:number):number => a + b;
  
  console.log(sumNum(1, 2));
  console.log(sumNum(1, 10));
  console.log(sumNum(99, 1));
  
  const valueType = (x:any) => typeof (x);
  
  console.log(valueType(1));
  console.log(valueType(false));
  console.log(valueType({}));
  console.log(valueType(null));
  console.log(valueType('string'));
  console.log(valueType(['array']));
  
  const equal = (a:any, b:any):boolean => a === b;
  console.log(equal(2, 3));
  console.log(equal(3, 3));
  console.log(equal(1, '1'));
  console.log(equal('10', '10'));
  
  const wordChar = (a:string, b:number):string => a.charAt(b - 1);
  console.log(wordChar('abcd', 1));
  console.log(wordChar('zyxbwpl', 5));
  console.log(wordChar('gfedcba', 3));
  
  const removeFirstThree = (a:string):string => a.slice(3);
  console.log(removeFirstThree('abcdefg'));
  console.log(removeFirstThree('1234'));
  console.log(removeFirstThree('fgedcba'));
  
  const extractLastThree = (a:string):string => a.substring(0, 3);
  console.log(extractLastThree('abcdefg'));
  console.log(extractLastThree('1234'));
  console.log(extractLastThree('fgedcba'));
  
  const divide = (a:string):string => {
    const halfNum = (a.length) / 2;
    return a.substring(0, halfNum);
  };
  console.log(divide('abcdefgh'));
  console.log(divide(('1234')));
  console.log(divide('gedcba'));
  
  const removeLastThree = (a:string):string => a.slice(0, -3);
  console.log(removeLastThree('abcdefg'));
  console.log(removeLastThree('1234'));
  console.log(removeLastThree('fgedcba'));
  
  const percentage = (num:number, per:number):number => (num / 100) * per;
  console.log(percentage(100, 50));
  console.log(percentage(10, 1));
  console.log(percentage(500, 25));
  
  const formula = (a:number, b:number, c:number, d:number, e:number, f:number):number => {
    const firstCalc = ((((a + b) - c) * d) / e);
    const secondCalc = Math.pow(firstCalc, f);
    return secondCalc;
  };
  
  console.log(formula(6, 5, 4, 3, 2, 1));
  console.log(formula(6, 2, 1, 4, 2, 3));
  console.log(formula(2, 3, 6, 4, 2, 3));