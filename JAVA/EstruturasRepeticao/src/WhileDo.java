import java.util.concurrent.ThreadLocalRandom;

public class WhileDo {

    public static void main(String[] args) {

        double mesada = 50.0;
        while (mesada > 0) {
            Double valorDoce = valorAleatorio();
            
            if (valorDoce > mesada)
                valorDoce = mesada;
            //isso é para que não retorne um número negativo. Para que o último doce 
            //não sobresaia sobre o valor total da mesada e retorne um núm negativo.
            System.out.println("Doce do valor: " + valorDoce + " Adicionado no carrinho");
            mesada = mesada - valorDoce;
        }
        System.out.println("Mesada:" + mesada);
        System.out.println("Joãozinho gastou toda a sua mesada em doces");

    }

    private static double valorAleatorio() {
        return ThreadLocalRandom.current().nextDouble(2, 8);
    }
}
