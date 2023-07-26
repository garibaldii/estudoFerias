public class Operadores {
    public static void main(String[] args) throws Exception {

        // (+) Operador unário de valor positivo – números são positivos sem esse
        // operador explicitamente;
        // (-) Operador unário de valor negativo – nega um número ou expressão
        // aritmética;
        // (++) Operador unário de incremento de valor – incrementa o valor em 1
        // unidade;
        // (--) Operador unário de decremento de valor – decrementa o valor em 1
        // unidade;
        // (!) Operador unário lógico de negação – nega o valor de uma expressão
        // booleana;

        // ## OPERADORES TERNÁRIOS ##//

        // /*
        // * EXEMPLO DE CONDICIONAL UTILIZANDO UMA ESTRUTURA IF/ELSE
        // * if(a==b)
        // * resultado = "verdadeiro";
        // * else
        // * resultado = "falso";
        // */

        int a, b;

        a = 6;
        b = 6;

        // MESMA CONDICIONAL, MAS DESSA VEZ, UTILIZANDO O OPERADOR CONDICIONAL TERNÁRIO
        boolean resultado = (a == b) ? true : false;
        // o "?" faz a interrogação com a primeira condição e já expressa qual será seu
        // resultado.
        // caso a condição não seja satisfeita, o ":" entra com a segunda possibilitade

        // ## OPERADORES RELACIONAIS ## //

        // == Quando desejamos verificar se uma variável é IGUAL A outra.
        // != Quando desejamos verificar se uma variável é DIFERENTE da outra.
        // > Quando desejamos verificar se uma variável é MAIOR QUE a outra.
        // >= Quando desejamos verificar se uma variável é MAIOR OU IGUAL a outra.
        // < Quando desejamos verificar se uma variável é MENOR QUE outra.
        // <= Quando desejamos verificar se uma variável é MENOR OU IGUAL a outra.

        int numero1 = 1;
        int numero2 = 3;

        boolean simNao = numero1 != numero2;

        System.out.println(numero1 + " != " + numero2 + "? " + simNao);

        String nome1 = "Matheus";

        String nome2 = new String("Matheus");

        System.out.println(nome1.equals(nome2));
        // para comparar objetos ou textos, é usado o método equals();
        // ele compara se o conteúdo dos objetos são iguais!.
        // objetos e strings usar equals!

        // ## OPERADORES LÓGICOS ##//

        // são os famosos and e or
        // and = &&;
        // or = ||;

        boolean condicao1 = true;
        boolean condicao2 = true;

        if (condicao1 && (7 > 4)) {
            System.out.println("Ambas são verdadeiras");
        }

        if (condicao2 || condicao1) {
            System.out.println("Uma delas é verdadeira");
        } 

        else {
            System.out.println("Nenhuma é verdadeira");
        }
    }

}
