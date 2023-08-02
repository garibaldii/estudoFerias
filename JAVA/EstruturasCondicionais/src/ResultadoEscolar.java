
public class ResultadoEscolar {

    public void Suiche(){
        
    }

    public static void main(String[] args) {

       int nota = 6;
       
        String resultado = nota >= 7 ? "Aprovado" :(nota >= 5 && nota <7 ) ? "Recuperação": "Reprovado";
        System.out.println(resultado);
        //Com conceito de operador ternário//
        /*Você já atribui o conceito diretamente a variável. Atribui um valor a ela mediante
         * uma condição, neste caso, se a nota for atendita, String resultado = "Aprovado",
         * se não, String resultado = "Reprovado". Ela também pode ser aplicada com mais de dois
         * fatores booleanos, porém dificulta um pouco o entedimento:
         * 
         * int idade = 25;
         * 
         * String status = (idade < 18)? "Menor de idade" : (idade < 60)? "Adulto" : "Idoso";
         * sysout(status);.
         */
    }




}