public class Usuario {

    public static void main(String[] args) {
        SmarTV smarTV = new SmarTV();

        smarTV.ligar();


        smarTV.aumentarVolume();
        smarTV.aumentarVolume();
        smarTV.aumentarVolume();
        smarTV.aumentarVolume();
        smarTV.aumentarVolume();

        smarTV.diminuirVolume();

        smarTV.mudarCanal(30);

        smarTV.aumentarCanal();
        smarTV.aumentarCanal();
        smarTV.aumentarCanal();
        smarTV.aumentarCanal();
        smarTV.aumentarCanal();



        smarTV.desligar();
    }

}