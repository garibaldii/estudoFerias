package matheus.primeiraSemana;
//nome do arquivo MinhaClasse.java//
// -------------V-----------------//
public class MinhaClasse {

    public static void main(String[] args) {

        //## VARIÁVEIS ##//

        // Variáveis maiúsculas são consideradas final e não podem receber nenhum tipo
        // de alteração.//
        //Sempre importante ter nomes de variáveis o mais intuitíveis possível;//
        //Sempre relacionando com sua tipagem específica//
        String meuNome = "Matheus";

        int anoFabricacao = 2022;   

        anoFabricacao = 2019;

        boolean verdadeira = true;
    

        String primeiroNome = "Matheus";

        String segundoNome = "Garibaldi";

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);

        System.out.print(nomeCompleto);
    }


    //## MÉTODOS ##//

    //para declarar um método é necessário indicar o tipoDeRetorno, nomeObjetivo (infinitivo) e seus parâmetros(args);
    public static String nomeCompleto(String primeiroNome, String segundoNome){
        return "Resultado do método " + primeiroNome.concat(" ").concat(segundoNome);
    }


}
