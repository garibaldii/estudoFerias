public class Comentarios {
    public static void main(String[] args) {

        // Olá, sou um comentário em linha única
        /*
         * eu sou um
         * comentário que pode
         * ser feito em várias
         * linhas
         */
    }

    public void metodo() {
        /**
         * Estas duas estrelinhas acima
         * é para identificar que você
         * pretende elaborar um comentário
         * a nível de documentação.
         * Que incrível !!!
         * 
         * @author Matheus
         */
    }

}
// javadoc -encoding UTF-8 -docencoding ISO-8859-1  -d ../docs  src/*.java 