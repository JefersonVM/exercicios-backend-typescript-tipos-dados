const numeros = [1, 5, 2];

const tabuada = (array: number[]) => {
  array.forEach((numero) => {
    for (let i = 0; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }

    console.log(`---------------\n`);
  });
};

tabuada(numeros);
