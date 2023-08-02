package Desafio4;

import java.util.Scanner;

public class ProcessoSeletivo {

     int baseSalarial = 2000;

    public static void contratar(int pretencaoSalarial) {
        if (this.baseSalarial > pretencaoSalarial) {
            System.out.println("LIGAR PARA O CANDIDATO");
        } else if (this.baseSalarial == pretencaoSalarial) {
            System.out.println("LIGAR PARA O CANDIDATO COM CONTRA PROPOSTA");
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int pretencaoSalarial = input.nextInt();

        contratar(pretencaoSalarial);

    }
}