let nome: string = "programador";

const soletrar = (nome: string): string => {
    return nome.split('').join('-');
}

console.log(soletrar(nome));
