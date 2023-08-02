public class ForArray {
    public static void main(String[] args) throws Exception {

        String alunos[] = { "FELIPE", "JONAS", "JULIA", "MARCOS" };

        for (int x = 0; x < alunos.length; x++) {
            System.out.println("O aluno do índice x= " + (x + 1) + " é " + alunos[x]);
        }

        for (String aluno : alunos){
           /*a cada interação de alunos o aluno atual do índice atual vai atualizar 
           automaticamente essa variável. */ 
           System.out.println("Nome do aluno é: " + aluno);
        }

        //enquanto x for menor que o tamanho de alunos, ele continuará a execução. 
        /*
         * 
         */
    }
}
