class livros {
    genero = 'açao'
    autor = 'lucas'
    publicoAlvo = 'jovens'
    estiloNarrativo = 'primeira pessoa'
    tema = 'guerra'
    protagonista = 'anti-heroi'
    complexidade = 'simples'
    final = 'tragico'
    abrir(){
    console.log('Livro aberto');
}
break(){
    console.log('Livro fechado');
}
}
const livro = new livros();
 livro.abrir();
 livro.break();