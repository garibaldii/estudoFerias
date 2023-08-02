// Modo condicional convencional
public class PlanoOperadora {
	public static void main(String[] args) {

		String plano = "M";

        switch (plano){
            case "T":{
                System.out.println("5Gb Youtube");
                
            }
            
            case "M":{
                System.out.println("Whats e Intagram gr\u00E1tis");
                
            }

            case "B":{
                System.out.println("BASIC: 100 minutos de liga\u00E7\u00E3o");
                break;
                
            }

            default:
                System.out.println("Plano inexistente!");


        }
		
	}
}