public class SmarTV {
    boolean energia = false;
    int volume = 1;
    int canal = 1;

    public void ligar() {
        if (!energia) {
            energia = true;
            System.out.println("SmarTV ligada");
        }

        else {
            System.out.println("SmarTV já está ligada");
        }

    }

    public void desligar() {
        if (energia) {
            energia = false;
            System.out.println("SmarTV Desligada");
        }

        else {
            System.out.println("SmarTV já está desligada");
        }
    }

    public void aumentarVolume() {
        if (energia) {
            ++volume;
            System.out.println("Volume aumentado: " + volume);
        } else {
            System.out.println("Não é possível pois a televisão está desligada");
        }

    }

    public void diminuirVolume() {
        if (energia) {
            --volume;
            System.out.println("Volume diminuido: " + volume);
        }

        else {
            System.out.println("Não é possível pois a televisão está desligada");
        }
    }

    public void aumentarCanal() {
        if (energia) {
            ++canal;
            System.out.println("Canal aumentado: " + canal);
        } else {
            System.out.println("Não é possível pois a televisão está desligada");
        }

    }

    public void diminuirCanal() {
        if (energia) {
            --canal;
            System.out.println("Canal diminuido: " + volume);
        }

        else {
            System.out.println("Não é possível pois a televisão está desligada");
        }
    }

    public int mudarCanal(int numCanal){

        canal = 0;
        canal += numCanal;
        System.out.println("Canal atual: " + canal);
        return canal;
    }
}