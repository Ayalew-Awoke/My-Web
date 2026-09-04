#include <SPI.h>
#include <MFRC522.h>

MFRC522 lector(10, 9); ///Creamos el objeto para el RC522

void setup()
{
  Serial.begin(9600); //Iniciamos la comunicación serial
  SPI.begin(); //Iniciamos el Bus SPI
  lector.PCD_Init(); //Inciamos el MFRC522
}

vpoid loop()
{
  //Revisamos si hay nuevas tarjetas presentes
  if (lector.PICC_IsNewCardPresent())
  {
    //Se hace la lectura de la tarjeta
    if (lector.PICC_ReadCardSerial())
    {
      Serial.println(lector.uid.uidByte[0]);
      Serial.println(lector.uid.uidByte[1]);
      Serial.println(lector.uid.uidByte[2]);
      Serial.println(lector.uid.uidByte[3]);

      lector.PICC_Halta(); //Termina la lectura IsNewCard vuelve a false
    }
  }
}
